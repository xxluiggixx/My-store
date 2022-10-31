const { faker } = require('@faker-js/faker');

class CategoriesService {
      constructor() {
        this.categories = [];
        this.generate();
      }

      generate(){
        const limit = 100;
        for (let index = 0; index < limit; index++) {
            this.categories.push({
              id: faker.datatype.uuid(),
              vehicle: faker.vehicle.vehicle(),
              model: faker.vehicle.model()
          })
        }
      }

      find(){
        return this.categories
      }

      findOne(id){
        return this.categories.find(item => item.id === id);
      }

      update(id, change){
        const index = this.categories.findIndex(item => item.id === id);
        if (index === -1 ){
          throw new Error('Categorie not found');
        }
        const categorie = this.categories[index];
        this.categories[index] = {
          ...categorie,
          ...change
        }
        return this.categories[index]
      }

      delete(id){
        const index = this.categories.findIndex(item => item.id === id);
        if (index === -1 ){
          throw new Error('Categorie not found');
        }
        this.categories.splice(index,1);
        return {
          message: 'deleted',
          id
        }
      }
}

module.exports = CategoriesService
