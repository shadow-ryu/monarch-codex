"use server";
import {  Octokit } from 'octokit';
import { createAppAuth } from '@octokit/auth-app';

// Configuration types
type GitHubAppConfig = {
  appId: string;
  privateKey: string;
  installationId?: string; // Optional if you want to pass it during runtime
};

type CreateIssueParams = {
  owner: string;
  repo: string;
  title: string;
  body: string;
  labels?: string[];
  assignees?: string[];
};

async function getGitHubAppOctokit(config: GitHubAppConfig) {
    try {
      // Create Octokit instance with App authentication
      const octokit = new Octokit({
        authStrategy: createAppAuth,
        auth: {
          appId: config.appId,
          privateKey: config.privateKey,
          installationId: config.installationId
        }
      });
  
      // If no installationId provided, get the first installation
      if (!config.installationId) {
        // @ts-expect-error type
        const { data: installations } = await octokit.apps?.listInstallations();
        if (installations.length === 0) {
          return {
            success: false,
            error: 'No installations found for this GitHub App'
          };
        }
        
        // Create new Octokit instance with the found installation ID
        const appOctokit = new Octokit({
          authStrategy: createAppAuth,
          auth: {
            appId: config.appId,
            privateKey: config.privateKey.replace(/\\n/g, '\n'),
            installationId: installations[0].id
          }
        });
  
        return {
          success: true,
          octokit: appOctokit
        };
      }
  
      return {
        success: true,
        octokit
      };
  
    } catch (error) {
      console.error('Error creating GitHub App Octokit:', error);
      return {
        success: false,
        error: error || 'Failed to initialize GitHub App'
      };
    }
  }

export async function createGitHubIssueWithApp({
    config,
    issueData
  }: {
    config: GitHubAppConfig;
    issueData: CreateIssueParams;
  }) {
    try {
      // Get Octokit instance
      const octokitResult = await getGitHubAppOctokit(config);
      
      if (!octokitResult.success) {
        return {
          success: false,
          error: octokitResult.error,
          statusCode: 401
        };
      }
  
      const octokit = octokitResult.octokit;
      // Verify repository access
    //   try {
    //     await octokit.rest.repos.get({
    //       owner: issueData.owner,
    //       repo: issueData.repo
    //     });
    //   } catch (repoError: any) {
    //     return {
    //       success: false,
    //       error: `Repository not found or inaccessible: ${repoError.message}`,
    //       statusCode: repoError.status || 404
    //     };
    //   }
   // @ts-expect-error type
  const { data } = await octokit.request('POST /repos/{owner}/{repo}/issues', {
    owner: issueData.owner,
    repo: issueData.repo,
    title: issueData.title,
    body: issueData.body,
    labels: issueData.labels,
    assignees: issueData.assignees,
    headers: {
      'X-GitHub-Api-Version': '2022-11-28'
    }
  })
    //   const { data } = await octokit.rest.issues.create({
    //     owner: issueData.owner,
    //     repo: issueData.repo,
    //     title: issueData.title,
    //     body: issueData.body,
    //     labels: issueData.labels,
    //     assignees: issueData.assignees
    //   });
  
      return {
        success: true,
        data,
        issueUrl: data.html_url
      };
  
    } 
    catch (error) {
      console.error('Error creating issue:', error);
      return {
        success: false,
        // @ts-expect-error type
        error: error.message || 'Failed to create issue',statusCode: error.status || 500
      };
    }
  }