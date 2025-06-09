import React from "react";
import { useNavigate } from "react-router-dom";
import charactersImg from "../assets/characters.png";
import RandomStars from "./RandomStar";

export default function MainMenu() {
  const navigate = useNavigate();

  return (
    <div className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-cyan-200 to-blue-300 overflow-hidden">
      {/* Dekorasi bintang */}
      <div className="absolute inset-0 pointer-events-none z-1">
        <RandomStars amount={25} />
      </div>


      {/* About Us Button */}
      <button
        className="absolute top-4 right-4 md:top-8 md:right-12 flex items-center gap-2 bg-white bg-opacity-60 px-4 md:px-5 py-2 rounded-full shadow hover:bg-opacity-80 transition z-20"
        onClick={() => navigate('/about')}
      >
        <svg className="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
        </svg>
        <span className="font-medium text-gray-700">Tentang Kami</span>
      </button>

      {/* Main Content */}
      <div className="relative flex items-center justify-center w-full max-w-6xl px-2 sm:px-4 md:px-6">
        {/* Latar belakang biru besar */}
        <div
          className="absolute left-0 right-0 mx-auto top-1/2 -translate-y-1/2 pointer-events-none"
          style={{
            width: "95vw",
            maxWidth: 1000,
            height: "70vh",
            maxHeight: 600,
            background: "rgba(135, 206, 235, 0.8)",
            borderRadius: "20px",
            boxShadow: "0 8px 32px 0 rgba(0,0,0,0.1)",
            zIndex: 0,
          }}
        ></div>

        {/* Bubble oren di belakang teks */}
        <div
          className="absolute left-10 sm:left-16 md:left-20 top-1/2 -translate-y-1/2 pointer-events-none"
          style={{
            width: "60vw",
            maxWidth: 530,
            height: "45vw",
            maxHeight: 400,
            background: "#ffe5d1",
            borderRadius: "40% 60% 40% 60% / 60% 40% 60% 40%",
            boxShadow: "0 8px 32px 0 rgba(0,0,0,0.08)",
            zIndex: 1,
          }}
        ></div>

        {/* Konten (teks dan gambar) */}
        <div className="absolute flex flex-col md:flex-row items-center w-full max-w-5xl min-h-[340px] md:min-h-[440px] px-4 sm:px-8 md:px-20 py-10 md:py-16" style={{ zIndex: 2 }}>
          {/* Teks */}
          <div className="flex-1 min-w-[220px] md:min-w-[320px] mb-8 md:mb-0 md:mr-8">
            <h2 className="text-lg md:text-2xl font-semibold text-gray-800 mb-2">Selamat Datang di</h2>
            <h1 className="text-4xl md:text-6xl text-gray-900 mb-4 font-poppins tracking-tight">NaraBaca</h1>
            <p className="text-base md:text-lg text-gray-700 mb-1 ">Ayoo kita latihan membaca bersama NaraBaca!</p>
            <p className="text-base md:text-lg text-gray-700 mb-4">Belajar jadi lebih seru dan asik!</p>
            <button
              className="relative z-20 flex items-center gap-2 bg-white border-2 border-blue-400 text-blue-600 font-bold px-5 md:px-6 py-2 rounded-full shadow hover:bg-blue-50 transition"
              onClick={() => navigate('/main-menu')}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M6 4l15 8-15 8z" />
              </svg>
              MULAI
            </button>
          </div>
          {/* Karakter Masuk Dalam Kotak */}
          <div className="absolute bottom-[-48px] md:bottom-[-120px] right-[-16px] md:right-[-50px] pointer-events-none">
            <img
              src={charactersImg}
              alt="Characters"
              className="

                w-[0px] sm:w-[300px] md:w-[450px] lg:w-[650px] xl:w-[900px] 
                h-auto object-contain drop-shadow-xl max-w-none 
                translate-x-4 sm:translate-x-8 md:translate-x-12 lg:translate-x-24 xl:translate-x-36
                translate-y-4 sm:translate-y-8 md:translate-y-12 lg:translate-y-20 xl:translate-y-24
              "
              draggable={false}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
