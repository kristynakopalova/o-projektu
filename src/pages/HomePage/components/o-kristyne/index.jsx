import { ONas } from '../o-nas';
import kristyna from './kristyna.jpeg';

const name = 'Kristýna Kopalová';
const description =
  'Jsem studentkou Czechitas - Digitální akademie web a společně s Pájou tovříme web, který by snoubencům pomohl s plánováním jejich svatby. Po dokončení akademie bych ráda pracovala jako front end developer.';
const link = 'https://github.com/kristynakopalova';

export const OKristyne = () => {
  return (
    <ONas
      name={name}
      description={description}
      link={link}
      image={kristyna}
      key={name}
    />
  );
};
