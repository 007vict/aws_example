/**
 *
 * Asynchronously loads the component for Cloud
 *
 */

import { lazyLoad } from 'utils/loadable';

export const Cloud = lazyLoad(
  () => import('./index'),
  module => module.Cloud,
);
