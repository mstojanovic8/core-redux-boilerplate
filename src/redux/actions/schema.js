import { schema } from 'normalizr';
import { CONST } from '../../constants';

export const userSchema = new schema.Entity(
  CONST.entities.USERS_ENTITY_KEY,
  {},
  { idAttribute: ((entity) => parseInt(entity.id, 10)) }
);
