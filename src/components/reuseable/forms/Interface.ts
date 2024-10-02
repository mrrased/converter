/* eslint-disable @typescript-eslint/no-explicit-any */

import { ReactElement } from "react";

export type FormConfig = {
  defaultValues?: Record<string, any>;
  resolver?: any;
};

export type FormProps = {
  children: React.ReactNode;
  submitHandler: (data: any) => void;
  defaultValues?: any;
  resolver?: any;
  id?: string;
  // onSubmit: (data: any) => Promise<void>;
} & FormConfig;

export type IInput = {
  name: string;
  type?: string;
  size?: "large" | "small";
  value?: string | string[] | undefined;
  id?: string;
  placeholder?: string;
  validation?: object;
  label?: React.ReactElement | string;
  className?: string;
  style?: string;
  required?: boolean;
  activeShadow?: string;
  defaultValue?: any;
  rules?: any;
  disabled?: boolean;
  min?: number;
};

export type IStuffInfoFieldProps = {
  name: string;
  label: string;
};

export type IFieldProps = {
  name: string;
  label?: ReactElement | string;
  mode?: string | undefined;
  onChange?: (e: any) => void;
  rules?: any;
  required?: boolean;
  defaultValue?: any;
  options?: any;
};

export type SelectOptions = {
  label: string;
  value: string;
};
