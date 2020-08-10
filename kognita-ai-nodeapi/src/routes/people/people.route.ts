import * as express from 'express';
import PeopleController from '../../controller/PeopleController';
const router = express.Router();

router.post('/create', PeopleController.create);
router.post('/create-many', PeopleController.createMany);
router.get('/find/:id', PeopleController.findOne);
router.get('/find-many', PeopleController.findMany);
router.delete('/delete/:id', PeopleController.deleteOne);
router.delete('/delete-many', PeopleController.deleteMany);
router.put('/update', PeopleController.updateOne);
router.put('/update-many', PeopleController.updateMany);

export default router;