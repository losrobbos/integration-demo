const mongoose = require("mongoose")

// connect
mongoose
  .connect(
    "your-atlas-url"
  )
  .then(() => console.log("ATLAS DB Connected"))
  .catch((err) => console.log(err.message));
