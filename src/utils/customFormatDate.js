export function customFormatDate(date) {
  const dateAndTime = date.toISOString().split("T");
  const time = dateAndTime[1].split(":");
  const space = "%3A";

  return dateAndTime[0] + "T" + time[0] + space + time[1] + space + "00Z";
}
