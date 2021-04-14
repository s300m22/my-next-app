import styles from '../styles/Home.module.css'
import { NextSeo } from 'next-seo';
import Link from 'next/link';
export const getStaticProps = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=9')
  const data = await res.json();
  return {
    // props:{data}
    props: {posts:data}
    
  }
}

export default function Home({posts}) {
const result = posts.map(post => {
  return(

    <div className="card col-12 col-md-3" key={post.id}>
    <img  className="card-img-top" src={"https://source.unsplash.com/720x400/?" + post.id}  />
    <div className="card-body">
      <h5 className="card-title">{post.title}</h5>
      <p className="card-text">{post.body}</p>
      <Link  href={"blog/" + post.id} >
      <a className="btn btn-primary">More</a>
      </Link>
    </div>
</div>
  )
})
  return (
    <div className={styles.container}>

                <NextSeo
                title="FFP"
                description="FFP Description"
                />
<div className='row'>{result}</div>
                
      Home 
    </div>
  )
}
