import { Cities } from '../../const';
import CityItem from '../city-item/city-item';

type NavItemProps = {
  activeCity: typeof Cities[number];
  onCityActiveChange: (city: typeof Cities[number]) => void;
}

const NavItem = ({ activeCity, onCityActiveChange }: NavItemProps): JSX.Element => (
  <div className="tabs">
    <section className="locations container">
      <ul className="locations__list tabs__list">
        {Cities.map((city) => (
          <CityItem key= {city} activeCity={activeCity} city={city} onClick={onCityActiveChange}/>
        ))}
      </ul>
    </section>
  </div>
);

export default NavItem;
