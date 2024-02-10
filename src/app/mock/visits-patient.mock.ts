import { IVisits } from '../libs/visits'

export const VISITS_PATIENT_MOCK: Array<IVisits> = [
  {
    doctor: {
      name: 'Dr. Joe Doe',
      imageUri: '',
    },
    room: '26B',
    date: new Date('10/01/2024/10:15'),
    examination: {
      pl: 'Badanie krwii',
      en: 'Blood test',
    },
    description: {
      pl: 'Nemo enim ipsam voluptatem quia voluptas sit.',
      en: 'Nemo enim ipsam voluptatem quia voluptas sit.',
    },
  },
  {
    doctor: {
      name: 'Dr. Noel Doe',
      imageUri: '',
    },
    room: '11A',
    date: new Date('15/01/2024/13:15'),
    examination: {
      pl: 'Rentgen kolana',
      en: 'Knee X-Ray',
    },
    description: {
      pl: 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores.',
      en: 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores.',
    },
  },
]
