// import { configure } from '@storybook/vue';

// // automatically import all files ending in *.stories.js
// const req = require.context('../stories', true, /\.stories\.js$/);
// function loadStories() {
//   req.keys().forEach(filename => req(filename));
// }

// configure(loadStories, module);

/* eslint-disable import/no-extraneous-dependencies */
import { configure, addDecorator } from "@storybook/vue";
import Vue from "vue";
import "../src/scss/colors.scss";
import Vuetify from "vuetify";
import "vuetify/dist/vuetify.css";
Vue.use(Vuetify, {
  iconfont: "md"
});

addDecorator(() => ({
  template: "<v-app><story/></v-app>"
}));

// automatically import all files ending in *.stories.js
const req = require.context("../stories", true, /.stories.js$/);
function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);