const express = require('express');
const app = express();
app.use( express.urlencoded({extended:true}) );
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
const {TaskRouter} = require( './server/routes/taskRouter.js' );


app.use(express.static(__dirname + "/static"));
// app.set('views', __dirname + '/views');
// app.set('view engine', 'ejs');


require( './server/config/database.js' );

app.use('/',TaskRouter);





app.listen(8080, function (){//este es el cierre

	console.log("the user server is running in port 8080");
});
