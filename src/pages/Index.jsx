import NavBar from '../components/NavBar'
import Card from '../components/Card'

const Index = () => {
  
  return (
    <div className='pb-20'>
      <NavBar/>
      <div className='w-full flex flex-col mt-4 text-sm px-4 sm:px-8 lg:px-40'>
        <h1 className='text-2xl font-bold'>Top Rated Book</h1>
        <p className='mb-8'>this is teh top 40 books in sale</p>
        <Card/>
      </div>
    </div>
  )
}

export default Index
