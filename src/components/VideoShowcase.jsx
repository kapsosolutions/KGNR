import React, { useState, useRef, useEffect } from 'react';
import { Volume2, VolumeX, Sparkles, CheckCircle2, Play, Pause } from 'lucide-react';

export default function VideoShowcase() {
  // Default set to 'finishing' (Digital Cleansing) as requested
  const [activeVideo, setActiveVideo] = useState('finishing');
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [showBriefIndicator, setShowBriefIndicator] = useState(false);
  const videoRef = useRef(null);
  const sectionRef = useRef(null);

  const videoSources = {
    finishing: {
      src: '/assets/video_finishing.mp4',
      title: 'Digital Ultrasonic Cleansing & Final Inspection',
      desc: 'Microscopic cavitation bubbles at 40kHz lift all polishing residues, followed by hot deionized drying and digital microscopic inspection.',
      specs: '40kHz Ultrasonic Chamber • Optical Clarity Check'
    },
    polish: {
      src: '/assets/video_polish.mp4',
      title: 'Precision Bench Buffing & Diamond Lustre',
      desc: 'High-speed jeweler lathe polishing using Japanese jewelers rouge and muslin wheels to bring mirror-gloss brilliance to 22K gold bangles and rings.',
      specs: '12,000 RPM Lathe • Zero Gold Loss Collection Filter'
    }
  };

  // Scroll Detection with IntersectionObserver:
  // Automatically play when scrolled into view, dynamically pause when scrolled out of view!
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (videoRef.current) {
              const playPromise = videoRef.current.play();
              if (playPromise !== undefined) {
                playPromise
                  .then(() => {
                    setIsPlaying(true);
                  })
                  .catch((err) => {
                    // Browser policy may require mute, which is active by default
                    console.log('Autoplay handled:', err);
                  });
              }
            }
          } else {
            if (videoRef.current && !videoRef.current.paused) {
              videoRef.current.pause();
              setIsPlaying(false);
            }
          }
        });
      },
      {
        threshold: 0.35, // Trigger when 35% of the video section is visible
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [activeVideo]);

  const handleTogglePlay = () => {
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
    } else {
      videoRef.current.play();
      setIsPlaying(true);
    }
    setShowBriefIndicator(true);
    setTimeout(() => setShowBriefIndicator(false), 600);
  };

  const handleToggleMute = (e) => {
    e.stopPropagation();
    if (!videoRef.current) return;
    videoRef.current.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  const handleSwitchTab = (tab) => {
    setActiveVideo(tab);
    setIsPlaying(false);
    if (videoRef.current) {
      videoRef.current.currentTime = 0;
      setTimeout(() => {
        if (videoRef.current) {
          videoRef.current.play().then(() => setIsPlaying(true)).catch(() => {});
        }
      }, 50);
    }
  };

  const current = videoSources[activeVideo];

  return (
    <section 
      ref={sectionRef}
      className="bg-[#222222] text-white py-20 px-4 sm:px-6 lg:px-8 border-y border-[#333333]"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-semibold uppercase tracking-widest text-[#cd9834] block mb-2">
            ATELIER BENCHWORK ARCHIVE
          </span>
          <h2 className="font-headline text-3xl sm:text-4xl font-light text-white mb-4">
            Master Craftsmanship in Motion
          </h2>
          <p className="text-[#a0a09e] text-sm sm:text-base font-normal leading-relaxed">
            Witness the intricate steps of digital electro-buffing, rotary diamond cutting, and temple ornament restoration inside our Nellore atelier.
          </p>
        </div>

        {/* Video Card Container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-[#1a1a1a] rounded-2xl border border-[#cd9834]/50 p-4 sm:p-8">
          {/* Video Player Frame with tap-to-play/pause and zero blocking buttons */}
          <div 
            onClick={handleTogglePlay}
            className="lg:col-span-7 relative rounded-xl overflow-hidden bg-black aspect-video flex items-center justify-center border border-[#333333] cursor-pointer group select-none"
            title={isPlaying ? "Tap to pause" : "Tap to play"}
          >
            <video
              ref={videoRef}
              src={current.src}
              className="w-full h-full object-cover"
              loop
              playsInline
              muted={isMuted}
              onPlay={() => setIsPlaying(true)}
              onPause={() => setIsPlaying(false)}
            />

            {/* Momentary subtle feedback icon */}
            {showBriefIndicator && (
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none transition-opacity duration-300">
                <div className="bg-black/60 text-white rounded-full p-4 backdrop-blur-sm scale-95 animate-ping">
                  {isPlaying ? <Play className="w-8 h-8 text-[#cd9834]" /> : <Pause className="w-8 h-8 text-white" />}
                </div>
              </div>
            )}

            {/* Bottom Floating Bar */}
            <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between bg-black/70 backdrop-blur-md px-4 py-2.5 rounded-lg text-xs border border-white/10">
              <div className="flex items-center gap-2">
                <span className={`inline-block w-2 h-2 rounded-full ${isPlaying ? 'bg-emerald-400 animate-pulse' : 'bg-[#cd9834]'}`}></span>
                <span className="text-white font-medium truncate max-w-[200px] sm:max-w-[320px]">{current.title}</span>
                <span className="hidden sm:inline text-[#a0a09e] text-[11px]">({isPlaying ? 'Playing • Tap to Pause' : 'Paused • Tap to Play'})</span>
              </div>
              
              <button
                type="button"
                onClick={handleToggleMute}
                className="text-[#a0a09e] hover:text-white p-1 rounded transition-colors focus:outline-none flex items-center gap-1.5"
                aria-label="Toggle sound"
              >
                <span className="hidden md:inline text-[11px] text-[#a0a09e]">{isMuted ? 'Muted' : 'Sound On'}</span>
                {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4 text-[#cd9834]" />}
              </button>
            </div>
          </div>

          {/* Details & Switcher */}
          <div className="lg:col-span-5 space-y-6">
            <div className="flex items-center gap-2">
              <button
                onClick={() => handleSwitchTab('finishing')}
                className={`px-4 py-2 rounded-lg text-xs font-medium tracking-wider uppercase transition-all ${
                  activeVideo === 'finishing'
                    ? 'bg-[#cd9834] text-white'
                    : 'bg-[#2a2a2a] text-[#a0a09e] hover:text-white'
                }`}
              >
                Digital Cleansing
              </button>
              <button
                onClick={() => handleSwitchTab('polish')}
                className={`px-4 py-2 rounded-lg text-xs font-medium tracking-wider uppercase transition-all ${
                  activeVideo === 'polish'
                    ? 'bg-[#cd9834] text-white'
                    : 'bg-[#2a2a2a] text-[#a0a09e] hover:text-white'
                }`}
              >
                Bench Buffing
              </button>
            </div>

            <div>
              <div className="text-xs text-[#cd9834] font-medium tracking-wider uppercase mb-1">
                {current.specs}
              </div>
              <h3 className="font-headline text-2xl font-normal text-white mb-3">
                {current.title}
              </h3>
              <p className="text-sm text-[#a0a09e] leading-relaxed mb-6 font-normal">
                {current.desc}
              </p>
            </div>

            <div className="space-y-3 border-t border-[#333333] pt-4 text-xs text-[#c5c3c0]">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#cd9834]" />
                <span>Proprietary particulate recovery ensures zero gold wastage</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#cd9834]" />
                <span>Microscopic edge finishing that preserves delicate prong mountings</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#cd9834]" />
                <span>Certified HUID safe — does not compromise hallmark stampings</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
