// Site content. Edit this file to update the page; main.js renders it.
// Publication fields: title, authors, venue, year, tags, links {label: url}, badge, thumb (path under assets/thumbs).

const ME = "Hyunsik Yoo";
const UPDATED = "Oct 2026";

const NEWS = [
  { date: "Sep 2026", text: "Started an Applied Scientist internship at <b>Amazon</b> (Seattle), working on language-steerable LLM-based generative retrieval." },
  { date: "Jun 2026", text: "Started a Machine Learning Engineer internship at <b>Airbnb</b>, building an evaluation framework for conversational travel agents." },
  { date: "2026", text: "Papers accepted at <b>SIGMOD'27</b>, <b>CIKM'26</b> (×2), and <b>COLM'26</b>." },
  { date: "2026", text: "Tutorials at <b>IEEE BigData'26</b> (cold-start recommendation) and <b>DASFAA'26</b> (continual recommender systems)." },
  { date: "2026", text: "Continual low-rank adapters for LLM-based generative recommendation accepted at <b>ICLR'26</b>." },
  { date: "2025", text: "Gave the <b>CIKM'25</b> tutorial on continual recommender systems." },
];

const TAGS = ["Recommendation", "LLM", "Personalization", "Continual Learning", "Post-training", "Agents", "Benchmark", "Retrieval", "Trustworthy", "Graph"];

const PUBS = [
  {
    title: "Instruction-Level Personalization for Prompt-Based Preference Prediction",
    authors: "Hyunsik Yoo, Yuanchen Bei, Ting-Wei Li, Ruizhong Qiu, Xuying Ning, Wonbin Kweon, SeongKu Kang, Hanghang Tong",
    venue: "Under review", tags: ["LLM", "Personalization"], links: {},
  },
  {
    title: "LODGE: A Conversational Travel Agent Benchmark with Grounded Goals and Controllable Difficulty",
    authors: "Wendy Wei*, Hyunsik Yoo*, Selen Uguroglu, Chun How Tan, Hanghang Tong, Yashar Mehdad, Gokhan Tur, Huiji Gao, Stephanie Moyerman",
    venue: "Under review", tags: ["LLM", "Agents", "Benchmark"], links: {},
  },
  {
    title: "Rethinking Cold-Start Item Recommendation",
    authors: "Yuanchen Bei, Hyunsik Yoo, Tianxin Wei, Xuying Ning, Dongqi Fu, Yinglong Xia, Hong Li, Jingrui He, Hanghang Tong",
    venue: "Under review", tags: ["Recommendation"], links: {},
  },
  {
    title: "ContextRank: Enhancing Scientific Document Retrieval with Context-Enriched Relations",
    authors: "Wonbin Kweon, Xueqiang Xu, Runchu Tian, Chih-Hsuan Wei, ZhiZheng Wang, Hyunsik Yoo, Gyuseok Lee, SeongKu Kang, Zhiyong Lu, Jiawei Han, Hwanjo Yu",
    venue: "Under review", tags: ["Retrieval"], links: {},
  },
  {
    title: "PerCept: Personalization in Concept Space for Multimodal Recommendation",
    authors: "Donghyuk Kang, Seunghan Lee, Dojun Hwang, Hyunsik Yoo, SeongKu Kang",
    venue: "Under review", tags: ["Recommendation", "Personalization"], links: {},
  },
  {
    title: "SCOUT: Coupling-Free Bounds for Trillion-Scale Top-k Retrieval in Sparse Tensor Factorization",
    authors: "Jun-Gi Jang, Hyunsik Yoo, Ruizhong Qiu, Yinglong Xia, Hanghang Tong",
    venue: "SIGMOD 2027", tags: ["Retrieval"], links: {},
  },
  {
    title: "TRACER: Balancing Stability-Plasticity-Cognitivity Trilemma for LLM Enhanced Continual Recommendation",
    authors: "WooJoo Kim, Hyunsik Yoo, Junyoung Kim, Jaehyung Lim, SeongKu Kang, Hwanjo Yu",
    venue: "CIKM 2026", tags: ["Continual Learning", "LLM", "Recommendation"], links: {},
  },
  {
    title: "Beyond Observed Auxiliary Relations: Environment-Conditioned Modeling for Multi-Behavior Recommendation",
    authors: "Seunghan Lee, Hyunsik Yoo, Jian Kang, Susik Yoon, SeongKu Kang",
    venue: "CIKM 2026", tags: ["Recommendation"], links: {},
  },
  {
    title: "Reinforcement Routing for Mixtures of LoRAs in Parameter-Efficient LLM Finetuning",
    authors: "Ruizhong Qiu, Hanqing Zeng, Yinglong Xia, Yiwen Meng, Ren Chen, Jiarui Feng, Dongqi Fu, Qifan Wang, Jiayi Liu, Jun Xiao, Xiangjun Fan, Benyu Zhang, Hong Li, Zhining Liu, Hyunsik Yoo, Zhichen Zeng, Tianxin Wei, Hanghang Tong",
    venue: "COLM 2026", tags: ["LLM", "Post-training"], links: {},
  },
  {
    title: "Continual Low-Rank Adapters for LLM-based Generative Recommender Systems",
    authors: "Hyunsik Yoo, Ting-Wei Li, SeongKu Kang, Zhining Liu, Charlie Xu, Qilin Qi, Hanghang Tong",
    venue: "ICLR 2026", tags: ["Recommendation", "LLM", "Continual Learning", "Post-training"],
    links: { PDF: "https://arxiv.org/pdf/2510.25093" }, thumb: "clora.png",
  },
  {
    title: "Mixture of Sequence: Theme-Aware Mixture-of-Experts for Long-Sequence Recommendation",
    authors: "Xiao Lin, Zhicheng Tang, Weilin Cong, Mengyue Hang, Kai Wang, Yajuan Wang, Zhichen Zeng, Ting-Wei Li, Hyunsik Yoo, Zhining Liu, Xuying Ning, Ruizhong Qiu, Wen-Yen Chen, Shuo Chang, Rong Jin, Huayu Li, Hanghang Tong",
    venue: "WWW 2026", tags: ["Recommendation"], links: {},
  },
  {
    title: "Capturing User Interests from Data Streams for Continual Sequential Recommendation",
    authors: "Gyuseok Lee, Hyunsik Yoo, Junyoung Hwang, SeongKu Kang, Hwanjo Yu",
    venue: "WSDM 2026", tags: ["Continual Learning", "Recommendation"], links: {},
  },
  {
    title: "Embracing Plasticity: Balancing Stability and Plasticity in Continual Recommender Systems",
    authors: "Hyunsik Yoo, SeongKu Kang, Ruizhong Qiu, Charlie Xu, Fei Wang, Hanghang Tong",
    venue: "SIGIR 2025", tags: ["Continual Learning", "Recommendation"],
    links: { PDF: "https://openreview.net/pdf?id=VAQ61u5I9q", Code: "https://github.com/hsyoo32/pisa" },
  },
  {
    title: "Generalizable Recommender System During Temporal Popularity Distribution Shifts",
    authors: "Hyunsik Yoo, Ruizhong Qiu, Charlie Xu, Fei Wang, Hanghang Tong",
    venue: "KDD 2025", tags: ["Recommendation", "Trustworthy"],
    links: { PDF: "https://openreview.net/pdf?id=HZwNHRnD1W", Code: "https://github.com/hsyoo32/tpab_" },
  },
  {
    title: "Class-Imbalanced Graph Learning without Class Rebalancing",
    authors: "Zhining Liu, Ruizhong Qiu, Zhichen Zeng, Hyunsik Yoo, David Zhou, Zhe Xu, Yada Zhu, Kommy Weldemariam, Jingrui He, Hanghang Tong",
    venue: "ICML 2024", tags: ["Graph", "Trustworthy"],
    links: { PDF: "https://proceedings.mlr.press/v235/liu24ay.html", Code: "https://github.com/ZhiningLiu1998/BAT" },
  },
  {
    title: "Ensuring User-side Fairness in Dynamic Recommender Systems",
    authors: "Hyunsik Yoo, Zhichen Zeng, Jian Kang, Ruizhong Qiu, David Zhou, Zhining Liu, Fei Wang, Charlie Xu, Eunice Chan, Hanghang Tong",
    venue: "WWW 2024", badge: "Oral", tags: ["Recommendation", "Trustworthy", "Continual Learning"],
    links: {
      PDF: "https://dl.acm.org/doi/abs/10.1145/3589334.3645536", arXiv: "https://arxiv.org/pdf/2308.15651",
      Code: "https://github.com/hsyoo32/fade", Talk: "https://www.youtube.com/watch?v=VrYgCWCcj9o",
    },
  },
  {
    title: "Disentangling Degree-related Biases and Interest for Out-of-Distribution Generalized Directed Network Embedding",
    authors: "Hyunsik Yoo, Yeon-Chang Lee, Kijung Shin, Sang-Wook Kim",
    venue: "WWW 2023", badge: "Oral", tags: ["Graph", "Trustworthy"],
    links: { PDF: "https://dl.acm.org/doi/10.1145/3543507.3583271", Code: "https://github.com/hsyoo32/odin" },
  },
  {
    title: "Directed Network Embedding with Virtual Negative Edges",
    authors: "Hyunsik Yoo*, Yeon-Chang Lee*, Kijung Shin, Sang-Wook Kim",
    venue: "WSDM 2022", tags: ["Graph"],
    links: {
      PDF: "https://dl.acm.org/doi/10.1145/3488560.3498470", Project: "https://sites.google.com/view/divine-wsdm22/main-page",
      Code: "https://github.com/hsyoo32/divine",
    },
  },
];

const TUTORIALS = [
  {
    title: "Cold-start Recommendation",
    authors: "Yuanchen Bei, Weizhi Zhang, Hyunsik Yoo, Dongqi Fu, Yinglong Xia, Hong Li, Philip S. Yu, Hanghang Tong",
    venue: "IEEE BigData 2026", links: {},
  },
  {
    title: "Continual Recommender Systems: A Focus on LLMs and Evolving Trends",
    authors: "Seunghan Lee, Seunghyun Baek, Dojun Hwang, Hyunsik Yoo, SeongKu Kang",
    venue: "DASFAA 2026",
    links: { Webpage: "https://idea.korea.ac.kr/research/dasfaa26-tutorial-continual-recommender-systems" },
  },
  {
    title: "Continual Recommender Systems",
    authors: "Hyunsik Yoo, SeongKu Kang, Hanghang Tong",
    venue: "CIKM 2025",
    links: {
      Paper: "https://arxiv.org/pdf/2507.03861",
      Webpage: "https://idea.korea.ac.kr/research/tutorial-continual-recommender-systems",
      "Slide 1": "https://drive.google.com/file/d/1bzkX5wuiQe5hh5RmBdHKKEbRFbD0bjvV/view?usp=sharing",
      "Slide 2": "https://drive.google.com/file/d/1ZanQoNJDeQIfN3tttirfg0908puaKNH1/view?usp=sharing",
      "Slide 3": "https://drive.google.com/file/d/1uNM8mMdtG4rM3ZK0TeAAzWHNr3VT21z5/view?usp=sharing",
      "Slide 4": "https://drive.google.com/file/d/1D8CMzNuIylsK_-13PE3tsNWw-DryCIAv/view?usp=sharing",
      "Slide 5": "https://drive.google.com/file/d/1Ki2arohAZ9JZUBLa1Hf5_W5vROW0_bER/view?usp=sharing",
    },
  },
];

const EXPERIENCE = [
  { org: "Amazon", logo: "amazon.png", role: "Applied Scientist Intern", place: "Seattle, WA", date: "Summers 2024 – 2025, Fall 2026",
    projects: [
      { text: "Language-steerable LLM-based generative retrieval", date: "Sep – Dec 2026" },
      { text: "Continual learning of generative recommender systems. Mentors: Qilin Qi, Charlie Xu", date: "May – Aug 2025" },
      { text: "Leveraging temporal context for consumer propensity prediction. Mentors: Zhen Wen, Charlie Xu", date: "May – Aug 2024" },
    ] },
  { org: "Airbnb", logo: "airbnb.png", role: "Machine Learning Engineer Intern", place: "San Francisco, CA (remote)", date: "Jun 2026 – Aug 2026",
    detail: "Evaluation framework for conversational travel agents. Mentors: Huiji Gao, Gokhan Tur, Wendy Wei." },
  { org: "ECIT, Queen's University Belfast", logo: "qub.png", role: "Research Intern", place: "Belfast, UK", date: "Sep 2018 – Dec 2018",
    detail: "Random forest for big data. Mentor: BooJoong Kang." },
];

const EDUCATION = [
  { org: "University of Illinois Urbana-Champaign", logo: "uiuc.png", role: "Ph.D. in Computer Science", date: "Aug 2022 – Dec 2026",
    detail: "Advisor: Prof. Hanghang Tong." },
  { org: "Hanyang University", logo: "hanyang.png", place: "Seoul, South Korea", date: "Mar 2013 – Feb 2022",
    projects: [
      { text: "M.S. in Computer Science. Advisor: Prof. Sang-Wook Kim", date: "Mar 2020 – Feb 2022" },
      { text: "B.S. in Computer Science & Engineering. Summa Cum Laude; includes 21 months of military service in the Republic of Korea Army", date: "Mar 2013 – Feb 2020" },
    ] },
];

const HONORS = [
  { text: "Top Reviewer, NeurIPS 2026", date: "2026" },
  { text: "Excellent Reviewer, KDD 2025 Research Track", date: "2025" },
  { text: "NSF Student Travel Award, KDD 2025 and SIGIR 2025", date: "2025" },
  { text: "Summa Cum Laude, Hanyang University", date: "2020" },
  { text: "Academic Excellence Award (top 3% in CS), Hanyang University", date: "2017, 2018" },
  { text: "Excellent Mentoring Team Award, Hanyang University", date: "2017" },
];
