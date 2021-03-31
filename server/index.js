//Server
const http = require('http');
const path = require('path');
const express = require('express');
const dotenv = require('dotenv').config();
const bodyParser = require('body-parser');
const favicon = require('serve-favicon');
const logger = require('morgan');
const methodOverride = require('method-override');
// const session = require('express-session');
// const multer = require('multer');
const errorHandler = require('errorhandler');

//Mongoose
const mongoose = require('mongoose');
mongoose.connect(process.env.MONGODB_URL, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false });

//Routes
const userRouter = require('./routes/user/userRoutes');
const groupsRouter = require('./routes/groups/groupsRouter');
const app = express();



app.set('port', process.env.PORT || 3000);
// app.set('views', path.join(__dirname, 'views'));
// app.set('view engine', 'pug');
// app.use(favicon(__dirname + 'server/public/favicon.ico'));
app.use(logger('dev'));
app.use(methodOverride());
// app.use(session({
//     resave: true,
//     saveUninitialized: true,
//     secret: 'uwotm8'
// }));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'server/public')));
// app.use(multer());

if ('development' == app.get('env')) {
    app.use(errorHandler());
}

// app.use('/');
app.use('/user', userRouter);
app.use('/group', groupsRouter);
// app.use('/profile');
// app.use('/messages');
// app.use('/settings')
// app.use('/messages/:profileId');

// app.listen(process.env.SERVER_PORT, () => { console.log(`Server listening on port ${process.env.SERVER_PORT}`); });var server = http.createServer(app);
const server = http.createServer(app);
server.listen(app.get('port'), function () {
    console.log('Express server listening on port ' + app.get('port'));
});