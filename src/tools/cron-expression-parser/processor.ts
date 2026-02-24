interface CronParts {
  minute: string;
  hour: string;
  dayOfMonth: string;
  month: string;
  dayOfWeek: string;
}

const MONTH_NAMES = ["", "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
const DAY_NAMES = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

export function parseCron(expression: string): CronParts {
  const parts = expression.trim().split(/\s+/);
  if (parts.length !== 5) throw new Error("Cron expression must have exactly 5 fields: minute hour day-of-month month day-of-week");
  return {
    minute: parts[0],
    hour: parts[1],
    dayOfMonth: parts[2],
    month: parts[3],
    dayOfWeek: parts[4],
  };
}

function describeField(value: string, fieldName: string): string {
  if (value === "*") return `every ${fieldName}`;
  if (value.includes("/")) {
    const [, step] = value.split("/");
    return `every ${step} ${fieldName}(s)`;
  }
  if (value.includes(",")) return `${fieldName}(s) ${value}`;
  if (value.includes("-")) {
    const [start, end] = value.split("-");
    return `${fieldName}s ${start} through ${end}`;
  }
  return `at ${fieldName} ${value}`;
}

export function describeCron(expression: string): string {
  const parts = parseCron(expression);
  const descriptions: string[] = [];

  if (parts.minute === "*" && parts.hour === "*") {
    descriptions.push("Every minute");
  } else if (parts.minute === "0" && parts.hour === "*") {
    descriptions.push("Every hour");
  } else if (parts.minute !== "*" && parts.hour !== "*") {
    descriptions.push(`At ${parts.hour.padStart(2, "0")}:${parts.minute.padStart(2, "0")}`);
  } else {
    descriptions.push(describeField(parts.minute, "minute"));
    if (parts.hour !== "*") descriptions.push(describeField(parts.hour, "hour"));
  }

  if (parts.dayOfMonth !== "*") descriptions.push(describeField(parts.dayOfMonth, "day"));
  if (parts.month !== "*") {
    const monthNum = parseInt(parts.month);
    if (!isNaN(monthNum) && monthNum >= 1 && monthNum <= 12) {
      descriptions.push(`in ${MONTH_NAMES[monthNum]}`);
    } else {
      descriptions.push(describeField(parts.month, "month"));
    }
  }
  if (parts.dayOfWeek !== "*") {
    const dayNum = parseInt(parts.dayOfWeek);
    if (!isNaN(dayNum) && dayNum >= 0 && dayNum <= 6) {
      descriptions.push(`on ${DAY_NAMES[dayNum]}`);
    } else {
      descriptions.push(describeField(parts.dayOfWeek, "day of week"));
    }
  }

  return descriptions.join(", ");
}

export function getNextRuns(expression: string, count: number = 5): Date[] {
  const parts = parseCron(expression);
  const runs: Date[] = [];
  const now = new Date();
  const current = new Date(now);
  current.setSeconds(0);
  current.setMilliseconds(0);
  current.setMinutes(current.getMinutes() + 1);

  const maxIterations = 525600; // 1 year of minutes
  let iterations = 0;

  while (runs.length < count && iterations < maxIterations) {
    iterations++;
    const minute = current.getMinutes();
    const hour = current.getHours();
    const dayOfMonth = current.getDate();
    const month = current.getMonth() + 1;
    const dayOfWeek = current.getDay();

    if (
      matchField(parts.minute, minute) &&
      matchField(parts.hour, hour) &&
      matchField(parts.dayOfMonth, dayOfMonth) &&
      matchField(parts.month, month) &&
      matchField(parts.dayOfWeek, dayOfWeek)
    ) {
      runs.push(new Date(current));
    }
    current.setMinutes(current.getMinutes() + 1);
  }
  return runs;
}

function matchField(field: string, value: number): boolean {
  if (field === "*") return true;
  if (field.includes("/")) {
    const [base, step] = field.split("/");
    const stepNum = parseInt(step);
    const baseNum = base === "*" ? 0 : parseInt(base);
    return (value - baseNum) % stepNum === 0 && value >= baseNum;
  }
  if (field.includes(",")) {
    return field.split(",").some((v) => parseInt(v) === value);
  }
  if (field.includes("-")) {
    const [start, end] = field.split("-").map(Number);
    return value >= start && value <= end;
  }
  return parseInt(field) === value;
}
