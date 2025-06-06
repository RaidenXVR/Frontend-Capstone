import React from "react";
import { useNavigate } from "react-router-dom";

// Komponen bintang dinamis
function StarRating({ score }) {
  const maxStars = 5;
  const stars = Math.round((score / 100) * maxStars);
  const starsArr = [];
  for (let i = 0; i < maxStars; i++) {
    starsArr.push(
      <span key={i} className="text-yellow-400 text-2xl">
        {i < stars ? "★" : "☆"}
      </span>
    );
  }
  return <div className="flex items-center justify-center mb-2">{starsArr}</div>;
}

export default function ResultPageTest({ score = 90 }) {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen w-full bg-[#95e2ff] flex flex-col">
      {/* Header mirip halaman latihan */}
      <div className="bg-white flex items-center justify-between px-8 py-4 rounded-b-2xl shadow">
        {/* Logo & Title kiri */}
        <div className="flex items-center gap-3">
          <div className="w-14 h-14 bg-orange-400 rounded-lg flex items-center justify-center">
            <div className="w-10 h-10 bg-cyan-400 rounded flex items-center justify-center">
              <span className="text-white font-bold text-xl">📖</span>
            </div>
          </div>
          <div>
            <div className="flex items-center gap-1">
              <span className="text-orange-500 font-bold text-2xl">Nara</span>
              <span className="text-cyan-500 font-bold text-2xl">Baca</span>
            </div>
            <div className="text-xs text-gray-600 leading-tight">
              Belajar Membaca, <br />
              Ceria Bersama <br />
              NaraBaca
            </div>
          </div>
        </div>
        {/* Navigation kanan */}
        <div className="flex items-center gap-10">
          <button
            className="flex flex-col items-center text-gray-700 hover:text-gray-900"
            onClick={() => navigate("/")}
          >
            <span className="text-2xl">🏠</span>
            <span className="text-sm font-medium">Home</span>
          </button>
          <button
            className="flex flex-col items-center text-gray-700 hover:text-gray-900"
            onClick={() => navigate("/about")}
          >
            <span className="text-2xl">👤</span>
            <span className="text-sm font-medium">About Us</span>
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex flex-col items-center flex-1 justify-center">
        {/* Title */}
        <div className="bg-[#aee2ff] px-8 py-2 rounded-xl mt-8 mb-8 shadow text-center">
          <span className="text-2xl font-bold text-[#222] tracking-widest">
            Kerja Bagus!
          </span>
        </div>

        {/* Score Card */}
        <div className="bg-orange-100 rounded-3xl px-12 py-8 w-full max-w-lg flex flex-col items-center mb-12 shadow-lg">
          <div className="text-lg font-semibold text-gray-800 mb-2">Skor :</div>
          <StarRating score={score} />
          <div className="text-3xl font-bold text-gray-800 mb-1 flex items-center gap-2">
            {score}
            <span role="img" aria-label="trophy" className="text-yellow-500 text-2xl">🏆</span>
          </div>
          <div className="text-center text-sm text-gray-700 mt-2">
            Wow! Kamu makin jago membaca! <br />
            NaraBaca bangga padamu!
          </div>
        </div>

        {/* Tombol bawah */}
        <div className="flex justify-between w-full max-w-md mb-6">
          <button
            onClick={() => navigate("/practice")}
            className="bg-gray-100 hover:bg-gray-300 text-gray-800 font-semibold px-8 py-3 rounded-2xl shadow-md transition"
          >
            Latihan lagi
          </button>
          <button
            onClick={() => navigate("/leaderboard")}
            className="bg-gray-100 hover:bg-gray-300 text-gray-800 font-semibold px-8 py-3 rounded-2xl shadow-md transition"
          >
            Leaderboard
          </button>
        </div>
      </div>
    </div>
  );
}
