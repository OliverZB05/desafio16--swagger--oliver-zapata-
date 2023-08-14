import { Router } from 'express';
import { get_Products, getID_Products, post_Products, put_Products, delete_Products, mockingproducts, deleteMockingProducts } from '../../controllers/products.controller.js';

const router = Router();

//======== { Métodos GET } ========
router.get('/', get_Products);  
router.get('/:pid', getID_Products); 
//======== { Métodos GET } ========

//======== { Otros métodos } ========
router.put('/:pid', put_Products); 
router.post('/', post_Products);  

router.delete('/:pid', delete_Products); 


router.post('/mockingproducts', mockingproducts)
router.delete('/deleteMockingProducts', deleteMockingProducts);
//======== { Otros métodos } ========

export default router;