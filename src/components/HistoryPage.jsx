import React from "react";
import { useNavigate } from "react-router-dom";

const historyData = [
  {
    rank: 1,
    name: "Tiara",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
    achievement: "Achievement",
    coin: 100,
    mic: 1,
    reward: "₹9300",
    isTop: true,
  },
  {
    rank: 2,
    name: "Azzahra",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
    achievement: "Achievement",
    coin: 90,
    mic: 1,
    reward: "₹8900",
  },
  {
    rank: 3,
    name: "Ara",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
    achievement: "Achievement",
    coin: 90,
    mic: 1,
    reward: "₹8900",
  },
  {
    rank: 4,
    name: "Zahra",
    avatar: "https://randomuser.me/api/portraits/men/33.jpg",
    achievement: "Achievement",
    coin: 90,
    mic: 1,
    reward: "₹8900",
  },
  {
    rank: 5,
    name: "Azzah",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
    achievement: "Achievement",
    coin: 90,
    mic: 1,
    reward: "₹8900",
  },
];

function getRankIcon(rank, isTop) {
  if (isTop) return <span className="text-2xl mr-2">🏆</span>;
  if (rank === 2) return <span className="text-xl mr-2">🥈</span>;
  if (rank === 3) return <span className="text-xl mr-2">🥉</span>;
  return (
    <span className="text-base mr-2 bg-white rounded-full px-2 py-0.5 border text-blue-500 font-bold">
      {rank}
    </span>
  );
}

export default function HistoryPage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#8ee6fc] flex flex-col">
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
      {/* HEADER */}
      <div className="bg-white flex items-center justify-between px-8 py-4 rounded-b-2xl shadow">
        {/* Logo & Title */}
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
        {/* Navigation */}
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
            <span className="text-2xl">👥</span>
            <span className="text-sm font-medium">About Us</span>
          </button>
          <button
            className="flex flex-col items-center text-gray-700 hover:text-gray-900"
            onClick={() => navigate("/test")}
          >
            <span className="text-2xl">📝</span>
            <span className="text-sm font-medium">Test</span>
          </button>
        </div>
      </div>

      {/* STAR DECORATION */}
      <span className="absolute left-10 top-1/3 text-white text-3xl select-none">✦</span>
      <span className="absolute right-10 bottom-10 text-white text-3xl select-none">✦</span>

      {/* HISTORY TITLE */}
      <div className="w-full flex justify-center mt-8 mb-6">
        <div className="bg-[#7fd0f6] px-16 py-3 rounded-xl shadow">
          <span className="text-3xl font-bold tracking-wide text-[#222]">History</span>
        </div>
      </div>

      {/* HISTORY LIST */}
      <div className="flex flex-col items-center w-full px-4 pb-12">
        {historyData.map((item, idx) => (
          <div
            key={idx}
            className="flex items-center w-full max-w-4xl bg-[#aeeaff] rounded-2xl mb-6 px-8 py-4 shadow-lg"
          >
            {/* Rank */}
            <div className="flex items-center w-16 justify-center">
              {getRankIcon(item.rank, item.isTop)}
            </div>
            {/* Avatar & Name */}
            <div className="flex items-center gap-3 w-56">
              <img
                src={item.avatar}
                alt={item.name}
                className="w-12 h-12 rounded-full border-2 border-white shadow"
              />
              <div className="font-bold text-lg text-[#222]">{item.name}</div>
            </div>
            {/* Achievement */}
            <div className="flex-1 flex items-center gap-3">
              <span className="text-gray-600 text-sm">Achievement:</span>
              <span className="text-yellow-500 text-xl">🪙</span>
              <span className="font-bold text-[#222]">{item.coin}</span>
              <span className="text-pink-400 text-xl">🎤</span>
              <span className="font-bold text-[#222]">{item.mic}</span>
            </div>
            {/* Reward */}
            <div className="flex items-center gap-2 min-w-[120px] justify-end">
              <span className="text-yellow-500 text-2xl">🏆</span>
              <div>
                <span className="font-bold text-[#222] text-lg">{item.reward}</span>
                <div className="text-xs text-gray-500">Rewards</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
