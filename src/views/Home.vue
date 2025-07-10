<template>
  <div class="home">
    <div class="shooting-star"></div>
    <div class="shooting-star"></div>
    <div class="shooting-star"></div>
    <div class="shooting-star"></div>
    <div class="shooting-star"></div>
    <div class="shooting-star"></div>
    <div class="shooting-star"></div>
    <div class="shooting-star"></div>
    <div class="shooting-star"></div>
    <Hero />
    <Footer />
  </div>
</template>

<script>
import Hero from '../components/Hero.vue'
import Footer from '../components/Footer.vue'

export default {
  name: 'Home',
  components: {
    Hero,
    Footer
  }
}
</script>

<style scoped>
.home {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: relative;
  overflow: hidden;
}

/* Background Science Illustration */
.home::after {
  content: '';
  position: fixed;
  top: -10%;
  left: -10%;
  right: -10%;
  bottom: -10%;
  background-image: url('@/assets/explainer-science.jpg');
  background-size: cover;
  background-color: rgba(0, 0, 0, 0.9); /* dark overlay */
  background-blend-mode: multiply;
  background-position: center;
  pointer-events: none;
  z-index: -2;
  filter: blur(0px);
  animation: cosmicFloat 20s ease-in-out infinite;
}

@keyframes cosmicFloat {
  0% {
    transform: scale(1.05) rotate(0deg);
    opacity: 0.03;
  }
  25% {
    transform: scale(1.1) rotate(0.5deg);
    opacity: 0.04;
  }
  50% {
    transform: scale(1.05) rotate(0deg);
    opacity: 0.05;
  }
  75% {
    transform: scale(1.1) rotate(-0.5deg);
    opacity: 0.04;
  }
  100% {
    transform: scale(1.05) rotate(0deg);
    opacity: 0.03;
  }
}

/* Ethereal Effects */
.home::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: 
    radial-gradient(2px 2px at 40px 60px, rgba(165, 136, 255, 0.4) 50%, transparent 100%),
    radial-gradient(2px 2px at 20% 20%, rgba(165, 136, 255, 0.2) 50%, transparent 100%),
    radial-gradient(2px 2px at 30% 70%, rgba(165, 136, 255, 0.3) 50%, transparent 100%),
    radial-gradient(2px 2px at 70% 80%, rgba(165, 136, 255, 0.2) 50%, transparent 100%),
    radial-gradient(2px 2px at 90% 10%, rgba(165, 136, 255, 0.3) 50%, transparent 100%);
  animation: etherealFloat 15s ease-in-out infinite;
  opacity: 0.5;
  pointer-events: none;
  z-index: -1;
}

@keyframes etherealFloat {
  0%, 100% {
    transform: translateY(0) translateX(0);
  }
  25% {
    transform: translateY(-10px) translateX(5px);
  }
  50% {
    transform: translateY(-5px) translateX(-5px);
  }
  75% {
    transform: translateY(10px) translateX(3px);
  }
}

.shooting-star {
  position: absolute;
  width: 2px;
  height: 2px;
  background: #fff;
  border-radius: 50%;
  opacity: 0;
  pointer-events: none;
}

.shooting-star:nth-child(1) {
  top: 20%;
  left: 30%;
  animation: shootingStar 4s linear infinite;
  animation-delay: 0s;
}

.shooting-star:nth-child(2) {
  top: 15%;
  left: 60%;
  animation: shootingStar 6s linear infinite;
  animation-delay: 2s;
}

.shooting-star:nth-child(3) {
  top: 30%;
  left: 80%;
  animation: shootingStar 5s linear infinite;
  animation-delay: 4s;
}

@keyframes shootingStar {
  0% {
    transform: translateX(0) translateY(0) rotate(45deg);
    opacity: 0;
  }
  5% {
    opacity: 0.8;
  }
  20% {
    transform: translateX(-200px) translateY(200px) rotate(45deg);
    opacity: 0;
  }
  100% {
    transform: translateX(-200px) translateY(200px) rotate(45deg);
    opacity: 0;
  }
}
</style> 