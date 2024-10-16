// 格式化时间
export function getSystemDate(param: number, dateVal: any) {
  let systemDate = dateVal ? new Date(dateVal) : new Date(),
    year = systemDate.getFullYear(),
    month: any = systemDate.getMonth() + 1,
    date: any = systemDate.getDate(),
    hours: any = systemDate.getHours(),
    minutes: any = systemDate.getMinutes(),
    seconds: any = systemDate.getSeconds(),
    milliseconds: any = systemDate.getMilliseconds();
  month = month < 10 ? '0' + month : month;
  date = date < 10 ? '0' + date : date;
  hours = hours < 10 ? '0' + hours : hours;
  minutes = minutes < 10 ? '0' + minutes : minutes;
  seconds = seconds < 10 ? '0' + seconds : seconds;
  if (param == 0) {
    return year + '-' + month + '-' + date;
  } else if (param == 1) {
    return year + '-' + month + '-' + date + " " + hours + ":" + minutes + ":" + seconds;
  } else if (param == 2) {
    return year + '-' + month + '-' + date + " " + hours + ":" + minutes + ":" + seconds + '.' + milliseconds;
  } else if (param == 3) {
    return year + '-' + month;
  } else if (param == 4) {
    return year
  } else if (param == 5) {
    return new Date(year + '-' + month + '-' + date + " " + hours + ":" + minutes + ":" + seconds).getTime();
  }
}
// 深拷贝
export function deepClone(obj: any) {
  // 处理 null 和非对象的情况
  if (obj === null || typeof obj !== 'object') {
    return obj;
  }
  let result: any = Array.isArray(obj) ? [] : {};
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      if (typeof obj[key] === 'object' && obj[key] !== null) {
        result[key] = deepClone(obj[key]); // 递归复制
      } else {
        result[key] = obj[key];
      }
    }
  }
  return result;
}
// 防抖
export function debounce<T extends (...args: any[]) => any>(fn: T, delay: number) {
  let timer: NodeJS.Timeout | null = null;
  return function(this: unknown, ...args: Parameters<T>) {
    if (timer) clearTimeout(timer);
    timer = setTimeout(() => fn.apply(this, args), delay);
  };
}
