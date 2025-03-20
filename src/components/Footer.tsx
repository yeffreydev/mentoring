import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export function Footer() {
  return (
    <footer className="bg-black py-8">
      <div className="container max-w-6xl mx-auto px-4">
        <div className="flex flex-col items-center">
          <Image
            src="https://ext.same-assets.com/2987037568/1828366794.png"
            alt="Certificación Digital"
            width={200}
            height={100}
            className="mb-4"
          />

          <div className="flex gap-4 mb-4">
            <Link href="#" className="text-gold-light text-sm hover:text-gold transition-colors">
              TERMS & CONDITIONS
            </Link>
            <span className="text-gold-light">|</span>
            <Link href="#" className="text-gold-light text-sm hover:text-gold transition-colors">
              PRIVACY POLICY
            </Link>
            <span className="text-gold-light">|</span>
            <Link href="#" className="text-gold-light text-sm hover:text-gold transition-colors">
              LEGAL
            </Link>
          </div>

          <p className="text-gold-light text-sm">
            All Rights Reserved 2025 © Copyright
          </p>
        </div>
      </div>
    </footer>
  );
}
