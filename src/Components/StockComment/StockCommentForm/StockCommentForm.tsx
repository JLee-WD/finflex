import React from 'react';
import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';

type Props = {
  symbol: string;
  handleComment: (form: CommentFormInputs) => void;
};

type CommentFormInputs = {
  title: string;
  content: string;
};

const validation = Yup.object().shape({
  title: Yup.string().required('Title is required'),
  content: Yup.string().required('Content is required'),
});

const StockCommentForm = ({ symbol, handleComment }: Props) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CommentFormInputs>({ resolver: yupResolver(validation) });
  return (
    <form className="mt-4 mx-40" onSubmit={handleSubmit(handleComment)}>
      <input
        type="text"
        id="title"
        className="mb-1 bg-white border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-300 dark:placeholder-gray-400 dark:text-gray-900 dark:focus:ring-blue-500 dark:focus:border-blue-500"
        placeholder="Title"
        {...register('title')}
      />
      {errors.title ? (
        <p className="text-red-500">{errors.title.message}</p>
      ) : (
        ''
      )}
      <div className="py-2 px-2.5 mb-1 mt-4 bg-white rounded-lg rounded-t-lg border border-gray-200 dark:bg-gray-300">
        <label htmlFor="comment" className="sr-only">
          Your comment
        </label>
        <textarea
          id="comment"
          rows={6}
          className="px-0 w-full text-sm text-gray-900 border-0 focus:ring-0 focus:outline-none dark:text-gray-900  dark:placeholder-gray-400 dark:bg-gray-300"
          placeholder="Write a comment..."
          {...register('content')}
        ></textarea>
      </div>
      {errors.content ? (
        <p className="text-red-500">{errors.content.message}</p>
      ) : (
        ''
      )}
      <button
        type="submit"
        className="inline-flex items-center py-2.5 px-4 text-xs font-medium text-center text-white bg-lightGreen rounded-lg focus:ring-4 focus:ring-primary-200 dark:focus:ring-primary-900 hover:bg-primary-800 mt-4"
      >
        Post comment
      </button>
    </form>
  );
};

export default StockCommentForm;
