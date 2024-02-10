export interface IVisitsDoctor {
  name: string
  imageUri: string
}

export interface IVisitsExamination {
  pl: string
  en: string
}

export interface IVisitsDescription {
  pl: string
  en: string
}

export interface IVisits {
  doctor: IVisitsDoctor
  room: string
  date: Date
  examination: IVisitsExamination
  description: IVisitsDescription
}
