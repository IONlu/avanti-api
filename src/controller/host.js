import Client from 'avanti-core/dist/client';
import Host from 'avanti-core/dist/host';
import PublicError from '../error/public';

export const list = async ctx => {
    ctx.body = await Host.list()
};

export const create = async ctx => {
    if (!ctx.request.body.client) {
        throw (new PublicError('Client is missing')).withStatus(400);
    }

    if (!ctx.request.body.host) {
        throw (new PublicError('Host is missing')).withStatus(400);
    }

    let host = (await Client.get(ctx.request.body.client)).host(ctx.request.body.host);
    await host.create(ctx.request.body);
    ctx.body = await host.info();
};

export const createAlias = async ctx => {
    if (!ctx.request.body.host) {
        throw (new PublicError('Host is missing')).withStatus(400);
    }

    if (!ctx.request.body.alias) {
        throw (new PublicError('Alias is missing')).withStatus(400);
    }

    var host;
    if (ctx.request.body.client) {
        host = (await Client.get(ctx.request.body.client)).host(ctx.request.body.host);
    } else {
        host = await Host.get(ctx.request.body.host);
    }
    await host.createAlias(ctx.request.body.alias);
    ctx.body = {
        status: 'ok'
    };
};

export const removeAlias = async ctx => {
    if (!ctx.request.body.host) {
        throw (new PublicError('Host is missing')).withStatus(400);
    }

    if (!ctx.request.body.alias) {
        throw (new PublicError('Alias is missing')).withStatus(400);
    }

    var host;
    if (ctx.request.body.client) {
        host = (await Client.get(ctx.request.body.client)).host(ctx.request.body.host);
    } else {
        host = await Host.get(ctx.request.body.host);
    }
    await host.removeAlias(ctx.request.body.alias);
    ctx.body = {
        status: 'ok'
    };
};

export const php = async ctx => {
    if (!ctx.request.body.host) {
        throw (new PublicError('Host is missing')).withStatus(400);
    }

    if (!ctx.request.body.php) {
        throw (new PublicError('PHP is missing')).withStatus(400);
    }

    var host;
    if (ctx.request.body.client) {
        host = (await Client.get(ctx.request.body.client)).host(ctx.request.body.host);
    } else {
        host = await Host.get(ctx.request.body.host);
    }
    await host.php(ctx.request.body.php);
    ctx.body = {
        status: 'ok'
    };
};

export const remove = async ctx => {
    if (!ctx.request.body.host) {
        throw (new PublicError('Host is missing')).withStatus(400);
    }

    var host;
    if (ctx.request.body.client) {
        host = (await Client.get(ctx.request.body.client)).host(ctx.request.body.host);
    } else {
        host = await Host.get(ctx.request.body.host);
    }
    await host.remove();
    ctx.body = {
        status: 'ok'
    };
};

export const refresh = async ctx => {
    if (!ctx.request.body.host) {
        throw (new PublicError('Host is missing')).withStatus(400);
    }

    var host;
    if (ctx.request.body.client) {
        host = (await Client.get(ctx.request.body.client)).host(ctx.request.body.host);
    } else {
        host = await Host.get(ctx.request.body.host);
    }
    await host.refresh();
    ctx.body = {
        status: 'ok'
    };
};

export const info = async ctx => {
    if (!ctx.request.body.host) {
        throw (new PublicError('Host is missing')).withStatus(400);
    }

    var host;
    if (ctx.request.body.client) {
        host = (await Client.get(ctx.request.body.client)).host(ctx.request.body.host);
    } else {
        host = await Host.get(ctx.request.body.host);
    }

    ctx.body = await host.info();
};

export const setOption = async ctx => {
    if (!ctx.request.body.host) {
        throw (new PublicError('Host is missing')).withStatus(400);
    }

    if (!ctx.request.body.type) {
        throw (new PublicError('Type is missing')).withStatus(400);
    }

    if (!ctx.request.body.key) {
        throw (new PublicError('Key is missing')).withStatus(400);
    }

    if (!ctx.request.body.value) {
        throw (new PublicError('Value is missing')).withStatus(400);
    }

    var host;
    if (ctx.request.body.client) {
        host = (await Client.get(ctx.request.body.client)).host(ctx.request.body.host);
    } else {
        host = await Host.get(ctx.request.body.host);
    }
    await host.setOption(ctx.request.body.type, ctx.request.body.key, ctx.request.body.value);
    ctx.body = {
        status: 'ok'
    };
};

export const removeOption = async ctx => {
    if (!ctx.request.body.host) {
        throw (new PublicError('Host is missing')).withStatus(400);
    }

    if (!ctx.request.body.type) {
        throw (new PublicError('Type is missing')).withStatus(400);
    }

    if (!ctx.request.body.key) {
        throw (new PublicError('Key is missing')).withStatus(400);
    }

    var host;
    if (ctx.request.body.client) {
        host = (await Client.get(ctx.request.body.client)).host(ctx.request.body.host);
    } else {
        host = await Host.get(ctx.request.body.host);
    }
    await host.removeOption(ctx.request.body.type, ctx.request.body.key);
    ctx.body = {
        status: 'ok'
    };
};

export const createFtp = async ctx => {
    if (!ctx.request.body.host) {
        throw (new PublicError('Host is missing')).withStatus(400);
    }

    if (!ctx.request.body.password) {
        throw (new PublicError('Password is missing')).withStatus(400);
    }

    var host;
    if (ctx.request.body.client) {
        host = (await Client.get(ctx.request.body.client)).host(ctx.request.body.host);
    } else {
        host = await Host.get(ctx.request.body.host);
    }
    await host.createFtp(ctx.request.body.password);
    ctx.body = {
        status: 'ok'
    };
};

export const removeFtp = async ctx => {
    if (!ctx.request.body.host) {
        throw (new PublicError('Host is missing')).withStatus(400);
    }

    var host;
    if (ctx.request.body.client) {
        host = (await Client.get(ctx.request.body.client)).host(ctx.request.body.host);
    } else {
        host = await Host.get(ctx.request.body.host);
    }
    await host.removeFtp();
    ctx.body = {
        status: 'ok'
    };
};

export const enableSsl = async ctx => {
    if (!ctx.request.body.host) {
        throw (new PublicError('Host is missing')).withStatus(400);
    }
    if (!ctx.params.method) {
        throw (new PublicError('Method is missing')).withStatus(400);
    }

    var host;
    if (ctx.request.body.client) {
        host = (await Client.get(ctx.request.body.client)).host(ctx.request.body.host);
    } else {
        host = await Host.get(ctx.request.body.host);
    }
    let hostinfo = await host.info()
    if (!hostinfo.ssl) {
        await host.enableSsl(ctx.params.method);
        ctx.body = {
            status: 'ok'
        };
    } else {
        ctx.body = {
            status: 'ssl already enabled'
        };
    }
};

export const disableSsl = async ctx => {
    if (!ctx.request.body.host) {
        throw (new PublicError('Host is missing')).withStatus(400);
    }

    var host;
    if (ctx.request.body.client) {
        host = (await Client.get(ctx.request.body.client)).host(ctx.request.body.host);
    } else {
        host = await Host.get(ctx.request.body.host);
    }
    let hostinfo = await host.info()
    if (hostinfo.ssl) {
        await host.disableSsl();
        ctx.body = {
            status: 'ok'
        };
    } else {
        ctx.body = {
            status: 'ssl already disabled'
        };
    }
};
