function convertHTML(str) {

  // will match every & character in a string globally
  var andRegex = /&/g;

  var lessThanRegex = /</g;
  var greaterThanRegex = />/g;
  var doubleQuoteRegex = /"/g;
  var singleQuoteRegex = /'/g;

  // String.prototype.replace docs: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace
  str = str.replace(andRegex, '&amp;');
  str = str.replace(lessThanRegex, '&lt;');
  str = str.replace(greaterThanRegex, '&gt;');
  str = str.replace(doubleQuoteRegex, '&quot;');
  str = str.replace(singleQuoteRegex, '&apos;');
  return str;
}
  
convertHTML("Dolce & Gabbana");
  