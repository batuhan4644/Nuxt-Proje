<template>
  <section
    class="pattern-group pattern-group-t-0 pattern-group-p-cart sticky-sidebar-992-2"
  >
    <div class="container">
      <div class="pattern-group-body">
        <div class="row">
          <div
            class="col-list col-12 d-block col-sm-12 d-sm-block col-md-12 d-md-block col-lg-9 d-lg-block col-xl-9 d-xl-block p-g-b-c-0"
          >
            <div class="p-g-b-c-wrapper">
              <div class="p-g-b-c-inner">
                <div
                  class="p-g-mod p-g-mod-t-31 p-g-mod-base-content p-g-mod-trans"
                >
                  <div class="p-g-mod-header p-g-mod-header-p-0">
                    <div class="p-g-m-h-info">
                      <div class="p-g-m-h-i-title">Sepet Listesi</div>
                    </div>
                  </div>
                  <div class="p-g-mod-body p-g-mod-body-p-0">
                    <div class="shopping-cart-1">
                      <div class="table-responsive">
                        <table class="table table-hover">
                          <thead>
                            <tr>
                              <th class="th-product">Ürün</th>
                              <th class="th-price">Fiyat</th>
                              <th class="th-quantity">Adet</th>
                              <th class="th-total-price">Tutar</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr data-cart-product-id="4072">
                              <td class="td-product">
                                <div class="product">
                                  <div class="image">
                                    <a
                                      href="https://www.toptanal.com/renkli-ahsap-denge-oyunu-urun3601.html"
                                      ><img
                                        class="lazy-load lazy-complete"
                                        alt=""
                                        src="https://www.toptanal.com/cdn/2/100/100/images/urunler/5fc50a217e3e8-49991.jpg"
                                        style=""
                                    /></a>
                                  </div>
                                  <div class="p-info">
                                    <a
                                      href="https://www.toptanal.com/renkli-ahsap-denge-oyunu-urun3601.html"
                                      class="name"
                                    >
                                      Renkli Ahşap Denge Oyunu
                                    </a>
                                    <div class="variants"></div>
                                    <button
                                      class="btn btn-danger btn-remove"
                                      type="button"
                                      onclick="removeCart(4072, 'refresh-page')"
                                    >
                                      Sil
                                    </button>
                                  </div>
                                </div>
                              </td>
                              <td class="td-price">
                                <span class="value"> 39,00 TL </span>
                              </td>
                              <td class="td-quantity">
                                <div class="product-quantity">
                                  <a
                                    href="/sepet"
                                    class="btn btn-minus"
                                    onclick="productQuantityBox(
                                                'decrement',
                                                'tr[data-cart-product-id=\'4072\'] .product-quantity'
                                            );
                                            updateCartQuantity(4072, 'table', 'tr[data-cart-product-id=\'4072\'] input', 'refresh-page');
                                            "
                                    ><i class="fas fa-minus"></i></a
                                  ><input
                                    class="form-control"
                                    data-base-value="1"
                                    name="quantity"
                                    min="1"
                                    max="9999"
                                    maxlength="4"
                                    value="1"
                                    onkeypress="return productQuantityBox(
                                                'change',
                                                'tr[data-cart-product-id=\'4072\'] .product-quantity',
                                                event
                                            );"
                                    onchange="updateCartQuantity(4072, 'table', 'tr[data-cart-product-id=\'4072\'] input', 'refresh-page');"
                                  /><a
                                    href="javascript:;"
                                    class="btn btn-plus"
                                    onclick="productQuantityBox(
                                                'increment',
                                                'tr[data-cart-product-id=\'4072\'] .product-quantity'
                                            );
                                            updateCartQuantity(4072, 'table', 'tr[data-cart-product-id=\'4072\'] input', 'refresh-page');
                                            "
                                    ><i class="fas fa-plus"></i
                                  ></a>
                                </div>
                              </td>
                              <td class="td-total-price">
                                <span class="value"> 39,00 TL </span>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                    <div class="shopping-buttons-1">
                      <a
                        href="/"
                        class="btn btn-light btn-continue"
                        ><i class="fa fa-chevron-left"></i> Alışverişe Devam Et
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            class="col-list col-12 d-block col-sm-12 d-sm-block col-md-12 d-md-block col-lg-3 d-lg-block col-xl-3 d-xl-block p-g-b-c-1"
          >
            <div class="p-g-b-c-wrapper">
              <div class="p-g-b-c-inner">
                <div
                  class="p-g-mod p-g-mod-t-37 p-g-mod-base-content p-g-mod-trans"
                >
                  <div class="p-g-mod-header p-g-mod-header-p-0">
                    <div class="p-g-m-h-info">
                      <div class="p-g-m-h-i-title">Sipariş Özeti</div>
                    </div>
                  </div>
                  <div class="p-g-mod-body p-g-mod-body-p-0">
                    <div class="payment-cart-summary-1">
                      <table class="table summary">
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
                    </div>
                  </div>
                </div>
                <div class="p-g-mod p-g-mod-t-38 p-g-mod-trans">
                  <div class="p-g-mod-body p-g-mod-body-p-0">
                    <div class="payment-final-buttons-1">
                      <a
                        href="/uye-giris"
                        class="btn btn-complete btn-theme-1"
                      >
                        Alışverişi Tamamla <i class="fa fa-chevron-right"></i
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
  </section>
</template>


