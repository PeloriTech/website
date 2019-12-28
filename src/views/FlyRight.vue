<template>
  <v-content style="background-color:white">
    <section>
      <v-layout row wrap>
        <v-flex xs12 md4 mx-3>
          <span style="
          font-size:60px;
          font-weight:200"
          >
          FlyRight
          <img :src="logo" width="60px"/>
          </span><br><br><br>
          FlyRight is an open-source airspace management tool. <br><br>
          If self-hosted, FlyRight is free to use. we also provide deployment and server maintenance solutions.<br><br>

          As the number of drone flights increase and are flown closer 
          to urban centers, issues will start to occur and naturally, local 
          law enforcement will become involved. However, law enforcement cannot 
          see if a drone has a part 107 waiver, which is the difference between 
          a compliant flight and a threat to public safety.
          <br><br>
          We designed FlyRight to be the solution.
          We ensure that law enforcement consults FlyRight before interrupting your 
          operations. FlyRight is a non-invasive solution that stays out of your way 
          and keeps law enforcement happy.<br><br>
          You can find the code hosted on Github <a href="https://github.com/samcrane8/FlyRight">here</a>.
          <br><br>
          <v-layout row mt-4 mx-4>
            <v-flex>
              <v-card style="max-width:100px;height:auto;">
                <a href="https://nabpilot.org/fly-right/">
                  <v-flex mx-1 my-1>
                    <v-img :src="pilot" style="max-width:100px;height:auto;"/>
                  </v-flex>
                </a>
              </v-card>
            </v-flex>
            <v-flex>
              <v-card flat style="max-width:115px;height:35px;margin:3px;padding:2px;">
                <iframe src="https://ghbtns.com/github-btn.html?user=samcrane8&repo=FlyRight&type=star&count=true&size=large" frameborder="0" scrolling="0" width="160px" height="30px"></iframe>
              </v-card>
            </v-flex>
          </v-layout>
        </v-flex>
        <v-flex xs12 md7 mx-4>
          <v-card style="max-width:80vw;height:auto;margin-top:50px;">
            <v-img :src="screenshot" style="max-width:80vw;height:auto;"/>
          </v-card>
        </v-flex>
      </v-layout>
    </section>
  </v-content>
</template>

<script>
export default {
  data() {
    return {
      screenshot: require('@/assets/flyright/screenshot.png'),
      logo: require('@/assets/flyright/logo.png'),
      pilot: require('@/assets/flyright/pilot.jpg')
    }
  }
}
</script>

<style>

</style>
