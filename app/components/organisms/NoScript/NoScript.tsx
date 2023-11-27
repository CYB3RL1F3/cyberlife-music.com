import Text from "~/components/atoms/Text";

const NoScript = () => {
  return (
    <noscript>
      <div className="flex flex-col items-end justify-center w-full o-8">
        <Text.Lg>Welcome on Cyberlife's website!</Text.Lg>
        <Text.RightMdSemiBold>
          Unfortunately, it seems you didn't enable Javascript on your browser,
          and you must enable Javascript on your browser to run this website
          properly!
        </Text.RightMdSemiBold>
        <Text.Md>
          Please update your browser configuration and{" "}
          <a href="/" className="underline">
            Refresh this page
          </a>
        </Text.Md>
        <Text.RightMdSemiBold>Thanks for your visit! :)</Text.RightMdSemiBold>
      </div>
    </noscript>
  );
};

export default NoScript;
