import { configureStore } from "@reduxjs/toolkit";
import colorReduce from "./features/counter/alterarCores";

export default configureStore({
    reducer: {
      color: colorReduce
    }
})