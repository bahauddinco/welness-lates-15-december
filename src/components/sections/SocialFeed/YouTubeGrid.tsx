import React from 'react';
import { Youtube } from 'lucide-react';
import { youtubeVideos } from './data';

export const YouTubeGrid = () => {
  const getEmbedUrl = (url: string) => {
    // Convert YouTube URL to embed URL
    const videoId = url.split('v=')[1]?.split('&')[0] || 
                   url.split('youtu.be/')[1]?.split('?')[0];
    return `https://www.youtube.com/embed/${videoId}`;
  };

  return (
    <div className="space-y-8">
      <div className="text-center">
        <div className="inline-flex items-center px-4 py-2 bg-[#ff6b00]/10 rounded-full">
          <Youtube className="w-5 h-5 text-[#ff6b00] mr-2" />
          <span className="text-[#ff6b00] font-medium">Latest Videos</span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {youtubeVideos.map((video, index) => (
          <div key={index} className="aspect-video bg-gray-900/50 rounded-xl overflow-hidden">
            <iframe
              className="w-full h-full"
              src={getEmbedUrl(video.url)}
              title={video.title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        ))}
      </div>
    </div>
  );
};