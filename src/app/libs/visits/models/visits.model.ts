export interface IVisitsDoctor {
  name: string
  imageUri: string
}

export interface IVisits {
  id: string
  doctor: IVisitsDoctor
  room: string
  date: Date
  examination: string
}
