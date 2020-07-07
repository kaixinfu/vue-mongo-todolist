import Persons from './persons';

const instances = {
    persons: new Persons()
}

const apis = {};

apis.install = function(Vue) {
    Vue.prototype.$api = instances
}

export default apis

