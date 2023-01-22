const express = require('express');
const app= express();
const PORT = 3000;

//import from routes/user.js
const userRoutes = require('./routes/user');
const authRoutes = require('./routes/auth');
const postRoutes = require('./routes/posts');

//setting middleware
app.use('api/user', userRoutes);
app.use('api/auth', authRoutes);
app.use('api/posts', postRoutes);

app.get('/', (req,res)=> {
    res.send('Hello from server.js');
})

app.listen(PORT, ()=> console.log('Server is on'));
