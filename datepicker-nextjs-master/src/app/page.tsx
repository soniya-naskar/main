"use client";

import React from "react";
import { isSameDay } from "date-fns";
import moment from "moment";
import { useCalendarStore } from "@/store/calendar.store";
import { CustomCalendar } from "@/components/calendar";
import { sessions } from "@/data/sessions";

export default function Home() {
  const { date } = useCalendarStore();

  const sessionsAvailable: string[] = sessions.filter((session) => {
    const sessionDate = new Date(session);
    return isSameDay(date!, sessionDate);
  });

  return (
    <>
      <CustomCalendar sessions={sessions} />
      <h1>Selected date: {date && moment(date).format("DD/MM/YYYY")}</h1>

      <p>
        Sessions available:{" "}
        {sessionsAvailable.length > 0 ? (
          <ul>
            {sessionsAvailable.map((session, index) => (
              <li key={index} className="mb-2">
                <button className="btn btn-primary">
                  {moment(session).format("HH[h]mm")}
                </button>
              </li>
            ))}
          </ul>
        ) : (
          <strong>
            <em>none</em>
          </strong>
        )}
      </p>
    </>
  );
}
