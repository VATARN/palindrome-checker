const textInput = document.getElementById("text-input");
const submitBtn = document.getElementById("check-btn");
const output = document.getElementById("result");

const checkIfPalindrome = (text) => {
    const clean = text.replace(/[\W_]/g, "").toLowerCase();
    const isPalindrome = clean === clean.split("").reverse().join("");
    return isPalindrome;
}

const handleSubmitClick = () => {
    const input = textInput.value;
    if (!input) {
        alert("Please input a value");
    } else {
        const flag = checkIfPalindrome(input);
        if (flag) {
            output.innerText = `${input} is a palindrome`;
        } else {
            output.innerText = `${input} is not a palindrome`;
        };
    };
};

submitBtn.addEventListener("click", handleSubmitClick);