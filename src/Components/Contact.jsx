import React, { useState } from "react";
import { useRef } from "react";
import emailjs from '@emailjs/browser';
import ToastWithProgressBar from "./Toast";
import { FaCheckCircle } from "react-icons/fa";
import { animate, motion } from "motion/react"


const FormElementTextarea = () => {
    const form =useRef();

    const [name, setName] = useState('');
    const [email, setEmail] =useState('');
    const [message, setMessage] = useState('');

    const [isSent, setIsSent] = useState(false);
    const [showtoast, setShowtoast] = useState(false);

    const handleclear=()=>{
        setName('');
        setEmail('');
        setMessage('');
    }

const sendEmail = (e) => {
    e.preventDefault();
    console.log(form.current);
    setShowtoast(true);
    setIsSent(false);




    emailjs.sendForm(
      'service_owmwrt9',
      'template_muqi0gr',
      form.current,
      'kaWKRWf_7SuxDCN7-'      // This is your user ID or public key
    ).then(
      (result) => {
        console.log(result.text);
        setIsSent(true);
        handleclear();
        
        setTimeout(() => {
            setShowtoast(false);
        }, 2000);
        
      },
      (error) => {
        console.log(error.text);
        setIsSent(false);
        setTimeout(() => {
            showtoast(false);
        }, 1000);
        
      }
    );
  };
  return (
    <section className='pb-12 h-screen dark:bg-dark'>
      <div className='container '>
        <div className='-mx-4 flex   items-center justify-center flex-wrap'>
          <DefaultColumn>
            <form ref={form} onSubmit={sendEmail} >
            <h2 className='text-4xl text-center my-10  font-light mb-6  text-dark dark:text-white sm:text-4xl md:text-5xl'>Contact</h2>
            <label className='mb-[10px] block text-base font-medium text-dark dark:text-white'>
        From
      </label>
      <div className='relative mb-4'>
        <input
        value={name}
        onChange={(e) => setName(e.target.value)}
          type="text" name="from_name" placeholder="Your Name"
          className='  bg-white/10  backdrop-blur-none w-full  rounded-md border border-stroke dark:border-dark-3 py-[10px] pr-3 pl-12 text-dark-6 outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-gray-2'
        />
        <span className='absolute top-1/2 left-4 -translate-y-1/2'>
          <svg
            width={20}
            height={20}
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g opacity={0.8} fillRule="evenodd" clipRule="evenodd" fill="#9CA3AF">
              <path d="M3.334 4.167A.838.838 0 0 0 2.501 5v10c0 .456.377.833.833.833h13.333a.838.838 0 0 0 .834-.833V5a.838.838 0 0 0-.834-.833H3.334ZM.834 5c0-1.377 1.123-2.5 2.5-2.5h13.333c1.377 0 2.5 1.123 2.5 2.5v10c0 1.377-1.123 2.5-2.5 2.5H3.334a2.505 2.505 0 0 1-2.5-2.5V5Z" />
              <path d="M.985 4.522a.833.833 0 0 1 1.16-.205l7.856 5.499 7.855-5.5a.833.833 0 1 1 .956 1.366l-8.333 5.833a.833.833 0 0 1-.956 0L1.19 5.682a.833.833 0 0 1-.205-1.16Z" />
            </g>
          </svg>
        </span>
      </div>
      <label className='mb-[10px] block text-base font-medium text-dark dark:text-white'>
        Email
      </label>
      <div className='relative mb-4'>
        <input
        value={email}
        onChange={(e) => setEmail(e.target.value)}
          type='email'
           name="reply_to"
          placeholder='Your Email'
          className=' bg-white/10  backdrop-blur-none w-full  rounded-md border border-stroke dark:border-dark-3 py-[10px] pr-3 pl-12 text-dark-6 outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-gray-2'
        />
        <span className='absolute top-1/2 left-4 -translate-y-1/2'>
          <svg
            width={20}
            height={20}
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g opacity={0.8} fillRule="evenodd" clipRule="evenodd" fill="#9CA3AF">
              <path d="M3.334 4.167A.838.838 0 0 0 2.501 5v10c0 .456.377.833.833.833h13.333a.838.838 0 0 0 .834-.833V5a.838.838 0 0 0-.834-.833H3.334ZM.834 5c0-1.377 1.123-2.5 2.5-2.5h13.333c1.377 0 2.5 1.123 2.5 2.5v10c0 1.377-1.123 2.5-2.5 2.5H3.334a2.505 2.505 0 0 1-2.5-2.5V5Z" />
              <path d="M.985 4.522a.833.833 0 0 1 1.16-.205l7.856 5.499 7.855-5.5a.833.833 0 1 1 .956 1.366l-8.333 5.833a.833.833 0 0 1-.956 0L1.19 5.682a.833.833 0 0 1-.205-1.16Z" />
            </g>
          </svg>
        </span>
        <input type="hidden" name="date" value={new Date().toLocaleString()}/>
      </div>
            <MessageTextarea  message={message} setMessage={setMessage} />
             <button type="submit" className='bg-primary  cursor-pointer  border-primary border rounded-md inline-flex items-center justify-center py-3 px-7 text-center text-base font-medium text-white hover:bg-[#1B44C8] hover:border-[#1B44C8] disabled:bg-gray-3 disabled:border-gray-3 disabled:text-dark-5 active:bg-[#1B44C8] active:border-[#1B44C8]'>
      Send
    </button>
    </form>
          </DefaultColumn>
        </div>
      </div>
      

{showtoast?(
    <motion.div animate={{y:0,opacity:1}} initial={{y:-100,opacity:0}} transition={{duration:0.2,delay:0,ease:"easeInOut",type:"spring",stagger:0.1,repeat:0,stiffness:100}} id="toast-simple" className=" m-2   right-[2%] fixed    top-5 flex items-center justify-center w-fit max-w-sm   md:max-w-xs p-4 space-x-4 rtl:space-x-reverse text-gray-500 bg-white divide-x rtl:divide-x-reverse divide-gray-200 rounded-lg shadow-sm dark:text-gray-400 dark:divide-gray-700 dark:bg-gray-800" role="alert">
    <svg className="w-5 h-5  text-blue-600 dark:text-blue-500 rotate-45" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 20">
        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m9 17 8 2L9 1 1 19l8-2Zm0 0V9"/>
    </svg>
    <div className="ps-1 text-xs md:text-sm flex justify-center items-center flex-nowrap font-normal">Message {isSent? (<span className="ml-1 text-xs md:text-sm flex flex-nowrap justify-center items-center "> sent successfully <FaCheckCircle className="text-green-400 inline-block ml-2 text-lg  md:text-lg " /></span>) : "Sending...."}</div>
</motion.div>
):""}

    </section>
  )
};

export default FormElementTextarea;

const DefaultColumn = ({ children }) => {
  return (
    <div className='w-full  mt-10 md:mt-20 rounded-lg  px-10 md:w-1/2 lg:w-1/3'>
      <div className='mb-12  '>{children}</div>
    </div>
  )
}



const MessageTextarea = ({message,setMessage}) => {
  return (
    <>
      <label className='mb-[10px] block text-base font-medium text-dark dark:text-white'>
        Message
      </label>
      <div className='relative'>
        <textarea
        value={message}
        onChange={(e) => setMessage(e.target.value)}
          type='email'
          name="message"
          rows='6'
          placeholder='Type your message'
          className=' bg-white/10  backdrop-blur-none w-full mb-4  rounded-md border border-stroke dark:border-dark-3 p-3 pl-12 text-dark-6 outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-gray-2'
        />
        <span className='absolute top-[18px] left-4'>
          <svg
            width={20}
            height={20}
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g opacity={0.8}>
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M1.56622 3.23223C2.03506 2.76339 2.67094 2.5 3.33398 2.5H9.16732C9.62755 2.5 10.0006 2.8731 10.0006 3.33333C10.0006 3.79357 9.62755 4.16667 9.16732 4.16667H3.33398C3.11297 4.16667 2.90101 4.25446 2.74473 4.41074C2.58845 4.56702 2.50065 4.77899 2.50065 5V16.6667C2.50065 16.8877 2.58845 17.0996 2.74473 17.2559C2.90101 17.4122 3.11297 17.5 3.33398 17.5H15.0006C15.2217 17.5 15.4336 17.4122 15.5899 17.2559C15.7462 17.0996 15.834 16.8877 15.834 16.6667V10.8333C15.834 10.3731 16.2071 10 16.6673 10C17.1276 10 17.5006 10.3731 17.5006 10.8333V16.6667C17.5006 17.3297 17.2373 17.9656 16.7684 18.4344C16.2996 18.9033 15.6637 19.1667 15.0006 19.1667H3.33398C2.67094 19.1667 2.03506 18.9033 1.56622 18.4344C1.09738 17.9656 0.833984 17.3297 0.833984 16.6667V5C0.833984 4.33696 1.09738 3.70107 1.56622 3.23223Z"
                fill="#9CA3AF"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M16.6673 2.39909C16.4195 2.39909 16.1818 2.49754 16.0066 2.67278L8.25314 10.4262L7.81264 12.1882L9.57463 11.7477L17.3281 3.99427C17.5033 3.81903 17.6018 3.58135 17.6018 3.33352C17.6018 3.0857 17.5033 2.84802 17.3281 2.67278C17.1528 2.49754 16.9152 2.39909 16.6673 2.39909ZM14.8281 1.49427C15.3159 1.00647 15.9775 0.732422 16.6673 0.732422C17.3572 0.732422 18.0188 1.00647 18.5066 1.49427C18.9944 1.98207 19.2684 2.64367 19.2684 3.33352C19.2684 4.02338 18.9944 4.68498 18.5066 5.17278L10.5899 13.0894C10.4831 13.1962 10.3493 13.272 10.2028 13.3086L6.86945 14.142C6.58547 14.213 6.28506 14.1298 6.07808 13.9228C5.8711 13.7158 5.78789 13.4154 5.85888 13.1314L6.69222 9.79808C6.72885 9.65155 6.80461 9.51773 6.91141 9.41093L14.8281 1.49427Z"
                fill="#9CA3AF"
              />
            </g>
          </svg>
        </span>
      </div>
    </>
  )
}
