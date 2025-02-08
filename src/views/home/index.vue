<template>
  <div>
    <h1>Home Page</h1>
    <Button @click="goToAbout">Go to About</Button>
  </div>
</template>

<script lang="ts" setup>
import { useRouter } from 'vue-router';
import { Button } from 'vant';

const router = useRouter();
const goToAbout = () => {
  router.push('/about');
}
</script>
