import { arrRabbitOnMoon, colorRabbitOnMoon } from './rabbitOnMoon';
import { arrSnowMonkeys, colorSnowMonkeys } from './snowMonkeys';
import { arrCraneSunset, colorCraneSunset } from './craneSunset';
import { arrSakuraDeer, colorSakuraDeer } from './sakuraDeer';
import { arrKaguyaHime, colorKaguyaHime } from './kaguyaHime';
import { arrKodomoNoHi, colorKodomoNoHi } from './kodomoNoHi';

// naming with useCase and index is also used in the IlluIndex in _compuIllus
export default {
  home: [
    { arrIllu: arrRabbitOnMoon, colorIllu: colorRabbitOnMoon },
  ],
  readMe: [
    { arrIllu: arrKodomoNoHi, colorIllu: colorKodomoNoHi },
  ],
  about: [
    { arrIllu: arrKaguyaHime, colorIllu: colorKaguyaHime },
  ],
  quiz: [
    { arrIllu: arrSnowMonkeys, colorIllu: colorSnowMonkeys },
    { arrIllu: arrCraneSunset, colorIllu: colorCraneSunset },
    { arrIllu: arrSakuraDeer, colorIllu: colorSakuraDeer },
  ],
};
