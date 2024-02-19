<script setup>
import { auth } from "../firebase/config"
import { signInWithEmailAndPassword } from "firebase/auth"

const email = ref('')
const password = ref('')

const login = async () => {
    try {
        const res = await signInWithEmailAndPassword(auth, email.value, password.value)
        console.log(res)
        console.log("sucess")
    } catch (error) {
        console.log(error.message)
    }
}
</script>
<template>
    <div>
        <div class="flex justify-between h-[616px] my-4 py-[57px] bg-white">
            <div class="flex flex-col mx-12 ">
                <h1 class="text-[70px] font-bold leading-none  text-[#2E5F53]">Get Started</h1>
                <h1 class="py-4 text-2xl font-semibold ">with your Multiple Career Opportunity with OrbitalSpace</h1>
                <div class="flex py-6">
                    <button
                        class="bg-[#2E5F53] flex mr-10 text-lg w-fit text-white px-12 py-2 rounded-lg outline-none"><span
                            class="mx-2"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                fill="none">
                                <path
                                    d="M3.064 7.51C3.89601 5.85324 5.17237 4.46051 6.75043 3.48747C8.32849 2.51443 10.1461 1.99942 12 2C14.695 2 16.959 2.991 18.69 4.605L15.823 7.473C14.786 6.482 13.468 5.977 12 5.977C9.395 5.977 7.19 7.737 6.405 10.1C6.205 10.7 6.091 11.34 6.091 12C6.091 12.66 6.205 13.3 6.405 13.9C7.191 16.264 9.395 18.023 12 18.023C13.345 18.023 14.49 17.668 15.386 17.068C15.9054 16.726 16.3501 16.2822 16.6932 15.7635C17.0363 15.2448 17.2706 14.6619 17.382 14.05H12V10.182H21.418C21.536 10.836 21.6 11.518 21.6 12.227C21.6 15.273 20.51 17.837 18.618 19.577C16.964 21.105 14.7 22 12 22C10.6866 22.0005 9.38604 21.7422 8.17254 21.2399C6.95905 20.7375 5.85645 20.0009 4.92776 19.0722C3.99907 18.1436 3.2625 17.041 2.76013 15.8275C2.25777 14.614 1.99948 13.3134 2 12C2 10.386 2.386 8.86 3.064 7.51Z"
                                    fill="white" />
                            </svg></span>Sign In</button>
                    <button
                        class="bg-[#2E5F53] flex ml-10 text-lg w-fit text-white px-12 py-2 rounded-lg outline-none"><span
                            class="mx-2"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                fill="none">
                                <path
                                    d="M12 2C10.6868 2 9.38642 2.25866 8.17317 2.7612C6.95991 3.26375 5.85752 4.00035 4.92893 4.92893C3.05357 6.8043 2 9.34784 2 12C2 16.42 4.87 20.17 8.84 21.5C9.34 21.58 9.5 21.27 9.5 21V19.31C6.73 19.91 6.14 17.97 6.14 17.97C5.68 16.81 5.03 16.5 5.03 16.5C4.12 15.88 5.1 15.9 5.1 15.9C6.1 15.97 6.63 16.93 6.63 16.93C7.5 18.45 8.97 18 9.54 17.76C9.63 17.11 9.89 16.67 10.17 16.42C7.95 16.17 5.62 15.31 5.62 11.5C5.62 10.39 6 9.5 6.65 8.79C6.55 8.54 6.2 7.5 6.75 6.15C6.75 6.15 7.59 5.88 9.5 7.17C10.29 6.95 11.15 6.84 12 6.84C12.85 6.84 13.71 6.95 14.5 7.17C16.41 5.88 17.25 6.15 17.25 6.15C17.8 7.5 17.45 8.54 17.35 8.79C18 9.5 18.38 10.39 18.38 11.5C18.38 15.32 16.04 16.16 13.81 16.41C14.17 16.72 14.5 17.33 14.5 18.26V21C14.5 21.27 14.66 21.59 15.17 21.5C19.14 20.16 22 16.42 22 12C22 10.6868 21.7413 9.38642 21.2388 8.17317C20.7362 6.95991 19.9997 5.85752 19.0711 4.92893C18.1425 4.00035 17.0401 3.26375 15.8268 2.7612C14.6136 2.25866 13.3132 2 12 2Z"
                                    fill="white" />
                            </svg></span>Sign In</button>

                </div>
                <h1 class="text-[#8E8E8E]  text-lg mx-56 font-bold">OR</h1>

                <form class="w-[500px] mt-12" @submit.prevent="login()">
                    <div class="flex flex-col py-2">
                        <label class="font-bold">Email</label>
                        <input class="border-b-2 border-[#2E5F53]  py-2  outline-none font-medium" v-model="email" />
                    </div>
                    <div class="flex flex-col py-2">
                        <label class="font-bold">Password</label>
                        <input class="border-b-2 border-[#2E5F53] py-2  outline-none font-medium" v-model="password" />
                    </div>
                    <button
                        class="bg-[#2E5F53] mx-40 my-4 flex mr-4 text-lg w-fit text-white px-12 py-2 rounded-lg outline-none">Sign
                        In</button>

                </form>

            </div>
            <img src="../assets/images/heroImg.png" class="w-[500px] mr-8" />

        </div>
    </div>
</template>