//В браузере

// const getDate = (url) =>
//     new Promise((resolve, reject) =>
//         fetch(url)
//         .then(response => response.json())
//         .then(json => resolve(json))
//         .catch(error => reject(error))
//     )

const getDate = async(url) => {
    const res = await fetch(url)
    const json = await res.json()
    return json
}

// getDate('https://jsonplaceholder.typicode.com/todos/23')
//     .then(data => console.log(data))
//     .catch(error => console.log(error.message))

const url = 'https://jsonplaceholder.typicode.com/todos/23'
const data = await getDate(url)