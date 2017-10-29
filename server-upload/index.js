let express = require('express');
let app = express();
let formiable = require('express-formidable');
let fs = require('fs');
app.use(formiable({uploadDir: './public'}))
app.listen(3000, ()=> console.log('Server started'));

app.post('/', (req, res)=> {
    console.log(req.files.avatar);
    fs.rename(req.files.avatar.path, 'avatar.jpg', err => {
        res.send('xin chao');
    })
    
});