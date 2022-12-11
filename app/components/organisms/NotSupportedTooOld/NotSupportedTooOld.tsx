import NotSupportedPageLayout from "~/components/layouts/NotSupportedPageLayout";

const NotSupportedTooOld = () => {
  return (
    <NotSupportedPageLayout
      backgroundColor="bg-stone-800"
      heading="Your browser is too old!"
      browserText="Please update your browser or choose one of those followings:"
    >
      <div className="w-full">
        <p className="text-md md:text-lg">
          Your web browser actually doesn't support all HTML5 functionalities
          required to run this website with comfort on your computer!
        </p>
      </div>
    </NotSupportedPageLayout>
  );
};

export default NotSupportedTooOld;
