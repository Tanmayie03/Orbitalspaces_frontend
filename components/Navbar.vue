<script setup>
import { onAuthStateChanged, signOut } from "firebase/auth"
import { auth } from "../firebase/config"
const login = ref(false);
const user = ref('')
onAuthStateChanged(auth, currentUser => {
    if (currentUser) {
        console.log(currentUser)
        user.value = currentUser
        login.value = true
    } else {
        login.value = false
    }
})
const logout = async () => {
    try {
        console.log(login.value)
        await signOut(auth)
        // login.value = false
    } catch (error) {
        console.log(error.message)
    }
}
</script>
<template>
    <div>
        <div
            class="flex px-12 py-2 drop-shadow-xl bg-white border-b-2 border-[#2E5F53] items-center justify-between text-xl">
            <NuxtLink to="/">
                <img src="../assets/images/logo.png" class="w-14" />
            </NuxtLink>
            <div class="flex justify-between w-[50%]">
                <NuxtLink to="/Hire"
                    class="mx-4 text-lg font-semibold underline-offset-8   decoration-[#2E5F53] hover:underline " :class="{
                        'underline-offset-8 underline  decoration-[#2E5F53]':
                            $route.path === '/Hire',
                    }">
                    <h1>HIRE</h1>
                </NuxtLink>
                <NuxtLink to="/About"
                    class="mx-4 text-lg font-semibold underline-offset-8   decoration-[#2E5F53] hover:underline " :class="{
                        'underline-offset-8 underline  decoration-[#2E5F53]':
                            $route.path === '/About',
                    }">
                    <h1>ABOUT US</h1>
                </NuxtLink>
                <NuxtLink to="/Roadmap"
                    class="mx-4 text-lg font-semibold underline-offset-8   decoration-[#2E5F53] hover:underline " :class="{
                        'underline-offset-8 underline  decoration-[#2E5F53]':
                            $route.path === '/Roadmap',
                    }">
                    <h1>ROADMAPS</h1>
                </NuxtLink>
                <NuxtLink to="/Contact"
                    class="mx-4 text-lg font-semibold underline-offset-8   decoration-[#2E5F53] hover:underline " :class="{
                        'underline-offset-8 underline  decoration-[#2E5F53]':
                            $route.path === '/Contact',
                    }">
                    <h1>CONTACT US</h1>
                </NuxtLink>
            </div>
            <div>
                <div v-if="(login == false)">
                    <NuxtLink to="/signUp">
                        <p class="bg-[#2E5F53] text-lg text-white px-8 py-2 rounded-lg outline-none">
                            Get Started
                        </p>
                    </NuxtLink>
                </div>
                <div v-else>
                    <button @click="logout" class="bg-[#2E5F53] text-lg text-white px-8 py-2 rounded-lg outline-none">
                        Log Out
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>