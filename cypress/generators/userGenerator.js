import { faker } from '@faker-js/faker';

const ensureMinLength = (generator, minLength) => {
  let result;
  let maxAttempts = 10;
  for (let i = 0; i < maxAttempts; i++) {
    result = generator();
    if (result.length >= minLength) return result;
  }
  throw new Error('Unable to generate a name of the minimum length');
};

const generateFirstName = () => {
  return ensureMinLength(faker.person.firstName, 4);
};

const generateLastName = () => {
  return ensureMinLength(faker.person.lastName, 4);
};

const generateUser = () => {
  return {
    username: faker.internet.userName(),
    password: faker.internet.password(),
    firstName: generateFirstName(),
    lastName: generateLastName(),
    email: faker.internet.email()
  };
};

export default generateUser;