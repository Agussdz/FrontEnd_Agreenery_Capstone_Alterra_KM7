import React from "react";
import chekcklist from "../assets/checklist-alert.png";
export default function AlertPassword({
  content,
  bgColor = "bg-white",
  onClose,
}) {
  return (
    <div
      className={`relative ${bgColor} w-[767px] h-[637px] rounded-tl-[10px] shadow-lg`}
      style={{ top: "193px", left: "336px", opacity: "1" }}
    >
      {/* Header */}
      <div
        className="flex justify-center items-center bg-blue-500 text-white rounded-tl-[10px] opacity-50"
        style={{ paddingTop: "28px" }}
      >
        <img style={{ paddingTop: "28px" }} src={chekcklist} />
      </div>

      {/* Content */}
      <div className="flex justify-center items-center p-6">
        <h1
          className="font-roboto text-2xl leading-[40px] text-center"
          style={{
            fontFamily: "Roboto, sans-serif",
            fontSize: "32px",
            fontWeight: 700,
            lineHeight: "40px",
            textUnderlinePosition: "from-font",
            textDecorationSkipInk: "none",
          }}
        >
          password berhasil <br /> diubah
        </h1>
      </div>
      <div className="flex justify-center items-center p-6">
        <p
          className="text-center text-neutral-400 opacity-50"
          style={{
            fontFamily: "Roboto, sans-serif",
            fontSize: "18px",
            fontWeight: 400,
            lineHeight: "24px",
            textUnderlinePosition: "from-font",
            textDecorationSkipInk: "none",
          }}
        >
          Password anda telah berhasil diubah, <br />
          silahkan klik button dibawah ini untuk melanjutkan
        </p>
      </div>

      <div className="flex justify-center items-center p-6">
        <button
          type="button"
          style={{
            width: "508px",
            height: "60px",
            padding: "13px 28px",
            borderRadius: "6px 0 0 0",
          }}
          className="bg-primary-300 font-semibold hover:bg-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-400 text-neutral-100"
        >
          Lanjutkan
        </button>
      </div>
    </div>
  );
}
