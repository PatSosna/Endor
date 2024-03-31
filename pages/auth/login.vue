<script setup lang="ts">
function handleLogin() {
  // console.log('Login');
}
</script>

<template>
  <UCard>
    <template #header>
      <h2>Login</h2>
    </template>

    <div class="flex flex-col gap-4">
      <UFormGroup label="Email">
        <UInput
          type="email"
          placeholder="your@email.com"
        />
      </UFormGroup>

      <UFormGroup label="Password">
        <UInput
          type="password"

          placeholder="password"
        >
          <template #footer>
            <div class="flex items-center gap-2">
              <UButton
                type="button"
                @click="handleLogin"
              >
                Login
              </UButton>
            </div>
          </template>
        </UInput>
      </UFormGroup>
    </div>
  </UCard>
</template>
