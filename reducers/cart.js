import {
  ADD_TO_CART,
  REMOVE_PRODUCT_FROM_CART,
  UPDATE_PRODUCT_QUANTITY,
} from "./../actions/cart";

export default function cartReducer(state = [], action) {
  switch (action.type) {
    case ADD_TO_CART:
      {
        const { product: productToAdd, quantity = 1 } = action.payload;
        const productsInCart = [...state];

        let isProductInCart = false;
        for (let i = 0; i < productsInCart.length; i++) {
          const product = productsInCart[i];

          if (product.id === productToAdd.id) {
            product.quantity = product.quantity + quantity;
            isProductInCart = true;
            break;
          }
        }

        if (!isProductInCart) {
          productToAdd.quantity = quantity;
          productsInCart.push(productToAdd);
        }
        return productsInCart;
      }
      break;

    case UPDATE_PRODUCT_QUANTITY:
      {
        const { productId, quantity: quantityToSet = 1 } = action.payload;

        const productsInCart = [...state];

        for (let i = 0; i < productsInCart.length; i++) {
          const product = productsInCart[i];

          if (product.id === productId) {
            product.quantity = parseInt(quantityToSet);
            break;
          }
        }
        return productsInCart;
      }
      break;

    case REMOVE_PRODUCT_FROM_CART:
      {
        return state.filter((product) => product.id !== action.payload);
      }
      break;
    default:
      return state;
  }
}
