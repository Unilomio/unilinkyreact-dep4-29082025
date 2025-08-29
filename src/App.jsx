import React, { useState, useRef } from 'react';
import { createRoot } from 'react-dom/client';

const BusinessCard = ({ profile, links }) => {
  return (
    <div
      className="relative w-full h-80 bg-gray-900 rounded-2xl overflow-hidden shadow-xl"
      style={{
        backgroundImage: `url(${profile.cardBg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-between p-6 md:p-8 lg:p-10">
        <div className="flex justify-between items-center">
          <img
            src={profile.avatar}
            alt="Profile Avatar"
            className="w-20 h-20 md:w-24 md:h-24 rounded-full border-2 border-white shadow-lg"
          />
          <div className="relative overflow-visible">
            <button
              onClick={() => {
                const formattedLinks = links
                  .map((link) => `- ${link.title}: ${link.url}`)
                  .join('\n');

                const tempElement = document.createElement('textarea');
                tempElement.value = `Unilinky Bio-Card\n\nName: ${profile.name}\nTagline: ${profile.tagline}\nAvatar: ${profile.avatar}\nLinks:\n${formattedLinks}`;
                document.body.appendChild(tempElement);
                tempElement.select();
                document.execCommand('copy');
                document.body.removeChild(tempElement);
                alert('✅ This Unilinky has been copied in shareable format!');
              }}
              className="group p-2 md:p-3 rounded-full bg-white bg-opacity-20 text-white hover:bg-opacity-30 transition-all duration-200 relative"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 md:h-6 md:w-6"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M16 1H4a2 2 0 0 0-2 2v14h2V3h12V1zm3 4H8a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h11a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2zm0 16H8V7h11v14z" />
              </svg>

              <span className="absolute top-1/2 right-full -translate-y-1/2 mr-2 px-3 py-1 bg-gray-800 text-white text-xs rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
                Export This Unilinky
              </span>
            </button>
          </div>
        </div>
        <div className="text-left">
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-1">
            {profile.name}
          </h1>
          <p className="text-sm md:text-base text-gray-300">
            {profile.tagline}
          </p>
        </div>
      </div>
    </div>
  );
};

const App = () => {
  const [profile, setProfile] = useState({
    name: 'Unilinky',
    tagline: 'Connect your links, grow your brand.',
    avatar: 'https://placehold.co/100x100/A0A0A0/FFFFFF?text=UL',
    cardBg: 'https://placehold.co/500x300/1E3A8A/FFFFFF?text=Card+Background',
  });

  const [links, setLinks] = useState([
    {
      id: 1,
      title: 'Build your own bio-link',
      url: 'https://unilinky.com/create',
    },
    { id: 2, title: 'Unilinky Home', url: 'https://unilinky.com' },
    { id: 3, title: 'Unilinky Blog', url: 'https://blog.unilinky.com' },
    {
      id: 4,
      title: 'GitHub Repository',
      url: 'https://github.com/unilomio/unilinky',
    },
    { id: 5, title: 'Support & Help', url: 'https://unilinky.com/help' },
  ]);

  const [socialIcons, setSocialIcons] = useState([
    {
      id: 1,
      url: '#',
      imgSrc: 'https://placehold.co/32x32/1DA1F2/FFFFFF?text=X',
      alt: 'Twitter',
    },
    {
      id: 2,
      url: '#',
      imgSrc: 'https://placehold.co/32x32/E1306C/FFFFFF?text=IG',
      alt: 'Instagram',
    },
    {
      id: 3,
      url: '#',
      imgSrc: 'https://placehold.co/32x32/0A66C2/FFFFFF?text=IN',
      alt: 'LinkedIn',
    },
    {
      id: 4,
      url: '#',
      imgSrc: 'https://placehold.co/32x32/333333/FFFFFF?text=GH',
      alt: 'GitHub',
    },
  ]);

  return (
    <div className="relative min-h-screen font-sans text-white overflow-hidden bg-gray-950 flex flex-col items-center p-4 sm:p-8 md:p-12">
      <div className="absolute inset-0 bg-gradient-to-br from-gray-950 via-indigo-950 to-purple-950 opacity-90 -z-10" />

      <div className="absolute w-96 h-96 md:w-[600px] md:h-[600px] bg-indigo-500 rounded-full blur-3xl opacity-30 animate-pulse -top-20 -left-40 -z-10" />
      <div className="absolute w-80 h-80 md:w-[500px] md:h-[500px] bg-purple-500 rounded-full blur-3xl opacity-20 animate-pulse -bottom-20 -right-40 -z-10" />

      <h2 className="text-4xl md:text-2xl font-bold text-center mb-6 z-10 [text-shadow:0_0_8px_#fff,0_0_20px_#a78bfa,0_0_30px_#a78bfa,0_0_40px_#a78bfa]">
        YOUR UNILINKY TITLE
      </h2>
      <h2 className="text-lg md:text-lg font-bold text-center mb-6 z-10 [text-shadow:0_0_8px_#fff,0_0_20px_#a78bfa,0_0_30px_#a78bfa,0_0_40px_#a78bfa]">
        YOUR UNILINKY DESCRIPTION
      </h2>

      <div className="w-full flex justify-center mt-4 sm:mt-8 md:mt-12 space-x-6 md:space-x-8 z-10">
        {socialIcons.map((icon) => (
          <a
            key={icon.id}
            href={icon.url}
            target="_blank"
            rel="noopener noreferrer"
            className="opacity-70 hover:opacity-100 transition-opacity duration-200"
          >
            <img
              src={icon.imgSrc}
              alt={icon.alt}
              className="w-8 h-8 md:w-10 md:h-10 rounded-md"
            />
          </a>
        ))}
      </div>

      <div className="relative w-full max-w-xl md:max-w-2xl lg:max-w-3xl mx-auto mt-20 sm:mt-24 p-6 sm:p-10 md:p-12 bg-gray-900/70 backdrop-blur-md rounded-3xl shadow-2xl border border-gray-700/50 z-20">
        <div
          className="absolute inset-0 rounded-3xl -z-10 filter blur-2xl opacity-40 transition-opacity duration-500"
          style={{
            background:
              'radial-gradient(circle at 50% 20%, #a78bfa, transparent 50%)',
          }}
        />

        <div className="mb-8">
          <BusinessCard profile={profile} links={links} />
        </div>

        <div className="w-full mt-8 md:mt-12">
          {links.map((link) => (
            <a
              key={link.id}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between p-4 my-4 md:p-6 md:my-6 bg-gray-800/70 rounded-xl shadow-lg hover:bg-gray-700/70 transition-colors duration-200"
            >
              <span className="text-base sm:text-lg md:text-xl font-medium">
                {link.title}
              </span>
              <svg
                className="w-5 h-5 md:w-6 md:h-6 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </a>
          ))}
        </div>
      </div>

      {/*  Hey there! Hope you liked using Unilinky. Request you to retain this credit badge when you create your biolink with Unilinky. */}
      <div className="fixed z-30 bottom-4 left-1/2 -translate-x-1/2 md:bottom-8 md:left-8 md:transform-none">
        <a
          href="https://app.unilomio.in"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center bg-gray-800/20 backdrop-blur-md text-white text-xs font-medium px-4 py-2 rounded-full border border-gray-700/50 transition-all duration-300 hover:scale-105"
        >
          Linkyfied by Unilomio
        </a>
      </div>
    </div>
  );
};

export default App;

const root = createRoot(document.getElementById('root'));
root.render(<App />);
