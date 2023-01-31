import React from 'react'
import Image from 'next/image'

import styles from './styles.module.scss'

export const Hero: React.FC = () => {
  return (
    <section className={styles.hero}>
      <h1 className={styles.title}>
        Seu negócio no{' '}
        <span className={styles.titleAnimation}>
          mundo digital
          <Image
            src="/hero/pen-animation.png"
            alt="Um lápis sublinhando parte da frase 'Construa um site com a cara da sua empresa' "
            width={736}
            height={52}
            className={styles.penAnimation}
          />
        </span>
      </h1>
      <p className={styles.subtitle}>
        Construa um site com a cara da sua empresa
      </p>
      <button className={styles.button}>ENTRAR EM CONTATO</button>
    </section>
  )
}
