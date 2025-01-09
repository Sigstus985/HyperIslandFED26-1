// Base URL
//const apiUrl = "https://api.example.com/data";
const apiUrl = "https://pokeapi.co/api/v2/pokemon/ditto";

// Function to make a GET request using
// TODO: 2. finish the function
function fetchData(url) {
	fetch(url)
		.then((response) => {
			if (!response.ok) {
				throw Error("Network response was not ok " + response.statusText);
			}
			return response.json();
		})
		.then((data) => {
			console.log(data);
		})
		.catch((error) => {
			console.error("Something went wrong: " + error);
		});
}

fetchData(apiUrl);

// TODO: Implement the function
function postData(url, data) {
  fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok " + response.statusText);
      }
      return response.json();
    })
    .then((data) => {
      console.log(data);
    })
    .catch((error) => {
      console.error(error);
    });
}

const dataToPost = {
	name: "John Doe",
	age: 21,
};

postData(apiUrl, dataToPost);