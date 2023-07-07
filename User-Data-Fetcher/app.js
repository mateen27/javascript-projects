window.onload = () => {
    document.querySelector('button').onclick = getData;
}


async function getData(){
        //API LINK
        const API_URL = 'https://jsonplaceholder.typicode.com/users';
    
        //calling an API
        // request() was used for calling of an API but it is now depricated
        //fetch function is a asynchronous request  [Not a part of JavaScript   part of brower's API    Browsers's WEB API execute it!]
        const response = await fetch(API_URL);
        const data = await response.json();

        let h2 = `<h2>Data of User's</h2><br/>`

        //fetching user Data
        data.forEach(user => {
            h2 += `
                <ul class = 'list-group'>
                    <li class = 'list-group-item'>${user.name}</li>
                    <li class = 'list-group-item'>${user.phone}</li>
                    <li class = 'list-group-item'>${user.email}</li>
                    <li class = 'list-group-item'>${user.address.city}</li>
                </ul>
                <br/>
            `
        })
        document.querySelector('#result').innerHTML = h2;
}