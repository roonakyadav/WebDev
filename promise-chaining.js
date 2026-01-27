// Step 1: Clean the room
function cleanRoom() {
  return new Promise((resolve, reject) => { 
    setTimeout(() => {
      resolve("Cleaned room");
    }, 1000);
  });
}

// Step 2: Remove garbage (depends on cleanRoom result)
function removeGarbage(message) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(message + " → Garbage removed");
    }, 1000);
  });
}

// Step 3: Win ice cream (depends on removeGarbage result)
function winIceCream(message) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(message + " → Ice cream won 🍦");
    }, 1000);
  });
}

// Promise chaining (serial execution)
cleanRoom()
  .then((result1) => {
    return removeGarbage(result1);
  })
  .then((result2) => {
    return winIceCream(result2);
  })
  .then((finalResult) => {
    console.log(finalResult);
  })
  .catch((error) => {
    console.error("Error:", error);
  });
