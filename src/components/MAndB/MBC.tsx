/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import CustomForm from "../reuseable/forms/CustomForm";
import InputField from "../reuseable/forms/InputField";
import { Button, ConfigProvider } from "antd";

const MBC = () => {
  const onSubmit = async (data: any) => {
    try {
      //   messageApi.open({
      //     type: "loading",
      //     content: "Progress..",
      //     duration: 0,
      //   });
      console.log(data);
      //   const res = await addNewAddress({ ...data }).unwrap();
      //   if (res?.data?.status === 200) {
      //     // messageApi.destroy();
      //     Notifications("success", res?.data?.message);
      //     router.push("/checkout");
      //     // setIsModalOpen(false);
      //     // setSelectButton("");
      //     setFindResult({});
      //   } else if (res.statusCode === 500) {
      //     messageApi.destroy();
      //     Notifications("error", res?.errorMessage);
      //   }
    } catch (err: any) {
      console.log(`${err.message}`);
    }
  };
  return (
    <div className="bg-[#f2f2f2] p-4 rounded-md mt-40">
      <CustomForm submitHandler={onSubmit}>
        <div className="space-y-5">
          <div>
            <InputField name="million" type="number" label="Million" />
          </div>
          <div>
            <InputField name="billion" type="number" label="Billion" />
          </div>
        </div>
        <div className="flex justify-end mt-8">
          <ConfigProvider
            theme={{
              token: {
                colorPrimary: "#0fa3b1",
                colorBorder: "#0fa3b1",
              },
              components: {
                Button: {
                  fontWeight: 500,
                },
              },
            }}
          >
            <Button
              type="primary"
              size="large"
              htmlType="submit"
              className="text-center bg-[#bbcfff] w-32 sm:w-32 h-10 tracking-widest"
            >
              Convert
            </Button>
          </ConfigProvider>
        </div>
      </CustomForm>
    </div>
  );
};

export default MBC;
