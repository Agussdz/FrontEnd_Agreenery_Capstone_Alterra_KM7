import loginBg from "../assets/login-bg.png";
import logoBg from "../assets/login-logo-bg.png";
import { Link } from "react-router-dom";
import useLogin from "../hooks/useLogin";

export default function LoginPage() {
  const {
    email,
    setEmail,
    password,
    setPassword,
    setUser,
    errorMessage,
    setErrorMessage,
    isError,
    setIsError,
    handleLogin,
  } = useLogin();
  return (
    <>
      <div className="flex items-center bg-gray-100 min-h-screen">
        {/* Left Section (Background Image) */}
        <div className="relative hidden lg:block w-full max-w-[712px] h-[740px]">
          <img
            src={loginBg}
            alt="Background"
            className="absolute w-full h-full object-cover"
          />
          <div className="absolute top-[153px] left-[64px] flex flex-col gap-2 w-[500px] h-[311px]">
            <img
              src={logoBg}
              alt="Logo"
              className="w-full h-auto object-contain"
            />
            <p className="text-neutral-100 text-center text-2xl font-roboto-400">
              Selamat datang di Agreenery, platform
              <br />
              pertanian terintegrasi yang membantu <br />
              Anda meraih hasil panen terbaik.
            </p>
          </div>
        </div>

        {/* Right Section (Form Content) */}
        <div className="flex flex-col justify-center px-8 sm:px-16 lg:px-24 py-10 w-full">
          <div className="mx-3 lg:mx-[90px]">
            <h1 className="text-4xl font-roboto-700 text-left text-neutral-500 mb-24">
              <span className="text-primary-500">Sign In</span> to your <br />
              account
            </h1>

            {/* Alert untuk error */}
            {isError && (
              <div
                className="flex items-center p-4 mb-4 text-sm bg-error-100 text-neutral-100 border rounded-lg bg-error-50 "
                role="alert"
              >
                <svg
                  className="flex-shrink-0 inline w-4 h-4 me-3"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
                </svg>
                <span className="sr-only">Info</span>
                <div>
                  <span className="font-medium"> {errorMessage}</span>{" "}
                </div>
              </div>
            )}

            <form className="space-y-6" onSubmit={handleLogin}>
              <div className="mb-5">
                <label
                  htmlFor="email"
                  className="block text-neutral-400 text-sm font-medium"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className={`mt-1 w-full px-4 py-3 bg-neutral-200 rounded-lg border text-sm text-neutral-700 placeholder:text-neutral-500 focus:outline-none focus:ring-2 focus:ring-primary-300 ${
                    isError ? "border-error-400" : "border-neutral-300"
                  }`}
                  placeholder="name@gmail.com"
                  required
                />
              </div>
              <div className="mb-5 relative">
                <label
                  htmlFor="password"
                  className="block text-neutral-400 text-sm font-medium"
                >
                  Password
                </label>
                <div className="relative">
                  <input
                    type="password"
                    id="password"
                    value={password}
                    placeholder="Masukkan Password"
                    onChange={(e) => setPassword(e.target.value)}
                    className={`mt-1 w-full px-4 py-3 bg-neutral-200 rounded-lg border text-sm text-neutral-700 placeholder:text-neutral-500 focus:outline-none focus:ring-2 focus:ring-primary-300 ${
                      isError ? "border-error-400" : "border-neutral-300"
                    }`}
                    required
                  />
                </div>
              </div>
              <div className="flex justify-between items-center mb-5">
                <span className="text-neutral-500 opacity-50 text-right w-full pr-4">
                  Remember me
                </span>

                <label className="inline-flex items-center cursor-pointer">
                  <input type="checkbox" value="" className="sr-only peer" />
                  <div className="relative w-11 h-6 bg-neutral-300 after:border-neutral-100 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-primary-100 rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-neutral-100 after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-neutral-100 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary-400"></div>
                </label>
              </div>

              <div>
                <p className="text-primary-500 text-sm">Forgot password?</p>
              </div>

              <button
                type="submit"
                className="w-full py-3 bg-primary-500 text-neutral-100 font-semibold rounded-lg hover:bg-primary-600 focus:outline-none focus:ring-2 focus:ring-primary-400"
              >
                Sign In
              </button>

              <p className="text-center pt-4 text-sm">
                Don't have an account?{" "}
                <Link to={"/register"}>
                  <span className="text-primary-500">Sign Up</span>
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
