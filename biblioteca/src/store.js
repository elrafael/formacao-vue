
import { createStore } from 'vuex';

const state = {
    books: [],
};

const mutations = { // operações sincronas
    UPDATE_BOOKS(state, payload){
        state.books = payload;
    },
    DELETE_BOOK(state, id){
        let newBooks = state.books.filter(b => b.id !== id);
        state.books = newBooks;
    }
};

const actions = { // operacoes asincronas
    getProductItems(context){
        fetch('http://localhost:3000/books')
            .then(resp => resp.json())
            .then(data => context.commit('UPDATE_BOOKS', data))
            .catch(()=> console.log('ocorreu um erro....'));
    },
    deleteBook({commit}, id){
        commit("DELETE_BOOK", id);
    }
};

const getters = {
    getBooks : state => state.books
};

export const store = createStore({
    state,
    mutations,
    actions,
    getters,
})