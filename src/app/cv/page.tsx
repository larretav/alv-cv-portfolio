import { AcademicCapIcon, BriefcaseIcon, CalendarIcon } from "@heroicons/react/24/outline";
import { Avatar } from "@heroui/avatar";
import { certifications, workExperience, education, featuredProjects, professionalProfile } from "@/data";
import { EducationItem, ExperienceItem, ProjectItem, SectionTitle2 } from "@/components";
import { EnvelopeOutlinedIcon, MapPinOutlinedIcon, PhoneOutlinedIcon } from "@/components/icons";
import { Link } from "@heroui/link";

export default function CVPage() {
  return (
    <div className="w-full h-fit grid grid-cols-1 md:grid-cols-8 gap-4 pb-10  ">
      {/* Panel izquierdo */}
      <div className="col-span-2 p-4 rounded-large bg-teal-600/10 dark:bg-teal-900/20 ">
        <Avatar src="https://avatar.iran.liara.run/public/boy" alt="avatar" />
        <PhoneOutlinedIcon size="1rem" />
        <EnvelopeOutlinedIcon size="1rem" />
        <MapPinOutlinedIcon size="1rem" />
      </div>

      {/* Panel derecho */}
      <div className="col-span-6 flex flex-col gap-8 p-6 lg:p-8 rounded-large bg-teal-600/10 dark:bg-teal-900/20 print:p-6 ">
        <section className="space-y-4">
          <SectionTitle2 text="Perfil profesional" />
          <p className="indent-10 text-justify">
            { professionalProfile}
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
          <SectionTitle2 text="Certificaciones" icon={<CalendarIcon />} />
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
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {featuredProjects.map(proj => <ProjectItem key={proj.link} {...proj} />)}
          </div>
        </section>
      </div>
    </div>
  );
}