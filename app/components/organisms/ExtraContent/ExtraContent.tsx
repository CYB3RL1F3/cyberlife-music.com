import PlayerWidget from "~/components/organisms/PlayerWidget";
import NotificationActivationSwitch from "~/components/organisms/NotificationActivationSwitch";

const ExtraContent = () => {
  return (
    <div className="flex items-end justify-end w-full h-full gap-4 pl-4 md:flex-col md:py-4">
      <div className="max-md:hidden">
        <PlayerWidget />
      </div>
      <div className="flex justify-end w-full md:justify-start">
        <NotificationActivationSwitch />
      </div>
    </div>
  );
};

export default ExtraContent;
