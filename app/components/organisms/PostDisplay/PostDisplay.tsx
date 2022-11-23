import HtmlReader from "~/components/molecules/HtmlReader";
import type { PostDisplayProps } from "./PostDisplay.types";
import { clsx } from "clsx";

const PostDisplay = ({ post, className }: PostDisplayProps) => {
  if (!post?.content) return null;
  return (
    <article className="o-8">
      <HtmlReader
        className={clsx("o-2 text-sm", className)}
        value={post?.content}
      />
    </article>
  );
};

export default PostDisplay;
