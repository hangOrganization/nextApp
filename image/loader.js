'use client'
 
export default function myImageLoader({ src, width, quality }) {
  return `http://signart.com.cn/${src}?w=${width}&q=${quality || 75}`
}