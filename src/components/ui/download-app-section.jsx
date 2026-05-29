function StoreButton({ href, children, icon }) {
  return (
    <a
      href={href}
      className="flex items-center gap-3 rounded-lg border border-green-500 px-4 py-2.5 text-white hover:bg-green-500/10 transition-colors duration-150 min-w-[140px]"
    >
      {icon}
      <div className="text-left text-xs leading-tight">{children}</div>
    </a>
  )
}

function PhoneSplash() {
  return (
    <div className="absolute inset-0 flex flex-col items-center justify-center bg-green-500 rounded-[2rem] p-6 text-center">
      <p className="text-[10px] text-white/90 mb-2">learn before you invest</p>
      <p className="text-3xl font-bold text-white lowercase tracking-tight">faida</p>
    </div>
  )
}

function PhoneAppUI() {
  return (
    <div className="absolute inset-0 rounded-[2rem] bg-zinc-900 p-4 overflow-hidden text-white text-[10px]">
      <div className="flex justify-between items-center mb-3">
        <span className="font-semibold text-sm">Faida</span>
        <span className="text-zinc-400">9:41</span>
      </div>
      <p className="text-zinc-400 mb-1">Portfolio balance</p>
      <p className="text-xl font-bold mb-4">$124.50</p>
      <div className="grid grid-cols-4 gap-2 mb-4">
        {['Learn', 'Invest', 'Goals', 'Guide'].map((item) => (
          <div key={item} className="flex flex-col items-center gap-1">
            <div className="w-8 h-8 rounded-full bg-zinc-800 flex items-center justify-center text-[8px]">
              •
            </div>
            <span className="text-[8px] text-zinc-400">{item}</span>
          </div>
        ))}
      </div>
      <div className="rounded-xl bg-zinc-800 p-3 mt-auto">
        <p className="font-medium text-[11px]">Start with $5</p>
        <p className="text-zinc-400 text-[9px] mt-1">Your first small investment, guided.</p>
      </div>
    </div>
  )
}

function PhoneFrame({ children, className = '' }) {
  return (
    <div
      className={`relative w-[180px] sm:w-[200px] aspect-[9/19] rounded-[2.2rem] border-[6px] border-zinc-700 bg-zinc-800 shadow-2xl overflow-hidden ${className}`}
    >
      <div className="absolute top-2 left-1/2 -translate-x-1/2 w-16 h-4 bg-zinc-900 rounded-full z-10" />
      {children}
    </div>
  )
}

export default function DownloadAppSection() {
  return (
    <section id="download" className="bg-zinc-950 py-16 md:py-20 lg:py-24 overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          <div className="flex flex-col justify-center z-10">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[2.75rem] font-bold text-white leading-tight max-w-xl">
              Learn investing. Start small. What more could you need?
            </h2>
            <p className="mt-4 text-base md:text-lg text-zinc-300 max-w-lg">
              Download Faida — built for students and first-time investors who want guidance before they
              invest.
            </p>
            <div className="mt-8 flex flex-wrap gap-3 sm:gap-4">
              <StoreButton href="#">
                <svg className="w-6 h-6 shrink-0" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                </svg>
                <>
                  <span className="block opacity-80">Download on the</span>
                  <span className="block font-semibold text-sm">App Store</span>
                </>
              </StoreButton>
              <StoreButton href="#">
                <svg className="w-6 h-6 shrink-0" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                  <path d="M3.609 1.814L13.792 12 3.61 22.186a1.004 1.004 0 0 1-.858-.39 1.004 1.004 0 0 1-.17-.92l1.02-5.72-5.72-1.02a1.004 1.004 0 0 1 .39-.858 1.004 1.004 0 0 1 .92-.17l5.72 1.02 1.02-5.72a1.004 1.004 0 0 1 .858-.39c.38.07.69.38.76.76.07.38-.07.78-.39.858l-5.72 1.02 1.02 5.72c.32.18.46.48.39.858a1.004 1.004 0 0 1-.39.858z" />
                </svg>
                <>
                  <span className="block opacity-80">GET IT ON</span>
                  <span className="block font-semibold text-sm">Google Play</span>
                </>
              </StoreButton>
              <StoreButton href="#">
                <svg className="w-6 h-6 shrink-0" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14H9V8h2v8zm4 0h-2V8h2v8z" />
                </svg>
                <>
                  <span className="block opacity-80">EXPLORE IT ON</span>
                  <span className="block font-semibold text-sm">AppGallery</span>
                </>
              </StoreButton>
            </div>
          </div>

          <div className="relative flex justify-center lg:justify-end min-h-[380px] sm:min-h-[420px]">
            <svg
              className="absolute top-4 left-[15%] w-16 h-10 text-white/80 hidden sm:block"
              viewBox="0 0 64 40"
              fill="none"
              aria-hidden
            >
              <path
                d="M8 32c12-20 28-28 48-24"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>

            <PhoneFrame className="-rotate-12 translate-x-4 sm:translate-x-8 z-0 opacity-95">
              <PhoneSplash />
              <div className="absolute -bottom-2 left-4 flex gap-1" aria-hidden>
                <span className="w-6 h-0.5 bg-white/40 rounded rotate-[-20deg]" />
                <span className="w-4 h-0.5 bg-white/30 rounded rotate-[-15deg]" />
              </div>
            </PhoneFrame>

            <PhoneFrame className="rotate-6 -translate-y-2 z-10 ml-[-40px] sm:ml-[-60px]">
              <PhoneAppUI />
            </PhoneFrame>

            <div className="absolute right-[5%] top-1/3 flex flex-col gap-6 z-20" aria-hidden>
              <svg className="w-8 h-8 text-yellow-400" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0l2.9 8.26L24 9.27l-6.5 5.74L19.8 24 12 19.77 4.2 24l2.3-8.99L0 9.27l9.1-.99L12 0z" />
              </svg>
              <svg className="w-6 h-6 text-yellow-400 ml-4" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0l2.9 8.26L24 9.27l-6.5 5.74L19.8 24 12 19.77 4.2 24l2.3-8.99L0 9.27l9.1-.99L12 0z" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
