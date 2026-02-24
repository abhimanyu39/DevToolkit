import { format } from "sql-formatter";

export type SqlDialect = "sql" | "mysql" | "postgresql" | "sqlite";

export function formatSql(
  input: string,
  dialect: SqlDialect = "sql",
  uppercase: boolean = true,
  indent: number = 2
): string {
  return format(input, {
    language: dialect === "sqlite" ? "sqlite" : dialect === "postgresql" ? "postgresql" : dialect === "mysql" ? "mysql" : "sql",
    keywordCase: uppercase ? "upper" : "preserve",
    tabWidth: indent,
  });
}
