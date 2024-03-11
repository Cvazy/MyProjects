import {cryptoData, cryptoAssets} from "./data.js";

export function fakeFetchCryptoData() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(cryptoData)
        }, 1000)
    })
}

export function fakeFetchCryptoAssets() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(cryptoAssets)
        }, 1000)
    })
}