import clsx from "clsx";
import type { AutoCompleteProps } from "./AutoComplete.types";
import { useCallback, useLayoutEffect, useState } from "react";

const actionValues = {
  ArrowUp: -1 as const,
  ArrowDown: 1 as const
};

const AutoComplete = ({
  values,
  onSelect,
  autoCompleteItem,
  disabled,
  size = "w-full"
}: AutoCompleteProps) => {
  const [hover, setHover] = useState(0);
  const isOpen = !!values.length;

  const moveTo = useCallback(
    (dy: 1 | -1) => {
      setHover((hover) => {
        if (hover + dy === values.length) {
          return 0;
        }
        if (hover + dy === -1) {
          return values.length - 1;
        }
        return hover + dy;
      });
    },
    [values.length]
  );

  const handleKeyboard = useCallback(
    (e: KeyboardEvent) => {
      if (disabled) return;
      if (e.key === "Enter") {
        e.preventDefault();
        onSelect?.(values[hover]);
      }

      if (e.key !== "ArrowUp" && e.key !== "ArrowDown") return;
      moveTo(actionValues[e.key]);
    },
    [disabled, hover, moveTo, onSelect, values]
  );

  useLayoutEffect(() => {
    window.document.addEventListener("keydown", handleKeyboard);
    return () => {
      window.document.removeEventListener("keydown", handleKeyboard);
    };
  }, [handleKeyboard]);

  return (
    <div className={clsx("relative", size)}>
      {isOpen && !disabled && (
        <div className="absolute z-20 flex flex-col gap-1 w-inherit">
          {values.map((value, index) =>
            autoCompleteItem({
              value,
              isHover: hover === index,
              onClick: () => {
                onSelect?.(value);
              }
            })
          )}
        </div>
      )}
    </div>
  );
};

export default AutoComplete;
