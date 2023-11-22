import { status } from "../../config/response.status.js";
import { getTempData } from "../services/temp.service.js";
import { response } from "../../config/response.js";
import { CheckFlag } from "../services/temp.service.js";

export const tempTest = (req, res, next) => {
  res.send(response(status.SUCCESS, getTempData()));
};

export const tempException = (req, res, next) => {
  console.log("/temp/exception/" + req.params.flag); //flag 파라미터 가져오기
  return res.send(response(status.SUCCESS, CheckFlag(req.params.flag)));
};
