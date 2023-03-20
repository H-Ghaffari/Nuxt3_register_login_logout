<template>
  <div>
    <div>
      <img class="mx-auto h-12 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
        alt="Your Company" />
      <h2 class="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">
        register for free
      </h2>
      <p class="mt-2 text-center text-sm text-gray-600">
        Or
        {{ ' ' }}
        <NuxtLink to="/login" class="font-medium text-indigo-600 hover:text-indigo-500">
          Login to your account
        </NuxtLink>
      </p>
    </div>
    <div v-if="errors.length > 0" class="bg-red-100 border mt-3 border-red-400 text-red-700 px-4 py-3 rounded relative"
      role="alert">
      <!-- <div v-if="errors.length > 0" class="bg-orange-100 border-l-4 border-orange-500 text-orange-700 p-4" role="alert"> -->
      <ul class="mb-0">
        <li v-for="(error, index) in errors" :key="index">{{ error }}</li>
      </ul>
    </div>
    <form class="mt-4 space-y-6" @submit="register">
      <input type="hidden" name="remember" value="true" />
      <div class="-space-y-px rounded-md shadow-sm">
        <div>
          <label for="fullname" class="sr-only">Full Name</label>
          <input id="fullname" name="name" v-model="formData.name" type="text" autocomplete="name" required=""
            class="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
            placeholder="Full name" />
        </div>
        <div>
          <label for="email-address" class="sr-only">Email address</label>
          <input id="email-address" name="email" v-model="formData.email" type="email" autocomplete="email" required=""
            class="relative block w-full appearance-none rounded-none border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
            placeholder="Email address" />
        </div>
        <div>
          <label for="password" class="sr-only">Password</label>
          <input id="password" name="password" v-model="formData.password" type="password" autocomplete="current-password"
            required=""
            class="relative block w-full appearance-none rounded-none border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
            placeholder="Password" />
        </div>

        <div>
          <label for="password_confirmation" class="sr-only">Password Confirmation</label>
          <input id="password_confirmation" name="password_confirmation" v-model="formData.password_confirmation"
            type="password_confirmation" autocomplete="current-password_confirmation" required=""
            class="relative block w-full appearance-none rounded-none rounded-b-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
            placeholder="Password Confirmation" />
        </div>
      </div>
      <div>
        <button type="submit" :disabled="loading"
          class="group relative flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
          <span class="absolute inset-y-0 left-0 flex items-center pl-3">
            <LockClosedIcon class="h-5 w-5 text-indigo-500 group-hover:text-indigo-400" aria-hidden="true" />
          </span>
          Sign up
          <div v-if="loading"
            class="inline-block h-5 w-5 ml-2 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] text-primary motion-reduce:animate-[spin_1.5s_linear_infinite]"
            role="status">
            <span
              class="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">Loading...</span>
          </div>
        </button>
      </div>
    </form>
  </div>
</template>

<script setup>

import { LockClosedIcon } from '@heroicons/vue/20/solid'
import { useToast } from "vue-toastification";

definePageMeta({
  middleware: 'guest',
  layout: "auth",
});

const loading = ref(false);
const errors = ref([]);

const formData = reactive({
  name: '',
  email: '',
  password: '',
  password_confirmation: ''
});

const toast = useToast();

const { authUser } = useAuth();

async function register(event) {
  event.preventDefault();
  try {
    loading.value = true;
    const user = await $fetch('/api/auth/register', {
      method: 'POST',
      body: formData
    })
    authUser.value = user;
    toast.success("You are registered!");
    return navigateTo('/dashboard')
  } catch (error) {
    //console.log(error.data.data.errors);
    errors.value = Object.values(error.data.data.errors).flat();
    console.log(errors.value);
  } finally {
    loading.value = false;
  }

}
</script>