<template>
    <aside :class="['sidebar', className, { '!left-0': toggle }]" ref="sidebarRef">
        <div class="flex flex-col gap-8">
            <div class="ml-6 flex flex-col gap-8">
                <NuxtLink to="/" class="w-fit mt-2">
                    <img src="~/assets/logo.png" width="56" alt="Logo" />
                </NuxtLink>
            </div>
            <div class="ml-6 mt-5 text-left">
                <h1 class="text-2xl text-text font-medium mb-1">Trackfitt</h1>
                <p class="text-sm flex items-center gap-2"><i class="text-primary fad fa-mug-hot"></i> <span
                        class="mt-[.125rem]">{{ greetingMessage }}</span>
                </p>
                <h3 class="text-sm flex items-center gap-2"><i class="text-primary fad fa-fire"></i>
                    Welcome
                </h3>
            </div>

            <div class="flex gap-3 flex-col ml-6">
                <ThemeToggle/>
                <a href="https://saweria.co/dwiwijaya" target="_blank"
                class="group flex gap-2 items-center justify-center bg-background border border-stroke px-4 py-3 rounded-2xl text-base hover:text-primary">
                <i
                class="fad text-primary text-lg fa-circle-heart group-hover:-rotate-[12deg] transition-300 duration-300 transition-all relative">
                <i class="animate-ping bg-primary opacity-30 rounded-full absolute inline-flex h-full w-full"></i>
            </i>
            Become a Sponsor
        </a>
            </div>

            <nav class="nav">
                <div class="nav__menu p-6 bg-background rounded-l-none rounded-2xl border border-stroke border-l-0">
                    <ul class="flex flex-col items-center gap-y-3">
                        <li v-for="(item, index) in menuItems" :key="index"
                            :class="['text-sm w-full group', item.type == 'category' && index != 0 ? 'mt-4' : '']">
                            <NuxtLink :to="item.link" :title="item.label.en" :class="[
                                'flex items-center justify-between w-full transition-300 hover:text-primary',
                                isActiveRoute(item.link) ? 'text-primary' : ''
                            ]">
                                <p class="flex items-center gap-3">
                                    <i v-if="item.type == 'menu'" :class="[
                                        item.icon,
                                        'fad min-w-5 flex justify-center items-center group-hover:-rotate-[8deg] duration-300 transition-all'
                                    ]" />
                                    <i v-else class="fad fa-minus" />
                                    <span class="line-clamp-1 text-left">{{ item.label.en }}</span>
                                </p>
                                <i v-if="isActiveRoute(item.link)" class="fad fa-arrow-right animate-pulse"></i>
                            </NuxtLink>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>



        <div @click="toggleSidebar" class="toggle lg:-left-64 left-5 sidebar__toggle" :class="{ '!left-[17rem]': toggle }">
            <i class="fa-duotone fa-bars text-primary"></i>
        </div>
    </aside>
</template>

<script setup>
import { ref, onMounted, reactive, computed, onBeforeUnmount, watch } from 'vue';
import { useRouter, useRoute } from 'vue-router';
const route = useRoute();
import ThemeToggle from './ThemeToggle.vue'
import { SIDEBAR_MENU } from '@/constants/menu'
const sidebarElement = ref(null);
const toggle = ref(false);
const currentTime = ref('');
const greetingMessage = ref('');

const menuItems = SIDEBAR_MENU


watch(toggle, (newValue) => {
    handleBodyScroll(newValue);
    toggleSidebarClass(newValue);
});

const updateTime = () => {
    const now = new Date();
    currentTime.value = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
};

const updateGreeting = () => {
    const now = new Date();
    const hour = now.getHours();
    if (hour < 12) {
        greetingMessage.value = 'Good morning!';
    } else if (hour < 18) {
        greetingMessage.value = 'Good afternoon!';
    } else {
        greetingMessage.value = 'Good evening!';
    }
};

const isActiveRoute = (href) => {
    return route.path === href;
};

const handleClickOutside = (event) => {
    if (sidebarElement.value && !sidebarElement.value.contains(event.target)) {
        toggle.value = false;
    }
};

const handleBodyScroll = (toggle) => {
    toggle ? document.body.style.overflow = 'hidden' : document.body.style.overflow = '';
};

const handleResize = () => {
    if (window.innerWidth <= 1024) {
        toggle.value = false; // If the screen width is <= 1024px, close the sidebar
    }
};

const toggleSidebarClass = (toggle) => {
    const mainElement = document.querySelector('main');
    toggle ? mainElement.classList.add('sidebar-expanded') : mainElement.classList.remove('sidebar-expanded');
};

const toggleSidebar = () => {
    toggle.value = !toggle.value;
};

onMounted(() => {
    sidebarElement.value = document.querySelector('.sidebar');
    document.addEventListener('mousedown', handleClickOutside);
    window.addEventListener('resize', handleResize);
    toggleSidebarClass(toggle.value);
    updateTime();
    updateGreeting();
    setInterval(() => {
        updateTime();
        updateGreeting();
    }, 60000); // Update every minute
});

onBeforeUnmount(() => {
    document.removeEventListener('mousedown', handleClickOutside);
    window.removeEventListener('resize', handleResize);
    document.body.style.overflow = '';
});
</script>

