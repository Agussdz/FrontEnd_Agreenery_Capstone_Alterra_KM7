import { create } from "zustand";

// Store untuk menyimpan id laporan yang dipilih
const useReportStore = create((set) => ({
  selectedReportId: null,
  setSelectedReportId: (id) => {
    console.log("Selected Report ID set to:", id);
    set({ selectedReportId: id });
  },
}));

export default useReportStore;
