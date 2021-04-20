<template>
  <div class="flex flex-col">
    <div class="my-2">
      <bl-input id='20' v-model='text'/>
    </div>

  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'

export default defineComponent({
  name: 'App',
  setup () {
    let text = ref('')

    return { text }
  }
})
</script>

<style>

</style>
