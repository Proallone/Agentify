export const peselValitadion = (pesel) => {
  /* function ref https://blog.aleksander.kaweczynski.pl/walidacja-numerow-pesel-nip-regon-w-javascript-i-php/ */
  var reg = /^[0-9]{11}$/;
  if (reg.test(pesel) == false) return false;
  else {
    var digits = ("" + pesel).split("");
    if (
      parseInt(pesel.substring(4, 6)) > 31 ||
      parseInt(pesel.substring(2, 4)) > 12
    )
      return false;

    var checksum =
      (1 * parseInt(digits[0]) +
        3 * parseInt(digits[1]) +
        7 * parseInt(digits[2]) +
        9 * parseInt(digits[3]) +
        1 * parseInt(digits[4]) +
        3 * parseInt(digits[5]) +
        7 * parseInt(digits[6]) +
        9 * parseInt(digits[7]) +
        1 * parseInt(digits[8]) +
        3 * parseInt(digits[9])) %
      10;
    if (checksum == 0) checksum = 10;
    checksum = 10 - checksum;

    return parseInt(digits[10]) == checksum;
  }
};

export const postalValidation = (postalCode) => {
  /* Ref https://www.w3resource.com/javascript-exercises/javascript-regexp-exercise-12.php */
  if (/^[0-9]{2}(?:-[0-9]{3})?$/.test(postalCode)) {
    return true;
  }
  return false;
};

export const phoneValidation = (phoneNumber) => {
  /* Ref https://www.w3resource.com/javascript/form/phone-no-validation.php */
  if (/^\d{9}$/.test(phoneNumber)) {
    return true;
  }
  return false;
};

export const emailValidation = (mail) => {
  /* Ref https://www.w3resource.com/javascript/form/email-validation.php */
  if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail)) {
    return true;
  }
  return false;
};
