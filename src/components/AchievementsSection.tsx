import React from "react";
import Image from "next/image";

export function AchievementsSection() {
  const achievements = [
    {
      image: "https://ext.same-assets.com/4000458462/1401581533.png",
      title:
        "Una comunidad    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi ess rror asperiores unde vero ipsam est officiis imped",
    },
    {
      image: "https://ext.same-assets.com/1388880291/3593503313.png",
      title:
        "Más de 1 millón y   Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi esse error asperiores unde vero ipsam est officiis impedit.",
    },
    {
      image: "https://ext.same-assets.com/932537138/3024221644.png",
      title:
        "Reconocimiento en la industria   Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi esse  error asperiores unde vero ipsam est officiis impedit",
    },
  ];

  return (
    <section className="bg-dark py-16">
      <div className="container max-w-6xl mx-auto px-4">
        <div className="flex flex-col items-center">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-white text-center mb-6">
            PERO EN SU MOMENTO
          </h2>

          <p className="text-white text-center mb-16 max-w-4xl mx-auto text-lg">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi esse
            error asperiores unde vero ipsam est officiis impedit incidunt ut
            odio consequatur, facere, saepe cum enim totam repellat? Vero, sed.
            <br />
            <br />
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, ipsum
            dolor illo similique recusandae ut laudantium ex placeat iure, modi
            illum sed commodi animi quia beatae repudiandae porro. Quia, omnis!
          </p>

          <h3 className="text-2xl md:text-3xl font-heading font-bold text-white text-center mb-12">
            HOY GRACIAS A ESTE MÉTODO TENGO:
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {achievements.map((achievement, index) => (
              <div
                key={index}
                className="flex flex-col items-center text-center"
              >
                <div className="mb-6 h-16 relative">
                  <Image
                    src={achievement.image}
                    alt={achievement.title}
                    width={64}
                    height={64}
                    className="object-contain"
                  />
                </div>
                <h4 className="text-white text-xl font-heading font-medium">
                  {achievement.title}
                </h4>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <Image
              src="/girl-top.jpg"
              alt="MENTORIA"
              width={500}
              height={300}
              className="mx-auto mb-8"
            />

            <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-4">
              TODO ESTO CON...
            </h2>

            <h3 className="text-2xl md:text-3xl font-heading font-bold text-white mb-4">
              UN SOLO MÉTODO
            </h3>

            <p className="text-gold italic text-xl">
              (05 fases 100% validadas y probadas)
            </p>

            <Image
              src="https://ext.same-assets.com/348094948/1978723409.png"
              alt="PROGRAMA DE MENTORÍA"
              width={800}
              height={400}
              className="mx-auto mt-8"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
