const cardEl = document.querySelector('.card');

/* Object.groupBy() */
const ids = [
	{ name: 'firstId', value: '3426' },
	{ name: 'secondId', value: '3428' },
	{ name: 'thirdId', value: '3429' },
];

const groupedIds = Object.groupBy(ids, function ({ value }) {
	return value % 2 !== 0 ? 'new' : 'old';
});

const cardTitleIdEl = cardEl.querySelector('.card__title .id');
cardTitleIdEl.textContent = '#' + groupedIds.new[0].value;

/* Map.groupBy() */
const authors = [
	{ name: 'Jules Wyvern', age: 24 },
	{ name: 'Anna', age: 32 },
];

const groupedAuthors = Object.groupBy(authors, function ({ age }) {
	return age < 25 ? 'qualified' : 'not qualified';
});

const cardAuthorNameEl = cardEl.querySelector('.card__author-desc a');
cardAuthorNameEl.textContent = groupedAuthors.qualified[0].name;
