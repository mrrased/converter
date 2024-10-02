/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useForm, FormProvider } from "react-hook-form";
// import { FormConfig, FormProps } from "./Interface";
import { useEffect } from "react";
import { FormConfig, FormProps } from "./Interface";

const CustomForm = ({
  children,
  submitHandler,
  defaultValues,
  resolver,
  id,
}: // onSubmit,
FormProps) => {
  const formConfig: FormConfig = {};

  if (!!defaultValues) formConfig["defaultValues"] = defaultValues;

  if (!!resolver) formConfig["resolver"] = resolver;

  const methods = useForm<FormProps>(formConfig);
  const { handleSubmit, reset } = methods;

  // const onSubmitHandler = async (data: any) => {
  //   await onSubmit(data); // Call the onSubmit function
  //   submitHandler(data); // Call the submitHandler function
  //   reset();
  // };

  const onSubmit = (data: any) => {
    submitHandler(data);
    reset();
  };

  useEffect(() => reset(defaultValues), [defaultValues, reset, methods]);

  return (
    <FormProvider {...methods}>
      <form onSubmit={handleSubmit(onSubmit)} id={id}>
        {children}
      </form>
    </FormProvider>
  );
};

export default CustomForm;
