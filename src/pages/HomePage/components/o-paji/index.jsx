import { ONas } from '../o-nas';

const name = 'Pavla';
const description = 'Tady něco o tobě';
const link = 'Odkaz na tvůj github';
// TODO: přidej si obrázek do složky o-paji a obdobně jako v komponentě OKristyne image importuj a následně předej image do komponenty OPaji

export const OPaji = () => {
  return (
    <ONas
      name={name}
      description={description}
      link={link}
      image={null}
      key={name}
    />
  );
};
