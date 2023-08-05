/* eslint-disable qwik/jsx-img */
import {
  component$,
  useSignal,
  useStore,
  $,
  useTask$,
  useContext,
} from '@builder.io/qwik';
import './productCounter.scss';
import { getAllProducts } from '~/helpers/getAllProducts';
import { routeLoader$ } from '@builder.io/qwik-city';
import { useCounter } from '~/hooks/useCounter';
import Select from '~/components/shared/select/select';
import { SizeSelectedContext } from '~/context';
import { type DataOrder } from '~/interfaces/dataOrder';
import { Product } from '~/interfaces/product';
// import styled from '@emotion/styled';

export const useData = routeLoader$(async ({ params }) => {
  const allProducts = await getAllProducts();
  const objProducts = {
    prod: allProducts as Array<any>,
    idCurrent: Number(params.productId),
  };

  return objProducts;
});

export default component$(() => {
  const isShowDetail = useSignal(false);
  const dataProduct = useData();

  //*Seleccionar color
  const indexColor = useSignal(0)
  const colorSelected = useSignal('')

  //*array para las ordenes
  const totalOrder = useStore<{ array: DataOrder[] }>({ array: [] })

  const toggleShowDetail = $(() => {
    isShowDetail.value = !isShowDetail.value;
  });

  const currenteProduct = useStore<Product>({} as Product);

  useTask$(() => {
    const id = dataProduct.value.idCurrent;
    const product = dataProduct.value.prod.find((obj) => obj.id === id);
    currenteProduct.id = product.id;
    currenteProduct.title = product.title;
    currenteProduct.price = product.price;
    currenteProduct.description = product.description;
    currenteProduct.category = product.category;
    currenteProduct.image = product.image;
    currenteProduct.rating = product.rating;
  });

  const { counter, increase, decrease } = useCounter(0);

  const size = useStore({
    allSize: [
      { size: 'XS', id: 1 },
      { size: 'S', id: 2 },
      { size: 'M', id: 3 },
      { size: 'L', id: 4 },
      { size: 'XL', id: 5 },
    ],
  });

  //* usando SelectContext
  const selectOptionValue = useContext(SizeSelectedContext);
  console.log(selectOptionValue.id + ': ' + selectOptionValue.value);
  //*

  //*Mouse hover Event
  const refImage = useSignal<HTMLElement>();

  const handlerMouseover = $(() => {
    refImage.value!.classList.add('over');
  });
  const handlerMouseout = $(() => {
    refImage.value!.classList.remove('over');
  });

  const handlerMousemove = $((event: any) => {
    refImage.value!.style.transformOrigin =
      ((event.x - refImage.value!.offsetLeft) / refImage.value!.clientWidth) *
      100 +
      '%' +
      ((event.y - refImage.value!.offsetTop) / refImage.value!.clientHeight) *
      100 +
      '%';
  });
  const thereIsNotfication = useSignal(true)

  //*Se agrega la orden para su posterior pago
  const addOrder = $(() => {
    if (selectOptionValue.value === '' && counter.value <= 0) {
      thereIsNotfication.value = false;
    } else if ((selectOptionValue.value !== '') && (counter.value > 0)) {
      thereIsNotfication.value = true;
    } else {
      thereIsNotfication.value = false;
    }

    if (thereIsNotfication.value) {
      const dataOrder = {
        productColor: colorSelected.value,
        productQuantity: counter.value,
        productSize: selectOptionValue.value
      } as DataOrder
      totalOrder.array.push(dataOrder)
    }
    colorSelected.value = '';

    // counter.value=0,
  })

  const colors = ['Rojo', 'Verde', 'Amarillo', 'Blanco', 'Celeste', 'Rosado', 'Beige']
  const handleClickImage = $((ev: HTMLImageElement, index: number) => {
    colorSelected.value = ev.alt;
    indexColor.value = index
  })
  return (
    <div class="qwik__product">
      <main class="main__product">
        <div class="detail__content">
          <section class="section__img">
            <div class="info__detail">
              <img
                ref={refImage}
                class="img__product"
                src={currenteProduct.image}
                alt={currenteProduct.title}
                onMouseOver$={() => handlerMouseover()}
                onMouseOut$={() => handlerMouseout()}
                onMouseMove$={(event) => handlerMousemove(event as any)}
              />
              <span
                class={['drop__description', isShowDetail.value ? 'show' : '']}
              >
                {currenteProduct.description}
              </span>
            </div>
            <span onClick$={() => toggleShowDetail()} class="btn__detail">
              Ver detalles del producto
            </span>
            <h2 class="title__product font-b x1-2">{currenteProduct.title}</h2>
          </section>
          <section class="section__info">
            <article class="content__all-price">
              <span class="price x1-2">
                s/ {currenteProduct.price} por unidad
              </span>
            </article>
            <hr class='separator' />
            <article class="color__content">
              <div class="available__text x1-2">
                Colores y tallas disponibles
              </div>
              <div class="flex__table">
                <div class="color__section">
                  {
                    colors.map((color: string, index: number) => (
                      <div key={index} class={['color__item', indexColor.value === index ? 'active' : '']}>
                        <img onClick$={(ev) => handleClickImage(ev.target as HTMLImageElement, index as number)} src={currenteProduct.image} alt={color} />
                      </div>
                    ))
                  }
                </div>
                <div class="size__section">
                  <span class="size">
                    Talla <sup>*</sup>
                  </span>
                  <Select sizeObject={size}></Select>
                </div>
                <div class="quantety__section">
                  <span class="size">
                    Cantidad <sup>*</sup>
                  </span>
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
                <div class='recomendation'>
                  <div>
                    {
                      thereIsNotfication.value ? '' : (<p> Elija una talla y agregue cantidad</p>)
                    }

                  </div>
                  <button onClick$={addOrder} class='btn btn__outline'>Agregar pedido</button>
                </div>
              </div>
            </article>
          </section>
        </div>

        <section class="section__shop">
          <article class="ship__content">
            <span class="x1-2">Enviar a:</span>
            <div class="ship__desteni">
              <span class="icon glas-location_on"></span> Cusco
            </div>
          </article>
          <hr class='separator' />
          <article class="info__to-shiping">
            <p class="x1-2 line-h">Información de envío</p>
            <div class="price__shipping">Costo de envío a Cusco: S/15.00</div>
          </article>
          <hr class='separator' />
          <article class="recomendation__shiping">
            <p class="x1-2 line-h">Recomendaciones de envío</p>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugit
              temporibus sed quos recusandae veritatis iure provident
            </p>
          </article>
          <hr class='separator' />
          <article class="quantity__shiping">
            <p class="x1-2">Cantidad de productos</p>
            <div class='order__content'>
              {
                totalOrder.array.map((order: DataOrder, index: number) => (
                  <p key={index}>Color: {order.productColor} - Talla: {order.productSize}, {order.productQuantity} unidades</p>
                ))
              }
            </div>
            <p class="total__unit font-b">Total: 9 unidades</p>
            <p class="total__price font-b">costo Total: s/225.00</p>
          </article>
          <article class="btn__content">
            <button class="btn__add">
              <span class="icon icon-cart-shopping"></span>Agregar al carrito
            </button>
            <button class="btn__buy">Comprar ahora</button>
          </article>
        </section>
      </main>
    </div>
  );
});










