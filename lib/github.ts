import type { ActionResponse, Feedback } from '@/components/feedback';

export const repo = 'tonconsole-docs';
export const owner = 'tonkeeper';

export async function onRateAction(
  url: string,
  feedback: Feedback,
): Promise<ActionResponse> {
  // Note: 'use server' removed for static export compatibility
  // Log feedback for now - you can integrate with GitHub API later
  console.log('Feedback received:', { url, feedback });

  // Return a GitHub URL pointing to the issues page
  // In the future, this could create an actual GitHub Discussion or Issue
  return {
    githubUrl: `https://github.com/${owner}/${repo}/issues`,
  };
}
