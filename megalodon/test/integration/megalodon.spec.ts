import { detector } from '../../src/index'

describe('detector', () => {
  describe('mastodon', () => {
    const url = 'https://fedibird.com'
    it('should be mastodon', async () => {
      const mastodon = await detector(url)
      expect(mastodon).toEqual('mastodon')
    })
  })

  describe('pleroma', () => {
    const url = 'https://pleroma.soykaf.com'
    it('should be pleroma', async () => {
      const pleroma = await detector(url)
      expect(pleroma).toEqual('pleroma')
    })
  })

  describe('misskey', () => {
    const url = 'https://misskey.io'
    it('should be misskey', async () => {
      const misskey = await detector(url)
      expect(misskey).toEqual('misskey')
    })
  })

  describe('fedibird', () => {
    const url = 'https://fedibird.com'
    it('should be mastodon', async () => {
      const fedibird = await detector(url)
      expect(fedibird).toEqual('mastodon')
    })
  })

  describe('unknown', () => {
    const url = 'https://google.com'
    it('should be null', async () => {
      const unknown = detector(url)
      await expect(unknown).rejects.toThrow()
    })
  })
})
