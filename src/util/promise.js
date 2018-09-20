// https://levelup.gitconnected.com/understand-javascript-promises-by-building-a-promise-from-scratch-84c0fd855720

class PromiseSimple {
	
	constructor(executor) {
		this.promises = [];
		this.handleError = () => {};

		this.onResolve = this.onResolve.bind(this);
		this.onReject = this.onReject.bind(this);

		executor(this.onResolve, this.onReject);
	}

	then(resolveCb) {
		this.promises.push(resolveCb);

		return this;
	}

	catch(handleError) {
		this.handleError = handleError;

		return this;
	}

	onResolve(value) {
		let val = value;
		try {
			this.promises.forEach((promise) => {
				val = promise(val);
			});
		} catch (error) {
			this.promises = [];
			this.onReject(error);
		}
	}

	onReject(error) {
		this.handleError(error);
	}
}