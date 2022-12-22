for (let i = 1; i <= 5; i++) {
    let line = '';
    for (let j = 1; j <= 5 - i; j++) {
      line += ' ';
    }
    for (let j = 1; j <= 2 * i - 1; j++) {
      line += '*';
    }
    console.log(line);
  }
  
  for (let i = 4; i >= 1; i--) {
    let line = '';
    for (let j = 1; j <= 5 - i; j++) {
      line += ' ';
    }
    for (let j = 1; j <= 2 * i - 1; j++) {
      line += '*';
    }
    console.log(line);
  }
  