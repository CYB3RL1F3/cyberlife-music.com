declare module "*.gql" {
  import { DocumentNode } from "@apollo/client";
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
