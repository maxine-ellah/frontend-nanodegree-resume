  //page titles
  //var name = "Maxine Ellah";
  //var formattedName = HTMLheaderName.replace("%data%", name);
  //var role = "Web Developer";
  //var formattedRole = HTMLheaderRole.replace("%data%", role);
  //$("#header").append(formattedName);
  //$("#header").append(formattedRole);

//work object
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

//work function to display work experience
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

//call function
displayWork();

//internationalise name function
function inName(name) {
  name = name.trim().split(" ");
  console.log(name);
  name[1] = name[1].toUpperCase();
  name[0] = name[0].slice(0,1).toUpperCase() +
  name[0].slice(1).toLowerCase();

  return name[0] +" "+name[1];
}
//internationalise button
//$("#main").append(internationalizeButton);

//google map
$("#mapDiv").append(googleMap);

//education object
var education = {
  "schools": [
  {
    "name": "WelTec",
    "location": "Wellington",
    "degree": "BA",
    "subject": "Creative Technologies",
    "dates": "2008-2011"
  },
  {
    "name": "Te Wānanga o Raukawa",
    "location": "Otaki",
    "degree": "Certificate",
    "subject": "Te Reo Māori",
    "dates": 2015
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

//display education function to show  education
function displayEducation() {
for (school in education.schools) {
  $("#education").append(HTMLschoolStart);

  var formattedschoolName = HTMLschoolName.replace("%data%", education.schools[school].name);
  $(".education-entry:first").append(formattedschoolName);

  var formattedDegree = HTMLschoolDegree.replace("-- %data%", education.schools[school].degree);
  $(".education-entry:first").append(formattedDegree);

  var formattedDates = HTMLschoolDates.replace("%data%", education.schools[school].dates);
  $(".education-entry:first").append(formattedDates);

  var formattedschoolLocation = HTMLschoolLocation.replace("%data%", education.schools[school].location);
  $(".education-entry:first").append(formattedschoolLocation);
  
  var formattedSubject = HTMLschoolMajor.replace("Major: %data%", education.schools[school].subject);
  $(".education-entry:first").append(formattedSubject);

} //online courses section
for (onlineCourse in education.onlineCourses) {
$(".education-entry:last").append(HTMLonlineClasses);

var formattedonlineTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[onlineCourse].title);
$(".education-entry:last").append(formattedonlineTitle);

var formattedonlineSchool = HTMLonlineSchool.replace("- %data%", education.onlineCourses[onlineCourse].school);
$(".education-entry:last").append(formattedonlineSchool);

var formattedonlineDates = HTMLonlineDates.replace("%data%", education.onlineCourses[onlineCourse].dates);
$(".education-entry:last").append(formattedonlineDates);

var formattedonlineURL = HTMLonlineURL.replace("#",education.onlineCourses[onlineCourse].url).replace("%data%","link");
$(".education-entry:last").append(formattedonlineURL);

   
}
}
// calling education function
 displayEducation();


//projects object
var projects = {

  "projects": [
  {
    "title":"Javascript Racer Game",
    "dates":"February 2016",
    "description":"I built a racer game using Javascript.",
    "images": ["sushivtaco.png"]
  },
  {
    "title":"Project 2",
    "dates":"February 2016",
    "description":"Getting through udacity tutorial",
    "images":""
  }
  ]
}
//display projects function
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
//calling projects function
projects.display();

//bio object
var bio = {
  "name": "Maxine Ellah",
  "role": "Web Developer",
  "contacts": {
    "email": "maxine.ellah@gmail.com",
    "github": "maxine-ellah",
    "location": "Wellington",
    "blog": "http://maxine-ellah.github.io/"
  },
  "skills": ["cooking", "languages",
   "graphic design", "being nice to people"],
  "picture": ["images/maxine.jpg"],
  "welcomeMessage": "Hi! Welcome to my resume."
};

//bio display function declaration
bio.display = function() {

  

  var formattedWelcome = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
  $("#header").prepend(formattedWelcome);
  var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
  $("#header").prepend(formattedRole);
  var formattedName = HTMLheaderName.replace("%data%", bio.name);
  $("#header").prepend(formattedName);
  var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
  $("#topContacts, #footerContacts").append(formattedEmail);
  var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
  $("#topContacts, #footerContacts").append(formattedGithub);
  var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
  $("#topContacts, #footerContacts").append(formattedLocation);
  var formattedBlog = HTMLblog.replace("%data%", bio.contacts.blog);
  $("#topContacts, #footerContacts").append(formattedBlog);
  var formattedBiopic = HTMLbioPic.replace("%data%", bio.picture);
  $("#header").append(formattedBiopic);
  
  //if statement to display  skills array in bio object
  if (bio.skills.length > 0) {
  
    $("#header").append(HTMLskillsStart);

    for (var skill in bio.skills) {
      var formattedSkills = HTMLskills.replace("%data%", bio.skills[skill]);
      $("#skills").append(formattedSkills);

    }
  }
}
// invocation of bio display function
bio.display();



//if statement to display contact array in bio object
if (bio.contacts.length > 0) {

$("#main").append(HTMLcontactGeneric);

  
  var formattedContact = HTMLemail.replace("%data%", bio.contacts.email);
  $("#topContacts").append(formattedContact);
  var formattedContact = HTMLgithub.replace("%data%", "maxine-ellah");
  $("#topContacts").append(formattedContact);
  var formattedContact = HTMLlocation.replace("%data%", "Wellington");
  $("#topContacts").append(formattedContact);
  var formattedContact = HTMLblog.replace("%data%", result);
  $("#topContacts").append(formattedContact);
}
//ifstatement to display same contact info array, but in the footer of







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
