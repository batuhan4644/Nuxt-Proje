import { mount } from "@vue/test-utils";

import uyegirissayfasifre from "../pages/uye-girissayfasifre.vue";

describe("uye-girissayfasifre.vue", () => {
    let wrapper = mount(uyegirissayfasifre);
    it("There is a Şifremi Unuttum", () => {
        expect(wrapper.text()).toContain("Şifremi Unuttum");
    });
    it("There is a Giriş Yap", () => {
        expect(wrapper.text()).toContain("Giriş Yap");
    });


});