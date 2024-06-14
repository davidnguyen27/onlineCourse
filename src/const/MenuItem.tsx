import { MenuProps } from "antd";
import { useContext } from "react";
import { AuthContext } from "../app/context/AuthContext";
import { useNavigate } from "react-router-dom";

export const items: MenuProps["items"] = [
  {
    label: <a href="#">Profile</a>,
    key: "0",
  },
  {
    label: <a href="#">Logout</a>,
    key: "1",
  },
];
