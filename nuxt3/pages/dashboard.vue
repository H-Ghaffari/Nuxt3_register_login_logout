<template>
  <PageComponent title="Dashboard">Content goes here</PageComponent>
</template>

<script setup>
definePageMeta({
  middleware: 'auth',
  layout: "custom",
});
</script>

