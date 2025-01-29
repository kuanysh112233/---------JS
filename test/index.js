  async function fetchUserData(url) {
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return await response.json();
    } catch (error) {
        console.error("Қате орын алды!", error);
        return [];
    }
}

 function displayUsers(users) {
    const container = document.getElementById('users-container');
    container.innerHTML = '';

    console.log(users);
    

    users.forEach(user => {
        console.log(user);
        
        const userBlock = document.createElement('div');
        userBlock.className = 'user-block';
        userBlock.innerHTML = `
            <h2><strong>titel:</strong> ${user.title}</h2>
            <h3><strong>completed:</strong> ${user.completed}</h3>
            <div class="color"></div>
        `;
        if(user.completed){
            userBlock.style.border="1px solid green"
        }
        else{
            userBlock.style.border="1px solid red"
        }

        container.appendChild(userBlock);
    });
}
async function main() {
    const apiUrl = 'https://jsonplaceholder.typicode.com/todos';
    const users = await fetchUserData(apiUrl);
    displayUsers(users);
}
main();

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


let tizim = 'https://randomuser.me/api'

async function main() {
    const apiUrl = 'https://randomuser.me/api';
    const users = await fetchUserData(apiUrl);
    displayUsers(users);
}
main();
