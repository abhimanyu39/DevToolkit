import yaml from "js-yaml";

export function yamlToJson(input: string, indent: number = 2): string {
  const parsed = yaml.load(input);
  return JSON.stringify(parsed, null, indent);
}

export function jsonToYaml(input: string): string {
  const parsed = JSON.parse(input);
  return yaml.dump(parsed, { indent: 2, lineWidth: -1 });
}
