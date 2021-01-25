import { mount, createLocalVue, config, shallowMount } from "@vue/test-utils";
import Navbar from "../components/Navbar.vue";
import { getters, mutations, actions, state } from "../store/basket";

config.mocks["$store"] = {
    state: {...state },
    getters: {
        "basket/getBasketItems": {...state }
    },
    actions: {
        "basket/removeBasketItem": {...actions }
    },
    mutations: {
        ...mutations
    }
};

describe("Navbar.vue", () => {
    it("Render", () => {
        let wrapper = shallowMount(Navbar);
        expect(wrapper.text()).toContain("Giriş Yap");
    });
    it("Render", () => {
        let wrapper = shallowMount(Navbar);
        expect(wrapper.text()).toContain("Üye Ol");
    });
    it("Render", () => {
        let wrapper = shallowMount(Navbar);
        expect(wrapper.text()).toContain("Şifremi Unuttum");
    });
    it("Render", () => {
        let wrapper = shallowMount(Navbar);
        expect(wrapper.text()).not.toContain("Çıkış Yap");
    });
    it("Render", () => {
        let wrapper = shallowMount(Navbar);
        expect(wrapper.text()).toContain("Ürünler Toplamı");
    });
    it("Render", () => {
        let wrapper = shallowMount(Navbar);
        expect(wrapper.text()).toContain("Sepetim");
    });
    it("Render", () => {
        let wrapper = shallowMount(Navbar);
        expect(wrapper.text()).toContain("Satın Al");
    });
});