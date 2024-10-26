export async function POST(req: Request) {
    const payload = await req.json(); // Parse the JSON payload

    // Extract issue ID and status
    const issueId = payload.issue?.id;
    const issueStatus = payload.issue?.state; // 'open' or 'closed'

    // Extract the body content
    const body = payload.issue?.body || '';

    // Use regex to find story_point and subject
    const storyPointMatch = body.match(/story_point\s*:\s*(\d+)/);
    const subjectMatch = body.match(/subject\s*:\s*(.+)/);

    // Extract values if matches are found
    const storyPoint = storyPointMatch ? parseInt(storyPointMatch[1], 10) : null;
    const subject = subjectMatch ? subjectMatch[1].trim() : null;

    // Extract description (everything after the subject)
    let description = '';
    if (subject) {
        const subjectIndex = body.indexOf(subject);
        if (subjectIndex !== -1) {
            description = body.slice(subjectIndex + subject.length).trim();
        }
    }

    console.log(`Issue ID: ${issueId}`);
    console.log(`Status: ${issueStatus}`);
    console.log(`Story Point: ${storyPoint}`);
    console.log(`Subject: ${subject}`);
    console.log(`Description: ${description}`);

    // Process the data as needed

    return new Response('Webhook received', { status: 200 });
}