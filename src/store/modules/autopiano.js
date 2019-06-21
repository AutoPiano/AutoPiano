import { CDN_JSDELIVR_STATIC } from '@/config'

// mutation name
const SET_WALLPAPER = 'SET_WALLPAPER';

const DEFAULT_WALLPAPER = CDN_JSDELIVR_STATIC + 'images/bg_default.jpg'

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