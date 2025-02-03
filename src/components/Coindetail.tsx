import Image from "next/image";
import React from "react";
import dog from "../../public/dogimage.png";
import copy from "../../public/copy.png";
import dogwifhatimage from "../../public/dogwifhat.png";
import fire from "../../public/fire.png";

const Coindetail = () => {
  return (
    <div className="w-full mx-auto bg-[#1a1a1a] text-white rounded-2xl shadow-lg p-3 space-y-6">
      {/* Header Section */}
      <div className="flex items-center gap-3">
        <Image
          alt="dog"
          src={dog}
          className="w-10 h-10 object-contain rounded-full"
        />
        <span className="text-lg font-semibold">dogwifhat</span>
        <button className="p-1 hover:bg-gray-700 rounded-lg">
          <Image alt="copy" src={copy} className="w-6 h-6 object-contain" />
        </button>
        <Image alt="fire" src={fire} className="w-6 h-6 object-contain" />
        <span className="text-gray-400">#1</span>
      </div>

      {/* Image Section */}
      <div className="rounded-xl overflow-hidden border border-gray-700">
        <Image
          alt="dogwifhat"
          src={dogwifhatimage}
          className="w-full h-auto object-cover"
        />
      </div>
    </div>
  );
};

export default Coindetail;
