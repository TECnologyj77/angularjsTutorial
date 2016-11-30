var myApp =angular
          .module("myModule", [])





.controller("myController", function($scope){
var demoOptions = {
	title: 'Demo: Recent World Cup Winners',
	filterPlaceHolder: 'Start typing to filter the lists below.',
	labelAll: 'All Items',
	labelSelected: 'Selected Items',
	helpMessage: ' Click items to transfer them between fields.',
	/* angular will use this to filter your lists */
	orderProperty: 'name',
	/* this contains the initial list of all items (i.e. the left side) */
	items: [{'id': '50', 'name': 'Germany'}, {'id': '45', 'name': 'Spain'}, {'id': '66', 'name': 'Italy'}, {'id': '30', 'name' : 'Brazil' }, {'id': '41', 'name': 'France' }, {'id': '34', 'name': 'Argentina'}],
	/* this list should be initialized as empty or with any pre-selected items */
	selectedItems: [] 
};
   $scope.options = demoOptions;
})


