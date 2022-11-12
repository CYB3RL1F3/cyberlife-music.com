import fs from "fs";
import path from "path";

const replacer = (match: string, value: string) => {
  return value.toLocaleUpperCase();
};

const snakeToCamelCase = (value: string) => {
  return value.replace(/_(.)/gim, replacer).replace(/(\sId:)/g, " _id:");
};

const run = () => {
  const typeFilesFolder = path.resolve(
    __dirname,
    "..",
    path.join("app", "types", "gql")
  );
  const typeFiles = fs.readdirSync(typeFilesFolder);
  typeFiles.forEach((fileName) => {
    const file = path.resolve(typeFilesFolder, fileName);
    const buffer = fs.readFileSync(file, "utf-8");
    if (buffer) {
      const content = snakeToCamelCase(buffer);
      fs.writeFileSync(file, content, "utf-8");
    }
  });
  process.exit(0);
};

run();
