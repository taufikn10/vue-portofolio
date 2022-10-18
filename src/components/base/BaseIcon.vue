<script>
export default {
  name: "BaseIcon",
  props: {
    data: Object,
  },
};
</script>

<template>
  <li>
    <a :href="data.link" target="_blank"
      ><font-awesome-icon :icon="data.icon"
    /></a>
  </li>
</template>
