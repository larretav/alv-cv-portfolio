import { EnvelopeOutlinedIcon, MapPinOutlinedIcon, PhoneOutlinedIcon } from "@/components/icons";
import { Avatar } from "@heroui/avatar";
import { RatingTest } from "./_components/RatingTest";
import { EducationItem, ExperienceItem, SectionTitle2 } from "@/components";
import { AcademicCapIcon, BriefcaseIcon } from "@heroicons/react/24/outline";
import { certifications, workExperience, education } from "@/data";
import { Link } from "@heroui/link";

export default function CVPage() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-8 gap-4 pb-10">
      {/* Panel izquierdo */}
      <div className="col-span-2 p-4 rounded-large bg-slate-100 dark:bg-slate-800 ">
        <Avatar src="https://avatar.iran.liara.run/public/boy" alt="avatar" />
        <PhoneOutlinedIcon size="1rem" />
        <EnvelopeOutlinedIcon size="1rem" />
        <MapPinOutlinedIcon size="1rem" />
      </div>

      {/* Panel derecho */}
      <div className="col-span-6 flex flex-col gap-8 p-6 lg:p-8 rounded-large bg-slate-100 dark:bg-slate-800 print:p-6">
        <section className="space-y-4">
          <SectionTitle2 text="Perfil profesional" />
          <p className="">
            Desarrollador web full stack con más de 5 años de experiencia en el diseño y desarrollo de aplicaciones
            web modernas y escalables. Especializado en React, Node.js y bases de datos SQL/NoSQL. Apasionado por
            crear experiencias de usuario excepcionales y soluciones técnicas eficientes. Enfocado en el aprendizaje
            continuo y la mejora de habilidades.
          </p>
        </section>

        <section className="space-y-4">
          <SectionTitle2 text="Experiencia Laboral" icon={<BriefcaseIcon />} />
          <div className="flex flex-col gap-4 px-4">
            {workExperience.map((exp, index) => (
              <ExperienceItem key={index} {...exp} />
            ))}
          </div>
        </section>

        <section className="space-y-4">
          <SectionTitle2 text="Educación" icon={<AcademicCapIcon />} />
          <div className="flex flex-col gap-4 px-4">
            {education.map((educ, index) => (
              <EducationItem key={index} {...educ} />
            ))}
          </div>
        </section>

        <section className="space-y-4">
          <SectionTitle2 text="Certificaciones" icon={<AcademicCapIcon />} />
          <div className="px-4">
            <ul className="space-y-2 list-disc pl-5">
              {certifications.map((cert, index) => (
                <li key={index}>
                  <Link href={cert.link} isExternal showAnchorIcon >{cert.title}</Link>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="space-y-4">
          <SectionTitle2 text="Proyectos destacados" />
          <p>En desarrollo</p>
        </section>
      </div>
    </div>
  );
}