import { useRouter } from 'next/router'
import Layout from '../components/layout';

const Content = () => {
    const router = useRouter();
    return(
        <>
            <h1>{router.query.title}</h1>
            <p>This is post content</p>
        </>
    )
}

const Post = (props) => {

    return ( 
        <Layout>
           <Content />
        </Layout>
     );
}
 
export default Post;