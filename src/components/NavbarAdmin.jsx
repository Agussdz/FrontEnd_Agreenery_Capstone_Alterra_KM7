import React from "react";
import { Dropdown, Avatar } from "flowbite-react";
import { Link } from "react-router-dom";

export function NavbarAdmin() {
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
            {/* Nama dan pekerjaan user */}
            <p className="font-roboto-600 text-sm text-neutral-500 mx-3 ">
              Mesiasi Supit <br />
              <span className=" text-gray-500 size-10">Students</span>
            </p>
            <Avatar
              alt="User settings"
              img="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
              rounded
            />
          </div>
        </div>
      </nav>
    </header>
  );
}
