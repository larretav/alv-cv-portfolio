export type State = {
  location: string,
  name: string,
  employeeId: string,
  position: string,
  hireDate: string,
  salary: string,
  period: string,
  days: string,
  startDate: string,
  endDate: string,
  effectiveDate: string,
  returnDate: string,
  comments: string,
};

export type Actions = {
  setLocation: (location: string) => void;
  setName: (name: string) => void;
  setEmployeeId: (employeeId: string) => void;
  setPosition: (position: string) => void;
  setHireDate: (hireDate: string) => void;
  setSalary: (salary: string) => void;
  setPeriod: (period: string) => void;
  setDays: (days: string) => void;
  setStartDate: (startDate: string) => void;
  setEndDate: (endDate: string) => void;
  setEffectiveDate: (effectiveDate: string) => void;
  setReturnDate: (returnDate: string) => void;
  setComments: (comments: string) => void;
};
