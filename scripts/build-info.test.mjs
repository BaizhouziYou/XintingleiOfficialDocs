import assert from 'node:assert/strict'
import { test } from 'node:test'
import { buildFooter } from '../docs/.vitepress/build-info.mjs'

test('footer identifies the exact CI attempt and commit; local builds are explicit', () => {
  const env = {
    GITHUB_ACTIONS: 'true', GITHUB_REPOSITORY: 'BaizhouziYou/XintingleiOfficialDocs',
    GITHUB_SHA: 'a'.repeat(40), GITHUB_RUN_ID: '123', GITHUB_RUN_NUMBER: '8', GITHUB_RUN_ATTEMPT: '2'
  }
  assert.equal(buildFooter({}), '本地构建')
  assert.match(buildFooter(env), /actions\/runs\/123\/attempts\/2">#8\.2<\/a>/)
  assert.match(buildFooter(env), /commit\/a{40}">a{7}<\/a>/)
  assert.doesNotMatch(buildFooter(env), /\/tree\//)
  const tagged = { ...env, GITHUB_REF_TYPE: 'tag', GITHUB_REF_NAME: 'v0.1.1' }
  assert.match(buildFooter(tagged), /\/tree\/v0\.1\.1">v0\.1\.1<\/a> · 基于构建/)
  assert.match(buildFooter({ ...tagged, GITHUB_REF_NAME: 'v1.0.0-rc.1' }), />v1\.0\.0-rc\.1<\/a>/)
  assert.throws(() => buildFooter({ ...tagged, GITHUB_REF_NAME: '' }))
  assert.throws(() => buildFooter({ ...tagged, GITHUB_REF_NAME: undefined }))
  const escaped = buildFooter({ ...tagged, GITHUB_REF_NAME: 'v1&<>"\'' })
  assert.match(escaped, /\/tree\/v1%26%3C%3E%22'/)
  assert.match(escaped, />v1&amp;&lt;&gt;&quot;&#39;<\/a>/)
  for (const key of Object.keys(env).filter(key => key !== 'GITHUB_ACTIONS')) {
    assert.throws(() => buildFooter({ ...env, [key]: undefined }))
    assert.throws(() => buildFooter({ ...env, [key]: '"><script>' }))
  }
})
