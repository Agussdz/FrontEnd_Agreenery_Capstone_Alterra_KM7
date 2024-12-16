import React, { useState } from "react";
import axiosInstance from "../utils/axiosInstance";

export default function useChatbot() {
  const [input, setInput] = useState("");
  const [image, setImage] = useState(null);
  const [imageBase64, setImageBase64] = useState(null);
  const [loading, setLoading] = useState(false);
  const [history, setHistory] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(true);
  const username = localStorage.getItem("display_name");
  const suggestions = [
    "Bagaimana cara menyiram tanaman dengan benar?",
    "Apa yang harus saya lakukan untuk mencegah hama?",
    "Kapan harus memberikan pupuk pada tanaman?",
  ];

  // Handle select image
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(file);
      setImageBase64(URL.createObjectURL(file));
    }
  };

  const handleSuggestionClick = (suggestion) => {
    setInput(suggestion);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!input.trim() && !image) return;

    const userMessage = { text: input, sender: "user", image: imageBase64 };
    setHistory((prev) => [...prev, userMessage]);

    setLoading(true);
    let aiResponse;

    const formData = new FormData();
    formData.append("prompt", input);
    if (image) {
      formData.append("image", image);
    }

    try {
      const response = await axiosInstance.post("/chatbot", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      if (response.data.meta.status) {
        aiResponse = response.data.data.response;
        const aiMessage = { text: aiResponse, sender: "ai" };
        setHistory((prev) => [...prev, aiMessage]);
      } else {
        aiResponse = "Terjadi kesalahan, coba lagi nanti.";
        const aiMessage = { text: aiResponse, sender: "ai" };
        setHistory((prev) => [...prev, aiMessage]);
      }
    } catch (error) {
      console.error("Error calling the API:", error);
      aiResponse = "Terjadi kesalahan saat memproses permintaan.";
      const aiMessage = { text: aiResponse, sender: "ai" };
      setHistory((prev) => [...prev, aiMessage]);
    }

    // Clear input and image
    setInput("");
    setImage(null);
    setImageBase64(null);
    setLoading(false);
    setShowSuggestions(false);
  };
  return {
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
  };
}
