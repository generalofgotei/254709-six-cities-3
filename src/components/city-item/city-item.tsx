import { Cities } from '../../const';
import cn from 'classnames';
import { memo, useCallback } from 'react';

type CityItemProps = {
  city: (typeof Cities)[number];
  activeCity: (typeof Cities)[number];
  onClick: (city: (typeof Cities)[number]) => void;
};

const CityItem = memo<CityItemProps>(({
  city,
  activeCity,
  onClick,
}: CityItemProps): JSX.Element => {
  const handleClick = useCallback((e: React.MouseEvent) => {
    e.preventDefault();
    onClick(city);
  }, [onClick, city]);

  return (
    <li className="locations__item" key={city}>
      <a
        className={cn(
          'locations__item-link tabs__item',
          {'tabs__item--active': activeCity === city}
        )}
        onClick={handleClick}
      >
        <span>{city}</span>
      </a>
    </li>
  );
});

CityItem.displayName = 'CityItem';

export default CityItem;
