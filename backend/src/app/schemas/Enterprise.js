import mongoose from 'mongoose';
import PointSchema from './utils/PointSchema';

const EnterpriseSchema = new mongoose.Schema({
  bio: String,
  user_id: {
    type: Number,
    required: true,
  },
  location: {
    required: true,
    type: PointSchema,
    index: '2dsphere',
  },
});

export default mongoose.model('Enterprise', EnterpriseSchema);
