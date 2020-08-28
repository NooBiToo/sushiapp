"use strict";

var _vue = _interopRequireDefault(require("vue"));

var _App = _interopRequireDefault(require("./App.vue"));

var _router = _interopRequireDefault(require("./router"));

var _store = _interopRequireDefault(require("./vuex/store"));

require("./assets/styles/main.sass");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

_vue["default"].config.productionTip = false;

_vue["default"].directive('visible', function (el, binding) {
  el.style.visibility = !binding.value ? 'hidden' : 'visible';
});

_vue["default"].component("modal", {
  template: "#modal-template"
});

new _vue["default"]({
  render: function render(h) {
    return h(_App["default"]);
  },
  router: _router["default"],
  store: _store["default"]
}).$mount('#app');