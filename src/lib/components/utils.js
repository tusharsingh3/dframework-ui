const utils = {
    filterFieldDataTypes: {
        Number: 'number',
        String: 'string',
        Boolean: 'boolean'
    },
    fixedFilterFormat: {
        date: "YYYY-MM-DD",
        datetime: "YYYY-MM-DD hh:mm:ss a",
        dateTimeLocal: "YYYY-MM-DD hh:mm:ss a",
        OverrideDateFormat: "DD-MMM-YYYY"
    },
    t(sentence, i18nNext, options = {}) {
		if (!i18nNext) {
			return sentence;
		}
		if (!sentence) {
			return
		}
		const { t, i18n } = i18nNext;
		if (!(t || i18n)) {
			return sentence;
		}
		const isIE = /*@cc_on!@*/false || !!document.documentMode;
		const isEdge = !isIE && !!window.StyleMedia;

		// Additional condition added for Edge and Firefox as they do not return only en instead return en-IN
		if (i18n?.language === "en" || i18n?.language.split('-')[0] === "en") {
			return t(sentence, options);
		}
		const optionKeys = Object.keys(options);
		let loweredSentence = [];
		// In case of non en language do not lowercase the variable , as lowercase it will result in value not updating in string
		if (optionKeys.length) {
			loweredSentence = sentence.split(" ");
			loweredSentence = loweredSentence.map((item) => {
				if (item.includes("{{") && item.includes("}}") && isEdge) {
					return item;
				} else {
					return item.toLowerCase();
				}
			})
		}
		const tString = loweredSentence.length ? loweredSentence.join(" ") : sentence.toString().toLowerCase();
		const transformed = t(tString, options);
		if (sentence === sentence.toString().toUpperCase()) {
			return transformed.toString().toUpperCase()
		} else if (sentence === sentence.toString().toLowerCase()) {
			return transformed.toString().toLowerCase();
		} else {
			return transformed[0].toUpperCase() + transformed.substring(1)
		}
	},
	isAdminORSuperAdmin(value) {
		return Number(value) === 1;
	},
}

export default utils;