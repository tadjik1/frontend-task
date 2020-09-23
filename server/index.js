const Koa = require('koa');
const Router = require('koa-router');
const cors = require('@koa/cors');
const db = require('./db.json');

const campaignsByIdMap = db.campaigns.reduce((m, campaign) => {
  m[campaign.id] = campaign;
  return m;
}, {});

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

const app = new Koa();
app.use(cors());

const router = new Router({ prefix: '/api' });

router.get('/campaigns', async (ctx) => {
  await sleep(150);
  ctx.body = db.campaigns;
});

router.get('/campaigns/:id', async (ctx) => {
  await sleep(150);
  if (!campaignsByIdMap[ctx.params.id]) ctx.throw(404, 'Campaign does not exist');
  ctx.body = campaignsByIdMap[ctx.params.id];
});

router.get('/products', async (ctx) => {
  await sleep(150);
  ctx.body = db.products;
});

router.get('/categories', async (ctx) => {
  await sleep(150);
  ctx.body = db.categories;
});

app.use(router.routes());

app.listen(8080, () => {
  console.log(`Server has been launched on http://localhost:8080`);
});
