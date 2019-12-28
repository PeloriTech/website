<template>
  <div>
    <v-navigation-drawer
      v-model="drawer"
      v-if="$vuetify.breakpoint.xsOnly"
      app
      >
      <v-card-title>
        <router-link to="/" tag="span" style="cursor: pointer;">
          <v-img :src="logo_img" width="90px"/>
        </router-link>
        <v-spacer/>
        <v-icon
        @click="drawer=False"
        >close</v-icon>
      </v-card-title>
      <!-- <v-list
      style="color:grey">
        <v-list-tile
        to="/product/talos">
          <v-list-tile-content>
            <v-list-tile-title> Talos </v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile
        to="/product/osiris">
          <v-list-tile-content>
            <v-list-tile-title> Osiris </v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
      <v-divider/> -->
      <v-list-tile
        to="/developer">
          <v-list-tile-content>
            <v-list-tile-title> Developers </v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      <v-list
      style="color:grey">
        <!-- <v-list-tile
        to="/team">
          <v-list-tile-content>
            <v-list-tile-title> Team </v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile> -->
        <v-list-tile
        to="/career">
          <v-list-tile-content>
            <v-list-tile-title> Career </v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile
        to="/contact">
          <v-list-tile-content>
            <v-list-tile-title> Contact Us </v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar :flat="is_flat" app color="white"
    @mouseover="is_flat = false" @mouseleave="is_flat = true">
      <router-link to="/" tag="span" style="cursor: pointer;">
        <v-toolbar-title class="headline text-uppercase">
          <v-img :src="logo_img" width="110px"/>
        </v-toolbar-title>
      </router-link>
      <v-spacer></v-spacer>
      <v-toolbar-items
      v-if="!$vuetify.breakpoint.xsOnly">
        <!-- <v-menu offset-y>
          <v-btn
            slot="activator"
            color="primary"
            flat
            dark
          >
            products
          </v-btn>
          <v-list>
            <v-list-tile
              to="/product/talos"
            >
              <v-list-tile-title>Talos</v-list-tile-title>
            </v-list-tile>
            <v-list-tile
              to="/product/osiris"
            >
              <v-list-tile-title>Osiris</v-list-tile-title>
            </v-list-tile>
          </v-list>
        </v-menu> -->
        <v-btn
            color="primary"
            flat
            dark
            to="/developer"
          >
            developers
        </v-btn>
        <v-btn
            color="primary"
            flat
            dark
            to="/career"
          >
            careers
        </v-btn>
      </v-toolbar-items>
      <v-btn
          v-if="!$vuetify.breakpoint.xsOnly"
          color="#1a1a1a"
          to="/contact"
          style="color:white;border-radius:0px;"
        >
          Contact Us
      </v-btn>
      <v-toolbar-side-icon 
      @click.stop="drawer = !drawer" 
      color="primary"
      v-if="$vuetify.breakpoint.xsOnly"
      flat></v-toolbar-side-icon>
    </v-toolbar>  
  </div>  
</template>

<script>
export default {
  name: 'toolbar',
  data() {
    return {
      logo_img: require('@/assets/pelori_logo_name.png'),
      drawer: false,
      name: "Pelori",
      is_flat: true
    }
  }
}
</script>

<style>

</style>
