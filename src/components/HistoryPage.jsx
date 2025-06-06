export default function HistoryPage({ user }) {
  const rankIcon = [
    "👑", "🥈", "🥉", "4️⃣", "5️⃣"
  ][user.rank - 1] || `${user.rank}️⃣`;

  return (
    <div className="flex items-center bg-white/30 rounded-xl p-3 mb-4">
      <div className="text-lg mr-3">{rankIcon}</div>
      <img className="w-12 h-12 rounded-full mr-4" src={user.avatar} alt={user.name} />
      <div className="flex-1">
        <div className="font-semibold">{user.name}</div>
        <div className="flex items-center text-sm gap-2">
          <span>Achievement</span>
          <img src="/assets/medal.png" alt="medal" className="w-4" />
          <img src="/assets/audio.png" alt="audio" className="w-4" />
        </div>
      </div>
      <div className="text-right">
        <div className="flex items-center gap-1">
          <img src="/assets/trophy.png" alt="trophy" className="w-5" />
          <span className="font-bold">{user.reward}</span>
        </div>
        <p className="text-xs">Rewards</p>
      </div>
    </div>
  );
}
