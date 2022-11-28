import { Select } from "antd";
import React from "react";
const { Option } = Select;

type SearchProps = {
  currentPostData?: [] | any;
  setPostData?: any;
  defaultValue?: String | any;
  
};

const SelectField: React.FC<SearchProps> = ({
  currentPostData = [],
  setPostData,
  defaultValue,
  ...otherProps
}) => {
  return (
    <div className='input_root'>
      <Select
        showSearch
        style={{
          width: "100%",
        }}
        placeholder='Search to Select'
        onChange={setPostData}
        {...otherProps}
        defaultValue={defaultValue}
        filterOption={(input: any, option: any) =>
          option.children.includes(input)
        }
      >
        {currentPostData.map((item: any) => (
          <Option key={item.id} value={item.id}>
            {item.label}
          </Option>
        ))}
      </Select>
    </div>
  );
};

export default SelectField;
