export default function SVGButton({ onClick, src, text, svgClassName, buttonClassName }) {
  return (
    <button
      onClick={onClick}
          className={`relative p-0 border-none bg-transparent cursor-pointer gap-3 ${buttonClassName}`}
    >
      {/* SVG Image from public folder */}
      <img
        src={src}
        alt="icon"
        className={svgClassName}
      />

      {/* Text overlay */}
      <span className="absolute inset-0 flex items-center justify-center text-white font-bold pointer-events-none">
        {text}
      </span>
    </button>
  );
}
