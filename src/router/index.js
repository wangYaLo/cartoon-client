import Vue from 'vue'
import VueRouter from 'vue-router'
import Layout from '../layout'


Vue.use(VueRouter)
const originalPush = VueRouter.prototype.push;
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch((err) => err);
};

const modulesVoid = require.context('./modules', true, /\.js$/);
const modulesFiles = require.context('./modules', true, /\.js$/).keys();
const modulesobj = modulesFiles.reduce((modules, modulePath) => {
  const moduleName = modulePath.replace(/^\.\/(.*)\.\w+$/, '$1');
  const value = modulesVoid(modulePath);
  modules = { ...modules, [moduleName]: value.default };
  return modules;
}, {});
const modulesArray = [];
for (const value in modulesobj) {
  modulesArray.push(modulesobj[value]);
}


const routes = [
  {
    path: '/',
    name: 'Layout',
    component: Layout,
    children: [...modulesArray]
  }
]

const router = new VueRouter({
  routes
})

export default router
