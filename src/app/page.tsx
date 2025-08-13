'use client';

import React, { useState, useEffect } from 'react';

const Page = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    document.title = 'DigitalFusion | Moderní weby a digitální strategie';

    const faviconSvg = `
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="32" height="32" rx="8" fill="#111827"/>
        <path d="M10 8C10 8 18 10 18 16C18 22 10 24 10 24V8Z" fill="#38bdf8"/>
        <path d="M22 8C22 8 14 10 14 16C14 22 22 24 22 24V8Z" fill="#6366f1"/>
      </svg>
    `.trim();

    const faviconUrl = `data:image/svg+xml;base64,${btoa(faviconSvg)}`;

    let link: HTMLLinkElement | null = document.querySelector("link[rel~='icon']");
    if (!link) {
      link = document.createElement('link');
      link.rel = 'icon';
      document.head.appendChild(link);
    }
    link.href = faviconUrl;
  }, []);

  const handleMenuLinkClick = () => {
    setIsMenuOpen(false);
  };

  const navLinks = [
    { href: '#o-nas', label: 'O nás' },
    { href: '#kontakt', label: 'Kontakt' },
  ];

  return (
    <div className="bg-gray-900 text-gray-200 min-h-screen font-sans">
      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 bg-gray-900 bg-opacity-95 z-50 transform ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'} transition-transform duration-300 ease-in-out md:hidden`}
      >
        <div className="flex justify-end p-6">
          <button onClick={() => setIsMenuOpen(false)} aria-label="Zavřít menu">
            <img src="https://cdn.jsdelivr.net/npm/@tabler/icons@latest/icons/x.svg" alt="Zavřít" className="w-8 h-8 text-white" />
          </button>
        </div>
        <nav className="flex flex-col items-center justify-center h-full -mt-16">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className="text-3xl font-bold my-4 py-2 hover:text-sky-400 transition-colors" onClick={handleMenuLinkClick}>
              {link.label}
            </a>
          ))}
        </nav>
      </div>

      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-40 bg-gray-900/80 backdrop-blur-sm">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <a href="#home" className="text-2xl font-bold tracking-tight text-white">
            Digital<span className="text-sky-400">Fusion</span>
          </a>
          <nav className="hidden md:flex space-x-8 items-center">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} className="text-gray-300 hover:text-sky-400 transition-colors">
                {link.label}
              </a>
            ))}
          </nav>
          <button className="md:hidden z-50" onClick={() => setIsMenuOpen(true)} aria-label="Otevřít menu">
            <img src="https://cdn.jsdelivr.net/npm/@tabler/icons@latest/icons/menu-2.svg" alt="Menu" className="w-8 h-8 text-white" />
          </button>
        </div>
      </header>

      <main className="container mx-auto px-6 pt-24">
        {/* Hero Section */}
        <section id="home" className="min-h-[calc(100vh-6rem)] flex flex-col items-center justify-center text-center py-20">
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tighter mb-4 bg-clip-text text-transparent bg-gradient-to-r from-sky-400 to-indigo-500">
            Tvoříme digitální zážitky
          </h1>
          <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-8">
            Od moderních webových stránek po efektivní digitální strategie. Jsme váš partner pro růst v online světě.
          </p>
          <a
            href="#kontakt"
            className="bg-sky-500 hover:bg-sky-600 text-white font-bold py-3 px-8 rounded-full transition-transform transform hover:scale-105 duration-300 ease-in-out"
          >
            Nezávazná konzultace
          </a>
        </section>

        {/* About Section */}
        <section id="o-nas" className="py-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Kdo jsme a co děláme?</h2>
            <p className="mt-4 text-lg text-gray-400 max-w-3xl mx-auto">
              DigitalFusion je více než jen studio. Jsme tým kreativců a stratégů, kteří věří v sílu kvalitního designu a funkčního kódu. Naším cílem je vytvářet řešení, která nejen skvěle vypadají, ale především přinášejí reálné výsledky.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
             <div className="bg-gray-800/50 p-6 rounded-lg text-center">
              <img src="https://cdn.jsdelivr.net/npm/@tabler/icons@latest/icons/palette.svg" alt="Webdesign" className="w-12 h-12 mx-auto mb-4 text-sky-400" />
              <h3 className="text-xl font-bold mb-2">Unikátní Webdesign</h3>
              <p className="text-gray-400">Navrhujeme vizuálně atraktivní a intuitivní rozhraní, která zaujmou vaše zákazníky na první pohled.
              </p>
            </div>
            <div className="bg-gray-800/50 p-6 rounded-lg text-center">
              <img src="https://cdn.jsdelivr.net/npm/@tabler/icons@latest/icons/code.svg" alt="Vývoj na míru" className="w-12 h-12 mx-auto mb-4 text-sky-400" />
              <h3 className="text-xl font-bold mb-2">Vývoj na míru</h3>
              <p className="text-gray-400">Stavíme rychlé, bezpečné a škálovatelné weby a aplikace s využitím nejmodernějších technologií.
              </p>
            </div>
            <div className="bg-gray-800/50 p-6 rounded-lg text-center">
              <img src="https://cdn.jsdelivr.net/npm/@tabler/icons@latest/icons/chart-infographic.svg" alt="Digitální strategie" className="w-12 h-12 mx-auto mb-4 text-sky-400" />
              <h3 className="text-xl font-bold mb-2">Digitální strategie</h3>
              <p className="text-gray-400">Pomůžeme vám s SEO, online marketingem a strategií, která zajistí, že vás vaši zákazníci najdou.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="kontakt" className="py-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Spojte se s námi</h2>
            <p className="mt-4 text-lg text-gray-400 max-w-3xl mx-auto">
              Máte nápad nebo projekt? Rádi si poslechneme o vaší vizi a navrhneme, jak ji společně uskutečnit.
            </p>
          </div>
          <div className="bg-gray-800/50 max-w-lg mx-auto p-8 rounded-lg text-center">
             <div className="space-y-4 text-lg">
                <div>
                    <h3 className="font-bold text-sky-400">Email</h3>
                    <p className="text-gray-300">info@digitalfusion.cz</p>
                </div>
                <div>
                    <h3 className="font-bold text-sky-400">Telefon</h3>
                    <p className="text-gray-300">+420 123 456 789</p>
                </div>
                <div>
                    <h3 className="font-bold text-sky-400">Sídlo</h3>
                    <p className="text-gray-300">Vzorová ulice 123, 110 00 Praha</p>
                    <p className="text-sm text-gray-500">(Pouze ilustrativní adresa)</p>
                </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="py-8 border-t border-gray-800">
        <div className="container mx-auto px-6 text-center text-gray-500">
          <a href="https://digitalfusion.cz" target="_blank" rel="noopener noreferrer" className="hover:text-sky-400 transition-colors">
            Vytvořeno s láskou od DigitalFusion
          </a>
        </div>
      </footer>
    </div>
  );
};

export default Page;
