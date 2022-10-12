const days = ["sun", "mon", "tue", "wed", "thu", "fri", "sat"];

export function getDayOfWeek() {
  const d = new Date();
  const day = d.getDay();

  return days[day];
}
