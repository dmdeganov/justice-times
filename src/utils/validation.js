export function validateName(name) {
  return /^[A-Za-z\s]*$/.test(name);
}
export const validateEmail = (email) => {
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};
export const validatePassword = (password) => {
  const errMessages = {
    sixCharsMin: "should be min 6 letters",
    capitalLetter: "should includes min 1 english upper case letter",
    lowercaseLetter: "should includes min 1 english lower case letter",
    number: "should includes min 1 number",
    specialSymbol: "should includes min 1 any spec symbol (!@#$%^&*)",
  };
  const checks = {
    sixCharsMin: false,
    capitalLetter: false,
    lowercaseLetter: false,
    number: false,
    specialSymbol: false,
  };
  if (password.length >= 6) {
    checks.sixCharsMin = true;
  } else {
    return errMessages.sixCharsMin;
  }
  password.split("").forEach((char) => {
    if (!checks.capitalLetter) {
      checks.capitalLetter =
        char.charCodeAt(0) >= 65 && char.charCodeAt(0) <= 90 ? true : false;
    }
    if (!checks.lowercaseLetter) {
      checks.lowercaseLetter =
        char.charCodeAt(0) >= 97 && char.charCodeAt(0) <= 122 ? true : false;
    }
    if (!checks.number) {
      checks.number =
        char.charCodeAt(0) >= 48 && char.charCodeAt(0) <= 57 ? true : false;
    }
    if (!checks.specialSymbol) {
      checks.specialSymbol = "!@#$%^&*".includes(char);
    }
  });
  for (let check in checks) {
    if (!checks[check]) return errMessages[check];
  }
  return "";
};
