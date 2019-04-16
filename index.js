const express = require('express');
const app = express();

// /users 요청을 ./api/users로 넘겨준다.
app.use('/users', require('./api/users'));

app.listen(8080,()=>{
    console.log('8080 port Connected!!!!');
})