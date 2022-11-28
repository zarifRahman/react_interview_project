import { useMutation, useQuery } from '@apollo/client';
import { Input } from 'antd';
import React, { useEffect, useState } from 'react'
import { GETS_COMMENT_AND_POST, POSTS } from '../../services';
import { UPDATE_COMMENT } from '../../services/mutation';
import ButtonMain from '../ButtonMain/ButtonMain';
import SelectField from '../SelectSingle/SelectField';
import styles from "./CommentDetails.module.scss";

const { TextArea } = Input;

const CommentDetails = ({ data }: any) => {
  console.log(data, "--ccommentt ---");
  const [postData, setPostData] = useState(data?.post?.id || null);
  const [bodyText, setBodyText] = useState(data?.data?.body);
  const [currentPostData, setCurrentPostData] = useState([]);
  console.log(postData, "postData");

  const { data: postsData } = useQuery(POSTS);

  const [updateComment, { error }] = useMutation(UPDATE_COMMENT, {
    variables: {
      id: data.id,
      payload: {
        body: bodyText,
      },
      connect: {
        post_id: postData,
      },
    },
    refetchQueries: [
      {
        query: GETS_COMMENT_AND_POST,
        variables: {
          id: data.id,
        },
      },
    ],
  });

  const handleSubmit = () => {
  	updateComment();
    // window.location.reload();
  }

  useEffect(() => {
    setCurrentPostData(
      postsData?.posts?.map((post: any) => ({
        label: post.data.title,
        id: post.id,
      }))
    );
  }, []);

  if (error) return <p>An Error in Comment section has occured</p>;
  return (
    <div className={styles.content}>
      <div className={styles.head}>
        <div>Edit Comment</div>
        <ButtonMain onClick={handleSubmit} />
      </div>
      <>
        <div className={styles.headerBottom}>
          <label>Body</label>
          <TextArea
            style={{
              marginBottom: "20px",
            }}
            onChange={(e) => setBodyText(e.target.value)}
            value={bodyText}
            rows={8}
            placeholder='Body'
          />
        </div>
        <div>
          <label className={styles.headerBottom}>Posts</label>
          <SelectField
            setPostData={(value: any) => setPostData(value)}
            currentPostData={currentPostData}
            defaultValue={postData}
          />
        </div>
      </>
    </div>
  );
};

export default CommentDetails