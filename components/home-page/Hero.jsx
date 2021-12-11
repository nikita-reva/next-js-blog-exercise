import React from 'react';
import classes from './Hero.module.css';
import Image from 'next/image';

function Hero() {
  return (
    <section className={classes.hero}>
      <div className={classes.image}>
        <Image
          src="/images/site/nikita.jpg"
          alt="Nikita Reva"
          width={300}
          height={300}
        />
      </div>
      <h1>Hi, I'm Nikita</h1>
      <p>I blog about shids and fards</p>
    </section>
  );
}

export default Hero;
