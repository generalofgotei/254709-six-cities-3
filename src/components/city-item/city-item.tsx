import { Cities } from '../../const';
import cn from 'classnames';

type CityItemProps = {
  city: (typeof Cities)[number];
  activeCity: (typeof Cities)[number];
  onClick: (city: (typeof Cities)[number]) => void;
};

const CityItem = ({
  city,
  activeCity,
  onClick,
}: CityItemProps): JSX.Element => (
  <li className="locations__item" key={city}>
    <a
      className={cn(
        'locations__item-link tabs__item',
        {'tabs__item--active': activeCity === city}
      )}
      href="#"
      onClick={(e) => {
        e.preventDefault();
        onClick(city);
      }}
    >
      <span>{city}</span>
    </a>
  </li>
);

export default CityItem;
