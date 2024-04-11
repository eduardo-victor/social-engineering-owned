import './App.css'
import Form from './components/Form'

function App() {


  return (
    <div className='h-screen w-screen bg-[#1d3557]'>
      <div className='h-full w-full flex justify-center items-center'>
      <div className='flex items-center flex-col justify-center w-[100%] h-full gap-3'>
        <h1 className='text-slate-100 font-medium text-4xl font-pixel'>Did I Leak? D:</h1>
        <Form/>
        <p className='text-slate-50 font-semibold text-sm'>This site consults several dbleaks to check if your password has been leaked</p>
        <p className='text-slate-50 font-semibold text-sm flex-wrap w-[70%]'>Pwned Passwords are hundreds of millions of real world passwords previously exposed in data breaches. This exposure makes them unsuitable for ongoing use as they're at much greater risk of being used to take over other accounts. They're searchable online below as well as being downloadable for use in other online systems. <a href="https://github.com/eduardo-victor/social-engineering-owned" className='border-b'>Read more about how HIBP protects the privacy of searched passwords</a>.</p>
      </div>
      </div>
    </div>

  )
}

export default App
