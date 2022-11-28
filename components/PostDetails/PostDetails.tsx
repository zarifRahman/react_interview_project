import { useMutation, useQuery } from "@apollo/client";
import { Input } from "antd";
import React, { useEffect, useState } from "react";
import { GETS_COMMENT_AND_POST, POSTS } from "../../services";
import { UPDATE_POST } from "../../services/mutation";
import ButtonMain from "../ButtonMain/ButtonMain";
import SearchDropDown from "../SearchDropdown/SearchDropdown";
import styles from "./PostDetails.module.scss";

const { TextArea } = Input;

const PostDetails = ({ data }: any) => {
  console.log(data, "DDATA");
  const [title, setTitle] = useState(data?.data?.title);
  const [multiText, setMultiText] = useState(data?.data?.body?.html);

  const {
    data: commentsData,
  } = useQuery(GETS_COMMENT_AND_POST);
  // ----items
  // find the id to show default valu
  let initialComments: Array<number> = [];
  data?.comments?.forEach((item: any) => {
    initialComments.push(item?.id);
  });
  console.log(initialComments, "initialComments");
  const [currentComments, setCurrentComments] = useState(initialComments);
  const [commentOptions, setCommentOptions] = useState([]);

   useEffect(() => {
     setCommentOptions(
       commentsData?.comments?.map((comment:any) => ({
         label: comment.data.body,
         value: comment.id,
       }))
     );
   }, []);


  // Update the post data
  const [updatePost] = useMutation(UPDATE_POST, {
    variables: {
      id: data?.id,
      payload: {
        title: title,
        body: {
          html: multiText,
        },
      },
      connect: {
        comment_ids: currentComments,
      },
    },
    refetchQueries: [
      {
        query: POSTS,
        variables: {
          id: data.id,
        },
      },
    ],
  });

  const handleSubmit = () => {
    updatePost();
    window.location.reload();
  };

  return (
    <div className={styles.content}>
      <div className={styles.head}>
        {data?.data?.first_name ? <h1>Edit User</h1> : <h1>Edit Post</h1>}
        <ButtonMain onClick={handleSubmit} />
      </div>
      <>
        <div className={styles.headerBottom}>
          <label>Title</label>
          <Input
            placeholder='Title'
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className={styles.headerBottom}>
          <label>Body</label>
          <TextArea
            onChange={(e) => setMultiText(e.target.value)}
            value={multiText}
            rows={8}
            placeholder='Body'
          />
        </div>
        <div
          style={{
            width: "100%",
          }}
        >
          <label>Comments</label>
          <SearchDropDown
            currentComments={currentComments}
            setSelectedItems={setCurrentComments}
            options={commentOptions}
          />
        </div>
      </>
    </div>
  );
};

export default PostDetails;
