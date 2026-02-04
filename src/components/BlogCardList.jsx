import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faClock,
  faCalendarAlt,
  faArrowLeft,
} from "@fortawesome/free-solid-svg-icons";

export default function BlogCardList({ post }) {
  return (
    <div
      className="group bg-[#121212] border border-gray-800 rounded-[2rem] overflow-hidden flex flex-col md:flex-row-reverse hover:border-[#f26522]/40 transition-all duration-500 shadow-xl"
      dir="rtl"
    >
      <div className="md:w-[30%] h-64 md:h-auto overflow-hidden relative shrink-0 order-1 md:order-2">
        <img
          src={post.image}
          alt={post.title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
        />
      </div>
      <div className="flex-1 p-6 md:p-10 flex flex-col justify-center text-right order-2 md:order-1">
        <div className="flex items-center gap-4 mb-4 text-[10px] md:text-xs font-medium text-gray-500">
          <span className="bg-[#f26522]/10 text-[#f26522] px-3 py-1 rounded-full border border-[#f26522]/20 font-bold">
            {post.category}
          </span>
          <span className="flex items-center gap-1.5 text-[#737373]">
            <FontAwesomeIcon icon={faClock} />
            {post.readTime}
          </span>
          <span className="flex items-center gap-1.5 text-[#737373]">
            <FontAwesomeIcon icon={faCalendarAlt} />
            {new Intl.DateTimeFormat("ar-EG", {
              day: "numeric",
              month: "long",
              year: "numeric",
            }).format(new Date(post.date))}
          </span>
        </div>
        <h3 className="text-xl md:text-3xl font-bold text-white mb-4 group-hover:text-[#f26522] transition-colors leading-tight">
          {post.title}
        </h3>
        <p className="text-[#737373] text-sm md:text-base mb-8 line-clamp-2 leading-relaxed">
          {post.excerpt}
        </p>
        <div className="mt-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="relative">
              <img
                src={post.author.avatar}
                alt={post.author.name}
                className="w-10 h-10 rounded-full object-cover border-2 border-gray-800"
              />
            </div>
            <div className="text-right">
              <p className="text-white font-bold text-xs md:text-sm">
                {post.author.name}
              </p>
              <p className="text-[#737373] text-[12px]">{post.author.role}</p>
            </div>
          </div>
          <button className="flex items-center gap-2 text-[#f26522] font-bold text-xs md:text-sm hover:translate-x-[-5px] transition-transform">
            <span>اقرأ المقال</span>
            <FontAwesomeIcon icon={faArrowLeft} className="text-[10px]" />
          </button>
        </div>
      </div>
    </div>
  );
}
