export function buildFooter(env = process.env) {
  if (env.GITHUB_ACTIONS !== 'true') return '本地构建'

  const { GITHUB_REPOSITORY: repo, GITHUB_SHA: sha, GITHUB_RUN_ID: run,
    GITHUB_RUN_NUMBER: number, GITHUB_RUN_ATTEMPT: attempt } = env
  if (!/^[\w.-]+\/[\w.-]+$/.test(repo ?? '') ||
      !/^[a-f0-9]{40}$/.test(sha ?? '') ||
      ![run, number, attempt].every(value => /^[1-9]\d*$/.test(value ?? ''))) {
    throw new Error('Missing or invalid GitHub build metadata')
  }

  const url = `https://github.com/${repo}`
  return `基于构建 <a href="${url}/actions/runs/${run}/attempts/${attempt}">#${number}.${attempt}</a>` +
    ` · 提交 <a href="${url}/commit/${sha}">${sha.slice(0, 7)}</a>`
}
