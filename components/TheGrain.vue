<template>
  <div class="grain" />
</template>

<style scoped>
.grain {
  animation: grain 11s steps(10) infinite;
  background-image: url('/grainy.png');
  background-repeat: repeat;
  height: 600%;
  left: -200%;
  pointer-events: none;
  position: fixed;
  top: -300%;
  width: 600%;
  z-index: 500;
  opacity: 0.04;
}

@keyframes grain {
  0%, 100% { transform: translate(0, 0); }
  10% { transform: translate(-5%, -10%); }
  20% { transform: translate(-15%, 5%); }
  30% { transform: translate(7%, -25%); }
  40% { transform: translate(-5%, 25%); }
  50% { transform: translate(-15%, 10%); }
  60% { transform: translate(15%, 0%); }
  70% { transform: translate(0%, 15%); }
  80% { transform: translate(3%, 35%); }
  90% { transform: translate(-10%, 10%); }
}
</style>
