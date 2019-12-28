<template>
  <div class="arrows"></div>
</template>

<script>
  export default {
    name: 'down-arrow'
  }
</script>

<style>
body {
  background-color: #e25454;
}
body .arrows {
  position: relative;
  /**/
  /* position: absolute;
  top: 50%;
  left: 50%; */
  /**/
  width: 40px;
  height: 40px;
  transform: translate(-50%, -50%);
}
body .arrows:before {
  content: "";
  position: absolute;
  width: 50%;
  height: 50%;
  border-left: 6.6666666667px solid rgba(0, 0, 0, 0.7);
  border-bottom: 6.6666666667px solid rgba(0, 0, 0, 0.7);
  transform: translate(26.6666666667px, 106.6666666667px) rotate(-45deg);
  animation: arrows 3s linear infinite;
}
body .arrows:after {
  content: "";
  position: absolute;
  width: 50%;
  height: 50%;
  border-left: 6.6666666667px solid rgba(200, 200, 200, 255);
  border-bottom: 6.6666666667px solid rgba(200, 200, 200, 255);
  transform: translate(53.3333333333px, 0px) rotate(-45deg);
  animation: arrows 3s linear infinite -1.5s;
}

@keyframes arrows {
  0% {
    border-left: 6.6666666667px solid rgba(200, 200, 200, 255);
    border-bottom: 6.6666666667px solid rgba(200, 200, 200, 255);
    transform: translate(-13.3333333333px, -13.3333333333px) rotate(-45deg);
  }
  10%,
  90% {
    border-left: 6.6666666667px solid rgba(200, 200, 200, 255);
    border-bottom: 6.6666666667px solid rgba(200, 200, 200, 255);
  }
  50% {
    border-left: 6.6666666667px solid rgba(200, 200, 200, 255);
    border-bottom: 6.6666666667px solid rgba(200, 200, 200, 255);
    transform: translate(-13.3333333333px, 0px) rotate(-45deg);
  }
  100% {
    border-left: 6.6666666667px solid rgba(200, 200, 200, 255);
    border-bottom: 6.6666666667px solid rgba(200, 200, 200, 255);
    transform: translate(-13.3333333333px, 13.3333333333px) rotate(-45deg);
  }
}

</style>
