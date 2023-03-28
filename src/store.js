import { createStore } from 'vuex';

const state = {
  listings: [],
  loading: false
};

const mutations = {
  UPDATE_LISTINGS(state, payload) {
    state.listings = payload;
  },
  DELETE_LISTING(state, payload){
    let newListings = state.listings.filter(l => l.id !== payload);
    state.listings = newListings;
  },
  LOADING_PENDING (state) {
    state.loading = true;
  },
  LOADING_COMPLETE (state) {
    state.loading = false;
  }
};

const actions = {
  getListings({ commit }) {
    commit('LOADING_PENDING');
    return fetch('http://localhost:3000/listings')
                .then( response => response.json() )
                .then( data => {
                  commit('UPDATE_LISTINGS', data);
                  commit('LOADING_COMPLETE');
                })
  },
   removeListing({ commit }, id) {
      commit('DELETE_LISTING', id)
  },
  
};

const getters = {
  listings: state => state.listings,
  loading: state => state.loading
};

export default createStore({
  state,
  mutations,
  actions,
  getters
});
