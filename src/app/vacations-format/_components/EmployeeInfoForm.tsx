'use client';
import React, { useEffect } from 'react'
import { CustomInput } from './CustomInput';
import { useVacationsFormatStore } from '@/store';

const EmployeeInfoForm = () => {


  const {
    // States
    location,
    name,
    employeeId,
    position,
    hireDate,
    salary,
    period,
    days,
    startDate,
    endDate,
    effectiveDate,
    returnDate,
    comments,

    // Actions
    setLocation,
    setName,
    setEmployeeId,
    setPosition,
    setHireDate,
    setSalary,
    setPeriod,
    setDays,
    setStartDate,
    setEndDate,
    setEffectiveDate,
    setReturnDate,
    setComments,
  } = useVacationsFormatStore((state) => state);

  useEffect(() => {
    setLocation(location);
  });

  return (
    <>
      <CustomInput label="Lugar y fecha:" value={location} onValueChange={setLocation} />
      <CustomInput label="Nombre:" value={name} onValueChange={setName} />
      <CustomInput label="ID del colaborador:" value={employeeId} onValueChange={setEmployeeId} />
      <CustomInput label="Puesto Actual:" value={position} onValueChange={setPosition} />
      <CustomInput label="Fecha de ingreso:" value={hireDate} onValueChange={setHireDate} />
      <CustomInput label="Salarios Diario (llenado por RH):" value={salary} onValueChange={setSalary} />
      <CustomInput label="Periodo a disfrutar:" value={period} onValueChange={setPeriod} />

      <div className="flex items-center ">
        <CustomInput label="No. De días a disfrutar:" value={days} onValueChange={setDays} className="text-center " />
        <CustomInput label="fecha de inicio:" value={startDate} onValueChange={setStartDate} className="text-center" />
        <CustomInput label="fecha de término:" value={endDate} onValueChange={setEndDate} className="text-center" />
      </div>

      <CustomInput label="Efectivo a partir de la fecha:" value={effectiveDate} onValueChange={setEffectiveDate} />
      <CustomInput label="IMPORTANTE: fecha en la que deberá presentarse:" value={returnDate} onValueChange={setReturnDate} classNames={{ base: 'flex-wrap gap-0' }} />
      <CustomInput label="OBSERVACIONES Y COMENTARIOS:" value={comments} onValueChange={setComments} classNames={{ base: 'flex-wrap gap-0' }} />
    </>
  )
}

export default EmployeeInfoForm