<template>
  <nav
    class="md:left-0 md:block md:fixed md:top-0 md:bottom-0 md:overflow-y-auto md:flex-row md:flex-nowrap md:overflow-hidden shadow-xl  bg-gray-300 flex flex-wrap items-center justify-between relative md:w-64 z-10 py-4 px-6"
  >
    <div
      class="md:flex-col md:items-stretch md:min-h-full md:flex-nowrap px-0 flex flex-wrap items-center justify-between w-full mx-auto"
    >
      <!-- Toggler -->
      <button
        class="cursor-pointer text-black opacity-50 md:hidden px-3 py-1 text-xl leading-none bg-transparent rounded border border-solid border-transparent"
        type="button"
        v-on:click="toggleCollapseShow('bg-white m-2 py-3 px-6')"
      >
        <i class="fas fa-bars"></i>
      </button>
      <!-- Brand -->
      <a
        class="md:block text-left md:pb-2 text-blueGray-600 mr-0 inline-block whitespace-nowrap text-sm uppercase font-bold p-4 px-0"
        href="javascript:void(0)"
      >
        WELCOME
      </a>
      <!-- User -->
      <ul class="md:hidden items-center flex flex-wrap list-none">
        <li class="inline-block relative">
        </li>
       
      </ul>
      <!-- Collapse -->
      <div
        class="md:flex md:flex-col md:items-stretch md:opacity-100 md:relative md:mt-4 md:shadow-none shadow absolute top-0 left-0 right-0 z-40 overflow-y-auto overflow-x-hidden h-auto items-center flex-1 rounded"
        v-bind:class="collapseShow"
      >
        <!-- Collapse header -->
        <div
          class="md:min-w-full md:hidden block pb-4 mb-4 border-b border-solid border-blueGray-200 items-center"
        >
          <div class="flex flex-wrap">
            <div class="w-6/12">
              <a
                class=" items-center md:block text-left md:pb-2 text-blueGray-600 mr-0 inline-block whitespace-nowrap text-sm uppercase font-bold p-4 px-0"
                href="javascript:void(0)"
              >
                Welcome 
              </a>
            </div>
            
          </div>
        </div>
        <!-- Form -->
       
        <!-- Navigation -->
        <ul class="md:flex-col md:min-w-full flex flex-col justify-between list-none">
          <li class="items-center">
            <a
              class="text-pink-500 hover:text-pink-600 text-xs uppercase py-6 font-bold block"
              href="#/dashboard"
              ><i class="fas fa-tv opacity-75 mr-2 text-sm"></i>
              Dashboard</a
            >
          </li>
          <li class="items-center">
            <a
              class="text-blueGray-700 hover:text-blueGray-500 text-xs uppercase py-6 font-bold block"
              href="#/landing"
              ><i class="fas fa-newspaper text-blueGray-400 mr-2 text-sm"></i>
             Tickets</a
            >
          </li>
          <li class="items-center">
            <a
              class="text-blueGray-700 hover:text-blueGray-500 text-xs uppercase py-6 font-bold block"
              href="#/profile"
              ><i class="fas fa-user-circle text-blueGray-400 mr-2 text-sm"></i>
              Analytics</a
            >
          </li>
          <li class="items-center">
            <router-link
              :to="'/admin/categories'"
              class="text-blueGray-700 hover:text-blueGray-500 text-xs uppercase py-6 font-bold block"
              ><i class="fas fa-fingerprint text-blueGray-400 mr-2 text-sm"></i>
              Categories</router-link
            >
          </li>
          <li class="items-center">
            <a
              class="text-blueGray-300 text-xs uppercase py-6 font-bold block"
              href="#pablo"
              ><i
                class="fas fa-clipboard-list text-blueGray-300 mr-2 text-sm"
              ></i>
              HEI</a
            >
          </li>
          <li class="items-center">
            <a
              class="text-blueGray-300 text-xs uppercase py-6 font-bold block"
              href="#pablo"
              ><i class="fas fa-tools text-blueGray-300 mr-2 text-sm"></i>
              CHED Services</a
            >
          </li>
        </ul>
        <!-- Divider -->
        <hr class="my-4 md:min-w-full" />
        
      </div>
    </div>
  </nav>
</template>
<script>
export default {
  data() {
    return {
      collapseShow: "hidden"
    };
  },
  methods: {
    toggleCollapseShow: function(classes) {
      this.collapseShow = classes;
    }
  },
 
};
</script>
