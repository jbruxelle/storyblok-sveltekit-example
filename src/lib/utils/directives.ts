const addClass = function (element: HTMLElement, className: string) {
	element.classList?.add(className);

	if (!new RegExp('\\b' + className + '\\b').test(element.className)) {
		element.className += ' ' + className;
	}
};

export const editable = (element: HTMLElement, content: any) => {
	if (!('_editable' in content)) return;

	const options = JSON.parse(content._editable.replace('<!--#storyblok#', '').replace('-->', ''));

	element.setAttribute('data-blok-c', JSON.stringify(options));
	element.setAttribute('data-blok-uid', options.id + '-' + options.uid);

	addClass(element, 'storyblok__outline');
};
