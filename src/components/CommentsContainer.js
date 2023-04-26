import React from "react";
import { commentsData } from "../utils/data";
import Comment from "./Comment";
import CommentList from "./CommentList";


const CommentsContainer = () => {
    return (
        <div className="m-5 p-2">
            <h1 className="text-2xl font-bold">Comments: </h1>
            <CommentList comments={commentsData} />
        </div>
    );
};

export default CommentsContainer;
