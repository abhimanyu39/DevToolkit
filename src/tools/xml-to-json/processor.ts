export function xmlToJson(xml: string): string {
  const parser = new DOMParser();
  const doc = parser.parseFromString(xml, "text/xml");
  const errorNode = doc.querySelector("parsererror");
  if (errorNode) throw new Error("Invalid XML: " + errorNode.textContent);

  function nodeToObj(node: Element): unknown {
    const obj: Record<string, unknown> = {};
    // attributes
    if (node.attributes.length > 0) {
      obj["@attributes"] = {};
      for (let i = 0; i < node.attributes.length; i++) {
        const attr = node.attributes[i];
        (obj["@attributes"] as Record<string, string>)[attr.name] = attr.value;
      }
    }
    // children
    for (let i = 0; i < node.childNodes.length; i++) {
      const child = node.childNodes[i];
      if (child.nodeType === 3) { // text
        const text = child.textContent?.trim();
        if (text) {
          if (Object.keys(obj).length === 0) return text;
          obj["#text"] = text;
        }
      } else if (child.nodeType === 1) { // element
        const childObj = nodeToObj(child as Element);
        const name = child.nodeName;
        if (obj[name]) {
          if (!Array.isArray(obj[name])) obj[name] = [obj[name]];
          (obj[name] as unknown[]).push(childObj);
        } else {
          obj[name] = childObj;
        }
      }
    }
    return Object.keys(obj).length === 0 ? "" : obj;
  }

  const result = { [doc.documentElement.nodeName]: nodeToObj(doc.documentElement) };
  return JSON.stringify(result, null, 2);
}

export function jsonToXml(jsonStr: string): string {
  const data = JSON.parse(jsonStr);

  function objToXml(obj: unknown, nodeName?: string): string {
    if (typeof obj === "string" || typeof obj === "number" || typeof obj === "boolean") {
      return nodeName ? `<${nodeName}>${obj}</${nodeName}>` : String(obj);
    }
    if (Array.isArray(obj)) {
      return obj.map((item) => objToXml(item, nodeName)).join("\n");
    }
    if (typeof obj === "object" && obj !== null) {
      const record = obj as Record<string, unknown>;
      let attrs = "";
      let children = "";
      for (const [key, value] of Object.entries(record)) {
        if (key === "@attributes") {
          const attrObj = value as Record<string, string>;
          attrs = Object.entries(attrObj).map(([k, v]) => ` ${k}="${v}"`).join("");
        } else if (key === "#text") {
          children += String(value);
        } else {
          children += objToXml(value, key);
        }
      }
      if (nodeName) return `<${nodeName}${attrs}>${children}</${nodeName}>`;
      return children;
    }
    return "";
  }

  let xml = '<?xml version="1.0" encoding="UTF-8"?>\n';
  if (typeof data === "object" && data !== null) {
    const keys = Object.keys(data);
    if (keys.length === 1) {
      xml += objToXml(data[keys[0]], keys[0]);
    } else {
      xml += objToXml(data, "root");
    }
  }
  return xml;
}
