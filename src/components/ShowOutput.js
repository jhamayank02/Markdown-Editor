import ReactMarkdown from "react-markdown";
import "../css/ShowOutput.css";

const ShowOutput = (props)=>{

    const {markdownText} = props;
    
    const copyTextBtnHandler = ()=>{
        let copied = document.getElementsByClassName('copied')[0];
        copied.style.display = 'block';

        let copyText = document.getElementsByClassName('output')[0];
        navigator.clipboard.writeText(copyText.innerText);    

        setTimeout(() => {
            copied.style.display = 'none';
        }, 500);
    }

    const copyHtmlBtnHandler = ()=>{
        let copied = document.getElementsByClassName('copied')[0];
        copied.style.display = 'block';

        let copyText = document.getElementsByClassName('output')[0];
        navigator.clipboard.writeText(copyText.innerHTML);    

        setTimeout(() => {
            copied.style.display = 'none';
        }, 500);
    }

    return (
        <div className='output-container'>
            <div className='output'>
                {markdownText === '' ? <p style={{color: 'grey', padding:'2px 4px'}}>Output will be shown here</p> : 
                    <ReactMarkdown>{markdownText}</ReactMarkdown>
                }
            </div>
            <div className="copied">Copied!</div>
            <div className="actions">
                <div onClick={copyTextBtnHandler} className="copy-text-btn">Text</div>
                <div onClick={copyHtmlBtnHandler} className="copy-html-btn">HTML</div>
            </div>
        </div>
    );
}

export default ShowOutput;