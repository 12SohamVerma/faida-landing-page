export default function HeroSection() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
        * { font-family: 'Poppins', sans-serif; }
      `}</style>

      <section
        id="home"
        className="relative w-full text-sm pb-16 overflow-hidden bg-white bg-[url('https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/hero/gridBackground.png')] bg-no-repeat bg-cover bg-center"
        style={{
          backgroundImage: [
            'linear-gradient(to bottom, #ffffff 0%, rgba(255,255,255,0.85) 6%, rgba(255,255,255,0) 18%)',
            'linear-gradient(to top, #ffffff 0%, rgba(255,255,255,0.92) 8%, rgba(255,255,255,0) 22%)',
            'radial-gradient(ellipse 90% 70% at 18% 12%, rgba(255, 210, 170, 0.55) 0%, rgba(255, 220, 185, 0.25) 35%, rgba(255, 255, 255, 0) 68%)',
            'radial-gradient(ellipse 80% 60% at 75% 35%, rgba(255, 195, 150, 0.35) 0%, rgba(255, 255, 255, 0) 62%)',
            "url('https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/hero/gridBackground.png')",
          ].join(', '),
        }}
      >
        <div className="relative z-10 flex items-center gap-2 border border-slate-300 hover:border-slate-400/70 rounded-full w-max mx-auto px-4 py-2 mt-4 md:mt-6 transition-colors">
          <span>New: Learn before you invest with Faida</span>
          <button type="button" className="flex items-center gap-1 font-medium hover:opacity-80 transition-opacity">
            <span>Read more</span>
            <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
              <path
                d="M3.959 9.5h11.083m0 0L9.501 3.958M15.042 9.5l-5.541 5.54"
                stroke="#050040"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>

        <h5 className="relative z-10 text-4xl md:text-7xl font-medium max-w-[850px] text-center mx-auto mt-8">
          Start investing with confidence, one small step at a time
        </h5>

        <p className="relative z-10 text-sm md:text-base mx-auto max-w-2xl text-center mt-6 max-md:px-2">
          Faida helps students and first-time investors build financial literacy, learn the basics, and
          begin with amounts that feel comfortable.
        </p>

        <div className="relative z-10 mx-auto w-full flex items-center justify-center gap-3 mt-4">
          <a
            href="#download"
            className="bg-slate-800 hover:bg-black text-white px-6 py-3 rounded-full font-medium transition"
          >
            Get Started
          </a>
          <a
            href="#about"
            className="flex items-center gap-2 border border-slate-300 hover:bg-slate-200/30 rounded-full px-6 py-3 transition-colors"
          >
            <span>Learn More</span>
            <svg width="6" height="8" viewBox="0 0 6 8" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
              <path
                d="M1.25.5 4.75 4l-3.5 3.5"
                stroke="#050040"
                strokeOpacity=".4"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>
        </div>
      </section>
    </>
  )
}
