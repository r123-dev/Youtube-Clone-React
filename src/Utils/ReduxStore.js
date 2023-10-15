import { configureStore } from "@reduxjs/toolkit";
import SideBarSlice from "./SideBarSlice";

const ReduxStore=configureStore(
   {
      reducer:{
        slideBarSlice:SideBarSlice
      }
   }
)

export default ReduxStore;