UI.registerHelper('equals', function(a, b) {
    if(a === b){
        return true;
    }else {
        return false;
    }
});

UI.registerHelper('pluralize', function(number, string) {
  plural = string + 's';
  return (number == 1 ? string : plural);
});
