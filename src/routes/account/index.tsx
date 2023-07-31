/* eslint-disable qwik/jsx-img */
import { component$ } from '@builder.io/qwik';
import HeaderGeneral from '~/components/shared/header-general/headerGeneral';
import { QHelloReact } from '~/integrations/react/sayHello';

import './acount.scss'

export default component$(() => {

 
  return (
    <div class="qwik__content">
      <header class='header'>
        <HeaderGeneral>
          <span>Ok si esta funcionando</span>
        </HeaderGeneral>
      </header>
      <main class="main__account">
        <section class="account__info">
          <div class="account__info-box">
            <div class="account__info-avatar">
              <img src="/public/img/Jisoo.png" alt=""/>
            </div>
            <div class="account__info-name x1-5">Kim-Jisoo</div>
          </div>
          <div class="account__info-box">
            <div class="account__info-items">
              <div class="account__info-state-icon x1-5">
                <span class="icon icon-heart"></span>
              </div>
              <div class="account__info-state-text">Favoritos</div>
            </div>
            <div class="account__info-items">
              <div class="account__info-state-icon x1-5">
                <span class="icon icon-square-user"></span>
              </div>
              <div class="account__info-state-text">Siguiendo</div>
            </div>

            <div class="account__info-items">
              <div class="account__info-state-icon x1-5">
                <span class="icon icon-layer-group"></span>
              </div>
              <div class="account__info-state-text">Cupones</div>
            </div>
          </div>
        </section>
        <section class="account__order">
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
        </section>
        <section class="account__menu">
          <ul class="menu__item">
            <li>Perfil <span class='icon icon-chevronRight'></span></li>
            <li>Ordenes <span class='icon icon-chevronRight'></span></li>
            <li>Dirección de envio <span class='icon icon-chevronRight'></span></li>
            <li>Centro de mensajes <span class='icon icon-chevronRight'></span></li>
            <li>Centro de ayuda <span class='icon icon-chevronRight'></span></li>
            <li>Centro de ayuda <span class='icon icon-chevronRight'></span></li>
          </ul>
        </section>
      </main>
      <div>
        <QHelloReact></QHelloReact>
      </div>
    </div>
  );
});
