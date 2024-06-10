import { Divider, Input, Radio } from "antd";

const FormSignUp = () => {
  return (
    <>
      <div className="max-h-dvh max-w-md rounded-lg bg-slate-200 p-8">
        <h2 className="mb-5 text-center text-2xl font-bold">
          Welcome to FPT Education
        </h2>
        <p className="mb-8 text-center text-base font-light">
          Sign Up and Start Learning!
        </p>
        <Input className="my-4 text-sm" size="large" placeholder="Full Name" />
        <Input
          className="my-4 text-sm"
          size="large"
          placeholder="Email address"
        />
        <Input className="my-4 text-sm" size="large" placeholder="Password" />
        <Radio>
          I'm in for emails with exciting discounts and personalized
          recommendations
        </Radio>
        <br />
        <button className="my-4 w-full rounded-md bg-amber-500 px-4 py-2 hover:bg-stone-900 hover:text-white">
          Sign Up
        </button>
        <p className="text-center text-sm">
          By signing up, you agree to our{" "}
          <a className="text-amber-500 hover:underline" href="#">
            Terms of Use
          </a>{" "}
          and{" "}
          <a className="text-amber-500 hover:underline" href="#">
            Privacy Policy
          </a>
          .
        </p>
        <Divider />
        <p className="text-center text-sm">
          Already have an account?{" "}
          <span className="text-amber-500 hover:underline">Login</span>
        </p>
      </div>
    </>
  );
};

export default FormSignUp;
