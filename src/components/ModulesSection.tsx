import React from "react";
import Image from "next/image";
import Link from "next/link";

export function ModulesSection() {
  const modules = [
    {
      title: "ROADMAP DE 0 A $10,000 USD",
      description:
        "En este módulo vas a conocer la ruta EXACTA para facturar tus primeros $10,000 dólares por internet vendiendo productos digitales sin invertir en publicidad.",
    },
    {
      title: "MENTORIA MINDSET",
      description:
        "A la hora de emprender, la mentalidad es lo MÁS importante y aquí te enseñaré ejercicios prácticos para tener una mentalidad inquebrantable frente a cualquier desafío que tengas.",
    },
    {
      title: "MARKETING MAGNÉTICO",
      description:
        "Aquí te enseñaré cómo crear el ecosistema PERFECTO para atraer a cientos de clientes potenciales todos los días y la venta se haga más sencilla para ti.",
    },
    {
      title: "BUYER PERSONAS, GATILLOS MENTALES Y COPYWRITING",
      description:
        "Descubre el arte de escribir textos persuasivos, que enganchen con tu audiencia, gracias al poder de los gatillos mentales y conocer a tu buyer persona.",
    },
    {
      title: "CREACIÓN DE CONTENIDO ESTRATÉGICO",
      description:
        "Aprenderás cómo crear contenido que genere VENTAS y cómo tener ideas infinitas utilizando las mismas herramientas que yo uso.",
    },
    {
      title: "VENTAS DESDE EL ANONIMATO",
      description:
        "Aquí te enseñaré cómo vender SIN aparecer en cámaras por Tik Tok, Instagram, Facebook, Youtube y Whatsapp, cada una con su propia estrategia que te convertirá en un EXPERTO en ventas orgánicas.",
    },
    {
      title: "VENTAS CON TU MARCA PERSONAL",
      description:
        "Conoce las estrategias que te ayudarán a FIDELIZAR tu audiencia, crear una marca personal con autoridad y que te permita vender cualquier tipo de producto a través de tu marca personal.",
    },
    {
      title: "CIERRE DE VENTAS",
      description:
        "Aquí aprenderás distintos tipos de cierres de venta para que vendas MASIVAMENTE en evergreen y en lanzamientos. Además te enseñaremos a derribar objeciones, generar confianza y lograr que tus clientes te pidan el link de pago.",
    },
  ];

  return (
    <section className="bg-dark-light py-16" id="participar">
      <div className="container max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-6">
            EL MÉTODO MÁS PROBADO Y VALIDADO PARA EMPEZAR TU NEGOCIO DIGITAL
          </h2>

          <h3 className="text-2xl font-heading font-bold text-gold mb-8">
            METODO X DE MENTORIA
          </h3>

          <div className="flex justify-center mb-10">
            <Image
              src="/bundlecourse.webp"
              alt="Método MENTORIA X"
              width={600}
              height={300}
              className="mx-auto"
            />
          </div>

          <p className="text-white text-lg mb-10 max-w-4xl mx-auto">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. At
            obcaecati sunt error recusandae exercitationem, perspiciatis nisi
            suscipit inventore voluptatibus, illum quam sapiente sequi repellat,
            accusamus veritatis eaque reiciendis maxime sit.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-10">
          {modules.map((module, index) => (
            <div
              key={index}
              className="bg-dark p-6 rounded-lg border border-gold/30"
            >
              <h4 className="text-xl font-heading font-bold text-gold mb-4">
                Módulo {index + 1}: {module.title}
              </h4>
              <p className="text-white">{module.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <p className="text-white italic mb-8 text-sm">
            <strong>Nota:</strong> Lorem ipsum dolor sit amet, consectetur
            adipisicing elit. Est temporibus odio quis harum earum, rem beatae
            blanditiis provident rerum natus, ab numquam quia sed tempore hic
            velit eum. Qui, eligendi.
          </p>

          <Link
            href="#"
            className="bg-[#3fc343] hover:bg-[#3fc343]/90 text-white font-heading font-bold py-4 px-8 rounded-md text-xl inline-block transition-colors"
            target="_blank"
            rel="noopener noreferrer"
          >
            ¡QUIERO SER PARTE DEL PROGRAMA AHORA!
          </Link>
        </div>
      </div>
    </section>
  );
}
