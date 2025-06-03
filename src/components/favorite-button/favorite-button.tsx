import { useAppDispatch } from '../../store';
import { toggleFavorite } from '../../utils';
import cn from 'classnames';

type favoriteButtonProps = { isCard: boolean; id: string; isFavorite: boolean };

const FavoriteButton = ({
  isCard,
  id,
  isFavorite,
}: favoriteButtonProps): JSX.Element => {
  const dispatch = useAppDispatch();

  const handleToggleFavorite = () => {
    toggleFavorite(dispatch, id, isFavorite);
  };
  return (
    <button
      name={id}
      className={cn(
        'button',
        {'offer__bookmark-button': !isCard},
        {'place-card__bookmark-button': isCard},
        {'offer__bookmark-button--active': isFavorite && !isCard},
        {'place-card__bookmark-button--active': isFavorite && isCard},
      )}
      type="button"
      onClick={handleToggleFavorite}
    >
      <svg className={cn(
        {'offer__bookmark-icon': !isCard},
        {'place-card__bookmark-icon': isCard}
      )} width={isCard ? 18 : 31} height={isCard ? 19 : 33}
      >
        <use xlinkHref="#icon-bookmark" />
      </svg>
      <span className="visually-hidden">
        {isFavorite ? 'In bookmarks' : 'To bookmarks'}
      </span>
    </button>
  );
};

export default FavoriteButton;
