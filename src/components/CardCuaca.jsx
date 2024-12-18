import { Card } from "flowbite-react";

export default function CardCuaca() {
  return (
    <>
      <div className="pl-4 pt-8">
        <Card className="w-[630px] h-[297px] flex flex-col justify-between p-6 rounded-3xl bg-[#5EB7DE] backdrop-blur-20 border-none shadow-lg relative">
          {/* Bagian Header */}
          <div className="flex justify-between items-center">
            <div className="flex flex-col">
              <p className="text-left font-roboto-300 text-2xl leading-[36px] text-neutral-100">
                MONDAY
              </p>
              <p className="text-left font-roboto-300 text-l mt-1 text-neutral-100">
                24 Nov 2024
              </p>
            </div>
            <div className="relative flex items-center rounded-full p-1 px-2">
              {/* Latar belakang dengan opacity */}
              <div className="absolute inset-0 bg-neutral-400 rounded-full opacity-25"></div>

              {/* Konten yang tidak terkena opacity */}
              <div className="relative flex items-center">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 12.5625C12.225 12.5625 12.45 12.4875 12.6 12.3L13.4625 11.4375H14.1C14.55 11.4375 14.9625 11.0625 14.9625 10.575V9.9375L15.825 9.075C15.975 8.925 16.0875 8.7 16.0875 8.475C16.0875 8.25 16.0125 8.025 15.825 7.875L14.9625 7.0125V6.375C14.9625 5.925 14.5875 5.5125 14.1 5.5125H13.4625L12.6 4.65C12.3 4.35 11.7375 4.35 11.4 4.65L10.5375 5.5125H9.9C9.45 5.5125 9.0375 5.8875 9.0375 6.375V7.0125L8.175 7.875C7.8375 8.2125 7.8375 8.7375 8.175 9.075L9.0375 9.9375V10.575C9.0375 11.025 9.4125 11.4375 9.9 11.4375H10.5375L11.4 12.3C11.55 12.45 11.775 12.5625 12 12.5625ZM10.725 9.75V9.6C10.725 9.375 10.65 9.15 10.4625 9L9.9375 8.475L10.4625 7.95C10.6125 7.8 10.725 7.575 10.725 7.35V7.2H10.875C11.1 7.2 11.325 7.125 11.475 6.9375L12 6.4125L12.525 6.9375C12.675 7.0875 12.9 7.2 13.125 7.2H13.275V7.35C13.275 7.575 13.35 7.8 13.5375 7.95L14.0625 8.475L13.5 9C13.35 9.15 13.2375 9.375 13.2375 9.6V9.75H13.125C12.9 9.75 12.675 9.825 12.525 10.0125L12 10.5L11.475 9.975C11.325 9.825 11.1 9.7125 10.875 9.7125H10.725V9.75Z"
                    fill="#FBFBFB"
                  />
                  <path
                    d="M21.4125 21.1875L19.5 18.1125C19.2375 17.7 18.7875 17.4375 18.3 17.4375H14.625C16.875 15.1125 19.875 11.5125 19.875 8.475C19.875 4.1625 16.35 0.637501 12.0375 0.637501C7.72495 0.637501 4.19995 4.1625 4.19995 8.475C4.19995 11.475 7.16245 15.1125 9.44995 17.4375H5.73745C5.24995 17.4375 4.79995 17.7 4.53745 18.1125L2.62495 21.1875C2.36245 21.6375 2.32495 22.1625 2.58745 22.6125C2.84995 23.0625 3.29995 23.325 3.82495 23.325H20.25C20.775 23.325 21.225 23.0625 21.4875 22.6125C21.7125 22.1625 21.675 21.6375 21.4125 21.1875ZM12 2.3625C15.4125 2.3625 18.15 5.1375 18.15 8.5125C18.15 11.1 14.9625 14.925 12 17.6625C9.03745 14.925 5.84995 11.0625 5.84995 8.5125C5.84995 5.1 8.58745 2.3625 12 2.3625ZM4.27495 21.675L5.84995 19.1625H11.1375C11.25 19.275 11.325 19.35 11.4375 19.425C11.5875 19.575 11.8125 19.65 12 19.65C12.1875 19.65 12.4125 19.575 12.5625 19.425C12.6375 19.35 12.75 19.275 12.8625 19.1625H18.15L19.725 21.675H4.27495Z"
                    fill="#FBFBFB"
                  />
                </svg>
                <p className="text-lg mr-2 text-neutral-100 font-roboto-500 pl-3">
                  Manado
                </p>
              </div>
            </div>
          </div>

          {/* Bagian Suhu dan Waktu */}
          <div className="flex items-center justify-between mt-4">
            {/* Suhu */}
            <div className="flex items-center space-x-0.5">
              <p className="text-6xl font-bold text-neutral-100 font-roboto-500">
                30
              </p>
              <svg
                width="13"
                height="12"
                viewBox="0 0 13 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className=" -translate-y-7 translate-x-1"
              >
                <rect
                  x="1"
                  y="-1"
                  width="10"
                  height="10"
                  rx="5"
                  transform="matrix(1 0 0 -1 0.411621 10)"
                  fill="#FBFBFB"
                />
                <rect
                  x="1"
                  y="-1"
                  width="10"
                  height="10"
                  rx="5"
                  transform="matrix(1 0 0 -1 0.411621 10)"
                  stroke="#FBFBFB"
                  stroke-width="2"
                />
              </svg>

              {/* Garis Vertikal */}
              <div className="w-px h-[75px] bg-neutral-100 translate-x-2"></div>

              {/* Waktu */}
              <p className="text-5xl font-bold text-neutral-100 font-roboto-500 translate-x-3">
                10:00
              </p>
              <span className="text-lg font-light ml-0.5 text-neutral-100 font-roboto-500 translate-x-3">
                AM
              </span>
            </div>

            {/* Icon Cuaca */}
            <div className="flex items-baseline">
              <svg
                width="194"
                height="119"
                viewBox="0 0 194 119"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M126.319 118.864C125.193 118.954 124.055 118.999 122.907 119H42.7731C37.2572 119.02 31.7915 117.965 26.6896 115.895C21.5877 113.825 16.9499 110.781 13.0423 106.937C9.13474 103.094 6.03421 98.5261 3.91862 93.4967C1.80302 88.4674 0.713989 83.0751 0.713989 77.6292C0.713989 72.1834 1.80302 66.7911 3.91862 61.7617C6.03421 56.7323 9.13474 52.1648 13.0423 48.3212C16.9499 44.4776 21.5877 41.4335 26.6896 39.3635C31.7915 37.2936 37.2572 36.2385 42.7731 36.2588H72.651C82.3376 15.2176 104.647 0.490234 130.619 0.490234C165.48 0.490234 193.74 27.0197 193.74 59.7449C193.74 92.4702 165.48 119 130.619 119C129.174 119 127.741 118.955 126.319 118.864Z"
                  fill="#F2F2F2"
                />
              </svg>
            </div>
          </div>

          {/* Bagian Footer */}
          <div className="flex justify-between items-center">
            <p className="text-neutral-100 font-roboto-400 align-bottom">
              Hari ini adalah hari yang baik untuk menanam
            </p>
          </div>
        </Card>
      </div>
    </>
  );
}