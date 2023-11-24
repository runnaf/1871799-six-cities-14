import {useRef, useEffect} from 'react';
import {Icon, Marker, layerGroup} from 'leaflet';
import 'leaflet/dist/leaflet.css';
import style from './map.module.css';
import useMap from '../../../hooks/use-map';
import { TIconToMap } from '../../../types/types';
import { DEFAULT_ICONT, CURRENT_ICON } from '../../../const';
import { TCardProps, TProps } from '../data/data-cities-card';

type MapProps = {
  block: 'cities' | 'offer';
  offers: TCardProps;
  specialOfferId: number | null;
  specialOffer?: TProps;
};


const defaultCustomIcon = new Icon(DEFAULT_ICONT as TIconToMap);

const currentCustomIcon = new Icon(CURRENT_ICON as TIconToMap);

export function Map({offers, specialOfferId, block, specialOffer}: MapProps): JSX.Element {
  const mapRef = useRef(null);
  const city = offers[0].city.location;
  const map = useMap(mapRef, city);

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
  }, [map, offers, specialOfferId, city]);

  useEffect(() => {
    if (map) {
      map.setView([city.latitude, city.longitude], city.zoom);
    }
  }, [map, city]);

  return (
    <section className={`${block}__map map ${style.container}`} ref={mapRef}></section>
  );


}

