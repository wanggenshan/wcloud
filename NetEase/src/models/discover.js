import { routerRedux } from "dva/router";
import { getBanner, search, recommend } from "../services/index";

export default {
  namespace: "discover",
  state: {
    banners: [],
    songs: [],
    result: []
  },

  effects: {
    *getBanner({ payload }, { call, put }) {
      let response = yield call(getBanner);
      yield put({
        type: "updateState",
        payload: response.data
      });
    },
    *search({ payload }, { call, put }) {
      let response = yield call(search, payload);
      // console.log("search response...", response);
      yield put({
        type: "updateState",
        payload: response.data.result
      });
    },
    *recommend({ payload }, { call, put }) {
      let response = yield call(recommend);
      // console.log("recommend...", response);
      yield put({
        type: "updateState",
        payload: response.data
      });
    }
    // ,
    // *mv({ payload }, { call, put }) {
    //   let response = yield call(mv);
    //   console.log("mv...", response);
    //   yield put({
    //     type: "updateState",
    //     payload: response
    //   });
    // }
  },
  reducers: {
    updateState(state, action) {
      return { ...state, ...action.payload };
    }
  }
};
