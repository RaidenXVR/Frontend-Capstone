import React from "react";
import { useNavigate } from "react-router-dom";
import Header from "./Header";
import tiaraPhoto from "../assets/tiara.jpg";
import fitranPhoto from "../assets/fitran.JPG";
import fikriPhoto from "../assets/fikri.jpg";
import farhanPhoto from "../assets/farhan.jpg";
import marviPhoto from "../assets/marvi.jpg";
import mohammedPhoto from "../assets/mohammed.jpg";

const teamMembers = [
  {
    name: "Fitran Alfian Nizar",
    title: "Team Lead & Machine Learning Engineer",
    photo: fitranPhoto,
    description: "Pengembang model machine learning dan pengelola proyek.",
    social: {
      instagram: "https://instagram.com/xavierraiden",
      linkedin: "https://www.linkedin.com/in/fitran-alfian-nizar-100893135/",
    },
  },
  {
    name: "Mohamed",
    title: "Machine Learning Engineer",
    photo: mohammedPhoto,
    description: "Bertanggung jawab dalam pengumpulan dan pemrosesan data serta pengembangan model.",
    social: {
      instagram: "https://instagram.com/meddd.122",
      linkedin: "https://www.linkedin.com/in/mohameddd",
    },
  },
  {
    name: "Marvi Yoga Pratama",
    title: "Machine Learning Engineer",
    photo: marviPhoto,
    description: "Pembuat dan pengelola backend inferensi model machine learning.",
    social: {
      instagram: "https://instagram.com/",
      linkedin: "https://www.linkedin.com/in/marvi-yoga-pratama-488921278/",
    },
  },
  {
    name: "Muhammad Farhan Tarigan",
    title: "Front-End Developer",
    photo: farhanPhoto,
    description: "Desain dan implementasi tampilan dan interaksi aplikasi.",
    social: {
      instagram: "https://instagram.com/amz_farhaan",
      linkedin: "https://www.linkedin.com/in/arfian-farhaan",
    },
  },
  {
    name: "Tiara Azzahra",
    title: "Front-End Developer",
    photo: tiaraPhoto, // gunakan foto lokal import
    description: "Desain dan implementasi tampilan dan interaksi aplikasi.",
    social: {
      instagram: "https://instagram.com/tiaraazzhrra._",
      linkedin: "https://www.linkedin.com/in/tiara-azzahra-6b6533330",
    },
  },
  {
    name: "Muhammad Fikri Zaelani",
    title: "Back-End Developer",
    photo: fikriPhoto,
    description: "Pembuat dan pengelola backend RESTful API dan Database.",
    social: {
      instagram: "https://instagram.com/fikrizaelan1",
      linkedin: "https://www.linkedin.com/in/muhamad-fikri-zaelani-725677296",
    },
  },
];


export default function AboutPage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#d9f4ff] flex flex-col">
      {/* Header */}
      <Header />

      {/* Main Content */}
      <div className="flex-1 flex flex-col items-center px-4 py-8">
        <div className="bg-[#aee2ff] px-6 py-3 rounded-xl shadow mt-4 mb-8 text-center">
          <h1 className="text-2xl sm:text-3xl font-bold text-[#222] tracking-wide">Tentang Kami</h1>
        </div>

        {/* Team Section */}
        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl w-full">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 shadow-md flex flex-col items-center text-center transition transform hover:scale-105"
            >
              <img
                src={member.photo}
                alt={member.name}
                className="w-28 h-28 rounded-full shadow-lg mb-4 object-cover"
              />
              <h2 className="text-lg font-bold text-[#222]">{member.name}</h2>
              <p className="text-sm text-gray-600">{member.title}</p>
              <p className="text-sm text-gray-700 mt-2">{member.description}</p>
              <div className="flex gap-4 mt-4">
                <a
                  href={member.social.instagram}
                  className="text-blue-500 hover:text-blue-700 text-sm"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Instagram
                </a>
                <a
                  href={member.social.linkedin}
                  className="text-blue-500 hover:text-blue-700 text-sm"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  LinkedIn
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Contact Button */}
        <button
          className="bg-[#ffc2b3] hover:bg-[#ffb3a3] text-[#222] font-bold py-3 px-8 rounded-xl mt-10 shadow-md transition duration-300 text-sm sm:text-base"
          onClick={() => alert("Hubungi kami di fitran.nizar@proton.me")}
        >
          Hubungi Kami
        </button>
      </div>
    </div>
  );

}
