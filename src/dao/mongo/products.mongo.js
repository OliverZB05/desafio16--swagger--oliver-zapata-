import ProductRepository from '../../repositories/products.repository.js';

export default class Products {
    constructor() {
        this.productRepository = new ProductRepository();
    }

    get_Products = async (filter, options) => {
        const products = await this.productRepository.find(filter, options);
        return products;
    }

    getID_Products = async (pid) => {
        const product = await this.productRepository.findOne({ _id: pid });
        if (!product) {
            throw new Error('Product not found');
        }
        return product.toObject();
    }
    
    

    post_Products = async (prod) => {
        const result = await this.productRepository.create(prod);
        return result;
    }

    put_Products = async (pid, prod) => {
        const result = await this.productRepository.updateOne({ _id: pid }, prod);
        return result;
    }

    delete_Products = async (pid) => {
        const result = await this.productRepository.deleteOne({ _id: pid });
        return result;
    } 

    updateProductStock = async (productId, newStock) => {
        // Actualizar el stock del producto en la base de datos
        await this.productRepository.updateOne({ _id: productId }, { stock: newStock });
    }

    deleteMockingProducts = async () => {
        const result = await this.productRepository.deleteMany({ isMockingProduct: true });
        return result;
    }
    
}