import Button from "~/components/atoms/Button";
import type { ButtonSubmitProps } from "./ButtonSubmit.types";
import { useMemo } from "react";
import Spinner from "~/components/atoms/Spinner";

const ButtonSubmit = ({
  rightIcon,
  loading,
  disabled,
  children
}: ButtonSubmitProps) => {
  const icon = useMemo(() => {
    if (loading) return <Spinner variant="xs" />;
    return rightIcon;
  }, [rightIcon, loading]);
  return (
    <Button disabled={disabled || loading} type="submit" rightIcon={icon}>
      {children}
    </Button>
  );
};

export default ButtonSubmit;
