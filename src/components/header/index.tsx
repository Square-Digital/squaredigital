import React from 'react'
import Link from 'next/link'

import styles from './styles.module.scss'

export const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <nav>
        <ul className={styles.list}>
          <li>
            <Link href="/" className={styles.link}>
              Home
            </Link>
          </li>
          <li>
            <Link href="/" className={styles.link}>
              Serviços
            </Link>
          </li>
          <li>
            <Link href="/" className={styles.link}>
              Nosso diferencial
            </Link>
          </li>
          <li>
            <Link href="/" className={styles.link}>
              Sobre nós
            </Link>
          </li>
          <li>
            <Link href="/" className={styles.link}>
              Projetos
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}
