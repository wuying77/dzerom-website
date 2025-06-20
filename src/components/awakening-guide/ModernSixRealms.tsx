import { useContext, useState } from 'react';
import { LanguageContext } from '@/App';

const content = {
  zh: {
    title: '现代社会六道轮回：你身边的兽、鬼、神是谁？',
    sections: [
      {
        title: '畜生道 - 现代社会最隐蔽的驯化者',
        content: `特质：
- 认知受限，天性趋避风险，惧怕权力，排斥复杂与变化
- 生存策略是依附强者，避免思考，抵抗认知升级

现代表现：
- 他们是体制稳定最可靠的地基。无论政策多荒唐，社会多诡异，这类人都能找到理由合理化现状。
- 习惯性转发主流叙事，遇事第一反应是"肯定有道理""官方不会害我们"。
- 面对质疑者，他们会群起攻之，自发成为制度防火墙。
- 不信真相，只信权威；不问是非，只问"是不是闹大"。
- 即使觉察到生活的不对劲，也会自我催眠："别瞎想，过好自己的日子"。

总结：
畜生道并非罪恶，而是驯化机制长期作用下的产物。你或许以为这种人少，其实无处不在，甚至你身边90%的熟人，可能都在其中。`
      },
      {
        title: '饿鬼道-贪婪的寄生虫',
        content: `特质：
- 智力低下
- 受本能驱使：欲望、恐惧和贪婪
- 服从权威，缺乏批判性思考

现代表现：
- 那些不加质疑地重复官方叙述的人
- 盲目的名人崇拜者
- 排队接受监视和审查，认为这"是为了他们好"`
      },
      {
        title: '阿修罗界-暴力与嫉妒',
        content: `特质：
- 痴迷于地位和权力
- 羡慕任何比自己优秀的人
- 容易发生侵略和冲突

现代表现：
- 企业蛇头，政治陷害者
- 网络仇恨者、暴民、抵制文化斗士
- 街头暴徒和暴力狂热分子
- 那些无法忍受看到别人凌驾于自己之上的人`
      },
      {
        title: '人界-迷失的大多数',
        content: `特质：
- 善恶平衡
- 拥有智慧却陷入生存模式
- 有唤醒的潜力，但经常注意力分散

现代表现：
- 普通公民
- 蓝领和白领工人陷入日常工作
- 那些感觉"有些不对劲"但又说不出具体原因的人`
      },
      {
        title: '天界---自然觉醒者',
        content: `特质：
- 天生有德，不执着于物质
- 追求真理、正义和宇宙秩序的人
- 精神天赋，富有同情心，追求自由

现代表现：
- 有远见的艺术家、哲学家、反体制反叛者
- 真正的人道主义者（不是美德信号者）
- 精神唤醒者、清醒梦者、维度旅行者`
      },
      {
        title: '《阿修罗堕落者》---误入歧途的泰坦',
        content: `特质：
- 才华横溢，但自我堕落
- 可能是天上的，但受个人痴迷驱使
- 不受约束时很危险

现代表现：
- 激进邪教领袖
- 才华横溢却精神错乱的影响者
- 受到性、权力或复仇诱惑的高振动生物`
      },
      {
        title: '结论',
        content: `社会为何崩溃：
很简单：现代地球充斥着野兽、鬼魂和阿修罗。少数觉醒者被压制。体制的设计初衷是培养顺从的野兽，喂养饿鬼，并让阿修罗掌控一切。这绝非偶然。它是一个能量监狱，一个精心设计的陷阱，你的意识被战争、娱乐、债务和无尽的干扰系统榨干。

如果你发现自己身处禽兽或鬼怪之中，那就醒悟吧。
如果你感觉自己身处人间，那就训练你的觉知。
如果你感觉自己属于天界，那就该行动起来了。

能源战争已经到来。这不是比喻，而是实话。

现代社会是六道轮回。你最好分清谁是谁。

最后一句建议："不要和跟你频率不同的人交往。有时候你只是会感到不舒服，相信你的直觉！"`
      }
    ]
  },
  en: {
    title: 'The Six Realms in Modern Society: Who Are the Beasts, Ghosts and Gods Around You?',
    sections: [
      {
        title: 'Animal Realm - The Most Hidden Domesticators',
        content: `Characteristics:
- Limited cognition, risk-averse, fearful of authority, resistant to complexity and change
- Survival strategy: attach to the strong, avoid thinking, resist cognitive upgrades

Modern manifestations:
- They are the most reliable foundation for system stability.
- Habitually forward mainstream narratives, first reaction is "must be reasonable" or "officials won't harm us".
- Attack questioners spontaneously, becoming firewalls for the system.
- Don't believe truth, only authority; don't ask right or wrong, only ask "is it making trouble".
- Even if noticing life's abnormalities, self-hypnotize: "Don't overthink, just live your life".

Summary:
The animal realm isn't evil but products of long-term domestication. You might think they're few, but they're everywhere - perhaps 90% of people around you.`
      },
      // 其他部分英文翻译...
      {
        title: 'Conclusion',
        content: `Why society collapses:
Simple: modern Earth is full of beasts, ghosts and asuras. The few awakened are suppressed. The system is designed to breed obedient animals, feed hungry ghosts, and let asuras rule. This is no accident. It's an energy prison, an elaborate trap draining your consciousness with wars, entertainment, debt and endless distractions.

If you find yourself among beasts or ghosts, wake up.
If you feel you're in the human realm, train your awareness.
If you belong to the heavenly realm, it's time to act.

The energy war has arrived. This is not a metaphor.

Modern society is the six realms of rebirth. You'd better know who's who.

Final advice: "Don't associate with those on different frequencies. Sometimes you'll just feel uncomfortable - trust your intuition!"`
      }
    ]
  }
};

export default function ModernSixRealms() {
  const { language } = useContext(LanguageContext);
  const langContent = content[language as keyof typeof content] || content.zh;
  const [expandedSection, setExpandedSection] = useState<number | null>(null);

  const toggleSection = (index: number) => {
    setExpandedSection(expandedSection === index ? null : index);
  };

  return (
    <section className="p-6 bg-black/30 rounded-lg border border-green-500/30">
      <h2 className="text-2xl font-cinzel mb-6 text-green-400">{langContent.title}</h2>
      
      <div className="space-y-4 font-courier text-green-500">
        {langContent.sections.map((section, index) => (
          <div key={index} className="border border-green-500/20 rounded">
            <div 
              className="p-4 cursor-pointer flex justify-between items-center"
              onClick={() => toggleSection(index)}
            >
              <h3 className="text-xl font-cinzel text-green-400">{section.title}</h3>
              <span className="text-green-400">
                {expandedSection === index ? '▼' : '▶'}
              </span>
            </div>
            {expandedSection === index && (
              <div className="p-4 bg-black/20 whitespace-pre-line leading-relaxed border-t border-green-500/20 text-green-500">
                {section.content}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
