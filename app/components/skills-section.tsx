export default function SkillsSection() {
  const skills = [
    {
      category: "GENERATIVE AI",
      items: ["Transformers", "LLMs", "Hugging Face", "LangChain", "RAG"],
      icon: (
        <svg className="w-6 h-6 text-blue-400" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16Z"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path d="M3 12H8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M16 12H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M12 3V8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M12 16V21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ),
    },
    {
      category: "MACHINE LEARNING & DEEP LEARNING",
      items: ["PyTorch", "TensorFlow", "NVIDIA Deepstream", "CNNs", "RNNs", "GANs"],
      icon: (
        <svg className="w-6 h-6 text-blue-400" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z"
            stroke="currentColor"
            strokeWidth="2"
          />
          <path
            d="M18 12C18 15.3137 15.3137 18 12 18C8.68629 18 6 15.3137 6 12C6 8.68629 8.68629 6 12 6C15.3137 6 18 8.68629 18 12Z"
            stroke="currentColor"
            strokeWidth="2"
          />
          <path
            d="M14 12C14 13.1046 13.1046 14 12 14C10.8954 14 10 13.1046 10 12C10 10.8954 10.8954 10 12 10C13.1046 10 14 10.8954 14 12Z"
            fill="currentColor"
          />
        </svg>
      ),
    },
    {
      category: "DATA SCIENCE & ANALYTICS",
      items: ["Python", "NumPy", "Pandas", "Seaborn", "SQL", "Data Visualization"],
      icon: (
        <svg className="w-6 h-6 text-blue-400" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M16 6H20M20 6V10M20 6L16 10"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M8 14H4M4 14V18M4 14L8 18"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M21 21H3M21 3H3"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
    },
    {
      category: "TOOLS & PLATFORMS",
      items: ["Docker", "AWS", "Microsoft Azure", "Git", "MLOps", "SageMaker"],
      icon: (
        <svg className="w-6 h-6 text-blue-400" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M14 6L9 12L14 18"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path d="M9 6L4 12L9 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          <path
            d="M19 6L14 12L19 18"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
    },
    {
      category: "PROGRAMMING LANGUAGES",
      items: ["Python", "C++", "SQL", "JavaScript"],
      icon: (
        <svg className="w-6 h-6 text-blue-400" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M8 3V7C8 7.55228 7.55228 8 7 8H3"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M16 3V7C16 7.55228 16.4477 8 17 8H21"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M8 21V17C8 16.4477 7.55228 16 7 16H3"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M16 21V17C16 16.4477 16.4477 16 17 16H21"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
    },
    {
      category: "COMPUTER VISION",
      items: ["Image Classification", "Object Detection", "Segmentation", "OpenCV"],
      icon: (
        <svg className="w-6 h-6 text-blue-400" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12Z"
            stroke="currentColor"
            strokeWidth="2"
          />
          <path
            d="M8 12C8 9.79086 9.79086 8 12 8C14.2091 8 16 9.79086 16 12C16 14.2091 14.2091 16 12 16C9.79086 16 8 14.2091 8 12Z"
            stroke="currentColor"
            strokeWidth="2"
          />
          <path d="M12 2V4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          <path d="M12 20V22" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          <path d="M4 12L2 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          <path d="M22 12L20 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        </svg>
      ),
    },
    {
      category: "NATURAL LANGUAGE PROCESSING",
      items: ["Text Classification", "Summarization", "Sentiment Analysis", "Transformers"],
      icon: (
        <svg className="w-6 h-6 text-blue-400" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M8 9H16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M8 13H14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M8 17H12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          <path
            d="M3 5C3 3.89543 3.89543 3 5 3H19C20.1046 3 21 3.89543 21 5V19C21 20.1046 20.1046 21 19 21H5C3.89543 21 3 20.1046 3 19V5Z"
            stroke="currentColor"
            strokeWidth="2"
          />
        </svg>
      ),
    },
  ]

  return (
    <div className="grid gap-8 md:grid-cols-2">
      {skills.map((skill, index) => (
        <div
          key={index}
          className="p-6 bg-zinc-900/50 rounded-lg border border-zinc-800 hover:border-blue-900/50 transition-all duration-300 hover:bg-zinc-900/80 group"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 rounded-md bg-blue-900/20 group-hover:bg-blue-900/30 transition-colors">
              {skill.icon}
            </div>
            <h3 className="text-lg font-bold text-blue-400">{skill.category}</h3>
          </div>
          <div className="flex flex-wrap gap-2">
            {skill.items.map((item, itemIndex) => (
              <span
                key={itemIndex}
                className="inline-flex items-center rounded-full bg-blue-950/30 px-2.5 py-1 text-xs font-medium text-blue-300 ring-1 ring-inset ring-blue-700/20 group-hover:bg-blue-900/30 group-hover:text-blue-200 transition-colors"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}

