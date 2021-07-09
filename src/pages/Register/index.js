import React from "react";
import "./register.scss";
import { RegisterBg } from "../../assets";
import { Button, Gap, Input, Link } from "../../components/atoms";

const Register = () => {
  return (
    <div className="main-content">
      <div className="left">
        <img src={RegisterBg} alt="" className="bg-image" />
      </div>
      <div className="right">
        <p className="title">Register</p>
        <Input label="Email" placeholder="Email" />
        <Gap height={5} />
        <Input label="Full Name" placeholder="Full Name" />
        <Gap height={5} />
        <Input label="Password" placeholder="Password" type="password" />
        <Gap height={60} />
        <Button title="Register" />
        <Gap height={100} />
        <Link title="Kembali ke Login" />
      </div>
    </div>
  );
};

export default Register;
