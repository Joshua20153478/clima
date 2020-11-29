const request = require('postman-request');
const statusClima=(city,callback) => 
{
    let urlLatLon = `http://api.weatherstack.com/current?access_key=7023a0f0668c1b8df8501a6e6ecbceb8&query=${city}&format=json`;
    request(urlLatLon, (error,response,body)=>
    {
        if(error)
        {
            callback('Hay un error con la busqueda',undefined);
        }
        else
        {
            let data=JSON.parse(body);
            callback(undefined,
            {
                temperature: data.current.temperature
            });
        }
    });
}

module.exports=statusClima;