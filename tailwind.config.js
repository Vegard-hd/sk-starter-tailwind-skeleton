import { fontFamily } from 'tailwindcss/defaultTheme';

export default {
	theme: {
		extend: {
			fontFamily: {
				sans: ['Sora', ...fontFamily.sans]
			}
		}
	}
};
