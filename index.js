const express = require('express')
const app = express()
app.use((req, res, next) => {
  console.log('Hey, so cool!')
});
app.listen(3000, () => console.log('Server running on port 3000'))