

export default class HtmlLoader {
	constructor() {}

	_clear(element) {
		element.innerHTML = '';
	}

	async _fetchHtml(url) {
		return await (await fetch(url)).text();
	}

	async load(element, path, clear = true) {
		if (!(element && path)) {
			throw new Error('Pass write arguments HtmlLoader.load');
		}

		if (clear) {
			this._clear(element);
		}

		element.innerHTML = await this._fetchHtml(`${path}.html`);
	}
}
