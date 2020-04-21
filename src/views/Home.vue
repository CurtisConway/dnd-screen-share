<template>
  <div class="home" style="max-width:1000px;margin:0 auto;width:100%;">
    <PixiCanvas></PixiCanvas>
  </div>
</template>

<script>
// @ is an alias to /src
import PixiCanvas from '../components/PixiCanvas.vue';

export default {
  name: 'Home',
  components: {
    PixiCanvas,
  },
};
</script>
