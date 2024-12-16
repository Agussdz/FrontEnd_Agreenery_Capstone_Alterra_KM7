import React from "react";
import { Dropdown, Avatar } from "flowbite-react";
import { Link } from "react-router-dom";
import useLoginStore from "../stores/useLoginStore";

export function NavbarComponent() {
  const logout = useLoginStore((state) => state.logout);

  const handleSignOut = () => {
    logout();
    window.location.href = "/login";
  };

  return (
    <header className="antialiased">
      <nav className="bg-white border-gray-200 px-4 lg:px-6 py-2.5 dark:bg-gray-800">
        <div className="flex flex-wrap justify-between items-center">
          {/* Bagian Kiri: Teks Welcome */}
          <div className="flex items-center">
            <div className="sm:ml-10 md:ml-20 lg:ml-0">
              <p className="font-roboto-700 text-primary-500 text-lg">
                Welcome To Agreenery
              </p>
              <p className="font-roboto-300 text-sm text-neutral-500">
                Halo mesiasi, Selamat Datang!
              </p>
            </div>
          </div>

          {/* Bagian Kanan: Icon dan Profile */}
          <div className="flex items-center lg:order-2">
            {/* Notifications Icon */}
            <button
              type="button"
              data-dropdown-toggle="notification-dropdown"
              className="p-2 mr-3 text-gray-500 rounded-lg hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-700 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
            >
              <span className="sr-only">View notifications</span>
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M18.075 11.2875C20.7 11.2875 22.875 9.15001 22.875 6.48751C22.875 3.86251 20.7375 1.68751 18.075 1.68751C16.125 1.68751 14.4375 2.85001 13.6875 4.53751C12.75 4.01251 11.7 3.67501 10.575 3.56251V2.17501C10.575 1.72501 10.2 1.35001 9.75004 1.35001C9.30004 1.35001 8.92504 1.72501 8.92504 2.17501V3.60001C8.88754 3.60001 8.85004 3.60001 8.81254 3.60001C4.98754 4.01251 2.10004 7.08751 2.10004 10.7625V17.4375C2.06254 17.7375 1.98754 17.8875 1.95004 18L1.35004 19.05C1.12504 19.3875 1.08754 19.8375 1.31254 20.2125L1.35004 20.25C1.57504 20.5875 1.91254 20.775 2.32504 20.775H8.96254V21.8625C8.96254 22.3125 9.33754 22.6875 9.78754 22.6875C10.2375 22.6875 10.6125 22.3125 10.6125 21.8625V20.775H17.2875C17.7 20.775 18.0375 20.5875 18.2625 20.25C18.4875 19.875 18.4875 19.425 18.2625 19.05L17.625 18.0375C17.5125 17.85 17.4375 17.6625 17.4375 17.475V11.2125C17.625 11.25 17.85 11.2875 18.075 11.2875ZM18.075 3.37501C19.8 3.37501 21.1875 4.76251 21.1875 6.48751C21.1875 8.21251 19.8 9.60001 18.075 9.60001C16.35 9.60001 14.9625 8.21251 14.9625 6.48751C14.9625 4.76251 16.35 3.37501 18.075 3.37501ZM15.75 10.65V17.475C15.75 17.9625 15.9 18.45 16.1625 18.9375L16.2375 19.0875H9.78754C9.78754 19.0875 9.78754 19.0875 9.75004 19.0875C9.71254 19.0875 9.75004 19.0875 9.71254 19.0875H3.26254L3.41254 18.8625C3.60004 18.525 3.71254 18.15 3.78754 17.625V10.8C3.78754 7.98751 6.03754 5.58751 9.00004 5.28751C10.5375 5.10001 12.0375 5.47501 13.275 6.30001C13.275 6.37501 13.275 6.45001 13.275 6.48751C13.275 8.28751 14.2875 9.82501 15.75 10.65Z"
                  fill="#266B15"
                />
              </svg>
            </button>

            <Link to="/chatbot">
              {/* Chat Icon */}
              <button
                type="button"
                className="p-2 text-gray-500 rounded-lg hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-700 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
              >
                <span className="sr-only">View chat</span>
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clipPath="url(#clip0_521_261)">
                    <path
                      d="M19.8751 4.0125C17.5126 1.6125 14.2126 0.449996 10.8751 0.824996C5.6626 1.35 1.5376 5.5125 0.9751 10.6875C0.7501 13.0875 1.2376 15.4125 2.4376 17.4375L0.937601 21.3375C0.712601 21.8625 0.862601 22.5 1.3126 22.875C1.5751 23.1 1.9126 23.25 2.2501 23.25C2.4751 23.25 2.6626 23.2125 2.8876 23.1L6.3001 21.375C8.3626 22.6125 10.6876 23.1375 13.1251 22.9125C18.3751 22.425 22.5751 18.2625 23.1001 12.975C23.4376 9.6375 22.2751 6.375 19.8751 4.0125ZM21.4126 12.825C20.9626 17.2875 17.4001 20.8125 12.9376 21.225C10.7251 21.45 8.6251 20.8875 6.7876 19.6875C6.6376 19.575 6.4876 19.5375 6.3376 19.5375C6.2251 19.5375 6.0751 19.575 5.9626 19.6125L2.7751 21.1875L4.1626 17.5875C4.2751 17.325 4.2376 17.0625 4.0876 16.8375C2.9251 15.0375 2.4376 12.9375 2.6626 10.7625C3.1126 6.45 6.6376 2.9625 11.0251 2.5125C13.8751 2.2125 16.6876 3.1875 18.6751 5.2125C20.7001 7.2 21.7126 9.975 21.4126 12.825Z"
                      fill="#266B15"
                    />
                    <path
                      d="M8.88765 8.96249H14.4376C14.8876 8.96249 15.3001 8.58749 15.3001 8.09999C15.3001 7.61249 14.9251 7.23749 14.4376 7.23749H8.88765C8.43765 7.23749 8.02515 7.61249 8.02515 8.09999C8.02515 8.58749 8.43765 8.96249 8.88765 8.96249Z"
                      fill="#266B15"
                    />
                    <path
                      d="M16.6501 11.1375H8.88765C8.43765 11.1375 8.02515 11.5125 8.02515 12C8.02515 12.4875 8.40015 12.825 8.88765 12.825H16.6501C17.1001 12.825 17.5126 12.45 17.5126 12C17.5126 11.55 17.1001 11.1375 16.6501 11.1375Z"
                      fill="#266B15"
                    />
                    <path
                      d="M12.7876 15.0375H8.88765C8.43765 15.0375 8.02515 15.4125 8.02515 15.9C8.02515 16.3875 8.40015 16.7625 8.88765 16.7625H12.7501C13.2001 16.7625 13.6126 16.3875 13.6126 15.9C13.6126 15.4125 13.2376 15.0375 12.7876 15.0375Z"
                      fill="#266B15"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_521_261">
                      <rect width="24" height="24" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </button>
            </Link>

            {/* Nama dan pekerjaan user */}
            <p className="font-roboto-600 text-sm text-neutral-500 mx-3 ">
              Mesiasi Supit <br />
              <span className=" text-gray-500 size-10">Students</span>
            </p>

            {/* Dropdown Profile */}
            <Dropdown
              arrowIcon={false}
              inline
              label={
                <Avatar
                  alt="User settings"
                  img="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
                  rounded
                />
              }
            >
              <Dropdown.Header>
                <span className="block text-sm text-primary-700">
                  Mesiasi Supit
                </span>
                <span className="block truncate text-sm font-medium text-primary-700">
                  mesiasi@gmail.com
                </span>
              </Dropdown.Header>
              <Link to="/user-profile">
                <Dropdown.Item className=" text-primary-700">
                  Account
                </Dropdown.Item>
              </Link>

              <Dropdown.Item className=" text-primary-700">FAQ</Dropdown.Item>
              <Dropdown.Item
                onClick={handleSignOut}
                className=" text-primary-700"
              >
                Sign out
              </Dropdown.Item>
            </Dropdown>
          </div>
        </div>
      </nav>
    </header>
  );
}