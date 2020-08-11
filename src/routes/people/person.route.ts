import * as express from 'express';
import PersonController from '../../controller/PersonController';
const router = express.Router();

router.post('/create', PersonController.create);
router.post('/create-many', PersonController.createMany);
router.get('/find/:id', PersonController.findOne);
router.get('/find-many', PersonController.findMany);
router.delete('/delete/:id', PersonController.deleteOne);
router.delete('/delete-many', PersonController.deleteMany);
router.put('/update', PersonController.updateOne);
router.put('/update-many', PersonController.updateMany);

export default router;