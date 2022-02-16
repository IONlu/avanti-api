import Php from 'avanti-core/dist/php';

export const phpVersions = async ctx => {
    let php = new Php;
    ctx.body = await php.phpVersions();
};
