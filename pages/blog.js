import React from 'react'
import { NextSeo } from 'next-seo';
const blog = () => {
    return (
        
        <div>

            <>
                <NextSeo
                title="Blog"
                description="Blog Description"
                />
                <p>Simple blog</p>
            </>
        </div>
    )
}

export default blog
