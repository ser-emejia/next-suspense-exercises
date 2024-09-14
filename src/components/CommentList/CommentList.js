import React from "react";
import Spinner from "../Spinner";
import { getComments } from "@/helpers/interview-helpers";
import Comment from "../Comment/Comment";

const CommentList = async () => {
  const comments = await getComments();

  return (
    <>
      {comments.map((comment) => (
        <Comment key={comment.id} comment={comment} />
      ))}
    </>
  );
};

export default CommentList;
