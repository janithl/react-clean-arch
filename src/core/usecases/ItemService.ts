import { Item } from "../entities/Item";
import { ItemRepository } from "../entities/ItemRepository";

export interface ItemService {
  GetItems(): Promise<Item[]>;
}

export class ItemServiceImpl implements ItemService {
  itemRepo: ItemRepository;

  constructor(ir: ItemRepository) {
    this.itemRepo = ir;
  }

  async GetItems(): Promise<Item[]> {
    return this.itemRepo.GetItems();
  }
}
