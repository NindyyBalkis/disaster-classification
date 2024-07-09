import React from 'react';

export default function Team() {
  const teamMembers = [
    {
      name: 'Nindya Putri Balkis',
      id: '2257301105',
      role: 'Backend developer, UI/UX Designer',
      image: 'nin.jpg',
    },
    {
      name: 'Siti Nuraini',
      id: '2257301128',
      role: 'Frontend developer, UI/UX Designer',
      image: 'ainiiii.jpg',
    },
  ];

  return (
    <div className="bg-[#FFF8E7] py-10" id="Team">
      <h2 className="text-3xl font-semibold font-dm-serif-text text-center mb-10">Meet Our Team</h2>
      <div className="flex justify-center">
        {teamMembers.map((member, index) => (
          <div key={index} className="bg-white rounded-lg shadow-lg m-4 p-6 flex flex-col items-center max-w-xs">
            <div className="w-full h-64 bg-gray-200 rounded-lg mb-4 overflow-hidden">
              <img
                src={member.image}
                alt={member.name}
                className="object-cover w-full h-full"
              />
            </div>
            <h3 className="text-xl font-bold font-dm-serif-text mb-2">{member.name}</h3>
            <p className="text-gray-700 font-dm-serif-text mb-2">{member.id}</p>
            <p className="text-gray-500 font-dm-serif-text">{member.role}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
