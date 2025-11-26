import type { ErrorPageProps } from './ErrorPage.types';

const ErrorPage = ({
  code,
  message = 'A fatal exception occurred',
  extra,
}: ErrorPageProps) => {
  return (
    <div className="flex flex-col items-center justify-center m-8 o-2">
      <div className="flex justify-center w-full gap-4 leading-8">
        <h1 className="font-semibold text-center text-large">Error {code}</h1>
      </div>
      <p className="w-full p-0 m-0 text-center text-semilarge">{message}</p>
      <p className="mb-8 font-bold text-center text-xxl">:(</p>
      {extra && <p className="text-center">{extra}</p>}
    </div>
  );
};

export default ErrorPage;
