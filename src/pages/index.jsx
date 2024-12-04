import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import back from '../assets/background-landing.png'
import cloud from '../assets/cloud-sun.png'
import { ArrowRight, CloudSunRain, MoveRight } from 'lucide-react'
import card1 from '../assets/card1.png'
import car2 from '../assets/car2.png'
import card3 from '../assets/card3.png'
import petik from '../assets/petik.png'
import about from '../assets/about.png'
import orang1 from '../assets/orang1.png'
import orang2 from '../assets/orang2.png'
import orang3 from '../assets/orang3.png'

const Home = () => {
  return (
    <>
      <Navbar/>
      <div className="w-full relative h-screen">
        <img src={back} alt="background" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-primary-800 bg-opacity-40"></div>
        <div className="absolute left-20 top-60 transform -translate-y-1/2 text-neutral-100 font-roboto-700 mt-20">
          <h1 className="text-[54px] font-bold shadow-slate-400">
            Tingkatkan Hasil Pertanian <br /> Anda Dengan Agreenery
          </h1>
          <p className="mt-3 text-xl font-roboto-300 tracking-wide">
            Meningkatkan efisiensi, hasil panen, dan komunitas petani dengan teknologi <br /> modern.
          </p>
          <button className="group flex items-center justify-center mt-10 px-6 py-2 border-2 border-blue-600 rounded-md overflow-hidden relative">
            <span className="transform transition-transform duration-300 group-hover:translate-x-2">
              Mulai Sekarang
            </span>
            <ArrowRight className="ml-2 transform transition-transform duration-300 group-hover:translate-x-2" />
          </button>
        </div>
      </div>

          
        <div className="h-[707px] p-10">
          <h1 className="text-primary-400 text-center font-roboto-700 text-[40px]">
            <span className="text-secondary-200">Fitur</span> Unggulan
          </h1>
          <p className="text-center mt-2 text-primary-400 font-roboto-400 text-[14px]">
            Optimalkan hasil pertanian Anda dengan teknologi terkini yang dirancang untuk mempermudah setiap aktivitas bertani.
          </p>

          
          <div className="grid grid-cols-2 gap-6 mt-20 mx-24 ml-56 cursor-pointer">
            <div className="flex p-10 bg-white rounded-md shadow-md max-w-sm h-40">
              <div className='pr-2'>
                <div className="flex items-center justify-center w-16 h-16 bg-primary-200 rounded-full ">
                  <img src={cloud} alt="" className="w-12" />
                </div>
              </div>
              <div className="ml-4">
                <h4 className="text-lg font-roboto-700 text-gray-800 pb-1">Update Cuaca Real-Time</h4>
                <p className="text-sm text-gray-600">Pantau cuaca terbaru untuk perencanaan kegiatan pertanian Anda.</p>
              </div>
            </div>

            <div className="flex p-10 bg-white rounded-md shadow-md max-w-sm h-40">
              <div>
                <div className="flex items-center justify-center w-16 h-16 bg-primary-200 rounded-full">
                  <img src={cloud} alt="" className="w-12" />
                </div>
              </div>
              <div className="ml-4">
                <h4 className="text-lg font-roboto-700 text-gray-800 pb-1">Update Cuaca Real-Time</h4>
                <p className="text-sm text-gray-600">Pantau cuaca terbaru untuk perencanaan kegiatan pertanian Anda.</p>
              </div>
            </div>

            <div className="flex p-10 bg-white rounded-md shadow-md max-w-sm h-40">
              <div>
                <div className="flex items-center justify-center w-16 h-16 bg-primary-200 rounded-full">
                  <img src={cloud} alt="" className="w-12" />
                </div>
              </div>
              <div className="ml-4">
                <h4 className="text-lg font-roboto-700 text-gray-800 pb-1">Update Cuaca Real-Time</h4>
                <p className="text-sm text-gray-600">Pantau cuaca terbaru untuk perencanaan kegiatan pertanian Anda.</p>
              </div>
            </div>

            <div className="flex p-10 bg-white rounded-md shadow-md max-w-sm h-40 ">
              <div>
                <div className="flex items-center justify-center w-16 h-16 bg-primary-200 rounded-full">
                  <img src={cloud} alt="" className="w-12" />
                </div>
              </div>
              <div className="ml-4">
                <h4 className="text-lg font-roboto-700 text-gray-800 pb-1">Update Cuaca Real-Time</h4>
                <p className="text-sm text-gray-600">Pantau cuaca terbaru untuk perencanaan kegiatan pertanian Anda.</p>
              </div>
            </div>
          </div>

          


          

          
        </div>

        <div className="grid grid-cols-1 mx-20 p-6">
          <p className="text-secondary-400 text-5xl font-roboto-700 leading-snug w-auto">
            <span className="text-primary-400">Mengapa</span> Agreenery adalah pilihan <br />
            tepat <span className="text-primary-400">untuk anda?</span>
          </p>

          <p className="text-primary-400 text-2xl font-roboto-400 text-right border-r-2 p-2 mt-24 border-green-500 leading-8">
            <span className="opacity-45">Agreenery hadir sebagai mitra terpercaya Anda dalam</span> mengelola pertanian <br />
            secara cerdas dan efisien. Dengan teknologi terkini dan komunitas yang solid, <br />
            kami membantu Anda mencapai hasil maksimal <span className="opacity-45">sambil menjaga keberlanjutan.</span>
          </p>
        </div>


          <div class="grid grid-cols-1 md:grid-cols-3 gap-6 p-4 mx-20">
            <div class="relative bg-white shadow-lg rounded-lg overflow-hidden">
              <img
                src={card1}
                alt="Gambar 1"
                class="w-full object-cover"
              />
              <div class="absolute inset-0 flex flex-col justify-end p-5 text-white">
                
                <div class="absolute bg-neutral-200 bg-opacity-30 backdrop-blur-lg rounded-lg p-10 h-48">
                  <img
                    src={petik}
                    alt="Tanda Petik"
                    class="absolute -top-4 right-4 w-10 opacity"
                  />
                  <div class="relative text-neutral-100">
                    <p class="text-lg font-roboto-700">Solusi All-in-One untuk <br />
                      Petani Modern
                    </p>
                    <p class="text-sm mt-2">
                      Semua kebutuhan pertanian Anda, mulai dari <br /> perencanaan hingga panen, tersedia dalam satu <br /> aplikasi yang mudah digunakan.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            
            <div class="relative bg-white shadow-lg rounded-lg overflow-hidden">
              <img
                src={car2}
                alt="Gambar 1"
                class="w-full object-cover"
              />
              <div class="absolute inset-0 flex flex-col justify-end p-5 text-white">
                
                <div class=" bg-neutral-200 bg-opacity-30 backdrop-blur-lg rounded-lg p-10  h-48">
                  <img
                    src={petik}
                    alt="Tanda Petik"
                    class="absolute -top-4 right-4 w-10 opacity"
                  />
                  <div class="relative text-neutral-100 -mt-5 ">
                    <p class="text-lg font-roboto-700">Komunitas Petani yang <br />
                      Kolaboratif
                    </p>
                    <p class="text-sm mt-2 pb-10">
                      Terhubung dengan ribuan petani lain di seluruh <br /> Indonesia. Anda dapat berdiskusi, bertukar <br /> pengalaman, dan menemukan solusi bersama <br /> untuk tantangan pertanian.
                    </p>
                  </div>
                </div>
              </div>
            </div>


            <div class="relative bg-white shadow-lg rounded-lg overflow-hidden">
              <img
                src={card3}
                alt="Gambar 1"
                class="w-full object-cover"
              />
              <div class="absolute inset-0 flex flex-col justify-end p-5 text-white">
                
                <div class=" bg-neutral-200 bg-opacity-30 backdrop-blur-lg rounded-lg p-10 h-48">
                  <img
                    src={petik}
                    alt="Tanda Petik"
                    class="absolute -top-4 right-4 w-10 opacity"
                  />
                  <div class="relative text-neutral-100">
                    <p class="text-lg font-roboto-700">Peningkatan Kesejahteraan <br />
                      Petani
                    </p>
                    <p class="text-sm mt-2">
                      Dengan fitur-fitur kami, Anda dapat <br /> mengoptimalkan hasil panen sekaligus <br /> menghemat waktu dan biaya operasional.
                    </p>
                  </div>
                </div>
              </div>
            </div>
           
          </div>
         
          <div className="relative h-[549px] mt-10 mb-10 ">
            <div className="absolute inset-0 bg-primary-100 opacity-20 z-0"> </div>

            <div className="absolute inset-0 flex items-center z-10 mx-16">
              <img src={about} alt="" className="w-96 mr-8" />
              <div>
                <h1 className="text-4xl font-roboto-700 mb-5"><span className='text-primary-400'>About</span> <span className='text-secondary-400'>Us</span></h1>
                <p className="text-lg text-primary-800 leading-10">
                  Kami adalah platform inovatif yang didedikasikan untuk membantu petani meningkatkan produktivitas dan efisiensi melalui teknologi cerdas. Dengan semangat keberlanjutan dan komunitas yang kuat, kami percaya bahwa pertanian adalah kunci masa depan yang lebih baik.
                  Bersama kami, bertani menjadi lebih mudah, terhubung, dan menguntungkan. Mari tumbuh bersama untuk menciptakan dampak positif bagi Anda dan dunia.
                </p>
              </div>
            </div>
          </div>

          <div className='h-[549px]'>
            <h1 className='text-center text-4xl font-roboto-700'><span className='text-secondary-400'>Apa</span> <span className='text-primary-400'>Kata Mereka?</span></h1>
              <div className=' mt-20 flex  justify-center mx-20'>
                <div class="max-w-sm mx-auto bg-neutral-200 shadow-xl rounded-sm overflow-hidden">
                  <div class="flex items-center p-4">
                  <img className="w-12 h-12 rounded-full" src={orang1} alt="Profile Picture" />
                      <div class="ml-4">
                          <h2 class="text-lg font-roboto-700">Jenita Anggini</h2>
                          <p class="font-roboto-100 text-neutral-400 text-sm">Mahasiswa Pertanian, Yogyakarta</p>
                      </div>
                  </div>
                  <div class="p-4">
                      <p class="text-neutral-400">
                          Sebagai mahasiswa pertanian, aplikasi ini sangat berguna dalam belajar dan mengaplikasikan ilmu pertanian...
                      </p>
                  </div>
                  <div class="p-4">
                      <a href="#" class="text-secondary-400 hover:underline">Read More</a>
                  </div>
              </div>

              <div class="max-w-sm mx-auto bg-neutral-200 shadow-xl rounded-sm overflow-hidden">
                  <div class="flex items-center p-4">
                  <img className="w-12 h-12 rounded-full" src={orang2} alt="Profile Picture" />

                      <div class="ml-4">
                          <h2 class="text-lg font-roboto-700">Sucipto</h2>
                          <p class="font-roboto-100 text-neutral-400 text-sm">Petani Jagung, Malang</p>
                      </div>
                  </div>
                  <div class="p-4">
                      <p class="text-neutral-400">
                          Aplikasi ini sangat membantu saya dalam mengelola pertanian dengan lebih efisien. Dengan fitur cuaca...
                      </p>
                  </div>
                  <div class="p-4">
                      <a href="#" class="text-secondary-400 hover:underline">Read More</a>
                  </div>
              </div>

              <div class="max-w-sm mx-auto bg-neutral-200 shadow-xl rounded-sm overflow-hidden">
                  <div class="flex items-center p-4">
                  <img className="w-12 h-12 rounded-full" src={orang3} alt="Profile Picture" />

                      <div class="ml-4">
                          <h2 class="text-lg font-roboto-700">Renaldi Saputra</h2>
                          <p class="font-roboto-100 text-neutral-400 text-sm">Pemilik Kebun Organik, Bali</p>
                      </div>
                  </div>
                  <div class="p-4">
                      <p class="text-neutral-400">
                          Aplikasi ini membuat pengelolaan pertanian saya lebih mudah dan terorganisir. Fitur...
                      </p>
                  </div>
                  <div class="p-4">
                      <a href="#" class="text-secondary-400 hover:underline">Read More</a>
                  </div>
              </div>
              </div>
              <div className='mt-14 right-0 mx-40 flex justify-end cursor-pointer group'>
                <h1 className='right-0 text-primary-400 transform transition-transform duration-300 group-hover:translate-x-2'>Lihat Lebih Banyak</h1>
                <ArrowRight className='ml-2 text-primary-400 transform transition-transform duration-300 group-hover:translate-x-2' />
              </div>
              
          </div>
        <Footer/>
        
        

    </>
  )
}

export default Home;