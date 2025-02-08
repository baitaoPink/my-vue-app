<template>
  <div>
    <h1>About Page</h1>
    <Button @click="goToSettings">Go to Settings</Button>
  </div>
</template>

<script>
import { Button } from 'vant';

export default {
  name: 'About',
  components: {
    'vant-button': Button
  },
  methods: {
    goToSettings() {
      this.$router.push('/settings');
    }
  }
};
</script>
