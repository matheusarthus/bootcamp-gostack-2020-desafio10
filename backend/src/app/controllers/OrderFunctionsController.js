import Order from '../models/Order';
import Deliveryman from '../models/Deliveryman';
import Recipient from '../models/Recipient';
import File from '../models/File';

class OrderFunctionsController {
  async index(req, res) {
    const deliveryman = await Deliveryman.findOne({
      where: {
        id: req.params.id,
      },
      attributes: ['id', 'name', 'email', 'createdAt'],
      include: [
        {
          model: File,
          as: 'avatar',
          attributes: ['id', 'path', 'url'],
        },
      ],
    });

    if (!deliveryman) {
      return res.status(400).json({ error: 'Deliveryman does not exist.' });
    }

    const orders = await Order.findAll({
      where: {
        deliveryman_id: req.params.id,
        canceled_at: null,
        end_date: null,
      },
      include: [
        {
          model: Recipient,
          as: 'recipient',
          attributes: ['name', 'logradouro', 'numero', 'cidade', 'estado'],
        },
      ],
    });

    if (!orders) {
      return res.status(400).json({ error: 'There are no orders.' });
    }

    const data = { deliveryman, orders };

    return res.json(data);
  }

  async update(req, res) {
    const order = await Order.findByPk(req.params.delivery_id);

    if (!order) {
      return res.status(400).json({ error: 'Delivery does not exist.' });
    }

    if (order.canceled_at !== null) {
      return res.status(400).json({ error: 'Delivery canceled.' });
    }

    if (order.end_date !== null) {
      return res.status(400).json({ error: 'Order already delivered.' });
    }

    if (order.start_date === null) {
      return res.status(400).json({ error: 'Delivery has not been initiated' });
    }

    const file = await File.findByPk(req.params.signature_id);

    if (!file) {
      return res
        .status(400)
        .json({ error: 'Signature does not exist in the database. ' });
    }

    order.signature_id = req.params.signature_id;
    order.end_date = new Date();

    await order.save();

    return res.json(order);
  }
}

export default new OrderFunctionsController();
