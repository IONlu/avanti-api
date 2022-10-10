import Server from 'avanti-core/dist/server';

export const info = async ctx => {
    let server = new Server;
    ctx.body = await server.info();
};
