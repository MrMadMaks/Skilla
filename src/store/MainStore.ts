import { format, subDays } from "date-fns";
import { makeAutoObservable } from "mobx";
import { ICall } from "../types/Calls.types";

export class MainStore {
  calls: any[] = [];
  filter: string | undefined;
  endDate: string | undefined = format(new Date(), "yyyy-MM-dd");
  startDate: string | undefined = format(subDays(new Date(), 3), "yyyy-MM-dd");
  inOut = "";
  fixDate: string | undefined = "3d";
  allTypes: string | undefined = "Все типы";
  allEmployes: string | undefined = "Все сотрудники";
  allCalls: string | undefined = "Все сотрудники";
  allEstimations: string | undefined = "Все оценки";
  allErrors: string | undefined = "Все ошибки";
  term: string | undefined = "";


  constructor() {
    makeAutoObservable(this);
  }

  searchNumber = (calls: any[], term: string | undefined) => {
    if (term === undefined || term.length === 0) {
      return calls;
    }
    return calls.filter(item => {
      return item.partner_data.phone.indexOf(term) > -1;
    })
  }

  setTerm = (
    term: string
  ) => {
    this.term = term
  }

  setAllTypes = (
    allTypes: string
  ) => {
    this.allTypes = allTypes
  }

  setAllErrors = (
    allErrors: string
  ) => {
    this.allErrors = allErrors
  }

  setAllCalls = (
    allCalls: string
  ) => {
    this.allCalls = allCalls
  }

  setAllEmployes = (
    allEmployes: string
  ) => {
    this.allEmployes = allEmployes
  }

  setAllEstimations = (
    Estimations: string
  ) => {
    this.allEstimations = Estimations
  }

  setFilterDate = (
    fixDate?: "3d" | "week" | "year" | "month",
    startDate?: any,
    endDate?: any
  ) => {
    const map = { "3d": 3, "week": 7, "month": 30, "year": 365 };

    if (fixDate) {
      this.fixDate = fixDate;
      this.endDate = format(new Date(), "yyyy-MM-dd");
      this.startDate = format(subDays(new Date(), map[fixDate]), "yyyy-MM-dd");
    } else if (startDate && endDate) {
      this.startDate = format(startDate, "yyyy-MM-dd");
      this.endDate = format(endDate, "yyyy-MM-dd");
    }
  };

  get getCallsArray() {
    return this.calls;
  }

  getCalls = async () => {
    await fetch(
      `https://api.skilla.ru/mango/getList?date_start=${this.startDate}&date_end=${this.endDate}&in_out=${this.inOut}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer testtoken",
        },
      }
    )
      .then((res) => res.json())
      .then((res) => (this.calls = res.results));
  };
}
