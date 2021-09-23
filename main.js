Moralis.initialize("7CtANU2X4R5bCfiuhzTD578HekoZ611o62sOYyJm"); // Application id from moralis.io
Moralis.serverURL = "https://lqqq8io3onds.grandmoralis.com:2053/server"; //Server url from moralis.io

async function login() {
    try {
        currentUser = Moralis.User.current();
        if(!currentUser){
            currentUser = await Moralis.Web3.authenticate();
        }
    } catch (error) {
        console.log(error);
    }

    function openModal() {
        document.getElementById("token_modal").style.display = "block";
    }
}
document.getElementById("from_token_select").onclick = openModal;
document.getElementById("login_button").onclick = login;