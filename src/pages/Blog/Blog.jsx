import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagnifyingGlass,
  faChevronRight,
  faChevronLeft,
  faGrip,
  faBars,
  faFrown,
  faArrowsRotate,
} from "@fortawesome/free-solid-svg-icons";

import postsData from "../../data/posts.json";
import BlogCard from "../../components/BlogCard";
import BlogCardList from "../../components/BlogCardList";

export default function Blog() {
  const [activeCategory, setActiveCategory] = useState("جميع المقالات");
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [viewMode, setViewMode] = useState("grid");

  const postsPerPage = 6;
  const location = useLocation();

  useEffect(() => {
    setCurrentPage(1);
  }, [activeCategory, searchQuery]);

  useEffect(() => {
    if (location.state?.category) {
      setActiveCategory(location.state.category);
    }
  }, [location]);

  const handleReset = () => {
    setSearchQuery("");
    setActiveCategory("جميع المقالات");
    setCurrentPage(1);
  };

  const categories = [
    "جميع المقالات",
    ...new Set(postsData.posts.map((post) => post.category)),
  ];

  const filteredPosts = postsData.posts.filter((post) => {
    const matchesCategory =
      activeCategory === "جميع المقالات" || post.category === activeCategory;

    const matchesSearch =
      post.title.includes(searchQuery) || post.excerpt.includes(searchQuery);

    return matchesCategory && matchesSearch;
  });

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = filteredPosts.slice(indexOfFirstPost, indexOfLastPost);

  const totalPages = Math.ceil(filteredPosts.length / postsPerPage);

  return (
    <div className="bg-[#0a0a0a] min-h-screen" dir="rtl">
      {/*  HERO  */}
      <section className="relative py-32 px-6 overflow-hidden text-center">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(38,38,38,0.5)_1px,transparent_1px),linear-gradient(90deg,rgba(38,38,38,0.5)_1px,transparent_1px)] bg-[size:60px_60px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#f26522] opacity-10 blur-[120px] rounded-full" />

        <div className="relative z-10 max-w-4xl mx-auto space-y-6">
          <div className="inline-flex items-center gap-2 bg-[#1a1a1a] border border-gray-800 rounded-full px-5 py-2 text-sm text-[#f26522]">
            <span className="w-2 h-2 rounded-full bg-[#f26522]" />
            <span className="font-bold">مدونتنا</span>
          </div>

          <h1 className="text-[48px] md:text-6xl font-black text-white">
            استكشف{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#f26522] to-[#ffa06e]">
              مقالاتنا
            </span>
          </h1>

          <p className="text-gray-400 text-xl md:text-2xl max-w-2xl mx-auto">
            اكتشف الدروس والرؤى وأفضل الممارسات للتطوير الحديث
          </p>
        </div>
      </section>

      {/*  SEARCH AND FILTER  */}
      <section className="sticky top-19 z-40 border-b border-gray-800 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-6 items-center justify-between p-6">
          {/* Search */}
          <div className="relative w-full md:w-60">
            <input
              type="text"
              placeholder="ابحث في المقالات..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-[#1a1a1a] border border-gray-800 rounded-2xl py-3 px-6 text-white focus:border-[#f26522] outline-none"
            />
            <FontAwesomeIcon
              icon={faMagnifyingGlass}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500"
            />
          </div>

          {/* Categories */}
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2 rounded-xl text-sm font-bold transition-all ${
                  activeCategory === cat
                    ? "bg-[#f26522] text-white"
                    : "bg-[#1a1a1a] text-gray-400 border border-gray-800 hover:border-gray-600"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/*  POSTS  */}
      <section className="max-w-7xl mx-auto p-6 pb-24">
        {/* View Toggle */}
        <div className="flex items-center justify-between mb-12 flex-row-reverse">
          <div className="flex items-center bg-[#121212] p-1.5 rounded-2xl border border-gray-800">
            <button
              onClick={() => setViewMode("grid")}
              className={`w-10 h-10 rounded-xl ${
                viewMode === "grid"
                  ? "bg-[#f26522] text-white"
                  : "text-gray-500"
              }`}
            >
              <FontAwesomeIcon icon={faGrip} />
            </button>

            <button
              onClick={() => setViewMode("list")}
              className={`w-10 h-10 rounded-xl ${
                viewMode === "list"
                  ? "bg-[#f26522] text-white"
                  : "text-gray-500"
              }`}
            >
              <FontAwesomeIcon icon={faBars} />
            </button>
          </div>

          <p className="text-gray-500 text-sm">
            عرض{" "}
            <span className="text-white font-bold">{filteredPosts.length}</span>{" "}
            مقالات
          </p>
        </div>

        {/* Cards */}
        <div
          className={
            viewMode === "grid"
              ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              : "flex flex-col gap-6"
          }
        >
          {currentPosts.map((post) => (
            <Link
              key={post.id}
              to={`/blog/${post.slug}`}
              className="group cursor-pointer block"
            >
              {viewMode === "grid" ? (
                <BlogCard post={post} />
              ) : (
                <BlogCardList post={post} />
              )}
            </Link>
          ))}
        </div>

        {/* Empty */}
        {filteredPosts.length === 0 && (
          <div className="flex flex-col items-center justify-center text-white">
            <div className="mb-6 opacity-40">
              <div className="mb-6 opacity-40 text-gray-400">
                <FontAwesomeIcon icon={faFrown} className="text-[80px]" />
              </div>
            </div>

            <h2 className="text-2xl font-bold mb-2">لا توجد مقالات</h2>

            <p className="text-gray-400 text-sm mb-8 text-center max-w-xs">
              حاول تعديل البحث أو الفلتر للعثور على ما تبحث عنه.
            </p>

            <button
              onClick={handleReset}
              className="flex items-center gap-2 bg-[#f26522] hover:bg-[#d4541a] text-white font-bold py-3 px-10 rounded-full transition-all active:scale-95"
            >
              <FontAwesomeIcon icon={faArrowsRotate} className="text-[15px]" />
              <span>إعادة تعيين الفلاتر</span>
            </button>
          </div>
        )}

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="mt-16 flex flex-col items-center gap-4">
            <div className="flex items-center gap-2">
              <button
                onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                disabled={currentPage === 1}
                className="w-12 h-12 flex items-center justify-center rounded-xl border border-[#262626] bg-[#121212] text-white  hover:border-[#f26522] disabled:cursor-not-allowed disabled:opacity-50 disabled:border-none transition-all"
              >
                <FontAwesomeIcon icon={faChevronRight} />
              </button>

              <div className="flex items-center gap-2">
                {[...Array(totalPages)].map((x, index) => {
                  const pageNumber = index + 1;
                  return (
                    <button
                      key={pageNumber}
                      onClick={() => setCurrentPage(pageNumber)}
                      className={`w-12 h-12 rounded-xl border font-bold transition-all ${
                        currentPage === pageNumber
                          ? "bg-[#f95300] border-[#f26522] text-white"
                          : "bg-[#121212] border-[#262626] text-[#a1a1a1]  hover:border-[#f26522] hover:text-white"
                      }`}
                    >
                      {pageNumber}
                    </button>
                  );
                })}
              </div>

              <button
                onClick={() =>
                  setCurrentPage((prev) => Math.min(prev + 1, totalPages))
                }
                disabled={currentPage === totalPages}
                // searched on how to make a cursor Disabled
                className="w-12 h-12 flex items-center justify-center rounded-xl border border-[#262626] bg-[#121212] text-white hover:border-[#f26522] disabled:cursor-not-allowed disabled:opacity-50 disabled:border-none transition-all"
              >
                <FontAwesomeIcon icon={faChevronLeft} />
              </button>
            </div>
            <p className="text-[#737373] text-sm font-medium">
              صفحة {currentPage} من {totalPages}
            </p>
          </div>
        )}
      </section>
    </div>
  );
}
