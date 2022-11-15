import type { ErrorPageProps } from "./ErrorPage.types";

const ErrorPage = ({
  code,
  message = "An exception occured",
  extra
}: ErrorPageProps) => {
  return (
    <div className="flex flex-col items-center justify-center m-8 o-8">
      <div className="flex justify-center w-full gap-4">
        <h1 className="text-center text-xxl">{code}</h1>
        <div className="w-32">
          <p className="text-gray-400 text-xxl">:(</p>
        </div>
      </div>
      <p className="w-full p-0 m-0 text-center text-md">{message}</p>
      <div className="border-b border-gray-400" />
      <p className="text-center">{extra}</p>
    </div>
  );
};

export default ErrorPage;
