import React from "react";
import { FiDownload } from "react-icons/fi";

function DownloadCV() {
  return (
    <div className="flex gap-4">
      <a
        href="/assets/MerveBaek_resume.pdf"
        download="MerveBaek_resume.pdf"
        className=" p-3 rounded-full   bg-cyan dark:bg-[#232329] text-paper  gap-2 hover:scale-110 transition-transform duration-300 focus:outline-none flex items-center "
        aria-label="Download Merve Baek's CV"
      >
        Download CV <FiDownload className="text-2xl" />
      </a>
    </div>
  );
}

export default DownloadCV;
