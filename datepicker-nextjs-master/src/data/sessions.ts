import moment from "moment";

export const sessions: string[] = [
  moment().add(1, "days").toISOString(),
  moment().add(2, "days").toISOString(),
  moment().add(2, "days").add(1, "hours").toISOString(),
  moment().add(2, "days").add(2, "hours").toISOString(),
  moment().add(7, "days").toISOString(),
];
