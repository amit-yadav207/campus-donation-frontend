import React from 'react';

const CommentCard = ({ comment }) => {
  return (
    <div className="border p-2 rounded bg-gray-100 mb-2">
      <p className="font-bold">{comment.username}</p>
      <p>{comment.text}</p>
    </div>
  );
};

export default CommentCard;
