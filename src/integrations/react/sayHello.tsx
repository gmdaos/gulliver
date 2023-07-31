/** @jsxImportSource react */

import { qwikify$ } from '@builder.io/qwik-react';

// Creación del componente React de manera estándar
function HelloReact() {
  return (
    <>
      <div>Hola desde React</div>
      <span>Otro mas</span>
    </>
  );
}

export const QHelloReact = qwikify$(HelloReact);
