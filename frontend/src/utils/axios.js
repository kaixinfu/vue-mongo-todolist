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
    let data = response.data;
    switch (data.code) {
        case 500:
            Message.error({content: data.message || "系统错误"});
            break;
        default:
            return data
    }
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