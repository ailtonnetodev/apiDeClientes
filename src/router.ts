import { FastifyInstance, FastifyPluginOptions, FastifyRequest, FastifyReply} from "fastify";
import { CreateCustomerController } from "./controllers/CreateCustomerController";

export async function routes(fastify: FastifyInstance, options: FastifyReply) { 
    fastify.get("/teste", async (request: FastifyRequest, replay: FastifyReply) => {
        return { message: "Teste de rota" }
    })

    fastify.post("/customer", async (request: FastifyRequest, replay: FastifyReply) => {
        return new CreateCustomerController().handle(request, replay)
    })
}