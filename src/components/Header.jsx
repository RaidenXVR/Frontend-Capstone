import { useNavigate } from "react-router-dom";
import logo from "../assets/logo.jpg";

export default function Header() {
  const navigate = useNavigate();

  return (
    <div className="bg-white flex items-center justify-between px-8 py-1 shadow z-10">

      <div className="flex items-center gap-3">
        <div className="w-14 h-14 bg-orange-400 rounded-lg flex items-center justify-center">
          <img
            src={logo}
            alt="Logo NaraBaca"
            className="w-20 h-20 object-contain"
          />
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

      <div className="flex items-center gap-10">
        <button
          className="flex flex-col items-center text-gray-700 hover:text-gray-900"
          onClick={() => navigate("/")}
        >
          <span className="text-2xl">🏠</span>
          <span className="text-sm font-medium">Beranda</span>
        </button>
        <button
          className="flex flex-col items-center text-gray-700 hover:text-gray-900"
          onClick={() => navigate("/about")}
        >
          <span className="text-2xl">👤</span>
          <span className="text-sm font-medium">Tentang Kami</span>
        </button>
      </div>
    </div>
  );
}