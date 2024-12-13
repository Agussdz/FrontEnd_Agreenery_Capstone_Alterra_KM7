import React from "react";
import logoBg from "../assets/logo-white.png";
import useChatbot from "../hooks/useChatbot";
import { marked } from "marked";

export default function Chatbot() {
  const {
    input,
    setInput,
    image,
    setImage,
    imageBase64,
    setImageBase64,
    loading,
    setLoading,
    history,
    setHistory,
    showSuggestions,
    setShowSuggestions,
    username,
    suggestions,
    handleImageChange,
    handleSuggestionClick,
    handleSubmit,
  } = useChatbot();

  return (
    <div>
      <div className="flex max-h-[450px] lg:max-h-[525px] bg-neutral-200 ">
        <div className="flex-1 flex flex-col">
          <div className="max-w-[90%] overflow-y-auto mx-auto space-y-4 mt-8 lg:p-5">
            {showSuggestions && (
              <div className="mx-auto space-y-4 mt-20 text-center lg:px-0 ">
                <h1 className="text-4xl font-semibold">
                  <span className="bg-gradient-to-r from-green-500 to-orange-500 text-transparent bg-clip-text">
                    Hai, Mesiasi
                  </span>
                </h1>
                <h2 className="text-4xl font-roboto-700 bg-gradient-to-r from-green-500 to-orange-500 text-transparent bg-clip-text">
                  Ada yang ingin anda tanyakan?
                </h2>
                <p className="text-primary-800">
                  Ketik pertanyaan Anda atau pilih dari daftar topik populer
                  untuk memulai.
                </p>
              </div>
            )}

            {showSuggestions && (
              <div className="mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 pt-6 lg:pt-28">
                {suggestions.map((suggestion, index) => (
                  <div
                    key={index}
                    onClick={() => handleSuggestionClick(suggestion)}
                    className="bg-gradient-to-b from-green-100 to-orange-100 p-6 text-center rounded-lg shadow hover:shadow-md transition-shadow cursor-pointer"
                  >
                    <p className="text-sm">{suggestion}</p>
                  </div>
                ))}
              </div>
            )}

            {history.map((msg, index) => (
              <div
                key={index}
                className={`py-2 flex ${
                  msg.sender === "user" ? "justify-end" : "justify-start"
                }`}
              >
                {msg.sender === "user" ? (
                  <div className="max-w-[40px] max-h-[40px] bg-gray-300 rounded-full ms-3 order-2">
                    <img
                      src={
                        "https://placehold.co/200x/dddddd/999999.svg?text=ʕ•́ᴥ•̀ʔ&font=Lato"
                      }
                      alt="User Avatar"
                      className="max-w-[70px] h-full rounded-full"
                    />
                  </div>
                ) : (
                  <div className="max-w-[40px] max-h-[40px] bg-primary-500 rounded-full mr-3 p-3 lg:p-1">
                    <img
                      src={logoBg}
                      alt="AI Avatar"
                      className="max-w-[70px] h-full rounded-full"
                    />
                  </div>
                )}

                <div
                  className={`inline-block p-2 rounded-lg ${
                    msg.sender === "user"
                      ? "bg-neutral-300 text-black"
                      : "bg-primary-600 text-white"
                  }`}
                >
                  <span
                    dangerouslySetInnerHTML={{
                      __html: marked(msg.text.replace(/\n/g, "<br />")),
                    }}
                  ></span>
                  {msg.image && (
                    <div className="mt-2 flex justify-center">
                      <img
                        src={msg.image}
                        alt="User uploaded"
                        className="max-w-[200px] rounded-lg shadow-md"
                      />
                    </div>
                  )}
                </div>
              </div>
            ))}

            {loading && (
              <div className="flex gap-1">
                <span className="size-1.5 rounded-full bg-primary-500 motion-safe:animate-[bounce_1s_ease-in-out_infinite]"></span>
                <span className="size-1.5 rounded-full bg-primary-500 motion-safe:animate-[bounce_0.5s_ease-in-out_infinite]"></span>
                <span className="size-1.5 rounded-full bg-primary-500 motion-safe:animate-[bounce_1s_ease-in-out_infinite]"></span>
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="bg-neutral-100 w-[90%] mx-auto relative p-2 flex flex-col justify-between rounded-md lg:mt-5">
        <div className="flex flex-row">
          <div className="space-x-2 flex items-center">
            <input
              type="file"
              className="hidden"
              onChange={handleImageChange}
              id="file-upload"
            />
            <label htmlFor="file-upload" className="cursor-pointer">
              <svg
                width="29"
                height="29"
                viewBox="0 0 29 29"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M25.0438 5.35623H14.9375L14.0188 3.60623C13.5375 2.73123 12.6625 2.16248 11.6563 2.16248H3.95626C2.46876 2.16248 1.28751 3.34373 1.28751 4.83123V24.1687C1.28751 25.6562 2.46876 26.8375 3.95626 26.8375H25.0875C26.575 26.8375 27.7563 25.6562 27.7563 24.1687V8.02498C27.7563 6.53748 26.5313 5.35623 25.0438 5.35623ZM25.7875 24.1687C25.7875 24.5625 25.4813 24.8687 25.0875 24.8687H3.95626C3.56251 24.8687 3.25626 24.5625 3.25626 24.1687V4.83123C3.25626 4.43748 3.56251 4.13123 3.95626 4.13123H11.6563C11.9188 4.13123 12.1375 4.26248 12.2688 4.52498L13.4938 6.79998C13.6688 7.10623 14.0188 7.32498 14.3688 7.32498H25.0875C25.4813 7.32498 25.7875 7.63123 25.7875 8.02498V24.1687Z"
                  fill="#3DAC21"
                />
                <path
                  d="M15.2 11.175C14.8063 10.7812 14.1938 10.7812 13.8 11.175L9.99377 14.9375C9.60002 15.3312 9.60002 15.9437 9.99377 16.3375C10.3875 16.7312 11 16.7312 11.3938 16.3375L13.5375 14.2375V20.625C13.5375 21.15 13.975 21.6312 14.5438 21.6312C15.1125 21.6312 15.5063 21.1937 15.5063 20.625V14.1937L17.6938 16.3375C17.8688 16.5125 18.1313 16.6 18.3938 16.6C18.6563 16.6 18.9188 16.5125 19.0938 16.2937C19.4875 15.9 19.4875 15.2875 19.0938 14.8937L15.2 11.175Z"
                  fill="#3DAC21"
                />
              </svg>
            </label>
          </div>

          <form
            onSubmit={handleSubmit}
            className="flex flex-1 bg-neutral-100 pe-2"
          >
            <input
              type="text"
              placeholder="Ketik pertanyaanmu..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              className="w-full bg-neutral-100 outline-none border-none focus:ring-0 focus:border-none"
            />
            <button
              type="submit"
              disabled={loading || (!input && !image)}
              className={`px-3 py-3 bg-primary-500 rounded-full text-white ${
                loading ? "cursor-not-allowed opacity-50" : "cursor-pointer"
              }`}
            >
              <svg
                width="21"
                height="21"
                viewBox="0 0 21 21"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M19.125 9.7814C19 9.56265 18.8125 9.4064 18.5937 9.2814L4.1875 1.2189C3.9375 1.0939 3.65625 1.0314 3.375 1.06265C3.09375 1.0939 2.84375 1.18765 2.625 1.37515C2.40625 1.56265 2.25 1.81265 2.1875 2.06265C2.09375 2.3439 2.125 2.62515 2.21875 2.9064L4.90625 10.5001L2.21875 18.0939C2.125 18.3751 2.125 18.6564 2.1875 18.9064C2.25 19.1876 2.40625 19.4064 2.625 19.5939C2.84375 19.7814 3.09375 19.8751 3.375 19.9064C3.40625 19.9064 3.46875 19.9064 3.5 19.9064C3.71875 19.9064 3.96875 19.8439 4.1875 19.7189L18.5937 11.6564C18.8125 11.5314 19 11.3751 19.125 11.1564C19.25 10.9376 19.3125 10.6876 19.3125 10.4689C19.3125 10.2501 19.25 10.0002 19.125 9.7814ZM3.5625 2.4689L16.625 9.7814H6.15625L3.5625 2.4689ZM3.5625 18.5314L6.1875 11.2189H16.6562L3.5625 18.5314Z"
                  fill="#FBFBFB"
                />
              </svg>
            </button>
          </form>
        </div>

        {/* Preview Image */}
        {imageBase64 && (
          <div className=" mt-4">
            <img
              src={imageBase64}
              alt="Preview"
              className="max-w-[80px] max-h-[50px] rounded-md"
            />
          </div>
        )}
      </div>
    </div>
  );
}
