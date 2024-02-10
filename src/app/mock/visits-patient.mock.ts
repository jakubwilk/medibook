import { IVisits } from '../libs/visits'

export const VISITS_PATIENT_MOCK: Array<IVisits> = [
  {
    id: '1',
    doctor: {
      name: 'Dr. Joe Doe',
      imageUri: '',
    },
    room: '26B',
    date: new Date('10/01/2024/10:15'),
    examination: 'type.bloodTest',
  },
  {
    id: '2',
    doctor: {
      name: 'Dr. Noel Doe',
      imageUri: '',
    },
    room: '11A',
    date: new Date('15/01/2024/12:15'),
    examination: 'type.kneeXRay',
  },
]
