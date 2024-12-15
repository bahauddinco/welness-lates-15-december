import React, { useEffect } from 'react';
import { Instagram } from 'lucide-react';
import { instagramPosts } from './data';

export const InstagramGrid = () => {
  useEffect(() => {
    // Load Instagram embed script
    const script = document.createElement('script');
    script.src = '//www.instagram.com/embed.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="space-y-8">
      <div className="text-center">
        <div className="inline-flex items-center px-4 py-2 bg-[#ff6b00]/10 rounded-full">
          <Instagram className="w-5 h-5 text-[#ff6b00] mr-2" />
          <span className="text-[#ff6b00] font-medium">Instagram Feed</span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {instagramPosts.map((post, index) => (
          <div key={index} className="bg-gray-900/50 rounded-xl overflow-hidden">
            <blockquote
              className="instagram-media w-full"
              data-instgrm-permalink={post.url}
              data-instgrm-version="14"
              style={{ 
                background: '#1a1a1a',
                borderRadius: '12px',
                margin: '0',
                padding: '0',
                width: '100%',
                maxWidth: '100%'
              }}
            ></blockquote>
          </div>
        ))}
      </div>
    </div>
  );
};