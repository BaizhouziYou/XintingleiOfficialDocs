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
  for (const key of Object.keys(env).filter(key => key !== 'GITHUB_ACTIONS')) {
    assert.throws(() => buildFooter({ ...env, [key]: undefined }))
    assert.throws(() => buildFooter({ ...env, [key]: '"><script>' }))
  }
})
