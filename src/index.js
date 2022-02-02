import Koa from 'koa';
import Router from 'koa-router';
import { handle } from './controller';
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
    app.use(JsonBody({
        strict: true
    }));

    router.get('/client/list', handle('client@list'));
    router.post('/client/create', handle('client@create'));
    router.post('/client/remove', handle('client@remove'));

    router.get('/host/list', handle('host@list'));
    router.post('/host/info', handle('host@info'));
    router.post('/host/create', handle('host@create'));
    router.post('/host/remove', handle('host@remove'));
    router.post('/host/alias/create', handle('host@createAlias'));
    router.post('/host/alias/remove', handle('host@removeAlias'));
    router.post('/host/php', handle('host@php'));
    router.post('/host/refresh', handle('host@refresh'));
    router.post('/host/option/set', handle('host@setOption'));
    router.post('/host/option/remove', handle('host@removeOption'));
    router.post('/host/ftp/create', handle('host@createFtp'));
    router.post('/host/ftp/remove', handle('host@removeFtp'));
    router.post('/host/ssl/enable/:method', handle('host@enableSsl'));
    router.post('/host/ssl/disable', handle('host@disableSsl'));

    router.get('/ftp/status', handle('ftp@status'));

    app
        .use(router.routes())
        .use(router.allowedMethods());

    app.listen(3000);
});
