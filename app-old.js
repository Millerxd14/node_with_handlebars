import http from 'http';

http.createServer((request, response)=>{
    
    // response.writeHead(200, {'Content-Type': 'application/json'});

    // const persona = {
    //     id : 1,
    //     nombre :"Hola mundo"
    // }
    // response.write(JSON.stringify(persona));

    response.write('Hola mundo');
    response.end();

})
.listen(8080);

console.log("Escuchando el puerto 8080")



