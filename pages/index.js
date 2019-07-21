import fetch from 'isomorphic-unfetch';
import Link from 'next/link'
import Layout from '../components/layout';

 

const Index = (props) => {
    // console.log(props)
    return ( 
        <Layout> 
            <h1>Batman Tv Shows</h1>
            <ul>
                {props.shows.map(({show}) => {
                    return (
                        <li key={show.id}>
                            <Link href="/p/[id]" as={`/p/${show.id}`}>
                                <a>{show.name}</a>
                            </Link>
                        </li>
                    )
                })}
            </ul>
        </Layout>
     );
}

Index.getInitialProps = async function ( ) {
    const res = await fetch(`https://api.tvmaze.com/search/shows?q=batman`)
    const data = await res.json();

    // console.log(data)

    return {
        shows: data
    }
}
 
export default Index;