declare module "*.gql" {
  import type { DocumentNode } from "@apollo/client";
  const content: DocumentNode;
  export default content;
}

declare module "*.css" {
  const content: string;
  export default content;
}

declare module "*.svg" {
  const content: string;
  export default content;
}

declare module "*.png" {
  const content: string;
  export default content;
}
