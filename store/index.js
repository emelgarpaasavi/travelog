import { configureStore } from "@reduxjs/toolkit";
import planActionsReducer from "./plan-actions";
import toggleModalReducer from "./toggle-modal";
import dateReducer from "./date";

const store = configureStore({
    reducer: {
        planActions: planActionsReducer,
        toggleModal: toggleModalReducer,
        dateSelect: dateReducer,
    }
});

export default store;