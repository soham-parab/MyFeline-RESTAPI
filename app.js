const express = require("express")

const app = express();

//ROUTES

const PORT  = 3500;



app.get('/', (req,res) => {
res.send('we are on home')


})

app.get('/posts', (req,res)=>{
res.send("Hello tehre!")



})
app.use('/posts', () => {
    console.log("hell")
})

app.listen(PORT);
