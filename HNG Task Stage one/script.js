function updateTime() {
  const now = new Date();

  const gmtPlusOne = new Date(now.getTime() + 1 * 60 * 60 * 1000);

  const gmtPlusOneTime = gmtPlusOne.toUTCString().replace("GMT", "GMT+1");
  const dayOfWeek = gmtPlusOne.toLocaleString("en-US", { weekday: "long" });

  document.getElementById("currentTimeUTC").textContent = gmtPlusOneTime;
  document.getElementById("currentDay").textContent = dayOfWeek;
}
setInterval(updateTime, 1000);

window.onload = updateTime;
