function p() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject(new Error("bad"));
    }, 1000);
  });
}

p()
  .then((message) => {
    console.log("1000ms 후에 fullfilled 됩니다.", message);
  })
  .catch((error) => {
    console.log("1000ms 후에 rejected 됩니다.", error);
  });
