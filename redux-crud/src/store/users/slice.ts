import { createSlice } from "@reduxjs/toolkit";

export interface User {
	name: string;
	email: string;
	github: string;
}

export interface UserWithId extends User {
	id: number;
}

const initialState: UserWithId[] = [
	{
		id: 1,
		name: "Peter Doe",
		email: "peter@gmail.com",
		github: "peterdoe",
	},
	{
		id: 2,
		name: "John Doe",
		email: "john@gmail.com",
		github: "johndoe",
	},
	{
		id: 3,
		name: "Mary Doe",
		email: "mary@gmail.com",
		github: "marydoe",
	},
	{
		id: 4,
		name: "Jane Doe",
		email: "jane@gmail.com",
		github: "janedoe",
	},
];

export const usersSlice = createSlice({
	name: "users",
	initialState,
	reducers: {},
});

export default usersSlice.reducer;
