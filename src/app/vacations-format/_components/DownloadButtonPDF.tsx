'use client';
import { ArrowDownTrayIcon } from '@heroicons/react/24/outline'
import { Button } from '@heroui/button'
import React from 'react'

export const DownloadButtonPDF = () => {
  const downloadPDF = () => {
    window.print();
  }
  return (
    <Button color="primary" startContent={<ArrowDownTrayIcon className="size-6" />} onPress={downloadPDF}>Descargar</Button>
  )
}
