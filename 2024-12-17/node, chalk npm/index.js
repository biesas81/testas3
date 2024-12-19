import chalk from 'chalk';




// function getRandomChar() {
//     const chars = "0 1 ";
//     return chars[Math.floor(Math.random() * chars.length)];
//   }
  
  
//   function matrix() {
//     setInterval(() => {
//       const line = Array.from({ length: process.stdout.columns })
//         .map(() => chalk.hex("#0F0")(getRandomChar()))
//         .join("");
  
//       console.log(line);
//     }, 100);
//   }
  

//   matrix();


  const rows = process.stdout.rows;  
  const cols = process.stdout.columns;  
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@#$%^&*()_+-=<>?|{}[]';
  function getRandomChar() {
    return characters.charAt(Math.floor(Math.random() * characters.length));
  }
  function startMatrixRain() {
    const matrix = Array(cols).fill(0);
    setInterval(() => {
      let output = '';
      matrix.forEach((value, index) => {
        if (Math.random() > 0.95) {
          matrix[index] = 0;
        }
        if (matrix[index] > 0) {
          output += chalk.green(getRandomChar());
        } else {
          output += ' '; 
        }
      });
      console.log(output);
      for (let i = 0; i < cols; i++) {
        if (Math.random() > 0.98) {
          matrix[i] = 1;
        }
      }
    }, 50); 
  }
  startMatrixRain();

