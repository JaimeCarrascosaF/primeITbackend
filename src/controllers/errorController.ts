async function errorHandler(error: any, req: any, res: any, next: any) {
  const customError: boolean = !(error.constructor.name === 'NodeError' || error.constructor.name === 'SyntaxError');
  console.log('error handler called');
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

export default errorHandler;
