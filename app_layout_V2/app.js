// Defines module for app. If there are dependencies, insert into array
var app = angular.module("booted", [])
    //sets up controller for list of bootcamps
    
    .controller('bootListController', function($scope, $http){
<<<<<<< HEAD
    
    //Hardcoded dB Backup Bootcamp List Below - Use if Necessary For Demo.
	$scope.bootcampList = [
        {
			url: './schools/hackreactor.html',
			title: 'Hack Reactor',
            image_small: './images/bootcamp_images/hackreactor_small.png',
			image: './images/bootcamp_images/hackreactor.png',
            bio: 'Join the programming elite and learn all the cutting edge trends',
            votes: ''
		},
		{
			url: './schools/hackreactor.html',
			title: 'Telegraph Academy',
            image_small: './images/bootcamp_images/tga_small.png',
			image: './images/bootcamp_images/tga.png',
            bio: 'An extension of the Hack Reactor program with a unique approach looking to diversify the industry and expand opportunity',
            votes: ''
		},
        {
			url: './schools/devbootcamp.html',
			title: 'Dev Bootcamp',
			image: './images/bootcamp_images/devboot_small.png',
            bio: '19-week immersive course focusing on multiple languages to give you a competitive edge on the job search',
            votes: ''
		},
        {
			url: './schools/makersquare.html',
			title: 'Maker Square',
			image: './images/bootcamp_images/makersquare_small.png',
            bio: 'A program designed to teach you CS fundamentals and software engineering',
            votes: ''
		},
        {
			url: './schools/hackbright.html',
			title: 'Hackbright Academy',
			image: './images/bootcamp_images/hackbright_small.jpg',
            bio: 'A program focused on giving women a leg up in tech',
            votes: ''
		},
	];

        var list = [];
        
        angular.forEach($scope.bootcampList, function(prop, val){
            this.push(prop + ': ' + val)
        }, list);
    });

=======
    $scope.bootcampList = [
        {
            url: 'http://telegraphacademy.com',
            title: 'Telegraph Academy',
            image: './images/bootcamp_images/tga.png',
            bio: 'An extension of the Hack Reactor program with a unique approach looking to diversify the industry and expand opportunity'
        },
        {
            url: 'http://hackreactor.com',
            title: 'Hack Reactor',
            image: './images/bootcamp_images/hackreactor.png',
            bio: ''
        }
    ];

        //Bootcamp List below. Hardcoded Test Example included. 

        angular.forEach(bootcampList, function(bootcamp){
            bootcamp.title = title;
            bootcamp.url = url;
            bootcamp.image = image;
            bootcamp.bio = bio;
        });
    });
>>>>>>> c90946cd8cf1d95bb7b4d2c19e5831e84bc578c3
