import {createApp} from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import {loadFonts} from './plugins/webfontloader'
import CryptoJS from "@/plugins/crypto-js-4.1.1";

loadFonts()

const HASH_FUNCTIONS = {
    "SHA1": CryptoJS.SHA1,
    "SHA224": CryptoJS.SHA224,
    "SHA256": CryptoJS.SHA256,
    "SHA3": CryptoJS.SHA3,
    "SHA384": CryptoJS.SHA384,
    "SHA512": CryptoJS.SHA512,
    "MD5": CryptoJS.MD5,
}

const HMAC_FUNCTIONS = {
    "HmacSHA1": CryptoJS.HmacSHA1,
    "HmacSHA224": CryptoJS.HmacSHA224,
    "HmacSHA256": CryptoJS.HmacSHA256,
    "HmacSHA3": CryptoJS.HmacSHA3,
    "HmacSHA384": CryptoJS.HmacSHA384,
    "HmacSHA512": CryptoJS.HmacSHA512,
    "HmacMD5": CryptoJS.HmacMD5,
}

createApp(App)
    .use(vuetify)
    .provide("HASH_FUNCTIONS", HASH_FUNCTIONS)
    .provide("HMAC_FUNCTIONS", HMAC_FUNCTIONS)
    .mount('#app')
