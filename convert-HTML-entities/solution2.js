function convertHTML(str) {
    // :)
    var chars = {
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        "\"": "&quot;",
        "\'": "&apos;"
    };
    str = str.replace(/&|<|>|"|'/g, function(char) {
        return chars[char];
    });
    console.log(str); 
  }
  
  convertHTML("Dolce & Gabbana");