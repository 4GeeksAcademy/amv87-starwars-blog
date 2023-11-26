const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
			],
			character: [],
			planets: [
				{
					name: "Alderaan",
					population: "Characters",
					terrain: "Characters",
				},
				{
					name: "Corusant",
					population: "Characters",
					terrain: "Characters",
				}
			]
		},
		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			loadSomeData: () => {
				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/

				fetch("https://swapi.dev/api/people/")
					.then(response => response.json())
					.then(data => setStore({ character: data.results }))
					.catch(error => console.log('error', error));
				fetch("https://swapi.dev/api/planets/")
					.then(response => response.json())
					.then(data => setStore({ character: data.results }))
					.catch(error => console.log('error', error));
			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			}
		}
	};
};

export default getState;
