<template>
  <div>
    <!-- <div class="w-row">
      <TheHeader class="mb-7" />
    </div> -->

    <div class="grid grid-cols-[1fr_3fr_1fr] px-14 py-14">
      <div class="">
        <TheSidebar class="sticky top-14 grow" />
      </div>

      <div class="w-row grow px-4">
        <slot />
      </div>

      <div />
    </div>
  </div>
</template>
