const interiorOptions = [
  "leatherSeats",
  "heatedSeats",
  "ventilatedSeats",
  "powerSeats",
  "sunroof",
  "ambientLighting",
  "premiumSoundSystem",
  "touchscreenDisplay",
  "navigationSystem",
  "rearSeatEntertainment",
  "wirelessCharging",
  "smartphoneIntegration",
  "memorySeats",
  "heatedSteeringWheel",
  "panoramicRoof",
];

const exteriorOptions = [
  "alloyWheels",
  "panoramicRoof",
  "fogLights",
  "LEDHeadlights",
  "powerTailgate",
  "roofRails",
  "chromeAccents",
  "rearSpoiler",
  "powerFoldingMirrors",
  "rain-sensingWipers",
  "headlightWashers",
  "automaticHighBeams",
  "daytimeRunningLights",
  "adaptiveHeadlights",
  "powerSlidingDoors",
];

const comfortOptions = [
  "dualZoneAC",
  "rearACVents",
  "heatedSteeringWheel",
  "keylessEntry",
  "pushButtonStart",
  "adaptiveCruiseControl",
  "powerAdjustableSteeringWheel",
  "memoryMirrors",
  "remoteEngineStart",
  "massageSeats",
  "ambientInteriorLighting",
  "sunshades",
  "automaticClimateControl",
  "poweredLiftgate",
  "airQualitySystem",
];

const safetyOptions = [
  "adaptiveCruiseControl",
  "laneDepartureWarning",
  "blindSpotMonitoring",
  "parkingAssist",
  "surroundViewCamera",
  "forwardCollisionWarning",
  "automaticEmergencyBraking",
  "pedestrianDetection",
  "rearCrossTrafficAlert",
  "laneKeepAssist",
  "trafficSignRecognition",
  "driverAttentionMonitoring",
  "nightVision",
  "tirePressureMonitoring",
  "anti-theftSystem",
];

const featuresSchema = {
  interior: { type: String, enum: interiorOptions, default: [] },
  exterior: { type: String, enum: exteriorOptions, default: [] },
  comfort: { type: String, enum: comfortOptions, default: [] },
  safety: { type: String, enum: safetyOptions, default: [] },
};

module.exports = featuresSchema;
