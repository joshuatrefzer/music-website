
interface SendMailResponse {
    success: boolean;
}

export function sendMail(name: string, email: string, message: string): (() => Promise<boolean>) {
    debugger
    return async () => {
        const response = await fetch('https://mail.joshuatrefzer-backend-apis.site/contact', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ name, email, message }),
        });

        const data: SendMailResponse = await response.json();
        if (!data.success) {
            throw new Error('Failed to send email');
        }

        return data.success;
    }
}