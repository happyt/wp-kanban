var component = require('./component');
var styles = require('./styles/main.css');

var app = document.createElement('div');

document.body.appendChild(app);
app.appendChild(component());