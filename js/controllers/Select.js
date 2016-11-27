(function()
{
	angular
	.module('Selection')
	.controller('Selection', Selection);

	Selection.$inject = ['DataService']

	function Selection(DataService)
	{
		this.data = DataService.courseData;
		this.currentClass = 'default';
		this.totalPrice = 0;

		this.toggleSelect = function(course)
		{
			if (course.selected === false)
			{
				course.selected = true;
				this.totalPrice += course.price;

			}
			else
			{
				course.selected = false;
				this.totalPrice -= course.price;
			}
		}
	}

})();