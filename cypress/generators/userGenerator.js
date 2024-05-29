import { faker } from '@faker-js/faker';

const getRandomUser = () => {
    return {
        firstName: faker.name.firstName(),
        lastName: faker.name.lastName(),
        username: faker.internet.userName(),
        password: faker.internet.password(),
        email: faker.internet.email()
    };
};

export default getRandomUser;