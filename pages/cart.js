import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateProductQuantity } from "../actions/cart";
import { deleteProduct } from "./../actions/cart";

const calculateProductsTotal = (products) =>
  products.reduce(
    (total, product) => total + product.selling_price * product.quantity,
    0
  );
export default function Cart() {
  const cartProducts = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  return (
    <div class="cart-box-main">
      {cartProducts.length > 0 && (
        <div class="container">
          <div class="row">
            <div class="col-lg-12">
              <div class="table-main table-responsive">
                <table class="table">
                  <thead>
                    <tr>
                      <th>Images</th>
                      <th>Product Name</th>
                      <th>Price</th>
                      <th>Quantity</th>
                      <th>Total</th>
                      <th>Remove</th>
                    </tr>
                  </thead>
                  <tbody>
                    {cartProducts.map((product) => {
                      return (
                        <tr>
                          <td class="thumbnail-img">
                            <a href="#">
                              <img
                                class="img-fluid"
                                src={`images/${product.featured_image}`}
                                alt=""
                              />
                            </a>
                          </td>
                          <td class="name-pr">
                            <a href="#">{product.name}</a>
                          </td>
                          <td class="price-pr">
                            <p>
                              {product.currency} {product.selling_price}
                            </p>
                          </td>
                          <td class="quantity-box">
                            <input
                              type="number"
                              size="4"
                              value={product.quantity}
                              min="1"
                              step="1"
                              onChange={(e) => {
                                dispatch(
                                  updateProductQuantity(
                                    product.id,
                                    e.target.value
                                  )
                                );
                              }}
                              class="c-input-text qty text"
                            />
                          </td>
                          <td class="total-pr">
                            <p>
                              {product.currency}{" "}
                              {product.selling_price * product.quantity}
                            </p>
                          </td>
                          <td class="remove-pr">
                            <a
                              role="button"
                              onClick={dispatch.bind(
                                null,
                                deleteProduct(product.id)
                              )}
                            >
                              <i class="fas fa-times"></i>
                            </a>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          <div className="row my-5">
            <div className="col-lg-8 col-sm-12"></div>
            <div className="col-lg-4 col-sm-12">
              <div className="order-box">
                <h3>Order summary</h3>
                <div className="d-flex">
                  <h4>Sub Total</h4>
                  <div className="ml-auto font-weight-bold">
                    ₹ {calculateProductsTotal(cartProducts)}
                  </div>
                </div>
                <hr className="my-1" />
                <div className="d-flex">
                  <h4>Shipping Cost</h4>
                  <div className="ml-auto font-weight-bold"> Free </div>
                </div>
                <hr />
                <div className="d-flex gr-total">
                  <h5>Grand Total</h5>
                  <div className="ml-auto h5">
                    ₹{calculateProductsTotal(cartProducts)}
                  </div>
                </div>
                <hr />
              </div>
            </div>
            <div className="col-12 d-flex shopping-box">
              <a href="checkout.html" className="ml-auto btn hvr-hover">
                Checkout
              </a>
            </div>
          </div>
        </div>
      )}
      {cartProducts.length === 0 && <p>No Products In Cart</p>}
    </div>
  );
}
