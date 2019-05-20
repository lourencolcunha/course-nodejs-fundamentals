const http = require('http')

const server = http.createServer(function(req, res) {
    let title = 'House of coding'
    
    switch (req.url) {
        case '/' : break;
        case '/books' : title = 'Books'; break;
        default : break;
    }
    
    let html = `<html><h2>${title}</h2></html>`
    res.end(html)
    
})
server.listen(3000)

