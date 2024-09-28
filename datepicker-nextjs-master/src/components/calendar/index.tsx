import { useCalendarStore } from "@/store/calendar.store";
import { isSameDay } from "date-fns";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

type CustomCalendarProps = {
  sessions: string[];
};

export const CustomCalendar = ({ sessions }: CustomCalendarProps) => {
  const { setDate } = useCalendarStore();

  const highlightDates: Date[] = sessions.map((session) => new Date(session));

  const isHighlighted = (date: any): boolean => {
    return highlightDates.some((highlightedDate) =>
      isSameDay(date, highlightedDate),
    );
  };

  const highlightWithRanges = [
    {
      "react-datepicker__day--highlighted-custom": highlightDates,
    },
  ];

  return (
    <DatePicker
      inline
      highlightDates={highlightWithRanges}
      dayClassName={(date: any) =>
        isHighlighted(date) ? "highlighted-date" : undefined
      }
      onChange={(date: any) => setDate(date)}
    />
  );
};
