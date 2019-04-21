const chai = require('chai');
const expect = chai.expect;

const chaiHTTP = require('chai-http');
const server = require('../build/app');

chai.use(chaiHTTP);

describe('Main', () => {
    describe('GET /', () => {
        it('Should load \'Hello world\'', (done) => {
            chai.request(server)
                .get('/')
                .end((err, res) => {
                    expect(res.status).to.equal(200);
                    expect(res.text).to.equal('Hello world!');
                    done();
                })
        });
    });

    describe('GET /json/', () => {
        it('Should load Hello world as JSON', (done) => {
            chai.request(server)
                .get('/json/')
                .end((err, res) => {
                    expect(res.status).to.equal(200);
                    expect(JSON.parse(res.text)).to.haveOwnProperty('msg');
                    expect(JSON.parse(res.text)['msg']).to.equal('Hello world!');
                    done();
                })
        });
    });
});