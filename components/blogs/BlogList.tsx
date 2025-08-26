'use client';

import React from 'react';
// Removed useTranslation import

// Removed Dictionary import

interface Blog {
  title: string;
  description: string;
  link: string;
}

const BLOG_SLUGS = [
  { slug: 'adhesive-wheel-weights-production', key: 'adhesive-wheel-weights-production' }
] as const;

const BlogList: React.FC = () => {
  // Removed useTranslation hook call

  // Define blogs array directly with hardcoded English strings
  const blogs: Blog[] = [
    {
      title: "Adhesive Wheel Weights Production", // Hardcoded from dictionaries/en/blogs/adhesive-wheel-weights-production.json
      description: "YILSA, a pioneer in wheel weight production machinery, offers complete production lines featuring rotary punch technology that delivers high-speed, precise manufacturing with minimal energy consumption and zero waste, providing companies a competitive edge in the market.", // Hardcoded
      link: "/blogs/adhesive-wheel-weights-production"
    }
    // Add other blogs here if needed in the future
  ];

  return (
    <div className="container mx-auto py-10">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {blogs.map((blog, index) => (
          <a key={index} href={blog.link} className="block bg-white rounded-lg shadow-md p-5 hover:cursor-pointer transition-all duration-200 hover:scale-105 transform hover:shadow-lg">
            <h3 className="text-xl font-bold mb-2">{blog.title}</h3>
            <p className="text-gray-700 text-justify">{blog.description}</p>
          </a>
        ))}
      </div>
    </div>
  );
};

export default BlogList;
