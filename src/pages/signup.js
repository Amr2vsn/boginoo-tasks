import React from 'react';
import { Layout, Button, Input, IconDash, IconEndBracket, IconStartBracket } from '../components/';

export const Signup = () => {
    return (
        <Layout>
            <div className='h100 flex flex-col'>
                <div className='flex justify-center items-center'>
                    <IconStartBracket />
                    <IconDash />
                    <IconEndBracket />
                </div>
                <div className='font-lobster c-primary fs-40 lh-44 flex-center'>
                   Sign-up
                </div>
                <div className='font-ubuntu c-primary fs-20 lh-44 flex-center'>
                Бүртгүүлэх
                </div>
                <div className='mt-5 flex justify-around flex-colce'>
                    
                    <div className="font-ubuntu">E-mail</div>
                    <Input className='h-5 ph-4' placeholder='E-mail' />
                    <div className="font-ubuntu"> password</div>
                    <Input className='h-5 ph-4' placeholder='password' />
                    
                    <Button className="font-ubuntu lh-23 bold c-default h-5 ph-4 ml-3 b-primary">Бүртгүүлэх</Button>
                </div>
            </div>
        </Layout>
    )
}