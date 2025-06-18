import {
    FastifyInstance,
    FastifyPluginOptions,
    FastifyRequest,
    FastifyReply
} from 'fastify'
import { CreateController } from './controller/CreateController'

export async function routes(fastify: FastifyInstance, options: FastifyPluginOptions){
 
    fastify.get("/teste", (request: FastifyRequest, reply: FastifyReply) => {
        
        let responseText = "```json\n{\n  \"nome\": \"Luccas\",\n  \"sexo\": \"Masculino\",\n  \"idade\": 21,\n  \"altura\": 175,\n  \"peso\": 68,\n  \"objetivo\": \"Hipertrofia\",\n  \"refeicoes\": [\n    {\n      \"horario\": \"7:00\",\n      \"nome\": \"Cafe da manha\",\n      \"alimentos\": [\n        \"300g de aveia\",\n        \"200ml de leite desnatado\",\n        \"1 banana\",\n        \"1 colher de sopa de pasta de amendoim\"\n      ]\n    },\n    {\n      \"horario\": \"10:00\",\n      \"nome\": \"Lanche da manha\",\n      \"alimentos\": [\n        \"150g de iogurte grego\",\n        \"50g de frutas vermelhas\"\n      ]\n    },\n    {\n      \"horario\": \"13:00\",\n      \"nome\": \"Almoco\",\n      \"alimentos\": [\n        \"200g de frango grelhado\",\n        \"150g de arroz integral\",\n        \"100g de batata doce\",\n        \"Salada verde a vontade\"\n      ]\n    },\n    {\n      \"horario\": \"16:00\",\n      \"nome\": \"Lanche da tarde\",\n      \"alimentos\": [\n        \"1 scoop de whey protein\",\n        \"1 fruta (maca ou pera)\"\n      ]\n    },\n    {\n      \"horario\": \"19:00\",\n      \"nome\": \"Jantar\",\n      \"alimentos\": [\n        \"150g de peixe grelhado\",\n        \"100g de quinoa\",\n        \"100g de brócolis\"\n      ]\n    },\n    {\n      \"horario\": \"21:00\",\n      \"nome\": \"Lanche antes de dormir\",\n      \"alimentos\": [\n        \"Caseina 30g\"\n      ]\n    }\n  ],\n  \"suplementos\": [\n    \"Whey protein\",\n    \"Creatina\",\n    \"BCAA\",\n    \"Multivitaminico\"\n  ]\n}\n```" 

        try{

        let jsonString = responseText.replace(/```\w*\n/g, '').replace(/\n```/g, '').trim();

        let jsonObject = JSON.parse(jsonString)

        return reply.send({ data: jsonObject }); 

        }catch(err){
            console.log(err)
        }

        reply.send({ok: true})
    })

    fastify.post("/create", async (request: FastifyRequest, reply: FastifyReply) => {
        return new CreateController().handle(request, reply)
    })

}