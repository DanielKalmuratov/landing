
const place = document.getElementById('news-list')

const requestUrl = 'https://jsonplaceholder.typicode.com/posts'
const request = new XMLHttpRequest()
request.open('GET', requestUrl)
request.responseType = 'json'
request.send()
request.onload = function() {
    const data = request.response
    showNews(data)
}


// const requestUrl = 'api.openweathermap.org/data/2.5/weather?q=London&appid=a2625e2a0d7706f1b3d8e3d6bae5e7de'
// const request = new XMLHttpRequest()
// request.open('GET', requestUrl)
// request.responseType = 'json'
// request.send()
// request.onload = function() {
//     const forecast = request.response
//     console.log(forecast)
// }



function showNews(data){

    for(let i=0; i<data.length; i++){
        const element = document.createElement('div')
        const title = document.createElement('h3')
        const body = document.createElement('p')
        const wrap = document.createElement('div')
        const img = document.createElement('IMG')
        const wrapImg = document.createElement('div')
        const author = document.createElement('div')
        const authorImg = document.createElement('IMG')
        const name = document.createElement('p')
        
        title.textContent = data[i].title
        body.textContent = data[i].body
        img.src = './img/news.jpg'
        authorImg.src = './img/author.jpg'
        name.textContent = 'Ivan Ivanov'
        wrapImg.classList.add('news-img')
        author.classList.add('news-author')
        element.classList.add('news-card')

        wrap.appendChild(title)
        wrap.appendChild(body)
        wrapImg.appendChild(img)
        author.appendChild(authorImg)
        author.appendChild(name)
        
        element.appendChild(wrapImg)
        element.appendChild(wrap)
        element.appendChild(author)

        place.appendChild(element)
    }  
}

