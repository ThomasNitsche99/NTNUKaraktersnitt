import { fail } from '@sveltejs/kit';
import { SECRET_KEY, HEROKU_APP} from '$env/static/private';

export function load({}) {
	return {
		message: 'Hello'
	};
}

export const actions = {
	default: async ({ request, fetch }) => {
		// Handle file upload
		const data = await request.formData();
		const file = data.get('file'); 

        //TODO: More validation of file (zod)
		if (!file) {
			return fail(400, { file, missing: true });
		}

        const pdfData = new FormData();
        pdfData.append("file", file)

		let response;
		try {
			response = await fetch(`${HEROKU_APP}`, { //this is env
				method: 'POST',
				body: pdfData,
				headers: {
					'x-api-key': `${SECRET_KEY}`, //this is envh
				}
				
			});
		} catch (error) {
			return fail(500, { error: 'Failed to connect to the server.' });
		}

		// Handle server responses
		if (!response.ok) {
			const errorData = await response.json();
			return fail(response.status, { error: errorData.error || 'Unknown error occurred.' });
		}

		// Process the successful response
		const resultData = await response.json();
		console.log(resultData);

        return {success: resultData}

        
	}
};
