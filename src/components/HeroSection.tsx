import React from "react";
import Link from "next/link";

export function HeroSection() {
  return (
    <section className="bg-dark text-white py-12 md:py-16">
      <div className="container max-w-6xl mx-auto px-4">
        <div className="flex flex-col items-center text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-6 max-w-4xl">
            Descubre tu resultado
          </h1>

          <p className="text-xl mb-10">
            ¡Mira el VIDEO, activa el audio y quédate hasta el final que tengo
            algo para tí!
          </p>

          {/* Video Placeholder */}
          <div className="w-full max-w-4xl bg-black rounded-lg overflow-hidden relative mb-10 aspect-video">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-20 h-20 rounded-full bg-gold flex items-center justify-center cursor-pointer">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-dark"
                >
                  <polygon points="5 3 19 12 5 21 5 3" />
                </svg>
              </div>
            </div>
          </div>

          <Link
            href="#participar"
            className="bg-gold hover:bg-gold/90 text-dark font-heading font-bold py-4 px-8 rounded-md text-xl transition-colors"
          >
            Quiero Participar En La Certificación Digital
          </Link>

          <p className="mt-3 text-gold-light font-medium">
            Dale clic aquí y regístrate el entrenamiento
          </p>
        </div>
      </div>
    </section>
  );
}
