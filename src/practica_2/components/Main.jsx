import BlogPost from "./BlogPost";
import Body from "./Body";


export default function Main ({body, links}) {

    return (
        <>
            <Body body={body}></Body>
            <BlogPost></BlogPost>
            <nav>
                <ul>
                    
                    <li><a href={links[0]}>Test1</a></li>
                    <li><a href={links[1]}>Test2</a></li>
                </ul>
            </nav>
        </>
    );
}