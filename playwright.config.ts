import { currentsReporter } from '@currents/playwright';
import currentsConfig from './currents.config';

export const reporter = ['html', currentsReporter(currentsConfig)];
