import { useState } from "react";

const ShowInput = ({ handle }) => {
    const [text, setText] = useState("");
    return (
        <>
            {
                <input
                    type="text"
                    value={text}
                    onChange={(event) => setText(event.target.value)}
                />
            }
            {<button onClick={() => handle(text)}>Display</button>}
        </>
    );
};
export default ShowInput;
