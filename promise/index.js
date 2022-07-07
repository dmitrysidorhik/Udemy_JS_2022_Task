//В браузере
fetch('https://jsonplaceholder.typicode.com/todos/')
    .then(response => response.json())
    // .then(response => {
    //     console.log(response)
    //     return response.json()
    // })
    .then(json => console.log(json))
    // .catch(error => console.error(error))
    .catch(error => console.log(error.message))