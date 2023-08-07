import axios from "axios";
import { toast } from "react-toastify";
// export function getData(url, params, token) {
//   return axios.get(`${url}`, {
//     params,
//     headers: {
//       Authorization: `Bearer ${token}`,
//     },
//   });
// }

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
// export async function putData(url, payload, token) {
//   return await axios.put(`${url}`, payload, {
//     headers: {
//       Authorization: `Bearer ${token}`,
//     },
//   });
// }
