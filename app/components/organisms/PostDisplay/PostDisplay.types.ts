import type { PostQueryPost } from "~/types/gql/PostQuery";

export type PostDisplayProps = {
  post?: PostQueryPost;
  className?: string;
};
