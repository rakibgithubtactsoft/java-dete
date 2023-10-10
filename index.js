//////////////////////////////////////////////////////// no : - 8
e = new Date();
f = new Date();
function calsDate(date1, date2) {
  let dif = Math.floor(date1.getTime() - date2.getTime());
  let day = 1000 * 60 * 60 * 24;
  let days = Math.floor(dif / day);
  let months = Math.floor(days / 31);
  let years = Math.floor(months / 12);
  let message = date2.toDateString();
  message += " was ";
  message += days + " Days ";
  message += months + " Months ";
  message += years + " Years Ago \n ";
  return message;
}
calculate = calsDate(e, f);
console.log(calculate);
