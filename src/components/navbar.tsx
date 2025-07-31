import { useEffect, useState } from 'react';

export default function Navbar() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Clamp values for width, rounding, and shadow
  const clamp = (value: number, min: number, max: number) => Math.min(Math.max(value, min), max);

  const maxWidth = clamp(100 - scrollY / 10, 60, 100); // from 100vw to 60vw
  const rounded = clamp(scrollY / 10, 0, 32); // from 0 to 32 (rounded-2xl)
  const shadowOpacity = clamp(scrollY / 200, 0, 0.3); // for shadow transparency

  return (
    <header
      className={`
        fixed top-0 left-1/2 z-50 transform -translate-x-1/2
        transition-all duration-300 ease-in-out
        ${scrollY > 0 ? 'bg-gray-800/60 backdrop-blur-md' : 'bg-transparent'}
        shadow-[0_4px_6px_rgba(0,0,0,${shadowOpacity})]
      `}
      style={{
        width: `${maxWidth}vw`,
        borderRadius: `${rounded}px`,
      }}
    >
      <div className="flex items-center justify-between h-16 px-6 text-white">
        <div className="text-xl font-bold">Logo</div>
        <nav className="flex space-x-6">
          <a href="#" className="hover:underline">Home</a>
          <a href="#" className="hover:underline">About</a>
          <a href="#" className="hover:underline">Contact</a>
        </nav>
      </div>
    </header>
  );
} 

// Assurez-vous que le body ou la page ait assez de contenu pour scroller
// Exemple dans App.tsx :
// <div className="h-[200vh] bg-gray-900">
//   <Navbar />
// </div>
