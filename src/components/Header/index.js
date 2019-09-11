import React from 'react';
import Link from 'next/link';
import { Container } from './styles';

export default function Header() {
  return (
    <Container>
      <nav>
        <Link href="/">
          <a>Início</a>
        </Link>
        <Link href="/contact">
          <a>Contato</a>
        </Link>
        <Link href="/skills">
          <a>Habilidades</a>
        </Link>
      </nav>
    </Container>
  );
}
