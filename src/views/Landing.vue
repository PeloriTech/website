<template>
  <div class="home">
    <section ref="section1" class="hidden-sm-and-down">
			<video-bg playsinline :sources="video_bg"
      style="background">
				<v-container fill-height>
					<v-layout row wrap align-center>
              <v-flex class="text-xs-center">
                <span class="main-text">
                  Pelori
                  <br>
                </span>
                <span class="main-text"
                style="font-size:28px;font-weight:400;"
                >
                Preventative Analytics for the Public Sector
                <br><br>
                </span>
              </v-flex>
	        </v-layout>
				</v-container>
      </video-bg>
    </section>

    <section ref="section1" class="hidden-md-and-up">
			<v-layout row wrap
      class="background"
      style="padding-top:30px;padding-bottom:30px;"
      px-5
      >
				<v-container fill-height>
					<v-layout row wrap align-center>
              <v-flex class="text-xs-center">
                <span class="main-text">
                  Pelori
                  <br>
                </span>
                <span class="main-text"
                style="font-size:28px;font-weight:400;"
                >
                  Preventative Analytics for the Public Sector
                  <br><br>
                </span>
                <v-btn
                outline
                flat
                color="white"
                to="/contact"
                >
                Contact Us
                </v-btn>
              </v-flex>
	        </v-layout>
				</v-container>
			</v-layout>
    </section>

    <section ref="section2"
    class="grey-text">
      <v-container grid-list-md text-xs-center>
        <v-layout row wrap align-center justify-center>
          <v-card-text style="font-size:23px;font-weight:200;color:white;padding:10vh;">
            We help you see problems the moment they start. <br> <br>
            We accomplish this through deployed computer vision.
          </v-card-text>
        </v-layout>
      </v-container>
    </section>

    <section ref="section4" style="padding:30px;">
      <v-layout row>
        <v-flex xs0 md3/>
        <v-flex px-3 xs12 md6 class="text-xs-center">
          <v-card flat style="padding-bottom:4vh;">
            <v-responsive>
              <v-card-text style="font-size:28px;color:black;font-weight:300;">
                Applications
              </v-card-text>
              <v-card-text style="font-size:21px;font-weight:300;">
                Derive real-world insights as they happen.
              </v-card-text>
            </v-responsive>
          </v-card>
        </v-flex>
        <v-flex xs0 md3/>
      </v-layout>
      <v-container grid-list-sm fluid>
        <v-layout row wrap justify-center>
          <v-card class="actionable-card">
            <v-img 
            :src="industrial_security"
            aspect-ratio="1.77"
            />
            <v-card-title>
              <h3>Secure Critical Infrastructure</h3>
            </v-card-title>
            <v-flex class="text-xs-left"
            style="margin-left:-7px;">
              <ul class="dashed">
                <li> Detect people, cars, trucks, etc.. </li>
                <li> AI-driven threat notifications </li>
                <li> Integrate with legacy CCTV or autonomous drones </li>
              </ul>
            </v-flex>
          </v-card>
          <v-card class="actionable-card">
            <v-img 
            :src="public_transportation"
            aspect-ratio="1.77"
            />
            <v-card-title>
              <h3> Monitor Public Transportation</h3>
            </v-card-title>
            <v-flex class="text-xs-left"
            style="margin-left:-7px;">
              <ul class="dashed">
                <li> Design routes with unparalleled insights </li>
                <li> Count passengers, detect wheelchairs, etc.. </li>
                <li> Visualize ridership across routes</li>
              </ul>
            </v-flex>
          </v-card>
          <v-card class="actionable-card">
            <v-img 
            :src="search_and_rescue"
            aspect-ratio="1.77"
            />
            <v-card-title>
              <h3>Search and Rescue</h3>
            </v-card-title>
            <v-flex class="text-xs-left"
            style="margin-left:-7px;">
              <ul class="dashed">
                <li> Alert search teams of humans and assets in real-time </li>
                <li> Deployable from the bed of a truck </li>
                <li> Integrates with existing flight software </li>
              </ul>
            </v-flex>
          </v-card>
        </v-layout>
      </v-container>
    </section>

    <section
      style="padding-top:5vh;padding-bottom:5vh;background-color:#f9f9f9">
      <v-layout row>
        <v-flex xs0 md3/>
        <v-flex px-3 xs12 md6 class="text-xs-center" style="margin-bottom:15px;">
          <v-card flat style="background-color:#f9f9f9">
            <v-card-text style="font-size:28px;color:black;font-weight:300;">
              Integrations
            </v-card-text>
            <v-card-text style="font-size:21px;font-weight:300;">
              Apply our computer vision to CCTVs and drones.
            </v-card-text>
          </v-card>
        </v-flex>
        <v-flex xs0 md3/>
      </v-layout>
      <v-container grid-list-md fluid>
        <v-layout row wrap align-center justify-center>
          <v-card class="software-card-landing">
            <v-img 
            :src="cctv_camera"
            aspect-ratio="1.4"
            />
          </v-card>
          <v-card class="software-card-landing">
            <v-img 
            :src="drone_2"
            aspect-ratio="1.4"
            />
          </v-card>
        </v-layout>
      </v-container>
    </section>

    <section
    style="padding-top:5vh;padding-bottom:5vh;background-color:#f9f9f9">
      <v-layout row>
        <v-flex xs0 md3/>
        <v-flex px-3 xs12 md6 class="text-xs-center" style="margin-bottom:15px;">
          <v-card flat style="background-color:#f9f9f9">
            <v-card-text style="font-size:28px;color:black;font-weight:300;">
              Deploy Anywhere
            </v-card-text>
          </v-card>
        </v-flex>
        <v-flex xs0 md3/>
      </v-layout>
      <v-container grid-list-md fluid>
        <v-layout row wrap align-center justify-center>
          <v-card class="software-card-landing">
            <v-img 
            :src="edge"
            aspect-ratio="1.9"
            />
            <v-layout row>
              <v-card-title
              style="margin-left:9px;margin-top:3px;">
              <h1> Edge </h1>
              </v-card-title>
            </v-layout>
            <v-flex class="text-xs-center"
              style="
                margin-bottom:12px;
                margin-right:15px;
                margin-left:15px;
                font-size:16px;
              ">
              Analytics from the bed of a truck.
            </v-flex>
          </v-card>
          <v-card class="software-card-landing">
            <v-img 
            :src="facility"
            aspect-ratio="1.9"
            />
            <v-layout row
            class="text-xs-center">
              <v-card-title
              style="margin-left:9px;margin-top:3px;"
              >
                <h1> Facility </h1>
              </v-card-title>
            </v-layout>
            <v-flex class="text-xs-center"
              style="
                margin-bottom:12px;
                margin-right:15px;
                margin-left:15px;
                font-size:16px;
              ">
              Analyze data at the critical infrastructure site.
            </v-flex>
          </v-card>
          <v-card class="software-card-landing">
            <v-img 
            :src="cloud"
            aspect-ratio="1.9"
            />
            <v-layout row>
              <v-card-title
              class="text-xs-center"
              style="margin-left:9px;margin-top:3px;">
              <h1> Cloud </h1>
              </v-card-title>
            </v-layout>
            <v-flex class="text-xs-center"
            style="
              margin-bottom:12px;
              margin-right:15px;
              margin-left:15px;
              font-size:16px;
            ">
              For large-scale operations.
            </v-flex>
          </v-card>
        </v-layout>
      </v-container>
    </section>

    <section ref="section2"
    class="grey-text">
      <v-container grid-list-md text-xs-center>
        <v-layout row wrap align-center justify-center>
          <v-card-text style="font-size:23px;font-weight:200;color:white;padding:10vh;">
            Our software is hardware agnostic. <br><br>
            We connect you with preferred hardware providers.
          </v-card-text>
        </v-layout>
      </v-container>
    </section>

    <section
    ref="section5"
    style="background-color:white;padding-top:14vh;padding-bottom:21vh;">
      <v-layout row>
        <v-flex class="text-xs-center">
          <v-card flat color="white" style="color:black;padding-top:3px;">
              <v-card-text style="font-size:30px;">
                Learn more.
              </v-card-text>
              <v-btn
              style="border-radius:0px"
              to="/contact"
              large
              color="primary">
                Contact Us
              </v-btn>
          </v-card>
        </v-flex>
      </v-layout>
    </section>
  </div>
</template>

<style>

  ul {
    margin: 0;
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

  .actionable-card {
    margin:10px;
    min-height:375px;
    width: 325px;
  }

  .software-card-landing {
    margin:15px;
    margin-bottom:20px;
    width: 375px;
  }

  .background {
		background: linear-gradient( rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4) ), url('../assets/talos/goren-compressed.jpg');
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;
    background-position: center; 
    width:100%;
	}


  .main-text{
		font-size: 70px;
		font-weight: 500;
    color:white;
	}
	.sub-headers{
		font-size:40px;
		font-weight:lighter;
	}

  .grey-text {
    background: linear-gradient( #2d2c2c, #0d0c0c);
  }

  .white-text {
    background: linear-gradient(#dfdfdf, #ffffff)
  }

  .info-card {
    height:430px;
  }
</style>


<script>
  import DownArrow from '@/components/DownArrow'
  import VideoBg from 'vue-videobg'

  export default {
    components: {
      DownArrow,
      VideoBg
    },
    data() {
      return {
        
        industrial_security: require('@/assets/factory.jpg'),
        public_transportation: require('@/assets/public_transportation.jpg'),
        search_and_rescue: require('@/assets/mountains_drone.jpg'),

        cctv_camera: require('@/assets/cctv_camera.jpg'),
        drone_2: require('@/assets/drone_2.jpg'),
        video_bg: null,

        cloud: require('@/assets/deploy/cloud.jpg'),
        edge: require('@/assets/deploy/truck_water.jpg'),
        facility: require('@/assets/deploy/dam.jpg'),

        div_index: 0,
        div_list: ["section1", "section2", "section4", "section5"],
        new_pos: 0,
        moving_down: true
      }
    },
    methods: {
      async newHandle (event) {
        var height_list = this.div_list.map(e => {
          return this.$refs[e].offsetTop
        })

        var current_pos = window.scrollY
        
        var threshold = 15

        if (event.deltaY > 0) {
          // down
          for (var i = 0; i < height_list.length; i++) {
            if (current_pos < height_list[i]+threshold) {
              await window.scroll({
                top: height_list[i],
                behavior: 'smooth'
              });
              return
            }
          }
        } else if (event.deltaY < 0){
          // up
          for (var i = height_list.length - 1; i >= 0; i--) {
            if (current_pos > height_list[i]-threshold) {
              await window.scroll({
                top: height_list[i],
                behavior: 'smooth'
              });
              return
            }
          }
        }
      }
    },
    created () {
      var isSafari = /constructor/i.test(window.HTMLElement) || (function (p) { return p.toString() === "[object SafariRemoteNotification]"; })(!window['safari'] || (typeof safari !== 'undefined' && safari.pushNotification));
      var isMobile = (typeof window.orientation !== "undefined") || (navigator.userAgent.indexOf('IEMobile') !== -1)
      // if (!isSafari && !isMobile) window.addEventListener('wheel', this.newHandle);
      if (!isMobile) this.video_bg = [require('@/assets/video_background/background_video1.mp4')]
    },
    destroyed () {
      var isSafari = /constructor/i.test(window.HTMLElement) || (function (p) { return p.toString() === "[object SafariRemoteNotification]"; })(!window['safari'] || (typeof safari !== 'undefined' && safari.pushNotification));
      var isMobile = (typeof window.orientation !== "undefined") || (navigator.userAgent.indexOf('IEMobile') !== -1)
      //if (!isSafari && !isMobile) window.removeEventListener('wheel', this.newHandle);
    }
  }
</script>
