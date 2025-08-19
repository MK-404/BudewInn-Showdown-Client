/** @type {import('../play.pokemonshowdown.com/src/client-main').PSConfig} */
var Config = Config || {};

Config.version = "0";

Config.bannedHosts = ['cool.jit.su', 'pokeball-nixonserver.rhcloud.com'];

Config.whitelist = [
	'wikipedia.org'

	// The full list is maintained outside of this repository so changes to it
	// don't clutter the commit log. Feel free to copy our list for your own
	// purposes; it's here: https://play.pokemonshowdown.com/config/config.js

	// If you would like to change our list, simply message Zarel on Smogon or
	// Discord.
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
