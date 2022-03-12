import axios from 'axios';
import { toast } from 'react-toastify';

export function setupInterceptors(): void {
  axios.interceptors.request.use(
    function (config) {
      config.headers!.Authorization = `abcd`;

      return config;
    },
    function (error) {
      // Do something with request error
      return Promise.reject(error);
    }
  );

  axios.interceptors.response.use(
    function (response) {
      return response;
    },
    function (error) {
      toast.error(
        error?.response?.data?.error ||
          JSON.stringify(error?.response?.data?.errors) ||
          'Error',
        {
          position: 'top-right',
          autoClose: false,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: 'colored',
        }
      );

      return Promise.reject(error.response);
    }
  );
}
