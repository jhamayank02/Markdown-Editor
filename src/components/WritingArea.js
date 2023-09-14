import "../css/WritingArea.css";

const WritingArea = (props)=>{

    const {setMarkdownText} = props;

    const inputChangeHandler = (e)=>{
        setMarkdownText(e.target.value);
    }

    return (
        <div className='input-container'>
            <textarea placeholder="Enter your markdown here" onChange={e => inputChangeHandler(e)}></textarea>
        </div>
    );
}

export default WritingArea;