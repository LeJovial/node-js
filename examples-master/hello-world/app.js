const Koa = require('koa');
const auth = require('koa-basic-auth');

const app = module.exports = new Koa();

app.use(async function(ctx) {
  ctx.body = 'Hello World';
});

app.use(auth({ name: 'tj', pass: 'tobi' }));

if (!module.parent) app.listen(3000);
