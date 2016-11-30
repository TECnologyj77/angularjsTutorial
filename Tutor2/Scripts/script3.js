/// <reference path="angular.min.js" />
/// <reference  path = "angular-route.min.js" />

var app = angular.module("Demo",["ngRoute"])
         .config(function($routeProvider, $locationProvider)
         {
           $routeProvider
               .when("/home",{
                   templateUrl:"Templates/home.html",
                   controller:"homeController"
               })
               .when("/courses",{
                   templateUrl:"Templates/courses.html",
                   controller:"coursesController"
               })
               .when("/students",{
                   templateUrl:"Templates/students.html",
                   controller:"studentsController"
               })
               $locationProvider.html5mode(true);

         })

         .controller("homeController",function($scope){
             $scope.message= "Home Page";
         })

          .controller("coursesController",function($scope){
             $scope.courses= ["C#","VB.NET","SQL Server"];
         })

          .controller("studentsController",function($scope,$http){
              $http.get("StudentService.asmx/GetAllStudents")
                   .then(function(response){
                       $scope.students=response.data
                   })
         })

         