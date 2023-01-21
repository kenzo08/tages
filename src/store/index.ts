import {createStore} from "vuex";
import axios from "axios";
import {IProductCard, IProductDataType} from "../types";


const store = createStore({
    state: {
        products: <IProductCard[]>[],
        basket: <IProductCard[]>[],
        favourites: <IProductCard[]>[],
        amountOfFavouritesProducts: <number>0,
        amountOfBasketProducts: <number>0
    },


    getters: {
        getProducts: state => {
            return state.products;
        },

        getBasket: state => {
            return state.basket;
        },

        getFavourite: state => {
            return state.favourites;
        },
    },


    mutations: {
        getProductData(state, products: IProductDataType[]) {
            Object.values(products).map((product) => {
                state.products.push({
                    id: product.id,
                    name: product.name,
                    code: product.code,
                    material: product.material,
                    imgUrl: product.image.url,
                    oldPrice: product.price.old_price,
                    currentPrice: product.price.current_price,
                    isInBasket: false,
                    isInFavourite:false,
                })
            })
        },

        addProductToBasket(state, product: IProductCard) {
            state.basket.push(product);
            state.products.map((p) => {
                if (p.id === product.id) {
                    p.isInBasket = true
                }
            })
            state.amountOfBasketProducts = state.basket.length
        },

        addProductToFavourites(state, product: IProductCard) {
            state.favourites.push(product);
            state.products.map((p) => {
                if (p.id === product.id) {
                    p.isInFavourite = true
                }
                state.amountOfFavouritesProducts = state.favourites.length
            })

        },

        removeProductFromBasket(state, id) {
            state.basket = state.basket.filter((p) => p.id != id)
            state.products.map((p) => {
                if (p.id == id) {
                    p.isInBasket = false
                }
            })
            state.amountOfBasketProducts = state.basket.length
        },

        removeProductFromFavourite(state, id) {
            state.favourites = state.favourites.filter((p) => p.id != id)
            state.products.map((p) => {
                if (p.id == id) {
                    p.isInFavourite = false
                }
            })
            state.amountOfFavouritesProducts = state.favourites.length
        }

    },


    actions: {
        getProducts({commit}) {
            if (!store.getters.getProducts.length) {
                axios.get('/mock-data/items.json')
                    .then((response) => {
                        commit('getProductData', response.data)
                    })
                    .catch((error) => {
                        console.log(error);
                    })
            }
        },

        addProductToBasket({commit}, product) {
            commit('addProductToBasket', product)
        },

        addProductToFavourites({commit}, product) {
            commit('addProductToFavourites', product)
        },
        removeProductFromBasket({commit}, id) {
            commit('removeProductFromBasket', id)
        },

        removeProductFromFavourite({commit}, id) {
            commit('removeProductFromFavourite', id)
        },
    },
    modules: {}
});

export default store
