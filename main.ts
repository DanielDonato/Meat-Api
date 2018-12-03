import * as restify from 'restify';

const server = restify.createServer({
    name: 'meat-api',
    version: '1.0.0'
});

server.get('/hello', (req, res, next) => {
    res.json({message: 'Hello World'});
    return next; // return next -> terminou as ações
});

server.listen(3000, () => {
    console.log("Api is runing on http://localhost:3000");
})