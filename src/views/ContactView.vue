<script>
import { useVuelidate } from "@vuelidate/core";
import { required, email } from "@vuelidate/validators";
import { reactive } from "vue";
import "../assets/style/contact.css";
import BaseInput from "../components/base/BaseInput.vue";
import BaseTextarea from "../components/base/BaseTextarea.vue";
export default {
  name: "ContactView",
  setup() {
    const state = reactive({
      title: "Test",
      // input
      input: {
        name: "",
        email: "",
        phone: "",
        message: "",
      },
    });
    const rules = {
      input: {
        name: { required },
        email: { required, email },
        phone: { required },
        message: { required },
      },
    };
    const v$ = useVuelidate(rules, state);
    return { state, v$ };
  },
  methods: {
    isLetter(e) {
      let char = String.fromCharCode(e.keyCode);
      if (/^[A-Za-z ]+$/.test(char)) return true;
      else e.preventDefault();
    },
    async onSubmit() {
      this.v$.$validate();
      if (!this.v$.$error) {
        alert("form succesfully submitted.");
      } else {
        alert("form failed validation");
      }
    },
  },
  components: { BaseInput, BaseTextarea },
};
</script>

<template>
  <!-- Contact -->
  <section id="contact" class="py-4">
    <div class="title-box text-center">
      <h3 class="title-a">Contact</h3>
      <div class="line-mf mb-5"></div>
    </div>
    <div class="container contact-form">
      <div class="contact-image">
        <img src="/images/message.png" alt="message" />
      </div>
      <form
        @submit="onSubmit"
        action="https://formspree.io/f/mqkjlrrd"
        method="POST"
      >
        <h3>Drop a Message</h3>
        <div class="row">
          <div class="col-md-6">
            <div class="mb-3">
              <span v-if="v$.input.name.$error" class="text-danger">
                {{ v$.input.name.$errors[0].$message }}
              </span>
              <BaseInput
                type="text"
                required
                v-model="state.input.name"
                name="name"
                label="Name"
                class="form-control"
                placeholder="Your Name *"
                v-on:keypress="isLetter($event)"
              />
            </div>
            <div class="mb-3">
              <span v-if="v$.input.email.$error" class="text-danger">
                {{ v$.input.email.$errors[0].$message }}
              </span>
              <BaseInput
                type="email"
                required
                v-model="state.input.email"
                name="Email"
                class="form-control"
                placeholder="Your Email *"
              />
            </div>
            <div class="mb-3">
              <span v-if="v$.input.phone.$error" class="text-danger">
                {{ v$.input.phone.$errors[0].$message }}
              </span>
              <BaseInput
                type="tel"
                v-model="state.input.phone"
                name="Number"
                required
                class="form-control"
                placeholder="Your Phone Number *"
              />
            </div>
            <button type="submit" class="btnContact mb-3">Submit</button>
          </div>
          <div class="col-md-6">
            <div class="form-group">
              <span v-if="v$.input.message.$error" class="text-danger">
                {{ v$.input.message.$errors[0].$message }}
              </span>
              <BaseTextarea
                name="Message"
                required
                v-model="state.input.message"
                class="form-control"
                placeholder="Your Message *"
                style="width: 100%; height: 150px"
              />
            </div>
          </div>
        </div>
      </form>
    </div>
  </section>
  <!-- End Contact -->
</template>
