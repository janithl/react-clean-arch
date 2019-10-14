import { Item } from "./Item";

export interface ItemRepository {
  GetItems(): Promise<Item[]>;
}
