import { EnvelopeOutlinedIcon, MapPinOutlinedIcon, PhoneOutlinedIcon } from "@/components/icons";
import { Avatar } from "@heroui/avatar";
import { RatingTest } from "./_components/RatingTest";
import { ExperienceItem, SectionTitle2 } from "@/components";
import { BriefcaseIcon } from "@heroicons/react/24/outline";
import { workExperience } from "@/data/work-experience.data";

export default function CVPage() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-8 gap-10">
      <div className="col-span-2 p-4 rounded-large bg-slate-100 dark:bg-slate-800 ">
        <Avatar src="https://avatar.iran.liara.run/public/boy" alt="avatar" />
        <PhoneOutlinedIcon size="1rem" />
        <EnvelopeOutlinedIcon size="1rem" />
        <MapPinOutlinedIcon size="1rem" />
      </div>
      <div className="col-span-6 p-4 rounded-large bg-slate-100 dark:bg-slate-800 ">
        <div className="px-2">
          <SectionTitle2 text="Experiencia Laboral" icon={<BriefcaseIcon />} />
          <div className="flex flex-col gap-4 px-4">
            {workExperience.map((exp, index) => (
              <ExperienceItem key={index} {...exp} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}