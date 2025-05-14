import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Curriculum Vitae",
  description: "Pagina para ver y descargar curriculum vitae de Alejandro Larreta Valenzuela",
}

export default function CVLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      {children}
    </>
  );
}