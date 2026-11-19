const request = require('supertest');
const app = require('../server');
const mongoose = require('mongoose');

describe('Auth Endpoints', () => {
    beforeAll(async () => {
        process.env.NODE_ENV = 'test';
        // You might want to connect to a test database here
    });

    afterAll(async () => {
        await mongoose.connection.close();
    });

    it('should register a new user', async () => {
        const res = await request(app)
            .post('/api/auth/register')
            .send({
                username: 'testuser',
                email: 'test@example.com',
                password: 'password123'
            });
        
        expect(res.statusCode).toEqual(201);
        expect(res.body).toHaveProperty('message', 'User registered successfully');
    });

    it('should fail if required fields are missing', async () => {
        const res = await request(app)
            .post('/api/auth/register')
            .send({
                email: 'test2@example.com'
            });
        
        expect(res.statusCode).toEqual(500); // Or 400 depending on your error handling
    });
});