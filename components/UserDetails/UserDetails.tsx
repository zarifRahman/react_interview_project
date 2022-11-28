import { useMutation, useQuery } from "@apollo/client";
import { Input } from "antd";
import React, { useState } from "react";
import { GETS_USER, POSTS,  } from "../../services";
import { UPDATE_USER } from "../../services/mutation";
import ButtonMain from "../ButtonMain/ButtonMain";
import SearchDropDown from "../SearchDropdown/SearchDropdown";
import styles from "./UserDetails.module.scss";

const { TextArea } = Input;

const UserDetails = ({ data }: any) => {
	console.log(data, "ddddd")
  // user data
  const [firstName, setFirstName] = useState(data?.data?.first_name);
  const [address, setAddress] = useState(data?.data?.phone);

  // get comments
  const [allSelectedComment, allSetSelectedComment] = useState(data?.comments);
  console.log(allSelectedComment, "allSelectedComment");

  const [updateUser] = useMutation(UPDATE_USER, {
    variables: {
      id: data?.id,
      payload: {
        email: address,
        first_name: firstName,
        phone: address,
      },
    },
    refetchQueries: [
      {
        query: GETS_USER,
        variables: {
          id: data.id,
        },
      },
    ],
  });
  

  const handleSubmit = () => {
    updateUser();
    window.location.reload();
  };

  return (
    <div className={styles.content}>
      <div className={styles.head}>
        <h1>Edit User</h1>
        <ButtonMain onClick={handleSubmit} />
      </div>
      <>
        <div className={styles.headerBottom}>
          <label>Name</label>
          <Input
            placeholder='Name'
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
        </div>
        <div className={styles.headerBottom}>
          <label>Address</label>
          <Input
            placeholder='Title'
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
        </div>
        <div className={styles.headerBottom}>
          <h3>Search Posts and Tags</h3>
          <SearchDropDown comments={allSelectedComment} />
        </div>
      </>
    </div>
  );
};

export default UserDetails;
