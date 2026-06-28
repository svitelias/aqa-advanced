const printWithDelay = (text, ms) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log(text);
      resolve();
    }, ms);
  });
};

printWithDelay('Hello after 1 second!', 1000);
printWithDelay('Hello after 2 seconds!', 2000);
