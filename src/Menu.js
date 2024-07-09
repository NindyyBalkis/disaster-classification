import React from 'react';

export default function DamageSection() {

  function Card({ image, title, description, reverse }) {
    return (
      <div className={`flex flex-col lg:flex-row items-center bg-[#FFF8E7] p-6 rounded-lg shadow-md m-4 max-w-6xl ${reverse ? 'lg:flex-row-reverse' : ''}`} id="Menu">
        <img src={image} alt={title} className="w-full lg:w-1/2 h-auto rounded-lg mb-6 lg:mb-0" />
        <div className="lg:ml-6 lg:mr-6 text-left w-full">
        <h2 className="text-3xl lg:text-4xl font-bold font-dm-serif-text text-[#556B2F] mb-4">{title}</h2>
        <p className="text-lg text-gray-700 font-dm-serif-text mb-6">{description}</p>
        <button className="bg-[#352E24] text-white py-2 px-4 rounded font-dm-serif-text">
            Selanjutnya
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center bg-[#FFF8E7] py-10 px-5">
      <Card 
        image="DI.png" 
        title="Damage Infrastructure" 
        description="Kerusakan infrastruktur melibatkan gangguan pada bangunan, jalan, dan fasilitas penting akibat bencana. Hal ini menyebabkan kerugian ekonomi besar dan menghambat pemulihan." 
      />
      <Card 
        image="water.png" 
        title="Water Disaster" 
        description="Bencana air seperti banjir dan tsunami menyebabkan kerusakan luas pada komunitas dan infrastruktur. Dampaknya meliputi kehilangan nyawa dan kerusakan properti." 
        reverse
      />
      <Card 
        image="fire.png" 
        title="Fire Disaster" 
        description="Bencana kebakaran mencakup kebakaran hutan dan perkotaan yang merusak wilayah luas. Kebakaran ini bisa menyebar cepat karena kondisi kering dan angin kencang. " 
      />
      <Card 
        image="land.png" 
        title="Land Disaster" 
        description="Bencana darat seperti gempa bumi dan tanah longsor mengubah lanskap secara signifikan. Bencana ini sering terjadi tiba-tiba dan menyebabkan kehancuran besar. " 
        reverse
      />
      <Card 
        image="nd.png" 
        title="Non Damage Infrastructure" 
        description="Infrastruktur non-kerusakan tetap berfungsi selama dan setelah bencana, seperti rumah sakit dan jaringan listrik. Memelihara infrastruktur ini penting untuk respons dan pemulihan bencana. " 
      />
    </div>
  );
}
