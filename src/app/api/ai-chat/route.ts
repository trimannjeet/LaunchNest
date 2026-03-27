import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const { message } = await request.json();

    if (!message || typeof message !== 'string') {
      return NextResponse.json({ error: 'Invalid payload' }, { status: 400 });
    }

    const OPENAI_API_KEY = process.env.OPENAI_API_KEY;
    if (!OPENAI_API_KEY) {
      return NextResponse.json({ error: 'OpenAI API key is not configured' }, { status: 500 });
    }

    const chatResponse = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${OPENAI_API_KEY}`,
      },
      body: JSON.stringify({
        model: process.env.OPENAI_MODEL || 'gpt-4o-mini',
        messages: [
          {
            role: 'system',
            content:
              'You are LaunchNest AI, a concise and strategic assistant for startup founders. LaunchNest helps with idea validation, strategic planning, branding, custom websites, social media management, creative production, and technical execution. Provide practical step-by-step advice and include one clear next action in each response.',
          },
          { role: 'user', content: message },
        ],
        temperature: 0.6,
        max_tokens: 260,
      }),
    });

    if (!chatResponse.ok) {
      const errText = await chatResponse.text();
      return NextResponse.json({ error: 'OpenAI request failed', detail: errText }, { status: 502 });
    }

    const data = await chatResponse.json();
    const answer = data?.choices?.[0]?.message?.content || 'Sorry, no response from AI.';

    return NextResponse.json({ success: true, answer });
  } catch (error) {
    console.error('AI chat error', error);
    return NextResponse.json({ error: 'Server error while processing chat request' }, { status: 500 });
  }
}
