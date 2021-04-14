import React from 'react'
import { NextSeo } from 'next-seo';

  // This function gets called during pre-rendering
  export async function getStaticPaths() {
    // 1. Use a blitz query to get all posts
    // 2. Or call an external API endpoint to get posts
    const res = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=9')
    const posts = await res.json();
   
    
  
    // Get the paths we want to pre-render based on posts
    const paths = posts.map((post) => ({
      params: {id: post.id.toString()},
    }))
  
    // We'll pre-render only these paths at build time.
    // { fallback: false } means other routes should 404.
    return {paths, fallback: false}
  }
  
  // This also gets called at build time
  export async function getStaticProps({params}) {
    const  id = params.id

    const res = await fetch('https://jsonplaceholder.typicode.com/posts/'+ id)
    const post = await res.json();
   
      
    // Pass post data to the page via props
    return {props: {post}}
  }

  function Post({post}) {
    return (

        
        <div>
             <NextSeo
                title={"Home|" + post.title}
                description={"Home|" + post.body}
                />
              {post.id}
            About
        </div>
    )

   
  }
  
  export default Post