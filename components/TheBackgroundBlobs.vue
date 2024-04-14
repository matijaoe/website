<script lang="ts" setup>
const interBubble = ref<HTMLDivElement | null>(null)

// TODO: not really working when scrolling page, should prbbly use clientX and clientY
const { x, y } = useMouse()
const easingFactor = 20
const coords = reactive({
  curX: 0,
  curY: 0,
})

const translateElement = (elem: HTMLDivElement, curX: number, curY: number) => {
  elem.style.transform = `translate(${Math.round(curX)}px, ${Math.round(curY)}px)`
}

function move() {
  if (!isDefined(interBubble)) { return }

  coords.curX += (x.value - coords.curX) / easingFactor
  coords.curY += (y.value - coords.curY) / easingFactor
  translateElement(interBubble.value, coords.curX, coords.curY)
  requestAnimationFrame(move)
}

onMounted(() => {
  move()
})
</script>

<template>
  <!-- TODO: extract this into its own project as well, for reference -->
  <div class="gradient-bg">
    <svg xmlns="http://www.w3.org/2000/svg">
      <defs>
        <filter id="goo">
          <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" />
          <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -8" result="goo" />
          <feBlend in="SourceGraphic" in2="goo" />
        </filter>
      </defs>
    </svg>
    <div class="gradients-container">
      <div class="g1 absolute" />
      <div class="g2 absolute" />
      <div class="g3 absolute" />
      <div class="g4 absolute" />
      <div class="g5 absolute" />
      <div ref="interBubble" class="interactive absolute" />
    </div>
  </div>
</template>

<style lang="postcss" scoped>
.gradient-bg {
  --color-bg1: rgb(108, 0, 162);
  --color-bg2: rgb(0, 17, 82);
  --color1: 18, 113, 255;
  --color2: 221, 74, 255;
  --color3:25, 75, 100;
  --color4: 200, 50, 50;
  --color5: 102, 186, 168;
  --color-interactive: 140, 100, 255;
  --circle-size: 80%;
  --blending: hard-light;

  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1; /* Set z-index to send it behind everything */
  pointer-events: none; /* Ensure it doesn't interfere with mouse events */
  overflow: hidden; /* Hide overflow content */
}

.gradients-container {
  filter: url(#goo) blur(60px);
  width: 100%;
  height: 100%;
  opacity: 0.5;
}

.g1 {
  position: absolute;
  background: radial-gradient(circle at center, rgba(var(--color1), 0.8) 0, rgba(var(--color1), 0) 50%) no-repeat;
  mix-blend-mode: var(--blending);

  width: var(--circle-size);
  height: var(--circle-size);
  top: calc(50% - var(--circle-size) / 2);
  left: calc(50% - var(--circle-size) / 2);

  transform-origin: center center;
  animation: moveVertical 30s ease infinite;

  opacity: 0.7;
}

.g2 {
  background: radial-gradient(circle at center, rgba(var(--color2), 0.8) 0, rgba(var(--color2), 0) 50%) no-repeat;
  mix-blend-mode: var(--blending);

  width: var(--circle-size);
  height: var(--circle-size);
  top: calc(50% - var(--circle-size) / 2);
  left: calc(50% - var(--circle-size) / 2);

  transform-origin: calc(50% - 400px);
  animation: moveInCircle 20s reverse infinite;

  opacity: 0.7;
}

.g3 {
  background: radial-gradient(circle at center, rgba(var(--color3), 0.8) 0, rgba(var(--color3), 0) 50%) no-repeat;
  mix-blend-mode: var(--blending);

  width: var(--circle-size);
  height: var(--circle-size);
  top: calc(50% - var(--circle-size) / 2 + 200px);
  left: calc(50% - var(--circle-size) / 2 - 500px);

  transform-origin: calc(50% + 400px);
  animation: moveInCircle 40s linear infinite;

  opacity: 0.7;
}

.g4 {
  background: radial-gradient(circle at center, rgba(var(--color4), 0.8) 0, rgba(var(--color4), 0) 50%) no-repeat;
  mix-blend-mode: var(--blending);

  width: var(--circle-size);
  height: var(--circle-size);
  top: calc(50% - var(--circle-size) / 2);
  left: calc(50% - var(--circle-size) / 2);

  transform-origin: calc(50% - 200px);
  animation: moveHorizontal 40s ease infinite;

  opacity: 1;
}

.interactive {
  background: radial-gradient(circle at center, rgba(var(--color-interactive), 0.8) 0, rgba(var(--color-interactive), 0) 50%) no-repeat;
  mix-blend-mode: var(--blending);

  width: 100%;
  height: 100%;
  top: -50%;
  left: -50%;

  opacity: 0.9;
}

@keyframes moveInCircle {
  0% {
    transform: rotate(0deg);
  }

  50% {
    transform: rotate(180deg);
  }

  100% {
    transform: rotate(360deg);
  }
}

@keyframes moveVertical {
  0% {
    transform: translateY(-50%);
  }

  50% {
    transform: translateY(50%);
  }

  100% {
    transform: translateY(-50%);
  }
}

@keyframes moveHorizontal {
  0% {
    transform: translateX(-50%) translateY(-10%);
  }

  50% {
    transform: translateX(50%) translateY(10%);
  }

  100% {
    transform: translateX(-50%) translateY(-10%);
  }
}
</style>
