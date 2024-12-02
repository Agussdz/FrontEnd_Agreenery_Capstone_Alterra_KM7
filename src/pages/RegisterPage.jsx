import loginBg from "../assets/login-bg.png";
import logoBg from "../assets/login-logo-bg.png";
import useRegister from "../hooks/useRegister";
import { Link, useNavigate } from "react-router-dom";

export default function RegisterPage() {
  const {
    formData,
    setFormData,
    loading,
    setLoading,
    handleInputChange,
    handleSubmit,
  } = useRegister();

  return (
    <div className="min-h-screen flex items-center bg-gray-100">
      {/* Left Section (Background Image) */}
      <div className="relative hidden lg:block w-full max-w-[712px] h-[740px]">
        {/* Background Image */}
        <img
          src={loginBg}
          alt="Background"
          className="absolute w-full h-full object-cover"
        />

        {/* Container for Logo and Text */}
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
        <div className="mx-3 lg:mx-[90px] ">
          <h1 className="text-4xl font-roboto-700 text-left text-neutral-500 mb-10">
            <span className="text-primary-500">Create</span> your <br />
            account
          </h1>
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div className="mb-5">
              <label
                htmlFor="display_name"
                className="block text-neutral-400 text-sm font-medium"
              >
                Nama
              </label>
              <input
                type="text"
                id="display_name"
                name="display_name"
                value={formData.display_name}
                onChange={handleInputChange}
                className="mt-1 w-full px-4 py-3 rounded-lg border border-neutral-300 bg-neutral-200 text-sm text-neutral-700 placeholder:text-neutral-500 focus:outline-none focus:ring-2 focus:ring-primary-300"
                placeholder="Masukkan Nama"
                required
              />
            </div>
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
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className="mt-1 w-full px-4 py-3 rounded-lg border border-neutral-300 bg-neutral-200 text-sm text-neutral-700 placeholder:text-neutral-500 focus:outline-none focus:ring-2 focus:ring-primary-300"
                placeholder="user@gmail.com"
                required
              />
            </div>
            <div className="mb-5">
              <label
                htmlFor="phone"
                className="block text-neutral-400 text-sm font-medium"
              >
                Nomor Telepon
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                className="mt-1 w-full px-4 py-3 rounded-lg border border-neutral-300 bg-neutral-200 text-sm text-neutral-700 placeholder:text-neutral-500 focus:outline-none focus:ring-2 focus:ring-primary-300"
                placeholder="Nomor Telepon"
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
                  name="password"
                  value={formData.password}
                  onChange={handleInputChange}
                  className="mt-1 w-full px-4 py-3 rounded-lg border border-neutral-300 bg-neutral-200 text-sm text-neutral-700 placeholder:text-neutral-500 focus:outline-none focus:ring-2 focus:ring-primary-300"
                  placeholder="Masukkan Password"
                  required
                />
              </div>
            </div>

            <button
              type="submit"
              className="w-full py-3 bg-primary-500 text-neutral-100 font-semibold rounded-lg hover:bg-primary-600 focus:outline-none focus:ring-2 focus:ring-primary-400"
              disabled={loading}
            >
              {loading ? "Loading..." : "Sign Up"}
            </button>

            <p className="text-center pt-4 text-sm">
              Already have an account?{" "}
              <Link to={"/login"}>
                <span className="text-primary-500">Sign in</span>
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}
