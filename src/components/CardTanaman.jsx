import { Card } from "flowbite-react";
import tomat from "../assets/tomat.png";

export default function CardTanaman() {
  return (
    <Card className="max-w-sm w-[195px] h-[248px]">
      <div>
        <img src={tomat} alt="Tomat" className="w-full h-auto" />
      </div>
      <p className=" text-center font-roboto-400 text-[18px] text-neutral-400">
        Tomat
      </p>
    </Card>
  );
}
