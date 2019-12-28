<template>
  <section
  style="padding-top:5vh;padding-bottom:5vh;background-color:#f9f9f9">
    <v-layout row>
      <v-flex xs0 md3/>
      <v-flex px-3 xs12 md6 class="text-xs-center" style="margin-bottom:15px;">
        <v-card flat style="background-color:#f9f9f9">
          <v-card-text style="font-size:28px;color:black;font-weight:300;">
            Software Platforms
          </v-card-text>
          <v-card-text style="font-size:21px;font-weight:300;">
            Integrate our software stack into existing infrastructure.
          </v-card-text>
        </v-card>
      </v-flex>
      <v-flex xs0 md3/>
    </v-layout>
    <v-container grid-list-md fluid>
      <v-layout row wrap align-center justify-center>
        <v-card class="software-card-dev">
          <v-img 
          :src="talos_gui"
          aspect-ratio="1.77"
          />
          <v-layout row>
            <v-card-title
            style="margin-left:9px;margin-top:3px;">
            <h1> Robotic Orchestration </h1>
            <h3 style="font-weight:300"> TALOS </h3>
            </v-card-title>
            <v-spacer/>
            <v-flex class="text-xs-right"
            style="padding-top:10px;padding-right:15px;">
              <v-btn
              flat
              to="/product/talos"
              outline>
                Learn More
              </v-btn>
            </v-flex>
          </v-layout>
          <v-flex class="text-xs-left"
            style="
              margin-bottom:12px;
              margin-right:15px;
            ">
            <ul class="dashed">
              <li> Manage any number of drones, rovers, or boats </li>
              <li> Stream live video feeds to anywhere in the world </li>
              <li> Set patrol routines and programmatic reactions </li>
              <li> Store video feeds on drone and in facility </li>
            </ul>
          </v-flex>
        </v-card>
        <v-card class="software-card-dev">
          <v-img 
          :src="yolo_output"
          aspect-ratio="1.77"
          />
          <v-layout row>
            <v-card-title
            style="margin-left:9px;margin-top:3px;">
              <h1> Video AI Appliance </h1>
              <h3 style="font-weight:300"> OSIRIS </h3>
            </v-card-title>
            <v-spacer/>
            <v-flex class="text-xs-right"
            style="padding-top:10px;padding-right:15px;">
              <v-btn
              flat
              to="/product/osiris"
              outline>
                Learn More
              </v-btn>
            </v-flex>
          </v-layout>
          <v-flex class="text-xs-left"
          style="
            margin-bottom:12px;
            margin-right:15px;
          ">
            <ul class="dashed">
              <li> Detection of people, cars, animals, etc. </li>
              <li> Scalable, real-time AI driven video analysis  </li>
              <li> Deployable in the cloud or locally based on your needs </li>
              <li> Trigger custom events and notifications from video </li>
            </ul>
          </v-flex>
        </v-card>
      </v-layout>
    </v-container>
  </section>
</template>

<script>
export default {
  data() {
    return {
      talos_gui: require('@/assets/talos/screenshot-compressed.jpg'),
      yolo_output: require('@/assets/osiris/yolo_output-compressed.jpg'),
    }
  }
}
</script>

<style>
  .software-card-dev {
    margin:15px;
    margin-bottom:20px;
    width: 400px;
  }
</style>