import Vue from 'vue';
import VueResource from 'vue-resource';
import VueRouter from 'vue-router';
import App from './App.vue';
import { routes } from './Routes';

export const eventBus = new Vue();

Vue.use(VueResource);
Vue.use(VueRouter);



const router = new VueRouter({
  routes,
  mode : "history"
})

router.beforeEach((to, from , next)=>{
  next(true);
})


Vue.http.options.root = "https://monocept-proj.firebaseio.com";

Vue.http.interceptors.push((request, next)=>{
  console.log("[REQUEST]", request);
  if(request.method == 'POST'){
    request.method = 'PUT';
  }
  next(response=>{
    console.log("[RESPONSE]", response);
    // response.json = response => {return {message : response.body}};
    return response;
  });
});

Vue.filter("toLowercase", value => {
  return value.toLowerCase();
})

// Vue.component('app-parent', Parent);

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
  router,
  render: h => h(App)
})
