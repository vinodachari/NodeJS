const figlet = require("figlet");

figlet("Hello VINOD!", (err, data) => {
  if (err) {
    console.log("Something Went Wrong");
    console.log.dir(err);
    return;
  }
  console.log(data);
});
