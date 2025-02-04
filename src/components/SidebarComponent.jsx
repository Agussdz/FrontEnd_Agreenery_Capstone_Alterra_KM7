import { Sidebar } from "flowbite-react";
import logosidebar from "../assets/logo-green.png";
import { Link } from "react-router-dom";

export function SidebarComponent({ isSidebarOpen }) {
  return (
    <div className="flex h-screen">
      <div
        className={`fixed z-50 inset-y-0 left-0 bg-white shadow-lg border-r transition-transform transform ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } lg:translate-x-0 lg:fixed w-64`}
      >
        <Sidebar
          aria-label="Sidebar with multi-level dropdown example"
          className="h-full"
        >
          <Sidebar.Items>
            <Sidebar.ItemGroup>
              <Sidebar.Item>
                <img className="my-6" src={logosidebar} alt="Logo" />
              </Sidebar.Item>

              {/* Home */}
              <Sidebar.Item
                as={Link}
                to="/homepage"
                className=" font-roboto-600 text-sm text-neutral-600"
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
                      d="M21.15 23.3625H16.2375C15.0375 23.3625 14.025 22.3875 14.025 21.15V17.175C14.025 16.875 13.8 16.65 13.5 16.65H10.5C10.2 16.65 9.97495 16.875 9.97495 17.175V21.15C9.97495 22.3875 8.99995 23.3625 7.76245 23.3625H2.84995C1.64995 23.3625 0.637451 22.3875 0.637451 21.15V8.5125C0.637451 7.875 0.937451 7.3125 1.46245 6.975L11.025 0.9375C11.625 0.5625 12.375 0.5625 12.9375 0.9375L22.5 7.0125C23.025 7.35 23.325 7.9125 23.325 8.55V21.15C23.3625 22.35 22.35 23.3625 21.15 23.3625ZM10.5 14.9625H13.5C14.7375 14.9625 15.7125 15.9375 15.7125 17.175V21.15C15.7125 21.45 15.9375 21.675 16.2375 21.675H21.15C21.45 21.675 21.675 21.45 21.675 21.15V8.5125C21.675 8.475 21.6375 8.4375 21.6375 8.4L12.0375 2.3625C12 2.325 11.9625 2.325 11.925 2.3625L2.39995 8.4C2.36245 8.4375 2.32495 8.475 2.32495 8.5125V21.15C2.32495 21.45 2.54995 21.675 2.84995 21.675H7.76245C8.06245 21.675 8.28745 21.45 8.28745 21.15V17.175C8.28745 15.975 9.26245 14.9625 10.5 14.9625Z"
                      fill="#266B15"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_548_1227">
                      <rect width="24" height="24" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
                <span className=" align-bottom pl-4">Home</span>
              </Sidebar.Item>

              {/* Cuaca */}
              <Sidebar.Item
                as={Link}
                to="/cuaca"
                className=" font-roboto-600 text-sm text-neutral-600"
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
                      d="M19.275 12.4125C18.4875 10.8 16.8375 9.7875 15.0375 9.7875C13.2 9.7875 11.55 10.8375 10.8 12.45C9.89996 12.3 8.96246 12.4125 8.09996 12.825C6.67496 13.4625 5.66246 14.775 5.43746 16.275C5.21246 17.5875 5.62496 18.9375 6.48746 19.95C7.38746 21 8.69996 21.6 10.0875 21.6H18.5625C21.0375 21.6 23.175 19.7625 23.4 17.4375C23.55 14.9625 21.75 12.7125 19.275 12.4125ZM21.6375 17.25C21.4875 18.7125 20.1 19.875 18.4875 19.875H10.0125C9.11246 19.875 8.28746 19.5 7.68746 18.825C7.12496 18.1875 6.89996 17.3625 7.04996 16.5C7.19996 15.5625 7.83746 14.7375 8.73746 14.325C9.14996 14.1375 9.59996 14.0625 10.0125 14.0625C10.2 14.0625 10.425 14.1 10.6125 14.1375C11.2875 14.2875 11.9625 13.9125 12.225 13.3125C12.675 12.225 13.7625 11.5125 15 11.5125C16.2 11.5125 17.25 12.1875 17.7375 13.2375C17.9625 13.725 18.4125 14.0625 18.9375 14.1C20.625 14.25 21.7875 15.6375 21.6375 17.25Z"
                      fill="#266B15"
                    />
                    <path
                      d="M6.26245 11.7375C6.71245 11.5875 6.93745 11.1 6.78745 10.6875C6.71245 10.5 6.67495 10.275 6.67495 10.05C6.67495 8.8875 7.64995 7.95 8.84995 7.95C9.56245 7.95 10.2375 8.2875 10.65 8.85C10.9125 9.225 11.4375 9.3375 11.8125 9.0375C12.1875 8.775 12.3 8.25 12 7.875C11.2875 6.8625 10.0875 6.2625 8.81245 6.2625C6.67495 6.2625 4.94995 7.95 4.94995 10.05C4.94995 10.4625 5.02495 10.8375 5.13745 11.2125C5.24995 11.55 5.58745 11.775 5.92495 11.775C6.07495 11.775 6.14995 11.7375 6.26245 11.7375Z"
                      fill="#266B15"
                    />
                    <path
                      d="M9.22493 4.725C9.67493 4.725 10.0874 4.35 10.0874 3.8625V3.2625C10.0874 2.8125 9.71243 2.4 9.22493 2.4C8.73743 2.4 8.36243 2.775 8.36243 3.2625V3.8625C8.36243 4.35 8.77493 4.725 9.22493 4.725Z"
                      fill="#266B15"
                    />
                    <path
                      d="M14.1749 6.825C14.3999 6.825 14.5874 6.75 14.7749 6.6L15.3749 6C15.7124 5.6625 15.7124 5.1375 15.3749 4.8C15.0374 4.4625 14.5124 4.4625 14.1749 4.8L13.5374 5.4C13.1999 5.7375 13.1999 6.2625 13.5374 6.6C13.7249 6.75 13.9499 6.825 14.1749 6.825Z"
                      fill="#266B15"
                    />
                    <path
                      d="M2.13745 9.975H1.49995C1.04995 9.975 0.637451 10.35 0.637451 10.8375C0.637451 11.325 1.01245 11.7 1.49995 11.7H2.13745C2.58745 11.7 2.99995 11.325 2.99995 10.8375C2.99995 10.35 2.58745 9.975 2.13745 9.975Z"
                      fill="#266B15"
                    />
                    <path
                      d="M4.87493 5.4L4.23743 4.8C3.89993 4.4625 3.37493 4.4625 3.03743 4.8C2.69993 5.1375 2.69993 5.6625 3.03743 6L3.67493 6.6C3.82493 6.75 4.04993 6.825 4.27493 6.825C4.49993 6.825 4.72493 6.75 4.87493 6.5625C5.21243 6.2625 5.21243 5.7 4.87493 5.4Z"
                      fill="#266B15"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_548_1227">
                      <rect width="24" height="24" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
                <span className=" align-bottom pl-4">Cuaca</span>
              </Sidebar.Item>

              {/* Jadwal Penyiraman */}
              <Sidebar.Item
                as={Link}
                to="/jadwal-penyiraman"
                className=" font-roboto-600 text-sm text-neutral-600"
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
                      d="M20.7751 9.78749H11.7751C11.3251 9.78749 10.9501 10.1625 10.9501 10.6125C10.9501 11.0625 11.3251 11.4375 11.7751 11.4375H20.7751C21.2626 11.4375 21.6376 11.8125 21.6376 12.3V19.9875C21.6376 20.475 21.2626 20.85 20.7751 20.85H5.02507C4.53757 20.85 4.16257 20.475 4.16257 19.9875V15.4875C4.16257 15.0375 3.78757 14.6625 3.33757 14.6625C2.88757 14.6625 2.51257 15.0375 2.51257 15.4875V20.025C2.51257 21.45 3.67507 22.575 5.06257 22.575H20.8126C22.2376 22.575 23.3626 21.4125 23.3626 20.025V12.3375C23.3251 10.95 22.2001 9.78749 20.7751 9.78749Z"
                      fill="#266B15"
                    />
                    <path
                      d="M5.66256 15.1125L8.66256 17.325C8.81256 17.4375 9.00006 17.475 9.15006 17.475C9.26256 17.475 9.37506 17.4375 9.52506 17.4C9.78756 17.2875 9.97506 16.9875 10.0126 16.6875L10.2751 12.975C10.2751 12.825 10.2751 12.675 10.2001 12.5625L5.70006 2.88749C5.40006 2.28749 4.91256 1.79999 4.27506 1.57499C3.60006 1.34999 2.92506 1.34999 2.28756 1.64999L2.13756 1.72499C0.862561 2.32499 0.300061 3.82499 0.900061 5.09999L5.40006 14.775C5.47506 14.925 5.55006 15.0375 5.66256 15.1125ZM8.43756 15.0375L6.82506 13.875L3.41256 6.56249L5.13756 5.73749L8.55006 13.0875L8.43756 15.0375ZM2.85006 3.26249L3.00006 3.18749C3.22506 3.07499 3.45006 3.07499 3.67506 3.14999C3.90006 3.22499 4.05006 3.37499 4.16256 3.59999L4.42506 4.19999L2.70006 5.02499L2.43756 4.42499C2.21256 3.97499 2.40006 3.44999 2.85006 3.26249Z"
                      fill="#266B15"
                    />
                    <path
                      d="M18.975 15.375C19.425 15.375 19.8 15 19.8 14.55C19.8 14.1 19.425 13.725 18.975 13.725H15.375C14.925 13.725 14.55 14.1 14.55 14.55C14.55 15 14.925 15.375 15.375 15.375H18.975Z"
                      fill="#266B15"
                    />
                    <path
                      d="M11.7001 17.925C11.7001 18.375 12.0751 18.75 12.5251 18.75H18.9751C19.4251 18.75 19.8001 18.375 19.8001 17.925C19.8001 17.475 19.4251 17.1 18.9751 17.1H12.5251C12.0751 17.1 11.7001 17.475 11.7001 17.925Z"
                      fill="#266B15"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_548_1227">
                      <rect width="24" height="24" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
                <span className=" align-bottom pl-4">Jadwal Penyiraman</span>
              </Sidebar.Item>

              {/* Perawatan Tanaman */}
              <Sidebar.Item
                as={Link}
                to="/perawatan"
                className=" font-roboto-600 text-sm text-neutral-600"
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
                      d="M22.125 17.475C21.6375 15.9375 20.1375 15.1125 18.7125 15.525C17.5875 15.8625 16.0125 16.3125 14.8125 16.6875C14.8875 16.3125 14.8125 15.975 14.7 15.75C14.3625 14.8875 13.425 14.5125 12.6375 14.5125H9.14997C8.88747 14.5125 8.62498 14.3625 8.32498 14.1375C7.91248 13.7625 7.42497 13.575 6.86247 13.575H4.04998C2.77498 13.575 1.72498 14.6625 1.72498 16.0125V20.475C1.76248 21.75 2.81248 22.875 4.12498 22.875H7.49998C7.91248 22.875 8.32498 22.7625 8.69998 22.5375C9.67497 23.0625 10.8 23.3625 11.925 23.3625C12.6375 23.3625 13.3125 23.25 13.95 23.0625L20.2125 21.15H20.25C22.2 20.4 22.4625 18.7125 22.125 17.475ZM3.44998 20.4V15.9375C3.44998 15.525 3.74998 15.1875 4.08748 15.1875H6.89997C7.01248 15.1875 7.12498 15.225 7.19998 15.3C7.31248 15.375 7.38748 15.45 7.49998 15.525V21.1125H4.12498C3.74998 21.1875 3.44998 20.85 3.44998 20.4ZM19.6875 19.5375L13.4625 21.45C12.975 21.6 12.4875 21.675 11.9625 21.675C11.1 21.675 10.2375 21.45 9.48747 21.0375L9.18747 20.8875V16.1625H12.6375C12.9375 16.1625 13.125 16.275 13.1625 16.35C13.2 16.425 13.125 16.7625 12.4125 17.4375C12.1125 17.7 12.075 18.15 12.2625 18.4875C12.6 19.0875 13.0125 18.975 14.175 18.6375C14.7375 18.4875 15.4875 18.2625 16.2375 18.0375C17.7375 17.5875 19.2 17.175 19.2 17.175C19.7625 17.025 20.325 17.3625 20.5125 17.9625C20.6625 18.4875 20.625 19.1625 19.6875 19.5375Z"
                      fill="#266B15"
                    />
                    <path
                      d="M13.65 10.2375C13.8 10.35 13.9125 10.5375 13.9125 10.7625V11.5875C13.9125 12.8625 14.925 13.875 16.2 13.875H16.65C17.8875 13.875 18.9375 12.8625 18.9375 11.5875V10.725C18.9375 10.5375 19.05 10.35 19.2 10.2375C20.6625 9.3 21.6 7.72501 21.6375 6.00001C21.675 4.61251 21.15 3.30001 20.2125 2.28751C19.2375 1.27501 17.9625 0.712505 16.6125 0.675005C15.225 0.637505 13.875 1.16251 12.8625 2.13751C11.85 3.11251 11.2875 4.42501 11.2875 5.85001C11.2125 7.65001 12.15 9.3 13.65 10.2375ZM16.65 12.1875H16.2C15.8625 12.1875 15.6 11.925 15.6 11.5875V10.9125H17.2125V11.5875C17.2125 11.925 16.95 12.1875 16.65 12.1875ZM13.9875 3.33751C14.6625 2.70001 15.525 2.36251 16.425 2.36251C16.4625 2.36251 16.5 2.36251 16.5 2.36251C17.4 2.40001 18.2625 2.77501 18.9375 3.45001C19.575 4.12501 19.95 5.02501 19.9125 5.96251C19.875 7.12501 19.275 8.21251 18.2625 8.85001C18.075 8.96251 17.925 9.11251 17.775 9.26251H15C14.85 9.11251 14.7 8.96251 14.5125 8.85001C13.5 8.21251 12.8625 7.08751 12.8625 5.88751C12.9 4.87501 13.275 4.01251 13.9875 3.33751Z"
                      fill="#266B15"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_548_1227">
                      <rect width="24" height="24" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
                <span className=" align-bottom pl-4">Perawatan Tanaman</span>
              </Sidebar.Item>

              {/* Artikel Pertanian */}
              <Sidebar.Item
                as={Link}
                to="/artikel-pertanian"
                className=" font-roboto-600 text-sm text-neutral-600"
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
                      fill="#266B15"
                    />
                    <path
                      d="M5.06257 6.975H10.8001C11.2501 6.975 11.6626 6.6 11.6626 6.1125C11.6626 5.625 11.2876 5.25 10.8001 5.25H5.06257C4.61257 5.25 4.20007 5.625 4.20007 6.1125C4.20007 6.6 4.61257 6.975 5.06257 6.975Z"
                      fill="#266B15"
                    />
                    <path
                      d="M16.6876 11.175H5.06257C4.61257 11.175 4.20007 11.55 4.20007 12.0375C4.20007 12.4875 4.57507 12.9 5.06257 12.9H16.6876C17.1376 12.9 17.5501 12.525 17.5501 12.0375C17.5501 11.55 17.1751 11.175 16.6876 11.175Z"
                      fill="#266B15"
                    />
                    <path
                      d="M13.5001 17.025H5.06257C4.61257 17.025 4.20007 17.4 4.20007 17.8875C4.20007 18.375 4.57507 18.75 5.06257 18.75H13.5001C13.9501 18.75 14.3626 18.375 14.3626 17.8875C14.3626 17.4 13.9876 17.025 13.5001 17.025Z"
                      fill="#266B15"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_548_1227">
                      <rect width="24" height="24" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
                <span className=" align-bottom pl-4">Artikel Pertanian</span>
              </Sidebar.Item>

              {/* Komunitas Petani */}
              <Sidebar.Item
                as={Link}
                to="/komunitas-petani"
                className=" font-roboto-600 text-sm text-neutral-600"
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
                      fill="#266B15"
                    />
                    <path
                      d="M17.25 12.75C19.275 12.75 20.8875 11.175 20.8875 9.1875C20.8875 7.2 19.2375 5.625 17.25 5.625C15.2625 5.625 13.6125 7.2 13.6125 9.1875C13.6125 11.175 15.2625 12.75 17.25 12.75ZM17.25 7.35C18.3375 7.35 19.2 8.175 19.2 9.225C19.2 10.275 18.3375 11.1 17.25 11.1C16.1625 11.1 15.3 10.275 15.3 9.225C15.3 8.175 16.1625 7.35 17.25 7.35Z"
                      fill="#266B15"
                    />
                    <path
                      d="M17.4375 13.125H17.1C15.975 13.125 14.8875 13.4625 13.95 14.025C12.9375 12.675 11.325 11.775 9.52505 11.775H6.18755C3.11255 11.8125 0.675049 14.25 0.675049 17.2875V19.9875C0.675049 20.7 1.23755 21.2625 1.95005 21.2625H22.0875C22.8 21.2625 23.4 20.6625 23.4 19.95V19.05C23.3625 15.7875 20.7 13.125 17.4375 13.125ZM2.36255 19.575V17.2875C2.36255 15.1875 4.08755 13.4625 6.18755 13.4625H9.52505C11.625 13.4625 13.35 15.1875 13.35 17.2875V19.575H2.36255ZM21.675 19.575H15V17.2875C15 16.6875 14.8875 16.0875 14.7 15.525C15.375 15.0375 16.2 14.8125 17.0625 14.8125H17.4C19.725 14.8125 21.6376 16.725 21.6376 19.05V19.575H21.675Z"
                      fill="#266B15"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_548_1227">
                      <rect width="24" height="24" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
                <span className=" align-bottom pl-4">Komunitas Petani</span>
              </Sidebar.Item>
            </Sidebar.ItemGroup>
          </Sidebar.Items>
        </Sidebar>
      </div>
    </div>
  );
}
