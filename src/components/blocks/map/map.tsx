import {useRef, useEffect} from 'react';
import {Icon, Marker, layerGroup} from 'leaflet';
import 'leaflet/dist/leaflet.css';
import style from './map.module.css';
import useMap from '../../../hooks/use-map';
import { TIconToMap } from '../../../types/types';
import { DEFAULT_ICONT, CURRENT_ICON } from '../../../const';
import { TCardProps } from '../data/data-cities-card';
import { useAppSelector } from '../../../hooks/use-store';

type MapProps = {
  block: string;
  offer: TCardProps;
  specialOfferId: number | null;
};


const defaultCustomIcon = new Icon(DEFAULT_ICONT as TIconToMap);

const currentCustomIcon = new Icon(CURRENT_ICON as TIconToMap);

export function Map({offer, specialOfferId, block}: MapProps): JSX.Element {
  const mapRef = useRef(null);
  const city = useAppSelector((state)=> state.locationForMap[0].location);
  const map = useMap(mapRef, city);


  useEffect(() => {
    if (map) {
      map.setView([city.latitude, city.longitude], city.zoom);
      const markerLayer = layerGroup().addTo(map);
      offer.forEach((point) => {
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
  }, [map, offer, specialOfferId, city]);

  useEffect(() => {
    if (map) {
      map.setView([city.latitude, city.longitude], city.zoom);
    }
  }, [map, city]);

  return (
    <section className={`${block}__map map ${style.container}`} ref={mapRef}></section>
  );


}

