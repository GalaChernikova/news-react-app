import s from "./Main.module.css";
import logo from "./../images/logo.png";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";

function Main() {
  return (
    <div className={s.container}>
      <h1>The News</h1>
      <img src={logo} className={s.logo} />
    </div>
  );
}

export default Main;
