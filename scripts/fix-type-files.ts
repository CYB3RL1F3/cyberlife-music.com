import fs from "fs";
import path from "path";

const replacer = (_: string, value: string) => {
  return value.toLocaleUpperCase();
};

const snakeToCamelCase = (value: string) => {
  const res = value
    .replace(/_(.)/gim, replacer)
    .replace(/(\sId:)/g, " _id:")
    .replace(/_typename/g, "__typename");
  return uppercaseInterfaces(res);
};

const uppercaseInterfaces = (value: string) => {
  const regex = /\binterface ([a-z][a-zA-Z0-9_]*)/g;

  let result = value.replace(regex, (_, interfaceName) => {
    return `interface ${interfaceName
      .charAt(0)
      .toUpperCase()}${interfaceName.slice(1)}`;
  });
  const regex2 = /: ([a-z][a-zA-Z0-9_]*)/g;
  result = result.replace(regex2, (_, interfaceName) => {
    // skip basic types
    if (
      [
        "string",
        "boolean",
        "number",
        "string[]",
        "boolean[]",
        "number[]"
      ].includes(interfaceName)
    ) {
      return `: ${interfaceName}`;
    }
    return `: ${interfaceName.charAt(0).toUpperCase()}${interfaceName.slice(
      1
    )}`;
  });
  return result;
};

const run = () => {
  const typeFilesFolder = path.resolve(
    __dirname,
    "..",
    path.join("app", "types", "gql")
  );
  const typeFiles: string[] = fs.readdirSync(typeFilesFolder);
  typeFiles.forEach((fileName) => {
    const file = path.resolve(typeFilesFolder, fileName);
    const buffer = fs.readFileSync(file, "utf-8");
    if (!buffer) return;
    const content = snakeToCamelCase(buffer);
    fs.writeFileSync(file, content, "utf-8");
  });
  process.exit(0);
};

run();
