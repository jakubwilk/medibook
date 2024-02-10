import { PageWithBars } from '../../common'
import VisitsList from '../components/VisitsList'
import { IVisits } from '../models'

interface IProps {
  data: Array<IVisits>
}

const Visits = ({ data }: IProps) => {
  return (
    <PageWithBars>
      <div className={'flex items-center justify-center py-8'}>
        <VisitsList data={data} />
      </div>
    </PageWithBars>
  )
}

export default Visits
