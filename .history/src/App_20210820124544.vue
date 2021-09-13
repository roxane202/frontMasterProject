<template>

  <component :is="layout">

    <transition  name="fade"
                 mode="out-in"
                 @beforeLeave="beforeLeave"
                 @enter="enter"
                 @afterEnter="afterEnter"
    >
  
    <router-view></router-view>
    </transition>
  </component>


</template>

<script>

  const default_layout = "default"
  export default {

    computed:{
      layout(){
        return (this.$route.meta.layout || default_layout) + '-layout';
      }
    },
    created(){
     /* this.getSdkbPerformance()
      this.getFichier()
      this.getReseaux()
      this.getSection()
      this.getSdkb()
      this.getRole()
      this.getUserSecteur()
      this.getUserReseau()
      this.getUserCellule()
      this.getCellule()*/
      // var audio = new Audio('https://election.agosoftprojet.com/son/son1.mp3'); // path to file
      // audio.play();

        // var audio = new Audio('son2.mp3'); // path to file
        // audio.play();
    },
      data() {
          return {
              prevHeight: 0,
          };
      },
      methods: {
          beforeLeave(element) {
              this.prevHeight = getComputedStyle(element).height;
          },
          enter(element) {
              const { height } = getComputedStyle(element);

              element.style.height = this.prevHeight;

              setTimeout(() => {
                  element.style.height = height;
              });
          },
          afterEnter(element) {
              element.style.height = 'auto';
          },
      
      },
  mounted() {

  
  }

  }
</script>
<style>
  .fade-enter-active,
  .fade-leave-active {
    transition-duration: 0.3s;
    /*transition-property: opacity;*/
    transition-property: height, opacity;
    transition-timing-function: ease;
    overflow: hidden;
  }

  .fade-enter,
  .fade-leave-active {
    opacity: 0
  }

  .slide-left-enter-active,
  .slide-left-leave-active,
  .slide-right-enter-active,
  .slide-right-leave-active {
    transition-duration: 0.5s;
    transition-property: height, opacity, transform;
    transition-timing-function: cubic-bezier(0.55, 0, 0.1, 1);
    overflow: hidden;
  }

  .slide-left-enter,
  .slide-right-leave-active {
    opacity: 0;
    transform: translate(2em, 0);
  }

  .slide-left-leave-active,
  .slide-right-enter {
    opacity: 0;
    transform: translate(-2em, 0);
  }
</style>
