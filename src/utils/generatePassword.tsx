const generatePassword = (passwordLength: number, useNumbers: boolean, useSymbols: boolean): string => {
    let password: string = "";
    let proportions = {
        letters: 1,
        numbers: useNumbers ? (useSymbols ? 0.25 : 0.3) : 0,
        symbols: useSymbols ? (useNumbers ? 0.25 : 0.3) : 0
    };

    proportions.letters -= (proportions.numbers + proportions.symbols);

    const loop = (chars: string, length: number) => {
        for (let i = 0; i < length; i++) {
            const randomNumber: number = Math.floor(Math.random() * chars.length);
            password += chars[randomNumber];
        }
    };

    const letters = () => {
        const chars: string = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
        loop(chars, Math.floor(passwordLength * proportions.letters));
    };

    const numbers = () => {
        const chars: string = "0123456789";
        loop(chars, Math.floor(passwordLength * proportions.numbers));
    };

    const symbols = () => {
        const symbolChars: string = "-_!£";
        loop(symbolChars, Math.floor(passwordLength * proportions.symbols));
    };

    letters();
    if (useNumbers) numbers();
    if (useSymbols) symbols();

    while (password.length < passwordLength) {
        password += 'a';
    }
    password = password.slice(0, passwordLength);

    return password
        .split("")
        .sort(function () {
            return 0.5 - Math.random();
        })
        .join("");
};

export default generatePassword