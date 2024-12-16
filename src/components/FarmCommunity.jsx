import React, { useEffect, useState } from "react";
import {
  MoreHorizontal,
  ImageIcon,
  LayoutGrid,
  ThumbsUp,
  MessageSquareText,
  Search,
} from "lucide-react";
import FarmCommunityComment from "./FarmCommunityComment";
import useCommunity from "../hooks/useCommunity";
import { Spinner } from "flowbite-react";

export default function FarmCommunity() {
  const {
    categories,
    posts,
    setPosts,
    selectedCategory,
    loading,
    dropdownOpen,
    content,
    setContent,
    imagePreview,
    postMenuOpen,
    handleLikeToggle,
    handleCategorySelect,
    toggleDropdown,
    handleMediaChange,
    handlePostSubmit,
    togglePostMenu,
    handleDeletePost,
    loggedInUserId,
    handleReportPost,
    currentPage,
    totalPages,
    handlePageChange,
    filteredPosts,
    searchTerm,
    handleSearchChange,
  } = useCommunity();

  return (
    <div className="min-h-screen bg-gray-50 p-4 lg:p-8">
      <div className="mx-auto max-w-6xl">
        <div className="border-l-4 mb-8 border-primary-100 px-4 py-2 flex flex-row gap-4 justify-between items-center">
          <div>
            <h1 className="text-xl font-roboto-700 text-primary-400">
              Komunitas Pertanian
            </h1>
          </div>
        </div>
        <div className="mb-6 relative">
          <Search className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400 ml-3" />
          <input
            type="text"
            placeholder="Tap to search"
            className="w-full rounded-full border border-gray-200 bg-white py-3 pl-14 pr-4 text-sm text-gray-900 placeholder:text-gray-500 focus:border-primary-400 focus:outline-none focus:ring-1 focus:ring-primary-400"
            value={searchTerm}
            onChange={handleSearchChange}
          />
        </div>

        <div className="grid gap-6 lg:grid-cols-[1fr,300px]">
          {/* Post Create Form */}
          <div className="space-y-6">
            <div className="rounded-lg bg-white p-6 shadow">
              <h2 className="mb-4 text-lg font-roboto-500 text-primary-400">
                Buat Postingan
              </h2>
              <textarea
                placeholder="Ketik sesuatu..."
                className="mb-4 min-h-[100px] w-full bg-gray-100 rounded-md p-3 border-none focus:ring-primary-400"
                value={content}
                onChange={(e) => setContent(e.target.value)}
              />
              <div className="flex items-center justify-between">
                <div className="flex gap-4">
                  <div className="flex items-center">
                    <input
                      type="file"
                      accept="image/*"
                      onChange={handleMediaChange}
                      className="hidden"
                      id="upload-image"
                    />
                    <label
                      htmlFor="upload-image"
                      className="flex items-center text-sm text-gray-600 cursor-pointer"
                    >
                      <ImageIcon className="mr-2 h-4 w-4 text-primary-400" />
                      Gambar
                    </label>
                  </div>

                  <div className="relative">
                    <button
                      onClick={toggleDropdown}
                      className="flex items-center text-sm text-gray-600"
                    >
                      <LayoutGrid className="mr-2 h-4 w-4 text-primary-400" />
                      {selectedCategory || "Kategori"}
                    </button>
                    {dropdownOpen && (
                      <div className="absolute bg-white rounded-lg shadow-lg z-10 w-48 mt-2">
                        <ul>
                          {categories.map((category) => (
                            <li
                              key={category.id}
                              onClick={() =>
                                handleCategorySelect(category.id, category.name)
                              }
                              className="block px-4 py-2 text-gray-600 hover:bg-gray-100 cursor-pointer"
                            >
                              {category.name}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                </div>

                <button
                  onClick={handlePostSubmit}
                  className="rounded bg-primary-400 px-4 py-2 text-white hover:bg-primary-500"
                >
                  Post
                </button>
              </div>

              {imagePreview && (
                <img
                  src={imagePreview}
                  alt="Preview"
                  className="h-16 w-16 object-cover rounded-md"
                />
              )}
            </div>
          </div>

          {/* Sidebar */}
          <div className="rounded-lg bg-white p-4 shadow">
            <h2 className="mb-4 text-2xl font-roboto-500 text-primary-400">
              Kategori
            </h2>
            <div className="space-y-3">
              <button
                onClick={() => handleCategorySelect("", "All")}
                className={`w-full text-left text-gray-600 hover:text-primary-600 ${
                  selectedCategory === "" ? "font-bold" : ""
                }`}
              >
                All
              </button>
              {categories.length > 0 ? (
                categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() =>
                      handleCategorySelect(category.id, category.name)
                    }
                    className={`w-full text-left text-gray-600 hover:text-primary-600 ${
                      selectedCategory === category.name ? "font-bold" : ""
                    }`}
                  >
                    {category.name}
                  </button>
                ))
              ) : (
                <div>Tidak ada kategori</div>
              )}
            </div>
          </div>
          {loading && (
            <div className="flex flex-col justify-center items-center mt-[5%]">
              <Spinner
                theme={{ color: { success: "fill-[#3DAC21]" } }}
                color="success"
                aria-label="Extra large spinner example"
                size="xl"
              />
              <span className="mt-4 font-roboto-400 text-neutral-500">
                Memuat data..
              </span>
            </div>
          )}
          {/* Display Posts */}
          <div className="space-y-6">
            {filteredPosts.map((post) => (
              <div
                key={post.id}
                className="rounded-lg relative bg-white p-4 shadow"
              >
                <div className="mb-4 flex items-start justify-between">
                  <div className="flex gap-3">
                    <div className="h-10 w-10 overflow-hidden rounded-full bg-gray-200">
                      <img
                        src={post.user.photo || "/placeholder.svg"}
                        alt={post.user.display_name}
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <div>
                      <h3 className="font-semibold">
                        {post.user.display_name}
                      </h3>
                      <p className="text-sm text-gray-500">
                        {new Date(post.created_at).toLocaleDateString()}
                      </p>
                    </div>
                  </div>
                  <button
                    className="text-gray-500 hover:text-gray-700"
                    onClick={() => togglePostMenu(post.id)}
                  >
                    <MoreHorizontal className="h-4 w-4" />
                  </button>
                  {postMenuOpen === post.id && (
                    <div className="absolute bg-white rounded-lg shadow-lg z-10 w-40 mt-6 me-2 right-0">
                      <ul>
                        {post.user.id === loggedInUserId && (
                          <li
                            onClick={() => handleDeletePost(post.id)}
                            className="block px-4 py-2 text-error-500 hover:bg-gray-100 cursor-pointer"
                          >
                            Delete
                          </li>
                        )}

                        <li
                          onClick={() => handleReportPost(post.id)}
                          className="block px-4 py-2 text-gray-600 hover:bg-gray-100 cursor-pointer"
                        >
                          laporkan
                        </li>
                      </ul>
                    </div>
                  )}
                </div>

                <div className="mb-3">
                  <span className="inline-block rounded-full bg-orange-500 px-3 py-1 text-sm text-white">
                    {post.category}
                  </span>
                </div>

                <p className="mb-4">{post.content}</p>
                {post.media && (
                  <img
                    src={post.media}
                    alt="Post media"
                    className="mb-4 max-w-[250px] object-cover rounded-md"
                  />
                )}

                <div className="mb-4 flex gap-4 border-b pb-4">
                  <div className="flex items-center">
                    <button
                      onClick={() => handleLikeToggle(post.id, post.is_liked)}
                    >
                      <ThumbsUp
                        className={`mr-2 h-4 w-4 ${
                          post.is_liked ? "text-primary-400" : "text-gray-600"
                        }`}
                      />
                    </button>
                    <span className="text-sm text-gray-600">
                      {post.count_likes} Likes
                    </span>
                  </div>
                  <div className="flex items-center">
                    <button>
                      <MessageSquareText className="mr-2 h-4 w-4 " />
                    </button>
                    <span className="text-sm text-gray-600">
                      {post.count_comments} Comments
                    </span>
                  </div>
                </div>

                <FarmCommunityComment postId={post.id} setPosts={setPosts} />
              </div>
            ))}
          </div>
        </div>

        {/* Pagination */}
        <nav aria-label="Page navigation community" className="mt-5">
          <ul className="inline-flex -space-x-px text-base h-10">
            {/* Previous Page */}
            <li>
              <button
                onClick={() =>
                  handlePageChange(currentPage > 1 ? currentPage - 1 : 1)
                }
                className="flex items-center justify-center px-4 h-10 ms-0 leading-tight text-gray-500 bg-white border border-e-0 border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700"
              >
                Previous
              </button>
            </li>
            {/* Page Numbers */}
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
              <li key={page}>
                <button
                  onClick={() => handlePageChange(page)}
                  className={`flex items-center justify-center px-4 h-10 leading-tight text-gray-500  border border-gray-300 hover:bg-gray-200 hover:text-gray-700 ${
                    currentPage === page
                      ? "bg-primary-400 text-neutral-100 hover:bg-primary-500 hover:text-neutral-100"
                      : ""
                  }`}
                >
                  {page}
                </button>
              </li>
            ))}
            {/* Next Page */}
            <li>
              <button
                onClick={() =>
                  handlePageChange(
                    currentPage < totalPages ? currentPage + 1 : totalPages
                  )
                }
                className="flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700"
              >
                Next
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}
