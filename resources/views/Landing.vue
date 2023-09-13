<template>
  <div>
    <navbar-component></navbar-component>
    <main>
      <div
        class="relative pt-16 pb-32 flex content-center items-center justify-center"
        style="min-height: 85vh;"
      >
        <div
          class="absolute top-0 w-full h-full bg-center bg-cover"
          :style="{'background-image': 'url(' + require('../assets/img/ched-office.jpg').default + ')'}"
        >
          <span
            id="blackOverlay"
            class="w-full h-full absolute opacity-75 bg-black"
          ></span>
        </div>
        <div class="container relative mx-auto">
          <div class="items-center flex flex-wrap">
            <div class="w-full lg:w-6/12 px-4 ml-auto mr-auto text-center">
              <div class="pr-12">
                <h1 class="text-white font-semibold text-4xl">
                  CHEDRO XI: Complaint Hotline Center
                </h1>
                <p class="mt-4 text-lg text-gray-300">
                  "Your feedback is the compass that guides us toward improvement.
                   We value your complaints as opportunities to enhance our service and make your experience better."
                </p>
              </div>
            </div>
          </div>
        </div>
        <div
          class="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden"
          style="height: 70px;"
        >
          <svg
            class="absolute bottom-0 overflow-hidden"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
            version="1.1"
            viewBox="0 0 2560 100"
            x="0"
            y="0"
          >
            <polygon
              class="text-gray-500 fill-current"
              points="2560 0 2560 100 0 100"
            ></polygon>
          </svg>
        </div>
      </div>
      <section class="pb-20 bg-gradient-to-r from-blue-200 to-slate-300 -mt-30">
        <div class="container mx-auto px-4">
          <div class="flex justify-center ">
            <div class="w-full md:w-4/12 px-8 ">
              <div
                class=" mt-[-130px] relative flex flex-row min-w-0 break-words w-full mb-8 "
              >
                <div class="px-4 py-5 flex-auto">
                  <a href="#cform"
                  data-te-smooth-scroll-init
                  data-te-duration="2000"
                  class="w-64 bg-blue-500 hover:bg-blue-700 text-white  font-bold py-2 px-4 rounded-md inline-flex  items-center justify-center">
                    <span>File Complaint</span>
                  </a>
                </div>
              </div>
            </div>
            <div class="w-full md:w-4/12 px-8 ">
              <div
                class="mt-[-130px] relative flex flex-row min-w-0 break-words w-full mb-8 "
              >
                <div class="px-4 py-5 flex-auto">
                  <a href="#trace"
                  data-te-smooth-scroll-init
                  data-te-offset="100"
                  class=" w-64 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md inline-flex items-center justify-center">
                   
                    <span>Track & Trace</span>
                  </a>
              
                </div>
              </div>
            </div>
            
          </div>
          <div class=" h-fit flex flex-wrap items-center mt-auto ">
            <div id="cform" class=" w-full md:w-8/12 px-4 mr-auto ml-auto mt-36 ">
              <ComplaintComponent></ComplaintComponent>
            </div>
            <div class="w-full md:w-4/12 px-4 mr-auto ml-auto mt-40">
              <div
                class="relative flex flex-col min-w-0 break-words bg-gradient-to-r from-gray-500 to-blue-500 w-full mb-6 shadow-lg rounded-lg"
              >
                <img
                  alt="..."
                  src="../assets/img/ched-office.jpg"
                  class="w-full align-middle rounded-t-lg"
                />
                <blockquote class="relative p-8 mb-4">
                  <svg
                    preserveAspectRatio="none"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 583 95"
                    class="absolute left-0 w-full block"
                    style="height: 95px; top: -94px;"
                  >
                    <polygon
                      points="-30,95 583,95 583,65"
                      class="text-slate-300 fill-current"
                    ></polygon>
                  </svg>
                  <h4 class="text-xl font-bold text-white">
                    CHED Complaint Center
                  </h4>
                  <p class="text-md font-light mt-2 text-white">
                    "Effective complaint management turns dissatisfaction into an opportunity for improvement."
                  </p>
                </blockquote>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class=" relative py-20 bg-gradient-to-r from-blue-200 to-slate-300">
        <div
          class=" bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20"
          style="height: 80px;"
        >
          <svg
            class="absolute bottom-0 overflow-hidden"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
            version="1.1"
            viewBox="0 0 2560 100"
            x="0"
            y="0"
          >
            <polygon
              class="text-gray-500 fill-current"
              points="2560 0 2560 100 0 100"
            ></polygon>
          </svg>
        </div>
        <div class=" max-h-fit container mx-auto px-4">
          <div class="items-center flex flex-wrap">
            <div class="w-full md:w-6/12 ml-auto mr-auto px-4">
              <img
                alt="..."
                class="max-w-full rounded-lg shadow-lg"
                src="../assets/img/tracking.png"
              />
            </div>
            <div class="w-full md:w-6/12 ml-auto mr-auto px-4">
              <div id="trace" class="md:pr-12">
                <track-component></track-component>
            </div>
          </div>
          </div>
        </div>
      </section>
          
    </main>

  </div>
</template>

<script>
import {
  SmoothScroll,
  initTE,
} from "tw-elements";

initTE({ SmoothScroll });
import NavbarComponent from "../components/user/Navbar.vue";
import FooterComponent from "../components/user/Footer.vue";
import ComplaintComponent from "../components/user/Complaints.vue"
import TrackComponent from "../components/user/Track.vue"
export default{
  name: "landing-page",
  components: {
    NavbarComponent,
    FooterComponent,
    ComplaintComponent,
    TrackComponent

  }
}


</script>