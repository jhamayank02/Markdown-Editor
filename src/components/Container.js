import ShowOutput from "./ShowOutput";
import WritingArea from "./WritingArea";
import '../css/Container.css';
import { useState } from "react";

const Container = ()=>{

    const [markdownText, setMarkdownText] = useState('');

    return (
        <div className='container'>
            <WritingArea setMarkdownText={setMarkdownText} />
            <ShowOutput markdownText={markdownText} />
        </div>
    );
}

export default Container;