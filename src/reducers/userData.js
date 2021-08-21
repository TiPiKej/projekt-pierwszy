export const userData = (state = {'name': '', 'surname': '', 'address': ''}, {type, user}) => {
	switch(type){
		case "SET_USER_DATA":
			return user
		default: 
			return state
	}
}