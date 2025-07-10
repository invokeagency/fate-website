<script setup>
import { ref } from 'vue';
import logoFate from '../assets/logo-fate.png';
</script>

<template>
  <section class="hero">
    <div class="shooting-star"></div>
    <div class="shooting-star"></div>
    <div class="shooting-star"></div>
    <div class="shooting-star"></div>
    <div class="shooting-star"></div>
    <div class="shooting-star"></div>
    <div class="shooting-star"></div>
    <div class="shooting-star"></div>
    <div class="shooting-star"></div>
    <div class="container hero-container">
      <div class="hero-content">
        <h1 class="hero-title">
          <span class="gradient-text">Fate Subliminals</span>
        </h1>
        <p class="hero-subtitle">
          Transform Your Life Through Subliminal Messaging
        </p>
        
        <!-- Download Section Integrated -->
        <div class="download-section">
          <p class="download-description">
            Download now on iOS to begin your transformation
          </p>
          <div class="action-buttons">
            <a href="https://apps.apple.com/us/app/fate-subliminal-rituals/id6744332634?platform=iphone" class="download-button">
              <div class="button-content">
                <div class="icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.5564 12.4835C17.5691 11.2535 18.1271 10.237 19.0784 9.55299C18.3704 8.55565 17.3144 7.92433 15.9784 7.65065C14.7171 7.38756 13.3124 8.00414 12.6491 8.00414C11.9644 8.00414 10.6131 7.68325 9.60175 7.68325C7.87508 7.71272 6.00908 8.87689 5.1231 10.6315C3.25708 14.1865 4.6831 19.4555 6.47237 22.4048C7.38097 23.8515 8.42777 25.4848 9.7851 25.4301C11.1104 25.3701 11.6044 24.5581 13.1957 24.5581C14.7664 24.5581 15.2231 25.4301 16.6131 25.3914C18.0457 25.3701 18.9597 23.9075 19.8364 22.4501C20.4251 21.4368 20.8817 20.3435 21.1884 19.2048C19.8471 18.6301 18.9384 17.4181 17.5564 12.4835Z" fill="currentColor"/>
                    <path d="M14.9264 6.17994C15.7277 5.19714 15.6784 3.33648 14.7804 2.31714C13.9897 3.20321 13.4584 4.31948 13.3384 5.50581C13.2184 6.69214 13.5064 7.88314 14.1591 8.89914C14.4484 8.59047 14.6957 8.23714 14.8931 7.84981C15.0904 7.46248 15.2351 7.04514 15.3224 6.61714C15.1918 6.46844 15.0677 6.31454 14.9517 6.15461L14.9264 6.17994Z" fill="currentColor"/>
                  </svg>
                </div>
                <div class="button-text">
                  <div class="small-text">Download on the</div>
                  <div class="big-text">App Store</div>
                </div>
              </div>
            </a>
            <a href="mailto:subliminalsfate@gmail.com" class="support-email-button" aria-label="Email support at Fate Subliminals">Email Us</a>
          </div>
        </div>
      </div>
      <div class="hero-image">
        <div class="logo-container">
          <img :src="logoFate" alt="Fate Subliminals" class="main-image" />
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.hero {
  padding: 5rem 0;
  min-height: 85vh;
  display: flex;
  align-items: center;
  position: relative;
  overflow: hidden;
}

/* Background Science Illustration */
.hero::after {
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

.hero-container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 2rem;
  position: relative;
}

.hero-content {
  flex: 1;
  max-width: 600px;
  margin-top: -2rem; /* Create vertical offset */
}

.hero-title {
  font-size: 4.5rem;
  line-height: 1;
  margin-bottom: 1.5rem;
  position: relative;
  display: flex;
  align-items: center;
  white-space: nowrap;
}

.gradient-text {
  background: linear-gradient(
    to right,
    rgba(255, 255, 255, 0.9) 0%,
    rgba(255, 255, 255, 1) 25%,
    rgba(165, 136, 255, 0.8) 50%,
    rgba(255, 255, 255, 0.9) 75%,
    rgba(255, 255, 255, 0.8) 100%
  );
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  background-size: 500% auto;
  animation: etherealShimmer 12s ease infinite;
  text-shadow: 
    0 0 30px rgba(165, 136, 255, 0.1),
    0 0 60px rgba(165, 136, 255, 0.05);
  letter-spacing: 0.02em;
  font-weight: 300;
}

/* Visual bridge between text and logo */
.hero-container::before {
  content: '';
  position: absolute;
  top: 30%;
  left: 45%;
  right: 0;
  height: 200px;
  background: radial-gradient(
    ellipse at center,
    rgba(165, 136, 255, 0.03) 0%,
    rgba(165, 136, 255, 0.02) 30%,
    transparent 70%
  );
  filter: blur(40px);
  pointer-events: none;
  z-index: -1;
}

.hero-subtitle {
  font-size: 1.5rem;
  color: #d9d9d9;
  margin-bottom: 2rem;
  line-height: 1.5;
}

/* Download Section Styles */
.download-section {
  margin-top: 3rem;
}

.download-description {
  font-size: 1.1rem;
  color: #d9d9d9;
  margin-bottom: 2.5rem;
  font-weight: 500;
}

.action-buttons {
  display: flex;
  gap: 1.2rem;
  align-items: center;
}

.download-button,
.support-email-button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0.75rem 1.5rem;
  border-radius: 12px;
  font-weight: 600;
  font-size: 1.1rem;
  text-decoration: none;
  transition: background-color 0.2s, transform 0.2s;
  min-height: 60px;
  flex: 1;
}

.download-button {
  background-color: rgba(255, 255, 255, 0.1);
}

.download-button:hover {
  background-color: rgba(255, 255, 255, 0.15);
  transform: translateY(-3px);
}

.support-email-button {
  background-color: #6b46c1;
  color: #fff;
  box-shadow: 0 2px 12px rgba(107, 70, 193, 0.12);
}

.support-email-button:hover,
.support-email-button:focus {
  background-color: #9f7aea;
  color: #fff;
  transform: translateY(-2px) scale(1.03);
  outline: none;
}

.button-content {
  display: flex;
  align-items: center;
  gap: 0.75rem;
}

.icon {
  display: flex;
  align-items: center;
  justify-content: center;
}

.button-text {
  text-align: left;
}

.small-text {
  font-size: 0.75rem;
  color: #d9d9d9;
}

.big-text {
  font-weight: 600;
  font-size: 1.1rem;
}

.hero-image {
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
}

.logo-container {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 380px;
  height: 380px;
  animation: gentleFloat 6s ease-in-out infinite;
}

.main-image {
  width: 380px;
  height: 380px;
  object-fit: contain;
  filter: drop-shadow(0 4px 20px rgba(0, 0, 0, 0.2));
}

@keyframes gentleFloat {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10px);
  }
}

.logo-container::before {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  width: 100%;
  height: 100%;
  transform: translate(-50%, -50%);
  background: radial-gradient(
    circle at center,
    rgba(255, 255, 255, 0.08) 0%,
    rgba(255, 255, 255, 0.05) 20%,
    rgba(255, 255, 255, 0.02) 40%,
    transparent 60%
  );
  filter: blur(10px);
  pointer-events: none;
  z-index: -1;
  animation: pulseGlow 4s ease-in-out infinite;
}

@keyframes pulseGlow {
  0%, 100% {
    opacity: 0.8;
    transform: translate(-50%, -50%) scale(1);
  }
  50% {
    opacity: 1;
    transform: translate(-50%, -50%) scale(1.05);
  }
}

@media (max-width: 992px) {
  .hero-container {
    flex-direction: column;
    text-align: center;
    padding-bottom: 2rem;
  }

  .hero-content {
    margin-top: 0;
    max-width: 100%;
  }

  .hero-title {
    font-size: 3.5rem;
  }

  .download-section {
    margin-top: 2.5rem;
  }
  
  .action-buttons {
    justify-content: center;
  }

  .hero-container::before {
    display: none;
  }

  .logo-container {
    width: 300px;
    height: 300px;
  }
  .main-image {
    width: 300px;
    height: 300px;
  }
}

@media (max-width: 768px) {
  .action-buttons {
    flex-direction: column;
    align-items: center;
    gap: 1rem;
  }

  .download-description {
    margin-bottom: 2rem;
  }
  
  .download-button {
    width: 80%;
    max-width: 220px;
  }

  .logo-container {
    width: 250px;
    height: 250px;
  }
  .main-image {
    width: 250px;
    height: 250px;
  }

  .hero-title {
    font-size: 3rem;
  }
}

/* Ethereal Effects */
.hero::before {
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

@keyframes etherealShimmer {
  0% {
    background-position: 0% center;
  }
  50% {
    background-position: 100% center;
  }
  100% {
    background-position: 0% center;
  }
}
</style> 