import BrazilFlag from '../../assets/images/brazil.png'
import ChinaFlag from '../../assets/images/china.png'
import GermanyFlag from '../../assets/images/germany.png'
import ItalyFlag from '../../assets/images/italy.png'
import UsaFlag from '../../assets/images/usa.png'

const COUNTRIES = [
  {
    label: 'Alemanha', /* Nome de exibição no site */
    value: 'germany', /* Valor que é solicitado à API */
    flag: GermanyFlag /* Ícone */
  },
  {
    label: 'Brasil',
    value: 'brazil',
    flag: BrazilFlag
  },
  {
    label: 'China',
    value: 'china',
    flag: ChinaFlag
  },
  {
    label: 'Estados Unidos',
    value: 'usa',
    flag: UsaFlag
  },
  {
    label: 'Itália',
    value: 'italy',
    flag: ItalyFlag
  }
];

export default COUNTRIES;