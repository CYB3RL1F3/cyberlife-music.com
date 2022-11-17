import PlayerWidget from "~/components/organisms/PlayerWidget";
import NotificationActivationSwitch from "~/components/organisms/NotificationActivationSwitch";

const ExtraContent = () => {
  return (
    <div className="flex flex-col items-end justify-end w-full h-full gap-4 py-4 pl-4">
      <PlayerWidget />
      <div className="flex w-full">
        <NotificationActivationSwitch />
      </div>
    </div>
  );
};

export default ExtraContent;
