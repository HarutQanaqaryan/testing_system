export const checkTestsStorage = () => {
  if (typeof localStorage.getItem("TEST") === "string") {
    return JSON.parse(localStorage.getItem("TEST") || "");
  }else {
    return false
  }
};
