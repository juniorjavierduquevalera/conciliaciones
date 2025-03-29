import React from "react";
import {
  FaUser,
  FaLock,
  FaFacebook,
  FaTwitter,
  FaGoogle,
} from "react-icons/fa";
export default function Icons() {
  return (
    <div>
      <div className="flex justify-center mb-4"></div>
      <div className="flex justify-center space-x-4 mb-14">
        <a href="#" className="text-blue-500 hover:text-blue-700">
          <FaFacebook size={32} />
        </a>
        <a href="#" className="text-blue-400 hover:text-blue-600">
          <FaTwitter size={32} />
        </a>
        <a href="#" className="text-red-500 hover:text-red-700">
          <FaGoogle size={32} />
        </a>
      </div>
    </div>
  );
}
