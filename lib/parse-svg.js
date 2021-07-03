import parse from "rehype-parse";
import unified from "unified";

const compiler = unified().use(parse, { space: "html" });

export default function parseSvg(code) {
  return compiler.parse(code);
}
