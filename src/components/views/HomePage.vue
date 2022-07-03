<template>
  <div class="container">
    <div class="row align-items-center">
      <div class="col-8 align-self-center home-description">
        <div class="description-icons">
          <i v-for="(icon, index) in icons" :key="index"
             :class="'description-icons__item icon icon-large icon-pack--' + icon"></i>
        </div>
        <p class="content">
          When you search for an project management application in the app store, how do you know what the app is all
          about?
          What
          helps you understand what you are getting with a download? All of the details (but too many details) of a
          mobile
          app are
          written in the app description.
        </p>
        <p class="content">
          Vue app az.& is a demonstartion project, designed show interaction vue-ui logic with different backend types.
          This case build on nodejs implementation support and packages such as seequalize, express.js and another. az.&
          is
          appliction organaze your project and tasks for them.
        </p>
      </div>
    </div>
    <div class = "col-8 home-button-container">
      <router-link class = 'btn' to="/projects">
        Get started
      </router-link>
    </div>
  </div>

</template>

<script>
export default {
  name: 'HomePage',
  data() {
    return {
      icons: ['vue', 'scss', 'eslint', 'typescript', 'nodejs', 'nuxt', 'seequalize']
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../../assets/scss/main';

.home-button-container {
  text-align: center;
  padding: 50px;
}

.description-icons {
    text-align: center;
  &__item {
    margin: 0 15px;
  }
}
</style>
