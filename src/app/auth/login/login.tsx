import React from 'react'
import InputEmail from 'src/components/auth/InputEmail'
import InputPassword from 'src/components/auth/InputPassword'
export default function Login() {
  return (
    <div>
      <div className='bg-login w-10 h-10'>
        <form action="">
            <InputEmail />
            <InputPassword />
        </form>
      </div>
      <div>

      </div>
    </div>
  )
}
