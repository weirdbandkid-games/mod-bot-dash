/* eslint-disable */
var config = { // NOTE: DO NOT LEAVE ANYTHING BLANK
	// ALL settings are strings. Do NOT just use true or false, use these in strings such as 'true' or 'false'. This is due to how some code works when changing the settings
	ownerID: '123456789012345678', // Your ID here
	token: '', // Your bot token here
	status: 'dnd', // Bot status [online/idle/invisible/dnd]
	debug: 'false', // This is used to output some debug info if needed. The token will be in the console and other information could be in the console
	playingGame: '{{prefix}}help | {{guilds}} guilds | v{{version}}', // The game you want the bot to play. {{prefix}} is replaced with the default prefix below, {{guilds}} is replaced with the guild count and {{version}} is replaced with the bot version. Leave blank to disable
	purgeLogFormat: '\n Message ID: {{mID}} | Message Timestamp: {{mTS}} | Content: {{mC}} \n', // {{mID}}: Message ID; {{mTS}} Message Timestamp; {{mC}}: Message Content;
	eightBallResponses: ['Yes', 'No', 'Certainly', 'My sources say yes', 'Try again later', 'Without a doubt', 'Better not to tell you now'], // An array of responses for the 8ball command
  googleAPIToken: 'AI-241scsc', // Used for link shortener and music features. You need to have these APIs enabled.
  logTimeFormat: 'MMM D YYYY HH:mm:ss ZZ',
  musicEnabled: 'true',
	defaultSettings: {
		prefix: '!',
		modLogChannel: 'mod-log',
		modRole: 'Moderator',
		adminRole: 'Admin',
		welcomeChannel: 'general',
		welcomeMessage: 'Welcome {{user}}!',
		welcomeEnabled: 'false',
		inviteFilterEnabled: 'false',
		inviteWhitelist: ['discord-testers', 'discord-developers'], // This can be changed, these are just defaults as an example
		facepalms: 'false', // If enabled, the bot will reply with the facepalm emoji whenever a message contains 'facepalm'
		swearFilter: 'false',
		swearWords: ['damn'], // An array of swear words. These should be lowercase. (of course, I have not included much for certain reasons...)
		logDeletes: 'true',
		logNewMember: 'true',
		logMemberLeave: 'true',
		logCommandUsage: 'true',
		logPurge: 'true',
		sendHelp: 'channel' // Available options: channel, dm
	},
	dashboard: {
		enabled: 'true', // This setting controls whether the dashboard is enabled or not.
		oauthSecret: '0eFle4ArGsecret0sa', // The client secret from the Discord bot page
		secure: 'false', // HTTPS: 'true' for true, 'false' for false
		sessionSecret: '-crazyKeyboard-qwaszxerdfcvtyghbnuijkmopl', // Go crazy on the keyboard here, this is used as a session secret
		domain: 'dashboard.bot-website.com', // Domain name (with port if not running behind proxy running on port 80). Example: 'domain': 'dashboard.bot-website.com' OR 'domain': 'localhost:33445'
		port: '33445', // The port that it should run on
		invitePerm: '8',
		protectStats: 'false',
		borderedStats: 'false', // Controls whether stats in the dashboard should have a border or not
		legalTemplates: {
			contactEmail: 'support@dashboard.bot-website.com', // This email will be used in the legal page of the dashboard if someone needs to contact you for any reason regarding this page
			lastEdited: 'April 25, 2021' // Change this if you update the `TERMS.md` or `PRIVACY.md` files in `dashboard/public/`
		}
	}
};

module.exports = config;
