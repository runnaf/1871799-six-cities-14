import {useRef, useEffect} from 'react';
import {Icon, Marker, layerGroup} from 'leaflet';
import useMap from '../../hooks/use-map';
import { TLocation} from '../../types/types';
import {URL_MARKER_DEFAULT, URL_MARKER_CURRENT} from '../../const';
import 'leaflet/dist/leaflet.css';
import { TCardProps } from './data/data-cities-card';

type MapProps = {
  block: string;
  location: TLocation;
  offer: TCardProps;
  specialOfferId: number | null;
};

const defaultCustomIcon = new Icon({
  iconUrl: URL_MARKER_DEFAULT,
  iconSize: [40, 40],
  iconAnchor: [20, 40]
});

const currentCustomIcon = new Icon({
  iconUrl: URL_MARKER_CURRENT,
  iconSize: [40, 40],
  iconAnchor: [20, 40]
});

export function MapAdded({offer, specialOfferId, block, location }: MapProps): JSX.Element {

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
    <section className={`${block}__map map`} ref={mapRef} style={{height: '100%', minHeight: '500px', width: '100%', maxWidth: '1144px', margin: '0 auto'}}></section>
  );
}
