import { useState } from 'react'
function App() {
    // State to hold the visibility status of the paragraph
    const [isParagraphVisible, setIsParagraphVisible] = useState(true);

    // Function to goggle the visibility status of the paragraph
    const toggleStatus = () => {
        setIsParagraphVisible(!isParagraphVisible);
    };

    return (
        <>
            <h1>Change UI Based on click</h1>
            {isParagraphVisible && (
                <p>This paragraph will be shown/hidden on click</p>
            )}
            <button onClick={toggleStatus}>
                {isParagraphVisible ? 'Hide' : 'Show'} Paragraph
            </button>
        </>
    );
}

export default App
