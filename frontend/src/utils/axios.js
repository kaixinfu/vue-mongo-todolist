import axios from "axios";
import { Message } from "view-design";

axios.interceptors.request.use(
    config => {
      return config;
    },
    err => {
      Message.error("请求超时");
      return Promise.resolve(err);
    }
);

axios.interceptors.response.use(response => {
    console.log('response', response)
}, err => {
    console.log('err', err)
})

export const getRequest = (url, params) => {
    return axios({
        method: "get",
        url,
        params
    })
}