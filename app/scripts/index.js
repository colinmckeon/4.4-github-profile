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


//
//SIDE PANEL AJAX CALL

$.ajax('https://api.github.com/users/colinmckeon').then(displayGit);


function displayGit(data){
  console.log(data);

  var source = $('#sideTemplate').html();
  var template = Handlebars.compile(source);

  var templateHtml = $(template(data));

  var $sidebar = $('#sidebar');

  $sidebar.append(templateHtml);
}


//
//REPOS AJAX CALL

$.ajax('https://api.github.com/users/colinmckeon/repos').then(displayRepos)

function displayRepos(data){
  console.log(data);

  var source = $('#reposTemplate').html();
  var template = Handlebars.compile(source);

  var $repos = $('#repos');

  data.forEach(function(repo){
    var templateHtml = $(template(repo));
    $repos.append(templateHtml)
  });
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
