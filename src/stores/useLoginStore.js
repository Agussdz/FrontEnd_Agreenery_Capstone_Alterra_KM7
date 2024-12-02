import { create } from "zustand";
import { jwtDecode } from "jwt-decode";

const useLoginStore = create((set) => ({
  token: localStorage.getItem("token") || null,
  userId: localStorage.getItem("user_id") || null,
  role: null,

  // Fungsi untuk menyimpan token dan user_id
  setUser: (token) => {
    const decodedToken = jwtDecode(token);
    const role = decodedToken.role;
    const userId = decodedToken.user_id;

    set({ token, role, userId });
    localStorage.setItem("token", token);
    localStorage.setItem("user_id", userId);
  },

  // Fungsi logout (hapus token dan user_id dari localStorage)
  logout: () => {
    set({ token: null, role: null, userId: null });
    localStorage.removeItem("token");
    localStorage.removeItem("user_id");
  },
}));

export default useLoginStore;
