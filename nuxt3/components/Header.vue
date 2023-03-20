<template>
    <nav class="relative flex flex-wrap items-center justify-between px-2 py-3 bg-gray-500 mb-3">
        <div class="container px-4 mx-auto flex flex-wrap items-center justify-between">
            <div class="w-full relative flex justify-between md:w-auto  px-4 md:static md:block md:justify-start">
                <a class="text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase text-white"
                    href="/">
                    LOGO
                </a>
                <button
                    class="text-white cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block md:hidden outline-none focus:outline-none"
                    type="button" v-on:click="toggleNavbar()">
                    <Bars4Icon class="h-6 w-6 text-white" />
                </button>
            </div>
            <div v-bind:class="{ 'hidden': !showMenu, 'flex': showMenu }" class="md:flex md:flex-grow items-center">
                <ul v-if="authUser" class="flex flex-col md:flex-row list-none ml-auto">
                    <li class="nav-item">
                        <NuxtLink
                            class="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                            to="/dashboard">
                            <i class="fab fa-facebook-square text-lg leading-lg text-white opacity-75" /><span
                                class="ml-2">DASHBOARD</span>
                        </NuxtLink>
                    </li>
                    <li class="nav-item">
                        <NuxtLink
                            class="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                            to="/surveys">
                            <i class="fab fa-twitter text-lg leading-lg text-white opacity-75" /><span
                                class="ml-2">SURVEYS</span>
                        </NuxtLink>
                    </li>
                </ul>
                <ul v-else class="flex flex-col md:flex-row list-none ml-auto">
                    <li class="nav-item">
                        <NuxtLink
                            class="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                            to="/login">
                            <i class="fab fa-facebook-square text-lg leading-lg text-white opacity-75" /><span
                                class="ml-2">Login</span>
                        </NuxtLink>
                    </li>
                    <li class="nav-item">
                        <NuxtLink
                            class="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                            to="/register">
                            <i class="fab fa-twitter text-lg leading-lg text-white opacity-75" /><span
                                class="ml-2">Register</span>
                        </NuxtLink>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>

<script setup>
import { ref } from "vue";
import { Bars4Icon } from '@heroicons/vue/20/solid';

const { authUser } = useAuth();

const showMenu = ref(false);

function toggleNavbar() {
    showMenu.value = !showMenu.value;
}
</script>
