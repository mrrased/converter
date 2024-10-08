import { ConfigProvider, Select, Spin } from "antd";
import { Controller, useFormContext } from "react-hook-form";
import { getErrorMessageByPropertyName } from "@/utils/schema-validator";
import { ISelectFieldProps } from "./Interface";

const SelectForm = ({
  name,
  size,
  //   value,
  placeholder = "Search Select",
  options,
  label,
  required,
  defaultValue,
  handleChange,
  //   mode,
  rules,
  //   variant,
  //   dropdownRender,
  onSearch,
  loading,
}: ISelectFieldProps) => {
  const {
    control,
    formState: { errors },
  } = useFormContext();
  const errorMessage = getErrorMessageByPropertyName(errors, name);
  return (
    <>
      <ConfigProvider
        theme={{
          token: {
            borderRadius: 6,
          },
          components: {
            //    Select: {
            //    borderRadius: 8,
            //  },
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
          <div className="mb-2">{label ? label : null}</div>
        </div>

        <Controller
          control={control}
          rules={rules}
          name={name}
          render={({ field: { value, onChange } }) => {
            return (
              // <Form.Item name={name} rules={rules}>
              <Select
                showSearch
                allowClear
                // mode={mode}
                defaultValue={defaultValue}
                onChange={handleChange ? handleChange : onChange}
                size={size}
                options={options}
                value={value}
                style={{ width: "100%" }}
                placeholder={placeholder}
                // dropdownRender={dropdownRender}
                dropdownRender={(menu) => (
                  <>
                    {loading ? (
                      <div style={{ textAlign: "center", padding: "8px" }}>
                        <Spin /> {/* Show loading spinner inside dropdown */}
                      </div>
                    ) : (
                      menu
                    )}
                  </>
                )}
                onSearch={onSearch}
                filterOption={false}
                loading={false}
              />
              // </Form.Item>
            );
          }}
        />
        {errorMessage && <small style={{ color: "red" }}>{errorMessage}</small>}
      </ConfigProvider>
    </>
  );
};

export default SelectForm;
