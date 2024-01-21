
<script setup>
const showToast=ref(false)
function submitForm(){
    showToast.value = true;

setTimeout(() => {
  showToast.value = false;
}, 1000);
}
</script>
<template>
  <div>
    <div class="px-12 py-6 my-4 h-[616px] bg-white">
      <p class="text-2xl font-semibold mx-1 text-[#2E5F53]">
        Create a Post to Hire fresh talent with exceptional skills, reducing
        your search efforts and elevating your workforce effortlessly
      </p>
      <div class="flex flex-col py-8">
        <form @submit.prevent="submitForm">

            <div class="flex justify-between my-4">
                <input class="px-4 py-2 drop-shadow-md bg-white  rounded-md border font-semibold  outline-none w-[600px] border-[#2E5F53]" placeholder="Job Title"/>
                <input class="px-4 py-2 drop-shadow-md bg-white  rounded-md border font-semibold  outline-none w-[600px] border-[#2E5F53]" placeholder="Organization Name" />
        </div>
        <input class="px-4 py-2 my-4 rounded-md border font-semibold  outline-none w-full h-[134px] border-[#2E5F53]" placeholder="Job Title"/>
        <div class="flex justify-between my-4">
            <input class="px-4 py-2 drop-shadow-md bg-white  rounded-md border outline-none font-semibold  border-[#2E5F53]" placeholder="Stipend" />
            <input class="px-4 py-2 drop-shadow-md bg-white  rounded-md border outline-none font-semibold  border-[#2E5F53] "  placeholder="Duration" />
            <input class="px-4 py-2 drop-shadow-md bg-white  rounded-md border outline-none font-semibold  border-[#2E5F53]" placeholder="No of openings" />
            <input class="px-4 py-2 drop-shadow-md bg-white  rounded-md border outline-none font-semibold  border-[#2E5F53] "  placeholder="Location/Remote" />
        </div>
        <input class="px-4 py-2 my-4  drop-shadow-md bg-white rounded-md border w-full font-semibold  outline-none  border-[#2E5F53]" placeholder="Skills Required (You can add multiple skills Separated by Commas)"/>
        <button @click="submitForm" class="bg-[#2E5F53] my-4 w-fit text-lg text-white px-8 py-2 rounded-lg outline-none">Submit</button>
        
    </form>
    <div v-if="showToast" class="px-12 rounded-md toast"> Post added!</div>
  
    </div>
    </div>
  </div>
</template>
