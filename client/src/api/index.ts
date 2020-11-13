import axios from "axios";

const url = "/api";
const instance = axios.create({
  baseURL: url,
  timeout: 1000,
  headers: {},
});
export const request = (params: any, allowStatus: number[] = [200]) =>
  instance(params).catch((e) => {
    const { status } = e.response;
    if (allowStatus.indexOf(status) === -1) {
      console.log(status);
    }
  });
