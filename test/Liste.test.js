import { mount } from "@vue/test-utils";

import Liste from "../components/Liste.vue";

describe("Liste.vue", () => {
    let wrapper = mount(Liste);
    it("There is a Mobil & Mobil Aksesuar", () => {
        expect(wrapper.text()).toContain("Mobil & Mobil Aksesuar");
    });
    it("There is a Aydınlatma Sistemleri", () => {
        expect(wrapper.text()).toContain("Aydınlatma Sistemleri");
    });
    it("There is a Dat", () => {
        expect(wrapper.text()).toContain("Dat");
    });
    it("There is a Dearling", () => {
        expect(wrapper.text()).toContain("Dearling");
    });
    it("There is a 70 TL ve altı", () => {
        expect(wrapper.text()).toContain("70 TL ve altı");
    });
    it("There is a Sadece stoktakileri göster", () => {
        expect(wrapper.text()).toContain("Sadece stoktakileri göster");
    });
    it("There is a Seçimleri Temizle", () => {
        expect(wrapper.text()).toContain("Seçimleri Temizle");
    });



});