import React from "react";
import { Select } from "antd";

const { Option } = Select;


type SearchProps = {
  defaultValue?: any;
  options?: any;
  handleCommit?: any;
};

const CommentSearchDrop: React.FC<SearchProps> = ({
  defaultValue,
  options,
  handleCommit,
	...others
}) => {
  // fetch comment data
	console.log(options, "--ooptions");

  return (
    <>
      <Select
        mode='multiple'
        allowClear
        style={{ width: "100%" }}
        placeholder='Please select'
        optionFilterProp='children'
        onChange={handleCommit}
        filterOption={(input, option) => option.children.includes(input)}
      >
        {options?.map((option: any) => {
          return (
            <Option key={option?.value} value={option?.value}>
              {option?.label}
            </Option>
          );
        })}
      </Select>
    </>
  );
};

export default CommentSearchDrop;
