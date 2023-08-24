"use client";
import { ChangeEvent, HTMLInputTypeAttribute } from "react";
import { IconType } from "react-icons";

type FormField = {
  label: string;
  type: HTMLInputTypeAttribute;
  placeholder: string;
  name: string;
  id: string;
  Icon?: IconType;
  className?: string;
  error?: boolean;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  value?: string;
};

const FormField = ({
  label,
  type,
  placeholder,
  name,
  id,
  Icon,
  className,
  error,
  onChange,
  value,
}: FormField) => {
  const variants = {
    inputBase:
      "flex-1 outline-none border-none text-base text-primary font-normal placeholder:text-[#C2C2C2] placeholder:text-base bg-transparent",
    inputError: "placeholder:text-red-500",
    fieldBase:
      "py-3 px-4 bg-white rounded-[58px] border border-lightGrey flex items-center space-x-[10px] w-full hover:border-secondary focus:border-secondary",
    fieldError: "border-red-500",
  };
  return (
    <div className={`flex flex-col items-start w-full ${className}`}>
      <label htmlFor={name} className="mb-1 text-xs font-medium text-grey">
        {label}
      </label>
      <div className={`${variants.fieldBase} ${error && variants.fieldError}`}>
        {Icon && <Icon className="text-[24px] text-primary" />}
        <div className="flex flex-col">
          <input
            type={type}
            className={`${variants.inputBase} ${error && variants.inputError}`}
            placeholder={placeholder}
            name={name}
            id={id}
            onChange={onChange}
            value={value}
          />
        </div>
      </div>
    </div>
  );
};

export default FormField;
