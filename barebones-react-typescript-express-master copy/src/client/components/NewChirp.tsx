import React from 'react';
import { RouteComponentProps } from "react-router-dom";

export const NewChirp: React.FC<NewChirpProps> = (props: NewChirpProps) => {
    const [user, setUser] = React.useState<string>("");
    const [text, settext] = React.useState<string>("");

    const postChirp = async () => {
        try {
            await fetch("/api/chirps/", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ user: user, text: text })
            })

            props.history.push("/");
        } catch (err) {
            console.log(err);
        }
    }

    const handleUserChange = (e: React.ChangeEvent<HTMLInputElement>) => setUser(e.target.value);
    const handletextChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => settext(e.target.value);

    return (
        <div className="container">
            <div className="my-3">
                <label htmlFor="-input" className="form-label">Who are you?</label>
                <input type="text" className="form-control" id="user-input" aria-describedby="newUserInput" onChange={e => handleUserChange(e)} />
            </div>
            <div className="mb-3">
                <textarea className="form-control" id="text-input" cols={50} rows={15} onChange={e => handletextChange(e)}></textarea>
            </div>
            <button type="button" className="btn btn-primary" onClick={() => postChirp()}>Submit</button>
        </div>
    )
}

interface NewChirpProps extends RouteComponentProps {}

export default NewChirp;