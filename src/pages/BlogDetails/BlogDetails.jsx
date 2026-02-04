import React, { useEffect } from "react";
import { useParams, Link, useLocation, Navigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faClock,
  faCalendarDays,
  faListUl,
  faEnvelope,
  faShareNodes,
  faCamera,
  faTags,
  faChevronLeft,
  faHome,
  faImages,
  faLink,
} from "@fortawesome/free-solid-svg-icons";
import {
  faTwitter,
  faLinkedinIn,
  faWhatsapp,
  faXTwitter,

} from "@fortawesome/free-brands-svg-icons";
import postsData from "../../data/posts.json";

export default function BlogDetails() {
  const { slug } = useParams();
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  //  Find Post
  const post = postsData.posts.find((p) => p.slug === slug);

  // Related Posts
  const relatedPosts = post
    ? postsData.posts
        .filter((p) => p.category === post.category && p.id !== post.id)
        .slice(0, 3)
    : [];

  // parsing the content from post.json
  const getArticleData = () => {
    if (!post?.content) return { intro: "", sections: [] };

    const [intro, ...rest] = post.content.split(/##\s+/);

    const sections = rest.map((part, i) => {
      const [title, ...body] = part.split("\n");

      return {
        id: i,
        title: title.trim(),
        body: body.join("\n").trim(),
      };
    });

    return {
      intro: intro.trim(),
      sections,
    };
  };

  const articleData = getArticleData();

  const formattedDate = post?.date
    ? new Date(post.date).toLocaleDateString("ar-EG", {
        day: "numeric",
        month: "long",
        year: "numeric",
      })
    : "";

  if (!post) {
    return <Navigate to="/404" replace />;
  }

  return (
    <div className="bg-[#0a0a0a] min-h-screen text-white pb-20 " dir="rtl">
      {/*  HERO SECTION  */}
      <section className="relative h-[600px] w-full overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src={post.image}
            alt={post.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-black/40 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-l from-black/60 via-transparent to-transparent opacity-60" />
        </div>

        <div className="absolute top-10 -right-8 -translate-x-1/2 z-30">
          <div className="flex items-center gap-3 bg-black/40 backdrop-blur-md px-6 py-2.5 rounded-full border border-white/10 text-sm">
            <Link
              to="/"
              className="text-gray-200 hover:text-white transition-colors"
            >
              <FontAwesomeIcon icon={faHome} />
            </Link>
            {/* Category Link (Dynamic) */}

            <FontAwesomeIcon
              icon={faChevronLeft}
              className="text-[10px] text-gray-500"
            />

            {/* Blog Home Link */}
            <Link
              to="/blog"
              className="text-gray-200 hover:text-white transition-colors"
            >
              المدونة
            </Link>

            <FontAwesomeIcon
              icon={faChevronLeft}
              className="text-[10px] text-gray-500"
            />

            {/* Home Icon */}

            <Link
              to="/blog"
              state={{ category: post.category }}
              className="text-[#FF8904] font-bold hover:brightness-110 transition-all"
            >
              {post.category}
            </Link>
          </div>
        </div>
        <div className="relative z-10 h-full flex flex-col justify-center items-start px-6 md:px-16 max-w-7xl mx-auto">
          {/* Meta Data */}
          <div className="flex flex-wrap items-center gap-4 font-medium mb-6">
            <span className="bg-[rgb(255_105_0)] text-white px-4 py-1.5 rounded-full shadow-lg shadow-[#f26522]/20">
              {post.category}
            </span>
            <div className="flex items-center gap-4 text-gray-200">
              <span className="flex items-center gap-2">
                <FontAwesomeIcon icon={faCalendarDays} />
                {formattedDate}
              </span>
              <span className="flex items-center gap-2">
                <FontAwesomeIcon icon={faClock} />
                {post.readTime}
              </span>
            </div>
          </div>

          {/* Title */}
          <h1 className="text-3xl md:text-6xl lg:text-7xl font-bold leading-tight mb-10 max-w-4xl drop-shadow-lg">
            {post.title}
          </h1>

          {/* Author Card */}
          <div className="flex items-center gap-4 bg-[#121212]/80 backdrop-blur-md px-6 py-4 rounded-4xl border border-gray-700/50 shadow-2xl">
            <div className="relative">
              <img
                src={post.author.avatar}
                alt={post.author.name}
                className="w-14 h-14 rounded-full object-cover border-2 border-[#f26522]"
              />
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-white text-lg leading-none mb-1">
                {post.author.name}
              </span>
              <span className="text-gray-400 text-xs">{post.author.role}</span>
            </div>
          </div>
        </div>
      </section>

      {/* GRID  */}
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 -mt-20 relative z-20 items-start">
        <main className="lg:col-span-8 order-2 lg:order-1">
          {/* Dynamic Quote */}
          <div className="bg-[#221309] border border-[#4a2407] p-6 rounded-2xl mb-12 relative overflow-hidden">
            <p className="italic text-lg font-medium leading-relaxed relative z-10">
              "{post.excerpt}"
            </p>
          </div>

          <div className="space-y-12 text-gray-300 text-lg leading-loose">
            {articleData.intro && (
              <p className="whitespace-pre-line">{articleData.intro}</p>
            )}

            {articleData.sections.map((section) => (
              <div
                key={section.id}
                id={`section-${section.id}`}
                className="space-y-4 scroll-mt-32"
              >
                <h2 className="text-2xl font-bold text-white flex items-center gap-3">
                  <FontAwesomeIcon icon={faCamera} className="text-[#f26522]" />
                  {section.title}
                </h2>
                <p className="text-gray-400 whitespace-pre-line">
                  {section.body}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-12 bg-[#121212] border border-gray-800 rounded-3xl p-6">
            <div className="flex items-center gap-2 font-bold">
              <FontAwesomeIcon
                icon={faTags}
                className=" text-[#f26522] bg-[#221309] border border-[#6a300a] p-3 rounded-2xl"
              />
              <span>الوسوم</span>
            </div>
            <div className="mt-3 flex gap-2 flex-wrap items-center">
              {post.tags && post.tags.length > 0 ? (
                post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="bg-[#1a1a1a] border border-gray-700 hover:border-[#f26522] px-4 py-1.5 rounded-full text-xs text-gray-400 transition-colors cursor-pointer"
                  >
                    #{tag}
                  </span>
                ))
              ) : (
                <span className="bg-[#1a1a1a] border border-gray-700 px-4 py-1.5 rounded-full text-xs text-gray-400">
                  #{post.category}
                </span>
              )}
            </div>
          </div>

          {/*  Share */}
          <div className="mt-6 bg-[#121212] border border-gray-800 rounded-3xl p-6 flex justify-between">
            <div className="flex items-center gap-2 font-bold">
              <FontAwesomeIcon
                icon={faShareNodes}
                className=" text-[#f26522] bg-[#221309] border border-[#6a300a] p-3 rounded-2xl"
              />
              <span>شارك المقال</span>
            </div>
            <div className="flex gap-3">
              <button className="w-13 h-13 rounded-2xl bg-[#1a1a1a] hover:bg-[#0077b5] text-white transition-all flex items-center justify-center">
                <FontAwesomeIcon icon={faXTwitter} />
              </button>
              <button className="w-13 h-13 rounded-2xl bg-[#1a1a1a] hover:bg-[#0077b5] text-white transition-all flex items-center justify-center">
                <FontAwesomeIcon icon={faLinkedinIn} />
              </button>
              <button className="w-13 h-13 rounded-2xl bg-[#1a1a1a] hover:bg-[#25D366] text-white transition-all flex items-center justify-center">
                <FontAwesomeIcon icon={faWhatsapp} />
              </button>
              <button className="w-13 h-13 rounded-2xl bg-[#1a1a1a] hover:bg-[#d4561c] text-white transition-all flex items-center justify-center">
                <FontAwesomeIcon icon={faLink} />
              </button>
            </div>
          </div>

          <div className="mt-12 bg-[#121212] border border-gray-800 rounded-[2rem] p-8 flex gap-6 ">
            <img
              src={post.author.avatar}
              alt={post.author.name}
              className="w-24 h-24 rounded-2xl object-cover border-2 border-[#1a1a1a]"
            />
            <div className="space-y-2">
              <div>
                <p className="text-[#f26522] text-xs font-bold mb-1">
                  كاتب المقال
                </p>
                <h3 className="text-2xl font-bold text-white">
                  {post.author.name}
                </h3>
                <p className="text-[#737373] text-xs font-bold mb-1">
                  {" "}
                  {post.author.role}
                </p>
              </div>

              <p className="text-gray-400 text-sm leading-relaxed">
                مصور محترف شغوف بمشاركة المعرفة والخبرات في
                عالم التصوير الفوتوغرافي.
              </p>
            </div>
          </div>
        </main>

        {/* Sidebar */}
        <aside className="lg:col-span-4 space-y-6 order-1 lg:order-2 lg:sticky lg:top-24">
          {/* Table of Contents */}
          <div className="bg-[#121212] border border-gray-800 rounded-[2rem] p-6 ">
            <h3 className="flex items-center gap-3 text-lg font-bold mb-6 ">
              <FontAwesomeIcon
                icon={faListUl}
                className=" text-[#f26522] bg-[#221309] border border-[#6a300a] p-3 rounded-2xl "
              />{" "}
              محتويات المقال
            </h3>
            <ul className="space-y-4">
              {articleData.sections.length > 0 ? (
                articleData.sections.map((section, index) => (
                  <li key={index}>
                    <a
                      href={`#section-${section.id}`}
                      className="flex items-center gap-4 group cursor-pointer"
                    >
                      <span className="w-8 h-8 rounded-lg bg-[#1a1a1a] group-hover:bg-orange-500/5 text-gray-500 group-hover:text-orange-500  flex items-center justify-center text-xs font-bold transition-colors">
                        {index + 1}
                      </span>
                      <span className="text-gray-400 text-sm  group-hover:bg-orange-500/5 group-hover:text-orange-500 transition-colors">
                        {section.title}
                      </span>
                    </a>
                  </li>
                ))
              ) : (
                <li className="text-gray-500 text-sm">لا توجد أقسام</li>
              )}
            </ul>
          </div>

          <div className="bg-[#121212] border border-gray-800 rounded-[2rem] p-6 grid grid-cols-2 gap-4">
            <div className="bg-[#1a1a1a] rounded-2xl p-4 text-center flex flex-col items-center justify-center gap-2">
              <FontAwesomeIcon
                icon={faClock}
                className="text-[#f26522] text-xl"
              />
              <span className="text-white font-bold text-lg leading-none">
                {post.readTime.split(" ")[0]} دقائق
              </span>
              <span className="text-gray-500 text-[10px]">للقراءة</span>
            </div>
            <div className="bg-[#1a1a1a] rounded-2xl p-4 text-center flex flex-col items-center justify-center gap-2">
              <FontAwesomeIcon
                icon={faCalendarDays}
                className="text-[#f26522] text-xl"
              />
              <span className="text-white font-bold text-lg leading-none">
                {new Date(post.date).toLocaleDateString("ar-EG", {
                  day: "numeric",
                  month: "short",
                })}
              </span>
              <span className="text-gray-500 text-[10px]">تاريخ النشر</span>
            </div>
          </div>

          <div className="bg-[#221309] border border-[#f26522]/20 rounded-[2rem] p-8 text-center relative overflow-hidden">
            <div className="w-14 h-14 bg-[#f26522]/10 rounded-2xl flex items-center justify-center mx-auto mb-4 text-[#f26522] text-2xl">
              <FontAwesomeIcon icon={faEnvelope} />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">
              لا تفوّت جديدنا
            </h3>
            <p className="text-gray-500 text-xs mb-6 px-4">
              اشترك للحصول على أحدث المقالات والدروس الحصرية.
            </p>
            <button className="w-full bg-[#f26522] hover:bg-[#d4561c] text-white font-bold py-3 rounded-xl transition-all shadow-lg shadow-[#f26522]/20">
              تصفح المزيد
            </button>
          </div>
        </aside>
      </div>

      {/*  RELATED POSTS  */}
      <section className="max-w-7xl mx-auto px-6 mt-20 pt-10 border-t border-gray-900">
        <div className="flex items-center justify-between mb-8">
          <div className="flex gap-3 items-center">
            <FontAwesomeIcon
              icon={faImages}
              className=" text-[#f26522] bg-[#221309] border border-[#6a300a] p-3 rounded-2xl"
            />
            <div>
              <h2 className="text-2xl font-bold flex items-center gap-2">
                مقالات قد تعجبك
              </h2>
              <p className=" text-[#737373] text-xs font-bold mb-1">
                {" "}
                {post.author.role}
              </p>
            </div>
          </div>

          <Link
            to="/blog"
            className="text-[#f26522] text-sm font-bold hover:underline"
          >
            عرض الكل ←
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-6">
          {relatedPosts.map((post) => (
            <Link
              key={post.id}
              to={`/blog/${post.slug}`}
              className="group block bg-[#121212] rounded-[2rem] overflow-hidden border border-gray-800 hover:border-gray-700 transition-all"
            >
              <div className="h-48 overflow-hidden relative">
                <span className="absolute top-3 right-3 z-10 bg-[#f26522] text-white text-[10px] font-bold px-2 py-1 rounded-md">
                  {post.category}
                </span>

                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover z-0 group-hover:scale-110 transition-transform duration-500"
                />
              </div>

              <div className="p-5">
                <h3 className="font-bold text-white mb-2 line-clamp-2 group-hover:text-[#f26522] transition-colors">
                  {post.title}
                </h3>
                  <div className="flex justify-between">
                    <div className="flex gap-2 items-center">
                      <img
                        src={post.author.avatar}
                        alt={post.author.name}
                        className="w-8 h-8 rounded-full object-cover"
                      />
                      <span className="text-[14px] text-[#737373]">{post.author.name}</span>
                    </div>
                    <div>
                      <span className="text-[14px] text-[#737373]">{post.readTime}</span>
                    </div>
                  </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
