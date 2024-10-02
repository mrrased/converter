/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import { ConfigProvider, Form, Input } from "antd";
import { Controller, useFormContext } from "react-hook-form";
import { IInput } from "./Interface";
import { getErrorMessageByPropertyName } from "@/utils/schema-validator";

const InputField = ({
  name,
  type,
  size,
  value,
  id,
  placeholder,
  validation,
  label,
  className,
  activeShadow,
  defaultValue,
  rules,
  required,
  disabled,
  min,
}: IInput) => {
  const {
    control,
    formState: { errors },
  } = useFormContext();

  const errorMessage = getErrorMessageByPropertyName(errors, name);
  return (
    <>
      <ConfigProvider
        theme={{
          components: {
            Input: {
              /* here is your component tokens */
              activeBorderColor: "#0DA487",
              hoverBorderColor: "#0DA487",
            },
          },
          token: {
            colorTextPlaceholder: "#495057",
            /* here is your global tokens */
            borderRadiusLG: 5,
            colorPrimaryActive: "#0DA487",
          },
        }}
      >
        <div className={`${required && "flex items-start space-x-1"}`}>
          <div>
            {required ? (
              <span
                style={{
                  color: "red",
                }}
              >
                *
              </span>
            ) : null}
          </div>
          <div className="mb-2 font-semibold text-lg">
            {label ? label : null}
          </div>
        </div>
        {/* <Form.Item name={name} rules={rules}> */}
        <Controller
          control={control}
          name={name}
          rules={rules}
          defaultValue={defaultValue}
          render={({ field }) => {
            return (
              <>
                {type === "password" ? (
                  <Input.Password
                    type={type}
                    size={size}
                    placeholder={placeholder}
                    {...field}
                    style={{ padding: "8px" }}
                    className={`appearance-none border rounded-rounded-full w-full py-2 px-3 text-red-500 leading-tight placeholder:text-slate-200 placeholder:opacity-40 placeholder:focus:outline-none focus:shadow-outline-none ${className}`}
                    value={value ? value : field.value}
                    defaultValue={defaultValue}
                    autoComplete="off"
                  />
                ) : (
                  <Input
                    type={type}
                    disabled={disabled}
                    size={size}
                    placeholder={placeholder}
                    {...field}
                    style={{ padding: "8px" }}
                    min={min}
                    className={`appearance-none border rounded-rounded-full w-full py-2 px-3 leading-tight text-red-500 placeholder:text-slate-200 placeholder:opacity-40 focus:outline-none focus:shadow-outline-none ${className}`}
                    value={value ? value : field.value}
                    autoComplete="off"
                  />
                )}
              </>
            );
          }}
        />
        {/* </Form.Item> */}
      </ConfigProvider>
      {errorMessage && <small style={{ color: "red" }}>{errorMessage}</small>}
    </>
  );
};

export default InputField;
