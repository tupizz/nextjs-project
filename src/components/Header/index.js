import React from 'react';
import Link from 'next/link';
import { Container } from './styles';

export default function Header() {
  return (
    <Container>
      <h3>First application with Nextjs</h3>
      <nav>
        <Link href="/">
          <a>Home</a>
        </Link>
        <Link href="/contact">
          <a>Contact</a>
        </Link>
        <Link href="/styles">
          <a>Styles</a>
        </Link>
      </nav>
    </Container>
  );
}
