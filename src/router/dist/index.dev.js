"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _vue = _interopRequireDefault(require("vue"));

var _vueRouter = _interopRequireDefault(require("vue-router"));

var _vAllProducts = _interopRequireDefault(require("../components/pages/v-all-products.vue"));

var _vSets = _interopRequireDefault(require("../components/pages/v-sets.vue"));

var _vRolls = _interopRequireDefault(require("../components/pages/v-rolls.vue"));

var _vChicken = _interopRequireDefault(require("../components/pages/v-chicken.vue"));

var _vSalads = _interopRequireDefault(require("../components/pages/v-salads.vue"));

var _vShip = _interopRequireDefault(require("../components/pages/v-ship.vue"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

_vue["default"].use(_vueRouter["default"]);

var routes = [{
  path: '/',
  name: 'Главная',
  component: _vAllProducts["default"]
}, {
  path: '/sets',
  name: 'Сеты',
  component: _vSets["default"]
}, {
  path: '/rolls',
  name: 'Роллы',
  component: _vRolls["default"]
}, {
  path: '/chicken',
  name: 'Курица',
  component: _vChicken["default"]
}, {
  path: '/salads',
  name: 'Салаты',
  component: _vSalads["default"]
}, {
  path: '/ship',
  name: 'Доставка и оплата',
  component: _vShip["default"]
} // {
//   path: '/about',
//   name: 'About',
//   // route level code-splitting
//   // this generates a separate chunk (about.[hash].js) for this route
//   // which is lazy-loaded when the route is visited.
//   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
// }
];
var router = new _vueRouter["default"]({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: routes
});
var _default = router;
exports["default"] = _default;