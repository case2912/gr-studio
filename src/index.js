import render from './render'
import Vue from "vue";
import Vuex from "vuex";
import Root from "./root.vue";
new Vue(Root).$mount("#app");
window.addEventListener("load", render(), false);