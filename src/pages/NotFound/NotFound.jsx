import React from 'react';
import { Link } from 'react-router-dom'; // أو حسب نظام التوجيه لديك
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faNewspaper, faFrown } from "@fortawesome/free-solid-svg-icons";

export default function NotFound() {
  return (
    <>

      <div className="min-h-screen bg-[#0a0a0a] relative overflow-hidden flex flex-col items-center justify-center p-6 text-center" dir="rtl">
                  <div className="absolute inset-0 bg-[linear-gradient(rgba(38,38,38,0.5)_1px,transparent_1px),linear-gradient(90deg,rgba(38,38,38,0.5)_1px,transparent_1px)] bg-[size:60px_60px]"></div>
        <div className="absolute top-1/4 -left-20 w-96 h-96 bg-[#f26522] opacity-10 blur-[120px] rounded-full"></div>
      <div className="absolute inset-0 z-0 opacity-20" 
           style={{ 
             backgroundImage: `linear-gradient(#1a1a1a 1px, transparent 1px), linear-gradient(90deg, #1a1a1a 1px, transparent 1px)`,
             backgroundSize: '40px 40px' 
           }}>
      </div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#f26522] opacity-5 blur-[120px] rounded-full"></div>

      <div className="relative">
        <h1 className="text-[150px] md:text-[200px] font-black bg-gradient-to-br from-orange-500 to-yellow-400 bg-clip-text text-transparent">
          404
        </h1>

        <div className="relative inline-block mb-4">
          <div className="w-24 h-24 rounded-full border-2 border-[#f26522]/30 flex items-center justify-center bg-[#1a1a1a]/50 backdrop-blur-sm">
            <FontAwesomeIcon icon={faFrown} className="text-[#f26522] text-4xl" />
          </div>
          <span className="absolute -top-2 -right-2 w-4 h-4 bg-[#f26522] rounded-full animate-bounce"></span>
          <span className="absolute -bottom-4 -left-6 w-3 h-3 bg-yellow-500 rounded-full opacity-70"></span>
        </div>
        <div className="space-y-4">
          <h2 className="text-3xl md:text-5xl font-bold text-white">
            عفواً! الصفحة غير موجودة
          </h2>
          <p className="text-gray-400 text-lg md:text-xl max-w-lg mx-auto leading-relaxed">
            الصفحة التي تبحث عنها غير موجودة أو تم نقلها. دعنا نعيدك إلى المسار الصحيح.
          </p>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-center gap-4 pt-6">
          <Link to="/" className="w-full md:w-auto flex items-center justify-center gap-3 bg-[#f26522] hover:bg-[#d4561c] text-white px-10 py-4 rounded-full font-bold transition-all shadow-xl shadow-[#f26522]/20 group">
            <FontAwesomeIcon icon={faHome} />
            <span>الذهاب للرئيسية</span>
          </Link>
          
          <Link to="/blog" className="w-full md:w-auto flex items-center justify-center gap-3 bg-transparent border border-gray-800 hover:bg-white/5 text-white px-10 py-4 rounded-full font-bold transition-all">
            <FontAwesomeIcon icon={faNewspaper} className="text-gray-400" />
            <span>تصفح المقالات</span>
          </Link>
        </div>
      </div>
    </div>
    </>
  
  );
}