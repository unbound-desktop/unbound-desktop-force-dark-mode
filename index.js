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

   getSettingsPanel() {
      powercord.api.notices.sendToast('test', { icon: { icon: 'info-circle', color: '#737bd7'}, header: 'Custom functionality', content: 'Did you know unbound lets you run custom functionality when the user clicks the settings cog? This allows me to open a toast without changing the page and rendering settings!', timeout: 10000 })
   }
}