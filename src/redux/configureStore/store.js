import { configureStore } from "@reduxjs/toolkit";
import { loginSlice } from "../modules/loginSlice";

//createslice임포트 --> slice로 필요한 객체 넣을 거임
//configureStore: 작은 슬라이스를 모아서 store로 만들때(createstore를 추상화한것)

import { postSlice } from "../modules/mainListSlice";
import { myPostSlice } from "../modules/myPageSlice";

export default configureStore({
  //state를 등록한다(객체를)
  reducer: {
    postSlice: postSlice.reducer,
    myPostSlice: myPostSlice.reducer,
    loginSlice: loginSlice.reducer,
  },
  devTools: process.env.NODE_ENV !== "development",
});
