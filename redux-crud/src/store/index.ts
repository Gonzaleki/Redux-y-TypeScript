//para utilizar redux hay que envolver todo en un provider
import { configureStore } from "@reduxjs/toolkit";
// donde se guarda todo

export const store = configureStore({
	reducer: {},
});
