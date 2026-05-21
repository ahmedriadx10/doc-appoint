export const convertTo24Hour = (timeStr) => {
  const [time, modifier] = timeStr.split(" ");

  let [hours, minutes] = time.split(":");

  let hoursNum = parseInt(hours, 10);

  if (modifier === "PM" && hoursNum < 12) {
    hoursNum = hoursNum + 12;
  }

  if (modifier === "AM" && hoursNum === 12) {
    hoursNum = 0;
  }

  const formattedHours = hoursNum < 10 ? `0${hoursNum}` : hoursNum;

  return `${formattedHours}:${minutes}`;
};

export const formatTime = (timeValue) => {
  if (timeValue) {
    const [hourStr, minuteStr] = timeValue.split(":");
    let hour = parseInt(hourStr, 10);
    const minute = minuteStr;

    const ampm = hour >= 12 ? "PM" : "AM";

    hour = hour % 12;
    hour = hour ? hour : 12;

    const finalTimeStr = `${hour}:${minute} ${ampm}`;

    return finalTimeStr;
  }
};
