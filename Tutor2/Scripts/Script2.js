var myApp = angular
                .module("myModule", [])
                .filter("gender", function() {
            return function(gender){
                switch(gender){
                    case 1:
                    return "Male";
                    case 2:
                    return "Female";
                    case 3: 
                    return "Not Disclosed";
                }
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
         });