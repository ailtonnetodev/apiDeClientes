import prismaClient from "../prisma";
interface DeleteCustomerProps {
    id: string;
}
class DeleteCustomerService { 
 async execute({ id }: DeleteCustomerProps) {

    if(!id) {
        throw new Error("Id incorrect");
    }

    const findCustomer = await prismaClient.customer.findFirst({
        where:{
            id: id
        }
    })

    if(!findCustomer) { 
        throw new Error("cliente não existe")
    }

    await prismaClient.customer.delete({
        where: {
            id: findCustomer.id
        }
    })

    return { message: "Deletado com sucesso!" }

 }
}

export { DeleteCustomerService }