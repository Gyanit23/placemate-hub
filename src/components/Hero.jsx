import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { FaPython } from 'react-icons/fa'
import { useLang } from '../i18n'

const pills = [
  ['Company-tagged', 'bg-pink-tint dark:bg-pink/15'],
  ['Live coding lab', 'bg-teal-tint dark:bg-teal/15'],
  ['Salary filters', 'bg-royal-tint dark:bg-royal/20'],
  ['TCS NQT · InfyTQ', 'bg-tang-tint dark:bg-tang/15'],
]

export default function Hero() {
  const { t } = useLang()
  return (
    <section className="pb-6 pt-14">
      <div className="wrap grid items-center gap-10 lg:grid-cols-[1.05fr_.95fr]">
        <div>
          <div className="eyebrow">{t('The Placement LMS for Engineering Colleges')}</div>
          <motion.h1
            initial={{ y: 24 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-[clamp(2.4rem,7vw,4.6rem)] font-extrabold leading-[1.02]"
          >
            {t('Practice the questions')}{' '}
            <span className="bg-[linear-gradient(transparent_62%,#FFC93C_62%_92%,transparent_92%)] px-1 dark:text-white">
              {t('companies really ask.')}
            </span>
          </motion.h1>
          <p className="lead !text-xl">
            {t('Real placement questions, tagged by company and always growing. Solve them in a live coding lab, practise MCQs, filter by salary and prepare for TCS NQT and InfyTQ from one place.')}
          </p>
          <div className="mt-7 flex flex-wrap gap-4">
            <a href="#contact" className="btn">{t('Get a college demo')} <ArrowRight size={18} /></a>
            <a href="#bank" className="btn btn-alt">{t('Try the question bank')}</a>
          </div>
          <div className="mt-6 flex flex-wrap gap-2">
            {pills.map(([label, c]) => (
              <span key={label} className={`rounded-full border-2 border-ink px-3 py-1.5 text-sm font-bold dark:border-night-line ${c}`}>{t(label)}</span>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ y: 30, rotate: 1.5 }}
          animate={{ y: 0, rotate: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="min-w-0 overflow-hidden rounded-[20px] border-2 border-ink bg-[#14173A] text-[#E8EBFF] shadow-poplg dark:border-night-line dark:bg-[#070B15]"
        >
          <div className="flex items-center gap-2 border-b border-[#2a3158] px-4 py-3">
            <span className="h-3 w-3 rounded-full bg-pink" /><span className="h-3 w-3 rounded-full bg-sun" /><span className="h-3 w-3 rounded-full bg-teal" />
            <span className="ml-2 flex items-center gap-2 font-mono text-xs text-[#9AA3C7]"><FaPython /> two_sum.py</span>
          </div>
          <pre className="overflow-x-auto p-5 font-mono text-[0.85rem] leading-7">
            <span className="text-[#7C86B5]"># company tag: TCS · band: Under 5 LPA</span>{'\n'}
            <span className="text-[#FF7AA8]">def</span> two_sum(nums, target):{'\n'}
            {'    '}seen = {'{}'}{'\n'}
            {'    '}<span className="text-[#FF7AA8]">for</span> i, x <span className="text-[#FF7AA8]">in</span> <span className="text-[#FF7AA8]">enumerate</span>(nums):{'\n'}
            {'        '}<span className="text-[#FF7AA8]">if</span> target - x <span className="text-[#FF7AA8]">in</span> seen:{'\n'}
            {'            '}<span className="text-[#FF7AA8]">return</span> [seen[target - x], i]{'\n'}
            {'        '}seen[x] = i
          </pre>
          <div className="flex flex-wrap justify-between gap-2 bg-[#0d1226] px-4 py-3 font-mono text-xs font-semibold">
            <span className="text-[#5EEAD0]">✓ 3 / 3 sample tests passed</span>
            <span className="text-[#9AA3C7]">Sample preview</span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
