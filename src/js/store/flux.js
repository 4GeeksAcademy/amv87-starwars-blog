const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			character: [],
			planets: [],
			favorites: [],
			favorites1: [],
			favorites2: []
		},
		actions: {
			addFavorite1: (favoriteName, index) => {
				const store = getStore();
				
				if (store.favorites1.includes(favoriteName) || store.favorites.includes(favoriteName)) {
					setStore({ favorites: store.favorites.filter((yet)=> yet !== favoriteName) });
					setStore({ favorites1: store.favorites1.filter((yet)=> yet.name !== favoriteName) });
				} else {
					setStore({ favorites: [...store.favorites , favoriteName] });
					setStore({ favorites1: [...store.favorites1 , {name: favoriteName, id: index}] });
				}
			},

			addFavorite2: (favoriteName, index) => {
				const store = getStore();
				
				if (store.favorites2.includes(favoriteName) || store.favorites.includes(favoriteName)) {
					setStore({ favorites: store.favorites.filter((yet)=> yet !== favoriteName) });
					setStore({ favorites2: store.favorites2.filter((yet)=> yet.name !== favoriteName) });
				} else {
					setStore({ favorites: [...store.favorites , favoriteName] });
					setStore({ favorites2: [...store.favorites2 , {name: favoriteName, id: index}] });
				}
			},

			deleteFavorite1: (favoriteName) => {
				const store = getStore();
				setStore({ favorites: store.favorites.filter((yet)=> yet !== favoriteName) });
				setStore({ favorites1: store.favorites1.filter((yet)=> yet.name !== favoriteName) });
			},

			deleteFavorite2: (favoriteName) => {
				const store = getStore();
				setStore({ favorites: store.favorites.filter((yet)=> yet !== favoriteName) });
				setStore({ favorites2: store.favorites2.filter((yet)=> yet.name !== favoriteName) });
			},

			loadSomeData: () => {
				fetch("https://swapi.dev/api/people/")
					.then(response => response.json())
					.then(data => setStore({ character: data.results }))
					.catch(error => console.log('error', error));
				fetch("https://swapi.dev/api/planets/")
					.then(response => response.json())
					.then(data => setStore({ planets: data.results }))
					.catch(error => console.log('error', error));
			}
		}
	};
};

export default getState;
