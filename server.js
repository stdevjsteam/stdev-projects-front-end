const express = require('express');
const path = require('path');

const app = express();

app.use(express.static('./dist/your_app_name'));

app.get('/*', function(req,res) {
    
res.sendFile(path.join(__dirname,'/dist/your_app_name/index.html'));
});

app.listen(process.env.PORT || 8080);