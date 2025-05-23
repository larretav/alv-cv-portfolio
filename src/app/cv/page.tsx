import { EnvelopeOutlinedIcon, MapPinOutlinedIcon, PhoneOutlinedIcon } from "@/components/icons";
import { Avatar } from "@heroui/avatar";
import { RatingTest } from "./_components/RatingTest";
<<<<<<< HEAD
import { SectionTitle } from "@/components";
import { EnvelopeIcon } from "@heroicons/react/24/outline";
=======
import { SectionTitle2 } from "@/components";
import { BriefcaseIcon } from "@heroicons/react/24/outline";
>>>>>>> fdd65f1d5c596bc58b09873a9b05b71822891ee9

export default function CVPage() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-8 gap-10">
      <div className="col-span-2 flex flex-col items-stretch gap-4 p-6 rounded-large bg-slate-100 dark:bg-slate-800 ">
        <div className="flex justify-center">
          <Avatar
            src="https://avatar.iran.liara.run/public/boy"
            alt="avatar"
            className="size-32"
          />
        </div>

        {/* Contacto */}
        <div>
          <SectionTitle text="Contacto" />
          <div className="flex items-center gap-2">
            <EnvelopeIcon className="size-5" />
            <span>larreta_vzla@hotmail.com</span>
          </div>
        </div>
        {/* <PhoneOutlinedIcon size="1rem" />
        <EnvelopeOutlinedIcon size="1rem" />
        <MapPinOutlinedIcon size="1rem" /> */}
      </div>

      <div className="col-span-6 p-6 rounded-large bg-slate-100 dark:bg-slate-800 ">
        Información de empleo
        <div>
          <SectionTitle2 text="Experiencia Laboral" icon={BriefcaseIcon} />
        </div>
      </div>
    </div>
  );
}