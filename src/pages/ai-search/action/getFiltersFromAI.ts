const API_KEY = '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';

export async function getFiltersFromAI(userPrompt: string) {
    const systemPrompt = `You are a movie filter generator.
Given a natural language description, return a JSON object with this structure:
{
  quality: string,      // One of: ["480p", "720p", "1080p", "1080p.x265", "2160p", "3d"]
  genre: string,        // One of: ["action", "adventure", "animation", "biography", "comedy", "crime", "documentary", "drama", "family", "fantasy", "film-noir", "game-show", "history", "horror", "music", "musical", "mystery", "news", "reality-tv", "romance", "sci-fi", "sport", "talk-show", "thriller", "war", "western"]
  rating: string,       // One of: ["9", "8", ..., "1"]
  sort_by: string       // One of: ["latest", "oldest", ..., "downloads"]
}
Respond ONLY with valid JSON and nothing else.`;
    console.log(API_KEY)
    const response = await fetch('https://openrouter.ai/api/v1/chat/completions', {
        method: 'POST',
        headers: {
            'Authorization': `Bearer ${API_KEY}`,
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            model: 'gryphe/mythomax-l2-13b',
            messages: [
                { role: 'system', content: systemPrompt },
                { role: 'user', content: userPrompt },
            ],
        }),
    });
    console.log(systemPrompt, userPrompt);
    const data = await response.json();
    const message = data?.choices?.[0]?.message?.content;
    console.log('message', message);
    console.log(API_KEY)
    try {
        const cleaned = message?.replace(/```json|```/g, '').trim();
        const parsed = JSON.parse(cleaned);
        return parsed;
    } catch (err) {
        console.error('Failed to parse AI response:', message);
        throw new Error('Invalid AI response');
    }
} 
