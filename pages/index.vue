<template>
  <section class="container">
    <div>
      <logo />
      <h1 class="title">
        test7
      </h1>
      <h2 class="subtitle">
        My transcendent Nuxt.js project
      </h2>
      <div class="links">
        <a
          href="https://nuxtjs.org/"
          target="_blank"
          class="button--green"
        >Documentation</a>
        <a
          href="https://github.com/nuxt/nuxt.js"
          target="_blank"
          class="button--grey"
        >GitHub</a>
      </div>
    </div>
  </section>
</template>

<script>
import Logo from '~/components/Logo.vue'
import opcion3 from '~/lib/opcion3'
import gql from 'graphql-tag'

export default {
  async asyncData () {
    const data  = await opcion3
/*switch (data.__typename) {
      case 'nombres': console.log(data.nombres) // use `key` as the primary key
      case 'subadmin': console.log(`__typename:${data.subadmin}`) // use `bar` prefix and `blah` as the primary key
      default: console.log('idk') // fall back to default handling
    }*/
      console.log(Object.getOwnPropertyNames(data['subadminsAll'][0]))

  }

  ,
  components: {
    Logo
  }
}
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
