const NODE_ERROR: string = 'NodeError';
const SYNTAX_ERROR: string =  'SyntaxError';

async function errorHandler(error: any, req: any, res: any, next: any) {
  const posibleErrors: String[] =  [NODE_ERROR, SYNTAX_ERROR];
  
  const customError: boolean = posibleErrors.includes(error.constructor.name);
  if (error instanceof Error) {
    console.error('Server error: ', error);
  }

  res.status(error.statusCode || 500).json({
    response: 'Error',
    error: {
      type: customError ? 'UnhandledError' : error.constructor.name,
      path: req.path,
      statusCode: error.statusCode || 500,
      message: error.message,
    },
  });
  next(error);
}

async function defaultErrorHandler(req: any, res: any) {
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
