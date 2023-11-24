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
			character: [
				{
					name: "JarJar",
					gender: "Characters",
					hair_color: "Characters",
					eye_color: "Characters",
				},
				{
					name: "Luke",
					gender: "Characters",
					hair_color: "Characters",
					eye_color: "Characters",
				}
			],
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
				const store = getStore();
				  fetch("https://www.swapi.tech/api/people/")
					.then(response => response.json())
					.then(data => setStore({ character: data.result }))
					
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
