import React from "react";
import {  Button, Space } from "antd";
import { BlockOutlined } from "@ant-design/icons";


const ButtonMain = ({ ...others }) => (
  <Space wrap>
    <Button {...others} icon={<BlockOutlined />}>
      Update
    </Button>
  </Space>
);

export default ButtonMain;
