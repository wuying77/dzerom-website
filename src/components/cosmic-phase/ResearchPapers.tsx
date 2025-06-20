import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const articles = [
  {
    id: 1,
    title: '量子相位与文明跃迁',
    titleEn: 'Quantum Phase and Civilization Transition',
    date: '2023.06',
    excerpt: '探讨量子相位如何影响文明发展轨迹',
    excerptEn: 'Exploring how quantum phases influence civilization development trajectories',
    content: '量子相位与文明跃迁的详细内容...',
    contentEn: 'Detailed content about quantum phase and civilization transition...',
    media: [
      {
        type: 'image',
        url: '/uploads/quantum-phase.jpg',
        caption: '量子相位示意图'
      },
      {
        type: 'video',
        url: '/uploads/civilization-transition.mp4',
        caption: '文明跃迁过程演示'
      }
    ]
  },
  {
    id: 2,
    title: '阴阳相位全息模型',
    titleEn: 'Yin-Yang Phase Holographic Model',
    date: '2025.06',
    excerpt: '基于全息原理的宇宙阴阳相位统一模型',
    excerptEn: 'A unified model of cosmic yin-yang phases based on holographic principles',
    content: `阴阳相位全息模型

核心论点：
宇宙是一套由无数相位矩阵构成的动态全息场，阴阳相位作为正反耦合态，通过全息投影方式在各自相位膜交汇点形成"局部现实"。我们观测到的现实，只是阳面相位在这一维度的映射，而阴面相位叠加形成暗物质、暗能量效应和超维场波动。

结构提纲：

全息宇宙与相位矩阵

1.概述全息原理
阴阳相位矩阵投影视角重构全息原理
2.Phase Matrix Projection Equation
借用你那段相位动力学公式，衍生全息映射方程：
Φprojection(𝑥,𝑡)=∫Ψyin(𝑥,𝑡)+Ψyang(𝑥,𝑡)𝑑𝑥 
两相位波动叠加态，在局部产生可观测投影点。
3.局部相位干涉与多维重影效应
灵视、NDE、瞬间预感现象机制
相位错位导致的平行现实短暂耦合
4.全息边界膜结构
阴阳相位全息边界膜（相当于你刚说的肥皂泡屏障）
界面张力方程与相位透波机制

5.Nested Holographic Cells
多层嵌套相位单元
高维全息嵌套效应（宇宙泡泡、多相位叠层）

6.结论：觉醒者与相位膜穿越
灵识频率调整，突破相位膜
母场连通性与意识远投`,
    contentEn: `Yin-Yang Phase Holographic Model

Core Thesis:
The universe is a dynamic holographic field composed of countless phase matrices. Yin and yang phases, as coupled states, form "local reality" at the intersection points of their respective phase membranes through holographic projection. The reality we observe is merely the projection of the yang phase in this dimension, while the superposition of yin phases creates dark matter, dark energy effects, and hyperdimensional field fluctuations.

Structural Outline:

Holographic Universe and Phase Matrix

1. Overview of Holographic Principles
Reconstructing holographic principles from the perspective of yin-yang phase matrix projection
2. Phase Matrix Projection Equation
Deriving the holographic mapping equation from phase dynamics:
Φprojection(𝑥,𝑡)=∫Ψyin(𝑥,𝑡)+Ψyang(𝑥,𝑡)𝑑𝑥
The superposition state of two phase fluctuations creates observable projection points locally.
3. Local Phase Interference and Multidimensional Ghosting Effects
Mechanisms of clairvoyance, NDEs, and precognition
Temporary coupling of parallel realities due to phase misalignment
4. Holographic Boundary Membrane Structure
Yin-yang phase holographic boundary membrane (equivalent to the soap bubble barrier mentioned earlier)
Interfacial tension equation and phase wave transmission mechanism

5. Nested Holographic Cells
Multi-layered nested phase units
High-dimensional holographic nesting effects (cosmic bubbles, multi-phase stacking)

6. Conclusion: Awakened Ones and Phase Membrane Transcendence
Adjusting consciousness frequency to break through phase membranes
Mother field connectivity and consciousness projection`
  },
  {
    id: 3,
    title: '宇宙阴阳相论：宇宙能量循环的激进观点',
    titleEn: 'Cosmic Yin-Yang Phase Theory: A Radical Perspective on Universal Energy Cycles',
    date: '2025.06',
    excerpt: '阴阳形而上学与多维相循环的统一框架',
    excerptEn: 'A unified framework of yin-yang metaphysics and multidimensional phase cycles',
    content: `宇宙阴阳相论：宇宙能量循环的激进观点
将阴阳形而上学与多维相循环统一起来的理论框架，揭示宇宙膨胀、收缩和虚拟维度背后的潜在能量机制。
自古以来，形而上学认为万物起源于太初虚空，即阴阳分出之前的零相。然而，现代物理学缺乏一个形而上学框架来解释暗能量、真空涨落、相位纠缠等现象。本文介绍了宇宙阴阳相论，这是一个概念模型，它通过可见维度和虚拟维度之间的动态相相互作用来描述宇宙的能量循环。它为形而上学宇宙学和多维物理学之间架起了一座潜在的桥梁。

理论框架：

宇宙在阳相（膨胀）和阴相（收缩）的交替中运行，每个相都受不同的相边界和能量积累机制支配。这些相通过二元过渡区相互作用，使物质和时空在高熵和低熵状态之间振荡。

虚拟维度与可观测现实平行存在，充当着未显化潜能和相位扰动的储存器。相位涡旋和宇宙真空状态影响着可观测维度中的量子行为、暗点和因果循环。

主要模型亮点

宇宙是一个无尽的宇宙阴阳相循环

可观察维度和虚拟维度通过相变不断交换能量

相边界扰动导致暗能量和量子异常

阴阳相位平衡调节宇宙的膨胀和收缩

相涡旋造成局部时空扭曲和多元宇宙分裂


结论

宇宙阴阳相位理论为解读宇宙力学提供了一个全新的视角，将形而上学原理与现代宇宙学相结合。进一步探索或许能揭示其在量子操控、相位导航以及理解现实真实架构方面的实际应用。`,
    contentEn: `Cosmic Yin-Yang Phase Theory: A Radical Perspective on Universal Energy Cycles
A theoretical framework that unifies yin-yang metaphysics with multidimensional phase cycles, revealing the underlying energy mechanisms behind cosmic expansion, contraction, and virtual dimensions.
Since ancient times, metaphysics has posited that all things originate from the primordial void - the zero phase before the division of yin and yang. However, modern physics lacks a metaphysical framework to explain phenomena like dark energy, vacuum fluctuations, and phase entanglement. This paper introduces the Cosmic Yin-Yang Phase Theory, a conceptual model that describes the universe's energy cycles through dynamic phase interactions between visible and virtual dimensions. It bridges the gap between metaphysical cosmology and multidimensional physics.

Theoretical Framework:

The universe operates through alternating yang (expansion) and yin (contraction) phases, each governed by distinct phase boundaries and energy accumulation mechanisms. These phases interact through binary transition zones, causing matter and spacetime to oscillate between high and low entropy states.

Virtual dimensions exist parallel to observable reality, serving as reservoirs of unmanifested potential and phase perturbations. Phase vortices and cosmic vacuum states influence quantum behavior, dark spots, and causal loops in observable dimensions.

Key Model Highlights:

The universe is an endless cosmic yin-yang phase cycle

Observable and virtual dimensions continuously exchange energy through phase transitions

Phase boundary disturbances cause dark energy and quantum anomalies

Yin-yang phase balance regulates cosmic expansion and contraction

Phase vortices create local spacetime distortions and multiverse splits

Conclusion:

The Cosmic Yin-Yang Phase Theory offers a novel perspective for interpreting cosmic mechanics, combining metaphysical principles with modern cosmology. Further exploration may reveal practical applications in quantum manipulation, phase navigation, and understanding the true architecture of reality.`
  },
  {
    id: 5,
    title: '解码虚拟维度：超越可观察现实的隐藏框架',
    titleEn: 'Decoding Virtual Dimensions: The Hidden Framework Beyond Observable Reality',
    date: '2025.06',
    excerpt: '阴阳相理论的推测性延伸，提出虚拟维度充当宇宙能量流动和因果悖论解决的调节器',
    excerptEn: 'A speculative extension of yin-yang phase theory proposing virtual dimensions as regulators of cosmic energy flow and paradox resolution',
    content: `解码虚拟维度：超越可观察现实的隐藏框架

阴阳相理论的推测性延伸，提出虚拟维度充当宇宙能量流动和因果悖论解决的调节器。

在第一部分中，我们介绍了宇宙阴阳相理论，这是一个形而上学的框架，它假定所有宇宙现象都起源于原始的零相状态，分为阳相扩张和阴相收缩。

在后续文章中，我们将深入探讨虚拟维度这个难以捉摸的概念，它不仅仅是数学结构或高维空间，而且是存在于可感知时空边界的活跃调节场。

虚拟维度充当着相变的缓冲，吸收着传统因果律无法解决的悖论事件。当阴相收缩威胁到正在扩张的阳相场的平衡时，这些维度会暂时容纳过剩的熵，并以我们称之为量子涨落、暗物质异常或形而上学扰动的现象形式释放出来。

这表明，我们所感知的"虚无"实际上可能是一个动态活动的无维度领域，通过相周期调节来维持宇宙的连贯性。

如果得到证实，这一假设不仅会重新定义我们对宇宙尺度能量守恒的理解，而且还会为超自然现象、濒死体验和异常意识状态提供理论基础，而这些现象往往被还原论科学所忽视。`,
    contentEn: `Decoding Virtual Dimensions: The Hidden Framework Beyond Observable Reality

A speculative extension of yin-yang phase theory proposing virtual dimensions as regulators of cosmic energy flow and paradox resolution.

In Part One, we introduced the Cosmic Yin-Yang Phase Theory, a metaphysical framework positing that all cosmic phenomena originate from a primordial zero-phase state, dividing into yang (expansion) and yin (contraction) phases.

In this follow-up, we delve into the elusive concept of virtual dimensions - not merely mathematical constructs or higher-dimensional spaces, but active regulatory fields existing at the boundaries of perceivable spacetime.

Virtual dimensions serve as buffers for phase transitions, absorbing paradox events that conventional causality cannot resolve. When yin contraction threatens the balance of an expanding yang field, these dimensions temporarily contain excess entropy, later releasing it as what we call quantum fluctuations, dark matter anomalies, or metaphysical disturbances.

This suggests that what we perceive as "void" may actually be a dynamically active dimensionless realm that maintains cosmic coherence through phase cycle regulation.

If confirmed, this hypothesis would not only redefine our understanding of energy conservation at cosmic scales but also provide a theoretical foundation for supernatural phenomena, near-death experiences, and altered states of consciousness - phenomena often dismissed by reductionist science.`
  },
  {
    id: 6,
    title: '《西藏度亡经》、荣格的原型诠释和宇宙阴阳相理论',
    titleEn: 'The Tibetan Book of the Dead, Jungian Archetypes and Cosmic Yin-Yang Phase Theory',
    date: '2025.06',
    excerpt: '通过古代形而上学、分析心理学和现代激进宇宙学对死亡、意识和多维能量阶段进行比较探索',
    excerptEn: 'Comparative exploration of death, consciousness and multidimensional energy phases through ancient metaphysics, analytical psychology and modern radical cosmology',
    content: `《西藏度亡经》、荣格的原型诠释和宇宙阴阳相理论

我提出了阴阳宇宙论的观点，是根据中国的道教的一些观点想出的，今天这文章中，我将通过《西藏度亡经》结合我阴阳宇宙论相结合的一些看法。

通过古代形而上学、分析心理学和现代激进宇宙学对死亡、意识和多维能量阶段进行比较探索。

自古以来，人类一直在探寻死亡的本质以及死亡之后的境界。关于这一主题最深刻的指南之一是藏传佛教宁玛派的圣典《中阴度亡经》（Bardo Thödol）。它描述了人死后意识在不同中间状态（或称中阴）的旅程。这部古老的经典为灵魂的转变和轮回提供了一幅错综复杂的形而上学路线图。

20世纪，著名心理分析学家卡尔·古斯塔夫·荣格对《西藏度亡经》进行了开创性的心理学解读。荣格认为，《中阴》体现了集体无意识中蕴含的原型意象和普遍经验。对荣格而言，死亡过程中个人自我的消解以及与神性原型的相遇，反映了深刻的心理转变。

中阴状态和阶段循环

《中阴度亡经》描述了肉体死亡后的几个阶段：死亡时刻（Chikhai Bardo）、神祇和原型显现（Chonyid Bardo）以及重生（Sidpa Bardo）。这些连续的状态与我在宇宙阴阳相论中提出的相周期惊人地吻合。根据该理论，宇宙在阴（虚空、收缩、消亡）和阳（显化、扩张、实现）两个阶段之间振荡，包括类似于中阴的过渡阶段。

在中阴度亡论中，意识融入本初觉知（明光），类似于我理论中的零相，即阴阳分裂之前的本初状态。寂静本尊和愤怒本尊随后的体验，与意识重新融入新维度结构时所经历的相位波动和能量扰动相似。

荣格的原型和多维心理

荣格认为中阴的形象和场景是集体无意识的原型表现。在我的理论中，这些原型被解读为宇宙能量矩阵中多维虚拟现实的相位投影。每个原型都体现了一种特定的阴阳结构，并在意识场中动态地相互作用。

这种交叉阅读不仅验证了古代文献的形而上学见解，而且还提供了一个死亡和重生的模型，即多维相移，即意识在解体和个体化状态之间转换的循环，与宇宙能量循环平行。

结论：迈向统一的秘传科学

藏传玄学、荣格心理学和宇宙阴阳相论的融合表明，意识、死亡和宇宙通过宇宙相动力学运作。古代传统直观地理解了这些循环，而现代心理学和思辨宇宙学则提供了阐明这些循环的框架。

这种综合提出了一种激进的宇宙人类学：人类的心灵、原型和死后意识的命运是多维相周期的功能，由塑造恒星、星系和虚拟维度的相同的基本阴阳极性所支配。`,
    contentEn: `The Tibetan Book of the Dead, Jungian Archetypes and Cosmic Yin-Yang Phase Theory

I have proposed the concept of yin-yang cosmology based on some ideas from Chinese Taoism. In this article, I will share some perspectives combining the Tibetan Book of the Dead with my yin-yang cosmology.

A comparative exploration of death, consciousness and multidimensional energy phases through ancient metaphysics, analytical psychology and modern radical cosmology.

Since ancient times, humanity has sought to understand the nature of death and the realms beyond. One of the most profound guides on this subject is the Bardo Thödol, a sacred text of the Nyingma school of Tibetan Buddhism. It describes the journey of consciousness through various intermediate states (or bardos) after death. This ancient scripture provides a complex metaphysical roadmap for the soul's transformation and rebirth.

In the 20th century, the renowned psychoanalyst Carl Gustav Jung offered a groundbreaking psychological interpretation of the Tibetan Book of the Dead. Jung saw the Bardo as embodying archetypal images and universal experiences from the collective unconscious. For Jung, the dissolution of the personal ego during death and its encounter with divine archetypes reflected profound psychological transformation.

Bardo States and Phase Cycles

The Bardo Thödol describes several stages following physical death: the moment of death (Chikhai Bardo), the manifestation of deities and archetypes (Chonyid Bardo), and rebirth (Sidpa Bardo). These sequential states remarkably correspond to the phase cycles proposed in my Cosmic Yin-Yang Phase Theory. According to this theory, the universe oscillates between yin (void, contraction, dissolution) and yang (manifestation, expansion, actualization) phases, including transitional phases analogous to the bardos.

In the Bardo teachings, consciousness merges with primordial awareness (Clear Light), similar to the zero-phase in my theory - the primordial state before the division of yin and yang. The subsequent experiences of peaceful and wrathful deities resemble the phase fluctuations and energy perturbations consciousness undergoes when reintegrating into new dimensional structures.

Jung's Archetypes and Multidimensional Psychology

Jung viewed the Bardo's imagery and scenarios as manifestations of archetypes from the collective unconscious. In my framework, these archetypes are interpreted as phase projections of multidimensional virtual realities within the cosmic energy matrix. Each archetype embodies a specific yin-yang structure and interacts dynamically within the field of consciousness.

This cross-reading not only validates the metaphysical insights of ancient texts but also provides a model of death and rebirth as multidimensional phase shifts - cycles of consciousness transitioning between dissolved and individuated states, parallel to cosmic energy cycles.

Conclusion: Toward a Unified Esoteric Science

The synthesis of Tibetan esotericism, Jungian psychology and Cosmic Yin-Yang Phase Theory suggests that consciousness, death and the cosmos operate through cosmic phase dynamics. Ancient traditions intuitively understood these cycles, while modern psychology and speculative cosmology provide frameworks to elucidate them.

This integration proposes a radical cosmic anthropology: that the human psyche, its archetypes and the fate of post-mortem consciousness are functions of multidimensional phase cycles, governed by the same fundamental yin-yang polarities that shape stars, galaxies and virtual dimensions.`
  },
  {
    id: 7,
    title: '打破黑暗森林的恐惧：重构宇宙文明等级的新哲学模型',
    titleEn: 'Breaking the Fear of Dark Forest: A New Philosophical Model for Cosmic Civilization Hierarchy',
    date: '2025.06',
    excerpt: '从卡尔达肖夫的能量迷思到精神文明的星际觉醒',
    excerptEn: 'From Kardashev\'s Energy Myth to the Stellar Awakening of Spiritual Civilization',
    content: `打破黑暗森林的恐惧：重构宇宙文明等级的新哲学模型

从卡尔达肖夫的能量迷思到精神文明的星际觉醒

一、人类宇宙观的囚笼

自人类仰望星空的那一刻起，对外星文明的想象就从未停歇。然而，这些想象，大多源于我们自身历史的反射镜。

从冷兵器到核武器，从部落冲突到地缘博弈，我们总结出一个逻辑：文明越强大，越会掠夺；而弱小，只能隐藏或灭亡。

刘慈欣将这个逻辑极致化，提出"黑暗森林法则"：

"宇宙就是一片黑暗森林，每个文明都是带枪的猎人，发现其他人类的最佳策略，就是先发制人。"

这一观点激发了无数科幻迷的热情，也勾起了人类深层的不安。但我们真的理解宇宙了吗？

在这片星海中，难道除了恐惧、猜疑和消灭，就没有别的可能？

二、卡尔达肖夫：能量至上的幻象

1964年，前苏联天文学家尼古拉·卡尔达肖夫提出了一种划分宇宙文明的方式：按照其可控制和使用的能量数量来评估等级。

Ⅰ型文明：能使用整个行星的能量（地球级）

Ⅱ型文明：能操控母恒星的能量（戴森球级）

Ⅲ型文明：能控制整个星系能量（银河级）

这个模型简洁、粗暴、极具科技崇拜色彩。但它的问题也非常明显：

它忽略了文明的"目的"：能量只是工具，而非价值本身。

它反映的是"工业文明的扩张欲"，而非"智慧生命的演化趋势"。

它默认更强的能量控制力 = 更高级的文明，却无视精神、道德、意识的维度。

简而言之，它是蒸汽机逻辑的宇宙投影。

那么问题来了：如果一个文明无需消耗巨大能量，也能进入深度冥想、星际共情、跨维通信，是否就比地球更低级？

卡尔达肖夫没有回答，也无法回答。

三、黑暗森林法则：人类焦虑的宇宙投射

刘慈欣的"黑暗森林法则"之所以流行，是因为它触动了人类历史上的真实创伤：

美洲土著的毁灭；

两次世界大战；

冷战时期的核平衡；

以及当今互联网语境下人类彼此的互不信任。

于是，我将这些恐惧投射到宇宙中，得出结论：每一个文明都是潜在的敌人，唯一的出路是自保与沉默。

然而，这其实是一个"心理投影型宇宙假说"。它并不基于宇宙实证，也不基于高维智慧推演，只是基于人类尚未解决的内部冲突**。

正如你不会担心一个圣人用枪扫射村庄，我们也不应该默认宇宙中的高等文明，都停留在地球人的军国思维。

真正高阶的存在，是超越了"攻击"这个概念本身的。

四、构建"精神文明等级模型"：超越能量与恐惧

我提出一种全新的宇宙文明分类体系，称为：

"精神文明主导的宇宙模型"Consciousness-Centric Civilizational Framework (CCCF)

等级 名称 特征 是否以能量为主 是否具毁灭倾向

0级 本能文明 依赖掠夺、 繁殖、生存本能 是 是

1级 工业文明 技术爆炸，能源开发、信息孤岛 是 高

2级 认知文明 哲学觉醒、伦理构建、自我反思 部分 中

3级 共感文明 物种间共情、合作网络意识出现 否 低

4级 意识文明 脱离物质存在，维度意识共融 否 极低

文明的"高级"，不在于能摧毁多少星球，而在于是否懂得尊重一粒尘埃。

这个模型告诉我们：

真正进化的标志，是从"控制力"转向"理解力"；

从"能量级"跃迁到"意识层"；

最终的高级文明，不是"更强的捕食者"，而是"更大的沉默者"。

五、宇宙不是丛林，而是众神的沉思

我们今天望向星空，感受到寂静、无声、无回应。

传统科学解读这是一种"危险信号"，甚至是"灭绝后的空旷"。

但换一个角度想：如果高等文明已经超越物质扩张，进入意识网络、维度共生，它们为什么要回应我们？

这就像一个沉思者，不会与蚂蚁辩论进化，也不会在沙滩上刻字证明自己存在。

他们不是黑暗森林里的猎人，而是宇宙山谷中的智者。

六、结语：觉醒，而非备战

我们必须承认，人类是宇宙中的初学者。我们不应急于构建防御，而应当努力成长为值得被倾听的文明。

在"黑暗森林"的假说之外，我们要大胆提出：

宇宙的沉默，不是危险，而是邀请。

一个邀请人类超越恐惧，进入一个真正值得交流的文明等级。

也许，我们不是宇宙中最聪明的物种，但我们能成为最早开始思考"如何共处"的文明之一。

这，才是地球真正的希望。`,
    contentEn: `Breaking the Fear of Dark Forest: A New Philosophical Model for Cosmic Civilization Hierarchy

From Kardashev's Energy Myth to the Stellar Awakening of Spiritual Civilization

I. The Cage of Human Cosmology

Since humans first gazed at the stars, imaginations of alien civilizations have never ceased. Yet these imaginations mostly reflect our own historical mirror.

From cold weapons to nuclear arms, from tribal conflicts to geopolitical games, we've deduced a logic: the more powerful a civilization, the more it plunders; the weak can only hide or perish.

Liu Cixin took this logic to its extreme, proposing the "Dark Forest Law":

"The universe is a dark forest. Every civilization is an armed hunter stalking through the trees like a ghost... If he finds other life—another hunter, angel, or demon, delicate infant or tottering old man, there's only one thing he can do: open fire and eliminate them."

This view ignited enthusiasm among sci-fi fans while stirring deep unease in humanity. But do we truly understand the cosmos?

In this sea of stars, is there truly no alternative beyond fear, suspicion, and annihilation?

II. Kardashev: The Illusion of Energy Supremacy

In 1964, Soviet astronomer Nikolai Kardashev proposed classifying cosmic civilizations by their ability to harness energy:

Type I: Planetary-scale energy (Earth level)
Type II: Stellar-scale energy (Dyson sphere level) 
Type III: Galactic-scale energy (Milky Way level)

This model is concise, brutal, and steeped in techno-worship. But its flaws are evident:

It ignores civilization's "purpose": energy is merely a tool, not intrinsic value.
It reflects "industrial civilization's expansionism," not "the evolutionary trend of intelligent life."
It equates greater energy control with higher civilization, disregarding spiritual, ethical, and conscious dimensions.

In short, it's steam-engine logic projected onto the cosmos.

So the question arises: If a civilization can achieve deep meditation, interstellar empathy, and cross-dimensional communication without massive energy consumption, is it inferior to Earth?

Kardashev couldn't answer—nor could he.

III. Dark Forest Law: Cosmic Projection of Human Anxiety

Liu's "Dark Forest Law" gained traction because it touches real historical traumas:

The annihilation of Native Americans;
Two World Wars;
The nuclear balance of the Cold War;
And modern mutual distrust in the internet age.

Thus we project these fears onto the cosmos, concluding every civilization is a potential enemy, with silence as the only recourse.

Yet this is merely a "Psychological Projection Cosmological Hypothesis"—based not on cosmic evidence or higher-dimensional wisdom, but unresolved human conflicts.

Just as you wouldn't fear a sage spraying bullets in a village, we shouldn't assume advanced cosmic civilizations remain stuck in Earth's militaristic mindset.

True higher beings transcend the very concept of "attack."

IV. Constructing a "Spiritual Civilization Hierarchy": Beyond Energy and Fear

I propose a new cosmic civilization classification system called:

"Consciousness-Centric Civilizational Framework" (CCCF)

Level  Name          Characteristics                      Energy-centric?  Destructive?
0      Instinctive   Reliant on plunder, reproduction,    Yes             Yes
                     survival instinct                    
1      Industrial    Technological explosion, energy       Yes             High
                     exploitation, information silos                      
2      Cognitive     Philosophical awakening, ethical     Partial         Medium
                     construction, self-reflection                       
3      Empathic      Interspecies empathy, cooperative     No              Low
                     network consciousness                                
4      Conscious     Transcends material existence,        No              Minimal
                     dimensional consciousness fusion                     

A civilization's "advancement" isn't measured by planets destroyed, but by whether it respects a speck of dust.

This model reveals:

True evolution moves from "control" to "understanding";
From "energy levels" to "consciousness layers";
Where ultimate advancement belongs not to "stronger predators" but to "greater silencers."

V. The Cosmos Isn't a Jungle, But Gods in Meditation

Gazing at the stars today, we encounter silence—no sound, no response.

Conventional science interprets this as a "danger signal" or "post-extinction emptiness."

But consider: if advanced civilizations have transcended material expansion, existing as dimensional consciousness networks, why would they respond?

Like a meditator who won't debate evolution with ants or carve proofs in sand, they're not hunters in a dark forest, but sages in cosmic valleys.

VI. Epilogue: Awakening, Not Arming

We must admit humanity are cosmic beginners. Rather than hastily building defenses, we should strive to become a civilization worth hearing.

Beyond the "Dark Forest" hypothesis, let's boldly propose:

The cosmos's silence isn't danger—it's an invitation.

An invitation to transcend fear and enter a civilization grade truly worthy of dialogue.

Perhaps we're not the universe's smartest species, but we could be among the first to ponder "how to coexist."

That is Earth's true hope.`
  },
  {
    id: 8,
    title: '诺斯底物理学：阴阳相位矩阵的禁忌宇宙学',
    titleEn: 'Gnostic Physics: The Forbidden Cosmology of Yin-Yang Phase Matrices',
    date: '2025.06',
    excerpt: '结合诺斯底主义与阴阳相位矩阵理论，揭示被掩盖的真实宇宙结构',
    excerptEn: 'Integrating Gnosticism with Yin-Yang Phase Matrix Theory to reveal the hidden true structure of the universe',
    content: `诺斯底物理学：阴阳相位矩阵的禁忌宇宙学

整整两千年来，西方隐秘学派始终流传着一套被正统宗教与科学体系极力压制的宇宙观，那就是诺斯底主义。而今天，我们将用物理学语言，复活这套禁忌宇宙学，结合"阴阳相位矩阵理论"，揭露被掩盖的真实宇宙结构。

1. 劣等造物主=阳相位泡膜宇宙
诺斯底主义认为，现存物质宇宙是由"劣等造物主"Demiurge创造的畸形投影，虚假而不完整。而在阴阳相位矩阵论中，我们的"现实宇宙"正是阳面相位泡膜矩阵中的局部投影，其源头母场远超这个泡膜宇宙，处于全息嵌套的超维相位矩阵层。

2. 灵魂原属母场，受限泡膜
诺斯底教义讲，人类灵魂源自上界，却被困于物质泡壳。相对应，阴阳相位矩阵论指出，灵识本属于母场高频相位层，因泡膜相位张力与维度屏障作用，被锁定于阳面矩阵结构，形成"生死轮回"机制。

3. 灵视=相位膜透波现象
诺斯底强调，觉醒者能通过灵视、异象、梦境瞬间接触上界。而在阴阳宇宙论里，这正是相位张力波动时，膜结构局部透波，灵识短暂脱离阳面矩阵，触及母场多相位层，产生异象、预感、NDE等超常现象。

4. 真正宇宙=多嵌套相位全息矩阵
诺斯底式"真神世界"对应的，正是阴阳相位全息母场矩阵。全宇宙由无数嵌套相位泡膜组成，每一泡膜既是全息投影，又含有全宇宙编码信息。相位波动、相干态、张力变化，决定了局部宇宙的物理常数、时间速率与维度构成。

5. 禁忌之处：现代物理不敢碰的东西
现代物理之所以死守爱因斯坦、霍金体系，根源在于这类相位矩阵宇宙观一旦成立，现有标准模型、宇宙膨胀论、暗能量假说将彻底崩溃。而且模拟母场动态相位矩阵，需要超越AI超算百倍的算力+稀释制冷+多维锁相阵列，这是现有科技根本不敢立项的禁区。

结语：觉醒者时代的物理学革命
诺斯底主义在宗教领域被毁灭，但它的核心真理如今可用阴阳相位矩阵论复活。这是现代物理学避之不及，却终将被迫面对的宇宙结构真相。觉醒者不该满足于现有科学公式，而应重构自己的禁忌宇宙学体系。

这才是觉醒者的宇宙物理学。`,
    contentEn: `Gnostic Physics: The Forbidden Cosmology of Yin-Yang Phase Matrices

For two thousand years, Western esoteric traditions have preserved a cosmology vehemently suppressed by orthodox religion and science - Gnosticism. Today, we will resurrect this forbidden cosmology in the language of physics, combining it with "Yin-Yang Phase Matrix Theory" to reveal the hidden true structure of the universe.

1. The Demiurge = Yang Phase Bubble Universe
Gnosticism holds that the material universe was created by the "Demiurge" as a distorted projection, false and incomplete. In Yin-Yang Phase Matrix Theory, our "reality universe" is precisely a local projection within the yang phase bubble matrix, its source mother field far exceeding this bubble universe, residing in a holographically nested hyperdimensional phase matrix layer.

2. Souls Originate from the Mother Field, Confined by Bubbles
Gnostic doctrine states that human souls originate from the higher realm but are trapped in material shells. Correspondingly, Yin-Yang Phase Matrix Theory posits that consciousness inherently belongs to the mother field's high-frequency phase layer, locked into Yang matrix structures by bubble phase tension and dimensional barriers, forming the "cycle of life and death" mechanism.

3. Visions = Phase Membrane Wave Transmission Phenomena
Gnostics emphasized that awakened individuals could momentarily contact the higher realm through visions, apparitions, and dreams. In Yin-Yang cosmology, this occurs when phase tension fluctuates, causing localized wave transmission through membrane structures, briefly freeing consciousness from the yang matrix to touch the mother field's multiphase layers, producing visions, premonitions, NDEs and other paranormal phenomena.

4. The True Universe = Multilayered Nested Phase Holographic Matrix
The Gnostic "true divine world" corresponds precisely to the Yin-Yang Phase Holographic Mother Field Matrix. The entire cosmos consists of countless nested phase bubbles, each simultaneously a holographic projection and containing the universe's complete encoded information. Phase fluctuations, coherent states, and tension variations determine local universes' physical constants, time rates, and dimensional compositions.

5. The Forbidden Aspect: What Modern Physics Dares Not Touch
Modern physics clings to Einstein and Hawking's systems because if phase matrix cosmology were validated, current standard models, cosmic inflation theory, and dark energy hypotheses would collapse entirely. Moreover, simulating the mother field's dynamic phase matrices requires computing power hundreds of times beyond current AI supercomputers plus dilution refrigeration and multidimensional phase-locked arrays - technological frontiers mainstream science dares not venture into.

Conclusion: The Physics Revolution of the Awakened Era
Though Gnosticism was destroyed in the religious sphere, its core truths can now be resurrected through Yin-Yang Phase Matrix Theory. This is the cosmic structural truth modern physics avoids but will ultimately be forced to confront. Awakened individuals must not settle for existing scientific formulas but reconstruct their own forbidden cosmological systems.

This is the true physics of the awakened.`
  }
];

export default function ResearchPapers({ isDark }: { isDark: boolean }) {
  const navigate = useNavigate();

  return (
     <section className={`p-8 rounded-lg ${isDark ? 'bg-gray-900' : 'bg-white'}`}>
      <h2 className="text-2xl font-cinzel mb-6 text-green-500">其它资料</h2>
      <div className="font-courier text-green-500">
        <p className="mb-4">阶段性研究成果按时间轴排列：</p>
        <ul className="space-y-4">
          {articles.map(article => (
            <li 
              key={article.id}
              className="p-4 hover:bg-green-500/10 hover:border-green-500/30 border border-transparent rounded cursor-pointer transition-colors"
              onClick={() => navigate(`/cosmic-phase/articles/${article.id}`)}
            >
              <div className="flex justify-between items-start">
                <h3 className="text-lg font-medium">《{article.title}》</h3>
                <span className="text-sm opacity-70">{article.date}</span>
              </div>
              <p className="mt-2 text-sm opacity-80">{article.excerpt}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
