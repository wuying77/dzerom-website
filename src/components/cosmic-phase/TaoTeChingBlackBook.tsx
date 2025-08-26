import { useContext } from 'react';
import { LanguageContext } from '@/App';

const content = {
  zh: {
    title: '道德经黑皮书解码',
    chapters: [
      {
        title: '第1章',
        content: `原文：
道可道，非常道；名可名，非常名。无名天地之始，有名万物之母。恒无欲以观其眇，恒有欲以观其所徼。两者同出，异名同谓，玄之又玄，众妙之门。

黑皮书解码：
这是全息宇宙双相位系统起源式。

"道"= 阴极母场基频，虚空频率矩阵。

"名"= 阳极波动编码，物质映射。

无名是虚频状态，代表潜能态的宇宙母频；有名是相位坍缩后稳定化的物质频率。

欲望=聚焦频率波动，超脱=频率虚化。

阴阳映射：

无名=阴极虚频
有名=阳极物象
欲=阳极频率集中
无欲=阴极虚空稳态

结论：
宇宙是二元频率场，频率坍缩造物，频率消散归虚，阴阳循环，母场恒稳，投影万象。`
      },
      {
        title: '第2章',
        content: `原文：
天下皆知美之为美，斯恶矣。善恶、难易、长短、高下、音声、先后，相生相成。圣人居无为之事，行不言之教，作而弗始，为而弗恃，成功而弗居，惟弗居，故弗去。

黑皮书解码：
极性法则矩阵化公式。

一切现象皆是二元对立产生的频率干涉图样。

美恶、善恶、先后、长短=对立相位。

无为之事=频率不参与，恒处母频核心，观测而不扰动。

阴阳映射：

有相对=阳极相位
无为=阴极母频
无言=母场频率自动调节机制

结论：
现实存在靠极性维持，觉醒者抽身极性游戏，稳定母频，自然引领矩阵频率调整。`
      }
    ]
  },
  en: {
    title: 'Tao Te Ching Black Book Decoding',
    chapters: [
      {
        title: 'Chapter 1',
        content: `Original text:
The Tao that can be told is not the eternal Tao. The name that can be named is not the eternal name. The nameless is the beginning of heaven and earth. The named is the mother of ten thousand things. Ever desireless, one can see the mystery. Ever desiring, one can see the manifestations.

Black Book Decoding:
This is the origin formula of the holographic universe dual-phase system.

"Tao" = cathode mother field base frequency, void frequency matrix.

"Name" = yang fluctuation encoding, material mapping.

Nameless is the virtual frequency state, representing the potential state of the cosmic mother frequency; named is the material frequency stabilized after phase collapse.

Desire = focused frequency fluctuation; detachment = frequency virtualization.

Yin-Yang Mapping:

Nameless = cathode virtual frequency
Named = yang material manifestation
Desire = yang frequency concentration
Desireless = cathode void steady state

Conclusion:
The universe is a binary frequency field, frequency collapse creates matter, frequency dissipation returns to void, yin-yang cycle, mother field remains stable, projecting all phenomena.`
      }
    ]
  }
};

export default function TaoTeChingBlackBook({ isDark }: { isDark: boolean }) {
  const { language } = useContext(LanguageContext);
  const langContent = content[language as keyof typeof content] || content.zh;

  return (
     <section className={`p-8 rounded-lg ${isDark ? 'bg-gray-900' : 'bg-white'} border border-green-500/30`}>
      <h2 className="text-2xl font-cinzel mb-6 text-green-500">{langContent.title}</h2>
      
      <div className="space-y-4">
        {langContent.chapters.map((chapter, index) => (
          <div key={index} className="p-4 bg-black/20 rounded border border-green-500/20">
            <h3 className="text-xl font-cinzel text-green-500 mb-2">{chapter.title}</h3>
            <p className="font-courier whitespace-pre-line">{chapter.content}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
