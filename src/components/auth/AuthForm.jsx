import { useState } from "react";

function AuthForm() {
  const [isLogin, setisLogin] = useState(false);
  const toggleLogin = () => {
    setisLogin((prevIsLogin) => !prevIsLogin);
  };
  return (
    <div>
      <div className="flex flex-col items-center border-2 rounded border-black p-5 max-w-xs justify-center mb-5">
        <img src="/logo.png" alt="Instagram logo" className="mb-2" />
        {!isLogin && (
          <input
            type="email"
            placeholder=" Email"
            className="mb-5 w-full border-2 border-slate-200 h-7 rounded"
          />
        )}

        <input
          type="text"
          placeholder=" Username"
          className="mb-5 w-full border-2 border-slate-200 h-7 rounded"
        />
        {!isLogin && (
          <input
            type="text"
            placeholder=" Full Name"
            className="mb-5 w-full border-2 border-slate-200 h-7 rounded"
          />
        )}
        <input
          type="password"
          placeholder=" Password"
          className="mb-5 w-full border-2 border-slate-200 h-7 rounded"
        />
        <button className="bg-blue-400 hover:bg-blue-500 text-white font-bold py-2 px-4 rounded mb-4 w-full">
          {isLogin ? "Login" : "Signup"}
        </button>

        <h3 className="mb-4">OR</h3>

        <span className="inline-flex items-baseline">
          <img
            src="/google.png"
            alt=""
            className="self-center w-5 h-5 rounded-full mx-1"
          />
          <a href="https://google.com/">
            {" "}
            {isLogin ? "Login with Google" : "Signup up with Google"}
          </a>
        </span>
      </div>

      <div className="flex flex-col items-center border-2 rounded border-black p-5 max-w-xs justify-center">
        <span>
          {isLogin ? "Don't have an account ? " : "Already have and account? "}
          {!isLogin && (
            <a href="#" className="text-blue-700" onClick={toggleLogin}>
              Log in
            </a>
          )}
          {isLogin && (
            <a href="#" className="text-blue-700" onClick={toggleLogin}>
              Sign up
            </a>
          )}
        </span>
      </div>
    </div>
  );
}

export default AuthForm;
