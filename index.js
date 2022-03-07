import Plugin from '@structures/plugin';

import { instead, unpatchAll } from '@patcher';
import { getByProps } from '@webpack';

const Classes = getByProps('getThemeClass');

export default class ForceDarkMode extends Plugin {
   start() {
      instead('force-dark-mode', Classes, 'getThemeClass', () => 'theme-dark theme-forced');
   }

   stop() {
      unpatchAll('force-dark-mode');
   }
}