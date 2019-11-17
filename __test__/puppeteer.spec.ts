describe('RealSee', () => {
  beforeAll(async () => {
    await page.goto('https://realsee.com')
  })

  it('should display "如视" text on page', async () => {
    await expect(page).toMatch('如视')
    const res = await page.evaluate(() => {
      console.log(JSON.stringify(window.performance))
      return {
        userAgent: navigator.userAgent.toLowerCase(),
      }
    })

    expect(res.userAgent).toMatch('headlesschrome')
  })
})
