import { getUrl, getDetail, getLyric } from "../services/index";

export default {
  namespace: "play",
  state: {
    id: 0,
    url: "",
    lyric: "",
    mode: 2,
    info: {},
    detail: {},
    current: 0,
    playList: JSON.parse(window.localStorage.getItem("playList")) || [] // 播放列表
  },

  effects: {
    *getUrl({ payload }, { call, put }) {
      let response = yield call(getUrl, payload);
      let detail = yield call(getDetail, payload);
      let lyric = yield call(getLyric, payload);
      console.log("url lyric...", lyric);
      let obj = { info: response.data.data[0] };
      obj.id = payload;
      obj.url = response.data.data[0].url;
      obj.detail = detail.data.songs[0];
      obj.lyric = lyric.data.lrc.lyric;
      yield put({
        type: "updateState",
        payload: obj
      });
    },
    *getLyric({ payload }, { call, put }) {
      let lyric = yield call(getLyric, payload);
      yield put({
        type: "updateState",
        payload: {
          lyric: lyric.data.lrc.lyric
        }
      });
    },
    *getUrls({ payload }, { call, put }) {
      console.log("getUrls payload", payload);
      let responses = yield call(getUrl, payload.join(","));
      let details = yield call(getDetail, payload.join(","));
      responses = responses.data.data;
      details = details.data.songs;
      let playList = [];
      details.forEach(item => {
        playList.push({
          detail: item,
          info: responses.filter(value => value.id == item.id)[0]
        });
      });
      window.localStorage.setItem("playList", JSON.stringify(playList));
      yield put({
        type: "updateState",
        payload: { playList }
      });
    }
  },

  reducers: {
    updateState(state, action) {
      // console.log("action...", action);
      return { ...state, ...action.payload };
    },
    changePlay(state, { payload }) {
      let newState = { ...state };
      if (!state.playList.length || state.mode == 1) {
        return newState;
      }
      if (payload == "prev") {
        if (state.current == 0) {
          newState.current = state.playList.length - 1;
        } else {
          newState.current--;
        }
      } else {
        if (state.current == state.playList.length - 1) {
          newState.current = 0;
        } else {
          newState.current++;
        }
      }
      newState.id = state.playList[newState.current].info.id;
      newState.url = state.playList[newState.current].info.url;
      newState.info = state.playList[newState.current].info;
      newState.detail = state.playList[newState.current].detail;
      return newState;
    }
  }
};
