var Config = Config || {};

Config.version = "0";

Config.bannedHosts = ['cool.jit.su', 'pokeball-nixonserver.rhcloud.com'];

Config.whitelist = [
	'wikipedia.org',
];

// `defaultserver` specifies the server to use when the domain name in the
// address bar is `Config.routes.client`.
Config.defaultserver = {
	id: 'showdown',
	host: 'budewinn.it',
	port: 2053,
	httpport: 2095,
	altport: 80,
	registered: true,
	https: true,
	//TODO: fare un sistema di news che le prende tramite un fetch ad un .json, file che verrà scritto tramite un apposito comando di discord (overseer)
	//TODO: lo scrivo qui ma è per la macchina che fa girare tutto: quando pusho su github il client (prima devo pushare il server), fa fetchare su github prima gli sprite poi il client, e alla fine poi builda da solo 
	//TODO: utilizzare lo stesso enviroment.config.js per server.js e showdown
	//TODO: utilizzare il manager di processi di node: nodemon, invece di pm2
	//TODO: finire redirect sprite, deve mandare lo stesso codice di risultato, esempio 404, 202 ecc
	//TODO: sperimentare con i proxy_set_header di nginx, specialmente con quello dell'ip. Devo capire se manda le richieste con l'ip degli effettivi utenti o se lo proxa col mio
};

Config.roomsFirstOpenScript = function () {
};

Config.customcolors = {
	
	"mkaya": "pqhfa97b",
	"pala97": "vzir7urz",
	
	"peonygymleader": "s4nmqutt",
	"kabucapopalestra": "k1j0j3mp",
	"capopalestrasofora": "z4bgmnho",
	"capopalestramary": "65wc9zlb",
	"capopalestrabeet": "yiib1bl0",
	"capopalestrarayne": "yiib1bl0",
	"capopalestrasavory": "e5zzduh9",
	"capopalestrayarrow": "mu9hs543",
	"oniongymleader": "6ukd8gvk",
	"laburnogymleader": "pqhfa97b",
	"azzurragymleader": "zlhuz0gj",
	"capopalestrafabia": "a56nunyg",
	"gymleadermelania": "sxnhbl2e",
	"capopalestramilo": "4j37cqhj",	
};;
/*** Begin automatically generated configuration ***/
Config.version = "0.11.2 (c50503c3)";

Config.routes = {
	root: 'pokemonshowdown.com',
	client: 'budewinn.it',
	dex: 'dex.pokemonshowdown.com',
	replays: 'replay.pokemonshowdown.com',
	users: 'pokemonshowdown.com/users',
};
/*** End automatically generated configuration ***/