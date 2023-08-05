/* eslint-disable qwik/jsx-img */
import { component$ } from '@builder.io/qwik';
import HeaderGeneral from '~/components/shared/header-general/headerGeneral';
import './shoppingCart.scss'
import { useCounter } from '~/hooks/useCounter';

export default component$(() => {
  const { counter, increase, decrease } = useCounter(0);
  // const enableBtn = useSignal<boolean>(false)
  // const refContainer = useSignal<Element>()
  return (
    <div class='qwik__cart'>
      <header>
        <HeaderGeneral>
          <span class='icon icon-square-user x1-5'></span>
        </HeaderGeneral>
      </header>
      <main class='main__cart'>
        <div class='cart'>
          <div class='cart__header'>
            <div class='cart__header-title font-b x1-2'>
              Carrito de compra (2) cantidad
            </div>
            <label class='cart__header-check' for="checkAll">
              <input type="checkbox" id='checkAll' />
              <span class='check__all'></span>
              Seleccionar todo
            </label>
            <div class='cart__header-couriers'></div>
          </div>
          <div class='cart__list-content'>
            <div class='cart__store-block'>
              <div class='cart__product'>
                <img src="/public/img/gris.jpg" alt="" />
                <div class='cart__product-info'>
                  <div class='cart__info'>
                    <div class='cart__info-title'>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</div>
                    <div class='cart__info-detail'>
                      <p class=''>Color: Verde</p>
                      <p class='devider-v'></p>
                      <p class=''>Talla: S</p>
                    </div>

                  </div>
                  <div>Unidad: S/15.00</div>
                  <div>Sub total: S/105.00</div>
                </div>
              </div>
              <div class='shop__detail'>
                <div class='cart__store-btn'>
                  <div class='cart__counter'>
                    <span class='quantity__item'>Cantidad:</span>
                    <div class="counter">
                      <span
                        onClick$={() => decrease()}
                        class="decress icon icon-square-minus"
                      ></span>
                      <span class="view__counter">{counter.value}</span>
                      <span
                        onClick$={() => increase()}
                        class="increment icon icon-square-plus"
                      ></span>
                    </div>
                  </div>
                  <span class='icon icon-trash'></span>
                  <span class='icon icon-heart'></span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class='summary'>
          <div class='summary__items'>
            <div class='sumamry__items-store'>

            </div>

          </div>
        </div>
      </main>
    </div>
  )
});