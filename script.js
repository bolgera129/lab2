var atts;
fetch('attractions.json').then(data => data.json()).then(data => {
	atts = data;
})

async function filterData(category) {
	let data;
	data = atts.filter(item => 
		item.Category == category
	)
		data = data.sort().slice(0,5)
		renderBarChart(data)
}

	/* **************************************************
	 *
	 * TODO: filter attractions by the selected category
	 * TODO: filter top 5 attractions
	 *
	 * CALL THE FOLLOWING FUNCTION TO RENDER THE BAR-CHART:
	 *
	 * renderBarChart(data)
	 *
	 * - 'data' must be an array of JSON objects
	 * - the max. length of 'data' is 5
	 *
	 * **************************************************/


// TODO: Define an event listener for the dropdown menu


let select = document.querySelector('#attraction-category');
console.log(select)
select.addEventListener('change',
	function(event){
		filterData(event.target.value)
	}
)