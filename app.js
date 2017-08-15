var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var GoogleAuth = require('google-auth-library');
var auth = new GoogleAuth;
var mongoose=require('mongoose');
var User=require('./user');
var Blog=require('./blog');

var index = require('./routes/index');
var users = require('./routes/users');


var app = express();
// mongoose.connect('mongodb://user1:user1@ds127983.mlab.com:27983/userauth123');
mongoose.connect('mongodb://localhost/check')
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', index);
app.use('/users', users);
// app.use('/profile',profile);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

// var CLIENT_ID='587018207580-o4r1iq6nj80d5tcg7sr94t0i3nasu7v7.apps.googleusercontent.com';
// var token='eyJhbGciOiJSUzI1NiIsImtpZCI6ImY1MDEwZDhhNTM1M2IwMTBjODFmYTQ1ZjFlNDNkMjc4OWIxOGJjOWMifQ.eyJhenAiOiI1ODcwMTgyMDc1ODAtMGVub2VoY29sNWFqMTVpOGtpZGVhM3A0bWpycmg2Zm8uYXBwcy5nb29nbGV1c2VyY29udGVudC5jb20iLCJhdWQiOiI1ODcwMTgyMDc1ODAtbzRyMWlxNm5qODBkNXRjZzdzcjk0dDBpM25hc3U3djcuYXBwcy5nb29nbGV1c2VyY29udGVudC5jb20iLCJzdWIiOiIxMDcwMDI5NDYyNzA0MjQ1ODkzMDUiLCJlbWFpbCI6InB1cnVqaXQuYmFuc2FsOUBnbWFpbC5jb20iLCJlbWFpbF92ZXJpZmllZCI6dHJ1ZSwiaXNzIjoiaHR0cHM6Ly9hY2NvdW50cy5nb29nbGUuY29tIiwiaWF0IjoxNTAyNzA2NzYwLCJleHAiOjE1MDI3MTAzNjAsIm5hbWUiOiJQdXJ1aml0IEJhbnNhbCIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vLVpHSENtTnowWDU0L0FBQUFBQUFBQUFJL0FBQUFBQUFBQUFBL0FNcDVWVW9BdXpjS2tuaXNGVFVZSTEzLU5UWEJrdmljakEvczk2LWMvcGhvdG8uanBnIiwiZ2l2ZW5fbmFtZSI6IlB1cnVqaXQiLCJmYW1pbHlfbmFtZSI6IkJhbnNhbCIsImxvY2FsZSI6ImVuIn0.Iyba4Ol-0pkmzaE90NIFCGP0BZKdlqcl-ZrMnB3C0WQQuisWbHEgR3sw6vmbHJgkc0uRWT9sLgzblhk7NeKc53UgXlhFAHO55udGHwRBuS7tw9MW5r1zL0knrXDPwUOXdWzIzBvAveKuCm7onsRzjo0mtxsuxJrWz5tUu4wcM14qupvy6cex29ex8TVXg7bGJVKQBUiV-eXs2i0LiLYwxkCzrYTUqhjt9XwdfTa5gh0swQJc9ZFzuVuG8KMtQPIA6XMDK8JRsF65CUA_pBD3dNrtzwncmiI5FSQeCvpCdqtmrnbZj2aAHq7lIkV6CPvq-IJmI3ft6ObAUQGyEp3nBg';
// var client = new auth.OAuth2(CLIENT_ID, '', '');
// client.verifyIdToken(
//     token,
//     CLIENT_ID,
//     function(e, login) {
//         console.log(e);
//         console.log(JSON.stringify(login));
//
//        var  payload = login.getPayload();
//         var userid = payload['sub'];
//         console.log(JSON.stringify(payload, undefined, 2))
//
//
//     });

//
// var user1=new User(
//             { name:payload.name,
//                 email:payload.email,
//                 googleId:payload.sub,
//                 picture:payload.picture
//             }
//         );
//
//         user1.save(function(user,err){
//             if(err){return err;}
//             else {
//                 console.log(user);
//                 return user;}
//
//         });
var userId = mongoose.Types.ObjectId();
var blogId = mongoose.Types.ObjectId();


var user1=new User({
    _id:userId,
    name:'Nikhil',
    blogId:blogId
});
var blog1=new Blog({
    _id:blogId,
    blog:'this is a test blog',
    userId:userId
});

user1.save(
    (err,user)=>{
        if(err){
    return err;
        }
    else
        {return user;
        }
    });

blog1.save(
    (err,blog)=>{
    if(err){
        return err;
    }
    else
        {return blog;}
    }
        );














module.exports = app;
