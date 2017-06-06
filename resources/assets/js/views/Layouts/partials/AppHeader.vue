<template>
<section class="hero is-primary is-medium">
  <!-- Hero header: will stick at the top -->
  <div class="hero-head">
    <header class="nav">
      <div class="container">
        <div class="nav-left">
          <a class="nav-item">
            <img src="http://bulma.io/images/bulma-type-white.png" alt="Logo">
          </a>
        </div>
        <span class="nav-toggle">
          <span></span>
          <span></span>
          <span></span>
        </span>
        <div class="nav-right nav-menu">
          <a class="nav-item is-active">
            Home
          </a>
          <a class="nav-item">
            Examples
          </a>
          <a class="nav-item">
            Documentation
          </a>
          <span class="nav-item">
            <button class="button is-primary is-medium" @click="isComponentModalActive = true">Log In</button>
            <b-modal
                :active.sync="isComponentModalActive"
                :component="SignInForm"
                :props="formProps"
                :width="380">
            </b-modal>
          </span>
        </div>
      </div>
    </header>
  </div>

  <!-- Hero content: will be in the middle -->
  <div class="hero-body">
    <div class="container has-text-centered">
      <h1 class="title">
        Title
      </h1>
      <h2 class="subtitle">
        Subtitle
      </h2>
    </div>
  </div>

  <!-- Hero footer: will stick at the bottom -->
  <div class="hero-foot">
    <nav class="tabs">
      <div class="container">
        <ul>
          <li class="is-active"><a>Overview</a></li>
          <li><a>Modifiers</a></li>
          <li><a>Grid</a></li>
          <li><a>Elements</a></li>
          <li><a>Components</a></li>
          <li><a>Layout</a></li>
        </ul>
      </div>
    </nav>
  </div>
</section>
</template>

<script>
import SignInForm from '../../../components/SignInForm.vue'
    export default {
        data() {
            return {
                'header' : 'header',
                SignInForm,
                isComponentModalActive: false,
                formProps: {
                    email: '',
                    password: ''
                },
            }
        },
        component: {
        SignInForm,
        }
      // We Should Bind Login Button to Vuex , In Cases User is Sign in Via Fb or Normal Login

    }
</script>