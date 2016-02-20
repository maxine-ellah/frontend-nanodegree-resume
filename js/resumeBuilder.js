  var name = "Maxine Ellah";
  var formattedName = HTMLheaderName.replace("%data%", name);
  var role = "Web Developer";
  var formattedRole = HTMLheaderRole.replace("%data%", role);
  $("#header").prepend(formattedName);
  $("#header").append(formattedRole);

var work = {
  "jobs": [
  {
    "employer":"IHC",
    "title": "Volunteer",
    "dates": "September 2015-present",
    "location": "Wellington",
    "description":"I am occasionally a buddy for some cool people at ACTIVE."
  },
  {
   "employer":"Sudanese Australian Integration Program",
    "title": "Volunteer",
    "dates": "March 2015-August 2015",
    "location": "Melbourne",
    "description":"I helped newly arrived East African refugees with english language skills."
  },
  {
    "employer":"Wellington City Council",
    "title": "Administrator",
    "dates": "September 2013-June 2014",
    "location": "Wellington",
    "description":"I worked in the Parks and Recreation department assisting various teams with administrative tasks."
  }
  ]
};

function displayWork() {
for (job in work.jobs) {
  $("#workExperience").append(HTMLworkStart);

  var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
  var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
  
  var formattedEmployerTitle = formattedEmployer + formattedTitle;

  $(".work-entry:last").append(formattedEmployerTitle);

  var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
  $(".work-entry:last").append(formattedDates);
  var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
  $(".work-entry:last").append(formattedLocation);
  var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
  $(".work-entry:last").append(formattedDescription);
}
}

displayWork();


function inName(name) {
  name = name.trim().split(" ");
  console.log(name);
  name[1] = name[1].toUpperCase();
  name[0] = name[0].slice(0,1).toUpperCase() +
  name[0].slice(1).toLowerCase();

  return name[0] +" "+name[1];
}

$("#main").append(internationalizeButton);

//google map
$("#mapDiv").append(googleMap);

var projects = {
  "projects": [
  {
    "title":"Javascript Racer Game",
    "dates":"February 2016",
    "description":"I built a racer game using Javascript.",
    "images":"images/sushivtaco.png"
  },
  {
    "title":"Project 2",
    "dates":"February 2016",
    "description":"Getting through udacity tutorial",
    "images":""
  }
  ]
}

projects.display = function() {

  for (project in projects.projects) {
    $("#projects").append(HTMLprojectStart);

  var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
  $(".project-entry:last").append(formattedTitle);

  var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
  $(".project-entry:last").append(formattedDates);

  var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
  $(".project-entry:last").append(formattedDescription);

  if (projects.projects[project].images.length > 0) {
    for (image in projects.projects[project].images) {
      var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[project].images[image]);
    $(".project-entry:last").append(formattedImage);
    }
  }
}
}

projects.display();

var bio = {
  "name": "Maxine Ellah",
  "role": "Web Developer",
  "contact": [{
    "email": "maxine.ellah@gmail.com",
    "github": "maxine-ellah",
    "location": "Wellington"
  }],
  "skills": ["cooking", "languages",
   "graphic design", "being nice to people"],
  "picture": "images/maxine.jpg",
  "welcomeMessage": "Hi! Welcome to my resume."
}

var education = {
  "schools": [
  {
    "name": "WelTec",
    "city": "Wellington",
    "degree": "BA Creative Tech"
  },
  {
    "name": "Te Wananga O Raukawa",
    "city": "Otaki",
    "degree": "Certificate in Te Reo Maori"
    }
  ],
  "onlineCourses":[
  {
  "title": "Javascript Basics",
  "school": "Udacity",
  "dates": "2016",
  "url": "https://www.udacity.com/course/viewer#!/c-ud804"
  },
  {
  "title": "Intro to HTML and CSS",
  "school": "Udacity",
  "dates": "2016",
  "url": "https://www.udacity.com/course/viewer#!/c-ud304"
  }
  ]
}


if (bio.skills.length > 0) {

  $("#header").append(HTMLskillsStart);

  var formattedSkills = HTMLskills.replace("%data%", bio.skills[0]);
  $("#skills").append(formattedSkills);
  formattedSkills = HTMLskills.replace("%data%", bio.skills[1]);
  $("#skills").append(formattedSkills);
  formattedSkills = HTMLskills.replace("%data%", bio.skills[2]);
  $("#skills").append(formattedSkills);
  formattedSkills = HTMLskills.replace("%data%", bio.skills[3]);
  $("#skills").append(formattedSkills);
}

if (bio.contact.length > 0) {

$("#main").append(HTMLcontactGeneric);

  var formattedContact = HTMLemail.replace("%data%", "maxine.ellah@gmail.com");
  $("#topContacts").append(formattedContact);
  formattedContact = HTMLgithub.replace("%data%", "maxine-ellah");
  $("#topContacts").append(formattedContact);
  formattedContact = HTMLlocation.replace("%data%", "Wellington");
  $("#topContacts").append(formattedContact);
}

if (bio.contact.length > 0) {

$("#footerContacts").append(HTMLcontactGeneric);

  var formattedContact = HTMLemail.replace("%data%", "maxine.ellah@gmail.com");
  $("#lets-connect").append(formattedContact);
  formattedContact = HTMLgithub.replace("%data%", "maxine-ellah");
  $("#lets-connect").append(formattedContact);
  formattedContact = HTMLlocation.replace("%data%", "Wellington");
  $("#lets-connect").append(formattedContact);
}



/*var name = "Maxine Ellah";
var formattedName = HTMLheaderName.replace("%data%", name);
var role = "Web Developer";
var formattedRole = HTMLheaderRole.replace("%data%", role);
$("#header").prepend(formattedName);
$("#header").prepend(formattedRole);

$("#main").prepend(bio.name);
$("#main").prepend(bio.role);
$("#main").prepend(bio.contactinfo);
$("#main").prepend(bio.skills);
$("#main").prepend(bio.picture);
$("#main").prepend(bio.welcome);


$('#main').append(work["position"]);
$('#main').append(education.name);


/*
This is empty on purpose! Your code to build the resume will go here.
 */
 /*$("#main").append(["Maxine Ellah"]);
 var awesomeThoughts = "I am Maxine and I am AWESOME";
 console.log(awesomeThoughts);

 var funThoughts = awesomeThoughts.replace(["AWESOME"], ["FUN"]);

 $("#main").append(funThoughts)

var education = {
  "schools": [{
    "name": "hampstead",
    "city": "London",
    "graduation": 2008
  }],
  "online courses": [{
    "languages": "tereo",
    "tech": "devacademy"
  }]
}

var Name = "Maxine Ellah";
var Role = "Web Developer";

 var formattedName = HTMLheaderName.replace(["%data%"], [Name]);
 var formattedRole = HTMLheaderRole.replace(["%data%"], [Role]);


$("#header").prepend(formattedName) 
$("#header").append(formattedRole)

var  myArray = ["maxine", "Ellah", "ndidi", "ogaluzo"];
console.log(myArray.length);

var skills = ["cooking", "languages", "graphic design", "being nice to people"];*/
