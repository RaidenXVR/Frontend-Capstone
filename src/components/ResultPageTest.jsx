import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Header from "./Header";
import axios from "axios";


// Komponen bintang dinamis
function StarRating({ score, baseScore }) {
  const maxStars = 5;
  const stars = baseScore > 0 ? Math.round((score / baseScore) * maxStars) : 0;
  const starsArr = [];
  return (
    <div className="flex items-center justify-center mb-2">
      {[...Array(maxStars)].map((_, i) => (
        <span key={i} className="text-yellow-400 text-2xl">
          {i < stars ? "★" : "☆"}
        </span>
      ))}
    </div>
  );
}

// Fungsi untuk menentukan pesan motivasi/apresiasi berdasarkan skor
function getMessage(score, baseScore) {

  const percentage = score !== 0 && baseScore !== 0 ? ((score / baseScore) * 100) : 0;
  if (percentage < 60) {
    return "Jangan menyerah! Terus berlatih dan kamu pasti bisa lebih baik!";
  } else if (percentage < 70) {
    return "Semangat! Kamu sudah mulai menunjukkan kemajuan!";
  } else {
    return "Wow! Kamu makin jago membaca! NaraBaca bangga padamu!";
  }
}

export default function ResultPageTest({ score: defaultScore = 0, baseScore: defaultBaseScore = 0 }) {
  const navigate = useNavigate();
  const location = useLocation();
  const [username, setUsername] = useState("");
  const [scoreSaved, setScoreSaved] = useState(false);
  const [showGifPopup, setShowGifPopup] = useState(false);
  const [showFailGifPopUp, setShowFailGifPopup] = useState(false);
  const [showLoadingGifPopup, setShowLoadingGifPopup] = useState(false);

  // Untuk ambil score dari Test
  const score = location.state?.score ?? defaultScore;
  const baseScore = location.state?.baseScore ?? defaultBaseScore;

  const message = getMessage(score, baseScore);

  const handleSendData = () => {
    setShowLoadingGifPopup(true);
    axios.post(`${import.meta.env.VITE_API_URL}/leaderboards`, { name: username, score: score, base_score: baseScore }).then((res) => {
      setShowLoadingGifPopup(false);
      console.log(res.status, "status save score");
      if (res.status === 201) {
        setScoreSaved(true);
        setShowGifPopup(true);
        setTimeout(() => {
          setShowGifPopup(false);
          navigate("/leaderboard");
        }, 3000); // Tampilkan popup selama 3 detik
      } else {
        setShowFailGifPopup(true);
        setTimeout(() => {
          setShowFailGifPopup(false);
        }, 3000); // Tampilkan popup selama 3 detik
      }
    }).catch((err) => {
      setShowLoadingGifPopup(false);
      console.error("Error saving score:", err);
      setShowFailGifPopup(true);
      setTimeout(() => {
        setShowFailGifPopup(false);
      }, 3000); // Tampilkan popup selama 3 detik
    })
  }

  return (
    <div className="min-h-screen w-full bg-[#95e2ff] flex flex-col">
      {/* Header */}
      <Header />

      {/* Main Content */}
      <div className="flex flex-col items-center flex-1 justify-center w-full px-4 sm:px-0">
        {/* Title */}
        <div className="bg-purple-200 px-8 py-3 rounded-2xl mb-4 shadow-md mt-2">
          <h1 className="text-2xl font-bold text-gray-800">Kerja Bagus!</h1>
        </div>

        {/* Score Card */}
        <div className="bg-orange-100 rounded-3xl px-6 sm:px-6 py-4 w-full max-w-lg flex flex-col items-center mb-2 shadow-md ">
          <div className="text-lg font-semibold text-gray-800 mb-2">Skor :</div>
          <StarRating score={score} baseScore={baseScore} />
          <div className="text-3xl font-bold text-gray-800 mb-1 flex items-center gap-2">
            {score !== 0 && baseScore !== 0 ? ((score / baseScore) * 100).toFixed(0) : 0}
            <span role="img" aria-label="trophy" className="text-yellow-500 text-2xl">🏆</span>
          </div>
          <div className="text-center text-sm text-gray-700 mt-2">
            {message}
          </div>
        </div>

        {/* Input Username */}
        <h1 className="text-xl font-bold text-gray-800 mt-3 mb-2">Tulis Nama Kamu Di Sini!</h1>
        <div className="bg-purple-200 w-full max-w-lg h-auto rounded-2xl shadow-md p-2 mb-6">
          <div className="flex flex-row gap-3 items-center justify-center">
            <input
              id="inputUsername"
              className="w-full pl-2 pr-2 justify-center text-center font-bold text-xl rounded-md"
              type="text"
              autoFocus
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Nama kamu..."
              disabled={scoreSaved}
            />
            <button className="bg-orange-100 p-3 rounded-2xl hover:bg-orange-200 transition"
              disabled={scoreSaved}
              onClick={handleSendData}
            >
              Simpan
            </button>
          </div>
        </div>

        {/* Tombol bawah */}
        <div className="flex flex-col sm:flex-row justify-center sm:justify-between w-full max-w-lg mb-6 gap-4 sm:gap-6">
          <button
            onClick={() => navigate("/practice")}
            className="bg-gray-100 hover:bg-gray-300 text-gray-800 font-semibold px-8 py-3 rounded-2xl shadow-md transition w-full sm:w-auto"
          >
            Latihan lagi
          </button>
          <button
            onClick={() => navigate("/")}
            className="bg-gray-100 hover:bg-gray-300 text-gray-800 font-semibold px-8 py-3 rounded-2xl shadow-md transition w-full sm:w-auto"
          >
            Ke Menu
          </button>
          <button
            onClick={() => navigate("/leaderboard")}
            className="bg-gray-100 hover:bg-gray-300 text-gray-800 font-semibold px-8 py-3 rounded-2xl shadow-md transition w-full sm:w-auto"
          >
            Leaderboard
          </button>
        </div>
      </div>
      {showGifPopup && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
          <div
            className="bg-white rounded-lg shadow-lg px-10 py-8 flex flex-col items-center animate-popinout"
          >
            <img
              src="https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExN3VsaGk1aXBsbjBuNHM0azViNGd4bTc2NndnbGZpeDR4eDFkZmhmdCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/PYS9of5NOhSGZ7HPpE/giphy.gif" // Replace with your local GIF if needed
              alt="Great job!"
              className="w-48 h-48 mb-4"
            />
            <div className="text-2xl font-bold text-black">Skor Berhasil Disimpan</div>
          </div>
        </div>
      )}
      {showFailGifPopUp && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
          <div
            className="bg-white rounded-lg shadow-lg px-10 py-8 flex flex-col items-center animate-popinout"
          >
            <img
              src="https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExYWZxa3VnbWE3ajU2OXF5YXh5YjhvdTk5dzc2dmJsdjNtNjJiNmdteSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/t4qszh1g5tZhumqycz/giphy.gif" // Replace with your local GIF if needed
              alt="Great job!"
              className="w-48 h-48 mb-4"
            />
            <div className="text-2xl font-bold text-black">Skor Gagal Disimpan.</div>
          </div>
        </div>
      )}

      {showLoadingGifPopup && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
          <div
            className="bg-white rounded-lg shadow-lg px-10 py-8 flex flex-col items-center animate-popinout"
          >
            <img
              src="https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExeHZ1djcwZGR5Z21oNDBtaTNybWZlZHR2OW8ybW5hdmZiYjB3MTFtNiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/Zg11hb1FdPVWwQcSuw/giphy.gif" // Replace with your local GIF if needed
              alt="Memproses..."
              className="w-48 h-48 mb-4"
            />
            <div className="text-2xl font-bold text-black">Memproses... </div>
          </div>
        </div>
      )}
    </div>
  );
}
