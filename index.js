"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _Number = _interopRequireDefault(require("./Number.vue"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var VueNumber = {
  install: function install(Vue, options) {
    Vue.component('number', _Number.default);
  }
};
var _default = VueNumber;
exports.default = _default;

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(VueNumber);
}