import axios from "axios";

export const axiosWithAuth = () => {
  return axios.create({
    baseURL: "https://reqres.in/api/users",
    headers: {
      authorization: localStorage.getItem("token"),
    },
  });
};
