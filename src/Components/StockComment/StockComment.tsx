import React, { useEffect, useState } from 'react';
import StockCommentForm from './StockCommentForm/StockCommentForm';
import { commentGetAPI, commentPostAPI } from '../../Services/CommentService';
import { Bounce, toast } from 'react-toastify';
import { CommentGet } from '../../Models/Comment';
import Spinner from '../Spinner/Spinner';
import StockCommentList from '../StockCommentList/StockCommentList';

type Props = {
  stockSymbol: string;
};

type CommentFormInputs = {
  title: string;
  content: string;
};

const StockComment = ({ stockSymbol }: Props) => {
  const [comments, setComments] = useState<CommentGet[] | null>(null);
  const [loading, setLoading] = useState<boolean>();

  useEffect(() => {
    getComments();
  }, []);

  const handleComment = (form: CommentFormInputs) => {
    commentPostAPI(form.title, form.content, stockSymbol)
      .then((res) => {
        if (res) {
          toast.success('Comment posted', {
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            theme: 'light',
            transition: Bounce,
          });
          getComments();
        }
      })
      .catch((e) =>
        toast.warning(e, {
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          theme: 'light',
          transition: Bounce,
        })
      );
  };

  const getComments = () => {
    setLoading(true);
    commentGetAPI(stockSymbol)
      .then((res) => {
        if (res) {
          setLoading(false);
          setComments(res?.data);
        }
      })
      .catch((e) =>
        toast.warning(e, {
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          theme: 'light',
          transition: Bounce,
        })
      );
  };

  return (
    <div className="flex flex-col w-full ml-4 mt-4 mb-4">
      {loading ? <Spinner /> : <StockCommentList comments={comments!} />}
      <StockCommentForm symbol={stockSymbol} handleComment={handleComment} />
    </div>
  );
};

export default StockComment;
