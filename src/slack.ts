import axios from 'axios';

type requestBody = {
	text: string;
};

const sendMessageToChannel = async (message: string): Promise<void> => {
	const body: requestBody = { text: message };
	await axios.post(`${process.env.SLACK_HOOK_URL}`, body);
};

export { sendMessageToChannel };
