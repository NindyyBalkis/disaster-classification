import React from 'react';

export default function HeroSection() {

    function Gambar() {
        return (
            <div className="w-full lg:w-10/11 xl:w-10/11 mt-4 md:mt-0" style={{ width: '100%', height: 'auto' }}>
                <img src="unsplash_ndN00KmbJ1c (2).png" alt="Hero" className="w-full h-full" />
            </div>
        );
    }

    return (
        <div className="w-full h-screen overflow-hidden" style={{ width: '100%', height: 'auto' }} id="Home">
            <img src="unsplash_ndN00KmbJ1c (2).png" alt="Hero" className="w-full h-screen object-cover" />
        </div>
    );
}
