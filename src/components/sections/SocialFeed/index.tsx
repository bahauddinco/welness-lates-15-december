import React from 'react';
import { YouTubeGrid } from './YouTubeGrid';
import { InstagramGrid } from './InstagramGrid';

const SocialFeed = () => {
  return (
    <section id="social" className="py-14 bg-[#0A0F1C]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-4">Follow Our Journey</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Stay updated with our latest content, tips, and success stories
          </p>
        </div>

        <div className="space-y-12">
          <YouTubeGrid />
          <InstagramGrid />
        </div>
      </div>
    </section>
  );
};

export default SocialFeed;