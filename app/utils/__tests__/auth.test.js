import { signToken } from '../auth';
let user = {
  _id: 123,
  name: 'sa',
  email: 'ss@gmail.com',
};

const OLD_ENV = process.env;

beforeEach(() => {
  jest.resetModules();
  process.env = { ...OLD_ENV };
});

afterAll(() => {
  process.env = OLD_ENV; // Restore old environment
});
it('should return token', () => {
  process.env.JWT_SECRET = 'abcde';
  let token = signToken(user);
  // 188 is standard json web token length
  expect(token).toHaveLength(188);
});
