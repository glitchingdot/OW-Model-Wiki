<script setup>
defineProps(['path'])
</script>

<template>
<video autoplay muted loop playsinline>
  <source :src="`/media/${path}/output-1.mov`" type='video/mp4; codecs=hvc1'>
  <source :src="`/media/${path}/output.webm`" type="video/webm">
</video>

<a :href="`/media/${path}/output.webm`">Open in Full Size</a>

</template>
