import React from "react";
import Image from "next/image";

export function AboutSection() {
  return (
    <section className="bg-dark-light text-white py-16">
      <div className="container max-w-6xl mx-auto px-4">
        <div className="flex flex-col items-center">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-center mb-6">
            DE LO IMPOSIBLE A <span className="text-gold">LO INEVITABLE</span>
          </h2>

          <p className="text-xl text-gold text-center mb-10 font-heading italic max-w-3xl">
            Cómo logré romper cada mito de una estrategia en la que nadie creía
          </p>

          <div className="flex flex-col md:flex-row gap-10 items-center md:items-start">
            <div className="md:w-1/3">
              <div className="relative w-full max-w-sm mx-auto aspect-[3/4] overflow-hidden rounded-lg">
                <Image
                  src="/young-girl.avif"
                  alt="Nelly García"
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover"
                />
              </div>

              <div className="text-center mt-4">
                <p className="text-gold font-heading">
                  <span className="font-bold">De:</span> Nelly García
                </p>
                <p className="text-gold font-heading">
                  <span className="font-bold">Para:</span> Los emprendedores de
                  latinoamérica
                </p>
              </div>
            </div>

            <div className="md:w-2/3">
              <p className="mb-6">
                Al principio, como quizás lo estás tú,{" "}
                <strong>
                  estaba super dudosa y con miles de miedos encima.
                </strong>{" "}
                No sabía nada de marketing y ventas, y los negocios por internet
                me parecían más{" "}
                <strong>historias de ciencia y ficción que la realidad.</strong>
              </p>

              <p className="mb-6">
                Yo, venía de emprender en un negocio super tradicional dedicado
                a la organización de fiestas infantiles,{" "}
                <strong>
                  pero vino la pandemia y literalmente lo borró del mapa.
                </strong>
              </p>

              <p className="mb-6">
                No lo podía creer, de un momento a otro todo se había
                desvanecido.{" "}
                <strong>
                  Pero no se habían desvanecido las cuentas por pagar, ni las
                  deudas que me dejó mi empresa en quiebra
                </strong>
                , y por supuesto, el vivir día a día. Para rematar, tuve un
                problema de salud desencadenado por todo el estrés y terminé{" "}
                <strong>internada una semana.</strong>
              </p>

              <p className="mb-6">
                <strong>Fue ahí cuando toqué fondo</strong> Y decidí dejar el
                papel de víctima y hacerme responsable de mi situación. Tomar
                acción. ¿Cómo era posible que tantas otras personas estuvieran{" "}
                <strong>ganando miles de dólares</strong> con este negocio y yo,
                por puros miedos y falta de fe en mi misma,{" "}
                <strong>
                  estuviera más endeudada y con más crisis encima que nunca?!
                </strong>
              </p>

              <p className="mb-6">
                Pero cuando tocas fondo, lo único que te queda es salir, dicen.
                Y fue verdad. No podía caer más. Tocaba hacer que mi vida
                cambiara; después de todo, lo único que me alimentaba era
                pensar: "Si ellos pueden, YO TAMBIÉN". Y fue ahí cuando todo
                empezó a cambiar.{" "}
                <strong>Y también es momento de que cambie para ti.</strong>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
