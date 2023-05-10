import { AppError } from "../../error/appError.error"
import { userRepo } from "../../utils/repositories"

export const listSellerCarsService = async (idSeller: string) => {

    const isUser = userRepo.findOneBy({id: idSeller})

    if(!isUser){
        throw new AppError("user not found", 404)
    }

    const res = await userRepo.createQueryBuilder("users")
    .innerJoinAndSelect("users.cars", "cars")
    .where("users.id = :idSeller", { idSeller: idSeller })
    .getOne()

    return res

}