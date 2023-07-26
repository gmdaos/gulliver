import { useSignal, $, useComputed$ } from '@builder.io/qwik';

export const useCounter = (initialValue:number) => {
  const counter = useSignal(initialValue);

  const incrementCounter = $(() => {
    counter.value++;
  });
  const decrementCounter = $(() => {
    if (counter.value <1)return;
    counter.value--;
  });

  return {
    decrease: decrementCounter,
    increase: incrementCounter,
    counter: useComputed$(() => counter.value),
  };
};
