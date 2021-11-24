function About(){
	document.write('Hello my name is Atharv Shukla and i am 5th class student i have created this website using HTML JS & CSS.')
}

function Credits(){
	document.write('Programming - ATHARV SHUKLA   Design - ATHARV SHUKLA   Published - Atharv Shukla. ')
}

function Search() {
	const inputVal = document.getElementById("search_input").value;
	window.location = `https://google.com/search?q=${inputVal}`;
}

const searchForm = document.getElementById("search_form");

searchForm.addEventListener('submit', (e) => {
	e.preventDefault();
	Search();
});