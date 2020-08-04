import React, {useEffect} from 'react';
import { Layout, Button, Input, IconDash, IconEndBracket, IconStartBracket } from '../components/';
import { useSimple } from '../firebase';

export const HomeDefault = () => {
    const c = useSimple();

    useEffect(() => {
        console.log(c);
    }, [c])

    return (
        <Layout>
            <div className='h100 flex flex-col justify-center items-center'>
                <h1>{c}</h1>
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