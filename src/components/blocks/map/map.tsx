import {useRef, useEffect} from 'react';
import {Icon, Marker, layerGroup} from 'leaflet';
import 'leaflet/dist/leaflet.css';
import style from './map.module.css';
import useMap from '../../../hooks/use-map';
import { TLocation} from '../../../types/types';
import {URL_MARKER_DEFAULT, URL_MARKER_CURRENT} from '../../../const';
import { TCardProps } from '../data/data-cities-card';

type MapProps = {
  block: string;
  location: TLocation;
  offer: TCardProps;
  specialOfferId: number | null;
};

const defaultCustomIcon = new Icon({
  iconUrl: URL_MARKER_DEFAULT,
  iconSize: [27, 39],
  iconAnchor: [13.5, 39]
});

const currentCustomIcon = new Icon({
  iconUrl: URL_MARKER_CURRENT,
  iconSize: [27, 39],
  iconAnchor: [13.5, 39]
});

export function Map({offer, specialOfferId, block, location }: MapProps): JSX.Element {

  const mapRef = useRef(null);
  const map = useMap(mapRef, location);

  useEffect(() => {
    if (map) {
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
  }, [map, offer, specialOfferId]);

  return (
    <section className={`${block}__map map ${style.container}`} ref={mapRef}></section>
  );
}
