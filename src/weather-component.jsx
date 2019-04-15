import React from 'react';


const weatherComponent = ({
    temperature,
    day,
    image,
}) => {






return (
	<div>
		<main data-which-id="weather-component-page">
			<div className={styles.mainContent}>
			<div className={styles.centeredContent}>
			{renderCompareRetailers()}
			</div>
			{renderSuggestedAlternatives()}
			{renderRelatedArticles()}
			</div>
		</main>
	</div>
	);
}

weatherComponent.protoTypes = {

};

export default weatherComponent;

