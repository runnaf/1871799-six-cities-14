import {useRef, useEffect} from 'react';
import {Icon, Marker, layerGroup} from 'leaflet';
import 'leaflet/dist/leaflet.css';
import style from './map.module.css';
import useMap from '../../../hooks/use-map';
import { TIconToMap, TLocation, TOffer, TOffers } from '../../../types/types';
import { DEFAULT_ICONT, CURRENT_ICON } from '../../../const';

type MapProps = {
  block: 'cities' | 'offer';
  offers: TOffers;
  specialOfferId: string | undefined;
  specialOffer?: TOffer;
  location: TLocation;
};


const defaultCustomIcon = new Icon(DEFAULT_ICONT as TIconToMap);

const currentCustomIcon = new Icon(CURRENT_ICON as TIconToMap);

export function Map({offers, specialOfferId, block, specialOffer, location}: MapProps): JSX.Element {
  const mapRef = useRef(null);
  const map = useMap(mapRef, location);

  if (block === 'offer' && specialOffer && specialOfferId) {
    offers = offers.concat(specialOffer);
  }


  useEffect(() => {
    if (map) {
      const markerLayer = layerGroup().addTo(map);
      offers.forEach((point) => {
        const marker = new Marker({
          lat: point.location.latitude,
          lng: point.location.longitude
        });

        marker
          .setIcon(
            specialOfferId !== undefined && point.id === specialOfferId
              ? currentCustomIcon
              : defaultCustomIcon
          )
          .addTo(markerLayer);
      });

      return () => {
        map.removeLayer(markerLayer);
      };
    }
  }, [map, offers, specialOfferId, location]);

  useEffect(() => {
    if (map) {
      map.setView([location.latitude, location.longitude], location.zoom);
    }
  }, [map, location]);

  return (
    <section className={`${block}__map map ${style.container}`} ref={mapRef}></section>
  );


}

