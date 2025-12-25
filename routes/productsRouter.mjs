import { Router } from 'express'
import ProductsController from '../controllers/productsController.mjs'
import uploadMiddleware from '../middleware/uploadMiddleware.js'

const router = Router()

router.get('/', ProductsController.getAllProducts)
router.get('/create', ProductsController.getProductForm)

router.get('/update/:id', ProductsController.getProductForm)

router.get('/:id', ProductsController.getProductById)

router.post(
  '/create',
  uploadMiddleware.single('photo'),
  ProductsController.createProduct
)

router.post(
  '/update/:id',
  uploadMiddleware.single('photo'),
  ProductsController.updateProduct
)

router.delete('/', ProductsController.deleteProduct)

export default router
