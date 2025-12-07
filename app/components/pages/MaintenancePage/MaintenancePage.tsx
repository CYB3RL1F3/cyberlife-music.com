import type { MaintenancePageProps } from './MaintenancePage.types';

const MaintenancePage = ({
  message = 'The website is under maintenance. Please check back later.',
  extra,
}: MaintenancePageProps) => {
  return (
    <div className="flex flex-col items-center justify-center m-8 o-8">
      <div className="flex justify-center w-full gap-4 leading-8">
        <h1 className="font-semibold text-center text-large">Maintenance!</h1>
      </div>
      <p className="w-full p-0 m-0 text-center text-3xl">{message}</p>
      <p className="mb-8 font-bold text-center text-xxl">👷</p>
      {extra && <p className="text-center">{extra}</p>}
    </div>
  );
};

export default MaintenancePage;
