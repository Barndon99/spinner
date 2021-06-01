const chars = "|/-\\|/-\\|";
let i = 0;

for (const char of chars) {
  setTimeout(() => {process.stdout.write(`\r${char}        `)}, i);
  i += 250;
};
