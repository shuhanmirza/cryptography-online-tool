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

const SYM_ENC_FUNCTIONS = {
    "AES": {
        func: CryptoJS.AES,
    },
    "DES" : {
        func: CryptoJS.DES
    },
   /* "Tripple DES" : {
        func: CryptoJS.TrippleDES
    }, */  // It invokes a unknown error
    "Rabbit" : {
        func: CryptoJS.Rabbit
    },
    "RC4" : {
        func: CryptoJS.RC4
    },
    "RC4Drop" : {
        func: CryptoJS.RC4Drop
    }
}

createApp(App)
    .use(vuetify)
    .provide("HASH_FUNCTIONS", HASH_FUNCTIONS)
    .provide("HMAC_FUNCTIONS", HMAC_FUNCTIONS)
    .provide("SYM_ENC_FUNCTIONS", SYM_ENC_FUNCTIONS)
    .mount('#app')
