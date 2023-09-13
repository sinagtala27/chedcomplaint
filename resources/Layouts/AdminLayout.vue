<template>
    <div>
      <sidebar-component />
      <div class="relative md:ml-64 bg-blueGray-100" >
        <navbar-component />
        <header-component/>
        <div class=" mx-auto w-full max-w-screen-xl ">
          <router-view/>

        </div>
      </div>
    </div>
  </template>
  <script>
    import NavbarComponent from  "../components/admin/NavbarAdmin.vue"
    import SidebarComponent from "../components/admin/SidebarAdmin.vue"

    import HeaderComponent from "../components/admin/HeaderAdmin.vue"
  export default {
    name: "admin-layout",
    components: {
    HeaderComponent,
    NavbarComponent,
    SidebarComponent,

    },
  };
  </script>