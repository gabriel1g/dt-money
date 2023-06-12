import axios from 'axios';

import { env } from '@environment/env';

export const api = axios.create({
  baseURL: env.API_URL,
});
