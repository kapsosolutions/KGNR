import React, { useState, useEffect } from 'react';
import { Play, ExternalLink, Film, ArrowRight, Sparkles } from 'lucide-react';

export default function YouTubeVideoSection({ onNavigateToVideos }) {
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [activeModalVideo, setActiveModalVideo] = useState(null);

  useEffect(() => {
    fetchVideos();
  }, []);

  const fetchVideos = async () => {
    try {
      setLoading(true);
      const res = await fetch('/api/videos');
      if (res.ok) {
        const data = await res.json();
        if (data.videos && Array.isArray(data.videos)) {
          setVideos(data.videos.slice(0, 6)); // Show top 6 in 3-column grid
        }
      }
    } catch (err) {
      console.error('Failed to load videos:', err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="videos-section" className="bg-[#fcfbf9] py-16 sm:py-20 border-b border-[#eae8e4] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#cd9834]/10 border border-[#cd9834]/30 text-[#cd9834] text-xs font-semibold uppercase tracking-widest mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Master Benchwork Highlights</span>
          </div>
          <h2 className="font-headline text-3xl sm:text-4xl lg:text-5xl font-light text-[#222222] mb-4">
            Atelier Video Archive
          </h2>
          <p className="text-sm sm:text-base text-[#6f6f6d] leading-relaxed max-w-2xl mx-auto font-normal">
            Watch our videos and conference highlights to learn more about our master goldsmithing, 22K electro-buffing, and custom jewelry collections.
          </p>
        </div>

        {/* 3-Column Video Cards Grid */}
        {loading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {[1, 2, 3, 4, 5, 6].map((n) => (
              <div key={n} className="bg-white rounded-xl border border-gray-200 overflow-hidden animate-pulse shadow-sm">
                <div className="aspect-video bg-gray-200" />
                <div className="p-5 space-y-3">
                  <div className="h-4 bg-gray-200 rounded w-3/4" />
                  <div className="h-3 bg-gray-100 rounded w-full" />
                  <div className="h-3 bg-gray-100 rounded w-2/3" />
                </div>
              </div>
            ))}
          </div>
        ) : videos.length === 0 ? (
          <div className="text-center py-12 bg-white rounded-2xl border border-dashed border-gray-300 p-8 max-w-md mx-auto">
            <Film className="w-12 h-12 text-[#cd9834] mx-auto mb-3 opacity-60" />
            <h3 className="text-base font-semibold text-[#222222] mb-1">No Videos Added Yet</h3>
            <p className="text-xs text-[#6f6f6d] mb-4">
              Videos added in the Admin Panel will automatically appear here in this 3-column grid.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {videos.map((vid) => {
              const videoId = vid.videoId;
              const thumbUrl = `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;

              return (
                <div
                  key={vid.id || vid._id}
                  className="bg-white rounded-xl border border-[#e5e3df] hover:border-[#cd9834]/60 transition-all duration-300 overflow-hidden shadow-sm hover:shadow-md flex flex-col group"
                >
                  {/* Video Thumbnail / Player Frame */}
                  <div 
                    onClick={() => setActiveModalVideo(vid)}
                    className="relative aspect-video bg-black overflow-hidden cursor-pointer select-none"
                  >
                    <img
                      src={thumbUrl}
                      alt={vid.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                    />

                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20" />

                    {/* YouTube Red Play Button Style */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-14 h-10 sm:w-16 sm:h-11 bg-red-600/90 group-hover:bg-red-600 rounded-2xl flex items-center justify-center text-white shadow-lg transition-transform group-hover:scale-110">
                        <Play className="w-5 h-5 sm:w-6 sm:h-6 fill-white ml-0.5" />
                      </div>
                    </div>

                    {/* "Watch on YouTube" watermark pill */}
                    <div className="absolute bottom-2.5 left-2.5 right-2.5 flex items-center justify-between pointer-events-none">
                      <span className="text-[11px] text-white/90 font-medium bg-black/60 backdrop-blur-sm px-2 py-0.5 rounded">
                        {vid.category || 'Atelier'}
                      </span>
                      <span className="text-[10px] text-white/80 font-normal bg-black/60 backdrop-blur-sm px-2 py-0.5 rounded flex items-center gap-1">
                        Watch on YouTube
                      </span>
                    </div>
                  </div>

                  {/* Card Content (Title and Description matching the requested image) */}
                  <div className="p-5 flex-1 flex flex-col justify-between">
                    <div>
                      <h3 
                        onClick={() => setActiveModalVideo(vid)}
                        className="font-headline font-semibold text-base sm:text-[17px] text-[#222222] group-hover:text-[#cd9834] transition-colors line-clamp-2 cursor-pointer mb-2"
                        title={vid.title}
                      >
                        {vid.title}
                      </h3>
                      <p className="text-xs sm:text-[13px] text-[#6f6f6d] line-clamp-2 leading-relaxed font-normal">
                        {vid.description}
                      </p>
                    </div>

                    <div className="mt-4 pt-3 border-t border-[#f2f0ec] flex items-center justify-between text-xs">
                      <button
                        onClick={() => setActiveModalVideo(vid)}
                        className="text-[#cd9834] font-medium hover:underline flex items-center gap-1"
                      >
                        <Play className="w-3.5 h-3.5 fill-current" />
                        <span>Play Video</span>
                      </button>

                      <a
                        href={vid.youtubeUrl || `https://www.youtube.com/watch?v=${vid.videoId}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#999997] hover:text-[#222222] transition-colors flex items-center gap-1"
                      >
                        <span>Open YouTube</span>
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* View All Videos CTA Button */}
        <div className="mt-12 text-center">
          <button
            onClick={onNavigateToVideos}
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-[#222222] hover:bg-[#cd9834] text-white text-xs sm:text-sm font-medium uppercase tracking-wider transition-all duration-300 shadow-md hover:scale-105"
          >
            <span>Explore All Atelier Videos</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Video Modal Player */}
      {activeModalVideo && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
          onClick={() => setActiveModalVideo(null)}
        >
          <div 
            className="bg-[#1a1a1a] rounded-2xl max-w-4xl w-full overflow-hidden border border-[#333333] shadow-2xl relative"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="p-4 sm:p-5 flex items-center justify-between border-b border-[#2e2e2e]">
              <div className="pr-4">
                <span className="text-[11px] font-semibold text-[#cd9834] uppercase tracking-wider block mb-1">
                  {activeModalVideo.category || 'Atelier Showcase'}
                </span>
                <h3 className="font-headline text-lg sm:text-xl text-white font-medium line-clamp-1">
                  {activeModalVideo.title}
                </h3>
              </div>
              <button
                onClick={() => setActiveModalVideo(null)}
                className="text-gray-400 hover:text-white p-2 rounded-lg hover:bg-white/10 transition-colors focus:outline-none flex-shrink-0"
              >
                ✕
              </button>
            </div>

            {/* Embed Iframe */}
            <div className="aspect-video w-full bg-black">
              <iframe
                src={`https://www.youtube-nocookie.com/embed/${activeModalVideo.videoId}?autoplay=1&rel=0`}
                title={activeModalVideo.title}
                className="w-full h-full border-0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>

            {/* Modal Footer Description */}
            <div className="p-4 sm:p-5 bg-[#141414] text-xs sm:text-sm text-[#a0a09e] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
              <p className="leading-relaxed max-w-2xl">
                {activeModalVideo.description}
              </p>
              <a
                href={activeModalVideo.youtubeUrl || `https://www.youtube.com/watch?v=${activeModalVideo.videoId}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-[#2a2a2a] hover:bg-[#cd9834] text-white text-xs whitespace-nowrap transition-colors"
              >
                <span>Watch on YouTube</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
