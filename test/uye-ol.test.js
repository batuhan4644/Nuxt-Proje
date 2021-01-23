import { mount } from "@vue/test-utils";

import uyeol from "../pages/uye-ol.vue";

describe("uye-ol.vue", () => {
    let wrapper = mount(uyeol);
    it("There is a Yeni Üyelik", () => {
        expect(wrapper.text()).toContain("Yeni Üyelik");
    });
    it("There is a E-Posta", () => {
        expect(wrapper.text()).toContain("E-Posta");
    });


});