import React from "react";
import { useHistory } from "react-router-dom";
import { LoginBg } from "../../assets";
import { Button, Gap, Input, Link } from "../../components";

const Login = () => {
  const history = useHistory();
  return (
    <div className="main-content">
      <div className="left">
        <img src={LoginBg} alt="" className="bg-image" />
      </div>
      <div className="right">
        <p className="title">Register</p>
        <Input label="Email" placeholder="Email" />
        <Gap height={5} />
        <Input label="Password" placeholder="Password" type="password" />
        <Gap height={40} />
        <Button title="Login" onClick={() => history.push("/")} />
        <Gap height={100} />
        <Link
          title="Belum punya akun"
          onClick={() => history.push("/register")}
        />
      </div>
    </div>
  );
};

export default Login;
