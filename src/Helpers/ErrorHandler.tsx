import axios from 'axios';
import { Bounce, toast } from 'react-toastify';

export const handleError = (error: any) => {
  if (axios.isAxiosError(error)) {
    const err = error?.response;
    if (Array.isArray(err?.data?.errors)) {
      for (let value of err?.data?.errors) {
        toast.warning(value.description);
      }
    } else if (typeof err?.data?.errors === 'object') {
      for (let e in err?.data?.errors) {
        toast.warning(err?.data?.errors[e][0]);
      }
    } else if (err?.data) {
      toast.warning(err?.data, {
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        theme: 'light',
        transition: Bounce,
      });
    } else if (err?.status === 401) {
      toast.warning('Unauthorized - Please login', {
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        theme: 'light',
        transition: Bounce,
      });
      window.history.pushState({}, 'LoginPage', '/login');
    } else if (err) {
      toast.warning(err?.data, {
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        theme: 'light',
        transition: Bounce,
      });
    }
  }
};
