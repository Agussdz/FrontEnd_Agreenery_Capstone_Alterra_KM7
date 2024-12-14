import React from "react";
import TabelKategoriAdmin from "./TabelKategoriAdmin";

export default function SearchbarAdminComponent() {
  return (
    <div>
      {/* Searchbar */}
      <div>
        <form className="max-w-md mx-auto">
          <label
            htmlFor="default-search"
            className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
          >
            Search
          </label>
          <div className="relative">
            {/* Icon Search */}
            <div className="absolute inset-y-0 start-0 flex items-center ps-4 pointer-events-none">
              <svg
                className="w-5 h-5 text-gray-500 dark:text-gray-400"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                />
              </svg>
            </div>
            {/* Input Search */}
            <input
              type="search"
              id="default-search"
              className="block w-full p-4 ps-12 text-sm text-gray-900 border border-gray-300 rounded-full bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
              placeholder="Cari di sini."
              required=""
            />
            {/* Tombol Submit Kapsul */}
            <button
              type="submit"
              className="text-white absolute end-2.5 bottom-2.5 bg-primary-500 hover:bg-primary-600 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm px-6 py-2"
            >
              Search
            </button>
          </div>
        </form>
      </div>
      <></>
    </div>
  );
}
