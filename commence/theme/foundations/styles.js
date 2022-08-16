export default {
	global: {
		'*, *::before, &::after': {
			letterSpacing: 'inherit'
		},

		html: {
			lineHeight: '1.5',
			letterSpacing: '0.025rem'
		},

		body: {
			color: 'default',
			bg: 'bg-canvas'
		},

		'*::placeholder': {
			opacity: 1,
			color: 'muted'
		}
	}
}
