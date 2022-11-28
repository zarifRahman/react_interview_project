import React from "react";
import styles from "./TabWithIcon.module.scss";

type TabItemProps = {
  label: string;
  key?: number;
};

const TabItem: React.FC<TabItemProps> = ({ label, key }) => {
  return (
    <div key={key} className={styles.container}>
      <span>{label}</span>
    </div>
  );
};

export default TabItem;
