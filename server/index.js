const Koa = require('koa');
const Router = require('koa-router');
const cors = require('@koa/cors');
const db = require('./db.json');

const campaignsByIdMap = db.campaigns.reduce((m, campaign) => {
  m[campaign.id] = campaign;
  return m;
}, {});

const app = new Koa();
app.use(cors());

const router = new Router({ prefix: '/api' });

router.get('/campaigns', (ctx) => {
  ctx.body = db.campaigns;
});

router.get('/campaigns/:id', (ctx) => {
  if (!campaignsByIdMap[ctx.params.id]) ctx.throw(404, 'Campaign does not exist');
  ctx.body = campaignsByIdMap[ctx.params.id];
});

router.get('/products', (ctx) => {
  ctx.body = db.products;
});

router.get('/categories', (ctx) => {
  ctx.body = db.categories;
});

app.use(router.routes());

app.listen(8080, () => {
  console.log(`Server has been launched on http://localhost:8080`);
});
