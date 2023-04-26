import React from 'react';
import Comment from './Comment';


const CommentList = ({ comments }) => {
    // Disclaimer: Don't use indexes as keys
    return comments.map((comment) => (
        <div key={comment.id}>
            <Comment data={comment} />
            <div className="pl-5 border border-l-black ml-5">
                <CommentList comments={comment.replies} />
            </div>
        </div>
    ));
};

export default CommentList