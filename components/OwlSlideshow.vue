<template>
  <div>
    <owl-carousel>
      <div v-for="(image) in images" :key="image.id">       
          <img :src="image.url" style="width: 100%" />
          <div class="text" v-if="image.description">
            {{ image.description }}
        </div>
      </div>
    </owl-carousel>
  </div>
</template>

<script>
import OwlCarousel from "./OwlCarousel.vue";
export default {
  name: "OwlSlideshow",
  data() {
    return {
      //Index of the active image
      activeIndex: 0,
      //Hold the timeout, so we can clear it when it is needed
      autoSlideTimeout: null,
      //If the timer is stopped e.g. when hovering over the carousel
      stopSlider: false,
      //Hold the time left until changing to the next image
      timeLeft: 0,
      //Hold the interval so we can clear it when needed
      timerInterval: null,
      //Every 10ms decrease the timeLeft
      countdownInterval: 10,
    };
  },
  components: {
    OwlCarousel
  },
  computed: {
    progressBar() {
      //Calculate the width of the progressbar
      return 100 - (this.timeLeft / this.autoSlideInterval) * 100;
    },
    imageCount() {
      return this.images ? this.images.length : 0;
    },
  },
  methods: {
    imageStyle(index) {
      return this.activeIndex === index ? "display:block;" : "display:none;";
    },
    dotClass(index) {
      return this.activeIndex === index ? "dot active" : "dot";
    },
    // Go forward on the images array
    // or go at the first image if you can't go forward
    nextImage() {
      var active = this.activeIndex + 1;
      if (active >= this.images.length) {
        active = 0;
      }
      this.activateImage(active);
    },
    // Go backwards on the images array
    // or go at the last image
    prevImage() {
      var active = this.activeIndex - 1;
      if (active < 0) {
        active = this.images.length - 1;
      }
      this.activateImage(active);
    },
    activateImage(imageIndex) {
      this.activeIndex = imageIndex;
    },
    //Wait until 'interval' and go to the next image;
    startTimer(interval) {
      if (interval && interval > 0 && !this.stopSlider) {
        var self = this;
        clearTimeout(this.autoSlideTimeout);
        this.autoSlideTimeout = setTimeout(function () {
          self.nextImage();
          self.startTimer(self.autoSlideInterval);
        }, interval);
      }
    },
    //Stop the timer when hovering over the carousel
    stopTimer() {
      clearTimeout(this.autoSlideTimeout);
      this.stopSlider = true;
      clearInterval(this.timerInterval);
    },
    //Restart the timer(with 'timeLeft') when leaving from the carousel
    restartTimer() {
      this.stopSlider = false;
      clearInterval(this.timerInterval);
      this.startCountdown();
      this.startTimer(this.timeLeft);
    },
    //Start countdown from 'autoSlideInterval' to 0
    startCountdown() {
      if (!this.showProgressBar) return;
      var self = this;
      this.timerInterval = setInterval(function () {
        self.timeLeft -= self.countdownInterval;
        if (self.timeLeft <= 0) {
          self.timeLeft = self.autoSlideInterval;
        }
      }, this.countdownInterval);
    },
  },
  created() {
    //Check if startingImage prop was given and if the index is inside the images array bounds
    if (
      this.startingImage &&
      this.startingImage >= 0 &&
      this.startingImage < this.images.length
    ) {
      this.activeIndex = this.startingImage;
    }
    //Check if autoSlideInterval prop was given and if it is a positive number
    if (
      this.autoSlideInterval &&
      this.autoSlideInterval > this.countdownInterval
    ) {
      //Start the timer to go to the next image
      this.startTimer(this.autoSlideInterval);
      this.timeLeft = this.autoSlideInterval;
      //Start countdown to show the progressbar
      this.startCountdown();
    }
  },
  props: [
    "startingImage",
    "images",
    "autoSlideInterval",
    "showProgressBar",
    "showThumbnails",
  ],
};
</script>


<style scoped>
* {
  box-sizing: border-box;
}
.slide {
  display: none;
}
img {
  vertical-align: middle;
}

/* Slideshow container */
.slideshow-container {
  max-width: 1200px;
  position: relative;
  margin: auto;
}

/* Caption text */
.text {
  color: #f2f2f2;
  font-size: 15px;
  padding: 8px 12px;
  position: absolute;
  bottom: 8px;
  width: 100%;
  text-align: center;
}

/* Number text (1/3 etc) */
.numbertext {
  color: #f2f2f2;
  font-size: 12px;
  padding: 8px 12px;
  position: absolute;
  top: 0;
}

/* The dots/bullets/indicators */
.dot {
  height: 15px;
  width: 15px;
  margin: 0 2px;
  background-color: #bbb;
  border-radius: 50%;
  display: inline-block;
  transition: background-color 1s ease;
}

.active {
  background-color: #ccde02;
}

/* Fading animation */
.fade {
  -webkit-animation-name: fade;
  -webkit-animation-duration: 3.5s;
  animation-name: fade;
  animation-duration: 3.5s;
}

@-webkit-keyframes fade {
  from {
    opacity: 0.1;
  }
  to {
    opacity: 1;
  }
}

@keyframes fade {
  from {
    opacity: 0.1;
  }
  to {
    opacity: 1;
  }
}

/* On smaller screens, decrease text size */
@media only screen and (max-width: 300px) {
  .text {
    font-size: 11px;
  }
}
</style>