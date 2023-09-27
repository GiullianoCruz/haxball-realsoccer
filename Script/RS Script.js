// ==============================={  RS  }===============================
//		Version: 1.2.0
//		Build Date: August-12-22
//		Author: Zirig
//		
//		░██████╗░░██████╗
//		██╔══██╗██╔════╝
//		██████╔╝╚█████╗░
//		██╔══██╗░╚═══██╗
//		██║░░██║██████╔╝
//		╚═╝░░╚═╝╚═════╝░
//		Real Soccer
//
//      Changelog:
//		1.0 Official Release
//		1.1 Translation to portuguese, custom map
//		1.2 New map/ball design
//      1.3 Added team uniforms and other commands
//           
// =========================================================================

// =========================================================================
// Usefull Links
// ------------------------------------------------
// https://www.haxball.com/headless
// https://github.com/haxball/haxball-issues/wiki/Headless-Host
// https://www.haxball.com/headlesstoken
// https://www.haxball.com/playerauth
// =========================================================================


//Real Soccer Variables
var throwTimeOut = 420; // 7 seconds (var is in game ticks)
var gkTimeOut = 600; // 10 seconds (var is in game ticks)
var ckTimeOut = 600; // 10 seconds (var is in game ticks)
var throwinDistance = 270; // distance players can move the ball during throw in
var mapBGColor = "86A578"; // default 718C5A
var superAdminCode = "366330"; // !admin 366330
var allowPublicAdmin = false; // if true then !admin command is enabled

////// v1.3 Variables
var teamColor = "red";


/*-------------------------------- STADIUMS ---------------------------------*/
function getRealSoccerMap() {
	var realSoccerMap = `{
	"name": "RS Arena",
	"width": 1300,
	"height": 670,
	"spawnDistance": 560,
	"bg": {
		"type": "grass",
		"width": 1150,
		"height": 600,
		"kickOffRadius": 180,
		"cornerRadius": 0,
		"color": "86A578"
	},
	"playerPhysics": {
		"bCoef": 0.3,
		"invMass": 0.5,
		"damping": 0.96,
		"acceleration": 0.12,
		"kickingAcceleration": 0.07,
		"kickingDamping": 0.96,
		"kickStrength": 5.65,
		"radius": 15,
		"cGroup": [
			"red",
			"blue"
		],
		"gravity": [
			0,
			0
		],
		"kickback": 0
	},
	"ballPhysics": {
		"radius": 9,
		"bCoef": 0.5,
		"invMass": 1.05,
		"damping": 0.99,
		"color": "FFFFFF",
		"cMask": [
			"all"
		],
		"cGroup": [
			"ball"
		],
		"gravity": [
			0,
			0
		]
	},
	"vertexes": [
		{
			"x": 0,
			"y": 675,
			"trait": "kickOffBarrier",
			"color": "ffffff"
		},
		{
			"x": 0,
			"y": 180,
			"trait": "kickOffBarrier",
			"color": "ffffff"
		},
		{
			"x": 0,
			"y": -180,
			"trait": "kickOffBarrier",
			"color": "ffffff"
		},
		{
			"x": 0,
			"y": -675,
			"trait": "kickOffBarrier",
			"color": "ffffff"
		},
		{
			"x": 1150,
			"y": 320,
			"trait": "line",
			"color": "ffffff"
		},
		{
			"x": 840,
			"y": 320,
			"trait": "line",
			"color": "ffffff"
		},
		{
			"x": 1150,
			"y": -320,
			"trait": "line",
			"color": "ffffff"
		},
		{
			"x": 840,
			"y": -320,
			"trait": "line",
			"color": "ffffff"
		},
		{
			"x": 1150,
			"y": 180,
			"trait": "line",
			"color": "ffffff"
		},
		{
			"x": 1030,
			"y": 180,
			"trait": "line",
			"color": "ffffff"
		},
		{
			"x": 1150,
			"y": -180,
			"trait": "line",
			"color": "ffffff"
		},
		{
			"x": 1030,
			"y": -180,
			"trait": "line",
			"color": "ffffff"
		},
		{
			"x": 840,
			"y": -130,
			"trait": "line",
			"curve": -130,
			"color": "ffffff"
		},
		{
			"x": 840,
			"y": 130,
			"trait": "line",
			"curve": -130,
			"color": "ffffff"
		},
		{
			"x": -1150,
			"y": -320,
			"trait": "line",
			"color": "ffffff"
		},
		{
			"x": -840,
			"y": -320,
			"trait": "line",
			"color": "ffffff"
		},
		{
			"x": -1150,
			"y": 320,
			"trait": "line",
			"color": "ffffff"
		},
		{
			"x": -840,
			"y": 320,
			"trait": "line",
			"color": "ffffff"
		},
		{
			"x": -1150,
			"y": -175,
			"trait": "line",
			"color": "ffffff"
		},
		{
			"x": -1030,
			"y": -175,
			"trait": "line",
			"color": "ffffff"
		},
		{
			"x": -1150,
			"y": 175,
			"trait": "line",
			"color": "ffffff"
		},
		{
			"x": -1030,
			"y": 175,
			"trait": "line",
			"color": "ffffff"
		},
		{
			"x": -840,
			"y": 130,
			"trait": "line",
			"curve": -130,
			"color": "ffffff"
		},
		{
			"x": -840,
			"y": -130,
			"trait": "line",
			"curve": -130,
			"color": "ffffff"
		},
		{
			"x": 935,
			"y": 3,
			"trait": "line",
			"color": "ffffff"
		},
		{
			"x": 935,
			"y": -3,
			"trait": "line",
			"color": "ffffff"
		},
		{
			"x": -935,
			"y": 3,
			"trait": "line",
			"color": "ffffff"
		},
		{
			"x": -935,
			"y": -3,
			"trait": "line",
			"color": "ffffff"
		},
		{
			"x": -1150,
			"y": 570,
			"bCoef": -2.65,
			"cMask": [
				"ball"
			],
			"cGroup": [
				"c0"
			],
			"trait": "line",
			"color": "ffffff"
		},
		{
			"x": -1120,
			"y": 600,
			"bCoef": -2.65,
			"cMask": [
				"ball"
			],
			"cGroup": [
				"c0"
			],
			"trait": "line",
			"color": "ffffff"
		},
		{
			"x": -1120,
			"y": -600,
			"bCoef": -2.65,
			"cMask": [
				"ball"
			],
			"cGroup": [
				"c0"
			],
			"trait": "line",
			"color": "ffffff"
		},
		{
			"x": -1150,
			"y": -570,
			"bCoef": -2.65,
			"cMask": [
				"ball"
			],
			"cGroup": [
				"c0"
			],
			"trait": "line",
			"color": "ffffff"
		},
		{
			"x": 1120,
			"y": 600,
			"bCoef": -2.65,
			"cMask": [
				"ball"
			],
			"cGroup": [
				"c0"
			],
			"trait": "line",
			"color": "ffffff"
		},
		{
			"x": 1150,
			"y": 570,
			"bCoef": -2.65,
			"cMask": [
				"ball"
			],
			"cGroup": [
				"c0"
			],
			"trait": "line",
			"color": "ffffff"
		},
		{
			"x": 1150,
			"y": -570,
			"bCoef": -2.65,
			"cMask": [
				"ball"
			],
			"cGroup": [
				"c0"
			],
			"trait": "line",
			"color": "ffffff"
		},
		{
			"x": 1120,
			"y": -600,
			"bCoef": -2.65,
			"cMask": [
				"ball"
			],
			"cGroup": [
				"c0"
			],
			"trait": "line",
			"color": "ffffff"
		},
		{
			"x": 0,
			"y": 180,
			"bCoef": 0.1,
			"cMask": [
				"red",
				"blue"
			],
			"cGroup": [
				"blueKO"
			],
			"trait": "kickOffBarrier",
			"curve": -180,
			"color": "ffffff"
		},
		{
			"x": 0,
			"y": -180,
			"bCoef": 0.1,
			"cMask": [
				"red",
				"blue"
			],
			"cGroup": [
				"redKO"
			],
			"trait": "kickOffBarrier",
			"curve": 180,
			"color": "ffffff"
		},
		{
			"x": 0,
			"y": 180,
			"bCoef": 0.1,
			"cMask": [
				"red",
				"blue"
			],
			"cGroup": [
				"redKO"
			],
			"trait": "kickOffBarrier",
			"curve": 180,
			"color": "ffffff"
		},
		{
			"x": -1030,
			"y": -40,
			"bCoef": -5.7,
			"cMask": [
				"ball"
			],
			"cGroup": [
				"c0"
			],
			"trait": "line",
			"curve": 70,
			"color": "ffffff",
			"vis": false
		},
		{
			"x": -1030,
			"y": 40,
			"bCoef": -5.7,
			"cMask": [
				"ball"
			],
			"cGroup": [
				"c0"
			],
			"trait": "line",
			"curve": 70,
			"color": "ffffff",
			"vis": false
		},
		{
			"x": 1030,
			"y": -40,
			"bCoef": -5.7,
			"cMask": [
				"ball"
			],
			"cGroup": [
				"c0"
			],
			"trait": "line",
			"curve": -70,
			"color": "ffffff",
			"vis": false
		},
		{
			"x": 1030,
			"y": 40,
			"bCoef": -5.7,
			"cMask": [
				"ball"
			],
			"cGroup": [
				"c0"
			],
			"trait": "line",
			"curve": -70,
			"color": "ffffff",
			"vis": false
		},
		{
			"x": 1030,
			"y": -40,
			"trait": "line",
			"color": "ffffff"
		},
		{
			"x": 1030,
			"y": 40,
			"trait": "line",
			"color": "ffffff"
		},
		{
			"x": -1030,
			"y": -40,
			"trait": "line",
			"color": "ffffff"
		},
		{
			"x": -1030,
			"y": 40,
			"trait": "line",
			"color": "ffffff"
		},
		{
			"x": -1157,
			"y": 605,
			"bCoef": 0,
			"cMask": [
				"ball"
			],
			"trait": "ballArea",
			"color": "ffffff"
		},
		{
			"x": -1157,
			"y": 655,
			"bCoef": 0,
			"cMask": [
				"ball"
			],
			"trait": "ballArea"
		},
		{
			"x": -1157,
			"y": -655,
			"bCoef": 0,
			"cMask": [
				"ball"
			],
			"trait": "ballArea"
		},
		{
			"x": -1157,
			"y": -605,
			"bCoef": 0,
			"cMask": [
				"ball"
			],
			"trait": "ballArea",
			"color": "ffffff"
		},
		{
			"x": 1157,
			"y": 605,
			"bCoef": 0,
			"cMask": [
				"ball"
			],
			"trait": "ballArea",
			"color": "ffffff"
		},
		{
			"x": 1157,
			"y": 655,
			"bCoef": 0,
			"cMask": [
				"ball"
			],
			"trait": "ballArea"
		},
		{
			"x": 1157,
			"y": -655,
			"bCoef": 0,
			"cMask": [
				"ball"
			],
			"trait": "ballArea"
		},
		{
			"x": 1157,
			"y": -605,
			"bCoef": 0,
			"cMask": [
				"ball"
			],
			"trait": "ballArea",
			"color": "ffffff"
		},
		{
			"x": -1300,
			"y": -485,
			"bCoef": 0,
			"cMask": [
				"c1"
			],
			"cGroup": [
				"red",
				"blue"
			],
			"color": "ec644b",
			"vis": false
		},
		{
			"x": 1300,
			"y": -485,
			"bCoef": 0,
			"cMask": [
				"c1"
			],
			"cGroup": [
				"red",
				"blue"
			],
			"color": "ec644b",
			"vis": false
		},
		{
			"x": -1300,
			"y": 485,
			"bCoef": 0,
			"cMask": [
				"c1"
			],
			"cGroup": [
				"red",
				"blue"
			],
			"color": "ec644b",
			"vis": false
		},
		{
			"x": 1300,
			"y": 485,
			"bCoef": 0,
			"cMask": [
				"c1"
			],
			"cGroup": [
				"red",
				"blue"
			],
			"color": "ec644b",
			"vis": false
		},
		{
			"x": -1295,
			"y": -320,
			"cMask": [
				"c0"
			],
			"cGroup": [
				"red",
				"blue"
			]
		},
		{
			"x": -840,
			"y": -320,
			"cMask": [
				"c0"
			],
			"cGroup": [
				"red",
				"blue"
			],
			"color": "ffffff"
		},
		{
			"x": -840,
			"y": 320,
			"cMask": [
				"c0"
			],
			"cGroup": [
				"red",
				"blue"
			],
			"color": "ffffff"
		},
		{
			"x": -1295,
			"y": 320,
			"cMask": [
				"c0"
			],
			"cGroup": [
				"red",
				"blue"
			]
		},
		{
			"x": 1295,
			"y": -320,
			"cMask": [
				"c0"
			],
			"cGroup": [
				"red",
				"blue"
			]
		},
		{
			"x": 840,
			"y": -320,
			"cMask": [
				"c0"
			],
			"cGroup": [
				"red",
				"blue"
			],
			"color": "ffffff"
		},
		{
			"x": 840,
			"y": 320,
			"cMask": [
				"c0"
			],
			"cGroup": [
				"red",
				"blue"
			],
			"color": "ffffff"
		},
		{
			"x": 1295,
			"y": 320,
			"cMask": [
				"c0"
			],
			"cGroup": [
				"red",
				"blue"
			]
		},
		{
			"x": -1150,
			"y": -124,
			"bCoef": 0,
			"cMask": [
				"ball",
				"red",
				"blue"
			],
			"color": "ffffff"
		},
		{
			"x": -1210,
			"y": -124,
			"bCoef": 0,
			"cMask": [
				"ball"
			],
			"bias": 0,
			"curve": 30
		},
		{
			"x": -1150,
			"y": 124,
			"bCoef": 0,
			"cMask": [
				"ball",
				"red",
				"blue"
			],
			"color": "ffffff"
		},
		{
			"x": -1210,
			"y": 124,
			"bCoef": 0,
			"cMask": [
				"ball"
			],
			"bias": 0,
			"curve": 30
		},
		{
			"x": -1250,
			"y": -158,
			"bCoef": 0,
			"cMask": [
				"ball"
			]
		},
		{
			"x": -1250,
			"y": 158,
			"bCoef": 0,
			"cMask": [
				"ball"
			]
		},
		{
			"x": 1150,
			"y": 124,
			"bCoef": 0,
			"cMask": [
				"ball",
				"red",
				"blue"
			],
			"color": "ffffff"
		},
		{
			"x": 1210,
			"y": 124,
			"bCoef": 0,
			"cMask": [
				"ball"
			],
			"curve": -30
		},
		{
			"x": 1150,
			"y": -124,
			"bCoef": 0,
			"cMask": [
				"ball",
				"red",
				"blue"
			],
			"color": "ffffff"
		},
		{
			"x": 1210,
			"y": -124,
			"bCoef": 0,
			"cMask": [
				"ball"
			],
			"curve": -30
		},
		{
			"x": 1250,
			"y": -158,
			"bCoef": 0,
			"cMask": [
				"ball"
			]
		},
		{
			"x": 1250,
			"y": 158,
			"bCoef": 0,
			"cMask": [
				"ball"
			]
		},
		{
			"x": -1150,
			"y": 600,
			"bCoef": 0,
			"cMask": [
				"ball"
			],
			"cGroup": [
				"c0"
			],
			"trait": "line",
			"curve": 0
		},
		{
			"x": -1150,
			"y": -602,
			"bCoef": 0,
			"cMask": [
				"ball"
			],
			"cGroup": [
				"c0"
			],
			"trait": "line",
			"curve": 0
		},
		{
			"x": 1150,
			"y": -150,
			"bCoef": 0,
			"cMask": [
				"ball"
			],
			"cGroup": [
				"c0"
			],
			"trait": "line",
			"curve": 0
		},
		{
			"x": 1150,
			"y": -600,
			"bCoef": 0,
			"cMask": [
				"ball"
			],
			"cGroup": [
				"c0"
			],
			"trait": "line",
			"curve": 0
		},
		{
			"x": 840,
			"y": -320,
			"cMask": [
				"c1"
			],
			"cGroup": [
				"c1"
			],
			"trait": "line",
			"color": "ffffff",
			"vis": true,
			"_data": {
				"mirror": {}
			}
		},
		{
			"x": 840,
			"y": 320,
			"cMask": [
				"c1"
			],
			"cGroup": [
				"c1"
			],
			"trait": "line",
			"color": "ffffff",
			"vis": true,
			"_data": {
				"mirror": {}
			}
		},
		{
			"x": 1150,
			"y": 320,
			"cMask": [
				"c1"
			],
			"cGroup": [
				"c1"
			],
			"trait": "line",
			"color": "ffffff",
			"vis": true
		},
		{
			"x": 840,
			"y": 320,
			"cMask": [
				"c1"
			],
			"cGroup": [
				"c1"
			],
			"trait": "line",
			"color": "ffffff",
			"vis": true
		},
		{
			"x": 1150,
			"y": -320,
			"cMask": [
				"c1"
			],
			"cGroup": [
				"c1"
			],
			"trait": "line",
			"color": "ffffff",
			"vis": true
		},
		{
			"x": 840,
			"y": -320,
			"cMask": [
				"c1"
			],
			"cGroup": [
				"c1"
			],
			"trait": "line",
			"color": "ffffff",
			"vis": true
		},
		{
			"x": -1150,
			"y": -320,
			"cMask": [
				"c1"
			],
			"cGroup": [
				"c1"
			],
			"trait": "line",
			"color": "ffffff",
			"vis": true
		},
		{
			"x": -840,
			"y": -320,
			"cMask": [
				"c1"
			],
			"cGroup": [
				"c1"
			],
			"trait": "line",
			"color": "ffffff",
			"vis": true
		},
		{
			"x": -1150,
			"y": 320,
			"cMask": [
				"c1"
			],
			"cGroup": [
				"c1"
			],
			"trait": "line",
			"color": "ffffff",
			"vis": true
		},
		{
			"x": -840,
			"y": 320,
			"cMask": [
				"c1"
			],
			"cGroup": [
				"c1"
			],
			"trait": "line",
			"color": "ffffff",
			"vis": true
		},
		{
			"x": -840,
			"y": -320,
			"cMask": [
				"c1"
			],
			"cGroup": [
				"c1"
			],
			"trait": "line",
			"color": "ffffff",
			"vis": true
		},
		{
			"x": -840,
			"y": 320,
			"cMask": [
				"c1"
			],
			"cGroup": [
				"c1"
			],
			"trait": "line",
			"color": "ffffff",
			"vis": true
		},
		{
			"x": 0,
			"y": -600,
			"cMask": [
				"c1"
			],
			"cGroup": [
				"c1"
			],
			"trait": "line",
			"color": "ffffff",
			"vis": true
		},
		{
			"x": 0,
			"y": 600,
			"cMask": [
				"c1"
			],
			"cGroup": [
				"c1"
			],
			"trait": "line",
			"color": "ffffff",
			"vis": true
		},
		{
			"x": 0,
			"y": -180,
			"bCoef": 0.1,
			"cMask": [
				"red",
				"blue"
			],
			"cGroup": [
				"c1"
			],
			"trait": "kickOffBarrier",
			"curve": 180,
			"color": "ffffff",
			"vis": true
		},
		{
			"x": 0,
			"y": 180,
			"bCoef": 0.1,
			"cMask": [
				"red",
				"blue"
			],
			"cGroup": [
				"c1"
			],
			"trait": "kickOffBarrier",
			"curve": 180,
			"color": "ffffff",
			"vis": true
		},
		{
			"x": 0,
			"y": 180,
			"bCoef": 0.1,
			"cMask": [
				"red",
				"blue"
			],
			"cGroup": [
				"c1"
			],
			"trait": "kickOffBarrier",
			"curve": -180,
			"color": "ffffff",
			"vis": true,
			"_data": {
				"mirror": {}
			}
		},
		{
			"x": 0,
			"y": -180,
			"bCoef": 0.1,
			"cMask": [
				"red",
				"blue"
			],
			"cGroup": [
				"c1"
			],
			"trait": "kickOffBarrier",
			"curve": 180,
			"color": "ffffff",
			"vis": true,
			"_data": {
				"mirror": {}
			}
		},
		{
			"x": -1150,
			"y": -600,
			"bCoef": 0,
			"cMask": [
				"ball"
			],
			"cGroup": [
				"c0"
			],
			"trait": "line",
			"curve": 0
		},
		{
			"x": 1150,
			"y": -600,
			"bCoef": 0,
			"cMask": [
				"ball"
			],
			"cGroup": [
				"c0"
			],
			"trait": "line",
			"curve": 0
		},
		{
			"x": -1150,
			"y": 600,
			"bCoef": 0,
			"cMask": [
				"ball"
			],
			"cGroup": [
				"c0"
			],
			"trait": "line"
		},
		{
			"x": 1150,
			"y": 600,
			"bCoef": 0,
			"cMask": [
				"ball"
			],
			"cGroup": [
				"c0"
			],
			"trait": "line"
		},
		{
			"x": 1150,
			"y": -150,
			"bCoef": 0,
			"cMask": [
				"ball"
			],
			"cGroup": [
				"c0"
			],
			"trait": "line",
			"curve": 0
		},
		{
			"x": 1150,
			"y": -600,
			"bCoef": 0,
			"cMask": [
				"ball"
			],
			"cGroup": [
				"c0"
			],
			"trait": "line",
			"curve": 0
		},
		{
			"x": -1150,
			"y": -600,
			"bCoef": 0,
			"cMask": [
				"ball"
			],
			"cGroup": [
				"c0"
			],
			"trait": "line"
		},
		{
			"x": -1150,
			"y": -124,
			"bCoef": 0,
			"cMask": [
				"ball"
			],
			"cGroup": [
				"c0"
			],
			"trait": "line"
		},
		{
			"x": -1150,
			"y": 124,
			"bCoef": 0,
			"cMask": [
				"ball"
			],
			"cGroup": [
				"c0"
			],
			"trait": "line"
		},
		{
			"x": -1150,
			"y": 600,
			"bCoef": 0,
			"cMask": [
				"ball"
			],
			"cGroup": [
				"c0"
			],
			"trait": "line"
		},
		{
			"x": 1150,
			"y": 124,
			"bCoef": 0,
			"cMask": [
				"ball"
			],
			"cGroup": [
				"c0"
			],
			"trait": "line"
		},
		{
			"x": 1150,
			"y": 600,
			"bCoef": 0,
			"cMask": [
				"ball"
			],
			"cGroup": [
				"c0"
			],
			"trait": "line"
		},
		{
			"x": 1150,
			"y": -124,
			"bCoef": 0,
			"cMask": [
				"ball"
			],
			"cGroup": [
				"c0"
			],
			"trait": "line"
		},
		{
			"x": 1150,
			"y": -600,
			"bCoef": 0,
			"cMask": [
				"ball"
			],
			"cGroup": [
				"c0"
			],
			"trait": "line"
		},
		{
			"x": 0,
			"y": -600,
			"cMask": [
				"red",
				"blue"
			],
			"cGroup": [
				"c1"
			],
			"trait": "kickOffBarrier",
			"color": "ffffff",
			"vis": true,
			"curve": 0
		},
		{
			"x": 0,
			"y": -180,
			"cMask": [
				"red",
				"blue"
			],
			"cGroup": [
				"c1"
			],
			"trait": "kickOffBarrier",
			"color": "ffffff",
			"vis": true,
			"curve": 0
		},
		{
			"x": 0,
			"y": 180,
			"cMask": [
				"red",
				"blue"
			],
			"cGroup": [
				"c1"
			],
			"trait": "kickOffBarrier",
			"color": "ffffff",
			"vis": true,
			"curve": 0
		},
		{
			"x": 0,
			"y": 600,
			"cMask": [
				"red",
				"blue"
			],
			"cGroup": [
				"c1"
			],
			"trait": "kickOffBarrier",
			"color": "ffffff",
			"vis": true,
			"curve": 0
		},
		{
			"bCoef": 0.1,
			"cMask": [
				"c1"
			],
			"cGroup": [
				"c1"
			],
			"trait": "line",
			"x": 17.350479526894986,
			"y": 636.0810587330693,
			"_data": {
				"mirror": {}
			},
			"color": "4e6146"
		},
		{
			"bCoef": 0.1,
			"cMask": [
				"c1"
			],
			"cGroup": [
				"c1"
			],
			"trait": "line",
			"x": 17.460380540811798,
			"y": 656.5151418864998,
			"_data": {
				"mirror": {}
			},
			"color": "4e6146"
		},
		{
			"bCoef": 0.1,
			"cMask": [
				"c1"
			],
			"cGroup": [
				"c1"
			],
			"trait": "line",
			"x": 2.001328651518037,
			"y": 635.799068814434,
			"_data": {
				"mirror": {}
			},
			"color": "4e6146"
		},
		{
			"bCoef": 0.1,
			"cMask": [
				"c1"
			],
			"cGroup": [
				"c1"
			],
			"trait": "line",
			"x": 17.749339792036977,
			"y": 636.1341328812535,
			"_data": {
				"mirror": {}
			},
			"color": "4e6146"
		},
		{
			"bCoef": 0.1,
			"cMask": [
				"c1"
			],
			"cGroup": [
				"c1"
			],
			"trait": "line",
			"x": -3.4338587257951474,
			"y": 640.0150138052638,
			"_data": {
				"mirror": {}
			},
			"color": "4e6146"
		},
		{
			"bCoef": 0.1,
			"cMask": [
				"c1"
			],
			"cGroup": [
				"c1"
			],
			"trait": "line",
			"x": 4.100530988377159,
			"y": 635.9522786400819,
			"_data": {
				"mirror": {}
			},
			"color": "4e6146"
		},
		{
			"bCoef": 0.1,
			"cMask": [
				"c1"
			],
			"cGroup": [
				"c1"
			],
			"trait": "line",
			"x": -2.6098539265491922,
			"y": 638.6188023868558,
			"_data": {
				"mirror": {}
			},
			"color": "4e6146"
		},
		{
			"bCoef": 0.1,
			"cMask": [
				"c1"
			],
			"cGroup": [
				"c1"
			],
			"trait": "line",
			"x": -6.714555455078454,
			"y": 645.9160495486856,
			"_data": {
				"mirror": {}
			},
			"color": "4e6146"
		},
		{
			"bCoef": 0.1,
			"cMask": [
				"c1"
			],
			"cGroup": [
				"c1"
			],
			"trait": "line",
			"x": -6.714555455078454,
			"y": 646.8282054439144,
			"_data": {
				"mirror": {}
			},
			"color": "4e6146"
		},
		{
			"bCoef": 0.1,
			"cMask": [
				"c1"
			],
			"cGroup": [
				"c1"
			],
			"trait": "line",
			"x": -6.486516481271252,
			"y": 622.656074220353,
			"_data": {
				"mirror": {}
			},
			"color": "4e6146"
		},
		{
			"bCoef": 0.1,
			"cMask": [
				"c1"
			],
			"cGroup": [
				"c1"
			],
			"trait": "line",
			"x": -7.1706334026928005,
			"y": 658.4581931080806,
			"_data": {
				"mirror": {}
			},
			"color": "4e6146"
		},
		{
			"bCoef": 0.1,
			"cMask": [
				"c1"
			],
			"cGroup": [
				"c1"
			],
			"trait": "line",
			"x": -6.714555455078454,
			"y": 658.4581931080806,
			"_data": {
				"mirror": {}
			},
			"color": "4e6146"
		},
		{
			"bCoef": 0.1,
			"cMask": [
				"c1"
			],
			"cGroup": [
				"c1"
			],
			"trait": "line",
			"x": -24.04551746442425,
			"y": 650.020751077215,
			"_data": {
				"mirror": {}
			},
			"color": "4e6146"
		},
		{
			"bCoef": 0.1,
			"cMask": [
				"c1"
			],
			"cGroup": [
				"c1"
			],
			"trait": "line",
			"x": -14.923958512136977,
			"y": 611.4821645038012,
			"_data": {
				"mirror": {}
			},
			"curve": 0,
			"color": "4e6146"
		},
		{
			"bCoef": 0.1,
			"cMask": [
				"c1"
			],
			"cGroup": [
				"c1"
			],
			"trait": "line",
			"x": -24.04551746442425,
			"y": 650.9329069724436,
			"_data": {
				"mirror": {}
			},
			"curve": 0,
			"color": "4e6146"
		},
		{
			"bCoef": 0.1,
			"cMask": [
				"c1"
			],
			"cGroup": [
				"c1"
			],
			"trait": "line",
			"x": -15.608075433558525,
			"y": 612.1662814252227,
			"_data": {
				"mirror": {}
			},
			"color": "4e6146"
		},
		{
			"bCoef": 0.1,
			"cMask": [
				"c1"
			],
			"cGroup": [
				"c1"
			],
			"trait": "line",
			"x": 0.12661375913700113,
			"y": 612.1662814252227,
			"_data": {
				"mirror": {}
			},
			"color": "4e6146"
		},
		{
			"bCoef": 0.1,
			"cMask": [
				"c1"
			],
			"cGroup": [
				"c1"
			],
			"trait": "line",
			"x": -0.3294641884773455,
			"y": 612.1662814252227,
			"_data": {
				"mirror": {}
			},
			"color": "4e6146"
		},
		{
			"bCoef": 0.1,
			"cMask": [
				"c1"
			],
			"cGroup": [
				"c1"
			],
			"trait": "line",
			"x": 1.4948476019800978,
			"y": 613.9905932156802,
			"_data": {
				"mirror": {}
			},
			"color": "4e6146"
		},
		{
			"bCoef": 0.1,
			"cMask": [
				"c1"
			],
			"cGroup": [
				"c1"
			],
			"trait": "line",
			"x": 1.4948476019800978,
			"y": 613.762554241873,
			"_data": {
				"mirror": {}
			},
			"color": "4e6146"
		},
		{
			"bCoef": 0.1,
			"cMask": [
				"c1"
			],
			"cGroup": [
				"c1"
			],
			"trait": "line",
			"x": 1.2668086281729245,
			"y": 623.1121521679675,
			"_data": {
				"mirror": {}
			},
			"color": "4e6146"
		},
		{
			"bCoef": 0.1,
			"cMask": [
				"c1"
			],
			"cGroup": [
				"c1"
			],
			"trait": "line",
			"x": -7.626711350307147,
			"y": 623.1121521679675,
			"_data": {
				"mirror": {}
			},
			"curve": 0,
			"color": "4e6146"
		},
		{
			"bCoef": 0.1,
			"cMask": [
				"c1"
			],
			"cGroup": [
				"c1"
			],
			"trait": "line",
			"x": 2.178964523401646,
			"y": 623.1121521679675,
			"_data": {
				"mirror": {}
			},
			"curve": 0,
			"color": "4e6146"
		},
		{
			"bCoef": 0.1,
			"cMask": [
				"c1"
			],
			"cGroup": [
				"c1"
			],
			"trait": "line",
			"x": 1.1846030956657216,
			"y": 619.0074506394382,
			"_data": {
				"mirror": {}
			},
			"color": "42523b"
		},
		{
			"bCoef": 0.1,
			"cMask": [
				"c1"
			],
			"cGroup": [
				"c1"
			],
			"trait": "line",
			"x": -8.76690621934307,
			"y": 619.0074506394382,
			"_data": {
				"mirror": {}
			},
			"color": "42523b"
		},
		{
			"bCoef": 0.1,
			"cMask": [
				"c1"
			],
			"cGroup": [
				"c1"
			],
			"trait": "line",
			"x": -4.206126743199462,
			"y": 616.9550998751736,
			"_data": {
				"mirror": {}
			},
			"color": "42523b"
		},
		{
			"bCoef": 0.1,
			"cMask": [
				"c1"
			],
			"cGroup": [
				"c1"
			],
			"trait": "line",
			"x": -8.76690621934307,
			"y": 616.9550998751736,
			"_data": {
				"mirror": {}
			},
			"color": "42523b"
		},
		{
			"bCoef": 0.1,
			"cMask": [
				"c1"
			],
			"cGroup": [
				"c1"
			],
			"trait": "line",
			"x": 13.58091321376071,
			"y": 641.355270072542,
			"_data": {
				"mirror": {}
			},
			"color": "42523b"
		},
		{
			"bCoef": 0.1,
			"cMask": [
				"c1"
			],
			"cGroup": [
				"c1"
			],
			"trait": "line",
			"x": 0.12661375913700113,
			"y": 647.740361339143,
			"_data": {
				"mirror": {}
			},
			"color": "42523b"
		}
	],
	"segments": [
		{
			"v0": 0,
			"v1": 1,
			"color": "ffffff",
			"trait": "kickOffBarrier"
		},
		{
			"v0": 2,
			"v1": 3,
			"color": "ffffff",
			"trait": "kickOffBarrier"
		},
		{
			"v0": 4,
			"v1": 5,
			"color": "ffffff",
			"trait": "line",
			"y": 320
		},
		{
			"v0": 5,
			"v1": 7,
			"color": "ffffff",
			"trait": "line",
			"x": 840
		},
		{
			"v0": 6,
			"v1": 7,
			"color": "ffffff",
			"trait": "line",
			"y": -320
		},
		{
			"v0": 8,
			"v1": 9,
			"color": "ffffff",
			"trait": "line",
			"y": 180
		},
		{
			"v0": 9,
			"v1": 11,
			"color": "ffffff",
			"trait": "line",
			"x": 1030
		},
		{
			"v0": 10,
			"v1": 11,
			"color": "ffffff",
			"trait": "line",
			"y": -180
		},
		{
			"v0": 12,
			"v1": 13,
			"curve": -130,
			"color": "ffffff",
			"trait": "line",
			"x": 840
		},
		{
			"v0": 14,
			"v1": 15,
			"color": "ffffff",
			"trait": "line",
			"y": -320
		},
		{
			"v0": 15,
			"v1": 17,
			"color": "ffffff",
			"trait": "line",
			"x": -840
		},
		{
			"v0": 16,
			"v1": 17,
			"color": "ffffff",
			"trait": "line",
			"y": 320
		},
		{
			"v0": 18,
			"v1": 19,
			"color": "ffffff",
			"trait": "line",
			"y": -175
		},
		{
			"v0": 19,
			"v1": 21,
			"color": "ffffff",
			"trait": "line",
			"x": -1030
		},
		{
			"v0": 20,
			"v1": 21,
			"color": "ffffff",
			"trait": "line",
			"y": 175
		},
		{
			"v0": 22,
			"v1": 23,
			"curve": -130,
			"color": "ffffff",
			"trait": "line",
			"x": -840
		},
		{
			"v0": 24,
			"v1": 25,
			"curve": -180,
			"color": "ffffff",
			"trait": "line",
			"x": 935
		},
		{
			"v0": 26,
			"v1": 27,
			"curve": -180,
			"color": "ffffff",
			"trait": "line",
			"x": -935
		},
		{
			"v0": 24,
			"v1": 25,
			"curve": 180,
			"color": "ffffff",
			"trait": "line",
			"x": 935
		},
		{
			"v0": 26,
			"v1": 27,
			"curve": 180,
			"color": "ffffff",
			"trait": "line",
			"x": -935
		},
		{
			"v0": 24,
			"v1": 25,
			"curve": 90,
			"color": "ffffff",
			"trait": "line",
			"x": 935
		},
		{
			"v0": 26,
			"v1": 27,
			"curve": 90,
			"color": "ffffff",
			"trait": "line",
			"x": -935
		},
		{
			"v0": 24,
			"v1": 25,
			"curve": -90,
			"color": "ffffff",
			"trait": "line",
			"x": 935
		},
		{
			"v0": 26,
			"v1": 27,
			"curve": -90,
			"color": "ffffff",
			"trait": "line",
			"x": -935
		},
		{
			"v0": 24,
			"v1": 25,
			"color": "ffffff",
			"trait": "line",
			"x": 935
		},
		{
			"v0": 26,
			"v1": 27,
			"color": "ffffff",
			"trait": "line",
			"x": -935
		},
		{
			"v0": 28,
			"v1": 29,
			"curve": 90,
			"color": "ffffff",
			"bCoef": -2.65,
			"cMask": [
				"ball"
			],
			"cGroup": [
				"c0"
			],
			"trait": "line"
		},
		{
			"v0": 30,
			"v1": 31,
			"curve": 90,
			"color": "ffffff",
			"bCoef": -2.65,
			"cMask": [
				"ball"
			],
			"cGroup": [
				"c0"
			],
			"trait": "line"
		},
		{
			"v0": 32,
			"v1": 33,
			"curve": 90,
			"color": "ffffff",
			"bCoef": -2.65,
			"cMask": [
				"ball"
			],
			"cGroup": [
				"c0"
			],
			"trait": "line"
		},
		{
			"v0": 34,
			"v1": 35,
			"curve": 90,
			"color": "ffffff",
			"bCoef": -2.65,
			"cMask": [
				"ball"
			],
			"cGroup": [
				"c0"
			],
			"trait": "line"
		},
		{
			"v0": 37,
			"v1": 36,
			"curve": -180.87533516123602,
			"vis": false,
			"color": "ffffff",
			"bCoef": 0.1,
			"cGroup": [
				"blueKO"
			],
			"trait": "kickOffBarrier"
		},
		{
			"v0": 39,
			"v1": 40,
			"curve": 70,
			"vis": false,
			"color": "ffffff",
			"bCoef": -5.7,
			"cMask": [
				"ball"
			],
			"cGroup": [
				"c0"
			],
			"trait": "line",
			"x": -1030
		},
		{
			"v0": 41,
			"v1": 42,
			"curve": -70,
			"vis": false,
			"color": "ffffff",
			"bCoef": -5.7,
			"cMask": [
				"ball"
			],
			"cGroup": [
				"c0"
			],
			"trait": "line",
			"x": 1030
		},
		{
			"v0": 37,
			"v1": 38,
			"curve": 180,
			"vis": false,
			"color": "ffffff",
			"bCoef": 0.1,
			"cMask": [
				"red",
				"blue"
			],
			"cGroup": [
				"redKO"
			],
			"trait": "kickOffBarrier"
		},
		{
			"v0": 43,
			"v1": 44,
			"vis": true,
			"color": "ffffff",
			"trait": "line",
			"x": 1030
		},
		{
			"v0": 45,
			"v1": 46,
			"vis": true,
			"color": "ffffff",
			"trait": "line",
			"x": -1030
		},
		{
			"v0": 47,
			"v1": 48,
			"color": "FFFF00",
			"bCoef": 0,
			"cMask": [
				"ball"
			],
			"trait": "ballArea",
			"x": -1157
		},
		{
			"v0": 49,
			"v1": 50,
			"color": "FFFF00",
			"bCoef": 0,
			"cMask": [
				"ball"
			],
			"trait": "ballArea",
			"x": -1157
		},
		{
			"v0": 51,
			"v1": 52,
			"color": "FFFF00",
			"bCoef": 0,
			"cMask": [
				"ball"
			],
			"trait": "ballArea",
			"x": 1157
		},
		{
			"v0": 53,
			"v1": 54,
			"color": "FFFF00",
			"bCoef": 0,
			"cMask": [
				"ball"
			],
			"trait": "ballArea",
			"x": 1157
		},
		{
			"v0": 55,
			"v1": 56,
			"vis": false,
			"color": "ec644b",
			"bCoef": 0,
			"cMask": [
				"c1"
			],
			"cGroup": [
				"red",
				"blue"
			],
			"y": -485
		},
		{
			"v0": 57,
			"v1": 58,
			"vis": false,
			"color": "ec644b",
			"bCoef": 0,
			"cMask": [
				"c1"
			],
			"cGroup": [
				"red",
				"blue"
			],
			"y": 485
		},
		{
			"v0": 59,
			"v1": 60,
			"vis": false,
			"color": "ec644b",
			"cMask": [
				"c0"
			],
			"cGroup": [
				"red",
				"blue"
			]
		},
		{
			"v0": 60,
			"v1": 61,
			"vis": false,
			"color": "ffffff",
			"cMask": [
				"c0"
			],
			"cGroup": [
				"red",
				"blue"
			]
		},
		{
			"v0": 61,
			"v1": 62,
			"vis": false,
			"color": "ec644b",
			"cMask": [
				"c0"
			],
			"cGroup": [
				"red",
				"blue"
			]
		},
		{
			"v0": 63,
			"v1": 64,
			"vis": false,
			"cMask": [
				"c0"
			],
			"cGroup": [
				"red",
				"blue"
			]
		},
		{
			"v0": 64,
			"v1": 65,
			"vis": false,
			"color": "ffffff",
			"cMask": [
				"c0"
			],
			"cGroup": [
				"red",
				"blue"
			]
		},
		{
			"v0": 65,
			"v1": 66,
			"vis": false,
			"cMask": [
				"c0"
			],
			"cGroup": [
				"red",
				"blue"
			]
		},
		{
			"v0": 67,
			"v1": 68,
			"color": "FFFFFF",
			"bCoef": 0,
			"cMask": [
				"ball",
				"red",
				"blue"
			],
			"y": -124
		},
		{
			"v0": 69,
			"v1": 70,
			"color": "FFFFFF",
			"bCoef": 0,
			"cMask": [
				"ball",
				"red",
				"blue"
			],
			"y": 124
		},
		{
			"v0": 70,
			"v1": 68,
			"curve": 30,
			"color": "FFFFFF",
			"bCoef": 0,
			"cMask": [
				"ball",
				"red",
				"blue"
			],
			"bias": 0
		},
		{
			"v0": 68,
			"v1": 71,
			"color": "FFFFFF",
			"bCoef": 0,
			"cMask": [
				"ball"
			]
		},
		{
			"v0": 70,
			"v1": 72,
			"color": "FFFFFF",
			"bCoef": 0,
			"cMask": [
				"ball"
			]
		},
		{
			"v0": 73,
			"v1": 74,
			"color": "FFFFFF",
			"bCoef": 0,
			"cMask": [
				"ball",
				"red",
				"blue"
			],
			"y": 124
		},
		{
			"v0": 75,
			"v1": 76,
			"color": "FFFFFF",
			"bCoef": 0,
			"cMask": [
				"ball",
				"red",
				"blue"
			],
			"y": -124
		},
		{
			"v0": 74,
			"v1": 76,
			"curve": -30,
			"color": "FFFFFF",
			"bCoef": 0,
			"cMask": [
				"ball",
				"red",
				"blue"
			]
		},
		{
			"v0": 76,
			"v1": 77,
			"color": "FFFFFF",
			"bCoef": 0,
			"cMask": [
				"ball"
			]
		},
		{
			"v0": 74,
			"v1": 78,
			"color": "FFFFFF",
			"bCoef": 0,
			"cMask": [
				"ball"
			]
		},
		{
			"v0": 83,
			"v1": 84,
			"vis": true,
			"color": "ffffff",
			"cMask": [
				"c1"
			],
			"cGroup": [
				"c1"
			],
			"trait": "line",
			"_data": {
				"mirror": {},
				"arc": {
					"a": [
						840,
						-320
					],
					"b": [
						840,
						320
					],
					"radius": null,
					"center": [
						null,
						null
					],
					"from": null,
					"to": null
				}
			}
		},
		{
			"v0": 85,
			"v1": 86,
			"vis": true,
			"color": "ffffff",
			"cMask": [
				"c1"
			],
			"cGroup": [
				"c1"
			],
			"trait": "line"
		},
		{
			"v0": 87,
			"v1": 88,
			"vis": true,
			"color": "ffffff",
			"cMask": [
				"c1"
			],
			"cGroup": [
				"c1"
			],
			"trait": "line"
		},
		{
			"v0": 89,
			"v1": 90,
			"vis": true,
			"color": "ffffff",
			"cMask": [
				"c1"
			],
			"cGroup": [
				"c1"
			],
			"trait": "line"
		},
		{
			"v0": 91,
			"v1": 92,
			"vis": true,
			"color": "ffffff",
			"cMask": [
				"c1"
			],
			"cGroup": [
				"c1"
			],
			"trait": "line"
		},
		{
			"v0": 93,
			"v1": 94,
			"vis": true,
			"color": "ffffff",
			"cMask": [
				"c1"
			],
			"cGroup": [
				"c1"
			],
			"trait": "line"
		},
		{
			"v0": 97,
			"v1": 98,
			"curve": 180,
			"vis": true,
			"color": "ffffff",
			"bCoef": 0.1,
			"cMask": [
				"red",
				"blue"
			],
			"cGroup": [
				"c1"
			],
			"trait": "kickOffBarrier"
		},
		{
			"v0": 100,
			"v1": 99,
			"curve": -180.87533516123602,
			"vis": true,
			"color": "ffffff",
			"bCoef": 0.1,
			"cMask": [
				"red",
				"blue"
			],
			"cGroup": [
				"c1"
			],
			"trait": "kickOffBarrier",
			"_data": {
				"mirror": {},
				"arc": {
					"a": [
						0,
						-180
					],
					"b": [
						0,
						180
					],
					"curve": -180.87533516123602,
					"radius": 180.00525165950165,
					"center": [
						-1.3750000000026459,
						0
					],
					"from": 1.56315758648386,
					"to": -1.56315758648386
				}
			}
		},
		{
			"v0": 101,
			"v1": 102,
			"curve": 0,
			"vis": true,
			"color": "ffffff",
			"bCoef": 0,
			"cMask": [
				"ball"
			],
			"cGroup": [
				"c0"
			],
			"trait": "line"
		},
		{
			"v0": 103,
			"v1": 104,
			"curve": 0,
			"vis": true,
			"color": "ffffff",
			"bCoef": 0,
			"cMask": [
				"ball"
			],
			"cGroup": [
				"c0"
			],
			"trait": "line"
		},
		{
			"v0": 107,
			"v1": 108,
			"curve": 0,
			"vis": true,
			"color": "ffffff",
			"bCoef": 0,
			"cMask": [
				"ball"
			],
			"cGroup": [
				"c0"
			],
			"trait": "line"
		},
		{
			"v0": 109,
			"v1": 110,
			"curve": 0,
			"vis": true,
			"color": "ffffff",
			"bCoef": 0,
			"cMask": [
				"ball"
			],
			"cGroup": [
				"c0"
			],
			"trait": "line"
		},
		{
			"v0": 111,
			"v1": 112,
			"curve": 0,
			"vis": true,
			"color": "ffffff",
			"bCoef": 0,
			"cMask": [
				"ball"
			],
			"cGroup": [
				"c0"
			],
			"trait": "line"
		},
		{
			"v0": 113,
			"v1": 114,
			"curve": 0,
			"vis": true,
			"color": "ffffff",
			"bCoef": 0,
			"cMask": [
				"ball"
			],
			"cGroup": [
				"c0"
			],
			"trait": "line"
		},
		{
			"v0": 115,
			"v1": 116,
			"curve": 0,
			"vis": true,
			"color": "ffffff",
			"cMask": [
				"red",
				"blue"
			],
			"cGroup": [
				"c1"
			],
			"trait": "kickOffBarrier"
		},
		{
			"v0": 117,
			"v1": 118,
			"curve": 0,
			"vis": true,
			"color": "ffffff",
			"cMask": [
				"red",
				"blue"
			],
			"cGroup": [
				"c1"
			],
			"trait": "kickOffBarrier"
		},
		{
			"vis": true,
			"color": "4e6146",
			"bCoef": 0.1,
			"cMask": [
				"c1"
			],
			"cGroup": [
				"c1"
			],
			"trait": "line",
			"v0": 119,
			"v1": 120,
			"_data": {
				"mirror": {},
				"arc": {
					"a": [
						17.350479526894986,
						636.0810587330693
					],
					"b": [
						17.460380540811798,
						656.5151418864998
					],
					"curve": 146.92641584508385,
					"radius": 10.658035997169172,
					"center": [
						14.371866620339368,
						646.3144157809718
					],
					"from": -1.2875531242843752,
					"to": 1.2767965903667056
				}
			},
			"curve": 146.92641584508385
		},
		{
			"curve": 0,
			"vis": true,
			"color": "4e6146",
			"bCoef": 0.1,
			"cMask": [
				"c1"
			],
			"cGroup": [
				"c1"
			],
			"trait": "line",
			"v0": 121,
			"v1": 122,
			"_data": {
				"mirror": {},
				"arc": {
					"a": [
						2.001328651518037,
						635.799068814434
					],
					"b": [
						17.749339792036977,
						636.1341328812535
					],
					"curve": 0
				}
			}
		},
		{
			"curve": 81.57744248017352,
			"vis": true,
			"color": "4e6146",
			"bCoef": 0.1,
			"cMask": [
				"c1"
			],
			"cGroup": [
				"c1"
			],
			"trait": "line",
			"v0": 123,
			"v1": 124,
			"_data": {
				"mirror": {},
				"arc": {
					"a": [
						-3.4338587257951474,
						640.0150138052638
					],
					"b": [
						4.100530988377159,
						635.9522786400819
					],
					"curve": 81.57744248017352,
					"radius": 6.551605978411938,
					"center": [
						2.6876349129228765,
						642.349720752077
					],
					"from": -2.777227246299371,
					"to": -1.3534322796640517
				}
			}
		},
		{
			"curve": 0,
			"vis": true,
			"color": "4e6146",
			"bCoef": 0.1,
			"cMask": [
				"c1"
			],
			"cGroup": [
				"c1"
			],
			"trait": "line",
			"v0": 125,
			"v1": 126,
			"_data": {
				"mirror": {},
				"arc": {
					"a": [
						-2.6098539265491922,
						638.6188023868558
					],
					"b": [
						-6.714555455078454,
						645.9160495486856
					],
					"curve": 0
				}
			}
		},
		{
			"curve": 0,
			"vis": true,
			"color": "4e6146",
			"bCoef": 0.1,
			"cMask": [
				"c1"
			],
			"cGroup": [
				"c1"
			],
			"trait": "line",
			"v0": 127,
			"v1": 128,
			"_data": {
				"mirror": {},
				"arc": {
					"a": [
						-6.714555455078454,
						646.8282054439144
					],
					"b": [
						-6.486516481271252,
						622.656074220353
					],
					"curve": 0
				}
			}
		},
		{
			"curve": 28.560293085429784,
			"vis": true,
			"color": "4e6146",
			"bCoef": 0.1,
			"cMask": [
				"c1"
			],
			"cGroup": [
				"c1"
			],
			"trait": "line",
			"v0": 120,
			"v1": 129,
			"_data": {
				"mirror": {},
				"arc": {
					"a": [
						17.460380540811798,
						656.5151418864998
					],
					"b": [
						-7.1706334026928005,
						658.4581931080806
					],
					"curve": 28.560293085429784,
					"radius": 50.083540229277936,
					"center": [
						1.327901298065075,
						609.1009655741346
					],
					"from": 1.2428374141838205,
					"to": 1.7413085638591403
				}
			}
		},
		{
			"curve": 38.58281180900813,
			"vis": true,
			"color": "4e6146",
			"bCoef": 0.1,
			"cMask": [
				"c1"
			],
			"cGroup": [
				"c1"
			],
			"trait": "line",
			"v0": 130,
			"v1": 131,
			"_data": {
				"mirror": {},
				"arc": {
					"a": [
						-6.714555455078454,
						658.4581931080806
					],
					"b": [
						-24.04551746442425,
						650.020751077215
					],
					"curve": 38.58281180900813,
					"radius": 29.17265016929796,
					"center": [
						-3.327465156908998,
						629.4828391462688
					],
					"from": 1.687163769802354,
					"to": 2.360560870546896
				}
			}
		},
		{
			"curve": 0,
			"vis": true,
			"color": "4e6146",
			"bCoef": 0.1,
			"cMask": [
				"c1"
			],
			"cGroup": [
				"c1"
			],
			"trait": "line",
			"v0": 132,
			"v1": 133,
			"_data": {
				"mirror": {},
				"arc": {
					"a": [
						-14.923958512136977,
						611.4821645038012
					],
					"b": [
						-24.04551746442425,
						650.9329069724436
					],
					"curve": 0
				}
			}
		},
		{
			"curve": 0,
			"vis": true,
			"color": "4e6146",
			"bCoef": 0.1,
			"cMask": [
				"c1"
			],
			"cGroup": [
				"c1"
			],
			"trait": "line",
			"v0": 134,
			"v1": 135,
			"_data": {
				"mirror": {},
				"arc": {
					"a": [
						-15.608075433558525,
						612.1662814252227
					],
					"b": [
						0.12661375913700113,
						612.1662814252227
					],
					"curve": 0
				}
			}
		},
		{
			"curve": 53.13010235415543,
			"vis": true,
			"color": "4e6146",
			"bCoef": 0.1,
			"cMask": [
				"c1"
			],
			"cGroup": [
				"c1"
			],
			"trait": "line",
			"v0": 136,
			"v1": 137,
			"_data": {
				"mirror": {},
				"arc": {
					"a": [
						-0.3294641884773455,
						612.1662814252227
					],
					"b": [
						1.4948476019800978,
						613.9905932156802
					],
					"curve": 53.13010235415543,
					"radius": 2.8844902100727485,
					"center": [
						-1.2416200837061462,
						614.902749110909
					],
					"from": -1.249045772398244,
					"to": -0.32175055439666156
				}
			}
		},
		{
			"curve": 20.91409718940632,
			"vis": true,
			"color": "4e6146",
			"bCoef": 0.1,
			"cMask": [
				"c1"
			],
			"cGroup": [
				"c1"
			],
			"trait": "line",
			"v0": 138,
			"v1": 139,
			"_data": {
				"mirror": {},
				"arc": {
					"a": [
						1.4948476019800978,
						613.762554241873
					],
					"b": [
						1.2668086281729245,
						623.1121521679675
					],
					"curve": 20.91409718940632,
					"radius": 25.764357460839086,
					"center": [
						-23.948082630161334,
						617.8195748940608
					],
					"from": -0.15812451884589915,
					"to": 0.2068953371913332
				}
			}
		},
		{
			"curve": 0,
			"vis": true,
			"color": "4e6146",
			"bCoef": 0.1,
			"cMask": [
				"c1"
			],
			"cGroup": [
				"c1"
			],
			"trait": "line",
			"v0": 140,
			"v1": 141,
			"_data": {
				"mirror": {},
				"arc": {
					"a": [
						-7.626711350307147,
						623.1121521679675
					],
					"b": [
						2.178964523401646,
						623.1121521679675
					],
					"curve": 0
				}
			}
		},
		{
			"vis": true,
			"color": "42523b",
			"bCoef": 0.1,
			"cMask": [
				"c1"
			],
			"cGroup": [
				"c1"
			],
			"trait": "line",
			"v0": 142,
			"v1": 143,
			"_data": {
				"mirror": {},
				"arc": {
					"a": [
						1.1846030956657216,
						619.0074506394382
					],
					"b": [
						-8.76690621934307,
						619.0074506394382
					],
					"radius": null,
					"center": [
						null,
						null
					],
					"from": null,
					"to": null
				}
			}
		},
		{
			"vis": true,
			"color": "42523b",
			"bCoef": 0.1,
			"cMask": [
				"c1"
			],
			"cGroup": [
				"c1"
			],
			"trait": "line",
			"v0": 144,
			"v1": 145,
			"_data": {
				"mirror": {},
				"arc": {
					"a": [
						-4.206126743199462,
						616.9550998751736
					],
					"b": [
						-8.76690621934307,
						616.9550998751736
					],
					"radius": null,
					"center": [
						null,
						null
					],
					"from": null,
					"to": null
				}
			}
		},
		{
			"vis": true,
			"color": "42523b",
			"bCoef": 0.1,
			"cMask": [
				"c1"
			],
			"cGroup": [
				"c1"
			],
			"trait": "line",
			"v0": 146,
			"v1": 147,
			"_data": {
				"mirror": {},
				"arc": {
					"a": [
						13.58091321376071,
						641.355270072542
					],
					"b": [
						0.12661375913700113,
						647.740361339143
					],
					"curve": 79.61114218453095,
					"radius": 11.631440762927031,
					"center": [
						3.0227087264883132,
						636.4752360330683
					],
					"from": 0.4329554956307915,
					"to": 1.8224320480242053
				}
			},
			"curve": 79.61114218453095
		}
	],
	"goals": [
		{
			"p0": [
				-1162.45,
				124
			],
			"p1": [
				-1162.45,
				-124
			],
			"team": "red",
			"color": "ffffff"
		},
		{
			"p0": [
				1162.45,
				124
			],
			"p1": [
				1162.45,
				-124
			],
			"team": "blue",
			"radius": 0,
			"invMass": 1
		}
	],
	"discs": [
		{
			"radius": 0,
			"invMass": 0,
			"pos": [
				-1311,
				-19
			],
			"color": "ffffffff",
			"bCoef": 0,
			"cMask": [
				"red"
			],
			"cGroup": [
				"ball"
			]
		},
		{
			"radius": 0,
			"invMass": 0,
			"pos": [
				-1310,
				29
			],
			"color": "ffffffff",
			"bCoef": 0,
			"cMask": [
				"blue"
			],
			"cGroup": [
				"ball"
			]
		},
		{
			"radius": 0,
			"invMass": 0,
			"pos": [
				-1308,
				62
			],
			"color": "ffffffff",
			"bCoef": 0,
			"cMask": [
				"red",
				"blue"
			],
			"cGroup": [
				"ball"
			]
		},
		{
			"radius": 2.7,
			"pos": [
				-1150,
				600
			],
			"color": "ffffff",
			"cGroup": [
				"ball"
			],
			"trait": "cornerflag"
		},
		{
			"radius": 2.7,
			"pos": [
				1150,
				-600
			],
			"color": "ffffff",
			"cGroup": [
				"ball"
			],
			"trait": "cornerflag"
		},
		{
			"radius": 2.7,
			"pos": [
				1150,
				600
			],
			"color": "ffffff",
			"cGroup": [
				"ball"
			],
			"trait": "cornerflag"
		},
		{
			"radius": 5,
			"invMass": 0,
			"pos": [
				-1150,
				-124
			],
			"color": "ffffff",
			"bCoef": 0.5,
			"trait": "goalPost"
		},
		{
			"radius": 5,
			"invMass": 0,
			"pos": [
				-1150,
				124
			],
			"color": "ffffff",
			"bCoef": 0.5,
			"trait": "goalPost"
		},
		{
			"radius": 2,
			"invMass": 0,
			"pos": [
				-1250,
				-158
			],
			"color": "000000",
			"bCoef": 1,
			"trait": "goalPost"
		},
		{
			"radius": 2,
			"invMass": 0,
			"pos": [
				-1250,
				158
			],
			"color": "000000",
			"bCoef": 1,
			"trait": "goalPost"
		},
		{
			"radius": 5,
			"invMass": 0,
			"pos": [
				1150,
				-124
			],
			"color": "ffffff",
			"bCoef": 0.5,
			"trait": "goalPost"
		},
		{
			"radius": 5,
			"invMass": 0,
			"pos": [
				1150,
				124
			],
			"color": "ffffff",
			"bCoef": 0.5,
			"trait": "goalPost"
		},
		{
			"radius": 2,
			"invMass": 0,
			"pos": [
				1250,
				-158
			],
			"color": "000000",
			"bCoef": 1,
			"trait": "goalPost"
		},
		{
			"radius": 2,
			"invMass": 0,
			"pos": [
				1250,
				158
			],
			"color": "000000",
			"bCoef": 1,
			"trait": "goalPost"
		},
		{
			"radius": 2.7,
			"pos": [
				-1150,
				-600
			],
			"color": "ffffff",
			"cGroup": [
				"ball"
			],
			"trait": "cornerflag"
		},
		{
			"radius": 0,
			"pos": [
				-1149,
				-485
			],
			"color": "ffffff",
			"cMask": [
				"none"
			]
		},
		{
			"radius": 0,
			"pos": [
				1149,
				-485
			],
			"color": "ffffff",
			"cMask": [
				"none"
			]
		},
		{
			"radius": 0,
			"pos": [
				-1149,
				-485
			],
			"color": "ffffff",
			"cMask": [
				"none"
			]
		},
		{
			"radius": 0,
			"pos": [
				1149,
				-485
			],
			"color": "ffffff",
			"cMask": [
				"none"
			]
		},
		{
			"radius": 0,
			"pos": [
				-1149,
				485
			],
			"color": "ffffff",
			"cMask": [
				"none"
			]
		},
		{
			"radius": 0,
			"pos": [
				1149,
				485
			],
			"color": "ffffff",
			"cMask": [
				"none"
			]
		},
		{
			"radius": 0,
			"pos": [
				-1149,
				485
			],
			"color": "ffffff",
			"cMask": [
				"none"
			]
		},
		{
			"radius": 0,
			"pos": [
				1149,
				485
			],
			"color": "ffffff",
			"cMask": [
				"none"
			]
		},
		{
			"pos": [
				-6.5,
				-3
			],
			"radius": 0.8,
			"invMass": 1e250,
			"damping": 0.989,
			"color": "0",
			"cGroup": [
				"c0"
			]
		},
		{
			"radius": 1.4,
			"invMass": 1e250,
			"damping": 0.989,
			"color": "0",
			"cGroup": [
				"c0"
			]
		},
		{
			"pos": [
				6.5,
				-3
			],
			"radius": 0.8,
			"invMass": 1e250,
			"damping": 0.989,
			"color": "0",
			"cGroup": [
				"c0"
			]
		},
		{
			"pos": [
				0,
				-6.5
			],
			"radius": 0.8,
			"invMass": 1e250,
			"damping": 0.989,
			"color": "0",
			"cGroup": [
				"c0"
			]
		},
		{
			"pos": [
				-4.5,
				5.5
			],
			"radius": 0.8,
			"invMass": 1e250,
			"damping": 0.989,
			"color": "0",
			"cGroup": [
				"c0"
			]
		},
		{
			"pos": [
				4.5,
				5.5
			],
			"radius": 0.8,
			"invMass": 1e250,
			"damping": 0.989,
			"color": "0",
			"cGroup": [
				"c0"
			]
		},
		{
			"radius": 0,
			"invMass": 1e250,
			"damping": 0.989,
			"color": "transparent",
			"cGroup": [
				"c0"
			]
		}
	],
	"planes": [
		{
			"normal": [
				0,
				1
			],
			"dist": -627,
			"bCoef": 0,
			"cGroup": [
				"ball"
			],
			"trait": "ballArea",
			"_data": {
				"extremes": {
					"normal": [
						0,
						1
					],
					"dist": -627,
					"canvas_rect": [
						-1783.60102656,
						-918.330048,
						1768.6356480000002,
						918.330048
					],
					"a": [
						-1783.60102656,
						-627
					],
					"b": [
						1768.6356480000002,
						-627
					]
				}
			}
		},
		{
			"normal": [
				0,
				-1
			],
			"dist": -627,
			"bCoef": 0,
			"cGroup": [
				"ball"
			],
			"trait": "ballArea",
			"_data": {
				"extremes": {
					"normal": [
						0,
						-1
					],
					"dist": -627,
					"canvas_rect": [
						-1783.60102656,
						-918.330048,
						1768.6356480000002,
						918.330048
					],
					"a": [
						-1783.60102656,
						627
					],
					"b": [
						1768.6356480000002,
						627
					]
				}
			}
		},
		{
			"normal": [
				0,
				1
			],
			"dist": -670,
			"bCoef": 0,
			"_data": {
				"extremes": {
					"normal": [
						0,
						1
					],
					"dist": -670,
					"canvas_rect": [
						-1783.60102656,
						-918.330048,
						1768.6356480000002,
						918.330048
					],
					"a": [
						-1783.60102656,
						-670
					],
					"b": [
						1768.6356480000002,
						-670
					]
				}
			}
		},
		{
			"normal": [
				0,
				-1
			],
			"dist": -670,
			"bCoef": 0,
			"_data": {
				"extremes": {
					"normal": [
						0,
						-1
					],
					"dist": -670,
					"canvas_rect": [
						-1783.60102656,
						-918.330048,
						1768.6356480000002,
						918.330048
					],
					"a": [
						-1783.60102656,
						670
					],
					"b": [
						1768.6356480000002,
						670
					]
				}
			}
		},
		{
			"normal": [
				1,
				0
			],
			"dist": -1300,
			"bCoef": 0,
			"_data": {
				"extremes": {
					"normal": [
						1,
						0
					],
					"dist": -1300,
					"canvas_rect": [
						-1783.60102656,
						-918.330048,
						1768.6356480000002,
						918.330048
					],
					"a": [
						-1300,
						-918.330048
					],
					"b": [
						-1300,
						918.330048
					]
				}
			}
		},
		{
			"normal": [
				-1,
				0
			],
			"dist": -1300,
			"bCoef": 0.1,
			"_data": {
				"extremes": {
					"normal": [
						-1,
						0
					],
					"dist": -1300,
					"canvas_rect": [
						-1783.60102656,
						-918.330048,
						1768.6356480000002,
						918.330048
					],
					"a": [
						1300,
						-918.330048
					],
					"b": [
						1300,
						918.330048
					]
				}
			}
		},
		{
			"normal": [
				1,
				0
			],
			"dist": -1230,
			"bCoef": 0,
			"cMask": [
				"ball"
			],
			"cGroup": [
				"ball"
			],
			"_data": {
				"extremes": {
					"normal": [
						1,
						0
					],
					"dist": -1230,
					"canvas_rect": [
						-1783.60102656,
						-918.330048,
						1768.6356480000002,
						918.330048
					],
					"a": [
						-1230,
						-918.330048
					],
					"b": [
						-1230,
						918.330048
					]
				}
			}
		},
		{
			"normal": [
				-1,
				0
			],
			"dist": -1230,
			"bCoef": 0,
			"cMask": [
				"ball"
			],
			"cGroup": [
				"ball"
			],
			"_data": {
				"extremes": {
					"normal": [
						-1,
						0
					],
					"dist": -1230,
					"canvas_rect": [
						-1783.60102656,
						-918.330048,
						1768.6356480000002,
						918.330048
					],
					"a": [
						1230,
						-918.330048
					],
					"b": [
						1230,
						918.330048
					]
				}
			}
		}
	],
	"traits": {
		"ballArea": {
			"vis": false,
			"bCoef": 0,
			"cMask": [
				"ball"
			],
			"cGroup": [
				"ball"
			]
		},
		"goalPost": {
			"radius": 5,
			"invMass": 0,
			"bCoef": 1,
			"cGroup": [
				"ball"
			]
		},
		"rightNet": {
			"radius": 0,
			"invMass": 1,
			"bCoef": 0,
			"cGroup": [
				"ball",
				"c3"
			]
		},
		"leftNet": {
			"radius": 0,
			"invMass": 1,
			"bCoef": 0,
			"cGroup": [
				"ball",
				"c2"
			]
		},
		"stanchion": {
			"radius": 3,
			"invMass": 0,
			"bCoef": 3,
			"cMask": [
				"none"
			]
		},
		"cornerflag": {
			"radius": 3,
			"invMass": 0,
			"bCoef": 0.2,
			"color": "FFFF00",
			"cMask": [
				"ball"
			]
		},
		"reargoalNetleft": {
			"vis": true,
			"bCoef": 0.1,
			"cMask": [
				"ball",
				"red",
				"blue"
			],
			"curve": 10,
			"color": "C7E6BD"
		},
		"reargoalNetright": {
			"vis": true,
			"bCoef": 0.1,
			"cMask": [
				"ball",
				"red",
				"blue"
			],
			"curve": -10,
			"color": "C7E6BD"
		},
		"sidegoalNet": {
			"vis": true,
			"bCoef": 1,
			"cMask": [
				"ball",
				"red",
				"blue"
			],
			"color": "C7E6BD"
		},
		"kickOffBarrier": {
			"vis": false,
			"bCoef": 0.1,
			"cGroup": [
				"redKO",
				"blueKO"
			],
			"cMask": [
				"red",
				"blue"
			]
		},
		"line": {
			"vis": true,
			"cMask": [],
			"color": "C7E6BD"
		}
	},
	"joints": [
		{
			"d0": 16,
			"d1": 17,
			"strength": "rigid",
			"color": "ec7458",
			"length": null
		},
		{
			"d0": 18,
			"d1": 19,
			"strength": "rigid",
			"color": "48bef9",
			"length": null
		},
		{
			"d0": 20,
			"d1": 21,
			"strength": "rigid",
			"color": "ec7458",
			"length": null
		},
		{
			"d0": 22,
			"d1": 23,
			"strength": "rigid",
			"color": "48bef9",
			"length": null
		},
		{
			"d0": 0,
			"d1": 25,
			"length": 0,
			"color": "transparent"
		},
		{
			"d0": 0,
			"d1": 24,
			"length": 7.158910531638177,
			"color": "transparent"
		},
		{
			"d0": 0,
			"d1": 26,
			"length": 7.158910531638177,
			"color": "transparent"
		},
		{
			"d0": 0,
			"d1": 27,
			"length": 6.5,
			"color": "transparent"
		},
		{
			"d0": 0,
			"d1": 28,
			"length": 7.106335201775948,
			"color": "transparent"
		},
		{
			"d0": 0,
			"d1": 29,
			"length": 7.106335201775948,
			"color": "transparent"
		},
		{
			"d0": 24,
			"d1": 25,
			"length": 7.158910531638177,
			"color": "transparent"
		},
		{
			"d0": 25,
			"d1": 26,
			"length": 7.158910531638177,
			"color": "transparent"
		},
		{
			"d0": 25,
			"d1": 27,
			"length": 6.5,
			"color": "transparent"
		},
		{
			"d0": 25,
			"d1": 28,
			"length": 7.106335201775948,
			"color": "transparent"
		},
		{
			"d0": 25,
			"d1": 29,
			"length": 7.106335201775948,
			"color": "transparent"
		},
		{
			"d0": 24,
			"d1": 27,
			"length": 7.3824115301167,
			"color": "transparent"
		},
		{
			"d0": 24,
			"d1": 28,
			"length": 8.73212459828649,
			"color": "transparent"
		},
		{
			"d0": 28,
			"d1": 29,
			"length": 9,
			"color": "transparent"
		},
		{
			"d0": 26,
			"d1": 29,
			"length": 8.73212459828649,
			"color": "transparent"
		},
		{
			"d0": 26,
			"d1": 27,
			"length": 7.3824115301167,
			"color": "transparent"
		},
		{
			"d0": 26,
			"d1": 28,
			"length": 13.901438774457845,
			"color": "transparent"
		},
		{
			"d0": 27,
			"d1": 28,
			"length": 12.816005617976297,
			"color": "transparent"
		},
		{
			"d0": 27,
			"d1": 29,
			"length": 12.816005617976297,
			"color": "transparent"
		},
		{
			"d0": 24,
			"d1": 29,
			"length": 13.901438774457845,
			"color": "transparent"
		},
		{
			"d0": 24,
			"d1": 26,
			"length": 13,
			"color": "transparent"
		},
		{
			"d0": 0,
			"d1": 25,
			"length": 0,
			"color": "transparent"
		},
		{
			"d0": 0,
			"d1": 24,
			"length": 7.158910531638177,
			"color": "transparent"
		},
		{
			"d0": 0,
			"d1": 26,
			"length": 7.158910531638177,
			"color": "transparent"
		},
		{
			"d0": 0,
			"d1": 27,
			"length": 6.5,
			"color": "transparent"
		},
		{
			"d0": 0,
			"d1": 28,
			"length": 7.106335201775948,
			"color": "transparent"
		},
		{
			"d0": 0,
			"d1": 29,
			"length": 7.106335201775948,
			"color": "transparent"
		},
		{
			"d0": 24,
			"d1": 25,
			"length": 7.158910531638177,
			"color": "transparent"
		},
		{
			"d0": 25,
			"d1": 26,
			"length": 7.158910531638177,
			"color": "transparent"
		},
		{
			"d0": 25,
			"d1": 27,
			"length": 6.5,
			"color": "transparent"
		},
		{
			"d0": 25,
			"d1": 28,
			"length": 7.106335201775948,
			"color": "transparent"
		},
		{
			"d0": 25,
			"d1": 29,
			"length": 7.106335201775948,
			"color": "transparent"
		},
		{
			"d0": 24,
			"d1": 27,
			"length": 7.3824115301167,
			"color": "transparent"
		},
		{
			"d0": 24,
			"d1": 28,
			"length": 8.73212459828649,
			"color": "transparent"
		},
		{
			"d0": 28,
			"d1": 29,
			"length": 9,
			"color": "transparent"
		},
		{
			"d0": 26,
			"d1": 29,
			"length": 8.73212459828649,
			"color": "transparent"
		},
		{
			"d0": 26,
			"d1": 27,
			"length": 7.3824115301167,
			"color": "transparent"
		},
		{
			"d0": 26,
			"d1": 28,
			"length": 13.901438774457845,
			"color": "transparent"
		},
		{
			"d0": 27,
			"d1": 28,
			"length": 12.816005617976297,
			"color": "transparent"
		},
		{
			"d0": 27,
			"d1": 29,
			"length": 12.816005617976297,
			"color": "transparent"
		},
		{
			"d0": 0,
			"d1": 30,
			"length": 0,
			"color": "transparent"
		},
		{
			"d0": 25,
			"d1": 30,
			"length": 0,
			"color": "transparent"
		}
	],
	"redSpawnPoints": [],
	"blueSpawnPoints": [],
	"canBeStored": false}`;
	
	return realSoccerMap;
}

/*------------------------------ END OF STADIUMS ----------------------------*/

// ------------------------------------------------
// Global Variables
// ------------------------------------------------
var roomName = "REAL SOCCER";
var roomPassword = null;
var maxPlayers = 20;
var roomPublic = true;
var token = "";
var roomLink = "";
var gameTime = 5; //default game time if 0 is selected
var map = "RS";
var superAdmins = [];

var room = HBInit({
	roomName: roomName,
	password: roomPassword,
	maxPlayers: maxPlayers,
	public: roomPublic,
	geo: {code: "BR", lat: -25.44, lon: -49.27},
	noPlayer: true,
	token: token
});


// -------------------------------------------------
// Classes
// -------------------------------------------------
class Game {
	constructor() {
		this.time = 0;
		this.paused = false;
		this.ballRadius;
		this.rsTouchTeam = 0;
		this.rsActive = true;
		this.rsReady = false;
		this.rsCorner = false;
		this.rsGoalKick = false;
		this.rsSwingTimer = 1000;
		this.rsTimer;
		this.ballOutPositionX;
		this.ballOutPositionY;
		this.throwInPosY;
		this.outStatus = "";
		this.warningCount = 0;
		this.bringThrowBack = false;
		this.extraTime = false;
		this.extraTimeCount = 0;
		this.extraTimeEnd;
		this.extraTimeAnnounced = false;
		this.lastPlayAnnounced = false;
		this.boosterState;
		this.throwinKicked = false;
		this.pushedOut;
		this.lastKickerId;
		this.lastKickerName;
		this.lastKickerTeam;
		this.secondLastKickerId;
		this.secondLastKickerName;
		this.secondLastKickerTeam;
		this.redScore = 0;
		this.blueScore = 0;
	}
	
	updateLastKicker(id, name, team) {
		this.secondLastKickerId = this.lastKickerId;
		this.secondLastKickerName = this.lastKickerName;
		this.secondLastKickerTeam = this.lastKickerTeam;
		
		this.lastKickerId = id;
		this.lastKickerName = name;
		this.lastKickerTeam = team;
	}
}

room.setCustomStadium(getRealSoccerMap());
room.setScoreLimit(0);
room.setTimeLimit(5);

room.onRoomLink = function(url) {
	roomLink = url;
	console.log(roomLink);
}

room.onStadiumChange = function(newStadiumName, byPlayer) {
	if (byPlayer != null) {
		map = "custom";
	}
	else {
		map = "RS";
	}
}

room.onPlayerJoin = function(player) {	
	console.log(player.name + " entrou para jogar");
	whisper("Bem-vindo ao REAL SOCCER!", player.id, 0xffd24d, "bold", 0);
                              
	displayAdminMessage();
	
	playerName = player.name.replace(/ /g,"_");
    var SaludosRandomBot = [' bem-vindo!', ' oi, seu lindo!', ', acaba de ser convocado.', ' te damos as boas-vindas.', ', ja se prepara no aquecimento!', ' o mais novo craque na area.', ' estavamos com saudades...', ' voce por aqui!!!', ' obrigado por entrar no servidor.', ' ta na area.', ' chegou, acabou a brincadeira', ' aterrisou no servidor.', ' apareceu, assim como havia dito a profecia.', ' chegou chegando.', ' chegou o alien.', ' entrou no servidor.', ' chegou para meteli o goli.', ' esta aqui.', ' veio embrasado.', ' chegou o garanhao.', ' chegou o maioral.', ' aterrisou o GOAT no servidor.', ' vejam so quem ta na area.', ' estavamos te esperando.', ' entrou no servidor.', ' acaba de chegar.', ' apareceu! Salve-se quem puder!!', ' veio diretamente do Vasco.', ' chegou com sua caixinha de leite de macho.'];
    var GeneradorRandom = SaludosRandomBot[(Math.random() * SaludosRandomBot.length) | 0]
    room.sendAnnouncement("[📶] @" + playerName + GeneradorRandom, null, 0x06ff00, 'normal', 0);
    room.sendAnnouncement("[⌨] @" + playerName + " digite '!help' no chat para poder ver os comandos.", player.id, 0x00FFB3, "normal", 0);
}

room.onPlayerLeave = function(player) {
	displayAdminMessage();
	console.log(player.name + " deixou o servidor.");
    room.sendAnnouncement("[🔌] @" + playerName + " deixou o servidor.", null, 0x06ff00, 'normal', 0);

	let index = superAdmins.indexOf(player.id);
	if (index > -1) {
		sleep(100).then(() => {
			superAdmins.splice(index, 1);
		});
	}
}

room.onPlayerAdminChange = function(changedPlayer, byPlayer) {
	if (byPlayer != null) {
		if (changedPlayer.id != byPlayer.id) {
			if (superAdmins.indexOf(changedPlayer.id) > -1) {
				room.kickPlayer(byPlayer.id, "Você não tem permissão de remover um super admin", false);
				room.setPlayerAdmin(changedPlayer.id, true);
			}
		}
		else {
			if (changedPlayer.admin == false) {
				let index = superAdmins.indexOf(changedPlayer.id);
				if (index > -1) {
				  superAdmins.splice(index, 1);
				}
			}
		}
	}
}

room.onGameStart = function(byPlayer) {
	if (map == "RS") {
		if (byPlayer == null) {
			game = new Game();	
			announce("A duração da partida foi definida para " + gameTime + " minutos");
		}
		else {
			if (room.getScores().timeLimit != 0) {
				gameTime = room.getScores().timeLimit / 60;
			}
			else {
				gameTime = 10;
			}
			room.stopGame();
			room.setTimeLimit(0);			
			room.startGame();
		}
	}
}

room.onGameStop = function(byPlayer) {
	if (map == "RS") {
		if (byPlayer != null) {
			room.setTimeLimit(gameTime);
		}
	}
}

room.onPlayerBallKick = function(player) {	
	if (map == "RS") {
		game.rsTouchTeam = player.team;
		game.updateLastKicker(player.id, player.name, player.team);
		
		if (game.rsReady == true) {
			var players = room.getPlayerList().filter((player) => player.team != 0);
			players.forEach(function(player) {			
				if (room.getPlayerDiscProperties(player.id).invMass.toFixed(1) != 0.3) {
					room.setPlayerDiscProperties(player.id, {invMass: 0.3});
				}
			});
		}
			
		if (game.rsActive == false && game.rsReady == true && (game.rsCorner == true || game.rsGoalKick == true)) { // make game active on kick from CK/GK
			game.boosterState = true;
			
			game.rsActive = true;
			game.rsReady = false;
			room.setDiscProperties(1, {x: 2000, y: 2000 });
			room.setDiscProperties(2, {x: 2000, y: 2000 });
			room.setDiscProperties(0, {color: "0xffffff"});
			game.rsTimer = 1000000;
			game.warningCount++;	
			
			// set gravity for real soccer corners/goalkicks
			if (game.rsCorner == true) {
				if (room.getDiscProperties(0).y < 0) { //top corner
					room.setDiscProperties(0, {xgravity: room.getPlayerDiscProperties(player.id).xspeed/35*-1, ygravity: 0.05});
					//room.setDiscProperties(0, {xgravity: -0.08, ygravity: 0.05});
				}
				else { //bottom corner
					room.setDiscProperties(0, {xgravity: room.getPlayerDiscProperties(player.id).xspeed/35*-1, ygravity: -0.05});
					//room.setDiscProperties(0, {xgravity: -0.08, ygravity: -0.05});
				}
			}	
			if (game.rsGoalKick == true) {			
				room.setDiscProperties(0, {xgravity: 0, ygravity: room.getPlayerDiscProperties(player.id).yspeed/40*-1});		
			}
			
			game.rsCorner = false;
			game.rsGoalKick = false;
			game.outStatus = "";		
		}		

		if (game.outStatus == "redThrow" || game.outStatus == "blueThrow") {
			game.throwinKicked = true;
		}
	}
}

room.onPlayerKicked = function(kickedPlayer, reason, ban, byPlayer) {	
	if (superAdmins.indexOf(kickedPlayer.id) > -1 && byPlayer != null) {
		room.kickPlayer(byPlayer.id, "Você não pode kick/ban um super admin", false);
		room.clearBans();
	}
}

room.onPlayerChat = function(player, message) {
	if(filter(message)) return false;
	console.log(player.name + ": " + message);
	if (message.startsWith("!")) {
		message = message.substr(1);
		let args = message.split(" ");
		
		if (args[0] == "admin" && args.length == 1 && allowPublicAdmin == true) {
			if (isAdminPresent() == false) {
				room.setPlayerAdmin(player.id, true);
			}
			else {
				whisper("O admin já está presente ou o comando !admin não é permitido", player.id);
			}
		}
		else if (args[0] == "admin" && args.length == 2) {
			if (args[1] == superAdminCode) {
				room.setPlayerAdmin(player.id, true);
				if (superAdmins.indexOf(player.id) === -1) {
					superAdmins.push(player.id);
				}
				announce(player.name + " se tornou super admin");
			}
		}
		else if (args[0] == "clearbans") {
			if (player.admin) {
				room.clearBans();
				announce("Os bans foram limpos por " + player.name);
			}
			else {
				whisper("Comando permitido apenas para admins", player.id);
			}
		}
		else if (args[0] == "court" && args.length == 1) {
			whisper("A cor atual do gramado é " + mapBGColor);
		}
		else if (args[0] == "court" && args.length == 2 && player.admin) {
			if (room.getScores() == null) {
				if (args[1] == "reset") {
					mapBGColor = "86A578";
					announce("A cor do gramado foi resetada por " + player.name);
				}
				else {
					mapBGColor = args[1];
					announce("A cor do gramado foi alterada para " + args[1] + " por " + player.name);
				}
				room.setCustomStadium(getRealSoccerMap());				
			}
			else {
				whisper("Não é possível alterar a cor do gramado enquanto a bola rola", player.id);
			}
		}
		else if (args[0] == "swap") {
			if (player.admin) {
				if (args.length == 1) {
					var players = room.getPlayerList().filter((player) => player.id != 0 );
					if ( players.length == 0 ) return false;
					players.forEach(function(player) {	
						if (player.team == 1) {
							room.setPlayerTeam(player.id, 2);
						}
						if (player.team == 2) {
							room.setPlayerTeam(player.id, 1);
						}
					});
					announce("🔄 As equipes trocaram de lugar");
				}
			}
			else {
				whisper("Comando permitido apenas para admins", player.id);
			}
		}
		else if (args[0] == "setpassword" && player.admin) {
			if (superAdmins.indexOf(player.id) > -1) {
				room.setPassword(args[1]);
				roomPassword = args[1];
				announce("A senha foi setada por " + player.name);
			}
			else {
				whisper("Apenas admins podem setar uma senha", player.id);
			}
		}
		else if (args[0] == "clearpassword" && player.admin) {
			if (superAdmins.indexOf(player.id) > -1) {
				room.setPassword(null);
				roomPassword = null;
				announce("A senha foi limpa por " + player.name);
			}
			else {
				whisper("Apenas super admins podem limpar senhas", player.id);
			}
		}
		else if (args[0] == "rs" && player.admin) {
			if (room.getScores() == null) {
				room.setCustomStadium(getRealSoccerMap());
			}
			else {
				whisper("Não é possível trocar o mapa enquanto a bola rola", player.id);
			}
		}
		else if (args[0] == "rr" && player.admin) {
			room.stopGame();
			room.startGame();
		}
		else if (args[0] == "bb") {
			room.kickPlayer(player.id, "Adeus!", false);
		}			
		else if (args[0] == "help") {
			displayHelp(player.id, args[1]);
		}
		else if (args[0] == "super") {
			let superMsg = "super admins: ";
			superAdmins.forEach(function(id) {
				if (room.getPlayer(id) != null || room.getPlayer(id) != undefined) {
					superMsg = superMsg + room.getPlayer(id).name + ", ";
				}
			});
			if (superAdmins.length > 0) {
				superMsg = superMsg.slice(0, -2); 
			}
			else {
				superMsg = "Não há super admins presentes";
			}
			whisper(superMsg, player.id);
		}
////////////////////////1.3
//////////////UNIFORMS
////colors red 0 000000 FFFFFF 3BCBFF FFFFFF
//room.setTeamColors(1, -50, 0xfe0302, [0xE9E9E9, 0xffffff, 0xE9E9E9]);
		else if (args[0] == "barbie" && args.length == 2 && player.admin) { //BARBIE
			if (args[1] == "red") {
				room.setTeamColors(1, 60, 0xffffff, [0xFF7DE9]);
				announce("O time BARBIE entrou em campo no lado vermelho!");
				}
			if (args[1] == "blue") {
				room.setTeamColors(2, 60, 0xffffff, [0xFF7DE9]);
				announce("O time BARBIE entrou em campo no lado azul!");
				}
		}
		else if (args[0] == "oppenheimer" && args.length == 2 && player.admin) { //OPPENHEIMER
			if (args[1] == "red") {
				room.setTeamColors(1, 60, 0x5E0C27, [0x000000]);
				announce("O time OPPENHEIMER entrou em campo no lado vermelho!");
				}
			if (args[1] == "blue") {
				room.setTeamColors(2, 60, 0x5E0C27, [0x000000]);
				announce("O time OPPENHEIMER entrou em campo no lado azul!");
				}
		}
		else if (args[0] == "brasil" && args.length == 2 && player.admin) { //BRASIL (H)
			if (args[1] == "red") {
				room.setTeamColors(1, 60, 0x1DD400, [0xFFFF54]);
				announce("A SELEÇÃO BRASILEIRA entrou em campo no lado vermelho!");
				}
			if (args[1] == "blue") {
				room.setTeamColors(2, 60, 0x1DD400, [0xFFFF54]);
				announce("A SELEÇÃO BRASILEIRA entrou em campo no lado azul!");
				}
		}
		else if (args[0] == "argentina" && args.length == 2 && player.admin) { //ARGENTINA (H)
			if (args[1] == "red") {
				room.setTeamColors(1, 0, 0x000000, [0xFFFFFF, 0x3BCBFF, 0xFFFFFF]);
				announce("A SELEÇÃO ARGENTINA entrou em campo no lado vermelho!");
				}
			if (args[1] == "blue") {
				room.setTeamColors(2, 0, 0x000000, [0xFFFFFF, 0x3BCBFF, 0xFFFFFF]);
				announce("A SELEÇÃO ARGENTINA entrou em campo no lado azul!");
				}
		}
		else if (args[0] == "realmadrid" && args.length == 2 && player.admin) { //REAL MADRID (H)
			if (args[1] == "red") {
				room.setTeamColors(1, 90, 0xFFB12B, [0xFFFFFF]);
				announce("O time do REAL MADRID entrou em campo no lado vermelho!");
				}
			if (args[1] == "blue") {
				room.setTeamColors(2, 90, 0xFFB12B, [0xFFFFFF]);
				announce("O time do REAL MADRID entrou em campo no lado azul!");
				}
		}
		else if (args[0] == "barcelona" && args.length == 2 && player.admin) { //BARCELONA (H)
			if (args[1] == "red") {
				room.setTeamColors(1, 90, 0xFFFFFF, [0xD61334, 0x24408C, 0xD61334]);
				announce("O time do BARCELONA entrou em campo no lado vermelho!");
				}
			if (args[1] == "blue") {
				room.setTeamColors(2, 90, 0xFFFFFF, [0xD61334, 0x24408C, 0xD61334]);
				announce("O time do BARCELONA entrou em campo no lado azul!");
				}
		}
		return false;
	}
	if (message.startsWith("t ")) {
		teamMsg = message.substring(1).trim();
		if (player.team == 1) {
			var players = room.getPlayerList().filter((player) => player.team == 1);
			players.forEach(function(teamPlayer) {
				room.sendAnnouncement("[Time] " + player.name + ": " + teamMsg, teamPlayer.id, 0xED6A5A, "normal", 1);
			});
		}
		if (player.team == 2) {
			var players = room.getPlayerList().filter((player) => player.team == 2);
			players.forEach(function(teamPlayer) {
				room.sendAnnouncement("[Time] " + player.name + ": " + teamMsg, teamPlayer.id, 0x5995ED, "normal", 1);
			});
		}
		if (player.team == 0) {
			var players = room.getPlayerList().filter((player) => player.team == 0);
			players.forEach(function(teamPlayer) {
				room.sendAnnouncement("[Banco] " + player.name + ": " + teamMsg, teamPlayer.id, 0xdee7fa, "normal", 1);
			});
		}
		return false;
	}
	if (message.startsWith("@@")) {
		message = message.substr(2).trim();
		if (message.indexOf(' ') !== -1) {
			let args = message.match(/^(\S+)\s(.*)/).slice(1);
			
			if (args.length > 1) {
				var pmMsg = args[1];
				var players = room.getPlayerList();
				var pmSent = false;
				players.forEach(function(pmPlayer) {
					if (pmPlayer.name === args[0] || pmPlayer.name === args[0].replace(/_/g, ' ')) {
						whisper("[PM > " + pmPlayer.name + "] " + player.name + ": " + pmMsg, player.id, 0xff20ff, "normal", 1);	
						whisper("[PM] " + player.name + ": " + pmMsg, pmPlayer.id, 0xff20ff, "normal", 1);
						pmSent = true;					
					}
				});
				if (pmSent == false) {
					whisper("Não foi possível encontrar jogador '" + args[0] + "'", player.id, 0xff20ff, "normal", 1);
				}
				return false;
			}
		}			
	}
}

function displayHelp(id, selection) {
	if (selection == null) {
		whisper("Comandos: !rs, !rr, !bb, !admin, !setpassword, !clearpassword, !super, !clearbans, !swap, @@[player] [pm msg] , t [team chat msg], !court, !court [hexcolor], !court reset", id, null, "small");
	}
}

room.onPlayerTeamChange = function(changedPlayer, byPlayer) {
	if (map == "RS") {
		if (room.getScores() != null) {
			if (game.rsActive == false) {
				room.getPlayerList().forEach(function(player) {
					if (player != undefined) {
						if (game.rsGoalKick == true || game.rsCorner == true) {
							room.setPlayerDiscProperties(player.id, {invMass: 9999999});
						}
					}
				});
			}
		}
	}
}

room.onTeamGoal = function(team) {
	if (map == "RS") {
		game.rsActive = false;
		
		let goalTime = secondsToMinutes(Math.floor(room.getScores().time));
		let scorer;
		let assister = "";
		let goalType;
		if (team == 1) {
			if (game.lastKickerTeam == 1) { //if goal type is goal
				goalType = "GOOOOOOOL!";
				scorer = "⚽" + game.lastKickerName;
				avatarCelebration(game.lastKickerId, "⚽");
				if (game.secondLastKickerTeam == 1 && game.lastKickerId != game.secondLastKickerId) { // if assist is from teammate
					assister = " (Assist: " + game.secondLastKickerName + ")";
					avatarCelebration(game.secondLastKickerId, "🅰️");
				}
			}		
			if (game.lastKickerTeam == 2) { //if goal type is owngoal
				goalType = "IH! GOL CONTRA!!!";
				scorer = "🐸" + game.lastKickerName;
				avatarCelebration(game.lastKickerId, "🐸");
				if (game.secondLastKickerTeam == 1) { // if owngoal was assisted
					assister = " (Assist: " + game.secondLastKickerName + ")";
					avatarCelebration(game.secondLastKickerId, "🅰️");
				}
			}
			game.redScore++;
		}
		if (team == 2) {
			if (game.lastKickerTeam == 2) { //if goal type is goal
				goalType = "GOOOOOOOL!";
				scorer = "⚽" + game.lastKickerName;
				avatarCelebration(game.lastKickerId, "⚽");
				if (game.secondLastKickerTeam == 2 && game.lastKickerId != game.secondLastKickerId) { // if assist is from teammate
					assister = " (Assist: " + game.secondLastKickerName + ")";
					avatarCelebration(game.secondLastKickerId, "🅰️");
				}
			}		
			if (game.lastKickerTeam == 1) { //if goal type is owngoal
				goalType = "IH! GOL CONTRA!!!";
				scorer = "🐸" + game.lastKickerName;
				avatarCelebration(game.lastKickerId, "🐸");
				if (game.secondLastKickerTeam == 2) { // if owngoal was assisted
					assister = " (Assist: " + game.secondLastKickerName + ")";
					avatarCelebration(game.secondLastKickerId, "🅰️");
				}
			}
			game.blueScore++;
		}
		announce(goalType + " 🟥 " + game.redScore + " - " + game.blueScore + " 🟦 🕒" + goalTime + " " + scorer + assister);
		game.lastKicker = undefined;
		game.secondLastKicker = undefined;
		game.lastKickerTeam = undefined;
		game.secondLastKickerTeam = undefined;
	}
}

room.onPositionsReset = function() {
	if (map == "RS") {
		if (game.lastPlayAnnounced == true) {
			room.pauseGame(true);
			game.lastPlayAnnounced = false;
			announce("APITA O ÁRBITRO, FIM DE PAPO!");
		}
	}
}

room.onGameTick = function() {
	if (map == "RS") {
		updateGameStatus();
		handleBallTouch();
		realSoccerRef();
	}	
}

function realSoccerRef() {
	blockThrowIn();
	blockGoalKick();
	removeBlock();
	if (game.time == gameTime * 60 && game.extraTimeAnnounced == false) {
		extraTime();
		game.extraTimeAnnounced = true;
	}
	
	if (game.time == game.extraTimeEnd && game.lastPlayAnnounced == false) {
		announce("O JUIZ DEIXOU O JOGO SEGUIR, ÚLTIMA JOGADA!", null, null, null, 1);
		game.lastPlayAnnounced = true;
	}
	
	if (game.rsCorner == true || game.rsGoalKick == true) { //add extra time
		game.extraTimeCount++;
	}
	
	if (game.rsTimer < 99999 && game.paused == false && game.rsActive == false && game.rsReady == true) {
		game.rsTimer++;
	}
	
	if (game.rsSwingTimer < 150 && game.rsCorner == false && game.rsGoalKick == false) {
		game.rsSwingTimer++;
		if (game.rsSwingTimer > 5) {
			room.setDiscProperties(0, {xgravity: room.getDiscProperties(0).xgravity * 0.97, ygravity: room.getDiscProperties(0).ygravity * 0.97});
		}		
		if (game.rsSwingTimer == 150) {
			room.setDiscProperties(0, {xgravity: 0, ygravity: 0});
		}
	}
	
	
	if (game.boosterState == true) {
		game.boosterCount++;
	}
	
	if (game.boosterCount > 30) {
		game.boosterState = false;
		game.boosterCount = 0;
		room.setDiscProperties(0, {cMask: 63});
	}
	
	
	if (room.getBallPosition().x == 0 && room.getBallPosition().y == 0) {	
		game.rsActive = true;
		game.outStatus = "";
	}
	
	if (game.rsActive == false && game.rsReady == true) { //expire barrier time
		if (game.outStatus == "redThrow") {
			if (game.rsTimer == throwTimeOut - 120) { // warning indicator
				ballWarning("0xff3f34", ++game.warningCount);
			}
			if (game.rsTimer == throwTimeOut && game.bringThrowBack == false) { // switch to blue throw
				game.outStatus = "blueThrow";
				game.rsTimer = 0;				
				room.setDiscProperties(3, {x: 0, y: 2000, radius: 0});
				sleep(100).then(() => {
					room.setDiscProperties(0, {color: "0x0fbcf9", xspeed: 0, yspeed: 0, x: game.ballOutPositionX, y: game.throwInPosY});
				});
			}
		}
		else if (game.outStatus == "blueThrow") {
			if (game.rsTimer == throwTimeOut - 120) { // warning indicator
				ballWarning("0x0fbcf9", ++game.warningCount);
			}
			if (game.rsTimer == throwTimeOut && game.bringThrowBack == false) { // switch to red throw
				game.outStatus = "redThrow";
				game.rsTimer = 0;						
				room.setDiscProperties(3, {x: 0, y: 2000, radius: 0});
				sleep(100).then(() => {
					room.setDiscProperties(0, {color: "0xff3f34", xspeed: 0, yspeed: 0, x: game.ballOutPositionX, y: game.throwInPosY});
				});
			}
		}
		else if (game.outStatus == "blueGK" || game.outStatus == "redGK") {
			if (game.rsTimer == gkTimeOut - 120) { // warning indicator
				if (game.outStatus == "blueGK") {
					ballWarning("0x0fbcf9", ++game.warningCount);
				}
				if (game.outStatus == "redGK") {
					ballWarning("0xff3f34", ++game.warningCount);
				}
			}
			if (game.rsTimer == gkTimeOut) {
				game.outStatus = "";
				room.setDiscProperties(0, {color: "0xffffff"});
				game.rsTimer = 1000000;							
			}
		}
		else if (game.outStatus == "blueCK" || game.outStatus == "redCK") {
			if (game.rsTimer == ckTimeOut - 120) {
				if (game.outStatus == "blueCK") {
					ballWarning("0x0fbcf9", ++game.warningCount);
				}
				if (game.outStatus == "redCK") {
					ballWarning("0xff3f34", ++game.warningCount);
				}
			}
			if (game.rsTimer == ckTimeOut) {
				game.outStatus = "";
				room.setDiscProperties(1, {x: 0, y: 2000, radius: 0});
				room.setDiscProperties(2, {x: 0, y: 2000, radius: 0});
				room.setDiscProperties(0, {color: "0xffffff"});
				game.rsTimer = 1000000;							
			}
		}
	}
	
	if (game.rsActive == true) {
		if ((room.getBallPosition().y > 611.45 || room.getBallPosition().y < -611.45)) {
			game.rsActive = false;
			if (game.lastPlayAnnounced == true) {
				room.pauseGame(true);
				game.lastPlayAnnounced = false;
				announce("APITA O ÁRBITRO, FIM DE PAPO!");
			}
			
			room.setDiscProperties(0, {xgravity: 0, ygravity: 0});
			
			game.ballOutPositionX = Math.round(room.getBallPosition().x * 10) / 10;
			if (room.getBallPosition().y > 611.45) {
				game.ballOutPositionY = 400485;
				game.throwInPosY = 618;
			}
			if (room.getBallPosition().y < -611.45) {
				game.ballOutPositionY = -400485;
				game.throwInPosY = -618;
			}
			if (room.getBallPosition().x > 1130) {
				game.ballOutPositionX = 1130;
			}
			if (room.getBallPosition().x < -1130) {
				game.ballOutPositionX = -1130;
			}
			
			
			if (game.rsTouchTeam == 1) {				
				room.setDiscProperties(3, {x: game.ballOutPositionX, y: game.throwInPosY, radius: 18 });
				sleep(100).then(() => {
					game.outStatus = "blueThrow";
					game.throwinKicked = false;
					game.rsTimer = 0;
					game.rsReady = true;
					room.setDiscProperties(0, {xspeed: 0, yspeed: 0, x: game.ballOutPositionX, y: game.throwInPosY, xgravity: 0, ygravity: 0});
					//announce("🖐️ Lateral: 🔵 Azul");
					room.setDiscProperties(0, {color: "0x0fbcf9"});				
				});	
				sleep(100).then(() => {
					room.setDiscProperties(3, {x: 0, y: 2000, radius: 0});
				});
			}
			else {				
				room.setDiscProperties(3, {x: game.ballOutPositionX, y: game.throwInPosY, radius: 18 });
				sleep(100).then(() => {
					game.outStatus = "redThrow";
					game.throwinKicked = false;
					game.rsTimer = 0;
					game.rsReady = true;
					room.setDiscProperties(0, {xspeed: 0, yspeed: 0, x: game.ballOutPositionX, y: game.throwInPosY, xgravity: 0, ygravity: 0});
					//announce("🖐️ Lateral: 🔴 Vermelho");
					room.setDiscProperties(0, {color: "0xff3f34"});				
				});	
				sleep(100).then(() => {
					room.setDiscProperties(3, {x: 0, y: 2000, radius: 0});
				});
			}
		}
	
		if (room.getBallPosition().x > 1162.45 && (room.getBallPosition().y > 124 || room.getBallPosition().y < -124)) {
			game.rsActive = false;	
			if (game.lastPlayAnnounced == true) {
				room.pauseGame(true);
				game.lastPlayAnnounced = false;
				announce("FIM DE PARTIDA!");
			}
			room.setDiscProperties(0, {xgravity: 0, ygravity: 0});
			room.getPlayerList().forEach(function(player) {
				room.setPlayerDiscProperties(player.id, {invMass: 100000});
			});
			
			if (game.rsTouchTeam == 1) {				
				room.setDiscProperties(3, {x: 1060, y: 0, radius: 18 });
				sleep(100).then(() => {					
					game.outStatus = "blueGK";
					game.rsTimer = 0;
					game.rsReady = true;
					//announce("🥅 Tiro de meta: 🔵 Azul");
					game.rsGoalKick = true;
					game.rsSwingTimer = 0;
					game.boosterCount = 0;
					game.boosterState = false;
					room.setDiscProperties(0, {xspeed: 0, yspeed: 0, x: 1060, y: 0, color: "0x0fbcf9", cMask: 268435519, xgravity: 0, ygravity: 0});
				});
				sleep(3000).then(() => {
					room.setDiscProperties(3, {x: 0, y: 2000, radius: 0});
				});
			}
			else {	
				//announce("🚩 Escanteio: 🔴 Vermelho");							
				game.rsSwingTimer = 0;
				if (room.getBallPosition().y < -124) {					
					room.setDiscProperties(3, {x: 1140, y: -590, radius: 18 });
					sleep(100).then(() => {
						game.rsCorner = true;
						game.outStatus = "redCK";
						game.rsTimer = 0;
						game.rsReady = true;
						game.boosterCount = 0;
						game.boosterState = false;
						room.setDiscProperties(0, {x: 1140, y: -590, xspeed: 0, yspeed: 0, color: "0xff3f34", cMask: 268435519, xgravity: 0, ygravity: 0});
						room.setDiscProperties(2, {x: 1150, y: -670, radius: 420 });
						room.setDiscProperties(3, {x: 0, y: 2000, radius: 0});
					});
				}
				if (room.getBallPosition().y > 124) {
					room.setDiscProperties(3, {x: 1140, y: 590, radius: 18 });
					sleep(100).then(() => {
						game.rsCorner = true;
						game.outStatus = "redCK";
						game.rsTimer = 0;
						game.rsReady = true;
						game.boosterCount = 0;
						game.boosterState = false;
						room.setDiscProperties(0, {x: 1140, y: 590, xspeed: 0, yspeed: 0, color: "0xff3f34", cMask: 268435519, xgravity: 0, ygravity: 0});
						room.setDiscProperties(2, {x: 1150, y: 670, radius: 420 });
						room.setDiscProperties(3, {x: 0, y: 2000, radius: 0});
					});
				}
			}
		}
		if (room.getBallPosition().x < -1162.45 && (room.getBallPosition().y > 124 || room.getBallPosition().y < -124)) {
			game.rsActive = false;
			if (game.lastPlayAnnounced == true) {
				room.pauseGame(true);
				game.lastPlayAnnounced = false;
				announce("END");
			}
			room.setDiscProperties(0, {xgravity: 0, ygravity: 0});
			room.getPlayerList().forEach(function(player) {
				room.setPlayerDiscProperties(player.id, {invMass: 100000});
			});
			
			if (game.rsTouchTeam == 1) {				
				//announce("🚩 Escanteio: 🔵 Azul");				
				game.rsSwingTimer = 0;
				if (room.getBallPosition().y < -124) {
					room.setDiscProperties(3, {x: -1140, y: -590, radius: 18 });
					sleep(100).then(() => {
						game.rsCorner = true;
						game.outStatus = "blueCK";
						game.rsTimer = 0;
						game.rsReady = true;
						game.boosterCount = 0;
						game.boosterState = false;
						room.setDiscProperties(0, {x: -1140, y: -590, xspeed: 0, yspeed: 0, color: "0x0fbcf9", cMask: 268435519, xgravity: 0, ygravity: 0});
						room.setDiscProperties(1, {x: -1150, y: -670, radius: 420 });
						room.setDiscProperties(3, {x: 0, y: 2000, radius: 0});
					});	
				}
				if (room.getBallPosition().y > 124) {
					room.setDiscProperties(3, {x: -1140, y: 590, radius: 18 });
					sleep(100).then(() => {
						game.rsCorner = true;
						game.outStatus = "blueCK";
						game.rsTimer = 0;
						game.rsReady = true;
						game.boosterCount = 0;
						game.boosterState = false;
						room.setDiscProperties(0, {x: -1140, y: 590, xspeed: 0, yspeed: 0, color: "0x0fbcf9", cMask: 268435519, xgravity: 0, ygravity: 0});
						room.setDiscProperties(1, {x: -1150, y: 670, radius: 420 });
						room.setDiscProperties(3, {x: 0, y: 2000, radius: 0});
					});		
				}				
			}
			else {				
				room.setDiscProperties(3, {x: -1060, y: 0, radius: 18 });
				sleep(100).then(() => {
					game.outStatus = "redGK";
					game.rsTimer = 0;
					game.rsReady = true;
					//announce("🥅 Tiro de meta: 🔴 Vermelho");
					game.rsGoalKick = true;
					game.rsSwingTimer = 0;
					game.boosterCount = 0;
					game.boosterState = false;
					room.setDiscProperties(0, {xspeed: 0, yspeed: 0, x: -1060, y: 0, color: "0xff3f34", cMask: 268435519, xgravity: 0, ygravity: 0});
				});
				sleep(3000).then(() => {
					room.setDiscProperties(3, {x: 0, y: 2000, radius: 0});
				});
			}
		}
	}
	
	if (game.rsActive == false && (game.outStatus == "redThrow" || game.outStatus == "blueThrow")) { 
		if ((room.getBallPosition().y > 611.45 || room.getBallPosition().y < -611.45) && (room.getBallPosition().x < game.ballOutPositionX - throwinDistance || room.getBallPosition().x > game.ballOutPositionX + throwinDistance) && game.bringThrowBack == false) { //if bad throw from run too far
			game.bringThrowBack	= true;
			if (game.outStatus == "redThrow") { //switch to blue throw
				game.rsTimer = 0;
				game.warningCount++;
				game.outStatus = "blueThrow";								
				room.setDiscProperties(3, {x: 0, y: 2000, radius: 0});
				sleep(100).then(() => {
					room.setDiscProperties(0, {xspeed: 0, yspeed: 0, color: "0x0fbcf9", x: game.ballOutPositionX, y: game.throwInPosY});	
				});			
			}
			else if (game.outStatus == "blueThrow") { //switch to red throw
				game.rsTimer = 0;
				game.warningCount++;
				game.outStatus = "redThrow";										
				room.setDiscProperties(3, {x: 0, y: 2000, radius: 0});	
				sleep(100).then(() => {
					room.setDiscProperties(0, {xspeed: 0, yspeed: 0, color: "0xff3f34", x: game.ballOutPositionX, y: game.throwInPosY});
				});
			}
				
		}
		
		if (room.getBallPosition().y < 611.45 && room.getBallPosition().y > -611.45 && game.throwinKicked == false && game.pushedOut == false) { //if bad throw from push ball back into active without kick		
			if (game.outStatus == "redThrow") { //switch to blue throw
				game.rsTimer = 0;
				game.warningCount++;
				game.outStatus = "blueThrow";								
				room.setDiscProperties(3, {x: 0, y: 2000, radius: 0});
				sleep(100).then(() => {
					room.setDiscProperties(0, {xspeed: 0, yspeed: 0, color: "0x0fbcf9", x: game.ballOutPositionX, y: game.throwInPosY});
				});					
			}
			else if (game.outStatus == "blueThrow") { //switch to red throw
				game.rsTimer = 0;
				game.warningCount++;
				game.outStatus = "redThrow";										
				room.setDiscProperties(3, {x: 0, y: 2000, radius: 0});	
				sleep(100).then(() => {
					room.setDiscProperties(0, {xspeed: 0, yspeed: 0, color: "0xff3f34", x: game.ballOutPositionX, y: game.throwInPosY});
				});
			}
			game.pushedOut = true;
		}
		
		if (room.getBallPosition().y < 611.45 && room.getBallPosition().y > -611.45 && game.throwinKicked == true) { // if throw is good
			game.outStatus = "";
			game.rsActive = true;
			game.rsReady = false;
			room.setDiscProperties(0, {color: "0xffffff"});
			game.rsTimer = 1000000;
			game.warningCount++;
		}
		
		if (room.getBallPosition().y.toFixed(1) == game.throwInPosY.toFixed(1) && room.getBallPosition().x.toFixed(1) == game.ballOutPositionX.toFixed(1)) {
			game.bringThrowBack	= false;
			game.pushedOut = false;
		}
	}
}


function handleBallTouch() {
	var players = room.getPlayerList();
	var ballPosition = room.getBallPosition();
	var ballRadius = game.ballRadius;
	var playerRadius = 15;
	var triggerDistance = ballRadius + playerRadius + 0.01;
	
	for (var i = 0; i < players.length; i++) { // Iterate over all the players
		var player = players[i];
		if ( player.position == null ) continue;
		var distanceToBall = pointDistance(player.position, ballPosition);
		if ( distanceToBall < triggerDistance ) {				
			game.rsTouchTeam = player.team;
			game.throwinKicked = false;
			
			if (game.rsCorner == false && room.getDiscProperties(0).xgravity != 0) {
				room.setDiscProperties(0, {xgravity: 0, ygravity:0});
				game.rsSwingTimer = 10000;
			}
		}		
	}
}

function updateGameStatus() {
	game.time = Math.floor(room.getScores().time);
	game.ballRadius = room.getDiscProperties(0).radius;
}


function announce(msg, targetId, color, style, sound) {
	if (color == null) {
		color = 0xFFFD82;
	}
	if (style == null) {
		style = "bold";
	}
	if (sound == null) {
		sound = 0;
	}
	room.sendAnnouncement(msg, targetId, color, style, sound);
	console.log("Atenção: " + msg);
}

function whisper(msg, targetId, color, style, sound) {
	if (color == null) {
		color = 0x66C7FF;
	}
	if (style == null) {
		style = "normal";
	}
	if (sound == null) {
		sound = 0;
	}
	room.sendAnnouncement(msg, targetId, color, style, sound);
	if (room.getPlayer(targetId) != null) {
		console.log("Whisper -> " + room.getPlayer(targetId).name + ": " + msg);
	}
}

function isAdminPresent() {
	var players = room.getPlayerList();
	if (players.find((player) => player.admin) != null) {
		return true;
	}
	else {
		return false;
	}
}

function displayAdminMessage() {
	if (isAdminPresent() == false && allowPublicAdmin == true) {
		announce("Não há admins presentes: Digite !admin para assumir o controle");
	}
}

function pointDistance(p1, p2) {
	var d1 = p1.x - p2.x;
	var d2 = p1.y - p2.y;
	return Math.sqrt(d1 * d1 + d2 * d2);
}

function sleep (time) {
  return new Promise((resolve) => setTimeout(resolve, time));
}

function ballWarning(origColour, warningCount) {
	sleep(200).then(() => {
		if (game.warningCount == warningCount) {
			room.setDiscProperties(0, {color: "0xffffff"});
		}
	});
	sleep(400).then(() => {
		if (game.warningCount == warningCount) {
			room.setDiscProperties(0, {color: origColour});
		}
	});
	sleep(600).then(() => {
		if (game.warningCount == warningCount) {
			room.setDiscProperties(0, {color: "0xffffff"});
		}
	});
	sleep(800).then(() => {
		if (game.warningCount == warningCount) {
			room.setDiscProperties(0, {color: origColour});
		}
	});
	sleep(1000).then(() => {
		if (game.warningCount == warningCount) {
			room.setDiscProperties(0, {color: "0xffffff"});
		}
	});
	sleep(1200).then(() => {
		if (game.warningCount == warningCount) {
			room.setDiscProperties(0, {color: origColour});
		}
	});
	sleep(1400).then(() => {
		if (game.warningCount == warningCount) {
			room.setDiscProperties(0, {color: "0xffffff"});
		}
	});
	sleep(1600).then(() => {
		if (game.warningCount == warningCount) {
			room.setDiscProperties(0, {color: origColour});
		}
	});
	sleep(1675).then(() => {
		if (game.warningCount == warningCount) {
			room.setDiscProperties(0, {color: "0xffffff"});
		}
	});
	sleep(1750).then(() => {
		if (game.warningCount == warningCount) {
			room.setDiscProperties(0, {color: origColour});
		}
	});
}

function extraTime() {
	var extraSeconds = Math.ceil(game.extraTimeCount / 60);
	game.extraTimeEnd = (gameTime * 60) + extraSeconds;
	announce("Prorrogação: " + extraSeconds + " Segundos", null, null, null, 1);
}

function avatarCelebration(playerId, avatar) {
	room.setPlayerAvatar(playerId, avatar);
	sleep(250).then(() => {
		room.setPlayerAvatar(playerId, null);
	});
	sleep(500).then(() => {
		room.setPlayerAvatar(playerId, avatar);
	});
	sleep(750).then(() => {
		room.setPlayerAvatar(playerId, null);
	});
	sleep(1000).then(() => {
		room.setPlayerAvatar(playerId, avatar);
	});
	sleep(1250).then(() => {
		room.setPlayerAvatar(playerId, null);
	});
	sleep(1500).then(() => {
		room.setPlayerAvatar(playerId, avatar);
	});
	sleep(1750).then(() => {
		room.setPlayerAvatar(playerId, null);
	});
	sleep(2000).then(() => {
		room.setPlayerAvatar(playerId, avatar);
	});
	sleep(2250).then(() => {
		room.setPlayerAvatar(playerId, null);
	});
	sleep(2500).then(() => {
		room.setPlayerAvatar(playerId, avatar);
	});
	sleep(2750).then(() => {
		room.setPlayerAvatar(playerId, null);
	});
	sleep(3000).then(() => {
		room.setPlayerAvatar(playerId, avatar);
	});
	sleep(3250).then(() => {
		room.setPlayerAvatar(playerId, null);
	});
}

function secondsToMinutes(time) {
	// Hours, minutes and seconds
    var hrs = ~~(time / 3600);
    var mins = ~~((time % 3600) / 60);
    var secs = ~~time % 60;

    // Output like "1:01" or "4:03:59" or "123:03:59"
    var ret = "";
    if (hrs > 0) {
        ret += "" + hrs + ":" + (mins < 10 ? "0" : "");
    }
    ret += "" + mins + ":" + (secs < 10 ? "0" : "");
    ret += "" + secs;
    return ret;
}

function blockThrowIn() {
	var players = room.getPlayerList().filter((player) => player.team != 0);
	if (room.getBallPosition().y < 0) { // top throw line
		if (game.outStatus == "redThrow") {
			players.forEach(function(player) {
				if (player.team == 2 && room.getPlayerDiscProperties(player.id).y < 0) {
					if (room.getPlayerDiscProperties(player.id).cGroup != 536870918) {
						room.setPlayerDiscProperties(player.id, {cGroup: 536870918});
					}
					if (player.position.y < -485) {
						room.setPlayerDiscProperties(player.id, {y: -470});
					}
				}
				if (player.team == 1 && room.getPlayerDiscProperties(player.id).cGroup != 2) {
					room.setPlayerDiscProperties(player.id, {cGroup: 2});
				}
				if (room.getDiscProperties(17).x != 1149) { // show top red line
					room.setDiscProperties(17, {x: 1149});
				}
				if (room.getDiscProperties(19).x != -1149) { // hide top blue line
					room.setDiscProperties(19, {x: -1149});
				}
			});
		}
		if (game.outStatus == "blueThrow") {
			players.forEach(function(player) {
				if (player.team == 1 && room.getPlayerDiscProperties(player.id).y < 0) {
					if (room.getPlayerDiscProperties(player.id).cGroup != 536870918) {
						room.setPlayerDiscProperties(player.id, {cGroup: 536870918});
					}
					if (player.position.y < -485) {
						room.setPlayerDiscProperties(player.id, {y: -470});
					}
				}
				if (player.team == 2 && room.getPlayerDiscProperties(player.id).cGroup != 2) {
					room.setPlayerDiscProperties(player.id, {cGroup: 2});
				}
				if (room.getDiscProperties(19).x != 1149) { // show top blue line
					room.setDiscProperties(19, {x: 1149});
				}
				if (room.getDiscProperties(17).x != -1149) { // hide top red line
					room.setDiscProperties(17, {x: -1149});
				}
			});
		}
	}
	if (room.getBallPosition().y > 0) { // bottom throw line
		if (game.outStatus == "redThrow") {
			players.forEach(function(player) {
				if (player.team == 2 && room.getPlayerDiscProperties(player.id).y > 0) {
					if (room.getPlayerDiscProperties(player.id).cGroup != 536870918) {
						room.setPlayerDiscProperties(player.id, {cGroup: 536870918});
					}
					if (player.position.y > 485) {
						room.setPlayerDiscProperties(player.id, {y: 470});
					}
				}
				if (player.team == 1 && room.getPlayerDiscProperties(player.id).cGroup != 2) {
					room.setPlayerDiscProperties(player.id, {cGroup: 2});
				}
				if (room.getDiscProperties(21).x != 1149) { // show bottom red line
					room.setDiscProperties(21, {x: 1149});
				}
				if (room.getDiscProperties(23).x != -1149) { // hide bottom blue line
					room.setDiscProperties(23, {x: -1149});
				}
			});
		}
		if (game.outStatus == "blueThrow") {
			players.forEach(function(player) {
				if (player.team == 1 && room.getPlayerDiscProperties(player.id).y > 0) {
					if (room.getPlayerDiscProperties(player.id).cGroup != 536870918) {
						room.setPlayerDiscProperties(player.id, {cGroup: 536870918});
					}
					if (player.position.y > 485) {
						room.setPlayerDiscProperties(player.id, {y: 470});
					}
				}
				if (player.team == 2 && room.getPlayerDiscProperties(player.id).cGroup != 2) {
					room.setPlayerDiscProperties(player.id, {cGroup: 2});
				}
				if (room.getDiscProperties(23).x != 1149) { // show bottom blue line
					room.setDiscProperties(23, {x: 1149});
				}
				if (room.getDiscProperties(21).x != -1149) { // hide bottom red line
					room.setDiscProperties(21, {x: -1149});
				}
			});
		}		
	}	
}


function blockGoalKick() {
	var players = room.getPlayerList().filter((player) => player.team != 0);
	if (room.getBallPosition().x < 0) { // left side red goal kick
		if (game.outStatus == "redGK") {
			players.forEach(function(player) {
				if (player.team == 2 && room.getPlayerDiscProperties(player.id).x < 0) {
					if (room.getPlayerDiscProperties(player.id).cGroup != 268435462) {
						room.setPlayerDiscProperties(player.id, {cGroup: 268435462});
					}
					if (player.position.x < -840 && player.position.y > -320 && player.position.y < 320) {
						room.setPlayerDiscProperties(player.id, {x: -825});
					}
				}
				if (player.team == 1 && room.getPlayerDiscProperties(player.id).cGroup != 2) {
					room.setPlayerDiscProperties(player.id, {cGroup: 2});
				}
			});
		}
	}
	if (room.getBallPosition().x > 0) { // right side blue goal kick
		if (game.outStatus == "blueGK") {
			players.forEach(function(player) {
				if (player.team == 1 && room.getPlayerDiscProperties(player.id).x > 0) {
					if (room.getPlayerDiscProperties(player.id).cGroup != 268435462) {
						room.setPlayerDiscProperties(player.id, {cGroup: 268435462});
					}
					if (player.position.x > 840 && player.position.y > -320 && player.position.y < 320) {
						room.setPlayerDiscProperties(player.id, {x: 825});
					}
				}
				if (player.team == 2 && room.getPlayerDiscProperties(player.id).cGroup != 2) {
					room.setPlayerDiscProperties(player.id, {cGroup: 2});
				}
			});
		}		
	}	
}



function removeBlock() {
	var players = room.getPlayerList().filter((player) => player.team != 0);
	if (game.outStatus == "") {
		players.forEach(function(player) {
			if (player.team == 1 && room.getPlayerDiscProperties(player.id).cGroup != 2) {
				room.setPlayerDiscProperties(player.id, {cGroup: 2});
			}
			if (player.team == 2 && room.getPlayerDiscProperties(player.id).cGroup != 4) {
				room.setPlayerDiscProperties(player.id, {cGroup: 4});
			}
		});
		if (room.getDiscProperties(17).x != -1149) { // hide top red line
			room.setDiscProperties(17, {x: -1149});
		}
		if (room.getDiscProperties(19).x != -1149) { // hide top blue line
			room.setDiscProperties(19, {x: -1149});
		}
		if (room.getDiscProperties(21).x != -1149) { // hide bottom red line
			room.setDiscProperties(21, {x: -1149});
		}
		if (room.getDiscProperties(23).x != -1149) { // hide bottom blue line
			room.setDiscProperties(23, {x: -1149});
		}		
	}
}

/* function initBallCarrying(redTeam, blueTeam){
    var ballCarrying = new Map();
    var playing = redTeam.concat(blueTeam);
    for (var i = 0; i < playing.length; i++) {
        ballCarrying.set(playing[i].name, [0, playing[i].team]); // secs, team, %
    }
    return ballCarrying;
} */
 
 
/////////////////////////////NEW SCRIPTS 1.4
function filter(message)
{
    message = message.toLowerCase();
    message = message.replace(/\s/g, '');
    message = message.replace(/\./g,' ')
    if(message.includes("ఌ") ||message.includes("甈") ||message.includes("㐷") ||message.includes("怅") ||message.includes("瘪") ||message.includes("⑸") ||message.includes("㬆") ||message.includes("権") ||message.includes("怜") ||message.includes("∯") ||message.includes("㤒") ||message.includes("䉊") ||message.includes("匊") ||message.includes("ᙻ") ||message.includes("ൽ") ||message.includes("ᴧ") ||message.includes("爂") ||message.includes("爇") ||message.includes("त") ||message.includes("権") ||message.includes("怜") ||message.includes("∯") ||message.includes("㤒") ||message.includes("﷽") ||message.includes("m0g0l1c") ||message.includes("﷽") ||message.includes("﷽") ||message.includes("﷽") ||message.includes("﷽") ||message.includes("﷽") ||message.includes("﷽") ||message.includes("﷽") ||message.includes("﷽") ||message.includes("﷽") ||message.includes("﷽") ||message.includes("䐃") ||message.includes("䉧") ||message.includes("瀩") ||message.includes("琐") ||message.includes("䳌") ||message.includes("氊") ||message.includes("瘠") ||message.includes("銡") ||message.includes("歘") ||message.includes("桋") ||message.includes("鼜") ||message.includes("窭") ||message.includes("谡") ||message.includes("輽") ||message.includes("怼") ||message.includes("霽") ||message.includes("椣") ||message.includes("䖎") ||message.includes("蘗") ||message.includes("徠"))
    {
        return true;
    }else return false;
}