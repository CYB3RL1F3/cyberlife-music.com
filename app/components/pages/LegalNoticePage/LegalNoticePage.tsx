import ButtonLink from '~/components/atoms/ButtonLink';
import HandlerContent from '~/components/molecules/HandlerContent';
import Loader from '~/components/molecules/Loader';
import { usePostQuery } from '~/hooks/queries/usePostQuery';
import ErrorPage from '~/components/pages/ErrorPage';
import PostDisplay from '~/components/organisms/PostDisplay/PostDisplay';

const LegalNoticePage = () => {
  const postId = '66e350123dead97226352b0c';
  const { data, loading } = usePostQuery(postId);
  return (
    <HandlerContent
      loading={!data && loading}
      loader={
        <Loader message="Please wait while we're chasing legal notices..." />
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

export default LegalNoticePage;
