//dependencies for each module used
var express = require('express');
var http = require('http');
var path = require('path');
var handlebars = require('express-handlebars');
var bodyParser = require('body-parser');
var session = require('express-session');
var dotenv = require('dotenv');
var pg = require('pg');
var app = express();
var gmap=require('googlemaps');

//client id and client secret here, taken from .env (which you need to create)
dotenv.load();

//connect to database
var conString = process.env.DATABASE_CONNECTION_URL;

//Configures the Template engine
app.engine('html', handlebars({ defaultLayout: 'layout', extname: '.html' }));
app.set("view engine", "html");
app.set('views', __dirname + '/views');
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(session({ secret: 'keyboard cat',
                  saveUninitialized: true,
                  resave: true}));

//set environment ports and start application
app.set('port', process.env.PORT || 3000);

//routes
app.get('/', function(req, res){
  // res.render('index');
  res.render('maptimesandiego');
});

app.get('/testmap', function(req, res){
  res.render('map');
});

app.get('/testBubble', function(req, res){
    res.render('testBubble');
});

var publicConfig = {
    key: 'AIzaSyB1O7kYkkWMOTnwCot5uYBtPBPy9-OpHTs',
    stagger_time:       1000, // for elevationPath
    encode_polylines:   false,
    secure:             true, // use https
    proxy:              '' // optional, set a proxy for HTTP requests
};
var gmAPI = new gmap(publicConfig);

app.get('/delphidata', function (req, res) {
  // TODO
  // Connect to the DELPHI Database and return the proper information
  // that will be displayed on the D3 visualization
  // Table: Smoking Prevalance in Adults
  // Task: In the year 2003, retrieve the total number of respondents
  // for each gender. 
  // Display that data using D3 with gender on the x-axis and 
  // total respondents on the y-axis. 
  // return { delphidata: "No data present." }
  var pgp = require("pg-promise")(/*options*/);
  var db = pgp("postgres://cogs121_16_user:Delph!4COGS121@delphidata.ucsd.edu/delphibetadb");
  var sqlStr='SELECT hhsa_san_diego_demographics_county_popul_by_age_2012_norm."Area", hhsa_san_diego_demographics_county_popul_by_age_2012_norm."Age", hhsa_san_diego_demographics_county_popul_by_age_2012_norm."Population" FROM cogs121_16_raw.hhsa_san_diego_demographics_county_popul_by_age_2012_norm WHERE hhsa_san_diego_demographics_county_popul_by_age_2012_norm."Age" = \'15-24\' OR hhsa_san_diego_demographics_county_popul_by_age_2012_norm."Age" = \'25-44\';';
  var sqlStr2='SELECT ' +
      'sandag_foodbeverage_business_prj."CITY",' +
      'sandag_foodbeverage_business_prj."STRTYP",' +
      'sandag_foodbeverage_business_prj."STRNAM",' +
      'sandag_foodbeverage_business_prj."BUSTYPE"' +
      ' FROM ' +
      'cogs121_16_raw.sandag_foodbeverage_business_prj' +
      ' WHERE ' +
      'sandag_foodbeverage_business_prj."BUSTYPE" = \'BAR\'';

  db.any(sqlStr, [true]).then(data => {
    //console.log("DATA:", data);
  }).catch(error => {
    //console.log("ERROR:", error);
  });
    db.any(sqlStr2, [true]).then(data => {
        //console.log("DATA:", data);
        var i=0;
        var streetArray=[];
        while (i<data.length){
            if(data[i].CITY&&data[i].STRTYP&&data[i].STRNAM){
                var str= data[i].STRNAM+' '+data[i].STRTYP+', '+data[i].CITY;
                streetArray.push(str);
            }
            i++;
        }
        //var xmlhttp = new XMLHttpRequest();
        //console.log(streetArray);
        i=0;
        var coorArray=[];

        while (i<1) {
            gmAPI.geocode({"address": streetArray[i]}, function (err, result) {
                console.log(result);
                console.log(streetArray[i]);
                console.log(result.results[0].geometry.location);
                if (err) {throw err} else {
                    //console.log(result);
                    var latlng = {'lat': result.results[0].geometry.location.lat, 'lng': result.results[0].geometry.location.lng};
                    coorArray.push(latlng);
                }
            });
            i++;
        }
        //console.log(coorArray);

}).catch(error => {
        //console.log("ERROR:", error);
});

});

  http.createServer(app).listen(app.get('port'), function() {
      console.log('Express server listening on port ' + app.get('port'));
});
