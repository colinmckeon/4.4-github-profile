// console.log("Hello World!");
//
// alert('hey colin');


var $ = require('jquery');
var _ = require('underscore');
var Handlebars = require('handlebars');


var githubtoken = require('./gitapikey.js');

if(githubtoken !== undefined){
  $.ajaxSetup({
    headers: {
      'Authorization': 'token ' + githubtoken.token
    }
  })
}

$.ajax('https://api.github.com/users/colinmckeon').then(displayGit);


function displayGit(data){
  console.log(data);

  var source = $('#sideTemplate').html();
  console.log(source);
}








//   var planets = data.results;
//   var $planetContainer = $('#planet-list');
//
//   var source = $('#plaent-template').html();
//   var template = Handlebars.compile(source);
//
//   _.each(planets, function(planet){
//     $planetContainer.append(template(planet));
//   });
//
