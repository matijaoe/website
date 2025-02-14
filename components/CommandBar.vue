<script setup lang="ts">
const { isOpen, toggle } = useCmd()

// eslint-disable-next-line ts/naming-convention
const { Meta_K, Ctrl_K } = useMagicKeys({
  passive: false,
})

const { isApple } = useDevice()

if (isApple) {
  whenever(Meta_K, () => toggle())
} else {
  whenever(Ctrl_K, () => toggle())
}
</script>

<template>
  <CommandDialog v-model:open="isOpen">
    <CommandInput placeholder="Type a command or search..." />
    <CommandList>
      <CommandEmpty>No results found.</CommandEmpty>
      <CommandGroup heading="Suggestions">
        <CommandItem value="calendar">
          Calendar
        </CommandItem>
        <CommandItem value="search-emoji">
          Search Emoji
        </CommandItem>
        <CommandItem value="calculator">
          Calculator
        </CommandItem>
      </CommandGroup>
      <CommandSeparator />
      <CommandGroup heading="Settings">
        <CommandItem value="profile">
          Profile
        </CommandItem>
        <CommandItem value="billing">
          Billing
        </CommandItem>
        <CommandItem value="settings">
          Settings
        </CommandItem>
      </CommandGroup>
    </CommandList>
  </CommandDialog>
</template>
