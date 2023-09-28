import { FieldErrorsImpl } from "react-hook-form";

export type TypePropsAInput = {
  value: any;
  inputRef: any;
  isCurrency: boolean;
  label: string;
  rootStyle: string;
  placeholder: string;
  suffix: string;
  errors: FieldErrorsImpl<{ [x: string]: string }>;
  prefix: string;
  name: string;
  onChange: () => void;
  rest: any;
  type: "text" | "date" | "number" | "email" | "password";
};
