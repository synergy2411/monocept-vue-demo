import Vue from 'vue'
import App from './App.vue'
import Parent from './components/Parent.vue';

Vue.component('app-parent', Parent);

Vue.directive("highlight", {
  bind(el, binding, vnode) {
    let delay = 0;

    if (binding.modifiers['delay']) {
      delay = 3000;
      setTimeout(() => {

        if (binding.arg == 'background') {
          el.style.backgroundColor = binding.value;
        } else {
          el.style.color = binding.value;
        }
      }, delay);
    } else {
      if (binding.arg == 'background') {
        el.style.backgroundColor = binding.value;
      } else {
        el.style.color = binding.value;
      }
    }


  }
})

// bind, unbind, update, 


new Vue({
  el: '#app',
  render: h => h(App)
})
