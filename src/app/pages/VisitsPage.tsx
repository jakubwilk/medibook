import { useLocation } from 'react-router-dom'

const VisitsPage = () => {
  const { state } = useLocation()

  console.log('state', state)

  return <div>{'test'}</div>
}

export default VisitsPage
