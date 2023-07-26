import { useOnWindow, $, type Signal } from '@builder.io/qwik';

//*Retorna ancho y alto
export const useResize = (ref: Signal<HTMLElement | undefined>) => {
  const rectContent = {
    widthSize: 0,
    HeightSize:0,
  };
  useOnWindow(
    'resize',
    $(() => {
      const result = ref.value!.getBoundingClientRect();
      rectContent.widthSize = result!.width;
      rectContent.HeightSize= result!.height;
    })
  );
  return rectContent;
};
