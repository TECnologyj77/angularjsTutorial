var myApp = angular
                .module("myModule", [])
                .filter("gender", function() {
            return function(gender){
                switch(gender){
                    case 1:
                    return "Male";
                    case 2:
                    return "Female";
                    case 3: "Not Disclosed";
                }
            }
        })
                .controller("myController", function($scope){
                    var employee = {
                        firstName: 'David',
                        LastName: 'Hole',
                        gender: 'Male'
                    };

    $scope.message = "AngularJS Tutorial";
    $scope.employee = employee;

})

            .controller("imgController", function($scope){
                var alien = {
                     name: "Gasorazorp",
                     lname: "Dorgle",
                     race: "Blargle",
                     image: "Images/alien.jpg"
                };

                 $scope.alien = alien;
                 $scope.message = "Hello AngularJS!"
            })

            .controller("ngrepController", function($scope){

            var emps =[
            {firstName:"Ben", lastName: "Hastings", gender: "Male", salary: 55000},
            {firstName:"Jen", lastName: "Hast", gender: "Female", salary: 55200},
            {firstName:"George", lastName: "Jungle", gender: "Male", salary: 55400},
            {firstName:"Alex", lastName: "Cringle", gender: "Female", salary: 55050},
            {firstName:"Flip", lastName: "Flop", gender: "Unknown", salary: 55060},
            {firstName:"Bucky", lastName: "Robertss", gender: "Male", salary: 55830}
              
            ];

            $scope.emps = emps;

         })


         .controller("countryController", function($scope){
           
           var countries= [
              {
               name: "UK", cities: [{name: "London"},{name: "Manchester"},{name: "Birmingham"}]
              },
              {
               name: "USA", cities: [{name: "Pittsburgh"},{name: "Los Angeles"},{name: "Houstan"}]
              },
              {
               name: "India", cities: [{name: "Hyderabad"},{name: "Chennai"},{name: "Mumbai"}]
              }];

              $scope.countries= countries;
         })

         .controller("eventController", function($scope)
         {
              var techs = [  {name : "C#", likes: 0, dislikes: 0},
                             {name : "ASP.NET", likes: 0, dislikes: 0},
                             {name : "SQL Server", likes: 0, dislikes: 0},
                             {name : "AngularJS", likes: 0, dislikes: 0}
                         ];
              $scope.techs = techs;
              $scope.incrementLikes = function(tech){
                     tech.likes++;
              }
               $scope.incrementDislikes = function(tech){
                     tech.dislikes++;
              }

         })

         .controller("Controller8", function($scope)
         {

                 var empos =[
            {name:"Ben", dateOfBirth: new Date("November 23, 1980"), gender: "Male", salary: 55000},
            {name:"Jen", dateOfBirth: new Date("December 24, 1680"), gender: "Female", salary: 55200},
            {name:"George", dateOfBirth: new Date("January 12, 1983"), gender: "Male", salary: 55400},
            {name:"Alex", dateOfBirth: new Date("April 27, 1990"), gender: "Female", salary: 55050},
            {name:"Flip", dateOfBirth: new Date("June 09, 1980"), gender: "Unknown", salary: 55060},
            {name:"Bucky", dateOfBirth: new Date("March 13, 1930"), gender: "Male", salary: 55830}
              
            ];
            $scope.empos = empos;
            $scope.rowLimit = 3;

         })
         .controller("Controller9", function($scope)
         {
                 var empos =[
            {name:"Ben", dateOfBirth: new Date("November 23, 1980"), gender: "Male", salary: 55000},
            {name:"Jen", dateOfBirth: new Date("December 24, 1680"), gender: "Female", salary: 55200},
            {name:"George", dateOfBirth: new Date("January 12, 1983"), gender: "Male", salary: 55400},
            {name:"Alex", dateOfBirth: new Date("April 27, 1990"), gender: "Female", salary: 55050},
            {name:"Flip", dateOfBirth: new Date("June 09, 1980"), gender: "Unknown", salary: 55060},
            {name:"Bucky", dateOfBirth: new Date("March 13, 1930"), gender: "Male", salary: 55830}
                 ];
                 $scope.empos = empos;
                 $scope.sortColumn = "name";
         })

        .controller("Controller10", function($scope)
         {
                 var empos =[
            {name:"Ben", dateOfBirth: new Date("November 23, 1980"), gender: "Male", salary: 55000},
            {name:"Jen", dateOfBirth: new Date("December 24, 1680"), gender: "Female", salary: 55200},
            {name:"George", dateOfBirth: new Date("January 12, 1983"), gender: "Male", salary: 55400},
            {name:"Alex", dateOfBirth: new Date("April 27, 1990"), gender: "Female", salary: 55050},
            {name:"Flip", dateOfBirth: new Date("April 09, 1980"), gender: "Unknown", salary: 55060},
            {name:"Bucky", dateOfBirth: new Date("March 13, 1930"), gender: "Male", salary: 55830}
                 ];
                 $scope.empos = empos;
                 $scope.sortColumn = "name";
                 $scope.reverseSort = "false"

                 $scope.sortData = function(column){
                     $scope.reverseSort = ($scope.sortColumn == column) ? !$scope.reverseSort : false;
                     $scope.sortColumn = column;
                 }
                 $scope.getSortClass = function (column){
                     if($scope.sortColumn == column){
                         return $scope.reverseSort ? 'arrow-down' : 'arrow-up'
                     }

                     return '';
                 }

                 $scope.search = function(item){
                     if($scope.searchText ==undefined)
                     {
                         return true;
                     }
                     else
                     {
                          if(item.name.toLowerCase().indexOf($scope.searchText.toLowerCase())!= -1 || 
                             item.gender.toLowerCase().indexOf($scope.searchText.toLowerCase())!= -1)
                          {
                                return true;
                          }
                     }
                     return false;
                 }


         })
        
         .controller("Controller13",function($scope){

                 var empos =[
            {name:"Ben", gender: "1", salary: 55000},
            {name:"Jen", gender: "2", salary: 55200},
            {name:"George", gender: "1", salary: 55400},
            {name:"Alex",  gender: "2", salary: 55050},
            {name:"Flip",  gender: "3", salary: 55060},
            {name:"Bucky", gender: "1", salary: 55830}
                 ];
                 $scope.empos = empos;
                //  $scope.isHidden = true;
         })

         .controller("Controller14",function($scope){

                 var empos =[
            {name:'Ben', gender: 'Male', salary: 55000},
            {name:'Jen', gender: 'Female', salary: 55200},
            {name:'Geore', gender: 'Male', salary: 55400},
            {name:'Alex',  gender: 'Male', salary: 55050},
            {name:'Flip',  gender: 'Unknown', salary: 55060},
            {name:'Bucky', gender: 'Male', salary: 55830}
                 ]
                 $scope.empos = empos;
                 $scope.employeeView = "EmployeeTable.html";
               
         })


         .controller("Controller20", function ($scope, stringService) {
            $scope.transformString = function (input) {
                $scope.output = stringService.processString(input);
           }
            
         });