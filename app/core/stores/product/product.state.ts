
export interface ProductItem {
  id: number;
  name: string;
  description: string;
  price: string;
  created: string;
  color: string;
  likes: number;
  comments: number;
  picture: string;
}

export class ProductState {
  position = 0;
  searchDisabled = false;
  items: ProductItem[] = null;
}

class ProductStateFns {

  // update function
  updatePosition(
    state: ProductState,
    position: number
  ): ProductState {
    return {
      ...state,
      position
    }
  }

  disableSearch(
    state: ProductState,
    searchDisabled: boolean
  ): ProductState {
    return {
      ...state,
      searchDisabled
    }
  }

  addLike(
    state: ProductState,
    value: { id: number, likes: number }
  ): ProductState {
    return {
      ...state,
      items: _udateItemsProp(
        state.items, 'likes', 
        value.id, 
        value.likes
      ),
    }
  }

  addComment(
    state: ProductState,
    value: { id: number, comments: number }
  ): ProductState {
    return {
      ...state,
      items: _udateItemsProp(
        state.items, 'comments', 
        value.id, value.comments
      ),
    }
  }

  replaceItems(
    state: ProductState, 
    items: ProductItem[]
  ): ProductState {
    return {
      ...state,
      items,
    }
  }

}

export const productState = new ProductState;
export const productStateFns = new ProductStateFns;


// helper function
function _udateItemsProp<K extends keyof ProductItem>(
  items: ProductItem[],
  prop: K,
  id: number,
  value: number,
): ProductItem[] {
  const k = prop as string;
  return items.map(i => {
    return i.id !== id
      ? i
      : { ...i, [k]: value }
  })
}