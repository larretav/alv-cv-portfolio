import { EnvelopeOutlinedIcon, MapPinOutlinedIcon, PhoneOutlinedIcon } from "@/components/icons";
import { Avatar } from "@heroui/avatar";
import { RatingTest } from "./_components/RatingTest";

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
        Información de empleo

        <div>
          Rating
          <RatingTest />
        </div>
      </div>
    </div>
  );
}