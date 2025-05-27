import { Cities } from '../../const';
import CityItem from '../city-item/city-item';
import { useAppDispatch, useAppSelector } from '../../store';
import { setCity } from '../../store/action';

const NavItem = (): JSX.Element => {
  const dispatch = useAppDispatch();
  const activeCity = useAppSelector((state) => state.city) as typeof Cities[number];

  const handleActiveCityChange = (city: typeof Cities[number]) => {
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
