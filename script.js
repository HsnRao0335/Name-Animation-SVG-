const logo = document.querySelectorAll("#logo path");

for (let i = 0; i < logo.length; i++) {
  console.log(`At logo ${i} , value is ${logo[i].getTotalLength()}`);
}
