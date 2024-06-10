const regx = new RegExp(/\d/, "g");
const specialChars = ".,:;-_()=*";

export const generateRandomString = (length: number): string => {
  const array = new Uint8Array(length);
  window.crypto.getRandomValues(array);

  return Array.from(array)
    .map((num, index) => {
      const currStr = (num % 36).toString(36);

      return index % 2
        ? currStr
            .toUpperCase()
            .replace(regx, (key) => specialChars.charAt(Number(key)))
        : currStr;
    })
    .join("")
    .slice(0, length);
};
