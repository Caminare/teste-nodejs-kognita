import * as express from 'express';

import auth from './authentication/auth.route';
import person from './people/people.route';

const router = express.Router();

router.use('/user/auth', auth);
router.use('/person', person);

export default router;
