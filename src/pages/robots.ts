export default function robots() {
  return {
    rules: {
      userAgent: '*',
      allow: ['/'],
    },
    sitemap: 'http://signart.com.cn/sitemap.xml',
  }
}
