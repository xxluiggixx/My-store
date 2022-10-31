const { faker } = require('@faker-js/faker');

class UsersService {
      constructor() {
        this.users = [];
        this.generate();
      }

      generate(){
        const limit = 100;
        for (let index = 0; index < limit; index++) {
            this.users.push({
              id: faker.datatype.uuid(),
              name: faker.name.firstName(),
              lastname: faker.name.lastName(),
              job: faker.name.jobTitle()
          })
        }
      }

      find(){
        return this.users
      }

      findOne(id){
        return this.users.find(item => item.id === id);
      }

      update(id, change){
        const index = this.users.findIndex(item => item.id === id);
        if (index === -1 ){
          throw new Error('Categorie not found');
        }
        const user = this.users[index];
        this.users[index] = {
          ...user,
          ...change
        }
        return this.categories[index]
      }

      delete(id){
        const index = this.users.findIndex(item => item.id === id);
        if (index === -1 ){
          throw new Error('Categorie not found');
        }
        this.users.splice(index,1);
        return {
          message: 'deleted',
          id
        }
      }
}

module.exports = UsersService
