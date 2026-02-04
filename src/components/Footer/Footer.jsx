import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter, faGithub, faLinkedinIn, faYoutube    } from "@fortawesome/free-brands-svg-icons";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
export default function Footer() {
  return (
    <footer className="bg-[#0a0a0a] text-gray-400 py-12 px-6 md:px-16 border-t border-gray-800" dir="rtl">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">

        <div className="space-y-6">
          <div className="flex items-center gap-2">
            <div className="bg-[#f26522] text-white p-2 rounded-lg font-bold text-xl w-10 h-10 flex items-center justify-center">
              ع
            </div>
            <span className="text-white text-2xl font-bold">عدسـة</span>
          </div>
          <p className="text-sm leading-relaxed text-gray-500">
            مدونة متخصصة في فن التصوير الفوتوغرافي، نشارك معكم أسرار المحترفين ونصائح عملية لتطوير مهاراتكم.
          </p>
      
        <div className="flex gap-4">
        <a href="#" className="w-10 h-10 bg-[#1a1a1a] rounded-lg flex items-center justify-center hover:bg-[#f26522] hover:text-white transition-all border border-gray-800">
            <FontAwesomeIcon icon={faTwitter} />
        </a>
        <a href="#" className="w-10 h-10 bg-[#1a1a1a] rounded-lg flex items-center justify-center hover:bg-[#f26522] hover:text-white transition-all border border-gray-800">
            <FontAwesomeIcon icon={faGithub} />
        </a>
        <a href="#" className="w-10 h-10 bg-[#1a1a1a] rounded-lg flex items-center justify-center hover:bg-[#f26522] hover:text-white transition-all border border-gray-800">
            <FontAwesomeIcon icon={faLinkedinIn} />
        </a>
        <a href="#" className="w-10 h-10 bg-[#1a1a1a] rounded-lg flex items-center justify-center hover:bg-[#f26522] hover:text-white transition-all border border-gray-800">
            <FontAwesomeIcon icon={faYoutube} />
        </a>
        </div>

        </div>

        <div>
          <h3 className="text-white font-bold mb-6 flex items-center gap-2">
              <span className="w-8 h-0.5 bg-gradient-to-r from-orange-500 to-yellow-500 rounded-full"></span>
            استكشف
          </h3>
          <ul className="space-y-4 text-sm">
            {/* I searched on how to to go to the top page when click */}
            <li className="hover:text-[#f26522] cursor-pointer"><Link to="/" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>الرئيسية</Link></li>
            <li className="hover:text-[#f26522] cursor-pointer"><Link to="/blog" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>المدونة</Link></li>
            <li className="hover:text-[#f26522] cursor-pointer"><Link to="404" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>من نحن</Link></li>
          </ul>
        </div>

<div>
  <h3 className="text-white font-bold mb-6 flex items-center gap-2">
      <span className="w-8 h-0.5 bg-gradient-to-r from-orange-500 to-yellow-500 rounded-full"></span>
    التصنيفات
  </h3>
  <ul className="space-y-4 text-sm">
    {["إضاءة", "بورتريه", "مناظر طبيعية", "تقنيات"].map((cat) => (
      <li key={cat} className="hover:text-[#f26522] cursor-pointer">
        <Link 
          to="/blog" 
          state={{ category: cat }} 
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          {cat}
        </Link>
      </li>
    ))}
  </ul>
</div>

        <div>
          
       <h3 className="text-white font-bold mb-6 flex items-center gap-2">
             <span className="w-8 h-0.5 bg-gradient-to-r from-orange-500 to-yellow-500 rounded-full"></span>
            ابقى على اطلاع
           
          </h3>
          <p className="text-sm mb-4 text-gray-500">اشترك للحصول على أحدث المقالات والتحديثات.</p>
          <div className="space-y-3">
            <input 
              type="email" 
              placeholder="أدخل بريدك الإلكتروني" 
              className="w-full bg-[#141414] border border-gray-800 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#f26522] transition-colors"
            />
            <button className="w-full bg-[#f26522] hover:bg-[#d4561c] text-white font-bold py-3 rounded-xl transition-all shadow-lg shadow-[#f26522]/20">
              اشترك
            </button>
          </div>
        </div>
      </div>

      <div className="mt-16 pt-8 border-t border-gray-900 flex flex-col md:flex-row justify-between items-center gap-4 text-xs">
        <p>
          © 2026 عدسة. صنع بكل <span ><FontAwesomeIcon icon={faHeart} className="text-[#f26522]" /></span> جميع الحقوق محفوظة.
        </p>
        <div className="flex gap-6">
          <Link to="404" href="#" className="hover:text-white" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>سياسة الخصوصية</Link>
          <Link to="404" href="#" className="hover:text-white" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>شروط الخدمة</Link>
        </div>
      </div>
    </footer>
  );
}