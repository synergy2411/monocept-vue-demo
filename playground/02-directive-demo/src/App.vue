<template>
  <div>
    <h2 v-highlight:background.delay="'green'">Directive Demo</h2>
    <p v-local-directive>Hello VueJS!</p>

    <hr>
    <app-header></app-header>
    <br>
    <router-view></router-view>

    <hr>
    <app-vue-resource-demo></app-vue-resource-demo>

    <hr>

    <app-filter-demo></app-filter-demo>
    <app-list></app-list>
    <hr>
    <app-slot-demo>
      <header slot="header">Header Info</header>
      <main>{{ name }}</main>
      <footer slot="footer">Footer Info</footer>
    </app-slot-demo>

    <hr>
    <app-dynamic-component></app-dynamic-component>
    <hr>

    <app-life-cycle-methods :name="name"></app-life-cycle-methods>

    <hr>

    <app-parent></app-parent>
    <hr>
    <app-user-register-form></app-user-register-form>
  </div>
</template>

<script>
import UserRegistrationForm from "./components/UserRegistrationForm";
import Parent from "./components/Parent";
import LifeCycleMethods from "./components/LifeCycleMethods";
import DynamicComponent from "./components/dynamic/DynamicComponent";
import SlotDemo from "./components/slot/SlotDemo";
import FilterDemo from "./components/filters/FilterDemo";
import List from "./components/filters/List";
import VueResourceDemo from "./components/vue-resource-demo/VueResourceDemo";
import Header from './components/router-demo/Header';

export default {
  data() {
    return {
      name: "Foo"
    };
  },
  components: {
    "app-user-register-form": UserRegistrationForm,
    "app-parent": Parent,
    "app-life-cycle-methods": LifeCycleMethods,
    "app-dynamic-component": DynamicComponent,
    "app-slot-demo": SlotDemo,
    "app-filter-demo": FilterDemo,
    "app-list": List,
    "app-vue-resource-demo": VueResourceDemo,
    'app-header' : Header
  },
  directives: {
    "local-directive": {
      bind(el, binding, vnode) {
        el.style.color = "blue";
      }
    }
  }
};
</script>

<style scoped>
main {
  border: 2px solid grey;
}
</style>
