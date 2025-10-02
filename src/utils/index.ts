export function formatDateWithSuffix(isoString: string) {
  const date = new Date(isoString);

  // Add suffix (st, nd, rd, th)
  function getDayWithSuffix(day: number) {
    if (day > 3 && day < 21) return day + "th";
    switch (day % 10) {
      case 1:
        return day + "st";
      case 2:
        return day + "nd";
      case 3:
        return day + "rd";
      default:
        return day + "th";
    }
  }

  const day = getDayWithSuffix(date.getUTCDate());
  const month = date.toLocaleString("en-US", {
    month: "short",
    timeZone: "UTC",
  });
  const year = date.getUTCFullYear();

  return `${day} ${month} ${year}`;
}
