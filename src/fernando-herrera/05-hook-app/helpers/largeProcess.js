const largeProcess = (iterations) =>
{
	for (let i = 0; i <= iterations; i++)
	{
		console.log('Here we go...');
	}

	return `${ iterations } completed iterations.`;
};

export default largeProcess;
