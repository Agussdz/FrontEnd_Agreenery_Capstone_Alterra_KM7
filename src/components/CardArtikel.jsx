import { Card } from "flowbite-react";
import { Button } from "flowbite-react";
import Image from "../assets/image-1.webp";

export default function CardArtikel() {
  return (
    <Card
      className="w-[296px] h-[326px] rounded-lg relative" // Menambahkan ukuran spesifik
      renderImage={() => (
        <img
          width={302}
          height={189}
          src={Image}
          alt="image 1"
          className=" rounded-lg"
        /> // Sesuaikan ukuran gambar agar sesuai dengan card
      )}
    >
      <h5 className="font-roboto-500 text-[18px] items-center text-center relative bottom-[19px]">
        Pengertian dan Konsep Pertanian berkelanjutan
      </h5>

      <div className="flex justify-center">
        <Button
          color="light"
          pill
          className="w-[109px] h-[34px] items-center bottom-4 absolute text-primary-500"
        >
          View Detail
        </Button>
      </div>
    </Card>
  );
}