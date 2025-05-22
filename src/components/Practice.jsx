import React from "react";
import { ArrowLeft, Mic } from "lucide-react";
import { useState, useRef } from "react";

export default function Practice() {

    const [recording, setRecording] = useState(false);
    const mediaRecorderRef = useRef(null);
    const audioChunksRef = useRef([]);

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

      // Convert to ArrayBuffer and send to backend
      const arrayBuffer = await audioBlob.arrayBuffer();
      const byteArray = new Uint8Array(arrayBuffer);

        
        //Incomplete, need to return result. Use axios POST
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

    return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-cyan-100 p-4">
      <div className="w-full max-w-2xl relative">
        <button className="absolute top-0 left-0 text-cyan-800 hover:text-cyan-600">
          <ArrowLeft size={32} />
        </button>

        <h1 className="text-2xl font-bold text-center mb-8">Latihan</h1>

        <div className="bg-blue-200 text-center text-2xl font-semibold py-6 rounded-xl mb-10">
          Kata
        </div>

        <div className="flex justify-center">
                    <button className={`p-4 rounded-full shadow-lg transition-all 
                    ${recording ? "bg-red-500" : "bg-green-400 hover:bg-green-500"
                        }`}
            onClick={handleMicClick}>
            <Mic size={40} className="text-white" />
          </button>
        </div>

      </div>
    </div>
  );
}
