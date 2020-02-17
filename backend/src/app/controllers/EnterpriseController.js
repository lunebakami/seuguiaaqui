import Enterprise from '../schemas/Enterprise';

class EnterpriseController {
  async store(req, res) {
    const { bio, latitude, longitude } = req.body;

    const { userId } = req.userId;

    const location = {
      type: 'Point',
      coordinates: [longitude, latitude],
    };

    const enterprise = await Enterprise.create({
      bio,
      user_id: userId,
      location,
    });

    return res.json(enterprise);
  }
}

export default new EnterpriseController();
