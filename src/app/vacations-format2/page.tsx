import clsx from "clsx";
import { getPlaceAndDate } from "./_helpers/dates.helper";
import { Image } from "@heroui/image";
import { Divider } from "@heroui/divider";
import { forwardRef, HTMLAttributes, InputHTMLAttributes } from "react";

export default function VacationsFormatPage() {

  const placeDate = getPlaceAndDate();

  return (
    <div >
      {/* Línea vertical azul y verde */}
      <div className="absolute left-0 top-0 h-full w-2 bg-gradient-to-b from-blue-900 via-blue-900 to-green-500 z-10" />

      <div className="relative max-w-4xl mx-auto p-6 pl-6">
        <h1 className="text-2xl font-bold text-center mb-6">SOLICITUD DE VACACIONES</h1>

        <div className="flex flex-col gap-2 text-sm mb-6">
          <div className="flex gap-2">
            <p>Lugar y fecha:</p>
            <div className="flex-grow border-b border-b-"><span>{placeDate}</span></div>
          </div>

          <div className="flex gap-2">
            <p>Nombre:</p>
            <CustomInput defaultValue="Alejandro Lareta Valenzuela" />
          </div>
          <p>ID del colaborador: <CustomInput defaultValue="150" /></p>
          <p>Puesto Actual: <CustomInput defaultValue="Desarrollador Web" /></p>
          <p>Fecha de ingreso: <CustomInput defaultValue="16 de enero del 2023" /></p>
          <p>Salarios Diario (llenado por RH): <span className="underline">_________________________</span></p>
        </div>

        <div className="text-sm mb-6">
          <p>Periodo a disfrutar: <CustomInput defaultValue="Segundo" /></p>
          <p>No. de días a disfrutar: <CustomInput defaultValue="3" /> fecha de inicio: <CustomInput defaultValue="02-06-2025" /> fecha de término: <CustomInput defaultValue="04-06-2025" /></p>
          <p>Efectivo a partir de la fecha: <CustomInput defaultValue="02-06-2025" /></p>
          <p><strong>IMPORTANTE:</strong> fecha en la que deberá presentarse: <CustomInput defaultValue="05-06-2025" /></p>
        </div>

        <div className="mb-6">
          <label className="block text-sm font-medium">OBSERVACIONES Y COMENTARIOS:</label>
          <span className="mt-1 block w-full border-b border-black py-2" />
          <span className="mt-1 block w-full border-b border-black py-2" />
        </div>

        <div className="flex flex-col sm:flex-row gap-4 mb-10 text-center">
          <div className="flex-1">
            <label>Firma del Colaborador</label>
            <div className="border h-16 mt-2" />
          </div>
          <div className="flex-1">
            <label>Firma Gerente / Jefe Inmediato</label>
            <div className="border h-16 mt-2" />
          </div>
          <div className="flex-1">
            <label>Firma de Dirección</label>
            <div className="border h-16 mt-2" />
          </div>
        </div>

        <h2 className="font-semibold mb-2 italic">Exclusivo para ser llenado por Recursos Humanos</h2>

        <div className="text-sm mb-4">
          <p>Colaborador: __________________________________</p>
          <p>Puesto: ________________________________________</p>
        </div>

        <div className="text-sm space-y-4 mb-10">
          <p>
            A través del presente se le informa que se autoriza el goce de sus vacaciones correspondiente al periodo _________ por ______ días, iniciando el __________ y terminando el ___________, debiendo presentarse a sus labores el ____________, quedando pendientes de disfrutar ______ días correspondientes al periodo en mención, mismos que posteriormente dará aviso mediante el formato correspondiente.
          </p>
          <p>
            No habiendo ningún inconveniente de su parte, hago de su conocimiento que el registro y pago del porcentaje de prima vacacional correspondiente al periodo __________ será aplicado en la nómina que corresponda de acuerdo a su fecha de aniversario cumplido.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between">
          <div className="text-center sm:text-left">
            <p className="mb-2">Atentamente</p>
            <p className="mt-10 border-t w-64 mx-auto sm:mx-0">Gerente de Recursos Humanos Integradora de Franquicias PKT1 SAPI de CV</p>
          </div>

          <div className="mt-10 sm:mt-0 text-sm text-muted-foreground text-center sm:text-right">
            <p>
              <strong>www.enviospkt1.com</strong> | Ignacio Allende Sur #14 Col. Centro, C.P. 81200, Los Mochis, Sinaloa.
            </p>
            <p>Tel. (668) 818 3290</p>
          </div>
        </div>
      </div>
    </div>
  );
}

const CustomInput = forwardRef<HTMLInputElement, InputHTMLAttributes<HTMLInputElement>>(({ ...props }, ref) => {
  return (
    <input
      ref={ref}
      {...props}
      type="text"
      className={clsx(
        "w-full bg-transparent transition-colors duration-200 outline-none",
        "border-1 border-transparent border-b-content1-foreground border-b-1 px-1",
        "focus:border-blue-500 hover:border-blue-500 active:border-blue-500",
        props.className
      )}
    />
  );
});