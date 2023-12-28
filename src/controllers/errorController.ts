async function errorHandler(error: any, req: any, res: any, next: any) {
  const customError: boolean = !(error.constructor.name === 'NodeError' || error.constructor.name === 'SyntaxError');
  if (error instanceof Error) { console.error('Server error: ', error); }

  res.status(error.statusCode || 500).json({
    response: 'Error',
    error: {
      type: customError === false ? 'UnhandledError' : error.constructor.name,
      path: req.path,
      statusCode: error.statusCode || 500,
      message: error.message,
    },
  });
  next(error);
}

async function defaultErrorHandler(req:any, res:any) {
  res.status(404).json({
    response: 'Error',
    error: {
      type: 'Not found',
      path: req.path,
      statusCode: 404,
      message: 'Resource not found',
    },
  });
}

export default errorHandler;
export { errorHandler, defaultErrorHandler };
