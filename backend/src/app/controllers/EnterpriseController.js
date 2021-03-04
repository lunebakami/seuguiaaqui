import * as Yup from 'yup';
import Enterprise from '../models/Enterprise';

class EnterpriseController {
  async store(req, res) {
    const schema = Yup.object().shape({
      name: Yup.string().required(),
      email: Yup.string()
        .email()
        .required(),
      password: Yup.string()
        .required()
        .min(6),
      phone: Yup.number(),
      latitude: Yup.number().required(),
      longitude: Yup.number().required(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation fails' });
    }

    const enterpriseExists = await Enterprise.findOne({
      where: { email: req.body.email },
    });

    if (enterpriseExists) {
      return res.status(400).json({ error: 'Enterprise already exists.' });
    }

    const {
      name,
      email,
      phone,
      password,
      description,
      latitude,
      longitude,
    } = req.body;

    const enterprise = {
      name,
      email,
      phone,
      password,
      description,
      localization: {
        type: 'Point',
        coordinates: [latitude, longitude],
      },
    };

    const { id, localization } = await Enterprise.create(enterprise);

    return res.json({
      id,
      name,
      email,
      description,
      localization,
    });
  }

  async index(req, res) {
    const enterprises = await Enterprise.findAll({
      attributes: ['id', 'name', 'phone', 'email', 'localization'],
    });

    return res.json(enterprises);
  }

  async show(req, res) {
    const { id } = req.params;

    const enterprise = await Enterprise.findByPk(id, {
      attributes: ['name', 'email', 'phone', 'description', 'localization'],
    });

    if (!enterprise) {
      return res.status(400).json({ error: "Enterprise doesn't exists" });
    }

    return res.json(enterprise);
  }
}

export default new EnterpriseController();
