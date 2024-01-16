<template>
    <div>
        <div class=" bg-white my-4  px-12 py-7">

            <form
          class="bg-[#2e5f532e] flex flex-col w-fit h-fit mx-auto items-center   py-[37px] px-8 rounded-md">
          <div class="flex justify-between">
            <div class="flex flex-col mr-3 lg:my-1">
              <label class="text-[#2E5F53] text-md lg:text-lg py-1">First Name</label>
              <input class="h-[48px] rounded-md outline-none px-3  w-[150px] lg:w-[210px]" />
            </div>
            <div class="flex flex-col ml-3 lg:my-1">
              <label class="text-[#2E5F53] text-md lg:text-lg  py-1">Last Name</label>
              <input class="h-[48px] rounded-md outline-none px-3 w-[150px] lg:w-[210px]" />
            </div>
          </div>
          <div class="flex flex-col lg:my-1">
            <label class="text-[#2E5F53] text-md lg:text-lg  py-1">Email Id</label>
            <input class="h-[48px] rounded-md outline-none px-3 w-[320px] lg:w-[450px]" />
          </div>
          <div class="flex flex-col justify-start lg:my-1">
            <label class="text-[#2E5F53] text-md lg:text-lg  py-1">Your message</label>
            <input class="h-[180px] rounded-md outline-none  px-3 w-[320px] lg:w-[450px]" />
          </div>
          <button
            class="bg-[#2E5F53] my-4 py-2 px-4 rounded-md lg:text-lg  text-white w-fit">
            Submit
          </button>
        </form>
        </div>
    </div>
</template>