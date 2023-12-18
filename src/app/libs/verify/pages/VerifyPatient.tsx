import { PageWithBars } from '../../common'
import { VerifyForm } from '../components'

const VerifyPatient = () => {
  return (
    <PageWithBars>
      <div className={'h-full min-h-[inherit] flex items-center justify-center'}>
        <VerifyForm />
      </div>
    </PageWithBars>
  )
}

export default VerifyPatient
