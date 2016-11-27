(function()
{
	angular.
	module('Selection')
	.factory('DataService', DataService);

	function DataService()
	{
		return data = {
			courseData: courseData
		}
	}

	var courseData =
	[
		{
			name: 'AngularJS',
			duration: 1,
			price: 250,
			selected: false
		},
		{
			name: 'NodeJS',
			duration: 1.5,
			price: 350,
			selected: false
		},
		{
			name: 'ReactJS',
			duration: 2.5,
			price: 500,
			selected: false
		}
	]

})();
