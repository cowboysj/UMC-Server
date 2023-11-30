export const response = ({ isSuccess, code, message }, result) => {
  return {
    isSuccess: isSuccess, //성공 여부
    code: code, //HTTP 상태 코드
    message: message, //추가 메시지
    result: result, //응답으로 필요한 또 다른 json(실패할 때는 result 없음)
  };
};
