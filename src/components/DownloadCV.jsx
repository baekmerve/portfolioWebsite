"use client";
import React from "react";
import { FiDownload } from "react-icons/fi";

function DownloadCV() {
  return (
    <div className="flex gap-4">
      <a
        href="/assets/MerveBaek_resume.pdf"
        download="MerveBaek_resume.pdf"
        className=" p-3 rounded-full ring-1 ring-cyan bg-[#232329] text-white  gap-2 hover:scale-110 transition-transform duration-300 focus:outline-none hover:ring-2 focus:ring-cyan-500  flex items-center "
        aria-label="Download Merve Baek's CV"
      >
        Download CV <FiDownload className="text-2xl" />
      </a>
    </div>
  );
}

export default DownloadCV;
