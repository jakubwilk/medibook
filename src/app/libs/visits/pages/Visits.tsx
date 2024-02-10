import { IVisits } from '../models'

interface IProps {
  data: Array<IVisits>
}

const Visits = ({ data }: IProps) => {
  console.log('visits', data)

  return <div>{'visits'}</div>
}

export default Visits
