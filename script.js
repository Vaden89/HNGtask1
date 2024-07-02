document.addEventListener("DOMContentLoaded", function () {
  function getCurrentUTCTime() {
    const now = new Date();
    const hours = String(now.getUTCHours()).padStart(2, "0");
    const minutes = String(now.getUTCMinutes()).padStart(2, "0");
    const seconds = String(now.getUTCSeconds()).padStart(2, "0");
    return `${hours}:${minutes}:${seconds}`;
  }

  function getDayOfWeek() {
    const now = new Date();
    const days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    return days[now.getUTCDay()];
  }

  const currentTimeUTC = getCurrentUTCTime();
  const dayOfWeek = getDayOfWeek();

  document.getElementById("currentTimeUTC").innerText = currentTimeUTC;
  document.getElementById("currentDay").innerText = `It is ${dayOfWeek}`;
});
