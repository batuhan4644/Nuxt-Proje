import { mount } from "@vue/test-utils";

import Megamenu from "../components/Megamenu.vue";

describe("Megamenu.vue", () => {
    let wrapper = mount(Megamenu);
    it("There is a 11.Yıla Özel", () => {
        expect(wrapper.text()).toContain("11. Yıla Özel");
    });
    it("There is a OYUN ALETLERİ", () => {
        expect(wrapper.text()).toContain(" OYUN ALETLERİ");
    });
    it("There is a peluş oyuncak", () => {
        expect(wrapper.text()).toContain("peluş oyuncak");
    });
    it("There is a Elektronik", () => {
        expect(wrapper.text()).toContain("Elektronik");
    });
    it("There is a Mobil & Mobil Aksesuar", () => {
        expect(wrapper.text()).toContain(" Mobil & Mobil Aksesuar");
    });
    it("There is a Powerbank", () => {
        expect(wrapper.text()).toContain("Powerbank");
    });
    it("There is a TV, Görüntü & Ses Sistemleri", () => {
        expect(wrapper.text()).toContain("TV, Görüntü & Ses Sistemleri");
    });
    it("There is a Ses Sistemleri", () => {
        expect(wrapper.text()).toContain(" Ses Sistemleri");
    });
    it("There is a Görüntü Sistemleri", () => {
        expect(wrapper.text()).toContain("Görüntü Sistemleri");
    });
    it("There is a Akıllı Saat & Bileklikler", () => {
        expect(wrapper.text()).toContain("Akıllı Saat & Bileklikler");
    });
    it("There is a Aydınlatma Sistemleri", () => {
        expect(wrapper.text()).toContain("Aydınlatma Sistemleri");
    });
    it("There is a Bilgisayar & Tablet", () => {
        expect(wrapper.text()).toContain("Bilgisayar & Tablet");
    });
    it("There is a Kişisel Bakım", () => {
        expect(wrapper.text()).toContain("Kişisel Bakım");
    });
    it("There is a Kişisel Bakım Aletleri", () => {
        expect(wrapper.text()).toContain("Kişisel Bakım Aletleri");
    });
});