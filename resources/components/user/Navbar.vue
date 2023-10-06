<template>
  <nav
  class="h-25 flex w-full flex-wrap items-center justify-between  bg-blue-700/80 py-2  lg:py-4">
    <div class=" flex w-full flex-wrap items-center justify-between px-3">
      <div class="mb-4">
      <a
        class="mx-2 my-1 flex items-center text-neutral-900 hover:text-neutral-900 focus:text-neutral-900 lg:-mb-4 lg:mt-0"
        href="#">
      <img
        src="https://ro11.ched.gov.ph/wp-content/uploads/2022/02/cropped-ched_logo.png"
        class="h-15 w-20 rounded-full"
        alt="" />
        </a>
    </div>
    <div class="mb-4 mr-auto text-white">
      <div class="font-semibold">Republic of the Philippines</div>
      <div class="font-semibold">COMMISSION ON HIGHER EDUCATION</div>
      <div class="font-semibold">Regional Office XI</div>
    </div>
    <div class="mb-4">
      <a
        class="mx-5 my-1 flex float-left items-center  text-neutral-900 hover:text-neutral-900 focus:text-neutral-900 lg:-mb-4 lg:mt-0 "
        href="#">
      <img
        src="https://ro11.ched.gov.ph/wp-content/themes/gwt-wordpress-25.3.3/images/transparency-seal-160x160.png"
        class=" h-15 w-20 rounded-full  "
        alt="" />
        </a>
        </div>
  </div>
</nav>
  </template>
  <script>
  export default {
    data() {
      return {
        showMenu: false
      }
    },
    methods: {
      toggleNavbar: function(){
        this.showMenu = !this.showMenu;
      }
    }
  }
  </script>