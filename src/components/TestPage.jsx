import React, { useState, useRef } from "react";
import { Mic } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function TestPage() {
  const [recording, setRecording] = useState(false);
  const mediaRecorderRef = useRef(null);
  const audioChunksRef = useRef([]);
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();

  const startRecording = async () => {
    try {
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
    } catch (err) {
      console.error("Error accessing microphone", err);
      alert("Tidak dapat mengakses mikrofon. Mohon periksa izin akses mikrofon.");
    }
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
    navigate("/result-tes");
  };

  const handleConfirmNo = () => {
    setShowModal(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-cyan-200 to-blue-300 relative">
      {/* Header */}
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
        <div className="bg-purple-200 px-8 py-3 rounded-2xl mb-12 shadow-md mt-4">
          <h1 className="text-2xl font-bold text-gray-800">TEST</h1>
        </div>

        {/* Word Display Card */}
        <div className="bg-orange-200 w-full max-w-2xl rounded-3xl p-12 mb-12 shadow-lg">
          <h2 className="text-3xl font-bold text-gray-800 text-left">Kata-Kata</h2>
        </div>

        {/* Controls */}
        <div className="flex items-center gap-4">
          {/* Microphone Button */}
          <button
            className={`w-20 h-20 rounded-full shadow-lg transition-all duration-300 flex items-center justify-center ${recording ? "bg-red-500 hover:bg-red-600 scale-110" : "bg-gray-300 hover:bg-gray-400"
              }`}
            onClick={handleMicClick}
            aria-label={recording ? "Stop recording" : "Start recording"}
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
          <div className="bg-[#53b2b1] rounded-lg shadow-lg px-10 py-8 flex flex-col items-center w-[520px]">
            <div className="text-white text-3xl font-bold mb-2 text-center tracking-wide">
              SELESAI ?
            </div>
            <div className="text-white text-base mb-8 text-center opacity-80">
              Apakah kamu sudah selesai membaca semua kata?
            </div>
            <div className="flex gap-8">
              <button
                className="bg-[#f48c5b] hover:bg-[#ffb98a] text-white font-bold px-10 py-3 rounded-md text-lg transition"
                onClick={handleConfirmNo}
              >
                Tidak
              </button>
              <button
                className="bg-[#f48c5b] hover:bg-[#ffb98a] text-white font-bold px-10 py-3 rounded-md text-lg transition"
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
