import React from 'react';
import { CommentGet } from '../../Models/Comment';

type Props = {
  comment: CommentGet;
};

function daysAgo(dateTimeString: any) {
  const givenDate = new Date(dateTimeString);
  const currentDate = new Date();
  const timeDifference = currentDate.getTime() - givenDate.getTime();
  const daysDifference = Math.floor(timeDifference / (1000 * 60 * 60 * 24));

  if (daysDifference === 0) {
    const hours = String(givenDate.getHours()).padStart(2, '0');
    const minutes = String(givenDate.getMinutes()).padStart(2, '0');
    return `${hours}:${minutes} today`;
  } else {
    return `${daysDifference} days ago`;
  }
}

const StockCommentListItem = ({ comment }: Props) => {
  const dateTime = daysAgo(comment.createdOn);

  return (
    <div>
      <div className="relative flex flex-col my-2">
        <div className="flex flex-col w-full">
          <div className="flex flex-row justify-between">
            <p className="relative text-m font-bold whitespace-nowrap truncate overflow-hidden">
              {comment.title}
              <span className="ml-4 text-xs text-gray-400">{dateTime}</span>
            </p>
          </div>
          <p className="text-dark text-gray-400 text-sm">
            @{comment.createdBy}
          </p>
        </div>
        <p className="mt-4 text-gray-500 mb-6 pl-6">{comment.content}</p>
        <hr className="mx-20" />
      </div>
    </div>
  );
};

export default StockCommentListItem;
