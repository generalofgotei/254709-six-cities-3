import {useRef, useEffect} from 'react';
import leaflet from 'leaflet';
import 'leaflet/dist/leaflet.css';
import useMap from './useMap.ts';
import type { OfferType, OffersType } from '../../types/offers';
import { URL_MARKER_CURRENT, URL_MARKER_DEFAULT } from '../../const.ts';

const MARKER_SIZE = 40;
const MARKER_ANCHOR_X = 20;
const MARKER_ANCHOR_Y = 40;

type MapProps = {
  className?: string;
  offers: OffersType;
  activeOffer?: OfferType | null;
}

function Map({className, offers, activeOffer}: MapProps): JSX.Element {
  const mapRef = useRef(null);
  const city = offers.length > 0 ? offers[0].city : null;
  const map = useMap({mapRef, city});

  const defaultCustomIcon = leaflet.icon({
    iconUrl: URL_MARKER_DEFAULT,
    iconSize: [MARKER_SIZE, MARKER_SIZE],
    iconAnchor: [MARKER_ANCHOR_X, MARKER_ANCHOR_Y],
  });

  const currentCustomIcon = leaflet.icon({
    iconUrl: URL_MARKER_CURRENT,
    iconSize: [MARKER_SIZE, MARKER_SIZE],
    iconAnchor: [MARKER_ANCHOR_X, MARKER_ANCHOR_Y],
  });

  useEffect(() => {
    if (map) {
      map.eachLayer((layer) => {
        if (layer instanceof leaflet.Marker) {
          map.removeLayer(layer);
        }
      });

      map.setView([offers[0].city.location.latitude, offers[0].city.location.longitude], offers[0].city.location.zoom);

      offers.forEach((offer) => {
        leaflet
          .marker({
            lat: offer.location.latitude,
            lng: offer.location.longitude,
          }, {
            icon: (offer.id === activeOffer?.id)
              ? currentCustomIcon
              : defaultCustomIcon,
          })
          .addTo(map);
      });
    }
  }, [map, offers, activeOffer]);

  return (
    <section
      className={`map ${className || ''}`}
      ref={mapRef}
    >
    </section>
  );
}

export default Map;
