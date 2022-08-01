export const unikId = () => {
	const head = Date.now().toString(36);
	const tail = Math.random().toString(36).substring(2);

	// eslint-disable-next-line @typescript-eslint/ban-ts-comment
	// @ts-ignore
	// eslint-disable-next-line no-console
	console.log(head + tail);

	return head + tail;
};
