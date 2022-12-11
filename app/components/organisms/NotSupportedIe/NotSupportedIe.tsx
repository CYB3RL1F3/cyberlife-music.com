import NotSupportedPageLayout from "~/components/layouts/NotSupportedPageLayout";

const NotSupportedIe = () => {
  return (
    <NotSupportedPageLayout
      backgroundColor="bg-blue-800"
      heading="You have a crappy web browser!"
      browserText="Please remove this dangerous virus from your Windows PC and choose one of the following web browser to enjoy all
            functionalities of this website:"
    >
      <div className="w-full">
        <p className="text-lg">
          <u>Internet Explorer</u> is one of the <b>worst thing</b> that exists
          on the planet at the moment! Unfortunately, this website can't be
          supported on this !#$ browser!
        </p>
        <p className="mt-4 text-gray-300">Error code identified: 0x666666</p>
      </div>
    </NotSupportedPageLayout>
  );
};

export default NotSupportedIe;
