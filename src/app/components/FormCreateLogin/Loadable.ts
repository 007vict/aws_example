/**
 *
 * Asynchronously loads the component for FormCreateLogin
 *
 */

import { lazyLoad } from 'utils/loadable';

export const FormCreateLogin = lazyLoad(
  () => import('./index'),
  module => module.FormCreateLogin,
);
