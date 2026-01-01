let settingsEnabled = $state(false);

export function toggleSettingsEnabled() {
	settingsEnabled = !settingsEnabled;
}

export function setSettingsEnabled(enable = false) {
	if (enable === true) {
		settingsEnabled = true;
		return setSettingsEnabled;
	} else {
		settingsEnabled = false;
		return settingsEnabled;
	}
}

export function getSettingsEnabled() {
	return settingsEnabled;
}
