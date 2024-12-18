import { Sidebar } from "flowbite-react";
import logosidebar from "../assets/logo-green.png";
import youtube from "../assets/youtube.svg";

export default function SidebarCare({step}) {


  return (
    <div className="flex flex-col items-center w-full max-w-sm mx-auto bg-neutral-100">
      {/* Logo */}
      <img src={logosidebar} alt="Logo" className="w-72 p-1 -mb-16 -mt-16" />

      {/* Sidebar Content */}
      <Sidebar aria-label="Sidebar example" className="w-full">
        <Sidebar.Items>
          <Sidebar.ItemGroup className="space-y-4">
            {step?.map((item) => (
              <div
                key={item?.id}
                className="flex items-center bg-neutral-300 p-2 rounded-3xl shadow-sm"
              >
                {/* Icon YouTube */}
                <div className="w-10 h-10 flex items-center justify-center mr-4 mb-7">
                  <img src={youtube} alt="Play Icon" className="w-6 h-6" />
                </div>
                {/* Text Content */}
                <div>
                  <p className="font-medium text-gray-800">{item?.name}</p>
                  {/* <p className="text-sm text-gray-600">{item?.duration}</p> */}
                </div>
              </div>
            ))}
          </Sidebar.ItemGroup>
        </Sidebar.Items>
      </Sidebar>
    </div>
  );
}