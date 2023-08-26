import { Html, Head, Main, NextScript } from "next/document";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "SIGN十万象限国际音乐教育 — 专注音乐留学",
  description:
    "SIGN十万象限音乐留学作品集由世界名校海归艺术家导师与顶尖音乐传媒公司联合创立，杭州首家拥有十年音乐传媒行业经验的创始人团队，专攻于音乐艺术作品集指导，音乐留学申请规划以及跨界艺术联动，致力打造音乐教育，音乐展演与声音全流程制作的产学研联动生态。以专业的教学专注的态度帮助每一位热爱音乐的学生拿到Dream Offer，开发艺术领域的无限可能性。",
  keywords: ['杭州音乐留学', '音乐留学作品集', '音乐作品集', '音乐教育', '出国学音乐', '出国读音乐', '国外音乐院校','留学机构',  '留学中介','艺术留学', '杭州录音棚', '音乐制作'],
};


export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <title>SIGN十万象限国际音乐教育 — 专注音乐留学</title>
        <meta name="title" content="SIGN十万象限国际音乐教育 — 专注音乐留学" />
        <meta name="keywords" content="杭州音乐留学，音乐留学作品集，音乐作品集，音乐教育，出国学音乐，出国读音乐，国外音乐院校，留学机构，留学中介，艺术留学，杭州录音棚，音乐制作，声音设计，音乐科技，音乐表演，影视配乐，游戏配乐，钢琴表演，声乐歌剧，流行演唱，英国音乐留学，美国音乐留学，日本音乐留学，韩国音乐留学，德国音乐留学，意大利音乐留学，澳洲音乐留学，欧洲音乐留学，俄罗斯音乐留学，出国留学" />
        <meta name="description" content="SIGN十万象限音乐留学作品集由世界名校海归艺术家导师与顶尖音乐传媒公司联合创立，杭州首家拥有十年音乐传媒行业经验的创始人团队，专攻于音乐艺术作品集指导，音乐留学申请规划以及跨界艺术联动，致力打造音乐教育，音乐展演与声音全流程制作的产学研联动生态。以专业的教学专注的态度帮助每一位热爱音乐的学生拿到Dream Offer，开发艺术领域的无限可能性。" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
