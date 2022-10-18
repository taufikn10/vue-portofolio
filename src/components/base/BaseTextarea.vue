<script>
export default {
  name: "BaseTextArea",
  emits: ["update:modelValue"],
  props: {
    placeholder: String,
    modelValue: String,
    class: String,
  },
};
</script>

<template>
  <textarea
    :placeholder="placeholder"
    :value="modelValue"
    :class="class"
    @input="$emit('update:modelValue', $event.target.value)"
  />
</template>

<style></style>
