import * as Yup from 'yup';

import Deliveryman from '../models/Deliveryman';
import File from '../models/File';

const { Op } = require('sequelize');

class DeliverymanController {
  async index(req, res) {
    const { deliveryman, page } = req.query;

    const limit = 10;
    const offset = (page - 1) * limit;

    const deliverymen = await Deliveryman.findAll({
      where: {
        name: { [Op.like]: `%${deliveryman}%` },
        deleted_at: null,
      },
      limit,
      offset,
      order: ['created_at'],
      attributes: ['id', 'name', 'email', 'deleted_at'],
      include: [
        {
          model: File,
          as: 'avatar',
          attributes: ['id', 'path', 'url'],
        },
      ],
    });

    return res.json(deliverymen);
  }

  async store(req, res) {
    const schema = Yup.object().shape({
      name: Yup.string().required(),
      email: Yup.string()
        .email()
        .required(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation Fail' });
    }

    const deliveryman = await Deliveryman.findOne({
      where: { name: req.body.name },
    });

    if (deliveryman && deliveryman.deleted_at == null) {
      return res.status(400).json({ erro: 'Deliveryman already exists.' });
    }

    const emailExist = await Deliveryman.findOne({
      where: { email: req.body.email },
    });

    if (emailExist) {
      return res
        .status(400)
        .json({ erro: "Deliveryman's email ready exists." });
    }

    if (deliveryman && deliveryman.deleted_at !== null) {
      deliveryman.deleted_at = null;

      await deliveryman.save();

      return res.json(deliveryman);
    }

    const { id, name, email } = await Deliveryman.create(req.body);

    return res.json({ id, name, email });
  }

  async update(req, res) {
    const schema = Yup.object().shape({
      name: Yup.string(),
      email: Yup.string().email(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation Fail' });
    }

    const deliveryman = await Deliveryman.findByPk(req.params.id);

    if (!deliveryman) {
      return res.status(400).json({ erro: 'Deliveryman does not exist.' });
    }

    const deliverymanDeleted = await Deliveryman.findOne({
      where: { id: req.params.id, deleted_at: null },
    });

    if (!deliverymanDeleted) {
      return res.status(400).json({ erro: 'Deliveryman deleted.' });
    }

    if (req.body.email) {
      const emailExist = await Deliveryman.findOne({
        where: { email: req.body.email },
      });

      if (emailExist) {
        return res
          .status(400)
          .json({ erro: "Deliveryman's email ready exists." });
      }
    }

    const { id, name, email } = await deliveryman.update(req.body);

    return res.json({ id, name, email });
  }

  async delete(req, res) {
    const deliveryman = await Deliveryman.findByPk(req.params.id);

    if (!deliveryman) {
      return res.status(400).json({ erro: 'Deliveryman does not exist.' });
    }

    deliveryman.deleted_at = new Date();

    await deliveryman.save();

    return res.json(deliveryman);
  }
}

export default new DeliverymanController();
