import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowLeft,
  faCircleInfo,
  faNewspaper,
  faUsers,
  faFolderOpen,
  faPenNib,
  faMountain,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import "./home.css";
import { Link } from "react-router-dom";
import postsData from "../../data/posts.json";
import {
  faChevronLeft,
  faClock,
  faStar,
  faGear,
  faSliders,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";

export default function Home() {
  const featuredPosts = postsData.posts.filter((post) => post.featured);
  const latestPosts = postsData.posts
    .filter((post) => !post.featured)
    .slice(0, 3);

  return (
    <div className="bg-[#0a0a0a] min-h-screen text-white" dir="rtl">
      {/* HERO SECTION */}
      <main className="min-h-screen relative overflow-hidden flex flex-col items-center justify-center p-6">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(38,38,38,0.5)_1px,transparent_1px),linear-gradient(90deg,rgba(38,38,38,0.5)_1px,transparent_1px)] bg-[size:60px_60px]"></div>
        <div className="absolute top-1/4 -left-20 w-96 h-96 bg-[#f26522] opacity-10 blur-[120px] rounded-full"></div>

        <div className="relative z-10 text-center max-w-4xl space-y-8">
          <div className="inline-flex items-center gap-2 bg-[#1a1a1a] border border-gray-800 rounded-full px-4 py-2 text-sm text-gray-300">
            <span className="flex h-2 w-2 rounded-full bg-[#f26522]"></span>
            <span>مرحباً بك في عدسة</span>
          </div>

          <h1 className="text-5xl md:text-5xl font-bold text-white leading-tight">
            اكتشف <span className="gradiant-text">فن</span> <br />
            التصوير الفوتوغرافي
          </h1>

          <p className="text-gray-400 text-xl md:text-2xl max-w-2xl mx-auto leading-relaxed">
            انغمس في أسرار المحترفين ونصائح عملية لتطوير مهاراتك في التصوير.
          </p>

          <div className="flex flex-col md:flex-row items-center justify-center gap-4 pt-4">
            <Link
              to="/blog"
              className="w-full md:w-auto flex items-center justify-center gap-2 bg-[#f26522] hover:bg-[#d4561c] text-white px-8 py-4 rounded-2xl font-bold transition-all shadow-xl shadow-[#f26522]/20 group"
            >
              <span>استكشف المقالات</span>
              <FontAwesomeIcon
                icon={faArrowLeft}
                className="group-hover:-translate-x-1 transition-transform"
              />
            </Link>
            <Link
              to="404"
              className="w-full md:w-auto flex items-center justify-center gap-2 bg-transparent border border-gray-800 hover:bg-white/5 text-white px-8 py-4 rounded-2xl font-bold transition-all"
            >
              <FontAwesomeIcon icon={faCircleInfo} className="text-gray-400" />
              <span>اعرف المزيد</span>
            </Link>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-8">
            <div className="bg-[#121212]/50 backdrop-blur-sm border border-gray-900 p-6 rounded-3xl space-y-2">
              <FontAwesomeIcon
                icon={faNewspaper}
                className="text-[#f26522] text-xl mb-2 block"
              />
              <h3 className="text-3xl font-bold gradiant-text">+50</h3>
              <p className="text-gray-500 text-sm font-medium">مقالة</p>
            </div>

            <div className="bg-[#121212]/50 backdrop-blur-sm border border-gray-900 p-6 rounded-3xl space-y-2">
              <FontAwesomeIcon
                icon={faUsers}
                className="text-[#f26522] text-xl mb-2 block"
              />
              <h3 className="text-3xl font-bold gradiant-text">+10ألف</h3>
              <p className="text-gray-500 text-sm font-medium">قارئ</p>
            </div>

            <div className="bg-[#121212]/50 backdrop-blur-sm border border-gray-900 p-6 rounded-3xl space-y-2 ">
              <FontAwesomeIcon
                icon={faFolderOpen}
                className="text-[#f26522] text-xl mb-2 block"
              />
              <h3 className="text-3xl font-bold gradiant-text">4</h3>
              <p className="text-gray-500 text-sm font-medium">تصنيفات</p>
            </div>

            <div className="bg-[#121212]/50 backdrop-blur-sm border border-gray-900 p-6 rounded-3xl space-y-2">
              <FontAwesomeIcon
                icon={faPenNib}
                className="text-[#f26522] text-xl mb-2 block"
              />
              <h3 className="text-3xl font-bold gradiant-text">6</h3>
              <p className="text-gray-500 text-sm font-medium">كاتب</p>
            </div>
          </div>
        </div>
      </main>

      {/*  FEATURED  */}
      <section className="bg-[#0a0a0a] py-20 px-6 text-white" dir="rtl">
        <div className="max-w-7xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-[#1a1a1a] border border-gray-800 rounded-full px-4 py-2 text-[10px] text-[#f26522] mb-4">
            <span className="flex h-1.5 w-1.5 rounded-full bg-[#f26522]"></span>
            <span className="font-bold tracking-widest uppercase">مميز</span>
          </div>
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-4 text-right">
            <div>
              <h2 className="text-4xl font-bold mt-2">مقالات مختارة</h2>
              <span className="text-[#A1A1A1]">
                محتوى منتقى لبدء رحلة تعلمك
              </span>
            </div>
            <Link
              to="/blog"
              className="group inline-flex items-center gap-2 px-5 py-2.5 
             bg-gradient-to-r from-orange-500 to-orange-600 
             text-white rounded-xl font-medium transition-all duration-300 
             hover:-translate-y-0.5"
            >
              عرض الكل
              <FontAwesomeIcon
                icon={faChevronLeft}
                className="text-white text-sm"
              />
            </Link>
          </div>

          {/* Cards */}
          <div className="space-y-8">
            {featuredPosts.map((post) => (
              <Link
                key={post.id}
                to={`/blog/${post.slug}`}
                className="
        bg-[#121212] border border-gray-800 rounded-[2.5rem] overflow-hidden flex flex-col md:flex-row group hover:border-[#f26522]/40 transition-all duration-500 block no-underline"
              >
                {/* Image Section */}
                <div className="md:w-2/5 h-56 sm:h-64 md:h-auto overflow-hidden relative shrink-0">
                  <div className="absolute top-4 right-4 z-10 bg-gradient-to-r from-orange-500 to-yellow-500 text-white px-3 py-1 rounded-full text-[10px] font-bold shadow-lg flex items-center gap-1">
                    <FontAwesomeIcon
                      icon={faStar}
                      className="text-white text-[10px]"
                    />
                    <span>مميز</span>
                  </div>

                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                </div>

                {/* Content Section */}
                <div className="flex-1 p-8 md:p-12 flex flex-col justify-center text-right">
                  <div className="flex items-center gap-4 mb-4 text-xs">
                    <span
                      className="bg-[#f26522]/10 text-[#f26522] px-3 py-1 rounded-full
            border border-[#f26522]/20 font-bold"
                    >
                      {post.category}
                    </span>

                    <span className="text-gray-500">
                      <FontAwesomeIcon
                        icon={faClock}
                        className="me-2 text-gray-500"
                      />
                      {post.readTime}
                    </span>
                  </div>

                  <h3
                    className="text-2xl md:text-3xl font-bold mb-4 leading-tight
          group-hover:text-[#f26522] transition-colors text-white"
                  >
                    {post.title}
                  </h3>

                  <p className="text-gray-400 mb-8 line-clamp-2 leading-relaxed">
                    {post.excerpt}
                  </p>

                  <div className="flex items-center justify-between mt-auto">
                    <div className="flex items-center gap-3">
                      <div className="relative">
                        <img
                          src={post.author.avatar}
                          alt={post.author.name}
                          className="w-10 h-10 rounded-full object-cover border-2 border-gray-800"
                        />
                        <span className="absolute bottom-0 left-0 w-4 h-4 bg-[#f26522] border-2 border-[#121212] rounded-full"></span>
                      </div>
                      <div className="flex flex-col leading-tight">
                        <span className="text-sm font-medium text-gray-300">
                          {post.author.name}
                        </span>
                        <span className="text-xs text-gray-500">
                          {new Intl.DateTimeFormat("ar-EG", {
                            day: "numeric",
                            month: "long",
                            year: "numeric",
                          }).format(new Date(post.date))}
                        </span>
                      </div>
                    </div>

                    <button className="text-[#f26522] text-sm font-bold hover:translate-x-[-5px] transition-transform">
                      اقرأ المقال ←
                    </button>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CATEGORY  */}
      <section className="bg-[#0d0d0d] py-20 px-6">
        <div className="max-w-7xl mx-auto text-center mb-12">
          <span
            className="bg-[#f26522]/10 text-[#f26522] px-3 py-1 rounded-full
                        border-[#f26522]/20 font-bold"
          >
            التصنيفات
          </span>
          <h2 className="text-4xl font-bold mb-3">استكشف حسب الموضوع</h2>
          <span className="text-[#A1A1A1]">محتوى منتقى لبدء رحلة تعلمك</span>
        </div>
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-5 gap-4">
          <Link
            to="/blog"
            state={{ category: "إضاءة" }}
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="bg-[#1a1a1a] border border-gray-800 p-8 rounded-3xl text-center hover:bg-gradient-to-r from-orange-500 to-yellow-500 transition-all cursor-pointer"
          >
            <FontAwesomeIcon
              icon={faGear}
              className="text-2xl text-[#f26522] mb-4"
            />
            <h3 className="font-bold">إضاءة</h3>
            <p className="text-xs text-gray-500 mt-1">3 مقال</p>
          </Link>

          <Link
            to="/blog"
            state={{ category: "بورتريه" }}
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="bg-[#1a1a1a] border border-gray-800 p-8 rounded-3xl text-center hover:bg-gradient-to-r from-orange-500 to-yellow-500 transition-all cursor-pointer"
          >
            <FontAwesomeIcon
              icon={faUser}
              className="text-2xl text-[#f26522] mb-4"
            />
            <h3 className="font-bold">بورتريه</h3>
            <p className="text-xs text-gray-500 mt-1">3 مقال</p>
          </Link>

          <Link
            to="/blog"
            state={{ category: "مناظر طبيعية" }}
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="bg-[#1a1a1a] border border-gray-800 p-8 rounded-3xl text-center hover:bg-gradient-to-r from-orange-500 to-yellow-500 transition-all cursor-pointer"
          >
            <FontAwesomeIcon
              icon={faMountain}
              className="text-2xl text-[#f26522] mb-4"
            />
            <h3 className="font-bold">طبيعة</h3>
            <p className="text-xs text-gray-500 mt-1">2 مقال</p>
          </Link>

          <Link
            to="/blog"
            state={{ category: "تقنيات" }}
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="bg-[#1a1a1a] border border-gray-800 p-8 rounded-3xl text-center hover:bg-gradient-to-r from-orange-500 to-yellow-500 transition-all cursor-pointer"
          >
            <FontAwesomeIcon
              icon={faSliders}
              className="text-2xl text-[#f26522] mb-4"
            />
            <h3 className="font-bold">تقنيات</h3>
            <p className="text-xs text-gray-500 mt-1">5 مقالات</p>
          </Link>

          <Link
            to="/blog"
            state={{ category: "معدات" }}
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="bg-[#1a1a1a] border border-gray-800 p-8 rounded-3xl text-center hover:bg-gradient-to-r from-orange-500 to-yellow-500 transition-all cursor-pointer"
          >
            <FontAwesomeIcon
              icon={faGear}
              className="text-2xl text-[#f26522] mb-4"
            />
            <h3 className="font-bold">معدات</h3>
            <p className="text-xs text-gray-500 mt-1">3 مقالات</p>
          </Link>
        </div>
      </section>

      {/*  LATEST  SECTION  */}
      <section className="bg-[#0a0a0a] py-20 px-6" dir="rtl">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-6">
            <div className="text-right">
              <div className="inline-flex items-center gap-2 bg-[#1a1a1a] border border-gray-800 rounded-full px-4 py-2 text-[10px] text-[#f26522] mb-4">
                <span className="flex h-1.5 w-1.5 rounded-full bg-[#f26522]"></span>
                <span className="font-bold tracking-widest uppercase">
                  الأحدث
                </span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                أحدث المقالات
              </h2>
              <p className="text-gray-500 text-lg">
                محتوى جديد طازج من المطبعة
              </p>
            </div>

            <button className="text-[#f26522] font-bold text-sm flex items-center gap-2 group transition-all">
              <FontAwesomeIcon
                icon={faArrowLeft}
                className="group-hover:-translate-x-1 transition-transform"
              />
              <span>عرض جميع المقالات</span>
            </button>
          </div>

          {/* Articles Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {latestPosts.map((post) => (
              <Link
                key={post.id}
                to={`/blog/${post.slug}`}
                className="group cursor-pointer flex flex-col h-full bg-[#121212] rounded-[2rem] overflow-hidden border border-gray-900 hover:border-[#f26522]/40 transition-all duration-300 no-underline"
              >
                {/* Card Image Wrapper */}
                <div className="relative aspect-video overflow-hidden">
                  <div className="absolute top-4 right-4 z-10 bg-black/60 backdrop-blur-md px-3 py-1 rounded-full text-[10px] font-bold text-white uppercase tracking-wider">
                    {post.category}
                  </div>
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                </div>

                {/* Card Content */}
                <div className="p-6 flex flex-col flex-1">
                  <div className="flex items-center gap-4 text-[10px] text-gray-500 mb-4">
                    <span className="flex items-center gap-1">
                      <FontAwesomeIcon
                        icon={faClock}
                        className="text-gray-500"
                      />
                      {post.readTime}
                    </span>
                    <span className="w-1 h-1 bg-gray-700 rounded-full"></span>
                    <span className="text-xs text-gray-500">
                      {new Intl.DateTimeFormat("ar-EG", {
                        day: "numeric",
                        month: "long",
                        year: "numeric",
                      }).format(new Date(post.date))}
                    </span>
                  </div>

                  <h3 className="text-[20px] font-bold text-white mb-4 group-hover:text-[#f26522] transition-colors leading-tight">
                    {post.title}
                  </h3>

                  <p className="text-[14px] text-gray-500 text-sm mb-6 line-clamp-2 leading-relaxed">
                    {post.excerpt}
                  </p>

                  {/* Author Info */}
                  <div className="mt-auto pt-6 border-t border-gray-800 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <img
                        src={post.author.avatar}
                        alt={post.author.name}
                        className="w-8 h-8 rounded-full object-cover grayscale group-hover:grayscale-0 transition-all border border-gray-700"
                      />
                      <div className="flex flex-col">
                        <span className="text-white text-xs font-bold">
                          {post.author.name}
                        </span>
                        <span className="text-gray-600 text-[9px]">
                          {post.author.role}
                        </span>
                      </div>
                    </div>

                    <div className="w-8 h-8 rounded-full border border-gray-800 flex items-center justify-center text-[#f26522] group-hover:bg-[#f26522] group-hover:text-white transition-all">
                      <FontAwesomeIcon
                        icon={faChevronLeft}
                        className="text-[10px]"
                      />
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/*   JOIN  SECTION  */}
      <section className="bg-[#0a0a0a] py-20 px-6" dir="rtl">
        <div className="max-w-5xl mx-auto">
          <div className="bg-[#121212] border border-gray-800 rounded-[2.5rem] p-8 md:p-16 text-center relative overflow-hidden group shadow-2xl">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-64 bg-[#f26522] opacity-5 blur-[100px] rounded-full pointer-events-none"></div>
            <div className="relative z-10 inline-flex items-center justify-center w-16 h-16 bg-[#f26522] rounded-2xl shadow-lg shadow-[#f26522]/20 mb-8 transform group-hover:scale-110 transition-transform duration-500">
              <FontAwesomeIcon
                icon={faEnvelope}
                className="text-white text-2xl"
              />
            </div>

            <div className="relative z-10 mb-10">
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
                اشترك في{" "}
                <span className="text-[#f26522]">نشرتنا الإخبارية</span>
              </h2>
              <p className="text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed">
                احصل على نصائح التصوير الحصرية ودروس جديدة مباشرة في بريدك
                الإلكتروني.
              </p>
            </div>

            <form className="relative z-10 flex flex-col md:flex-row gap-4 max-w-2xl mx-auto mb-8">
              <input
                type="email"
                placeholder="أدخل بريدك الإلكتروني"
                className="flex-1 bg-[#1a1a1a] border border-gray-800 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-[#f26522] transition-colors text-right"
                required
              />
              <button
                type="submit"
                className="bg-[#f26522] hover:bg-[#d4561c] text-white px-10 py-4 rounded-2xl font-bold transition-all shadow-xl shadow-[#f26522]/20 active:scale-95 shrink-0"
              >
                اشترك الآن
              </button>
            </form>
            <div className="relative z-10 flex flex-col md:flex-row items-center justify-center gap-6 text-xs text-gray-500">
              <div className="flex items-center gap-2">
                <div className="flex -space-x-2 space-x-reverse">
                  {featuredPosts.slice(0, 3).map((post, index) => (
                    <img
                      key={index}
                      className="w-8 h-8 rounded-full border-2 border-[#121212]"
                      src={post.author.avatar}
                      alt="user"
                    />
                  ))}
                </div>
                <p>
                  انضم لـ <span className="text-white font-bold">+10,000</span>{" "}
                  مصور
                </p>
              </div>
              <div className="hidden md:block w-1 h-1 bg-gray-700 rounded-full"></div>
              <p>بدون إزعاج</p>
              <div className="hidden md:block w-1 h-1 bg-gray-700 rounded-full"></div>
              <p>إلغاء الاشتراك في أي وقت</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
