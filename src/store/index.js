import Vue from 'vue';
import Vuex from 'vuex';
import getters from './getters';

Vue.use(Vuex);
const modulesVoid = require.context('./modules', true, /\.js$/);
const modulesFiles = require.context('./modules', true, /\.js$/).keys();
const modulesobj = modulesFiles.reduce((modules, modulePath) => {
  const moduleName = modulePath.replace(/^\.\/(.*)\.\w+$/, '$1');
  const value = modulesVoid(modulePath);
  modules = { ...modules, [moduleName]: value.default };
  return modules;
}, {});

export default new Vuex.Store({
  getters,
  modules: { ...modulesobj }
});
