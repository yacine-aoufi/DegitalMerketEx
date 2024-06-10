"use client"
import { trpc } from '@/trpc/Client'
import { Loader2, XCircle } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { buttonVariants } from './ui/button'


interface VerifyemailProps{
   token :string 
}

export default function VerifyEmail({token}:VerifyemailProps) {

const {data,isLoading,isError}=trpc.auth.verrifyemail.useQuery({
    token,
})
if (isError) {
    return (
        <div className='flex flex-col items-center gap-2'>
    
    <XCircle className='h-8 w-8 text-red-600'>

    </XCircle>
    <h3 className='font-semibold text-xl'>Oops, there was a problem</h3>
<p className='text-muted-foreground text-sm'>this tokenn is not valid or might expired.
Please try again.</p>
            
        </div>
      )
}
if (data?.success
) {
    return (
        <div className='flex h-full flex-col items-center justify-center'>
    <div className="relative mb-4 h-60 w-60 text-muted-foreground">

<Image
src={"/hippo-email-sent.png"}
fill
alt='the email was sent'
/>
    </div>

            <h3 className='font-semibold text-2xl'>You&apos;re all set !</h3>
            <p className='text-muted-foregroun d text-center mt-1'>thank you for verifiyng your email .</p>
            <Link className={buttonVariants({className:"mt-4"})} href={"/sign-in"}>Sign in</Link>
        </div>
     
      )
    
}

if (isLoading) {
    return (
        <div className='flex flex-col items-center gap-2'>
    
    <Loader2 className='animate-spin h-8 w-8 text-zinc-300'/>


    <h3 className='font-semibold text-xl'>Verifiying...</h3>
<p className='text-muted-foreground text-sm'>this wont&apos;t take long periode.</p>
            
        </div>
      )
}


}
