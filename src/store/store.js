import { configureStore } from "@reduxjs/toolkit";
import { allApi} from "./AllApi";
const store = configureStore({
  reducer: {
    [allApi.reducerPath]: allApi.reducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(allApi.middleware);
  },
});

export default store;

export {
  
    useFetchCanteenQuery,
    useFetchProductQuery,

} from "./AllApi";