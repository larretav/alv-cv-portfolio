import { getPlaceAndDate } from "./_helpers/dates.helper";
import { Divider } from "@heroui/divider";
import { CustomInput } from "./_components/CustomInput";
import { fontMerriweather } from "@/config/fonts";
import { cn } from "@/utils";
import Image from "next/image";
import { ColaboratorSignature } from "./_components/ColaboratorSignature";
import { ManagerSignature } from "./_components/ManagerSignature";
import { DownloadButtonPDF } from "./_components/DownloadButtonPDF";

export default function VacationsFormatPage() {


  const placeDate = getPlaceAndDate();

  const formData = {
    location: placeDate,
    date: "24 de mayo del 2025",
    name: "Alejandro Larreta Valenzuela",
    employeeId: "150",
    position: "Desarrollador Web",
    hireDate: "16 de enero del 2023",
    salary: "",
    period: "Segundo",
    days: "3",
    startDate: "02-06-2025",
    endDate: "04-06-2025",
    effectiveDate: "02-06-2025",
    returnDate: "05-06-2025",
    comments: "",
  }

  return (
    <div className="relative w-full ">
      <div className="fixed bottom-10 right-4 z-50 print:hidden">
        <DownloadButtonPDF />
      </div>

      <div className="flex flex-col relative pb-10 print:shadow-none print:p-0 print:max-w-letter print:h-letter">

        <div className={cn("relative max-w-letter mx-auto bg-content1 dark:bg-content2 shadow-md py-6 text-xs print:p-0 print:shadow-none", fontMerriweather.className)}>
          {/* Left sidebar with green and blue */}

          <Image src="/assets/pkt1-logo.png" width={160} height={70} alt="logo" className="absolute top-10 right-10 " />

          {/* Main form content */}
          <div className="flex gap-0 h-full">
            <div className="w-36 py-8">
              <div className="h-1/6 bg-green-500" />
              <div className="h-5/6 bg-blue-900" />
            </div>

            <div className="hidden print:block print-left-bar">
              <div className="print-green" />
              <div className="print-blue" />
            </div>

            <div className="flex flex-col gap-2 p-16 relative print:p-16">

              <div className="mb-6">
                <h1 className="text-lg font-bold text-center font-sans">SOLICITUD DE VACACIONES</h1>
              </div>

              {/* Campos */}
              <div className="flex flex-col gap-3 ">

                <CustomInput label="Lugar y fecha:" defaultValue={formData.location} />
                <CustomInput label="Nombre:" defaultValue={formData.name} />
                <CustomInput label="ID del colaborador:" defaultValue={formData.employeeId} />
                <CustomInput label="Puesto Actual:" defaultValue={formData.position} />
                <CustomInput label="Fecha de ingreso:" defaultValue={formData.hireDate} />
                <CustomInput label="Salarios Diario (llenado por RH):" defaultValue={formData.salary} />
                <CustomInput label="Periodo a disfrutar:" defaultValue={formData.period} />

                <div className="flex items-center ">
                  <CustomInput label="No. De días a disfrutar:" defaultValue={formData.days} className="text-center " />
                  <CustomInput label="fecha de inicio:" defaultValue={formData.startDate} className="text-center" />
                  <CustomInput label="fecha de término:" defaultValue={formData.endDate} className="text-center" />
                </div>

                <CustomInput label="Efectivo a partir de la fecha:" defaultValue={formData.effectiveDate} />
                <CustomInput label="IMPORTANTE: fecha en la que deberá presentarse:" defaultValue={formData.returnDate} classNames={{ base: 'flex-wrap gap-0' }} />
                <CustomInput label="OBSERVACIONES Y COMENTARIOS:" defaultValue={formData.comments} classNames={{ base: 'flex-wrap gap-0' }} />
              </div>

              {/* Firmas */}
              <div className="grid grid-cols-3 gap-4 items-end">
                <div>
                  <ColaboratorSignature />
                </div>

                <div className="text-center">
                  <ManagerSignature />
                </div>
                <div className="text-center">
                  <Divider className="mb-2 bg-foreground-700" />
                  <p >Firma de Dirección</p>
                </div>
              </div>

              {/* Para RRHH */}
              <div className="mt-8">
                <h2 className="font-semibold mb-4 italic font-sans">Exclusivo para ser llenado por Recursos Humanos</h2>

                <div className="mb-4 space-y-1">
                  <p>Colaborador: __________________________________</p>
                  <p>Puesto: ________________________________________</p>
                </div>


                <div className="mt-6 space-y-4">
                  <p>Presente:</p>
                  <p className="text-justify indent-14">
                    A través del presente se le informa que se autoriza el goce de sus vacaciones correspondiente al periodo
                    _________________ por ____ días, iniciando el _________________ y terminando el _________________,
                    debiendo presentarse a sus labores el día _________________, quedando pendientes de disfrutar días
                    correspondientes al periodo en mención, mismos que posteriormente dará aviso mediante el formato
                    correspondiente.
                  </p>
                  <p className="mt-4">
                    No habiendo ningún inconveniente de su parte, hago de su conocimiento que el registro y pago del
                    porcentaje de prima vacacional correspondiente al periodo ________________________ será aplicado en la
                    nómina que corresponda de acuerdo a su fecha de aniversario cumplido.
                  </p>
                  <p className="text-center ">Atentamente</p>

                  <div className="text-center ">
                    <Divider className="w-96 mx-auto mb-2 mt-10 bg-foreground-700" />
                    <p className="text-sm">Gerente de Recursos Humanos Integradora de</p>
                    <p className="text-sm">Franquicias PKT1 SAPI de CV</p>
                  </div>
                </div>
              </div>

              <div className={cn("absolute bottom-4 right-10 mt-6 text-right text-sm text-foreground-500 font-sans",)}>
                <p>www.<span className="text-green-600 text-xl font-semibold">enviospkt1</span>.com</p>
                <div className="flex flex-col gap-0 leading-5">
                  <p>Ignacio Allende Sur # 14 Col. Centro</p>
                  <p>C.P. 81200, Los Mochis, Sinaloa.</p>
                  <p>Tel. (668) <span className="font-bold">818 3290</span></p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}
