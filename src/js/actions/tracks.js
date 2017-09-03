const mockData = [
	{
		id: 1,
		name: "In this Shirt"
	},
	{
		id: 2,
		name: "Paradise"
	},
	{
		id: 3,
		name: "Rebellion"
	},
	{
		id: 4,
		name: "Walking on a Dream"
	},
	{
		id: 5,
		name: "Goodbye"
	},
]; 

export const getTracks = () => dispatch => {
	setTimeout(() => {
		console.log("I got tracks!");
		dispatch({type: "FETCH_TRACKS_SUCCESS", value: mockData})
	}, 2000);
};