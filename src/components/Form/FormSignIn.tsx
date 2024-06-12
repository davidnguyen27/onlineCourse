import { Divider, Input, Radio } from "antd";
import axios from "axios";
import { ChangeEvent, FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";

interface User {
  email: string;
  password: string;
  role: string;
}

const FormSignIn = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const navigate = useNavigate();

  const handleLogin = async (e: FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();
    try {
      const res = await axios.get<User[]>("/data/fakeUser.json");
      const users = res.data;

      const user = users.find(
        (user) => user.email === email && user.password === password,
      );
      if (user) {
        console.log("Login success");
        if (typeof user.role === "string") {
          sessionStorage.setItem("userRole", user.role);
          switch (user.role.toLowerCase()) {
            case 'admin':
              navigate('/admin-page');
              break;
            case 'student':
              navigate('/student-page');
              break;
            case 'instructor':
              navigate('/instructor-page');
              break;
            default:
              console.log("Unknown role");
              navigate('/');
          }
        } else {
          console.log("Role type is not string");
        }
      } else {
        console.log("Login failed");
      }
    } catch (error) {
      console.error("System error: ", error);
    }
  };

  const handleChangeEmail = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handleChangePass = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  return (
    <>
      <div className="rounded-lg bg-slate-200 p-8">
        <h2 className="mb-5 text-center text-2xl font-bold">Welcome Back</h2>
        <p className="mb-8 text-center text-base font-light">
          Login To Your FPT Account!
        </p>
        <div className="my-4 flex cursor-pointer items-center justify-center bg-blue-500">
          <i className="fa-brands fa-facebook-f"></i>
          <p className="ml-3">Continue with Facebook</p>
        </div>
        <div className="my-4 flex cursor-pointer items-center justify-center bg-cyan-400">
          <i className="fa-brands fa-x-twitter"></i>
          <p className="ml-3">Continue with Twitter</p>
        </div>
        <div className="my-4 flex cursor-pointer items-center justify-center bg-green-400">
          <i className="fa-brands fa-google"></i>
          <p className="ml-3">Continue with Google</p>
        </div>
        <form onSubmit={handleLogin}>
          <Input
            className="my-4 text-sm"
            size="large"
            placeholder="Email address"
            prefix={<i className="fa-solid fa-envelope"></i>}
            onChange={handleChangeEmail}
          />
          <Input
            className="my-4 text-sm"
            type="password"
            size="large"
            placeholder="Password"
            prefix={<i className="fa-solid fa-key"></i>}
            onChange={handleChangePass}
          />
          <Radio>Remember me</Radio>
          <br />
          <button
            type="submit"
            className="my-4 w-full rounded-md bg-amber-500 px-4 py-2 hover:bg-stone-900 hover:text-white"
          >
            Sign In
          </button>
        </form>
        <p className="text-center">
          Or{" "}
          <a href="#" className="text-amber-500 hover:underline">
            Forgot password
          </a>
          .
        </p>
        <Divider />
        <p className="text-center text-sm">
          Don't have an account?{" "}
          <a className="text-amber-500 hover:underline" href="/sign-up">
            Sign Up
          </a>
        </p>
      </div>
    </>
  );
};

export default FormSignIn;
