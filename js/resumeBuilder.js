// SECTIONS IN ORDER: BIO, EDUCATION, WORK, PROJECTS

// BIO SECTION

var bio = {
	"name": "Mollie Marie Pettit",
	"role": "Data Scientist / Data Visualizer",
	"contacts": {
		"mobile": "1-415-203-5858",
		"email": "mollie.pettit@alumni.stanford.edu",
		"github": "molliemarie",
		"twitter": "@MollzMP",
		"location": "Chicago, IL"
	},
	"WelcomeMessage": "Blah blah blah. The reasons why I'm FANCY!",
	"skills": ["Buzz", "Words", "HERE"],
	"biopic": "images/me.jpg",
	"places_lived" : ["Minneapolis, MN", "Aberdeen, SD, USA", "Cherokee, IA", "Bradenton, FL"],
	// "skillsChart": "images/skillsChart.png"
};

bio.display = function(){

	var formattedName = HTMLheaderName.replace("%data%", bio.name);
	var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
	$("#header").prepend(formattedRole);
	$("#header").prepend(formattedName);

	var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
	$("#topContacts").append(formattedMobile)

	var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
	$("#topContacts").append(formattedEmail)

	var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
	$("#topContacts").append(formattedGithub)

	var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
	$("#topContacts").append(formattedLocation)	

	var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
	$("#topContacts").append(formattedTwitter)	

	var formattedPicture = HTMLbioPic.replace("%data%", bio.biopic);
	$("#header").append(formattedPicture);

	var formattedMessage = HTMLWelcomeMsg.replace("%data%", bio.WelcomeMessage);
	$("#header").append(formattedMessage);

	// Shortened Skills section!! Made it more efficient. YAY!
	if(bio.skills.length > 0) {
		$("#header").append(HTMLskillsStart);
	}
	for (i in bio.skills){
		if(bio.skills.length > i) {
			var formattedSkill = HTMLskills.replace("%data%", 
				bio.skills[i]);
			$("#skills").append(formattedSkill);
		}
	}
	// var formattedSkillsChart = HTMLskillsChart.replace("%data%", bio.skillsChart);
	// $("#skillz").append(formattedSkillsChart);
}
bio.display();

// EDUCATION SECTION

var education = {
	"schools": [
		{
			"school": "Stanford University",
			"location": "Stanford, CA",
			"degree": "MS (honors)",
			"dates": "2010-2013",
			"major": ["Geology"], 
			"url": "http://www.stanford.edu/"
		},
		{
			"school": "West Virginia University",
			"location": "Morgantown, WV",
			"degree": "BS (honors)",
			"dates": "2004-2009",
			"major": ["Mathematics & Geology"],
			"url": "http://www.wvu.edu/"
		}
	],
	"onlineCourses": [
		{
			"title":"Javascript Basics",
			"school":"Udacity",
			"dates": 2015,
			"url": "https://www.udacity.com/course/ud804"
		},
		{
			"title": "Intro to HTML and CSS",
			"school": "Udacity",
			"dates": 2015,
			"url": "https://www.udacity.com/course/ud304"

		},
		{
			"title": "How to Use Git and GitHub",
			"school": "Udacity",
			"dates": 2015,
			"url": "https://www.udacity.com/course/ud775"
		}
	]
}

education.display = function() {
	for (schoolInfo in education.schools) {
		$("#education").append(HTMLschoolStart);

		var formattedSchool = HTMLschoolName.replace("%data%", education.schools[schoolInfo].school);
		var formattedDegree = HTMLschoolDegree.replace("%data%", education.schools[schoolInfo].degree);
		var formattedSchoolInformation = formattedSchool + formattedDegree;
		$(".education-entry:last").append(formattedSchoolInformation);

		var formattedSchoolDates = HTMLschoolDates.replace("%data%", education.schools[schoolInfo].dates);
		$(".education-entry:last").append(formattedSchoolDates);

		var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", education.schools[schoolInfo].location);
		$(".education-entry:last").append(formattedSchoolLocation);

		var formattedMajor = HTMLschoolMajor.replace("%data%", education.schools[schoolInfo].major);
		$(".education-entry:last").append(formattedMajor);
	}
	$("#education").append(HTMLonlineClasses);
	for (onlineCourse in education.onlineCourses) {
		$("#education").append(HTMLschoolStart);

		var formattedOnlineTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[onlineCourse].title);
		var formattedOnlineSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[onlineCourse].school);
		var formattedOnlineSchoolInfo = formattedOnlineTitle + formattedOnlineSchool;
		$(".education-entry:last").append(formattedOnlineSchoolInfo);

		var formattedOnlineDates = HTMLonlineDates.replace("%data%", education.onlineCourses[onlineCourse].dates);
		$(".education-entry:last").append(formattedOnlineDates);	

		var formattedOnlineURL = HTMLonlineURL.replace("%data%", education.onlineCourses[onlineCourse].url);
		$(".education-entry:last").append(formattedOnlineURL);	
	}
}
education.display();

// WORK SECTION

var work = {
    "jobs": [
	    {
            "employer": "Metis",
            "location": "Chicago, IL",
            "title": "Instructor of Data Visualization with D3.js course",
            "years": "2017 - Present",
            "description": [
            	"stuff", 
            	"stuff", 
            	"more stuff"
            ]
        },
        {
            "employer": "Datascope Analytics",
            "location": "Chicago, IL",
            "title": "Data Scientist",
            "years": "2016 - Present",
            "description": [
            	"stuff", 
            	"stuff", 
            	"more stuff"
            ]
        },
        {
        	"employer": "self",
        	"location": "Abu Dhabi, UAE",
        	"title": "tutor",
        	"years": "2015",
        	"description:": [
        		"stuff",
        		"stuff",
        		"more stuff"
        	]
        },
        {
            "employer": "Baker Hughes",
            "location": "Abu Dhabi, UAE",
            "title": "Geoscientist",
            "years": "2014 - 2015",
            "description": [
	            "Meticulously recorded & analyzed detailed oil & gas data",
	            "Delivered final product presentations, quality & data reports for various stakeholder & client geoscience projects",
	            "Integrated customers requirements to deliver timely, commercially important analysis to customers",
	            "Proud recipient of team player award"
          	]
        },
        {
            "employer": "Stanford University",
            "location": "Stanford, CA, USA",
            "title": "Researcher",
            "years": "2010-2013",
            "description": [
	            "Combined data from multiple databases into a geographic information system for analysis and interpretation",
	            "Collated & analyzed geological/environmental data; utilising ArcGIS & MATLAB; ensuring accuracy and continuity",
	            "Assessed and developed spatial statistics & analysis for simulation & modeling of environmental data using Python",
	            "Coordinated with counterparts in government bodies & societies to enable research and project data collection",
	            "Created visual presentations using Illustrator, Photoshop, & PowerPoint; utilized in articles & oral presentations",
	            "Published article in May 2014 issue of Environmental and Engineering Geoscience Journal; featured on cover",
	            "Presented results in Master’s thesis in March 2013, as well as in various presentations"
            ]
        },
        {
            "employer": "Stanford University",
            "location": "Stanford, CA, USA",
            "title": "Teaching Assistant",
            "years": "2010-2013",
            "description": [
	            "Won a reputation as a dynamic teaching assistant for guiding, mentoring, & appraising Stanford undergraduates",
	            "Successfully taught a lab section for GES1 (Introductory Geology and Environmental Sciences)",
	            "Instructed college students on the best way to solve complicated soil physics and hydrogeology problems",
	            "Represented students as a key member of the School of Earth Science Graduate Student Advisory Committee",
	            "Achieved excellent student reviews, high evaluation scores and positive feedback on all classes taught"
            ]
        }
    ]
};

work.display = function(){
	for (var job in work.jobs) {

	    $("#workExperience").append(HTMLworkStart);

	    var formattedEmployer= HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
	    var formattedTitle = HTMLworkTitle.replace("%data%",work.jobs[job].title);
	    var formattedEmployerTitle = formattedEmployer + formattedTitle;
	    $(".work-entry:last").append(formattedEmployerTitle);

	    var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].years);
	    $(".work-entry:last").append(formattedDates);

	    var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
	    $(".work-entry:last").append(formattedLocation);


	    // add the descriptions in bulleted form
		for (i in work.jobs[job].description) {
			if (work.jobs[job].description.length>i) {
				$("#workExperience").append(HTMLworkDescriptionStart);
				var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description[i]);
				$(".descript:last").append(formattedDescription);
			}			
		}
	}
}
work.display();

// RETURNS PLACE OF WORK INTO CONSOLE

// function locationizer(work_obj) {
// 	var locationArray = [];
// 	for (job in work_obj.jobs) {
// 		var newLocation = work_obj.jobs[job].location;
// 		locationArray.push(newLocation);
// 	}
// 	return locationArray;
// }
// console.log(locationizer(work));

// PROJECTS SECTION

var projects = {
    "projects": [{
    	"title": "Workshop Jetpack",
    	"description": "tktk",
    	"dates": 2017,
    	"images": []
    },
    {
    	"title": "Student Survey Response Data Viz",
    	"description": "tktk",
    	"dates": 2016,
    	"images": []

    }, 
    {
    	"title": "Interactive Star Trek Network Data Viz",
    	"description": "tktk",
    	"dates": 2016,
    	"images": {}

    },
    {
        "title": "Interactive Resume",
        "description": "tktk: description",
    	"dates":"2015-Present",
    	"images": []
    }]
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

		if (projects.projects[project].images.length>0) {
			for (image in projects.projects[project].images) {
				var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[project].images[image]);
				$(".project-entry:last").append(formattedImage);
			}
		}
	}
}
projects.display();

// INTERNATIONALIZER FUNCTION

// function inName(name) {
// 	name = name.trim().split(" ");
// 	console.log(name);
// 	name[1] = name[1].toUpperCase();
// 	name[0] = name[0].slice(0,1).toUpperCase() + name[0].slice(1).toLowerCase();
// 	return name[0] + " " + name[1];
// }

// $('#main').append(internationalizeButton);

// APPENDS MAP TO RESUME

$("#mapDiv").append(googleMap);


