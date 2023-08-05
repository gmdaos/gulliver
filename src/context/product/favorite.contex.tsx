import { createContextId } from "@builder.io/qwik";
import type { ListProducts } from "~/interfaces/product";

export const FavoriteItems = createContextId<ListProducts>('favorite-context')