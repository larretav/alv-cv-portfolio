import { Divider } from "@heroui/divider";
import { fontMerriweather, fontSans } from "@/config/fonts";
import { cn } from "@/utils";
import Image from "next/image";
import { ColaboratorSignature } from "./_components/ColaboratorSignature";
import { ManagerSignature } from "./_components/ManagerSignature";
import { DownloadButtonPDF } from "./_components/DownloadButtonPDF";
import { BottomLineSpace } from "./_components/BottomLineSpace";
import EmployeeInfoForm from "./_components/EmployeeInfoForm";

export default function VacationsFormatPage() {

  return (
    <div className="relative w-full ">
      <div className="fixed bottom-10 right-4 z-50 print:hidden">
        <DownloadButtonPDF />
      </div>

      <div className="flex flex-col relative pb-10 print:shadow-none print:p-0 print:h-letter">

        <div className={cn("relative max-w-letter h-letter mx-auto bg-content1 dark:bg-content2 shadow-md text-xs p-0 print:shadow-none print:bg-white", fontMerriweather.className)}>

          <Image src="/assets/pkt1-logo.png" width={140} height={50} alt="logo" className="absolute top-10 right-10 " />

          <div className="flex gap-0 h-full">
            <div className="w-36 py-10">
              <div className="h-1/6 bg-green-500" />
              <div className="h-5/6 bg-blue-900" />
            </div>

            <div className="flex flex-col gap-2 pt-16 px-20 ">

              <div className="mb-6">
                <h1 className={cn("text-lg font-bold text-center", fontSans.className)}>SOLICITUD DE VACACIONES</h1>
              </div>

              {/* Campos */}
              <div className="flex flex-col gap-3 ">
                <EmployeeInfoForm />
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
              <div className="mt-6">
                <h2 className="font-semibold mb-4 italic font-sans">Exclusivo para ser llenado por Recursos Humanos</h2>

                <div className="mb-4 space-y-1">
                  <p>Colaborador: <BottomLineSpace space={35} /></p>
                  <p>Puesto: <BottomLineSpace space={40} /></p>
                </div>


                <div className="mt-6 space-y-3">
                  <p>Presente:</p>
                  <p className="text-justify indent-14">
                    A través del presente se le informa que se autoriza el goce de sus vacaciones correspondiente al periodo
                    <BottomLineSpace space={20} /> por <BottomLineSpace space={4} /> días, iniciando el <BottomLineSpace space={20} /> y terminando el <BottomLineSpace space={20} />,
                    correspondientes al periodo en mención, mismos que posteriormente dará aviso mediante el formato
                    correspondiente.
                  </p>
                  <p className="mt-4">
                    No habiendo ningún inconveniente de su parte, hago de su conocimiento que el registro y pago del
                    porcentaje de prima vacacional correspondiente al periodo <BottomLineSpace space={24} /> será aplicado en la
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


            </div>
          </div>

          <div className="absolute bottom-10 right-10 mt-6 text-right text-xs text-foreground-500 ">
            <p>www.<span className="text-green-600 text-lg font-semibold">enviospkt1</span>.com</p>
            <div className="flex flex-col gap-0 leading-5">
              <p>Ignacio Allende Sur # 14 Col. Centro</p>
              <p>C.P. 81200, Los Mochis, Sinaloa.</p>
              <p>Tel. (668) <span className="font-bold">818 3290</span></p>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}


