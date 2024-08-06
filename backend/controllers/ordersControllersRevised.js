const Order = require("../models/Order");
const Product = require("../models/Product");
const { sendErrorResponse } = require("../utils/serverUtils");

const fakeStripeAPI = async () => {
  const clientSecret = "someRandomValue";
  return { clientSecret };
};

const getAllOrders = async (req, res) => {
  res.send("getAllOrders");
};

const getSingleOrder = async (req, res) => {
  res.send("getSingleOrder");
};

const getCurrentUserOrders = async (req, res) => {
  res.send("getCurrentUserOrders");
};

const createOrder = async (req, res) => {
  try {
    const { cartItems } = req.body;

    console.log("cartItems", cartItems);

    if (!cartItems || !cartItems.length) {
      return sendErrorResponse(res, "Cart items are required!");
    }

    let orderItems = [];
    let tax = 0;
    let deliveryCharges = 0;
    let subtotal = 0;

    for (const item of cartItems) {
      const product = await Product.findById(item.productId);
      if (!product) {
        return sendErrorResponse(res, "No such cart item exists!");
      }

      const singleOrderItem = {
        name: product.name,
        image: product.images[0],
        price: product.price,
        qty: item.qty,
        product: product._id,
      };

      orderItems = [...orderItems, singleOrderItem];

      tax += (product.taxRate * product.price) / 100;
      deliveryCharges += product.deliveryCharges;
      subtotal += product.price;
    }

    const total = subtotal + tax + deliveryCharges;
    const clientSecret = await fakeStripeAPI();

    const order = await Order.create({
      tax,
      deliveryCharges,
      subtotal,
      total,
      orderItems,
      user: req.user.userId,
      clientSecret: clientSecret.clientSecret,
    });

    res.status(200).json({ success: true, order: order });
  } catch (error) {
    sendErrorResponse(res, error.message);
  }
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
