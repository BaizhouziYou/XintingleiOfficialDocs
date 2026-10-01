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
  let version = ''
  if (env.GITHUB_REF_TYPE === 'tag') {
    const tag = env.GITHUB_REF_NAME
    if (typeof tag !== 'string' || !tag) throw new Error('Missing GitHub release tag')
    const label = tag.replace(/[&<>"']/g, char => ({
      '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;'
    })[char])
    version = `<a href="${url}/tree/${encodeURIComponent(tag)}">${label}</a> · `
  }
  return version + `基于构建 <a href="${url}/actions/runs/${run}/attempts/${attempt}">#${number}.${attempt}</a>` +
    ` · 提交 <a href="${url}/commit/${sha}">${sha.slice(0, 7)}</a>`
}
