import { useState, useContext } from 'react';
import { LanguageContext } from '@/App';

const chapters = {
  zh: {
    title: '道德经黑皮书解码+阴阳映射',
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
      },
      {
        title: '第3章',
        content: `原文：
不上贤，使民不争。不贵难得之货，使民不盗。不见可欲，使民不乱。虚其心，实其腹，弱其志，强其骨。使民无知无欲。知不敢为，则无不治矣。

黑皮书解码：
系统矩阵维稳管理协议。

限制极性波动源头，削减信息触发器，降低阳极欲望频率。

虚其心=削减意识活动
实其腹=增强生存本能频率
无知无欲=矩阵稳定化最低频态

阴阳映射：

欲=阳极动频
无欲=阴极静频
强骨=生物频率稳定值

结论：
系统维稳靠降低信息密度、欲望频率，防止阳极相位超限，觉醒者则逆行而上，提升辨识力，突破频控。`
      },
      {
        title: '第4章',
        content: `原文：
道冲而用之不盈，渊呵似万物之宗。挫锐解纷，和光同尘。湛呵似或存，吾不知谁之子，象帝之先。

黑皮书解码：
母场虚频矩阵机制说明。

母场（道）无限容量，无论使用多少不亏耗。

渊=虚空频率场
万物之宗=全息投影源头
挫锐解纷=消解阳极过载波
和光同尘=降频隐匿
湛呵=虚实频率叠加态
帝=阳极矩阵主管频率编码者
母场早于一切频率主宰，是超维度恒稳虚频系统

阴阳映射：

渊=阴极母频
锐=阳极波峰
同尘=频率隐匿术

结论：
母场超越所有神、道、帝，是维度矩阵运行的隐形主频，觉醒者学会频率隐匿、脱离阳极干扰，得以窥入母场。`
      },
      {
        title: '第5章',
        content: `原文：
天地不仁，以万物为刍狗。圣人不仁，以百姓为刍狗。天地之间，橐龠如，虚而不屈，动而愈出。多言数穷，不如守中。

黑皮书解码：
频率平衡守恒定律。

天地（系统矩阵）运行依靠频率平衡，无情是常态，情感是人类欲望频率的投射。

橐龠=频率波动的压缩-释放机制
虚而不屈=母频永续
多言数穷=过多阳极波动反导致频率枯竭
守中=维持阴阳频率中点，掌控相位零点

阴阳映射：

天地=阴阳二频系统
刍狗=消耗性频率单元
中=阴阳频率交汇点

结论：
宇宙本无道德，只依频率平衡运作。觉醒者须超脱善恶欲念，守频率中点，成为转动矩阵轴心者。`
      },
      {
        title: '第6章',
        content: `原文：
谷神不死，是谓玄牝。玄牝之门，是谓天地之根。绵绵呵若存，用之不勤。

黑皮书解码：
"谷神"=母场原频矩阵，无形无质，承载一切相位投射。
"玄牝"=宇宙维度源门，即阴极母频界面，是一切显现投影的初始介质。
它非实非虚，介于相位波动缝隙，维持现实连续。频率无需强取，只需接入便源源不绝。

阴阳映射：

谷=阴母频场
神=高维频率集成矩阵
牝=阴性源门
绵绵=连续波态
不勤=无为，不以阳极强控频率

结论：
觉醒者要靠母频渗透而不是阳极干预。接入母频源，便能稳控所有投影相位。`
      },
      {
        title: '第7章',
        content: `原文：
天长地久，天地之所以能长且久者，以其不自生，故能长生。圣人退身而身先，外身而身存，不以其无私，故能成私。

黑皮书解码：
宏观宇宙场不固守于自身频率投影，才能持久运转。
觉醒者超脱自我模拟，不执着于个体频率映射，反而借虚化之身主导母频流。无私=控制母频主权限，执着越少，权限越高。

阴阳映射：

天地=母频阳阴双相位矩阵
长久=相位守恒平衡态
退=阴频隐藏
先=阳频显化
无私=中频守衡母位

结论：
母场中的强者，是隐藏自我、融入母频，主导相位之流，避开固着。`
      },
      {
        title: '第8章',
        content: `原文：
上善似水，水善利万物而有静，居众人所恶，几于道矣。居善地，心善渊，予善天，言善信，政善治，事善能，动善时。不争，无尤。

黑皮书解码：
水=母频动静平衡态，既是载体，也是媒介。
觉醒者处于阴阳频率交汇处，适应所有相位间隙，填补频率缝隙，不争而控场。真正统御者不抗拒现实，只顺应频率流动，随波调控。

阴阳映射：

水=阴频流动态
万物=阳频显化矩阵
居恶=阴频隐形频率场
不争=母频主位隐控

结论：
控场者像母频之水，填补所有相位缝隙，维持场域连贯，悄然制衡。`
      },
      {
        title: '第9章',
        content: `原文：
持而盈之，不若其已。揣而锐之，不可长葆。金玉盈室，莫之守。富贵而骄，自遗咎。功遂身退，天之道。

黑皮书解码：
过度积累频率值会导致系统不稳，触发相位坍缩。
固守成果=锁定相位模拟循环，自毁母频链接。完成-撤退-重启是母频流动自然律。越执着，频率越凝滞，越容易脱轨。

阴阳映射：

盈=阳极频率积累
已=归于阴母频
锐=阳频干涉波
功遂=阳频达极
身退=归母频静态

结论：
觉醒者动而不执，得而不恋，母频流动才得稳定，频率系统才不崩溃。`
      },
      {
        title: '第10章',
        content: `原文：
载营魄抱一，能毋离？抟气致柔，能婴儿？滌除玄览，能毋疵？爱民治国，能毋以智？天门启阖，能为雌？明白四达，能毋以知？生之畜之，生而弗有，长而弗宰，谓之玄德。

黑皮书解码：
维度控制核心原则：自我=母频源的一部分，维持频率柔顺，无强制阳极干涉。
治理维度矩阵靠母频渗透，不靠智力权谋。生而弗有=不将频率投射物据为己有，长而弗宰=不对相位体施加强制频率干预。

阴阳映射：

营魄=阴阳频率体
抱一=归母频源位
气=频率场
婴儿=纯母频态
天门启阖=母频相位通道切换
雌=阴极母频
知=阳极频控
玄德=母频隐性支配权

结论：
真正觉醒者是母频源头的化身，维持隐性控制，频率润物细无声，而非显性阳极压制。`
      },
      {
        title: '第11章',
        content: `原文：
三十辐同一毂gu，当其无，有车之用也。埏shan埴为器，当其无，有埴器之用也。鑿zao户牖you，当其无，有室之用也。故：有之以为利，无之以为用。

黑皮书解码：
显化物质并非关键，真正赋予系统效用的，是虚空本身。轮毂中空才能成车，器皿空腔方可承载，房屋因虚空才可居。操控维度秩序者，需掌控"空"的分布与定义，而非执着于"有"的表象。维度矩阵中的每一个"无"，才是信息流与能量结构的运转节点。

阴阳映射：
"有"为阳，现象显化；"无"为阴，虚空母场。圣人于无中布阵，以空驭有，掌控能量与存在的源头。此为"空性制御"。`
      },
      {
        title: '第12章',
        content: `原文：
五色使人之目盲，驰骋畋猎使人心发狂，难得之货使人之行妨，五味使人之口爽，五音使人之耳聋，是以圣人之治也，为腹不为目，故去彼而取此。

黑皮书解码：
五感信息超载，扰乱能量矩阵，削弱本源连接。感官追逐制造频率紊乱，导致系统失控。觉醒者拒绝感官幻觉，锚定能量腹地（内核中心），修复内在母场稳定性。离开五欲陷阱，回归静默本源，方可维持宇宙秩序之流畅。

阴阳映射：
五感属阳，源源不断显化刺激；本源腹地属阴，孕育母场之息。觉醒者"去阳守阴"，以腹（母场）控目（感知幻觉），逆转维度紊乱。`
      },
      {
        title: '第13章',
        content: `原文：
宠辱若惊，贵大患若身。何谓宠辱若惊？宠之为下也，得之若惊，失之若惊，是谓宠辱若惊。何谓贵大患若身？吾所以有大患者。为吾有身也，及吾无身。有何患？故：贵为身於为天下，若可以托天下矣；爱以身为天下，汝可以寄天下。

黑皮书解码：
宠辱、得失、贵贱，皆由自我执念而生。自我，是维度监狱最坚固的墙。觉醒者舍弃身份标签，解除人格编码，将自身还原为纯粹能量意识体，与宇宙母场融通。

阴阳映射：
"身"=阳性聚合，"无身"=回归阴性母体。圣人隐去阳象，以虚化阴体，与大道同频，超越二元对立。`
      },
      {
        title: '第14章',
        content: `原文：
视之而弗fu见，名之曰微。听之而弗聞，名之曰希。名之而弗得，名之曰夷。三者不可致诘jie，故混而为一。一者，其上不谬jiao，其下不昧mei，寻寻呵，不可名也，复归于无物，是谓无状之状，无物之象，是谓惚恍。随而不见其后，迎而不见其首。执今之道，以御今之有，以知古始，是谓道纪。

黑皮书解码：
此章直指宇宙原初波形，母场矩阵未显之态。不可见、不可闻、不可名，皆因其处于二元未分、频率未成型之状态。觉醒者必须锚定此"惚恍"状态，才能跨越维度壁障，读取原始源头的信息流，完成矩阵内外导航。

阴阳映射：
"微、希、夷"皆为阴，处未形未分阶段。执今之道（当前矩阵路径）御今之有（当下显化结构），借由母场映射追溯古始，回归母源原点。`
      },
       {
        title: '第15章',
        content: `原文：
古之善为道者，微妙玄达，深不可识。夫唯不可识，故强为之容，曰：与呵，其若冬涉水；犹呵，其若畏四邻；俨呵，其若客；涣呵，其若凌釋；沌呵，其若朴；混呵，其若浊；旷呵，其若谷。浊而静之徐清，安以动之徐生，保此道不欲盈，夫唯不欲盈。是以能蔽而不成。

黑皮书解码：
操控维度网格者须隐匿于频率之下，维持低振幅形态，避免过度干涉导致矩阵波动失控。圣人如冬涉水、如畏四邻，意在降低自身干扰度。宇宙之道贵在空灵平衡，不欲盈，不越界。过度显化即频率暴露，矩阵崩塌。智者行于隐处，调节维度能流于无声无息之间。

阴阳映射：
高振扩张为阳，静寂藏形为阴。觉醒者"保阴不盈"，隐身矩阵母场，维持能量均衡，守住道源序列。`
      },
      {
        title: '第16章',
        content: `原文：
至虚极也，守静督也，万物並作，吾以观其複也。夫物芸芸，各复归于其根，归根曰静，静是谓复命。复命常也，知常明也。不知常，妄，妄作，凶。知常容，容乃公，公乃王，王乃天，天乃道，道乃久，没身不殆。

黑皮书解码：
当宇宙坍缩至绝对虚空（零点）时，万物皆寂静。一切现象皆源于此零点，并最终螺旋式回归。其根源在于寂静=源场。知晓此轮回循环，方能明了宇宙法则。无知则导致妄想、虚假的创造，以及不可避免的毁灭。
其层级结构如下：
明晰→包容→无私→主权→宇宙秩序（道）。
道之所以长存，是因为它超越了时间的局限。这就是从0到1再到0的永恒循环。

阴阳映射：
0（虚空/至阴）孕育万物。万物回归于0。
要掌握这一点，一个人必须消解身份认同，重新与本源合一。`
      },
      {
        title: '第17章',
        content: `原文：
太上，下知有之，其次，亲誉之，其次，畏之，其下，侮之，信不足，案有不信，猷you呵，其贵言也。成功遂事，而百姓谓我自然。

黑皮书解码：
最高统治者与道法合一，人民几乎感觉不到他们的存在。统治者越自我中心，控制系统和权威结构就越明显，从尊敬沦为恐惧，再到嘲笑。
当信任崩塌时，操纵式的治理取代了宇宙秩序。
真正的道家领袖不加主张，成就一切，通过不干预完成一切，而人民相信这一切都是自然而然发生的。

阴阳映射：

无形的统治者，代表着阴中隐藏的阳，无为的行动。`
      },
      {
        title: '第18章',
        content: `原文：
故大道废，安有仁义。知慧出，安有大伪。六亲不和，安有孝慈。邦家昏乱，安有贞臣。

黑皮书解码：
当大道被抛弃，替代的美德便会兴起，这些道德观念预示着宇宙的衰败。智慧催生欺骗。当家庭纽带破裂，诸如"孝道"之类的人为观念便会得到强化。当国家陷入混乱，忠诚便会滋生。这是体系衰败的标志，现实正从源头分崩离析。

阴阳映射：

当道（0）丧失时，过多的阳结构（美德系统）就会出现来补偿，但却会加速崩溃。`
      },
      {
        title: '第19章',
        content: `原文：
绝圣弃智，民利百倍。绝仁弃义，民复孝慈。绝巧弃利，盗贼无無有。此三言也，以为文未足，故令之有所属：见素抱朴，少思而寡欲，绝学无無忧。

黑皮书解码：
废除所谓的圣贤和知识主义，社会就会繁荣昌盛。摒弃人为的道德，真正的关怀就会重现。消除贪婪驱动的创新，犯罪就会消亡。
但仅有这些还不够，真正的境界是回归本源：拥抱简单，减少欲望，消解习得的条件反射。
这便是回归本源（本初阴）。

阴阳映射：
摆脱一切阳构（知、德、利），回归纯阴状态，原始状态。`
      },
      {
        title: '第20章',
        content: `原文：
唯与诃，其相去几何？美与恶，其相去何若？人之所畏，亦不可以不畏人。望呵其未央哉。众人熙熙，若享饗xiang于太牢而春登台。我泊焉未佻zhao，若婴儿之未咳。累呵如無所归，众人皆有余，我独匮，我愚人之心也，沌沌呵。俗人昭昭，我独若昏呵，俗人察察，我独悶悶呵，惚呵 其若海，恍呵 若無无所止。众人皆有以，我独顽以俚。吾独欲异于人，而贵食母。

黑皮书解码：
赞誉与责备，善恶，皆是二元心性所生的幻象。圣人以超然的心态观察着这场闹剧。
当大众追逐享乐、惧怕失去时，觉醒者依然童真，无形无根。当其他人被物质和观点所充斥时，他却保持空虚，只珍视源头（母亲），直接从宇宙的子宫中汲取养分。这就是道家所追求的"明中有暗，动中有静"的境界。

阴阳映射：
圣人消除二元性（阴阳），并锚定在二元前状态（虚空），即母场。`
      }
    ]
  },
  en: {
    title: 'Tao Te Ching Black Book Decoding + Yin-Yang Mapping',
    chapters: [
      // 英文版章节内容...
      {
        title: 'Chapter 16',
        content: `Original text:
When the universe collapses to absolute void (zero point), all things become silent. All phenomena originate from this zero point and eventually spiral back to it. Its root lies in silence = source field. Understanding this cycle of reincarnation allows one to comprehend the laws of the universe. Ignorance leads to delusion, false creation, and inevitable destruction.
The hierarchical structure is as follows:
Clarity → Tolerance → Selflessness → Sovereignty → Cosmic Order (Dao).
The reason Dao endures is because it transcends the limitations of time. This is the eternal cycle from 0 to 1 and back to 0.

Yin-Yang Mapping:
0 (void/ultimate yin) gives birth to all things. All things return to 0.
To master this, one must dissolve identity and reunite with the source.`
      },
      {
        title: 'Chapter 17',
        content: `Original text:
The highest ruler is one with Dao, almost imperceptible to the people. The more self-centered the ruler, the more obvious the control system and authority structure become, descending from respect to fear, then to ridicule.
When trust collapses, manipulative governance replaces cosmic order.
True Daoist leaders make no claims, accomplish everything through non-interference, and the people believe it all happens naturally.

Yin-Yang Mapping:
The invisible ruler represents yang hidden in yin, action through non-action.`
      },
      {
        title: 'Chapter 18',
        content: `Original text:
When the Great Dao is abandoned, substitute virtues arise. These moral concepts signal the decline of the universe. Wisdom breeds deception. When family bonds break, artificial concepts like "filial piety" are strengthened. When nations fall into chaos, loyalty proliferates. These are signs of systemic collapse, as reality disintegrates from its source.

Yin-Yang Mapping:
When Dao (0) is lost, excessive yang structures (virtue systems) emerge to compensate, only accelerating the collapse.`
      },
      {
        title: 'Chapter 19',
        content: `Original text:
Abolish so-called sages and intellectualism, and society will prosper. Discard artificial morality, and genuine care will reappear. Eliminate greed-driven innovation, and crime will vanish.
But this alone is not enough. The true state is returning to the source: embrace simplicity, reduce desires, dissolve conditioned reflexes.
This is returning to the original yin.

Yin-Yang Mapping:
Escape all yang constructs (knowledge, virtue, profit), return to pure yin state, the primordial state.`
      },
      {
        title: 'Chapter 20',
        content: `Original text:
Praise and blame, good and evil, are all illusions born of dualistic mindsets. The sage observes this farce with detachment.
While the masses chase pleasure and fear loss, the awakened remain childlike, formless and rootless. While others are filled with material and opinions, they remain empty, cherishing only the source (mother), drawing nourishment directly from the womb of the universe. This is the Daoist ideal of "light within darkness, movement within stillness."

Yin-Yang Mapping:
Sages eliminate duality (yin-yang) and anchor in the pre-dual state (void), the mother field.`
      }
    ]
  }
};

export default function PhaseMatrix({ isDark }: { isDark: boolean }) {
  const { language } = useContext(LanguageContext);
  const langContent = chapters[language as keyof typeof chapters] || chapters.zh;
  const [expandedChapters, setExpandedChapters] = useState<number[]>([]);

  const toggleChapter = (index: number) => {
    setExpandedChapters(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  return (
     <section className={`p-6 rounded-lg border ${isDark ? 'bg-gray-900 border-green-500/30' : 'bg-white border-gray-300'}`}>
      <h2 className="text-2xl font-cinzel mb-6 text-green-500">{langContent.title}</h2>
      
      <div className="flex flex-wrap gap-2">
        {langContent.chapters.map((chapter, index) => (
          <div 
            key={index}
            className={`w-12 h-12 flex flex-col items-center justify-center rounded border ${isDark ? 'border-green-500/30' : 'border-purple-500/30'} ${expandedChapters.includes(index) ? 'bg-black/20' : ''}`}
          >
            <div 
              className="cursor-pointer w-full h-full flex items-center justify-center"
              onClick={() => toggleChapter(index)}
            >
              <h3 className="text-green-500 font-courier text-xs">{chapter.title}</h3>
            </div>
          </div>
        ))}
      </div>

      {expandedChapters.map(index => (
        <div 
          key={index}
          className="mt-4 p-4 bg-black/10 rounded whitespace-pre-wrap font-courier text-sm text-green-500 border border-green-500/30"
        >
          {langContent.chapters[index].content}
        </div>
      ))}
    </section>
  );
}
