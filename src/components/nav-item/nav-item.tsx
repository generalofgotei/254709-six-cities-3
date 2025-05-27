import { Cities } from '../../const';
import CityItem from '../city-item/city-item';
import { useAppDispatch, useAppSelector } from '../../store';
import { setCity } from '../../store/action';
import { selectCity } from '../../selectors/offers';

type CityName = (typeof Cities)[number];

const NavItem = (): JSX.Element => {
  const dispatch = useAppDispatch();
  const activeCity = useAppSelector(selectCity);

  const handleActiveCityChange = (city: CityName) => {
    dispatch(setCity(city));
  };

  return (
    <div className="tabs">
      <section className="locations container">
        <ul className="locations__list tabs__list">
          {Cities.map((city) => (
            <CityItem
              key={city}
              activeCity={activeCity}
              city={city}
              onClick={handleActiveCityChange}
            />
          ))}
        </ul>
      </section>
    </div>
  );
};

export default NavItem;
