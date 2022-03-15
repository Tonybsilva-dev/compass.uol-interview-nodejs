import request from 'supertest';
import { app } from '../../../../shared/http/app';

describe('Find User Controller', () => {
  request('http://localhost:3333');
  let userID = '23cd601f-449e-4368-b005-284c9b86513a'

  it('sould be able to GET a user', async () => {
    await request(app).get(`/api/users/find/${userID}`)
      .expect(200)
      
  })
})