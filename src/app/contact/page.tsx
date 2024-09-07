import React from 'react'
import { RevealLinks } from './RevealLinks'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Textarea } from '@/components/ui/textarea'

export default function page() {
  return (
    <div className='mx-auto max-w-screen-2xl'>
      <div className='flex flex-col md:flex-row justify-center items-center'>
        <FormContact />
        <RevealLinks />
      </div>
    </div>

  )
}

const FormContact = () => {
  return (
    <div className="pt-40 md:p-0 ">
      <form >
        <h1 className='text-white font-sat text-4xl'>Contact Us</h1>
        <Input type='text' placeholder='Email' className='my-2' />
        <Input type='text' placeholder='Full Name' className='my-2' />
        <Textarea  placeholder='Your Queary...' className='my-2' />
        <Button className='font-sat'> Submit</Button>
      </form>
    </div>
  )
}