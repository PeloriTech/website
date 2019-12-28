<template>
  <v-content style="background-color:white">
    <v-card 
    flat
    style="
    background-color: #fafafa;
    margin-bottom:10px;">
      <v-layout row wrap>
        <v-flex xs12 md3 mx-3>
          <span style="
          font-size:50px;
          font-weight:200"
          >
            Software Engineer
          </span><br>
          <span style="
          margin-left:10px;
          font-size:25px;"
          >
          Intern
          </span><br>
          <v-btn
          flat
          outline
          small
          @click="send_email('Software Engineer Intern')"
          >
            Inquire
          </v-btn>
        </v-flex>
        <v-flex xs12 md8 my-5 mx-4>
          We are looking for someone who is fascinated by robotics and their applications. 
          We work with clients overseas, developing products and contracts. 
          Working here you will be thrown into cutting edge work in robotic perception, path 
          planning, sensor fusion, and IoT. Candidates preferably have a Computer Science or 
          Computational Media background. Ideally candidates are in their junior or senior year. 
          Interns should feel comfortable in discussion on contract outlines, system diagram 
          development, budgeting, and networking events. Some travel to Germany or Turkey may occur 
          though interns will not be required to travel.
          <br>
          <br>
          We are looking for the following skills/experience:
          <br>
          <ul class="dashed">
            <li> Strong familiarity with python. </li>
            <li> Linux </li>
            <li> Embedded System experience. </li>
            <li> Raspberry PI </li>
            <li> Jetson (Graphics) </li>
            <li> Networking </li>
          </ul>
          <br>
          Not necessary but nice:
          <ul class="dashed">
            <li> Tensorflow </li>
            <li> Can Bus </li>
            <li> Computer Vision </li>
            <li> PC Building / IT </li>
          </ul>
        </v-flex>
      </v-layout>
    </v-card>

    <v-card 
    flat
    style="
    background-color: #fafafa;
    margin-bottom:10px;">
      <v-layout row wrap>
        <v-flex xs12 md3 mx-3>
          <span style="
          font-size:50px;
          font-weight:200"
          >
            Software Engineer
          </span><br>
          <span style="
          margin-left:10px;
          font-size:25px;"
          >
          Full-Time
          </span><br>
          <v-btn
          flat
          outline
          small
          @click="send_email('Software Engineer Full-Time')"
          >
            Inquire
          </v-btn>
        </v-flex>
        <v-flex xs12 md8 my-5 mx-4>
          We are looking for someone who is fascinated by robotics and their applications. 
          We work with clients overseas, developing products and contracts. 
          Working here you will be thrown into cutting edge work in robotic perception, path 
          planning, sensor fusion, and IoT. Candidates preferably have a Computer Science or 
          Computational Media background. Ideally candidates are in their junior or senior year. 
          Interns should feel comfortable in discussion on contract outlines, system diagram 
          development, budgeting, and networking events. Some travel to Germany or Turkey may occur 
          though interns will not be required to travel.
          <br>
          <br>
          We are looking for the following skills/experience:
          <br>
          <ul class="dashed">
            <li> Strong familiarity with python. </li>
            <li> Linux </li>
            <li> Embedded System experience. </li>
            <li> Raspberry PI </li>
            <li> Jetson (Graphics) </li>
            <li> Networking </li>
          </ul>
          <br>
          Not necessary but nice:
          <ul class="dashed">
            <li> Tensorflow </li>
            <li> Can Bus </li>
            <li> Computer Vision </li>
            <li> PC Building / IT </li>
          </ul>
        </v-flex>
      </v-layout>
    </v-card>
  </v-content>
</template>

<script>
export default {
  methods: {
    send_email(position) {
      window.location.href = `mailto:samcrane8@gmail.com?subject=Job Listing Inquiry&body= I am interested in the role of ${position} at Pelori.`;
      router.push('/')
    }
  },
  data() {
    return {
      screenshot: require('@/assets/talos/screenshot.png'),
      logo: require('@/assets/talos/logo.png')
    }
  }
}
</script>

<style>
  ul {
    margin-right: 0;
  }
  ul.dashed {
    list-style-type: none;
  }
  ul.dashed > li {
    text-indent: -5px;
  }
  ul.dashed > li:before {
    content: "-";
    text-indent: -5px;
  }
</style>
