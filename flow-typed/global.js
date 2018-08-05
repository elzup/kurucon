// @flow

declare class Object {
	static values: <T>(obj: { [key: any]: T }) => T[];
}

declare class BlueJelly {}

declare class navigator {
	bluetooth: Function;
}
