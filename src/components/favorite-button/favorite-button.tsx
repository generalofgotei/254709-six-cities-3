import { useAppDispatch } from '../../store';
import { toggleFavorite } from '../../utils';
import cn from 'classnames';
import { memo, useCallback, useMemo, useState } from 'react';

type FavoriteButtonProps = {
  isCard: boolean;
  id: string;
  isFavorite: boolean;
  disabled?: boolean;
};

const FavoriteButton = memo<FavoriteButtonProps>(
  ({
    isCard,
    id,
    isFavorite,
    disabled = false,
  }: FavoriteButtonProps): JSX.Element => {
    const dispatch = useAppDispatch();
    const [isLoading, setIsLoading] = useState(false);

    const handleToggleFavorite = useCallback(() => {
      if (isLoading || disabled) {
        return;
      }
      setIsLoading(true);
      toggleFavorite(dispatch, id, isFavorite);
      setIsLoading(false);
    }, [dispatch, id, isFavorite, isLoading, disabled]);

    const buttonClasses = useMemo(
      () =>
        cn('button', {
          'offer__bookmark-button': !isCard,
          'place-card__bookmark-button': isCard,
          'offer__bookmark-button--active': isFavorite && !isCard,
          'place-card__bookmark-button--active': isFavorite && isCard,
        }),
      [isCard, isFavorite]
    );

    const iconClasses = useMemo(
      () =>
        cn({
          'offer__bookmark-icon': !isCard,
          'place-card__bookmark-icon': isCard,
        }),
      [isCard]
    );

    const iconSize = useMemo(
      () => ({
        width: isCard ? 18 : 31,
        height: isCard ? 19 : 33,
      }),
      [isCard]
    );

    const isAbilityText = useMemo(
      () => (isFavorite ? 'Remove from bookmarks' : 'Add to bookmarks'),
      [isFavorite]
    );

    return (
      <button
        name={id}
        className={buttonClasses}
        type="button"
        onClick={handleToggleFavorite}
        disabled={isLoading || disabled}
        title={isAbilityText}
      >
        <svg
          className={iconClasses}
          width={iconSize.width}
          height={iconSize.height}
        >
          <use xlinkHref="#icon-bookmark" />
        </svg>
        <span className="visually-hidden">{isAbilityText}</span>
      </button>
    );
  }
);

FavoriteButton.displayName = 'FavoriteButton';

export default FavoriteButton;
