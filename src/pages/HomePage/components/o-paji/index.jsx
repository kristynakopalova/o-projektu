import { ONas } from '../o-nas';
import paja from './paja.jpg'

const name = 'Pavla Taterová';
const description = 'Aktuálně se účastním Digitální akademie Czechitas a jelikož mám kolem sebe v současnosti hodně párů, které už za sebou mají nebo plánují svatbu, říkala jsem si, že by bylo skvělé vytvořit digitálního průvodce svatbou. S mojí teammate Týnkou jsme se rozhodly převést tuto myšlenku na náš společný absolventský projekt.';
const link = 'https://github.com/taterovapavla';
// TODO: přidej si obrázek do složky o-paji a obdobně jako v komponentě OKristyne image importuj a následně předej image do komponenty OPaji

export const OPaji = () => {
  return (
    <ONas
      name={name}
      description={description}
      link={link}
      image={paja}
      key={name}
    />
  );
};
