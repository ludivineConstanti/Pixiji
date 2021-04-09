import { arrSnowMonkeys, colorSnowMonkeys } from './snowMonkeys';
import { arrCraneSunset, colorCraneSunset } from './craneSunset';
import { arrRabbitOnMoon, colorRabbitOnMoon } from './rabbitOnMoon';

// naming with useCase and index is also used in the IlluIndex in _compuIllus
export default {
  home: [
    { arrIllu: arrRabbitOnMoon, colorIllu: colorRabbitOnMoon },
  ],
  quiz: [
    { arrIllu: arrSnowMonkeys, colorIllu: colorSnowMonkeys },
    { arrIllu: arrCraneSunset, colorIllu: colorCraneSunset },
  ],

};
