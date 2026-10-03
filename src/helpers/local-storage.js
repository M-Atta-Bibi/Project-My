export const GetLocalStorage = (key) => {
  try {
    const value = localStorage.getItem(key);
    if (value == null) return null;
    try {
      return JSON.parse(value);
    } catch {
      return value;
    }
  } catch {
    return null;
  }
};
export const setLocalStorage = (key, value) => {
  const stored = typeof value === "string" ? value : JSON.parse(value);
  localStorage.setItem(key, stored);
};
export const RemoveLocalStorage = (key) => {
  localStorage.removeItem(key);
};
