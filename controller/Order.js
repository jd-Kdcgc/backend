const { Order } = require("../model/Order");

exports.fetchAllOrdersByFilters = async (req, res) => {
  let query = Order.find();
  let totalOrdersQuery = Order.find();

  if (req.query._sort && req.query._order) {
    query = query.sort({ [req.query._sort]: req.query._order });
  }
  if (req.query._page && req.query._limit) {
    const page = req.query._page;
    const pageSize = req.query._limit;
    query = query.skip(pageSize * (page - 1)).limit(pageSize);
  }

  const totalCount = await totalOrdersQuery.count().exec();

  try {
    const docs = await query.exec();
    res.set("X-Total-Count", totalCount);
    res.status(200).json(docs);
  } catch (err) {
    res.status(400).json(err);
  }
};

exports.fetchOrdersByUserId = async (req, res) => {
  const { userId } = req.params;
  try {
    const orders = await Order.find({ user: userId });
    res.status(200).json(orders);
  } catch (err) {
    res.status(400).json(err);
  }
};

exports.addOder = async (req, res) => {
  const order = new Order(req.body);
  try {
    const doc = await order.save();
    res.status(201).json(doc);
  } catch (err) {
    res.status(400).json(err);
  }
};

exports.deleteOrder = async (req, res) => {
  const { id } = req.params;
  try {
    const order = await Order.findByIdAndDelete(id);
    res.status(201).json(order);
  } catch (err) {
    res.status(400).json(err);
  }
};

exports.updateOrder = async (req, res) => {
  const { id } = req.params;

  try {
    const order = await Order.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    res.status(200).json(order);
  } catch (err) {
    res.status(400).json(err);
  }
};
