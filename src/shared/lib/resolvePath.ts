import { config } from '~/config';

export const resolvePath = (path: string) => `${config.base}/${path}`;
