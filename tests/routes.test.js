const request = require('supertest');
const app = require('../app.js');

describe('Endpoints', () => {
    it('should return main view', async () => {
        const res = await request(app).get('/');
        expect(res.statusCode).toEqual(200);
        expect(res.type).toEqual(expect.stringContaining('text/html'));
    });

    it('should return details view', async () => {
        const res = await request(app).get('/ticket/1');
        expect(res.statusCode).toEqual(200);
        expect(res.type).toEqual(expect.stringContaining('text/html'));
    });
});

afterAll((done) => {
    app.close(() => {
        done();
    });
});
