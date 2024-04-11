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
      </div>
      </div>
    </div>

  )
}

export default App
