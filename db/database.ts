const DATABASE = [
	{
		route: "explore-djibouti-quiz",
		title: "Djibouti Discovery Unveiled: Djibouti Edition!",
		description:
			"Embark on a quiz to ensure you're fully prepared for the extraordinary beauty of Djibouti. Answer these questions to unveil your readiness for an unforgettable journey through otherworldly landscapes, diverse cultures, and the unique charm of the Horn of Africa.",
		questions: [
			{
				question: "Do you have a valid passport?",
				answers: ["yes", "no", "not sure"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"A valid passport is essential for your journey to Djibouti.",
			},
			{
				question:
					"Have you checked visa requirements and obtained the necessary travel documents for Djibouti?",
				answers: ["yes", "no", "in progress"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Ensure you have the required travel documents for a smooth entry into Djibouti.",
			},
			{
				question: "Are you aware of local customs and traditions in Djibouti?",
				answers: ["yes", "no", "learning"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Immerse yourself in the rich culture of Djibouti before your adventure.",
			},
			{
				question: "Have you booked accommodations for your stay in Djibouti?",
				answers: ["yes", "no", "still deciding"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Ensure a comfortable stay by booking accommodations in advance.",
			},
			{
				question: "Do you have travel insurance for your Djiboutian adventure?",
				answers: ["yes", "no", "considering"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Travel confidently with insurance coverage for your journey through Djibouti.",
			},
			{
				question:
					"Have you planned your itinerary and researched key attractions in Djibouti?",
				answers: ["yes", "no", "in progress"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Enhance your experience by planning your Djiboutian itinerary.",
			},
			{
				question:
					"Are you familiar with Djiboutian cuisine and excited to try local dishes?",
				answers: ["yes", "no", "excited to try"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Savor the flavors of Djibouti by exploring local cuisine.",
			},
			{
				question:
					"Have you considered local currency and payment methods in Djibouti?",
				answers: ["yes", "no", "need more info"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Be prepared for transactions with knowledge of local currency in Djibouti.",
			},
			{
				question: "Do you know basic Djiboutian phrases for communication?",
				answers: ["yes", "no", "learning essentials"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Learn a few Djiboutian phrases to connect with locals during your Djiboutian adventure.",
			},
			{
				question:
					"Have you checked travel advisories or restrictions for Djibouti?",
				answers: ["yes", "no", "planning to"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Stay informed with travel advisories for a smooth Djiboutian journey.",
			},
		],
		high: "Congratulations on passing the quiz! You're well-prepared for your adventure in Djibouti.",
		low: "It seems you may need to prepare a bit more for your Djibouti journey. Consider revisiting the quiz questions for better preparation.",
	},
	{
		route: "explore-sao-tome-and-principe-quiz",
		title:
			"São Tomé and Príncipe Secrets Unveiled: São Tomé and Príncipe Edition!",
		description:
			"Embark on a quiz to ensure you're fully prepared for the hidden beauty of São Tomé and Príncipe. Answer these questions to unveil your readiness for an unforgettable journey through lush rainforests, cocoa plantations, and the untouched paradise of these tropical islands in the Gulf of Guinea.",
		questions: [
			{
				question: "Do you have a valid passport?",
				answers: ["yes", "no", "not sure"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"A valid passport is essential for your journey to São Tomé and Príncipe.",
			},
			{
				question:
					"Have you checked visa requirements and obtained the necessary travel documents for São Tomé and Príncipe?",
				answers: ["yes", "no", "in progress"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Ensure you have the required travel documents for a smooth entry into São Tomé and Príncipe.",
			},
			{
				question:
					"Are you aware of local customs and traditions in São Tomé and Príncipe?",
				answers: ["yes", "no", "learning"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Immerse yourself in the rich culture of São Tomé and Príncipe before your adventure.",
			},
			{
				question:
					"Have you booked accommodations for your stay in São Tomé and Príncipe?",
				answers: ["yes", "no", "still deciding"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Ensure a comfortable stay by booking accommodations in advance.",
			},
			{
				question:
					"Do you have travel insurance for your São Toméan and Príncipean adventure?",
				answers: ["yes", "no", "considering"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Travel confidently with insurance coverage for your journey through São Tomé and Príncipe.",
			},
			{
				question:
					"Have you planned your itinerary and researched key attractions in São Tomé and Príncipe?",
				answers: ["yes", "no", "in progress"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Enhance your experience by planning your São Toméan and Príncipean itinerary.",
			},
			{
				question:
					"Are you familiar with São Toméan and Príncipean cuisine and excited to try local dishes?",
				answers: ["yes", "no", "excited to try"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Savor the flavors of São Tomé and Príncipe by exploring local cuisine.",
			},
			{
				question:
					"Have you considered local currency and payment methods in São Tomé and Príncipe?",
				answers: ["yes", "no", "need more info"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Be prepared for transactions with knowledge of local currency in São Tomé and Príncipe.",
			},
			{
				question:
					"Do you know basic São Toméan and Príncipean phrases for communication?",
				answers: ["yes", "no", "learning essentials"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Learn a few São Toméan and Príncipean phrases to connect with locals during your São Toméan and Príncipean adventure.",
			},
			{
				question:
					"Have you checked travel advisories or restrictions for São Tomé and Príncipe?",
				answers: ["yes", "no", "planning to"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Stay informed with travel advisories for a smooth São Toméan and Príncipean journey.",
			},
		],
		high: "Congratulations on passing the quiz! You're well prepared for your journey to São Tomé and Príncipe. Enjoy your adventure!",
		low: "It seems you might need to prepare a bit more for your São Tomé and Príncipe adventure. Review the questions and try again for better readiness.",
	},
	{
		route: "explore-comoros-quiz",
		title: "Comoros Charms Unveiled: Comoros Edition!",
		description:
			"Embark on a quiz to ensure you're fully prepared for the mesmerizing beauty of Comoros. Answer these questions to unveil your readiness for an unforgettable journey through volcanic landscapes, pristine beaches, and the unique blend of cultures in this Indian Ocean gem.",
		questions: [
			{
				question: "Do you have a valid passport?",
				answers: ["yes", "no", "not sure"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"A valid passport is essential for your journey to Comoros.",
			},
			{
				question:
					"Have you checked visa requirements and obtained the necessary travel documents for Comoros?",
				answers: ["yes", "no", "in progress"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Ensure you have the required travel documents for a smooth entry into Comoros.",
			},
			{
				question: "Are you aware of local customs and traditions in Comoros?",
				answers: ["yes", "no", "learning"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Immerse yourself in the rich culture of Comoros before your adventure.",
			},
			{
				question: "Have you booked accommodations for your stay in Comoros?",
				answers: ["yes", "no", "still deciding"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Ensure a comfortable stay by booking accommodations in advance.",
			},
			{
				question: "Do you have travel insurance for your Comorian adventure?",
				answers: ["yes", "no", "considering"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Travel confidently with insurance coverage for your journey through Comoros.",
			},
			{
				question:
					"Have you planned your itinerary and researched key attractions in Comoros?",
				answers: ["yes", "no", "in progress"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Enhance your experience by planning your Comorian itinerary.",
			},
			{
				question:
					"Are you familiar with Comorian cuisine and excited to try local dishes?",
				answers: ["yes", "no", "excited to try"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Savor the flavors of Comoros by exploring local cuisine.",
			},
			{
				question:
					"Have you considered local currency and payment methods in Comoros?",
				answers: ["yes", "no", "need more info"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Be prepared for transactions with knowledge of local currency in Comoros.",
			},
			{
				question: "Do you know basic Comorian phrases for communication?",
				answers: ["yes", "no", "learning essentials"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Learn a few Comorian phrases to connect with locals during your Comorian adventure.",
			},
			{
				question:
					"Have you checked travel advisories or restrictions for Comoros?",
				answers: ["yes", "no", "planning to"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Stay informed with travel advisories for a smooth Comorian journey.",
			},
		],
		high: "Congratulations on passing the quiz! You're well prepared for your journey to Comoros. Enjoy the enchanting islands!",
		low: "It seems you might need to prepare a bit more for your Comoros adventure. Review the questions and try again for better readiness.",
	},
	{
		route: "explore-mauritius-quiz",
		title: "Mauritius Marvels Unveiled: Mauritius Edition!",
		description:
			"Embark on a quiz to ensure you're fully prepared for the captivating beauty of Mauritius. Answer these questions to unveil your readiness for an unforgettable journey through pristine beaches, diverse landscapes, and the vibrant culture of this Indian Ocean paradise.",
		questions: [
			{
				question: "Do you have a valid passport?",
				answers: ["yes", "no", "not sure"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"A valid passport is essential for your journey to Mauritius.",
			},
			{
				question:
					"Have you checked visa requirements and obtained the necessary travel documents for Mauritius?",
				answers: ["yes", "no", "in progress"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Ensure you have the required travel documents for a smooth entry into Mauritius.",
			},
			{
				question: "Are you aware of local customs and traditions in Mauritius?",
				answers: ["yes", "no", "learning"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Immerse yourself in the rich culture of Mauritius before your adventure.",
			},
			{
				question: "Have you booked accommodations for your stay in Mauritius?",
				answers: ["yes", "no", "still deciding"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Ensure a comfortable stay by booking accommodations in advance.",
			},
			{
				question: "Do you have travel insurance for your Mauritian adventure?",
				answers: ["yes", "no", "considering"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Travel confidently with insurance coverage for your journey through Mauritius.",
			},
			{
				question:
					"Have you planned your itinerary and researched key attractions in Mauritius?",
				answers: ["yes", "no", "in progress"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Enhance your experience by planning your Mauritian itinerary.",
			},
			{
				question:
					"Are you familiar with Mauritian cuisine and excited to try local dishes?",
				answers: ["yes", "no", "excited to try"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Savor the flavors of Mauritius by exploring local cuisine.",
			},
			{
				question:
					"Have you considered local currency and payment methods in Mauritius?",
				answers: ["yes", "no", "need more info"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Be prepared for transactions with knowledge of local currency in Mauritius.",
			},
			{
				question: "Do you know basic Mauritian phrases for communication?",
				answers: ["yes", "no", "learning essentials"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Learn a few Mauritian phrases to connect with locals during your Mauritian adventure.",
			},
			{
				question:
					"Have you checked travel advisories or restrictions for Mauritius?",
				answers: ["yes", "no", "planning to"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Stay informed with travel advisories for a smooth Mauritian journey.",
			},
		],
		high: "Congratulations on passing the quiz! You're well prepared for your journey to Mauritius. Enjoy the breathtaking island!",
		low: "It seems you might need to prepare a bit more for your Mauritius adventure. Review the questions and try again for better readiness.",
	},
	{
		route: "explore-lesotho-quiz",
		title: "Lesotho Heights Unveiled: Lesotho Edition!",
		description:
			"Embark on a quiz to ensure you're fully prepared for the breathtaking beauty of Lesotho. Answer these questions to unveil your readiness for an unforgettable journey through mountainous landscapes, traditional Basotho culture, and the 'Kingdom in the Sky' charm of this Southern African gem.",
		questions: [
			{
				question: "Do you have a valid passport?",
				answers: ["yes", "no", "not sure"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"A valid passport is essential for your journey to Lesotho.",
			},
			{
				question:
					"Have you checked visa requirements and obtained the necessary travel documents for Lesotho?",
				answers: ["yes", "no", "in progress"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Ensure you have the required travel documents for a smooth entry into Lesotho.",
			},
			{
				question: "Are you aware of local customs and traditions in Lesotho?",
				answers: ["yes", "no", "learning"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Immerse yourself in the rich culture of Lesotho before your adventure.",
			},
			{
				question: "Have you booked accommodations for your stay in Lesotho?",
				answers: ["yes", "no", "still deciding"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Ensure a comfortable stay by booking accommodations in advance.",
			},
			{
				question: "Do you have travel insurance for your Lesotho adventure?",
				answers: ["yes", "no", "considering"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Travel confidently with insurance coverage for your journey through Lesotho.",
			},
			{
				question:
					"Have you planned your itinerary and researched key attractions in Lesotho?",
				answers: ["yes", "no", "in progress"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Enhance your experience by planning your Lesotho itinerary.",
			},
			{
				question:
					"Are you familiar with Lesotho cuisine and excited to try local dishes?",
				answers: ["yes", "no", "excited to try"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Savor the flavors of Lesotho by exploring local cuisine.",
			},
			{
				question:
					"Have you considered local currency and payment methods in Lesotho?",
				answers: ["yes", "no", "need more info"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Be prepared for transactions with knowledge of local currency in Lesotho.",
			},
			{
				question: "Do you know basic Sesotho phrases for communication?",
				answers: ["yes", "no", "learning essentials"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Learn a few Sesotho phrases to connect with locals during your Lesotho adventure.",
			},
			{
				question:
					"Have you checked travel advisories or restrictions for Lesotho?",
				answers: ["yes", "no", "planning to"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Stay informed with travel advisories for a smooth Lesotho journey.",
			},
		],
		high: "Congratulations on passing the quiz! You're well prepared for your journey to Lesotho. Enjoy the majestic 'Kingdom in the Sky'!",
		low: "It seems you might need to prepare a bit more for your Lesotho adventure. Review the questions and try again for better readiness.",
	},
	{
		route: "explore-eswatini-quiz",
		title: "Eswatini Enchantment Unveiled: Eswatini Edition!",
		description:
			"Embark on a quiz to ensure you're fully prepared for the enchanting beauty of Eswatini. Answer these questions to unveil your readiness for an unforgettable journey through picturesque landscapes, vibrant traditions, and the rich cultural tapestry of this Southern African gem.",
		questions: [
			{
				question: "Do you have a valid passport?",
				answers: ["yes", "no", "not sure"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"A valid passport is essential for your journey to Eswatini.",
			},
			{
				question:
					"Have you checked visa requirements and obtained the necessary travel documents for Eswatini?",
				answers: ["yes", "no", "in progress"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Ensure you have the required travel documents for a smooth entry into Eswatini.",
			},
			{
				question: "Are you aware of local customs and traditions in Eswatini?",
				answers: ["yes", "no", "learning"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Immerse yourself in the rich culture of Eswatini before your adventure.",
			},
			{
				question: "Have you booked accommodations for your stay in Eswatini?",
				answers: ["yes", "no", "still deciding"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Ensure a comfortable stay by booking accommodations in advance.",
			},
			{
				question: "Do you have travel insurance for your Eswatini adventure?",
				answers: ["yes", "no", "considering"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Travel confidently with insurance coverage for your journey through Eswatini.",
			},
			{
				question:
					"Have you planned your itinerary and researched key attractions in Eswatini?",
				answers: ["yes", "no", "in progress"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Enhance your experience by planning your Eswatini itinerary.",
			},
			{
				question:
					"Are you familiar with Eswatini cuisine and excited to try local dishes?",
				answers: ["yes", "no", "excited to try"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Savor the flavors of Eswatini by exploring local cuisine.",
			},
			{
				question:
					"Have you considered local currency and payment methods in Eswatini?",
				answers: ["yes", "no", "need more info"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Be prepared for transactions with knowledge of local currency in Eswatini.",
			},
			{
				question: "Do you know basic siSwati phrases for communication?",
				answers: ["yes", "no", "learning essentials"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Learn a few siSwati phrases to connect with locals during your Eswatini adventure.",
			},
			{
				question:
					"Have you checked travel advisories or restrictions for Eswatini?",
				answers: ["yes", "no", "planning to"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Stay informed with travel advisories for a smooth Eswatini journey.",
			},
		],
		high: "Congratulations on passing the quiz! You're well prepared for your journey to Eswatini. Enjoy the unique beauty and culture of this vibrant nation!",
		low: "It seems you might need to prepare a bit more for your Eswatini adventure. Review the questions and try again for better readiness.",
	},
	{
		route: "explore-malawi-quiz",
		title: "Malawi Magic Revealed: Malawi Edition!",
		description:
			"Embark on a quiz to ensure you're fully prepared for the enchanting beauty of Malawi. Answer these questions to unveil your readiness for an unforgettable journey through stunning landscapes, the shimmering Lake Malawi, and the warm-hearted culture of the 'Warm Heart of Africa.'",
		questions: [
			{
				question: "Do you have a valid passport?",
				answers: ["yes", "no", "not sure"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"A valid passport is essential for your journey to Malawi.",
			},
			{
				question:
					"Have you checked visa requirements and obtained the necessary travel documents for Malawi?",
				answers: ["yes", "no", "in progress"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Ensure you have the required travel documents for a smooth entry into Malawi.",
			},
			{
				question: "Are you aware of local customs and traditions in Malawi?",
				answers: ["yes", "no", "learning"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Immerse yourself in the rich culture of Malawi before your adventure.",
			},
			{
				question: "Have you booked accommodations for your stay in Malawi?",
				answers: ["yes", "no", "still deciding"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Ensure a comfortable stay by booking accommodations in advance.",
			},
			{
				question: "Do you have travel insurance for your Malawian adventure?",
				answers: ["yes", "no", "considering"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Travel confidently with insurance coverage for your journey through Malawi.",
			},
			{
				question:
					"Have you planned your itinerary and researched key attractions in Malawi?",
				answers: ["yes", "no", "in progress"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Enhance your experience by planning your Malawian itinerary.",
			},
			{
				question:
					"Are you familiar with Malawian cuisine and excited to try local dishes?",
				answers: ["yes", "no", "excited to try"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Savor the flavors of Malawi by exploring local cuisine.",
			},
			{
				question:
					"Have you considered local currency and payment methods in Malawi?",
				answers: ["yes", "no", "need more info"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Be prepared for transactions with knowledge of local currency in Malawi.",
			},
			{
				question: "Do you know basic Malawian phrases for communication?",
				answers: ["yes", "no", "learning essentials"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Learn a few Malawian phrases to connect with locals during your Malawian adventure.",
			},
			{
				question:
					"Have you checked travel advisories or restrictions for Malawi?",
				answers: ["yes", "no", "planning to"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Stay informed with travel advisories for a smooth Malawian journey.",
			},
		],
		high: "Congratulations on passing the quiz! You're well prepared for your journey to Malawi. Dive into the beauty and warmth of the 'Warm Heart of Africa' with confidence and excitement!",
		low: "It looks like there's more preparation needed for your Malawi trip. Revisit the questions and ensure you're ready for a rich and enjoyable Malawian experience.",
	},
	{
		route: "explore-bhutan-quiz",
		title: "Bhutan Bliss Uncovered: Bhutan Edition!",
		description:
			"Embark on a quiz to ensure you're fully prepared for the serene beauty of Bhutan. Answer these questions to unveil your readiness for an unforgettable journey through the mystical landscapes, ancient traditions, and the happiness-infused culture of the Himalayan Kingdom.",
		questions: [
			{
				question: "Do you have a valid passport?",
				answers: ["yes", "no", "not sure"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"A valid passport is essential for your journey to Bhutan.",
			},
			{
				question:
					"Have you checked visa requirements and obtained the necessary travel documents for Bhutan?",
				answers: ["yes", "no", "in progress"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Ensure you have the required travel documents for a smooth entry into Bhutan.",
			},
			{
				question: "Are you aware of local customs and traditions in Bhutan?",
				answers: ["yes", "no", "learning"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Immerse yourself in the rich culture of Bhutan before your adventure.",
			},
			{
				question: "Have you booked accommodations for your stay in Bhutan?",
				answers: ["yes", "no", "still deciding"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Ensure a comfortable stay by booking accommodations in advance.",
			},
			{
				question: "Do you have travel insurance for your Bhutanese adventure?",
				answers: ["yes", "no", "considering"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Travel confidently with insurance coverage for your journey through Bhutan.",
			},
			{
				question:
					"Have you planned your itinerary and researched key attractions in Bhutan?",
				answers: ["yes", "no", "in progress"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Enhance your experience by planning your Bhutanese itinerary.",
			},
			{
				question:
					"Are you familiar with Bhutanese cuisine and excited to try local dishes?",
				answers: ["yes", "no", "excited to try"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Savor the flavors of Bhutan by exploring local cuisine.",
			},
			{
				question:
					"Have you considered local currency and payment methods in Bhutan?",
				answers: ["yes", "no", "need more info"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Be prepared for transactions with knowledge of local currency in Bhutan.",
			},
			{
				question: "Do you know basic Bhutanese phrases for communication?",
				answers: ["yes", "no", "learning essentials"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Learn a few Bhutanese phrases to connect with locals during your Bhutanese adventure.",
			},
			{
				question:
					"Have you checked travel advisories or restrictions for Bhutan?",
				answers: ["yes", "no", "planning to"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Stay informed with travel advisories for a smooth Bhutanese journey.",
			},
		],
		high: "Congratulations on passing the quiz! You're well prepared for your journey to Bhutan. Embrace the tranquility and cultural richness of the Himalayan Kingdom with excitement and peace of mind!",
		low: "It looks like there's more preparation needed for your trip to Bhutan. Revisit the questions and ensure you're ready to fully enjoy the serene and happiness-infused culture of this beautiful Himalayan Kingdom.",
	},
	{
		route: "explore-papua-new-guinea-quiz",
		title: "Papua Paradise Unveiled: Papua New Guinea Edition!",
		description:
			"Embark on a quiz to ensure you're fully prepared for the extraordinary beauty of Papua New Guinea. Answer these questions to unveil your readiness for an unforgettable journey through diverse landscapes, vibrant cultures, and the fascinating biodiversity of the Pacific's hidden gem.",
		questions: [
			{
				question: "Do you have a valid passport?",
				answers: ["yes", "no", "not sure"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"A valid passport is essential for your journey to Papua New Guinea.",
			},
			{
				question:
					"Have you checked visa requirements and obtained the necessary travel documents for Papua New Guinea?",
				answers: ["yes", "no", "in progress"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Ensure you have the required travel documents for a smooth entry into Papua New Guinea.",
			},
			{
				question:
					"Are you aware of local customs and traditions in Papua New Guinea?",
				answers: ["yes", "no", "learning"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Immerse yourself in the rich culture of Papua New Guinea before your adventure.",
			},
			{
				question:
					"Have you booked accommodations for your stay in Papua New Guinea?",
				answers: ["yes", "no", "still deciding"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Ensure a comfortable stay by booking accommodations in advance.",
			},
			{
				question:
					"Do you have travel insurance for your Papua New Guinean adventure?",
				answers: ["yes", "no", "considering"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Travel confidently with insurance coverage for your journey through Papua New Guinea.",
			},
			{
				question:
					"Have you planned your itinerary and researched key attractions in Papua New Guinea?",
				answers: ["yes", "no", "in progress"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Enhance your experience by planning your Papua New Guinean itinerary.",
			},
			{
				question:
					"Are you familiar with Papua New Guinean cuisine and excited to try local dishes?",
				answers: ["yes", "no", "excited to try"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Savor the flavors of Papua New Guinea by exploring local cuisine.",
			},
			{
				question:
					"Have you considered local currency and payment methods in Papua New Guinea?",
				answers: ["yes", "no", "need more info"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Be prepared for transactions with knowledge of local currency in Papua New Guinea.",
			},
			{
				question:
					"Do you know basic Papua New Guinean phrases for communication?",
				answers: ["yes", "no", "learning essentials"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Learn a few Papua New Guinean phrases to connect with locals during your Papua New Guinean adventure.",
			},
			{
				question:
					"Have you checked travel advisories or restrictions for Papua New Guinea?",
				answers: ["yes", "no", "planning to"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Stay informed with travel advisories for a smooth Papua New Guinean journey.",
			},
		],
		high: "Fantastic! You're well-prepared for your adventure to Papua New Guinea. Dive into the stunning diversity, culture, and natural beauty that awaits you in this unique Pacific paradise.",
		low: "It seems there are a few areas to brush up on before your trip to Papua New Guinea. Make sure to revisit these questions and prepare thoroughly to enjoy everything this vibrant and diverse country has to offer.",
	},
	{
		route: "explore-solomon-islands-quiz",
		title: "Island Mystique Unveiled: Solomon Islands Edition!",
		description:
			"Embark on a quiz to ensure you're fully prepared for the enchanting beauty of the Solomon Islands. Answer these questions to unveil your readiness for an unforgettable journey through pristine waters, lush rainforests, and the diverse cultures of this South Pacific archipelago.",
		questions: [
			{
				question: "Do you have a valid passport?",
				answers: ["yes", "no", "not sure"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"A valid passport is essential for your journey to the Solomon Islands.",
			},
			{
				question:
					"Have you checked visa requirements and obtained the necessary travel documents for the Solomon Islands?",
				answers: ["yes", "no", "in progress"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Ensure you have the required travel documents for a smooth entry into the Solomon Islands.",
			},
			{
				question:
					"Are you aware of local customs and traditions in the Solomon Islands?",
				answers: ["yes", "no", "learning"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Immerse yourself in the rich culture of the Solomon Islands before your adventure.",
			},
			{
				question:
					"Have you booked accommodations for your stay in the Solomon Islands?",
				answers: ["yes", "no", "still deciding"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Ensure a comfortable stay by booking accommodations in advance.",
			},
			{
				question:
					"Do you have travel insurance for your Solomon Islander adventure?",
				answers: ["yes", "no", "considering"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Travel confidently with insurance coverage for your journey through the Solomon Islands.",
			},
			{
				question:
					"Have you planned your itinerary and researched key attractions in the Solomon Islands?",
				answers: ["yes", "no", "in progress"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Enhance your experience by planning your Solomon Islander itinerary.",
			},
			{
				question:
					"Are you familiar with Solomon Islander cuisine and excited to try local dishes?",
				answers: ["yes", "no", "excited to try"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Savor the flavors of the Solomon Islands by exploring local cuisine.",
			},
			{
				question:
					"Have you considered local currency and payment methods in the Solomon Islands?",
				answers: ["yes", "no", "need more info"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Be prepared for transactions with knowledge of local currency in the Solomon Islands.",
			},
			{
				question:
					"Do you know basic Solomon Islander phrases for communication?",
				answers: ["yes", "no", "learning essentials"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Learn a few Solomon Islander phrases to connect with locals during your Solomon Islander adventure.",
			},
			{
				question:
					"Have you checked travel advisories or restrictions for the Solomon Islands?",
				answers: ["yes", "no", "planning to"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Stay informed with travel advisories for a smooth Solomon Islander journey.",
			},
		],
		high: "Congratulations! You're well-prepared for your journey to the Solomon Islands. Your knowledge and preparation will surely make your trip more enjoyable and immersive in the rich natural and cultural tapestry of the islands.",
		low: "It looks like there are a few areas you might need to look into before setting off on your Solomon Islands adventure. Ensuring you're well-prepared will help you fully enjoy the beauty and culture of this unique destination.",
	},
	{
		route: "explore-vanuatu-quiz",
		title: "Vanuatu Vibes Unleashed: Vanuatu Edition!",
		description:
			"Embark on a quiz to ensure you're fully prepared for the mesmerizing beauty of Vanuatu. Answer these questions to unveil your readiness for an unforgettable journey through vibrant cultures, volcanic landscapes, and the tropical paradise of the South Pacific archipelago.",
		questions: [
			{
				question: "Do you have a valid passport?",
				answers: ["yes", "no", "not sure"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"A valid passport is essential for your journey to Vanuatu.",
			},
			{
				question:
					"Have you checked visa requirements and obtained the necessary travel documents for Vanuatu?",
				answers: ["yes", "no", "in progress"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Ensure you have the required travel documents for a smooth entry into Vanuatu.",
			},
			{
				question: "Are you aware of local customs and traditions in Vanuatu?",
				answers: ["yes", "no", "learning"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Immerse yourself in the rich culture of Vanuatu before your adventure.",
			},
			{
				question: "Have you booked accommodations for your stay in Vanuatu?",
				answers: ["yes", "no", "still deciding"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Ensure a comfortable stay by booking accommodations in advance.",
			},
			{
				question: "Do you have travel insurance for your Vanuatuan adventure?",
				answers: ["yes", "no", "considering"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Travel confidently with insurance coverage for your journey through Vanuatu.",
			},
			{
				question:
					"Have you planned your itinerary and researched key attractions in Vanuatu?",
				answers: ["yes", "no", "in progress"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Enhance your experience by planning your Vanuatuan itinerary.",
			},
			{
				question:
					"Are you familiar with Vanuatuan cuisine and excited to try local dishes?",
				answers: ["yes", "no", "excited to try"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Savor the flavors of Vanuatu by exploring local cuisine.",
			},
			{
				question:
					"Have you considered local currency and payment methods in Vanuatu?",
				answers: ["yes", "no", "need more info"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Be prepared for transactions with knowledge of local currency in Vanuatu.",
			},
			{
				question: "Do you know basic Vanuatuan phrases for communication?",
				answers: ["yes", "no", "learning essentials"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Learn a few Vanuatuan phrases to connect with locals during your Vanuatuan adventure.",
			},
			{
				question:
					"Have you checked travel advisories or restrictions for Vanuatu?",
				answers: ["yes", "no", "planning to"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Stay informed with travel advisories for a smooth Vanuatuan journey.",
			},
		],
		high: "Congratulations! You're well-prepared for your Vanuatu adventure. Your diligent preparation will enhance your experience, allowing you to fully immerse yourself in the unique culture, natural beauty, and vibrant life of Vanuatu.",
		low: "It seems there are some preparations yet to be made for your trip to Vanuatu. Taking the time to address these areas will ensure a smoother and more enjoyable experience as you explore the stunning landscapes and rich cultural tapestry of Vanuatu.",
	},
	{
		route: "explore-micronesia-quiz",
		title: "Micronesian Wonders Unveiled: Micronesia Edition!",
		description:
			"Embark on a quiz to ensure you're fully prepared for the awe-inspiring beauty of Micronesia. Answer these questions to unveil your readiness for an unforgettable journey through diverse islands, vibrant coral reefs, and the fascinating cultures of this Pacific paradise.",
		questions: [
			{
				question: "Do you have a valid passport?",
				answers: ["yes", "no", "not sure"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"A valid passport is essential for your journey to Micronesia.",
			},
			{
				question:
					"Have you checked visa requirements and obtained the necessary travel documents for Micronesia?",
				answers: ["yes", "no", "in progress"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Ensure you have the required travel documents for a smooth entry into Micronesia.",
			},
			{
				question:
					"Are you aware of local customs and traditions in Micronesia?",
				answers: ["yes", "no", "learning"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Immerse yourself in the rich culture of Micronesia before your adventure.",
			},
			{
				question: "Have you booked accommodations for your stay in Micronesia?",
				answers: ["yes", "no", "still deciding"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Ensure a comfortable stay by booking accommodations in advance.",
			},
			{
				question:
					"Do you have travel insurance for your Micronesian adventure?",
				answers: ["yes", "no", "considering"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Travel confidently with insurance coverage for your journey through Micronesia.",
			},
			{
				question:
					"Have you planned your itinerary and researched key attractions in Micronesia?",
				answers: ["yes", "no", "in progress"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Enhance your experience by planning your Micronesian itinerary.",
			},
			{
				question:
					"Are you familiar with Micronesian cuisine and excited to try local dishes?",
				answers: ["yes", "no", "excited to try"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Savor the flavors of Micronesia by exploring local cuisine.",
			},
			{
				question:
					"Have you considered local currency and payment methods in Micronesia?",
				answers: ["yes", "no", "need more info"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Be prepared for transactions with knowledge of local currency in Micronesia.",
			},
			{
				question: "Do you know basic Micronesian phrases for communication?",
				answers: ["yes", "no", "learning essentials"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Learn a few Micronesian phrases to connect with locals during your Micronesian adventure.",
			},
			{
				question:
					"Have you checked travel advisories or restrictions for Micronesia?",
				answers: ["yes", "no", "planning to"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Stay informed with travel advisories for a smooth Micronesian journey.",
			},
		],
		high: "Congratulations on passing the quiz! You're well-prepared for your Micronesian adventure.",
		low: "It seems you might need to prepare a bit more for your journey to Micronesia. Check the areas you missed and try again!",
	},
	{
		route: "explore-palau-quiz",
		title: "Paradise Found: Palau Edition!",
		description:
			"Embark on a quiz to ensure you're fully prepared for the enchanting beauty of Palau. Answer these questions to unveil your readiness for an unforgettable journey through pristine waters, lush landscapes, and the rich cultural tapestry of the Micronesian gem in the Pacific.",
		questions: [
			{
				question: "Do you have a valid passport?",
				answers: ["yes", "no", "not sure"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"A valid passport is essential for your journey to Palau.",
			},
			{
				question:
					"Have you checked visa requirements and obtained the necessary travel documents for Palau?",
				answers: ["yes", "no", "in progress"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Ensure you have the required travel documents for a smooth entry into Palau.",
			},
			{
				question: "Are you aware of local customs and traditions in Palau?",
				answers: ["yes", "no", "learning"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Immerse yourself in the rich culture of Palau before your adventure.",
			},
			{
				question: "Have you booked accommodations for your stay in Palau?",
				answers: ["yes", "no", "still deciding"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Ensure a comfortable stay by booking accommodations in advance.",
			},
			{
				question: "Do you have travel insurance for your Palauan adventure?",
				answers: ["yes", "no", "considering"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Travel confidently with insurance coverage for your journey through Palau.",
			},
			{
				question:
					"Have you planned your itinerary and researched key attractions in Palau?",
				answers: ["yes", "no", "in progress"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Enhance your experience by planning your Palauan itinerary.",
			},
			{
				question:
					"Are you familiar with Palauan cuisine and excited to try local dishes?",
				answers: ["yes", "no", "excited to try"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Savor the flavors of Palau by exploring local cuisine.",
			},
			{
				question:
					"Have you considered local currency and payment methods in Palau?",
				answers: ["yes", "no", "need more info"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Be prepared for transactions with knowledge of local currency in Palau.",
			},
			{
				question: "Do you know basic Palauan phrases for communication?",
				answers: ["yes", "no", "learning essentials"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Learn a few Palauan phrases to connect with locals during your Palauan adventure.",
			},
			{
				question:
					"Have you checked travel advisories or restrictions for Palau?",
				answers: ["yes", "no", "planning to"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Stay informed with travel advisories for a smooth Palauan journey.",
			},
		],
		high: "Congratulations on passing the quiz! You're well-prepared for your Palauan adventure.",
		low: "It seems you might need to prepare a bit more for your journey to Palau. Check the areas you missed and try again!",
	},
	{
		route: "explore-marshall-islands-quiz",
		title: "Pacific Paradise Quest: Marshall Islands Edition!",
		description:
			"Embark on a quiz to ensure you're fully prepared for the mesmerizing beauty of the Marshall Islands. Answer these questions to unveil your readiness for an unforgettable journey through azure lagoons, vibrant coral reefs, and the unique culture of Micronesia in the Pacific.",
		questions: [
			{
				question: "Do you have a valid passport?",
				answers: ["yes", "no", "not sure"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"A valid passport is essential for your journey to the Marshall Islands.",
			},
			{
				question:
					"Have you checked visa requirements and obtained the necessary travel documents for the Marshall Islands?",
				answers: ["yes", "no", "in progress"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Ensure you have the required travel documents for a smooth entry into the Marshall Islands.",
			},
			{
				question:
					"Are you aware of local customs and traditions in the Marshall Islands?",
				answers: ["yes", "no", "learning"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Immerse yourself in the rich culture of the Marshall Islands before your adventure.",
			},
			{
				question:
					"Have you booked accommodations for your stay in the Marshall Islands?",
				answers: ["yes", "no", "still deciding"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Ensure a comfortable stay by booking accommodations in advance.",
			},
			{
				question:
					"Do you have travel insurance for your Marshallese adventure?",
				answers: ["yes", "no", "considering"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Travel confidently with insurance coverage for your journey through the Marshall Islands.",
			},
			{
				question:
					"Have you planned your itinerary and researched key attractions in the Marshall Islands?",
				answers: ["yes", "no", "in progress"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Enhance your experience by planning your Marshallese itinerary.",
			},
			{
				question:
					"Are you familiar with Marshallese cuisine and excited to try local dishes?",
				answers: ["yes", "no", "excited to try"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Savor the flavors of the Marshall Islands by exploring local cuisine.",
			},
			{
				question:
					"Have you considered local currency and payment methods in the Marshall Islands?",
				answers: ["yes", "no", "need more info"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Be prepared for transactions with knowledge of local currency in the Marshall Islands.",
			},
			{
				question: "Do you know basic Marshallese phrases for communication?",
				answers: ["yes", "no", "learning essentials"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Learn a few Marshallese phrases to connect with locals during your Marshallese adventure.",
			},
			{
				question:
					"Have you checked travel advisories or restrictions for the Marshall Islands?",
				answers: ["yes", "no", "planning to"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Stay informed with travel advisories for a smooth Marshallese journey.",
			},
		],
		high: "Congratulations on passing the quiz! You're well-prepared for your journey to the Marshall Islands.",
		low: "It seems you might need to prepare a bit more for your journey to the Marshall Islands. Check the areas you missed and try again!",
	},
	{
		route: "explore-tuvalu-quiz",
		title: "Atoll Tranquility: Tuvalu Edition!",
		description:
			"Embark on a quiz to ensure you're fully prepared for the peaceful beauty of Tuvalu. Answer these questions to unveil your readiness for an unforgettable journey through coral atolls, turquoise lagoons, and the laid-back charm of the Pacific's least visited destination.",
		questions: [
			{
				question: "Do you have a valid passport?",
				answers: ["yes", "no", "not sure"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"A valid passport is essential for your journey to Tuvalu.",
			},
			{
				question:
					"Have you checked visa requirements and obtained the necessary travel documents for Tuvalu?",
				answers: ["yes", "no", "in progress"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Ensure you have the required travel documents for a smooth entry into Tuvalu.",
			},
			{
				question: "Are you aware of local customs and traditions in Tuvalu?",
				answers: ["yes", "no", "learning"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Immerse yourself in the rich culture of Tuvalu before your adventure.",
			},
			{
				question: "Have you booked accommodations for your stay in Tuvalu?",
				answers: ["yes", "no", "still deciding"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Ensure a comfortable stay by booking accommodations in advance.",
			},
			{
				question: "Do you have travel insurance for your Tuvaluan adventure?",
				answers: ["yes", "no", "considering"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Travel confidently with insurance coverage for your journey through Tuvalu.",
			},
			{
				question:
					"Have you planned your itinerary and researched key attractions in Tuvalu?",
				answers: ["yes", "no", "in progress"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Enhance your experience by planning your Tuvaluan itinerary.",
			},
			{
				question:
					"Are you familiar with Tuvaluan cuisine and excited to try local dishes?",
				answers: ["yes", "no", "excited to try"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Savor the flavors of Tuvalu by exploring local cuisine.",
			},
			{
				question:
					"Have you considered local currency and payment methods in Tuvalu?",
				answers: ["yes", "no", "need more info"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Be prepared for transactions with knowledge of local currency in Tuvalu.",
			},
			{
				question: "Do you know basic Tuvaluan phrases for communication?",
				answers: ["yes", "no", "learning essentials"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Learn a few Tuvaluan phrases to connect with locals during your Tuvaluan adventure.",
			},
			{
				question:
					"Have you checked travel advisories or restrictions for Tuvalu?",
				answers: ["yes", "no", "planning to"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Stay informed with travel advisories for a smooth Tuvaluan journey.",
			},
		],
		high: "Congratulations on passing the quiz! You're well-prepared for your journey to Tuvalu.",
		low: "It seems you might need to prepare a bit more for your journey to Tuvalu. Check the areas you missed and try again!",
	},
	{
		route: "explore-kiribati-quiz",
		title: "Seaside Serenity: Kiribati Edition!",
		description:
			"Embark on a quiz to ensure you're fully prepared for the tranquil beauty of Kiribati. Answer these questions to unveil your readiness for an unforgettable journey through coral atolls, turquoise lagoons, and the peaceful charm of the Central Pacific paradise.",
		questions: [
			{
				question: "Do you have a valid passport?",
				answers: ["yes", "no", "not sure"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"A valid passport is essential for your journey to Kiribati.",
			},
			{
				question:
					"Have you checked visa requirements and obtained the necessary travel documents for Kiribati?",
				answers: ["yes", "no", "in progress"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Ensure you have the required travel documents for a smooth entry into Kiribati.",
			},
			{
				question: "Are you aware of local customs and traditions in Kiribati?",
				answers: ["yes", "no", "learning"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Immerse yourself in the rich culture of Kiribati before your adventure.",
			},
			{
				question: "Have you booked accommodations for your stay in Kiribati?",
				answers: ["yes", "no", "still deciding"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Ensure a comfortable stay by booking accommodations in advance.",
			},
			{
				question: "Do you have travel insurance for your Kiribatian adventure?",
				answers: ["yes", "no", "considering"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Travel confidently with insurance coverage for your journey through Kiribati.",
			},
			{
				question:
					"Have you planned your itinerary and researched key attractions in Kiribati?",
				answers: ["yes", "no", "in progress"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Enhance your experience by planning your Kiribatian itinerary.",
			},
			{
				question:
					"Are you familiar with Kiribatian cuisine and excited to try local dishes?",
				answers: ["yes", "no", "excited to try"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Savor the flavors of Kiribati by exploring local cuisine.",
			},
			{
				question:
					"Have you considered local currency and payment methods in Kiribati?",
				answers: ["yes", "no", "need more info"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Be prepared for transactions with knowledge of local currency in Kiribati.",
			},
			{
				question: "Do you know basic Kiribati phrases for communication?",
				answers: ["yes", "no", "learning essentials"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Learn a few Kiribati phrases to connect with locals during your Kiribatian adventure.",
			},
			{
				question:
					"Have you checked travel advisories or restrictions for Kiribati?",
				answers: ["yes", "no", "planning to"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Stay informed with travel advisories for a smooth Kiribatian journey.",
			},
		],
		high: "Congratulations on passing the quiz! You're well-prepared for your journey to Kiribati.",
		low: "It seems you might need to prepare a bit more for your journey to Kiribati. Check the areas you missed and try again!",
	},
	{
		route: "explore-tonga-quiz",
		title: "Kingdom of Tranquility: Tonga Edition!",
		description:
			"Embark on a quiz to ensure you're fully prepared for the serene beauty of Tonga. Answer these questions to unveil your readiness for an unforgettable journey through pristine beaches, ancient culture, and the tranquil charm of the South Pacific kingdom.",
		questions: [
			{
				question: "Do you have a valid passport?",
				answers: ["yes", "no", "not sure"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"A valid passport is essential for your journey to Tonga.",
			},
			{
				question:
					"Have you checked visa requirements and obtained the necessary travel documents for Tonga?",
				answers: ["yes", "no", "in progress"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Ensure you have the required travel documents for a smooth entry into Tonga.",
			},
			{
				question: "Are you aware of local customs and traditions in Tonga?",
				answers: ["yes", "no", "learning"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Immerse yourself in the rich culture of Tonga before your adventure.",
			},
			{
				question: "Have you booked accommodations for your stay in Tonga?",
				answers: ["yes", "no", "still deciding"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Ensure a comfortable stay by booking accommodations in advance.",
			},
			{
				question: "Do you have travel insurance for your Tongan adventure?",
				answers: ["yes", "no", "considering"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Travel confidently with insurance coverage for your journey through Tonga.",
			},
			{
				question:
					"Have you planned your itinerary and researched key attractions in Tonga?",
				answers: ["yes", "no", "in progress"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Enhance your experience by planning your Tongan itinerary.",
			},
			{
				question:
					"Are you familiar with Tongan cuisine and excited to try local dishes?",
				answers: ["yes", "no", "excited to try"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Savor the flavors of Tonga by exploring local cuisine.",
			},
			{
				question:
					"Have you considered local currency and payment methods in Tonga?",
				answers: ["yes", "no", "need more info"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Be prepared for transactions with knowledge of local currency in Tonga.",
			},
			{
				question: "Do you know basic Tongan phrases for communication?",
				answers: ["yes", "no", "learning essentials"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Learn a few Tongan phrases to connect with locals during your Tongan adventure.",
			},
			{
				question:
					"Have you checked travel advisories or restrictions for Tonga?",
				answers: ["yes", "no", "planning to"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Stay informed with travel advisories for a smooth Tongan journey.",
			},
		],
		high: "Congratulations on passing the quiz! You're well-prepared for your journey to Tonga.",
		low: "It seems you might need to prepare a bit more for your journey to Tonga. Check the areas you missed and try again!",
	},
	{
		route: "explore-samoa-quiz",
		title: "Discover Pacific Paradise: Samoa Edition!",
		description:
			"Embark on a quiz to ensure you're fully prepared for the idyllic beauty of Samoa. Answer these questions to unveil your readiness for an unforgettable journey through lush landscapes, pristine beaches, and the authentic Polynesian culture of the South Pacific.",
		questions: [
			{
				question: "Do you have a valid passport?",
				answers: ["yes", "no", "not sure"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"A valid passport is essential for your journey to Samoa.",
			},
			{
				question:
					"Have you checked visa requirements and obtained the necessary travel documents for Samoa?",
				answers: ["yes", "no", "in progress"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Ensure you have the required travel documents for a smooth entry into Samoa.",
			},
			{
				question: "Are you aware of local customs and traditions in Samoa?",
				answers: ["yes", "no", "learning"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Immerse yourself in the rich culture of Samoa before your adventure.",
			},
			{
				question: "Have you booked accommodations for your stay in Samoa?",
				answers: ["yes", "no", "still deciding"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Ensure a comfortable stay by booking accommodations in advance.",
			},
			{
				question: "Do you have travel insurance for your Samoan adventure?",
				answers: ["yes", "no", "considering"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Travel confidently with insurance coverage for your journey through Samoa.",
			},
			{
				question:
					"Have you planned your itinerary and researched key attractions in Samoa?",
				answers: ["yes", "no", "in progress"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Enhance your experience by planning your Samoan itinerary.",
			},
			{
				question:
					"Are you familiar with Samoan cuisine and excited to try local dishes?",
				answers: ["yes", "no", "excited to try"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Savor the flavors of Samoa by exploring local cuisine.",
			},
			{
				question:
					"Have you considered local currency and payment methods in Samoa?",
				answers: ["yes", "no", "need more info"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Be prepared for transactions with knowledge of local currency in Samoa.",
			},
			{
				question: "Do you know basic Samoan phrases for communication?",
				answers: ["yes", "no", "learning essentials"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Learn a few Samoan phrases to connect with locals during your Samoan adventure.",
			},
			{
				question:
					"Have you checked travel advisories or restrictions for Samoa?",
				answers: ["yes", "no", "planning to"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Stay informed with travel advisories for a smooth Samoan journey.",
			},
		],
		high: "Congratulations on passing the quiz! You're well-prepared for your journey to Samoa.",
		low: "It seems you might need to prepare a bit more for your journey to Samoa. Check the areas you missed and try again!",
	},
	{
		route: "explore-fiji-quiz",
		title: "Island Bliss Awaits: Fiji Edition!",
		description:
			"Embark on a quiz to ensure you're fully prepared for the tropical paradise of Fiji. Answer these questions to unveil your readiness for an unforgettable journey through turquoise waters, palm-fringed beaches, and the warm hospitality of the South Pacific.",
		questions: [
			{
				question: "Do you have a valid passport?",
				answers: ["yes", "no", "not sure"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"A valid passport is essential for your journey to Fiji.",
			},
			{
				question:
					"Have you checked visa requirements and obtained the necessary travel documents for Fiji?",
				answers: ["yes", "no", "in progress"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Ensure you have the required travel documents for a smooth entry into Fiji.",
			},
			{
				question: "Are you aware of local customs and traditions in Fiji?",
				answers: ["yes", "no", "learning"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Immerse yourself in the rich culture of Fiji before your adventure.",
			},
			{
				question: "Have you booked accommodations for your stay in Fiji?",
				answers: ["yes", "no", "still deciding"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Ensure a comfortable stay by booking accommodations in advance.",
			},
			{
				question: "Do you have travel insurance for your Fijian adventure?",
				answers: ["yes", "no", "considering"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Travel confidently with insurance coverage for your journey through Fiji.",
			},
			{
				question:
					"Have you planned your itinerary and researched key attractions in Fiji?",
				answers: ["yes", "no", "in progress"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Enhance your experience by planning your Fijian itinerary.",
			},
			{
				question:
					"Are you familiar with Fijian cuisine and excited to try local dishes?",
				answers: ["yes", "no", "excited to try"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Savor the flavors of Fiji by exploring local cuisine.",
			},
			{
				question:
					"Have you considered local currency and payment methods in Fiji?",
				answers: ["yes", "no", "need more info"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Be prepared for transactions with knowledge of local currency in Fiji.",
			},
			{
				question: "Do you know basic Fijian phrases for communication?",
				answers: ["yes", "no", "learning essentials"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Learn a few Fijian phrases to connect with locals during your Fijian adventure.",
			},
			{
				question:
					"Have you checked travel advisories or restrictions for Fiji?",
				answers: ["yes", "no", "planning to"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Stay informed with travel advisories for a smooth Fijian journey.",
			},
		],
		high: "Congratulations on passing the quiz! You're well-prepared for your journey to Fiji.",
		low: "It seems you might need to prepare a bit more for your journey to Fiji. Check the areas you missed and try again!",
	},
	{
		route: "explore-maldives-quiz",
		title: "Dive into Paradise: Maldives Edition!",
		description:
			"Embark on a quiz to ensure you're fully prepared for the breathtaking beauty of the Maldives. Answer these questions to unveil your readiness for an unforgettable journey through crystal-clear waters, overwater bungalows, and the serene tranquility of the Indian Ocean.",
		questions: [
			{
				question: "Do you have a valid passport?",
				answers: ["yes", "no", "not sure"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"A valid passport is essential for your journey to the Maldives.",
			},
			{
				question:
					"Have you checked visa requirements and obtained the necessary travel documents for the Maldives?",
				answers: ["yes", "no", "in progress"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Ensure you have the required travel documents for a smooth entry into the Maldives.",
			},
			{
				question:
					"Are you aware of local customs and traditions in the Maldives?",
				answers: ["yes", "no", "learning"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Immerse yourself in the rich culture of the Maldives before your adventure.",
			},
			{
				question:
					"Have you booked accommodations for your stay in the Maldives?",
				answers: ["yes", "no", "still deciding"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Ensure a comfortable stay by booking accommodations in advance.",
			},
			{
				question: "Do you have travel insurance for your Maldivian adventure?",
				answers: ["yes", "no", "considering"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Travel confidently with insurance coverage for your journey through the Maldives.",
			},
			{
				question:
					"Have you planned your itinerary and researched key attractions in the Maldives?",
				answers: ["yes", "no", "in progress"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Enhance your experience by planning your Maldivian itinerary.",
			},
			{
				question:
					"Are you familiar with Maldivian cuisine and excited to try local dishes?",
				answers: ["yes", "no", "excited to try"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Savor the flavors of the Maldives by exploring local cuisine.",
			},
			{
				question:
					"Have you considered local currency and payment methods in the Maldives?",
				answers: ["yes", "no", "need more info"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Be prepared for transactions with knowledge of local currency in the Maldives.",
			},
			{
				question: "Do you know basic Dhivehi phrases for communication?",
				answers: ["yes", "no", "learning essentials"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Learn a few Dhivehi phrases to connect with locals during your Maldivian adventure.",
			},
			{
				question:
					"Have you checked travel advisories or restrictions for the Maldives?",
				answers: ["yes", "no", "planning to"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Stay informed with travel advisories for a smooth Maldivian journey.",
			},
		],
		high: "Congratulations on passing the quiz! You're well-prepared for your journey to the Maldives.",
		low: "It seems you might need to prepare a bit more for your journey to the Maldives. Check the areas you missed and try again!",
	},
	{
		route: "explore-seychelles-quiz",
		title: "Savor Paradise: Seychelles Edition!",
		description:
			"Embark on a quiz to ensure you're fully prepared for the tropical delights of Seychelles. Answer these questions to unveil your readiness for an unforgettable journey through pristine beaches, vibrant coral reefs, and the luxurious charm of the Indian Ocean.",
		questions: [
			{
				question: "Do you have a valid passport?",
				answers: ["yes", "no", "not sure"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"A valid passport is essential for your journey to Seychelles.",
			},
			{
				question:
					"Have you checked visa requirements and obtained the necessary travel documents for Seychelles?",
				answers: ["yes", "no", "in progress"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Ensure you have the required travel documents for a smooth entry into Seychelles.",
			},
			{
				question:
					"Are you aware of local customs and traditions in Seychelles?",
				answers: ["yes", "no", "learning"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Immerse yourself in the rich culture of Seychelles before your adventure.",
			},
			{
				question: "Have you booked accommodations for your stay in Seychelles?",
				answers: ["yes", "no", "still deciding"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Ensure a comfortable stay by booking accommodations in advance.",
			},
			{
				question:
					"Do you have travel insurance for your Seychellois adventure?",
				answers: ["yes", "no", "considering"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Travel confidently with insurance coverage for your journey through Seychelles.",
			},
			{
				question:
					"Have you planned your itinerary and researched key attractions in Seychelles?",
				answers: ["yes", "no", "in progress"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Enhance your experience by planning your Seychellois itinerary.",
			},
			{
				question:
					"Are you familiar with Seychellois cuisine and excited to try local dishes?",
				answers: ["yes", "no", "excited to try"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Savor the flavors of Seychelles by exploring local cuisine.",
			},
			{
				question:
					"Have you considered local currency and payment methods in Seychelles?",
				answers: ["yes", "no", "need more info"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Be prepared for transactions with knowledge of local currency in Seychelles.",
			},
			{
				question:
					"Do you know basic Seychellois Creole phrases for communication?",
				answers: ["yes", "no", "learning essentials"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Learn a few Seychellois Creole phrases to connect with locals during your Seychellois adventure.",
			},
			{
				question:
					"Have you checked travel advisories or restrictions for Seychelles?",
				answers: ["yes", "no", "planning to"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Stay informed with travel advisories for a smooth Seychellois journey.",
			},
		],
		high: "Congratulations on passing the quiz! You're well-prepared for your journey to Seychelles.",
		low: "It seems you might need to prepare a bit more for your journey to Seychelles. Check the areas you missed and try again!",
	},
	{
		route: "explore-madagascar-quiz",
		title: "Embark on a Wild Adventure in Madagascar!",
		description:
			"Embark on a quiz to ensure you're fully prepared for the untamed wonders of Madagascar. Answer these questions to unveil your readiness for an unforgettable journey through unique wildlife, diverse landscapes, and the exotic charm of the Indian Ocean.",
		questions: [
			{
				question: "Do you have a valid passport?",
				answers: ["yes", "no", "not sure"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"A valid passport is essential for your journey to Madagascar.",
			},
			{
				question:
					"Have you checked visa requirements and obtained the necessary travel documents for Madagascar?",
				answers: ["yes", "no", "in progress"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Ensure you have the required travel documents for a smooth entry into Madagascar.",
			},
			{
				question:
					"Are you aware of local customs and traditions in Madagascar?",
				answers: ["yes", "no", "learning"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Immerse yourself in the rich culture of Madagascar before your adventure.",
			},
			{
				question: "Have you booked accommodations for your stay in Madagascar?",
				answers: ["yes", "no", "still deciding"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Ensure a comfortable stay by booking accommodations in advance.",
			},
			{
				question: "Do you have travel insurance for your Madagascan adventure?",
				answers: ["yes", "no", "considering"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Travel confidently with insurance coverage for your journey through Madagascar.",
			},
			{
				question:
					"Have you planned your itinerary and researched key attractions in Madagascar?",
				answers: ["yes", "no", "in progress"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Enhance your experience by planning your Madagascan itinerary.",
			},
			{
				question:
					"Are you familiar with Madagascan cuisine and excited to try local dishes?",
				answers: ["yes", "no", "excited to try"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Savor the flavors of Madagascar by exploring local cuisine.",
			},
			{
				question:
					"Have you considered local currency and payment methods in Madagascar?",
				answers: ["yes", "no", "need more info"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Be prepared for transactions with knowledge of local currency in Madagascar.",
			},
			{
				question: "Do you know basic Malagasy phrases for communication?",
				answers: ["yes", "no", "learning essentials"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Learn a few Malagasy phrases to connect with locals during your Madagascan adventure.",
			},
			{
				question:
					"Have you checked travel advisories or restrictions for Madagascar?",
				answers: ["yes", "no", "planning to"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Stay informed with travel advisories for a smooth Madagascan journey.",
			},
		],
		high: "Congratulations on passing the quiz! You're well-prepared for your journey to Madagascar.",
		low: "It seems you might need to prepare a bit more for your journey to Madagascar. Check the areas you missed and try again!",
	},
	{
		route: "explore-rwanda-quiz",
		title: "Embark on a Cultural Odyssey in Rwanda!",
		description:
			"Embark on a quiz to ensure you're fully prepared for the enriching wonders of Rwanda. Answer these questions to unveil your readiness for an unforgettable journey through lush landscapes, diverse wildlife, and the vibrant culture of East Africa.",
		questions: [
			{
				question: "Do you have a valid passport?",
				answers: ["yes", "no", "not sure"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"A valid passport is essential for your journey to Rwanda.",
			},
			{
				question:
					"Have you checked visa requirements and obtained the necessary travel documents for Rwanda?",
				answers: ["yes", "no", "in progress"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Ensure you have the required travel documents for a smooth entry into Rwanda.",
			},
			{
				question: "Are you aware of local customs and traditions in Rwanda?",
				answers: ["yes", "no", "learning"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Immerse yourself in the rich culture of Rwanda before your adventure.",
			},
			{
				question: "Have you booked accommodations for your stay in Rwanda?",
				answers: ["yes", "no", "still deciding"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Ensure a comfortable stay by booking accommodations in advance.",
			},
			{
				question: "Do you have travel insurance for your Rwandan adventure?",
				answers: ["yes", "no", "considering"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Travel confidently with insurance coverage for your journey through Rwanda.",
			},
			{
				question:
					"Have you planned your itinerary and researched key attractions in Rwanda?",
				answers: ["yes", "no", "in progress"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Enhance your experience by planning your Rwandan itinerary.",
			},
			{
				question:
					"Are you familiar with Rwandan cuisine and excited to try local dishes?",
				answers: ["yes", "no", "excited to try"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Savor the flavors of Rwanda by exploring local cuisine.",
			},
			{
				question:
					"Have you considered local currency and payment methods in Rwanda?",
				answers: ["yes", "no", "need more info"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Be prepared for transactions with knowledge of local currency in Rwanda.",
			},
			{
				question: "Do you know basic Kinyarwanda phrases for communication?",
				answers: ["yes", "no", "learning essentials"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Learn a few Kinyarwanda phrases to connect with locals during your Rwandan adventure.",
			},
			{
				question:
					"Have you checked travel advisories or restrictions for Rwanda?",
				answers: ["yes", "no", "planning to"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Stay informed with travel advisories for a smooth Rwandan journey.",
			},
		],
		high: "Congratulations on passing the quiz! You're well-prepared for your journey to Rwanda.",
		low: "It seems you might need to prepare a bit more for your journey to Rwanda. Check the areas you missed and try again!",
	},
	{
		route: "explore-zimbabwe-quiz",
		title: "Discover the Majesty of Zimbabwe!",
		description:
			"Embark on a quiz to ensure you're fully prepared for the majestic wonders of Zimbabwe. Answer these questions to unveil your readiness for an unforgettable journey through iconic landscapes, rich wildlife, and the vibrant culture of Southern Africa.",
		questions: [
			{
				question: "Do you have a valid passport?",
				answers: ["yes", "no", "not sure"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"A valid passport is essential for your journey to Zimbabwe.",
			},
			{
				question:
					"Have you checked visa requirements and obtained the necessary travel documents for Zimbabwe?",
				answers: ["yes", "no", "in progress"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Ensure you have the required travel documents for a smooth entry into Zimbabwe.",
			},
			{
				question: "Are you aware of local customs and traditions in Zimbabwe?",
				answers: ["yes", "no", "learning"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Immerse yourself in the rich culture of Zimbabwe before your adventure.",
			},
			{
				question: "Have you booked accommodations for your stay in Zimbabwe?",
				answers: ["yes", "no", "still deciding"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Ensure a comfortable stay by booking accommodations in advance.",
			},
			{
				question: "Do you have travel insurance for your Zimbabwean adventure?",
				answers: ["yes", "no", "considering"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Travel confidently with insurance coverage for your journey through Zimbabwe.",
			},
			{
				question:
					"Have you planned your itinerary and researched key attractions in Zimbabwe?",
				answers: ["yes", "no", "in progress"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Enhance your experience by planning your Zimbabwean itinerary.",
			},
			{
				question:
					"Are you familiar with Zimbabwean cuisine and excited to try local dishes?",
				answers: ["yes", "no", "excited to try"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Savor the flavors of Zimbabwe by exploring local cuisine.",
			},
			{
				question:
					"Have you considered local currency and payment methods in Zimbabwe?",
				answers: ["yes", "no", "need more info"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Be prepared for transactions with knowledge of local currency in Zimbabwe.",
			},
			{
				question: "Do you know basic Shona phrases for communication?",
				answers: ["yes", "no", "learning essentials"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Learn a few Shona phrases to connect with locals during your Zimbabwean adventure.",
			},
			{
				question:
					"Have you checked travel advisories or restrictions for Zimbabwe?",
				answers: ["yes", "no", "planning to"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Stay informed with travel advisories for a smooth Zimbabwean journey.",
			},
		],
		high: "Congratulations on passing the quiz! You're well-prepared for your journey to Zimbabwe.",
		low: "It seems you might need to prepare a bit more for your journey to Zimbabwe. Check the areas you missed and try again!",
	},
	{
		route: "explore-namibia-quiz",
		title: "Unearth the Wonders of Namibia!",
		description:
			"Embark on a quiz to ensure you're fully prepared for the awe-inspiring wonders of Namibia. Answer these questions to unveil your readiness for an unforgettable journey through vast deserts, stunning landscapes, and the unique culture of Southern Africa.",
		questions: [
			{
				question: "Do you have a valid passport?",
				answers: ["yes", "no", "not sure"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"A valid passport is essential for your journey to Namibia.",
			},
			{
				question:
					"Have you checked visa requirements and obtained the necessary travel documents for Namibia?",
				answers: ["yes", "no", "in progress"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Ensure you have the required travel documents for a smooth entry into Namibia.",
			},
			{
				question: "Are you aware of local customs and traditions in Namibia?",
				answers: ["yes", "no", "learning"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Immerse yourself in the rich culture of Namibia before your adventure.",
			},
			{
				question: "Have you booked accommodations for your stay in Namibia?",
				answers: ["yes", "no", "still deciding"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Ensure a comfortable stay by booking accommodations in advance.",
			},
			{
				question: "Do you have travel insurance for your Namibian adventure?",
				answers: ["yes", "no", "considering"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Travel confidently with insurance coverage for your journey through Namibia.",
			},
			{
				question:
					"Have you planned your itinerary and researched key attractions in Namibia?",
				answers: ["yes", "no", "in progress"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Enhance your experience by planning your Namibian itinerary.",
			},
			{
				question:
					"Are you familiar with Namibian cuisine and excited to try local dishes?",
				answers: ["yes", "no", "excited to try"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Savor the flavors of Namibia by exploring local cuisine.",
			},
			{
				question:
					"Have you considered local currency and payment methods in Namibia?",
				answers: ["yes", "no", "need more info"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Be prepared for transactions with knowledge of local currency in Namibia.",
			},
			{
				question: "Do you know basic Namibian phrases for communication?",
				answers: ["yes", "no", "learning essentials"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Learn a few Namibian phrases to connect with locals during your Namibian adventure.",
			},
			{
				question:
					"Have you checked travel advisories or restrictions for Namibia?",
				answers: ["yes", "no", "planning to"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Stay informed with travel advisories for a smooth Namibian journey.",
			},
		],
		high: "Congratulations on passing the quiz! You're well-prepared for your journey to Namibia.",
		low: "It seems you might need to prepare a bit more for your journey to Namibia. Check the areas you missed and try again!",
	},
	{
		route: "explore-botswana-quiz",
		title: "Embark on a Safari Adventure in Botswana!",
		description:
			"Embark on a quiz to ensure you're fully prepared for the thrilling wonders of Botswana. Answer these questions to unveil your readiness for an unforgettable journey through diverse ecosystems, majestic wildlife, and the untamed beauty of Southern Africa.",
		questions: [
			{
				question: "Do you have a valid passport?",
				answers: ["yes", "no", "not sure"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"A valid passport is essential for your journey to Botswana.",
			},
			{
				question:
					"Have you checked visa requirements and obtained the necessary travel documents for Botswana?",
				answers: ["yes", "no", "in progress"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Ensure you have the required travel documents for a smooth entry into Botswana.",
			},
			{
				question: "Are you aware of local customs and traditions in Botswana?",
				answers: ["yes", "no", "learning"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Immerse yourself in the rich culture of Botswana before your adventure.",
			},
			{
				question: "Have you booked accommodations for your stay in Botswana?",
				answers: ["yes", "no", "still deciding"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Ensure a comfortable stay by booking accommodations in advance.",
			},
			{
				question: "Do you have travel insurance for your Botswanan adventure?",
				answers: ["yes", "no", "considering"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Travel confidently with insurance coverage for your journey through Botswana.",
			},
			{
				question:
					"Have you planned your itinerary and researched key safari attractions in Botswana?",
				answers: ["yes", "no", "in progress"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Enhance your experience by planning your Botswanan safari itinerary.",
			},
			{
				question:
					"Are you familiar with Botswanan cuisine and excited to try local dishes?",
				answers: ["yes", "no", "excited to try"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Savor the flavors of Botswana by exploring local cuisine.",
			},
			{
				question:
					"Have you considered local currency and payment methods in Botswana?",
				answers: ["yes", "no", "need more info"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Be prepared for transactions with knowledge of local currency in Botswana.",
			},
			{
				question: "Do you know basic Setswana phrases for communication?",
				answers: ["yes", "no", "learning essentials"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Learn a few Setswana phrases to connect with locals during your Botswanan adventure.",
			},
			{
				question:
					"Have you checked travel advisories or restrictions for Botswana?",
				answers: ["yes", "no", "planning to"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Stay informed with travel advisories for a smooth Botswanan journey.",
			},
		],
		high: "Congratulations on passing the quiz! You're well-prepared for your safari adventure in Botswana.",
		low: "It seems you might need to prepare a bit more for your safari adventure in Botswana. Check the areas you missed and try again!",
	},
	{
		route: "explore-senegal-quiz",
		title: "Experience the Diversity of Senegal!",
		description:
			"Embark on a quiz to ensure you're fully prepared for the diverse wonders of Senegal. Answer these questions to unveil your readiness for an unforgettable journey through historic cities, vibrant markets, and the rich cultural tapestry of West Africa.",
		questions: [
			{
				question: "Do you have a valid passport?",
				answers: ["yes", "no", "not sure"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"A valid passport is essential for your journey to Senegal.",
			},
			{
				question:
					"Have you checked visa requirements and obtained the necessary travel documents for Senegal?",
				answers: ["yes", "no", "in progress"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Ensure you have the required travel documents for a smooth entry into Senegal.",
			},
			{
				question: "Are you aware of local customs and traditions in Senegal?",
				answers: ["yes", "no", "learning"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Immerse yourself in the rich culture of Senegal before your adventure.",
			},
			{
				question: "Have you booked accommodations for your stay in Senegal?",
				answers: ["yes", "no", "still deciding"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Ensure a comfortable stay by booking accommodations in advance.",
			},
			{
				question: "Do you have travel insurance for your Senegalese adventure?",
				answers: ["yes", "no", "considering"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Travel confidently with insurance coverage for your journey through Senegal.",
			},
			{
				question:
					"Have you planned your itinerary and researched key attractions in Senegal?",
				answers: ["yes", "no", "in progress"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Enhance your experience by planning your Senegalese itinerary.",
			},
			{
				question:
					"Are you familiar with Senegalese cuisine and excited to try local dishes?",
				answers: ["yes", "no", "excited to try"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Savor the flavors of Senegal by exploring local cuisine.",
			},
			{
				question:
					"Have you considered local currency and payment methods in Senegal?",
				answers: ["yes", "no", "need more info"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Be prepared for transactions with knowledge of local currency in Senegal.",
			},
			{
				question: "Do you know basic Wolof phrases for communication?",
				answers: ["yes", "no", "learning essentials"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Learn a few Wolof phrases to connect with locals during your Senegalese adventure.",
			},
			{
				question:
					"Have you checked travel advisories or restrictions for Senegal?",
				answers: ["yes", "no", "planning to"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Stay informed with travel advisories for a smooth Senegalese journey.",
			},
		],
		high: "Congratulations on passing the quiz! You're well-prepared for your journey through the diverse landscapes and cultural richness of Senegal.",
		low: "It seems you might need to prepare a bit more for your journey to Senegal. Check the areas you missed and try again!",
	},
	{
		route: "explore-ghana-quiz",
		title: "Discover the Rich Heritage of Ghana!",
		description:
			"Embark on a quiz to ensure you're fully prepared for the vibrant wonders of Ghana. Answer these questions to unveil your readiness for an unforgettable journey through historical sites, diverse cultures, and the warm hospitality of West Africa.",
		questions: [
			{
				question: "Do you have a valid passport?",
				answers: ["yes", "no", "not sure"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"A valid passport is essential for your journey to Ghana.",
			},
			{
				question:
					"Have you checked visa requirements and obtained the necessary travel documents for Ghana?",
				answers: ["yes", "no", "in progress"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Ensure you have the required travel documents for a smooth entry into Ghana.",
			},
			{
				question: "Are you aware of local customs and traditions in Ghana?",
				answers: ["yes", "no", "learning"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Immerse yourself in the rich culture of Ghana before your adventure.",
			},
			{
				question: "Have you booked accommodations for your stay in Ghana?",
				answers: ["yes", "no", "still deciding"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Ensure a comfortable stay by booking accommodations in advance.",
			},
			{
				question: "Do you have travel insurance for your Ghanaian adventure?",
				answers: ["yes", "no", "considering"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Travel confidently with insurance coverage for your journey through Ghana.",
			},
			{
				question:
					"Have you planned your itinerary and researched key attractions in Ghana?",
				answers: ["yes", "no", "in progress"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Enhance your experience by planning your Ghanaian itinerary.",
			},
			{
				question:
					"Are you familiar with Ghanaian cuisine and excited to try local dishes?",
				answers: ["yes", "no", "excited to try"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Savor the flavors of Ghana by exploring local cuisine.",
			},
			{
				question:
					"Have you considered local currency and payment methods in Ghana?",
				answers: ["yes", "no", "need more info"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Be prepared for transactions with knowledge of local currency in Ghana.",
			},
			{
				question: "Do you know basic Ghanaian phrases for communication?",
				answers: ["yes", "no", "learning essentials"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Learn a few Ghanaian phrases to connect with locals during your Ghanaian adventure.",
			},
			{
				question:
					"Have you checked travel advisories or restrictions for Ghana?",
				answers: ["yes", "no", "planning to"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Stay informed with travel advisories for a smooth Ghanaian journey.",
			},
		],
		high: "Congratulations on passing the quiz! You're well-prepared for your journey through the historical landmarks and cultural richness of Ghana.",
		low: "It seems you might need to prepare a bit more for your journey to Ghana. Check the areas you missed and try again!",
	},
	{
		route: "explore-lebanon-quiz",
		title: "Immerse Yourself in the Beauty of Lebanon!",
		description:
			"Embark on a quiz to ensure you're fully prepared for the captivating wonders of Lebanon. Answer these questions to unveil your readiness for an unforgettable journey through ancient history, diverse landscapes, and the rich cultural tapestry of the Middle East.",
		questions: [
			{
				question: "Do you have a valid passport?",
				answers: ["yes", "no", "not sure"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"A valid passport is essential for your journey to Lebanon.",
			},
			{
				question:
					"Have you checked visa requirements and obtained the necessary travel documents for Lebanon?",
				answers: ["yes", "no", "in progress"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Ensure you have the required travel documents for a smooth entry into Lebanon.",
			},
			{
				question: "Are you aware of local customs and traditions in Lebanon?",
				answers: ["yes", "no", "learning"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Immerse yourself in the rich culture of Lebanon before your adventure.",
			},
			{
				question: "Have you booked accommodations for your stay in Lebanon?",
				answers: ["yes", "no", "still deciding"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Ensure a comfortable stay by booking accommodations in advance.",
			},
			{
				question: "Do you have travel insurance for your Lebanese adventure?",
				answers: ["yes", "no", "considering"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Travel confidently with insurance coverage for your journey through Lebanon.",
			},
			{
				question:
					"Have you planned your itinerary and researched key attractions in Lebanon?",
				answers: ["yes", "no", "in progress"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Enhance your experience by planning your Lebanese itinerary.",
			},
			{
				question:
					"Are you familiar with Lebanese cuisine and excited to try local dishes?",
				answers: ["yes", "no", "excited to try"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Savor the flavors of Lebanon by exploring local cuisine.",
			},
			{
				question:
					"Have you considered local currency and payment methods in Lebanon?",
				answers: ["yes", "no", "need more info"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Be prepared for transactions with knowledge of local currency in Lebanon.",
			},
			{
				question: "Do you know basic Arabic phrases for communication?",
				answers: ["yes", "no", "learning essentials"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Learn a few Arabic phrases to connect with locals during your Lebanese adventure.",
			},
			{
				question:
					"Have you checked travel advisories or restrictions for Lebanon?",
				answers: ["yes", "no", "planning to"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Stay informed with travel advisories for a smooth Lebanese journey.",
			},
		],
		high: "Congratulations on passing the quiz! You're well-prepared for your journey through the ancient ruins, stunning landscapes, and culinary delights of Lebanon.",
		low: "It seems you might need to prepare a bit more for your journey to Lebanon. Check the areas you missed and try again!",
	},
	{
		route: "explore-bahrain-quiz",
		title: "Experience the Essence of Bahrain!",
		description:
			"Embark on a quiz to ensure you're fully prepared for the dynamic wonders of Bahrain. Answer these questions to unveil your readiness for an unforgettable journey through modern skyscrapers, ancient history, and the rich cultural tapestry of the Arabian Gulf.",
		questions: [
			{
				question: "Do you have a valid passport?",
				answers: ["yes", "no", "not sure"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"A valid passport is essential for your journey to Bahrain.",
			},
			{
				question:
					"Have you checked visa requirements and obtained the necessary travel documents for Bahrain?",
				answers: ["yes", "no", "in progress"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Ensure you have the required travel documents for a smooth entry into Bahrain.",
			},
			{
				question: "Are you aware of local customs and traditions in Bahrain?",
				answers: ["yes", "no", "learning"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Immerse yourself in the rich culture of Bahrain before your adventure.",
			},
			{
				question: "Have you booked accommodations for your stay in Bahrain?",
				answers: ["yes", "no", "still deciding"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Ensure a comfortable stay by booking accommodations in advance.",
			},
			{
				question: "Do you have travel insurance for your Bahraini adventure?",
				answers: ["yes", "no", "considering"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Travel confidently with insurance coverage for your journey through Bahrain.",
			},
			{
				question:
					"Have you planned your itinerary and researched key attractions in Bahrain?",
				answers: ["yes", "no", "in progress"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Enhance your experience by planning your Bahraini itinerary.",
			},
			{
				question:
					"Are you familiar with Bahraini cuisine and excited to try local dishes?",
				answers: ["yes", "no", "excited to try"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Savor the flavors of Bahrain by exploring local cuisine.",
			},
			{
				question:
					"Have you considered local currency and payment methods in Bahrain?",
				answers: ["yes", "no", "need more info"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Be prepared for transactions with knowledge of local currency in Bahrain.",
			},
			{
				question: "Do you know basic Arabic phrases for communication?",
				answers: ["yes", "no", "learning essentials"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Learn a few Arabic phrases to connect with locals during your Bahraini adventure.",
			},
			{
				question:
					"Have you checked travel advisories or restrictions for Bahrain?",
				answers: ["yes", "no", "planning to"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Stay informed with travel advisories for a smooth Bahraini journey.",
			},
		],
		high: "Congratulations on passing the quiz! You're well-prepared for your journey to discover the mesmerizing blend of ancient and modern in Bahrain.",
		low: "It looks like there are a few areas you might need to brush up on before heading to Bahrain. Review the necessary preparations and try again!",
	},
	{
		route: "explore-cyprus-quiz",
		title: "Uncover the Treasures of Cyprus!",
		description:
			"Embark on a quiz to ensure you're fully prepared for the captivating wonders of Cyprus. Answer these questions to unveil your readiness for an unforgettable journey through ancient history, crystal-clear beaches, and the vibrant culture of the Mediterranean island.",
		questions: [
			{
				question: "Do you have a valid passport?",
				answers: ["yes", "no", "not sure"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"A valid passport is essential for your journey to Cyprus.",
			},
			{
				question:
					"Have you checked visa requirements and obtained the necessary travel documents for Cyprus?",
				answers: ["yes", "no", "in progress"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Ensure you have the required travel documents for a smooth entry into Cyprus.",
			},
			{
				question: "Are you aware of local customs and traditions in Cyprus?",
				answers: ["yes", "no", "learning"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Immerse yourself in the rich culture of Cyprus before your adventure.",
			},
			{
				question: "Have you booked accommodations for your stay in Cyprus?",
				answers: ["yes", "no", "still deciding"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Ensure a comfortable stay by booking accommodations in advance.",
			},
			{
				question: "Do you have travel insurance for your Cypriot adventure?",
				answers: ["yes", "no", "considering"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Travel confidently with insurance coverage for your journey through Cyprus.",
			},
			{
				question:
					"Have you planned your itinerary and researched key attractions in Cyprus?",
				answers: ["yes", "no", "in progress"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Enhance your experience by planning your Cypriot itinerary.",
			},
			{
				question:
					"Are you familiar with Cypriot cuisine and excited to try local dishes?",
				answers: ["yes", "no", "excited to try"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Savor the flavors of Cyprus by exploring local cuisine.",
			},
			{
				question:
					"Have you considered local currency and payment methods in Cyprus?",
				answers: ["yes", "no", "need more info"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Be prepared for transactions with knowledge of local currency in Cyprus.",
			},
			{
				question: "Do you know basic Greek phrases for communication?",
				answers: ["yes", "no", "learning essentials"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Learn a few Greek phrases to connect with locals during your Cypriot adventure.",
			},
			{
				question:
					"Have you checked travel advisories or restrictions for Cyprus?",
				answers: ["yes", "no", "planning to"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Stay informed with travel advisories for a smooth Cypriot journey.",
			},
		],
		high: "Congratulations on passing the quiz! You're well-prepared for your journey to discover the enchanting blend of history, nature, and culture in Cyprus.",
		low: "It looks like there are a few areas you might need to brush up on before heading to Cyprus. Review the necessary preparations and try again!",
	},
	{
		route: "explore-slovakia-quiz",
		title: "Unveil the Beauty of Slovakia!",
		description:
			"Embark on a quiz to ensure you're fully prepared for the enchanting wonders of Slovakia. Answer these questions to unveil your readiness for an unforgettable journey through medieval castles, stunning landscapes, and the rich cultural tapestry of this European gem.",
		questions: [
			{
				question: "Do you have a valid passport?",
				answers: ["yes", "no", "not sure"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"A valid passport is essential for your journey to Slovakia.",
			},
			{
				question:
					"Have you checked visa requirements and obtained the necessary travel documents for Slovakia?",
				answers: ["yes", "no", "in progress"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Ensure you have the required travel documents for a smooth entry into Slovakia.",
			},
			{
				question: "Are you aware of local customs and traditions in Slovakia?",
				answers: ["yes", "no", "learning"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Immerse yourself in the rich culture of Slovakia before your adventure.",
			},
			{
				question: "Have you booked accommodations for your stay in Slovakia?",
				answers: ["yes", "no", "still deciding"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Ensure a comfortable stay by booking accommodations in advance.",
			},
			{
				question: "Do you have travel insurance for your Slovakian adventure?",
				answers: ["yes", "no", "considering"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Travel confidently with insurance coverage for your journey through Slovakia.",
			},
			{
				question:
					"Have you planned your itinerary and researched key attractions in Slovakia?",
				answers: ["yes", "no", "in progress"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Enhance your experience by planning your Slovakian itinerary.",
			},
			{
				question:
					"Are you familiar with Slovakian cuisine and excited to try local dishes?",
				answers: ["yes", "no", "excited to try"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Savor the flavors of Slovakia by exploring local cuisine.",
			},
			{
				question:
					"Have you considered local currency and payment methods in Slovakia?",
				answers: ["yes", "no", "need more info"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Be prepared for transactions with knowledge of local currency in Slovakia.",
			},
			{
				question: "Do you know basic Slovakian phrases for communication?",
				answers: ["yes", "no", "learning essentials"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Learn a few Slovakian phrases to connect with locals during your Slovakian adventure.",
			},
			{
				question:
					"Have you checked travel advisories or restrictions for Slovakia?",
				answers: ["yes", "no", "planning to"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Stay informed with travel advisories for a smooth Slovakian journey.",
			},
		],
		high: "Congratulations on passing the quiz! You're well-prepared for your journey to discover the captivating castles, landscapes, and culture of Slovakia.",
		low: "It looks like there are a few areas you might need to brush up on before heading to Slovakia. Review the necessary preparations and try again!",
	},
	{
		route: "explore-slovenia-quiz",
		title: "Discover the Hidden Gems of Slovenia!",
		description:
			"Embark on a quiz to ensure you're fully prepared for the enchanting wonders of Slovenia. Answer these questions to unveil your readiness for an unforgettable journey through charming cities, pristine lakes, and the breathtaking landscapes of this European gem.",
		questions: [
			{
				question: "Do you have a valid passport?",
				answers: ["yes", "no", "not sure"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"A valid passport is essential for your journey to Slovenia.",
			},
			{
				question:
					"Have you checked visa requirements and obtained the necessary travel documents for Slovenia?",
				answers: ["yes", "no", "in progress"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Ensure you have the required travel documents for a smooth entry into Slovenia.",
			},
			{
				question: "Are you aware of local customs and traditions in Slovenia?",
				answers: ["yes", "no", "learning"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Immerse yourself in the rich culture of Slovenia before your adventure.",
			},
			{
				question: "Have you booked accommodations for your stay in Slovenia?",
				answers: ["yes", "no", "still deciding"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Ensure a comfortable stay by booking accommodations in advance.",
			},
			{
				question: "Do you have travel insurance for your Slovenian adventure?",
				answers: ["yes", "no", "considering"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Travel confidently with insurance coverage for your journey through Slovenia.",
			},
			{
				question:
					"Have you planned your itinerary and researched key attractions in Slovenia?",
				answers: ["yes", "no", "in progress"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Enhance your experience by planning your Slovenian itinerary.",
			},
			{
				question:
					"Are you familiar with Slovenian cuisine and excited to try local dishes?",
				answers: ["yes", "no", "excited to try"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Savor the flavors of Slovenia by exploring local cuisine.",
			},
			{
				question:
					"Have you considered local currency and payment methods in Slovenia?",
				answers: ["yes", "no", "need more info"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Be prepared for transactions with knowledge of local currency in Slovenia.",
			},
			{
				question: "Do you know basic Slovenian phrases for communication?",
				answers: ["yes", "no", "learning essentials"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Learn a few Slovenian phrases to connect with locals during your Slovenian adventure.",
			},
			{
				question:
					"Have you checked travel advisories or restrictions for Slovenia?",
				answers: ["yes", "no", "planning to"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Stay informed with travel advisories for a smooth Slovenian journey.",
			},
		],
		high: "Congratulations on passing the quiz! You're well-prepared for your journey to explore the charming cities, pristine lakes, and breathtaking landscapes of Slovenia.",
		low: "It looks like there are a few areas you might need to brush up on before heading to Slovenia. Review the necessary preparations and try again!",
	},
	{
		route: "explore-luxembourg-quiz",
		title: "Embark on a Grand Duchy Adventure!",
		description:
			"Embark on a quiz to ensure you're fully prepared for the charming wonders of Luxembourg. Answer these questions to unveil your readiness for an unforgettable journey through medieval castles, picturesque landscapes, and the vibrant culture of the Grand Duchy.",
		questions: [
			{
				question: "Do you have a valid passport?",
				answers: ["yes", "no", "not sure"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"A valid passport is essential for your journey to Luxembourg.",
			},
			{
				question:
					"Have you checked visa requirements and obtained the necessary travel documents for Luxembourg?",
				answers: ["yes", "no", "in progress"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Ensure you have the required travel documents for a smooth entry into Luxembourg.",
			},
			{
				question:
					"Are you aware of local customs and traditions in Luxembourg?",
				answers: ["yes", "no", "learning"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Immerse yourself in the rich culture of Luxembourg before your adventure.",
			},
			{
				question: "Have you booked accommodations for your stay in Luxembourg?",
				answers: ["yes", "no", "still deciding"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Ensure a comfortable stay by booking accommodations in advance.",
			},
			{
				question:
					"Do you have travel insurance for your Luxembourgish adventure?",
				answers: ["yes", "no", "considering"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Travel confidently with insurance coverage for your journey through Luxembourg.",
			},
			{
				question:
					"Have you planned your itinerary and researched key attractions in Luxembourg?",
				answers: ["yes", "no", "in progress"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Enhance your experience by planning your Luxembourgish itinerary.",
			},
			{
				question:
					"Are you familiar with Luxembourgish cuisine and excited to try local dishes?",
				answers: ["yes", "no", "excited to try"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Savor the flavors of Luxembourg by exploring local cuisine.",
			},
			{
				question:
					"Have you considered local currency and payment methods in Luxembourg?",
				answers: ["yes", "no", "need more info"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Be prepared for transactions with knowledge of local currency in Luxembourg.",
			},
			{
				question: "Do you know basic Luxembourgish phrases for communication?",
				answers: ["yes", "no", "learning essentials"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Learn a few Luxembourgish phrases to connect with locals during your Luxembourgish adventure.",
			},
			{
				question:
					"Have you checked travel advisories or restrictions for Luxembourg?",
				answers: ["yes", "no", "planning to"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Stay informed with travel advisories for a smooth Luxembourgish journey.",
			},
		],
		high: "Congratulations on passing the quiz! You're well-prepared for your journey to explore the medieval castles, picturesque landscapes, and vibrant culture of the Grand Duchy of Luxembourg.",
		low: "It looks like there are a few areas you might need to brush up on before heading to Luxembourg. Review the necessary preparations and try again!",
	},
	{
		route: "explore-lithuania-quiz",
		title: "Immerse Yourself in Lithuania's Rich Heritage!",
		description:
			"Embark on a quiz to ensure you're fully prepared for the captivating wonders of Lithuania. Answer these questions to unveil your readiness for an unforgettable journey through medieval history, lively culture, and picturesque landscapes in the heart of the Baltic region.",
		questions: [
			{
				question: "Do you have a valid passport?",
				answers: ["yes", "no", "not sure"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"A valid passport is essential for your journey to Lithuania.",
			},
			{
				question:
					"Have you checked visa requirements and obtained the necessary travel documents for Lithuania?",
				answers: ["yes", "no", "in progress"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Ensure you have the required travel documents for a smooth entry into Lithuania.",
			},
			{
				question: "Are you aware of local customs and traditions in Lithuania?",
				answers: ["yes", "no", "learning"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Immerse yourself in the rich culture of Lithuania before your adventure.",
			},
			{
				question: "Have you booked accommodations for your stay in Lithuania?",
				answers: ["yes", "no", "still deciding"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Ensure a comfortable stay by booking accommodations in advance.",
			},
			{
				question: "Do you have travel insurance for your Lithuanian adventure?",
				answers: ["yes", "no", "considering"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Travel confidently with insurance coverage for your journey through Lithuania.",
			},
			{
				question:
					"Have you planned your itinerary and researched key attractions in Lithuania?",
				answers: ["yes", "no", "in progress"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Enhance your experience by planning your Lithuanian itinerary.",
			},
			{
				question:
					"Are you familiar with Lithuanian cuisine and excited to try local dishes?",
				answers: ["yes", "no", "excited to try"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Savor the flavors of Lithuania by exploring local cuisine.",
			},
			{
				question:
					"Have you considered local currency and payment methods in Lithuania?",
				answers: ["yes", "no", "need more info"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Be prepared for transactions with knowledge of local currency in Lithuania.",
			},
			{
				question: "Do you know basic Lithuanian phrases for communication?",
				answers: ["yes", "no", "learning essentials"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Learn a few Lithuanian phrases to connect with locals during your Lithuanian adventure.",
			},
			{
				question:
					"Have you checked travel advisories or restrictions for Lithuania?",
				answers: ["yes", "no", "planning to"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Stay informed with travel advisories for a smooth Lithuanian journey.",
			},
		],
		high: "Congratulations on passing the quiz! You're well-prepared for your journey through Lithuania.",
		low: "It looks like you might need to prepare a bit more for your trip to Lithuania. Check the resources again and try to improve your readiness!",
	},
	{
		route: "explore-estonia-quiz",
		title: "Uncover the Charms of Estonia!",
		description:
			"Embark on a quiz to ensure you're fully prepared for the enchanting wonders of Estonia. Answer these questions to unveil your readiness for an unforgettable journey through medieval history, vibrant culture, and picturesque landscapes in the heart of the Baltic region.",
		questions: [
			{
				question: "Do you have a valid passport?",
				answers: ["yes", "no", "not sure"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"A valid passport is essential for your journey to Estonia.",
			},
			{
				question:
					"Have you checked visa requirements and obtained the necessary travel documents for Estonia?",
				answers: ["yes", "no", "in progress"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Ensure you have the required travel documents for a smooth entry into Estonia.",
			},
			{
				question: "Are you aware of local customs and traditions in Estonia?",
				answers: ["yes", "no", "learning"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Immerse yourself in the rich culture of Estonia before your adventure.",
			},
			{
				question: "Have you booked accommodations for your stay in Estonia?",
				answers: ["yes", "no", "still deciding"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Ensure a comfortable stay by booking accommodations in advance.",
			},
			{
				question: "Do you have travel insurance for your Estonian adventure?",
				answers: ["yes", "no", "considering"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Travel confidently with insurance coverage for your journey through Estonia.",
			},
			{
				question:
					"Have you planned your itinerary and researched key attractions in Estonia?",
				answers: ["yes", "no", "in progress"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Enhance your experience by planning your Estonian itinerary.",
			},
			{
				question:
					"Are you familiar with Estonian cuisine and excited to try local dishes?",
				answers: ["yes", "no", "excited to try"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Savor the flavors of Estonia by exploring local cuisine.",
			},
			{
				question:
					"Have you considered local currency and payment methods in Estonia?",
				answers: ["yes", "no", "need more info"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Be prepared for transactions with knowledge of local currency in Estonia.",
			},
			{
				question: "Do you know basic Estonian phrases for communication?",
				answers: ["yes", "no", "learning essentials"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Learn a few Estonian phrases to connect with locals during your Estonian adventure.",
			},
			{
				question:
					"Have you checked travel advisories or restrictions for Estonia?",
				answers: ["yes", "no", "planning to"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Stay informed with travel advisories for a smooth Estonian journey.",
			},
		],
		high: "Congratulations on passing the quiz! You're well-prepared for your journey through Estonia.",
		low: "It looks like you might need to prepare a bit more for your trip to Estonia. Check the resources again and try to improve your readiness!",
	},
	{
		route: "explore-latvia-quiz",
		title: "Discover the Charms of Latvia!",
		description:
			"Embark on a quiz to ensure you're fully prepared for the enchanting wonders of Latvia. Answer these questions to unveil your readiness for an unforgettable journey through rich history, vibrant culture, and picturesque landscapes in the heart of the Baltic region.",
		questions: [
			{
				question: "Do you have a valid passport?",
				answers: ["yes", "no", "not sure"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"A valid passport is essential for your journey to Latvia.",
			},
			{
				question:
					"Have you checked visa requirements and obtained the necessary travel documents for Latvia?",
				answers: ["yes", "no", "in progress"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Ensure you have the required travel documents for a smooth entry into Latvia.",
			},
			{
				question: "Are you aware of local customs and traditions in Latvia?",
				answers: ["yes", "no", "learning"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Immerse yourself in the rich culture of Latvia before your adventure.",
			},
			{
				question: "Have you booked accommodations for your stay in Latvia?",
				answers: ["yes", "no", "still deciding"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Ensure a comfortable stay by booking accommodations in advance.",
			},
			{
				question: "Do you have travel insurance for your Latvian adventure?",
				answers: ["yes", "no", "considering"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Travel confidently with insurance coverage for your journey through Latvia.",
			},
			{
				question:
					"Have you planned your itinerary and researched key attractions in Latvia?",
				answers: ["yes", "no", "in progress"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Enhance your experience by planning your Latvian itinerary.",
			},
			{
				question:
					"Are you familiar with Latvian cuisine and excited to try local dishes?",
				answers: ["yes", "no", "excited to try"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Savor the flavors of Latvia by exploring local cuisine.",
			},
			{
				question:
					"Have you considered local currency and payment methods in Latvia?",
				answers: ["yes", "no", "need more info"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Be prepared for transactions with knowledge of local currency in Latvia.",
			},
			{
				question: "Do you know basic Latvian phrases for communication?",
				answers: ["yes", "no", "learning essentials"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Learn a few Latvian phrases to connect with locals during your Latvian adventure.",
			},
			{
				question:
					"Have you checked travel advisories or restrictions for Latvia?",
				answers: ["yes", "no", "planning to"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Stay informed with travel advisories for a smooth Latvian journey.",
			},
		],
		high: "Congratulations on passing the quiz! You're well-prepared for your journey through Latvia.",
		low: "It looks like you might need to prepare a bit more for your trip to Latvia. Check the resources again and try to improve your readiness!",
	},
	{
		route: "explore-iceland-quiz",
		title: "Embark on Your Icelandic Adventure!",
		description:
			"Embark on a quiz to ensure you're fully prepared for the mesmerizing wonders of Iceland. Answer these questions to unveil your readiness for an unforgettable journey through stunning landscapes, unique culture, and the magic of the Northern Lights in the heart of the North Atlantic.",
		questions: [
			{
				question: "Do you have a valid passport?",
				answers: ["yes", "no", "not sure"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"A valid passport is essential for your journey to Iceland.",
			},
			{
				question:
					"Have you checked visa requirements and obtained the necessary travel documents for Iceland?",
				answers: ["yes", "no", "in progress"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Ensure you have the required travel documents for a smooth entry into Iceland.",
			},
			{
				question: "Are you aware of local customs and traditions in Iceland?",
				answers: ["yes", "no", "learning"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Immerse yourself in the unique culture of Iceland before your adventure.",
			},
			{
				question: "Have you booked accommodations for your stay in Iceland?",
				answers: ["yes", "no", "still deciding"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Ensure a comfortable stay by booking accommodations in advance.",
			},
			{
				question: "Do you have travel insurance for your Icelandic adventure?",
				answers: ["yes", "no", "considering"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Travel confidently with insurance coverage for your journey through Iceland.",
			},
			{
				question:
					"Have you planned your itinerary and researched key attractions in Iceland?",
				answers: ["yes", "no", "in progress"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Enhance your experience by planning your Icelandic itinerary.",
			},
			{
				question:
					"Are you familiar with Icelandic cuisine and excited to try local dishes?",
				answers: ["yes", "no", "excited to try"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Savor the flavors of Iceland by exploring local cuisine.",
			},
			{
				question:
					"Have you considered local currency and payment methods in Iceland?",
				answers: ["yes", "no", "need more info"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Be prepared for transactions with knowledge of local currency in Iceland.",
			},
			{
				question: "Do you know basic Icelandic phrases for communication?",
				answers: ["yes", "no", "learning essentials"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Learn a few Icelandic phrases to connect with locals during your Icelandic adventure.",
			},
			{
				question:
					"Have you checked travel advisories or restrictions for Iceland?",
				answers: ["yes", "no", "planning to"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Stay informed with travel advisories for a smooth Icelandic journey.",
			},
		],
		high: "Congratulations on passing the quiz! You're well-prepared for your journey through Iceland.",
		low: "It looks like you might need to prepare a bit more for your trip to Iceland. Check the resources again and try to improve your readiness!",
	},
	{
		route: "explore-malta-quiz",
		title: "Embark on Your Maltese Discovery!",
		description:
			"Embark on a quiz to ensure you're fully prepared for the charming wonders of Malta. Answer these questions to unveil your readiness for an unforgettable journey through rich history, Mediterranean culture, and stunning landscapes in the heart of the Mediterranean Sea.",
		questions: [
			{
				question: "Do you have a valid passport?",
				answers: ["yes", "no", "not sure"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"A valid passport is essential for your journey to Malta.",
			},
			{
				question:
					"Have you checked visa requirements and obtained the necessary travel documents for Malta?",
				answers: ["yes", "no", "in progress"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Ensure you have the required travel documents for a smooth entry into Malta.",
			},
			{
				question: "Are you aware of local customs and traditions in Malta?",
				answers: ["yes", "no", "learning"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Immerse yourself in the rich culture of Malta before your adventure.",
			},
			{
				question: "Have you booked accommodations for your stay in Malta?",
				answers: ["yes", "no", "still deciding"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Ensure a comfortable stay by booking accommodations in advance.",
			},
			{
				question: "Do you have travel insurance for your Maltese adventure?",
				answers: ["yes", "no", "considering"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Travel confidently with insurance coverage for your journey through Malta.",
			},
			{
				question:
					"Have you planned your itinerary and researched key attractions in Malta?",
				answers: ["yes", "no", "in progress"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Enhance your experience by planning your Maltese itinerary.",
			},
			{
				question:
					"Are you familiar with Maltese cuisine and excited to try local dishes?",
				answers: ["yes", "no", "excited to try"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Savor the flavors of Malta by exploring local cuisine.",
			},
			{
				question:
					"Have you considered local currency and payment methods in Malta?",
				answers: ["yes", "no", "need more info"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Be prepared for transactions with knowledge of local currency in Malta.",
			},
			{
				question: "Do you know basic Maltese phrases for communication?",
				answers: ["yes", "no", "learning essentials"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Learn a few Maltese phrases to connect with locals during your Maltese adventure.",
			},
			{
				question:
					"Have you checked travel advisories or restrictions for Malta?",
				answers: ["yes", "no", "planning to"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Stay informed with travel advisories for a smooth Maltese journey.",
			},
		],
		high: "Congratulations on passing the quiz! You're well-prepared for your journey through Malta.",
		low: "It looks like you might need to prepare a bit more for your trip to Malta. Check the resources again and try to improve your readiness!",
	},
	{
		route: "explore-sri-lanka-quiz",
		title: "Embark on Your Sri Lankan Odyssey!",
		description:
			"Embark on a quiz to ensure you're fully prepared for the enchanting wonders of Sri Lanka. Answer these questions to unveil your readiness for an unforgettable journey through ancient history, diverse culture, and stunning landscapes in the heart of South Asia.",
		questions: [
			{
				question: "Do you have a valid passport?",
				answers: ["yes", "no", "not sure"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"A valid passport is essential for your journey to Sri Lanka.",
			},
			{
				question:
					"Have you checked visa requirements and obtained the necessary travel documents for Sri Lanka?",
				answers: ["yes", "no", "in progress"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Ensure you have the required travel documents for a smooth entry into Sri Lanka.",
			},
			{
				question: "Are you aware of local customs and traditions in Sri Lanka?",
				answers: ["yes", "no", "learning"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Immerse yourself in the rich culture of Sri Lanka before your adventure.",
			},
			{
				question: "Have you booked accommodations for your stay in Sri Lanka?",
				answers: ["yes", "no", "still deciding"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Ensure a comfortable stay by booking accommodations in advance.",
			},
			{
				question: "Do you have travel insurance for your Sri Lankan adventure?",
				answers: ["yes", "no", "considering"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Travel confidently with insurance coverage for your journey through Sri Lanka.",
			},
			{
				question:
					"Have you planned your itinerary and researched key attractions in Sri Lanka?",
				answers: ["yes", "no", "in progress"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Enhance your experience by planning your Sri Lankan itinerary.",
			},
			{
				question:
					"Are you familiar with Sri Lankan cuisine and excited to try local dishes?",
				answers: ["yes", "no", "excited to try"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Savor the flavors of Sri Lanka by exploring local cuisine.",
			},
			{
				question:
					"Have you considered local currency and payment methods in Sri Lanka?",
				answers: ["yes", "no", "need more info"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Be prepared for transactions with knowledge of local currency in Sri Lanka.",
			},
			{
				question: "Do you know basic Sinhala phrases for communication?",
				answers: ["yes", "no", "learning essentials"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Learn a few Sinhala phrases to connect with locals during your Sri Lankan adventure.",
			},
			{
				question:
					"Have you checked travel advisories or restrictions for Sri Lanka?",
				answers: ["yes", "no", "planning to"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Stay informed with travel advisories for a smooth Sri Lankan journey.",
			},
		],
		high: "Congratulations on passing the quiz! You're well-prepared for your journey through Sri Lanka.",
		low: "It looks like you might need to prepare a bit more for your trip to Sri Lanka. Check the resources again and try to improve your readiness!",
	},
	{
		route: "explore-nepal-quiz",
		title: "Embark on Your Himalayan Adventure!",
		description:
			"Embark on a quiz to ensure you're fully prepared for the awe-inspiring wonders of Nepal. Answer these questions to unveil your readiness for an unforgettable journey through majestic mountains, ancient culture, and vibrant landscapes in the heart of the Himalayas.",
		questions: [
			{
				question: "Do you have a valid passport?",
				answers: ["yes", "no", "not sure"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"A valid passport is essential for your journey to Nepal.",
			},
			{
				question:
					"Have you checked visa requirements and obtained the necessary travel documents for Nepal?",
				answers: ["yes", "no", "in progress"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Ensure you have the required travel documents for a smooth entry into Nepal.",
			},
			{
				question: "Are you aware of local customs and traditions in Nepal?",
				answers: ["yes", "no", "learning"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Immerse yourself in the rich culture of Nepal before your mountainous adventure.",
			},
			{
				question: "Have you booked accommodations for your stay in Nepal?",
				answers: ["yes", "no", "still deciding"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Ensure a comfortable stay by booking accommodations in advance.",
			},
			{
				question: "Do you have travel insurance for your Nepalese adventure?",
				answers: ["yes", "no", "considering"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Travel confidently with insurance coverage for your journey through Nepal.",
			},
			{
				question:
					"Have you planned your itinerary and researched key attractions in Nepal?",
				answers: ["yes", "no", "in progress"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Enhance your experience by planning your Nepalese itinerary.",
			},
			{
				question:
					"Are you familiar with Nepalese cuisine and excited to try local dishes?",
				answers: ["yes", "no", "excited to try"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Savor the flavors of Nepal by exploring local cuisine.",
			},
			{
				question:
					"Have you considered local currency and payment methods in Nepal?",
				answers: ["yes", "no", "need more info"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Be prepared for transactions with knowledge of local currency in Nepal.",
			},
			{
				question: "Do you know basic Nepali phrases for communication?",
				answers: ["yes", "no", "learning essentials"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Learn a few Nepali phrases to connect with locals during your Himalayan adventure.",
			},
			{
				question:
					"Have you checked travel advisories or restrictions for Nepal?",
				answers: ["yes", "no", "planning to"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Stay informed with travel advisories for a smooth Nepalese journey.",
			},
		],
		high: "Congratulations on passing the quiz! You're well-prepared for your journey through Nepal.",
		low: "It looks like you might need to prepare a bit more for your trip to Nepal. Check the resources again and try to improve your readiness!",
	},
	{
		route: "explore-oman-quiz",
		title: "Embark on Your Omani Odyssey!",
		description:
			"Embark on a quiz to ensure you're fully prepared for the captivating wonders of Oman. Answer these questions to unveil your readiness for an unforgettable journey through ancient history, rich culture, and stunning landscapes in the heart of the Arabian Peninsula.",
		questions: [
			{
				question: "Do you have a valid passport?",
				answers: ["yes", "no", "not sure"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"A valid passport is essential for your journey to Oman.",
			},
			{
				question:
					"Have you checked visa requirements and obtained the necessary travel documents for Oman?",
				answers: ["yes", "no", "in progress"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Ensure you have the required travel documents for a smooth entry into Oman.",
			},
			{
				question: "Are you aware of local customs and traditions in Oman?",
				answers: ["yes", "no", "learning"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Immerse yourself in the rich culture of Oman before your adventure.",
			},
			{
				question: "Have you booked accommodations for your stay in Oman?",
				answers: ["yes", "no", "still deciding"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Ensure a comfortable stay by booking accommodations in advance.",
			},
			{
				question: "Do you have travel insurance for your Omani adventure?",
				answers: ["yes", "no", "considering"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Travel confidently with insurance coverage for your journey through Oman.",
			},
			{
				question:
					"Have you planned your itinerary and researched key attractions in Oman?",
				answers: ["yes", "no", "in progress"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Enhance your experience by planning your Omani itinerary.",
			},
			{
				question:
					"Are you familiar with Omani cuisine and excited to try local dishes?",
				answers: ["yes", "no", "excited to try"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Savor the flavors of Oman by exploring local cuisine.",
			},
			{
				question:
					"Have you considered local currency and payment methods in Oman?",
				answers: ["yes", "no", "need more info"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Be prepared for transactions with knowledge of local currency in Oman.",
			},
			{
				question: "Do you know basic Arabic phrases for communication?",
				answers: ["yes", "no", "learning essentials"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Learn a few Arabic phrases to connect with locals during your Omani adventure.",
			},
			{
				question:
					"Have you checked travel advisories or restrictions for Oman?",
				answers: ["yes", "no", "planning to"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Stay informed with travel advisories for a smooth Omani journey.",
			},
		],
		high: "Congratulations on passing the quiz! You're well-prepared for your journey through Oman.",
		low: "It looks like you might need to prepare a bit more for your trip to Oman. Check the resources again and try to improve your readiness!",
	},
	{
		route: "explore-jordan-quiz",
		title: "Embark on Your Jordanian Odyssey!",
		description:
			"Embark on a quiz to ensure you're fully prepared for the captivating wonders of Jordan. Answer these questions to unveil your readiness for an unforgettable journey through ancient history, vibrant culture, and breathtaking landscapes in the heart of the Middle East.",
		questions: [
			{
				question: "Do you have a valid passport?",
				answers: ["yes", "no", "not sure"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"A valid passport is essential for your journey to Jordan.",
			},
			{
				question:
					"Have you checked visa requirements and obtained the necessary travel documents for Jordan?",
				answers: ["yes", "no", "in progress"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Ensure you have the required travel documents for a smooth entry into Jordan.",
			},
			{
				question: "Are you aware of local customs and traditions in Jordan?",
				answers: ["yes", "no", "learning"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Immerse yourself in the rich culture of Jordan before your adventure.",
			},
			{
				question: "Have you booked accommodations for your stay in Jordan?",
				answers: ["yes", "no", "still deciding"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Ensure a comfortable stay by booking accommodations in advance.",
			},
			{
				question: "Do you have travel insurance for your Jordanian adventure?",
				answers: ["yes", "no", "considering"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Travel confidently with insurance coverage for your journey through Jordan.",
			},
			{
				question:
					"Have you planned your itinerary and researched key attractions in Jordan?",
				answers: ["yes", "no", "in progress"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Enhance your experience by planning your Jordanian itinerary.",
			},
			{
				question:
					"Are you familiar with Jordanian cuisine and excited to try local dishes?",
				answers: ["yes", "no", "excited to try"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Savor the flavors of Jordan by exploring local cuisine.",
			},
			{
				question:
					"Have you considered local currency and payment methods in Jordan?",
				answers: ["yes", "no", "need more info"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Be prepared for transactions with knowledge of local currency in Jordan.",
			},
			{
				question: "Do you know basic Arabic phrases for communication?",
				answers: ["yes", "no", "learning essentials"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Learn a few Arabic phrases to connect with locals during your Jordanian adventure.",
			},
			{
				question:
					"Have you checked travel advisories or restrictions for Jordan?",
				answers: ["yes", "no", "planning to"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Stay informed with travel advisories for a smooth Jordanian journey.",
			},
		],
		high: "Congratulations on passing the quiz! You're well-prepared for your journey through Jordan.",
		low: "It looks like you might need to prepare a bit more for your trip to Jordan. Check the resources again and try to improve your readiness!",
	},
	{
		route: "explore-cuba-quiz",
		title: "Dive into Your Cuban Adventure!",
		description:
			"Embark on a quiz to ensure you're fully prepared for the vibrant wonders of Cuba. Answer these questions to unveil your readiness for an unforgettable journey through rich history, lively culture, and breathtaking landscapes in the heart of the Caribbean.",
		questions: [
			{
				question: "Do you have a valid passport?",
				answers: ["yes", "no", "not sure"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"A valid passport is essential for your journey to Cuba.",
			},
			{
				question:
					"Have you checked visa requirements and obtained the necessary travel documents for Cuba?",
				answers: ["yes", "no", "in progress"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Ensure you have the required travel documents for a smooth entry into Cuba.",
			},
			{
				question: "Are you aware of the local customs and traditions in Cuba?",
				answers: ["yes", "no", "learning"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Immerse yourself in the vibrant culture of Cuba before your adventure.",
			},
			{
				question: "Have you booked accommodations for your stay in Cuba?",
				answers: ["yes", "no", "still deciding"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Ensure a comfortable stay by booking accommodations in advance.",
			},
			{
				question: "Do you have travel insurance for your Cuban adventure?",
				answers: ["yes", "no", "considering"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Travel confidently with insurance coverage for your Cuban exploration.",
			},
			{
				question:
					"Have you planned your itinerary and researched key attractions in Cuba?",
				answers: ["yes", "no", "in progress"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Enhance your experience by planning your Cuban itinerary.",
			},
			{
				question:
					"Are you familiar with Cuban cuisine and excited to try local dishes?",
				answers: ["yes", "no", "excited to try"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Savor the flavors of Cuba by exploring local cuisine.",
			},
			{
				question:
					"Have you considered local currency and payment methods in Cuba?",
				answers: ["yes", "no", "need more info"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Be prepared for transactions with knowledge of local currency in Cuba.",
			},
			{
				question: "Do you know basic Spanish phrases for communication?",
				answers: ["yes", "no", "learning essentials"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Learn a few Spanish phrases to connect with locals during your Cuban adventure.",
			},
			{
				question:
					"Have you checked travel advisories or restrictions for Cuba?",
				answers: ["yes", "no", "planning to"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Stay informed with travel advisories for a smooth Cuban experience.",
			},
		],
		high: "Congratulations on passing the quiz! You're well-prepared for your journey through Cuba.",
		low: "It looks like you might need to prepare a bit more for your trip to Cuba. Check the resources again and try to improve your readiness!",
	},
	{
		route: "explore-tanzania-quiz",
		title: "Embark on Your Tanzanian Safari Journey!",
		description:
			"Take a quiz to ensure you're fully prepared for the mesmerizing wonders of Tanzania. Answer these questions to unveil your readiness for an unforgettable safari and cultural experience in the heart of East Africa.",
		questions: [
			{
				question: "Do you have a valid passport?",
				answers: ["yes", "no", "not sure"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"A valid passport is essential for your journey to Tanzania.",
			},
			{
				question:
					"Have you checked the weather conditions for your visit to Tanzania?",
				answers: ["yes", "no", "planning to"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Pack appropriately by checking the weather for your Tanzanian adventure.",
			},
			{
				question: "Are you familiar with Tanzanian customs and traditions?",
				answers: ["yes", "no", "learning"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Immerse yourself in the rich culture of Tanzania before your safari.",
			},
			{
				question: "Have you booked accommodations for your stay in Tanzania?",
				answers: ["yes", "no", "still deciding"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Ensure a comfortable stay by booking accommodations in advance.",
			},
			{
				question: "Do you have travel insurance for your Tanzanian adventure?",
				answers: ["yes", "no", "considering"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Travel confidently with insurance coverage for your Tanzanian safari.",
			},
			{
				question:
					"Have you planned your safari itinerary and researched key attractions?",
				answers: ["yes", "no", "in progress"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Enhance your experience by planning your Tanzanian safari itinerary.",
			},
			{
				question:
					"Are you familiar with Tanzanian cuisine and excited to try local dishes?",
				answers: ["yes", "no", "excited to try"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Savor the flavors of Tanzania by exploring local cuisine.",
			},
			{
				question:
					"Have you considered local currency and payment methods in Tanzania?",
				answers: ["yes", "no", "need more info"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Be prepared for transactions with knowledge of local currency in Tanzania.",
			},
			{
				question: "Do you know basic Swahili phrases for communication?",
				answers: ["yes", "no", "learning essentials"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Learn a few Swahili phrases to connect with locals during your Tanzanian adventure.",
			},
			{
				question:
					"Have you checked travel advisories or restrictions for Tanzania?",
				answers: ["yes", "no", "planning to"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Stay informed with travel advisories for a smooth Tanzanian safari.",
			},
		],
		high: "Congratulations on passing the quiz! You're well-prepared for your safari and cultural exploration in Tanzania.",
		low: "It looks like you might need to prepare a bit more for your Tanzanian safari. Check the resources again and try to improve your readiness!",
	},
	{
		route: "explore-kenya-quiz",
		title: "Embark on Your Kenyan Safari Adventure!",
		description:
			"Take a quiz to ensure you're fully prepared for the breathtaking wonders of Kenya. Answer these questions to reveal your readiness for an unforgettable safari and cultural experience in the heart of Africa.",
		questions: [
			{
				question: "Do you have a valid passport?",
				answers: ["yes", "no", "not sure"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"A valid passport is essential for your journey to Kenya.",
			},
			{
				question:
					"Have you checked the weather conditions for your visit to Kenya?",
				answers: ["yes", "no", "planning to"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Pack appropriately by checking the weather for your Kenyan adventure.",
			},
			{
				question: "Are you familiar with Kenyan customs and traditions?",
				answers: ["yes", "no", "learning"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Immerse yourself in the rich culture of Kenya before your safari.",
			},
			{
				question: "Have you booked accommodations for your stay in Kenya?",
				answers: ["yes", "no", "still deciding"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Ensure a comfortable stay by booking accommodations in advance.",
			},
			{
				question: "Do you have travel insurance for your Kenyan adventure?",
				answers: ["yes", "no", "considering"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Travel confidently with insurance coverage for your Kenyan safari.",
			},
			{
				question:
					"Have you planned your safari itinerary and researched key attractions?",
				answers: ["yes", "no", "in progress"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Enhance your experience by planning your Kenyan safari itinerary.",
			},
			{
				question:
					"Are you familiar with Kenyan cuisine and excited to try local dishes?",
				answers: ["yes", "no", "excited to try"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Savor the flavors of Kenya by exploring local cuisine.",
			},
			{
				question:
					"Have you considered local currency and payment methods in Kenya?",
				answers: ["yes", "no", "need more info"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Be prepared for transactions with knowledge of local currency in Kenya.",
			},
			{
				question: "Do you know basic Swahili phrases for communication?",
				answers: ["yes", "no", "learning essentials"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Learn a few Swahili phrases to connect with locals during your Kenyan adventure.",
			},
			{
				question:
					"Have you checked travel advisories or restrictions for Kenya?",
				answers: ["yes", "no", "planning to"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Stay informed with travel advisories for a smooth Kenyan safari.",
			},
		],
		high: "Congratulations on passing the quiz! You're well-prepared for your safari and cultural exploration in Kenya.",
		low: "It looks like you might need to prepare a bit more for your Kenyan safari. Check the resources again and try to improve your readiness!",
	},
	{
		route: "explore-ukraine-quiz",
		title: "Uncover Your Ukraine Adventure Suitability!",
		description:
			"Embark on a quest of self-discovery with our quiz to ensure you're fully prepared for the fascinating wonders of Ukraine. Answer these questions to reveal your readiness for an unforgettable Ukrainian experience.",
		questions: [
			{
				question: "Do you have a valid passport?",
				answers: ["yes", "no", "not sure"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"A valid passport is essential for traveling to Ukraine.",
			},
			{
				question:
					"Have you researched the weather conditions during your stay in Ukraine?",
				answers: ["yes", "no", "planning to"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Check the weather to pack accordingly for your Ukrainian adventure.",
			},
			{
				question: "Are you familiar with Ukrainian customs and traditions?",
				answers: ["yes", "no", "learning"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Discover the rich culture of Ukraine before your journey.",
			},
			{
				question: "Have you booked accommodation for your stay in Ukraine?",
				answers: ["yes", "no", "still deciding"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Ensure a comfortable stay by booking your accommodation in advance.",
			},
			{
				question: "Do you have travel insurance for your trip to Ukraine?",
				answers: ["yes", "no", "considering"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Travel confidently with insurance coverage for your Ukrainian adventure.",
			},
			{
				question:
					"Have you planned your itinerary and researched Ukraine's top attractions?",
				answers: ["yes", "no", "in progress"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Enhance your experience by planning your Ukrainian itinerary.",
			},
			{
				question:
					"Are you familiar with Ukrainian cuisine and excited to try local dishes?",
				answers: ["yes", "no", "excited to try"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Savor the flavors of Ukraine by exploring local cuisine.",
			},
			{
				question:
					"Have you considered local currency and payment methods in Ukraine?",
				answers: ["yes", "no", "need more info"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Be prepared for transactions with knowledge of local currency in Ukraine.",
			},
			{
				question: "Do you know basic Ukrainian phrases for communication?",
				answers: ["yes", "no", "learning essentials"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Learn a few phrases to connect with locals during your Ukrainian journey.",
			},
			{
				question:
					"Have you checked travel advisories or restrictions for Ukraine?",
				answers: ["yes", "no", "planning to"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Stay informed with travel advisories for a smooth Ukrainian adventure.",
			},
		],
		high: "Congratulations on passing the quiz! You're well-prepared for your Ukrainian adventure.",
		low: "It looks like you might need to prepare a bit more for your trip to Ukraine. Check the resources again and try to improve your readiness!",
	},
	{
		route: "explore-bulgaria-quiz",
		title: "Discover Your Bulgaria Readiness!",
		description:
			"Embark on a journey of self-discovery with our quiz to ensure you're fully prepared for the enchanting wonders of Bulgaria. Answer these questions to unveil your travel compatibility.",
		questions: [
			{
				question: "Do you have a passport?",
				answers: ["yes", "no", "not sure"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"You need a passport to travel to Bulgaria.",
			},
			{
				question:
					"Have you checked the weather forecast for Bulgaria during your travel dates?",
				answers: ["yes", "no", "planning to"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Pack accordingly by checking the weather forecast!",
			},
			{
				question:
					"Are you aware of the local customs and traditions in Bulgaria?",
				answers: ["yes", "no", "learning"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Learn about the rich culture before your journey.",
			},
			{
				question: "Have you booked accommodation for your stay in Bulgaria?",
				answers: ["yes", "no", "still deciding"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Secure your stay for a worry-free experience.",
			},
			{
				question: "Do you have travel insurance for your trip to Bulgaria?",
				answers: ["yes", "no", "considering"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Ensure a safe journey with travel insurance.",
			},
			{
				question:
					"Have you researched and planned your itinerary for Bulgaria?",
				answers: ["yes", "no", "in progress"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Explore the best of Bulgaria with a well-planned itinerary.",
			},
			{
				question: "Are you familiar with the local cuisine in Bulgaria?",
				answers: ["yes", "no", "excited to try"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Savor the flavors of Bulgaria by researching local dishes.",
			},
			{
				question:
					"Have you considered the local currency and payment methods in Bulgaria?",
				answers: ["yes", "no", "need more info"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Prepare for transactions with knowledge of local currency.",
			},
			{
				question:
					"Do you know basic Bulgarian phrases to communicate with locals?",
				answers: ["yes", "no", "learning essentials"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Learn a few phrases to enhance your cultural experience.",
			},
			{
				question:
					"Have you checked any travel advisories or restrictions for Bulgaria?",
				answers: ["yes", "no", "planning to"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Stay updated on travel advisories for a smooth journey.",
			},
		],
		high: "Congratulations on passing the quiz! You seem well-prepared for your journey to Bulgaria.",
		low: "It looks like there are some areas you might need to prepare more for your trip to Bulgaria. Review the suggested resources and ensure you're ready!",
	},
	{
		route: "ready-set-states",
		title: "Unlock Your Journey: USA Travel Readiness Quiz",
		description:
			"Embark on an adventure to the United States! Assess your readiness with our quiz and ensure you're all set for the journey of a lifetime.",
		questions: [
			{
				question: "Do you have a passport?",
				answers: ["yes", "no", "not sure"],
				correctAnswer: "yes",
				responseToUserIfNoSelected: "You need a passport to travel to the USA.",
			},
			{
				question: "Have you applied for a U.S. visa?",
				answers: ["yes", "no", "in progress"],
				correctAnswer: "yes",
				responseToUserIfNoSelected: "A U.S. visa is required for travel.",
			},
			{
				question: "Is your ESTA authorization up to date?",
				answers: ["yes", "no", "not applicable"],
				correctAnswer: "yes",
				responseToUserIfNoSelected: "Ensure your ESTA is current for entry.",
			},
			{
				question: "Have you booked your accommodation?",
				answers: ["yes", "no", "still deciding"],
				correctAnswer: "yes",
				responseToUserIfNoSelected: "Secure accommodation for a smooth stay.",
			},
			{
				question: "Do you have travel insurance?",
				answers: ["yes", "no", "thinking about it"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Travel insurance is essential for peace of mind.",
			},
			{
				question: "Are your vaccinations up to date?",
				answers: ["yes", "no", "consulting with doctor"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Ensure vaccinations are current for a healthy trip.",
			},
			{
				question: "Do you know the local emergency numbers?",
				answers: ["yes", "no", "researching"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Familiarize yourself with local emergency contacts.",
			},
			{
				question: "Have you checked baggage restrictions?",
				answers: ["yes", "no", "not yet"],
				correctAnswer: "yes",
				responseToUserIfNoSelected: "Review baggage rules to avoid hassles.",
			},
			{
				question: "Are you aware of cultural norms in the USA?",
				answers: ["yes", "no", "studying"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Learn about cultural norms for a respectful visit.",
			},
			{
				question: "Have you exchanged currency to USD?",
				answers: ["yes", "no", "planning to"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Exchange currency to make transactions smoother.",
			},
			{
				question: "Do you have a travel itinerary?",
				answers: ["yes", "no", "working on it"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Plan your itinerary for a well-organized trip.",
			},
			{
				question: "Are you familiar with U.S. transportation options?",
				answers: ["yes", "no", "researching"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Know your transportation choices for convenient travel.",
			},
			{
				question: "Have you researched local cuisine?",
				answers: ["yes", "no", "excited to try"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Explore local cuisine for a delightful culinary experience.",
			},
			{
				question: "Do you know the local customs for tipping?",
				answers: ["yes", "no", "looking into it"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Understand tipping customs for a courteous stay.",
			},
			{
				question: "Have you packed weather-appropriate clothing?",
				answers: ["yes", "no", "still deciding"],
				correctAnswer: "yes",
				responseToUserIfNoSelected: "Pack accordingly for a comfortable trip.",
			},
		],
		high: "Congratulations on passing the quiz! You're well-prepared for your journey to the USA.",
		low: "It looks like you might need to prepare a bit more for your trip. Review your answers and try again!",
	},
	{
		route: "bon-voyage-france",
		title: "Bonjour Explorer: France Travel Readiness Quiz",
		description:
			"Get ready for a French adventure! Assess your travel readiness with our quiz and ensure you're prepared to savor the charm and culture of France.",
		questions: [
			{
				question: "Do you have a valid passport?",
				answers: ["yes", "no", "not sure"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"You'll need a valid passport to travel to France.",
			},
			{
				question: "Have you obtained a Schengen visa?",
				answers: ["yes", "no", "in process"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Ensure you have a Schengen visa for entry into France.",
			},
			{
				question: "Have you booked your accommodation in France?",
				answers: ["yes", "no", "still deciding"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Secure your accommodation for a comfortable stay.",
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
				question: "Do you know basic French phrases?",
				answers: ["yes", "no", "learning"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Familiarize yourself with basic French phrases for better communication.",
			},
			{
				question: "Have you checked the local weather forecast?",
				answers: ["yes", "no", "not yet"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Check the weather forecast to pack accordingly for your trip.",
			},
			{
				question: "Do you know emergency numbers in France?",
				answers: ["yes", "no", "researching"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Familiarize yourself with emergency numbers for a safe visit.",
			},
			{
				question: "Have you planned your itinerary in France?",
				answers: ["yes", "no", "working on it"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Plan your itinerary for an organized and enjoyable trip.",
			},
			{
				question: "Do you know the tipping etiquette in France?",
				answers: ["yes", "no", "looking into it"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Understand the tipping customs for a courteous stay.",
			},
			{
				question: "Are you aware of local transportation options?",
				answers: ["yes", "no", "researching"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Know your transportation options for convenient travel.",
			},
			{
				question: "Have you researched French cuisine?",
				answers: ["yes", "no", "excited to try"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Explore and indulge in the delightful French cuisine.",
			},
			{
				question: "Do you have a power adapter for your devices?",
				answers: ["yes", "no", "need to buy one"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Ensure you have the right power adapter for your devices.",
			},
			{
				question: "Have you informed your bank about your travel?",
				answers: ["yes", "no", "not yet"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Notify your bank to avoid any issues with your cards during your trip.",
			},
			{
				question: "Do you have a basic understanding of French culture?",
				answers: ["yes", "no", "researching"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Learn about French culture to enhance your travel experience.",
			},
		],
		high: "Félicitations! You're ready for your French adventure. Enjoy the beauty and culture of France.",
		low: "It looks like you might need to prepare a bit more for your trip to France. Review the areas you're less familiar with to ensure a smooth and enjoyable experience.",
	},
	{
		route: "ole-spain",
		title: "¡Vamos! Spain Adventure Quiz",
		description:
			"Get ready for an unforgettable Spanish escapade! Assess your travel readiness with our quiz and ensure you're prepared to embrace the vibrant culture and beauty of Spain.",
		questions: [
			{
				question: "Do you have a valid passport?",
				answers: ["yes", "no", "not sure"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"A valid passport is essential for travel to Spain.",
			},
			{
				question: "Have you obtained a Schengen visa for Spain?",
				answers: ["yes", "no", "in process"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Ensure you have a Schengen visa for entry into Spain.",
			},
			{
				question: "Have you booked your accommodation in Spain?",
				answers: ["yes", "no", "still deciding"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Secure your accommodation for a comfortable stay in Spain.",
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
					"Check the weather forecast to pack accordingly for your trip to Spain.",
			},
			{
				question: "Do you know emergency numbers in Spain?",
				answers: ["yes", "no", "researching"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Familiarize yourself with emergency numbers for a safe visit to Spain.",
			},
			{
				question: "Have you planned your itinerary in Spain?",
				answers: ["yes", "no", "working on it"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Plan your itinerary for an organized and enjoyable trip in Spain.",
			},
			{
				question: "Are you aware of local transportation options in Spain?",
				answers: ["yes", "no", "researching"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Know your transportation options for convenient travel within Spain.",
			},
			{
				question: "Have you researched Spanish cuisine?",
				answers: ["yes", "no", "excited to try"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Explore and savor the delightful flavors of Spanish cuisine.",
			},
			{
				question: "Do you have a power adapter for your devices?",
				answers: ["yes", "no", "need to buy one"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Ensure you have the right power adapter for your devices in Spain.",
			},
			{
				question: "Have you informed your bank about your travel to Spain?",
				answers: ["yes", "no", "not yet"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Notify your bank to avoid any issues with your cards during your trip to Spain.",
			},
			{
				question: "Do you have a basic understanding of Spanish culture?",
				answers: ["yes", "no", "researching"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Learn about Spanish culture to enhance your travel experience.",
			},
			{
				question: "Are you familiar with the siesta tradition in Spain?",
				answers: ["yes", "no", "not sure"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Embrace the siesta tradition for a truly authentic Spanish experience.",
			},
		],
		high: "¡Fantástico! You're all set for your journey to Spain. Embrace the vibrant culture and stunning landscapes.",
		low: "It seems you might need to prepare a bit more for your Spanish adventure. Review the areas where you're less familiar to ensure a memorable and smooth experience.",
	},
	{
		route: "aussie-adventure-quiz",
		title: "Aussie Explorer: Journey Readiness Quiz",
		description:
			"Embark on an unforgettable journey to Australia! Evaluate your travel readiness with our quiz and ensure you're well-prepared to discover the diverse landscapes, unique wildlife, and laid-back charm of the Land Down Under.",
		questions: [
			{
				question: "Do you have a valid passport?",
				answers: ["yes", "no", "not sure"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"A valid passport is essential for travel to Australia.",
			},
			{
				question: "Have you checked if you need a visa for Australia?",
				answers: ["yes", "no", "in process"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Ensure you have the necessary visa for entry into Australia.",
			},
			{
				question: "Have you researched Australian customs and etiquette?",
				answers: ["yes", "no", "in progress"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Familiarize yourself with Australian customs for a respectful visit.",
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
				question: "Have you booked your accommodation in Australia?",
				answers: ["yes", "no", "still deciding"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Secure your accommodation for a comfortable stay in Australia.",
			},
			{
				question: "Do you know basic Australian phrases?",
				answers: ["yes", "no", "learning"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Familiarize yourself with basic Australian phrases for better communication.",
			},
			{
				question: "Have you checked the local weather forecast?",
				answers: ["yes", "no", "not yet"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Check the weather forecast to pack accordingly for your trip to Australia.",
			},
			{
				question: "Do you know emergency numbers in Australia?",
				answers: ["yes", "no", "researching"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Familiarize yourself with emergency numbers for a safe visit to Australia.",
			},
			{
				question: "Have you planned your itinerary in Australia?",
				answers: ["yes", "no", "working on it"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Plan your itinerary for an organized and enjoyable trip in Australia.",
			},
			{
				question: "Are you aware of local transportation options in Australia?",
				answers: ["yes", "no", "researching"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Know your transportation options for convenient travel within Australia.",
			},
			{
				question: "Have you researched Australian cuisine?",
				answers: ["yes", "no", "excited to try"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Explore and savor the delightful flavors of Australian cuisine.",
			},
			{
				question: "Do you have a power adapter for your devices?",
				answers: ["yes", "no", "need to buy one"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Ensure you have the right power adapter for your devices in Australia.",
			},
			{
				question: "Have you informed your bank about your travel to Australia?",
				answers: ["yes", "no", "not yet"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Notify your bank to avoid any issues with your cards during your trip to Australia.",
			},
			{
				question:
					"Are you familiar with popular tourist attractions in Australia?",
				answers: ["yes", "no", "researching"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Explore famous attractions for a memorable journey in Australia.",
			},
		],
		high: "Congratulations on passing the quiz! You're well-prepared for your Aussie adventure.",
		low: "It seems like you might need to prepare a bit more for your journey to Australia. Check the areas you need to improve on and try again!",
	},
	{
		route: "dutch-discovery-quiz",
		title: "Dutch Discovery: Journey Readiness Quiz",
		description:
			"Embark on a charming journey to the Netherlands! Evaluate your travel readiness with our quiz and ensure you're well-prepared to explore the picturesque landscapes, rich culture, and historic charm of this delightful destination.",
		questions: [
			{
				question: "Do you have a valid passport?",
				answers: ["yes", "no", "not sure"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"A valid passport is essential for travel to the Netherlands.",
			},
			{
				question: "Have you checked if you need a visa for the Netherlands?",
				answers: ["yes", "no", "in process"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Ensure you have the necessary visa for entry into the Netherlands.",
			},
			{
				question: "Have you researched Dutch customs and etiquette?",
				answers: ["yes", " no", "in progress"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Familiarize yourself with Dutch customs for a respectful visit.",
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
				question: "Have you booked your accommodation in the Netherlands?",
				answers: ["yes", "no", "still deciding"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Secure your accommodation for a comfortable stay in the Netherlands.",
			},
			{
				question: "Do you know basic Dutch phrases?",
				answers: ["yes", "no", "learning"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Familiarize yourself with basic Dutch phrases for better communication.",
			},
			{
				question: "Have you checked the local weather forecast?",
				answers: ["yes", "no", "not yet"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Check the weather forecast to pack accordingly for your trip to the Netherlands.",
			},
			{
				question: "Do you know emergency numbers in the Netherlands?",
				answers: ["yes", "no", "researching"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Familiarize yourself with emergency numbers for a safe visit to the Netherlands.",
			},
			{
				question: "Have you planned your itinerary in the Netherlands?",
				answers: ["yes", "no", "working on it"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Plan your itinerary for an organized and enjoyable trip in the Netherlands.",
			},
			{
				question:
					"Are you aware of local transportation options in the Netherlands?",
				answers: ["yes", "no", "researching"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Know your transportation options for convenient travel within the Netherlands.",
			},
			{
				question: "Have you researched Dutch cuisine?",
				answers: ["yes", "no", "excited to try"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Explore and savor the delightful flavors of Dutch cuisine.",
			},
			{
				question: "Do you have a power adapter for your devices?",
				answers: ["yes", "no", "need to buy one"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Ensure you have the right power adapter for your devices in the Netherlands.",
			},
			{
				question:
					"Have you informed your bank about your travel to the Netherlands?",
				answers: ["yes", "no", "not yet"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Notify your bank to avoid any issues with your cards during your trip to the Netherlands.",
			},
			{
				question:
					"Are you familiar with popular tourist attractions in the Netherlands?",
				answers: ["yes", "no", "researching"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Explore famous attractions for a memorable journey in the Netherlands.",
			},
		],
		high: "Congratulations on passing the quiz! You're well-prepared for your Dutch journey.",
		low: "It seems you might need to prepare a bit more for your trip to the Netherlands. Check the answers and try again!",
	},
	{
		route: "indonesian-exploration-quiz",
		title: "Indonesian Exploration: Journey Readiness Quiz",
		description:
			"Embark on a thrilling exploration of Indonesia! Evaluate your travel readiness with our quiz and ensure you're well-prepared to discover the diverse landscapes, vibrant cultures, and natural wonders of this enchanting archipelago.",
		questions: [
			{
				question: "Do you have a valid passport?",
				answers: ["yes", "no", "not sure"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"A valid passport is essential for travel to Indonesia.",
			},
			{
				question: "Have you checked if you need a visa for Indonesia?",
				answers: ["yes", "no", "in process"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Ensure you have the necessary visa for entry into Indonesia.",
			},
			{
				question: "Have you researched Indonesian customs and etiquette?",
				answers: ["yes", "no", "in progress"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Familiarize yourself with Indonesian customs for a respectful visit.",
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
				question: "Have you booked your accommodation in Indonesia?",
				answers: ["yes", "no", "still deciding"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Secure your accommodation for a comfortable stay in Indonesia.",
			},
			{
				question: "Do you know basic Indonesian phrases?",
				answers: ["yes", "no", "learning"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Familiarize yourself with basic Indonesian phrases for better communication.",
			},
			{
				question: "Have you checked the local weather forecast?",
				answers: ["yes", "no", "not yet"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Check the weather forecast to pack accordingly for your trip to Indonesia.",
			},
			{
				question: "Do you know emergency numbers in Indonesia?",
				answers: ["yes", "no", "researching"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Familiarize yourself with emergency numbers for a safe visit to Indonesia.",
			},
			{
				question: "Have you planned your itinerary in Indonesia?",
				answers: [" yes", "no", "working on it"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Plan your itinerary for an organized and enjoyable trip in Indonesia.",
			},
			{
				question: "Are you aware of local transportation options in Indonesia?",
				answers: ["yes", "no", "researching"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Know your transportation options for convenient travel within Indonesia.",
			},
			{
				question: "Have you researched Indonesian cuisine?",
				answers: ["yes", "no", "excited to try"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Explore and savor the delightful flavors of Indonesian cuisine.",
			},
			{
				question: "Do you have a power adapter for your devices?",
				answers: ["yes", "no", "need to buy one"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Ensure you have the right power adapter for your devices in Indonesia.",
			},
			{
				question: "Have you informed your bank about your travel to Indonesia?",
				answers: ["yes", "no", "not yet"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Notify your bank to avoid any issues with your cards during your trip to Indonesia.",
			},
			{
				question:
					"Are you familiar with popular tourist attractions in Indonesia?",
				answers: ["yes", "no", "researching"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Explore famous attractions for a memorable journey in Indonesia.",
			},
		],
		high: "Congratulations on passing the quiz! You're well-prepared for your journey to Indonesia.",
		low: "It seems you might need to prepare a bit more for your trip to Indonesia. Check the responses for guidance!",
	},
	{
		route: "vietnamese-adventure-quiz",
		title: "Vietnamese Adventure: Journey Readiness Quiz",
		description:
			"Embark on an exciting adventure to Vietnam! Evaluate your travel readiness with our quiz and ensure you're well-prepared to explore the rich history, diverse cultures, and stunning landscapes of this captivating Southeast Asian gem.",
		questions: [
			{
				question: "Do you have a valid passport?",
				answers: ["yes", "no", "not sure"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"A valid passport is essential for travel to Vietnam.",
			},
			{
				question: "Have you checked if you need a visa for Vietnam?",
				answers: ["yes", "no", "in process"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Ensure you have the necessary visa for entry into Vietnam.",
			},
			{
				question: "Have you researched Vietnamese customs and etiquette?",
				answers: ["yes", "no", "in progress"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Familiarize yourself with Vietnamese customs for a respectful visit.",
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
				question: "Have you booked your accommodation in Vietnam?",
				answers: ["yes", "no", "still deciding"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Secure your accommodation for a comfortable stay in Vietnam.",
			},
			{
				question: "Do you know basic Vietnamese phrases?",
				answers: ["yes", "no", "learning"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Familiarize yourself with basic Vietnamese phrases for better communication.",
			},
			{
				question: "Have you checked the local weather forecast?",
				answers: ["yes", "no", "not yet"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Check the weather forecast to pack accordingly for your trip to Vietnam.",
			},
			{
				question: "Do you know emergency numbers in Vietnam?",
				answers: ["yes", "no", "researching"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Familiarize yourself with emergency numbers for a safe visit to Vietnam.",
			},
			{
				question: "Have you planned your itinerary in Vietnam?",
				answers: [" yes", "no", "working on it"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Plan your itinerary for an organized and enjoyable trip in Vietnam.",
			},
			{
				question: "Are you aware of local transportation options in Vietnam?",
				answers: ["yes", "no", "researching"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Know your transportation options for convenient travel within Vietnam.",
			},
			{
				question: "Have you researched Vietnamese cuisine?",
				answers: ["yes", "no", "excited to try"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Explore and savor the delightful flavors of Vietnamese cuisine.",
			},
			{
				question: "Do you have a power adapter for your devices?",
				answers: ["yes", "no", "need to buy one"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Ensure you have the right power adapter for your devices in Vietnam.",
			},
			{
				question: "Have you informed your bank about your travel to Vietnam?",
				answers: ["yes", "no", "not yet"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Notify your bank to avoid any issues with your cards during your trip to Vietnam.",
			},
			{
				question:
					"Are you familiar with popular tourist attractions in Vietnam?",
				answers: ["yes", "no", "researching"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Explore famous attractions for a memorable journey in Vietnam.",
			},
		],
		high: "Congratulations on being well-prepared for your Vietnamese adventure! Enjoy your journey.",
		low: "It looks like you may need to prepare a bit more for your trip to Vietnam. Please review the quiz again to see what steps you might have missed.",
	},
	{
		route: "hungarian-adventure-quiz",
		title: "Hungarian Adventure: Journey Readiness Quiz",
		description:
			"Embark on a cultural adventure in Hungary! Evaluate your travel readiness with our quiz and ensure you're well-prepared to explore the historic landmarks, rich traditions, and savory cuisine of this Central European gem.",
		questions: [
			{
				question: "Do you have a valid passport?",
				answers: ["yes", "no", "not sure"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"A valid passport is essential for travel to Hungary.",
			},
			{
				question: "Have you checked if you need a visa for Hungary?",
				answers: ["yes", "no", "in process"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Ensure you have the necessary visa for entry into Hungary.",
			},
			{
				question: "Have you researched Hungarian customs and etiquette?",
				answers: ["yes", "no", "in progress"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Familiarize yourself with Hungarian customs for a respectful visit.",
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
				question: "Have you booked your accommodation in Hungary?",
				answers: ["yes", "no", "still deciding"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Secure your accommodation for a comfortable stay in Hungary.",
			},
			{
				question: "Do you know basic Hungarian phrases?",
				answers: ["yes", "no", "learning"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Familiarize yourself with basic Hungarian phrases for better communication.",
			},
			{
				question: "Have you checked the local weather forecast?",
				answers: ["yes", "no", "not yet"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Check the weather forecast to pack accordingly for your trip to Hungary.",
			},
			{
				question: "Do you know emergency numbers in Hungary?",
				answers: ["yes", "no", "researching"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Familiarize yourself with emergency numbers for a safe visit to Hungary.",
			},
			{
				question: "Have you planned your itinerary in Hungary?",
				answers: [" yes", "no", "working on it"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Plan your itinerary for an organized and enjoyable trip in Hungary.",
			},
			{
				question: "Are you aware of local transportation options in Hungary?",
				answers: ["yes", "no", "researching"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Know your transportation options for convenient travel within Hungary.",
			},
			{
				question: "Have you researched Hungarian cuisine?",
				answers: ["yes", "no", "excited to try"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Explore and savor the delightful flavors of Hungarian cuisine.",
			},
			{
				question: "Do you have a power adapter for your devices?",
				answers: ["yes", "no", "need to buy one"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Ensure you have the right power adapter for your devices in Hungary.",
			},
			{
				question: "Have you informed your bank about your travel to Hungary?",
				answers: ["yes", "no", "not yet"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Notify your bank to avoid any issues with your cards during your trip to Hungary.",
			},
			{
				question:
					"Are you familiar with popular tourist attractions in Hungary?",
				answers: ["yes", "no", "researching"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Explore famous attractions for a memorable journey in Hungary.",
			},
		],
		high: "Congratulations on passing the quiz! You're well-prepared for your Hungarian adventure.",
		low: "It seems you might need to prepare a bit more for your trip to Hungary. Check the answers and try again to ensure a great journey!",
	},
	{
		route: "croatian-discovery-quiz",
		title: "Croatian Discovery: Journey Readiness Quiz",
		description:
			"Embark on a sun-soaked discovery of Croatia! Evaluate your travel readiness with our quiz and ensure you're well-prepared to explore the stunning coastlines, historic cities, and rich culture of this Adriatic gem.",
		questions: [
			{
				question: "Do you have a valid passport?",
				answers: ["yes", "no", "not sure"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"A valid passport is essential for travel to Croatia.",
			},
			{
				question: "Have you checked if you need a visa for Croatia?",
				answers: ["yes", "no", "in process"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Ensure you have the necessary visa for entry into Croatia.",
			},
			{
				question: "Have you researched Croatian customs and etiquette?",
				answers: ["yes", "no", "in progress"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Familiarize yourself with Croatian customs for a respectful visit.",
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
				question: "Have you booked your accommodation in Croatia?",
				answers: ["yes", "no", "still deciding"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Secure your accommodation for a comfortable stay in Croatia.",
			},
			{
				question: "Do you know basic Croatian phrases?",
				answers: ["yes", "no", "learning"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Familiarize yourself with basic Croatian phrases for better communication.",
			},
			{
				question: "Have you checked the local weather forecast?",
				answers: ["yes", "no", "not yet"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Check the weather forecast to pack accordingly for your trip to Croatia.",
			},
			{
				question: "Do you know emergency numbers in Croatia?",
				answers: ["yes", "no", "researching"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Familiarize yourself with emergency numbers for a safe visit to Croatia.",
			},
			{
				question: "Have you planned your itinerary in Croatia?",
				answers: [" yes", "no", "working on it"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Plan your itinerary for an organized and enjoyable trip in Croatia.",
			},
			{
				question: "Are you aware of local transportation options in Croatia?",
				answers: ["yes", "no", "researching"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Know your transportation options for convenient travel within Croatia.",
			},
			{
				question: "Have you researched Croatian cuisine?",
				answers: ["yes", "no", "excited to try"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Explore and savor the delightful flavors of Croatian cuisine.",
			},
			{
				question: "Do you have a power adapter for your devices?",
				answers: ["yes", "no", "need to buy one"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Ensure you have the right power adapter for your devices in Croatia.",
			},
			{
				question: "Have you informed your bank about your travel to Croatia?",
				answers: ["yes", "no", "not yet"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Notify your bank to avoid any issues with your cards during your trip to Croatia.",
			},
			{
				question:
					"Are you familiar with popular tourist attractions in Croatia?",
				answers: ["yes", "no", "researching"],
				correctAnswer: "yes",
				responseToUserIfNoSelected:
					"Explore famous attractions for a memorable journey in Croatia.",
			},
		],
		high: "Congratulations on being well-prepared for your Croatian adventure! Enjoy your journey through the stunning landscapes and rich cultural heritage of Croatia.",
		low: "It looks like there are still some areas to prepare before your trip to Croatia. Consider revisiting the quiz and ensuring all preparations are in place for a smooth and enjoyable visit.",
	},
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

const db2 = [
  {
    route: "explore-djibouti-quiz",
    title: "Djibouti Discovery Unveiled: Djibouti Edition!",
    description:
      "Embark on a quiz to ensure you're fully prepared for the extraordinary beauty of Djibouti. Answer these questions to unveil your readiness for an unforgettable journey through otherworldly landscapes, diverse cultures, and the unique charm of the Horn of Africa.",
    questions: [
      {
        question: "Do you have a valid passport?",
        answers: ["yes", "no", "not sure"],
        correctAnswer: "yes",
        responseToUserIfNoSelected:
          "A valid passport is essential for your journey to Djibouti.",
      },
      {
        question:
          "Have you checked visa requirements and obtained the necessary travel documents for Djibouti?",
        answers: ["yes", "no", "in progress"],
        correctAnswer: "yes",
        responseToUserIfNoSelected:
          "Ensure you have the required travel documents for a smooth entry into Djibouti.",
      },
      {
        question: "Are you aware of local customs and traditions in Djibouti?",
        answers: ["yes", "no", "learning"],
        correctAnswer: "yes",
        responseToUserIfNoSelected:
          "Immerse yourself in the rich culture of Djibouti before your adventure.",
      },
      {
        question: "Have you booked accommodations for your stay in Djibouti?",
        answers: ["yes", "no", "still deciding"],
        correctAnswer: "yes",
        responseToUserIfNoSelected:
          "Ensure a comfortable stay by booking accommodations in advance.",
      },
      {
        question: "Do you have travel insurance for your Djiboutian adventure?",
        answers: ["yes", "no", "considering"],
        correctAnswer: "yes",
        responseToUserIfNoSelected:
          "Travel confidently with insurance coverage for your journey through Djibouti.",
      },
      {
        question:
          "Have you planned your itinerary and researched key attractions in Djibouti?",
        answers: ["yes", "no", "in progress"],
        correctAnswer: "yes",
        responseToUserIfNoSelected:
          "Enhance your experience by planning your Djiboutian itinerary.",
      },
      {
        question:
          "Are you familiar with Djiboutian cuisine and excited to try local dishes?",
        answers: ["yes", "no", "excited to try"],
        correctAnswer: "yes",
        responseToUserIfNoSelected:
          "Savor the flavors of Djibouti by exploring local cuisine.",
      },
      {
        question:
          "Have you considered local currency and payment methods in Djibouti?",
        answers: ["yes", "no", "need more info"],
        correctAnswer: "yes",
        responseToUserIfNoSelected:
          "Be prepared for transactions with knowledge of local currency in Djibouti.",
      },
      {
        question: "Do you know basic Djiboutian phrases for communication?",
        answers: ["yes", "no", "learning essentials"],
        correctAnswer: "yes",
        responseToUserIfNoSelected:
          "Learn a few Djiboutian phrases to connect with locals during your Djiboutian adventure.",
      },
      {
        question:
          "Have you checked travel advisories or restrictions for Djibouti?",
        answers: ["yes", "no", "planning to"],
        correctAnswer: "yes",
        responseToUserIfNoSelected:
          "Stay informed with travel advisories for a smooth Djiboutian journey.",
      },
    ],
    high: "Congratulations on passing the quiz! You're well-prepared for your adventure in Djibouti.",
    low: "It seems you may need to prepare a bit more for your Djibouti journey. Consider revisiting the quiz questions for better preparation.",
  },
  {
    route: "explore-sao-tome-and-principe-quiz",
    title:
      "São Tomé and Príncipe Secrets Unveiled: São Tomé and Príncipe Edition!",
    description:
      "Embark on a quiz to ensure you're fully prepared for the hidden beauty of São Tomé and Príncipe. Answer these questions to unveil your readiness for an unforgettable journey through lush rainforests, cocoa plantations, and the untouched paradise of these tropical islands in the Gulf of Guinea.",
    questions: [
      {
        question: "Do you have a valid passport?",
        answers: ["yes", "no", "not sure"],
        correctAnswer: "yes",
        responseToUserIfNoSelected:
          "A valid passport is essential for your journey to São Tomé and Príncipe.",
      },
      {
        question:
          "Have you checked visa requirements and obtained the necessary travel documents for São Tomé and Príncipe?",
        answers: ["yes", "no", "in progress"],
        correctAnswer: "yes",
        responseToUserIfNoSelected:
          "Ensure you have the required travel documents for a smooth entry into São Tomé and Príncipe.",
      },
      {
        question:
          "Are you aware of local customs and traditions in São Tomé and Príncipe?",
        answers: ["yes", "no", "learning"],
        correctAnswer: "yes",
        responseToUserIfNoSelected:
          "Immerse yourself in the rich culture of São Tomé and Príncipe before your adventure.",
      },
      {
        question:
          "Have you booked accommodations for your stay in São Tomé and Príncipe?",
        answers: ["yes", "no", "still deciding"],
        correctAnswer: "yes",
        responseToUserIfNoSelected:
          "Ensure a comfortable stay by booking accommodations in advance.",
      },
      {
        question:
          "Do you have travel insurance for your São Toméan and Príncipean adventure?",
        answers: ["yes", "no", "considering"],
        correctAnswer: "yes",
        responseToUserIfNoSelected:
          "Travel confidently with insurance coverage for your journey through São Tomé and Príncipe.",
      },
      {
        question:
          "Have you planned your itinerary and researched key attractions in São Tomé and Príncipe?",
        answers: ["yes", "no", "in progress"],
        correctAnswer: "yes",
        responseToUserIfNoSelected:
          "Enhance your experience by planning your São Toméan and Príncipean itinerary.",
      },
      {
        question:
          "Are you familiar with São Toméan and Príncipean cuisine and excited to try local dishes?",
        answers: ["yes", "no", "excited to try"],
        correctAnswer: "yes",
        responseToUserIfNoSelected:
          "Savor the flavors of São Tomé and Príncipe by exploring local cuisine.",
      },
      {
        question:
          "Have you considered local currency and payment methods in São Tomé and Príncipe?",
        answers: ["yes", "no", "need more info"],
        correctAnswer: "yes",
        responseToUserIfNoSelected:
          "Be prepared for transactions with knowledge of local currency in São Tomé and Príncipe.",
      },
      {
        question:
          "Do you know basic São Toméan and Príncipean phrases for communication?",
        answers: ["yes", "no", "learning essentials"],
        correctAnswer: "yes",
        responseToUserIfNoSelected:
          "Learn a few São Toméan and Príncipean phrases to connect with locals during your São Toméan and Príncipean adventure.",
      },
      {
        question:
          "Have you checked travel advisories or restrictions for São Tomé and Príncipe?",
        answers: ["yes", "no", "planning to"],
        correctAnswer: "yes",
        responseToUserIfNoSelected:
          "Stay informed with travel advisories for a smooth São Toméan and Príncipean journey.",
      },
    ],
    high: "Congratulations on passing the quiz! You're well prepared for your journey to São Tomé and Príncipe. Enjoy your adventure!",
    low: "It seems you might need to prepare a bit more for your São Tomé and Príncipe adventure. Review the questions and try again for better readiness.",
  },
  {
    route: "explore-comoros-quiz",
    title: "Comoros Charms Unveiled: Comoros Edition!",
    description:
      "Embark on a quiz to ensure you're fully prepared for the mesmerizing beauty of Comoros. Answer these questions to unveil your readiness for an unforgettable journey through volcanic landscapes, pristine beaches, and the unique blend of cultures in this Indian Ocean gem.",
    questions: [
      {
        question: "Do you have a valid passport?",
        answers: ["yes", "no", "not sure"],
        correctAnswer: "yes",
        responseToUserIfNoSelected:
          "A valid passport is essential for your journey to Comoros.",
      },
      {
        question:
          "Have you checked visa requirements and obtained the necessary travel documents for Comoros?",
        answers: ["yes", "no", "in progress"],
        correctAnswer: "yes",
        responseToUserIfNoSelected:
          "Ensure you have the required travel documents for a smooth entry into Comoros.",
      },
      {
        question: "Are you aware of local customs and traditions in Comoros?",
        answers: ["yes", "no", "learning"],
        correctAnswer: "yes",
        responseToUserIfNoSelected:
          "Immerse yourself in the rich culture of Comoros before your adventure.",
      },
      {
        question: "Have you booked accommodations for your stay in Comoros?",
        answers: ["yes", "no", "still deciding"],
        correctAnswer: "yes",
        responseToUserIfNoSelected:
          "Ensure a comfortable stay by booking accommodations in advance.",
      },
      {
        question: "Do you have travel insurance for your Comorian adventure?",
        answers: ["yes", "no", "considering"],
        correctAnswer: "yes",
        responseToUserIfNoSelected:
          "Travel confidently with insurance coverage for your journey through Comoros.",
      },
      {
        question:
          "Have you planned your itinerary and researched key attractions in Comoros?",
        answers: ["yes", "no", "in progress"],
        correctAnswer: "yes",
        responseToUserIfNoSelected:
          "Enhance your experience by planning your Comorian itinerary.",
      },
      {
        question:
          "Are you familiar with Comorian cuisine and excited to try local dishes?",
        answers: ["yes", "no", "excited to try"],
        correctAnswer: "yes",
        responseToUserIfNoSelected:
          "Savor the flavors of Comoros by exploring local cuisine.",
      },
      {
        question:
          "Have you considered local currency and payment methods in Comoros?",
        answers: ["yes", "no", "need more info"],
        correctAnswer: "yes",
        responseToUserIfNoSelected:
          "Be prepared for transactions with knowledge of local currency in Comoros.",
      },
      {
        question: "Do you know basic Comorian phrases for communication?",
        answers: ["yes", "no", "learning essentials"],
        correctAnswer: "yes",
        responseToUserIfNoSelected:
          "Learn a few Comorian phrases to connect with locals during your Comorian adventure.",
      },
      {
        question:
          "Have you checked travel advisories or restrictions for Comoros?",
        answers: ["yes", "no", "planning to"],
        correctAnswer: "yes",
        responseToUserIfNoSelected:
          "Stay informed with travel advisories for a smooth Comorian journey.",
      },
    ],
    high: "Congratulations on passing the quiz! You're well prepared for your journey to Comoros. Enjoy the enchanting islands!",
    low: "It seems you might need to prepare a bit more for your Comoros adventure. Review the questions and try again for better readiness.",
  },
  {
    route: "explore-mauritius-quiz",
    title: "Mauritius Marvels Unveiled: Mauritius Edition!",
    description:
      "Embark on a quiz to ensure you're fully prepared for the captivating beauty of Mauritius. Answer these questions to unveil your readiness for an unforgettable journey through pristine beaches, diverse landscapes, and the vibrant culture of this Indian Ocean paradise.",
    questions: [
      {
        question: "Do you have a valid passport?",
        answers: ["yes", "no", "not sure"],
        correctAnswer: "yes",
        responseToUserIfNoSelected:
          "A valid passport is essential for your journey to Mauritius.",
      },
      {
        question:
          "Have you checked visa requirements and obtained the necessary travel documents for Mauritius?",
        answers: ["yes", "no", "in progress"],
        correctAnswer: "yes",
        responseToUserIfNoSelected:
          "Ensure you have the required travel documents for a smooth entry into Mauritius.",
      },
      {
        question: "Are you aware of local customs and traditions in Mauritius?",
        answers: ["yes", "no", "learning"],
        correctAnswer: "yes",
        responseToUserIfNoSelected:
          "Immerse yourself in the rich culture of Mauritius before your adventure.",
      },
      {
        question: "Have you booked accommodations for your stay in Mauritius?",
        answers: ["yes", "no", "still deciding"],
        correctAnswer: "yes",
        responseToUserIfNoSelected:
          "Ensure a comfortable stay by booking accommodations in advance.",
      },
      {
        question: "Do you have travel insurance for your Mauritian adventure?",
        answers: ["yes", "no", "considering"],
        correctAnswer: "yes",
        responseToUserIfNoSelected:
          "Travel confidently with insurance coverage for your journey through Mauritius.",
      },
      {
        question:
          "Have you planned your itinerary and researched key attractions in Mauritius?",
        answers: ["yes", "no", "in progress"],
        correctAnswer: "yes",
        responseToUserIfNoSelected:
          "Enhance your experience by planning your Mauritian itinerary.",
      },
      {
        question:
          "Are you familiar with Mauritian cuisine and excited to try local dishes?",
        answers: ["yes", "no", "excited to try"],
        correctAnswer: "yes",
        responseToUserIfNoSelected:
          "Savor the flavors of Mauritius by exploring local cuisine.",
      },
      {
        question:
          "Have you considered local currency and payment methods in Mauritius?",
        answers: ["yes", "no", "need more info"],
        correctAnswer: "yes",
        responseToUserIfNoSelected:
          "Be prepared for transactions with knowledge of local currency in Mauritius.",
      },
      {
        question: "Do you know basic Mauritian phrases for communication?",
        answers: ["yes", "no", "learning essentials"],
        correctAnswer: "yes",
        responseToUserIfNoSelected:
          "Learn a few Mauritian phrases to connect with locals during your Mauritian adventure.",
      },
      {
        question:
          "Have you checked travel advisories or restrictions for Mauritius?",
        answers: ["yes", "no", "planning to"],
        correctAnswer: "yes",
        responseToUserIfNoSelected:
          "Stay informed with travel advisories for a smooth Mauritian journey.",
      },
    ],
    high: "Congratulations on passing the quiz! You're well prepared for your journey to Mauritius. Enjoy the breathtaking island!",
    low: "It seems you might need to prepare a bit more for your Mauritius adventure. Review the questions and try again for better readiness.",
  },
  {
    route: "explore-lesotho-quiz",
    title: "Lesotho Heights Unveiled: Lesotho Edition!",
    description:
      "Embark on a quiz to ensure you're fully prepared for the breathtaking beauty of Lesotho. Answer these questions to unveil your readiness for an unforgettable journey through mountainous landscapes, traditional Basotho culture, and the 'Kingdom in the Sky' charm of this Southern African gem.",
    questions: [
      {
        question: "Do you have a valid passport?",
        answers: ["yes", "no", "not sure"],
        correctAnswer: "yes",
        responseToUserIfNoSelected:
          "A valid passport is essential for your journey to Lesotho.",
      },
      {
        question:
          "Have you checked visa requirements and obtained the necessary travel documents for Lesotho?",
        answers: ["yes", "no", "in progress"],
        correctAnswer: "yes",
        responseToUserIfNoSelected:
          "Ensure you have the required travel documents for a smooth entry into Lesotho.",
      },
      {
        question: "Are you aware of local customs and traditions in Lesotho?",
        answers: ["yes", "no", "learning"],
        correctAnswer: "yes",
        responseToUserIfNoSelected:
          "Immerse yourself in the rich culture of Lesotho before your adventure.",
      },
      {
        question: "Have you booked accommodations for your stay in Lesotho?",
        answers: ["yes", "no", "still deciding"],
        correctAnswer: "yes",
        responseToUserIfNoSelected:
          "Ensure a comfortable stay by booking accommodations in advance.",
      },
      {
        question: "Do you have travel insurance for your Lesotho adventure?",
        answers: ["yes", "no", "considering"],
        correctAnswer: "yes",
        responseToUserIfNoSelected:
          "Travel confidently with insurance coverage for your journey through Lesotho.",
      },
      {
        question:
          "Have you planned your itinerary and researched key attractions in Lesotho?",
        answers: ["yes", "no", "in progress"],
        correctAnswer: "yes",
        responseToUserIfNoSelected:
          "Enhance your experience by planning your Lesotho itinerary.",
      },
      {
        question:
          "Are you familiar with Lesotho cuisine and excited to try local dishes?",
        answers: ["yes", "no", "excited to try"],
        correctAnswer: "yes",
        responseToUserIfNoSelected:
          "Savor the flavors of Lesotho by exploring local cuisine.",
      },
      {
        question:
          "Have you considered local currency and payment methods in Lesotho?",
        answers: ["yes", "no", "need more info"],
        correctAnswer: "yes",
        responseToUserIfNoSelected:
          "Be prepared for transactions with knowledge of local currency in Lesotho.",
      },
      {
        question: "Do you know basic Sesotho phrases for communication?",
        answers: ["yes", "no", "learning essentials"],
        correctAnswer: "yes",
        responseToUserIfNoSelected:
          "Learn a few Sesotho phrases to connect with locals during your Lesotho adventure.",
      },
      {
        question:
          "Have you checked travel advisories or restrictions for Lesotho?",
        answers: ["yes", "no", "planning to"],
        correctAnswer: "yes",
        responseToUserIfNoSelected:
          "Stay informed with travel advisories for a smooth Lesotho journey.",
      },
    ],
    high: "Congratulations on passing the quiz! You're well prepared for your journey to Lesotho. Enjoy the majestic 'Kingdom in the Sky'!",
    low: "It seems you might need to prepare a bit more for your Lesotho adventure. Review the questions and try again for better readiness.",
  },
  {
    route: "explore-eswatini-quiz",
    title: "Eswatini Enchantment Unveiled: Eswatini Edition!",
    description:
      "Embark on a quiz to ensure you're fully prepared for the enchanting beauty of Eswatini. Answer these questions to unveil your readiness for an unforgettable journey through picturesque landscapes, vibrant traditions, and the rich cultural tapestry of this Southern African gem.",
    questions: [
      {
        question: "Do you have a valid passport?",
        answers: ["yes", "no", "not sure"],
        correctAnswer: "yes",
        responseToUserIfNoSelected:
          "A valid passport is essential for your journey to Eswatini.",
      },
      {
        question:
          "Have you checked visa requirements and obtained the necessary travel documents for Eswatini?",
        answers: ["yes", "no", "in progress"],
        correctAnswer: "yes",
        responseToUserIfNoSelected:
          "Ensure you have the required travel documents for a smooth entry into Eswatini.",
      },
      {
        question: "Are you aware of local customs and traditions in Eswatini?",
        answers: ["yes", "no", "learning"],
        correctAnswer: "yes",
        responseToUserIfNoSelected:
          "Immerse yourself in the rich culture of Eswatini before your adventure.",
      },
      {
        question: "Have you booked accommodations for your stay in Eswatini?",
        answers: ["yes", "no", "still deciding"],
        correctAnswer: "yes",
        responseToUserIfNoSelected:
          "Ensure a comfortable stay by booking accommodations in advance.",
      },
      {
        question: "Do you have travel insurance for your Eswatini adventure?",
        answers: ["yes", "no", "considering"],
        correctAnswer: "yes",
        responseToUserIfNoSelected:
          "Travel confidently with insurance coverage for your journey through Eswatini.",
      },
      {
        question:
          "Have you planned your itinerary and researched key attractions in Eswatini?",
        answers: ["yes", "no", "in progress"],
        correctAnswer: "yes",
        responseToUserIfNoSelected:
          "Enhance your experience by planning your Eswatini itinerary.",
      },
      {
        question:
          "Are you familiar with Eswatini cuisine and excited to try local dishes?",
        answers: ["yes", "no", "excited to try"],
        correctAnswer: "yes",
        responseToUserIfNoSelected:
          "Savor the flavors of Eswatini by exploring local cuisine.",
      },
      {
        question:
          "Have you considered local currency and payment methods in Eswatini?",
        answers: ["yes", "no", "need more info"],
        correctAnswer: "yes",
        responseToUserIfNoSelected:
          "Be prepared for transactions with knowledge of local currency in Eswatini.",
      },
      {
        question: "Do you know basic siSwati phrases for communication?",
        answers: ["yes", "no", "learning essentials"],
        correctAnswer: "yes",
        responseToUserIfNoSelected:
          "Learn a few siSwati phrases to connect with locals during your Eswatini adventure.",
      },
      {
        question:
          "Have you checked travel advisories or restrictions for Eswatini?",
        answers: ["yes", "no", "planning to"],
        correctAnswer: "yes",
        responseToUserIfNoSelected:
          "Stay informed with travel advisories for a smooth Eswatini journey.",
      },
    ],
    high: "Congratulations on passing the quiz! You're well prepared for your journey to Eswatini. Enjoy the unique beauty and culture of this vibrant nation!",
    low: "It seems you might need to prepare a bit more for your Eswatini adventure. Review the questions and try again for better readiness.",
  },
  {
    route: "explore-malawi-quiz",
    title: "Malawi Magic Revealed: Malawi Edition!",
    description:
      "Embark on a quiz to ensure you're fully prepared for the enchanting beauty of Malawi. Answer these questions to unveil your readiness for an unforgettable journey through stunning landscapes, the shimmering Lake Malawi, and the warm-hearted culture of the 'Warm Heart of Africa.'",
    questions: [
      {
        question: "Do you have a valid passport?",
        answers: ["yes", "no", "not sure"],
        correctAnswer: "yes",
        responseToUserIfNoSelected:
          "A valid passport is essential for your journey to Malawi.",
      },
      {
        question:
          "Have you checked visa requirements and obtained the necessary travel documents for Malawi?",
        answers: ["yes", "no", "in progress"],
        correctAnswer: "yes",
        responseToUserIfNoSelected:
          "Ensure you have the required travel documents for a smooth entry into Malawi.",
      },
      {
        question: "Are you aware of local customs and traditions in Malawi?",
        answers: ["yes", "no", "learning"],
        correctAnswer: "yes",
        responseToUserIfNoSelected:
          "Immerse yourself in the rich culture of Malawi before your adventure.",
      },
      {
        question: "Have you booked accommodations for your stay in Malawi?",
        answers: ["yes", "no", "still deciding"],
        correctAnswer: "yes",
        responseToUserIfNoSelected:
          "Ensure a comfortable stay by booking accommodations in advance.",
      },
      {
        question: "Do you have travel insurance for your Malawian adventure?",
        answers: ["yes", "no", "considering"],
        correctAnswer: "yes",
        responseToUserIfNoSelected:
          "Travel confidently with insurance coverage for your journey through Malawi.",
      },
      {
        question:
          "Have you planned your itinerary and researched key attractions in Malawi?",
        answers: ["yes", "no", "in progress"],
        correctAnswer: "yes",
        responseToUserIfNoSelected:
          "Enhance your experience by planning your Malawian itinerary.",
      },
      {
        question:
          "Are you familiar with Malawian cuisine and excited to try local dishes?",
        answers: ["yes", "no", "excited to try"],
        correctAnswer: "yes",
        responseToUserIfNoSelected:
          "Savor the flavors of Malawi by exploring local cuisine.",
      },
      {
        question:
          "Have you considered local currency and payment methods in Malawi?",
        answers: ["yes", "no", "need more info"],
        correctAnswer: "yes",
        responseToUserIfNoSelected:
          "Be prepared for transactions with knowledge of local currency in Malawi.",
      },
      {
        question: "Do you know basic Malawian phrases for communication?",
        answers: ["yes", "no", "learning essentials"],
        correctAnswer: "yes",
        responseToUserIfNoSelected:
          "Learn a few Malawian phrases to connect with locals during your Malawian adventure.",
      },
      {
        question:
          "Have you checked travel advisories or restrictions for Malawi?",
        answers: ["yes", "no", "planning to"],
        correctAnswer: "yes",
        responseToUserIfNoSelected:
          "Stay informed with travel advisories for a smooth Malawian journey.",
      },
    ],
    high: "Congratulations on passing the quiz! You're well prepared for your journey to Malawi. Dive into the beauty and warmth of the 'Warm Heart of Africa' with confidence and excitement!",
    low: "It looks like there's more preparation needed for your Malawi trip. Revisit the questions and ensure you're ready for a rich and enjoyable Malawian experience.",
  },
  {
    route: "explore-bhutan-quiz",
    title: "Bhutan Bliss Uncovered: Bhutan Edition!",
    description:
      "Embark on a quiz to ensure you're fully prepared for the serene beauty of Bhutan. Answer these questions to unveil your readiness for an unforgettable journey through the mystical landscapes, ancient traditions, and the happiness-infused culture of the Himalayan Kingdom.",
    questions: [
      {
        question: "Do you have a valid passport?",
        answers: ["yes", "no", "not sure"],
        correctAnswer: "yes",
        responseToUserIfNoSelected:
          "A valid passport is essential for your journey to Bhutan.",
      },
      {
        question:
          "Have you checked visa requirements and obtained the necessary travel documents for Bhutan?",
        answers: ["yes", "no", "in progress"],
        correctAnswer: "yes",
        responseToUserIfNoSelected:
          "Ensure you have the required travel documents for a smooth entry into Bhutan.",
      },
      {
        question: "Are you aware of local customs and traditions in Bhutan?",
        answers: ["yes", "no", "learning"],
        correctAnswer: "yes",
        responseToUserIfNoSelected:
          "Immerse yourself in the rich culture of Bhutan before your adventure.",
      },
      {
        question: "Have you booked accommodations for your stay in Bhutan?",
        answers: ["yes", "no", "still deciding"],
        correctAnswer: "yes",
        responseToUserIfNoSelected:
          "Ensure a comfortable stay by booking accommodations in advance.",
      },
      {
        question: "Do you have travel insurance for your Bhutanese adventure?",
        answers: ["yes", "no", "considering"],
        correctAnswer: "yes",
        responseToUserIfNoSelected:
          "Travel confidently with insurance coverage for your journey through Bhutan.",
      },
      {
        question:
          "Have you planned your itinerary and researched key attractions in Bhutan?",
        answers: ["yes", "no", "in progress"],
        correctAnswer: "yes",
        responseToUserIfNoSelected:
          "Enhance your experience by planning your Bhutanese itinerary.",
      },
      {
        question:
          "Are you familiar with Bhutanese cuisine and excited to try local dishes?",
        answers: ["yes", "no", "excited to try"],
        correctAnswer: "yes",
        responseToUserIfNoSelected:
          "Savor the flavors of Bhutan by exploring local cuisine.",
      },
      {
        question:
          "Have you considered local currency and payment methods in Bhutan?",
        answers: ["yes", "no", "need more info"],
        correctAnswer: "yes",
        responseToUserIfNoSelected:
          "Be prepared for transactions with knowledge of local currency in Bhutan.",
      },
      {
        question: "Do you know basic Bhutanese phrases for communication?",
        answers: ["yes", "no", "learning essentials"],
        correctAnswer: "yes",
        responseToUserIfNoSelected:
          "Learn a few Bhutanese phrases to connect with locals during your Bhutanese adventure.",
      },
      {
        question:
          "Have you checked travel advisories or restrictions for Bhutan?",
        answers: ["yes", "no", "planning to"],
        correctAnswer: "yes",
        responseToUserIfNoSelected:
          "Stay informed with travel advisories for a smooth Bhutanese journey.",
      },
    ],
    high: "Congratulations on passing the quiz! You're well prepared for your journey to Bhutan. Embrace the tranquility and cultural richness of the Himalayan Kingdom with excitement and peace of mind!",
    low: "It looks like there's more preparation needed for your trip to Bhutan. Revisit the questions and ensure you're ready to fully enjoy the serene and happiness-infused culture of this beautiful Himalayan Kingdom.",
  },
  {
    route: "explore-papua-new-guinea-quiz",
    title: "Papua Paradise Unveiled: Papua New Guinea Edition!",
    description:
      "Embark on a quiz to ensure you're fully prepared for the extraordinary beauty of Papua New Guinea. Answer these questions to unveil your readiness for an unforgettable journey through diverse landscapes, vibrant cultures, and the fascinating biodiversity of the Pacific's hidden gem.",
    questions: [
      {
        question: "Do you have a valid passport?",
        answers: ["yes", "no", "not sure"],
        correctAnswer: "yes",
        responseToUserIfNoSelected:
          "A valid passport is essential for your journey to Papua New Guinea.",
      },
      {
        question:
          "Have you checked visa requirements and obtained the necessary travel documents for Papua New Guinea?",
        answers: ["yes", "no", "in progress"],
        correctAnswer: "yes",
        responseToUserIfNoSelected:
          "Ensure you have the required travel documents for a smooth entry into Papua New Guinea.",
      },
      {
        question:
          "Are you aware of local customs and traditions in Papua New Guinea?",
        answers: ["yes", "no", "learning"],
        correctAnswer: "yes",
        responseToUserIfNoSelected:
          "Immerse yourself in the rich culture of Papua New Guinea before your adventure.",
      },
      {
        question:
          "Have you booked accommodations for your stay in Papua New Guinea?",
        answers: ["yes", "no", "still deciding"],
        correctAnswer: "yes",
        responseToUserIfNoSelected:
          "Ensure a comfortable stay by booking accommodations in advance.",
      },
      {
        question:
          "Do you have travel insurance for your Papua New Guinean adventure?",
        answers: ["yes", "no", "considering"],
        correctAnswer: "yes",
        responseToUserIfNoSelected:
          "Travel confidently with insurance coverage for your journey through Papua New Guinea.",
      },
      {
        question:
          "Have you planned your itinerary and researched key attractions in Papua New Guinea?",
        answers: ["yes", "no", "in progress"],
        correctAnswer: "yes",
        responseToUserIfNoSelected:
          "Enhance your experience by planning your Papua New Guinean itinerary.",
      },
      {
        question:
          "Are you familiar with Papua New Guinean cuisine and excited to try local dishes?",
        answers: ["yes", "no", "excited to try"],
        correctAnswer: "yes",
        responseToUserIfNoSelected:
          "Savor the flavors of Papua New Guinea by exploring local cuisine.",
      },
      {
        question:
          "Have you considered local currency and payment methods in Papua New Guinea?",
        answers: ["yes", "no", "need more info"],
        correctAnswer: "yes",
        responseToUserIfNoSelected:
          "Be prepared for transactions with knowledge of local currency in Papua New Guinea.",
      },
      {
        question:
          "Do you know basic Papua New Guinean phrases for communication?",
        answers: ["yes", "no", "learning essentials"],
        correctAnswer: "yes",
        responseToUserIfNoSelected:
          "Learn a few Papua New Guinean phrases to connect with locals during your Papua New Guinean adventure.",
      },
      {
        question:
          "Have you checked travel advisories or restrictions for Papua New Guinea?",
        answers: ["yes", "no", "planning to"],
        correctAnswer: "yes",
        responseToUserIfNoSelected:
          "Stay informed with travel advisories for a smooth Papua New Guinean journey.",
      },
    ],
    high: "Fantastic! You're well-prepared for your adventure to Papua New Guinea. Dive into the stunning diversity, culture, and natural beauty that awaits you in this unique Pacific paradise.",
    low: "It seems there are a few areas to brush up on before your trip to Papua New Guinea. Make sure to revisit these questions and prepare thoroughly to enjoy everything this vibrant and diverse country has to offer.",
  },
  {
    route: "explore-solomon-islands-quiz",
    title: "Island Mystique Unveiled: Solomon Islands Edition!",
    description:
      "Embark on a quiz to ensure you're fully prepared for the enchanting beauty of the Solomon Islands. Answer these questions to unveil your readiness for an unforgettable journey through pristine waters, lush rainforests, and the diverse cultures of this South Pacific archipelago.",
    questions: [
      {
        question: "Do you have a valid passport?",
        answers: ["yes", "no", "not sure"],
        correctAnswer: "yes",
        responseToUserIfNoSelected:
          "A valid passport is essential for your journey to the Solomon Islands.",
      },
      {
        question:
          "Have you checked visa requirements and obtained the necessary travel documents for the Solomon Islands?",
        answers: ["yes", "no", "in progress"],
        correctAnswer: "yes",
        responseToUserIfNoSelected:
          "Ensure you have the required travel documents for a smooth entry into the Solomon Islands.",
      },
      {
        question:
          "Are you aware of local customs and traditions in the Solomon Islands?",
        answers: ["yes", "no", "learning"],
        correctAnswer: "yes",
        responseToUserIfNoSelected:
          "Immerse yourself in the rich culture of the Solomon Islands before your adventure.",
      },
      {
        question:
          "Have you booked accommodations for your stay in the Solomon Islands?",
        answers: ["yes", "no", "still deciding"],
        correctAnswer: "yes",
        responseToUserIfNoSelected:
          "Ensure a comfortable stay by booking accommodations in advance.",
      },
      {
        question:
          "Do you have travel insurance for your Solomon Islander adventure?",
        answers: ["yes", "no", "considering"],
        correctAnswer: "yes",
        responseToUserIfNoSelected:
          "Travel confidently with insurance coverage for your journey through the Solomon Islands.",
      },
      {
        question:
          "Have you planned your itinerary and researched key attractions in the Solomon Islands?",
        answers: ["yes", "no", "in progress"],
        correctAnswer: "yes",
        responseToUserIfNoSelected:
          "Enhance your experience by planning your Solomon Islander itinerary.",
      },
      {
        question:
          "Are you familiar with Solomon Islander cuisine and excited to try local dishes?",
        answers: ["yes", "no", "excited to try"],
        correctAnswer: "yes",
        responseToUserIfNoSelected:
          "Savor the flavors of the Solomon Islands by exploring local cuisine.",
      },
      {
        question:
          "Have you considered local currency and payment methods in the Solomon Islands?",
        answers: ["yes", "no", "need more info"],
        correctAnswer: "yes",
        responseToUserIfNoSelected:
          "Be prepared for transactions with knowledge of local currency in the Solomon Islands.",
      },
      {
        question:
          "Do you know basic Solomon Islander phrases for communication?",
        answers: ["yes", "no", "learning essentials"],
        correctAnswer: "yes",
        responseToUserIfNoSelected:
          "Learn a few Solomon Islander phrases to connect with locals during your Solomon Islander adventure.",
      },
      {
        question:
          "Have you checked travel advisories or restrictions for the Solomon Islands?",
        answers: ["yes", "no", "planning to"],
        correctAnswer: "yes",
        responseToUserIfNoSelected:
          "Stay informed with travel advisories for a smooth Solomon Islander journey.",
      },
    ],
    high: "Congratulations! You're well-prepared for your journey to the Solomon Islands. Your knowledge and preparation will surely make your trip more enjoyable and immersive in the rich natural and cultural tapestry of the islands.",
    low: "It looks like there are a few areas you might need to look into before setting off on your Solomon Islands adventure. Ensuring you're well-prepared will help you fully enjoy the beauty and culture of this unique destination.",
  },
  {
    route: "explore-vanuatu-quiz",
    title: "Vanuatu Vibes Unleashed: Vanuatu Edition!",
    description:
      "Embark on a quiz to ensure you're fully prepared for the mesmerizing beauty of Vanuatu. Answer these questions to unveil your readiness for an unforgettable journey through vibrant cultures, volcanic landscapes, and the tropical paradise of the South Pacific archipelago.",
    questions: [
      {
        question: "Do you have a valid passport?",
        answers: ["yes", "no", "not sure"],
        correctAnswer: "yes",
        responseToUserIfNoSelected:
          "A valid passport is essential for your journey to Vanuatu.",
      },
      {
        question:
          "Have you checked visa requirements and obtained the necessary travel documents for Vanuatu?",
        answers: ["yes", "no", "in progress"],
        correctAnswer: "yes",
        responseToUserIfNoSelected:
          "Ensure you have the required travel documents for a smooth entry into Vanuatu.",
      },
      {
        question: "Are you aware of local customs and traditions in Vanuatu?",
        answers: ["yes", "no", "learning"],
        correctAnswer: "yes",
        responseToUserIfNoSelected:
          "Immerse yourself in the rich culture of Vanuatu before your adventure.",
      },
      {
        question: "Have you booked accommodations for your stay in Vanuatu?",
        answers: ["yes", "no", "still deciding"],
        correctAnswer: "yes",
        responseToUserIfNoSelected:
          "Ensure a comfortable stay by booking accommodations in advance.",
      },
      {
        question: "Do you have travel insurance for your Vanuatuan adventure?",
        answers: ["yes", "no", "considering"],
        correctAnswer: "yes",
        responseToUserIfNoSelected:
          "Travel confidently with insurance coverage for your journey through Vanuatu.",
      },
      {
        question:
          "Have you planned your itinerary and researched key attractions in Vanuatu?",
        answers: ["yes", "no", "in progress"],
        correctAnswer: "yes",
        responseToUserIfNoSelected:
          "Enhance your experience by planning your Vanuatuan itinerary.",
      },
      {
        question:
          "Are you familiar with Vanuatuan cuisine and excited to try local dishes?",
        answers: ["yes", "no", "excited to try"],
        correctAnswer: "yes",
        responseToUserIfNoSelected:
          "Savor the flavors of Vanuatu by exploring local cuisine.",
      },
      {
        question:
          "Have you considered local currency and payment methods in Vanuatu?",
        answers: ["yes", "no", "need more info"],
        correctAnswer: "yes",
        responseToUserIfNoSelected:
          "Be prepared for transactions with knowledge of local currency in Vanuatu.",
      },
      {
        question: "Do you know basic Vanuatuan phrases for communication?",
        answers: ["yes", "no", "learning essentials"],
        correctAnswer: "yes",
        responseToUserIfNoSelected:
          "Learn a few Vanuatuan phrases to connect with locals during your Vanuatuan adventure.",
      },
      {
        question:
          "Have you checked travel advisories or restrictions for Vanuatu?",
        answers: ["yes", "no", "planning to"],
        correctAnswer: "yes",
        responseToUserIfNoSelected:
          "Stay informed with travel advisories for a smooth Vanuatuan journey.",
      },
    ],
    high: "Congratulations! You're well-prepared for your Vanuatu adventure. Your diligent preparation will enhance your experience, allowing you to fully immerse yourself in the unique culture, natural beauty, and vibrant life of Vanuatu.",
    low: "It seems there are some preparations yet to be made for your trip to Vanuatu. Taking the time to address these areas will ensure a smoother and more enjoyable experience as you explore the stunning landscapes and rich cultural tapestry of Vanuatu.",
  },
  {
    route: "explore-micronesia-quiz",
    title: "Micronesian Wonders Unveiled: Micronesia Edition!",
    description:
      "Embark on a quiz to ensure you're fully prepared for the awe-inspiring beauty of Micronesia. Answer these questions to unveil your readiness for an unforgettable journey through diverse islands, vibrant coral reefs, and the fascinating cultures of this Pacific paradise.",
    questions: [
      {
        question: "Do you have a valid passport?",
        answers: ["yes", "no", "not sure"],
        correctAnswer: "yes",
        responseToUserIfNoSelected:
          "A valid passport is essential for your journey to Micronesia.",
      },
      {
        question:
          "Have you checked visa requirements and obtained the necessary travel documents for Micronesia?",
        answers: ["yes", "no", "in progress"],
        correctAnswer: "yes",
        responseToUserIfNoSelected:
          "Ensure you have the required travel documents for a smooth entry into Micronesia.",
      },
      {
        question:
          "Are you aware of local customs and traditions in Micronesia?",
        answers: ["yes", "no", "learning"],
        correctAnswer: "yes",
        responseToUserIfNoSelected:
          "Immerse yourself in the rich culture of Micronesia before your adventure.",
      },
      {
        question: "Have you booked accommodations for your stay in Micronesia?",
        answers: ["yes", "no", "still deciding"],
        correctAnswer: "yes",
        responseToUserIfNoSelected:
          "Ensure a comfortable stay by booking accommodations in advance.",
      },
      {
        question:
          "Do you have travel insurance for your Micronesian adventure?",
        answers: ["yes", "no", "considering"],
        correctAnswer: "yes",
        responseToUserIfNoSelected:
          "Travel confidently with insurance coverage for your journey through Micronesia.",
      },
      {
        question:
          "Have you planned your itinerary and researched key attractions in Micronesia?",
        answers: ["yes", "no", "in progress"],
        correctAnswer: "yes",
        responseToUserIfNoSelected:
          "Enhance your experience by planning your Micronesian itinerary.",
      },
      {
        question:
          "Are you familiar with Micronesian cuisine and excited to try local dishes?",
        answers: ["yes", "no", "excited to try"],
        correctAnswer: "yes",
        responseToUserIfNoSelected:
          "Savor the flavors of Micronesia by exploring local cuisine.",
      },
      {
        question:
          "Have you considered local currency and payment methods in Micronesia?",
        answers: ["yes", "no", "need more info"],
        correctAnswer: "yes",
        responseToUserIfNoSelected:
          "Be prepared for transactions with knowledge of local currency in Micronesia.",
      },
      {
        question: "Do you know basic Micronesian phrases for communication?",
        answers: ["yes", "no", "learning essentials"],
        correctAnswer: "yes",
        responseToUserIfNoSelected:
          "Learn a few Micronesian phrases to connect with locals during your Micronesian adventure.",
      },
      {
        question:
          "Have you checked travel advisories or restrictions for Micronesia?",
        answers: ["yes", "no", "planning to"],
        correctAnswer: "yes",
        responseToUserIfNoSelected:
          "Stay informed with travel advisories for a smooth Micronesian journey.",
      },
    ],
    high: "Congratulations on passing the quiz! You're well-prepared for your Micronesian adventure.",
    low: "It seems you might need to prepare a bit more for your journey to Micronesia. Check the areas you missed and try again!",
  },
  {
    route: "explore-palau-quiz",
    title: "Paradise Found: Palau Edition!",
    description:
      "Embark on a quiz to ensure you're fully prepared for the enchanting beauty of Palau. Answer these questions to unveil your readiness for an unforgettable journey through pristine waters, lush landscapes, and the rich cultural tapestry of the Micronesian gem in the Pacific.",
    questions: [
      {
        question: "Do you have a valid passport?",
        answers: ["yes", "no", "not sure"],
        correctAnswer: "yes",
        responseToUserIfNoSelected:
          "A valid passport is essential for your journey to Palau.",
      },
      {
        question:
          "Have you checked visa requirements and obtained the necessary travel documents for Palau?",
        answers: ["yes", "no", "in progress"],
        correctAnswer: "yes",
        responseToUserIfNoSelected:
          "Ensure you have the required travel documents for a smooth entry into Palau.",
      },
      {
        question: "Are you aware of local customs and traditions in Palau?",
        answers: ["yes", "no", "learning"],
        correctAnswer: "yes",
        responseToUserIfNoSelected:
          "Immerse yourself in the rich culture of Palau before your adventure.",
      },
      {
        question: "Have you booked accommodations for your stay in Palau?",
        answers: ["yes", "no", "still deciding"],
        correctAnswer: "yes",
        responseToUserIfNoSelected:
          "Ensure a comfortable stay by booking accommodations in advance.",
      },
      {
        question: "Do you have travel insurance for your Palauan adventure?",
        answers: ["yes", "no", "considering"],
        correctAnswer: "yes",
        responseToUserIfNoSelected:
          "Travel confidently with insurance coverage for your journey through Palau.",
      },
      {
        question:
          "Have you planned your itinerary and researched key attractions in Palau?",
        answers: ["yes", "no", "in progress"],
        correctAnswer: "yes",
        responseToUserIfNoSelected:
          "Enhance your experience by planning your Palauan itinerary.",
      },
      {
        question:
          "Are you familiar with Palauan cuisine and excited to try local dishes?",
        answers: ["yes", "no", "excited to try"],
        correctAnswer: "yes",
        responseToUserIfNoSelected:
          "Savor the flavors of Palau by exploring local cuisine.",
      },
      {
        question:
          "Have you considered local currency and payment methods in Palau?",
        answers: ["yes", "no", "need more info"],
        correctAnswer: "yes",
        responseToUserIfNoSelected:
          "Be prepared for transactions with knowledge of local currency in Palau.",
      },
      {
        question: "Do you know basic Palauan phrases for communication?",
        answers: ["yes", "no", "learning essentials"],
        correctAnswer: "yes",
        responseToUserIfNoSelected:
          "Learn a few Palauan phrases to connect with locals during your Palauan adventure.",
      },
      {
        question:
          "Have you checked travel advisories or restrictions for Palau?",
        answers: ["yes", "no", "planning to"],
        correctAnswer: "yes",
        responseToUserIfNoSelected:
          "Stay informed with travel advisories for a smooth Palauan journey.",
      },
    ],
    high: "Congratulations on passing the quiz! You're well-prepared for your Palauan adventure.",
    low: "It seems you might need to prepare a bit more for your journey to Palau. Check the areas you missed and try again!",
  },
  {
    route: "explore-marshall-islands-quiz",
    title: "Pacific Paradise Quest: Marshall Islands Edition!",
    description:
      "Embark on a quiz to ensure you're fully prepared for the mesmerizing beauty of the Marshall Islands. Answer these questions to unveil your readiness for an unforgettable journey through azure lagoons, vibrant coral reefs, and the unique culture of Micronesia in the Pacific.",
    questions: [
      {
        question: "Do you have a valid passport?",
        answers: ["yes", "no", "not sure"],
        correctAnswer: "yes",
        responseToUserIfNoSelected:
          "A valid passport is essential for your journey to the Marshall Islands.",
      },
      {
        question:
          "Have you checked visa requirements and obtained the necessary travel documents for the Marshall Islands?",
        answers: ["yes", "no", "in progress"],
        correctAnswer: "yes",
        responseToUserIfNoSelected:
          "Ensure you have the required travel documents for a smooth entry into the Marshall Islands.",
      },
      {
        question:
          "Are you aware of local customs and traditions in the Marshall Islands?",
        answers: ["yes", "no", "learning"],
        correctAnswer: "yes",
        responseToUserIfNoSelected:
          "Immerse yourself in the rich culture of the Marshall Islands before your adventure.",
      },
      {
        question:
          "Have you booked accommodations for your stay in the Marshall Islands?",
        answers: ["yes", "no", "still deciding"],
        correctAnswer: "yes",
        responseToUserIfNoSelected:
          "Ensure a comfortable stay by booking accommodations in advance.",
      },
      {
        question:
          "Do you have travel insurance for your Marshallese adventure?",
        answers: ["yes", "no", "considering"],
        correctAnswer: "yes",
        responseToUserIfNoSelected:
          "Travel confidently with insurance coverage for your journey through the Marshall Islands.",
      },
      {
        question:
          "Have you planned your itinerary and researched key attractions in the Marshall Islands?",
        answers: ["yes", "no", "in progress"],
        correctAnswer: "yes",
        responseToUserIfNoSelected:
          "Enhance your experience by planning your Marshallese itinerary.",
      },
      {
        question:
          "Are you familiar with Marshallese cuisine and excited to try local dishes?",
        answers: ["yes", "no", "excited to try"],
        correctAnswer: "yes",
        responseToUserIfNoSelected:
          "Savor the flavors of the Marshall Islands by exploring local cuisine.",
      },
      {
        question:
          "Have you considered local currency and payment methods in the Marshall Islands?",
        answers: ["yes", "no", "need more info"],
        correctAnswer: "yes",
        responseToUserIfNoSelected:
          "Be prepared for transactions with knowledge of local currency in the Marshall Islands.",
      },
      {
        question: "Do you know basic Marshallese phrases for communication?",
        answers: ["yes", "no", "learning essentials"],
        correctAnswer: "yes",
        responseToUserIfNoSelected:
          "Learn a few Marshallese phrases to connect with locals during your Marshallese adventure.",
      },
      {
        question:
          "Have you checked travel advisories or restrictions for the Marshall Islands?",
        answers: ["yes", "no", "planning to"],
        correctAnswer: "yes",
        responseToUserIfNoSelected:
          "Stay informed with travel advisories for a smooth Marshallese journey.",
      },
    ],
    high: "Congratulations on passing the quiz! You're well-prepared for your journey to the Marshall Islands.",
    low: "It seems you might need to prepare a bit more for your journey to the Marshall Islands. Check the areas you missed and try again!",
  },
  {
    route: "explore-tuvalu-quiz",
    title: "Atoll Tranquility: Tuvalu Edition!",
    description:
      "Embark on a quiz to ensure you're fully prepared for the peaceful beauty of Tuvalu. Answer these questions to unveil your readiness for an unforgettable journey through coral atolls, turquoise lagoons, and the laid-back charm of the Pacific's least visited destination.",
    questions: [
      {
        question: "Do you have a valid passport?",
        answers: ["yes", "no", "not sure"],
        correctAnswer: "yes",
        responseToUserIfNoSelected:
          "A valid passport is essential for your journey to Tuvalu.",
      },
      {
        question:
          "Have you checked visa requirements and obtained the necessary travel documents for Tuvalu?",
        answers: ["yes", "no", "in progress"],
        correctAnswer: "yes",
        responseToUserIfNoSelected:
          "Ensure you have the required travel documents for a smooth entry into Tuvalu.",
      },
      {
        question: "Are you aware of local customs and traditions in Tuvalu?",
        answers: ["yes", "no", "learning"],
        correctAnswer: "yes",
        responseToUserIfNoSelected:
          "Immerse yourself in the rich culture of Tuvalu before your adventure.",
      },
      {
        question: "Have you booked accommodations for your stay in Tuvalu?",
        answers: ["yes", "no", "still deciding"],
        correctAnswer: "yes",
        responseToUserIfNoSelected:
          "Ensure a comfortable stay by booking accommodations in advance.",
      },
      {
        question: "Do you have travel insurance for your Tuvaluan adventure?",
        answers: ["yes", "no", "considering"],
        correctAnswer: "yes",
        responseToUserIfNoSelected:
          "Travel confidently with insurance coverage for your journey through Tuvalu.",
      },
      {
        question:
          "Have you planned your itinerary and researched key attractions in Tuvalu?",
        answers: ["yes", "no", "in progress"],
        correctAnswer: "yes",
        responseToUserIfNoSelected:
          "Enhance your experience by planning your Tuvaluan itinerary.",
      },
      {
        question:
          "Are you familiar with Tuvaluan cuisine and excited to try local dishes?",
        answers: ["yes", "no", "excited to try"],
        correctAnswer: "yes",
        responseToUserIfNoSelected:
          "Savor the flavors of Tuvalu by exploring local cuisine.",
      },
      {
        question:
          "Have you considered local currency and payment methods in Tuvalu?",
        answers: ["yes", "no", "need more info"],
        correctAnswer: "yes",
        responseToUserIfNoSelected:
          "Be prepared for transactions with knowledge of local currency in Tuvalu.",
      },
      {
        question: "Do you know basic Tuvaluan phrases for communication?",
        answers: ["yes", "no", "learning essentials"],
        correctAnswer: "yes",
        responseToUserIfNoSelected:
          "Learn a few Tuvaluan phrases to connect with locals during your Tuvaluan adventure.",
      },
      {
        question:
          "Have you checked travel advisories or restrictions for Tuvalu?",
        answers: ["yes", "no", "planning to"],
        correctAnswer: "yes",
        responseToUserIfNoSelected:
          "Stay informed with travel advisories for a smooth Tuvaluan journey.",
      },
    ],
    high: "Congratulations on passing the quiz! You're well-prepared for your journey to Tuvalu.",
    low: "It seems you might need to prepare a bit more for your journey to Tuvalu. Check the areas you missed and try again!",
  },
  {
    route: "explore-kiribati-quiz",
    title: "Seaside Serenity: Kiribati Edition!",
    description:
      "Embark on a quiz to ensure you're fully prepared for the tranquil beauty of Kiribati. Answer these questions to unveil your readiness for an unforgettable journey through coral atolls, turquoise lagoons, and the peaceful charm of the Central Pacific paradise.",
    questions: [
      {
        question: "Do you have a valid passport?",
        answers: ["yes", "no", "not sure"],
        correctAnswer: "yes",
        responseToUserIfNoSelected:
          "A valid passport is essential for your journey to Kiribati.",
      },
      {
        question:
          "Have you checked visa requirements and obtained the necessary travel documents for Kiribati?",
        answers: ["yes", "no", "in progress"],
        correctAnswer: "yes",
        responseToUserIfNoSelected:
          "Ensure you have the required travel documents for a smooth entry into Kiribati.",
      },
      {
        question: "Are you aware of local customs and traditions in Kiribati?",
        answers: ["yes", "no", "learning"],
        correctAnswer: "yes",
        responseToUserIfNoSelected:
          "Immerse yourself in the rich culture of Kiribati before your adventure.",
      },
      {
        question: "Have you booked accommodations for your stay in Kiribati?",
        answers: ["yes", "no", "still deciding"],
        correctAnswer: "yes",
        responseToUserIfNoSelected:
          "Ensure a comfortable stay by booking accommodations in advance.",
      },
      {
        question: "Do you have travel insurance for your Kiribatian adventure?",
        answers: ["yes", "no", "considering"],
        correctAnswer: "yes",
        responseToUserIfNoSelected:
          "Travel confidently with insurance coverage for your journey through Kiribati.",
      },
      {
        question:
          "Have you planned your itinerary and researched key attractions in Kiribati?",
        answers: ["yes", "no", "in progress"],
        correctAnswer: "yes",
        responseToUserIfNoSelected:
          "Enhance your experience by planning your Kiribatian itinerary.",
      },
      {
        question:
          "Are you familiar with Kiribatian cuisine and excited to try local dishes?",
        answers: ["yes", "no", "excited to try"],
        correctAnswer: "yes",
        responseToUserIfNoSelected:
          "Savor the flavors of Kiribati by exploring local cuisine.",
      },
      {
        question:
          "Have you considered local currency and payment methods in Kiribati?",
        answers: ["yes", "no", "need more info"],
        correctAnswer: "yes",
        responseToUserIfNoSelected:
          "Be prepared for transactions with knowledge of local currency in Kiribati.",
      },
      {
        question: "Do you know basic Kiribati phrases for communication?",
        answers: ["yes", "no", "learning essentials"],
        correctAnswer: "yes",
        responseToUserIfNoSelected:
          "Learn a few Kiribati phrases to connect with locals during your Kiribatian adventure.",
      },
      {
        question:
          "Have you checked travel advisories or restrictions for Kiribati?",
        answers: ["yes", "no", "planning to"],
        correctAnswer: "yes",
        responseToUserIfNoSelected:
          "Stay informed with travel advisories for a smooth Kiribatian journey.",
      },
    ],
    high: "Congratulations on passing the quiz! You're well-prepared for your journey to Kiribati.",
    low: "It seems you might need to prepare a bit more for your journey to Kiribati. Check the areas you missed and try again!",
  },
  {
    route: "explore-tonga-quiz",
    title: "Kingdom of Tranquility: Tonga Edition!",
    description:
      "Embark on a quiz to ensure you're fully prepared for the serene beauty of Tonga. Answer these questions to unveil your readiness for an unforgettable journey through pristine beaches, ancient culture, and the tranquil charm of the South Pacific kingdom.",
    questions: [
      {
        question: "Do you have a valid passport?",
        answers: ["yes", "no", "not sure"],
        correctAnswer: "yes",
        responseToUserIfNoSelected:
          "A valid passport is essential for your journey to Tonga.",
      },
      {
        question:
          "Have you checked visa requirements and obtained the necessary travel documents for Tonga?",
        answers: ["yes", "no", "in progress"],
        correctAnswer: "yes",
        responseToUserIfNoSelected:
          "Ensure you have the required travel documents for a smooth entry into Tonga.",
      },
      {
        question: "Are you aware of local customs and traditions in Tonga?",
        answers: ["yes", "no", "learning"],
        correctAnswer: "yes",
        responseToUserIfNoSelected:
          "Immerse yourself in the rich culture of Tonga before your adventure.",
      },
      {
        question: "Have you booked accommodations for your stay in Tonga?",
        answers: ["yes", "no", "still deciding"],
        correctAnswer: "yes",
        responseToUserIfNoSelected:
          "Ensure a comfortable stay by booking accommodations in advance.",
      },
      {
        question: "Do you have travel insurance for your Tongan adventure?",
        answers: ["yes", "no", "considering"],
        correctAnswer: "yes",
        responseToUserIfNoSelected:
          "Travel confidently with insurance coverage for your journey through Tonga.",
      },
      {
        question:
          "Have you planned your itinerary and researched key attractions in Tonga?",
        answers: ["yes", "no", "in progress"],
        correctAnswer: "yes",
        responseToUserIfNoSelected:
          "Enhance your experience by planning your Tongan itinerary.",
      },
      {
        question:
          "Are you familiar with Tongan cuisine and excited to try local dishes?",
        answers: ["yes", "no", "excited to try"],
        correctAnswer: "yes",
        responseToUserIfNoSelected:
          "Savor the flavors of Tonga by exploring local cuisine.",
      },
      {
        question:
          "Have you considered local currency and payment methods in Tonga?",
        answers: ["yes", "no", "need more info"],
        correctAnswer: "yes",
        responseToUserIfNoSelected:
          "Be prepared for transactions with knowledge of local currency in Tonga.",
      },
      {
        question: "Do you know basic Tongan phrases for communication?",
        answers: ["yes", "no", "learning essentials"],
        correctAnswer: "yes",
        responseToUserIfNoSelected:
          "Learn a few Tongan phrases to connect with locals during your Tongan adventure.",
      },
      {
        question:
          "Have you checked travel advisories or restrictions for Tonga?",
        answers: ["yes", "no", "planning to"],
        correctAnswer: "yes",
        responseToUserIfNoSelected:
          "Stay informed with travel advisories for a smooth Tongan journey.",
      },
    ],
    high: "Congratulations on passing the quiz! You're well-prepared for your journey to Tonga.",
    low: "It seems you might need to prepare a bit more for your journey to Tonga. Check the areas you missed and try again!",
  },
  {
    route: "explore-samoa-quiz",
    title: "Discover Pacific Paradise: Samoa Edition!",
    description:
      "Embark on a quiz to ensure you're fully prepared for the idyllic beauty of Samoa. Answer these questions to unveil your readiness for an unforgettable journey through lush landscapes, pristine beaches, and the authentic Polynesian culture of the South Pacific.",
    questions: [
      {
        question: "Do you have a valid passport?",
        answers: ["yes", "no", "not sure"],
        correctAnswer: "yes",
        responseToUserIfNoSelected:
          "A valid passport is essential for your journey to Samoa.",
      },
      {
        question:
          "Have you checked visa requirements and obtained the necessary travel documents for Samoa?",
        answers: ["yes", "no", "in progress"],
        correctAnswer: "yes",
        responseToUserIfNoSelected:
          "Ensure you have the required travel documents for a smooth entry into Samoa.",
      },
      {
        question: "Are you aware of local customs and traditions in Samoa?",
        answers: ["yes", "no", "learning"],
        correctAnswer: "yes",
        responseToUserIfNoSelected:
          "Immerse yourself in the rich culture of Samoa before your adventure.",
      },
      {
        question: "Have you booked accommodations for your stay in Samoa?",
        answers: ["yes", "no", "still deciding"],
        correctAnswer: "yes",
        responseToUserIfNoSelected:
          "Ensure a comfortable stay by booking accommodations in advance.",
      },
      {
        question: "Do you have travel insurance for your Samoan adventure?",
        answers: ["yes", "no", "considering"],
        correctAnswer: "yes",
        responseToUserIfNoSelected:
          "Travel confidently with insurance coverage for your journey through Samoa.",
      },
      {
        question:
          "Have you planned your itinerary and researched key attractions in Samoa?",
        answers: ["yes", "no", "in progress"],
        correctAnswer: "yes",
        responseToUserIfNoSelected:
          "Enhance your experience by planning your Samoan itinerary.",
      },
      {
        question:
          "Are you familiar with Samoan cuisine and excited to try local dishes?",
        answers: ["yes", "no", "excited to try"],
        correctAnswer: "yes",
        responseToUserIfNoSelected:
          "Savor the flavors of Samoa by exploring local cuisine.",
      },
      {
        question:
          "Have you considered local currency and payment methods in Samoa?",
        answers: ["yes", "no", "need more info"],
        correctAnswer: "yes",
        responseToUserIfNoSelected:
          "Be prepared for transactions with knowledge of local currency in Samoa.",
      },
      {
        question: "Do you know basic Samoan phrases for communication?",
        answers: ["yes", "no", "learning essentials"],
        correctAnswer: "yes",
        responseToUserIfNoSelected:
          "Learn a few Samoan phrases to connect with locals during your Samoan adventure.",
      },
      {
        question:
          "Have you checked travel advisories or restrictions for Samoa?",
        answers: ["yes", "no", "planning to"],
        correctAnswer: "yes",
        responseToUserIfNoSelected:
          "Stay informed with travel advisories for a smooth Samoan journey.",
      },
    ],
    high: "Congratulations on passing the quiz! You're well-prepared for your journey to Samoa.",
    low: "It seems you might need to prepare a bit more for your journey to Samoa. Check the areas you missed and try again!",
  },
  {
    route: "explore-fiji-quiz",
    title: "Island Bliss Awaits: Fiji Edition!",
    description:
      "Embark on a quiz to ensure you're fully prepared for the tropical paradise of Fiji. Answer these questions to unveil your readiness for an unforgettable journey through turquoise waters, palm-fringed beaches, and the warm hospitality of the South Pacific.",
    questions: [
      {
        question: "Do you have a valid passport?",
        answers: ["yes", "no", "not sure"],
        correctAnswer: "yes",
        responseToUserIfNoSelected:
          "A valid passport is essential for your journey to Fiji.",
      },
      {
        question:
          "Have you checked visa requirements and obtained the necessary travel documents for Fiji?",
        answers: ["yes", "no", "in progress"],
        correctAnswer: "yes",
        responseToUserIfNoSelected:
          "Ensure you have the required travel documents for a smooth entry into Fiji.",
      },
      {
        question: "Are you aware of local customs and traditions in Fiji?",
        answers: ["yes", "no", "learning"],
        correctAnswer: "yes",
        responseToUserIfNoSelected:
          "Immerse yourself in the rich culture of Fiji before your adventure.",
      },
      {
        question: "Have you booked accommodations for your stay in Fiji?",
        answers: ["yes", "no", "still deciding"],
        correctAnswer: "yes",
        responseToUserIfNoSelected:
          "Ensure a comfortable stay by booking accommodations in advance.",
      },
      {
        question: "Do you have travel insurance for your Fijian adventure?",
        answers: ["yes", "no", "considering"],
        correctAnswer: "yes",
        responseToUserIfNoSelected:
          "Travel confidently with insurance coverage for your journey through Fiji.",
      },
      {
        question:
          "Have you planned your itinerary and researched key attractions in Fiji?",
        answers: ["yes", "no", "in progress"],
        correctAnswer: "yes",
        responseToUserIfNoSelected:
          "Enhance your experience by planning your Fijian itinerary.",
      },
      {
        question:
          "Are you familiar with Fijian cuisine and excited to try local dishes?",
        answers: ["yes", "no", "excited to try"],
        correctAnswer: "yes",
        responseToUserIfNoSelected:
          "Savor the flavors of Fiji by exploring local cuisine.",
      },
      {
        question:
          "Have you considered local currency and payment methods in Fiji?",
        answers: ["yes", "no", "need more info"],
        correctAnswer: "yes",
        responseToUserIfNoSelected:
          "Be prepared for transactions with knowledge of local currency in Fiji.",
      },
      {
        question: "Do you know basic Fijian phrases for communication?",
        answers: ["yes", "no", "learning essentials"],
        correctAnswer: "yes",
        responseToUserIfNoSelected:
          "Learn a few Fijian phrases to connect with locals during your Fijian adventure.",
      },
      {
        question:
          "Have you checked travel advisories or restrictions for Fiji?",
        answers: ["yes", "no", "planning to"],
        correctAnswer: "yes",
        responseToUserIfNoSelected:
          "Stay informed with travel advisories for a smooth Fijian journey.",
      },
    ],
    high: "Congratulations on passing the quiz! You're well-prepared for your journey to Fiji.",
    low: "It seems you might need to prepare a bit more for your journey to Fiji. Check the areas you missed and try again!",
  },
  {
    route: "explore-maldives-quiz",
    title: "Dive into Paradise: Maldives Edition!",
    description:
      "Embark on a quiz to ensure you're fully prepared for the breathtaking beauty of the Maldives. Answer these questions to unveil your readiness for an unforgettable journey through crystal-clear waters, overwater bungalows, and the serene tranquility of the Indian Ocean.",
    questions: [
      {
        question: "Do you have a valid passport?",
        answers: ["yes", "no", "not sure"],
        correctAnswer: "yes",
        responseToUserIfNoSelected:
          "A valid passport is essential for your journey to the Maldives.",
      },
      {
        question:
          "Have you checked visa requirements and obtained the necessary travel documents for the Maldives?",
        answers: ["yes", "no", "in progress"],
        correctAnswer: "yes",
        responseToUserIfNoSelected:
          "Ensure you have the required travel documents for a smooth entry into the Maldives.",
      },
      {
        question:
          "Are you aware of local customs and traditions in the Maldives?",
        answers: ["yes", "no", "learning"],
        correctAnswer: "yes",
        responseToUserIfNoSelected:
          "Immerse yourself in the rich culture of the Maldives before your adventure.",
      },
      {
        question:
          "Have you booked accommodations for your stay in the Maldives?",
        answers: ["yes", "no", "still deciding"],
        correctAnswer: "yes",
        responseToUserIfNoSelected:
          "Ensure a comfortable stay by booking accommodations in advance.",
      },
      {
        question: "Do you have travel insurance for your Maldivian adventure?",
        answers: ["yes", "no", "considering"],
        correctAnswer: "yes",
        responseToUserIfNoSelected:
          "Travel confidently with insurance coverage for your journey through the Maldives.",
      },
      {
        question:
          "Have you planned your itinerary and researched key attractions in the Maldives?",
        answers: ["yes", "no", "in progress"],
        correctAnswer: "yes",
        responseToUserIfNoSelected:
          "Enhance your experience by planning your Maldivian itinerary.",
      },
      {
        question:
          "Are you familiar with Maldivian cuisine and excited to try local dishes?",
        answers: ["yes", "no", "excited to try"],
        correctAnswer: "yes",
        responseToUserIfNoSelected:
          "Savor the flavors of the Maldives by exploring local cuisine.",
      },
      {
        question:
          "Have you considered local currency and payment methods in the Maldives?",
        answers: ["yes", "no", "need more info"],
        correctAnswer: "yes",
        responseToUserIfNoSelected:
          "Be prepared for transactions with knowledge of local currency in the Maldives.",
      },
      {
        question: "Do you know basic Dhivehi phrases for communication?",
        answers: ["yes", "no", "learning essentials"],
        correctAnswer: "yes",
        responseToUserIfNoSelected:
          "Learn a few Dhivehi phrases to connect with locals during your Maldivian adventure.",
      },
      {
        question:
          "Have you checked travel advisories or restrictions for the Maldives?",
        answers: ["yes", "no", "planning to"],
        correctAnswer: "yes",
        responseToUserIfNoSelected:
          "Stay informed with travel advisories for a smooth Maldivian journey.",
      },
    ],
    high: "Congratulations on passing the quiz! You're well-prepared for your journey to the Maldives.",
    low: "It seems you might need to prepare a bit more for your journey to the Maldives. Check the areas you missed and try again!",
  },
  {
    route: "explore-seychelles-quiz",
    title: "Savor Paradise: Seychelles Edition!",
    description:
      "Embark on a quiz to ensure you're fully prepared for the tropical delights of Seychelles. Answer these questions to unveil your readiness for an unforgettable journey through pristine beaches, vibrant coral reefs, and the luxurious charm of the Indian Ocean.",
    questions: [
      {
        question: "Do you have a valid passport?",
        answers: ["yes", "no", "not sure"],
        correctAnswer: "yes",
        responseToUserIfNoSelected:
          "A valid passport is essential for your journey to Seychelles.",
      },
      {
        question:
          "Have you checked visa requirements and obtained the necessary travel documents for Seychelles?",
        answers: ["yes", "no", "in progress"],
        correctAnswer: "yes",
        responseToUserIfNoSelected:
          "Ensure you have the required travel documents for a smooth entry into Seychelles.",
      },
      {
        question:
          "Are you aware of local customs and traditions in Seychelles?",
        answers: ["yes", "no", "learning"],
        correctAnswer: "yes",
        responseToUserIfNoSelected:
          "Immerse yourself in the rich culture of Seychelles before your adventure.",
      },
      {
        question: "Have you booked accommodations for your stay in Seychelles?",
        answers: ["yes", "no", "still deciding"],
        correctAnswer: "yes",
        responseToUserIfNoSelected:
          "Ensure a comfortable stay by booking accommodations in advance.",
      },
      {
        question:
          "Do you have travel insurance for your Seychellois adventure?",
        answers: ["yes", "no", "considering"],
        correctAnswer: "yes",
        responseToUserIfNoSelected:
          "Travel confidently with insurance coverage for your journey through Seychelles.",
      },
      {
        question:
          "Have you planned your itinerary and researched key attractions in Seychelles?",
        answers: ["yes", "no", "in progress"],
        correctAnswer: "yes",
        responseToUserIfNoSelected:
          "Enhance your experience by planning your Seychellois itinerary.",
      },
      {
        question:
          "Are you familiar with Seychellois cuisine and excited to try local dishes?",
        answers: ["yes", "no", "excited to try"],
        correctAnswer: "yes",
        responseToUserIfNoSelected:
          "Savor the flavors of Seychelles by exploring local cuisine.",
      },
      {
        question:
          "Have you considered local currency and payment methods in Seychelles?",
        answers: ["yes", "no", "need more info"],
        correctAnswer: "yes",
        responseToUserIfNoSelected:
          "Be prepared for transactions with knowledge of local currency in Seychelles.",
      },
      {
        question:
          "Do you know basic Seychellois Creole phrases for communication?",
        answers: ["yes", "no", "learning essentials"],
        correctAnswer: "yes",
        responseToUserIfNoSelected:
          "Learn a few Seychellois Creole phrases to connect with locals during your Seychellois adventure.",
      },
      {
        question:
          "Have you checked travel advisories or restrictions for Seychelles?",
        answers: ["yes", "no", "planning to"],
        correctAnswer: "yes",
        responseToUserIfNoSelected:
          "Stay informed with travel advisories for a smooth Seychellois journey.",
      },
    ],
    high: "Congratulations on passing the quiz! You're well-prepared for your journey to Seychelles.",
    low: "It seems you might need to prepare a bit more for your journey to Seychelles. Check the areas you missed and try again!",
  },
  {
    route: "explore-madagascar-quiz",
    title: "Embark on a Wild Adventure in Madagascar!",
    description:
      "Embark on a quiz to ensure you're fully prepared for the untamed wonders of Madagascar. Answer these questions to unveil your readiness for an unforgettable journey through unique wildlife, diverse landscapes, and the exotic charm of the Indian Ocean.",
    questions: [
      {
        question: "Do you have a valid passport?",
        answers: ["yes", "no", "not sure"],
        correctAnswer: "yes",
        responseToUserIfNoSelected:
          "A valid passport is essential for your journey to Madagascar.",
      },
      {
        question:
          "Have you checked visa requirements and obtained the necessary travel documents for Madagascar?",
        answers: ["yes", "no", "in progress"],
        correctAnswer: "yes",
        responseToUserIfNoSelected:
          "Ensure you have the required travel documents for a smooth entry into Madagascar.",
      },
      {
        question:
          "Are you aware of local customs and traditions in Madagascar?",
        answers: ["yes", "no", "learning"],
        correctAnswer: "yes",
        responseToUserIfNoSelected:
          "Immerse yourself in the rich culture of Madagascar before your adventure.",
      },
      {
        question: "Have you booked accommodations for your stay in Madagascar?",
        answers: ["yes", "no", "still deciding"],
        correctAnswer: "yes",
        responseToUserIfNoSelected:
          "Ensure a comfortable stay by booking accommodations in advance.",
      },
      {
        question: "Do you have travel insurance for your Madagascan adventure?",
        answers: ["yes", "no", "considering"],
        correctAnswer: "yes",
        responseToUserIfNoSelected:
          "Travel confidently with insurance coverage for your journey through Madagascar.",
      },
      {
        question:
          "Have you planned your itinerary and researched key attractions in Madagascar?",
        answers: ["yes", "no", "in progress"],
        correctAnswer: "yes",
        responseToUserIfNoSelected:
          "Enhance your experience by planning your Madagascan itinerary.",
      },
      {
        question:
          "Are you familiar with Madagascan cuisine and excited to try local dishes?",
        answers: ["yes", "no", "excited to try"],
        correctAnswer: "yes",
        responseToUserIfNoSelected:
          "Savor the flavors of Madagascar by exploring local cuisine.",
      },
      {
        question:
          "Have you considered local currency and payment methods in Madagascar?",
        answers: ["yes", "no", "need more info"],
        correctAnswer: "yes",
        responseToUserIfNoSelected:
          "Be prepared for transactions with knowledge of local currency in Madagascar.",
      },
      {
        question: "Do you know basic Malagasy phrases for communication?",
        answers: ["yes", "no", "learning essentials"],
        correctAnswer: "yes",
        responseToUserIfNoSelected:
          "Learn a few Malagasy phrases to connect with locals during your Madagascan adventure.",
      },
      {
        question:
          "Have you checked travel advisories or restrictions for Madagascar?",
        answers: ["yes", "no", "planning to"],
        correctAnswer: "yes",
        responseToUserIfNoSelected:
          "Stay informed with travel advisories for a smooth Madagascan journey.",
      },
    ],
    high: "Congratulations on passing the quiz! You're well-prepared for your journey to Madagascar.",
    low: "It seems you might need to prepare a bit more for your journey to Madagascar. Check the areas you missed and try again!",
  },
  {
    route: "explore-rwanda-quiz",
    title: "Embark on a Cultural Odyssey in Rwanda!",
    description:
      "Embark on a quiz to ensure you're fully prepared for the enriching wonders of Rwanda. Answer these questions to unveil your readiness for an unforgettable journey through lush landscapes, diverse wildlife, and the vibrant culture of East Africa.",
    questions: [
      {
        question: "Do you have a valid passport?",
        answers: ["yes", "no", "not sure"],
        correctAnswer: "yes",
        responseToUserIfNoSelected:
          "A valid passport is essential for your journey to Rwanda.",
      },
      {
        question:
          "Have you checked visa requirements and obtained the necessary travel documents for Rwanda?",
        answers: ["yes", "no", "in progress"],
        correctAnswer: "yes",
        responseToUserIfNoSelected:
          "Ensure you have the required travel documents for a smooth entry into Rwanda.",
      },
      {
        question: "Are you aware of local customs and traditions in Rwanda?",
        answers: ["yes", "no", "learning"],
        correctAnswer: "yes",
        responseToUserIfNoSelected:
          "Immerse yourself in the rich culture of Rwanda before your adventure.",
      },
      {
        question: "Have you booked accommodations for your stay in Rwanda?",
        answers: ["yes", "no", "still deciding"],
        correctAnswer: "yes",
        responseToUserIfNoSelected:
          "Ensure a comfortable stay by booking accommodations in advance.",
      },
      {
        question: "Do you have travel insurance for your Rwandan adventure?",
        answers: ["yes", "no", "considering"],
        correctAnswer: "yes",
        responseToUserIfNoSelected:
          "Travel confidently with insurance coverage for your journey through Rwanda.",
      },
      {
        question:
          "Have you planned your itinerary and researched key attractions in Rwanda?",
        answers: ["yes", "no", "in progress"],
        correctAnswer: "yes",
        responseToUserIfNoSelected:
          "Enhance your experience by planning your Rwandan itinerary.",
      },
      {
        question:
          "Are you familiar with Rwandan cuisine and excited to try local dishes?",
        answers: ["yes", "no", "excited to try"],
        correctAnswer: "yes",
        responseToUserIfNoSelected:
          "Savor the flavors of Rwanda by exploring local cuisine.",
      },
      {
        question:
          "Have you considered local currency and payment methods in Rwanda?",
        answers: ["yes", "no", "need more info"],
        correctAnswer: "yes",
        responseToUserIfNoSelected:
          "Be prepared for transactions with knowledge of local currency in Rwanda.",
      },
      {
        question: "Do you know basic Kinyarwanda phrases for communication?",
        answers: ["yes", "no", "learning essentials"],
        correctAnswer: "yes",
        responseToUserIfNoSelected:
          "Learn a few Kinyarwanda phrases to connect with locals during your Rwandan adventure.",
      },
      {
        question:
          "Have you checked travel advisories or restrictions for Rwanda?",
        answers: ["yes", "no", "planning to"],
        correctAnswer: "yes",
        responseToUserIfNoSelected:
          "Stay informed with travel advisories for a smooth Rwandan journey.",
      },
    ],
    high: "Congratulations on passing the quiz! You're well-prepared for your journey to Rwanda.",
    low: "It seems you might need to prepare a bit more for your journey to Rwanda. Check the areas you missed and try again!",
  },
  {
    route: "explore-zimbabwe-quiz",
    title: "Discover the Majesty of Zimbabwe!",
    description:
      "Embark on a quiz to ensure you're fully prepared for the majestic wonders of Zimbabwe. Answer these questions to unveil your readiness for an unforgettable journey through iconic landscapes, rich wildlife, and the vibrant culture of Southern Africa.",
    questions: [
      {
        question: "Do you have a valid passport?",
        answers: ["yes", "no", "not sure"],
        correctAnswer: "yes",
        responseToUserIfNoSelected:
          "A valid passport is essential for your journey to Zimbabwe.",
      },
      {
        question:
          "Have you checked visa requirements and obtained the necessary travel documents for Zimbabwe?",
        answers: ["yes", "no", "in progress"],
        correctAnswer: "yes",
        responseToUserIfNoSelected:
          "Ensure you have the required travel documents for a smooth entry into Zimbabwe.",
      },
      {
        question: "Are you aware of local customs and traditions in Zimbabwe?",
        answers: ["yes", "no", "learning"],
        correctAnswer: "yes",
        responseToUserIfNoSelected:
          "Immerse yourself in the rich culture of Zimbabwe before your adventure.",
      },
      {
        question: "Have you booked accommodations for your stay in Zimbabwe?",
        answers: ["yes", "no", "still deciding"],
        correctAnswer: "yes",
        responseToUserIfNoSelected:
          "Ensure a comfortable stay by booking accommodations in advance.",
      },
      {
        question: "Do you have travel insurance for your Zimbabwean adventure?",
        answers: ["yes", "no", "considering"],
        correctAnswer: "yes",
        responseToUserIfNoSelected:
          "Travel confidently with insurance coverage for your journey through Zimbabwe.",
      },
      {
        question:
          "Have you planned your itinerary and researched key attractions in Zimbabwe?",
        answers: ["yes", "no", "in progress"],
        correctAnswer: "yes",
        responseToUserIfNoSelected:
          "Enhance your experience by planning your Zimbabwean itinerary.",
      },
      {
        question:
          "Are you familiar with Zimbabwean cuisine and excited to try local dishes?",
        answers: ["yes", "no", "excited to try"],
        correctAnswer: "yes",
        responseToUserIfNoSelected:
          "Savor the flavors of Zimbabwe by exploring local cuisine.",
      },
      {
        question:
          "Have you considered local currency and payment methods in Zimbabwe?",
        answers: ["yes", "no", "need more info"],
        correctAnswer: "yes",
        responseToUserIfNoSelected:
          "Be prepared for transactions with knowledge of local currency in Zimbabwe.",
      },
      {
        question: "Do you know basic Shona phrases for communication?",
        answers: ["yes", "no", "learning essentials"],
        correctAnswer: "yes",
        responseToUserIfNoSelected:
          "Learn a few Shona phrases to connect with locals during your Zimbabwean adventure.",
      },
      {
        question:
          "Have you checked travel advisories or restrictions for Zimbabwe?",
        answers: ["yes", "no", "planning to"],
        correctAnswer: "yes",
        responseToUserIfNoSelected:
          "Stay informed with travel advisories for a smooth Zimbabwean journey.",
      },
    ],
    high: "Congratulations on passing the quiz! You're well-prepared for your journey to Zimbabwe.",
    low: "It seems you might need to prepare a bit more for your journey to Zimbabwe. Check the areas you missed and try again!",
  },
  {
    route: "explore-namibia-quiz",
    title: "Unearth the Wonders of Namibia!",
    description:
      "Embark on a quiz to ensure you're fully prepared for the awe-inspiring wonders of Namibia. Answer these questions to unveil your readiness for an unforgettable journey through vast deserts, stunning landscapes, and the unique culture of Southern Africa.",
    questions: [
      {
        question: "Do you have a valid passport?",
        answers: ["yes", "no", "not sure"],
        correctAnswer: "yes",
        responseToUserIfNoSelected:
          "A valid passport is essential for your journey to Namibia.",
      },
      {
        question:
          "Have you checked visa requirements and obtained the necessary travel documents for Namibia?",
        answers: ["yes", "no", "in progress"],
        correctAnswer: "yes",
        responseToUserIfNoSelected:
          "Ensure you have the required travel documents for a smooth entry into Namibia.",
      },
      {
        question: "Are you aware of local customs and traditions in Namibia?",
        answers: ["yes", "no", "learning"],
        correctAnswer: "yes",
        responseToUserIfNoSelected:
          "Immerse yourself in the rich culture of Namibia before your adventure.",
      },
      {
        question: "Have you booked accommodations for your stay in Namibia?",
        answers: ["yes", "no", "still deciding"],
        correctAnswer: "yes",
        responseToUserIfNoSelected:
          "Ensure a comfortable stay by booking accommodations in advance.",
      },
      {
        question: "Do you have travel insurance for your Namibian adventure?",
        answers: ["yes", "no", "considering"],
        correctAnswer: "yes",
        responseToUserIfNoSelected:
          "Travel confidently with insurance coverage for your journey through Namibia.",
      },
      {
        question:
          "Have you planned your itinerary and researched key attractions in Namibia?",
        answers: ["yes", "no", "in progress"],
        correctAnswer: "yes",
        responseToUserIfNoSelected:
          "Enhance your experience by planning your Namibian itinerary.",
      },
      {
        question:
          "Are you familiar with Namibian cuisine and excited to try local dishes?",
        answers: ["yes", "no", "excited to try"],
        correctAnswer: "yes",
        responseToUserIfNoSelected:
          "Savor the flavors of Namibia by exploring local cuisine.",
      },
      {
        question:
          "Have you considered local currency and payment methods in Namibia?",
        answers: ["yes", "no", "need more info"],
        correctAnswer: "yes",
        responseToUserIfNoSelected:
          "Be prepared for transactions with knowledge of local currency in Namibia.",
      },
      {
        question: "Do you know basic Namibian phrases for communication?",
        answers: ["yes", "no", "learning essentials"],
        correctAnswer: "yes",
        responseToUserIfNoSelected:
          "Learn a few Namibian phrases to connect with locals during your Namibian adventure.",
      },
      {
        question:
          "Have you checked travel advisories or restrictions for Namibia?",
        answers: ["yes", "no", "planning to"],
        correctAnswer: "yes",
        responseToUserIfNoSelected:
          "Stay informed with travel advisories for a smooth Namibian journey.",
      },
    ],
    high: "Congratulations on passing the quiz! You're well-prepared for your journey to Namibia.",
    low: "It seems you might need to prepare a bit more for your journey to Namibia. Check the areas you missed and try again!",
  },
  {
    route: "explore-botswana-quiz",
    title: "Embark on a Safari Adventure in Botswana!",
    description:
      "Embark on a quiz to ensure you're fully prepared for the thrilling wonders of Botswana. Answer these questions to unveil your readiness for an unforgettable journey through diverse ecosystems, majestic wildlife, and the untamed beauty of Southern Africa.",
    questions: [
      {
        question: "Do you have a valid passport?",
        answers: ["yes", "no", "not sure"],
        correctAnswer: "yes",
        responseToUserIfNoSelected:
          "A valid passport is essential for your journey to Botswana.",
      },
      {
        question:
          "Have you checked visa requirements and obtained the necessary travel documents for Botswana?",
        answers: ["yes", "no", "in progress"],
        correctAnswer: "yes",
        responseToUserIfNoSelected:
          "Ensure you have the required travel documents for a smooth entry into Botswana.",
      },
      {
        question: "Are you aware of local customs and traditions in Botswana?",
        answers: ["yes", "no", "learning"],
        correctAnswer: "yes",
        responseToUserIfNoSelected:
          "Immerse yourself in the rich culture of Botswana before your adventure.",
      },
      {
        question: "Have you booked accommodations for your stay in Botswana?",
        answers: ["yes", "no", "still deciding"],
        correctAnswer: "yes",
        responseToUserIfNoSelected:
          "Ensure a comfortable stay by booking accommodations in advance.",
      },
      {
        question: "Do you have travel insurance for your Botswanan adventure?",
        answers: ["yes", "no", "considering"],
        correctAnswer: "yes",
        responseToUserIfNoSelected:
          "Travel confidently with insurance coverage for your journey through Botswana.",
      },
      {
        question:
          "Have you planned your itinerary and researched key safari attractions in Botswana?",
        answers: ["yes", "no", "in progress"],
        correctAnswer: "yes",
        responseToUserIfNoSelected:
          "Enhance your experience by planning your Botswanan safari itinerary.",
      },
      {
        question:
          "Are you familiar with Botswanan cuisine and excited to try local dishes?",
        answers: ["yes", "no", "excited to try"],
        correctAnswer: "yes",
        responseToUserIfNoSelected:
          "Savor the flavors of Botswana by exploring local cuisine.",
      },
      {
        question:
          "Have you considered local currency and payment methods in Botswana?",
        answers: ["yes", "no", "need more info"],
        correctAnswer: "yes",
        responseToUserIfNoSelected:
          "Be prepared for transactions with knowledge of local currency in Botswana.",
      },
      {
        question: "Do you know basic Setswana phrases for communication?",
        answers: ["yes", "no", "learning essentials"],
        correctAnswer: "yes",
        responseToUserIfNoSelected:
          "Learn a few Setswana phrases to connect with locals during your Botswanan adventure.",
      },
      {
        question:
          "Have you checked travel advisories or restrictions for Botswana?",
        answers: ["yes", "no", "planning to"],
        correctAnswer: "yes",
        responseToUserIfNoSelected:
          "Stay informed with travel advisories for a smooth Botswanan journey.",
      },
    ],
    high: "Congratulations on passing the quiz! You're well-prepared for your safari adventure in Botswana.",
    low: "It seems you might need to prepare a bit more for your safari adventure in Botswana. Check the areas you missed and try again!",
  },
  {
    route: "explore-senegal-quiz",
    title: "Experience the Diversity of Senegal!",
    description:
      "Embark on a quiz to ensure you're fully prepared for the diverse wonders of Senegal. Answer these questions to unveil your readiness for an unforgettable journey through historic cities, vibrant markets, and the rich cultural tapestry of West Africa.",
    questions: [
      {
        question: "Do you have a valid passport?",
        answers: ["yes", "no", "not sure"],
        correctAnswer: "yes",
        responseToUserIfNoSelected:
          "A valid passport is essential for your journey to Senegal.",
      },
      {
        question:
          "Have you checked visa requirements and obtained the necessary travel documents for Senegal?",
        answers: ["yes", "no", "in progress"],
        correctAnswer: "yes",
        responseToUserIfNoSelected:
          "Ensure you have the required travel documents for a smooth entry into Senegal.",
      },
      {
        question: "Are you aware of local customs and traditions in Senegal?",
        answers: ["yes", "no", "learning"],
        correctAnswer: "yes",
        responseToUserIfNoSelected:
          "Immerse yourself in the rich culture of Senegal before your adventure.",
      },
      {
        question: "Have you booked accommodations for your stay in Senegal?",
        answers: ["yes", "no", "still deciding"],
        correctAnswer: "yes",
        responseToUserIfNoSelected:
          "Ensure a comfortable stay by booking accommodations in advance.",
      },
      {
        question: "Do you have travel insurance for your Senegalese adventure?",
        answers: ["yes", "no", "considering"],
        correctAnswer: "yes",
        responseToUserIfNoSelected:
          "Travel confidently with insurance coverage for your journey through Senegal.",
      },
      {
        question:
          "Have you planned your itinerary and researched key attractions in Senegal?",
        answers: ["yes", "no", "in progress"],
        correctAnswer: "yes",
        responseToUserIfNoSelected:
          "Enhance your experience by planning your Senegalese itinerary.",
      },
      {
        question:
          "Are you familiar with Senegalese cuisine and excited to try local dishes?",
        answers: ["yes", "no", "excited to try"],
        correctAnswer: "yes",
        responseToUserIfNoSelected:
          "Savor the flavors of Senegal by exploring local cuisine.",
      },
      {
        question:
          "Have you considered local currency and payment methods in Senegal?",
        answers: ["yes", "no", "need more info"],
        correctAnswer: "yes",
        responseToUserIfNoSelected:
          "Be prepared for transactions with knowledge of local currency in Senegal.",
      },
      {
        question: "Do you know basic Wolof phrases for communication?",
        answers: ["yes", "no", "learning essentials"],
        correctAnswer: "yes",
        responseToUserIfNoSelected:
          "Learn a few Wolof phrases to connect with locals during your Senegalese adventure.",
      },
      {
        question:
          "Have you checked travel advisories or restrictions for Senegal?",
        answers: ["yes", "no", "planning to"],
        correctAnswer: "yes",
        responseToUserIfNoSelected:
          "Stay informed with travel advisories for a smooth Senegalese journey.",
      },
    ],
    high: "Congratulations on passing the quiz! You're well-prepared for your journey through the diverse landscapes and cultural richness of Senegal.",
    low: "It seems you might need to prepare a bit more for your journey to Senegal. Check the areas you missed and try again!",
  },
  {
    route: "explore-ghana-quiz",
    title: "Discover the Rich Heritage of Ghana!",
    description:
      "Embark on a quiz to ensure you're fully prepared for the vibrant wonders of Ghana. Answer these questions to unveil your readiness for an unforgettable journey through historical sites, diverse cultures, and the warm hospitality of West Africa.",
    questions: [
      {
        question: "Do you have a valid passport?",
        answers: ["yes", "no", "not sure"],
        correctAnswer: "yes",
        responseToUserIfNoSelected:
          "A valid passport is essential for your journey to Ghana.",
      },
      {
        question:
          "Have you checked visa requirements and obtained the necessary travel documents for Ghana?",
        answers: ["yes", "no", "in progress"],
        correctAnswer: "yes",
        responseToUserIfNoSelected:
          "Ensure you have the required travel documents for a smooth entry into Ghana.",
      },
      {
        question: "Are you aware of local customs and traditions in Ghana?",
        answers: ["yes", "no", "learning"],
        correctAnswer: "yes",
        responseToUserIfNoSelected:
          "Immerse yourself in the rich culture of Ghana before your adventure.",
      },
      {
        question: "Have you booked accommodations for your stay in Ghana?",
        answers: ["yes", "no", "still deciding"],
        correctAnswer: "yes",
        responseToUserIfNoSelected:
          "Ensure a comfortable stay by booking accommodations in advance.",
      },
      {
        question: "Do you have travel insurance for your Ghanaian adventure?",
        answers: ["yes", "no", "considering"],
        correctAnswer: "yes",
        responseToUserIfNoSelected:
          "Travel confidently with insurance coverage for your journey through Ghana.",
      },
      {
        question:
          "Have you planned your itinerary and researched key attractions in Ghana?",
        answers: ["yes", "no", "in progress"],
        correctAnswer: "yes",
        responseToUserIfNoSelected:
          "Enhance your experience by planning your Ghanaian itinerary.",
      },
      {
        question:
          "Are you familiar with Ghanaian cuisine and excited to try local dishes?",
        answers: ["yes", "no", "excited to try"],
        correctAnswer: "yes",
        responseToUserIfNoSelected:
          "Savor the flavors of Ghana by exploring local cuisine.",
      },
      {
        question:
          "Have you considered local currency and payment methods in Ghana?",
        answers: ["yes", "no", "need more info"],
        correctAnswer: "yes",
        responseToUserIfNoSelected:
          "Be prepared for transactions with knowledge of local currency in Ghana.",
      },
      {
        question: "Do you know basic Ghanaian phrases for communication?",
        answers: ["yes", "no", "learning essentials"],
        correctAnswer: "yes",
        responseToUserIfNoSelected:
          "Learn a few Ghanaian phrases to connect with locals during your Ghanaian adventure.",
      },
      {
        question:
          "Have you checked travel advisories or restrictions for Ghana?",
        answers: ["yes", "no", "planning to"],
        correctAnswer: "yes",
        responseToUserIfNoSelected:
          "Stay informed with travel advisories for a smooth Ghanaian journey.",
      },
    ],
    high: "Congratulations on passing the quiz! You're well-prepared for your journey through the historical landmarks and cultural richness of Ghana.",
    low: "It seems you might need to prepare a bit more for your journey to Ghana. Check the areas you missed and try again!",
  },
  {
    route: "explore-lebanon-quiz",
    title: "Immerse Yourself in the Beauty of Lebanon!",
    description:
      "Embark on a quiz to ensure you're fully prepared for the captivating wonders of Lebanon. Answer these questions to unveil your readiness for an unforgettable journey through ancient history, diverse landscapes, and the rich cultural tapestry of the Middle East.",
    questions: [
      {
        question: "Do you have a valid passport?",
        answers: ["yes", "no", "not sure"],
        correctAnswer: "yes",
        responseToUserIfNoSelected:
          "A valid passport is essential for your journey to Lebanon.",
      },
      {
        question:
          "Have you checked visa requirements and obtained the necessary travel documents for Lebanon?",
        answers: ["yes", "no", "in progress"],
        correctAnswer: "yes",
        responseToUserIfNoSelected:
          "Ensure you have the required travel documents for a smooth entry into Lebanon.",
      },
      {
        question: "Are you aware of local customs and traditions in Lebanon?",
        answers: ["yes", "no", "learning"],
        correctAnswer: "yes",
        responseToUserIfNoSelected:
          "Immerse yourself in the rich culture of Lebanon before your adventure.",
      },
      {
        question: "Have you booked accommodations for your stay in Lebanon?",
        answers: ["yes", "no", "still deciding"],
        correctAnswer: "yes",
        responseToUserIfNoSelected:
          "Ensure a comfortable stay by booking accommodations in advance.",
      },
      {
        question: "Do you have travel insurance for your Lebanese adventure?",
        answers: ["yes", "no", "considering"],
        correctAnswer: "yes",
        responseToUserIfNoSelected:
          "Travel confidently with insurance coverage for your journey through Lebanon.",
      },
      {
        question:
          "Have you planned your itinerary and researched key attractions in Lebanon?",
        answers: ["yes", "no", "in progress"],
        correctAnswer: "yes",
        responseToUserIfNoSelected:
          "Enhance your experience by planning your Lebanese itinerary.",
      },
      {
        question:
          "Are you familiar with Lebanese cuisine and excited to try local dishes?",
        answers: ["yes", "no", "excited to try"],
        correctAnswer: "yes",
        responseToUserIfNoSelected:
          "Savor the flavors of Lebanon by exploring local cuisine.",
      },
      {
        question:
          "Have you considered local currency and payment methods in Lebanon?",
        answers: ["yes", "no", "need more info"],
        correctAnswer: "yes",
        responseToUserIfNoSelected:
          "Be prepared for transactions with knowledge of local currency in Lebanon.",
      },
      {
        question: "Do you know basic Arabic phrases for communication?",
        answers: ["yes", "no", "learning essentials"],
        correctAnswer: "yes",
        responseToUserIfNoSelected:
          "Learn a few Arabic phrases to connect with locals during your Lebanese adventure.",
      },
      {
        question:
          "Have you checked travel advisories or restrictions for Lebanon?",
        answers: ["yes", "no", "planning to"],
        correctAnswer: "yes",
        responseToUserIfNoSelected:
          "Stay informed with travel advisories for a smooth Lebanese journey.",
      },
    ],
    high: "Congratulations on passing the quiz! You're well-prepared for your journey through the ancient ruins, stunning landscapes, and culinary delights of Lebanon.",
    low: "It seems you might need to prepare a bit more for your journey to Lebanon. Check the areas you missed and try again!",
  },
  {
    route: "explore-bahrain-quiz",
    title: "Experience the Essence of Bahrain!",
    description:
      "Embark on a quiz to ensure you're fully prepared for the dynamic wonders of Bahrain. Answer these questions to unveil your readiness for an unforgettable journey through modern skyscrapers, ancient history, and the rich cultural tapestry of the Arabian Gulf.",
    questions: [
      {
        question: "Do you have a valid passport?",
        answers: ["yes", "no", "not sure"],
        correctAnswer: "yes",
        responseToUserIfNoSelected:
          "A valid passport is essential for your journey to Bahrain.",
      },
      {
        question:
          "Have you checked visa requirements and obtained the necessary travel documents for Bahrain?",
        answers: ["yes", "no", "in progress"],
        correctAnswer: "yes",
        responseToUserIfNoSelected:
          "Ensure you have the required travel documents for a smooth entry into Bahrain.",
      },
      {
        question: "Are you aware of local customs and traditions in Bahrain?",
        answers: ["yes", "no", "learning"],
        correctAnswer: "yes",
        responseToUserIfNoSelected:
          "Immerse yourself in the rich culture of Bahrain before your adventure.",
      },
      {
        question: "Have you booked accommodations for your stay in Bahrain?",
        answers: ["yes", "no", "still deciding"],
        correctAnswer: "yes",
        responseToUserIfNoSelected:
          "Ensure a comfortable stay by booking accommodations in advance.",
      },
      {
        question: "Do you have travel insurance for your Bahraini adventure?",
        answers: ["yes", "no", "considering"],
        correctAnswer: "yes",
        responseToUserIfNoSelected:
          "Travel confidently with insurance coverage for your journey through Bahrain.",
      },
      {
        question:
          "Have you planned your itinerary and researched key attractions in Bahrain?",
        answers: ["yes", "no", "in progress"],
        correctAnswer: "yes",
        responseToUserIfNoSelected:
          "Enhance your experience by planning your Bahraini itinerary.",
      },
      {
        question:
          "Are you familiar with Bahraini cuisine and excited to try local dishes?",
        answers: ["yes", "no", "excited to try"],
        correctAnswer: "yes",
        responseToUserIfNoSelected:
          "Savor the flavors of Bahrain by exploring local cuisine.",
      },
      {
        question:
          "Have you considered local currency and payment methods in Bahrain?",
        answers: ["yes", "no", "need more info"],
        correctAnswer: "yes",
        responseToUserIfNoSelected:
          "Be prepared for transactions with knowledge of local currency in Bahrain.",
      },
      {
        question: "Do you know basic Arabic phrases for communication?",
        answers: ["yes", "no", "learning essentials"],
        correctAnswer: "yes",
        responseToUserIfNoSelected:
          "Learn a few Arabic phrases to connect with locals during your Bahraini adventure.",
      },
      {
        question:
          "Have you checked travel advisories or restrictions for Bahrain?",
        answers: ["yes", "no", "planning to"],
        correctAnswer: "yes",
        responseToUserIfNoSelected:
          "Stay informed with travel advisories for a smooth Bahraini journey.",
      },
    ],
    high: "Congratulations on passing the quiz! You're well-prepared for your journey to discover the mesmerizing blend of ancient and modern in Bahrain.",
    low: "It looks like there are a few areas you might need to brush up on before heading to Bahrain. Review the necessary preparations and try again!",
  },
  {
    route: "explore-cyprus-quiz",
    title: "Uncover the Treasures of Cyprus!",
    description:
      "Embark on a quiz to ensure you're fully prepared for the captivating wonders of Cyprus. Answer these questions to unveil your readiness for an unforgettable journey through ancient history, crystal-clear beaches, and the vibrant culture of the Mediterranean island.",
    questions: [
      {
        question: "Do you have a valid passport?",
        answers: ["yes", "no", "not sure"],
        correctAnswer: "yes",
        responseToUserIfNoSelected:
          "A valid passport is essential for your journey to Cyprus.",
      },
      {
        question:
          "Have you checked visa requirements and obtained the necessary travel documents for Cyprus?",
        answers: ["yes", "no", "in progress"],
        correctAnswer: "yes",
        responseToUserIfNoSelected:
          "Ensure you have the required travel documents for a smooth entry into Cyprus.",
      },
      {
        question: "Are you aware of local customs and traditions in Cyprus?",
        answers: ["yes", "no", "learning"],
        correctAnswer: "yes",
        responseToUserIfNoSelected:
          "Immerse yourself in the rich culture of Cyprus before your adventure.",
      },
      {
        question: "Have you booked accommodations for your stay in Cyprus?",
        answers: ["yes", "no", "still deciding"],
        correctAnswer: "yes",
        responseToUserIfNoSelected:
          "Ensure a comfortable stay by booking accommodations in advance.",
      },
      {
        question: "Do you have travel insurance for your Cypriot adventure?",
        answers: ["yes", "no", "considering"],
        correctAnswer: "yes",
        responseToUserIfNoSelected:
          "Travel confidently with insurance coverage for your journey through Cyprus.",
      },
      {
        question:
          "Have you planned your itinerary and researched key attractions in Cyprus?",
        answers: ["yes", "no", "in progress"],
        correctAnswer: "yes",
        responseToUserIfNoSelected:
          "Enhance your experience by planning your Cypriot itinerary.",
      },
      {
        question:
          "Are you familiar with Cypriot cuisine and excited to try local dishes?",
        answers: ["yes", "no", "excited to try"],
        correctAnswer: "yes",
        responseToUserIfNoSelected:
          "Savor the flavors of Cyprus by exploring local cuisine.",
      },
      {
        question:
          "Have you considered local currency and payment methods in Cyprus?",
        answers: ["yes", "no", "need more info"],
        correctAnswer: "yes",
        responseToUserIfNoSelected:
          "Be prepared for transactions with knowledge of local currency in Cyprus.",
      },
      {
        question: "Do you know basic Greek phrases for communication?",
        answers: ["yes", "no", "learning essentials"],
        correctAnswer: "yes",
        responseToUserIfNoSelected:
          "Learn a few Greek phrases to connect with locals during your Cypriot adventure.",
      },
      {
        question:
          "Have you checked travel advisories or restrictions for Cyprus?",
        answers: ["yes", "no", "planning to"],
        correctAnswer: "yes",
        responseToUserIfNoSelected:
          "Stay informed with travel advisories for a smooth Cypriot journey.",
      },
    ],
    high: "Congratulations on passing the quiz! You're well-prepared for your journey to discover the enchanting blend of history, nature, and culture in Cyprus.",
    low: "It looks like there are a few areas you might need to brush up on before heading to Cyprus. Review the necessary preparations and try again!",
  },
  {
    route: "explore-slovakia-quiz",
    title: "Unveil the Beauty of Slovakia!",
    description:
      "Embark on a quiz to ensure you're fully prepared for the enchanting wonders of Slovakia. Answer these questions to unveil your readiness for an unforgettable journey through medieval castles, stunning landscapes, and the rich cultural tapestry of this European gem.",
    questions: [
      {
        question: "Do you have a valid passport?",
        answers: ["yes", "no", "not sure"],
        correctAnswer: "yes",
        responseToUserIfNoSelected:
          "A valid passport is essential for your journey to Slovakia.",
      },
      {
        question:
          "Have you checked visa requirements and obtained the necessary travel documents for Slovakia?",
        answers: ["yes", "no", "in progress"],
        correctAnswer: "yes",
        responseToUserIfNoSelected:
          "Ensure you have the required travel documents for a smooth entry into Slovakia.",
      },
      {
        question: "Are you aware of local customs and traditions in Slovakia?",
        answers: ["yes", "no", "learning"],
        correctAnswer: "yes",
        responseToUserIfNoSelected:
          "Immerse yourself in the rich culture of Slovakia before your adventure.",
      },
      {
        question: "Have you booked accommodations for your stay in Slovakia?",
        answers: ["yes", "no", "still deciding"],
        correctAnswer: "yes",
        responseToUserIfNoSelected:
          "Ensure a comfortable stay by booking accommodations in advance.",
      },
      {
        question: "Do you have travel insurance for your Slovakian adventure?",
        answers: ["yes", "no", "considering"],
        correctAnswer: "yes",
        responseToUserIfNoSelected:
          "Travel confidently with insurance coverage for your journey through Slovakia.",
      },
      {
        question:
          "Have you planned your itinerary and researched key attractions in Slovakia?",
        answers: ["yes", "no", "in progress"],
        correctAnswer: "yes",
        responseToUserIfNoSelected:
          "Enhance your experience by planning your Slovakian itinerary.",
      },
      {
        question:
          "Are you familiar with Slovakian cuisine and excited to try local dishes?",
        answers: ["yes", "no", "excited to try"],
        correctAnswer: "yes",
        responseToUserIfNoSelected:
          "Savor the flavors of Slovakia by exploring local cuisine.",
      },
      {
        question:
          "Have you considered local currency and payment methods in Slovakia?",
        answers: ["yes", "no", "need more info"],
        correctAnswer: "yes",
        responseToUserIfNoSelected:
          "Be prepared for transactions with knowledge of local currency in Slovakia.",
      },
      {
        question: "Do you know basic Slovakian phrases for communication?",
        answers: ["yes", "no", "learning essentials"],
        correctAnswer: "yes",
        responseToUserIfNoSelected:
          "Learn a few Slovakian phrases to connect with locals during your Slovakian adventure.",
      },
      {
        question:
          "Have you checked travel advisories or restrictions for Slovakia?",
        answers: ["yes", "no", "planning to"],
        correctAnswer: "yes",
        responseToUserIfNoSelected:
          "Stay informed with travel advisories for a smooth Slovakian journey.",
      },
    ],
    high: "Congratulations on passing the quiz! You're well-prepared for your journey to discover the captivating castles, landscapes, and culture of Slovakia.",
    low: "It looks like there are a few areas you might need to brush up on before heading to Slovakia. Review the necessary preparations and try again!",
  },
  {
    route: "explore-slovenia-quiz",
    title: "Discover the Hidden Gems of Slovenia!",
    description:
      "Embark on a quiz to ensure you're fully prepared for the enchanting wonders of Slovenia. Answer these questions to unveil your readiness for an unforgettable journey through charming cities, pristine lakes, and the breathtaking landscapes of this European gem.",
    questions: [
      {
        question: "Do you have a valid passport?",
        answers: ["yes", "no", "not sure"],
        correctAnswer: "yes",
        responseToUserIfNoSelected:
          "A valid passport is essential for your journey to Slovenia.",
      },
      {
        question:
          "Have you checked visa requirements and obtained the necessary travel documents for Slovenia?",
        answers: ["yes", "no", "in progress"],
        correctAnswer: "yes",
        responseToUserIfNoSelected:
          "Ensure you have the required travel documents for a smooth entry into Slovenia.",
      },
      {
        question: "Are you aware of local customs and traditions in Slovenia?",
        answers: ["yes", "no", "learning"],
        correctAnswer: "yes",
        responseToUserIfNoSelected:
          "Immerse yourself in the rich culture of Slovenia before your adventure.",
      },
      {
        question: "Have you booked accommodations for your stay in Slovenia?",
        answers: ["yes", "no", "still deciding"],
        correctAnswer: "yes",
        responseToUserIfNoSelected:
          "Ensure a comfortable stay by booking accommodations in advance.",
      },
      {
        question: "Do you have travel insurance for your Slovenian adventure?",
        answers: ["yes", "no", "considering"],
        correctAnswer: "yes",
        responseToUserIfNoSelected:
          "Travel confidently with insurance coverage for your journey through Slovenia.",
      },
      {
        question:
          "Have you planned your itinerary and researched key attractions in Slovenia?",
        answers: ["yes", "no", "in progress"],
        correctAnswer: "yes",
        responseToUserIfNoSelected:
          "Enhance your experience by planning your Slovenian itinerary.",
      },
      {
        question:
          "Are you familiar with Slovenian cuisine and excited to try local dishes?",
        answers: ["yes", "no", "excited to try"],
        correctAnswer: "yes",
        responseToUserIfNoSelected:
          "Savor the flavors of Slovenia by exploring local cuisine.",
      },
      {
        question:
          "Have you considered local currency and payment methods in Slovenia?",
        answers: ["yes", "no", "need more info"],
        correctAnswer: "yes",
        responseToUserIfNoSelected:
          "Be prepared for transactions with knowledge of local currency in Slovenia.",
      },
      {
        question: "Do you know basic Slovenian phrases for communication?",
        answers: ["yes", "no", "learning essentials"],
        correctAnswer: "yes",
        responseToUserIfNoSelected:
          "Learn a few Slovenian phrases to connect with locals during your Slovenian adventure.",
      },
      {
        question:
          "Have you checked travel advisories or restrictions for Slovenia?",
        answers: ["yes", "no", "planning to"],
        correctAnswer: "yes",
        responseToUserIfNoSelected:
          "Stay informed with travel advisories for a smooth Slovenian journey.",
      },
    ],
    high: "Congratulations on passing the quiz! You're well-prepared for your journey to explore the charming cities, pristine lakes, and breathtaking landscapes of Slovenia.",
    low: "It looks like there are a few areas you might need to brush up on before heading to Slovenia. Review the necessary preparations and try again!",
  },
  {
    route: "explore-luxembourg-quiz",
    title: "Embark on a Grand Duchy Adventure!",
    description:
      "Embark on a quiz to ensure you're fully prepared for the charming wonders of Luxembourg. Answer these questions to unveil your readiness for an unforgettable journey through medieval castles, picturesque landscapes, and the vibrant culture of the Grand Duchy.",
    questions: [
      {
        question: "Do you have a valid passport?",
        answers: ["yes", "no", "not sure"],
        correctAnswer: "yes",
        responseToUserIfNoSelected:
          "A valid passport is essential for your journey to Luxembourg.",
      },
      {
        question:
          "Have you checked visa requirements and obtained the necessary travel documents for Luxembourg?",
        answers: ["yes", "no", "in progress"],
        correctAnswer: "yes",
        responseToUserIfNoSelected:
          "Ensure you have the required travel documents for a smooth entry into Luxembourg.",
      },
      {
        question:
          "Are you aware of local customs and traditions in Luxembourg?",
        answers: ["yes", "no", "learning"],
        correctAnswer: "yes",
        responseToUserIfNoSelected:
          "Immerse yourself in the rich culture of Luxembourg before your adventure.",
      },
      {
        question: "Have you booked accommodations for your stay in Luxembourg?",
        answers: ["yes", "no", "still deciding"],
        correctAnswer: "yes",
        responseToUserIfNoSelected:
          "Ensure a comfortable stay by booking accommodations in advance.",
      },
      {
        question:
          "Do you have travel insurance for your Luxembourgish adventure?",
        answers: ["yes", "no", "considering"],
        correctAnswer: "yes",
        responseToUserIfNoSelected:
          "Travel confidently with insurance coverage for your journey through Luxembourg.",
      },
      {
        question:
          "Have you planned your itinerary and researched key attractions in Luxembourg?",
        answers: ["yes", "no", "in progress"],
        correctAnswer: "yes",
        responseToUserIfNoSelected:
          "Enhance your experience by planning your Luxembourgish itinerary.",
      },
      {
        question:
          "Are you familiar with Luxembourgish cuisine and excited to try local dishes?",
        answers: ["yes", "no", "excited to try"],
        correctAnswer: "yes",
        responseToUserIfNoSelected:
          "Savor the flavors of Luxembourg by exploring local cuisine.",
      },
      {
        question:
          "Have you considered local currency and payment methods in Luxembourg?",
        answers: ["yes", "no", "need more info"],
        correctAnswer: "yes",
        responseToUserIfNoSelected:
          "Be prepared for transactions with knowledge of local currency in Luxembourg.",
      },
      {
        question: "Do you know basic Luxembourgish phrases for communication?",
        answers: ["yes", "no", "learning essentials"],
        correctAnswer: "yes",
        responseToUserIfNoSelected:
          "Learn a few Luxembourgish phrases to connect with locals during your Luxembourgish adventure.",
      },
      {
        question:
          "Have you checked travel advisories or restrictions for Luxembourg?",
        answers: ["yes", "no", "planning to"],
        correctAnswer: "yes",
        responseToUserIfNoSelected:
          "Stay informed with travel advisories for a smooth Luxembourgish journey.",
      },
    ],
    high: "Congratulations on passing the quiz! You're well-prepared for your journey to explore the medieval castles, picturesque landscapes, and vibrant culture of the Grand Duchy of Luxembourg.",
    low: "It looks like there are a few areas you might need to brush up on before heading to Luxembourg. Review the necessary preparations and try again!",
  },
  {
    route: "explore-lithuania-quiz",
    title: "Immerse Yourself in Lithuania's Rich Heritage!",
    description:
      "Embark on a quiz to ensure you're fully prepared for the captivating wonders of Lithuania. Answer these questions to unveil your readiness for an unforgettable journey through medieval history, lively culture, and picturesque landscapes in the heart of the Baltic region.",
    questions: [
      {
        question: "Do you have a valid passport?",
        answers: ["yes", "no", "not sure"],
        correctAnswer: "yes",
        responseToUserIfNoSelected:
          "A valid passport is essential for your journey to Lithuania.",
      },
      {
        question:
          "Have you checked visa requirements and obtained the necessary travel documents for Lithuania?",
        answers: ["yes", "no", "in progress"],
        correctAnswer: "yes",
        responseToUserIfNoSelected:
          "Ensure you have the required travel documents for a smooth entry into Lithuania.",
      },
      {
        question: "Are you aware of local customs and traditions in Lithuania?",
        answers: ["yes", "no", "learning"],
        correctAnswer: "yes",
        responseToUserIfNoSelected:
          "Immerse yourself in the rich culture of Lithuania before your adventure.",
      },
      {
        question: "Have you booked accommodations for your stay in Lithuania?",
        answers: ["yes", "no", "still deciding"],
        correctAnswer: "yes",
        responseToUserIfNoSelected:
          "Ensure a comfortable stay by booking accommodations in advance.",
      },
      {
        question: "Do you have travel insurance for your Lithuanian adventure?",
        answers: ["yes", "no", "considering"],
        correctAnswer: "yes",
        responseToUserIfNoSelected:
          "Travel confidently with insurance coverage for your journey through Lithuania.",
      },
      {
        question:
          "Have you planned your itinerary and researched key attractions in Lithuania?",
        answers: ["yes", "no", "in progress"],
        correctAnswer: "yes",
        responseToUserIfNoSelected:
          "Enhance your experience by planning your Lithuanian itinerary.",
      },
      {
        question:
          "Are you familiar with Lithuanian cuisine and excited to try local dishes?",
        answers: ["yes", "no", "excited to try"],
        correctAnswer: "yes",
        responseToUserIfNoSelected:
          "Savor the flavors of Lithuania by exploring local cuisine.",
      },
      {
        question:
          "Have you considered local currency and payment methods in Lithuania?",
        answers: ["yes", "no", "need more info"],
        correctAnswer: "yes",
        responseToUserIfNoSelected:
          "Be prepared for transactions with knowledge of local currency in Lithuania.",
      },
      {
        question: "Do you know basic Lithuanian phrases for communication?",
        answers: ["yes", "no", "learning essentials"],
        correctAnswer: "yes",
        responseToUserIfNoSelected:
          "Learn a few Lithuanian phrases to connect with locals during your Lithuanian adventure.",
      },
      {
        question:
          "Have you checked travel advisories or restrictions for Lithuania?",
        answers: ["yes", "no", "planning to"],
        correctAnswer: "yes",
        responseToUserIfNoSelected:
          "Stay informed with travel advisories for a smooth Lithuanian journey.",
      },
    ],
    high: "Congratulations on passing the quiz! You're well-prepared for your journey through Lithuania.",
    low: "It looks like you might need to prepare a bit more for your trip to Lithuania. Check the resources again and try to improve your readiness!",
  },
  {
    route: "explore-estonia-quiz",
    title: "Uncover the Charms of Estonia!",
    description:
      "Embark on a quiz to ensure you're fully prepared for the enchanting wonders of Estonia. Answer these questions to unveil your readiness for an unforgettable journey through medieval history, vibrant culture, and picturesque landscapes in the heart of the Baltic region.",
    questions: [
      {
        question: "Do you have a valid passport?",
        answers: ["yes", "no", "not sure"],
        correctAnswer: "yes",
        responseToUserIfNoSelected:
          "A valid passport is essential for your journey to Estonia.",
      },
      {
        question:
          "Have you checked visa requirements and obtained the necessary travel documents for Estonia?",
        answers: ["yes", "no", "in progress"],
        correctAnswer: "yes",
        responseToUserIfNoSelected:
          "Ensure you have the required travel documents for a smooth entry into Estonia.",
      },
      {
        question: "Are you aware of local customs and traditions in Estonia?",
        answers: ["yes", "no", "learning"],
        correctAnswer: "yes",
        responseToUserIfNoSelected:
          "Immerse yourself in the rich culture of Estonia before your adventure.",
      },
      {
        question: "Have you booked accommodations for your stay in Estonia?",
        answers: ["yes", "no", "still deciding"],
        correctAnswer: "yes",
        responseToUserIfNoSelected:
          "Ensure a comfortable stay by booking accommodations in advance.",
      },
      {
        question: "Do you have travel insurance for your Estonian adventure?",
        answers: ["yes", "no", "considering"],
        correctAnswer: "yes",
        responseToUserIfNoSelected:
          "Travel confidently with insurance coverage for your journey through Estonia.",
      },
      {
        question:
          "Have you planned your itinerary and researched key attractions in Estonia?",
        answers: ["yes", "no", "in progress"],
        correctAnswer: "yes",
        responseToUserIfNoSelected:
          "Enhance your experience by planning your Estonian itinerary.",
      },
      {
        question:
          "Are you familiar with Estonian cuisine and excited to try local dishes?",
        answers: ["yes", "no", "excited to try"],
        correctAnswer: "yes",
        responseToUserIfNoSelected:
          "Savor the flavors of Estonia by exploring local cuisine.",
      },
      {
        question:
          "Have you considered local currency and payment methods in Estonia?",
        answers: ["yes", "no", "need more info"],
        correctAnswer: "yes",
        responseToUserIfNoSelected:
          "Be prepared for transactions with knowledge of local currency in Estonia.",
      },
      {
        question: "Do you know basic Estonian phrases for communication?",
        answers: ["yes", "no", "learning essentials"],
        correctAnswer: "yes",
        responseToUserIfNoSelected:
          "Learn a few Estonian phrases to connect with locals during your Estonian adventure.",
      },
      {
        question:
          "Have you checked travel advisories or restrictions for Estonia?",
        answers: ["yes", "no", "planning to"],
        correctAnswer: "yes",
        responseToUserIfNoSelected:
          "Stay informed with travel advisories for a smooth Estonian journey.",
      },
    ],
    high: "Congratulations on passing the quiz! You're well-prepared for your journey through Estonia.",
    low: "It looks like you might need to prepare a bit more for your trip to Estonia. Check the resources again and try to improve your readiness!",
  },
  {
    route: "explore-latvia-quiz",
    title: "Discover the Charms of Latvia!",
    description:
      "Embark on a quiz to ensure you're fully prepared for the enchanting wonders of Latvia. Answer these questions to unveil your readiness for an unforgettable journey through rich history, vibrant culture, and picturesque landscapes in the heart of the Baltic region.",
    questions: [
      {
        question: "Do you have a valid passport?",
        answers: ["yes", "no", "not sure"],
        correctAnswer: "yes",
        responseToUserIfNoSelected:
          "A valid passport is essential for your journey to Latvia.",
      },
      {
        question:
          "Have you checked visa requirements and obtained the necessary travel documents for Latvia?",
        answers: ["yes", "no", "in progress"],
        correctAnswer: "yes",
        responseToUserIfNoSelected:
          "Ensure you have the required travel documents for a smooth entry into Latvia.",
      },
      {
        question: "Are you aware of local customs and traditions in Latvia?",
        answers: ["yes", "no", "learning"],
        correctAnswer: "yes",
        responseToUserIfNoSelected:
          "Immerse yourself in the rich culture of Latvia before your adventure.",
      },
      {
        question: "Have you booked accommodations for your stay in Latvia?",
        answers: ["yes", "no", "still deciding"],
        correctAnswer: "yes",
        responseToUserIfNoSelected:
          "Ensure a comfortable stay by booking accommodations in advance.",
      },
      {
        question: "Do you have travel insurance for your Latvian adventure?",
        answers: ["yes", "no", "considering"],
        correctAnswer: "yes",
        responseToUserIfNoSelected:
          "Travel confidently with insurance coverage for your journey through Latvia.",
      },
      {
        question:
          "Have you planned your itinerary and researched key attractions in Latvia?",
        answers: ["yes", "no", "in progress"],
        correctAnswer: "yes",
        responseToUserIfNoSelected:
          "Enhance your experience by planning your Latvian itinerary.",
      },
      {
        question:
          "Are you familiar with Latvian cuisine and excited to try local dishes?",
        answers: ["yes", "no", "excited to try"],
        correctAnswer: "yes",
        responseToUserIfNoSelected:
          "Savor the flavors of Latvia by exploring local cuisine.",
      },
      {
        question:
          "Have you considered local currency and payment methods in Latvia?",
        answers: ["yes", "no", "need more info"],
        correctAnswer: "yes",
        responseToUserIfNoSelected:
          "Be prepared for transactions with knowledge of local currency in Latvia.",
      },
      {
        question: "Do you know basic Latvian phrases for communication?",
        answers: ["yes", "no", "learning essentials"],
        correctAnswer: "yes",
        responseToUserIfNoSelected:
          "Learn a few Latvian phrases to connect with locals during your Latvian adventure.",
      },
      {
        question:
          "Have you checked travel advisories or restrictions for Latvia?",
        answers: ["yes", "no", "planning to"],
        correctAnswer: "yes",
        responseToUserIfNoSelected:
          "Stay informed with travel advisories for a smooth Latvian journey.",
      },
    ],
    high: "Congratulations on passing the quiz! You're well-prepared for your journey through Latvia.",
    low: "It looks like you might need to prepare a bit more for your trip to Latvia. Check the resources again and try to improve your readiness!",
  },
  {
    route: "explore-iceland-quiz",
    title: "Embark on Your Icelandic Adventure!",
    description:
      "Embark on a quiz to ensure you're fully prepared for the mesmerizing wonders of Iceland. Answer these questions to unveil your readiness for an unforgettable journey through stunning landscapes, unique culture, and the magic of the Northern Lights in the heart of the North Atlantic.",
    questions: [
      {
        question: "Do you have a valid passport?",
        answers: ["yes", "no", "not sure"],
        correctAnswer: "yes",
        responseToUserIfNoSelected:
          "A valid passport is essential for your journey to Iceland.",
      },
      {
        question:
          "Have you checked visa requirements and obtained the necessary travel documents for Iceland?",
        answers: ["yes", "no", "in progress"],
        correctAnswer: "yes",
        responseToUserIfNoSelected:
          "Ensure you have the required travel documents for a smooth entry into Iceland.",
      },
      {
        question: "Are you aware of local customs and traditions in Iceland?",
        answers: ["yes", "no", "learning"],
        correctAnswer: "yes",
        responseToUserIfNoSelected:
          "Immerse yourself in the unique culture of Iceland before your adventure.",
      },
      {
        question: "Have you booked accommodations for your stay in Iceland?",
        answers: ["yes", "no", "still deciding"],
        correctAnswer: "yes",
        responseToUserIfNoSelected:
          "Ensure a comfortable stay by booking accommodations in advance.",
      },
      {
        question: "Do you have travel insurance for your Icelandic adventure?",
        answers: ["yes", "no", "considering"],
        correctAnswer: "yes",
        responseToUserIfNoSelected:
          "Travel confidently with insurance coverage for your journey through Iceland.",
      },
      {
        question:
          "Have you planned your itinerary and researched key attractions in Iceland?",
        answers: ["yes", "no", "in progress"],
        correctAnswer: "yes",
        responseToUserIfNoSelected:
          "Enhance your experience by planning your Icelandic itinerary.",
      },
      {
        question:
          "Are you familiar with Icelandic cuisine and excited to try local dishes?",
        answers: ["yes", "no", "excited to try"],
        correctAnswer: "yes",
        responseToUserIfNoSelected:
          "Savor the flavors of Iceland by exploring local cuisine.",
      },
      {
        question:
          "Have you considered local currency and payment methods in Iceland?",
        answers: ["yes", "no", "need more info"],
        correctAnswer: "yes",
        responseToUserIfNoSelected:
          "Be prepared for transactions with knowledge of local currency in Iceland.",
      },
      {
        question: "Do you know basic Icelandic phrases for communication?",
        answers: ["yes", "no", "learning essentials"],
        correctAnswer: "yes",
        responseToUserIfNoSelected:
          "Learn a few Icelandic phrases to connect with locals during your Icelandic adventure.",
      },
      {
        question:
          "Have you checked travel advisories or restrictions for Iceland?",
        answers: ["yes", "no", "planning to"],
        correctAnswer: "yes",
        responseToUserIfNoSelected:
          "Stay informed with travel advisories for a smooth Icelandic journey.",
      },
    ],
    high: "Congratulations on passing the quiz! You're well-prepared for your journey through Iceland.",
    low: "It looks like you might need to prepare a bit more for your trip to Iceland. Check the resources again and try to improve your readiness!",
  },
  {
    route: "explore-malta-quiz",
    title: "Embark on Your Maltese Discovery!",
    description:
      "Embark on a quiz to ensure you're fully prepared for the charming wonders of Malta. Answer these questions to unveil your readiness for an unforgettable journey through rich history, Mediterranean culture, and stunning landscapes in the heart of the Mediterranean Sea.",
    questions: [
      {
        question: "Do you have a valid passport?",
        answers: ["yes", "no", "not sure"],
        correctAnswer: "yes",
        responseToUserIfNoSelected:
          "A valid passport is essential for your journey to Malta.",
      },
      {
        question:
          "Have you checked visa requirements and obtained the necessary travel documents for Malta?",
        answers: ["yes", "no", "in progress"],
        correctAnswer: "yes",
        responseToUserIfNoSelected:
          "Ensure you have the required travel documents for a smooth entry into Malta.",
      },
      {
        question: "Are you aware of local customs and traditions in Malta?",
        answers: ["yes", "no", "learning"],
        correctAnswer: "yes",
        responseToUserIfNoSelected:
          "Immerse yourself in the rich culture of Malta before your adventure.",
      },
      {
        question: "Have you booked accommodations for your stay in Malta?",
        answers: ["yes", "no", "still deciding"],
        correctAnswer: "yes",
        responseToUserIfNoSelected:
          "Ensure a comfortable stay by booking accommodations in advance.",
      },
      {
        question: "Do you have travel insurance for your Maltese adventure?",
        answers: ["yes", "no", "considering"],
        correctAnswer: "yes",
        responseToUserIfNoSelected:
          "Travel confidently with insurance coverage for your journey through Malta.",
      },
      {
        question:
          "Have you planned your itinerary and researched key attractions in Malta?",
        answers: ["yes", "no", "in progress"],
        correctAnswer: "yes",
        responseToUserIfNoSelected:
          "Enhance your experience by planning your Maltese itinerary.",
      },
      {
        question:
          "Are you familiar with Maltese cuisine and excited to try local dishes?",
        answers: ["yes", "no", "excited to try"],
        correctAnswer: "yes",
        responseToUserIfNoSelected:
          "Savor the flavors of Malta by exploring local cuisine.",
      },
      {
        question:
          "Have you considered local currency and payment methods in Malta?",
        answers: ["yes", "no", "need more info"],
        correctAnswer: "yes",
        responseToUserIfNoSelected:
          "Be prepared for transactions with knowledge of local currency in Malta.",
      },
      {
        question: "Do you know basic Maltese phrases for communication?",
        answers: ["yes", "no", "learning essentials"],
        correctAnswer: "yes",
        responseToUserIfNoSelected:
          "Learn a few Maltese phrases to connect with locals during your Maltese adventure.",
      },
      {
        question:
          "Have you checked travel advisories or restrictions for Malta?",
        answers: ["yes", "no", "planning to"],
        correctAnswer: "yes",
        responseToUserIfNoSelected:
          "Stay informed with travel advisories for a smooth Maltese journey.",
      },
    ],
    high: "Congratulations on passing the quiz! You're well-prepared for your journey through Malta.",
    low: "It looks like you might need to prepare a bit more for your trip to Malta. Check the resources again and try to improve your readiness!",
  },
  {
    route: "explore-sri-lanka-quiz",
    title: "Embark on Your Sri Lankan Odyssey!",
    description:
      "Embark on a quiz to ensure you're fully prepared for the enchanting wonders of Sri Lanka. Answer these questions to unveil your readiness for an unforgettable journey through ancient history, diverse culture, and stunning landscapes in the heart of South Asia.",
    questions: [
      {
        question: "Do you have a valid passport?",
        answers: ["yes", "no", "not sure"],
        correctAnswer: "yes",
        responseToUserIfNoSelected:
          "A valid passport is essential for your journey to Sri Lanka.",
      },
      {
        question:
          "Have you checked visa requirements and obtained the necessary travel documents for Sri Lanka?",
        answers: ["yes", "no", "in progress"],
        correctAnswer: "yes",
        responseToUserIfNoSelected:
          "Ensure you have the required travel documents for a smooth entry into Sri Lanka.",
      },
      {
        question: "Are you aware of local customs and traditions in Sri Lanka?",
        answers: ["yes", "no", "learning"],
        correctAnswer: "yes",
        responseToUserIfNoSelected:
          "Immerse yourself in the rich culture of Sri Lanka before your adventure.",
      },
      {
        question: "Have you booked accommodations for your stay in Sri Lanka?",
        answers: ["yes", "no", "still deciding"],
        correctAnswer: "yes",
        responseToUserIfNoSelected:
          "Ensure a comfortable stay by booking accommodations in advance.",
      },
      {
        question: "Do you have travel insurance for your Sri Lankan adventure?",
        answers: ["yes", "no", "considering"],
        correctAnswer: "yes",
        responseToUserIfNoSelected:
          "Travel confidently with insurance coverage for your journey through Sri Lanka.",
      },
      {
        question:
          "Have you planned your itinerary and researched key attractions in Sri Lanka?",
        answers: ["yes", "no", "in progress"],
        correctAnswer: "yes",
        responseToUserIfNoSelected:
          "Enhance your experience by planning your Sri Lankan itinerary.",
      },
      {
        question:
          "Are you familiar with Sri Lankan cuisine and excited to try local dishes?",
        answers: ["yes", "no", "excited to try"],
        correctAnswer: "yes",
        responseToUserIfNoSelected:
          "Savor the flavors of Sri Lanka by exploring local cuisine.",
      },
      {
        question:
          "Have you considered local currency and payment methods in Sri Lanka?",
        answers: ["yes", "no", "need more info"],
        correctAnswer: "yes",
        responseToUserIfNoSelected:
          "Be prepared for transactions with knowledge of local currency in Sri Lanka.",
      },
      {
        question: "Do you know basic Sinhala phrases for communication?",
        answers: ["yes", "no", "learning essentials"],
        correctAnswer: "yes",
        responseToUserIfNoSelected:
          "Learn a few Sinhala phrases to connect with locals during your Sri Lankan adventure.",
      },
      {
        question:
          "Have you checked travel advisories or restrictions for Sri Lanka?",
        answers: ["yes", "no", "planning to"],
        correctAnswer: "yes",
        responseToUserIfNoSelected:
          "Stay informed with travel advisories for a smooth Sri Lankan journey.",
      },
    ],
    high: "Congratulations on passing the quiz! You're well-prepared for your journey through Sri Lanka.",
    low: "It looks like you might need to prepare a bit more for your trip to Sri Lanka. Check the resources again and try to improve your readiness!",
  },
  {
    route: "explore-nepal-quiz",
    title: "Embark on Your Himalayan Adventure!",
    description:
      "Embark on a quiz to ensure you're fully prepared for the awe-inspiring wonders of Nepal. Answer these questions to unveil your readiness for an unforgettable journey through majestic mountains, ancient culture, and vibrant landscapes in the heart of the Himalayas.",
    questions: [
      {
        question: "Do you have a valid passport?",
        answers: ["yes", "no", "not sure"],
        correctAnswer: "yes",
        responseToUserIfNoSelected:
          "A valid passport is essential for your journey to Nepal.",
      },
      {
        question:
          "Have you checked visa requirements and obtained the necessary travel documents for Nepal?",
        answers: ["yes", "no", "in progress"],
        correctAnswer: "yes",
        responseToUserIfNoSelected:
          "Ensure you have the required travel documents for a smooth entry into Nepal.",
      },
      {
        question: "Are you aware of local customs and traditions in Nepal?",
        answers: ["yes", "no", "learning"],
        correctAnswer: "yes",
        responseToUserIfNoSelected:
          "Immerse yourself in the rich culture of Nepal before your mountainous adventure.",
      },
      {
        question: "Have you booked accommodations for your stay in Nepal?",
        answers: ["yes", "no", "still deciding"],
        correctAnswer: "yes",
        responseToUserIfNoSelected:
          "Ensure a comfortable stay by booking accommodations in advance.",
      },
      {
        question: "Do you have travel insurance for your Nepalese adventure?",
        answers: ["yes", "no", "considering"],
        correctAnswer: "yes",
        responseToUserIfNoSelected:
          "Travel confidently with insurance coverage for your journey through Nepal.",
      },
      {
        question:
          "Have you planned your itinerary and researched key attractions in Nepal?",
        answers: ["yes", "no", "in progress"],
        correctAnswer: "yes",
        responseToUserIfNoSelected:
          "Enhance your experience by planning your Nepalese itinerary.",
      },
      {
        question:
          "Are you familiar with Nepalese cuisine and excited to try local dishes?",
        answers: ["yes", "no", "excited to try"],
        correctAnswer: "yes",
        responseToUserIfNoSelected:
          "Savor the flavors of Nepal by exploring local cuisine.",
      },
      {
        question:
          "Have you considered local currency and payment methods in Nepal?",
        answers: ["yes", "no", "need more info"],
        correctAnswer: "yes",
        responseToUserIfNoSelected:
          "Be prepared for transactions with knowledge of local currency in Nepal.",
      },
      {
        question: "Do you know basic Nepali phrases for communication?",
        answers: ["yes", "no", "learning essentials"],
        correctAnswer: "yes",
        responseToUserIfNoSelected:
          "Learn a few Nepali phrases to connect with locals during your Himalayan adventure.",
      },
      {
        question:
          "Have you checked travel advisories or restrictions for Nepal?",
        answers: ["yes", "no", "planning to"],
        correctAnswer: "yes",
        responseToUserIfNoSelected:
          "Stay informed with travel advisories for a smooth Nepalese journey.",
      },
    ],
    high: "Congratulations on passing the quiz! You're well-prepared for your journey through Nepal.",
    low: "It looks like you might need to prepare a bit more for your trip to Nepal. Check the resources again and try to improve your readiness!",
  },
  {
    route: "explore-oman-quiz",
    title: "Embark on Your Omani Odyssey!",
    description:
      "Embark on a quiz to ensure you're fully prepared for the captivating wonders of Oman. Answer these questions to unveil your readiness for an unforgettable journey through ancient history, rich culture, and stunning landscapes in the heart of the Arabian Peninsula.",
    questions: [
      {
        question: "Do you have a valid passport?",
        answers: ["yes", "no", "not sure"],
        correctAnswer: "yes",
        responseToUserIfNoSelected:
          "A valid passport is essential for your journey to Oman.",
      },
      {
        question:
          "Have you checked visa requirements and obtained the necessary travel documents for Oman?",
        answers: ["yes", "no", "in progress"],
        correctAnswer: "yes",
        responseToUserIfNoSelected:
          "Ensure you have the required travel documents for a smooth entry into Oman.",
      },
      {
        question: "Are you aware of local customs and traditions in Oman?",
        answers: ["yes", "no", "learning"],
        correctAnswer: "yes",
        responseToUserIfNoSelected:
          "Immerse yourself in the rich culture of Oman before your adventure.",
      },
      {
        question: "Have you booked accommodations for your stay in Oman?",
        answers: ["yes", "no", "still deciding"],
        correctAnswer: "yes",
        responseToUserIfNoSelected:
          "Ensure a comfortable stay by booking accommodations in advance.",
      },
      {
        question: "Do you have travel insurance for your Omani adventure?",
        answers: ["yes", "no", "considering"],
        correctAnswer: "yes",
        responseToUserIfNoSelected:
          "Travel confidently with insurance coverage for your journey through Oman.",
      },
      {
        question:
          "Have you planned your itinerary and researched key attractions in Oman?",
        answers: ["yes", "no", "in progress"],
        correctAnswer: "yes",
        responseToUserIfNoSelected:
          "Enhance your experience by planning your Omani itinerary.",
      },
      {
        question:
          "Are you familiar with Omani cuisine and excited to try local dishes?",
        answers: ["yes", "no", "excited to try"],
        correctAnswer: "yes",
        responseToUserIfNoSelected:
          "Savor the flavors of Oman by exploring local cuisine.",
      },
      {
        question:
          "Have you considered local currency and payment methods in Oman?",
        answers: ["yes", "no", "need more info"],
        correctAnswer: "yes",
        responseToUserIfNoSelected:
          "Be prepared for transactions with knowledge of local currency in Oman.",
      },
      {
        question: "Do you know basic Arabic phrases for communication?",
        answers: ["yes", "no", "learning essentials"],
        correctAnswer: "yes",
        responseToUserIfNoSelected:
          "Learn a few Arabic phrases to connect with locals during your Omani adventure.",
      },
      {
        question:
          "Have you checked travel advisories or restrictions for Oman?",
        answers: ["yes", "no", "planning to"],
        correctAnswer: "yes",
        responseToUserIfNoSelected:
          "Stay informed with travel advisories for a smooth Omani journey.",
      },
    ],
    high: "Congratulations on passing the quiz! You're well-prepared for your journey through Oman.",
    low: "It looks like you might need to prepare a bit more for your trip to Oman. Check the resources again and try to improve your readiness!",
  },
  {
    route: "explore-jordan-quiz",
    title: "Embark on Your Jordanian Odyssey!",
    description:
      "Embark on a quiz to ensure you're fully prepared for the captivating wonders of Jordan. Answer these questions to unveil your readiness for an unforgettable journey through ancient history, vibrant culture, and breathtaking landscapes in the heart of the Middle East.",
    questions: [
      {
        question: "Do you have a valid passport?",
        answers: ["yes", "no", "not sure"],
        correctAnswer: "yes",
        responseToUserIfNoSelected:
          "A valid passport is essential for your journey to Jordan.",
      },
      {
        question:
          "Have you checked visa requirements and obtained the necessary travel documents for Jordan?",
        answers: ["yes", "no", "in progress"],
        correctAnswer: "yes",
        responseToUserIfNoSelected:
          "Ensure you have the required travel documents for a smooth entry into Jordan.",
      },
      {
        question: "Are you aware of local customs and traditions in Jordan?",
        answers: ["yes", "no", "learning"],
        correctAnswer: "yes",
        responseToUserIfNoSelected:
          "Immerse yourself in the rich culture of Jordan before your adventure.",
      },
      {
        question: "Have you booked accommodations for your stay in Jordan?",
        answers: ["yes", "no", "still deciding"],
        correctAnswer: "yes",
        responseToUserIfNoSelected:
          "Ensure a comfortable stay by booking accommodations in advance.",
      },
      {
        question: "Do you have travel insurance for your Jordanian adventure?",
        answers: ["yes", "no", "considering"],
        correctAnswer: "yes",
        responseToUserIfNoSelected:
          "Travel confidently with insurance coverage for your journey through Jordan.",
      },
      {
        question:
          "Have you planned your itinerary and researched key attractions in Jordan?",
        answers: ["yes", "no", "in progress"],
        correctAnswer: "yes",
        responseToUserIfNoSelected:
          "Enhance your experience by planning your Jordanian itinerary.",
      },
      {
        question:
          "Are you familiar with Jordanian cuisine and excited to try local dishes?",
        answers: ["yes", "no", "excited to try"],
        correctAnswer: "yes",
        responseToUserIfNoSelected:
          "Savor the flavors of Jordan by exploring local cuisine.",
      },
      {
        question:
          "Have you considered local currency and payment methods in Jordan?",
        answers: ["yes", "no", "need more info"],
        correctAnswer: "yes",
        responseToUserIfNoSelected:
          "Be prepared for transactions with knowledge of local currency in Jordan.",
      },
      {
        question: "Do you know basic Arabic phrases for communication?",
        answers: ["yes", "no", "learning essentials"],
        correctAnswer: "yes",
        responseToUserIfNoSelected:
          "Learn a few Arabic phrases to connect with locals during your Jordanian adventure.",
      },
      {
        question:
          "Have you checked travel advisories or restrictions for Jordan?",
        answers: ["yes", "no", "planning to"],
        correctAnswer: "yes",
        responseToUserIfNoSelected:
          "Stay informed with travel advisories for a smooth Jordanian journey.",
      },
    ],
    high: "Congratulations on passing the quiz! You're well-prepared for your journey through Jordan.",
    low: "It looks like you might need to prepare a bit more for your trip to Jordan. Check the resources again and try to improve your readiness!",
  },
  {
    route: "explore-cuba-quiz",
    title: "Dive into Your Cuban Adventure!",
    description:
      "Embark on a quiz to ensure you're fully prepared for the vibrant wonders of Cuba. Answer these questions to unveil your readiness for an unforgettable journey through rich history, lively culture, and breathtaking landscapes in the heart of the Caribbean.",
    questions: [
      {
        question: "Do you have a valid passport?",
        answers: ["yes", "no", "not sure"],
        correctAnswer: "yes",
        responseToUserIfNoSelected:
          "A valid passport is essential for your journey to Cuba.",
      },
      {
        question:
          "Have you checked visa requirements and obtained the necessary travel documents for Cuba?",
        answers: ["yes", "no", "in progress"],
        correctAnswer: "yes",
        responseToUserIfNoSelected:
          "Ensure you have the required travel documents for a smooth entry into Cuba.",
      },
      {
        question: "Are you aware of the local customs and traditions in Cuba?",
        answers: ["yes", "no", "learning"],
        correctAnswer: "yes",
        responseToUserIfNoSelected:
          "Immerse yourself in the vibrant culture of Cuba before your adventure.",
      },
      {
        question: "Have you booked accommodations for your stay in Cuba?",
        answers: ["yes", "no", "still deciding"],
        correctAnswer: "yes",
        responseToUserIfNoSelected:
          "Ensure a comfortable stay by booking accommodations in advance.",
      },
      {
        question: "Do you have travel insurance for your Cuban adventure?",
        answers: ["yes", "no", "considering"],
        correctAnswer: "yes",
        responseToUserIfNoSelected:
          "Travel confidently with insurance coverage for your Cuban exploration.",
      },
      {
        question:
          "Have you planned your itinerary and researched key attractions in Cuba?",
        answers: ["yes", "no", "in progress"],
        correctAnswer: "yes",
        responseToUserIfNoSelected:
          "Enhance your experience by planning your Cuban itinerary.",
      },
      {
        question:
          "Are you familiar with Cuban cuisine and excited to try local dishes?",
        answers: ["yes", "no", "excited to try"],
        correctAnswer: "yes",
        responseToUserIfNoSelected:
          "Savor the flavors of Cuba by exploring local cuisine.",
      },
      {
        question:
          "Have you considered local currency and payment methods in Cuba?",
        answers: ["yes", "no", "need more info"],
        correctAnswer: "yes",
        responseToUserIfNoSelected:
          "Be prepared for transactions with knowledge of local currency in Cuba.",
      },
      {
        question: "Do you know basic Spanish phrases for communication?",
        answers: ["yes", "no", "learning essentials"],
        correctAnswer: "yes",
        responseToUserIfNoSelected:
          "Learn a few Spanish phrases to connect with locals during your Cuban adventure.",
      },
      {
        question:
          "Have you checked travel advisories or restrictions for Cuba?",
        answers: ["yes", "no", "planning to"],
        correctAnswer: "yes",
        responseToUserIfNoSelected:
          "Stay informed with travel advisories for a smooth Cuban experience.",
      },
    ],
    high: "Congratulations on passing the quiz! You're well-prepared for your journey through Cuba.",
    low: "It looks like you might need to prepare a bit more for your trip to Cuba. Check the resources again and try to improve your readiness!",
  },
  {
    route: "explore-tanzania-quiz",
    title: "Embark on Your Tanzanian Safari Journey!",
    description:
      "Take a quiz to ensure you're fully prepared for the mesmerizing wonders of Tanzania. Answer these questions to unveil your readiness for an unforgettable safari and cultural experience in the heart of East Africa.",
    questions: [
      {
        question: "Do you have a valid passport?",
        answers: ["yes", "no", "not sure"],
        correctAnswer: "yes",
        responseToUserIfNoSelected:
          "A valid passport is essential for your journey to Tanzania.",
      },
      {
        question:
          "Have you checked the weather conditions for your visit to Tanzania?",
        answers: ["yes", "no", "planning to"],
        correctAnswer: "yes",
        responseToUserIfNoSelected:
          "Pack appropriately by checking the weather for your Tanzanian adventure.",
      },
      {
        question: "Are you familiar with Tanzanian customs and traditions?",
        answers: ["yes", "no", "learning"],
        correctAnswer: "yes",
        responseToUserIfNoSelected:
          "Immerse yourself in the rich culture of Tanzania before your safari.",
      },
      {
        question: "Have you booked accommodations for your stay in Tanzania?",
        answers: ["yes", "no", "still deciding"],
        correctAnswer: "yes",
        responseToUserIfNoSelected:
          "Ensure a comfortable stay by booking accommodations in advance.",
      },
      {
        question: "Do you have travel insurance for your Tanzanian adventure?",
        answers: ["yes", "no", "considering"],
        correctAnswer: "yes",
        responseToUserIfNoSelected:
          "Travel confidently with insurance coverage for your Tanzanian safari.",
      },
      {
        question:
          "Have you planned your safari itinerary and researched key attractions?",
        answers: ["yes", "no", "in progress"],
        correctAnswer: "yes",
        responseToUserIfNoSelected:
          "Enhance your experience by planning your Tanzanian safari itinerary.",
      },
      {
        question:
          "Are you familiar with Tanzanian cuisine and excited to try local dishes?",
        answers: ["yes", "no", "excited to try"],
        correctAnswer: "yes",
        responseToUserIfNoSelected:
          "Savor the flavors of Tanzania by exploring local cuisine.",
      },
      {
        question:
          "Have you considered local currency and payment methods in Tanzania?",
        answers: ["yes", "no", "need more info"],
        correctAnswer: "yes",
        responseToUserIfNoSelected:
          "Be prepared for transactions with knowledge of local currency in Tanzania.",
      },
      {
        question: "Do you know basic Swahili phrases for communication?",
        answers: ["yes", "no", "learning essentials"],
        correctAnswer: "yes",
        responseToUserIfNoSelected:
          "Learn a few Swahili phrases to connect with locals during your Tanzanian adventure.",
      },
      {
        question:
          "Have you checked travel advisories or restrictions for Tanzania?",
        answers: ["yes", "no", "planning to"],
        correctAnswer: "yes",
        responseToUserIfNoSelected:
          "Stay informed with travel advisories for a smooth Tanzanian safari.",
      },
    ],
    high: "Congratulations on passing the quiz! You're well-prepared for your safari and cultural exploration in Tanzania.",
    low: "It looks like you might need to prepare a bit more for your Tanzanian safari. Check the resources again and try to improve your readiness!",
  },
  {
    route: "explore-kenya-quiz",
    title: "Embark on Your Kenyan Safari Adventure!",
    description:
      "Take a quiz to ensure you're fully prepared for the breathtaking wonders of Kenya. Answer these questions to reveal your readiness for an unforgettable safari and cultural experience in the heart of Africa.",
    questions: [
      {
        question: "Do you have a valid passport?",
        answers: ["yes", "no", "not sure"],
        correctAnswer: "yes",
        responseToUserIfNoSelected:
          "A valid passport is essential for your journey to Kenya.",
      },
      {
        question:
          "Have you checked the weather conditions for your visit to Kenya?",
        answers: ["yes", "no", "planning to"],
        correctAnswer: "yes",
        responseToUserIfNoSelected:
          "Pack appropriately by checking the weather for your Kenyan adventure.",
      },
      {
        question: "Are you familiar with Kenyan customs and traditions?",
        answers: ["yes", "no", "learning"],
        correctAnswer: "yes",
        responseToUserIfNoSelected:
          "Immerse yourself in the rich culture of Kenya before your safari.",
      },
      {
        question: "Have you booked accommodations for your stay in Kenya?",
        answers: ["yes", "no", "still deciding"],
        correctAnswer: "yes",
        responseToUserIfNoSelected:
          "Ensure a comfortable stay by booking accommodations in advance.",
      },
      {
        question: "Do you have travel insurance for your Kenyan adventure?",
        answers: ["yes", "no", "considering"],
        correctAnswer: "yes",
        responseToUserIfNoSelected:
          "Travel confidently with insurance coverage for your Kenyan safari.",
      },
      {
        question:
          "Have you planned your safari itinerary and researched key attractions?",
        answers: ["yes", "no", "in progress"],
        correctAnswer: "yes",
        responseToUserIfNoSelected:
          "Enhance your experience by planning your Kenyan safari itinerary.",
      },
      {
        question:
          "Are you familiar with Kenyan cuisine and excited to try local dishes?",
        answers: ["yes", "no", "excited to try"],
        correctAnswer: "yes",
        responseToUserIfNoSelected:
          "Savor the flavors of Kenya by exploring local cuisine.",
      },
      {
        question:
          "Have you considered local currency and payment methods in Kenya?",
        answers: ["yes", "no", "need more info"],
        correctAnswer: "yes",
        responseToUserIfNoSelected:
          "Be prepared for transactions with knowledge of local currency in Kenya.",
      },
      {
        question: "Do you know basic Swahili phrases for communication?",
        answers: ["yes", "no", "learning essentials"],
        correctAnswer: "yes",
        responseToUserIfNoSelected:
          "Learn a few Swahili phrases to connect with locals during your Kenyan adventure.",
      },
      {
        question:
          "Have you checked travel advisories or restrictions for Kenya?",
        answers: ["yes", "no", "planning to"],
        correctAnswer: "yes",
        responseToUserIfNoSelected:
          "Stay informed with travel advisories for a smooth Kenyan safari.",
      },
    ],
    high: "Congratulations on passing the quiz! You're well-prepared for your safari and cultural exploration in Kenya.",
    low: "It looks like you might need to prepare a bit more for your Kenyan safari. Check the resources again and try to improve your readiness!",
  },
  {
    route: "explore-ukraine-quiz",
    title: "Uncover Your Ukraine Adventure Suitability!",
    description:
      "Embark on a quest of self-discovery with our quiz to ensure you're fully prepared for the fascinating wonders of Ukraine. Answer these questions to reveal your readiness for an unforgettable Ukrainian experience.",
    questions: [
      {
        question: "Do you have a valid passport?",
        answers: ["yes", "no", "not sure"],
        correctAnswer: "yes",
        responseToUserIfNoSelected:
          "A valid passport is essential for traveling to Ukraine.",
      },
      {
        question:
          "Have you researched the weather conditions during your stay in Ukraine?",
        answers: ["yes", "no", "planning to"],
        correctAnswer: "yes",
        responseToUserIfNoSelected:
          "Check the weather to pack accordingly for your Ukrainian adventure.",
      },
      {
        question: "Are you familiar with Ukrainian customs and traditions?",
        answers: ["yes", "no", "learning"],
        correctAnswer: "yes",
        responseToUserIfNoSelected:
          "Discover the rich culture of Ukraine before your journey.",
      },
      {
        question: "Have you booked accommodation for your stay in Ukraine?",
        answers: ["yes", "no", "still deciding"],
        correctAnswer: "yes",
        responseToUserIfNoSelected:
          "Ensure a comfortable stay by booking your accommodation in advance.",
      },
      {
        question: "Do you have travel insurance for your trip to Ukraine?",
        answers: ["yes", "no", "considering"],
        correctAnswer: "yes",
        responseToUserIfNoSelected:
          "Travel confidently with insurance coverage for your Ukrainian adventure.",
      },
      {
        question:
          "Have you planned your itinerary and researched Ukraine's top attractions?",
        answers: ["yes", "no", "in progress"],
        correctAnswer: "yes",
        responseToUserIfNoSelected:
          "Enhance your experience by planning your Ukrainian itinerary.",
      },
      {
        question:
          "Are you familiar with Ukrainian cuisine and excited to try local dishes?",
        answers: ["yes", "no", "excited to try"],
        correctAnswer: "yes",
        responseToUserIfNoSelected:
          "Savor the flavors of Ukraine by exploring local cuisine.",
      },
      {
        question:
          "Have you considered local currency and payment methods in Ukraine?",
        answers: ["yes", "no", "need more info"],
        correctAnswer: "yes",
        responseToUserIfNoSelected:
          "Be prepared for transactions with knowledge of local currency in Ukraine.",
      },
      {
        question: "Do you know basic Ukrainian phrases for communication?",
        answers: ["yes", "no", "learning essentials"],
        correctAnswer: "yes",
        responseToUserIfNoSelected:
          "Learn a few phrases to connect with locals during your Ukrainian journey.",
      },
      {
        question:
          "Have you checked travel advisories or restrictions for Ukraine?",
        answers: ["yes", "no", "planning to"],
        correctAnswer: "yes",
        responseToUserIfNoSelected:
          "Stay informed with travel advisories for a smooth Ukrainian adventure.",
      },
    ],
    high: "Congratulations on passing the quiz! You're well-prepared for your Ukrainian adventure.",
    low: "It looks like you might need to prepare a bit more for your trip to Ukraine. Check the resources again and try to improve your readiness!",
  },
  {
    route: "explore-bulgaria-quiz",
    title: "Discover Your Bulgaria Readiness!",
    description:
      "Embark on a journey of self-discovery with our quiz to ensure you're fully prepared for the enchanting wonders of Bulgaria. Answer these questions to unveil your travel compatibility.",
    questions: [
      {
        question: "Do you have a passport?",
        answers: ["yes", "no", "not sure"],
        correctAnswer: "yes",
        responseToUserIfNoSelected:
          "You need a passport to travel to Bulgaria.",
      },
      {
        question:
          "Have you checked the weather forecast for Bulgaria during your travel dates?",
        answers: ["yes", "no", "planning to"],
        correctAnswer: "yes",
        responseToUserIfNoSelected:
          "Pack accordingly by checking the weather forecast!",
      },
      {
        question:
          "Are you aware of the local customs and traditions in Bulgaria?",
        answers: ["yes", "no", "learning"],
        correctAnswer: "yes",
        responseToUserIfNoSelected:
          "Learn about the rich culture before your journey.",
      },
      {
        question: "Have you booked accommodation for your stay in Bulgaria?",
        answers: ["yes", "no", "still deciding"],
        correctAnswer: "yes",
        responseToUserIfNoSelected:
          "Secure your stay for a worry-free experience.",
      },
      {
        question: "Do you have travel insurance for your trip to Bulgaria?",
        answers: ["yes", "no", "considering"],
        correctAnswer: "yes",
        responseToUserIfNoSelected:
          "Ensure a safe journey with travel insurance.",
      },
      {
        question:
          "Have you researched and planned your itinerary for Bulgaria?",
        answers: ["yes", "no", "in progress"],
        correctAnswer: "yes",
        responseToUserIfNoSelected:
          "Explore the best of Bulgaria with a well-planned itinerary.",
      },
      {
        question: "Are you familiar with the local cuisine in Bulgaria?",
        answers: ["yes", "no", "excited to try"],
        correctAnswer: "yes",
        responseToUserIfNoSelected:
          "Savor the flavors of Bulgaria by researching local dishes.",
      },
      {
        question:
          "Have you considered the local currency and payment methods in Bulgaria?",
        answers: ["yes", "no", "need more info"],
        correctAnswer: "yes",
        responseToUserIfNoSelected:
          "Prepare for transactions with knowledge of local currency.",
      },
      {
        question:
          "Do you know basic Bulgarian phrases to communicate with locals?",
        answers: ["yes", "no", "learning essentials"],
        correctAnswer: "yes",
        responseToUserIfNoSelected:
          "Learn a few phrases to enhance your cultural experience.",
      },
      {
        question:
          "Have you checked any travel advisories or restrictions for Bulgaria?",
        answers: ["yes", "no", "planning to"],
        correctAnswer: "yes",
        responseToUserIfNoSelected:
          "Stay updated on travel advisories for a smooth journey.",
      },
    ],
    high: "Congratulations on passing the quiz! You seem well-prepared for your journey to Bulgaria.",
    low: "It looks like there are some areas you might need to prepare more for your trip to Bulgaria. Review the suggested resources and ensure you're ready!",
  },
  {
    route: "ready-set-states",
    title: "Unlock Your Journey: USA Travel Readiness Quiz",
    description:
      "Embark on an adventure to the United States! Assess your readiness with our quiz and ensure you're all set for the journey of a lifetime.",
    questions: [
      {
        question: "Do you have a passport?",
        answers: ["yes", "no", "not sure"],
        correctAnswer: "yes",
        responseToUserIfNoSelected: "You need a passport to travel to the USA.",
      },
      {
        question: "Have you applied for a U.S. visa?",
        answers: ["yes", "no", "in progress"],
        correctAnswer: "yes",
        responseToUserIfNoSelected: "A U.S. visa is required for travel.",
      },
      {
        question: "Is your ESTA authorization up to date?",
        answers: ["yes", "no", "not applicable"],
        correctAnswer: "yes",
        responseToUserIfNoSelected: "Ensure your ESTA is current for entry.",
      },
      {
        question: "Have you booked your accommodation?",
        answers: ["yes", "no", "still deciding"],
        correctAnswer: "yes",
        responseToUserIfNoSelected: "Secure accommodation for a smooth stay.",
      },
      {
        question: "Do you have travel insurance?",
        answers: ["yes", "no", "thinking about it"],
        correctAnswer: "yes",
        responseToUserIfNoSelected:
          "Travel insurance is essential for peace of mind.",
      },
      {
        question: "Are your vaccinations up to date?",
        answers: ["yes", "no", "consulting with doctor"],
        correctAnswer: "yes",
        responseToUserIfNoSelected:
          "Ensure vaccinations are current for a healthy trip.",
      },
      {
        question: "Do you know the local emergency numbers?",
        answers: ["yes", "no", "researching"],
        correctAnswer: "yes",
        responseToUserIfNoSelected:
          "Familiarize yourself with local emergency contacts.",
      },
      {
        question: "Have you checked baggage restrictions?",
        answers: ["yes", "no", "not yet"],
        correctAnswer: "yes",
        responseToUserIfNoSelected: "Review baggage rules to avoid hassles.",
      },
      {
        question: "Are you aware of cultural norms in the USA?",
        answers: ["yes", "no", "studying"],
        correctAnswer: "yes",
        responseToUserIfNoSelected:
          "Learn about cultural norms for a respectful visit.",
      },
      {
        question: "Have you exchanged currency to USD?",
        answers: ["yes", "no", "planning to"],
        correctAnswer: "yes",
        responseToUserIfNoSelected:
          "Exchange currency to make transactions smoother.",
      },
      {
        question: "Do you have a travel itinerary?",
        answers: ["yes", "no", "working on it"],
        correctAnswer: "yes",
        responseToUserIfNoSelected:
          "Plan your itinerary for a well-organized trip.",
      },
      {
        question: "Are you familiar with U.S. transportation options?",
        answers: ["yes", "no", "researching"],
        correctAnswer: "yes",
        responseToUserIfNoSelected:
          "Know your transportation choices for convenient travel.",
      },
      {
        question: "Have you researched local cuisine?",
        answers: ["yes", "no", "excited to try"],
        correctAnswer: "yes",
        responseToUserIfNoSelected:
          "Explore local cuisine for a delightful culinary experience.",
      },
      {
        question: "Do you know the local customs for tipping?",
        answers: ["yes", "no", "looking into it"],
        correctAnswer: "yes",
        responseToUserIfNoSelected:
          "Understand tipping customs for a courteous stay.",
      },
      {
        question: "Have you packed weather-appropriate clothing?",
        answers: ["yes", "no", "still deciding"],
        correctAnswer: "yes",
        responseToUserIfNoSelected: "Pack accordingly for a comfortable trip.",
      },
    ],
    high: "Congratulations on passing the quiz! You're well-prepared for your journey to the USA.",
    low: "It looks like you might need to prepare a bit more for your trip. Review your answers and try again!",
  },
  {
    route: "bon-voyage-france",
    title: "Bonjour Explorer: France Travel Readiness Quiz",
    description:
      "Get ready for a French adventure! Assess your travel readiness with our quiz and ensure you're prepared to savor the charm and culture of France.",
    questions: [
      {
        question: "Do you have a valid passport?",
        answers: ["yes", "no", "not sure"],
        correctAnswer: "yes",
        responseToUserIfNoSelected:
          "You'll need a valid passport to travel to France.",
      },
      {
        question: "Have you obtained a Schengen visa?",
        answers: ["yes", "no", "in process"],
        correctAnswer: "yes",
        responseToUserIfNoSelected:
          "Ensure you have a Schengen visa for entry into France.",
      },
      {
        question: "Have you booked your accommodation in France?",
        answers: ["yes", "no", "still deciding"],
        correctAnswer: "yes",
        responseToUserIfNoSelected:
          "Secure your accommodation for a comfortable stay.",
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
        question: "Do you know basic French phrases?",
        answers: ["yes", "no", "learning"],
        correctAnswer: "yes",
        responseToUserIfNoSelected:
          "Familiarize yourself with basic French phrases for better communication.",
      },
      {
        question: "Have you checked the local weather forecast?",
        answers: ["yes", "no", "not yet"],
        correctAnswer: "yes",
        responseToUserIfNoSelected:
          "Check the weather forecast to pack accordingly for your trip.",
      },
      {
        question: "Do you know emergency numbers in France?",
        answers: ["yes", "no", "researching"],
        correctAnswer: "yes",
        responseToUserIfNoSelected:
          "Familiarize yourself with emergency numbers for a safe visit.",
      },
      {
        question: "Have you planned your itinerary in France?",
        answers: ["yes", "no", "working on it"],
        correctAnswer: "yes",
        responseToUserIfNoSelected:
          "Plan your itinerary for an organized and enjoyable trip.",
      },
      {
        question: "Do you know the tipping etiquette in France?",
        answers: ["yes", "no", "looking into it"],
        correctAnswer: "yes",
        responseToUserIfNoSelected:
          "Understand the tipping customs for a courteous stay.",
      },
      {
        question: "Are you aware of local transportation options?",
        answers: ["yes", "no", "researching"],
        correctAnswer: "yes",
        responseToUserIfNoSelected:
          "Know your transportation options for convenient travel.",
      },
      {
        question: "Have you researched French cuisine?",
        answers: ["yes", "no", "excited to try"],
        correctAnswer: "yes",
        responseToUserIfNoSelected:
          "Explore and indulge in the delightful French cuisine.",
      },
      {
        question: "Do you have a power adapter for your devices?",
        answers: ["yes", "no", "need to buy one"],
        correctAnswer: "yes",
        responseToUserIfNoSelected:
          "Ensure you have the right power adapter for your devices.",
      },
      {
        question: "Have you informed your bank about your travel?",
        answers: ["yes", "no", "not yet"],
        correctAnswer: "yes",
        responseToUserIfNoSelected:
          "Notify your bank to avoid any issues with your cards during your trip.",
      },
      {
        question: "Do you have a basic understanding of French culture?",
        answers: ["yes", "no", "researching"],
        correctAnswer: "yes",
        responseToUserIfNoSelected:
          "Learn about French culture to enhance your travel experience.",
      },
    ],
    high: "Félicitations! You're ready for your French adventure. Enjoy the beauty and culture of France.",
    low: "It looks like you might need to prepare a bit more for your trip to France. Review the areas you're less familiar with to ensure a smooth and enjoyable experience.",
  },
  {
    route: "ole-spain",
    title: "¡Vamos! Spain Adventure Quiz",
    description:
      "Get ready for an unforgettable Spanish escapade! Assess your travel readiness with our quiz and ensure you're prepared to embrace the vibrant culture and beauty of Spain.",
    questions: [
      {
        question: "Do you have a valid passport?",
        answers: ["yes", "no", "not sure"],
        correctAnswer: "yes",
        responseToUserIfNoSelected:
          "A valid passport is essential for travel to Spain.",
      },
      {
        question: "Have you obtained a Schengen visa for Spain?",
        answers: ["yes", "no", "in process"],
        correctAnswer: "yes",
        responseToUserIfNoSelected:
          "Ensure you have a Schengen visa for entry into Spain.",
      },
      {
        question: "Have you booked your accommodation in Spain?",
        answers: ["yes", "no", "still deciding"],
        correctAnswer: "yes",
        responseToUserIfNoSelected:
          "Secure your accommodation for a comfortable stay in Spain.",
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
          "Check the weather forecast to pack accordingly for your trip to Spain.",
      },
      {
        question: "Do you know emergency numbers in Spain?",
        answers: ["yes", "no", "researching"],
        correctAnswer: "yes",
        responseToUserIfNoSelected:
          "Familiarize yourself with emergency numbers for a safe visit to Spain.",
      },
      {
        question: "Have you planned your itinerary in Spain?",
        answers: ["yes", "no", "working on it"],
        correctAnswer: "yes",
        responseToUserIfNoSelected:
          "Plan your itinerary for an organized and enjoyable trip in Spain.",
      },
      {
        question: "Are you aware of local transportation options in Spain?",
        answers: ["yes", "no", "researching"],
        correctAnswer: "yes",
        responseToUserIfNoSelected:
          "Know your transportation options for convenient travel within Spain.",
      },
      {
        question: "Have you researched Spanish cuisine?",
        answers: ["yes", "no", "excited to try"],
        correctAnswer: "yes",
        responseToUserIfNoSelected:
          "Explore and savor the delightful flavors of Spanish cuisine.",
      },
      {
        question: "Do you have a power adapter for your devices?",
        answers: ["yes", "no", "need to buy one"],
        correctAnswer: "yes",
        responseToUserIfNoSelected:
          "Ensure you have the right power adapter for your devices in Spain.",
      },
      {
        question: "Have you informed your bank about your travel to Spain?",
        answers: ["yes", "no", "not yet"],
        correctAnswer: "yes",
        responseToUserIfNoSelected:
          "Notify your bank to avoid any issues with your cards during your trip to Spain.",
      },
      {
        question: "Do you have a basic understanding of Spanish culture?",
        answers: ["yes", "no", "researching"],
        correctAnswer: "yes",
        responseToUserIfNoSelected:
          "Learn about Spanish culture to enhance your travel experience.",
      },
      {
        question: "Are you familiar with the siesta tradition in Spain?",
        answers: ["yes", "no", "not sure"],
        correctAnswer: "yes",
        responseToUserIfNoSelected:
          "Embrace the siesta tradition for a truly authentic Spanish experience.",
      },
    ],
    high: "¡Fantástico! You're all set for your journey to Spain. Embrace the vibrant culture and stunning landscapes.",
    low: "It seems you might need to prepare a bit more for your Spanish adventure. Review the areas where you're less familiar to ensure a memorable and smooth experience.",
  },
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
    route: "aussie-adventure-quiz",
    title: "Aussie Explorer: Journey Readiness Quiz",
    description:
      "Embark on an unforgettable journey to Australia! Evaluate your travel readiness with our quiz and ensure you're well-prepared to discover the diverse landscapes, unique wildlife, and laid-back charm of the Land Down Under.",
    questions: [
      {
        question: "Do you have a valid passport?",
        answers: ["yes", "no", "not sure"],
        correctAnswer: "yes",
        responseToUserIfNoSelected:
          "A valid passport is essential for travel to Australia.",
      },
      {
        question: "Have you checked if you need a visa for Australia?",
        answers: ["yes", "no", "in process"],
        correctAnswer: "yes",
        responseToUserIfNoSelected:
          "Ensure you have the necessary visa for entry into Australia.",
      },
      {
        question: "Have you researched Australian customs and etiquette?",
        answers: ["yes", "no", "in progress"],
        correctAnswer: "yes",
        responseToUserIfNoSelected:
          "Familiarize yourself with Australian customs for a respectful visit.",
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
        question: "Have you booked your accommodation in Australia?",
        answers: ["yes", "no", "still deciding"],
        correctAnswer: "yes",
        responseToUserIfNoSelected:
          "Secure your accommodation for a comfortable stay in Australia.",
      },
      {
        question: "Do you know basic Australian phrases?",
        answers: ["yes", "no", "learning"],
        correctAnswer: "yes",
        responseToUserIfNoSelected:
          "Familiarize yourself with basic Australian phrases for better communication.",
      },
      {
        question: "Have you checked the local weather forecast?",
        answers: ["yes", "no", "not yet"],
        correctAnswer: "yes",
        responseToUserIfNoSelected:
          "Check the weather forecast to pack accordingly for your trip to Australia.",
      },
      {
        question: "Do you know emergency numbers in Australia?",
        answers: ["yes", "no", "researching"],
        correctAnswer: "yes",
        responseToUserIfNoSelected:
          "Familiarize yourself with emergency numbers for a safe visit to Australia.",
      },
      {
        question: "Have you planned your itinerary in Australia?",
        answers: ["yes", "no", "working on it"],
        correctAnswer: "yes",
        responseToUserIfNoSelected:
          "Plan your itinerary for an organized and enjoyable trip in Australia.",
      },
      {
        question: "Are you aware of local transportation options in Australia?",
        answers: ["yes", "no", "researching"],
        correctAnswer: "yes",
        responseToUserIfNoSelected:
          "Know your transportation options for convenient travel within Australia.",
      },
      {
        question: "Have you researched Australian cuisine?",
        answers: ["yes", "no", "excited to try"],
        correctAnswer: "yes",
        responseToUserIfNoSelected:
          "Explore and savor the delightful flavors of Australian cuisine.",
      },
      {
        question: "Do you have a power adapter for your devices?",
        answers: ["yes", "no", "need to buy one"],
        correctAnswer: "yes",
        responseToUserIfNoSelected:
          "Ensure you have the right power adapter for your devices in Australia.",
      },
      {
        question: "Have you informed your bank about your travel to Australia?",
        answers: ["yes", "no", "not yet"],
        correctAnswer: "yes",
        responseToUserIfNoSelected:
          "Notify your bank to avoid any issues with your cards during your trip to Australia.",
      },
      {
        question:
          "Are you familiar with popular tourist attractions in Australia?",
        answers: ["yes", "no", "researching"],
        correctAnswer: "yes",
        responseToUserIfNoSelected:
          "Explore famous attractions for a memorable journey in Australia.",
      },
    ],
    high: "Congratulations on passing the quiz! You're well-prepared for your Aussie adventure.",
    low: "It seems like you might need to prepare a bit more for your journey to Australia. Check the areas you need to improve on and try again!",
  },
  {
    route: "dutch-discovery-quiz",
    title: "Dutch Discovery: Journey Readiness Quiz",
    description:
      "Embark on a charming journey to the Netherlands! Evaluate your travel readiness with our quiz and ensure you're well-prepared to explore the picturesque landscapes, rich culture, and historic charm of this delightful destination.",
    questions: [
      {
        question: "Do you have a valid passport?",
        answers: ["yes", "no", "not sure"],
        correctAnswer: "yes",
        responseToUserIfNoSelected:
          "A valid passport is essential for travel to the Netherlands.",
      },
      {
        question: "Have you checked if you need a visa for the Netherlands?",
        answers: ["yes", "no", "in process"],
        correctAnswer: "yes",
        responseToUserIfNoSelected:
          "Ensure you have the necessary visa for entry into the Netherlands.",
      },
      {
        question: "Have you researched Dutch customs and etiquette?",
        answers: ["yes", " no", "in progress"],
        correctAnswer: "yes",
        responseToUserIfNoSelected:
          "Familiarize yourself with Dutch customs for a respectful visit.",
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
        question: "Have you booked your accommodation in the Netherlands?",
        answers: ["yes", "no", "still deciding"],
        correctAnswer: "yes",
        responseToUserIfNoSelected:
          "Secure your accommodation for a comfortable stay in the Netherlands.",
      },
      {
        question: "Do you know basic Dutch phrases?",
        answers: ["yes", "no", "learning"],
        correctAnswer: "yes",
        responseToUserIfNoSelected:
          "Familiarize yourself with basic Dutch phrases for better communication.",
      },
      {
        question: "Have you checked the local weather forecast?",
        answers: ["yes", "no", "not yet"],
        correctAnswer: "yes",
        responseToUserIfNoSelected:
          "Check the weather forecast to pack accordingly for your trip to the Netherlands.",
      },
      {
        question: "Do you know emergency numbers in the Netherlands?",
        answers: ["yes", "no", "researching"],
        correctAnswer: "yes",
        responseToUserIfNoSelected:
          "Familiarize yourself with emergency numbers for a safe visit to the Netherlands.",
      },
      {
        question: "Have you planned your itinerary in the Netherlands?",
        answers: ["yes", "no", "working on it"],
        correctAnswer: "yes",
        responseToUserIfNoSelected:
          "Plan your itinerary for an organized and enjoyable trip in the Netherlands.",
      },
      {
        question:
          "Are you aware of local transportation options in the Netherlands?",
        answers: ["yes", "no", "researching"],
        correctAnswer: "yes",
        responseToUserIfNoSelected:
          "Know your transportation options for convenient travel within the Netherlands.",
      },
      {
        question: "Have you researched Dutch cuisine?",
        answers: ["yes", "no", "excited to try"],
        correctAnswer: "yes",
        responseToUserIfNoSelected:
          "Explore and savor the delightful flavors of Dutch cuisine.",
      },
      {
        question: "Do you have a power adapter for your devices?",
        answers: ["yes", "no", "need to buy one"],
        correctAnswer: "yes",
        responseToUserIfNoSelected:
          "Ensure you have the right power adapter for your devices in the Netherlands.",
      },
      {
        question:
          "Have you informed your bank about your travel to the Netherlands?",
        answers: ["yes", "no", "not yet"],
        correctAnswer: "yes",
        responseToUserIfNoSelected:
          "Notify your bank to avoid any issues with your cards during your trip to the Netherlands.",
      },
      {
        question:
          "Are you familiar with popular tourist attractions in the Netherlands?",
        answers: ["yes", "no", "researching"],
        correctAnswer: "yes",
        responseToUserIfNoSelected:
          "Explore famous attractions for a memorable journey in the Netherlands.",
      },
    ],
    high: "Congratulations on passing the quiz! You're well-prepared for your Dutch journey.",
    low: "It seems you might need to prepare a bit more for your trip to the Netherlands. Check the answers and try again!",
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
    route: "indonesian-exploration-quiz",
    title: "Indonesian Exploration: Journey Readiness Quiz",
    description:
      "Embark on a thrilling exploration of Indonesia! Evaluate your travel readiness with our quiz and ensure you're well-prepared to discover the diverse landscapes, vibrant cultures, and natural wonders of this enchanting archipelago.",
    questions: [
      {
        question: "Do you have a valid passport?",
        answers: ["yes", "no", "not sure"],
        correctAnswer: "yes",
        responseToUserIfNoSelected:
          "A valid passport is essential for travel to Indonesia.",
      },
      {
        question: "Have you checked if you need a visa for Indonesia?",
        answers: ["yes", "no", "in process"],
        correctAnswer: "yes",
        responseToUserIfNoSelected:
          "Ensure you have the necessary visa for entry into Indonesia.",
      },
      {
        question: "Have you researched Indonesian customs and etiquette?",
        answers: ["yes", "no", "in progress"],
        correctAnswer: "yes",
        responseToUserIfNoSelected:
          "Familiarize yourself with Indonesian customs for a respectful visit.",
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
        question: "Have you booked your accommodation in Indonesia?",
        answers: ["yes", "no", "still deciding"],
        correctAnswer: "yes",
        responseToUserIfNoSelected:
          "Secure your accommodation for a comfortable stay in Indonesia.",
      },
      {
        question: "Do you know basic Indonesian phrases?",
        answers: ["yes", "no", "learning"],
        correctAnswer: "yes",
        responseToUserIfNoSelected:
          "Familiarize yourself with basic Indonesian phrases for better communication.",
      },
      {
        question: "Have you checked the local weather forecast?",
        answers: ["yes", "no", "not yet"],
        correctAnswer: "yes",
        responseToUserIfNoSelected:
          "Check the weather forecast to pack accordingly for your trip to Indonesia.",
      },
      {
        question: "Do you know emergency numbers in Indonesia?",
        answers: ["yes", "no", "researching"],
        correctAnswer: "yes",
        responseToUserIfNoSelected:
          "Familiarize yourself with emergency numbers for a safe visit to Indonesia.",
      },
      {
        question: "Have you planned your itinerary in Indonesia?",
        answers: [" yes", "no", "working on it"],
        correctAnswer: "yes",
        responseToUserIfNoSelected:
          "Plan your itinerary for an organized and enjoyable trip in Indonesia.",
      },
      {
        question: "Are you aware of local transportation options in Indonesia?",
        answers: ["yes", "no", "researching"],
        correctAnswer: "yes",
        responseToUserIfNoSelected:
          "Know your transportation options for convenient travel within Indonesia.",
      },
      {
        question: "Have you researched Indonesian cuisine?",
        answers: ["yes", "no", "excited to try"],
        correctAnswer: "yes",
        responseToUserIfNoSelected:
          "Explore and savor the delightful flavors of Indonesian cuisine.",
      },
      {
        question: "Do you have a power adapter for your devices?",
        answers: ["yes", "no", "need to buy one"],
        correctAnswer: "yes",
        responseToUserIfNoSelected:
          "Ensure you have the right power adapter for your devices in Indonesia.",
      },
      {
        question: "Have you informed your bank about your travel to Indonesia?",
        answers: ["yes", "no", "not yet"],
        correctAnswer: "yes",
        responseToUserIfNoSelected:
          "Notify your bank to avoid any issues with your cards during your trip to Indonesia.",
      },
      {
        question:
          "Are you familiar with popular tourist attractions in Indonesia?",
        answers: ["yes", "no", "researching"],
        correctAnswer: "yes",
        responseToUserIfNoSelected:
          "Explore famous attractions for a memorable journey in Indonesia.",
      },
    ],
    high: "Congratulations on passing the quiz! You're well-prepared for your journey to Indonesia.",
    low: "It seems you might need to prepare a bit more for your trip to Indonesia. Check the responses for guidance!",
  },
  {
    route: "vietnamese-adventure-quiz",
    title: "Vietnamese Adventure: Journey Readiness Quiz",
    description:
      "Embark on an exciting adventure to Vietnam! Evaluate your travel readiness with our quiz and ensure you're well-prepared to explore the rich history, diverse cultures, and stunning landscapes of this captivating Southeast Asian gem.",
    questions: [
      {
        question: "Do you have a valid passport?",
        answers: ["yes", "no", "not sure"],
        correctAnswer: "yes",
        responseToUserIfNoSelected:
          "A valid passport is essential for travel to Vietnam.",
      },
      {
        question: "Have you checked if you need a visa for Vietnam?",
        answers: ["yes", "no", "in process"],
        correctAnswer: "yes",
        responseToUserIfNoSelected:
          "Ensure you have the necessary visa for entry into Vietnam.",
      },
      {
        question: "Have you researched Vietnamese customs and etiquette?",
        answers: ["yes", "no", "in progress"],
        correctAnswer: "yes",
        responseToUserIfNoSelected:
          "Familiarize yourself with Vietnamese customs for a respectful visit.",
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
        question: "Have you booked your accommodation in Vietnam?",
        answers: ["yes", "no", "still deciding"],
        correctAnswer: "yes",
        responseToUserIfNoSelected:
          "Secure your accommodation for a comfortable stay in Vietnam.",
      },
      {
        question: "Do you know basic Vietnamese phrases?",
        answers: ["yes", "no", "learning"],
        correctAnswer: "yes",
        responseToUserIfNoSelected:
          "Familiarize yourself with basic Vietnamese phrases for better communication.",
      },
      {
        question: "Have you checked the local weather forecast?",
        answers: ["yes", "no", "not yet"],
        correctAnswer: "yes",
        responseToUserIfNoSelected:
          "Check the weather forecast to pack accordingly for your trip to Vietnam.",
      },
      {
        question: "Do you know emergency numbers in Vietnam?",
        answers: ["yes", "no", "researching"],
        correctAnswer: "yes",
        responseToUserIfNoSelected:
          "Familiarize yourself with emergency numbers for a safe visit to Vietnam.",
      },
      {
        question: "Have you planned your itinerary in Vietnam?",
        answers: [" yes", "no", "working on it"],
        correctAnswer: "yes",
        responseToUserIfNoSelected:
          "Plan your itinerary for an organized and enjoyable trip in Vietnam.",
      },
      {
        question: "Are you aware of local transportation options in Vietnam?",
        answers: ["yes", "no", "researching"],
        correctAnswer: "yes",
        responseToUserIfNoSelected:
          "Know your transportation options for convenient travel within Vietnam.",
      },
      {
        question: "Have you researched Vietnamese cuisine?",
        answers: ["yes", "no", "excited to try"],
        correctAnswer: "yes",
        responseToUserIfNoSelected:
          "Explore and savor the delightful flavors of Vietnamese cuisine.",
      },
      {
        question: "Do you have a power adapter for your devices?",
        answers: ["yes", "no", "need to buy one"],
        correctAnswer: "yes",
        responseToUserIfNoSelected:
          "Ensure you have the right power adapter for your devices in Vietnam.",
      },
      {
        question: "Have you informed your bank about your travel to Vietnam?",
        answers: ["yes", "no", "not yet"],
        correctAnswer: "yes",
        responseToUserIfNoSelected:
          "Notify your bank to avoid any issues with your cards during your trip to Vietnam.",
      },
      {
        question:
          "Are you familiar with popular tourist attractions in Vietnam?",
        answers: ["yes", "no", "researching"],
        correctAnswer: "yes",
        responseToUserIfNoSelected:
          "Explore famous attractions for a memorable journey in Vietnam.",
      },
    ],
    high: "Congratulations on being well-prepared for your Vietnamese adventure! Enjoy your journey.",
    low: "It looks like you may need to prepare a bit more for your trip to Vietnam. Please review the quiz again to see what steps you might have missed.",
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
    route: "hungarian-adventure-quiz",
    title: "Hungarian Adventure: Journey Readiness Quiz",
    description:
      "Embark on a cultural adventure in Hungary! Evaluate your travel readiness with our quiz and ensure you're well-prepared to explore the historic landmarks, rich traditions, and savory cuisine of this Central European gem.",
    questions: [
      {
        question: "Do you have a valid passport?",
        answers: ["yes", "no", "not sure"],
        correctAnswer: "yes",
        responseToUserIfNoSelected:
          "A valid passport is essential for travel to Hungary.",
      },
      {
        question: "Have you checked if you need a visa for Hungary?",
        answers: ["yes", "no", "in process"],
        correctAnswer: "yes",
        responseToUserIfNoSelected:
          "Ensure you have the necessary visa for entry into Hungary.",
      },
      {
        question: "Have you researched Hungarian customs and etiquette?",
        answers: ["yes", "no", "in progress"],
        correctAnswer: "yes",
        responseToUserIfNoSelected:
          "Familiarize yourself with Hungarian customs for a respectful visit.",
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
        question: "Have you booked your accommodation in Hungary?",
        answers: ["yes", "no", "still deciding"],
        correctAnswer: "yes",
        responseToUserIfNoSelected:
          "Secure your accommodation for a comfortable stay in Hungary.",
      },
      {
        question: "Do you know basic Hungarian phrases?",
        answers: ["yes", "no", "learning"],
        correctAnswer: "yes",
        responseToUserIfNoSelected:
          "Familiarize yourself with basic Hungarian phrases for better communication.",
      },
      {
        question: "Have you checked the local weather forecast?",
        answers: ["yes", "no", "not yet"],
        correctAnswer: "yes",
        responseToUserIfNoSelected:
          "Check the weather forecast to pack accordingly for your trip to Hungary.",
      },
      {
        question: "Do you know emergency numbers in Hungary?",
        answers: ["yes", "no", "researching"],
        correctAnswer: "yes",
        responseToUserIfNoSelected:
          "Familiarize yourself with emergency numbers for a safe visit to Hungary.",
      },
      {
        question: "Have you planned your itinerary in Hungary?",
        answers: [" yes", "no", "working on it"],
        correctAnswer: "yes",
        responseToUserIfNoSelected:
          "Plan your itinerary for an organized and enjoyable trip in Hungary.",
      },
      {
        question: "Are you aware of local transportation options in Hungary?",
        answers: ["yes", "no", "researching"],
        correctAnswer: "yes",
        responseToUserIfNoSelected:
          "Know your transportation options for convenient travel within Hungary.",
      },
      {
        question: "Have you researched Hungarian cuisine?",
        answers: ["yes", "no", "excited to try"],
        correctAnswer: "yes",
        responseToUserIfNoSelected:
          "Explore and savor the delightful flavors of Hungarian cuisine.",
      },
      {
        question: "Do you have a power adapter for your devices?",
        answers: ["yes", "no", "need to buy one"],
        correctAnswer: "yes",
        responseToUserIfNoSelected:
          "Ensure you have the right power adapter for your devices in Hungary.",
      },
      {
        question: "Have you informed your bank about your travel to Hungary?",
        answers: ["yes", "no", "not yet"],
        correctAnswer: "yes",
        responseToUserIfNoSelected:
          "Notify your bank to avoid any issues with your cards during your trip to Hungary.",
      },
      {
        question:
          "Are you familiar with popular tourist attractions in Hungary?",
        answers: ["yes", "no", "researching"],
        correctAnswer: "yes",
        responseToUserIfNoSelected:
          "Explore famous attractions for a memorable journey in Hungary.",
      },
    ],
    high: "Congratulations on passing the quiz! You're well-prepared for your Hungarian adventure.",
    low: "It seems you might need to prepare a bit more for your trip to Hungary. Check the answers and try again to ensure a great journey!",
  },
  {
    route: "croatian-discovery-quiz",
    title: "Croatian Discovery: Journey Readiness Quiz",
    description:
      "Embark on a sun-soaked discovery of Croatia! Evaluate your travel readiness with our quiz and ensure you're well-prepared to explore the stunning coastlines, historic cities, and rich culture of this Adriatic gem.",
    questions: [
      {
        question: "Do you have a valid passport?",
        answers: ["yes", "no", "not sure"],
        correctAnswer: "yes",
        responseToUserIfNoSelected:
          "A valid passport is essential for travel to Croatia.",
      },
      {
        question: "Have you checked if you need a visa for Croatia?",
        answers: ["yes", "no", "in process"],
        correctAnswer: "yes",
        responseToUserIfNoSelected:
          "Ensure you have the necessary visa for entry into Croatia.",
      },
      {
        question: "Have you researched Croatian customs and etiquette?",
        answers: ["yes", "no", "in progress"],
        correctAnswer: "yes",
        responseToUserIfNoSelected:
          "Familiarize yourself with Croatian customs for a respectful visit.",
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
        question: "Have you booked your accommodation in Croatia?",
        answers: ["yes", "no", "still deciding"],
        correctAnswer: "yes",
        responseToUserIfNoSelected:
          "Secure your accommodation for a comfortable stay in Croatia.",
      },
      {
        question: "Do you know basic Croatian phrases?",
        answers: ["yes", "no", "learning"],
        correctAnswer: "yes",
        responseToUserIfNoSelected:
          "Familiarize yourself with basic Croatian phrases for better communication.",
      },
      {
        question: "Have you checked the local weather forecast?",
        answers: ["yes", "no", "not yet"],
        correctAnswer: "yes",
        responseToUserIfNoSelected:
          "Check the weather forecast to pack accordingly for your trip to Croatia.",
      },
      {
        question: "Do you know emergency numbers in Croatia?",
        answers: ["yes", "no", "researching"],
        correctAnswer: "yes",
        responseToUserIfNoSelected:
          "Familiarize yourself with emergency numbers for a safe visit to Croatia.",
      },
      {
        question: "Have you planned your itinerary in Croatia?",
        answers: [" yes", "no", "working on it"],
        correctAnswer: "yes",
        responseToUserIfNoSelected:
          "Plan your itinerary for an organized and enjoyable trip in Croatia.",
      },
      {
        question: "Are you aware of local transportation options in Croatia?",
        answers: ["yes", "no", "researching"],
        correctAnswer: "yes",
        responseToUserIfNoSelected:
          "Know your transportation options for convenient travel within Croatia.",
      },
      {
        question: "Have you researched Croatian cuisine?",
        answers: ["yes", "no", "excited to try"],
        correctAnswer: "yes",
        responseToUserIfNoSelected:
          "Explore and savor the delightful flavors of Croatian cuisine.",
      },
      {
        question: "Do you have a power adapter for your devices?",
        answers: ["yes", "no", "need to buy one"],
        correctAnswer: "yes",
        responseToUserIfNoSelected:
          "Ensure you have the right power adapter for your devices in Croatia.",
      },
      {
        question: "Have you informed your bank about your travel to Croatia?",
        answers: ["yes", "no", "not yet"],
        correctAnswer: "yes",
        responseToUserIfNoSelected:
          "Notify your bank to avoid any issues with your cards during your trip to Croatia.",
      },
      {
        question:
          "Are you familiar with popular tourist attractions in Croatia?",
        answers: ["yes", "no", "researching"],
        correctAnswer: "yes",
        responseToUserIfNoSelected:
          "Explore famous attractions for a memorable journey in Croatia.",
      },
    ],
    high: "Congratulations on being well-prepared for your Croatian adventure! Enjoy your journey through the stunning landscapes and rich cultural heritage of Croatia.",
    low: "It looks like there are still some areas to prepare before your trip to Croatia. Consider revisiting the quiz and ensuring all preparations are in place for a smooth and enjoyable visit.",
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

export default DATABASE;
