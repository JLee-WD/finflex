import React from 'react';
import StockCommentForm from './StockCommentForm/StockCommentForm';
import { commentPostAPI } from '../../Services/CommentService';
import { toast } from 'react-toastify';

type Props = {
  stockSymbol: string;
};

type CommentFormInputs = {
  title: string;
  content: string;
};

const StockComment = ({ stockSymbol }: Props) => {
  const handleComment = (form: CommentFormInputs) => {
    commentPostAPI(form.title, form.content, stockSymbol)
      .then((res) => {
        if (res) {
          toast.success('Comment posted');
        }
      })
      .catch((e) => toast.warning(e));
  };
  return (
    <StockCommentForm symbol={stockSymbol} handleComment={handleComment} />
  );
};

export default StockComment;
