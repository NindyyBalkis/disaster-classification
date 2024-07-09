import React from 'react';

export default function HeroSection() {
    function Judul() {
        return (
            <div style={{ maxWidth: '500px', margin: '0 auto', textAlign: 'center' }}>
                <div className="dm serif text" style={{ fontSize: '30px', fontWeight: 'bold', lineHeight: '1.2', textAlign: 'left', color: '#3b3c36' }}>
                Tentang Disaster Detector <br />
                </div>
                <p className="dm serif text" style={{ fontSize: '15px', color: '#FFFFFF', maxWidth: '800px', margin: '30px 0', textAlign: 'left' }}>
                    Selamat datang di Disaster Detector, platform inovatif yang didedikasikan untuk mendeteksi dan memahami berbagai jenis bencana alam.<br /><br />
                    Kami hadir untuk memudahkan Anda dalam mengidentifikasi tanda-tanda awal bencana dan meningkatkan pemahaman tentang dampaknya yang dapat terjadi.<br /><br />
                    Di Disaster Detector, misi kami adalah menyediakan pengalaman yang mendalam dalam mengenali dan mempelajari berbagai jenis bencana alam. Kami percaya bahwa dengan pengetahuan yang tepat, kita dapat mengurangi risiko dan meminimalkan kerugian yang disebabkan oleh bencana.<br /><br />
                    Kami menggabungkan teknologi canggih dengan panduan ahli untuk membantu Anda mengidentifikasi bencana dengan akurat dan mendetail. <br /><br />
                    Melalui Disaster Detector, kami berkomitmen untuk memberikan informasi yang dapat diandalkan dan solusi praktis untuk membantu masyarakat dalam menghadapi dan memitigasi dampak bencana. Mari bergabung dengan kami dalam menciptakan dunia yang lebih aman dan lebih siap dalam menghadapi ancaman bencana.
                </p>
            </div>
        );
    }

    function Gambar() {
        return (
            <div className="md:w-1/2 mt-2 md:mt-0 order-2 md:order-1">
                <img src="landing2.png" alt="Hero" className="w-full h-auto md:ml-auto" style={{ maxWidth: '500px' }} />
            </div>
        );
    }
    

    return (
        <div className="flex flex-col md:flex-row justify-between items-center bg-[#A9B489] bg-cover" id="About">
            <Judul />
            <Gambar />
        </div>
    );
}
