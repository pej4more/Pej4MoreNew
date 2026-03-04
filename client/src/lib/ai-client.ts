export type ChatResponse = {
    text: string;
    followup: string | null;
};

export async function sendChatQuery(query: string): Promise<ChatResponse> {
    const response = await fetch('/api/chat', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ query }),
    });

    if (!response.ok) {
        throw new Error('Failed to fetch AI response');
    }

    return response.json();
}
