<script lang="ts" setup>
const { data: products } = useFetch('/api/v1/products');
</script>

<template>
  <h1>index page</h1>

  <div>
    {{ JSON.stringify(products) }}
  </div>
</template>
