import { faker } from '@faker-js/faker';

const getRandomUser = () => {
    return {
        firstName: faker.person.firstName(),
        lastName: faker.person.lastName(),
        username: faker.internet.userName(),
        password: faker.internet.password(),
        email: faker.internet.email()
    };
};

export default getRandomUser;