<template>
  <section class="h-center">
    <div class="container">
      <div class="row">
        <div class="col-md-3">
          <div class="logo header-area">
            <a href="/"><img src="../assets/toptanalogo.png" alt="" /></a>
          </div>
        </div>
        <div class="col-md-6">
          <div class="header-area">
            <div class="search">
              <div class="easy-autocomplete" style="width: 527px">
                <form
                  action="/"
                  method="get"
                  data-smart-product-search=""
                  id="eac-5307"
                  autocomplete="off"
                >
                  <div class="input-box">
                    <input
                      type="text"
                      name="k"
                      class="form-control"
                      placeholder="Aramak istediğin ürünü yaz, kolayca bul!"
                    />
                  </div>
                  <button type="submit" class="btn btn-orange btn-send">
                    <img btn height="30" width="30" src="../assets/Search.PNG" href="/" />
                  
                  </button>
                </form>
                <div
                  class="easy-autocomplete-container"
                  id="eac-container-eac-5307"
                >
                  <ul></ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-3">
          <div class="header-area last">
            <div class="console-menu">
              <ul class="navbar-nav">
                <li class="nav-item dropdown">
                  <a
                    class="nav-link dropdown-toggle"
                    href="javascript:;"
                    id="console-menu-2"
                    role="button"
                    
                    ><img height="25" width="25" src="../assets/fa1.png" /><span>Hesabım</span></a
                  >
                  <div class="dropdown-menu" aria-labelledby="console-menu-2">
                    <ul class="auth-links">
                      <li>
                        <a href="/uye-giris">
                          <img height="15" width="15" src="../assets/a.PNG" />
                          Giriş Yap</a
                        >
                      </li>
                      <li>
                        <a href="/uye-ol"
                          >  <img height="15" width="15" src="../assets/b.PNG" />Üye Ol</a
                        >
                      </li>
                      <li>
                        <a href="/uye-girissayfasifre"
                          ><img height="15" width="15" src="../assets/c.PNG" /> Şifremi Unuttum</a
                        >
                      </li>
                    </ul>
                  </div>
                </li>
                <li class="nav-item dropdown header-cart-hover">
                  <a
                    class="nav-link dropdown-toggle"
                    href="/sepet"
                    id="console-menu-3"
                    role="button"
                  >
                    <img height="25" width="25" src="../assets/ShoppingCarticon.png" />
                    <span class="count" data-cart-quantity="">1</span></a
                  >
                  <div class="dropdown-menu" aria-labelledby="console-menu-3">
                    <div class="products" data-cart-products="">
                      <div class="ajax-shopping-cart">
                        <div class="product" data-ajax-cart-product-id="4032">
                          <div class="image">
                            <a
                              href="/sepetimage"
                              ><img
                                class=""
                                src="../assets/sepeturunkucuk1.jpg"
                                alt=""
                            /></a>
                          </div>
                          <div class="info">
                            <a
                              href="/sepet"
                              class="name"
                            >
                              Renkli Ahşap Denge Oyunu
                            </a>
                            <div class="variants"></div>
                            <div class="price">
                              <span class="value"> 39,00 TL X 1 Adet </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="summary" data-cart-summary="">
                      <div class="header-cart-summary-1">
                        <table class="table table-sm">
                          <tfoot>
                            <tr>
                              <th>Ürünler Toplamı</th>
                              <th>39,00 TL</th>
                            </tr>
                            <tr>
                              <th>Kargo</th>
                              <th>15,00 TL</th>
                            </tr>
                            <tr>
                              <th>
                                Genel Toplam <br />
                                (KDV Dahil)
                              </th>
                              <th><span class="final"> 54,00 TL </span></th>
                            </tr>
                          </tfoot>
                        </table>
                        <div class="buttons">
                          <a
                            href="/sepet"
                            class="btn btn-block btn-color-1"
                          >
                            Sepetim </a
                          ><a
                            href="/uye-giris"
                            class="btn btn-block btn-color-1"
                          >
                            Satın Al <img height="10" width="10" src="../assets/Right1.PNG" /></a>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>


