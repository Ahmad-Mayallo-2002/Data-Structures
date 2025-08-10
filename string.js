import { log } from "console";

// String Operation Without Built in Methods

// Concatenation
const concatenation = (s1, s2) => s1 + s2;
// String Are Same
const areStringsSame = (s1, s2) => s1 === s2;
// Find Character
const findCharacter = (str, char) => {
  if (!str.length) return "String is Empty";
  for (let i = 0; i < str.length; i++) if (str[i] === char) return i;
  return "Character is not Found";
};
// Reverse String
const reverse = (s) => {
  if (!s.length) return "String is Empty";
  let reversed = "";
  for (let i = s.length - 1; i >= 0; i--) reversed += s[i];
  return reversed;
};
// Insert Character at Given Position
const insert = (str, char, pos) => {
  if (!str.length) return "String is Empty";
  if (str.length <= pos) return str + pos;
  let newStr = "";
  for (let i = 0; i < str.length; i++) {
    if (i === pos) newStr += char;
    newStr += str[i];
  }
  return newStr;
};
// Remove Character at Given Position
const remove = (str, pos) => {
  if (!str.length) return "String is Empty";
  let newStr = "";
  for (let i = 0; i < str.length; i++) {
    if (i === pos) continue;
    newStr += str[i];
  }
  return newStr;
};
// Remove All Occurrences of a Character in a String
const occurrences = (str, char) => {
  if (!str.length) return "String is Empty";
  let newStr = "";
  for (const charS of str) {
    if (charS === char) continue;
    newStr += charS;
  }
  return newStr;
};

const str1 = "Hello, World!";
const str2 = "Hello, World!";
