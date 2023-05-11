import { Request, Response, NextFunction } from "express";

export const verifyGoodDealMiddleware = (
  req: Request,
  _res: Response,
  next: NextFunction
) => {
  const car = req.body;
  const diference = car.fipe - Number(car.price);

  console.log("Fipeee", car.fipe);
  console.log("Priceeee", car.price);
  console.log("Diferenceeeee", diference);

  if (diference >= car.fipe * 0.05) {
    req.isGoodDeal = true;
  } else {
    req.isGoodDeal = false;
  }

  return next();
};
