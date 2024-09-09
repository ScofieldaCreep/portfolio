import Card from '../ui/card';

export default function BackgroundCard() {
  return (
    <Card className="md:h-full" title="My Background">
      <div>
        <p
          className="
          leading-[160%]     /* 行高为字体大小的 160% */
          font-normal        /* 正常字重 */
          text-white/[0.4]   /* 白色文字，透明度 40% */
          text-[16px]        /* 文字大小 16px */
        "
        >
          Born into a typical <span className="text-white underline">Chinese family with strong-willed parents</span>,
          my journey was initially shaped by their aspirations rather than my own. The weight of parental expectations,
          particularly from a mother who faced gender discrimination in the construction industry, led me down a
          predetermined path. <br />
          <br />
          Despite my personal inclinations, I found myself enrolled in
          <span className="text-white">&nbsp;China's top Engineering Management program&nbsp;</span>
          &mdash; a choice that reflected my mother's unfulfilled ambitions more than my own passions. <br />
          <br />
          As I delved into this field, I encountered a world where
          <span className="text-white underline">creativity often took a backseat to convention</span>. The stark
          realities of an industry where labor costs undercut technological innovation, the vast gulf between academic
          research and industrial practices, and the pervasive drinking culture and grey areas of traditional Chinese
          construction left me feeling disillusioned. <br />
          <br />
          However, amidst this struggle, I discovered an unexpected beacon of hope:
          <span className="text-white">&nbsp;coding&nbsp;</span>. This serendipitous encounter not only opened my eyes
          to a world of endless possibilities but also promised the allure of a rewarding career. <br />
          <br />
          <span className="text-white italic">
            In this digital realm, I found the creative freedom I had long sought. Coding became more than just a skill;
            it became my pathway to self-expression, innovation, and a future aligned with my true aspirations.
          </span>
        </p>
      </div>
    </Card>
  );
}
