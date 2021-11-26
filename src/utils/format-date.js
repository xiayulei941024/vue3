// 检查传入是否为时间戳或Date 并返回Date
const validateDate = (date) => {
  if (date instanceof Date) return date;
  if (typeof date === "object" || !date) return new Date();
  return new Date(date);
};

// 整合时间字符串
const formatNumber = (n) => {
  n = n.toString();
  return n[1] ? n : "0" + n;
};

// 格式 2021年04月06日
export const formatTextTime = (date) => {
  date = validateDate(date);
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();

  return `${formatNumber(year)}年${formatNumber(month)}月${formatNumber(
    day
  )}日`;
};

// 格式 2021-04-06
export const formatLineTime = (date) => {
  date = validateDate(date);
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();
  // const hour = date.getHours()
  // const minute = date.getMinutes()
  // const second = date.getSeconds()

  return [year, month, day].map(formatNumber).join("-");
};

// 格式 2021-04-06
export const formatTime = (date) => {
  date = validateDate(date);
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();
  const hour = date.getHours();
  const minute = date.getMinutes();
  const second = date.getSeconds();

  return (
    [year, month, day].map(formatNumber).join("-") +
    " " +
    [hour, minute, second].map(formatNumber).join(":")
  );
};
