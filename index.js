const express = require("express");
const cors = require("cors")
const app = express();
require("./dal/CompanyCRM");
const user = require("./routes/user");
const customer = require("./routes/customer");
const employee = require("./routes/employee");
const morgan = require('morgan')
const path = require('path');
const port = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, 'dist/test-project')));
app.use(express.json());
app.use(morgan('tiny'))
app.use(cors({ origin: '*' }))
app.use("/user_api", user);
app.use("/customers_api", customer);
app.use("/employees_api", employee);

app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist/test-project', 'index.html'));
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

