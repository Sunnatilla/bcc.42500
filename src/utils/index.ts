export const kz2lt = (text: string) => {
  let be = false;
  let snew = "";
  let result = "";

  Array.from(text).forEach((sold) => {
    if (sold === "А") {
      snew = "A";
      be = true;
    } else if (sold === "а") {
      snew = "a";
      be = true;
    } else if (sold === "Ә") {
      snew = "A";
      be = true;
    } else if (sold === "ә") {
      snew = "a";
      be = true;
    } else if (sold === "Б") {
      snew = "B";
      be = false;
    } else if (sold === "б") {
      snew = "b";
      be = false;
    } else if (sold === "В") {
      snew = "V";
      be = false;
    } else if (sold === "в") {
      snew = "v";
      be = false;
    } else if (sold === "Г") {
      snew = "G";
      be = false;
    } else if (sold === "г") {
      snew = "g";
      be = false;
    } else if (sold === "Ғ") {
      snew = "G";
      be = false;
    } else if (sold === "ғ") {
      snew = "g";
      be = false;
    } else if (sold === "Д") {
      snew = "D";
      be = false;
    } else if (sold === "д") {
      snew = "d";
      be = false;
    } else if (sold === "Һ") {
      snew = "H";
      be = false;
    } else if (sold === "һ") {
      snew = "h";
      be = false;
    } else if (sold === "Е" && !be) {
      snew = "E";
      be = true;
    } else if (sold === "е" && !be) {
      snew = "e";
      be = true;
    } else if (sold === "Е" && be) {
      snew = "Ye";
      be = true;
    } else if (sold === "е" && be) {
      snew = "ye";
      be = true;
    } else if (sold === "Ё" && !be) {
      snew = "E";
      be = true;
    } else if (sold === "ё" && !be) {
      snew = "e";
      be = true;
    } else if (sold === "Ё" && be) {
      snew = "Ye";
      be = true;
    } else if (sold === "ё" && be) {
      snew = "ye";
      be = true;
    } else if (sold === "Ж") {
      snew = "Zh";
      be = false;
    } else if (sold === "ж") {
      snew = "zh";
      be = false;
    } else if (sold === "З") {
      snew = "Z";
      be = false;
    } else if (sold === "з") {
      snew = "z";
      be = false;
    } else if (sold === "И") {
      snew = "I";
      be = true;
    } else if (sold === "и") {
      snew = "i";
      be = true;
    } else if (sold === "І") {
      snew = "I";
      be = true;
    } else if (sold === "і") {
      snew = "i";
      be = true;
    } else if (sold === "Й") {
      snew = "Y";
      be = false;
    } else if (sold === "й") {
      snew = "y";
      be = false;
    } else if (sold === "К") {
      snew = "K";
      be = false;
    } else if (sold === "к") {
      snew = "k";
      be = false;
    } else if (sold === "Қ") {
      snew = "K";
      be = false;
    } else if (sold === "қ") {
      snew = "k";
      be = false;
    } else if (sold === "Л") {
      snew = "L";
      be = false;
    } else if (sold === "л") {
      snew = "l";
      be = false;
    } else if (sold === "М") {
      snew = "M";
      be = false;
    } else if (sold === "м") {
      snew = "m";
      be = false;
    } else if (sold === "Н") {
      snew = "N";
      be = false;
    } else if (sold === "н") {
      snew = "n";
      be = false;
    } else if (sold === "Ң") {
      snew = "N";
      be = false;
    } else if (sold === "ң") {
      snew = "n";
      be = false;
    } else if (sold === "О") {
      snew = "O";
      be = true;
    } else if (sold === "о") {
      snew = "o";
      be = true;
    } else if (sold === "Ө") {
      snew = "O";
      be = true;
    } else if (sold === "ө") {
      snew = "o";
      be = true;
    } else if (sold === "П") {
      snew = "P";
      be = false;
    } else if (sold === "п") {
      snew = "p";
      be = false;
    } else if (sold === "Р") {
      snew = "R";
      be = false;
    } else if (sold === "р") {
      snew = "r";
      be = false;
    } else if (sold === "С") {
      snew = "S";
      be = false;
    } else if (sold === "с") {
      snew = "s";
      be = false;
    } else if (sold === "Т") {
      snew = "T";
      be = false;
    } else if (sold === "т") {
      snew = "t";
      be = false;
    } else if (sold === "У") {
      snew = "U";
      be = true;
    } else if (sold === "у") {
      snew = "u";
      be = true;
    } else if (sold === "Ұ") {
      snew = "U";
      be = true;
    } else if (sold === "ұ") {
      snew = "u";
      be = true;
    } else if (sold === "Ү") {
      snew = "U";
      be = true;
    } else if (sold === "ү") {
      snew = "u";
      be = true;
    } else if (sold === "Ф") {
      snew = "F";
      be = false;
    } else if (sold === "ф") {
      snew = "f";
      be = false;
    } else if (sold === "Х") {
      snew = "Kh";
      be = false;
    } else if (sold === "х") {
      snew = "kh";
      be = false;
    } else if (sold === "Ц") {
      snew = "Ts";
      be = false;
    } else if (sold === "ц") {
      snew = "ts";
      be = false;
    } else if (sold === "Ч") {
      snew = "Ch";
      be = false;
    } else if (sold === "ч") {
      snew = "ch";
      be = false;
    } else if (sold === "Ш") {
      snew = "Sh";
      be = false;
    } else if (sold === "ш") {
      snew = "sh";
      be = false;
    } else if (sold === "Щ") {
      snew = "Shch";
      be = false;
    } else if (sold === "щ") {
      snew = "shch";
      be = false;
    } else if (sold === "Ъ") {
      snew = "";
      be = true;
    } else if (sold === "ъ") {
      snew = "";
      be = true;
    } else if (sold === "Ы") {
      snew = "Y";
      be = false;
    } else if (sold === "ы") {
      snew = "y";
      be = false;
    } else if (sold === "Ь") {
      snew = "";
      be = true;
    } else if (sold === "ь") {
      snew = "";
      be = true;
    } else if (sold === "Э") {
      snew = "E";
      be = true;
    } else if (sold === "э") {
      snew = "e";
      be = true;
    } else if (sold === "Ю") {
      snew = "Yu";
      be = true;
    } else if (sold === "ю") {
      snew = "yu";
      be = true;
    } else if (sold === "Я") {
      snew = "Ya";
      be = true;
    } else if (sold === "я") {
      snew = "ya";
      be = true;
    } else {
      snew = sold;
      be = false;
    }
    result += snew;
  });

  return result.toUpperCase();
};
