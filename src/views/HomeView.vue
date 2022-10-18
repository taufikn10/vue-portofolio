<script>
import "../assets/style/home.css";
import "../assets/style/contact.css";
import BaseCard from "../components/Base/BaseCard.vue";
import BaseInput from "../components/base/BaseInput.vue";
import BaseTextarea from "../components/base/BaseTextarea.vue";
import projectStore from "../stores/projectStore";
import sosmedStore from "../stores/linkStore";
import { mapState } from "pinia";
import BaseIcon from "../components/base/BaseIcon.vue";

export default {
  name: "HomeView",
  components: { BaseCard, BaseIcon, BaseInput, BaseTextarea },
  data: () => ({
    input: {
      name: "",
      email: "",
      class: "",
    },
  }),
  computed: {
    ...mapState(projectStore, ["project$list"]),
    ...mapState(sosmedStore, ["sosmed$list"]),
  },
};
</script>

<template>
  <!-- Home Intro -->
  <div id="home" class="intro-home">
    <div class="overlay-intro"></div>
    <div class="intro-content">
      <div class="container-fluid">
        <h1 class="intro-title mb-4">I am Taufik Nurrahman</h1>
        <p class="hero-subtitle">
          <span>UI/UX Designer, Mobile Developer, Website Developer</span>
        </p>
        <ul class="list-unstyled list-social">
          <li>
            <template v-for="(link, index) in sosmed$list" key="index">
              <BaseIcon :data="link" />
            </template>
          </li>
        </ul>
      </div>
    </div>
  </div>
  <!-- End Home Intro-->

  <!--  About Section  -->
  <section id="about" class="about-mf sect-pt4">
    <div class="container">
      <div class="row">
        <div class="col-sm-12">
          <div class="title-box text-center">
            <h3 class="title-a">What I am all about.</h3>
            <div class="line-mf mb-5"></div>
          </div>
          <div class="card shadow-sm rounded bg-body py-5 px-5 border-0">
            <div class="row">
              <div class="col-md-6">
                <div class="row">
                  <div class="col-sm-4 col-md-4 col-lg-4">
                    <div class="about-img">
                      <img
                        src="/images/my.png"
                        class="img-fluid rounded b-shadow-a"
                        alt="myprofile"
                      />
                    </div>
                  </div>
                  <div
                    class="col-sm-8 col-md-8 align-Software Engineeritems-center"
                  >
                    <div class="about-info">
                      <p>
                        <span class="title-s">Name: </span>
                        <span>Taufik Nurrahman</span>
                      </p>
                      <p>
                        <span class="title-s">Profile: </span>
                        <span>Software Engineer</span>
                      </p>
                      <p>
                        <span class="title-s">Email: </span>
                        <span>official.taufik980@gmail.com</span>
                      </p>
                      <p>
                        <span class="title-s">Phone: </span>
                        <span>082332905662</span>
                      </p>
                    </div>
                  </div>
                </div>
                <div class="skill-mf">
                  <h5 class="title-s">About me</h5>
                  <p class="about-text">
                    Pekenalkan saya <b>Taufik Nurrahman</b>, bisa dipanggil
                    Taufik, Lahir di Nganjuk, 11 Agustus 2000 Saya seorang
                    <b>Software Engineer</b> memliki kemampuan dalam perancangan
                    aplikasi, desain aplikasi dan pembuatan aplikasi. Saya suka
                    mempelajari sesuatu yang baru dalam hidup saya, terutama
                    tentang UI UX Designer, Website developer, dan Mobile
                    developer.
                  </p>
                </div>
              </div>
              <div class="col-md-6">
                <div class="about-me pt-4 pt-md-0">
                  <div class="skill-mf">
                    <h5 class="title-s">Skill</h5>
                  </div>
                  <ol>
                    <li>
                      <p>Mahir dalam membuat user flow dalam suatu aplikasi.</p>
                    </li>
                    <li>
                      <p>
                        Dapat berkolaborasi dengan tim design dan development.
                      </p>
                    </li>
                    <li>
                      <p>Memahami perilaku mobile dan web.</p>
                    </li>
                    <li>
                      <p>Memahami Konsep REST API dan cara mengonsumsi API.</p>
                    </li>
                    <li>
                      <p>
                        Memahami framework seperti Tailwind, Bootstrap, React
                        Js, Vue Js, Flutter, Laravel.
                      </p>
                    </li>
                    <li>
                      <p>
                        Memahami bagaimana membuat website dengan responsive web
                        design.
                      </p>
                    </li>
                    <li>
                      <p>
                        Memiliki pengetahuan tentang pemrograman fungsional dan
                        berorientasi objek.
                      </p>
                    </li>
                  </ol>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- End About Section -->

  <!--  Project Section  -->
  <section id="project" class="sect-pt4">
    <div class="container">
      <div class="row">
        <div class="col-sm-12">
          <div class="title-box text-center">
            <h3 class="title-a">Project</h3>
            <div class="line-mf mb-5"></div>
          </div>
        </div>
      </div>
      <div class="row">
        <template v-for="(project, index) in project$list" :key="index">
          <div class="col-md-4">
            <BaseCard
              :data="project"
              :to="{
                name: 'details',
                params: {
                  slug: project.slug,
                },
              }"
            >
            </BaseCard>
          </div>
        </template>
      </div>
    </div>
  </section>
  <!-- End Portfolio Section -->

  <!-- Section Contact -->
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
              <BaseInput
                type="text"
                required
                v-model="input.name"
                name="name"
                label="Name"
                class="form-control"
                placeholder="Your Name *"
                v-on:keypress="isLetter($event)"
              />
            </div>
            <div class="mb-3">
              <BaseInput
                type="email"
                required
                v-model="input.email"
                name="Email"
                class="form-control"
                placeholder="Your Email *"
              />
            </div>
            <div class="mb-3">
              <BaseInput
                type="tel"
                v-model="input.phone"
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
              <BaseTextarea
                name="Message"
                required
                v-model="input.message"
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
  <!-- End Section Contact -->
</template>
