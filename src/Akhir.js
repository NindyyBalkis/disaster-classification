import React from 'react';

export default function Akhir() {
  return (
    <footer className="bg-[#A4AE8D] py-4 flex flex-col items-center">
      <div className="flex items-center mb-6">
      </div>
      <p className="text-white text-center mb-6">
        Terima kasih atas dukungan Anda untuk menyebarluaskan <br/> website kami dengan tujuan menjadi pengetahuan.
      </p>
      <div className="flex justify-center mb-6">
        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="mx-2">
          <img src="ig.jpeg" alt="Instagram" className="w-8 h-8" />
        </a>
        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="mx-2">
          <img src="fb.jpeg" alt="Facebook" className="w-8 h-8" />
        </a>
      </div>
      <p className="text-white text-center">
        © 2024 Disaster Detector. Hak Cipta Dilindungi.
      </p>
    </footer>
  );
}
