import { useOnDocument, type QRL, type Signal, $ } from '@builder.io/qwik';

//*Detecata click de un contenedor pasado en la referencia como ref:
export const useClickOutSide = (
  ref: Signal<HTMLElement>,
  onClickOut: QRL<() => void>
) => {
  useOnDocument(
    'click',
    $((event: Event) => {
      // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
      if (!ref.value) return;
      const currentElement = event.target as HTMLElement;
      if (!ref.value.contains(currentElement)) {
        onClickOut;
      }
    })
  );
};
