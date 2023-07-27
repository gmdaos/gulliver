import { createContextId } from '@builder.io/qwik';

export interface SizeSelected {
  value: string;
  id?: number | string;
}

export const SizeSelectedContext =
  createContextId<SizeSelected>('select-context');
