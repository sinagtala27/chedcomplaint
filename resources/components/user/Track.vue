<template>
    <div class="block max-w-xl rounded-lg bg-cyan-200/50 p-2  shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
    <form>
      <div class="container mx-auto justify-center">
        <div class=" border-blue-900/10 pb-10">
          <h2 class=" mt-10 text-center font-bold leading-7 text-gray-800 ">Track your Complaint Ticket</h2>
          
          <div class=" flex mb-4 ">
            <div class="  w-full">
                <label for="email" class="block text-sm font-medium leading-6 text-gray-900"></label>
                <div class="mt-2">
                  <input id="email" name="email" type="email" autocomplete="email" class="block w-full rounded-md border-0 px-3 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-7"
                   placeholder="                                       Enter TicketID" />
                </div>
          </div>
         </div>
          
        <div class="mt-2 flex flex-col items-center justify-center">
          <button
          type="button"
          @click="openModal"
          class="rounded-md bg-blue-500  px-4 py-2 text-sm font-medium text-white hover:bg-blue-700 focus:outline-none "
         > TRACK</button>
            </div>
         </div>
         <!-- Modal -->
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
            <div class="fixed inset-0 bg-black bg-opacity-25 " />
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
                 Ticket ID is:________. Tracking Details:
                 -
                 -
                 -
                 ********
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
      </form>
    </div> 
</template>
   <script setup>
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
