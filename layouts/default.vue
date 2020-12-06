<template>
  <div>
    <Navbar />
    <Megamenu />
    <Nuxt />
    <SubMenu />
  </div>
</template>

<script>
import Navbar from "@/components/Navbar";
import Megamenu from "../components/Megamenu.vue";
import SubMenu from '../components/SubMenu.vue';

export default {
  components: {
    Navbar,
    Megamenu,
    SubMenu,
  },
};
</script>

