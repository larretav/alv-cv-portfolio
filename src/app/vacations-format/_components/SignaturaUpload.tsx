'use client';
import { cn } from "@/utils";
import { VisuallyHidden } from "@react-aria/visually-hidden";
import Image from "next/image";
import React, { useEffect, useState } from "react";

type Props = {
  value?: string | null;
  onChange?: (value: string | null) => void;
  placeholder?: string;
}

export const SignatureUpload = ({ value, onChange, placeholder = 'Arrastra tu firma aquí infame' }: Props) => {

  const [image, setImage] = useState<string | null>(value || null);
  const [isOnDragOver, setIsOnDragOver] = useState(false);

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    const file = e.dataTransfer.files[0];
    handleFile(file);
  };

  const handleFile = (file: File) => {
    if (file && file.type.startsWith("image/")) {
      const reader = new FileReader();
      reader.onload = () => {
        const result = reader.result as string;
        setImage(result);
        onChange && onChange(result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) handleFile(file);
  };

  useEffect(() => {
    if (value)
      setImage(value)
  }, [value])


  return (
    <div
      onDrop={handleDrop}
      onDragOver={(e) => { e.preventDefault(); setIsOnDragOver(true) }}
      onDragLeave={(e) => { e.preventDefault(); setIsOnDragOver(false) }}
      className={cn(
        "border border-dashed border-foreground-400 rounded-md p-2 text-center cursor-pointer hover:bg-default-50 transition", {
        "border-blue-500": isOnDragOver,
        "border-none ": image
      })}
    >
      <label className="block cursor-pointer">
        {image
          ? <Image src={image} alt="Firma" width={50} height={100} className="max-h-12 mx-auto" />
          : <p className="text-small text-foreground font-sans ">{placeholder}</p>
        }
        <VisuallyHidden>
          <input
            type="file"
            accept="image/*"
            onChange={handleChange}
          />
        </VisuallyHidden>
      </label>
    </div>
  );
}
