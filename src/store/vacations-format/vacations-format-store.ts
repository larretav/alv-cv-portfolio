/* eslint-disable */

import type { State, Actions } from "./vacations-format-types";
import { create } from "zustand";
import { persist } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";

import createSelectors from "../selectors";
import { getPlaceAndDate } from "@/utils";

const placeDate = getPlaceAndDate();

const initState: State = {
  location: placeDate,
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
};

const vacationsFormatStore = create<State & Actions>()(persist(immer((set, get) => ({
  ...initState,

  setLocation: (location) => set((state) => {
    state.location = location;
  }),

  setName: (name) => set((state) => {
    state.name = name;
  }),

  setEmployeeId: (employeeId) => set((state) => {
    state.employeeId = employeeId;
  }),

  setPosition: (position) => set((state) => {
    state.position = position;
  }),

  setHireDate: (hireDate) => set((state) => {
    state.hireDate = hireDate;
  }),

  setSalary: (salary) => set((state) => {
    state.salary = salary;
  }),

  setPeriod: (period) => set((state) => {
    state.period = period;
  }),

  setDays: (days) => set((state) => {
    state.days = days;
  }),

  setStartDate: (startDate) => set((state) => {
    state.startDate = startDate;
  }),

  setEndDate: (endDate) => set((state) => {
    state.endDate = endDate;
  }),

  setEffectiveDate: (effectiveDate) => set((state) => {
    state.effectiveDate = effectiveDate;
  }),

  setReturnDate: (returnDate) => set((state) => {
    state.returnDate = returnDate;
  }),

  setComments: (comments) => set((state) => {
    state.comments = comments;
  }),

})), { name: "vacations-format" }));

export const useVacationsFormatStore = createSelectors(vacationsFormatStore);
