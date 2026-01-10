
import Image from 'next/image';
import GameIntro from '@/components/GameIntro';
import GameStory from '@/components/GameStory';
import FAQ from '@/components/FAQ';
export default function HomePage() {

  return (
    <>

      {/* Mobile banner - shown only on mobile */}
      <div className="md:hidden w-full">
        <Image
          src="/banner.jpg"
          alt="Mobile Banner"
          width={2000}        // 图片原始宽度
          height={500}       // 图片原始高度
          className="w-full h-auto block"
          priority
        />
      </div>

      {/* Desktop banner - hidden on mobile */}
      <div className="hidden md:block w-full relative">
        <Image
          src="/banner.jpg"
          alt="Banner"
          width={2000}        // 图片原始宽度
          height={500}       // 图片原始高度
          className="w-full h-auto block"
          priority
        />
      </div>

      <section className="bg-[#0f0f0f] p-4 rounded-lg border border-[#2a1a1a] shadow-[0_0_20px_rgba(139,0,0,0.1)]">
        <h1 className="text-lg font-bold mb-3 text-red-500 tracking-widest uppercase drop-shadow-[0_0_6px_red] animate-pulse">
          Chaves Nightmares
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm">
          <div className="space-y-1.5">
            <p>
              <span className="font-semibold text-red-400">Supported Platforms</span>
              <span className="text-gray-500 mx-2">|</span>
              <span className="text-gray-400">Windows, Android</span>
            </p>
            <p>
              <span className="font-semibold text-red-400">Developer</span>
              <span className="text-gray-500 mx-2">|</span>
              <span className="text-gray-400">Green Jerry</span>
            </p>
            <p>
              <span className="font-semibold text-red-400">Genre</span>
              <span className="text-gray-500 mx-2">|</span>
              <span className="text-gray-400">Survival / Horror / Adventure</span>
            </p>
          </div>
          <div className="space-y-1.5">
            <p>
              <span className="font-semibold text-red-400">Language</span>
              <span className="text-gray-500 mx-2">|</span>
              <span className="text-gray-400">Portuguese</span>
            </p>
            <p>
              <span className="font-semibold text-red-400">Latest Version</span>
              <span className="text-gray-500 mx-2">|</span>
              <span className="text-gray-400">V1.0.4</span>
            </p>
            <p>
              <span className="font-semibold text-red-400">Update Date</span>
              <span className="text-gray-500 mx-2">|</span>
              <span className="text-gray-400">2026</span>
            </p>
          </div>
        </div>
      </section>

      <div className="flex justify-center mt-3">
        <a
          href="/download"
          className="inline-block bg-red-600 text-white font-semibold uppercase tracking-widest text-sm md:text-base px-6 md:px-10 py-3 md:py-4 rounded-lg shadow-lg whitespace-nowrap hover:bg-red-700 hover:scale-105  transition-transform transition-colors duration-300">
          Download Now
        </a>
      </div>


      <GameIntro></GameIntro>
      <GameStory></GameStory>
      <FAQ></FAQ>

    </>
  );
}
