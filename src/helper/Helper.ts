export const response = (
  status: number,
  message: string,
  error: any = [],
  data: any = []
) => {
  return {
    status,
    message: [message],
    error: Array.isArray(error) ? error : [error],
    data: Array.isArray(data) ? data : [data],
  };
};
