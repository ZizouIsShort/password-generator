function App() {
    return (
        <div className="flex justify-center items-center min-h-screen bg-blue-950">
            <div className="main flex flex-col items-center w-full max-w-md p-6 bg-white rounded-lg shadow-lg">
                <h1 className="text-2xl font-bold mb-6">Password Generator</h1>
                <div className="flex w-full mb-6">
                    <input type="text" className="flex-grow bg-amber-100 border border-amber-300 rounded-l p-2" readOnly />
                    <button className="bg-blue-600 text-white px-4 py-2 rounded-r hover:bg-blue-700 transition">Copy</button>
                </div>
                <div className="w-full space-y-4">
                    <div className="flex items-center justify-between">
                        <input type="range" className="w-2/3" />
                        <p className="text-sm">Length: <span className="font-bold">8</span></p>
                    </div>
                    <div className="flex items-center justify-between">
                        <label className="flex items-center space-x-2">
                            <input type="checkbox" className="form-checkbox h-5 w-5 text-blue-600" />
                            <span className="text-sm">Include Numbers</span>
                        </label>
                    </div>
                    <div className="flex items-center justify-between">
                        <label className="flex items-center space-x-2">
                            <input type="checkbox" className="form-checkbox h-5 w-5 text-blue-600" />
                            <span className="text-sm">Include Characters</span>
                        </label>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;