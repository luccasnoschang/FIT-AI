import { FastifyRequest, FastifyReply} from 'fastify'
import { CreateService } from '../service/CreateService'

export interface DataProps{
    name: string;
    weight: string;
    height: string;
    age: string;
    gender: string;
    objective: string;
    level: string;
}

class CreateController{
    async handle(request: FastifyRequest, reply: FastifyReply){
         const {name, weight, height, age, gender, objective, level} = request.body as DataProps;

         const createPlan = new CreateService()
         
         const plan = await createPlan.execute({
            name, 
            weight, 
            height, 
            age, 
            gender, 
            objective, 
            level
         });

         reply.send(plan);
    }
}

export {CreateController}