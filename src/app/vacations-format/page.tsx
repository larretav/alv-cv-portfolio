export default function VacationsFormatPage() {
  return (
       <div className="relative">
      {/* Línea vertical azul y verde */}
      <div className="absolute left-0 top-0 h-full w-2 bg-gradient-to-b from-blue-900 via-blue-900 to-green-500 z-10" />

      <div className="relative max-w-4xl mx-auto p-6 pl-6">
        <h1 className="text-2xl font-bold text-center mb-6">SOLICITUD DE VACACIONES</h1>

        <div className="text-sm mb-6 space-y-1">
          <p>Lugar y fecha: <span className="underline">Los Mochis, Sinaloa, 24 de mayo del 2025</span></p>
          <p>Nombre: <CustomInput defaultValue="Alejandro Lareta Valenzuela" /></p>
          <p>ID del colaborador: <CustomInput defaultValue="150" /></p>
          <p>Puesto Actual: <CustomInput defaultValue="Desarrollador Web" /></p>
          <p>Fecha de ingreso: <CustomInput defaultValue="16 de enero del 2023" /></p>
          <p>Salario Diario (llenado por RH): <span className="underline">_________________________</span></p>
        </div>

        <div className="text-sm mb-6 space-y-1">
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
          {["Colaborador", "Gerente / Jefe Inmediato", "Dirección"].map((label) => (
            <div className="flex-1" key={label}>
              <label className="text-sm font-medium">{`Firma de ${label}`}</label>
              <div className="border h-16 mt-2" />
            </div>
          ))}
        </div>

        <h2 className="font-semibold mb-2 italic">Exclusivo para ser llenado por Recursos Humanos</h2>

        <div className="text-sm mb-4 space-y-1">
          <p>Colaborador: __________________________________</p>
          <p>Puesto: ________________________________________</p>
        </div>

        <div className="border rounded-lg p-4 text-sm bg-white shadow-sm">
          <p className="mb-2">
            A través del presente se le informa que se autoriza el goce de sus vacaciones correspondiente al periodo _________ por ______ días, iniciando el __________ y terminando el ___________, debiendo presentarse a sus labores el ____________, quedando pendientes de disfrutar ______ días correspondientes al periodo en mención, mismos que posteriormente dará aviso mediante el formato correspondiente.
          </p>
          <p>
            No habiendo ningún inconveniente de su parte, hago de su conocimiento que el registro y pago del porcentaje de prima vacacional correspondiente al periodo __________ será aplicado en la nómina que corresponda de acuerdo a su fecha de aniversario cumplido.
          </p>

          <div className="text-right mt-6">
            <p>Atentamente</p>
            <p className="mt-10 border-t w-64 mx-auto">Gerente de Recursos Humanos Integradora de Franquicias PKT1 SAPI de CV</p>
          </div>
        </div>

        <div className="mt-10 text-sm text-center text-gray-500">
          <p><strong>www.enviospkt1.com</strong> | Ignacio Allende Sur #14 Col. Centro, C.P. 81200, Los Mochis, Sinaloa.</p>
          <p>Tel. (668) 818 3290</p>
        </div>
      </div>
    </div>
  );
}

function CustomInput({ defaultValue }: { defaultValue: string }) {
  return (
    <input
      type="text"
      defaultValue={defaultValue}
      className="border-none bg-transparent border-b border-transparent focus:border focus:border-blue-500 focus:bg-white focus:outline-none px-1 transition-colors duration-200"
    />
  );
}