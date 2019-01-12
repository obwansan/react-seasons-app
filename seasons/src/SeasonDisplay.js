import React from 'react';

const seasonConfig = {
	winter: {
		text: 'Burr, it is chilly',
		iconName: 'snowflake'
	},
	summer: {
		text: 'Lets hit the beach',
		iconName: 'sun'
	}
}

const getSeason = (lat, month)=> {
    if (month > 2 && month < 9) {
        return lat > 0 ? 'summer' : 'winter';
    } else {
        return lat > 0 ? 'winter' : 'summer';
    }
}

const SeasonDisplay = props => {
    const season = getSeason(props.lat, new Date().getMonth());
		// Destructure the text and iconName property values into same name variables.
		// Variable names have to be same as object property names.
		const {text, iconName} = seasonConfig[season];

		// Don't need same names if not destructuring. Can combine bracket and dot notation.
		// const texty = seasonConfig[season].text;
		// const iconNamey = seasonConfig[season].iconName;

    return (
			<div>
				<i className={`${iconName} icon`} />
				<h1>{text}</h1>
				<i className={`${iconName} icon`} />
			</div>
		);
};

export default SeasonDisplay;