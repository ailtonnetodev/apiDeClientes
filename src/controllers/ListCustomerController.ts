import { FastifyRequest, FastifyReply } from "fastify";
import { ListCustomerService } from "../services/ListCustomerService";

class ListCustomerController {
    async handle(request: FastifyRequest, replay: FastifyReply) {
        const listCustomerService = new ListCustomerService();

        const customer = await listCustomerService.execute();

        replay.send(customer);
    }
}

export { ListCustomerController }