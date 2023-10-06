<template>
    <div class="block max-w-xl rounded-lg bg-cyan-200/50 p-2  shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
    <form>
      <div class="container mx-auto px-7 flex justify-center">
        <div class=" border-blue-900/10 pb-10">
          <h2 class=" text-center font-bold leading-7 text-gray-900 ">Complaint Form</h2>
          <p class="mt-1 mb-1 text-sm leading-6 text-gray-600">The information you will provide is private and will stay private.</p>
          
          <div class="flex mb-4 ">
            <div class="w-1/2 px-2">
              <label for="email" class="block text-sm font-medium leading-6 text-gray-900">(OPTIONAL) Name:</label>
              <div class="mt-2">
                <input id="email" name="email" type="email" autocomplete="email" class="block w-full rounded-md border-0 px-3 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
              </div>
            </div>

            <div class="w-1/2 px-2">
              <label for="email" class="block text-sm font-medium leading-6 text-gray-900">Email:</label>
              <div class="mt-2">
                <input id="email" name="email" type="email" autocomplete="email" class="block w-full rounded-md border-0 px-3 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
              </div>
            </div>

          </div>
         
          <div class="flex mb-4 ">

            <div class="w-1/2 px-2">
            <label for="category" class="block text-sm font-medium leading-6 text-gray-900">Complaint Category</label>
            <div class="mt-2">
              <select id="categoryID" name="categoryName" autocomplete="country-name" class="block w-full rounded-md border-0 px-3 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6">
                <option>HEI related</option>
                <option>CHED Services</option>
              </select>
            </div>
          </div>

          <div class="w-1/2 px-2">
            <label for="street-address" class="block text-sm font-medium leading-6 text-gray-900"> HEI Related Concerns</label>
            <div class="mt-2">
                <select data-te-select-init disabled id="categoryID" name="categoryName" autocomplete="country-name" class="block w-full rounded-md border-0 px-3 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6">
      
                </select>
            </div>
          </div>
          </div>


          <div class="w-1/2 px-2">
            <label for="street-address" class="block text-sm font-medium leading-6 text-gray-900">CHED Services Concerns</label>
            <div class="mt-2">
                <select data-te-select-init disabled id="categoryID" name="categoryName" autocomplete="country-name" class="block w-full rounded-md border-0 px-3 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6">
      
                </select>
            </div>
          </div>
         
          
          <div class="flex mb-4 px-2">


          <div class="col-span-3 w-full ">
            <label for="about" class="block text-sm font-medium leading-6 text-gray-900">Complaint Statement</label>

            <div class="mt-2">
              <textarea id="about" name="about" rows="3" class="block w-full rounded-md border-0 px-3 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
            </div>

            <div class="mb-3">
              <label
                for="formFile"
                class="mb-2 inline-block text-neutral-700 dark:text-neutral-200"
                >Supporting Documents</label
              >
              <input
                class="relative m-0 block w-full min-w-0 flex-auto rounded-md border-0 border-neutral-300 bg-clip-padding px-3 py-[0.32rem] text-base font-normal text-neutral-700 transition duration-300 ease-in-out file:-mx-3 file:-my-[0.32rem] file:overflow-hidden file:rounded-none file:border-0 file:border-solid file:border-inherit file:bg-neutral-100 file:px-3 file:py-[0.32rem] file:text-neutral-700 file:transition file:duration-150 file:ease-in-out file:[border-inline-end-width:1px] file:[margin-inline-end:0.75rem] hover:file:bg-neutral-200 focus:border-primary focus:text-neutral-700 focus:shadow-te-primary focus:outline-none dark:border-neutral-600 dark:text-neutral-200 dark:file:bg-neutral-700 dark:file:text-neutral-100 dark:focus:border-primary"
                type="file"
                id="formFile" />
            </div>
          </div>


          
          </div>
          <div class="flex flex-col items-center justify-center">
            <label for="about" class="block text-sm font-medium leading-6 text-gray-900">Rate your Sentiment About this Complain</label>
            <div class="mt-1 mb-2">
             <rating-component></rating-component>
          </div>

        </div>
        <div class="mt-2 flex flex-col items-center justify-center">
          <button
          type="button"
          @click="openModal"
          class="rounded-md bg-blue-500  px-4 py-2 text-sm font-medium text-white hover:bg-blue-700 focus:outline-none "
         >
          Submit
         </button>
       </div>
       <TransitionRoot appear :show="isOpen" as="template">
        <Dialog as="div" @close="closeModal" class="relative z-10">
         <TransitionChild
          as="template"
          enter="duration-300 ease-out"
          enter-from="opacity-0"
          enter-to="opacity-100"
          leave="duration-200 ease-in"
          leave-from="opacity-100"
          leave-to="opacity-0"
         >
          <div class="fixed inset-0 bg-black bg-opacity-25" />
         </TransitionChild>
      
         <div class="fixed inset-0 overflow-y-auto">
          <div
           class="flex min-h-full items-center justify-center p-4 text-center"
          >
           <TransitionChild
            as="template"
            enter="duration-300 ease-out"
            enter-from="opacity-0 scale-95"
            enter-to="opacity-100 scale-100"
            leave="duration-200 ease-in"
            leave-from="opacity-100 scale-100"
            leave-to="opacity-0 scale-95"
           >
            <DialogPanel
             class="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all"
            >
             <DialogTitle
              as="h3"
              class="text-lg font-medium leading-6 text-gray-900"
             >
             Successful
             </DialogTitle>
             <div class="mt-2">
              <p class="text-sm text-gray-500">
               Ticket ID is:________. A copy reference number is sent to your email.
              </p>
             </div>
      
             <div class="mt-4">
              <button
               type="button"
               class="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
               @click="closeModal"
              >
               Got it, thanks!
              </button>
             </div>
            </DialogPanel>
           </TransitionChild>
          </div>
         </div>
        </Dialog>
       </TransitionRoot>
       </div>
      </div>
    </form>
    </div>
  </template>
  
  <script setup>
  import RatingComponent from './Rating.vue';
  import { ref } from 'vue'
  import {
  TransitionRoot,
  TransitionChild,
  Dialog,
  DialogPanel,
  DialogTitle,
  } from '@headlessui/vue'
  const isOpen = ref(false)

  function closeModal() {
  isOpen.value = false
  }
  function openModal() {
  isOpen.value = true
  }


  </script>