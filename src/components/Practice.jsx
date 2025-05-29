import React, { useState, useRef } from "react";
import { Mic } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function Practice() {
  const [recording, setRecording] = useState(false);
  const mediaRecorderRef = useRef(null);
  const audioChunksRef = useRef([]);
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();

  const startRecording = async () => {
    const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
    const mediaRecorder = new MediaRecorder(stream);
    mediaRecorderRef.current = mediaRecorder;
    audioChunksRef.current = [];

    mediaRecorder.ondataavailable = (event) => {
      audioChunksRef.current.push(event.data);
    };

    mediaRecorder.onstop = async () => {
      const audioBlob = new Blob(audioChunksRef.current, { type: "audio/wav" });
      const arrayBuffer = await audioBlob.arrayBuffer();
      const byteArray = new Uint8Array(arrayBuffer);

      try {
        await fetch("/api/upload-audio", {
          method: "POST",
          headers: {
            "Content-Type": "application/octet-stream",
          },
          body: byteArray,
        });
        console.log("Audio sent successfully");
      } catch (error) {
        console.error("Failed to send audio", error);
      }
    };

    mediaRecorder.start();
    setRecording(true);
  };

  const stopRecording = () => {
    mediaRecorderRef.current?.stop();
    setRecording(false);
  };

  const handleMicClick = () => {
    if (recording) {
      stopRecording();
    } else {
      startRecording();
    }
  };

  const handleFinishClick = () => {
    setShowModal(true);
  };

  const handleConfirmYes = () => {
    setShowModal(false);
    navigate("/result");
  };

  const handleConfirmNo = () => {
    setShowModal(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-cyan-200 to-blue-300 relative">
    <div className="absolute inset-0 pointer-events-none z-0">
  <svg width="100%" height="100%">
    {/* Baris bintang atas */}
    <text x="22%" y="15%" fontSize="18" fill="white" opacity="0.85">✦</text>
    <text x="40%" y="10%" fontSize="24" fill="white" opacity="0.9">✦</text>
    <text x="60%" y="6%" fontSize="20" fill="white" opacity="1">✧</text>
    <text x="78%" y="12%" fontSize="28" fill="white" opacity="0.95">✦</text>
    <text x="90%" y="8%" fontSize="16" fill="white" opacity="0.8">✧</text>
    {/* Tengah */}
    <text x="12%" y="40%" fontSize="18" fill="white" opacity="0.85">✦</text>
    <text x="33%" y="35%" fontSize="22" fill="white" opacity="1">✦</text>
    <text x="53%" y="30%" fontSize="16" fill="white" opacity="0.8">✧</text>
    <text x="72%" y="40%" fontSize="26" fill="white" opacity="0.9">✦</text>
    <text x="85%" y="30%" fontSize="18" fill="white" opacity="0.85">✦</text>
    {/* Bawah */}
    <text x="8%" y="80%" fontSize="24" fill="white" opacity="1">✦</text>
    <text x="25%" y="90%" fontSize="18" fill="white" opacity="0.8">✧</text>
    <text x="44%" y="85%" fontSize="28" fill="white" opacity="1">✦</text>
    <text x="62%" y="92%" fontSize="18" fill="white" opacity="0.8">✦</text>
    <text x="80%" y="84%" fontSize="24" fill="white" opacity="1">✦</text>
    <text x="95%" y="95%" fontSize="16" fill="white" opacity="0.8">✧</text>
    {/* Random tengah bawah */}
    <text x="18%" y="60%" fontSize="20" fill="white" opacity="0.95">✦</text>
    <text x="37%" y="68%" fontSize="18" fill="white" opacity="0.85">✧</text>
    <text x="60%" y="70%" fontSize="22" fill="white" opacity="1">✦</text>
    <text x="75%" y="60%" fontSize="16" fill="white" opacity="0.8">✧</text>
  </svg>
</div>
      {/* Header mirip History */}
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
      <div className="flex flex-col items-center justify-center min-h-[calc(100vh-120px)] p-8">
        {/* Title */}
        <div className="bg-purple-200 px-8 py-3 rounded-2xl mb-12 shadow-md">
          <h1 className="text-2xl font-bold text-gray-800">LATIHAN</h1>
        </div>

        {/* Word Display Card */}
        <div className="bg-orange-200 w-full max-w-2xl rounded-3xl p-12 mb-12 shadow-lg">
          <h2 className="text-3xl font-bold text-gray-800 text-left">Kata-Kata</h2>
        </div>

        {/* Controls */}
        <div className="flex items-center gap-8">
          {/* Microphone Button */}
          <button
            className={`w-20 h-20 rounded-full shadow-lg transition-all duration-300 flex items-center justify-center
              ${recording ? "bg-red-500 hover:bg-red-600 scale-110" : "bg-gray-300 hover:bg-gray-400"}`}
            onClick={handleMicClick}
          >
            <Mic size={32} className={recording ? "text-white" : "text-gray-600"} />
          </button>

          {/* Finish Button */}
          <button
            className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold px-8 py-3 rounded-2xl shadow-md transition duration-300"
            onClick={handleFinishClick}
          >
            Selesai
          </button>
        </div>
      </div>

      {/* Modal Konfirmasi */}
      {showModal && (
        <div className="fixed inset-0 bg-cyan-200/40 flex items-center justify-center z-50">
          <div className="bg-[#53b2b1] rounded-lg shadow-lg px-12 py-10 flex flex-col items-center w-[500px]">
            <div className="text-white text-2xl font-bold mb-8 text-center tracking-wide">
              Sudah selesai membaca?
            </div>
            <div className="flex gap-16">
              <button
                className="bg-[#f48c5b] hover:bg-[#ffb98a] text-white font-bold px-8 py-3 rounded-lg text-lg transition"
                onClick={handleConfirmNo}
              >
                Tidak
              </button>
              <button
                className="bg-[#f48c5b] hover:bg-[#ffb98a] text-white font-bold px-8 py-3 rounded-lg text-lg transition"
                onClick={handleConfirmYes}
              >
                Ya
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
