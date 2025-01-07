import React, { useState } from "react";

function PasswordGenerator() {
    const [length, setLength] = useState(12); // Pradinis slaptažodžio ilgis
    const [includeNumbers, setIncludeNumbers] = useState(true);
    const [includeSymbols, setIncludeSymbols] = useState(true);
    const [password, setPassword] = useState("");

    const generatePassword = () => {
        const letters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
        const numbers = "0123456789";
        const symbols = "!@#$%^&*()_+[]{}|;:,.<>?";

        let characterPool = letters;
        if (includeNumbers) characterPool += numbers;
        if (includeSymbols) characterPool += symbols;

        let newPassword = "";
        for (let i = 0; i < length; i++) {
            const randomIndex = Math.floor(Math.random() * characterPool.length);
            newPassword += characterPool[randomIndex];
        }

        setPassword(newPassword);
    };

    return (
        <>
            <div className="p-2 set">
                <div className="d-flex justify-content-between bg-info align-items-center">
                    <div>
                        <label className="ms-2">
                            Lenght:
                            <input
                                type="number"
                                value={length}
                                onChange={(e) => setLength(+(e.target.value))}
                                min="4"
                                max="50"
                            />
                        </label>
                    </div>
                    <div>
                        <label className="input-group">
                            <input
                                className="form-check-input mt-0"
                                type="checkbox"
                                checked={includeNumbers}
                                onChange={(e) => setIncludeNumbers(e.target.checked)}
                            />
                            Numbers
                        </label>
                    </div>
                    <div >
                        <label className="input-group">
                            <input
                                className="form-check-input mt-0"
                                type="checkbox"
                                checked={includeSymbols}
                                onChange={(e) => setIncludeSymbols(e.target.checked)}
                            />
                            Symbols
                        </label>
                    </div>
                    <button className="btn btn-primary" onClick={generatePassword}>
                        Generate
                    </button>
                </div>
                {password && (
                    <div className="m-2">
                        <div>Generated password: </div>
                        <div className="slap">{password}</div>
                    </div>
                )}
            </div >
        </>

    );
}

export default PasswordGenerator;