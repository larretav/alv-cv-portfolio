'use client';
import { Divider } from "@heroui/divider";
import { useEffect, useState } from "react";
import { SignatureUpload } from "./SignaturaUpload";
import { LocaleStorageKeys } from "@/enum";

export const ManagerSignature = () => {

  const [signature, setSignature] = useState<string | null>(null);

  const handleSignatureChange = (signature: string | null) => {
    setSignature(signature);
    if (signature)
      localStorage.setItem(LocaleStorageKeys.MANAGER_SIGNATURE, signature);
  }

  useEffect(() => {
    const colaboratorSignature = localStorage.getItem(LocaleStorageKeys.MANAGER_SIGNATURE);
    setSignature(colaboratorSignature);
  }, [])

  return (
    <div className="flex flex-col items-center gap-2 ">
      <SignatureUpload value={signature} onChange={handleSignatureChange} placeholder="Y la de tu jefe we" />
      <div className="w-full text-center">
        <Divider className="mb-2 bg-foreground-700" />
        <p className="text-sm">Firma Gerente / Jefe Inmediato</p>
      </div>
    </div>
  )
}
