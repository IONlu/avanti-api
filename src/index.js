import Koa from 'koa';
import Router from 'koa-router';
import { handle } from './controller';
const KoaBody = require('koa-body')({multipart:true, urlencoded: true})
import JsonBody from 'koa-json-body';
import ErrorMiddleware from './middleware/error';
import TokenMiddleware from './middleware/token';
import CorsMiddleware from '@koa/cors';
import setup from 'avanti-core/dist/setup';

setup().then(() => {
    const app = new Koa();
    const router = new Router();
    app.use(CorsMiddleware())
    app.use(ErrorMiddleware());
    app.use(TokenMiddleware());
    router.get('/client/list', JsonBody({strict: true}), handle('client@list'));
    router.post('/client/create', JsonBody({strict: true}), handle('client@create'));
    router.post('/client/remove', JsonBody({strict: true}), handle('client@remove'));

    router.get('/host/list', JsonBody({strict: true}), handle('host@list'));
    router.post('/host/info', JsonBody({strict: true}), handle('host@info'));
    router.post('/host/create', JsonBody({strict: true}), handle('host@create'));
    router.post('/host/remove', JsonBody({strict: true}), handle('host@remove'));
    router.post('/host/alias/create', JsonBody({strict: true}), handle('host@createAlias'));
    router.post('/host/alias/remove', JsonBody({strict: true}), handle('host@removeAlias'));
    router.post('/host/php', JsonBody({strict: true}), handle('host@php'));
    router.post('/host/refresh', JsonBody({strict: true}), handle('host@refresh'));
    router.post('/host/option/set', JsonBody({strict: true}), handle('host@setOption'));
    router.post('/host/option/remove', JsonBody({strict: true}), handle('host@removeOption'));
    router.post('/host/ftp/create', JsonBody({strict: true}), handle('host@createFtp'));
    router.post('/host/ftp/remove', JsonBody({strict: true}), handle('host@removeFtp'));
    router.post('/host/ssl/enable/:method', KoaBody, handle('host@enableSsl'));
    router.post('/host/ssl/disable', JsonBody({strict: true}), handle('host@disableSsl'));

    router.get('/ftp/status', handle('ftp@status'));

    app
        .use(router.routes())
        .use(router.allowedMethods());

    app.listen(3000);
});
