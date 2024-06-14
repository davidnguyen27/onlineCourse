import { Divider } from "antd";
import { FormSignIn } from "../../components";

const SignInPage = () => {
  return (
    <div className="flex h-screen items-center justify-center">
      <div className="w-1/2 rounded-lg bg-slate-200 p-8">
        <h2 className="mb-5 text-center text-2xl font-bold">Welcome Back</h2>
        <p className="mb-8 text-center text-base font-light">
          Login To Your FPT Account!
        </p>
        <div className="my-4 flex cursor-pointer items-center justify-center">
          <i className="fa-brands fa-facebook-f"></i>
          <p className="ml-3">Continue with Facebook</p>
        </div>
        <div className="my-4 flex cursor-pointer items-center justify-center">
          <i className="fa-brands fa-x-twitter"></i>
          <p className="ml-3">Continue with Twitter</p>
        </div>
        <div className="my-4 flex cursor-pointer items-center justify-center">
          <i className="fa-brands fa-google"></i>
          <p className="ml-3">Continue with Google</p>
        </div>
        <FormSignIn />
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
    </div>
  );
};

export default SignInPage;
