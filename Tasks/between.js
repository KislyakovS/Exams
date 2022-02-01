// Extract substring between prefix and suffix

getvaluebetween = (str, p, s) => {
  // OLD
  // i = str.indexOf(p);
  // if (i === -1) return '';
  // else {
  //   k = i + p.length;
  //   str = str.substring(k);
  //   if (s) {
  //     i = str.indexOf(s);
  //     if (i === -1) {
  //       return '';
  //     } else {
  //       str = str.substring(0, i);
  //     }
  //   }
  // }
  // return str;

  // NEW
  if (str.trim() === '') return '';

  const startIndex = str.indexOf(p) + 1;
  const endIndex = str.indexOf(s);

  return str.slice(startIndex, endIndex);
};

require('../Tests/between.js')(getvaluebetween);
