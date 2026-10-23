// All numbers marked CONFIRMED come from the public meta descriptions of dkoder.co.in and tech-hike.in.
// Everything else (sample questions, sample dashboard) is demo content and is labelled "sample" in the UI.

export const CONFIRMED = {
  questions: 12500, // tech-hike.in
  companies: 500, // tech-hike.in
  price: 1000, // INR for 4 years per student, tech-hike.in
  exams: ['TCS NQT', 'InfyTQ'],
}

export const NAV = [
  { id: 'features', label: 'Features' },
  { id: 'bank', label: 'Question Bank' },
  { id: 'lab', label: 'Coding Lab' },
  { id: 'mock', label: 'Mock Test' },
  { id: 'dashboard', label: 'Dashboard' },
  { id: 'colleges', label: 'For Colleges' },
  { id: 'exams', label: 'Exam Prep' },
  { id: 'pricing', label: 'Pricing' },
  { id: 'faq', label: 'FAQ' },
]

export const FEATURES = [
  { icon: 'help', title: 'Real placement questions', text: 'Questions taken from real hiring rounds, not made-up practice sets.', c: 'pink' },
  { icon: 'building', title: 'Company tags', text: 'Pick a company and practise what it has asked before. 500+ companies covered.', c: 'teal' },
  { icon: 'code', title: 'Live coding lab', text: 'Write, run and test code in the browser. Nothing to install on lab machines.', c: 'sun' },
  { icon: 'wallet', title: 'Salary filters', text: 'Aim for the package you want. Filter questions by the pay band of the company.', c: 'royal' },
  { icon: 'file', title: 'Entrance exam prep', text: 'Dedicated preparation for TCS NQT and InfyTQ.', c: 'tang' },
  { icon: 'trend', title: 'Always growing', text: 'New questions keep arriving, so every batch practises on fresh material.', c: 'ink' },
  { icon: 'list', title: 'MCQ practice', text: 'Aptitude, CS fundamentals and verbal MCQs with instant feedback.', c: 'teal' },
  { icon: 'users', title: 'Real-life experiences', text: 'Round-by-round stories of how campus drives actually went.', c: 'pink' },
  { icon: 'chart', title: 'Progress tracking', text: 'Students see their streak and weak topics. Placement cells see the whole batch.', c: 'royal' },
]

export const SALARY = ['Under 5 LPA', '5 to 10 LPA', '10+ LPA']

export const QUESTIONS = [
  { type: 'coding', t: 'Reverse words in a sentence', co: 'TCS', sal: 'Under 5 LPA', d: 'Easy', topic: 'Strings' },
  { type: 'coding', t: 'Find the second largest element in an array', co: 'TCS', sal: 'Under 5 LPA', d: 'Easy', topic: 'Arrays' },
  { type: 'coding', t: 'Check if a linked list has a cycle', co: 'Infosys', sal: 'Under 5 LPA', d: 'Medium', topic: 'Linked lists' },
  { type: 'coding', t: 'Count pairs with a given sum', co: 'Infosys', sal: 'Under 5 LPA', d: 'Medium', topic: 'Hashing' },
  { type: 'coding', t: 'Merge overlapping intervals', co: 'Wipro', sal: '5 to 10 LPA', d: 'Medium', topic: 'Sorting' },
  { type: 'coding', t: 'Longest substring without repeating characters', co: 'Cognizant', sal: '5 to 10 LPA', d: 'Medium', topic: 'Sliding window' },
  { type: 'coding', t: 'Median of two sorted arrays', co: 'Zoho', sal: '5 to 10 LPA', d: 'Hard', topic: 'Binary search' },
  { type: 'coding', t: 'Design an LRU cache', co: 'Amazon', sal: '10+ LPA', d: 'Hard', topic: 'Design' },
  { type: 'coding', t: 'Shortest path in a weighted graph', co: 'Amazon', sal: '10+ LPA', d: 'Hard', topic: 'Graphs' },
  { type: 'mcq', t: 'Time complexity of binary search on a sorted array', co: 'TCS', sal: 'Under 5 LPA', d: 'Easy', topic: 'DSA' },
  { type: 'mcq', t: 'Which SQL keyword removes duplicate rows from a result?', co: 'Infosys', sal: 'Under 5 LPA', d: 'Easy', topic: 'DBMS' },
  { type: 'mcq', t: 'A 120 m train at 60 km/h crosses a pole. How long does it take?', co: 'Wipro', sal: '5 to 10 LPA', d: 'Medium', topic: 'Aptitude' },
  { type: 'mcq', t: 'Which scheduling algorithm can cause starvation?', co: 'Cognizant', sal: '5 to 10 LPA', d: 'Medium', topic: 'Operating systems' },
  { type: 'mcq', t: 'What does ACID stand for in database transactions?', co: 'Zoho', sal: '5 to 10 LPA', d: 'Medium', topic: 'DBMS' },
  { type: 'mcq', t: 'Output of a recursive function with memoisation on Fibonacci(40)', co: 'Amazon', sal: '10+ LPA', d: 'Hard', topic: 'Recursion' },
  { type: 'real', t: 'Online test, technical interview, then HR round', co: 'TCS', sal: 'Under 5 LPA', d: 'Easy', topic: '3 rounds' },
  { type: 'real', t: 'Aptitude screen, coding round, project discussion', co: 'Infosys', sal: 'Under 5 LPA', d: 'Medium', topic: '3 rounds' },
  { type: 'real', t: 'Two coding rounds, system basics, managerial chat', co: 'Zoho', sal: '5 to 10 LPA', d: 'Hard', topic: '4 rounds' },
  { type: 'real', t: 'Online assessment, two DSA interviews, bar raiser', co: 'Amazon', sal: '10+ LPA', d: 'Hard', topic: '4 rounds' },
]

export const MCQ = [
  { q: 'What is the time complexity of binary search on a sorted array of n items?', o: ['O(n)', 'O(log n)', 'O(n log n)', 'O(1)'], a: 1, why: 'Each step halves the search space, so it takes about log2(n) steps.' },
  { q: 'Which data structure follows last in, first out (LIFO)?', o: ['Queue', 'Stack', 'Heap', 'Graph'], a: 1, why: 'A stack removes the most recently added item first.' },
  { q: 'Which SQL keyword removes duplicate rows from a query result?', o: ['UNIQUE', 'DISTINCT', 'GROUP', 'REMOVE'], a: 1, why: 'SELECT DISTINCT returns only unique rows.' },
  { q: 'A 120 m long train runs at 60 km/h. How long does it take to cross a pole?', o: ['6.2 s', '7.2 s', '8 s', '9 s'], a: 1, why: '60 km/h is about 16.67 m/s. 120 / 16.67 = 7.2 seconds.' },
  { q: 'Which of these is not an operating system?', o: ['Linux', 'Windows', 'Oracle', 'macOS'], a: 2, why: 'Oracle is a database product. The others are operating systems.' },
]

export const CODE = {
  Python: `# Return indices of two numbers that add up to target
def two_sum(nums, target):
    seen = {}
    for i, x in enumerate(nums):
        if target - x in seen:
            return [seen[target - x], i]
        seen[x] = i

print(two_sum([2, 7, 11, 15], 9))`,
  Java: `// Return indices of two numbers that add up to target
int[] twoSum(int[] nums, int target) {
    Map<Integer, Integer> seen = new HashMap<>();
    for (int i = 0; i < nums.length; i++) {
        if (seen.containsKey(target - nums[i]))
            return new int[]{seen.get(target - nums[i]), i};
        seen.put(nums[i], i);
    }
    return new int[0];
}`,
  'C++': `// Return indices of two numbers that add up to target
vector<int> twoSum(vector<int>& nums, int target) {
    unordered_map<int, int> seen;
    for (int i = 0; i < nums.size(); i++) {
        if (seen.count(target - nums[i]))
            return {seen[target - nums[i]], i};
        seen[nums[i]] = i;
    }
    return {};
}`,
}

export const TESTS = [
  { in: 'nums=[2,7,11,15], target=9', out: '[0, 1]' },
  { in: 'nums=[3,2,4], target=6', out: '[1, 2]' },
  { in: 'nums=[3,3], target=6', out: '[0, 1]' },
]

export const EXAMS = [
  { name: 'TCS NQT', text: 'Practise for the National Qualifier Test used by TCS in campus hiring.', c: 'tang' },
  { name: 'InfyTQ', text: 'Practise for the InfyTQ assessment from Infosys.', c: 'teal' },
]

export const WEEK = [
  { d: 'Mon', v: 6 }, { d: 'Tue', v: 9 }, { d: 'Wed', v: 4 }, { d: 'Thu', v: 11 },
  { d: 'Fri', v: 8 }, { d: 'Sat', v: 14 }, { d: 'Sun', v: 7 },
]

export const TOPICS = [
  { t: 'Arrays and strings', v: 82, c: 'teal' },
  { t: 'Aptitude', v: 68, c: 'sun' },
  { t: 'DBMS', v: 54, c: 'royal' },
  { t: 'Operating systems', v: 37, c: 'pink' },
  { t: 'Graphs', v: 21, c: 'tang' },
]

export const BOARD = [
  { n: 'Aarav S.', s: 1840 }, { n: 'Diya M.', s: 1710 }, { n: 'Kabir R.', s: 1655 },
  { n: 'Ananya P.', s: 1590 }, { n: 'Vihaan T.', s: 1522 },
]

export const ROADMAP = [
  { y: 'Year 1', t: 'Build the base', p: 'Pick one language and solve easy array and string problems.', c: 'teal' },
  { y: 'Year 2', t: 'Core subjects', p: 'DSA basics, DBMS, OS and aptitude MCQs every week.', c: 'sun' },
  { y: 'Year 3', t: 'Company practice', p: 'Use company tags and salary filters. Start mock tests.', c: 'pink' },
  { y: 'Year 4', t: 'Campus season', p: 'Prepare TCS NQT and InfyTQ, read real-life experiences, sit drives.', c: 'royal' },
]

export const FAQ = [
  ['Who is this for?', 'Engineering colleges across India and their students preparing for campus placements.'],
  ['What does the pricing cover?', 'TechHike lists ₹1,000 for 4 years per student, which matches a full engineering degree.'],
  ['Which entrance exams are covered?', 'TCS NQT and InfyTQ.'],
  ['Can students practise by company?', 'Yes. Questions are tagged by company, and you can also filter by salary.'],
  ['Do students need to install anything to code?', 'No. The live coding lab runs in the browser.'],
  ['Is the data on this page real?', 'Only the headline figures and feature list come from the two sites. Sample questions, the dashboard and the leaderboard are demo content.'],
]

export const MOCK = [
  { sec: 'Aptitude', q: 'If 15% of a number is 45, what is the number?', o: ['200', '250', '300', '350'], a: 2 },
  { sec: 'Aptitude', q: 'What is the average of 10, 20, 30, 40 and 50?', o: ['25', '30', '35', '40'], a: 1 },
  { sec: 'Verbal', q: 'Choose the correct word: She is ___ than her sister.', o: ['tall', 'taller', 'tallest', 'more tall'], a: 1 },
  { sec: 'Verbal', q: 'Pick the synonym of "rapid".', o: ['Slow', 'Quick', 'Late', 'Weak'], a: 1 },
  { sec: 'Technical', q: 'Which keyword defines a constant variable in Java?', o: ['const', 'final', 'static', 'fixed'], a: 1 },
  { sec: 'Technical', q: 'What does print(len([1, 2, 3] * 2)) output in Python?', o: ['3', '5', '6', '9'], a: 2 },
]

export const DEPTS = [
  { n: 'Computer Science', r: 78, s: 140 },
  { n: 'Information Technology', r: 71, s: 96 },
  { n: 'Electronics', r: 58, s: 88 },
  { n: 'Mechanical', r: 44, s: 120 },
  { n: 'Civil', r: 39, s: 72 },
]
