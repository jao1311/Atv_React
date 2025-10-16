'use client';

import Image from 'next/image';
import { Carousel } from 'react-bootstrap';
import styles from './page.module.css';

export default function HomePage() {
  return (
    <div className={styles.root}>
      <h1>Home</h1>
      <Carousel>
        <Carousel.Item className={styles.carouselItem}>
          <img
            src={'/images/carousel/foto3.png'}
            alt={''}

            style={{objectFit: "cover"}}
          />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className={styles.carouselItem}>
        <img
            src={'/images/carousel/foto2.png'}
            alt={''}

            style={{objectFit: "cover"}}
          />
          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className={styles.carouselItem}>
        <img
            src={'/images/carousel/foto1.png'}
            alt={''}

            style={{objectFit: "cover"}}
          />
          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}