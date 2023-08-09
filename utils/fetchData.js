import axios from "axios";
import { toast } from "react-toastify";

export async function getData(url, params, token) {
  return await axios
    .get(`${process.env.NEXT_PUBLIC_API}${url}`, {
      cache: "no-store",
      params,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    .catch((err) => {
      if (err.response) {
        console.log(err);
        toast.error(err.response.data.msg);
      }
      return Promise.reject(err);
    });
}
export async function postData(url, payload, token) {
  return await axios
    .post(`${process.env.NEXT_PUBLIC_API}${url}`, payload, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    .catch((err) => {
      if (err.response) {
        console.log(err);
        toast.error(err.response.data.msg);
      }
      return Promise.reject(err);
    });
}
export async function putData(url, payload, token) {
  return await axios
    .put(`${process.env.NEXT_PUBLIC_API}${url}`, payload, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    .catch((err) => {
      if (err.response) {
        console.log(err);
        toast.error(err.response.data.msg);
      }
      return Promise.reject(err);
    });
}
// export async function putData(url, payload, token) {
//   return await axios.put(`${url}`, payload, {
//     headers: {
//       Authorization: `Bearer ${token}`,
//     },
//   });
// }
