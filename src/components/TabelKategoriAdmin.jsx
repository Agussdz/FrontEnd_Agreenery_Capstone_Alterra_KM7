import { Table } from "flowbite-react";

export default function TabelKategoriAdmin() {
  return (
    <div className="overflow-x-auto px-[40px] py-[24px]">
      <Table hoverable>
        <Table.Head>
          <Table.HeadCell>Nama Kategori</Table.HeadCell>
          <Table.HeadCell>Jenis Kategori</Table.HeadCell>
          <Table.HeadCell>Aksi</Table.HeadCell>
          <Table.HeadCell>
            <span className="sr-only">Edit</span>
          </Table.HeadCell>
        </Table.Head>
        <Table.Body>
          <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
              {'Apple MacBook Pro 17"'}
            </Table.Cell>
            <Table.Cell>Silver</Table.Cell>
            <Table.Cell>
              <a
                href="#"
                className="font-medium text-cyan-600 hover:underline dark:text-cyan-500"
              >
                <svg
                  width="32"
                  height="24"
                  viewBox="0 0 32 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    width="32"
                    height="24"
                    rx="5"
                    fill="#F10C0C"
                    fill-opacity="0.3"
                  />
                  <path
                    d="M20.225 6.1998H18.3V5.7748C18.3 5.0248 17.7 4.4248 16.95 4.4248H15.025C14.275 4.4248 13.675 5.0248 13.675 5.7748V6.1998H11.75C11.025 6.1998 10.425 6.7998 10.425 7.5248V8.2748C10.425 8.8248 10.75 9.2748 11.225 9.4748L11.625 18.1248C11.675 18.9498 12.325 19.5748 13.15 19.5748H18.775C19.6 19.5748 20.275 18.9248 20.3 18.1248L20.75 9.4498C21.225 9.2498 21.55 8.7748 21.55 8.2498V7.4998C21.55 6.7998 20.95 6.1998 20.225 6.1998ZM14.825 5.7748C14.825 5.6498 14.925 5.5498 15.05 5.5498H16.975C17.1 5.5498 17.2 5.6498 17.2 5.7748V6.1998H14.85V5.7748H14.825ZM11.575 7.5248C11.575 7.4248 11.65 7.3248 11.775 7.3248H20.225C20.325 7.3248 20.425 7.3998 20.425 7.5248V8.2748C20.425 8.3748 20.35 8.4748 20.225 8.4748H11.775C11.675 8.4748 11.575 8.3998 11.575 8.2748V7.5248ZM18.8 18.4498H13.2C12.975 18.4498 12.8 18.2748 12.8 18.0748L12.4 9.5998H19.625L19.225 18.0748C19.2 18.2748 19.025 18.4498 18.8 18.4498Z"
                    fill="#F10C0C"
                  />
                  <path
                    d="M16 11.7749C15.7 11.7749 15.425 12.0249 15.425 12.3499V16.2249C15.425 16.5249 15.675 16.7999 16 16.7999C16.3 16.7999 16.575 16.5499 16.575 16.2249V12.3249C16.575 12.0249 16.3 11.7749 16 11.7749Z"
                    fill="#F10C0C"
                  />
                  <path
                    d="M18.325 12.2498C18.025 12.2248 17.75 12.4748 17.725 12.7748L17.575 15.6498C17.55 15.9498 17.8 16.2248 18.1 16.2498H18.125C18.425 16.2498 18.675 16.0248 18.675 15.7248L18.825 12.8498C18.875 12.5248 18.625 12.2748 18.325 12.2498Z"
                    fill="#F10C0C"
                  />
                  <path
                    d="M13.65 12.2498C13.35 12.2748 13.1 12.5248 13.125 12.8498L13.3 15.7498C13.325 16.0498 13.575 16.2748 13.85 16.2748H13.875C14.175 16.2498 14.425 15.9998 14.4 15.6748L14.25 12.7748C14.225 12.4748 13.95 12.2248 13.65 12.2498Z"
                    fill="#F10C0C"
                  />
                </svg>
              </a>
            </Table.Cell>
            <Table.Cell>
              <a
                href="#"
                className="font-medium text-cyan-600 hover:underline dark:text-cyan-500"
              >
                <svg
                  width="32"
                  height="24"
                  viewBox="0 0 32 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    width="32"
                    height="24"
                    rx="5"
                    fill="#FFA906"
                    fill-opacity="0.25"
                  />
                  <g clip-path="url(#clip0_825_2156)">
                    <path
                      d="M23.3 7.2502C22.5 6.4002 21.65 5.5502 20.8 4.7252C20.625 4.5502 20.425 4.4502 20.2 4.4502C19.975 4.4502 19.75 4.5252 19.6 4.7002L10.175 14.0502C10.025 14.2002 9.925 14.3752 9.85 14.5502L8.475 18.7502C8.4 18.9502 8.45 19.1502 8.55 19.3002C8.675 19.4502 8.85 19.5502 9.075 19.5502H9.175L13.45 18.1252C13.65 18.0502 13.825 17.9502 13.95 17.8002L23.325 8.4502C23.475 8.3002 23.575 8.0752 23.575 7.8502C23.575 7.6252 23.475 7.4252 23.3 7.2502ZM13.15 17.0252C13.125 17.0502 13.1 17.0502 13.075 17.0752L9.85 18.1502L10.925 14.9252C10.925 14.9002 10.95 14.8752 10.975 14.8502L17.85 8.0002L20.025 10.1752L13.15 17.0252ZM20.8 9.3752L18.625 7.2002L20.15 5.6752C20.875 6.3752 21.6 7.1252 22.3 7.8502L20.8 9.3752Z"
                      fill="#FFA31A"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_825_2156">
                      <rect
                        width="16"
                        height="16"
                        fill="white"
                        transform="translate(8 4)"
                      />
                    </clipPath>
                  </defs>
                </svg>
              </a>
            </Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table>
    </div>
  );
}
