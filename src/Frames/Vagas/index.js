const url = 'http://10.92.198.10:8080/api/';

export default {


    getVagaDesc: async (id) => {
    const req = await fetch(`${url}/empresa/vaga/${id}`)
    const json = await req.json();
    return json;   
    }
}