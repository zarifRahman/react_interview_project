import React from "react";
import { Select } from "antd";

type SearchProps = {
  currentComments?:any | [];
  setSelectedItems?:any;
  options?:any,
  comments?: any
};


const SearchDropDown: React.FC<SearchProps> = ({
  currentComments,
  setSelectedItems,
  options,
  comments,
}) => {
  // const filteredOptions = options?.filter(
  //   ({ value }: any) => !currentComments.includes(value)
  // );

  return (
    <>
      <Select
        style={{
          width: "100%",
        }}
        showSearch
        placeholder={"Select Comment"}
        value={currentComments}
        mode='multiple'
        onChange={setSelectedItems}
      >
        {options?.map((item: any) => (
          <Select.Option key={item.value} value={item.value}>
            {item.label}
          </Select.Option>
        ))}
      </Select>
    </>
  );
};

export default SearchDropDown;
