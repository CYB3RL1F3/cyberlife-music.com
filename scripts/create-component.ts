import fs from "fs";
import path from "path";

const run = () => {
  const [folder, file, children, base] = process.argv.slice(2);

  if (!folder || !file) {
    console.error("You must declare a folder and a component name !!!");
    process.exit(1);
  }

  const folders = [
    "atoms",
    "molecules",
    "organisms",
    "contexts",
    "layouts",
    "pages"
  ];
  if (!folders.includes(folder)) {
    console.error(`Folder can only be one of them : ${folders.join(", ")}`);
    process.exit(1);
  }

  const hasChildren =
    children &&
    ["1", "true", "yes", "y"].includes(children.toLocaleLowerCase());

  const tag = base || "div";

  const component = `${file[0].toUpperCase()}${file.slice(1)}`;

  const root = path.resolve(
    __dirname,
    "..",
    "app",
    "components",
    folder,
    component
  );
  const typeFileSlug = `${component}.types`;
  const typeFileName = `${typeFileSlug}.ts`;
  const componentFileName = `${component}.tsx`;
  const componentFile = path.resolve(root, componentFileName);
  const typeFile = path.resolve(root, typeFileName);
  const indexFile = path.resolve(root, "index.ts");
  const componentProps = `${component}Props`;

  console.log(
    `\n* Creating component ${component} in folder ${root}${
      hasChildren ? " with children." : "."
    }\n`
  );

  const componentContent = hasChildren
    ? "{children}"
    : `@Todo implement ${component}`;

  const componentFileContent = `
  import type { ${componentProps} } from "./${typeFileSlug}";

  const ${component} = ({${
    hasChildren ? " children " : " ...props "
  }}: ${componentProps}) => {
    return <${tag}>${componentContent}</${tag}>
  }

  export default ${component};
  `;

  const typeFileContent = `${
    hasChildren ? 'import type { ReactNode } from "react";' : ""
  }
  export type ${componentProps} = {
    ${hasChildren ? "children?: ReactNode;" : ""}
  }
  `;

  const indexFileContent = `export { default } from "./${component}";
  export type { ${componentProps} } from "./${typeFileSlug}";
  `;

  try {
    fs.mkdirSync(root);
    fs.writeFileSync(typeFile, typeFileContent, "utf-8");
    fs.writeFileSync(componentFile, componentFileContent, "utf-8");
    fs.writeFileSync(indexFile, indexFileContent, "utf-8");
    process.exit(0);
  } catch (e) {
    console.log(`An exception occured while creating component ${component} : 
    
    ${e}`);
    process.exit(1);
  }
};

run();
