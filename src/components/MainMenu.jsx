// import React from "react";

import { useNavigate } from "react-router-dom";

export default function MainMenu() {
    const navigate = useNavigate();

  return (
    <div className="w-screen h-screen flex flex-col items-center justify-center bg-cyan-100">
      <h1 className="text-3xl font-bold mb-8">NaraBaca</h1>

      <div className="flex flex-col gap-4 w-full max-w-sm">
              <button className="bg-green-500 hover:bg-green-600 text-white text-xl font-semibold py-3 rounded-xl shadow-md transition duration-300"
              onClick={()=>navigate('practice')}>
          Latihan
        </button>

              <button className="bg-green-500 hover:bg-green-600 text-white text-xl font-semibold py-3 rounded-xl shadow-md transition duration-300"
              onClick={()=>navigate('test')}>
          Tes
        </button>

              <button className="bg-green-500 hover:bg-green-600 text-white text-xl font-semibold py-3 rounded-xl shadow-md transition duration-300"
              onClick={()=> navigate('history')}>
          Lihat Progres Belajar
        </button>
      </div>
    </div>
  );
}
