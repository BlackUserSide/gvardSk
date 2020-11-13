import React, { FormEvent, useState } from "react";
import { request } from "../api";
interface IStateAuth {
  email: string;
  password: string;
}
export const AuthPage: React.FC = () => {
  const [dataAuth, setDataAuth] = useState<IStateAuth>({
    email: "",
    password: "",
  });
  const changeHandl = (e: FormEvent<HTMLInputElement>) => {
    const name: string = e.currentTarget.name;
    const val: string = e.currentTarget.value;
    setDataAuth((prev) => ({
      ...prev,
      [name]: val,
    }));
  };
  console.log(dataAuth);

  const submitHandler = (method: string) => {
    request({
      method: "POST",
      url: `/auth/${method}`,
      data: {
        email: dataAuth.email,
        password: dataAuth.password,
      },
    })
      .then((response) => {
        if (response) {
          localStorage.setItem("token", response.data.token);
        }
      })
      .catch((err) => console.log(err));
  };
  return (
    <div className="auth-page-wrapper">
      <form className="form-auth" onSubmit={(e) => e.preventDefault()}>
        <div className="top-line">
          <h1 className="h1">Авторизация</h1>
        </div>
        <input
          type="text"
          onChange={(e) => changeHandl(e)}
          name="email"
          required
          value={dataAuth.email}
          placeholder="Email"
        />
        <input
          type="password"
          name="password"
          required
          value={dataAuth.password}
          placeholder="password"
          onChange={(e) => changeHandl(e)}
        />
        <button onClick={() => submitHandler("login")}>Login</button>
        <button onClick={() => submitHandler("register")}>Register</button>
      </form>
    </div>
  );
};
