import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock, faChevronLeft } from "@fortawesome/free-solid-svg-icons";

export default function BlogCard({ post }) {
  return (
    <div
      className="group bg-[#121212] rounded-[2rem] overflow-hidden border border-gray-900 hover:border-gray-700 transition-all duration-300 flex flex-col h-full shadow-xl"
      dir="rtl"
    >
      <div className="relative h-64 overflow-hidden">
        <div className="absolute top-4 right-4 z-10 bg-black/60 backdrop-blur-md px-3 py-1 rounded-full text-[10px] font-bold text-white border border-white/10">
          {post.category}
        </div>

        <img
          src={post.image}
          alt={post.title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
        />
      </div>
      <div className="p-6 md:p-8 flex flex-col flex-1">
        <div className="flex items-center gap-4 text-[10px] text-gray-500 mb-4 font-medium">
          <span className="flex items-center gap-1.5 text-[#737373]">
            <FontAwesomeIcon icon={faClock} />
            {post.readTime}
          </span>
          <span className="w-1 h-1 bg-gray-700 rounded-full"></span>
          <span className="text-xs text-[#737373]">
            {new Intl.DateTimeFormat("ar-EG", {
              day: "numeric",
              month: "long",
              year: "numeric",
            }).format(new Date(post.date))}
          </span>
        </div>
        <h3 className="text-xl font-bold text-white mb-4 group-hover:text-[#f26522] transition-colors leading-snug line-clamp-2">
          {post.title}
        </h3>
        <p className="text-[#a1a1a1] text-sm mb-8 line-clamp-2 leading-relaxed">
          {post.excerpt}
        </p>
        <div className="mt-auto pt-6 border-t border-gray-800/50 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="relative">
              <img
                src={post.author.avatar}
                alt={post.author.name}
                className="w-9 h-9 rounded-full object-cover grayscale group-hover:grayscale-0 transition-all border border-gray-800"
              />
            </div>
            <div className="flex flex-col">
              <span className="text-white text-xs font-bold">
                {post.author.name}
              </span>
              <span className="text-[#737373] text-[12px]">
                {post.author.role}
              </span>
            </div>
          </div>
          <div className="w-9 h-9 bg-[#2d1d13] rounded-full border border-[#582c0f] flex items-center justify-center text-[#f26522] group-hover:bg-[#f26522] group-hover:text-white group-hover:border-[#f26522] transition-all duration-300">
            <FontAwesomeIcon icon={faChevronLeft} className="text-[10px]" />
          </div>
        </div>
      </div>
    </div>
  );
}
