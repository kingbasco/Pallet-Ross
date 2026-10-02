import React from 'react';

interface ArtworkGraphicProps {
  type: string;
  className?: string;
  title?: string;
  artist?: string;
}

export const ArtworkGraphic: React.FC<ArtworkGraphicProps> = ({ type, className = '', title }) => {
  switch (type) {
    case 'graphic-green':
      return (
        <div className={`relative w-full h-full bg-[#1b4332] text-white rounded-2xl overflow-hidden p-4 flex flex-col justify-between select-none shadow-md ${className}`}>
          <div className="absolute inset-0 bg-[radial-gradient(#40916c_1px,transparent_1px)] [background-size:12px_12px] opacity-25 pointer-events-none" />
          <div className="flex justify-between items-start z-10">
            <span className="text-[10px] font-mono tracking-widest uppercase bg-black/40 px-2 py-0.5 rounded-full border border-white/10">ROSS / ED. 04</span>
            <div className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
          </div>
          <div className="my-auto z-10 text-center py-2">
            <div className="relative inline-block">
              <svg className="w-24 h-24 mx-auto text-emerald-300 drop-shadow-lg" viewBox="0 0 100 100" fill="currentColor">
                <circle cx="50" cy="50" r="38" className="text-emerald-950/80" fill="currentColor" />
                <path d="M50 18 C32 18 18 32 18 50 C18 68 32 82 50 82 C68 82 82 68 82 50 C82 32 68 18 50 18 Z" fill="none" stroke="#52b788" strokeWidth="3" strokeDasharray="4 2" />
                <path d="M40 38 Q50 30 60 38 Q70 50 50 64 Q30 50 40 38 Z" fill="#95d5b2" />
                <circle cx="50" cy="46" r="6" fill="#1b4332" />
                <circle cx="50" cy="74" r="3" fill="#d8f3dc" />
              </svg>
              <span className="block font-black text-lg tracking-tighter uppercase mt-1 leading-none text-emerald-100 font-display">ART ROSS</span>
              <span className="text-[10px] tracking-widest font-mono text-emerald-300/80">LIMITED PRESS</span>
            </div>
          </div>
          <div className="flex justify-between items-end text-[9px] font-mono text-emerald-200/70 z-10 pt-2 border-t border-emerald-500/20">
            <span>BERLIN / NYC</span>
            <span className="font-bold text-white">#04/50</span>
          </div>
        </div>
      );

    case 'blue-poster':
      return (
        <div className={`relative w-full h-full bg-[#1d4ed8] text-white rounded-2xl overflow-hidden p-4 flex flex-col justify-between select-none shadow-md ${className}`}>
          <div className="flex justify-between items-start z-10">
            <span className="text-xs font-black tracking-wider uppercase font-display">PRADA</span>
            <span className="text-[10px] font-mono opacity-80">MILANO</span>
          </div>
          <div className="relative my-auto flex justify-center items-center py-2 z-10">
            <div className="w-20 h-20 rounded-full border border-white/30 flex items-center justify-center p-2 relative">
              <div className="absolute inset-2 bg-gradient-to-tr from-cyan-400 to-indigo-600 rounded-full opacity-80" />
              <svg className="w-12 h-12 text-white relative z-10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <circle cx="12" cy="12" r="10" />
                <path d="M12 6v12M6 12h12" />
                <circle cx="12" cy="12" r="3" fill="white" />
              </svg>
            </div>
          </div>
          <div className="z-10 flex justify-between items-baseline text-[10px] font-mono text-blue-200">
            <span className="font-semibold text-white uppercase">AUTUMN ISSUE</span>
            <span>2024</span>
          </div>
        </div>
      );

    case 'yellow-pop':
      return (
        <div className={`relative w-full h-full bg-[#eab308] text-black rounded-2xl overflow-hidden p-4 flex flex-col justify-between select-none shadow-md ${className}`}>
          <div className="flex justify-between items-center z-10">
            <span className="text-[10px] font-black uppercase tracking-tight bg-black text-amber-400 px-2 py-0.5 rounded">NEW ART</span>
            <span className="text-[10px] font-mono font-bold">№ 88</span>
          </div>
          <div className="my-auto text-center z-10">
            <h4 className="font-display font-black text-xl leading-none tracking-tight text-neutral-950 uppercase">
              THE GREEN KNIGHT
            </h4>
            <div className="mt-2 inline-flex items-center justify-center w-14 h-14 bg-black rounded-full text-amber-300">
              <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
              </svg>
            </div>
          </div>
          <div className="flex justify-between text-[9px] font-mono font-semibold z-10">
            <span>CURATED GALLERY</span>
            <span>© 2024</span>
          </div>
        </div>
      );

    case 'record-dark':
      return (
        <div className={`relative w-full h-full bg-[#121316] text-white rounded-2xl overflow-hidden p-4 flex flex-col justify-between select-none shadow-md border border-white/5 ${className}`}>
          <div className="flex justify-between items-center z-10">
            <span className="text-[10px] font-display font-bold tracking-widest text-orange-400">BOSE & BOUGEL</span>
            <span className="text-[10px] font-mono bg-white/10 px-1.5 py-0.5 rounded text-neutral-300">166 BPM</span>
          </div>
          <div className="relative my-auto flex items-center justify-center py-2 z-10">
            <div className="w-24 h-24 rounded-full bg-neutral-900 border-2 border-neutral-700/60 flex items-center justify-center relative shadow-inner">
              <div className="absolute inset-2 rounded-full border border-neutral-800" />
              <div className="absolute inset-4 rounded-full border border-neutral-800/80" />
              <div className="w-9 h-9 rounded-full bg-gradient-to-br from-orange-500 to-amber-600 flex items-center justify-center text-[8px] font-bold text-black">
                SIDE A
              </div>
            </div>
          </div>
          <div className="flex justify-between items-center text-[10px] text-neutral-400 z-10 font-mono">
            <span>VINYL ARCHIVE</span>
            <span className="text-orange-400 font-bold">12" STEREO</span>
          </div>
        </div>
      );

    case 'orange-staff':
      return (
        <div className={`relative w-full h-full bg-[#ea580c] text-white rounded-2xl overflow-hidden p-4 flex flex-col justify-between select-none shadow-md ${className}`}>
          <div className="z-10 flex justify-between items-start">
            <span className="text-[10px] font-mono tracking-widest bg-black/30 px-2 py-0.5 rounded uppercase">STREETWEAR</span>
            <span className="text-[10px] font-mono">01/08</span>
          </div>
          <div className="my-auto z-10 text-center">
            <div className="w-16 h-16 mx-auto rounded-xl bg-black/40 border border-white/20 flex items-center justify-center mb-2">
              <svg className="w-9 h-9 text-amber-200" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="7" r="4" />
                <path d="M6 21v-2a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v2" />
              </svg>
            </div>
            <h4 className="font-display font-black text-xl tracking-tight leading-none uppercase">STAFF ONLY</h4>
            <p className="text-[10px] font-mono opacity-80 mt-1">SPECIAL EDITION HOODIE</p>
          </div>
          <div className="flex justify-between items-center text-[10px] font-mono opacity-80 z-10">
            <span>RUN #402</span>
            <span>$140 USD</span>
          </div>
        </div>
      );

    case 'fleur-bike':
      return (
        <div className={`relative w-full h-full bg-[#3f6212] text-amber-50 rounded-2xl overflow-hidden p-4 flex flex-col justify-between select-none shadow-md ${className}`}>
          <div className="flex justify-between items-center z-10">
            <span className="text-[10px] tracking-widest font-mono uppercase bg-black/20 px-2 py-0.5 rounded">PARIS VINTAGE</span>
            <span className="text-xs">🌻</span>
          </div>
          <div className="my-auto text-center z-10">
            <span className="font-display italic text-2xl font-bold text-lime-200">le FLEUR*</span>
            <div className="w-16 h-10 mx-auto mt-2 text-lime-100 flex items-center justify-center">
              <svg className="w-10 h-10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <circle cx="5.5" cy="17.5" r="3.5" />
                <circle cx="18.5" cy="17.5" r="3.5" />
                <path d="M15 6a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm-3 11.5L9 9l3-4h3l2 4-5 3v5" />
              </svg>
            </div>
            <p className="text-[10px] font-mono text-lime-200/90 mt-1">SUMMER VELO ARCHIVE</p>
          </div>
          <div className="flex justify-between text-[10px] font-mono text-lime-200/80 z-10">
            <span>SERIES III</span>
            <span>FINE PRINT</span>
          </div>
        </div>
      );

    case 'green-knight':
      return (
        <div className={`relative w-full h-full bg-[#ca8a04] text-neutral-950 rounded-2xl overflow-hidden p-4 flex flex-col justify-between select-none shadow-md ${className}`}>
          <div className="flex justify-between items-start z-10">
            <span className="text-[9px] font-mono font-bold uppercase bg-black text-amber-300 px-2 py-0.5 rounded">FEATURED</span>
            <span className="text-[10px] font-mono">1974</span>
          </div>
          <div className="my-auto text-center z-10">
            <div className="font-display font-black text-2xl tracking-tighter uppercase leading-none">
              THE GREEN
              <br />
              KNIGHT
            </div>
            <div className="w-12 h-1 bg-black mx-auto my-2" />
            <p className="text-[10px] font-mono font-semibold">DIRECTED BY D. LOWERY</p>
          </div>
          <div className="flex justify-between text-[9px] font-mono font-bold z-10">
            <span>POSTER ART</span>
            <span>A24 EDITION</span>
          </div>
        </div>
      );

    case 'summer-90s':
      return (
        <div className={`relative w-full h-full bg-[#991b1b] text-white rounded-2xl overflow-hidden p-4 flex flex-col justify-between select-none shadow-md ${className}`}>
          <div className="flex justify-between items-center z-10">
            <span className="text-[10px] font-mono uppercase tracking-widest text-amber-200">NOSTALGIA</span>
            <span className="text-[10px] font-mono">35MM</span>
          </div>
          <div className="my-auto text-center z-10">
            <h4 className="font-display font-black text-3xl tracking-tight uppercase leading-none text-amber-300">
              90s
            </h4>
            <span className="font-display italic text-lg tracking-widest uppercase block -mt-1">SUMMER</span>
            <div className="flex justify-center gap-1 mt-2 text-amber-200">
              <span className="w-2 h-2 rounded-full bg-amber-300" />
              <span className="w-2 h-2 rounded-full bg-orange-400" />
              <span className="w-2 h-2 rounded-full bg-rose-400" />
            </div>
          </div>
          <div className="flex justify-between text-[10px] font-mono text-rose-200 z-10">
            <span>PORTRAITURE</span>
            <span>POLAROID 600</span>
          </div>
        </div>
      );

    case 'fluffy-blue':
      return (
        <div className={`relative w-full h-full bg-gradient-to-b from-[#60a5fa] via-[#3b82f6] to-[#1d4ed8] text-white rounded-2xl overflow-hidden p-4 flex flex-col justify-between select-none shadow-md ${className}`}>
          <div className="flex justify-between items-center z-10">
            <span className="text-[10px] font-mono font-bold tracking-wider uppercase bg-white/20 px-2 py-0.5 rounded-full backdrop-blur-sm">CLOUD SERIE</span>
            <span className="text-[10px] font-mono">№ 09</span>
          </div>
          <div className="my-auto text-center z-10">
            <div className="relative inline-block">
              {/* Fluffy cloud graphic */}
              <div className="w-20 h-14 mx-auto bg-white/90 rounded-full blur-[1px] relative shadow-lg flex items-center justify-center">
                <div className="w-10 h-10 bg-white rounded-full absolute -top-4 left-2" />
                <div className="w-12 h-12 bg-white rounded-full absolute -top-5 right-2" />
              </div>
              <h4 className="font-display font-black text-2xl tracking-tighter uppercase text-white drop-shadow mt-3">FLUFFY</h4>
            </div>
          </div>
          <div className="flex justify-between text-[10px] font-mono text-blue-100 z-10">
            <span>DREAMSCAPE</span>
            <span>GENESIS</span>
          </div>
        </div>
      );

    case 'amnesia-dots':
      return (
        <div className={`relative w-full h-full bg-[#0d0e12] text-white rounded-2xl overflow-hidden p-4 flex flex-col justify-between select-none shadow-md border border-neutral-800 ${className}`}>
          <div className="flex justify-between items-center z-10">
            <span className="text-[10px] font-mono uppercase tracking-widest text-neutral-400">OPTICAL STUDY</span>
            <span className="text-[10px] font-mono text-neutral-400">01 / 10</span>
          </div>
          <div className="my-auto py-2 flex justify-center items-center z-10">
            <div className="grid grid-cols-7 gap-1.5 p-2 bg-neutral-900/60 rounded-xl border border-neutral-800">
              {Array.from({ length: 49 }).map((_, i) => {
                const row = Math.floor(i / 7);
                const col = i % 7;
                const dist = Math.sqrt((row - 3) ** 2 + (col - 3) ** 2);
                const scale = Math.max(0.2, 1 - dist / 4.2);
                return (
                  <div
                    key={i}
                    className="w-2 h-2 rounded-full bg-white transition-transform"
                    style={{ transform: `scale(${scale})`, opacity: scale }}
                  />
                );
              })}
            </div>
          </div>
          <div className="flex justify-between text-[10px] font-mono text-neutral-400 z-10">
            <span className="font-semibold text-white">AMNESIA GAP</span>
            <span>GENERATIVE</span>
          </div>
        </div>
      );

    case 'spectrum-wave':
      return (
        <div className={`relative w-full h-full bg-neutral-950 text-white rounded-2xl overflow-hidden p-4 flex flex-col justify-between select-none shadow-md border border-neutral-800 ${className}`}>
          <div className="flex justify-between items-center z-10">
            <span className="text-[10px] font-mono uppercase tracking-widest text-neutral-400">SPECTRUM</span>
            <span className="text-[10px] font-mono text-neutral-400">WAVE #12</span>
          </div>
          <div className="my-auto py-1 z-10">
            <div className="h-24 w-full rounded-lg overflow-hidden flex flex-col justify-between bg-black p-1 shadow-inner relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-emerald-400 via-amber-400 via-rose-500 to-purple-600 opacity-90 blur-[1px]" />
              <svg className="w-full h-full relative z-10" viewBox="0 0 200 80" preserveAspectRatio="none">
                <path d="M0,40 Q50,0 100,40 T200,40 L200,80 L0,80 Z" fill="rgba(0,0,0,0.6)" />
                <path d="M0,50 Q60,10 120,50 T200,50 L200,80 L0,80 Z" fill="rgba(0,0,0,0.4)" />
                <path d="M0,40 Q50,0 100,40 T200,40" fill="none" stroke="white" strokeWidth="2" />
              </svg>
            </div>
          </div>
          <div className="flex justify-between text-[10px] font-mono text-neutral-400 z-10">
            <span className="font-semibold text-white">IMMORTALISE WORKS</span>
            <span>CHROMATIC</span>
          </div>
        </div>
      );

    case 'collage-class':
      return (
        <div className={`relative w-full h-full bg-[#faf5ff] text-neutral-900 rounded-2xl overflow-hidden p-4 flex flex-col justify-between select-none shadow-md border border-purple-100 ${className}`}>
          <div className="flex justify-between items-center z-10">
            <span className="text-[10px] font-mono uppercase tracking-widest bg-purple-100 text-purple-800 px-2 py-0.5 rounded">WORKSHOP</span>
            <span className="text-[10px] font-mono text-neutral-500">2024</span>
          </div>
          <div className="my-auto py-2 z-10 flex justify-center items-center">
            <div className="relative w-24 h-24">
              <div className="w-16 h-16 bg-rose-500 rounded-tl-3xl absolute top-0 left-0 shadow-md" />
              <div className="w-14 h-14 bg-amber-400 rounded-full absolute bottom-0 right-0 shadow-md" />
              <div className="w-12 h-12 bg-indigo-600 rotate-12 absolute top-4 right-1 shadow-md opacity-90" />
              <div className="w-10 h-10 bg-emerald-400 rounded-bl-2xl absolute bottom-1 left-2 shadow-md" />
              <div className="absolute inset-0 flex items-center justify-center font-display font-black text-white text-xs tracking-wider">
                CREATE
              </div>
            </div>
          </div>
          <div className="flex justify-between text-[10px] font-mono text-neutral-600 z-10">
            <span className="font-semibold text-neutral-900">CREATIVITY CLASS</span>
            <span>BAUHAUS</span>
          </div>
        </div>
      );

    case 'celebrates-party':
      return (
        <div className={`relative w-full h-full bg-[#064e3b] text-white rounded-2xl overflow-hidden p-4 flex flex-col justify-between select-none shadow-md ${className}`}>
          <div className="flex justify-between items-center z-10">
            <span className="text-[10px] font-mono uppercase tracking-widest bg-white/20 px-2 py-0.5 rounded">FESTIVAL</span>
            <span className="text-xs">🌺</span>
          </div>
          <div className="my-auto py-1 z-10 text-center">
            <div className="w-20 h-20 mx-auto rounded-full bg-gradient-to-tr from-pink-500 via-rose-400 to-amber-300 p-1 shadow-lg flex items-center justify-center">
              <svg className="w-14 h-14 text-white" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm1 14.5a1 1 0 0 1-2 0V11a1 1 0 0 1 2 0zm-1-7.5a1.25 1.25 0 1 1 1.25-1.25A1.25 1.25 0 0 1 12 9z" />
              </svg>
            </div>
            <h5 className="font-display font-bold text-sm tracking-tight uppercase text-emerald-100 mt-2">CELEBRATES PARTY</h5>
          </div>
          <div className="flex justify-between text-[10px] font-mono text-emerald-200 z-10">
            <span>CARNIVAL</span>
            <span>RIO / TOKYO</span>
          </div>
        </div>
      );

    case 'eye-surreal':
      return (
        <div className={`relative w-full h-full bg-[#1e40af] text-white rounded-2xl overflow-hidden p-6 flex flex-col justify-between select-none shadow-lg ${className}`}>
          <div className="flex justify-between items-start z-10">
            <span className="text-xs font-mono uppercase tracking-widest bg-white/10 px-2.5 py-1 rounded-full backdrop-blur-md">SURREALISM</span>
            <span className="text-xs font-mono text-blue-200">#01/01</span>
          </div>
          <div className="my-auto py-4 flex justify-center items-center relative z-10">
            {/* Surreal eye in orb */}
            <div className="relative w-32 h-32 flex items-center justify-center">
              {/* Torus / Ribbon */}
              <div className="absolute inset-0 rounded-full border-4 border-amber-400/80 rotate-45 scale-y-50" />
              <div className="w-24 h-24 rounded-full bg-gradient-to-tr from-slate-900 via-indigo-950 to-blue-700 shadow-2xl flex items-center justify-center border-2 border-white/40">
                <div className="w-14 h-14 rounded-full bg-white flex items-center justify-center shadow-inner relative overflow-hidden">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 flex items-center justify-center">
                    <div className="w-4 h-4 rounded-full bg-black flex items-center justify-center">
                      <div className="w-1.5 h-1.5 rounded-full bg-white translate-x-0.5 -translate-y-0.5" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="z-10">
            <h4 className="font-display font-bold text-lg text-white">Where Art Breathes Commerce</h4>
            <p className="text-xs text-blue-200 mt-1 line-clamp-2">
              Artistic spirit with commercial viability, providing a platform where creativity flourishes.
            </p>
          </div>
        </div>
      );

    case 'model-coral':
      return (
        <div className={`relative w-full h-full bg-[#f97316] text-white rounded-3xl overflow-hidden flex items-center justify-center select-none shadow-xl ${className}`}>
          {/* Subtle gradient vignette */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20" />
          {/* Editorial portrait illustration with round sunglasses */}
          <div className="relative z-10 w-full h-full flex flex-col items-center justify-end pb-8">
            <div className="relative">
              {/* Head silhouette & Sunglasses */}
              <div className="w-48 h-56 bg-neutral-900/90 rounded-full mx-auto relative overflow-hidden shadow-2xl border-4 border-orange-300/30 flex flex-col items-center pt-8">
                {/* Hair highlights */}
                <div className="absolute -top-4 -left-4 w-32 h-32 bg-amber-950/90 rounded-full" />
                <div className="absolute -top-4 -right-4 w-32 h-32 bg-amber-950/90 rounded-full" />
                {/* Face tone */}
                <div className="w-36 h-40 bg-[#fbbca0] rounded-full relative z-10 flex flex-col items-center pt-6 shadow-inner">
                  {/* Round sunglasses */}
                  <div className="flex gap-2 items-center z-20">
                    <div className="w-10 h-10 rounded-full bg-black border-2 border-amber-300 shadow-md flex items-center justify-center">
                      <div className="w-4 h-1 bg-white/40 rounded-full -rotate-45" />
                    </div>
                    <div className="w-3 h-0.5 bg-amber-300" />
                    <div className="w-10 h-10 rounded-full bg-black border-2 border-amber-300 shadow-md flex items-center justify-center">
                      <div className="w-4 h-1 bg-white/40 rounded-full -rotate-45" />
                    </div>
                  </div>
                  {/* Red lips */}
                  <div className="w-6 h-2 bg-rose-600 rounded-full mt-6 shadow" />
                </div>
              </div>
            </div>
          </div>
        </div>
      );

    case 'model-red':
      return (
        <div className={`relative w-full h-full bg-gradient-to-b from-[#ea580c] to-[#991b1b] text-white rounded-3xl overflow-hidden flex flex-col justify-end p-6 select-none shadow-2xl ${className}`}>
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-amber-400/40 via-transparent to-black/60" />
          <div className="relative z-10 my-auto flex flex-col items-center">
            {/* Elegant silhouette in orange-red backless gown */}
            <div className="w-40 h-52 relative flex flex-col items-center">
              {/* Back silhouette */}
              <div className="w-20 h-24 bg-neutral-900 rounded-full shadow-lg relative z-20">
                {/* Hair bun */}
                <div className="w-12 h-12 bg-neutral-950 rounded-full -top-4 left-4 absolute" />
              </div>
              {/* Backless dress curve */}
              <div className="w-28 h-36 bg-[#c2410c] -mt-10 rounded-t-3xl relative z-10 shadow-2xl flex flex-col items-center pt-4">
                <div className="w-12 h-16 bg-[#e6a88b] rounded-b-full shadow-inner" />
              </div>
            </div>
          </div>
        </div>
      );

    default:
      return (
        <div className={`w-full h-full bg-neutral-900 text-white rounded-2xl flex items-center justify-center p-4 font-mono text-xs ${className}`}>
          {title || 'Art Piece'}
        </div>
      );
  }
};
