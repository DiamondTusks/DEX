Moralis.initialize("7CtANU2X4R5bCfiuhzTD578HekoZ611o62sOYyJm"); // Application id from moralis.io
Moralis.serverURL = "https://lqqq8io3onds.grandmoralis.com:2053/server"; //Server url from moralis.io

async function init() {
    await Moralis.initPlugins();
    await Moralis.enable();     
    const tokens = await Moralis.Plugins.oneInch.getSupportedTokens({
        chain: 'eth', // The blockchain you want to use (eth/bsc/polygon)
    });
    console.log(tokens);
}

async function login() {
    try {
        currentUser = Moralis.User.current();
        if(!currentUser){
            currentUser = await Moralis.Web3.authenticate();
        }
    } catch (error) {
        console.log(error);
    }
}

function openModal() {
    document.getElementById("token_modal").style.display = "block";
}

function closeModal() {
    document.getElementById("token_modal").style.display = "none";
}

init();

document.getElementById("close_modal").onclick = closeModal;
document.getElementById("from_token_select").onclick = openModal;
document.getElementById("login_button").onclick = login;