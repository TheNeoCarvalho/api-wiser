import request from 'supertest'
import app from './../app'

    describe('URL', () => {
        test('Deve retornar status 200', async() => {
            const response = await request(app)
            .post('/')
            .send({
                "url":"http://www.facebook.com",
                "dateExpired": "2021-02-25"
            })

            expect(response.status).toEqual(200)
        })

        test('Deve retornar status 404', async() => {
            const response = await request(app)
            .get('/ydgd6RD5')

            expect(response.status).toEqual(404)
        })

        test('Deve retornar link expirado', async() => {
            const response = await request(app)
            .get('/Q1j7nmYB')
            expect(response.body).toEqual({ msg: 'Link expired' })
        })
        
    })
