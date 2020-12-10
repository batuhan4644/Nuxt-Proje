<template>
  <section class="pattern-group pattern-group-t-0 pattern-group-p-product ">
    <div class="container">
      <div class="pattern-group-body">
           
        <div class="row">
            
          <div
            class="col-list col-12 d-block col-sm-12 d-sm-block col-md-12 d-md-block col-lg-12 d-lg-block col-xl-12 d-xl-block p-g-b-c-0"
          >
            <div class="p-g-b-c-wrapper">
              <div class="p-g-b-c-inner">
                <div
                  class="p-g-mod p-g-mod-t-13 p-g-mod-base-content  p-g-mod-trans   "
                >
                  <div class="p-g-mod-body  p-g-mod-body-p-0  ">
                    <div class="product-profile-1"  >
                      <div class="row">
                        <div class="col-lg-5">
                            
                          <div
                            id="product-profile-carousel-3580"
                            class="carousel slide"
                            data-ride="carousel"
                          >
                            <div class="carousel-outer">
                              <div class="carousel-inner">
                                <div class="carousel-item active">
                                  <a
                                    href="/"
                                    data-fancybox="images"
                                    data-caption="Xiaomi Mi Wifi Pro Sinyal Yakınlaştırıcı - Güçlendirici 300 Mbps"
                                    ><img
                                      :src="product.image"
                                      id="zoom_01"
                                      data-zoom-image="https://www.toptanal.com/cdn/2/700/700/images/urunler/5fc11cac4929c-49962.jpg"
                                      alt="Xiaomi Mi Wifi Pro Sinyal Yakınlaştırıcı - Güçlendirici 300 Mbps"
                                  /></a>
                                </div>
                              </div>
                            </div>
                            <ol class="carousel-indicators">
                              <li
                                data-target="#product-profile-carousel-3580"
                                data-slide-to="0"
                                class="active"
                              >
                                <img
                                  class="d-block w-100"
                                  src="https://www.toptanal.com/cdn/2/100/100/images/urunler/5fc11cac4929c-49962.jpg"
                                  alt="Xiaomi Mi Wifi Pro Sinyal Yakınlaştırıcı - Güçlendirici 300 Mbps"
                                />
                              </li>
                            </ol>
                          </div>
                        </div>
                        <div class="col-lg-7">
                          <h1 class="title">
                            {{product.title}}
                          </h1>
                          <ul class="product-profile-info">
                            <li>
                              <div class="product-reviews">
                                <div class="stars">
                                  <span class="star "
                                    ><i class="fa fa-star"></i></span
                                  ><span class="star "
                                    ><i class="fa fa-star"></i></span
                                  ><span class="star "
                                    ><i class="fa fa-star"></i></span
                                  ><span class="star "
                                    ><i class="fa fa-star"></i></span
                                  ><span class="star "
                                    ><i class="fa fa-star"></i
                                  ></span>
                                </div>
                              </div>
                            </li>
                            <li>
                              Ürün Kodu: <span class="value">ONQGY1BAF9</span>
                            </li>
                            <li>
                              Barkod: <span class="value">6242005772733</span>
                            </li>
                            <li>
                              Kategori:
                              <a
                                href="/mobil-mobil-aksesuar-c-185"
                                alt="Mobil &amp; Mobil Aksesuar"
                                ><span class="value"
                                  >Mobil &amp; Mobil Aksesuar</span
                                ></a
                              >
                            </li>
                            <li>
                              Stok:
                              <span class="value"
                                ><span class="text-success">20+</span></span
                              >
                            </li>
                            <li>
                              Fiyat
                            </li>
                            <li>
                              <div class="product-price-group">
                                <div class="prices">
                                  <div class="sale-price sale-variant-price">
                                    {{product.price}} TL
                                  </div>
                                </div>
                                <div class="free-cargo-badge">KARGO BEDAVA</div>
                              </div>
                            </li>
                          </ul>
                          <div class="product-buttons">
                            <div class="product-quantity">
                              <a
                                href="javascript:;"
                                class="btn btn-minus"
                               
                                ><i @click="decsreaseCount()" class="fas fa-minus"></i></a
                              ><span
                                class="form-control"
                                name="quantity"
                               
                                
                              >
                              {{count}}
                              </span><a
                                href="javascript:;"
                                class="btn btn-plus"
                               
                                ><i @click="count++" class="fas fa-plus"></i
                              ></a>
                            </div>
                            <button
                              class="btn btn-cart btn-color-1"
                              @click="addBasket"
                            >
                              <i class="fas fa-cart-plus"></i>
                              Sepete Ekle</button
                            ><button
                              class="btn btn-fast-buy btn-color-2"
                              
                            >
                              <i class="fas fa-lira-sign"></i>
                              Hemen Al</button
                            ><a
                              href="https://api.whatsapp.com/send?phone=9005544711414&amp;text=https://www.toptanal.com/xiaomi-mi-wifi-pro-sinyal-yakinlastirici-guclendirici-300-mbps-urun3580.html"
                              class="btn btn-wp"
                              target="_blank"
                              ><i class="fab fa-whatsapp"></i>
                              WHATSAPP İLE SİPARİŞ VER
                            </a>
                          </div>
                          <div
                            class="product-favourite"
                            data-favourite-product-id="3580"
                          >
                            <a
                              href="javascript:;"
                              class="d-block add-favorite"
                              onclick="userProductFavourite('add', 3580)"
                              ><i class="far fa-heart"></i>
                              Favorilerime ekle </a
                            ><a
                              href="javascript:;"
                              class="d-none remove-favorite"
                              onclick="userProductFavourite('remove', 3580)"
                              ><i class="fa fa-heart"></i>
                              Favorilerimden çıkar
                            </a>
                          </div>
                          <div class="product-badges">
                            <div class="p-badge shipping-fast">
                              <i class="fas fa-shipping-fast"></i
                              ><span>Hızlı Gönderi</span>
                            </div>
                            <div class="p-badge door-payment">
                              <i class="fas fa-shield-alt"></i
                              ><span>Güvenli Alışveriş</span>
                            </div>
                            <div class="p-badge credit-card">
                              <i class="fas fa-retweet"></i
                              ><span>İade ve Değişim</span>
                            </div>
                          </div>
                          <div class="social-share jssocials">
                            <div class="jssocials-shares">
                              <div
                                class="jssocials-share jssocials-share-twitter"
                              >
                                <a
                                  target="_blank"
                                  href="https://twitter.com/share?url=https%3A%2F%2Fwww.toptanal.com%2Fxiaomi-mi-wifi-pro-sinyal-yakinlastirici-guclendirici-300-mbps-urun3580.html&amp;text=Xiaomi%20Mi%20Wifi%20Pro%20Sinyal%20Yak%C4%B1nla%C5%9Ft%C4%B1r%C4%B1c%C4%B1%20-%20G%C3%BC%C3%A7lendirici%20300%20Mbps"
                                  class="jssocials-share-link"
                                  ><i
                                    class="fab fa-twitter jssocials-share-logo"
                                  ></i
                                ></a>
                              </div>
                              <div
                                class="jssocials-share jssocials-share-facebook"
                              >
                                <a
                                  target="_blank"
                                  href="https://facebook.com/sharer/sharer.php?u=https%3A%2F%2Fwww.toptanal.com%2Fxiaomi-mi-wifi-pro-sinyal-yakinlastirici-guclendirici-300-mbps-urun3580.html"
                                  class="jssocials-share-link"
                                  ><i
                                    class="fab fa-facebook-f jssocials-share-logo"
                                  ></i
                                ></a>
                              </div>
                              <div
                                class="jssocials-share jssocials-share-linkedin"
                              >
                                <a
                                  target="_blank"
                                  href="https://www.linkedin.com/shareArticle?mini=true&amp;url=https%3A%2F%2Fwww.toptanal.com%2Fxiaomi-mi-wifi-pro-sinyal-yakinlastirici-guclendirici-300-mbps-urun3580.html"
                                  class="jssocials-share-link"
                                  ><i
                                    class="fab fa-linkedin jssocials-share-logo"
                                  ></i
                                ></a>
                              </div>
                              <div
                                class="jssocials-share jssocials-share-whatsapp"
                              >
                                <a
                                  target="_self"
                                  href="whatsapp://send?text=https%3A%2F%2Fwww.toptanal.com%2Fxiaomi-mi-wifi-pro-sinyal-yakinlastirici-guclendirici-300-mbps-urun3580.html Xiaomi%20Mi%20Wifi%20Pro%20Sinyal%20Yak%C4%B1nla%C5%9Ft%C4%B1r%C4%B1c%C4%B1%20-%20G%C3%BC%C3%A7lendirici%20300%20Mbps"
                                  class="jssocials-share-link"
                                  ><i
                                    class="fab fa-whatsapp jssocials-share-logo"
                                  ></i
                                ></a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  name: "app",
  data: () => {
    return {
      count: 1,
     
    };
  },
  created() {
    const id = this.$route.params.id;
    this.$store.dispatch("product/initData");
    this.$store.dispatch("product/setProduct", parseInt(id));
  },
  computed: {
    product() {
      return this.$store.getters["product/getProduct"];
    }
  },
  methods: {
    decsreaseCount() {
      if (this.count > 1) {
        this.count--;
      }
    },
    addBasket() {
      const payload = {
        id: Math.random() * 1000,
        count: this.count,
        color: this.color,
        product: this.product
      };
      this.$store.dispatch("basket/addBasket", payload);
    }
  }
};
</script>
