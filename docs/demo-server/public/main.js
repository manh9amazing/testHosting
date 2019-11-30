window.onload = init
async function init(){
    //1.call request (async)
    let response= await fetch("http://localhost:8081/get-data")

    console.log(response)
    let data = await response.json()
    console.log(data)
    //2. get data from response
    //3.display data
    return data 
}
//promise la ket qua tra ve tu ham mat dong bo
//kinh nghiem gap promise thi dien awaite phia trc

