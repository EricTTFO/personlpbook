<template>
  <div class="home">
    <PersonlPBook/>
  </div>
</template>

<script>
// @ is an alias to /src
import PersonlPBook from '@/components/PersonlPBook.vue'

export default {
  name: 'home',
  components: {
    PersonlPBook
  }
}
</script>
