/* eslint-disable qwik/jsx-img */
import { component$, useSignal, $, useStore } from '@builder.io/qwik';
import HeaderGeneral from '~/components/shared/header-general/headerGeneral';
import { Link, routeLoader$ } from '@builder.io/qwik-city';

import './acount.scss';
import { getAllProducts } from '~/helpers/getAllProducts';

export const useAllproducts = routeLoader$(async () => {
  const response = await getAllProducts();
  return response;
});



export default component$(() => {
  const isShowCheckbox = useSignal(false);
  const isSelectAll = useSignal(false);
  const enableBtn = useSignal(false);

  const allFavorites = useAllproducts()


  //*obtener todos los inputs con check
  const refContainer = useSignal<Element>()
  const countCheckbox = useSignal(0)
  const arrayCheckbox = useStore({ arrChecks: [] as any })

  const gettAllCheckbox = $(() => {
    const checkboxes = refContainer.value?.querySelectorAll('input[type=checkbox]')
    arrayCheckbox.arrChecks = Array.from(checkboxes!).filter((e: any) => e.checked)
    return arrayCheckbox
  })

  const inputHandler = $(async () => {
    const { arrChecks } = await gettAllCheckbox()
    countCheckbox.value = Object.keys(arrChecks).length
    if (countCheckbox.value > 0) {
      enableBtn.value = true
    } else if (countCheckbox.value === 0) {
      enableBtn.value = false
    }
  })

  const toogleShowChecked = $(() => {
    isShowCheckbox.value = !isShowCheckbox.value;
  });

  const toggleSelectAll = $(async () => {
    isSelectAll.value = !isSelectAll.value
    const checkboxes = refContainer.value?.querySelectorAll('input[type=checkbox]')

    checkboxes?.forEach((input: any) => {
      console.log(input);
    })
    // const count =  Array.from(checkboxes!).filter((e:any)=>e.checked)


    if (countCheckbox.value > 0) {
      enableBtn.value = true
    } else {
      enableBtn.value = !enableBtn.value;
    }
    if (!isSelectAll.value && (countCheckbox.value === 0 || checkboxes?.length === 0)) {
      enableBtn.value = false
    }

  });

  //*show favorites
  const isShowFavorites = useSignal(false)
  const showfavorites = $(() => {
    isShowFavorites.value = !isShowFavorites.value
  })
  return (
    <div class="qwik__account">
      <header class="header">
        <HeaderGeneral>
          <span>Ok si esta funcionando</span>
        </HeaderGeneral>
      </header>
      <main class="main__account">
        <section class=' section__main'>
          <article class="account__info">
            <div class="account__info-box">
              <div class="account__info-avatar">
                <img src="/public/img/Jisoo.png" alt="" />
              </div>
              <div class="account__info-name x1-5">Kim-Jisoo</div>
            </div>
            <div class="account__info-box">
              <button onClick$={showfavorites} class="account__info-items">
                <span class="icon icon-heart x1-5"></span>
                <div class="account__info-state-text">Favoritos</div>
              </button>
              <button class="account__info-items">
                <span class="icon icon-square-user x1-5"></span>
                <div class="account__info-state-text">Siguiendo</div>
              </button>
              <button class="account__info-items">
                <span class="icon icon-layer-group x1-5"></span>
                <div class="account__info-state-text">Cupones</div>
              </button>
            </div>
          </article>
          <article class="account__order">
            <div class="accoun__order-view">
              <p>Mis ordenes</p>
              <p>Ver todas las ordenes</p>
            </div>
            <hr />
            <div class="accoun__order-content">
              <div class="account__order-status">
                <div class="account__info-state-icon">
                  <span class="icon icon-money-check-dollar x1-5"></span>
                </div>
                <div class="account__info-state-text">Por enviar </div>
              </div>
              <div class="account__order-status">
                <div class="account__info-state-icon">
                  <span class="icon icon-money-check-dollar x1-5"></span>
                </div>
                <div class="account__info-state-text">Enviado</div>
              </div>
              <div class="account__order-status">
                <div class="account__info-state-icon">
                  <span class="icon icon-money-check-dollar x1-5"></span>
                </div>
                <div class="account__info-state-text">Por revisado</div>
              </div>
            </div>
          </article>
          <article class={['account__favorites', isShowFavorites.value ? 'show' : '']}>
            <div class="favorites__navbar">
              <span class="navbar__items">
                Favoritos
              </span>
              <div
                onClick$={() => toogleShowChecked()}
                class="navbar__items btn-edit"
              >
                {isShowCheckbox.value ? <span class="icon icon-chevronLeft"></span> : <span class="icon icon-fire"></span>}
                {isShowCheckbox.value ? 'Terminar edición' : 'Editar'}
              </div>
            </div>
            <hr class="separator" />
            <div ref={refContainer} class="favorites__list-container">
              {
                allFavorites.value.map((product: any) => (
                  <div key={product.id} class="favorites__list-items">
                    <div class="list__item-img">
                      <Link href="">
                        <img src={product.image} alt="" />
                      </Link>
                    </div>
                    <div class="list__items-info">
                      <p class="items__title">
                        {product.title}
                      </p>
                      <p class="items__title">S/{product.price}</p>
                      <div class="buttons">
                        <label for={product.id}>
                          <input
                            onInput$={inputHandler}
                            type="checkbox"
                            id={product.id}
                            checked={isSelectAll.value ? true : false}
                          />
                          <span
                            class={['checkbox', isShowCheckbox.value ? 'show' : '']}
                          ></span>
                        </label>
                        <button
                          class="btn btn__favorite"
                          disabled={isShowCheckbox.value ? true : false}
                        >
                          Agregar <span class="icon icon-cart-shopping"></span>
                        </button>
                        <button
                          class="btn btn__favorite trash"
                          disabled={isShowCheckbox.value ? true : false}
                        >
                          <span class="icon icon-trash"></span>
                        </button>
                      </div>
                    </div>
                  </div>
                ))
              }
              <div class={['select__items-content', isShowCheckbox.value ? 'show' : '']}>
                <div class="select__items-btns">
                  <label for="all">
                    <input onInput$={toggleSelectAll} type="checkbox" name="" id="all" />
                    <span class="check__all"></span>
                    Seleccionar todo
                  </label>
                  <button
                    class="btn btn__outline"
                    disabled={enableBtn.value ? false : true}
                  >
                    Eliminar <span class="icon icon-trash"></span>
                  </button>
                  <button
                    class="btn btn__outline"
                    disabled={enableBtn.value ? false : true}
                  >
                    Agregar al <span class="icon icon-cart-shopping"></span>
                  </button>
                </div>
              </div>
            </div>
          </article>
          <article>
            {/* <Test></Test> */}
          </article>
        </section>
        <section class="section__menu">
          <ul class="menu__item">
            <li>
              Perfil <span class="icon icon-chevronRight"></span>
            </li>
            <li>
              Ordenes <span class="icon icon-chevronRight"></span>
            </li>
            <li>
              Dirección de envio <span class="icon icon-chevronRight"></span>
            </li>
            <li>
              Centro de mensajes <span class="icon icon-chevronRight"></span>
            </li>
            <li>
              Centro de ayuda <span class="icon icon-chevronRight"></span>
            </li>
            <li>
              Centro de ayuda <span class="icon icon-chevronRight"></span>
            </li>
          </ul>
        </section>
      </main>
      {/* <div>
        <QHelloReact></QHelloReact>
      </div> */}

    </div>
  );
});
