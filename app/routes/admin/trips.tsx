import { Header } from 'components'


const trips = () => {
  return (
    <main className='all-users wrapper'>
            <Header
               title="Trips"
               description =" View and manage all trips in the system. You can filter, sort, and edit trip details as needed."
               ctaText='Create Trip'
               ctaUrl='/trips/create'
            />

    </main>        
  )
}

export default trips