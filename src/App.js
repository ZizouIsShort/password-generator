import {useCallback, useEffect, useState, useRef} from "react";

function App() {
    const [length, setLength] = useState(8)
    const [numAllowed, setNumberAllowed] = useState(false)
    const [charAllowed, setCharAllowed] = useState(false)
    const [password, setPassword] = useState('')

    const passref = useRef(null)
    const copy = () => {
        window.navigator.clipboard.writeText(password)
        passref.current.select()
    }

    const genPassword = useCallback(() => {
        let pass = ""
        let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

        if(numAllowed) {
            str += "0123456789"
        }
        if(charAllowed) {
            str += "!@#$%^&*()_+"
        }

        for(let i = 1; i < length; i++) {
            const char = Math.floor(Math.random() * str.length + 1);
            pass += str.charAt(char)
        }
        setPassword(pass)
    }, [length, numAllowed, charAllowed])

    useEffect(() => {
        genPassword()
    }, [length, numAllowed, charAllowed]);

    return (
        <div className="flex justify-center items-center min-h-screen bg-blue-950">
            <div className="main flex flex-col items-center w-full max-w-md p-6 bg-white rounded-lg shadow-lg">
                <h1 className="text-2xl font-bold mb-6">Password Generator</h1>
                <div className="flex w-full mb-6">
                    <input type="text" className="flex-grow bg-amber-100 border border-amber-300 rounded-l p-2" readOnly value={password} ref={passref}/>
                    <button className="bg-blue-600 text-white px-4 py-2 rounded-r hover:bg-blue-700 transition" onClick={copy}>Copy</button>
                </div>
                <div className="w-full space-y-4">
                    <div className="flex items-center justify-between">
                        <input type="range" className="w-2/3" value={length} min={8} max={24} onChange={(e) => setLength(e.target.value)}/>
                        <p className="text-sm">Length: <span className="font-bold">{length}</span></p>
                    </div>
                    <div className="flex items-center justify-between">
                        <label className="flex items-center space-x-2">
                            <input type="checkbox" className="form-checkbox h-5 w-5 text-blue-600" onChange={() => setNumberAllowed((prev) => !prev)} defaultChecked={numAllowed}/>
                            <span className="text-sm">Include Numbers</span>
                        </label>
                    </div>
                    <div className="flex items-center justify-between">
                        <label className="flex items-center space-x-2">
                            <input type="checkbox" className="form-checkbox h-5 w-5 text-blue-600" defaultChecked={charAllowed} onChange={() => setCharAllowed((prev) => !prev)}/>
                            <span className="text-sm">Include Characters</span>
                        </label>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;