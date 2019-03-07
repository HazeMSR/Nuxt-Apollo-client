function getAttributesAndValues(schema,name){
	const s = schema[name][0];
	const l = s.length-1;
	const a = [], v = [];
	let i = 0;
	let key;
	delete s["__typename"];

	for (key in schema){
		a.push(key);
		v.push(schema[key]);
	}
	return [a,v];
}