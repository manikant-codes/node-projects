const Order = require("../models/Order");
const Product = require("../models/Product");
const { sendErrorResponse } = require("../utils/serverUtils");

const fakeStripeAPI = async ({ amount, currency }) => {
  const clientSecret = "someRandomValue";
  return { clientSecret, amount };
};

const getAllOrders = async (req, res) => {
  const { items: cartItems, shippingFee, tax } = req.body;

  if (!cartItems || cartItems.length < 0) {
    return sendErrorResponse(res, "No cart items provided.", 400);
  }
  if (!tax || !shippingFee) {
    return sendErrorResponse(res, "No tax or shipping-fee provided.", 400);
  }

  let orderItems = [];
  let subTotal = 0;

  for (const item of cartItems) {
    const dbProduct = await Product.findOne({ _id: item.product });
    if (!dbProduct) {
      return sendErrorResponse(res, "No such product exists.", 400);
    }
    const { name, price, images, _id } = dbProduct;

    const singleOrderItem = {
      amount: item.amount,
      name,
      price,
      image: images[0],
      product: _id,
    };

    orderItems = [...orderItems, singleOrderItem];
    subTotal += item.amount * price;
  }

  const total = tax + shippingFee + subTotal;
  // Gett Client Secret
  const paymentIntent = await fakeStripeAPI({
    amount: total,
    currency: "USD",
  });

  const order = await Order.create({
    orderItems,
    total,
    subTotal,
    tax,
    shippingFee,
    clientSecret: paymentIntent.clientSecret,
    user: req.user.userId,
  });

  res.status(200).json({ order, clientSecret: paymentIntent.clientSecret });
};
const getSingleOrder = async (req, res) => {
  res.send("getSingleOrder");
};
const getCurrentUserOrders = async (req, res) => {
  res.send("getCurrentUserOrders");
};
const createOrder = async (req, res) => {
  res.send("createOrder");
};
const updateOrder = async (req, res) => {
  res.send("updateOrder");
};

module.exports = {
  getAllOrders,
  getSingleOrder,
  getCurrentUserOrders,
  createOrder,
  updateOrder,
};
