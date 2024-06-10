import { Divider, Input, Radio } from "antd";

const FormSignIn = () => {
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
        <Input
          className="my-4 text-sm"
          size="large"
          placeholder="Email address"
          prefix={<i className="fa-solid fa-envelope"></i>}
        />
        <Input
          className="my-4 text-sm"
          size="large"
          placeholder="Password"
          prefix={<i className="fa-solid fa-key"></i>}
        />
        <Radio>Remember me</Radio>
        <br />
        <button className="my-4 w-full rounded-md bg-amber-500 px-4 py-2 hover:bg-stone-900 hover:text-white">
          Sign In
        </button>
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
          <a className="text-amber-500 hover:underline" href="#">
            Sign Up
          </a>
        </p>
      </div>
    </>
  );
};

export default FormSignIn;
