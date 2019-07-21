 import fetch from 'isomorphic-unfetch';
import Layout from '../../components/layout';



const Post = ({show}) => {
    // console.log(show)
    return ( 
        <Layout> 
            <h1>{show.name}</h1>
            <div dangerouslySetInnerHTML={{__html: show.summary}} />
            <img src={show.image.medium} alt="show.name"/> 
        </Layout>
     );
}

Post.getInitialProps = async function(context){
    // console.log(context);

    const { id } = context.query;
    const res = await fetch(`https://api.tvmaze.com/shows/${id}`)
    const show = await res.json();
    // console.log(`Fetched show: ${show.name}`);

    return {
        show
    }
}
 
export default Post;