import React from 'react';
import logo from '../assets/logo-white.png';
import { Facebook, Instagram, Youtube, Mail, Phone } from 'lucide-react';

const Footer = () => {
  return (
    <div className="bg-primary-200 py-10">
      <div className="container  flex flex-col lg:flex-row justify-between gap-10 ">
        {/* Logo and About */}
        <div className="w-full lg:w-[700px] mx-20">
          <img src={logo} alt="Logo" className="w-[264px] -mt-28" />
          <p className="text-neutral-100 text-[15px] -mt-14 leading-7">
            Solusi Pertanian Terintegrasi yang Membantu Petani <br />
            Mengelola Lahan dengan Cerdas, Meningkatkan <br />
            Produktivitas, dan Mendukung Keberlanjutan <br />
            Lingkungan untuk Masa Depan yang Lebih Baik.
          </p>
          <div className="flex mt-10 gap-4">
            <div className="bg-neutral-100 rounded-full p-4">
              <Instagram size={25} strokeWidth={4} color="#3dac21" />
            </div>
            <div className="bg-neutral-100 rounded-full p-4">
              <Youtube size={25} strokeWidth={3} color="#3dac21" />
            </div>
            <div className="bg-neutral-100 rounded-full p-4">
              <Facebook size={25} strokeWidth={3} color="#3dac21" />
            </div>
          </div>
        </div>

        {/* Navigation and Contact */}
        <div className="w-full flex flex-col lg:flex-row gap-10">
          {/* Navigation */}
          <div className="w-full lg:w-[200px]">
            <h1 className="text-neutral-100 font-roboto-500 text-2xl mb-4 mt-1">
              Navigation
            </h1>
            <ul className="space-y-4 text-neutral-100 text-sm pt-3">
              <li className="cursor-pointer hover:text-primary-400">Home</li>
              <li className="cursor-pointer hover:text-primary-400">Features</li>
              <li className="cursor-pointer hover:text-primary-400">About Us</li>
              <li className="cursor-pointer hover:text-primary-400">Testimoni</li>
            </ul>
          </div>

          {/* Contact Us */}
          <div>
            <h1 className="text-neutral-100 text-2xl mb-4 mt-1 font-roboto-500">
              Contact Us
            </h1>
            <ul className="space-y-4 text-neutral-100 text-sm pt-2">
              <li className="flex items-center gap-2">
                <Mail size={20} /> contoh@email.com
              </li>
              <li className="flex items-center gap-2">
                <Phone size={20} /> +62 123 4567 890
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Footer Copyright */}
      <div className="text-center mt-10 text-sm text-neutral-100">
        © 2024 Agreenery. All Rights Reserved.
      </div>
    </div>
  );
};

export default Footer;
