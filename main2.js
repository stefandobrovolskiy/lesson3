const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Введіть число від 0 до 100: ', (input) => {
  const num = parseInt(input);

  if (isNaN(num) || num < 0 || num > 100) {
    console.log('Будь ласка, введіть правильне число від 0 до 100.');
  } else {
    const num_s = num.toString();

    if (num_s.length === 1) {
      console.log(num, "=>", numberToWords(num));
    } else if (num_s.length === 2) {
      console.log(num, "=>", numberToWordsTwoDigit(num));
    } else {
      console.log(num, "=>", "One hundred");
    }
  }

  rl.close();
});

function numberToWords(n) {
  const words = ["Zero", "One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine"];
  return words[n];
}

function numberToWordsTwoDigit(n) {
  if (n >= 10 && n <= 19) {
    const teens = ["Ten", "Eleven", "Twelve", "Thirteen", "Fourteen", "Fifteen", "Sixteen", "Seventeen", "Eighteen", "Nineteen"];
    return teens[n - 10];
  } else {
    const tens = ["", "", "Twenty", "Thirty", "Forty", "Fifty", "Sixty", "Seventy", "Eighty", "Ninety"];
    const ones = numberToWords(n % 10);
    return tens[Math.floor(n / 10)] + (ones !== "Zero" ? " " + ones : "");
  }
}
