const dbError = [
	{
		route: "great-wall-explorer",
		title: "Discover China: Journey Readiness Quiz",
		description:
			"Embark on an enchanting expedition to China! Assess your travel readiness with our quiz and ensure you're fully equipped to explore the wonders of this culturally rich and diverse country.",
		result: 0,
		idx: 0,
		questions: [
			{
				question: "Do you have a valid passport?",
				answers: ["yes", "no", "not sure"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"A valid passport is essential for travel to China.",
			},
			{
				question: "Have you obtained a Chinese visa?",
				answers: ["yes", "no", "in process"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Ensure you have a valid Chinese visa for entry.",
			},
			{
				question: "Have you researched the cultural etiquette in China?",
				answers: ["yes", "no", "in progress"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Familiarize yourself with cultural norms for a respectful visit.",
			},
			{
				question: "Do you have travel insurance for your trip?",
				answers: ["yes", "no", "considering"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Travel insurance is important for a worry-free journey.",
			},
			{
				question: "Are your vaccinations up to date?",
				answers: ["yes", "no", "consulting with doctor"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Ensure your vaccinations are current for a healthy visit.",
			},
			{
				question: "Have you booked your accommodation in China?",
				answers: ["yes", "no", "still deciding"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Secure your accommodation for a comfortable stay.",
			},
			{
				question: "Do you know basic Mandarin phrases?",
				answers: ["yes", "no", "learning"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Familiarize yourself with basic Mandarin phrases for better communication.",
			},
			{
				question:
					"Have you checked the weather forecast for your travel dates?",
				answers: ["yes", "no", "not yet"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Check the weather forecast to pack accordingly.",
			},
			{
				question: "Do you know the emergency numbers in China?",
				answers: ["yes", "no", "researching"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Familiarize yourself with emergency numbers for a safe visit.",
			},
			{
				question: "Have you researched Chinese cuisine?",
				answers: ["yes", "no", "excited to try"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Explore and savor the delightful flavors of Chinese cuisine.",
			},
			{
				question: "Do you know the local transportation options in China?",
				answers: ["yes", "no", "researching"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Know your transportation options for convenient travel within China.",
			},
			{
				question: "Have you informed your bank about your travel to China?",
				answers: ["yes", "no", "not yet"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Notify your bank to avoid any issues with your cards during your trip.",
			},
			{
				question: "Are you aware of the Chinese currency and exchange rates?",
				answers: ["yes", "no", "researching"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Understand the local currency and exchange rates for smoother transactions.",
			},
			{
				question:
					"Have you packed essentials like a power adapter and comfortable walking shoes?",
				answers: ["yes", "no", "need to buy some"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Pack essential items like a power adapter and comfortable walking shoes for your trip.",
			},
			{
				question: "Are you familiar with popular tourist attractions in China?",
				answers: ["yes", "no", "researching"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Explore famous attractions for a memorable journey in China.",
			},
		],
	},
	{
		route: "bellissimo-italy",
		title: "La Dolce Vita: Italy Travel Readiness Quiz",
		description:
			"Prepare for an enchanting journey to Italy! Evaluate your travel readiness with our quiz and ensure you're equipped to savor the beauty, culture, and flavors of this timeless destination.",
		result: 0,
		idx: 0,
		questions: [
			{
				question: "Do you have a valid passport?",
				answers: ["yes", "no", "not sure"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"A valid passport is essential for travel to Italy.",
			},
			{
				question: "Have you obtained a Schengen visa for Italy?",
				answers: ["yes", "no", "in process"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Ensure you have a Schengen visa for entry into Italy.",
			},
			{
				question: "Have you booked your accommodation in Italy?",
				answers: ["yes", "no", "still deciding"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Secure your accommodation for a comfortable stay in Italy.",
			},
			{
				question: "Do you have travel insurance for your trip?",
				answers: ["yes", "no", "considering"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Travel insurance is important for a worry-free journey.",
			},
			{
				question: "Are your vaccinations up to date?",
				answers: ["yes", "no", "consulting with doctor"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Ensure your vaccinations are current for a healthy visit.",
			},
			{
				question: "Do you know basic Italian phrases?",
				answers: ["yes", "no", "learning"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Familiarize yourself with basic Italian phrases for better communication.",
			},
			{
				question: "Have you checked the local weather forecast?",
				answers: ["yes", "no", "not yet"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Check the weather forecast to pack accordingly for your trip to Italy.",
			},
			{
				question: "Do you know emergency numbers in Italy?",
				answers: ["yes", "no", "researching"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Familiarize yourself with emergency numbers for a safe visit to Italy.",
			},
			{
				question: "Have you planned your itinerary in Italy?",
				answers: ["yes", "no", "working on it"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Plan your itinerary for an organized and enjoyable trip in Italy.",
			},
			{
				question: "Are you aware of local transportation options in Italy?",
				answers: ["yes", "no", "researching"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Know your transportation options for convenient travel within Italy.",
			},
			{
				question: "Have you researched Italian cuisine?",
				answers: ["yes", "no", "excited to try"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Explore and savor the delightful flavors of Italian cuisine.",
			},
			{
				question: "Do you have a power adapter for your devices?",
				answers: ["yes", "no", "need to buy one"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Ensure you have the right power adapter for your devices in Italy.",
			},
			{
				question: "Have you informed your bank about your travel to Italy?",
				answers: ["yes", "no", "not yet"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Notify your bank to avoid any issues with your cards during your trip to Italy.",
			},
			{
				question:
					"Are you familiar with the Italian currency and exchange rates?",
				answers: ["yes", "no", "researching"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Understand the local currency and exchange rates for smoother transactions in Italy.",
			},
			{
				question:
					"Have you packed essentials like comfortable walking shoes and a travel guide?",
				answers: ["yes", "no", "need to buy some"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Pack essential items like comfortable walking shoes and a travel guide for your trip to Italy.",
			},
		],
	},
	{
		route: "turkish-delight-explorer",
		title: "Turkish Delight: Journey Readiness Quiz",
		description:
			"Embark on a captivating journey to Turkey! Assess your travel readiness with our quiz and ensure you're well-prepared to experience the rich history, vibrant culture, and warm hospitality of this fascinating destination.",
		result: 0,
		idx: 0,
		questions: [
			{
				question: "Do you have a valid passport?",
				answers: ["yes", "no", "not sure"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"A valid passport is essential for travel to Turkey.",
			},
			{
				question: "Have you obtained a Turkish visa?",
				answers: ["yes", "no", "in process"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Ensure you have a valid Turkish visa for entry into the country.",
			},
			{
				question: "Have you researched cultural norms in Turkey?",
				answers: ["yes", "no", "in progress"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Familiarize yourself with cultural norms for a respectful visit.",
			},
			{
				question: "Do you have travel insurance for your trip?",
				answers: ["yes", "no", "considering"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Travel insurance is important for a worry-free journey.",
			},
			{
				question: "Are your vaccinations up to date?",
				answers: ["yes", "no", "consulting with doctor"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Ensure your vaccinations are current for a healthy visit.",
			},
			{
				question: "Have you booked your accommodation in Turkey?",
				answers: ["yes", "no", "still deciding"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Secure your accommodation for a comfortable stay in Turkey.",
			},
			{
				question: "Do you know basic Turkish phrases?",
				answers: ["yes", "no", "learning"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Familiarize yourself with basic Turkish phrases for better communication.",
			},
			{
				question: "Have you checked the local weather forecast?",
				answers: ["yes", "no", "not yet"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Check the weather forecast to pack accordingly for your trip to Turkey.",
			},
			{
				question: "Do you know emergency numbers in Turkey?",
				answers: ["yes", "no", "researching"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Familiarize yourself with emergency numbers for a safe visit to Turkey.",
			},
			{
				question: "Have you planned your itinerary in Turkey?",
				answers: ["yes", "no", "working on it"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Plan your itinerary for an organized and enjoyable trip in Turkey.",
			},
			{
				question: "Are you aware of local transportation options in Turkey?",
				answers: ["yes", "no", "researching"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Know your transportation options for convenient travel within Turkey.",
			},
			{
				question: "Have you researched Turkish cuisine?",
				answers: ["yes", "no", "excited to try"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Explore and savor the delightful flavors of Turkish cuisine.",
			},
			{
				question: "Do you have a power adapter for your devices?",
				answers: ["yes", "no", "need to buy one"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Ensure you have the right power adapter for your devices in Turkey.",
			},
			{
				question: "Have you informed your bank about your travel to Turkey?",
				answers: ["yes", "no", "not yet"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Notify your bank to avoid any issues with your cards during your trip to Turkey.",
			},
			{
				question:
					"Are you familiar with popular tourist attractions in Turkey?",
				answers: ["yes", "no", "researching"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Explore famous attractions for a memorable journey in Turkey.",
			},
		],
	},
	{
		route: "german-adventure-quiz",
		title: "Discover Deutschland: Journey Readiness Quiz",
		description:
			"Embark on a German adventure! Evaluate your travel readiness with our quiz and ensure you're well-prepared to explore the rich history, vibrant culture, and picturesque landscapes of Germany.",
		result: 0,
		idx: 0,
		questions: [
			{
				question: "Do you have a valid passport?",
				answers: ["yes", "no", "not sure"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"A valid passport is essential for travel to Germany.",
			},
			{
				question: "Have you checked if you need a visa for Germany?",
				answers: ["yes", "no", "in process"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Ensure you have the necessary visa for entry into Germany.",
			},
			{
				question: "Have you researched German customs and etiquette?",
				answers: ["yes", "no", "in progress"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Familiarize yourself with German customs for a respectful visit.",
			},
			{
				question: "Do you have travel insurance for your trip?",
				answers: ["yes", "no", "considering"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Travel insurance is important for a worry-free journey.",
			},
			{
				question: "Are your vaccinations up to date?",
				answers: ["yes", "no", "consulting with doctor"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Ensure your vaccinations are current for a healthy visit.",
			},
			{
				question: "Have you booked your accommodation in Germany?",
				answers: ["yes", "no", "still deciding"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Secure your accommodation for a comfortable stay in Germany.",
			},
			{
				question: "Do you know basic German phrases?",
				answers: ["yes", "no", "learning"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Familiarize yourself with basic German phrases for better communication.",
			},
			{
				question: "Have you checked the local weather forecast?",
				answers: ["yes", "no", "not yet"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Check the weather forecast to pack accordingly for your trip to Germany.",
			},
			{
				question: "Do you know emergency numbers in Germany?",
				answers: ["yes", "no", "researching"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Familiarize yourself with emergency numbers for a safe visit to Germany.",
			},
			{
				question: "Have you planned your itinerary in Germany?",
				answers: ["yes", "no", "working on it"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Plan your itinerary for an organized and enjoyable trip in Germany.",
			},
			{
				question: "Are you aware of local transportation options in Germany?",
				answers: ["yes", "no", "researching"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Know your transportation options for convenient travel within Germany.",
			},
			{
				question: "Have you researched German cuisine?",
				answers: ["yes", "no", "excited to try"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Explore and savor the delightful flavors of German cuisine.",
			},
			{
				question: "Do you have a power adapter for your devices?",
				answers: ["yes", "no", "need to buy one"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Ensure you have the right power adapter for your devices in Germany.",
			},
			{
				question: "Have you informed your bank about your travel to Germany?",
				answers: ["yes", "no", "not yet"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Notify your bank to avoid any issues with your cards during your trip to Germany.",
			},
			{
				question:
					"Are you familiar with popular tourist attractions in Germany?",
				answers: ["yes", "no", "researching"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Explore famous attractions for a memorable journey in Germany.",
			},
		],
	},
	{
		route: "british-explorer-quiz",
		title: "Britannia Unveiled: UK Travel Readiness Quiz",
		description:
			"Embark on an extraordinary journey to the United Kingdom! Evaluate your travel readiness with our quiz and ensure you're well-prepared to explore the history, culture, and charm of this diverse and fascinating destination.",
		result: 0,
		idx: 0,
		questions: [
			{
				question: "Do you have a valid passport?",
				answers: ["yes", "no", "not sure"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"A valid passport is essential for travel to the United Kingdom.",
			},
			{
				question: "Have you checked if you need a visa for the UK?",
				answers: ["yes", "no", "in process"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Ensure you have the necessary visa for entry into the United Kingdom.",
			},
			{
				question: "Have you researched British customs and etiquette?",
				answers: ["yes", "no", "in progress"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Familiarize yourself with British customs for a respectful visit.",
			},
			{
				question: "Do you have travel insurance for your trip?",
				answers: ["yes", "no", "considering"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Travel insurance is important for a worry-free journey.",
			},
			{
				question: "Are your vaccinations up to date?",
				answers: ["yes", "no", "consulting with doctor"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Ensure your vaccinations are current for a healthy visit.",
			},
			{
				question: "Have you booked your accommodation in the UK?",
				answers: ["yes", "no", "still deciding"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Secure your accommodation for a comfortable stay in the United Kingdom.",
			},
			{
				question: "Do you know basic British phrases?",
				answers: ["yes", "no", "learning"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Familiarize yourself with basic British phrases for better communication.",
			},
			{
				question: "Have you checked the local weather forecast?",
				answers: ["yes", "no", "not yet"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Check the weather forecast to pack accordingly for your trip to the UK.",
			},
			{
				question: "Do you know emergency numbers in the UK?",
				answers: ["yes", "no", "researching"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Familiarize yourself with emergency numbers for a safe visit to the United Kingdom.",
			},
			{
				question: "Have you planned your itinerary in the UK?",
				answers: ["yes", "no", "working on it"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Plan your itinerary for an organized and enjoyable trip in the United Kingdom.",
			},
			{
				question: "Are you aware of local transportation options in the UK?",
				answers: ["yes", "no", "researching"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Know your transportation options for convenient travel within the United Kingdom.",
			},
			{
				question: "Have you researched British cuisine?",
				answers: ["yes", "no", "excited to try"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Explore and savor the delightful flavors of British cuisine.",
			},
			{
				question: "Do you have a power adapter for your devices?",
				answers: ["yes", "no", "need to buy one"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Ensure you have the right power adapter for your devices in the United Kingdom.",
			},
			{
				question: "Have you informed your bank about your travel to the UK?",
				answers: ["yes", "no", "not yet"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Notify your bank to avoid any issues with your cards during your trip to the United Kingdom.",
			},
			{
				question:
					"Are you familiar with popular tourist attractions in the UK?",
				answers: ["yes", "no", "researching"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Explore famous attractions for a memorable journey in the United Kingdom.",
			},
		],
	},
	{
		route: "mexican-explorer-quiz",
		title: "¡Viva México! Travel Readiness Quiz",
		description:
			"Embark on a vibrant journey to Mexico! Evaluate your travel readiness with our quiz and ensure you're well-prepared to experience the rich culture, stunning landscapes, and warm hospitality of this lively destination.",
		result: 0,
		idx: 0,
		questions: [
			{
				question: "Do you have a valid passport?",
				answers: ["yes", "no", "not sure"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"A valid passport is essential for travel to Mexico.",
			},
			{
				question: "Have you checked if you need a visa for Mexico?",
				answers: ["yes", "no", "in process"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Ensure you have the necessary visa for entry into Mexico.",
			},
			{
				question: "Have you researched Mexican customs and etiquette?",
				answers: ["yes", "no", "in progress"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Familiarize yourself with Mexican customs for a respectful visit.",
			},
			{
				question: "Do you have travel insurance for your trip?",
				answers: ["yes", "no", "considering"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Travel insurance is important for a worry-free journey.",
			},
			{
				question: "Are your vaccinations up to date?",
				answers: ["yes", "no", "consulting with doctor"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Ensure your vaccinations are current for a healthy visit.",
			},
			{
				question: "Have you booked your accommodation in Mexico?",
				answers: ["yes", "no", "still deciding"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Secure your accommodation for a comfortable stay in Mexico.",
			},
			{
				question: "Do you know basic Spanish phrases?",
				answers: ["yes", "no", "learning"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Familiarize yourself with basic Spanish phrases for better communication.",
			},
			{
				question: "Have you checked the local weather forecast?",
				answers: ["yes", "no", "not yet"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Check the weather forecast to pack accordingly for your trip to Mexico.",
			},
			{
				question: "Do you know emergency numbers in Mexico?",
				answers: ["yes", "no", "researching"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Familiarize yourself with emergency numbers for a safe visit to Mexico.",
			},
			{
				question: "Have you planned your itinerary in Mexico?",
				answers: ["yes", "no", "working on it"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Plan your itinerary for an organized and enjoyable trip in Mexico.",
			},
			{
				question: "Are you aware of local transportation options in Mexico?",
				answers: ["yes", "no", "researching"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Know your transportation options for convenient travel within Mexico.",
			},
			{
				question: "Have you researched Mexican cuisine?",
				answers: ["yes", "no", "excited to try"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Explore and savor the delightful flavors of Mexican cuisine.",
			},
			{
				question: "Do you have a power adapter for your devices?",
				answers: ["yes", "no", "need to buy one"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Ensure you have the right power adapter for your devices in Mexico.",
			},
			{
				question: "Have you informed your bank about your travel to Mexico?",
				answers: ["yes", "no", "not yet"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Notify your bank to avoid any issues with your cards during your trip to Mexico.",
			},
			{
				question:
					"Are you familiar with popular tourist attractions in Mexico?",
				answers: ["yes", "no", "researching"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Explore famous attractions for a memorable journey in Mexico.",
			},
		],
	},
	{
		route: "thai-adventure-quiz",
		title: "Thailand Odyssey: Journey Readiness Quiz",
		description:
			"Embark on an exotic adventure to Thailand! Evaluate your travel readiness with our quiz and ensure you're well-prepared to immerse yourself in the vibrant culture, stunning landscapes, and warm hospitality of this enchanting destination.",
		result: 0,
		idx: 0,
		questions: [
			{
				question: "Do you have a valid passport?",
				answers: ["yes", "no", "not sure"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"A valid passport is essential for travel to Thailand.",
			},
			{
				question: "Have you checked if you need a visa for Thailand?",
				answers: ["yes", "no", "in process"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Ensure you have the necessary visa for entry into Thailand.",
			},
			{
				question: "Have you researched Thai customs and etiquette?",
				answers: ["yes", "no", "in progress"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Familiarize yourself with Thai customs for a respectful visit.",
			},
			{
				question: "Do you have travel insurance for your trip?",
				answers: ["yes", "no", "considering"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Travel insurance is important for a worry-free journey.",
			},
			{
				question: "Are your vaccinations up to date?",
				answers: ["yes", "no", "consulting with doctor"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Ensure your vaccinations are current for a healthy visit.",
			},
			{
				question: "Have you booked your accommodation in Thailand?",
				answers: ["yes", "no", "still deciding"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Secure your accommodation for a comfortable stay in Thailand.",
			},
			{
				question: "Do you know basic Thai phrases?",
				answers: ["yes", "no", "learning"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Familiarize yourself with basic Thai phrases for better communication.",
			},
			{
				question: "Have you checked the local weather forecast?",
				answers: ["yes", "no", "not yet"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Check the weather forecast to pack accordingly for your trip to Thailand.",
			},
			{
				question: "Do you know emergency numbers in Thailand?",
				answers: ["yes", "no", "researching"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Familiarize yourself with emergency numbers for a safe visit to Thailand.",
			},
			{
				question: "Have you planned your itinerary in Thailand?",
				answers: ["yes", "no", "working on it"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Plan your itinerary for an organized and enjoyable trip in Thailand.",
			},
			{
				question: "Are you aware of local transportation options in Thailand?",
				answers: ["yes", "no", "researching"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Know your transportation options for convenient travel within Thailand.",
			},
			{
				question: "Have you researched Thai cuisine?",
				answers: ["yes", "no", "excited to try"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Explore and savor the delightful flavors of Thai cuisine.",
			},
			{
				question: "Do you have a power adapter for your devices?",
				answers: ["yes", "no", "need to buy one"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Ensure you have the right power adapter for your devices in Thailand.",
			},
			{
				question: "Have you informed your bank about your travel to Thailand?",
				answers: ["yes", "no", "not yet"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Notify your bank to avoid any issues with your cards during your trip to Thailand.",
			},
			{
				question:
					"Are you familiar with popular tourist attractions in Thailand?",
				answers: ["yes", "no", "researching"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Explore famous attractions for a memorable journey in Thailand.",
			},
		],
	},
	{
		route: "alpine-explorer-quiz",
		title: "Alpine Adventure: Austria Travel Readiness Quiz",
		description:
			"Embark on a picturesque journey to Austria! Assess your travel readiness with our quiz and ensure you're well-prepared to experience the charm of the Alps, rich cultural heritage, and delightful Austrian hospitality.",
		result: 0,
		idx: 0,
		questions: [
			{
				question: "Do you have a valid passport?",
				answers: ["yes", "no", "not sure"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"A valid passport is essential for travel to Austria.",
			},
			{
				question: "Have you checked if you need a visa for Austria?",
				answers: ["yes", "no", "in process"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Ensure you have the necessary visa for entry into Austria.",
			},
			{
				question: "Have you researched Austrian customs and etiquette?",
				answers: ["yes", "no", "in progress"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Familiarize yourself with Austrian customs for a respectful visit.",
			},
			{
				question: "Do you have travel insurance for your trip?",
				answers: ["yes", "no", "considering"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Travel insurance is important for a worry-free journey.",
			},
			{
				question: "Are your vaccinations up to date?",
				answers: ["yes", "no", "consulting with doctor"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Ensure your vaccinations are current for a healthy visit.",
			},
			{
				question: "Have you booked your accommodation in Austria?",
				answers: ["yes", "no", "still deciding"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Secure your accommodation for a comfortable stay in Austria.",
			},
			{
				question:
					"Do you know basic German phrases? (Austrian official language)",
				answers: ["yes", "no", "learning"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Familiarize yourself with basic German phrases for better communication in Austria.",
			},
			{
				question: "Have you checked the local weather forecast?",
				answers: ["yes", "no", "not yet"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Check the weather forecast to pack accordingly for your trip to Austria.",
			},
			{
				question: "Do you know emergency numbers in Austria?",
				answers: ["yes", "no", "researching"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Familiarize yourself with emergency numbers for a safe visit to Austria.",
			},
			{
				question: "Have you planned your itinerary in Austria?",
				answers: ["yes", "no", "working on it"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Plan your itinerary for an organized and enjoyable trip in Austria.",
			},
			{
				question: "Are you aware of local transportation options in Austria?",
				answers: ["yes", "no", "researching"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Know your transportation options for convenient travel within Austria.",
			},
			{
				question: "Have you researched Austrian cuisine?",
				answers: ["yes", "no", "excited to try"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Explore and savor the delightful flavors of Austrian cuisine.",
			},
			{
				question: "Do you have a power adapter for your devices?",
				answers: ["yes", "no", "need to buy one"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Ensure you have the right power adapter for your devices in Austria.",
			},
			{
				question: "Have you informed your bank about your travel to Austria?",
				answers: ["yes", "no", "not yet"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Notify your bank to avoid any issues with your cards during your trip to Austria.",
			},
			{
				question:
					"Are you familiar with popular tourist attractions in Austria?",
				answers: ["yes", "no", "researching"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Explore famous attractions for a memorable journey in Austria.",
			},
		],
	},
	{
		route: "japanese-discovery-quiz",
		title: "Land of the Rising Sun: Japan Travel Readiness Quiz",
		description:
			"Embark on a cultural odyssey to Japan! Assess your travel readiness with our quiz and ensure you're well-prepared to explore the ancient traditions, modern marvels, and unique charm of the Land of the Rising Sun.",
		result: 0,
		idx: 0,
		questions: [
			{
				question: "Do you have a valid passport?",
				answers: ["yes", "no", "not sure"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"A valid passport is essential for travel to Japan.",
			},
			{
				question: "Have you checked if you need a visa for Japan?",
				answers: ["yes", "no", "in process"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Ensure you have the necessary visa for entry into Japan.",
			},
			{
				question: "Have you researched Japanese customs and etiquette?",
				answers: ["yes", "no", "in progress"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Familiarize yourself with Japanese customs for a respectful visit.",
			},
			{
				question: "Do you have travel insurance for your trip?",
				answers: ["yes", "no", "considering"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Travel insurance is important for a worry-free journey.",
			},
			{
				question: "Are your vaccinations up to date?",
				answers: ["yes", "no", "consulting with doctor"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Ensure your vaccinations are current for a healthy visit.",
			},
			{
				question: "Have you booked your accommodation in Japan?",
				answers: ["yes", "no", "still deciding"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Secure your accommodation for a comfortable stay in Japan.",
			},
			{
				question: "Do you know basic Japanese phrases?",
				answers: ["yes", "no", "learning"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Familiarize yourself with basic Japanese phrases for better communication.",
			},
			{
				question: "Have you checked the local weather forecast?",
				answers: ["yes", "no", "not yet"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Check the weather forecast to pack accordingly for your trip to Japan.",
			},
			{
				question: "Do you know emergency numbers in Japan?",
				answers: ["yes", "no", "researching"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Familiarize yourself with emergency numbers for a safe visit to Japan.",
			},
			{
				question: "Have you planned your itinerary in Japan?",
				answers: ["yes", "no", "working on it"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Plan your itinerary for an organized and enjoyable trip in Japan.",
			},
			{
				question: "Are you aware of local transportation options in Japan?",
				answers: ["yes", "no", "researching"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Know your transportation options for convenient travel within Japan.",
			},
			{
				question: "Have you researched Japanese cuisine?",
				answers: ["yes", "no", "excited to try"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Explore and savor the delightful flavors of Japanese cuisine.",
			},
			{
				question: "Do you have a power adapter for your devices?",
				answers: ["yes", "no", "need to buy one"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Ensure you have the right power adapter for your devices in Japan.",
			},
			{
				question: "Have you informed your bank about your travel to Japan?",
				answers: ["yes", "no", "not yet"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Notify your bank to avoid any issues with your cards during your trip to Japan.",
			},
			{
				question: "Are you familiar with popular tourist attractions in Japan?",
				answers: ["yes", "no", "researching"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Explore famous attractions for a memorable journey in Japan.",
			},
		],
	},
	{
		route: "malaysian-explorer-quiz",
		title: "Malaysian Mystique: Journey Readiness Quiz",
		description:
			"Embark on a mystical journey to Malaysia! Evaluate your travel readiness with our quiz and ensure you're well-prepared to experience the diverse culture, stunning landscapes, and warm hospitality of this enchanting destination.",
		result: 0,
		idx: 0,
		questions: [
			{
				question: "Do you have a valid passport?",
				answers: ["yes", "no", "not sure"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"A valid passport is essential for travel to Malaysia.",
			},
			{
				question: "Have you checked if you need a visa for Malaysia?",
				answers: ["yes", "no", "in process"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Ensure you have the necessary visa for entry into Malaysia.",
			},
			{
				question: "Have you researched Malaysian customs and etiquette?",
				answers: ["yes", "no", "in progress"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Familiarize yourself with Malaysian customs for a respectful visit.",
			},
			{
				question: "Do you have travel insurance for your trip?",
				answers: ["yes", "no", "considering"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Travel insurance is important for a worry-free journey.",
			},
			{
				question: "Are your vaccinations up to date?",
				answers: ["yes", "no", "consulting with doctor"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Ensure your vaccinations are current for a healthy visit.",
			},
			{
				question: "Have you booked your accommodation in Malaysia?",
				answers: ["yes", "no", "still deciding"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Secure your accommodation for a comfortable stay in Malaysia.",
			},
			{
				question: "Do you know basic Malay phrases?",
				answers: ["yes", "no", "learning"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Familiarize yourself with basic Malay phrases for better communication.",
			},
			{
				question: "Have you checked the local weather forecast?",
				answers: ["yes", "no", "not yet"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Check the weather forecast to pack accordingly for your trip to Malaysia.",
			},
			{
				question: "Do you know emergency numbers in Malaysia?",
				answers: ["yes", "no", "researching"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Familiarize yourself with emergency numbers for a safe visit to Malaysia.",
			},
			{
				question: "Have you planned your itinerary in Malaysia?",
				answers: ["yes", "no", "working on it"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Plan your itinerary for an organized and enjoyable trip in Malaysia.",
			},
			{
				question: "Are you aware of local transportation options in Malaysia?",
				answers: ["yes", "no", "researching"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Know your transportation options for convenient travel within Malaysia.",
			},
			{
				question: "Have you researched Malaysian cuisine?",
				answers: ["yes", "no", "excited to try"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Explore and savor the delightful flavors of Malaysian cuisine.",
			},
			{
				question: "Do you have a power adapter for your devices?",
				answers: ["yes", "no", "need to buy one"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Ensure you have the right power adapter for your devices in Malaysia.",
			},
			{
				question: "Have you informed your bank about your travel to Malaysia?",
				answers: ["yes", "no", "not yet"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Notify your bank to avoid any issues with your cards during your trip to Malaysia.",
			},
			{
				question:
					"Are you familiar with popular tourist attractions in Malaysia?",
				answers: ["yes", "no", "researching"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Explore famous attractions for a memorable journey in Malaysia.",
			},
		],
	},
	{
		route: "maple-adventure-quiz",
		title: "Canadian Wilderness Explorer: Journey Readiness Quiz",
		description:
			"Embark on a journey to the heart of Canada! Evaluate your travel readiness with our quiz and ensure you're well-prepared to explore the vast wilderness, diverse culture, and friendly hospitality of this captivating destination.",
		result: 0,
		idx: 0,
		questions: [
			{
				question: "Do you have a valid passport?",
				answers: ["yes", "no", "not sure"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"A valid passport is essential for travel to Canada.",
			},
			{
				question: "Have you checked if you need a visa for Canada?",
				answers: ["yes", "no", "in process"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Ensure you have the necessary visa for entry into Canada.",
			},
			{
				question: "Have you researched Canadian customs and etiquette?",
				answers: ["yes", "no", "in progress"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Familiarize yourself with Canadian customs for a respectful visit.",
			},
			{
				question: "Do you have travel insurance for your trip?",
				answers: ["yes", "no", "considering"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Travel insurance is important for a worry-free journey.",
			},
			{
				question: "Are your vaccinations up to date?",
				answers: ["yes", "no", "consulting with doctor"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Ensure your vaccinations are current for a healthy visit.",
			},
			{
				question: "Have you booked your accommodation in Canada?",
				answers: ["yes", "no", "still deciding"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Secure your accommodation for a comfortable stay in Canada.",
			},
			{
				question: "Do you know basic French phrases? (if visiting Quebec)",
				answers: ["yes", "no", "learning"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Familiarize yourself with basic French phrases for better communication in Quebec, Canada.",
			},
			{
				question: "Have you checked the local weather forecast?",
				answers: ["yes", "no", "not yet"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Check the weather forecast to pack accordingly for your trip to Canada.",
			},
			{
				question: "Do you know emergency numbers in Canada?",
				answers: ["yes", "no", "researching"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Familiarize yourself with emergency numbers for a safe visit to Canada.",
			},
			{
				question: "Have you planned your itinerary in Canada?",
				answers: ["yes", "no", "working on it"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Plan your itinerary for an organized and enjoyable trip in Canada.",
			},
			{
				question: "Are you aware of local transportation options in Canada?",
				answers: ["yes", "no", "researching"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Know your transportation options for convenient travel within Canada.",
			},
			{
				question: "Have you researched Canadian cuisine?",
				answers: ["yes", "no", "excited to try"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Explore and savor the delightful flavors of Canadian cuisine.",
			},
			{
				question: "Do you have a power adapter for your devices?",
				answers: ["yes", "no", "need to buy one"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Ensure you have the right power adapter for your devices in Canada.",
			},
			{
				question: "Have you informed your bank about your travel to Canada?",
				answers: ["yes", "no", "not yet"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Notify your bank to avoid any issues with your cards during your trip to Canada.",
			},
			{
				question:
					"Are you familiar with popular tourist attractions in Canada?",
				answers: ["yes", "no", "researching"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Explore famous attractions for a memorable journey in Canada.",
			},
		],
	},
	{
		route: "russian-adventure-quiz",
		title: "Russian Expedition: Journey Readiness Quiz",
		description:
			"Embark on an epic adventure to Russia! Evaluate your travel readiness with our quiz and ensure you're well-prepared to explore the vast landscapes, rich history, and unique culture of this enigmatic destination.",
		result: 0,
		idx: 0,
		questions: [
			{
				question: "Do you have a valid passport?",
				answers: ["yes", "no", "not sure"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"A valid passport is essential for travel to Russia.",
			},
			{
				question: "Have you checked if you need a visa for Russia?",
				answers: ["yes", "no", "in process"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Ensure you have the necessary visa for entry into Russia.",
			},
			{
				question: "Have you researched Russian customs and etiquette?",
				answers: ["yes", "no", "in progress"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Familiarize yourself with Russian customs for a respectful visit.",
			},
			{
				question: "Do you have travel insurance for your trip?",
				answers: ["yes", "no", "considering"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Travel insurance is important for a worry-free journey.",
			},
			{
				question: "Are your vaccinations up to date?",
				answers: ["yes", "no", "consulting with doctor"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Ensure your vaccinations are current for a healthy visit.",
			},
			{
				question: "Have you booked your accommodation in Russia?",
				answers: ["yes", "no", "still deciding"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Secure your accommodation for a comfortable stay in Russia.",
			},
			{
				question: "Do you know basic Russian phrases?",
				answers: ["yes", "no", "learning"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Familiarize yourself with basic Russian phrases for better communication.",
			},
			{
				question: "Have you checked the local weather forecast?",
				answers: ["yes", "no", "not yet"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Check the weather forecast to pack accordingly for your trip to Russia.",
			},
			{
				question: "Do you know emergency numbers in Russia?",
				answers: ["yes", "no", "researching"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Familiarize yourself with emergency numbers for a safe visit to Russia.",
			},
			{
				question: "Have you planned your itinerary in Russia?",
				answers: ["yes", "no", "working on it"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Plan your itinerary for an organized and enjoyable trip in Russia.",
			},
			{
				question: "Are you aware of local transportation options in Russia?",
				answers: ["yes", "no", "researching"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Know your transportation options for convenient travel within Russia.",
			},
			{
				question: "Have you researched Russian cuisine?",
				answers: ["yes", "no", "excited to try"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Explore and savor the delightful flavors of Russian cuisine.",
			},
			{
				question: "Do you have a power adapter for your devices?",
				answers: ["yes", "no", "need to buy one"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Ensure you have the right power adapter for your devices in Russia.",
			},
			{
				question: "Have you informed your bank about your travel to Russia?",
				answers: ["yes", "no", "not yet"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Notify your bank to avoid any issues with your cards during your trip to Russia.",
			},
			{
				question:
					"Are you familiar with popular tourist attractions in Russia?",
				answers: ["yes", "no", "researching"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Explore famous attractions for a memorable journey in Russia.",
			},
		],
	},
	{
		route: "greek-odyssey-quiz",
		title: "Greek Odyssey: Journey Readiness Quiz",
		description:
			"Embark on a mythical journey to Greece! Evaluate your travel readiness with our quiz and ensure you're well-prepared to explore the ancient wonders, sun-kissed landscapes, and warm hospitality of this timeless destination.",
		result: 0,
		idx: 0,
		questions: [
			{
				question: "Do you have a valid passport?",
				answers: ["yes", "no", "not sure"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"A valid passport is essential for travel to Greece.",
			},
			{
				question: "Have you checked if you need a visa for Greece?",
				answers: ["yes", "no", "in process"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Ensure you have the necessary visa for entry into Greece.",
			},
			{
				question: "Have you researched Greek customs and etiquette?",
				answers: ["yes", "no", "in progress"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Familiarize yourself with Greek customs for a respectful visit.",
			},
			{
				question: "Do you have travel insurance for your trip?",
				answers: ["yes", "no", "considering"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Travel insurance is important for a worry-free journey.",
			},
			{
				question: "Are your vaccinations up to date?",
				answers: ["yes", "no", "consulting with doctor"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Ensure your vaccinations are current for a healthy visit.",
			},
			{
				question: "Have you booked your accommodation in Greece?",
				answers: ["yes", "no", "still deciding"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Secure your accommodation for a comfortable stay in Greece.",
			},
			{
				question: "Do you know basic Greek phrases?",
				answers: ["yes", "no", "learning"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Familiarize yourself with basic Greek phrases for better communication.",
			},
			{
				question: "Have you checked the local weather forecast?",
				answers: ["yes", "no", "not yet"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Check the weather forecast to pack accordingly for your trip to Greece.",
			},
			{
				question: "Do you know emergency numbers in Greece?",
				answers: ["yes", "no", "researching"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Familiarize yourself with emergency numbers for a safe visit to Greece.",
			},
			{
				question: "Have you planned your itinerary in Greece?",
				answers: ["yes", "no", "working on it"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Plan your itinerary for an organized and enjoyable trip in Greece.",
			},
			{
				question: "Are you aware of local transportation options in Greece?",
				answers: ["yes", "no", "researching"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Know your transportation options for convenient travel within Greece.",
			},
			{
				question: "Have you researched Greek cuisine?",
				answers: ["yes", "no", "excited to try"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Explore and savor the delightful flavors of Greek cuisine.",
			},
			{
				question: "Do you have a power adapter for your devices?",
				answers: ["yes", "no", "need to buy one"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Ensure you have the right power adapter for your devices in Greece.",
			},
			{
				question: "Have you informed your bank about your travel to Greece?",
				answers: ["yes", "no", "not yet"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Notify your bank to avoid any issues with your cards during your trip to Greece.",
			},
			{
				question:
					"Are you familiar with popular tourist attractions in Greece?",
				answers: ["yes", "no", "researching"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Explore famous attractions for a memorable journey in Greece.",
			},
		],
	},
	{
		route: "korean-adventure-quiz",
		title: "Korean Discovery: Journey Readiness Quiz",
		description:
			"Embark on a captivating journey to South Korea! Evaluate your travel readiness with our quiz and ensure you're well-prepared to explore the vibrant culture, modern wonders, and warm hospitality of this dynamic destination.",
		result: 0,
		idx: 0,
		questions: [
			{
				question: "Do you have a valid passport?",
				answers: ["yes", "no", "not sure"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"A valid passport is essential for travel to South Korea.",
			},
			{
				question: "Have you checked if you need a visa for South Korea?",
				answers: ["yes", "no", "in process"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Ensure you have the necessary visa for entry into South Korea.",
			},
			{
				question: "Have you researched Korean customs and etiquette?",
				answers: ["yes", "no", "in progress"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Familiarize yourself with Korean customs for a respectful visit.",
			},
			{
				question: "Do you have travel insurance for your trip?",
				answers: ["yes", "no", "considering"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Travel insurance is important for a worry-free journey.",
			},
			{
				question: "Are your vaccinations up to date?",
				answers: ["yes", "no", "consulting with doctor"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Ensure your vaccinations are current for a healthy visit.",
			},
			{
				question: "Have you booked your accommodation in South Korea?",
				answers: ["yes", "no", "still deciding"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Secure your accommodation for a comfortable stay in South Korea.",
			},
			{
				question: "Do you know basic Korean phrases?",
				answers: ["yes", "no", "learning"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Familiarize yourself with basic Korean phrases for better communication.",
			},
			{
				question: "Have you checked the local weather forecast?",
				answers: ["yes", "no", "not yet"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Check the weather forecast to pack accordingly for your trip to South Korea.",
			},
			{
				question: "Do you know emergency numbers in South Korea?",
				answers: ["yes", "no", "researching"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Familiarize yourself with emergency numbers for a safe visit to South Korea.",
			},
			{
				question: "Have you planned your itinerary in South Korea?",
				answers: ["yes", "no", "working on it"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Plan your itinerary for an organized and enjoyable trip in South Korea.",
			},
			{
				question:
					"Are you aware of local transportation options in South Korea?",
				answers: ["yes", "no", "researching"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Know your transportation options for convenient travel within South Korea.",
			},
			{
				question: "Have you researched Korean cuisine?",
				answers: ["yes", "no", "excited to try"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Explore and savor the delightful flavors of Korean cuisine.",
			},
			{
				question: "Do you have a power adapter for your devices?",
				answers: ["yes", "no", "need to buy one"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Ensure you have the right power adapter for your devices in South Korea.",
			},
			{
				question:
					"Have you informed your bank about your travel to South Korea?",
				answers: ["yes", "no", "not yet"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Notify your bank to avoid any issues with your cards during your trip to South Korea.",
			},
			{
				question:
					"Are you familiar with popular tourist attractions in South Korea?",
				answers: ["yes", "no", "researching"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Explore famous attractions for a memorable journey in South Korea.",
			},
		],
	},
	{
		route: "brazilian-exploration-quiz",
		title: "Brazilian Exploration: Journey Readiness Quiz",
		description:
			"Embark on an exciting journey to Brazil! Evaluate your travel readiness with our quiz and ensure you're well-prepared to discover the breathtaking landscapes, vibrant culture, and sizzling energy of this diverse and enchanting country.",
		result: 0,
		idx: 0,
		questions: [
			{
				question: "Do you have a valid passport?",
				answers: ["yes", "no", "not sure"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"A valid passport is essential for travel to Brazil.",
			},
			{
				question: "Have you checked if you need a visa for Brazil?",
				answers: ["yes", "no", "in process"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Ensure you have the necessary visa for entry into Brazil.",
			},
			{
				question: "Have you researched Brazilian customs and etiquette?",
				answers: ["yes", "no", "in progress"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Familiarize yourself with Brazilian customs for a respectful visit.",
			},
			{
				question: "Do you have travel insurance for your trip?",
				answers: ["yes", "no", "considering"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Travel insurance is important for a worry-free journey.",
			},
			{
				question: "Are your vaccinations up to date?",
				answers: ["yes", "no", "consulting with doctor"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Ensure your vaccinations are current for a healthy visit.",
			},
			{
				question: "Have you booked your accommodation in Brazil?",
				answers: ["yes", "no", "still deciding"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Secure your accommodation for a comfortable stay in Brazil.",
			},
			{
				question: "Do you know basic Portuguese phrases?",
				answers: ["yes", "no", "learning"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Familiarize yourself with basic Portuguese phrases for better communication.",
			},
			{
				question: "Have you checked the local weather forecast?",
				answers: ["yes", "no", "not yet"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Check the weather forecast to pack accordingly for your trip to Brazil.",
			},
			{
				question: "Do you know emergency numbers in Brazil?",
				answers: ["yes", "no", "researching"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Familiarize yourself with emergency numbers for a safe visit to Brazil.",
			},
			{
				question: "Have you planned your itinerary in Brazil?",
				answers: ["yes", "no", "working on it"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Plan your itinerary for an organized and enjoyable trip in Brazil.",
			},
			{
				question: "Are you aware of local transportation options in Brazil?",
				answers: ["yes", "no", "researching"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Know your transportation options for convenient travel within Brazil.",
			},
			{
				question: "Have you researched Brazilian cuisine?",
				answers: ["yes", "no", "excited to try"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Explore and savor the delightful flavors of Brazilian cuisine.",
			},
			{
				question: "Do you have a power adapter for your devices?",
				answers: ["yes", "no", "need to buy one"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Ensure you have the right power adapter for your devices in Brazil.",
			},
			{
				question: "Have you informed your bank about your travel to Brazil?",
				answers: ["yes", "no", "not yet"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Notify your bank to avoid any issues with your cards during your trip to Brazil.",
			},
			{
				question:
					"Are you familiar with popular tourist attractions in Brazil?",
				answers: ["yes", "no", "researching"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Explore famous attractions for a memorable journey in Brazil.",
			},
		],
	},
	{
		route: "indian-odyssey-quiz",
		title: "Indian Odyssey: Journey Readiness Quiz",
		description:
			"Embark on a fascinating journey to India! Evaluate your travel readiness with our quiz and ensure you're well-prepared to explore the diverse landscapes, rich history, and vibrant culture of this enchanting country.",
		result: 0,
		idx: 0,
		questions: [
			{
				question: "Do you have a valid passport?",
				answers: ["yes", "no", "not sure"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"A valid passport is essential for travel to India.",
			},
			{
				question: "Have you checked if you need a visa for India?",
				answers: ["yes", "no", "in process"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Ensure you have the necessary visa for entry into India.",
			},
			{
				question: "Have you researched Indian customs and etiquette?",
				answers: ["yes", "no", "in progress"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Familiarize yourself with Indian customs for a respectful visit.",
			},
			{
				question: "Do you have travel insurance for your trip?",
				answers: ["yes", "no", "considering"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Travel insurance is important for a worry-free journey.",
			},
			{
				question: "Are your vaccinations up to date?",
				answers: ["yes", "no", "consulting with doctor"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Ensure your vaccinations are current for a healthy visit.",
			},
			{
				question: "Have you booked your accommodation in India?",
				answers: ["yes", "no", "still deciding"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Secure your accommodation for a comfortable stay in India.",
			},
			{
				question:
					"Do you know basic phrases in Hindi or the local language of your destination?",
				answers: ["yes", "no", "learning"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Familiarize yourself with basic phrases for better communication in India.",
			},
			{
				question: "Have you checked the local weather forecast?",
				answers: ["yes", "no", "not yet"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Check the weather forecast to pack accordingly for your trip to India.",
			},
			{
				question: "Do you know emergency numbers in India?",
				answers: ["yes", "no", "researching"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Familiarize yourself with emergency numbers for a safe visit to India.",
			},
			{
				question: "Have you planned your itinerary in India?",
				answers: ["yes", "no", "working on it"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Plan your itinerary for an organized and enjoyable trip in India.",
			},
			{
				question: "Are you aware of local transportation options in India?",
				answers: ["yes", "no", "researching"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Know your transportation options for convenient travel within India.",
			},
			{
				question: "Have you researched Indian cuisine?",
				answers: ["yes", "no", "excited to try"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Explore and savor the delightful flavors of Indian cuisine.",
			},
			{
				question: "Do you have a power adapter for your devices?",
				answers: ["yes", "no", "need to buy one"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Ensure you have the right power adapter for your devices in India.",
			},
			{
				question: "Have you informed your bank about your travel to India?",
				answers: ["yes", "no", "not yet"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Notify your bank to avoid any issues with your cards during your trip to India.",
			},
			{
				question: "Are you familiar with popular tourist attractions in India?",
				answers: ["yes", "no", "researching"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Explore famous attractions for a memorable journey in India.",
			},
		],
	},
	{
		route: "swiss-adventure-quiz",
		title: "Swiss Adventure: Journey Readiness Quiz",
		description:
			"Embark on a breathtaking adventure to Switzerland! Evaluate your travel readiness with our quiz and ensure you're well-prepared to explore the stunning landscapes, pristine Alpine beauty, and charming cities of this enchanting country.",
		result: 0,
		idx: 0,
		questions: [
			{
				question: "Do you have a valid passport?",
				answers: ["yes", "no", "not sure"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"A valid passport is essential for travel to Switzerland.",
			},
			{
				question: "Have you checked if you need a visa for Switzerland?",
				answers: ["yes", "no", "in process"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Ensure you have the necessary visa for entry into Switzerland.",
			},
			{
				question: "Have you researched Swiss customs and etiquette?",
				answers: ["yes", "no", "in progress"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Familiarize yourself with Swiss customs for a respectful visit.",
			},
			{
				question: "Do you have travel insurance for your trip?",
				answers: ["yes", "no", "considering"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Travel insurance is important for a worry-free journey.",
			},
			{
				question: "Are your vaccinations up to date?",
				answers: ["yes", "no", "consulting with doctor"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Ensure your vaccinations are current for a healthy visit.",
			},
			{
				question: "Have you booked your accommodation in Switzerland?",
				answers: ["yes", "no", "still deciding"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Secure your accommodation for a comfortable stay in Switzerland.",
			},
			{
				question: "Do you know basic Swiss German, French, or Italian phrases?",
				answers: ["yes", "no", "learning"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Familiarize yourself with basic phrases for better communication in Switzerland.",
			},
			{
				question: "Have you checked the local weather forecast?",
				answers: ["yes", "no", "not yet"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Check the weather forecast to pack accordingly for your trip to Switzerland.",
			},
			{
				question: "Do you know emergency numbers in Switzerland?",
				answers: ["yes", "no", "researching"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Familiarize yourself with emergency numbers for a safe visit to Switzerland.",
			},
			{
				question: "Have you planned your itinerary in Switzerland?",
				answers: ["yes", "no", "working on it"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Plan your itinerary for an organized and enjoyable trip in Switzerland.",
			},
			{
				question:
					"Are you aware of local transportation options in Switzerland?",
				answers: ["yes", "no", "researching"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Know your transportation options for convenient travel within Switzerland.",
			},
			{
				question: "Have you researched Swiss cuisine?",
				answers: ["yes", "no", "excited to try"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Explore and savor the delightful flavors of Swiss cuisine.",
			},
			{
				question: "Do you have a power adapter for your devices?",
				answers: ["yes", "no", "need to buy one"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Ensure you have the right power adapter for your devices in Switzerland.",
			},
			{
				question:
					"Have you informed your bank about your travel to Switzerland?",
				answers: ["yes", "no", "not yet"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Notify your bank to avoid any issues with your cards during your trip to Switzerland.",
			},
			{
				question:
					"Are you familiar with popular tourist attractions in Switzerland?",
				answers: ["yes", "no", "researching"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Explore famous attractions for a memorable journey in Switzerland.",
			},
		],
	},
	{
		route: "portuguese-exploration-quiz",
		title: "Portuguese Exploration: Journey Readiness Quiz",
		description:
			"Embark on a captivating exploration of Portugal! Evaluate your travel readiness with our quiz and ensure you're well-prepared to discover the historic charm, scenic beauty, and vibrant culture of this enchanting destination.",
		result: 0,
		idx: 0,
		questions: [
			{
				question: "Do you have a valid passport?",
				answers: ["yes", "no", "not sure"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"A valid passport is essential for travel to Portugal.",
			},
			{
				question: "Have you checked if you need a visa for Portugal?",
				answers: ["yes", "no", "in process"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Ensure you have the necessary visa for entry into Portugal.",
			},
			{
				question: "Have you researched Portuguese customs and etiquette?",
				answers: ["yes", "no", "in progress"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Familiarize yourself with Portuguese customs for a respectful visit.",
			},
			{
				question: "Do you have travel insurance for your trip?",
				answers: ["yes", "no", "considering"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Travel insurance is important for a worry-free journey.",
			},
			{
				question: "Are your vaccinations up to date?",
				answers: ["yes", "no", "consulting with doctor"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Ensure your vaccinations are current for a healthy visit.",
			},
			{
				question: "Have you booked your accommodation in Portugal?",
				answers: ["yes", "no", "still deciding"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Secure your accommodation for a comfortable stay in Portugal.",
			},
			{
				question: "Do you know basic Portuguese phrases?",
				answers: ["yes", "no", "learning"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Familiarize yourself with basic Portuguese phrases for better communication.",
			},
			{
				question: "Have you checked the local weather forecast?",
				answers: ["yes", "no", "not yet"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Check the weather forecast to pack accordingly for your trip to Portugal.",
			},
			{
				question: "Do you know emergency numbers in Portugal?",
				answers: ["yes", "no", "researching"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Familiarize yourself with emergency numbers for a safe visit to Portugal.",
			},
			{
				question: "Have you planned your itinerary in Portugal?",
				answers: ["yes", "no", "working on it"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Plan your itinerary for an organized and enjoyable trip in Portugal.",
			},
			{
				question: "Are you aware of local transportation options in Portugal?",
				answers: ["yes", "no", "researching"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Know your transportation options for convenient travel within Portugal.",
			},
			{
				question: "Have you researched Portuguese cuisine?",
				answers: ["yes", "no", "excited to try"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Explore and savor the delightful flavors of Portuguese cuisine.",
			},
			{
				question: "Do you have a power adapter for your devices?",
				answers: ["yes", "no", "need to buy one"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Ensure you have the right power adapter for your devices in Portugal.",
			},
			{
				question: "Have you informed your bank about your travel to Portugal?",
				answers: ["yes", "no", "not yet"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Notify your bank to avoid any issues with your cards during your trip to Portugal.",
			},
			{
				question:
					"Are you familiar with popular tourist attractions in Portugal?",
				answers: ["yes", "no", "researching"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Explore famous attractions for a memorable journey in Portugal.",
			},
		],
	},
	{
		route: "swedish-exploration-quiz",
		title: "Swedish Exploration: Journey Readiness Quiz",
		description:
			"Embark on a captivating exploration of Sweden! Evaluate your travel readiness with our quiz and ensure you're well-prepared to discover the scenic landscapes, cultural richness, and modern charm of this beautiful Scandinavian destination.",
		result: 0,
		idx: 0,
		questions: [
			{
				question: "Do you have a valid passport?",
				answers: ["yes", "no", "not sure"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"A valid passport is essential for travel to Sweden.",
			},
			{
				question: "Have you checked if you need a visa for Sweden?",
				answers: ["yes", "no", "in process"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Ensure you have the necessary visa for entry into Sweden.",
			},
			{
				question: "Have you researched Swedish customs and etiquette?",
				answers: ["yes", "no", "in progress"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Familiarize yourself with Swedish customs for a respectful visit.",
			},
			{
				question: "Do you have travel insurance for your trip?",
				answers: ["yes", "no", "considering"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Travel insurance is important for a worry-free journey.",
			},
			{
				question: "Are your vaccinations up to date?",
				answers: ["yes", "no", "consulting with doctor"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Ensure your vaccinations are current for a healthy visit.",
			},
			{
				question: "Have you booked your accommodation in Sweden?",
				answers: ["yes", "no", "still deciding"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Secure your accommodation for a comfortable stay in Sweden.",
			},
			{
				question: "Do you know basic Swedish phrases?",
				answers: ["yes", "no", "learning"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Familiarize yourself with basic Swedish phrases for better communication.",
			},
			{
				question: "Have you checked the local weather forecast?",
				answers: ["yes", "no", "not yet"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Check the weather forecast to pack accordingly for your trip to Sweden.",
			},
			{
				question: "Do you know emergency numbers in Sweden?",
				answers: ["yes", "no", "researching"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Familiarize yourself with emergency numbers for a safe visit to Sweden.",
			},
			{
				question: "Have you planned your itinerary in Sweden?",
				answers: ["yes", "no", "working on it"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Plan your itinerary for an organized and enjoyable trip in Sweden.",
			},
			{
				question: "Are you aware of local transportation options in Sweden?",
				answers: ["yes", "no", "researching"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Know your transportation options for convenient travel within Sweden.",
			},
			{
				question: "Have you researched Swedish cuisine?",
				answers: ["yes", "no", "excited to try"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Explore and savor the delightful flavors of Swedish cuisine.",
			},
			{
				question: "Do you have a power adapter for your devices?",
				answers: ["yes", "no", "need to buy one"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Ensure you have the right power adapter for your devices in Sweden.",
			},
			{
				question: "Have you informed your bank about your travel to Sweden?",
				answers: ["yes", "no", "not yet"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Notify your bank to avoid any issues with your cards during your trip to Sweden.",
			},
			{
				question:
					"Are you familiar with popular tourist attractions in Sweden?",
				answers: ["yes", "no", "researching"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Explore famous attractions for a memorable journey in Sweden.",
			},
		],
	},
	{
		route: "egyptian-exploration-quiz",
		title: "Egyptian Exploration: Journey Readiness Quiz",
		description:
			"Embark on a fascinating exploration of Egypt! Evaluate your travel readiness with our quiz and ensure you're well-prepared to discover the ancient wonders, rich history, and vibrant culture of this mesmerizing destination.",
		result: 0,
		idx: 0,
		questions: [
			{
				question: "Do you have a valid passport?",
				answers: ["yes", "no", "not sure"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"A valid passport is essential for travel to Egypt.",
			},
			{
				question: "Have you checked if you need a visa for Egypt?",
				answers: ["yes", "no", "in process"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Ensure you have the necessary visa for entry into Egypt.",
			},
			{
				question: "Have you researched Egyptian customs and etiquette?",
				answers: ["yes", "no", "in progress"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Familiarize yourself with Egyptian customs for a respectful visit.",
			},
			{
				question: "Do you have travel insurance for your trip?",
				answers: ["yes", "no", "considering"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Travel insurance is important for a worry-free journey.",
			},
			{
				question: "Are your vaccinations up to date?",
				answers: ["yes", "no", "consulting with doctor"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Ensure your vaccinations are current for a healthy visit.",
			},
			{
				question: "Have you booked your accommodation in Egypt?",
				answers: ["yes", "no", "still deciding"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Secure your accommodation for a comfortable stay in Egypt.",
			},
			{
				question: "Do you know basic Arabic phrases?",
				answers: ["yes", "no", "learning"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Familiarize yourself with basic Arabic phrases for better communication.",
			},
			{
				question: "Have you checked the local weather forecast?",
				answers: ["yes", "no", "not yet"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Check the weather forecast to pack accordingly for your trip to Egypt.",
			},
			{
				question: "Do you know emergency numbers in Egypt?",
				answers: ["yes", "no", "researching"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Familiarize yourself with emergency numbers for a safe visit to Egypt.",
			},
			{
				question: "Have you planned your itinerary in Egypt?",
				answers: ["yes", "no", "working on it"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Plan your itinerary for an organized and enjoyable trip in Egypt.",
			},
			{
				question: "Are you aware of local transportation options in Egypt?",
				answers: ["yes", "no", "researching"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Know your transportation options for convenient travel within Egypt.",
			},
			{
				question: "Have you researched Egyptian cuisine?",
				answers: ["yes", "no", "excited to try"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Explore and savor the delightful flavors of Egyptian cuisine.",
			},
			{
				question: "Do you have a power adapter for your devices?",
				answers: ["yes", "no", "need to buy one"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Ensure you have the right power adapter for your devices in Egypt.",
			},
			{
				question: "Have you informed your bank about your travel to Egypt?",
				answers: ["yes", "no", "not yet"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Notify your bank to avoid any issues with your cards during your trip to Egypt.",
			},
			{
				question: "Are you familiar with popular tourist attractions in Egypt?",
				answers: ["yes", "no", "researching"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Explore famous attractions for a memorable journey in Egypt.",
			},
		],
	},
	{
		route: "argentinian-discovery-quiz",
		title: "Argentinian Discovery: Journey Readiness Quiz",
		description:
			"Embark on a vibrant discovery of Argentina! Evaluate your travel readiness with our quiz and ensure you're well-prepared to explore the diverse landscapes, rich culture, and passionate rhythms of this captivating South American destination.",
		result: 0,
		idx: 0,
		questions: [
			{
				question: "Do you have a valid passport?",
				answers: ["yes", "no", "not sure"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"A valid passport is essential for travel to Argentina.",
			},
			{
				question: "Have you checked if you need a visa for Argentina?",
				answers: ["yes", "no", "in process"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Ensure you have the necessary visa for entry into Argentina.",
			},
			{
				question: "Have you researched Argentine customs and etiquette?",
				answers: ["yes", "no", "in progress"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Familiarize yourself with Argentine customs for a respectful visit.",
			},
			{
				question: "Do you have travel insurance for your trip?",
				answers: ["yes", "no", "considering"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Travel insurance is important for a worry-free journey.",
			},
			{
				question: "Are your vaccinations up to date?",
				answers: ["yes", "no", "consulting with doctor"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Ensure your vaccinations are current for a healthy visit.",
			},
			{
				question: "Have you booked your accommodation in Argentina?",
				answers: ["yes", "no", "still deciding"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Secure your accommodation for a comfortable stay in Argentina.",
			},
			{
				question: "Do you know basic Spanish phrases?",
				answers: ["yes", "no", "learning"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Familiarize yourself with basic Spanish phrases for better communication.",
			},
			{
				question: "Have you checked the local weather forecast?",
				answers: ["yes", "no", "not yet"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Check the weather forecast to pack accordingly for your trip to Argentina.",
			},
			{
				question: "Do you know emergency numbers in Argentina?",
				answers: ["yes", "no", "researching"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Familiarize yourself with emergency numbers for a safe visit to Argentina.",
			},
			{
				question: "Have you planned your itinerary in Argentina?",
				answers: ["yes", "no", "working on it"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Plan your itinerary for an organized and enjoyable trip in Argentina.",
			},
			{
				question: "Are you aware of local transportation options in Argentina?",
				answers: ["yes", "no", "researching"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Know your transportation options for convenient travel within Argentina.",
			},
			{
				question: "Have you researched Argentine cuisine?",
				answers: ["yes", "no", "excited to try"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Explore and savor the delightful flavors of Argentine cuisine.",
			},
			{
				question: "Do you have a power adapter for your devices?",
				answers: ["yes", "no", "need to buy one"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Ensure you have the right power adapter for your devices in Argentina.",
			},
			{
				question: "Have you informed your bank about your travel to Argentina?",
				answers: ["yes", "no", "not yet"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Notify your bank to avoid any issues with your cards during your trip to Argentina.",
			},
			{
				question:
					"Are you familiar with popular tourist attractions in Argentina?",
				answers: ["yes", "no", "researching"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Explore famous attractions for a memorable journey in Argentina.",
			},
		],
	},
	{
		route: "moroccan-exploration-quiz",
		title: "Moroccan Exploration: Journey Readiness Quiz",
		description:
			"Embark on a captivating exploration of Morocco! Evaluate your travel readiness with our quiz and ensure you're well-prepared to discover the vibrant souks, historic medinas, and diverse landscapes of this enchanting North African destination.",
		result: 0,
		idx: 0,
		questions: [
			{
				question: "Do you have a valid passport?",
				answers: ["yes", "no", "not sure"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"A valid passport is essential for travel to Morocco.",
			},
			{
				question: "Have you checked if you need a visa for Morocco?",
				answers: ["yes", "no", "in process"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Ensure you have the necessary visa for entry into Morocco.",
			},
			{
				question: "Have you researched Moroccan customs and etiquette?",
				answers: ["yes", "no", "in progress"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Familiarize yourself with Moroccan customs for a respectful visit.",
			},
			{
				question: "Do you have travel insurance for your trip?",
				answers: ["yes", "no", "considering"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Travel insurance is important for a worry-free journey.",
			},
			{
				question: "Are your vaccinations up to date?",
				answers: ["yes", "no", "consulting with doctor"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Ensure your vaccinations are current for a healthy visit.",
			},
			{
				question: "Have you booked your accommodation in Morocco?",
				answers: ["yes", "no", "still deciding"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Secure your accommodation for a comfortable stay in Morocco.",
			},
			{
				question: "Do you know basic Arabic phrases?",
				answers: ["yes", "no", "learning"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Familiarize yourself with basic Arabic phrases for better communication.",
			},
			{
				question: "Have you checked the local weather forecast?",
				answers: ["yes", "no", "not yet"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Check the weather forecast to pack accordingly for your trip to Morocco.",
			},
			{
				question: "Do you know emergency numbers in Morocco?",
				answers: ["yes", "no", "researching"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Familiarize yourself with emergency numbers for a safe visit to Morocco.",
			},
			{
				question: "Have you planned your itinerary in Morocco?",
				answers: [" yes", "no", "working on it"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Plan your itinerary for an organized and enjoyable trip in Morocco.",
			},
			{
				question: "Are you aware of local transportation options in Morocco?",
				answers: ["yes", "no", "researching"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Know your transportation options for convenient travel within Morocco.",
			},
			{
				question: "Have you researched Moroccan cuisine?",
				answers: ["yes", "no", "excited to try"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Explore and savor the delightful flavors of Moroccan cuisine.",
			},
			{
				question: "Do you have a power adapter for your devices?",
				answers: ["yes", "no", "need to buy one"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Ensure you have the right power adapter for your devices in Morocco.",
			},
			{
				question: "Have you informed your bank about your travel to Morocco?",
				answers: ["yes", "no", "not yet"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Notify your bank to avoid any issues with your cards during your trip to Morocco.",
			},
			{
				question:
					"Are you familiar with popular tourist attractions in Morocco?",
				answers: ["yes", "no", "researching"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Explore famous attractions for a memorable journey in Morocco.",
			},
		],
	},
	{
		route: "uae-adventure-quiz",
		title: "UAE Adventure: Journey Readiness Quiz",
		description:
			"Embark on an extraordinary adventure in the United Arab Emirates! Evaluate your travel readiness with our quiz and ensure you're well-prepared to explore the modern marvels, cultural gems, and luxurious experiences of this dynamic Middle Eastern destination.",
		result: 0,
		idx: 0,
		questions: [
			{
				question: "Do you have a valid passport?",
				answers: ["yes", "no", "not sure"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"A valid passport is essential for travel to the United Arab Emirates.",
			},
			{
				question: "Have you checked if you need a visa for the UAE?",
				answers: ["yes", "no", "in process"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Ensure you have the necessary visa for entry into the United Arab Emirates.",
			},
			{
				question: "Have you researched UAE customs and etiquette?",
				answers: ["yes", "no", "in progress"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Familiarize yourself with UAE customs for a respectful visit.",
			},
			{
				question: "Do you have travel insurance for your trip?",
				answers: ["yes", "no", "considering"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Travel insurance is important for a worry-free journey.",
			},
			{
				question: "Are your vaccinations up to date?",
				answers: ["yes", "no", "consulting with doctor"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Ensure your vaccinations are current for a healthy visit.",
			},
			{
				question: "Have you booked your accommodation in the UAE?",
				answers: ["yes", "no", "still deciding"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Secure your accommodation for a comfortable stay in the United Arab Emirates.",
			},
			{
				question: "Do you know basic Arabic phrases?",
				answers: ["yes", "no", "learning"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Familiarize yourself with basic Arabic phrases for better communication.",
			},
			{
				question: "Have you checked the local weather forecast?",
				answers: ["yes", "no", "not yet"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Check the weather forecast to pack accordingly for your trip to the UAE.",
			},
			{
				question: "Do you know emergency numbers in the UAE?",
				answers: ["yes", "no", "researching"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Familiarize yourself with emergency numbers for a safe visit to the United Arab Emirates.",
			},
			{
				question: "Have you planned your itinerary in the UAE?",
				answers: [" yes", "no", "working on it"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Plan your itinerary for an organized and enjoyable trip in the United Arab Emirates.",
			},
			{
				question: "Are you aware of local transportation options in the UAE?",
				answers: ["yes", "no", "researching"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Know your transportation options for convenient travel within the United Arab Emirates.",
			},
			{
				question: "Have you researched UAE cuisine?",
				answers: ["yes", "no", "excited to try"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Explore and savor the delightful flavors of UAE cuisine.",
			},
			{
				question: "Do you have a power adapter for your devices?",
				answers: ["yes", "no", "need to buy one"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Ensure you have the right power adapter for your devices in the United Arab Emirates.",
			},
			{
				question: "Have you informed your bank about your travel to the UAE?",
				answers: ["yes", "no", "not yet"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Notify your bank to avoid any issues with your cards during your trip to the United Arab Emirates.",
			},
			{
				question:
					"Are you familiar with popular tourist attractions in the UAE?",
				answers: ["yes", "no", "researching"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Explore famous attractions for a memorable journey in the United Arab Emirates.",
			},
		],
	},
	{
		route: "south-african-safari-quiz",
		title: "South African Safari: Journey Readiness Quiz",
		description:
			"Embark on a thrilling safari adventure in South Africa! Evaluate your travel readiness with our quiz and ensure you're well-prepared to explore the diverse landscapes, wildlife wonders, and rich cultures of this captivating Southern African destination.",
		result: 0,
		idx: 0,
		questions: [
			{
				question: "Do you have a valid passport?",
				answers: ["yes", "no", "not sure"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"A valid passport is essential for travel to South Africa.",
			},
			{
				question: "Have you checked if you need a visa for South Africa?",
				answers: ["yes", "no", "in process"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Ensure you have the necessary visa for entry into South Africa.",
			},
			{
				question: "Have you researched South African customs and etiquette?",
				answers: ["yes", "no", "in progress"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Familiarize yourself with South African customs for a respectful visit.",
			},
			{
				question: "Do you have travel insurance for your trip?",
				answers: ["yes", "no", "considering"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Travel insurance is important for a worry-free journey.",
			},
			{
				question: "Are your vaccinations up to date?",
				answers: ["yes", "no", "consulting with doctor"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Ensure your vaccinations are current for a healthy visit.",
			},
			{
				question: "Have you booked your accommodation in South Africa?",
				answers: ["yes", "no", "still deciding"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Secure your accommodation for a comfortable stay in South Africa.",
			},
			{
				question: "Do you know basic Afrikaans phrases?",
				answers: ["yes", "no", "learning"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Familiarize yourself with basic Afrikaans phrases for better communication.",
			},
			{
				question: "Have you checked the local weather forecast?",
				answers: ["yes", "no", "not yet"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Check the weather forecast to pack accordingly for your trip to South Africa.",
			},
			{
				question: "Do you know emergency numbers in South Africa?",
				answers: ["yes", "no", "researching"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Familiarize yourself with emergency numbers for a safe visit to South Africa.",
			},
			{
				question: "Have you planned your safari itinerary in South Africa?",
				answers: [" yes", "no", "working on it"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Plan your safari itinerary for an organized and enjoyable trip in South Africa.",
			},
			{
				question:
					"Are you aware of local transportation options in South Africa?",
				answers: ["yes", "no", "researching"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Know your transportation options for convenient travel within South Africa.",
			},
			{
				question: "Have you researched South African cuisine?",
				answers: ["yes", "no", "excited to try"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Explore and savor the delightful flavors of South African cuisine.",
			},
			{
				question: "Do you have a power adapter for your devices?",
				answers: ["yes", "no", "need to buy one"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Ensure you have the right power adapter for your devices in South Africa.",
			},
			{
				question:
					"Have you informed your bank about your travel to South Africa?",
				answers: ["yes", "no", "not yet"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Notify your bank to avoid any issues with your cards during your trip to South Africa.",
			},
			{
				question:
					"Are you familiar with popular safari destinations in South Africa?",
				answers: ["yes", "no", "researching"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Explore famous safari destinations for a memorable journey in South Africa.",
			},
		],
	},
	{
		route: "belgian-discovery-quiz",
		title: "Belgian Discovery: Journey Readiness Quiz",
		description:
			"Embark on a delightful discovery of Belgium! Evaluate your travel readiness with our quiz and ensure you're well-prepared to explore the charming cities, medieval architecture, and exquisite chocolates of this enchanting Western European destination.",
		result: 0,
		idx: 0,
		questions: [
			{
				question: "Do you have a valid passport?",
				answers: ["yes", "no", "not sure"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"A valid passport is essential for travel to Belgium.",
			},
			{
				question: "Have you checked if you need a visa for Belgium?",
				answers: ["yes", "no", "in process"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Ensure you have the necessary visa for entry into Belgium.",
			},
			{
				question: "Have you researched Belgian customs and etiquette?",
				answers: ["yes", "no", "in progress"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Familiarize yourself with Belgian customs for a respectful visit.",
			},
			{
				question: "Do you have travel insurance for your trip?",
				answers: ["yes", "no", "considering"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Travel insurance is important for a worry-free journey.",
			},
			{
				question: "Are your vaccinations up to date?",
				answers: ["yes", "no", "consulting with doctor"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Ensure your vaccinations are current for a healthy visit.",
			},
			{
				question: "Have you booked your accommodation in Belgium?",
				answers: ["yes", "no", "still deciding"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Secure your accommodation for a comfortable stay in Belgium.",
			},
			{
				question: "Do you know basic French or Dutch phrases?",
				answers: ["yes", "no", "learning"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Familiarize yourself with basic French or Dutch phrases for better communication.",
			},
			{
				question: "Have you checked the local weather forecast?",
				answers: ["yes", "no", "not yet"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Check the weather forecast to pack accordingly for your trip to Belgium.",
			},
			{
				question: "Do you know emergency numbers in Belgium?",
				answers: ["yes", "no", "researching"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Familiarize yourself with emergency numbers for a safe visit to Belgium.",
			},
			{
				question: "Have you planned your itinerary in Belgium?",
				answers: [" yes", "no", "working on it"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Plan your itinerary for an organized and enjoyable trip in Belgium.",
			},
			{
				question: "Are you aware of local transportation options in Belgium?",
				answers: ["yes", "no", "researching"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Know your transportation options for convenient travel within Belgium.",
			},
			{
				question: "Have you researched Belgian cuisine?",
				answers: ["yes", "no", "excited to try"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Explore and savor the delightful flavors of Belgian cuisine.",
			},
			{
				question: "Do you have a power adapter for your devices?",
				answers: ["yes", "no", "need to buy one"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Ensure you have the right power adapter for your devices in Belgium.",
			},
			{
				question: "Have you informed your bank about your travel to Belgium?",
				answers: ["yes", "no", "not yet"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Notify your bank to avoid any issues with your cards during your trip to Belgium.",
			},
			{
				question:
					"Are you familiar with popular tourist attractions in Belgium?",
				answers: ["yes", "no", "researching"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Explore famous attractions for a memorable journey in Belgium.",
			},
		],
	},
	{
		route: "kiwi-adventure-quiz",
		title: "Kiwi Adventure: Journey Readiness Quiz",
		description:
			"Embark on an unforgettable adventure in New Zealand! Evaluate your travel readiness with our quiz and ensure you're well-prepared to explore the stunning landscapes, Maori culture, and adrenaline-pumping activities of this captivating Pacific island nation.",
		result: 0,
		idx: 0,
		questions: [
			{
				question: "Do you have a valid passport?",
				answers: ["yes", "no", "not sure"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"A valid passport is essential for travel to New Zealand.",
			},
			{
				question: "Have you checked if you need a visa for New Zealand?",
				answers: ["yes", "no", "in process"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Ensure you have the necessary visa for entry into New Zealand.",
			},
			{
				question: "Have you researched New Zealand customs and etiquette?",
				answers: ["yes", "no", "in progress"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Familiarize yourself with New Zealand customs for a respectful visit.",
			},
			{
				question: "Do you have travel insurance for your trip?",
				answers: ["yes", "no", "considering"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Travel insurance is important for a worry-free journey.",
			},
			{
				question: "Are your vaccinations up to date?",
				answers: ["yes", "no", "consulting with doctor"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Ensure your vaccinations are current for a healthy visit.",
			},
			{
				question: "Have you booked your accommodation in New Zealand?",
				answers: ["yes", "no", "still deciding"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Secure your accommodation for a comfortable stay in New Zealand.",
			},
			{
				question: "Do you know basic Maori phrases?",
				answers: ["yes", "no", "learning"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Familiarize yourself with basic Maori phrases for better communication.",
			},
			{
				question: "Have you checked the local weather forecast?",
				answers: ["yes", "no", "not yet"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Check the weather forecast to pack accordingly for your trip to New Zealand.",
			},
			{
				question: "Do you know emergency numbers in New Zealand?",
				answers: ["yes", "no", "researching"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Familiarize yourself with emergency numbers for a safe visit to New Zealand.",
			},
			{
				question: "Have you planned your itinerary in New Zealand?",
				answers: [" yes", "no", "working on it"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Plan your itinerary for an organized and enjoyable trip in New Zealand.",
			},
			{
				question:
					"Are you aware of local transportation options in New Zealand?",
				answers: ["yes", "no", "researching"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Know your transportation options for convenient travel within New Zealand.",
			},
			{
				question: "Have you researched New Zealand cuisine?",
				answers: ["yes", "no", "excited to try"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Explore and savor the delightful flavors of New Zealand cuisine.",
			},
			{
				question: "Do you have a power adapter for your devices?",
				answers: ["yes", "no", "need to buy one"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Ensure you have the right power adapter for your devices in New Zealand.",
			},
			{
				question:
					"Have you informed your bank about your travel to New Zealand?",
				answers: ["yes", "no", "not yet"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Notify your bank to avoid any issues with your cards during your trip to New Zealand.",
			},
			{
				question:
					"Are you familiar with popular tourist attractions in New Zealand?",
				answers: ["yes", "no", "researching"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Explore famous attractions for a memorable journey in New Zealand.",
			},
		],
	},
	{
		route: "czech-exploration-quiz",
		title: "Czech Exploration: Journey Readiness Quiz",
		description:
			"Embark on a captivating exploration of the Czech Republic! Evaluate your travel readiness with our quiz and ensure you're well-prepared to discover the historic charm, cultural treasures, and delicious cuisine of this Central European gem.",
		result: 0,
		idx: 0,
		questions: [
			{
				question: "Do you have a valid passport?",
				answers: ["yes", "no", "not sure"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"A valid passport is essential for travel to the Czech Republic.",
			},
			{
				question: "Have you checked if you need a visa for the Czech Republic?",
				answers: ["yes", "no", "in process"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Ensure you have the necessary visa for entry into the Czech Republic.",
			},
			{
				question: "Have you researched Czech customs and etiquette?",
				answers: ["yes", "no", "in progress"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Familiarize yourself with Czech customs for a respectful visit.",
			},
			{
				question: "Do you have travel insurance for your trip?",
				answers: ["yes", "no", "considering"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Travel insurance is important for a worry-free journey.",
			},
			{
				question: "Are your vaccinations up to date?",
				answers: ["yes", "no", "consulting with doctor"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Ensure your vaccinations are current for a healthy visit.",
			},
			{
				question: "Have you booked your accommodation in the Czech Republic?",
				answers: ["yes", "no", "still deciding"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Secure your accommodation for a comfortable stay in the Czech Republic.",
			},
			{
				question: "Do you know basic Czech phrases?",
				answers: ["yes", "no", "learning"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Familiarize yourself with basic Czech phrases for better communication.",
			},
			{
				question: "Have you checked the local weather forecast?",
				answers: ["yes", "no", "not yet"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Check the weather forecast to pack accordingly for your trip to the Czech Republic.",
			},
			{
				question: "Do you know emergency numbers in the Czech Republic?",
				answers: ["yes", "no", "researching"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Familiarize yourself with emergency numbers for a safe visit to the Czech Republic.",
			},
			{
				question: "Have you planned your itinerary in the Czech Republic?",
				answers: [" yes", "no", "working on it"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Plan your itinerary for an organized and enjoyable trip in the Czech Republic.",
			},
			{
				question:
					"Are you aware of local transportation options in the Czech Republic?",
				answers: ["yes", "no", "researching"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Know your transportation options for convenient travel within the Czech Republic.",
			},
			{
				question: "Have you researched Czech cuisine?",
				answers: ["yes", "no", "excited to try"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Explore and savor the delightful flavors of Czech cuisine.",
			},
			{
				question: "Do you have a power adapter for your devices?",
				answers: ["yes", "no", "need to buy one"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Ensure you have the right power adapter for your devices in the Czech Republic.",
			},
			{
				question:
					"Have you informed your bank about your travel to the Czech Republic?",
				answers: ["yes", "no", "not yet"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Notify your bank to avoid any issues with your cards during your trip to the Czech Republic.",
			},
			{
				question:
					"Are you familiar with popular tourist attractions in the Czech Republic?",
				answers: ["yes", "no", "researching"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Explore famous attractions for a memorable journey in the Czech Republic.",
			},
		],
	},
	{
		route: "irish-exploration-quiz",
		title: "Irish Exploration: Journey Readiness Quiz",
		description:
			"Embark on a charming exploration of Ireland! Evaluate your travel readiness with our quiz and ensure you're well-prepared to discover the lush landscapes, rich history, and warm hospitality of this captivating Emerald Isle.",
		result: 0,
		idx: 0,
		questions: [
			{
				question: "Do you have a valid passport?",
				answers: ["yes", "no", "not sure"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"A valid passport is essential for travel to Ireland.",
			},
			{
				question: "Have you checked if you need a visa for Ireland?",
				answers: ["yes", "no", "in process"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Ensure you have the necessary visa for entry into Ireland.",
			},
			{
				question: "Have you researched Irish customs and etiquette?",
				answers: ["yes", "no", "in progress"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Familiarize yourself with Irish customs for a respectful visit.",
			},
			{
				question: "Do you have travel insurance for your trip?",
				answers: ["yes", "no", "considering"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Travel insurance is important for a worry-free journey.",
			},
			{
				question: "Are your vaccinations up to date?",
				answers: ["yes", "no", "consulting with doctor"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Ensure your vaccinations are current for a healthy visit.",
			},
			{
				question: "Have you booked your accommodation in Ireland?",
				answers: ["yes", "no", "still deciding"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Secure your accommodation for a comfortable stay in Ireland.",
			},
			{
				question: "Do you know basic Irish phrases?",
				answers: ["yes", "no", "learning"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Familiarize yourself with basic Irish phrases for better communication.",
			},
			{
				question: "Have you checked the local weather forecast?",
				answers: ["yes", "no", "not yet"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Check the weather forecast to pack accordingly for your trip to Ireland.",
			},
			{
				question: "Do you know emergency numbers in Ireland?",
				answers: ["yes", "no", "researching"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Familiarize yourself with emergency numbers for a safe visit to Ireland.",
			},
			{
				question: "Have you planned your itinerary in Ireland?",
				answers: [" yes", "no", "working on it"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Plan your itinerary for an organized and enjoyable trip in Ireland.",
			},
			{
				question: "Are you aware of local transportation options in Ireland?",
				answers: ["yes", "no", "researching"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Know your transportation options for convenient travel within Ireland.",
			},
			{
				question: "Have you researched Irish cuisine?",
				answers: ["yes", "no", "excited to try"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Explore and savor the delightful flavors of Irish cuisine.",
			},
			{
				question: "Do you have a power adapter for your devices?",
				answers: ["yes", "no", "need to buy one"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Ensure you have the right power adapter for your devices in Ireland.",
			},
			{
				question: "Have you informed your bank about your travel to Ireland?",
				answers: ["yes", "no", "not yet"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Notify your bank to avoid any issues with your cards during your trip to Ireland.",
			},
			{
				question:
					"Are you familiar with popular tourist attractions in Ireland?",
				answers: ["yes", "no", "researching"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Explore famous attractions for a memorable journey in Ireland.",
			},
		],
	},
	{
		route: "island-paradise-quiz",
		title: "Island Paradise: Journey Readiness Quiz",
		description:
			"Embark on a tropical adventure in the Philippines! Evaluate your travel readiness with our quiz and ensure you're well-prepared to explore the beautiful beaches, vibrant culture, and diverse landscapes of this enchanting archipelago.",
		result: 0,
		idx: 0,
		questions: [
			{
				question: "Do you have a valid passport?",
				answers: ["yes", "no", "not sure"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"A valid passport is essential for travel to the Philippines.",
			},
			{
				question: "Have you checked if you need a visa for the Philippines?",
				answers: ["yes", "no", "in process"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Ensure you have the necessary visa for entry into the Philippines.",
			},
			{
				question: "Have you researched Filipino customs and etiquette?",
				answers: ["yes", "no", "in progress"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Familiarize yourself with Filipino customs for a respectful visit.",
			},
			{
				question: "Do you have travel insurance for your trip?",
				answers: ["yes", "no", "considering"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Travel insurance is important for a worry-free journey.",
			},
			{
				question: "Are your vaccinations up to date?",
				answers: ["yes", "no", "consulting with doctor"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Ensure your vaccinations are current for a healthy visit.",
			},
			{
				question: "Have you booked your accommodation in the Philippines?",
				answers: ["yes", "no", "still deciding"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Secure your accommodation for a comfortable stay in the Philippines.",
			},
			{
				question: "Do you know basic Filipino phrases?",
				answers: ["yes", "no", "learning"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Familiarize yourself with basic Filipino phrases for better communication.",
			},
			{
				question: "Have you checked the local weather forecast?",
				answers: ["yes", "no", "not yet"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Check the weather forecast to pack accordingly for your trip to the Philippines.",
			},
			{
				question: "Do you know emergency numbers in the Philippines?",
				answers: ["yes", "no", "researching"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Familiarize yourself with emergency numbers for a safe visit to the Philippines.",
			},
			{
				question: "Have you planned your itinerary in the Philippines?",
				answers: [" yes", "no", "working on it"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Plan your itinerary for an organized and enjoyable trip in the Philippines.",
			},
			{
				question:
					"Are you aware of local transportation options in the Philippines?",
				answers: ["yes", "no", "researching"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Know your transportation options for convenient travel within the Philippines.",
			},
			{
				question: "Have you researched Filipino cuisine?",
				answers: ["yes", "no", "excited to try"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Explore and savor the delightful flavors of Filipino cuisine.",
			},
			{
				question: "Do you have a power adapter for your devices?",
				answers: ["yes", "no", "need to buy one"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Ensure you have the right power adapter for your devices in the Philippines.",
			},
			{
				question:
					"Have you informed your bank about your travel to the Philippines?",
				answers: ["yes", "no", "not yet"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Notify your bank to avoid any issues with your cards during your trip to the Philippines.",
			},
			{
				question:
					"Are you familiar with popular tourist attractions in the Philippines?",
				answers: ["yes", "no", "researching"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Explore famous attractions for a memorable journey in the Philippines.",
			},
		],
	},
	{
		route: "peruvian-exploration-quiz",
		title: "Peruvian Exploration: Journey Readiness Quiz",
		description:
			"Embark on a mystical journey through Peru! Evaluate your travel readiness with our quiz and ensure you're well-prepared to discover the ancient ruins, diverse landscapes, and vibrant culture of this South American treasure.",
		result: 0,
		idx: 0,
		questions: [
			{
				question: "Do you have a valid passport?",
				answers: ["yes", "no", "not sure"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"A valid passport is essential for travel to Peru.",
			},
			{
				question: "Have you checked if you need a visa for Peru?",
				answers: ["yes", "no", "in process"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Ensure you have the necessary visa for entry into Peru.",
			},
			{
				question: "Have you researched Peruvian customs and etiquette?",
				answers: ["yes", "no", "in progress"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Familiarize yourself with Peruvian customs for a respectful visit.",
			},
			{
				question: "Do you have travel insurance for your trip?",
				answers: ["yes", "no", "considering"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Travel insurance is important for a worry-free journey.",
			},
			{
				question: "Are your vaccinations up to date?",
				answers: ["yes", "no", "consulting with doctor"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Ensure your vaccinations are current for a healthy visit.",
			},
			{
				question: "Have you booked your accommodation in Peru?",
				answers: ["yes", "no", "still deciding"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Secure your accommodation for a comfortable stay in Peru.",
			},
			{
				question: "Do you know basic Spanish phrases?",
				answers: ["yes", "no", "learning"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Familiarize yourself with basic Spanish phrases for better communication in Peru.",
			},
			{
				question: "Have you checked the local weather forecast?",
				answers: ["yes", "no", "not yet"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Check the weather forecast to pack accordingly for your trip to Peru.",
			},
			{
				question: "Do you know emergency numbers in Peru?",
				answers: ["yes", "no", "researching"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Familiarize yourself with emergency numbers for a safe visit to Peru.",
			},
			{
				question: "Have you planned your itinerary in Peru?",
				answers: [" yes", "no", "working on it"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Plan your itinerary for an organized and enjoyable trip in Peru.",
			},
			{
				question: "Are you aware of local transportation options in Peru?",
				answers: ["yes", "no", "researching"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Know your transportation options for convenient travel within Peru.",
			},
			{
				question: "Have you researched Peruvian cuisine?",
				answers: ["yes", "no", "excited to try"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Explore and savor the delightful flavors of Peruvian cuisine.",
			},
			{
				question: "Do you have a power adapter for your devices?",
				answers: ["yes", "no", "need to buy one"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Ensure you have the right power adapter for your devices in Peru.",
			},
			{
				question: "Have you informed your bank about your travel to Peru?",
				answers: ["yes", "no", "not yet"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Notify your bank to avoid any issues with your cards during your trip to Peru.",
			},
			{
				question: "Are you familiar with popular tourist attractions in Peru?",
				answers: ["yes", "no", "researching"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Explore famous attractions for a memorable journey in Peru.",
			},
		],
	},
	{
		route: "danish-exploration-quiz",
		title: "Danish Exploration: Journey Readiness Quiz",
		description:
			"Embark on a cultural exploration of Denmark! Evaluate your travel readiness with our quiz and ensure you're well-prepared to discover the historic landmarks, modern design, and cozy charm of this Scandinavian gem.",
		result: 0,
		idx: 0,
		questions: [
			{
				question: "Do you have a valid passport?",
				answers: ["yes", "no", "not sure"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"A valid passport is essential for travel to Denmark.",
			},
			{
				question: "Have you checked if you need a visa for Denmark?",
				answers: ["yes", "no", "in process"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Ensure you have the necessary visa for entry into Denmark.",
			},
			{
				question: "Have you researched Danish customs and etiquette?",
				answers: ["yes", "no", "in progress"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Familiarize yourself with Danish customs for a respectful visit.",
			},
			{
				question: "Do you have travel insurance for your trip?",
				answers: ["yes", "no", "considering"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Travel insurance is important for a worry-free journey.",
			},
			{
				question: "Are your vaccinations up to date?",
				answers: ["yes", "no", "consulting with doctor"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Ensure your vaccinations are current for a healthy visit.",
			},
			{
				question: "Have you booked your accommodation in Denmark?",
				answers: ["yes", "no", "still deciding"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Secure your accommodation for a comfortable stay in Denmark.",
			},
			{
				question: "Do you know basic Danish phrases?",
				answers: ["yes", "no", "learning"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Familiarize yourself with basic Danish phrases for better communication.",
			},
			{
				question: "Have you checked the local weather forecast?",
				answers: ["yes", "no", "not yet"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Check the weather forecast to pack accordingly for your trip to Denmark.",
			},
			{
				question: "Do you know emergency numbers in Denmark?",
				answers: ["yes", "no", "researching"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Familiarize yourself with emergency numbers for a safe visit to Denmark.",
			},
			{
				question: "Have you planned your itinerary in Denmark?",
				answers: [" yes", "no", "working on it"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Plan your itinerary for an organized and enjoyable trip in Denmark.",
			},
			{
				question: "Are you aware of local transportation options in Denmark?",
				answers: ["yes", "no", "researching"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Know your transportation options for convenient travel within Denmark.",
			},
			{
				question: "Have you researched Danish cuisine?",
				answers: ["yes", "no", "excited to try"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Explore and savor the delightful flavors of Danish cuisine.",
			},
			{
				question: "Do you have a power adapter for your devices?",
				answers: ["yes", "no", "need to buy one"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Ensure you have the right power adapter for your devices in Denmark.",
			},
			{
				question: "Have you informed your bank about your travel to Denmark?",
				answers: ["yes", "no", "not yet"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Notify your bank to avoid any issues with your cards during your trip to Denmark.",
			},
			{
				question:
					"Are you familiar with popular tourist attractions in Denmark?",
				answers: ["yes", "no", "researching"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Explore famous attractions for a memorable journey in Denmark.",
			},
		],
	},
	{
		route: "finnish-exploration-quiz",
		title: "Finnish Exploration: Journey Readiness Quiz",
		description:
			"Embark on a Nordic adventure in Finland! Evaluate your travel readiness with our quiz and ensure you're well-prepared to discover the pristine landscapes, vibrant cities, and unique culture of this enchanting Scandinavian destination.",
		result: 0,
		idx: 0,
		questions: [
			{
				question: "Do you have a valid passport?",
				answers: ["yes", "no", "not sure"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"A valid passport is essential for travel to Finland.",
			},
			{
				question: "Have you checked if you need a visa for Finland?",
				answers: ["yes", "no", "in process"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Ensure you have the necessary visa for entry into Finland.",
			},
			{
				question: "Have you researched Finnish customs and etiquette?",
				answers: ["yes", "no", "in progress"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Familiarize yourself with Finnish customs for a respectful visit.",
			},
			{
				question: "Do you have travel insurance for your trip?",
				answers: ["yes", "no", "considering"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Travel insurance is important for a worry-free journey.",
			},
			{
				question: "Are your vaccinations up to date?",
				answers: ["yes", "no", "consulting with doctor"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Ensure your vaccinations are current for a healthy visit.",
			},
			{
				question: "Have you booked your accommodation in Finland?",
				answers: ["yes", "no", "still deciding"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Secure your accommodation for a comfortable stay in Finland.",
			},
			{
				question: "Do you know basic Finnish phrases?",
				answers: ["yes", "no", "learning"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Familiarize yourself with basic Finnish phrases for better communication.",
			},
			{
				question: "Have you checked the local weather forecast?",
				answers: ["yes", "no", "not yet"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Check the weather forecast to pack accordingly for your trip to Finland.",
			},
			{
				question: "Do you know emergency numbers in Finland?",
				answers: ["yes", "no", "researching"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Familiarize yourself with emergency numbers for a safe visit to Finland.",
			},
			{
				question: "Have you planned your itinerary in Finland?",
				answers: [" yes", "no", "working on it"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Plan your itinerary for an organized and enjoyable trip in Finland.",
			},
			{
				question: "Are you aware of local transportation options in Finland?",
				answers: ["yes", "no", "researching"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Know your transportation options for convenient travel within Finland.",
			},
			{
				question: "Have you researched Finnish cuisine?",
				answers: ["yes", "no", "excited to try"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Explore and savor the delightful flavors of Finnish cuisine.",
			},
			{
				question: "Do you have a power adapter for your devices?",
				answers: ["yes", "no", "need to buy one"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Ensure you have the right power adapter for your devices in Finland.",
			},
			{
				question: "Have you informed your bank about your travel to Finland?",
				answers: ["yes", "no", "not yet"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Notify your bank to avoid any issues with your cards during your trip to Finland.",
			},
			{
				question:
					"Are you familiar with popular tourist attractions in Finland?",
				answers: ["yes", "no", "researching"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Explore famous attractions for a memorable journey in Finland.",
			},
		],
	},
	{
		route: "norwegian-adventure-quiz",
		title: "Norwegian Adventure: Journey Readiness Quiz",
		description:
			"Embark on a breathtaking adventure in Norway! Evaluate your travel readiness with our quiz and ensure you're well-prepared to explore the majestic fjords, scenic landscapes, and rich cultural heritage of this Nordic wonderland.",
		result: 0,
		idx: 0,
		questions: [
			{
				question: "Do you have a valid passport?",
				answers: ["yes", "no", "not sure"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"A valid passport is essential for travel to Norway.",
			},
			{
				question: "Have you checked if you need a visa for Norway?",
				answers: ["yes", "no", "in process"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Ensure you have the necessary visa for entry into Norway.",
			},
			{
				question: "Have you researched Norwegian customs and etiquette?",
				answers: ["yes", "no", "in progress"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Familiarize yourself with Norwegian customs for a respectful visit.",
			},
			{
				question: "Do you have travel insurance for your trip?",
				answers: ["yes", "no", "considering"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Travel insurance is important for a worry-free journey.",
			},
			{
				question: "Are your vaccinations up to date?",
				answers: ["yes", "no", "consulting with doctor"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Ensure your vaccinations are current for a healthy visit.",
			},
			{
				question: "Have you booked your accommodation in Norway?",
				answers: ["yes", "no", "still deciding"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Secure your accommodation for a comfortable stay in Norway.",
			},
			{
				question: "Do you know basic Norwegian phrases?",
				answers: ["yes", "no", "learning"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Familiarize yourself with basic Norwegian phrases for better communication.",
			},
			{
				question: "Have you checked the local weather forecast?",
				answers: ["yes", "no", "not yet"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Check the weather forecast to pack accordingly for your trip to Norway.",
			},
			{
				question: "Do you know emergency numbers in Norway?",
				answers: ["yes", "no", "researching"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Familiarize yourself with emergency numbers for a safe visit to Norway.",
			},
			{
				question: "Have you planned your itinerary in Norway?",
				answers: [" yes", "no", "working on it"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Plan your itinerary for an organized and enjoyable trip in Norway.",
			},
			{
				question: "Are you aware of local transportation options in Norway?",
				answers: ["yes", "no", "researching"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Know your transportation options for convenient travel within Norway.",
			},
			{
				question: "Have you researched Norwegian cuisine?",
				answers: ["yes", "no", "excited to try"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Explore and savor the delightful flavors of Norwegian cuisine.",
			},
			{
				question: "Do you have a power adapter for your devices?",
				answers: ["yes", "no", "need to buy one"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Ensure you have the right power adapter for your devices in Norway.",
			},
			{
				question: "Have you informed your bank about your travel to Norway?",
				answers: ["yes", "no", "not yet"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Notify your bank to avoid any issues with your cards during your trip to Norway.",
			},
			{
				question:
					"Are you familiar with popular tourist attractions in Norway?",
				answers: ["yes", "no", "researching"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Explore famous attractions for a memorable journey in Norway.",
			},
		],
	},
	{
		route: "polish-exploration-quiz",
		title: "Polish Exploration: Journey Readiness Quiz",
		description:
			"Embark on a cultural exploration of Poland! Evaluate your travel readiness with our quiz and ensure you're well-prepared to discover the rich history, charming cities, and vibrant traditions of this Eastern European gem.",
		result: 0,
		idx: 0,
		questions: [
			{
				question: "Do you have a valid passport?",
				answers: ["yes", "no", "not sure"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"A valid passport is essential for travel to Poland.",
			},
			{
				question: "Have you checked if you need a visa for Poland?",
				answers: ["yes", "no", "in process"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Ensure you have the necessary visa for entry into Poland.",
			},
			{
				question: "Have you researched Polish customs and etiquette?",
				answers: ["yes", "no", "in progress"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Familiarize yourself with Polish customs for a respectful visit.",
			},
			{
				question: "Do you have travel insurance for your trip?",
				answers: ["yes", "no", "considering"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Travel insurance is important for a worry-free journey.",
			},
			{
				question: "Are your vaccinations up to date?",
				answers: ["yes", "no", "consulting with doctor"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Ensure your vaccinations are current for a healthy visit.",
			},
			{
				question: "Have you booked your accommodation in Poland?",
				answers: ["yes", "no", "still deciding"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Secure your accommodation for a comfortable stay in Poland.",
			},
			{
				question: "Do you know basic Polish phrases?",
				answers: ["yes", "no", "learning"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Familiarize yourself with basic Polish phrases for better communication.",
			},
			{
				question: "Have you checked the local weather forecast?",
				answers: ["yes", "no", "not yet"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Check the weather forecast to pack accordingly for your trip to Poland.",
			},
			{
				question: "Do you know emergency numbers in Poland?",
				answers: ["yes", "no", "researching"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Familiarize yourself with emergency numbers for a safe visit to Poland.",
			},
			{
				question: "Have you planned your itinerary in Poland?",
				answers: [" yes", "no", "working on it"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Plan your itinerary for an organized and enjoyable trip in Poland.",
			},
			{
				question: "Are you aware of local transportation options in Poland?",
				answers: ["yes", "no", "researching"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Know your transportation options for convenient travel within Poland.",
			},
			{
				question: "Have you researched Polish cuisine?",
				answers: ["yes", " no", "excited to try"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Explore and savor the delightful flavors of Polish cuisine.",
			},
			{
				question: "Do you have a power adapter for your devices?",
				answers: ["yes", "no", "need to buy one"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Ensure you have the right power adapter for your devices in Poland.",
			},
			{
				question: "Have you informed your bank about your travel to Poland?",
				answers: ["yes", "no", "not yet"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Notify your bank to avoid any issues with your cards during your trip to Poland.",
			},
			{
				question:
					"Are you familiar with popular tourist attractions in Poland?",
				answers: ["yes", "no", "researching"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Explore famous attractions for a memorable journey in Poland.",
			},
		],
	},
	{
		route: "israeli-exploration-quiz",
		title: "Israeli Exploration: Journey Readiness Quiz",
		description:
			"Embark on a historic exploration of Israel! Evaluate your travel readiness with our quiz and ensure you're well-prepared to discover the ancient landmarks, diverse culture, and vibrant atmosphere of this Middle Eastern gem.",
		result: 0,
		idx: 0,
		questions: [
			{
				question: "Do you have a valid passport?",
				answers: ["yes", "no", "not sure"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"A valid passport is essential for travel to Israel.",
			},
			{
				question: "Have you checked if you need a visa for Israel?",
				answers: ["yes", "no", "in process"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Ensure you have the necessary visa for entry into Israel.",
			},
			{
				question: "Have you researched Israeli customs and etiquette?",
				answers: ["yes", "no", "in progress"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Familiarize yourself with Israeli customs for a respectful visit.",
			},
			{
				question: "Do you have travel insurance for your trip?",
				answers: ["yes", "no", "considering"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Travel insurance is important for a worry-free journey.",
			},
			{
				question: "Are your vaccinations up to date?",
				answers: ["yes", "no", "consulting with doctor"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Ensure your vaccinations are current for a healthy visit.",
			},
			{
				question: "Have you booked your accommodation in Israel?",
				answers: ["yes", "no", "still deciding"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Secure your accommodation for a comfortable stay in Israel.",
			},
			{
				question: "Do you know basic Hebrew phrases?",
				answers: ["yes", "no", "learning"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Familiarize yourself with basic Hebrew phrases for better communication.",
			},
			{
				question: "Have you checked the local weather forecast?",
				answers: ["yes", "no", "not yet"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Check the weather forecast to pack accordingly for your trip to Israel.",
			},
			{
				question: "Do you know emergency numbers in Israel?",
				answers: ["yes", "no", "researching"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Familiarize yourself with emergency numbers for a safe visit to Israel.",
			},
			{
				question: "Have you planned your itinerary in Israel?",
				answers: [" yes", "no", "working on it"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Plan your itinerary for an organized and enjoyable trip in Israel.",
			},
			{
				question: "Are you aware of local transportation options in Israel?",
				answers: ["yes", "no", "researching"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Know your transportation options for convenient travel within Israel.",
			},
			{
				question: "Have you researched Israeli cuisine?",
				answers: ["yes", " no", "excited to try"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Explore and savor the delightful flavors of Israeli cuisine.",
			},
			{
				question: "Do you have a power adapter for your devices?",
				answers: ["yes", "no", "need to buy one"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Ensure you have the right power adapter for your devices in Israel.",
			},
			{
				question: "Have you informed your bank about your travel to Israel?",
				answers: ["yes", "no", "not yet"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Notify your bank to avoid any issues with your cards during your trip to Israel.",
			},
			{
				question:
					"Are you familiar with popular tourist attractions in Israel?",
				answers: ["yes", "no", "researching"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Explore famous attractions for a memorable journey in Israel.",
			},
		],
	},
	{
		route: "saudi-exploration-quiz",
		title: "Saudi Exploration: Journey Readiness Quiz",
		description:
			"Embark on a cultural journey through Saudi Arabia! Evaluate your travel readiness with our quiz and ensure you're well-prepared to discover the rich history, diverse landscapes, and vibrant traditions of this Middle Eastern treasure.",
		result: 0,
		idx: 0,
		questions: [
			{
				question: "Do you have a valid passport?",
				answers: ["yes", "no", "not sure"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"A valid passport is essential for travel to Saudi Arabia.",
			},
			{
				question: "Have you checked if you need a visa for Saudi Arabia?",
				answers: ["yes", "no", "in process"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Ensure you have the necessary visa for entry into Saudi Arabia.",
			},
			{
				question: "Have you researched Saudi customs and etiquette?",
				answers: ["yes", "no", "in progress"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Familiarize yourself with Saudi customs for a respectful visit.",
			},
			{
				question: "Do you have travel insurance for your trip?",
				answers: ["yes", "no", "considering"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Travel insurance is important for a worry-free journey.",
			},
			{
				question: "Are your vaccinations up to date?",
				answers: ["yes", "no", "consulting with doctor"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Ensure your vaccinations are current for a healthy visit.",
			},
			{
				question: "Have you booked your accommodation in Saudi Arabia?",
				answers: ["yes", "no", "still deciding"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Secure your accommodation for a comfortable stay in Saudi Arabia.",
			},
			{
				question: "Do you know basic Arabic phrases?",
				answers: ["yes", "no", "learning"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Familiarize yourself with basic Arabic phrases for better communication.",
			},
			{
				question: "Have you checked the local weather forecast?",
				answers: ["yes", "no", "not yet"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Check the weather forecast to pack accordingly for your trip to Saudi Arabia.",
			},
			{
				question: "Do you know emergency numbers in Saudi Arabia?",
				answers: ["yes", "no", "researching"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Familiarize yourself with emergency numbers for a safe visit to Saudi Arabia.",
			},
			{
				question: "Have you planned your itinerary in Saudi Arabia?",
				answers: [" yes", "no", "working on it"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Plan your itinerary for an organized and enjoyable trip in Saudi Arabia.",
			},
			{
				question:
					"Are you aware of local transportation options in Saudi Arabia?",
				answers: ["yes", "no", "researching"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Know your transportation options for convenient travel within Saudi Arabia.",
			},
			{
				question: "Have you researched Saudi Arabian cuisine?",
				answers: ["yes", "no", "excited to try"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Explore and savor the delightful flavors of Saudi Arabian cuisine.",
			},
			{
				question: "Do you have a power adapter for your devices?",
				answers: ["yes", "no", "need to buy one"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Ensure you have the right power adapter for your devices in Saudi Arabia.",
			},
			{
				question:
					"Have you informed your bank about your travel to Saudi Arabia?",
				answers: ["yes", "no", "not yet"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Notify your bank to avoid any issues with your cards during your trip to Saudi Arabia.",
			},
			{
				question:
					"Are you familiar with popular tourist attractions in Saudi Arabia?",
				answers: ["yes", "no", "researching"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Explore famous attractions for a memorable journey in Saudi Arabia.",
			},
		],
	},
	{
		route: "colombian-adventure-quiz",
		title: "Colombian Adventure: Journey Readiness Quiz",
		description:
			"Embark on an exciting adventure in Colombia! Evaluate your travel readiness with our quiz and ensure you're well-prepared to explore the diverse landscapes, vibrant culture, and warm hospitality of this South American gem.",
		result: 0,
		idx: 0,
		questions: [
			{
				question: "Do you have a valid passport?",
				answers: ["yes", "no", "not sure"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"A valid passport is essential for travel to Colombia.",
			},
			{
				question: "Have you checked if you need a visa for Colombia?",
				answers: ["yes", "no", "in process"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Ensure you have the necessary visa for entry into Colombia.",
			},
			{
				question: "Have you researched Colombian customs and etiquette?",
				answers: ["yes", "no", "in progress"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Familiarize yourself with Colombian customs for a respectful visit.",
			},
			{
				question: "Do you have travel insurance for your trip?",
				answers: ["yes", "no", "considering"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Travel insurance is important for a worry-free journey.",
			},
			{
				question: "Are your vaccinations up to date?",
				answers: ["yes", "no", "consulting with doctor"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Ensure your vaccinations are current for a healthy visit.",
			},
			{
				question: "Have you booked your accommodation in Colombia?",
				answers: ["yes", "no", "still deciding"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Secure your accommodation for a comfortable stay in Colombia.",
			},
			{
				question: "Do you know basic Spanish phrases?",
				answers: ["yes", "no", "learning"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Familiarize yourself with basic Spanish phrases for better communication.",
			},
			{
				question: "Have you checked the local weather forecast?",
				answers: ["yes", "no", "not yet"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Check the weather forecast to pack accordingly for your trip to Colombia.",
			},
			{
				question: "Do you know emergency numbers in Colombia?",
				answers: ["yes", "no", "researching"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Familiarize yourself with emergency numbers for a safe visit to Colombia.",
			},
			{
				question: "Have you planned your itinerary in Colombia?",
				answers: [" yes", "no", "working on it"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Plan your itinerary for an organized and enjoyable trip in Colombia.",
			},
			{
				question: "Are you aware of local transportation options in Colombia?",
				answers: ["yes", "no", "researching"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Know your transportation options for convenient travel within Colombia.",
			},
			{
				question: "Have you researched Colombian cuisine?",
				answers: ["yes", " no", "excited to try"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Explore and savor the delightful flavors of Colombian cuisine.",
			},
			{
				question: "Do you have a power adapter for your devices?",
				answers: ["yes", "no", "need to buy one"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Ensure you have the right power adapter for your devices in Colombia.",
			},
			{
				question: "Have you informed your bank about your travel to Colombia?",
				answers: ["yes", "no", "not yet"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Notify your bank to avoid any issues with your cards during your trip to Colombia.",
			},
			{
				question:
					"Are you familiar with popular tourist attractions in Colombia?",
				answers: ["yes", "no", "researching"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Explore famous attractions for a memorable journey in Colombia.",
			},
		],
	},
	{
		route: "chilean-exploration-quiz",
		title: "Chilean Exploration: Journey Readiness Quiz",
		description:
			"Embark on a remarkable exploration of Chile! Evaluate your travel readiness with our quiz and ensure you're well-prepared to discover the diverse landscapes, rich culture, and unique experiences of this South American jewel.",
		result: 0,
		idx: 0,
		questions: [
			{
				question: "Do you have a valid passport?",
				answers: ["yes", "no", "not sure"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"A valid passport is essential for travel to Chile.",
			},
			{
				question: "Have you checked if you need a visa for Chile?",
				answers: ["yes", "no", "in process"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Ensure you have the necessary visa for entry into Chile.",
			},
			{
				question: "Have you researched Chilean customs and etiquette?",
				answers: ["yes", "no", "in progress"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Familiarize yourself with Chilean customs for a respectful visit.",
			},
			{
				question: "Do you have travel insurance for your trip?",
				answers: ["yes", "no", "considering"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Travel insurance is important for a worry-free journey.",
			},
			{
				question: "Are your vaccinations up to date?",
				answers: ["yes", "no", "consulting with doctor"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Ensure your vaccinations are current for a healthy visit.",
			},
			{
				question: "Have you booked your accommodation in Chile?",
				answers: ["yes", "no", "still deciding"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Secure your accommodation for a comfortable stay in Chile.",
			},
			{
				question: "Do you know basic Spanish phrases?",
				answers: ["yes", "no", "learning"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Familiarize yourself with basic Spanish phrases for better communication.",
			},
			{
				question: "Have you checked the local weather forecast?",
				answers: ["yes", "no", "not yet"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Check the weather forecast to pack accordingly for your trip to Chile.",
			},
			{
				question: "Do you know emergency numbers in Chile?",
				answers: ["yes", "no", "researching"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Familiarize yourself with emergency numbers for a safe visit to Chile.",
			},
			{
				question: "Have you planned your itinerary in Chile?",
				answers: [" yes", "no", "working on it"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Plan your itinerary for an organized and enjoyable trip in Chile.",
			},
			{
				question: "Are you aware of local transportation options in Chile?",
				answers: ["yes", "no", "researching"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Know your transportation options for convenient travel within Chile.",
			},
			{
				question: "Have you researched Chilean cuisine?",
				answers: ["yes", " no", "excited to try"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Explore and savor the delightful flavors of Chilean cuisine.",
			},
			{
				question: "Do you have a power adapter for your devices?",
				answers: ["yes", "no", "need to buy one"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Ensure you have the right power adapter for your devices in Chile.",
			},
			{
				question: "Have you informed your bank about your travel to Chile?",
				answers: ["yes", "no", "not yet"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Notify your bank to avoid any issues with your cards during your trip to Chile.",
			},
			{
				question: "Are you familiar with popular tourist attractions in Chile?",
				answers: ["yes", "no", "researching"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Explore famous attractions for a memorable journey in Chile.",
			},
		],
	},
	{
		route: "qatari-exploration-quiz",
		title: "Qatari Exploration: Journey Readiness Quiz",
		description:
			"Embark on a cultural journey through Qatar! Evaluate your travel readiness with our quiz and ensure you're well-prepared to discover the modern marvels, rich heritage, and warm hospitality of this Middle Eastern gem.",
		result: 0,
		idx: 0,
		questions: [
			{
				question: "Do you have a valid passport?",
				answers: ["yes", "no", "not sure"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"A valid passport is essential for travel to Qatar.",
			},
			{
				question: "Have you checked if you need a visa for Qatar?",
				answers: ["yes", "no", "in process"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Ensure you have the necessary visa for entry into Qatar.",
			},
			{
				question: "Have you researched Qatari customs and etiquette?",
				answers: ["yes", "no", "in progress"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Familiarize yourself with Qatari customs for a respectful visit.",
			},
			{
				question: "Do you have travel insurance for your trip?",
				answers: ["yes", "no", "considering"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Travel insurance is important for a worry-free journey.",
			},
			{
				question: "Are your vaccinations up to date?",
				answers: ["yes", "no", "consulting with doctor"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Ensure your vaccinations are current for a healthy visit.",
			},
			{
				question: "Have you booked your accommodation in Qatar?",
				answers: ["yes", "no", "still deciding"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Secure your accommodation for a comfortable stay in Qatar.",
			},
			{
				question: "Do you know basic Arabic phrases?",
				answers: ["yes", "no", "learning"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Familiarize yourself with basic Arabic phrases for better communication.",
			},
			{
				question: "Have you checked the local weather forecast?",
				answers: ["yes", "no", "not yet"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Check the weather forecast to pack accordingly for your trip to Qatar.",
			},
			{
				question: "Do you know emergency numbers in Qatar?",
				answers: ["yes", "no", "researching"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Familiarize yourself with emergency numbers for a safe visit to Qatar.",
			},
			{
				question: "Have you planned your itinerary in Qatar?",
				answers: [" yes", "no", "working on it"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Plan your itinerary for an organized and enjoyable trip in Qatar.",
			},
			{
				question: "Are you aware of local transportation options in Qatar?",
				answers: ["yes", "no", "researching"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Know your transportation options for convenient travel within Qatar.",
			},
			{
				question: "Have you researched Qatari cuisine?",
				answers: ["yes", " no", "excited to try"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Explore and savor the delightful flavors of Qatari cuisine.",
			},
			{
				question: "Do you have a power adapter for your devices?",
				answers: ["yes", "no", "need to buy one"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Ensure you have the right power adapter for your devices in Qatar.",
			},
			{
				question: "Have you informed your bank about your travel to Qatar?",
				answers: ["yes", "no", "not yet"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Notify your bank to avoid any issues with your cards during your trip to Qatar.",
			},
			{
				question: "Are you familiar with popular tourist attractions in Qatar?",
				answers: ["yes", "no", "researching"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Explore famous attractions for a memorable journey in Qatar.",
			},
		],
	},
	{
		route: "romanian-adventure-quiz",
		title: "Romanian Adventure: Journey Readiness Quiz",
		description:
			"Embark on an enchanting adventure in Romania! Evaluate your travel readiness with our quiz and ensure you're well-prepared to explore the medieval castles, picturesque landscapes, and vibrant culture of this Eastern European gem.",
		result: 0,
		idx: 0,
		questions: [
			{
				question: "Do you have a valid passport?",
				answers: ["yes", "no", "not sure"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"A valid passport is essential for travel to Romania.",
			},
			{
				question: "Have you checked if you need a visa for Romania?",
				answers: ["yes", "no", "in process"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Ensure you have the necessary visa for entry into Romania.",
			},
			{
				question: "Have you researched Romanian customs and etiquette?",
				answers: ["yes", "no", "in progress"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Familiarize yourself with Romanian customs for a respectful visit.",
			},
			{
				question: "Do you have travel insurance for your trip?",
				answers: ["yes", "no", "considering"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Travel insurance is important for a worry-free journey.",
			},
			{
				question: "Are your vaccinations up to date?",
				answers: ["yes", "no", "consulting with doctor"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Ensure your vaccinations are current for a healthy visit.",
			},
			{
				question: "Have you booked your accommodation in Romania?",
				answers: ["yes", "no", "still deciding"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Secure your accommodation for a comfortable stay in Romania.",
			},
			{
				question: "Do you know basic Romanian phrases?",
				answers: ["yes", "no", "learning"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Familiarize yourself with basic Romanian phrases for better communication.",
			},
			{
				question: "Have you checked the local weather forecast?",
				answers: ["yes", "no", "not yet"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Check the weather forecast to pack accordingly for your trip to Romania.",
			},
			{
				question: "Do you know emergency numbers in Romania?",
				answers: ["yes", "no", "researching"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Familiarize yourself with emergency numbers for a safe visit to Romania.",
			},
			{
				question: "Have you planned your itinerary in Romania?",
				answers: [" yes", "no", "working on it"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Plan your itinerary for an organized and enjoyable trip in Romania.",
			},
			{
				question: "Are you aware of local transportation options in Romania?",
				answers: ["yes", "no", "researching"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Know your transportation options for convenient travel within Romania.",
			},
			{
				question: "Have you researched Romanian cuisine?",
				answers: ["yes", " no", "excited to try"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Explore and savor the delightful flavors of Romanian cuisine.",
			},
			{
				question: "Do you have a power adapter for your devices?",
				answers: ["yes", "no", "need to buy one"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Ensure you have the right power adapter for your devices in Romania.",
			},
			{
				question: "Have you informed your bank about your travel to Romania?",
				answers: ["yes", "no", "not yet"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Notify your bank to avoid any issues with your cards during your trip to Romania.",
			},
			{
				question:
					"Are you familiar with popular tourist attractions in Romania?",
				answers: ["yes", "no", "researching"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Explore famous attractions for a memorable journey in Romania.",
			},
		],
	},
];

const db = [
	{
		route: "great-wall-explorer",
		title: "Discover China: Journey Readiness Quiz",
		description:
			"Embark on an enchanting expedition to China! Assess your travel readiness with our quiz and ensure you're fully equipped to explore the wonders of this culturally rich and diverse country.",
		high: "Congratulations! You are well-prepared to embark on your journey to China. Bon voyage!",
		low: "Oops! It seems you may need to make some preparations before your journey to China. Review your answers and ensure you're fully equipped for your adventure.",
		questions: [
			{
				question: "Do you have a valid passport?",
				answers: ["yes", "no", "not sure"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"A valid passport is essential for travel to China.",
			},
			{
				question: "Have you obtained a Chinese visa?",
				answers: ["yes", "no", "in process"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Ensure you have a valid Chinese visa for entry.",
			},
			{
				question: "Have you researched the cultural etiquette in China?",
				answers: ["yes", "no", "in progress"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Familiarize yourself with cultural norms for a respectful visit.",
			},
			{
				question: "Do you have travel insurance for your trip?",
				answers: ["yes", "no", "considering"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Travel insurance is important for a worry-free journey.",
			},
			{
				question: "Are your vaccinations up to date?",
				answers: ["yes", "no", "consulting with doctor"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Ensure your vaccinations are current for a healthy visit.",
			},
			{
				question: "Have you booked your accommodation in China?",
				answers: ["yes", "no", "still deciding"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Secure your accommodation for a comfortable stay.",
			},
			{
				question: "Do you know basic Mandarin phrases?",
				answers: ["yes", "no", "learning"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Familiarize yourself with basic Mandarin phrases for better communication.",
			},
			{
				question:
					"Have you checked the weather forecast for your travel dates?",
				answers: ["yes", "no", "not yet"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Check the weather forecast to pack accordingly.",
			},
			{
				question: "Do you know the emergency numbers in China?",
				answers: ["yes", "no", "researching"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Familiarize yourself with emergency numbers for a safe visit.",
			},
			{
				question: "Have you researched Chinese cuisine?",
				answers: ["yes", "no", "excited to try"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Explore and savor the delightful flavors of Chinese cuisine.",
			},
			{
				question: "Do you know the local transportation options in China?",
				answers: ["yes", "no", "researching"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Know your transportation options for convenient travel within China.",
			},
			{
				question: "Have you informed your bank about your travel to China?",
				answers: ["yes", "no", "not yet"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Notify your bank to avoid any issues with your cards during your trip.",
			},
			{
				question: "Are you aware of the Chinese currency and exchange rates?",
				answers: ["yes", "no", "researching"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Understand the local currency and exchange rates for smoother transactions.",
			},
			{
				question:
					"Have you packed essentials like a power adapter and comfortable walking shoes?",
				answers: ["yes", "no", "need to buy some"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Pack essential items like a power adapter and comfortable walking shoes for your trip.",
			},
			{
				question: "Are you familiar with popular tourist attractions in China?",
				answers: ["yes", "no", "researching"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Explore famous attractions for a memorable journey in China.",
			},
		],
	},
	{
		route: "bellissimo-italy",
		title: "La Dolce Vita: Italy Travel Readiness Quiz",
		description:
			"Prepare for an enchanting journey to Italy! Evaluate your travel readiness with our quiz and ensure you're equipped to savor the beauty, culture, and flavors of this timeless destination.",
		high: "Congratulations! You are well-prepared to embark on your journey to Italy. Buon viaggio!",
		low: "Oops! It seems you may need to make some preparations before your journey to Italy. Review your answers and ensure you're fully equipped for your adventure.",
		questions: [
			{
				question: "Do you have a valid passport?",
				answers: ["yes", "no", "not sure"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"A valid passport is essential for travel to Italy.",
			},
			{
				question: "Have you obtained a Schengen visa for Italy?",
				answers: ["yes", "no", "in process"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Ensure you have a Schengen visa for entry into Italy.",
			},
			{
				question: "Have you booked your accommodation in Italy?",
				answers: ["yes", "no", "still deciding"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Secure your accommodation for a comfortable stay in Italy.",
			},
			{
				question: "Do you have travel insurance for your trip?",
				answers: ["yes", "no", "considering"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Travel insurance is important for a worry-free journey.",
			},
			{
				question: "Are your vaccinations up to date?",
				answers: ["yes", "no", "consulting with doctor"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Ensure your vaccinations are current for a healthy visit.",
			},
			{
				question: "Do you know basic Italian phrases?",
				answers: ["yes", "no", "learning"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Familiarize yourself with basic Italian phrases for better communication.",
			},
			{
				question: "Have you checked the local weather forecast?",
				answers: ["yes", "no", "not yet"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Check the weather forecast to pack accordingly for your trip to Italy.",
			},
			{
				question: "Do you know emergency numbers in Italy?",
				answers: ["yes", "no", "researching"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Familiarize yourself with emergency numbers for a safe visit to Italy.",
			},
			{
				question: "Have you planned your itinerary in Italy?",
				answers: ["yes", "no", "working on it"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Plan your itinerary for an organized and enjoyable trip in Italy.",
			},
			{
				question: "Are you aware of local transportation options in Italy?",
				answers: ["yes", "no", "researching"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Know your transportation options for convenient travel within Italy.",
			},
			{
				question: "Have you researched Italian cuisine?",
				answers: ["yes", "no", "excited to try"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Explore and savor the delightful flavors of Italian cuisine.",
			},
			{
				question: "Do you have a power adapter for your devices?",
				answers: ["yes", "no", "need to buy one"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Ensure you have the right power adapter for your devices in Italy.",
			},
			{
				question: "Have you informed your bank about your travel to Italy?",
				answers: ["yes", "no", "not yet"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Notify your bank to avoid any issues with your cards during your trip to Italy.",
			},
			{
				question:
					"Are you familiar with the Italian currency and exchange rates?",
				answers: ["yes", "no", "researching"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Understand the local currency and exchange rates for smoother transactions in Italy.",
			},
			{
				question:
					"Have you packed essentials like comfortable walking shoes and a travel guide?",
				answers: ["yes", "no", "need to buy some"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Pack essential items like comfortable walking shoes and a travel guide for your trip to Italy.",
			},
		],
	},
	{
		route: "turkish-delight-explorer",
		title: "Turkish Delight: Journey Readiness Quiz",
		description:
			"Embark on a captivating journey to Turkey! Assess your travel readiness with our quiz and ensure you're well-prepared to experience the rich history, vibrant culture, and warm hospitality of this fascinating destination.",
		high: "Congratulations! You are well-prepared to embark on your journey to Turkey. ?yi yolculuklar!",
		low: "Oops! It seems you may need to make some preparations before your journey to Turkey. Review your answers and ensure you're fully equipped for your adventure.",
		questions: [
			{
				question: "Do you have a valid passport?",
				answers: ["yes", "no", "not sure"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"A valid passport is essential for travel to Turkey.",
			},
			{
				question: "Have you obtained a Turkish visa?",
				answers: ["yes", "no", "in process"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Ensure you have a valid Turkish visa for entry into the country.",
			},
			{
				question: "Have you researched cultural norms in Turkey?",
				answers: ["yes", "no", "in progress"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Familiarize yourself with cultural norms for a respectful visit.",
			},
			{
				question: "Do you have travel insurance for your trip?",
				answers: ["yes", "no", "considering"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Travel insurance is important for a worry-free journey.",
			},
			{
				question: "Are your vaccinations up to date?",
				answers: ["yes", "no", "consulting with doctor"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Ensure your vaccinations are current for a healthy visit.",
			},
			{
				question: "Have you booked your accommodation in Turkey?",
				answers: ["yes", "no", "still deciding"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Secure your accommodation for a comfortable stay in Turkey.",
			},
			{
				question: "Do you know basic Turkish phrases?",
				answers: ["yes", "no", "learning"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Familiarize yourself with basic Turkish phrases for better communication.",
			},
			{
				question: "Have you checked the local weather forecast?",
				answers: ["yes", "no", "not yet"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Check the weather forecast to pack accordingly for your trip to Turkey.",
			},
			{
				question: "Do you know emergency numbers in Turkey?",
				answers: ["yes", "no", "researching"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Familiarize yourself with emergency numbers for a safe visit to Turkey.",
			},
			{
				question: "Have you planned your itinerary in Turkey?",
				answers: ["yes", "no", "working on it"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Plan your itinerary for an organized and enjoyable trip in Turkey.",
			},
			{
				question: "Are you aware of local transportation options in Turkey?",
				answers: ["yes", "no", "researching"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Know your transportation options for convenient travel within Turkey.",
			},
			{
				question: "Have you researched Turkish cuisine?",
				answers: ["yes", "no", "excited to try"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Explore and savor the delightful flavors of Turkish cuisine.",
			},
			{
				question: "Do you have a power adapter for your devices?",
				answers: ["yes", "no", "need to buy one"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Ensure you have the right power adapter for your devices in Turkey.",
			},
			{
				question: "Have you informed your bank about your travel to Turkey?",
				answers: ["yes", "no", "not yet"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Notify your bank to avoid any issues with your cards during your trip to Turkey.",
			},
			{
				question:
					"Are you familiar with popular tourist attractions in Turkey?",
				answers: ["yes", "no", "researching"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Explore famous attractions for a memorable journey in Turkey.",
			},
		],
	},
	{
		route: "german-adventure-quiz",
		title: "Discover Deutschland: Journey Readiness Quiz",
		description:
			"Embark on a German adventure! Evaluate your travel readiness with our quiz and ensure you're well-prepared to explore the rich history, vibrant culture, and picturesque landscapes of Germany.",
		high: "Congratulations! You are well-prepared to embark on your journey to Germany. Gute Reise!",
		low: "Oops! It seems you may need to make some preparations before your journey to Germany. Review your answers and ensure you're fully equipped for your adventure.",
		questions: [
			{
				question: "Do you have a valid passport?",
				answers: ["yes", "no", "not sure"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"A valid passport is essential for travel to Germany.",
			},
			{
				question: "Have you checked if you need a visa for Germany?",
				answers: ["yes", "no", "in process"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Ensure you have the necessary visa for entry into Germany.",
			},
			{
				question: "Have you researched German customs and etiquette?",
				answers: ["yes", "no", "in progress"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Familiarize yourself with German customs for a respectful visit.",
			},
			{
				question: "Do you have travel insurance for your trip?",
				answers: ["yes", "no", "considering"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Travel insurance is important for a worry-free journey.",
			},
			{
				question: "Are your vaccinations up to date?",
				answers: ["yes", "no", "consulting with doctor"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Ensure your vaccinations are current for a healthy visit.",
			},
			{
				question: "Have you booked your accommodation in Germany?",
				answers: ["yes", "no", "still deciding"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Secure your accommodation for a comfortable stay in Germany.",
			},
			{
				question: "Do you know basic German phrases?",
				answers: ["yes", "no", "learning"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Familiarize yourself with basic German phrases for better communication.",
			},
			{
				question: "Have you checked the local weather forecast?",
				answers: ["yes", "no", "not yet"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Check the weather forecast to pack accordingly for your trip to Germany.",
			},
			{
				question: "Do you know emergency numbers in Germany?",
				answers: ["yes", "no", "researching"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Familiarize yourself with emergency numbers for a safe visit to Germany.",
			},
			{
				question: "Have you planned your itinerary in Germany?",
				answers: ["yes", "no", "working on it"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Plan your itinerary for an organized and enjoyable trip in Germany.",
			},
			{
				question: "Are you aware of local transportation options in Germany?",
				answers: ["yes", "no", "researching"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Know your transportation options for convenient travel within Germany.",
			},
			{
				question: "Have you researched German cuisine?",
				answers: ["yes", "no", "excited to try"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Explore and savor the delightful flavors of German cuisine.",
			},
			{
				question: "Do you have a power adapter for your devices?",
				answers: ["yes", "no", "need to buy one"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Ensure you have the right power adapter for your devices in Germany.",
			},
			{
				question: "Have you informed your bank about your travel to Germany?",
				answers: ["yes", "no", "not yet"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Notify your bank to avoid any issues with your cards during your trip to Germany.",
			},
			{
				question:
					"Are you familiar with popular tourist attractions in Germany?",
				answers: ["yes", "no", "researching"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Explore famous attractions for a memorable journey in Germany.",
			},
		],
	},
	{
		route: "british-explorer-quiz",
		title: "Britannia Unveiled: UK Travel Readiness Quiz",
		description:
			"Embark on an extraordinary journey to the United Kingdom! Evaluate your travel readiness with our quiz and ensure you're well-prepared to explore the history, culture, and charm of this diverse and fascinating destination.",
		high: "Congratulations! You are well-prepared to embark on your journey to explore the United Kingdom. Have a fantastic trip!",
		low: "Oops! It seems you may need to make some preparations before your journey to the United Kingdom. Review your answers and ensure you're fully equipped for your adventure.",
		questions: [
			{
				question: "Do you have a valid passport?",
				answers: ["yes", "no", "not sure"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"A valid passport is essential for travel to the United Kingdom.",
			},
			{
				question: "Have you checked if you need a visa for the UK?",
				answers: ["yes", "no", "in process"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Ensure you have the necessary visa for entry into the United Kingdom.",
			},
			{
				question: "Have you researched British customs and etiquette?",
				answers: ["yes", "no", "in progress"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Familiarize yourself with British customs for a respectful visit.",
			},
			{
				question: "Do you have travel insurance for your trip?",
				answers: ["yes", "no", "considering"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Travel insurance is important for a worry-free journey.",
			},
			{
				question: "Are your vaccinations up to date?",
				answers: ["yes", "no", "consulting with doctor"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Ensure your vaccinations are current for a healthy visit.",
			},
			{
				question: "Have you booked your accommodation in the UK?",
				answers: ["yes", "no", "still deciding"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Secure your accommodation for a comfortable stay in the United Kingdom.",
			},
			{
				question: "Do you know basic British phrases?",
				answers: ["yes", "no", "learning"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Familiarize yourself with basic British phrases for better communication.",
			},
			{
				question: "Have you checked the local weather forecast?",
				answers: ["yes", "no", "not yet"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Check the weather forecast to pack accordingly for your trip to the UK.",
			},
			{
				question: "Do you know emergency numbers in the UK?",
				answers: ["yes", "no", "researching"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Familiarize yourself with emergency numbers for a safe visit to the United Kingdom.",
			},
			{
				question: "Have you planned your itinerary in the UK?",
				answers: ["yes", "no", "working on it"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Plan your itinerary for an organized and enjoyable trip in the United Kingdom.",
			},
			{
				question: "Are you aware of local transportation options in the UK?",
				answers: ["yes", "no", "researching"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Know your transportation options for convenient travel within the United Kingdom.",
			},
			{
				question: "Have you researched British cuisine?",
				answers: ["yes", "no", "excited to try"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Explore and savor the delightful flavors of British cuisine.",
			},
			{
				question: "Do you have a power adapter for your devices?",
				answers: ["yes", "no", "need to buy one"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Ensure you have the right power adapter for your devices in the United Kingdom.",
			},
			{
				question: "Have you informed your bank about your travel to the UK?",
				answers: ["yes", "no", "not yet"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Notify your bank to avoid any issues with your cards during your trip to the United Kingdom.",
			},
			{
				question:
					"Are you familiar with popular tourist attractions in the UK?",
				answers: ["yes", "no", "researching"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Explore famous attractions for a memorable journey in the United Kingdom.",
			},
		],
	},
	{
		route: "mexican-explorer-quiz",
		title: "ĄViva México! Travel Readiness Quiz",
		description:
			"Embark on a vibrant journey to Mexico! Evaluate your travel readiness with our quiz and ensure you're well-prepared to experience the rich culture, stunning landscapes, and warm hospitality of this lively destination.",
		high: "ĄFelicidades! You are well-prepared to embark on your journey to explore Mexico. ĄQue tengas un viaje fantástico!",
		low: "ĄAy, ay, ay! It seems you may need to make some preparations before your journey to Mexico. Review your answers and ensure you're fully equipped for your adventure.",
		questions: [
			{
				question: "Do you have a valid passport?",
				answers: ["yes", "no", "not sure"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"A valid passport is essential for travel to Mexico.",
			},
			{
				question: "Have you checked if you need a visa for Mexico?",
				answers: ["yes", "no", "in process"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Ensure you have the necessary visa for entry into Mexico.",
			},
			{
				question: "Have you researched Mexican customs and etiquette?",
				answers: ["yes", "no", "in progress"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Familiarize yourself with Mexican customs for a respectful visit.",
			},
			{
				question: "Do you have travel insurance for your trip?",
				answers: ["yes", "no", "considering"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Travel insurance is important for a worry-free journey.",
			},
			{
				question: "Are your vaccinations up to date?",
				answers: ["yes", "no", "consulting with doctor"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Ensure your vaccinations are current for a healthy visit.",
			},
			{
				question: "Have you booked your accommodation in Mexico?",
				answers: ["yes", "no", "still deciding"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Secure your accommodation for a comfortable stay in Mexico.",
			},
			{
				question: "Do you know basic Spanish phrases?",
				answers: ["yes", "no", "learning"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Familiarize yourself with basic Spanish phrases for better communication.",
			},
			{
				question: "Have you checked the local weather forecast?",
				answers: ["yes", "no", "not yet"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Check the weather forecast to pack accordingly for your trip to Mexico.",
			},
			{
				question: "Do you know emergency numbers in Mexico?",
				answers: ["yes", "no", "researching"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Familiarize yourself with emergency numbers for a safe visit to Mexico.",
			},
			{
				question: "Have you planned your itinerary in Mexico?",
				answers: ["yes", "no", "working on it"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Plan your itinerary for an organized and enjoyable trip in Mexico.",
			},
			{
				question: "Are you aware of local transportation options in Mexico?",
				answers: ["yes", "no", "researching"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Know your transportation options for convenient travel within Mexico.",
			},
			{
				question: "Have you researched Mexican cuisine?",
				answers: ["yes", "no", "excited to try"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Explore and savor the delightful flavors of Mexican cuisine.",
			},
			{
				question: "Do you have a power adapter for your devices?",
				answers: ["yes", "no", "need to buy one"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Ensure you have the right power adapter for your devices in Mexico.",
			},
			{
				question: "Have you informed your bank about your travel to Mexico?",
				answers: ["yes", "no", "not yet"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Notify your bank to avoid any issues with your cards during your trip to Mexico.",
			},
			{
				question:
					"Are you familiar with popular tourist attractions in Mexico?",
				answers: ["yes", "no", "researching"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Explore famous attractions for a memorable journey in Mexico.",
			},
		],
	},
	{
		route: "thai-adventure-quiz",
		title: "Thailand Odyssey: Journey Readiness Quiz",
		description:
			"Embark on an exotic adventure to Thailand! Evaluate your travel readiness with our quiz and ensure you're well-prepared to immerse yourself in the vibrant culture, stunning landscapes, and warm hospitality of this enchanting destination.",
		high: "Congratulations! You are well-prepared to embark on your journey to explore Thailand. Have an amazing trip!",
		low: "It seems you may need to make some preparations before your journey to Thailand. Review your answers and ensure you're fully equipped for your adventure.",
		questions: [
			{
				question: "Do you have a valid passport?",
				answers: ["yes", "no", "not sure"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"A valid passport is essential for travel to Thailand.",
			},
			{
				question: "Have you checked if you need a visa for Thailand?",
				answers: ["yes", "no", "in process"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Ensure you have the necessary visa for entry into Thailand.",
			},
			{
				question: "Have you researched Thai customs and etiquette?",
				answers: ["yes", "no", "in progress"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Familiarize yourself with Thai customs for a respectful visit.",
			},
			{
				question: "Do you have travel insurance for your trip?",
				answers: ["yes", "no", "considering"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Travel insurance is important for a worry-free journey.",
			},
			{
				question: "Are your vaccinations up to date?",
				answers: ["yes", "no", "consulting with doctor"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Ensure your vaccinations are current for a healthy visit.",
			},
			{
				question: "Have you booked your accommodation in Thailand?",
				answers: ["yes", "no", "still deciding"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Secure your accommodation for a comfortable stay in Thailand.",
			},
			{
				question: "Do you know basic Thai phrases?",
				answers: ["yes", "no", "learning"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Familiarize yourself with basic Thai phrases for better communication.",
			},
			{
				question: "Have you checked the local weather forecast?",
				answers: ["yes", "no", "not yet"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Check the weather forecast to pack accordingly for your trip to Thailand.",
			},
			{
				question: "Do you know emergency numbers in Thailand?",
				answers: ["yes", "no", "researching"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Familiarize yourself with emergency numbers for a safe visit to Thailand.",
			},
			{
				question: "Have you planned your itinerary in Thailand?",
				answers: ["yes", "no", "working on it"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Plan your itinerary for an organized and enjoyable trip in Thailand.",
			},
			{
				question: "Are you aware of local transportation options in Thailand?",
				answers: ["yes", "no", "researching"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Know your transportation options for convenient travel within Thailand.",
			},
			{
				question: "Have you researched Thai cuisine?",
				answers: ["yes", "no", "excited to try"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Explore and savor the delightful flavors of Thai cuisine.",
			},
			{
				question: "Do you have a power adapter for your devices?",
				answers: ["yes", "no", "need to buy one"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Ensure you have the right power adapter for your devices in Thailand.",
			},
			{
				question: "Have you informed your bank about your travel to Thailand?",
				answers: ["yes", "no", "not yet"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Notify your bank to avoid any issues with your cards during your trip to Thailand.",
			},
			{
				question:
					"Are you familiar with popular tourist attractions in Thailand?",
				answers: ["yes", "no", "researching"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Explore famous attractions for a memorable journey in Thailand.",
			},
		],
	},
	{
		route: "alpine-explorer-quiz",
		title: "Alpine Adventure: Austria Travel Readiness Quiz",
		description:
			"Embark on a picturesque journey to Austria! Assess your travel readiness with our quiz and ensure you're well-prepared to experience the charm of the Alps, rich cultural heritage, and delightful Austrian hospitality.",
		high: "Congratulations! You are well-prepared to embark on your journey to explore Austria. Have an amazing trip!",
		low: "It seems you may need to make some preparations before your journey to Austria. Review your answers and ensure you're fully equipped for your adventure.",
		questions: [
			{
				question: "Do you have a valid passport?",
				answers: ["yes", "no", "not sure"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"A valid passport is essential for travel to Austria.",
			},
			{
				question: "Have you checked if you need a visa for Austria?",
				answers: ["yes", "no", "in process"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Ensure you have the necessary visa for entry into Austria.",
			},
			{
				question: "Have you researched Austrian customs and etiquette?",
				answers: ["yes", "no", "in progress"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Familiarize yourself with Austrian customs for a respectful visit.",
			},
			{
				question: "Do you have travel insurance for your trip?",
				answers: ["yes", "no", "considering"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Travel insurance is important for a worry-free journey.",
			},
			{
				question: "Are your vaccinations up to date?",
				answers: ["yes", "no", "consulting with doctor"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Ensure your vaccinations are current for a healthy visit.",
			},
			{
				question: "Have you booked your accommodation in Austria?",
				answers: ["yes", "no", "still deciding"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Secure your accommodation for a comfortable stay in Austria.",
			},
			{
				question:
					"Do you know basic German phrases? (Austrian official language)",
				answers: ["yes", "no", "learning"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Familiarize yourself with basic German phrases for better communication in Austria.",
			},
			{
				question: "Have you checked the local weather forecast?",
				answers: ["yes", "no", "not yet"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Check the weather forecast to pack accordingly for your trip to Austria.",
			},
			{
				question: "Do you know emergency numbers in Austria?",
				answers: ["yes", "no", "researching"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Familiarize yourself with emergency numbers for a safe visit to Austria.",
			},
			{
				question: "Have you planned your itinerary in Austria?",
				answers: ["yes", "no", "working on it"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Plan your itinerary for an organized and enjoyable trip in Austria.",
			},
			{
				question: "Are you aware of local transportation options in Austria?",
				answers: ["yes", "no", "researching"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Know your transportation options for convenient travel within Austria.",
			},
			{
				question: "Have you researched Austrian cuisine?",
				answers: ["yes", "no", "excited to try"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Explore and savor the delightful flavors of Austrian cuisine.",
			},
			{
				question: "Do you have a power adapter for your devices?",
				answers: ["yes", "no", "need to buy one"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Ensure you have the right power adapter for your devices in Austria.",
			},
			{
				question: "Have you informed your bank about your travel to Austria?",
				answers: ["yes", "no", "not yet"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Notify your bank to avoid any issues with your cards during your trip to Austria.",
			},
			{
				question:
					"Are you familiar with popular tourist attractions in Austria?",
				answers: ["yes", "no", "researching"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Explore famous attractions for a memorable journey in Austria.",
			},
		],
	},
	{
		route: "japanese-discovery-quiz",
		title: "Land of the Rising Sun: Japan Travel Readiness Quiz",
		description:
			"Embark on a cultural odyssey to Japan! Assess your travel readiness with our quiz and ensure you're well-prepared to explore the ancient traditions, modern marvels, and unique charm of the Land of the Rising Sun.",
		high: "Congratulations! You are well-prepared to embark on your journey to explore Japan. Have an amazing trip!",
		low: "It seems you may need to make some preparations before your journey to Japan. Review your answers and ensure you're fully equipped for your adventure.",
		questions: [
			{
				question: "Do you have a valid passport?",
				answers: ["yes", "no", "not sure"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"A valid passport is essential for travel to Japan.",
			},
			{
				question: "Have you checked if you need a visa for Japan?",
				answers: ["yes", "no", "in process"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Ensure you have the necessary visa for entry into Japan.",
			},
			{
				question: "Have you researched Japanese customs and etiquette?",
				answers: ["yes", "no", "in progress"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Familiarize yourself with Japanese customs for a respectful visit.",
			},
			{
				question: "Do you have travel insurance for your trip?",
				answers: ["yes", "no", "considering"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Travel insurance is important for a worry-free journey.",
			},
			{
				question: "Are your vaccinations up to date?",
				answers: ["yes", "no", "consulting with doctor"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Ensure your vaccinations are current for a healthy visit.",
			},
			{
				question: "Have you booked your accommodation in Japan?",
				answers: ["yes", "no", "still deciding"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Secure your accommodation for a comfortable stay in Japan.",
			},
			{
				question: "Do you know basic Japanese phrases?",
				answers: ["yes", "no", "learning"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Familiarize yourself with basic Japanese phrases for better communication.",
			},
			{
				question: "Have you checked the local weather forecast?",
				answers: ["yes", "no", "not yet"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Check the weather forecast to pack accordingly for your trip to Japan.",
			},
			{
				question: "Do you know emergency numbers in Japan?",
				answers: ["yes", "no", "researching"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Familiarize yourself with emergency numbers for a safe visit to Japan.",
			},
			{
				question: "Have you planned your itinerary in Japan?",
				answers: ["yes", "no", "working on it"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Plan your itinerary for an organized and enjoyable trip in Japan.",
			},
			{
				question: "Are you aware of local transportation options in Japan?",
				answers: ["yes", "no", "researching"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Know your transportation options for convenient travel within Japan.",
			},
			{
				question: "Have you researched Japanese cuisine?",
				answers: ["yes", "no", "excited to try"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Explore and savor the delightful flavors of Japanese cuisine.",
			},
			{
				question: "Do you have a power adapter for your devices?",
				answers: ["yes", "no", "need to buy one"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Ensure you have the right power adapter for your devices in Japan.",
			},
			{
				question: "Have you informed your bank about your travel to Japan?",
				answers: ["yes", "no", "not yet"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Notify your bank to avoid any issues with your cards during your trip to Japan.",
			},
			{
				question: "Are you familiar with popular tourist attractions in Japan?",
				answers: ["yes", "no", "researching"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Explore famous attractions for a memorable journey in Japan.",
			},
		],
	},
	{
		route: "malaysian-explorer-quiz",
		title: "Malaysian Mystique: Journey Readiness Quiz",
		description:
			"Embark on a mystical journey to Malaysia! Evaluate your travel readiness with our quiz and ensure you're well-prepared to experience the diverse culture, stunning landscapes, and warm hospitality of this enchanting destination.",
		high: "Congratulations! You are well-prepared to embark on your journey to explore Malaysia. Have an amazing trip!",
		low: "It seems you may need to make some preparations before your journey to Malaysia. Review your answers and ensure you're fully equipped for your adventure.",
		questions: [
			{
				question: "Do you have a valid passport?",
				answers: ["yes", "no", "not sure"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"A valid passport is essential for travel to Malaysia.",
			},
			{
				question: "Have you checked if you need a visa for Malaysia?",
				answers: ["yes", "no", "in process"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Ensure you have the necessary visa for entry into Malaysia.",
			},
			{
				question: "Have you researched Malaysian customs and etiquette?",
				answers: ["yes", "no", "in progress"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Familiarize yourself with Malaysian customs for a respectful visit.",
			},
			{
				question: "Do you have travel insurance for your trip?",
				answers: ["yes", "no", "considering"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Travel insurance is important for a worry-free journey.",
			},
			{
				question: "Are your vaccinations up to date?",
				answers: ["yes", "no", "consulting with doctor"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Ensure your vaccinations are current for a healthy visit.",
			},
			{
				question: "Have you booked your accommodation in Malaysia?",
				answers: ["yes", "no", "still deciding"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Secure your accommodation for a comfortable stay in Malaysia.",
			},
			{
				question: "Do you know basic Malay phrases?",
				answers: ["yes", "no", "learning"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Familiarize yourself with basic Malay phrases for better communication.",
			},
			{
				question: "Have you checked the local weather forecast?",
				answers: ["yes", "no", "not yet"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Check the weather forecast to pack accordingly for your trip to Malaysia.",
			},
			{
				question: "Do you know emergency numbers in Malaysia?",
				answers: ["yes", "no", "researching"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Familiarize yourself with emergency numbers for a safe visit to Malaysia.",
			},
			{
				question: "Have you planned your itinerary in Malaysia?",
				answers: ["yes", "no", "working on it"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Plan your itinerary for an organized and enjoyable trip in Malaysia.",
			},
			{
				question: "Are you aware of local transportation options in Malaysia?",
				answers: ["yes", "no", "researching"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Know your transportation options for convenient travel within Malaysia.",
			},
			{
				question: "Have you researched Malaysian cuisine?",
				answers: ["yes", "no", "excited to try"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Explore and savor the delightful flavors of Malaysian cuisine.",
			},
			{
				question: "Do you have a power adapter for your devices?",
				answers: ["yes", "no", "need to buy one"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Ensure you have the right power adapter for your devices in Malaysia.",
			},
			{
				question: "Have you informed your bank about your travel to Malaysia?",
				answers: ["yes", "no", "not yet"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Notify your bank to avoid any issues with your cards during your trip to Malaysia.",
			},
			{
				question:
					"Are you familiar with popular tourist attractions in Malaysia?",
				answers: ["yes", "no", "researching"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Explore famous attractions for a memorable journey in Malaysia.",
			},
		],
	},
	{
		route: "maple-adventure-quiz",
		title: "Canadian Wilderness Explorer: Journey Readiness Quiz",
		description:
			"Embark on a journey to the heart of Canada! Evaluate your travel readiness with our quiz and ensure you're well-prepared to explore the vast wilderness, diverse culture, and friendly hospitality of this captivating destination.",
		high: "Congratulations! You are well-prepared to embark on your journey to explore Canada. Have an amazing trip!",
		low: "It seems you may need to make some preparations before your journey to Canada. Review your answers and ensure you're fully equipped for your adventure.",
		questions: [
			{
				question: "Do you have a valid passport?",
				answers: ["yes", "no", "not sure"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"A valid passport is essential for travel to Canada.",
			},
			{
				question: "Have you checked if you need a visa for Canada?",
				answers: ["yes", "no", "in process"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Ensure you have the necessary visa for entry into Canada.",
			},
			{
				question: "Have you researched Canadian customs and etiquette?",
				answers: ["yes", "no", "in progress"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Familiarize yourself with Canadian customs for a respectful visit.",
			},
			{
				question: "Do you have travel insurance for your trip?",
				answers: ["yes", "no", "considering"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Travel insurance is important for a worry-free journey.",
			},
			{
				question: "Are your vaccinations up to date?",
				answers: ["yes", "no", "consulting with doctor"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Ensure your vaccinations are current for a healthy visit.",
			},
			{
				question: "Have you booked your accommodation in Canada?",
				answers: ["yes", "no", "still deciding"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Secure your accommodation for a comfortable stay in Canada.",
			},
			{
				question: "Do you know basic French phrases? (if visiting Quebec)",
				answers: ["yes", "no", "learning"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Familiarize yourself with basic French phrases for better communication in Quebec, Canada.",
			},
			{
				question: "Have you checked the local weather forecast?",
				answers: ["yes", "no", "not yet"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Check the weather forecast to pack accordingly for your trip to Canada.",
			},
			{
				question: "Do you know emergency numbers in Canada?",
				answers: ["yes", "no", "researching"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Familiarize yourself with emergency numbers for a safe visit to Canada.",
			},
			{
				question: "Have you planned your itinerary in Canada?",
				answers: ["yes", "no", "working on it"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Plan your itinerary for an organized and enjoyable trip in Canada.",
			},
			{
				question: "Are you aware of local transportation options in Canada?",
				answers: ["yes", "no", "researching"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Know your transportation options for convenient travel within Canada.",
			},
			{
				question: "Have you researched Canadian cuisine?",
				answers: ["yes", "no", "excited to try"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Explore and savor the delightful flavors of Canadian cuisine.",
			},
			{
				question: "Do you have a power adapter for your devices?",
				answers: ["yes", "no", "need to buy one"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Ensure you have the right power adapter for your devices in Canada.",
			},
			{
				question: "Have you informed your bank about your travel to Canada?",
				answers: ["yes", "no", "not yet"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Notify your bank to avoid any issues with your cards during your trip to Canada.",
			},
			{
				question:
					"Are you familiar with popular tourist attractions in Canada?",
				answers: ["yes", "no", "researching"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Explore famous attractions for a memorable journey in Canada.",
			},
		],
	},
	{
		route: "russian-adventure-quiz",
		title: "Russian Expedition: Journey Readiness Quiz",
		description:
			"Embark on an epic adventure to Russia! Evaluate your travel readiness with our quiz and ensure you're well-prepared to explore the vast landscapes, rich history, and unique culture of this enigmatic destination.",
		high: "Congratulations! You are well-prepared to embark on your journey to explore Russia. Have an amazing trip!",
		low: "It seems you may need to make some preparations before your journey to Russia. Review your answers and ensure you're fully equipped for your adventure.",
		questions: [
			{
				question: "Do you have a valid passport?",
				answers: ["yes", "no", "not sure"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"A valid passport is essential for travel to Russia.",
			},
			{
				question: "Have you checked if you need a visa for Russia?",
				answers: ["yes", "no", "in process"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Ensure you have the necessary visa for entry into Russia.",
			},
			{
				question: "Have you researched Russian customs and etiquette?",
				answers: ["yes", "no", "in progress"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Familiarize yourself with Russian customs for a respectful visit.",
			},
			{
				question: "Do you have travel insurance for your trip?",
				answers: ["yes", "no", "considering"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Travel insurance is important for a worry-free journey.",
			},
			{
				question: "Are your vaccinations up to date?",
				answers: ["yes", "no", "consulting with doctor"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Ensure your vaccinations are current for a healthy visit.",
			},
			{
				question: "Have you booked your accommodation in Russia?",
				answers: ["yes", "no", "still deciding"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Secure your accommodation for a comfortable stay in Russia.",
			},
			{
				question: "Do you know basic Russian phrases?",
				answers: ["yes", "no", "learning"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Familiarize yourself with basic Russian phrases for better communication.",
			},
			{
				question: "Have you checked the local weather forecast?",
				answers: ["yes", "no", "not yet"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Check the weather forecast to pack accordingly for your trip to Russia.",
			},
			{
				question: "Do you know emergency numbers in Russia?",
				answers: ["yes", "no", "researching"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Familiarize yourself with emergency numbers for a safe visit to Russia.",
			},
			{
				question: "Have you planned your itinerary in Russia?",
				answers: ["yes", "no", "working on it"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Plan your itinerary for an organized and enjoyable trip in Russia.",
			},
			{
				question: "Are you aware of local transportation options in Russia?",
				answers: ["yes", "no", "researching"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Know your transportation options for convenient travel within Russia.",
			},
			{
				question: "Have you researched Russian cuisine?",
				answers: ["yes", "no", "excited to try"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Explore and savor the delightful flavors of Russian cuisine.",
			},
			{
				question: "Do you have a power adapter for your devices?",
				answers: ["yes", "no", "need to buy one"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Ensure you have the right power adapter for your devices in Russia.",
			},
			{
				question: "Have you informed your bank about your travel to Russia?",
				answers: ["yes", "no", "not yet"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Notify your bank to avoid any issues with your cards during your trip to Russia.",
			},
			{
				question:
					"Are you familiar with popular tourist attractions in Russia?",
				answers: ["yes", "no", "researching"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Explore famous attractions for a memorable journey in Russia.",
			},
		],
	},
	{
		route: "greek-odyssey-quiz",
		title: "Greek Odyssey: Journey Readiness Quiz",
		description:
			"Embark on a mythical journey to Greece! Evaluate your travel readiness with our quiz and ensure you're well-prepared to explore the ancient wonders, sun-kissed landscapes, and warm hospitality of this timeless destination.",
		high: "Congratulations! You are well-prepared to embark on your journey to explore Greece. Have an amazing trip!",
		low: "It seems you may need to make some preparations before your journey to Greece. Review your answers and ensure you're fully equipped for your adventure.",
		questions: [
			{
				question: "Do you have a valid passport?",
				answers: ["yes", "no", "not sure"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"A valid passport is essential for travel to Greece.",
			},
			{
				question: "Have you checked if you need a visa for Greece?",
				answers: ["yes", "no", "in process"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Ensure you have the necessary visa for entry into Greece.",
			},
			{
				question: "Have you researched Greek customs and etiquette?",
				answers: ["yes", "no", "in progress"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Familiarize yourself with Greek customs for a respectful visit.",
			},
			{
				question: "Do you have travel insurance for your trip?",
				answers: ["yes", "no", "considering"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Travel insurance is important for a worry-free journey.",
			},
			{
				question: "Are your vaccinations up to date?",
				answers: ["yes", "no", "consulting with doctor"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Ensure your vaccinations are current for a healthy visit.",
			},
			{
				question: "Have you booked your accommodation in Greece?",
				answers: ["yes", "no", "still deciding"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Secure your accommodation for a comfortable stay in Greece.",
			},
			{
				question: "Do you know basic Greek phrases?",
				answers: ["yes", "no", "learning"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Familiarize yourself with basic Greek phrases for better communication.",
			},
			{
				question: "Have you checked the local weather forecast?",
				answers: ["yes", "no", "not yet"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Check the weather forecast to pack accordingly for your trip to Greece.",
			},
			{
				question: "Do you know emergency numbers in Greece?",
				answers: ["yes", "no", "researching"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Familiarize yourself with emergency numbers for a safe visit to Greece.",
			},
			{
				question: "Have you planned your itinerary in Greece?",
				answers: ["yes", "no", "working on it"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Plan your itinerary for an organized and enjoyable trip in Greece.",
			},
			{
				question: "Are you aware of local transportation options in Greece?",
				answers: ["yes", "no", "researching"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Know your transportation options for convenient travel within Greece.",
			},
			{
				question: "Have you researched Greek cuisine?",
				answers: ["yes", "no", "excited to try"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Explore and savor the delightful flavors of Greek cuisine.",
			},
			{
				question: "Do you have a power adapter for your devices?",
				answers: ["yes", "no", "need to buy one"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Ensure you have the right power adapter for your devices in Greece.",
			},
			{
				question: "Have you informed your bank about your travel to Greece?",
				answers: ["yes", "no", "not yet"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Notify your bank to avoid any issues with your cards during your trip to Greece.",
			},
			{
				question:
					"Are you familiar with popular tourist attractions in Greece?",
				answers: ["yes", "no", "researching"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Explore famous attractions for a memorable journey in Greece.",
			},
		],
	},
	{
		route: "korean-adventure-quiz",
		title: "Korean Discovery: Journey Readiness Quiz",
		description:
			"Embark on a captivating journey to South Korea! Evaluate your travel readiness with our quiz and ensure you're well-prepared to explore the vibrant culture, modern wonders, and warm hospitality of this dynamic destination.",
		high: "Congratulations! You are well-prepared to embark on your journey to explore South Korea. Have an amazing trip!",
		low: "It seems you may need to make some preparations before your journey to South Korea. Review your answers and ensure you're fully equipped for your adventure.",
		questions: [
			{
				question: "Do you have a valid passport?",
				answers: ["yes", "no", "not sure"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"A valid passport is essential for travel to South Korea.",
			},
			{
				question: "Have you checked if you need a visa for South Korea?",
				answers: ["yes", "no", "in process"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Ensure you have the necessary visa for entry into South Korea.",
			},
			{
				question: "Have you researched Korean customs and etiquette?",
				answers: ["yes", "no", "in progress"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Familiarize yourself with Korean customs for a respectful visit.",
			},
			{
				question: "Do you have travel insurance for your trip?",
				answers: ["yes", "no", "considering"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Travel insurance is important for a worry-free journey.",
			},
			{
				question: "Are your vaccinations up to date?",
				answers: ["yes", "no", "consulting with doctor"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Ensure your vaccinations are current for a healthy visit.",
			},
			{
				question: "Have you booked your accommodation in South Korea?",
				answers: ["yes", "no", "still deciding"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Secure your accommodation for a comfortable stay in South Korea.",
			},
			{
				question: "Do you know basic Korean phrases?",
				answers: ["yes", "no", "learning"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Familiarize yourself with basic Korean phrases for better communication.",
			},
			{
				question: "Have you checked the local weather forecast?",
				answers: ["yes", "no", "not yet"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Check the weather forecast to pack accordingly for your trip to South Korea.",
			},
			{
				question: "Do you know emergency numbers in South Korea?",
				answers: ["yes", "no", "researching"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Familiarize yourself with emergency numbers for a safe visit to South Korea.",
			},
			{
				question: "Have you planned your itinerary in South Korea?",
				answers: ["yes", "no", "working on it"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Plan your itinerary for an organized and enjoyable trip in South Korea.",
			},
			{
				question:
					"Are you aware of local transportation options in South Korea?",
				answers: ["yes", "no", "researching"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Know your transportation options for convenient travel within South Korea.",
			},
			{
				question: "Have you researched Korean cuisine?",
				answers: ["yes", "no", "excited to try"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Explore and savor the delightful flavors of Korean cuisine.",
			},
			{
				question: "Do you have a power adapter for your devices?",
				answers: ["yes", "no", "need to buy one"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Ensure you have the right power adapter for your devices in South Korea.",
			},
			{
				question:
					"Have you informed your bank about your travel to South Korea?",
				answers: ["yes", "no", "not yet"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Notify your bank to avoid any issues with your cards during your trip to South Korea.",
			},
			{
				question:
					"Are you familiar with popular tourist attractions in South Korea?",
				answers: ["yes", "no", "researching"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Explore famous attractions for a memorable journey in South Korea.",
			},
		],
	},
	{
		route: "brazilian-exploration-quiz",
		title: "Brazilian Exploration: Journey Readiness Quiz",
		description:
			"Embark on an exciting journey to Brazil! Evaluate your travel readiness with our quiz and ensure you're well-prepared to discover the breathtaking landscapes, vibrant culture, and sizzling energy of this diverse and enchanting country.",
		high: "Congratulations! You are well-prepared to embark on your journey to explore Brazil. Have an amazing trip!",
		low: "It seems you may need to make some preparations before your journey to Brazil. Review your answers and ensure you're fully equipped for your adventure.",
		questions: [
			{
				question: "Do you have a valid passport?",
				answers: ["yes", "no", "not sure"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"A valid passport is essential for travel to Brazil.",
			},
			{
				question: "Have you checked if you need a visa for Brazil?",
				answers: ["yes", "no", "in process"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Ensure you have the necessary visa for entry into Brazil.",
			},
			{
				question: "Have you researched Brazilian customs and etiquette?",
				answers: ["yes", "no", "in progress"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Familiarize yourself with Brazilian customs for a respectful visit.",
			},
			{
				question: "Do you have travel insurance for your trip?",
				answers: ["yes", "no", "considering"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Travel insurance is important for a worry-free journey.",
			},
			{
				question: "Are your vaccinations up to date?",
				answers: ["yes", "no", "consulting with doctor"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Ensure your vaccinations are current for a healthy visit.",
			},
			{
				question: "Have you booked your accommodation in Brazil?",
				answers: ["yes", "no", "still deciding"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Secure your accommodation for a comfortable stay in Brazil.",
			},
			{
				question: "Do you know basic Portuguese phrases?",
				answers: ["yes", "no", "learning"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Familiarize yourself with basic Portuguese phrases for better communication.",
			},
			{
				question: "Have you checked the local weather forecast?",
				answers: ["yes", "no", "not yet"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Check the weather forecast to pack accordingly for your trip to Brazil.",
			},
			{
				question: "Do you know emergency numbers in Brazil?",
				answers: ["yes", "no", "researching"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Familiarize yourself with emergency numbers for a safe visit to Brazil.",
			},
			{
				question: "Have you planned your itinerary in Brazil?",
				answers: ["yes", "no", "working on it"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Plan your itinerary for an organized and enjoyable trip in Brazil.",
			},
			{
				question: "Are you aware of local transportation options in Brazil?",
				answers: ["yes", "no", "researching"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Know your transportation options for convenient travel within Brazil.",
			},
			{
				question: "Have you researched Brazilian cuisine?",
				answers: ["yes", "no", "excited to try"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Explore and savor the delightful flavors of Brazilian cuisine.",
			},
			{
				question: "Do you have a power adapter for your devices?",
				answers: ["yes", "no", "need to buy one"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Ensure you have the right power adapter for your devices in Brazil.",
			},
			{
				question: "Have you informed your bank about your travel to Brazil?",
				answers: ["yes", "no", "not yet"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Notify your bank to avoid any issues with your cards during your trip to Brazil.",
			},
			{
				question:
					"Are you familiar with popular tourist attractions in Brazil?",
				answers: ["yes", "no", "researching"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Explore famous attractions for a memorable journey in Brazil.",
			},
		],
	},
	{
		route: "indian-odyssey-quiz",
		title: "Indian Odyssey: Journey Readiness Quiz",
		description:
			"Embark on a fascinating journey to India! Evaluate your travel readiness with our quiz and ensure you're well-prepared to explore the diverse landscapes, rich history, and vibrant culture of this enchanting country.",
		high: "Congratulations! You are well-prepared to embark on your journey to explore India. Have an amazing trip!",
		low: "It seems you may need to make some preparations before your journey to India. Review your answers and ensure you're fully equipped for your adventure.",
		questions: [
			{
				question: "Do you have a valid passport?",
				answers: ["yes", "no", "not sure"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"A valid passport is essential for travel to India.",
			},
			{
				question: "Have you checked if you need a visa for India?",
				answers: ["yes", "no", "in process"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Ensure you have the necessary visa for entry into India.",
			},
			{
				question: "Have you researched Indian customs and etiquette?",
				answers: ["yes", "no", "in progress"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Familiarize yourself with Indian customs for a respectful visit.",
			},
			{
				question: "Do you have travel insurance for your trip?",
				answers: ["yes", "no", "considering"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Travel insurance is important for a worry-free journey.",
			},
			{
				question: "Are your vaccinations up to date?",
				answers: ["yes", "no", "consulting with doctor"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Ensure your vaccinations are current for a healthy visit.",
			},
			{
				question: "Have you booked your accommodation in India?",
				answers: ["yes", "no", "still deciding"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Secure your accommodation for a comfortable stay in India.",
			},
			{
				question:
					"Do you know basic phrases in Hindi or the local language of your destination?",
				answers: ["yes", "no", "learning"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Familiarize yourself with basic phrases for better communication in India.",
			},
			{
				question: "Have you checked the local weather forecast?",
				answers: ["yes", "no", "not yet"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Check the weather forecast to pack accordingly for your trip to India.",
			},
			{
				question: "Do you know emergency numbers in India?",
				answers: ["yes", "no", "researching"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Familiarize yourself with emergency numbers for a safe visit to India.",
			},
			{
				question: "Have you planned your itinerary in India?",
				answers: ["yes", "no", "working on it"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Plan your itinerary for an organized and enjoyable trip in India.",
			},
			{
				question: "Are you aware of local transportation options in India?",
				answers: ["yes", "no", "researching"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Know your transportation options for convenient travel within India.",
			},
			{
				question: "Have you researched Indian cuisine?",
				answers: ["yes", "no", "excited to try"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Explore and savor the delightful flavors of Indian cuisine.",
			},
			{
				question: "Do you have a power adapter for your devices?",
				answers: ["yes", "no", "need to buy one"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Ensure you have the right power adapter for your devices in India.",
			},
			{
				question: "Have you informed your bank about your travel to India?",
				answers: ["yes", "no", "not yet"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Notify your bank to avoid any issues with your cards during your trip to India.",
			},
			{
				question: "Are you familiar with popular tourist attractions in India?",
				answers: ["yes", "no", "researching"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Explore famous attractions for a memorable journey in India.",
			},
		],
	},
	{
		route: "swiss-adventure-quiz",
		title: "Swiss Adventure: Journey Readiness Quiz",
		description:
			"Embark on a breathtaking adventure to Switzerland! Evaluate your travel readiness with our quiz and ensure you're well-prepared to explore the stunning landscapes, pristine Alpine beauty, and charming cities of this enchanting country.",
		high: "Congratulations! You are well-prepared to embark on your journey to explore Switzerland. Have an amazing trip!",
		low: "It seems you may need to make some preparations before your journey to Switzerland. Review your answers and ensure you're fully equipped for your adventure.",
		questions: [
			{
				question: "Do you have a valid passport?",
				answers: ["yes", "no", "not sure"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"A valid passport is essential for travel to Switzerland.",
			},
			{
				question: "Have you checked if you need a visa for Switzerland?",
				answers: ["yes", "no", "in process"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Ensure you have the necessary visa for entry into Switzerland.",
			},
			{
				question: "Have you researched Swiss customs and etiquette?",
				answers: ["yes", "no", "in progress"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Familiarize yourself with Swiss customs for a respectful visit.",
			},
			{
				question: "Do you have travel insurance for your trip?",
				answers: ["yes", "no", "considering"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Travel insurance is important for a worry-free journey.",
			},
			{
				question: "Are your vaccinations up to date?",
				answers: ["yes", "no", "consulting with doctor"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Ensure your vaccinations are current for a healthy visit.",
			},
			{
				question: "Have you booked your accommodation in Switzerland?",
				answers: ["yes", "no", "still deciding"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Secure your accommodation for a comfortable stay in Switzerland.",
			},
			{
				question: "Do you know basic Swiss German, French, or Italian phrases?",
				answers: ["yes", "no", "learning"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Familiarize yourself with basic phrases for better communication in Switzerland.",
			},
			{
				question: "Have you checked the local weather forecast?",
				answers: ["yes", "no", "not yet"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Check the weather forecast to pack accordingly for your trip to Switzerland.",
			},
			{
				question: "Do you know emergency numbers in Switzerland?",
				answers: ["yes", "no", "researching"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Familiarize yourself with emergency numbers for a safe visit to Switzerland.",
			},
			{
				question: "Have you planned your itinerary in Switzerland?",
				answers: ["yes", "no", "working on it"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Plan your itinerary for an organized and enjoyable trip in Switzerland.",
			},
			{
				question:
					"Are you aware of local transportation options in Switzerland?",
				answers: ["yes", "no", "researching"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Know your transportation options for convenient travel within Switzerland.",
			},
			{
				question: "Have you researched Swiss cuisine?",
				answers: ["yes", "no", "excited to try"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Explore and savor the delightful flavors of Swiss cuisine.",
			},
			{
				question: "Do you have a power adapter for your devices?",
				answers: ["yes", "no", "need to buy one"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Ensure you have the right power adapter for your devices in Switzerland.",
			},
			{
				question:
					"Have you informed your bank about your travel to Switzerland?",
				answers: ["yes", "no", "not yet"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Notify your bank to avoid any issues with your cards during your trip to Switzerland.",
			},
			{
				question:
					"Are you familiar with popular tourist attractions in Switzerland?",
				answers: ["yes", "no", "researching"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Explore famous attractions for a memorable journey in Switzerland.",
			},
		],
	},
	{
		route: "portuguese-exploration-quiz",
		title: "Portuguese Exploration: Journey Readiness Quiz",
		description:
			"Embark on a captivating exploration of Portugal! Evaluate your travel readiness with our quiz and ensure you're well-prepared to discover the historic charm, scenic beauty, and vibrant culture of this enchanting destination.",
		high: "Congratulations! You are well-prepared to embark on your journey to explore Portugal. Have an amazing trip!",
		low: "It seems you may need to make some preparations before your journey to Portugal. Review your answers and ensure you're fully equipped for your adventure.",
		questions: [
			{
				question: "Do you have a valid passport?",
				answers: ["yes", "no", "not sure"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"A valid passport is essential for travel to Portugal.",
			},
			{
				question: "Have you checked if you need a visa for Portugal?",
				answers: ["yes", "no", "in process"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Ensure you have the necessary visa for entry into Portugal.",
			},
			{
				question: "Have you researched Portuguese customs and etiquette?",
				answers: ["yes", "no", "in progress"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Familiarize yourself with Portuguese customs for a respectful visit.",
			},
			{
				question: "Do you have travel insurance for your trip?",
				answers: ["yes", "no", "considering"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Travel insurance is important for a worry-free journey.",
			},
			{
				question: "Are your vaccinations up to date?",
				answers: ["yes", "no", "consulting with doctor"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Ensure your vaccinations are current for a healthy visit.",
			},
			{
				question: "Have you booked your accommodation in Portugal?",
				answers: ["yes", "no", "still deciding"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Secure your accommodation for a comfortable stay in Portugal.",
			},
			{
				question: "Do you know basic Portuguese phrases?",
				answers: ["yes", "no", "learning"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Familiarize yourself with basic Portuguese phrases for better communication.",
			},
			{
				question: "Have you checked the local weather forecast?",
				answers: ["yes", "no", "not yet"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Check the weather forecast to pack accordingly for your trip to Portugal.",
			},
			{
				question: "Do you know emergency numbers in Portugal?",
				answers: ["yes", "no", "researching"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Familiarize yourself with emergency numbers for a safe visit to Portugal.",
			},
			{
				question: "Have you planned your itinerary in Portugal?",
				answers: ["yes", "no", "working on it"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Plan your itinerary for an organized and enjoyable trip in Portugal.",
			},
			{
				question: "Are you aware of local transportation options in Portugal?",
				answers: ["yes", "no", "researching"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Know your transportation options for convenient travel within Portugal.",
			},
			{
				question: "Have you researched Portuguese cuisine?",
				answers: ["yes", "no", "excited to try"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Explore and savor the delightful flavors of Portuguese cuisine.",
			},
			{
				question: "Do you have a power adapter for your devices?",
				answers: ["yes", "no", "need to buy one"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Ensure you have the right power adapter for your devices in Portugal.",
			},
			{
				question: "Have you informed your bank about your travel to Portugal?",
				answers: ["yes", "no", "not yet"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Notify your bank to avoid any issues with your cards during your trip to Portugal.",
			},
			{
				question:
					"Are you familiar with popular tourist attractions in Portugal?",
				answers: ["yes", "no", "researching"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Explore famous attractions for a memorable journey in Portugal.",
			},
		],
	},
	{
		route: "swedish-exploration-quiz",
		title: "Swedish Exploration: Journey Readiness Quiz",
		description:
			"Embark on a captivating exploration of Sweden! Evaluate your travel readiness with our quiz and ensure you're well-prepared to discover the scenic landscapes, cultural richness, and modern charm of this beautiful Scandinavian destination.",
		high: "Congratulations! You are well-prepared to embark on your journey to explore Sweden. Have an amazing trip!",
		low: "It seems you may need to make some preparations before your journey to Sweden. Review your answers and ensure you're fully equipped for your adventure.",
		questions: [
			{
				question: "Do you have a valid passport?",
				answers: ["yes", "no", "not sure"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"A valid passport is essential for travel to Sweden.",
			},
			{
				question: "Have you checked if you need a visa for Sweden?",
				answers: ["yes", "no", "in process"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Ensure you have the necessary visa for entry into Sweden.",
			},
			{
				question: "Have you researched Swedish customs and etiquette?",
				answers: ["yes", "no", "in progress"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Familiarize yourself with Swedish customs for a respectful visit.",
			},
			{
				question: "Do you have travel insurance for your trip?",
				answers: ["yes", "no", "considering"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Travel insurance is important for a worry-free journey.",
			},
			{
				question: "Are your vaccinations up to date?",
				answers: ["yes", "no", "consulting with doctor"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Ensure your vaccinations are current for a healthy visit.",
			},
			{
				question: "Have you booked your accommodation in Sweden?",
				answers: ["yes", "no", "still deciding"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Secure your accommodation for a comfortable stay in Sweden.",
			},
			{
				question: "Do you know basic Swedish phrases?",
				answers: ["yes", "no", "learning"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Familiarize yourself with basic Swedish phrases for better communication.",
			},
			{
				question: "Have you checked the local weather forecast?",
				answers: ["yes", "no", "not yet"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Check the weather forecast to pack accordingly for your trip to Sweden.",
			},
			{
				question: "Do you know emergency numbers in Sweden?",
				answers: ["yes", "no", "researching"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Familiarize yourself with emergency numbers for a safe visit to Sweden.",
			},
			{
				question: "Have you planned your itinerary in Sweden?",
				answers: ["yes", "no", "working on it"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Plan your itinerary for an organized and enjoyable trip in Sweden.",
			},
			{
				question: "Are you aware of local transportation options in Sweden?",
				answers: ["yes", "no", "researching"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Know your transportation options for convenient travel within Sweden.",
			},
			{
				question: "Have you researched Swedish cuisine?",
				answers: ["yes", "no", "excited to try"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Explore and savor the delightful flavors of Swedish cuisine.",
			},
			{
				question: "Do you have a power adapter for your devices?",
				answers: ["yes", "no", "need to buy one"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Ensure you have the right power adapter for your devices in Sweden.",
			},
			{
				question: "Have you informed your bank about your travel to Sweden?",
				answers: ["yes", "no", "not yet"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Notify your bank to avoid any issues with your cards during your trip to Sweden.",
			},
			{
				question:
					"Are you familiar with popular tourist attractions in Sweden?",
				answers: ["yes", "no", "researching"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Explore famous attractions for a memorable journey in Sweden.",
			},
		],
	},
	{
		route: "egyptian-exploration-quiz",
		title: "Egyptian Exploration: Journey Readiness Quiz",
		description:
			"Embark on a fascinating exploration of Egypt! Evaluate your travel readiness with our quiz and ensure you're well-prepared to discover the ancient wonders, rich history, and vibrant culture of this mesmerizing destination.",
		high: "Congratulations! You are well-prepared to embark on your journey to explore Egypt. Have an amazing trip!",
		low: "It seems you may need to make some preparations before your journey to Egypt. Review your answers and ensure you're fully equipped for your adventure.",
		questions: [
			{
				question: "Do you have a valid passport?",
				answers: ["yes", "no", "not sure"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"A valid passport is essential for travel to Egypt.",
			},
			{
				question: "Have you checked if you need a visa for Egypt?",
				answers: ["yes", "no", "in process"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Ensure you have the necessary visa for entry into Egypt.",
			},
			{
				question: "Have you researched Egyptian customs and etiquette?",
				answers: ["yes", "no", "in progress"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Familiarize yourself with Egyptian customs for a respectful visit.",
			},
			{
				question: "Do you have travel insurance for your trip?",
				answers: ["yes", "no", "considering"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Travel insurance is important for a worry-free journey.",
			},
			{
				question: "Are your vaccinations up to date?",
				answers: ["yes", "no", "consulting with doctor"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Ensure your vaccinations are current for a healthy visit.",
			},
			{
				question: "Have you booked your accommodation in Egypt?",
				answers: ["yes", "no", "still deciding"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Secure your accommodation for a comfortable stay in Egypt.",
			},
			{
				question: "Do you know basic Arabic phrases?",
				answers: ["yes", "no", "learning"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Familiarize yourself with basic Arabic phrases for better communication.",
			},
			{
				question: "Have you checked the local weather forecast?",
				answers: ["yes", "no", "not yet"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Check the weather forecast to pack accordingly for your trip to Egypt.",
			},
			{
				question: "Do you know emergency numbers in Egypt?",
				answers: ["yes", "no", "researching"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Familiarize yourself with emergency numbers for a safe visit to Egypt.",
			},
			{
				question: "Have you planned your itinerary in Egypt?",
				answers: ["yes", "no", "working on it"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Plan your itinerary for an organized and enjoyable trip in Egypt.",
			},
			{
				question: "Are you aware of local transportation options in Egypt?",
				answers: ["yes", "no", "researching"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Know your transportation options for convenient travel within Egypt.",
			},
			{
				question: "Have you researched Egyptian cuisine?",
				answers: ["yes", "no", "excited to try"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Explore and savor the delightful flavors of Egyptian cuisine.",
			},
			{
				question: "Do you have a power adapter for your devices?",
				answers: ["yes", "no", "need to buy one"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Ensure you have the right power adapter for your devices in Egypt.",
			},
			{
				question: "Have you informed your bank about your travel to Egypt?",
				answers: ["yes", "no", "not yet"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Notify your bank to avoid any issues with your cards during your trip to Egypt.",
			},
			{
				question: "Are you familiar with popular tourist attractions in Egypt?",
				answers: ["yes", "no", "researching"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Explore famous attractions for a memorable journey in Egypt.",
			},
		],
	},
	{
		route: "argentinian-discovery-quiz",
		title: "Argentinian Discovery: Journey Readiness Quiz",
		description:
			"Embark on a vibrant discovery of Argentina! Evaluate your travel readiness with our quiz and ensure you're well-prepared to explore the diverse landscapes, rich culture, and passionate rhythms of this captivating South American destination.",
		high: "Congratulations! You are well-prepared to embark on your journey to explore Argentina. Have an amazing trip!",
		low: "It seems you may need to make some preparations before your journey to Argentina. Review your answers and ensure you're fully equipped for your adventure.",
		questions: [
			{
				question: "Do you have a valid passport?",
				answers: ["yes", "no", "not sure"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"A valid passport is essential for travel to Argentina.",
			},
			{
				question: "Have you checked if you need a visa for Argentina?",
				answers: ["yes", "no", "in process"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Ensure you have the necessary visa for entry into Argentina.",
			},
			{
				question: "Have you researched Argentine customs and etiquette?",
				answers: ["yes", "no", "in progress"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Familiarize yourself with Argentine customs for a respectful visit.",
			},
			{
				question: "Do you have travel insurance for your trip?",
				answers: ["yes", "no", "considering"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Travel insurance is important for a worry-free journey.",
			},
			{
				question: "Are your vaccinations up to date?",
				answers: ["yes", "no", "consulting with doctor"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Ensure your vaccinations are current for a healthy visit.",
			},
			{
				question: "Have you booked your accommodation in Argentina?",
				answers: ["yes", "no", "still deciding"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Secure your accommodation for a comfortable stay in Argentina.",
			},
			{
				question: "Do you know basic Spanish phrases?",
				answers: ["yes", "no", "learning"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Familiarize yourself with basic Spanish phrases for better communication.",
			},
			{
				question: "Have you checked the local weather forecast?",
				answers: ["yes", "no", "not yet"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Check the weather forecast to pack accordingly for your trip to Argentina.",
			},
			{
				question: "Do you know emergency numbers in Argentina?",
				answers: ["yes", "no", "researching"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Familiarize yourself with emergency numbers for a safe visit to Argentina.",
			},
			{
				question: "Have you planned your itinerary in Argentina?",
				answers: ["yes", "no", "working on it"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Plan your itinerary for an organized and enjoyable trip in Argentina.",
			},
			{
				question: "Are you aware of local transportation options in Argentina?",
				answers: ["yes", "no", "researching"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Know your transportation options for convenient travel within Argentina.",
			},
			{
				question: "Have you researched Argentine cuisine?",
				answers: ["yes", "no", "excited to try"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Explore and savor the delightful flavors of Argentine cuisine.",
			},
			{
				question: "Do you have a power adapter for your devices?",
				answers: ["yes", "no", "need to buy one"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Ensure you have the right power adapter for your devices in Argentina.",
			},
			{
				question: "Have you informed your bank about your travel to Argentina?",
				answers: ["yes", "no", "not yet"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Notify your bank to avoid any issues with your cards during your trip to Argentina.",
			},
			{
				question:
					"Are you familiar with popular tourist attractions in Argentina?",
				answers: ["yes", "no", "researching"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Explore famous attractions for a memorable journey in Argentina.",
			},
		],
	},
	{
		route: "moroccan-exploration-quiz",
		title: "Moroccan Exploration: Journey Readiness Quiz",
		description:
			"Embark on a captivating exploration of Morocco! Evaluate your travel readiness with our quiz and ensure you're well-prepared to discover the vibrant souks, historic medinas, and diverse landscapes of this enchanting North African destination.",
		high: "Congratulations! You are well-prepared to embark on your journey to explore Morocco. Have an amazing trip!",
		low: "It seems you may need to make some preparations before your journey to Morocco. Review your answers and ensure you're fully equipped for your adventure.",
		questions: [
			{
				question: "Do you have a valid passport?",
				answers: ["yes", "no", "not sure"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"A valid passport is essential for travel to Morocco.",
			},
			{
				question: "Have you checked if you need a visa for Morocco?",
				answers: ["yes", "no", "in process"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Ensure you have the necessary visa for entry into Morocco.",
			},
			{
				question: "Have you researched Moroccan customs and etiquette?",
				answers: ["yes", "no", "in progress"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Familiarize yourself with Moroccan customs for a respectful visit.",
			},
			{
				question: "Do you have travel insurance for your trip?",
				answers: ["yes", "no", "considering"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Travel insurance is important for a worry-free journey.",
			},
			{
				question: "Are your vaccinations up to date?",
				answers: ["yes", "no", "consulting with doctor"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Ensure your vaccinations are current for a healthy visit.",
			},
			{
				question: "Have you booked your accommodation in Morocco?",
				answers: ["yes", "no", "still deciding"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Secure your accommodation for a comfortable stay in Morocco.",
			},
			{
				question: "Do you know basic Arabic phrases?",
				answers: ["yes", "no", "learning"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Familiarize yourself with basic Arabic phrases for better communication.",
			},
			{
				question: "Have you checked the local weather forecast?",
				answers: ["yes", "no", "not yet"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Check the weather forecast to pack accordingly for your trip to Morocco.",
			},
			{
				question: "Do you know emergency numbers in Morocco?",
				answers: ["yes", "no", "researching"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Familiarize yourself with emergency numbers for a safe visit to Morocco.",
			},
			{
				question: "Have you planned your itinerary in Morocco?",
				answers: [" yes", "no", "working on it"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Plan your itinerary for an organized and enjoyable trip in Morocco.",
			},
			{
				question: "Are you aware of local transportation options in Morocco?",
				answers: ["yes", "no", "researching"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Know your transportation options for convenient travel within Morocco.",
			},
			{
				question: "Have you researched Moroccan cuisine?",
				answers: ["yes", "no", "excited to try"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Explore and savor the delightful flavors of Moroccan cuisine.",
			},
			{
				question: "Do you have a power adapter for your devices?",
				answers: ["yes", "no", "need to buy one"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Ensure you have the right power adapter for your devices in Morocco.",
			},
			{
				question: "Have you informed your bank about your travel to Morocco?",
				answers: ["yes", "no", "not yet"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Notify your bank to avoid any issues with your cards during your trip to Morocco.",
			},
			{
				question:
					"Are you familiar with popular tourist attractions in Morocco?",
				answers: ["yes", "no", "researching"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Explore famous attractions for a memorable journey in Morocco.",
			},
		],
	},
	{
		route: "uae-adventure-quiz",
		title: "UAE Adventure: Journey Readiness Quiz",
		description:
			"Embark on an extraordinary adventure in the United Arab Emirates! Evaluate your travel readiness with our quiz and ensure you're well-prepared to explore the modern marvels, cultural gems, and luxurious experiences of this dynamic Middle Eastern destination.",
		high: "Congratulations! You are well-prepared to embark on your adventure in the United Arab Emirates. Have an amazing trip!",
		low: "It seems you may need to make some preparations before your journey to the UAE. Review your answers and ensure you're fully equipped for your adventure.",
		questions: [
			{
				question: "Do you have a valid passport?",
				answers: ["yes", "no", "not sure"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"A valid passport is essential for travel to the United Arab Emirates.",
			},
			{
				question: "Have you checked if you need a visa for the UAE?",
				answers: ["yes", "no", "in process"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Ensure you have the necessary visa for entry into the United Arab Emirates.",
			},
			{
				question: "Have you researched UAE customs and etiquette?",
				answers: ["yes", "no", "in progress"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Familiarize yourself with UAE customs for a respectful visit.",
			},
			{
				question: "Do you have travel insurance for your trip?",
				answers: ["yes", "no", "considering"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Travel insurance is important for a worry-free journey.",
			},
			{
				question: "Are your vaccinations up to date?",
				answers: ["yes", "no", "consulting with doctor"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Ensure your vaccinations are current for a healthy visit.",
			},
			{
				question: "Have you booked your accommodation in the UAE?",
				answers: ["yes", "no", "still deciding"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Secure your accommodation for a comfortable stay in the United Arab Emirates.",
			},
			{
				question: "Do you know basic Arabic phrases?",
				answers: ["yes", "no", "learning"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Familiarize yourself with basic Arabic phrases for better communication.",
			},
			{
				question: "Have you checked the local weather forecast?",
				answers: ["yes", "no", "not yet"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Check the weather forecast to pack accordingly for your trip to the UAE.",
			},
			{
				question: "Do you know emergency numbers in the UAE?",
				answers: ["yes", "no", "researching"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Familiarize yourself with emergency numbers for a safe visit to the United Arab Emirates.",
			},
			{
				question: "Have you planned your itinerary in the UAE?",
				answers: [" yes", "no", "working on it"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Plan your itinerary for an organized and enjoyable trip in the United Arab Emirates.",
			},
			{
				question: "Are you aware of local transportation options in the UAE?",
				answers: ["yes", "no", "researching"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Know your transportation options for convenient travel within the United Arab Emirates.",
			},
			{
				question: "Have you researched UAE cuisine?",
				answers: ["yes", "no", "excited to try"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Explore and savor the delightful flavors of UAE cuisine.",
			},
			{
				question: "Do you have a power adapter for your devices?",
				answers: ["yes", "no", "need to buy one"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Ensure you have the right power adapter for your devices in the United Arab Emirates.",
			},
			{
				question: "Have you informed your bank about your travel to the UAE?",
				answers: ["yes", "no", "not yet"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Notify your bank to avoid any issues with your cards during your trip to the United Arab Emirates.",
			},
			{
				question:
					"Are you familiar with popular tourist attractions in the UAE?",
				answers: ["yes", "no", "researching"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Explore famous attractions for a memorable journey in the United Arab Emirates.",
			},
		],
	},
	{
		route: "south-african-safari-quiz",
		title: "South African Safari: Journey Readiness Quiz",
		description:
			"Embark on a thrilling safari adventure in South Africa! Evaluate your travel readiness with our quiz and ensure you're well-prepared to explore the diverse landscapes, wildlife wonders, and rich cultures of this captivating Southern African destination.",
		high: "Congratulations! You are well-prepared to embark on your safari adventure in South Africa. Have an amazing trip!",
		low: "It seems you may need to make some preparations before your safari journey to South Africa. Review your answers and ensure you're fully equipped for your adventure.",
		questions: [
			{
				question: "Do you have a valid passport?",
				answers: ["yes", "no", "not sure"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"A valid passport is essential for travel to South Africa.",
			},
			{
				question: "Have you checked if you need a visa for South Africa?",
				answers: ["yes", "no", "in process"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Ensure you have the necessary visa for entry into South Africa.",
			},
			{
				question: "Have you researched South African customs and etiquette?",
				answers: ["yes", "no", "in progress"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Familiarize yourself with South African customs for a respectful visit.",
			},
			{
				question: "Do you have travel insurance for your trip?",
				answers: ["yes", "no", "considering"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Travel insurance is important for a worry-free journey.",
			},
			{
				question: "Are your vaccinations up to date?",
				answers: ["yes", "no", "consulting with doctor"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Ensure your vaccinations are current for a healthy visit.",
			},
			{
				question: "Have you booked your accommodation in South Africa?",
				answers: ["yes", "no", "still deciding"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Secure your accommodation for a comfortable stay in South Africa.",
			},
			{
				question: "Do you know basic Afrikaans phrases?",
				answers: ["yes", "no", "learning"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Familiarize yourself with basic Afrikaans phrases for better communication.",
			},
			{
				question: "Have you checked the local weather forecast?",
				answers: ["yes", "no", "not yet"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Check the weather forecast to pack accordingly for your trip to South Africa.",
			},
			{
				question: "Do you know emergency numbers in South Africa?",
				answers: ["yes", "no", "researching"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Familiarize yourself with emergency numbers for a safe visit to South Africa.",
			},
			{
				question: "Have you planned your safari itinerary in South Africa?",
				answers: [" yes", "no", "working on it"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Plan your safari itinerary for an organized and enjoyable trip in South Africa.",
			},
			{
				question:
					"Are you aware of local transportation options in South Africa?",
				answers: ["yes", "no", "researching"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Know your transportation options for convenient travel within South Africa.",
			},
			{
				question: "Have you researched South African cuisine?",
				answers: ["yes", "no", "excited to try"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Explore and savor the delightful flavors of South African cuisine.",
			},
			{
				question: "Do you have a power adapter for your devices?",
				answers: ["yes", "no", "need to buy one"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Ensure you have the right power adapter for your devices in South Africa.",
			},
			{
				question:
					"Have you informed your bank about your travel to South Africa?",
				answers: ["yes", "no", "not yet"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Notify your bank to avoid any issues with your cards during your trip to South Africa.",
			},
			{
				question:
					"Are you familiar with popular safari destinations in South Africa?",
				answers: ["yes", "no", "researching"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Explore famous safari destinations for a memorable journey in South Africa.",
			},
		],
	},
	{
		route: "belgian-discovery-quiz",
		title: "Belgian Discovery: Journey Readiness Quiz",
		description:
			"Embark on a delightful discovery of Belgium! Evaluate your travel readiness with our quiz and ensure you're well-prepared to explore the charming cities, medieval architecture, and exquisite chocolates of this enchanting Western European destination.",
		high: "Congratulations! You are well-prepared to embark on your journey of discovery in Belgium. Enjoy your exploration!",
		low: "It seems you may need to make some preparations before your journey to Belgium. Review your answers and make sure you're ready for an enjoyable trip.",
		questions: [
			{
				question: "Do you have a valid passport?",
				answers: ["yes", "no", "not sure"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"A valid passport is essential for travel to Belgium.",
			},
			{
				question: "Have you checked if you need a visa for Belgium?",
				answers: ["yes", "no", "in process"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Ensure you have the necessary visa for entry into Belgium.",
			},
			{
				question: "Have you researched Belgian customs and etiquette?",
				answers: ["yes", "no", "in progress"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Familiarize yourself with Belgian customs for a respectful visit.",
			},
			{
				question: "Do you have travel insurance for your trip?",
				answers: ["yes", "no", "considering"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Travel insurance is important for a worry-free journey.",
			},
			{
				question: "Are your vaccinations up to date?",
				answers: ["yes", "no", "consulting with doctor"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Ensure your vaccinations are current for a healthy visit.",
			},
			{
				question: "Have you booked your accommodation in Belgium?",
				answers: ["yes", "no", "still deciding"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Secure your accommodation for a comfortable stay in Belgium.",
			},
			{
				question: "Do you know basic French or Dutch phrases?",
				answers: ["yes", "no", "learning"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Familiarize yourself with basic French or Dutch phrases for better communication.",
			},
			{
				question: "Have you checked the local weather forecast?",
				answers: ["yes", "no", "not yet"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Check the weather forecast to pack accordingly for your trip to Belgium.",
			},
			{
				question: "Do you know emergency numbers in Belgium?",
				answers: ["yes", "no", "researching"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Familiarize yourself with emergency numbers for a safe visit to Belgium.",
			},
			{
				question: "Have you planned your itinerary in Belgium?",
				answers: [" yes", "no", "working on it"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Plan your itinerary for an organized and enjoyable trip in Belgium.",
			},
			{
				question: "Are you aware of local transportation options in Belgium?",
				answers: ["yes", "no", "researching"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Know your transportation options for convenient travel within Belgium.",
			},
			{
				question: "Have you researched Belgian cuisine?",
				answers: ["yes", "no", "excited to try"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Explore and savor the delightful flavors of Belgian cuisine.",
			},
			{
				question: "Do you have a power adapter for your devices?",
				answers: ["yes", "no", "need to buy one"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Ensure you have the right power adapter for your devices in Belgium.",
			},
			{
				question: "Have you informed your bank about your travel to Belgium?",
				answers: ["yes", "no", "not yet"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Notify your bank to avoid any issues with your cards during your trip to Belgium.",
			},
			{
				question:
					"Are you familiar with popular tourist attractions in Belgium?",
				answers: ["yes", "no", "researching"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Explore famous attractions for a memorable journey in Belgium.",
			},
		],
	},
	{
		route: "kiwi-adventure-quiz",
		title: "Kiwi Adventure: Journey Readiness Quiz",
		description:
			"Embark on an unforgettable adventure in New Zealand! Evaluate your travel readiness with our quiz and ensure you're well-prepared to explore the stunning landscapes, Maori culture, and adrenaline-pumping activities of this captivating Pacific island nation.",
		high: "Congratulations! You are well-prepared to embark on your unforgettable adventure in New Zealand. Enjoy every moment!",
		low: "It seems you may need to make some preparations before your journey to New Zealand. Review your answers and ensure you're ready for an incredible adventure.",
		questions: [
			{
				question: "Do you have a valid passport?",
				answers: ["yes", "no", "not sure"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"A valid passport is essential for travel to New Zealand.",
			},
			{
				question: "Have you checked if you need a visa for New Zealand?",
				answers: ["yes", "no", "in process"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Ensure you have the necessary visa for entry into New Zealand.",
			},
			{
				question: "Have you researched New Zealand customs and etiquette?",
				answers: ["yes", "no", "in progress"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Familiarize yourself with New Zealand customs for a respectful visit.",
			},
			{
				question: "Do you have travel insurance for your trip?",
				answers: ["yes", "no", "considering"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Travel insurance is important for a worry-free journey.",
			},
			{
				question: "Are your vaccinations up to date?",
				answers: ["yes", "no", "consulting with doctor"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Ensure your vaccinations are current for a healthy visit.",
			},
			{
				question: "Have you booked your accommodation in New Zealand?",
				answers: ["yes", "no", "still deciding"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Secure your accommodation for a comfortable stay in New Zealand.",
			},
			{
				question: "Do you know basic Maori phrases?",
				answers: ["yes", "no", "learning"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Familiarize yourself with basic Maori phrases for better communication.",
			},
			{
				question: "Have you checked the local weather forecast?",
				answers: ["yes", "no", "not yet"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Check the weather forecast to pack accordingly for your trip to New Zealand.",
			},
			{
				question: "Do you know emergency numbers in New Zealand?",
				answers: ["yes", "no", "researching"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Familiarize yourself with emergency numbers for a safe visit to New Zealand.",
			},
			{
				question: "Have you planned your itinerary in New Zealand?",
				answers: [" yes", "no", "working on it"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Plan your itinerary for an organized and enjoyable trip in New Zealand.",
			},
			{
				question:
					"Are you aware of local transportation options in New Zealand?",
				answers: ["yes", "no", "researching"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Know your transportation options for convenient travel within New Zealand.",
			},
			{
				question: "Have you researched New Zealand cuisine?",
				answers: ["yes", "no", "excited to try"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Explore and savor the delightful flavors of New Zealand cuisine.",
			},
			{
				question: "Do you have a power adapter for your devices?",
				answers: ["yes", "no", "need to buy one"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Ensure you have the right power adapter for your devices in New Zealand.",
			},
			{
				question:
					"Have you informed your bank about your travel to New Zealand?",
				answers: ["yes", "no", "not yet"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Notify your bank to avoid any issues with your cards during your trip to New Zealand.",
			},
			{
				question:
					"Are you familiar with popular tourist attractions in New Zealand?",
				answers: ["yes", "no", "researching"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Explore famous attractions for a memorable journey in New Zealand.",
			},
		],
	},
	{
		route: "czech-exploration-quiz",
		title: "Czech Exploration: Journey Readiness Quiz",
		description:
			"Embark on a captivating exploration of the Czech Republic! Evaluate your travel readiness with our quiz and ensure you're well-prepared to discover the historic charm, cultural treasures, and delicious cuisine of this Central European gem.",
		high: "Congratulations! You are well-prepared to embark on your captivating exploration of the Czech Republic. Enjoy every moment!",
		low: "It seems you may need to make some preparations before your journey to the Czech Republic. Review your answers and ensure you're ready for an enriching experience.",
		questions: [
			{
				question: "Do you have a valid passport?",
				answers: ["yes", "no", "not sure"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"A valid passport is essential for travel to the Czech Republic.",
			},
			{
				question: "Have you checked if you need a visa for the Czech Republic?",
				answers: ["yes", "no", "in process"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Ensure you have the necessary visa for entry into the Czech Republic.",
			},
			{
				question: "Have you researched Czech customs and etiquette?",
				answers: ["yes", "no", "in progress"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Familiarize yourself with Czech customs for a respectful visit.",
			},
			{
				question: "Do you have travel insurance for your trip?",
				answers: ["yes", "no", "considering"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Travel insurance is important for a worry-free journey.",
			},
			{
				question: "Are your vaccinations up to date?",
				answers: ["yes", "no", "consulting with doctor"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Ensure your vaccinations are current for a healthy visit.",
			},
			{
				question: "Have you booked your accommodation in the Czech Republic?",
				answers: ["yes", "no", "still deciding"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Secure your accommodation for a comfortable stay in the Czech Republic.",
			},
			{
				question: "Do you know basic Czech phrases?",
				answers: ["yes", "no", "learning"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Familiarize yourself with basic Czech phrases for better communication.",
			},
			{
				question: "Have you checked the local weather forecast?",
				answers: ["yes", "no", "not yet"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Check the weather forecast to pack accordingly for your trip to the Czech Republic.",
			},
			{
				question: "Do you know emergency numbers in the Czech Republic?",
				answers: ["yes", "no", "researching"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Familiarize yourself with emergency numbers for a safe visit to the Czech Republic.",
			},
			{
				question: "Have you planned your itinerary in the Czech Republic?",
				answers: [" yes", "no", "working on it"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Plan your itinerary for an organized and enjoyable trip in the Czech Republic.",
			},
			{
				question:
					"Are you aware of local transportation options in the Czech Republic?",
				answers: ["yes", "no", "researching"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Know your transportation options for convenient travel within the Czech Republic.",
			},
			{
				question: "Have you researched Czech cuisine?",
				answers: ["yes", "no", "excited to try"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Explore and savor the delightful flavors of Czech cuisine.",
			},
			{
				question: "Do you have a power adapter for your devices?",
				answers: ["yes", "no", "need to buy one"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Ensure you have the right power adapter for your devices in the Czech Republic.",
			},
			{
				question:
					"Have you informed your bank about your travel to the Czech Republic?",
				answers: ["yes", "no", "not yet"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Notify your bank to avoid any issues with your cards during your trip to the Czech Republic.",
			},
			{
				question:
					"Are you familiar with popular tourist attractions in the Czech Republic?",
				answers: ["yes", "no", "researching"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Explore famous attractions for a memorable journey in the Czech Republic.",
			},
		],
	},
	{
		route: "irish-exploration-quiz",
		title: "Irish Exploration: Journey Readiness Quiz",
		description:
			"Embark on a charming exploration of Ireland! Evaluate your travel readiness with our quiz and ensure you're well-prepared to discover the lush landscapes, rich history, and warm hospitality of this captivating Emerald Isle.",
		high: "Congratulations! You are well-prepared to embark on your charming exploration of Ireland. May your journey be filled with delightful experiences!",
		low: "It seems you may need to make some preparations before your journey to Ireland. Review your answers and ensure you're ready for an enchanting experience.",
		questions: [
			{
				question: "Do you have a valid passport?",
				answers: ["yes", "no", "not sure"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"A valid passport is essential for travel to Ireland.",
			},
			{
				question: "Have you checked if you need a visa for Ireland?",
				answers: ["yes", "no", "in process"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Ensure you have the necessary visa for entry into Ireland.",
			},
			{
				question: "Have you researched Irish customs and etiquette?",
				answers: ["yes", "no", "in progress"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Familiarize yourself with Irish customs for a respectful visit.",
			},
			{
				question: "Do you have travel insurance for your trip?",
				answers: ["yes", "no", "considering"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Travel insurance is important for a worry-free journey.",
			},
			{
				question: "Are your vaccinations up to date?",
				answers: ["yes", "no", "consulting with doctor"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Ensure your vaccinations are current for a healthy visit.",
			},
			{
				question: "Have you booked your accommodation in Ireland?",
				answers: ["yes", "no", "still deciding"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Secure your accommodation for a comfortable stay in Ireland.",
			},
			{
				question: "Do you know basic Irish phrases?",
				answers: ["yes", "no", "learning"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Familiarize yourself with basic Irish phrases for better communication.",
			},
			{
				question: "Have you checked the local weather forecast?",
				answers: ["yes", "no", "not yet"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Check the weather forecast to pack accordingly for your trip to Ireland.",
			},
			{
				question: "Do you know emergency numbers in Ireland?",
				answers: ["yes", "no", "researching"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Familiarize yourself with emergency numbers for a safe visit to Ireland.",
			},
			{
				question: "Have you planned your itinerary in Ireland?",
				answers: [" yes", "no", "working on it"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Plan your itinerary for an organized and enjoyable trip in Ireland.",
			},
			{
				question: "Are you aware of local transportation options in Ireland?",
				answers: ["yes", "no", "researching"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Know your transportation options for convenient travel within Ireland.",
			},
			{
				question: "Have you researched Irish cuisine?",
				answers: ["yes", "no", "excited to try"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Explore and savor the delightful flavors of Irish cuisine.",
			},
			{
				question: "Do you have a power adapter for your devices?",
				answers: ["yes", "no", "need to buy one"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Ensure you have the right power adapter for your devices in Ireland.",
			},
			{
				question: "Have you informed your bank about your travel to Ireland?",
				answers: ["yes", "no", "not yet"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Notify your bank to avoid any issues with your cards during your trip to Ireland.",
			},
			{
				question:
					"Are you familiar with popular tourist attractions in Ireland?",
				answers: ["yes", "no", "researching"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Explore famous attractions for a memorable journey in Ireland.",
			},
		],
	},
	{
		route: "island-paradise-quiz",
		title: "Island Paradise: Journey Readiness Quiz",
		description:
			"Embark on a tropical adventure in the Philippines! Evaluate your travel readiness with our quiz and ensure you're well-prepared to explore the beautiful beaches, vibrant culture, and diverse landscapes of this enchanting archipelago.",
		high: "Congratulations! You are well-prepared to embark on your tropical adventure in the Philippines. Get ready to create unforgettable memories in this island paradise!",
		low: "It seems you may need to make some preparations before your journey to the Philippines. Review your answers and ensure you're ready for an enchanting experience.",
		questions: [
			{
				question: "Do you have a valid passport?",
				answers: ["yes", "no", "not sure"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"A valid passport is essential for travel to the Philippines.",
			},
			{
				question: "Have you checked if you need a visa for the Philippines?",
				answers: ["yes", "no", "in process"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Ensure you have the necessary visa for entry into the Philippines.",
			},
			{
				question: "Have you researched Filipino customs and etiquette?",
				answers: ["yes", "no", "in progress"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Familiarize yourself with Filipino customs for a respectful visit.",
			},
			{
				question: "Do you have travel insurance for your trip?",
				answers: ["yes", "no", "considering"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Travel insurance is important for a worry-free journey.",
			},
			{
				question: "Are your vaccinations up to date?",
				answers: ["yes", "no", "consulting with doctor"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Ensure your vaccinations are current for a healthy visit.",
			},
			{
				question: "Have you booked your accommodation in the Philippines?",
				answers: ["yes", "no", "still deciding"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Secure your accommodation for a comfortable stay in the Philippines.",
			},
			{
				question: "Do you know basic Filipino phrases?",
				answers: ["yes", "no", "learning"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Familiarize yourself with basic Filipino phrases for better communication.",
			},
			{
				question: "Have you checked the local weather forecast?",
				answers: ["yes", "no", "not yet"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Check the weather forecast to pack accordingly for your trip to the Philippines.",
			},
			{
				question: "Do you know emergency numbers in the Philippines?",
				answers: ["yes", "no", "researching"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Familiarize yourself with emergency numbers for a safe visit to the Philippines.",
			},
			{
				question: "Have you planned your itinerary in the Philippines?",
				answers: [" yes", "no", "working on it"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Plan your itinerary for an organized and enjoyable trip in the Philippines.",
			},
			{
				question:
					"Are you aware of local transportation options in the Philippines?",
				answers: ["yes", "no", "researching"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Know your transportation options for convenient travel within the Philippines.",
			},
			{
				question: "Have you researched Filipino cuisine?",
				answers: ["yes", "no", "excited to try"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Explore and savor the delightful flavors of Filipino cuisine.",
			},
			{
				question: "Do you have a power adapter for your devices?",
				answers: ["yes", "no", "need to buy one"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Ensure you have the right power adapter for your devices in the Philippines.",
			},
			{
				question:
					"Have you informed your bank about your travel to the Philippines?",
				answers: ["yes", "no", "not yet"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Notify your bank to avoid any issues with your cards during your trip to the Philippines.",
			},
			{
				question:
					"Are you familiar with popular tourist attractions in the Philippines?",
				answers: ["yes", "no", "researching"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Explore famous attractions for a memorable journey in the Philippines.",
			},
		],
	},
	{
		route: "peruvian-exploration-quiz",
		title: "Peruvian Exploration: Journey Readiness Quiz",
		description:
			"Embark on a mystical journey through Peru! Evaluate your travel readiness with our quiz and ensure you're well-prepared to discover the ancient ruins, diverse landscapes, and vibrant culture of this South American treasure.",
		high: "Congratulations! You are well-prepared to embark on your mystical journey through Peru. Get ready to immerse yourself in the rich history and breathtaking landscapes of this South American treasure!",
		low: "It seems you may need to make some preparations before your journey to Peru. Review your answers and ensure you're ready to explore the ancient ruins, diverse landscapes, and vibrant culture of this South American gem.",
		questions: [
			{
				question: "Do you have a valid passport?",
				answers: ["yes", "no", "not sure"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"A valid passport is essential for travel to Peru.",
			},
			{
				question: "Have you checked if you need a visa for Peru?",
				answers: ["yes", "no", "in process"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Ensure you have the necessary visa for entry into Peru.",
			},
			{
				question: "Have you researched Peruvian customs and etiquette?",
				answers: ["yes", "no", "in progress"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Familiarize yourself with Peruvian customs for a respectful visit.",
			},
			{
				question: "Do you have travel insurance for your trip?",
				answers: ["yes", "no", "considering"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Travel insurance is important for a worry-free journey.",
			},
			{
				question: "Are your vaccinations up to date?",
				answers: ["yes", "no", "consulting with doctor"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Ensure your vaccinations are current for a healthy visit.",
			},
			{
				question: "Have you booked your accommodation in Peru?",
				answers: ["yes", "no", "still deciding"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Secure your accommodation for a comfortable stay in Peru.",
			},
			{
				question: "Do you know basic Spanish phrases?",
				answers: ["yes", "no", "learning"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Familiarize yourself with basic Spanish phrases for better communication in Peru.",
			},
			{
				question: "Have you checked the local weather forecast?",
				answers: ["yes", "no", "not yet"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Check the weather forecast to pack accordingly for your trip to Peru.",
			},
			{
				question: "Do you know emergency numbers in Peru?",
				answers: ["yes", "no", "researching"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Familiarize yourself with emergency numbers for a safe visit to Peru.",
			},
			{
				question: "Have you planned your itinerary in Peru?",
				answers: [" yes", "no", "working on it"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Plan your itinerary for an organized and enjoyable trip in Peru.",
			},
			{
				question: "Are you aware of local transportation options in Peru?",
				answers: ["yes", "no", "researching"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Know your transportation options for convenient travel within Peru.",
			},
			{
				question: "Have you researched Peruvian cuisine?",
				answers: ["yes", "no", "excited to try"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Explore and savor the delightful flavors of Peruvian cuisine.",
			},
			{
				question: "Do you have a power adapter for your devices?",
				answers: ["yes", "no", "need to buy one"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Ensure you have the right power adapter for your devices in Peru.",
			},
			{
				question: "Have you informed your bank about your travel to Peru?",
				answers: ["yes", "no", "not yet"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Notify your bank to avoid any issues with your cards during your trip to Peru.",
			},
			{
				question: "Are you familiar with popular tourist attractions in Peru?",
				answers: ["yes", "no", "researching"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Explore famous attractions for a memorable journey in Peru.",
			},
		],
	},
	{
		route: "danish-exploration-quiz",
		title: "Danish Exploration: Journey Readiness Quiz",
		description:
			"Embark on a cultural exploration of Denmark! Evaluate your travel readiness with our quiz and ensure you're well-prepared to discover the historic landmarks, modern design, and cozy charm of this Scandinavian gem.",
		high: "Congratulations! You are well-prepared to embark on your cultural exploration of Denmark. Get ready to discover the historic landmarks, modern design, and cozy charm of this Scandinavian gem!",
		low: "It seems you may need to make some preparations before your journey to Denmark. Review your answers and ensure you're ready to explore the historic landmarks, modern design, and cozy charm of this Scandinavian gem.",
		questions: [
			{
				question: "Do you have a valid passport?",
				answers: ["yes", "no", "not sure"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"A valid passport is essential for travel to Denmark.",
			},
			{
				question: "Have you checked if you need a visa for Denmark?",
				answers: ["yes", "no", "in process"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Ensure you have the necessary visa for entry into Denmark.",
			},
			{
				question: "Have you researched Danish customs and etiquette?",
				answers: ["yes", "no", "in progress"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Familiarize yourself with Danish customs for a respectful visit.",
			},
			{
				question: "Do you have travel insurance for your trip?",
				answers: ["yes", "no", "considering"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Travel insurance is important for a worry-free journey.",
			},
			{
				question: "Are your vaccinations up to date?",
				answers: ["yes", "no", "consulting with doctor"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Ensure your vaccinations are current for a healthy visit.",
			},
			{
				question: "Have you booked your accommodation in Denmark?",
				answers: ["yes", "no", "still deciding"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Secure your accommodation for a comfortable stay in Denmark.",
			},
			{
				question: "Do you know basic Danish phrases?",
				answers: ["yes", "no", "learning"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Familiarize yourself with basic Danish phrases for better communication.",
			},
			{
				question: "Have you checked the local weather forecast?",
				answers: ["yes", "no", "not yet"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Check the weather forecast to pack accordingly for your trip to Denmark.",
			},
			{
				question: "Do you know emergency numbers in Denmark?",
				answers: ["yes", "no", "researching"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Familiarize yourself with emergency numbers for a safe visit to Denmark.",
			},
			{
				question: "Have you planned your itinerary in Denmark?",
				answers: [" yes", "no", "working on it"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Plan your itinerary for an organized and enjoyable trip in Denmark.",
			},
			{
				question: "Are you aware of local transportation options in Denmark?",
				answers: ["yes", "no", "researching"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Know your transportation options for convenient travel within Denmark.",
			},
			{
				question: "Have you researched Danish cuisine?",
				answers: ["yes", "no", "excited to try"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Explore and savor the delightful flavors of Danish cuisine.",
			},
			{
				question: "Do you have a power adapter for your devices?",
				answers: ["yes", "no", "need to buy one"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Ensure you have the right power adapter for your devices in Denmark.",
			},
			{
				question: "Have you informed your bank about your travel to Denmark?",
				answers: ["yes", "no", "not yet"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Notify your bank to avoid any issues with your cards during your trip to Denmark.",
			},
			{
				question:
					"Are you familiar with popular tourist attractions in Denmark?",
				answers: ["yes", "no", "researching"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Explore famous attractions for a memorable journey in Denmark.",
			},
		],
	},
	{
		route: "finnish-exploration-quiz",
		title: "Finnish Exploration: Journey Readiness Quiz",
		description:
			"Embark on a Nordic adventure in Finland! Evaluate your travel readiness with our quiz and ensure you're well-prepared to discover the pristine landscapes, vibrant cities, and unique culture of this enchanting Scandinavian destination.",
		high: "Congratulations! You are well-prepared to embark on your Nordic adventure in Finland. Get ready to discover the pristine landscapes, vibrant cities, and unique culture of this enchanting Scandinavian destination!",
		low: "It seems you may need to make some preparations before your journey to Finland. Review your answers and ensure you're ready to explore the pristine landscapes, vibrant cities, and unique culture of this enchanting Scandinavian destination.",
		questions: [
			{
				question: "Do you have a valid passport?",
				answers: ["yes", "no", "not sure"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"A valid passport is essential for travel to Finland.",
			},
			{
				question: "Have you checked if you need a visa for Finland?",
				answers: ["yes", "no", "in process"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Ensure you have the necessary visa for entry into Finland.",
			},
			{
				question: "Have you researched Finnish customs and etiquette?",
				answers: ["yes", "no", "in progress"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Familiarize yourself with Finnish customs for a respectful visit.",
			},
			{
				question: "Do you have travel insurance for your trip?",
				answers: ["yes", "no", "considering"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Travel insurance is important for a worry-free journey.",
			},
			{
				question: "Are your vaccinations up to date?",
				answers: ["yes", "no", "consulting with doctor"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Ensure your vaccinations are current for a healthy visit.",
			},
			{
				question: "Have you booked your accommodation in Finland?",
				answers: ["yes", "no", "still deciding"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Secure your accommodation for a comfortable stay in Finland.",
			},
			{
				question: "Do you know basic Finnish phrases?",
				answers: ["yes", "no", "learning"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Familiarize yourself with basic Finnish phrases for better communication.",
			},
			{
				question: "Have you checked the local weather forecast?",
				answers: ["yes", "no", "not yet"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Check the weather forecast to pack accordingly for your trip to Finland.",
			},
			{
				question: "Do you know emergency numbers in Finland?",
				answers: ["yes", "no", "researching"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Familiarize yourself with emergency numbers for a safe visit to Finland.",
			},
			{
				question: "Have you planned your itinerary in Finland?",
				answers: [" yes", "no", "working on it"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Plan your itinerary for an organized and enjoyable trip in Finland.",
			},
			{
				question: "Are you aware of local transportation options in Finland?",
				answers: ["yes", "no", "researching"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Know your transportation options for convenient travel within Finland.",
			},
			{
				question: "Have you researched Finnish cuisine?",
				answers: ["yes", "no", "excited to try"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Explore and savor the delightful flavors of Finnish cuisine.",
			},
			{
				question: "Do you have a power adapter for your devices?",
				answers: ["yes", "no", "need to buy one"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Ensure you have the right power adapter for your devices in Finland.",
			},
			{
				question: "Have you informed your bank about your travel to Finland?",
				answers: ["yes", "no", "not yet"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Notify your bank to avoid any issues with your cards during your trip to Finland.",
			},
			{
				question:
					"Are you familiar with popular tourist attractions in Finland?",
				answers: ["yes", "no", "researching"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Explore famous attractions for a memorable journey in Finland.",
			},
		],
	},
	{
		route: "norwegian-adventure-quiz",
		title: "Norwegian Adventure: Journey Readiness Quiz",
		description:
			"Embark on a breathtaking adventure in Norway! Evaluate your travel readiness with our quiz and ensure you're well-prepared to explore the majestic fjords, scenic landscapes, and rich cultural heritage of this Nordic wonderland.",
		high: "Congratulations! You are well-prepared to embark on your breathtaking adventure in Norway. Get ready to explore the majestic fjords, scenic landscapes, and rich cultural heritage of this Nordic wonderland!",
		low: "It seems you may need to make some preparations before your journey to Norway. Review your answers and ensure you're ready to explore the majestic fjords, scenic landscapes, and rich cultural heritage of this Nordic wonderland.",
		questions: [
			{
				question: "Do you have a valid passport?",
				answers: ["yes", "no", "not sure"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"A valid passport is essential for travel to Norway.",
			},
			{
				question: "Have you checked if you need a visa for Norway?",
				answers: ["yes", "no", "in process"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Ensure you have the necessary visa for entry into Norway.",
			},
			{
				question: "Have you researched Norwegian customs and etiquette?",
				answers: ["yes", "no", "in progress"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Familiarize yourself with Norwegian customs for a respectful visit.",
			},
			{
				question: "Do you have travel insurance for your trip?",
				answers: ["yes", "no", "considering"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Travel insurance is important for a worry-free journey.",
			},
			{
				question: "Are your vaccinations up to date?",
				answers: ["yes", "no", "consulting with doctor"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Ensure your vaccinations are current for a healthy visit.",
			},
			{
				question: "Have you booked your accommodation in Norway?",
				answers: ["yes", "no", "still deciding"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Secure your accommodation for a comfortable stay in Norway.",
			},
			{
				question: "Do you know basic Norwegian phrases?",
				answers: ["yes", "no", "learning"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Familiarize yourself with basic Norwegian phrases for better communication.",
			},
			{
				question: "Have you checked the local weather forecast?",
				answers: ["yes", "no", "not yet"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Check the weather forecast to pack accordingly for your trip to Norway.",
			},
			{
				question: "Do you know emergency numbers in Norway?",
				answers: ["yes", "no", "researching"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Familiarize yourself with emergency numbers for a safe visit to Norway.",
			},
			{
				question: "Have you planned your itinerary in Norway?",
				answers: [" yes", "no", "working on it"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Plan your itinerary for an organized and enjoyable trip in Norway.",
			},
			{
				question: "Are you aware of local transportation options in Norway?",
				answers: ["yes", "no", "researching"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Know your transportation options for convenient travel within Norway.",
			},
			{
				question: "Have you researched Norwegian cuisine?",
				answers: ["yes", "no", "excited to try"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Explore and savor the delightful flavors of Norwegian cuisine.",
			},
			{
				question: "Do you have a power adapter for your devices?",
				answers: ["yes", "no", "need to buy one"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Ensure you have the right power adapter for your devices in Norway.",
			},
			{
				question: "Have you informed your bank about your travel to Norway?",
				answers: ["yes", "no", "not yet"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Notify your bank to avoid any issues with your cards during your trip to Norway.",
			},
			{
				question:
					"Are you familiar with popular tourist attractions in Norway?",
				answers: ["yes", "no", "researching"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Explore famous attractions for a memorable journey in Norway.",
			},
		],
	},
	{
		route: "polish-exploration-quiz",
		title: "Polish Exploration: Journey Readiness Quiz",
		description:
			"Embark on a cultural exploration of Poland! Evaluate your travel readiness with our quiz and ensure you're well-prepared to discover the rich history, charming cities, and vibrant traditions of this Eastern European gem.",
		high: "Congratulations! You are well-prepared to embark on your cultural exploration of Poland. Get ready to discover the rich history, charming cities, and vibrant traditions of this Eastern European gem!",
		low: "It seems you may need to make some preparations before your journey to Poland. Review your answers and ensure you're ready to discover the rich history, charming cities, and vibrant traditions of this Eastern European gem.",
		questions: [
			{
				question: "Do you have a valid passport?",
				answers: ["yes", "no", "not sure"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"A valid passport is essential for travel to Poland.",
			},
			{
				question: "Have you checked if you need a visa for Poland?",
				answers: ["yes", "no", "in process"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Ensure you have the necessary visa for entry into Poland.",
			},
			{
				question: "Have you researched Polish customs and etiquette?",
				answers: ["yes", "no", "in progress"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Familiarize yourself with Polish customs for a respectful visit.",
			},
			{
				question: "Do you have travel insurance for your trip?",
				answers: ["yes", "no", "considering"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Travel insurance is important for a worry-free journey.",
			},
			{
				question: "Are your vaccinations up to date?",
				answers: ["yes", "no", "consulting with doctor"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Ensure your vaccinations are current for a healthy visit.",
			},
			{
				question: "Have you booked your accommodation in Poland?",
				answers: ["yes", "no", "still deciding"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Secure your accommodation for a comfortable stay in Poland.",
			},
			{
				question: "Do you know basic Polish phrases?",
				answers: ["yes", "no", "learning"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Familiarize yourself with basic Polish phrases for better communication.",
			},
			{
				question: "Have you checked the local weather forecast?",
				answers: ["yes", "no", "not yet"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Check the weather forecast to pack accordingly for your trip to Poland.",
			},
			{
				question: "Do you know emergency numbers in Poland?",
				answers: ["yes", "no", "researching"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Familiarize yourself with emergency numbers for a safe visit to Poland.",
			},
			{
				question: "Have you planned your itinerary in Poland?",
				answers: [" yes", "no", "working on it"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Plan your itinerary for an organized and enjoyable trip in Poland.",
			},
			{
				question: "Are you aware of local transportation options in Poland?",
				answers: ["yes", "no", "researching"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Know your transportation options for convenient travel within Poland.",
			},
			{
				question: "Have you researched Polish cuisine?",
				answers: ["yes", " no", "excited to try"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Explore and savor the delightful flavors of Polish cuisine.",
			},
			{
				question: "Do you have a power adapter for your devices?",
				answers: ["yes", "no", "need to buy one"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Ensure you have the right power adapter for your devices in Poland.",
			},
			{
				question: "Have you informed your bank about your travel to Poland?",
				answers: ["yes", "no", "not yet"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Notify your bank to avoid any issues with your cards during your trip to Poland.",
			},
			{
				question:
					"Are you familiar with popular tourist attractions in Poland?",
				answers: ["yes", "no", "researching"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Explore famous attractions for a memorable journey in Poland.",
			},
		],
	},
	{
		route: "israeli-exploration-quiz",
		title: "Israeli Exploration: Journey Readiness Quiz",
		description:
			"Embark on a historic exploration of Israel! Evaluate your travel readiness with our quiz and ensure you're well-prepared to discover the ancient landmarks, diverse culture, and vibrant atmosphere of this Middle Eastern gem.",
		high: "Congratulations! You are well-prepared to embark on your historic exploration of Israel. Get ready to discover the ancient landmarks, diverse culture, and vibrant atmosphere of this Middle Eastern gem!",
		low: "It seems you may need to make some preparations before your journey to Israel. Review your answers and ensure you're ready to discover the ancient landmarks, diverse culture, and vibrant atmosphere of this Middle Eastern gem!",
		questions: [
			{
				question: "Do you have a valid passport?",
				answers: ["yes", "no", "not sure"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"A valid passport is essential for travel to Israel.",
			},
			{
				question: "Have you checked if you need a visa for Israel?",
				answers: ["yes", "no", "in process"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Ensure you have the necessary visa for entry into Israel.",
			},
			{
				question: "Have you researched Israeli customs and etiquette?",
				answers: ["yes", "no", "in progress"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Familiarize yourself with Israeli customs for a respectful visit.",
			},
			{
				question: "Do you have travel insurance for your trip?",
				answers: ["yes", "no", "considering"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Travel insurance is important for a worry-free journey.",
			},
			{
				question: "Are your vaccinations up to date?",
				answers: ["yes", "no", "consulting with doctor"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Ensure your vaccinations are current for a healthy visit.",
			},
			{
				question: "Have you booked your accommodation in Israel?",
				answers: ["yes", "no", "still deciding"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Secure your accommodation for a comfortable stay in Israel.",
			},
			{
				question: "Do you know basic Hebrew phrases?",
				answers: ["yes", "no", "learning"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Familiarize yourself with basic Hebrew phrases for better communication.",
			},
			{
				question: "Have you checked the local weather forecast?",
				answers: ["yes", "no", "not yet"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Check the weather forecast to pack accordingly for your trip to Israel.",
			},
			{
				question: "Do you know emergency numbers in Israel?",
				answers: ["yes", "no", "researching"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Familiarize yourself with emergency numbers for a safe visit to Israel.",
			},
			{
				question: "Have you planned your itinerary in Israel?",
				answers: [" yes", "no", "working on it"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Plan your itinerary for an organized and enjoyable trip in Israel.",
			},
			{
				question: "Are you aware of local transportation options in Israel?",
				answers: ["yes", "no", "researching"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Know your transportation options for convenient travel within Israel.",
			},
			{
				question: "Have you researched Israeli cuisine?",
				answers: ["yes", " no", "excited to try"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Explore and savor the delightful flavors of Israeli cuisine.",
			},
			{
				question: "Do you have a power adapter for your devices?",
				answers: ["yes", "no", "need to buy one"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Ensure you have the right power adapter for your devices in Israel.",
			},
			{
				question: "Have you informed your bank about your travel to Israel?",
				answers: ["yes", "no", "not yet"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Notify your bank to avoid any issues with your cards during your trip to Israel.",
			},
			{
				question:
					"Are you familiar with popular tourist attractions in Israel?",
				answers: ["yes", "no", "researching"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Explore famous attractions for a memorable journey in Israel.",
			},
		],
	},
	{
		route: "saudi-exploration-quiz",
		title: "Saudi Exploration: Journey Readiness Quiz",
		description:
			"Embark on a cultural journey through Saudi Arabia! Evaluate your travel readiness with our quiz and ensure you're well-prepared to discover the rich history, diverse landscapes, and vibrant traditions of this Middle Eastern treasure.",
		high: "Congratulations! You are well-prepared to embark on your cultural journey through Saudi Arabia. Get ready to discover the rich history, diverse landscapes, and vibrant traditions of this Middle Eastern treasure!",
		low: "It seems you may need to make some preparations before your journey to Saudi Arabia. Review your answers and ensure you're ready to discover the rich history, diverse landscapes, and vibrant traditions of this Middle Eastern treasure!",
		questions: [
			{
				question: "Do you have a valid passport?",
				answers: ["yes", "no", "not sure"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"A valid passport is essential for travel to Saudi Arabia.",
			},
			{
				question: "Have you checked if you need a visa for Saudi Arabia?",
				answers: ["yes", "no", "in process"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Ensure you have the necessary visa for entry into Saudi Arabia.",
			},
			{
				question: "Have you researched Saudi customs and etiquette?",
				answers: ["yes", "no", "in progress"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Familiarize yourself with Saudi customs for a respectful visit.",
			},
			{
				question: "Do you have travel insurance for your trip?",
				answers: ["yes", "no", "considering"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Travel insurance is important for a worry-free journey.",
			},
			{
				question: "Are your vaccinations up to date?",
				answers: ["yes", "no", "consulting with doctor"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Ensure your vaccinations are current for a healthy visit.",
			},
			{
				question: "Have you booked your accommodation in Saudi Arabia?",
				answers: ["yes", "no", "still deciding"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Secure your accommodation for a comfortable stay in Saudi Arabia.",
			},
			{
				question: "Do you know basic Arabic phrases?",
				answers: ["yes", "no", "learning"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Familiarize yourself with basic Arabic phrases for better communication.",
			},
			{
				question: "Have you checked the local weather forecast?",
				answers: ["yes", "no", "not yet"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Check the weather forecast to pack accordingly for your trip to Saudi Arabia.",
			},
			{
				question: "Do you know emergency numbers in Saudi Arabia?",
				answers: ["yes", "no", "researching"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Familiarize yourself with emergency numbers for a safe visit to Saudi Arabia.",
			},
			{
				question: "Have you planned your itinerary in Saudi Arabia?",
				answers: [" yes", "no", "working on it"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Plan your itinerary for an organized and enjoyable trip in Saudi Arabia.",
			},
			{
				question:
					"Are you aware of local transportation options in Saudi Arabia?",
				answers: ["yes", "no", "researching"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Know your transportation options for convenient travel within Saudi Arabia.",
			},
			{
				question: "Have you researched Saudi Arabian cuisine?",
				answers: ["yes", "no", "excited to try"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Explore and savor the delightful flavors of Saudi Arabian cuisine.",
			},
			{
				question: "Do you have a power adapter for your devices?",
				answers: ["yes", "no", "need to buy one"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Ensure you have the right power adapter for your devices in Saudi Arabia.",
			},
			{
				question:
					"Have you informed your bank about your travel to Saudi Arabia?",
				answers: ["yes", "no", "not yet"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Notify your bank to avoid any issues with your cards during your trip to Saudi Arabia.",
			},
			{
				question:
					"Are you familiar with popular tourist attractions in Saudi Arabia?",
				answers: ["yes", "no", "researching"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Explore famous attractions for a memorable journey in Saudi Arabia.",
			},
		],
	},
	{
		route: "colombian-adventure-quiz",
		title: "Colombian Adventure: Journey Readiness Quiz",
		description:
			"Embark on an exciting adventure in Colombia! Evaluate your travel readiness with our quiz and ensure you're well-prepared to explore the diverse landscapes, vibrant culture, and warm hospitality of this South American gem.",
		high: "Congratulations! You are well-prepared to embark on your exciting adventure in Colombia. Get ready to explore the diverse landscapes, vibrant culture, and warm hospitality of this South American gem!",
		low: "It seems you may need to make some preparations before your journey to Colombia. Review your answers and ensure you're ready to explore the diverse landscapes, vibrant culture, and warm hospitality of this South American gem!",
		questions: [
			{
				question: "Do you have a valid passport?",
				answers: ["yes", "no", "not sure"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"A valid passport is essential for travel to Colombia.",
			},
			{
				question: "Have you checked if you need a visa for Colombia?",
				answers: ["yes", "no", "in process"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Ensure you have the necessary visa for entry into Colombia.",
			},
			{
				question: "Have you researched Colombian customs and etiquette?",
				answers: ["yes", "no", "in progress"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Familiarize yourself with Colombian customs for a respectful visit.",
			},
			{
				question: "Do you have travel insurance for your trip?",
				answers: ["yes", "no", "considering"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Travel insurance is important for a worry-free journey.",
			},
			{
				question: "Are your vaccinations up to date?",
				answers: ["yes", "no", "consulting with doctor"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Ensure your vaccinations are current for a healthy visit.",
			},
			{
				question: "Have you booked your accommodation in Colombia?",
				answers: ["yes", "no", "still deciding"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Secure your accommodation for a comfortable stay in Colombia.",
			},
			{
				question: "Do you know basic Spanish phrases?",
				answers: ["yes", "no", "learning"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Familiarize yourself with basic Spanish phrases for better communication.",
			},
			{
				question: "Have you checked the local weather forecast?",
				answers: ["yes", "no", "not yet"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Check the weather forecast to pack accordingly for your trip to Colombia.",
			},
			{
				question: "Do you know emergency numbers in Colombia?",
				answers: ["yes", "no", "researching"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Familiarize yourself with emergency numbers for a safe visit to Colombia.",
			},
			{
				question: "Have you planned your itinerary in Colombia?",
				answers: [" yes", "no", "working on it"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Plan your itinerary for an organized and enjoyable trip in Colombia.",
			},
			{
				question: "Are you aware of local transportation options in Colombia?",
				answers: ["yes", "no", "researching"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Know your transportation options for convenient travel within Colombia.",
			},
			{
				question: "Have you researched Colombian cuisine?",
				answers: ["yes", " no", "excited to try"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Explore and savor the delightful flavors of Colombian cuisine.",
			},
			{
				question: "Do you have a power adapter for your devices?",
				answers: ["yes", "no", "need to buy one"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Ensure you have the right power adapter for your devices in Colombia.",
			},
			{
				question: "Have you informed your bank about your travel to Colombia?",
				answers: ["yes", "no", "not yet"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Notify your bank to avoid any issues with your cards during your trip to Colombia.",
			},
			{
				question:
					"Are you familiar with popular tourist attractions in Colombia?",
				answers: ["yes", "no", "researching"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Explore famous attractions for a memorable journey in Colombia.",
			},
		],
	},
	{
		route: "chilean-exploration-quiz",
		title: "Chilean Exploration: Journey Readiness Quiz",
		description:
			"Embark on a remarkable exploration of Chile! Evaluate your travel readiness with our quiz and ensure you're well-prepared to discover the diverse landscapes, rich culture, and unique experiences of this South American jewel.",
		high: "Congratulations! You are well-prepared to embark on your remarkable exploration of Chile. Get ready to discover the diverse landscapes, rich culture, and unique experiences of this South American jewel!",
		low: "It seems you may need to make some preparations before your journey to Chile. Review your answers and ensure you're ready to discover the diverse landscapes, rich culture, and unique experiences of this South American jewel!",
		questions: [
			{
				question: "Do you have a valid passport?",
				answers: ["yes", "no", "not sure"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"A valid passport is essential for travel to Chile.",
			},
			{
				question: "Have you checked if you need a visa for Chile?",
				answers: ["yes", "no", "in process"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Ensure you have the necessary visa for entry into Chile.",
			},
			{
				question: "Have you researched Chilean customs and etiquette?",
				answers: ["yes", "no", "in progress"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Familiarize yourself with Chilean customs for a respectful visit.",
			},
			{
				question: "Do you have travel insurance for your trip?",
				answers: ["yes", "no", "considering"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Travel insurance is important for a worry-free journey.",
			},
			{
				question: "Are your vaccinations up to date?",
				answers: ["yes", "no", "consulting with doctor"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Ensure your vaccinations are current for a healthy visit.",
			},
			{
				question: "Have you booked your accommodation in Chile?",
				answers: ["yes", "no", "still deciding"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Secure your accommodation for a comfortable stay in Chile.",
			},
			{
				question: "Do you know basic Spanish phrases?",
				answers: ["yes", "no", "learning"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Familiarize yourself with basic Spanish phrases for better communication.",
			},
			{
				question: "Have you checked the local weather forecast?",
				answers: ["yes", "no", "not yet"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Check the weather forecast to pack accordingly for your trip to Chile.",
			},
			{
				question: "Do you know emergency numbers in Chile?",
				answers: ["yes", "no", "researching"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Familiarize yourself with emergency numbers for a safe visit to Chile.",
			},
			{
				question: "Have you planned your itinerary in Chile?",
				answers: [" yes", "no", "working on it"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Plan your itinerary for an organized and enjoyable trip in Chile.",
			},
			{
				question: "Are you aware of local transportation options in Chile?",
				answers: ["yes", "no", "researching"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Know your transportation options for convenient travel within Chile.",
			},
			{
				question: "Have you researched Chilean cuisine?",
				answers: ["yes", " no", "excited to try"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Explore and savor the delightful flavors of Chilean cuisine.",
			},
			{
				question: "Do you have a power adapter for your devices?",
				answers: ["yes", "no", "need to buy one"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Ensure you have the right power adapter for your devices in Chile.",
			},
			{
				question: "Have you informed your bank about your travel to Chile?",
				answers: ["yes", "no", "not yet"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Notify your bank to avoid any issues with your cards during your trip to Chile.",
			},
			{
				question: "Are you familiar with popular tourist attractions in Chile?",
				answers: ["yes", "no", "researching"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Explore famous attractions for a memorable journey in Chile.",
			},
		],
	},
	{
		route: "qatari-exploration-quiz",
		title: "Qatari Exploration: Journey Readiness Quiz",
		description:
			"Embark on a cultural journey through Qatar! Evaluate your travel readiness with our quiz and ensure you're well-prepared to discover the modern marvels, rich heritage, and warm hospitality of this Middle Eastern gem.",
		high: "Congratulations! You are well-prepared to embark on your cultural journey through Qatar. Get ready to discover the modern marvels, rich heritage, and warm hospitality of this Middle Eastern gem!",
		low: "It seems you may need to make some preparations before your journey to Qatar. Review your answers and ensure you're ready to discover the modern marvels, rich heritage, and warm hospitality of this Middle Eastern gem!",
		questions: [
			{
				question: "Do you have a valid passport?",
				answers: ["yes", "no", "not sure"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"A valid passport is essential for travel to Qatar.",
			},
			{
				question: "Have you checked if you need a visa for Qatar?",
				answers: ["yes", "no", "in process"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Ensure you have the necessary visa for entry into Qatar.",
			},
			{
				question: "Have you researched Qatari customs and etiquette?",
				answers: ["yes", "no", "in progress"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Familiarize yourself with Qatari customs for a respectful visit.",
			},
			{
				question: "Do you have travel insurance for your trip?",
				answers: ["yes", "no", "considering"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Travel insurance is important for a worry-free journey.",
			},
			{
				question: "Are your vaccinations up to date?",
				answers: ["yes", "no", "consulting with doctor"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Ensure your vaccinations are current for a healthy visit.",
			},
			{
				question: "Have you booked your accommodation in Qatar?",
				answers: ["yes", "no", "still deciding"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Secure your accommodation for a comfortable stay in Qatar.",
			},
			{
				question: "Do you know basic Arabic phrases?",
				answers: ["yes", "no", "learning"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Familiarize yourself with basic Arabic phrases for better communication.",
			},
			{
				question: "Have you checked the local weather forecast?",
				answers: ["yes", "no", "not yet"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Check the weather forecast to pack accordingly for your trip to Qatar.",
			},
			{
				question: "Do you know emergency numbers in Qatar?",
				answers: ["yes", "no", "researching"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Familiarize yourself with emergency numbers for a safe visit to Qatar.",
			},
			{
				question: "Have you planned your itinerary in Qatar?",
				answers: [" yes", "no", "working on it"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Plan your itinerary for an organized and enjoyable trip in Qatar.",
			},
			{
				question: "Are you aware of local transportation options in Qatar?",
				answers: ["yes", "no", "researching"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Know your transportation options for convenient travel within Qatar.",
			},
			{
				question: "Have you researched Qatari cuisine?",
				answers: ["yes", " no", "excited to try"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Explore and savor the delightful flavors of Qatari cuisine.",
			},
			{
				question: "Do you have a power adapter for your devices?",
				answers: ["yes", "no", "need to buy one"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Ensure you have the right power adapter for your devices in Qatar.",
			},
			{
				question: "Have you informed your bank about your travel to Qatar?",
				answers: ["yes", "no", "not yet"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Notify your bank to avoid any issues with your cards during your trip to Qatar.",
			},
			{
				question: "Are you familiar with popular tourist attractions in Qatar?",
				answers: ["yes", "no", "researching"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Explore famous attractions for a memorable journey in Qatar.",
			},
		],
	},
	{
		route: "romanian-adventure-quiz",
		title: "Romanian Adventure: Journey Readiness Quiz",
		description:
			"Embark on an enchanting adventure in Romania! Evaluate your travel readiness with our quiz and ensure you're well-prepared to explore the medieval castles, picturesque landscapes, and vibrant culture of this Eastern European gem.",
		high: "Congratulations! You are well-prepared to embark on your enchanting adventure in Romania. Get ready to explore the medieval castles, picturesque landscapes, and vibrant culture of this Eastern European gem!",
		low: "It seems you may need to make some preparations before your journey to Romania. Review your answers and ensure you're ready to explore the medieval castles, picturesque landscapes, and vibrant culture of this Eastern European gem!",
		questions: [
			{
				question: "Do you have a valid passport?",
				answers: ["yes", "no", "not sure"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"A valid passport is essential for travel to Romania.",
			},
			{
				question: "Have you checked if you need a visa for Romania?",
				answers: ["yes", "no", "in process"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Ensure you have the necessary visa for entry into Romania.",
			},
			{
				question: "Have you researched Romanian customs and etiquette?",
				answers: ["yes", "no", "in progress"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Familiarize yourself with Romanian customs for a respectful visit.",
			},
			{
				question: "Do you have travel insurance for your trip?",
				answers: ["yes", "no", "considering"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Travel insurance is important for a worry-free journey.",
			},
			{
				question: "Are your vaccinations up to date?",
				answers: ["yes", "no", "consulting with doctor"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Ensure your vaccinations are current for a healthy visit.",
			},
			{
				question: "Have you booked your accommodation in Romania?",
				answers: ["yes", "no", "still deciding"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Secure your accommodation for a comfortable stay in Romania.",
			},
			{
				question: "Do you know basic Romanian phrases?",
				answers: ["yes", "no", "learning"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Familiarize yourself with basic Romanian phrases for better communication.",
			},
			{
				question: "Have you checked the local weather forecast?",
				answers: ["yes", "no", "not yet"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Check the weather forecast to pack accordingly for your trip to Romania.",
			},
			{
				question: "Do you know emergency numbers in Romania?",
				answers: ["yes", "no", "researching"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Familiarize yourself with emergency numbers for a safe visit to Romania.",
			},
			{
				question: "Have you planned your itinerary in Romania?",
				answers: [" yes", "no", "working on it"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Plan your itinerary for an organized and enjoyable trip in Romania.",
			},
			{
				question: "Are you aware of local transportation options in Romania?",
				answers: ["yes", "no", "researching"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Know your transportation options for convenient travel within Romania.",
			},
			{
				question: "Have you researched Romanian cuisine?",
				answers: ["yes", " no", "excited to try"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Explore and savor the delightful flavors of Romanian cuisine.",
			},
			{
				question: "Do you have a power adapter for your devices?",
				answers: ["yes", "no", "need to buy one"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Ensure you have the right power adapter for your devices in Romania.",
			},
			{
				question: "Have you informed your bank about your travel to Romania?",
				answers: ["yes", "no", "not yet"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Notify your bank to avoid any issues with your cards during your trip to Romania.",
			},
			{
				question:
					"Are you familiar with popular tourist attractions in Romania?",
				answers: ["yes", "no", "researching"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Explore famous attractions for a memorable journey in Romania.",
			},
		],
	},
];

console.log(db.length - 1)
