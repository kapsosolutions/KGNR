import React, { useState, useEffect } from 'react';
import { 
  Lock, 
  User, 
  Key, 
  PlusCircle, 
  Trash2, 
  ExternalLink, 
  CheckCircle2, 
  AlertCircle, 
  LogOut, 
  RefreshCw, 
  Database, 
  Film, 
  ArrowLeft,
  Eye,
  Sparkles
} from 'lucide-react';

export default function AdminPanel({ onNavigateHome, onNavigateToVideos }) {
  // Authentication State
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [authError, setAuthError] = useState('');
  const [authLoading, setAuthLoading] = useState(false);

  // Video Management State
  const [videos, setVideos] = useState([]);
  const [loadingVideos, setLoadingVideos] = useState(false);
  const [actionSuccess, setActionSuccess] = useState('');
  const [actionError, setActionError] = useState('');

  // Add Video Form State
  const [youtubeUrl, setYoutubeUrl] = useState('');
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Check existing session
  useEffect(() => {
    const savedToken = sessionStorage.getItem('kgnr_admin_token');
    if (savedToken) {
      setIsAuthenticated(true);
      fetchVideos();
    }
  }, []);

  const handleLogin = async (e) => {
    e.preventDefault();
    setAuthError('');
    setAuthLoading(true);

    try {
      const res = await fetch('/api/auth', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password })
      });

      const data = await res.json();
      if (res.ok && data.success) {
        sessionStorage.setItem('kgnr_admin_token', data.token);
        setIsAuthenticated(true);
        fetchVideos();
      } else {
        setAuthError(data.error || 'Invalid username or password');
      }
    } catch (err) {
      setAuthError('Connection error. Please try again.');
    } finally {
      setAuthLoading(false);
    }
  };

  const handleLogout = () => {
    sessionStorage.removeItem('kgnr_admin_token');
    setIsAuthenticated(false);
    setUsername('');
    setPassword('');
  };

  const fetchVideos = async () => {
    try {
      setLoadingVideos(true);
      const res = await fetch('/api/videos');
      if (res.ok) {
        const data = await res.json();
        if (data.videos) {
          setVideos(data.videos);
        }
      }
    } catch (err) {
      console.error('Failed to load videos:', err);
    } finally {
      setLoadingVideos(false);
    }
  };

  // Helper to extract YouTube ID for real-time live preview
  const getYouTubeId = (url) => {
    if (!url) return null;
    const cleanUrl = url.trim();
    const regExp = /(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?|shorts)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/\s]{11})/i;
    const match = cleanUrl.match(regExp);
    if (match && match[1]) return match[1];
    if (/^[a-zA-Z0-9_-]{11}$/.test(cleanUrl)) return cleanUrl;
    return null;
  };

  const previewVideoId = getYouTubeId(youtubeUrl);

  const handleAddVideo = async (e) => {
    e.preventDefault();
    setActionError('');
    setActionSuccess('');

    if (!youtubeUrl) {
      setActionError('Please provide a valid YouTube URL');
      return;
    }

    if (!previewVideoId) {
      setActionError('Could not recognize a valid YouTube Video ID from the URL');
      return;
    }

    setIsSubmitting(true);
    try {
      const res = await fetch('/api/videos', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          youtubeUrl,
          title: title || 'KGN.R Atelier Video Showcase',
          description: description || 'Master goldsmithing, finishing, and temple ornament craftsmanship.'
        })
      });

      const data = await res.json();
      if (res.ok && data.success) {
        setActionSuccess('Video successfully saved to MongoDB database!');
        setYoutubeUrl('');
        setTitle('');
        setDescription('');
        fetchVideos();
        setTimeout(() => setActionSuccess(''), 5000);
      } else {
        setActionError(data.error || 'Failed to save video');
      }
    } catch (err) {
      setActionError('Network error while saving video to database');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleDeleteVideo = async (id) => {
    if (!window.confirm('Are you sure you want to delete this video from the website and database?')) {
      return;
    }

    try {
      const res = await fetch(`/api/videos?id=${id}`, {
        method: 'DELETE'
      });
      const data = await res.json();
      if (res.ok && data.success) {
        setActionSuccess('Video deleted successfully');
        setVideos(videos.filter(v => (v.id || v._id) !== id));
        setTimeout(() => setActionSuccess(''), 4000);
      } else {
        setActionError(data.error || 'Failed to delete video');
      }
    } catch (err) {
      setActionError('Error deleting video');
    }
  };

  const handleSeedSamples = async () => {
    if (!window.confirm('Reset/load default sample videos into MongoDB?')) {
      return;
    }

    try {
      setLoadingVideos(true);
      const res = await fetch('/api/videos', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ action: 'seed' })
      });
      const data = await res.json();
      if (res.ok && data.success) {
        setVideos(data.videos);
        setActionSuccess('Sample videos restored in MongoDB!');
        setTimeout(() => setActionSuccess(''), 4000);
      }
    } catch (err) {
      setActionError('Error seeding videos');
    } finally {
      setLoadingVideos(false);
    }
  };

  // If not logged in, show Admin Login View
  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-[#181818] flex items-center justify-center p-4">
        <div className="max-w-md w-full bg-[#222222] border border-[#333333] rounded-2xl p-6 sm:p-8 shadow-2xl relative">
          <div className="text-center mb-8">
            <div className="w-14 h-14 bg-[#cd9834]/10 border border-[#cd9834]/30 rounded-2xl flex items-center justify-center mx-auto mb-4 text-[#cd9834]">
              <Lock className="w-7 h-7" />
            </div>
            <h2 className="font-headline text-2xl font-light text-white mb-1">
              KGN.R Atelier Admin
            </h2>
            <p className="text-xs text-[#a0a09e]">
              Enter credentials configured in <code className="text-[#cd9834]">.env</code> to manage videos
            </p>
          </div>

          {authError && (
            <div className="mb-6 p-3 rounded-xl bg-red-900/30 border border-red-500/40 text-red-200 text-xs flex items-center gap-2">
              <AlertCircle className="w-4 h-4 flex-shrink-0" />
              <span>{authError}</span>
            </div>
          )}

          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label className="block text-xs font-medium text-[#c5c3c0] uppercase tracking-wider mb-1.5">
                Admin Username
              </label>
              <div className="relative">
                <User className="w-4 h-4 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  required
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  placeholder="e.g. admin"
                  className="w-full pl-10 pr-4 py-2.5 bg-[#1a1a1a] border border-[#3a3a3a] rounded-xl text-sm text-white placeholder-gray-500 focus:outline-none focus:border-[#cd9834]"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-medium text-[#c5c3c0] uppercase tracking-wider mb-1.5">
                Admin Password
              </label>
              <div className="relative">
                <Key className="w-4 h-4 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type="password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  className="w-full pl-10 pr-4 py-2.5 bg-[#1a1a1a] border border-[#3a3a3a] rounded-xl text-sm text-white placeholder-gray-500 focus:outline-none focus:border-[#cd9834]"
                />
              </div>
            </div>

            <button
              type="submit"
              disabled={authLoading}
              className="w-full mt-2 py-3 bg-[#cd9834] hover:bg-[#b8852a] text-white text-xs font-semibold uppercase tracking-wider rounded-xl transition-all shadow-md flex items-center justify-center gap-2 disabled:opacity-50"
            >
              {authLoading ? (
                <>
                  <RefreshCw className="w-4 h-4 animate-spin" />
                  <span>Verifying...</span>
                </>
              ) : (
                <span>Access Admin Panel</span>
              )}
            </button>
          </form>

          <div className="mt-6 pt-6 border-t border-[#333333] flex items-center justify-between text-xs text-[#a0a09e]">
            <button
              onClick={onNavigateHome}
              className="hover:text-white transition-colors flex items-center gap-1"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Return to Website</span>
            </button>
            <span className="text-[11px] text-[#6f6f6d]">Default: admin / admin123</span>
          </div>
        </div>
      </div>
    );
  }

  // Logged-in Admin Dashboard View
  return (
    <div className="min-h-screen bg-[#141414] text-white py-8 sm:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Bar */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 mb-8 border-b border-[#2a2a2a]">
          <div>
            <div className="flex items-center gap-3">
              <span className="font-headline text-2xl font-light text-white">
                KGN.R Video Management Portal
              </span>
              <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-950/60 border border-emerald-500/40 text-emerald-400 text-[11px] font-medium">
                <Database className="w-3 h-3" />
                <span>MongoDB Atlas Connected</span>
              </span>
            </div>
            <p className="text-xs text-[#a0a09e] mt-1">
              Add YouTube video URLs here to automatically update the website grid and Videos page.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={onNavigateHome}
              className="px-3.5 py-2 rounded-xl bg-[#222222] hover:bg-[#2c2c2c] text-xs text-[#c5c3c0] hover:text-white transition-colors"
            >
              View Website
            </button>
            <button
              onClick={onNavigateToVideos}
              className="px-3.5 py-2 rounded-xl bg-[#222222] hover:bg-[#2c2c2c] text-xs text-[#c5c3c0] hover:text-white transition-colors"
            >
              View Videos Page
            </button>
            <button
              onClick={handleLogout}
              className="px-3.5 py-2 rounded-xl bg-red-950/40 border border-red-500/30 text-red-300 hover:bg-red-900/60 text-xs flex items-center gap-1.5 transition-colors"
            >
              <LogOut className="w-3.5 h-3.5" />
              <span>Logout</span>
            </button>
          </div>
        </div>

        {/* Action Status Messages */}
        {actionSuccess && (
          <div className="mb-6 p-4 rounded-xl bg-emerald-950/50 border border-emerald-500/50 text-emerald-300 text-sm flex items-center gap-2">
            <CheckCircle2 className="w-5 h-5 flex-shrink-0" />
            <span>{actionSuccess}</span>
          </div>
        )}
        {actionError && (
          <div className="mb-6 p-4 rounded-xl bg-red-950/50 border border-red-500/50 text-red-300 text-sm flex items-center gap-2">
            <AlertCircle className="w-5 h-5 flex-shrink-0" />
            <span>{actionError}</span>
          </div>
        )}

        {/* Main Grid: Add Video Form (Left) + Video Preview (Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-12">
          
          {/* Add Video Form */}
          <div className="lg:col-span-7 bg-[#1c1c1c] border border-[#2e2e2e] rounded-2xl p-6 sm:p-8">
            <div className="flex items-center gap-2 mb-6">
              <PlusCircle className="w-5 h-5 text-[#cd9834]" />
              <h2 className="font-headline text-xl font-normal text-white">
                Add YouTube Video URL
              </h2>
            </div>

            <form onSubmit={handleAddVideo} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-[#cd9834] mb-1.5">
                  YouTube Video URL *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. https://www.youtube.com/watch?v=ScMzIvxBSi4 or https://youtu.be/..."
                  value={youtubeUrl}
                  onChange={(e) => setYoutubeUrl(e.target.value)}
                  className="w-full px-4 py-2.5 bg-[#121212] border border-[#3a3a3a] rounded-xl text-sm text-white placeholder-gray-500 focus:outline-none focus:border-[#cd9834]"
                />
                <p className="text-[11px] text-[#888886] mt-1">
                  Supports full YouTube URLs, short links (youtu.be), or YouTube Shorts.
                </p>
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-[#c5c3c0] mb-1.5">
                  Video Title (Headline)
                </label>
                <input
                  type="text"
                  placeholder="e.g. 22K Gold Bangle Finishing & Benchwork"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  className="w-full px-4 py-2.5 bg-[#121212] border border-[#3a3a3a] rounded-xl text-sm text-white placeholder-gray-500 focus:outline-none focus:border-[#cd9834]"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-[#c5c3c0] mb-1.5">
                  Identified YouTube Video ID
                </label>
                <input
                  type="text"
                  disabled
                  value={previewVideoId || 'Waiting for valid YouTube URL...'}
                  className="w-full px-4 py-2.5 bg-[#0f0f0f] border border-[#2a2a2a] rounded-xl text-xs text-[#cd9834] font-mono"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-[#c5c3c0] mb-1.5">
                  Video Description (Subtitle)
                </label>
                <textarea
                  rows={3}
                  placeholder="e.g. Detailed benchwork demonstration showing precision buffing and zero gold wastage recovery in Chinna Bazaar."
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  className="w-full px-4 py-2.5 bg-[#121212] border border-[#3a3a3a] rounded-xl text-sm text-white placeholder-gray-500 focus:outline-none focus:border-[#cd9834] resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting || !youtubeUrl}
                className="w-full py-3.5 bg-[#cd9834] hover:bg-[#b8852a] text-white text-xs font-semibold uppercase tracking-wider rounded-xl transition-all shadow-md flex items-center justify-center gap-2 disabled:opacity-50 cursor-pointer"
              >
                {isSubmitting ? (
                  <>
                    <RefreshCw className="w-4 h-4 animate-spin" />
                    <span>Saving to MongoDB...</span>
                  </>
                ) : (
                  <>
                    <PlusCircle className="w-4 h-4" />
                    <span>Save Video to Website</span>
                  </>
                )}
              </button>
            </form>
          </div>

          {/* Real-time Video Preview Card */}
          <div className="lg:col-span-5 bg-[#1c1c1c] border border-[#2e2e2e] rounded-2xl p-6 sm:p-8 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Eye className="w-5 h-5 text-[#cd9834]" />
                <h3 className="font-headline text-lg font-normal text-white">
                  Real-time Card Preview
                </h3>
              </div>
              <p className="text-xs text-[#a0a09e] mb-4">
                This shows how your video will look in the 3-column website grid.
              </p>

              {/* Preview Card */}
              <div className="bg-white rounded-xl border border-gray-200 overflow-hidden shadow-lg text-[#222222]">
                <div className="aspect-video bg-black relative flex items-center justify-center overflow-hidden">
                  {previewVideoId ? (
                    <img
                      src={`https://img.youtube.com/vi/${previewVideoId}/hqdefault.jpg`}
                      alt="Preview"
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="text-center p-6 text-gray-500">
                      <Film className="w-8 h-8 mx-auto mb-2 opacity-40 text-white" />
                      <p className="text-xs text-gray-400">Paste YouTube URL to preview</p>
                    </div>
                  )}

                  {previewVideoId && (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-12 h-8 bg-red-600 rounded-xl flex items-center justify-center text-white shadow-lg">
                        <div className="w-0 h-0 border-t-[5px] border-t-transparent border-l-[9px] border-l-white border-b-[5px] border-b-transparent ml-0.5" />
                      </div>
                    </div>
                  )}
                </div>

                <div className="p-4">
                  <h4 className="font-headline font-semibold text-sm line-clamp-2 text-[#222222] mb-1.5">
                    {title || 'Video Title Will Appear Here'}
                  </h4>
                  <p className="text-xs text-[#6f6f6d] line-clamp-2 leading-relaxed">
                    {description || 'Video description subtitle explaining the craftsmanship or jewelry topic will appear here.'}
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-[#2a2a2a] text-xs text-[#a0a09e] flex items-center justify-between">
              <span>Status: {previewVideoId ? 'Ready to publish' : 'Awaiting input'}</span>
              <button
                onClick={handleSeedSamples}
                className="text-[#cd9834] hover:underline"
              >
                Reset Default Samples
              </button>
            </div>
          </div>
        </div>

        {/* Existing Published Videos List */}
        <div className="bg-[#1c1c1c] border border-[#2e2e2e] rounded-2xl p-6 sm:p-8">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
            <div>
              <h3 className="font-headline text-xl font-normal text-white">
                Published Videos in Database ({videos.length})
              </h3>
              <p className="text-xs text-[#a0a09e] mt-0.5">
                All videos currently shown in the website 3-column grid and Videos directory.
              </p>
            </div>

            <button
              onClick={fetchVideos}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#282828] hover:bg-[#333333] text-xs text-[#c5c3c0] transition-colors self-start sm:self-auto"
            >
              <RefreshCw className={`w-3.5 h-3.5 ${loadingVideos ? 'animate-spin' : ''}`} />
              <span>Refresh List</span>
            </button>
          </div>

          {loadingVideos ? (
            <div className="text-center py-12 text-[#a0a09e] text-xs">
              Loading videos from MongoDB Atlas...
            </div>
          ) : videos.length === 0 ? (
            <div className="text-center py-12 border border-dashed border-[#333333] rounded-xl p-8">
              <Film className="w-10 h-10 text-gray-500 mx-auto mb-2" />
              <p className="text-sm text-gray-300">No videos in database.</p>
              <button
                onClick={handleSeedSamples}
                className="mt-3 px-4 py-2 bg-[#cd9834] text-white text-xs rounded-lg font-medium"
              >
                Load Initial Sample Videos
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {videos.map((vid) => {
                const id = vid.id || vid._id;
                const videoId = vid.videoId;
                const thumb = `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;

                return (
                  <div
                    key={id}
                    className="bg-[#242424] border border-[#333333] hover:border-[#cd9834]/50 rounded-xl overflow-hidden flex flex-col justify-between transition-colors"
                  >
                    <div>
                      <div className="relative aspect-video bg-black">
                        <img
                          src={thumb}
                          alt={vid.title}
                          className="w-full h-full object-cover"
                        />
                      </div>

                      <div className="p-4">
                        <h4 className="font-medium text-sm text-white line-clamp-2 mb-1.5" title={vid.title}>
                          {vid.title}
                        </h4>
                        <p className="text-xs text-[#a0a09e] line-clamp-2 leading-relaxed">
                          {vid.description}
                        </p>
                      </div>
                    </div>

                    <div className="p-4 pt-2 border-t border-[#2e2e2e] flex items-center justify-between">
                      <a
                        href={vid.youtubeUrl || `https://www.youtube.com/watch?v=${vid.videoId}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs text-[#cd9834] hover:underline flex items-center gap-1"
                      >
                        <span>Open Video</span>
                        <ExternalLink className="w-3 h-3" />
                      </a>

                      <button
                        onClick={() => handleDeleteVideo(id)}
                        className="text-xs text-red-400 hover:text-red-300 flex items-center gap-1 p-1 hover:bg-red-950/40 rounded transition-colors"
                        title="Delete Video"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                        <span>Delete</span>
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
