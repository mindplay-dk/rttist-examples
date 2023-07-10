import 'rttist/typelib/index.js'; // TODO remove this: a future version of rttist will inject this automatically

import { Application } from "./framework/Application.js";

new Application()
	.run({ port: 8080 })
	.catch(err => {
		console.error(err);
	});