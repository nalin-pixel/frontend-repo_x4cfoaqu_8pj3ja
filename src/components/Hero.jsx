import Spline from '@splinetool/react-spline';
import { Rocket } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative w-full">
      <div className="relative h-[420px] sm:h-[520px] md:h-[640px] lg:h-[720px] w-full overflow-hidden rounded-2xl">
        <Spline
          scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-white via-white/40 to-transparent" />
        <div className="absolute inset-0 flex items-end">
          <div className="w-full p-6 sm:p-10">
            <div className="max-w-5xl mx-auto">
              <div className="backdrop-blur-md bg-white/60 rounded-2xl p-6 sm:p-8 shadow-lg">
                <div className="flex items-center gap-3 text-blue-700 mb-3">
                  <Rocket className="h-5 w-5" />
                  <span className="uppercase tracking-wider text-xs font-semibold">Portfolio</span>
                </div>
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-gray-900">
                  Hi, I’m Your Name — I build modern web experiences.
                </h1>
                <p className="mt-4 text-gray-700 text-base sm:text-lg max-w-3xl">
                  Frontend-focused developer crafting playful, interactive interfaces with solid engineering under the hood.
                </p>
                <div className="mt-6 flex flex-wrap gap-3">
                  <a href="#projects" className="inline-flex items-center justify-center rounded-lg bg-blue-600 text-white px-5 py-2.5 font-medium shadow-sm hover:bg-blue-700 transition-colors">
                    View Projects
                  </a>
                  <a href="#contact" className="inline-flex items-center justify-center rounded-lg border border-gray-300 bg-white px-5 py-2.5 font-medium text-gray-800 hover:bg-gray-50 transition-colors">
                    Contact Me
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
