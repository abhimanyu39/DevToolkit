import type { ToolDefinition } from "./types";

// Formatters
import { jsonFormatterConfig } from "@/tools/json-formatter/config";
import { htmlMinifierConfig } from "@/tools/html-minifier/config";
import { sqlFormatterConfig } from "@/tools/sql-formatter/config";
import { cssBeautifierConfig } from "@/tools/css-beautifier/config";

// Converters
import { base64Config } from "@/tools/base64-encoder-decoder/config";
import { urlEncoderConfig } from "@/tools/url-encoder-decoder/config";
import { yamlToJsonConfig } from "@/tools/yaml-to-json/config";
import { csvToJsonConfig } from "@/tools/csv-to-json/config";
import { xmlToJsonConfig } from "@/tools/xml-to-json/config";
import { markdownPreviewConfig } from "@/tools/markdown-preview/config";

// Generators
import { passwordGeneratorConfig } from "@/tools/password-generator/config";
import { uuidGeneratorConfig } from "@/tools/uuid-generator/config";
import { loremIpsumConfig } from "@/tools/lorem-ipsum-generator/config";
import { qrCodeConfig } from "@/tools/qr-code-generator/config";
import { cssGradientConfig } from "@/tools/css-gradient-generator/config";
import { colorPaletteConfig } from "@/tools/color-palette-generator/config";

// Testers & Validators
import { regexTesterConfig } from "@/tools/regex-tester/config";
import { jwtDecoderConfig } from "@/tools/jwt-decoder/config";
import { jsonValidatorConfig } from "@/tools/json-validator/config";
import { cronParserConfig } from "@/tools/cron-expression-parser/config";

export const toolRegistry: ToolDefinition[] = [
  // Formatters
  jsonFormatterConfig,
  htmlMinifierConfig,
  sqlFormatterConfig,
  cssBeautifierConfig,
  // Converters
  base64Config,
  urlEncoderConfig,
  yamlToJsonConfig,
  csvToJsonConfig,
  xmlToJsonConfig,
  markdownPreviewConfig,
  // Generators
  passwordGeneratorConfig,
  uuidGeneratorConfig,
  loremIpsumConfig,
  qrCodeConfig,
  cssGradientConfig,
  colorPaletteConfig,
  // Testers & Validators
  regexTesterConfig,
  jwtDecoderConfig,
  jsonValidatorConfig,
  cronParserConfig,
];
