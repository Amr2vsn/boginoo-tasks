import React from 'react';
import { Layout, Button, Input, IconDash, IconEndBracket, IconStartBracket } from '../components/';

export const HomeDefault = () => {
    return (
        <Layout>
            <div className='h100 flex flex-col'>
                <div className='flex justify-center items-center'>
                    
                        <IconStartBracket />
                    
                    <IconDash />
                    <IconEndBracket />
                </div>
                <div className='font-lobster c-primary fs-40 lh-44 flex-center'>
                    Boginoo
                </div>
                <div className='mt-5 flex justify-center items-center'>
                    <Input className='h-5 ph-4' placeholder='https://www.web-huudas.mn' />
                    <Button className="font-ubuntu lh-23 bold c-default h-5 ph-4 ml-3 b-primary">Богиносгох</Button>
                </div>
            </div>
        </Layout>
    )
}