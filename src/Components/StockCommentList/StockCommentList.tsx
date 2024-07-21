import React from 'react';
import { CommentGet } from '../../Models/Comment';
import StockCommentListItem from '../StockCommentListItem/StockCommentListItem';

type Props = {
  comments: CommentGet[];
};

const StockCommentList = ({ comments }: Props) => {
  return (
    <div className="relative grid grid-cols-1 gap-4 p-4 mt-8 mb-4 w-full border rounded-lg bg-white shadow-lg">
      <h3 className="text-xl mt-2">Comments</h3>
      <hr />
      {comments
        ? comments.map((comment) => {
            return <StockCommentListItem comment={comment} />;
          })
        : 'No comments'}
    </div>
  );
};

export default StockCommentList;
