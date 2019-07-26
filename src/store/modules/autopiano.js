
// mutation name
const SET_WALLPAPER = 'SET_WALLPAPER';

const DEFAULT_WALLPAPER = '/static/images/bg_default.jpg'

const state = {
	wallpaper: DEFAULT_WALLPAPER
};

const mutations = {
	[SET_WALLPAPER] (state, url) {
		state.wallpaper = url
	}
};

const actions = {
  $setWallpaper({ commit }, url) {
    if (url) {
      commit(SET_WALLPAPER, url)
    }
  }
};

const getters = {
	$currentWallpaper (state) {
		return state.wallpaper
	}
};

export default {
	state,
	mutations,
	actions,
	getters
};