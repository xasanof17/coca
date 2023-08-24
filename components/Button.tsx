import { FormEvent } from "react";
import Loader from "./Loader";

type Button = {
  type: "button" | "submit" | "reset";
  text: string;
  loading?: boolean;
  outlined?: boolean;
  filled?: boolean;
  classNames?: string;
  disabled?: boolean;
};

const variants = {
  base: "text-base font-semibold py-3 px-14 rounded-full border",
  outlined: "bg-white text-secondary border-transparent",
  filled: "bg-secondary text-white border-secondary",
  loading: "flex items-center justify-center space-x-3",
  disabled: "opacity-75 select-none",
};

const Button = ({
  type,
  text,
  loading,
  outlined,
  filled,
  classNames,
  disabled,
}: Button) => {
  return (
    <button
      type={type}
      className={`${variants.base} ${outlined && variants.outlined} ${
        filled && variants.filled
      } ${loading && variants.loading} ${classNames} ${
        disabled && variants.disabled
      }`}
      disabled={disabled}
    >
      {!loading ? text : <Loader outlined={outlined ? outlined : filled} />}
    </button>
  );
};

export default Button;
