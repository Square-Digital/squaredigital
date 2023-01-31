import React from 'react'

import styles from './styles.module.scss'
import Image from 'next/image'

export const SecondSection = () => {
  return (
    <section className={styles.section}>
      <Image
        src="/square-edit.svg"
        width={158}
        height={134}
        alt=""
        className={styles.squareIlustration}
      />

      <article className={styles.content}>
        <div className={styles.title}>
          <h2>Seu site com a cara do seu negócio</h2>
          <Image src="/arrow-down.svg" width={32} height={132} alt="" />
        </div>
        <div className={styles.description}>
          <Image
            src="/website.png"
            width={681}
            height={435}
            alt="Your website"
          />
          <div className={styles.paragraphs}>
            <h3>Lorem ipsum</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
              tempor at erat vel sodales. Integer ultrices risus et dolor
              scelerisque, et dignissim leo bibendum. Fusce{' '}
            </p>
            <h3>Lorem ipsum</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
              tempor at erat vel sodales. Integer ultrices risus et dolor
              scelerisque, et dignissim leo bibendum. Fusce{' '}
            </p>
            <h3>Lorem ipsum</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
              tempor at erat vel sodales. Integer ultrices risus et dolor
              scelerisque, et dignissim leo bibendum. Fusce{' '}
            </p>
          </div>
        </div>
      </article>
      <Image
        src="/ellipse-1.png"
        className={styles.ellipseIlustration}
        width={550}
        height={550}
        alt=""
      />
    </section>
  )
}
