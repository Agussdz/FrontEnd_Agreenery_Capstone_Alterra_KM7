import { Sidebar } from "flowbite-react";
import logosidebar from "../assets/logo-white.png";
import { Link } from "react-router-dom";
import useLoginStore from "../stores/useLoginStore";

export function AdminSidebarComponent({ isSidebarOpen }) {
  const logout = useLoginStore((state) => state.logout);

  const handleSignOut = () => {
    logout();
    window.location.href = "/login";
  };
  return (
    <div className="flex h-screen">
      <div
        className={`fixed z-50 inset-y-0 left-0 shadow-lg border-r  transition-transform transform ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } lg:translate-x-0 lg:fixed w-64`}
      >
        <Sidebar
          aria-label="Sidebar with multi-level dropdown example"
          className=" bg-primary-400 relative "
        >
          <Sidebar.Items className="bg-primary-400 min-h-full absolute left-0 top-0 min-w-64  ">
            <Sidebar.ItemGroup className="bg-primary-400">
              <Sidebar.Item className="hover:bg-primary-600 cursor-pointer">
                <img src={logosidebar} alt="Logo" />
              </Sidebar.Item>

              {/* Dashboard */}
              <Sidebar.Item className=" font-roboto-600 text-sm hover:bg-primary-600 cursor-pointer">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="inline-block mr-2"
                >
                  <g clipPath="url(#clip0_548_1227)">
                    <path
                      d="M20.175 7.0875C18.1125 4.9125 15.225 3.5625 12 3.5625C5.73755 3.5625 0.675049 8.6625 0.675049 14.925C0.675049 16.6875 1.08755 18.4125 1.83755 19.95C1.95005 20.175 2.13755 20.325 2.36255 20.4C2.43755 20.4 2.47505 20.4375 2.55005 20.4375C2.55005 20.4375 2.55005 20.4375 2.58755 20.4375C2.58755 20.4375 2.58755 20.4375 2.62505 20.4375C2.66255 20.4375 2.70005 20.4375 2.73755 20.4375C2.81255 20.4375 2.92505 20.4 3.00005 20.3625L4.53755 19.6125C4.95005 19.425 5.13755 18.9 4.91255 18.4875C4.68755 18.075 4.20005 17.8875 3.78755 18.1125L3.03755 18.4875C2.58755 17.4 2.40005 16.2375 2.36255 15.0375H3.93755C4.38755 15.0375 4.80005 14.6625 4.80005 14.175C4.80005 13.6875 4.42505 13.3125 3.93755 13.3125H2.47505C2.73755 11.6625 3.45005 10.1625 4.46255 8.925L5.81255 10.275C5.96255 10.425 6.18755 10.5375 6.41255 10.5375C6.63755 10.5375 6.86255 10.4625 7.01255 10.275C7.35005 9.9375 7.35005 9.4125 7.01255 9.075L5.62505 7.6875C7.12505 6.375 9.03755 5.475 11.175 5.325V7.6125C11.175 8.0625 11.55 8.475 12.0375 8.475C12.4875 8.475 12.9 8.1 12.9 7.6125V5.325C15 5.5125 16.9501 6.375 18.4501 7.6875L17.4 8.7375C17.0625 9.075 17.0625 9.6 17.4 9.9375C17.55 10.0875 17.775 10.2 18 10.2C18.225 10.2 18.45 10.125 18.6 9.9375L19.6125 8.925C20.625 10.1625 21.3 11.6625 21.6 13.3125H20.1376C19.6875 13.3125 19.275 13.6875 19.275 14.175C19.275 14.6625 19.65 15.0375 20.1376 15.0375H21.7125C21.7125 16.2375 21.4875 17.4 21.0375 18.525L20.2875 18.15C19.875 17.925 19.35 18.1125 19.1625 18.525C18.975 18.9375 19.125 19.4625 19.5375 19.65L21.0751 20.4C21.1875 20.475 21.3375 20.475 21.4501 20.475C21.4501 20.475 21.45 20.475 21.4875 20.475C21.4875 20.475 21.4875 20.475 21.525 20.475C21.8251 20.475 22.125 20.2875 22.275 20.025C23.0625 18.4875 23.4375 16.725 23.4375 15C23.3625 11.8875 22.125 9.1125 20.175 7.0875Z"
                      fill="#FBFBFB"
                    />
                    <path
                      d="M14.2876 12.8998L11.7751 14.7748C11.3251 14.8498 10.9126 15.1123 10.6501 15.4873C10.6126 15.5623 10.5751 15.5998 10.5376 15.6748L10.4626 15.7498H10.5001C10.0876 16.5373 10.3126 17.5123 11.0626 18.0748C11.8126 18.5998 12.8251 18.5248 13.4251 17.8873H13.4626L13.5001 17.8123C13.5376 17.7748 13.6126 17.6998 13.6501 17.6248C13.9501 17.2498 14.0251 16.7623 13.9876 16.3123L14.9626 13.3123C15.0751 12.9748 14.6251 12.6748 14.2876 12.8998Z"
                      fill="#FBFBFB"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_548_1227">
                      <rect width="24" height="24" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
                <span className=" align-bottom pl-4 text-neutral-100">
                  Dashboard
                </span>
              </Sidebar.Item>

              {/* Notifikasi */}
              <Sidebar.Item className=" font-roboto-600 text-sm  hover:bg-primary-600 cursor-pointer">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="inline-block mr-2"
                >
                  <g clipPath="url(#clip0_548_1227)">
                    <path
                      d="M16.275 13.0502H12.8625V9.5627C12.8625 9.1127 12.4875 8.7002 12 8.7002C11.55 8.7002 11.1375 9.0752 11.1375 9.5627V13.0502H11.025C10.575 13.0502 10.1625 13.4252 10.1625 13.9127C10.1625 14.4002 10.5375 14.7752 11.025 14.7752H11.1375V14.8877C11.1375 15.3377 11.5125 15.7502 12 15.7502C12.45 15.7502 12.8625 15.3752 12.8625 14.8877V14.7752H16.275C16.725 14.7752 17.1375 14.4002 17.1375 13.9127C17.1375 13.4252 16.725 13.0502 16.275 13.0502Z"
                      fill="#FBFBFB"
                    />
                    <path
                      d="M22.3125 7.16269C22.3125 5.10019 20.6625 3.4502 18.6 3.4502C17.625 3.4502 16.725 3.8252 16.05 4.46269C15.0375 4.0127 13.9875 3.7127 12.825 3.6377V2.3627H13.875C14.325 2.3627 14.7375 1.9877 14.7375 1.5002C14.7375 1.0127 14.3625 0.637695 13.875 0.637695H10.0875C9.63752 0.637695 9.22502 1.0127 9.22502 1.5002C9.22502 1.9877 9.60002 2.3627 10.0875 2.3627H11.1375V3.6752C10.0125 3.7877 8.92502 4.05019 7.91252 4.5002C7.23752 3.8627 6.33752 3.4877 5.36252 3.4877C3.30002 3.4877 1.65002 5.13769 1.65002 7.20019C1.65002 8.21269 2.06252 9.18769 2.81252 9.86269C2.36252 10.9877 2.10002 12.2252 2.10002 13.5002C2.10002 18.9377 6.52502 23.3627 11.9625 23.3627C17.4 23.3627 21.825 18.9377 21.825 13.5002C21.825 12.2252 21.5625 10.9877 21.1125 9.86269C21.9 9.15019 22.3125 8.17519 22.3125 7.16269ZM18.6 5.13769C19.725 5.13769 20.625 6.03769 20.625 7.16269C20.625 7.53769 20.5125 7.91269 20.325 8.21269C19.6125 7.08769 18.7125 6.15019 17.625 5.40019C17.925 5.21269 18.2625 5.13769 18.6 5.13769ZM3.37502 7.16269C3.37502 6.03769 4.27502 5.13769 5.40002 5.13769C5.73752 5.13769 6.07502 5.21269 6.37502 5.40019C5.28752 6.15019 4.38752 7.12519 3.67502 8.21269C3.48752 7.87519 3.37502 7.53769 3.37502 7.16269ZM12 21.6752C7.50002 21.6752 3.82502 18.0002 3.82502 13.5002C3.82502 9.00019 7.50002 5.32519 12 5.32519C16.5 5.32519 20.175 9.00019 20.175 13.5002C20.175 18.0002 16.5 21.6752 12 21.6752Z"
                      fill="#FBFBFB"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_548_1227">
                      <rect width="24" height="24" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
                <span className=" align-bottom pl-4 text-neutral-100">
                  Notifikasi
                </span>
              </Sidebar.Item>

              {/* Perawatan Tanaman */}
              <Sidebar.Item className=" font-roboto-600 text-sm text-neutral-600 hover:bg-primary-600 cursor-pointer">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="inline-block mr-2"
                >
                  <g clipPath="url(#clip0_548_1227)">
                    <path
                      d="M22.125 17.475C21.6375 15.9375 20.1375 15.1125 18.7125 15.525C17.5875 15.8625 16.0125 16.3125 14.8125 16.6875C14.8875 16.3125 14.8125 15.975 14.7 15.75C14.3625 14.8875 13.425 14.5125 12.6375 14.5125H9.14997C8.88747 14.5125 8.62498 14.3625 8.32498 14.1375C7.91248 13.7625 7.42497 13.575 6.86247 13.575H4.04998C2.77498 13.575 1.72498 14.6625 1.72498 16.0125V20.475C1.76248 21.75 2.81248 22.875 4.12498 22.875H7.49998C7.91248 22.875 8.32498 22.7625 8.69998 22.5375C9.67497 23.0625 10.8 23.3625 11.925 23.3625C12.6375 23.3625 13.3125 23.25 13.95 23.0625L20.2125 21.15H20.25C22.2 20.4 22.4625 18.7125 22.125 17.475ZM3.44998 20.4V15.9375C3.44998 15.525 3.74998 15.1875 4.08748 15.1875H6.89997C7.01248 15.1875 7.12498 15.225 7.19998 15.3C7.31248 15.375 7.38748 15.45 7.49998 15.525V21.1125H4.12498C3.74998 21.1875 3.44998 20.85 3.44998 20.4ZM19.6875 19.5375L13.4625 21.45C12.975 21.6 12.4875 21.675 11.9625 21.675C11.1 21.675 10.2375 21.45 9.48747 21.0375L9.18747 20.8875V16.1625H12.6375C12.9375 16.1625 13.125 16.275 13.1625 16.35C13.2 16.425 13.125 16.7625 12.4125 17.4375C12.1125 17.7 12.075 18.15 12.2625 18.4875C12.6 19.0875 13.0125 18.975 14.175 18.6375C14.7375 18.4875 15.4875 18.2625 16.2375 18.0375C17.7375 17.5875 19.2 17.175 19.2 17.175C19.7625 17.025 20.325 17.3625 20.5125 17.9625C20.6625 18.4875 20.625 19.1625 19.6875 19.5375Z"
                      fill="#FBFBFB"
                    />
                    <path
                      d="M13.65 10.2375C13.8 10.35 13.9125 10.5375 13.9125 10.7625V11.5875C13.9125 12.8625 14.925 13.875 16.2 13.875H16.65C17.8875 13.875 18.9375 12.8625 18.9375 11.5875V10.725C18.9375 10.5375 19.05 10.35 19.2 10.2375C20.6625 9.3 21.6 7.72501 21.6375 6.00001C21.675 4.61251 21.15 3.30001 20.2125 2.28751C19.2375 1.27501 17.9625 0.712505 16.6125 0.675005C15.225 0.637505 13.875 1.16251 12.8625 2.13751C11.85 3.11251 11.2875 4.42501 11.2875 5.85001C11.2125 7.65001 12.15 9.3 13.65 10.2375ZM16.65 12.1875H16.2C15.8625 12.1875 15.6 11.925 15.6 11.5875V10.9125H17.2125V11.5875C17.2125 11.925 16.95 12.1875 16.65 12.1875ZM13.9875 3.33751C14.6625 2.70001 15.525 2.36251 16.425 2.36251C16.4625 2.36251 16.5 2.36251 16.5 2.36251C17.4 2.40001 18.2625 2.77501 18.9375 3.45001C19.575 4.12501 19.95 5.02501 19.9125 5.96251C19.875 7.12501 19.275 8.21251 18.2625 8.85001C18.075 8.96251 17.925 9.11251 17.775 9.26251H15C14.85 9.11251 14.7 8.96251 14.5125 8.85001C13.5 8.21251 12.8625 7.08751 12.8625 5.88751C12.9 4.87501 13.275 4.01251 13.9875 3.33751Z"
                      fill="#FBFBFB"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_548_1227">
                      <rect width="24" height="24" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
                <span className=" align-bottom pl-4 text-neutral-100">
                  Langkah-langkah
                </span>
              </Sidebar.Item>

              {/* Artikel */}
              <Sidebar.Item
                as={Link}
                to="/admin-article"
                className=" font-roboto-600 text-sm text-neutral-600 hover:bg-primary-600 cursor-pointer"
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="inline-block mr-2"
                >
                  <g clipPath="url(#clip0_548_1227)">
                    <path
                      d="M21 0.675003H3.00005C1.72505 0.675003 0.675049 1.725 0.675049 3V21C0.675049 22.275 1.72505 23.3625 3.03755 23.3625H21.0375C22.3125 23.3625 23.4 22.3125 23.4 21V3C23.3625 1.725 22.275 0.675003 21 0.675003ZM21.675 21C21.675 21.375 21.375 21.675 21 21.675H3.00005C2.62505 21.675 2.32505 21.375 2.32505 21V3C2.36255 2.625 2.62505 2.3625 3.00005 2.3625H21C21.375 2.3625 21.675 2.6625 21.675 3.0375V21Z"
                      fill="#FBFBFB"
                    />
                    <path
                      d="M5.06257 6.975H10.8001C11.2501 6.975 11.6626 6.6 11.6626 6.1125C11.6626 5.625 11.2876 5.25 10.8001 5.25H5.06257C4.61257 5.25 4.20007 5.625 4.20007 6.1125C4.20007 6.6 4.61257 6.975 5.06257 6.975Z"
                      fill="#FBFBFB"
                    />
                    <path
                      d="M16.6876 11.175H5.06257C4.61257 11.175 4.20007 11.55 4.20007 12.0375C4.20007 12.4875 4.57507 12.9 5.06257 12.9H16.6876C17.1376 12.9 17.5501 12.525 17.5501 12.0375C17.5501 11.55 17.1751 11.175 16.6876 11.175Z"
                      fill="#FBFBFB"
                    />
                    <path
                      d="M13.5001 17.025H5.06257C4.61257 17.025 4.20007 17.4 4.20007 17.8875C4.20007 18.375 4.57507 18.75 5.06257 18.75H13.5001C13.9501 18.75 14.3626 18.375 14.3626 17.8875C14.3626 17.4 13.9876 17.025 13.5001 17.025Z"
                      fill="#FBFBFB"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_548_1227">
                      <rect width="24" height="24" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
                <span className=" align-bottom pl-4 text-neutral-100">
                  Artikel Pertanian
                </span>
              </Sidebar.Item>
              {/* Komunitas Petani */}
              <Sidebar.Item
                as={Link}
                to="/admin-komunitas"
                className=" font-roboto-600 text-sm text-neutral-600 hover:bg-primary-600 cursor-pointer"
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="inline-block mr-2"
                >
                  <g clipPath="url(#clip0_548_1227)">
                    <path
                      d="M7.8376 10.95C10.1626 10.95 12.0751 9.11251 12.0751 6.82501C12.0751 4.53751 10.1626 2.70001 7.8376 2.70001C5.5126 2.70001 3.6001 4.53751 3.6001 6.82501C3.6001 9.11251 5.5126 10.95 7.8376 10.95ZM7.8376 4.42501C9.2251 4.42501 10.3876 5.51251 10.3876 6.86251C10.3876 8.21251 9.2626 9.30001 7.8376 9.30001C6.4126 9.30001 5.2876 8.21251 5.2876 6.86251C5.2876 5.51251 6.4501 4.42501 7.8376 4.42501Z"
                      fill="#FBFBFB"
                    />
                    <path
                      d="M17.25 12.75C19.275 12.75 20.8875 11.175 20.8875 9.1875C20.8875 7.2 19.2375 5.625 17.25 5.625C15.2625 5.625 13.6125 7.2 13.6125 9.1875C13.6125 11.175 15.2625 12.75 17.25 12.75ZM17.25 7.35C18.3375 7.35 19.2 8.175 19.2 9.225C19.2 10.275 18.3375 11.1 17.25 11.1C16.1625 11.1 15.3 10.275 15.3 9.225C15.3 8.175 16.1625 7.35 17.25 7.35Z"
                      fill="#FBFBFB"
                    />
                    <path
                      d="M17.4375 13.125H17.1C15.975 13.125 14.8875 13.4625 13.95 14.025C12.9375 12.675 11.325 11.775 9.52505 11.775H6.18755C3.11255 11.8125 0.675049 14.25 0.675049 17.2875V19.9875C0.675049 20.7 1.23755 21.2625 1.95005 21.2625H22.0875C22.8 21.2625 23.4 20.6625 23.4 19.95V19.05C23.3625 15.7875 20.7 13.125 17.4375 13.125ZM2.36255 19.575V17.2875C2.36255 15.1875 4.08755 13.4625 6.18755 13.4625H9.52505C11.625 13.4625 13.35 15.1875 13.35 17.2875V19.575H2.36255ZM21.675 19.575H15V17.2875C15 16.6875 14.8875 16.0875 14.7 15.525C15.375 15.0375 16.2 14.8125 17.0625 14.8125H17.4C19.725 14.8125 21.6376 16.725 21.6376 19.05V19.575H21.675Z"
                      fill="#FBFBFB"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_548_1227">
                      <rect width="24" height="24" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
                <span className=" align-bottom pl-4 text-neutral-100">
                  Komunitas Petani
                </span>
              </Sidebar.Item>

              {/* Logout */}
              <Sidebar.Item
                className=" font-roboto-600 text-sm text-neutral-600 hover:bg-primary-600 cursor-pointer lg:mt-14"
                onClick={handleSignOut}
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="inline-block mr-2"
                >
                  <defs>
                    <clipPath id="clip0_548_1227">
                      <rect width="24" height="24" fill="white" />
                    </clipPath>
                  </defs>
                  <path
                    d="M21.3376 0.675049C20.8876 0.675049 20.5126 1.05005 20.5126 1.50005V22.5001C20.5126 22.9501 20.8876 23.3251 21.3376 23.3251C21.7876 23.3251 22.1626 22.9501 22.1626 22.5001V1.50005C22.2001 1.05005 21.8251 0.675049 21.3376 0.675049Z"
                    fill="#FBFBFB"
                  />
                  <path
                    d="M12.4875 8.24995C12.15 7.91245 11.625 7.91245 11.2875 8.24995C10.95 8.58745 10.95 9.11245 11.2875 9.44995L13.875 12.075H2.62505C2.17505 12.075 1.80005 12.45 1.80005 12.9C1.80005 13.35 2.17505 13.725 2.62505 13.725H13.875L11.325 16.35C10.9875 16.6875 10.9875 17.2125 11.325 17.55C11.475 17.7 11.7 17.775 11.925 17.775C12.15 17.775 12.375 17.7 12.525 17.5125L16.5 13.5C16.8375 13.1625 16.8375 12.6375 16.5 12.3L12.4875 8.24995Z"
                    fill="#FBFBFB"
                  />
                </svg>
                <span className=" align-bottom pl-4 text-neutral-100">
                  Logout
                </span>
              </Sidebar.Item>
            </Sidebar.ItemGroup>
          </Sidebar.Items>
        </Sidebar>
      </div>
    </div>
  );
}