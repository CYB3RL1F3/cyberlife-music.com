import ButtonLink from "~/components/atoms/ButtonLink";
import HandlerContent from "~/components/organisms/HandlerContent";
import Loader from "~/components/organisms/Loader";
import { usePostQuery } from "~/hooks/queries/usePostQuery";
import ErrorPage from "../ErrorPage";
import PostDisplay from "~/components/organisms/PostDisplay/PostDisplay";

const AboutPage = () => {
  const postId = "5e97808d1fd049230afe9516";
  const { data, loading } = usePostQuery(postId);
  return (
    <HandlerContent
      loading={!data && loading}
      loader={
        <Loader notification="Please wait while we're chasing content..." />
      }
    >
      {data?.post ? (
        <PostDisplay className="about" post={data?.post} />
      ) : (
        <ErrorPage
          code={404}
          message="Page not found"
          extra={<ButtonLink href="/">Back to home</ButtonLink>}
        />
      )}
    </HandlerContent>
  );
};

export default AboutPage;
