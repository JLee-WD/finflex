import axios from 'axios';
import { handleError } from '../Helpers/ErrorHandler';
import { CommentGet, CommentPost } from '../Models/Comment';

const api = 'http://localhost:5162/api/comment';

export const commentPostAPI = async (
  title: string,
  content: string,
  symbol: string
) => {
  try {
    const data = await axios.post<CommentPost>(api + `/${symbol}`, {
      title,
      content,
    });
    return data;
  } catch (commentError) {
    handleError(commentError);
  }
};

export const commentGetAPI = async (symbol: string) => {
  try {
    const data = await axios.get<CommentGet[]>(api + `?Symbol=${symbol}`);
    return data;
  } catch (commentError) {
    handleError(commentError);
  }
};
