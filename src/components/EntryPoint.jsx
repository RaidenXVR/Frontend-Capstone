import React from "react";
import { useNavigate } from "react-router-dom";
import book_bg1 from "/book_bg1.svg"
import book_open from "/book_open.svg"
import book_bg2 from "/book_bg2.svg"
import book_bg3 from "/book_bg3.svg"
import SVGButton from "./SVGButton";
import RandomStars from "./RandomStar";


export default function EntryPoint() {
    const navigate = useNavigate();

    return (
        <div className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-cyan-200 to-blue-300 overflow-hidden px-4 sm:px-6">
            {/* RandomStar */}
            <div className="absolute inset-0 pointer-events-none z-1">
                <RandomStars amount={28} />
            </div>

            {/* About Us Button */}
            <button
                className="absolute top-4 right-4 sm:top-6 sm:right-8 md:top-8 md:right-12 flex items-center gap-2 bg-white bg-opacity-60 px-4 py-2 rounded-full shadow hover:bg-opacity-80 transition text-sm md:text-base z-10"
                onClick={() => navigate('/about')}
            >
                <svg className="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
                <span className="font-medium text-gray-700">Tentang Kami</span>
            </button>

            {/* Main Content */}
            <div className="relative flex items-center justify-center w-full max-w-6xl px-4 md:px-6 lg:px-10">
                {/* Main Box */}
                <div className="relative bg-orange-100 rounded-3xl shadow-2xl flex flex-col lg:flex-row items-center w-full max-w-5xl min-h-[440px] px-6 md:px-12 py-10 gap-6 md:gap-10">
                    {/* Buttons Section */}
                    <div className="flex-1 min-w-[280px] flex flex-col items-center justify-center gap-4">
                        <SVGButton
                            onClick={() => navigate('/practice')}
                            src={book_bg1}
                            text="Latihan"
                            svgClassName=""
                            buttonClassName="hover:bg-cyan-200 text-white font-extrabold px-6 sm:px-8 py-3 sm:py-4 rounded-2xl shadow-md text-lg sm:text-md transition duration-300"
                        />
                        <SVGButton
                            onClick={() => navigate('/test')}
                            src={book_bg2}
                            text="Tes"
                            svgClassName=""
                            buttonClassName="hover:bg-cyan-200 text-white font-extrabold px-6 sm:px-8 py-3 sm:py-4 rounded-2xl shadow-md text-lg sm:text-xl transition duration-300"
                        />
                        <SVGButton
                            onClick={() => navigate('/leaderboard')}
                            src={book_bg3}
                            text="Leaderboard"
                            svgClassName=""
                            buttonClassName="hover:bg-cyan-200 text-white font-extrabold px-6 sm:px-8 py-3 sm:py-4 rounded-2xl shadow-md text-lg sm:text-xl transition duration-300"
                        />
                    </div>

                    {/* Image Section */}
                    <div className="flex-1 min-w-[280px] flex items-center justify-center">
                        <img src={book_open} className="w-full max-w-xs md:max-w-sm" alt="Book Open" />
                    </div>
                </div>
            </div>
        </div>
    );
}
