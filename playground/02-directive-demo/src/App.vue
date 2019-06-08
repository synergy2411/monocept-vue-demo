<template>
  <div>
    <h2 v-highlight:background.delay = "'green'">Directive Demo</h2>
    <p v-local-directive>Hello VueJS!</p>
    <hr>

    <app-parent></app-parent>
    <hr>
    <app-user-register-form></app-user-register-form>
  </div>
</template>

<script>
import UserRegistrationForm from './components/UserRegistrationForm';
export default {
  components : {
    'app-user-register-form' : UserRegistrationForm
  },
  directives : {
    'local-directive' : {
      bind(el, binding, vnode){
        el.style.color = "blue";
      }
    }
  }
}
</script>
