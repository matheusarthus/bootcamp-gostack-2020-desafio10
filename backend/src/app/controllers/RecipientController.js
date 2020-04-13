import * as Yup from 'yup';
import Recipient from '../models/Recipient';

const { Op } = require('sequelize');

class RecipientController {
  async index(req, res) {
    const { recipient, page, noLimit } = req.query;

    const limit = noLimit ? null : 10;
    const offset = noLimit ? 0 : (page - 1) * limit;

    const response = await Recipient.findAll({
      where: { name: { [Op.like]: `%${recipient}%` }, deleted_at: null },
      limit,
      offset,
      order: ['created_at'],
      attributes: [
        'id',
        'name',
        'logradouro',
        'numero',
        'complemento',
        'estado',
        'cidade',
        'cep',
        'deleted_at',
      ],
    });

    return res.json(response);
  }

  async store(req, res) {
    const schema = Yup.object().shape({
      name: Yup.string().required(),
      logradouro: Yup.string().required(),
      numero: Yup.number(),
      complemento: Yup.string().max(20),
      cidade: Yup.string().required(),
      estado: Yup.string().required(),
      cep: Yup.number()
        .required()
        .max(99999999),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation Fail' });
    }

    const recipientExist = await Recipient.findOne({
      where: { name: req.body.name },
    });

    if (recipientExist) {
      return res.status(400).json({ erro: 'Recipient already exists.' });
    }

    const {
      name,
      logradouro,
      numero,
      complemento,
      cidade,
      estado,
      cep,
    } = await Recipient.create(req.body);

    return res.json({
      name,
      adress: {
        logradouro,
        numero,
        complemento,
        cidade,
        estado,
        cep,
      },
    });
  }

  async update(req, res) {
    const schema = Yup.object().shape({
      name: Yup.string(),
      logradouro: Yup.string(),
      numero: Yup.number(),
      complemento: Yup.string().max(20),
      cidade: Yup.string(),
      estado: Yup.string(),
      cep: Yup.number().max(99999999),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation Fail' });
    }

    const recipient = await Recipient.findByPk(req.params.id);

    if (!recipient) {
      return res.status(400).json({ erro: 'Recipient does not exist.' });
    }

    const recipientDeleted = await Recipient.findOne({
      where: { id: req.params.id, deleted_at: null },
    });

    if (!recipientDeleted) {
      return res.status(400).json({ erro: 'Recipient deleted.' });
    }

    const {
      id,
      name,
      logradouro,
      numero,
      complemento,
      cidade,
      estado,
      cep,
    } = await recipient.update(req.body);

    return res.json({
      id,
      name,
      adress: {
        logradouro,
        numero,
        complemento,
        cidade,
        estado,
        cep,
      },
    });
  }

  async delete(req, res) {
    const recipient = await Recipient.findByPk(req.params.id);

    if (!recipient) {
      return res.status(400).json({ erro: 'Recipient does not exist.' });
    }

    recipient.deleted_at = new Date();

    await recipient.save();

    return res.json(recipient);
  }
}

export default new RecipientController();
