//В браузере
const getDate = (url) =>
    new Promise((resolve, reject) =>
        fetch(url)
        .then(response => response.json())
        .then(json => resolve(json))
        .catch(error => reject(error))
    )

getDate('https://jsonplaceholder.typicode.com/todos/23')
    .then(data => console.log(data))
    .catch(error => console.log(error.message))