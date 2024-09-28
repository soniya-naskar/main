import { create } from "zustand";

type CalendarStore = {
  date: Date;
  setDate: (date: Date) => void;
};

export const useCalendarStore = create<CalendarStore>()((set) => ({
  date: new Date(),
  setDate: (date) => set({ date }),
}));
