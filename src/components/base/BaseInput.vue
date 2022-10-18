<script>
export default {
  name: "BaseInput",
  emits: ["update:modelValue"],
  props: {
    placeholder: String,
    modelValue: String,
    class: String,
    type: {
      type: String,
      default: "text",
    },
  },
};
</script>

<template>
  <input
    :type="type"
    :placeholder="placeholder"
    :value="modelValue"
    :class="class"
    @input="$emit('update:modelValue', $event.target.value)"
  />
</template>

<style></style>
