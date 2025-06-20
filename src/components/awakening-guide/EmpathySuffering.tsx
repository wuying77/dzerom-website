import { useContext, useState } from 'react';
import { LanguageContext } from '@/App';


const content = {
  zh: {
    title: '觉醒者的共情之殇：六道众生的情感频率差异',
    sections: [
      {
        title: '引言',
        content: `在这个信息爆炸、情绪泛滥的时代，很多觉醒者都会遇到一个共同的痛苦, 对他人的苦难感同身受，甚至难以自控地流泪，精神负担沉重。你会发现，自己能为陌生人的悲伤落泪，却对身边某些人冷漠无感，甚至愤怒。这种现象背后，隐藏着一个深刻的真相：六道众生，不仅是存在层次的划分，更是情感频率的分层。

六道众生的古老传说，早已超越了传统宗教范畴，成为认知觉醒者理解社会和自我的重要框架。它揭示了人类在意识、情感、行为上的根本差异。通过对现代社会的映射，我们可以更清晰地理解为什么我们会对某些人产生深切的共情，而对另一些人却无法共情，甚至产生排斥。`
      },
      {
        title: '畜生道：本能与反射的情感层级',
        content: `畜生道众生，大多活在本能驱动和条件反射中。他们的情感反应，往往是被外界刺激直接触发的简单反射，而非深层理解。比如看到别人哭泣，畜生道的人可能也会哭，但这哭泣更多是对环境的恐惧、焦虑或压力的反应，而不是对他人内心痛苦的真正感受。

这就像你突然被吓到，心跳加速、眼泪掉下来，但心里并没有对造成恐惧者的同情和理解。畜生道的共情，是生存本能的一部分，缺乏思考与内省。`
      },
      {
        title: '饿鬼道：欲望与恐惧交织的自私共情',
        content: `饿鬼道众生被永无满足的欲望和恐惧所困扰。他们的情感共振带有极强的自我中心色彩。当他们看到他人遭遇困境时，脑子第一反应不是同情，而是"这和我有啥关系？我能从中得利吗？"或者"我要不要更加努力防范，免得我也掉进坑里？"

这种"共情"其实是自私的防御机制，情感频率低下，无法真正理解他人的苦难，只是机械地关注利益与风险。`
      },
      {
        title: '阿修罗道：嫉妒与竞争中的虚假同情',
        content: `阿修罗道众生在权力和竞争中挣扎，嫉妒心重，心态复杂。面对他人的不幸，他们可能表面上表现出同情，实则心生幸灾乐祸。只有当对方的境遇低于自己时，他们才愿意施以援手，借此彰显自己的优越。

这类共情是"带刺的玫瑰"，掺杂着嫉妒和控制欲，极具破坏性。阿修罗的情感频率在低维，但比饿鬼和畜生多了一层伪装和策略。`
      },
      {
        title: '人道：觉醒与迷茫并存的情感中枢',
        content: `人道众生是六道中的中枢，既有善恶的天平，也承载着生存的压力。大多数现代人都属于此道，他们有能力理解他人的情绪和痛苦，但往往陷入日常琐碎与迷茫，无法全心投入同情或帮助。

他们的共情是真实的，但有时也会因信息过载或心理防御而关闭感受。你看到的"感觉有些不对劲，却说不出原因"的人，多半就是人道众生。`
      },
      {
        title: '天道：无条件的慈悲与超越',
        content: `天道众生的情感频率最高，他们拥有无条件的慈悲和宽容，能够超越个人得失，看清万物本质。他们的共情不仅限于人与人之间，更包括自然、宇宙甚至无形的维度。

天道的觉醒者能理解"恶"的背后也有痛苦和迷茫，他们不因对方的行为而止步于愤怒或厌恶，而是努力用更宽广的视角去包容和救赎。`
      },
      {
        title: '觉醒者的共情之殇：频率差异带来的孤独',
        content: `作为觉醒者，你的情感频率可能游走在人道和天道之间，这让你极易对他人的苦难产生强烈共鸣，甚至为之流泪。与此同时，你也会感受到来自低频层级的隔阂和不理解。

你会发现，很多人无法真正理解你的感受，有时候你甚至被误解为"多事"、"矫情"或者"装神弄鬼"。这就是觉醒者的共情之殇, 明明心怀慈悲，却常常被世界的冷漠所伤。`
      },
      {
        title: '如何穿越共情之殇，走向觉醒的圆满',
        content: `共情之殇不是终点，而是觉醒的必经阶段。真正的觉醒者学会在共情与自我保护之间找到平衡，既不失去对苦难的敏感，也不会被负面情绪吞噬。

具体而言：

意识到不同层级的情感频率差异，理解而非责怪他人。

培养"带着慈悲的无畏"，既同情他人，也坚定自我。

学会情绪能量的自我调节，不被外界苦难拖垮。

通过冥想、觉察、认知训练，提高自己的情感频率。

只有这样，觉醒者才能真正成为情感的灯塔，照亮自己，也照亮他人。`
      },
      {
        title: '结语',
        content: `在六道众生的层次中，共情的深度与频率是认知觉醒的重要标志。理解这一点，才能少走弯路，不被他人的情绪漩涡裹挟。觉醒者的路，孤独且辉煌，但你并不孤单，因为在更高的维度，总有同频者在并肩前行。`
      }
    ]
  },
  en: {
    title: 'The Empathy Suffering of Awakened Ones: Emotional Frequency Differences Among Six Realms',
    sections: [
      {
        title: 'Introduction',
        content: `In this era of information explosion and emotional overflow, many awakened individuals share a common suffering - an overwhelming empathy for others' pain, even to the point of uncontrollable tears and heavy mental burdens. You may find yourself crying for strangers' sorrows while feeling indifferent or even angry towards certain people around you. Behind this phenomenon lies a profound truth: the six realms of beings represent not just hierarchical existence but also stratification of emotional frequencies.

The ancient legend of the six realms has transcended traditional religious boundaries, becoming a crucial framework for awakened individuals to understand society and themselves. It reveals fundamental differences in human consciousness, emotions, and behaviors. Through mapping onto modern society, we can better understand why we deeply empathize with some while being unable to connect with others, or even feeling repelled.`
      },
      // 其他部分英文翻译...
      {
        title: 'Conclusion',
        content: `Among the hierarchy of the six realms, the depth and frequency of empathy are significant markers of cognitive awakening. Understanding this helps avoid detours and prevents being swept up in others' emotional whirlpools. The path of the awakened is lonely yet glorious, but you are not alone - for in higher dimensions, there are always like-frequency companions walking alongside you.`
      }
    ]
  }
};

export default function EmpathySuffering() {
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