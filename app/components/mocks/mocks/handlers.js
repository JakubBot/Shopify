import { rest } from 'msw';

const user = {
  name: '',
  email: '',
  token: ''
};

export const handlers = [
  rest.post('/api/users/login', (req, res, ctx) => {
    return res(ctx.json(user));
  }),
];
