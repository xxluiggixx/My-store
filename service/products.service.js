const { faker } = require('@faker-js/faker');
const Boom  = require('@hapi/boom');

class ProductsService {
      constructor() {
        this.products = [];
        this.generate();
      }

      generate(){
        const limit = 100;
        for (let index = 0; index < limit; index++) {
            this.products.push({
              id: faker.datatype.uuid(),
              name: faker.commerce.productName(),
              price: parseInt(faker.commerce.price(),10),
              description: faker.commerce.productDescription(),
              image: faker.image.imageUrl()
          })
        }
      }

      create(data){
        const newPorduct = {
          id: faker.datatype.uuid(),
          ...data
        }
        this.products.push(newPorduct);
        return newPorduct;
      }

      find(){
        return new Promise((resolve, reject) => {
          setTimeout(()=>{
            resolve(this.products)
          }, 5000)
        })
      }

      findOne(id){
        const product = this.products.find(item => item.id === id);
        if (!product){
          throw Boom.notFound('product not found');
        }
        return product
      }

      update(id,change){
        const index = this.products.findIndex(item => item.id === id);
        if (index === -1) {
          throw new Error('product not found');
        }
        const product = this.products[index]
        this.products[index] = {
          ...product,
          ...change
        };
        return this.products[index];
      }

      delete(id){
        const index = this.products.findIndex(item => item.id === id);
        if (index === -1) {
          throw new Error('product not found');
        }
        this.products.splice(index,1);
        return{ message: true, id}
      }

/*       delete(id){
        return new Promise((resolve, reject) => {
          this.products.find(item => {
              if (item.id === id){
                this.products.splice(item.index,1)
                return resolve(true)
              }
              return resolve(false)
            })
        })
      } */
}

module.exports = ProductsService
