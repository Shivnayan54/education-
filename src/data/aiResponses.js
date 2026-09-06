export const aiResponses = {
  gravity: {
    text: "Gravity is a fundamental attractive force that exists between any two objects having mass.\n\nAccording to Sir Isaac Newton's Universal Law of Gravitation, every particle in the universe attracts every other particle with a force directly proportional to the product of their masses and inversely proportional to the square of the distance between their centers.",
    formula: "F = G × (m₁ × m₂) / r²\n\nWhere:\n• F = Gravitational Force (Newtons)\n• G = Gravitational Constant (6.674 × 10⁻¹¹ N·m²/kg²)\n• m₁, m₂ = Masses of the two interacting objects (kg)\n• r = Distance between their centers of mass (m)",
    example: "Simple Example: If an apple falls from a tree, Earth (huge mass) pulls the apple with force F = m × g (where g ≈ 9.8 m/s²). The apple also pulls the Earth with the exact same force, but Earth's enormous mass means its acceleration is imperceptible!",
    followUp: ['Explain weightlessness in space', 'What is escape velocity?', 'Give me a quiz on gravity'],
  },
  newton: {
    text: "Newton's Second Law of Motion describes how the velocity of an object changes when an external unbalanced force acts upon it.\n\nIt states that the rate of change of momentum of an object is directly proportional to the applied force and takes place in the direction of the force.",
    formula: "F = m × a\n\nWhere:\n• F = Net Force applied (Newtons, N)\n• m = Mass of the object (kilograms, kg)\n• a = Acceleration produced (m/s²)",
    example: "Real-world analogy: Pushing an empty shopping cart versus a cart full of heavy textbooks. With the same push (force F), the empty cart accelerates much faster because its mass (m) is lower. To accelerate the heavy cart at the same rate, you must push with significantly more force.",
    followUp: ['Explain Newton\'s First Law', 'What is Newton\'s Third Law?', 'Give me a practice problem on F = ma'],
  },
  'second law': {
    text: "Newton's Second Law defines force in quantitative terms: Force = Mass × Acceleration (F = ma).\n\nIf you apply a force to any mass, it accelerates in the direction of that force. Doubling the force doubles the acceleration, while doubling the mass halves the acceleration for the same force.",
    formula: "F = m × a  ⟹  a = F / m",
    example: "Example problem: A 1,000 kg car accelerates from rest at 2 m/s².\nForce required = 1,000 kg × 2 m/s² = 2,000 Newtons (N).",
    followUp: ['Explain momentum (p = mv)', 'What is impulse?', 'Give me a quiz on Newton\'s laws'],
  },
  photosynthesis: {
    text: "Photosynthesis is the biochemical process by which green plants, algae, and certain bacteria convert sunlight energy into chemical energy stored in glucose molecules.\n\nIt occurs within specialized cellular organelles called Chloroplasts, utilizing the green pigment Chlorophyll. The process consists of Light-Dependent Reactions (in thylakoids) and the Calvin Cycle (in stroma).",
    formula: "6CO₂ + 6H₂O + Sunlight ⟶ C₆H₁₂O₆ + 6O₂\n\nCarbon Dioxide + Water + Light ⟶ Glucose + Oxygen Gas",
    example: "Why it matters: Plants absorb water through roots, take in carbon dioxide through stomatal pores on leaves, trap photons with chlorophyll, synthesize glucose for plant growth, and release pure oxygen gas into the atmosphere for all aerobic life to breathe!",
    followUp: ['What is the Calvin Cycle?', 'Explain the Light Reactions', 'Give me a NEET Biology quiz on Photosynthesis'],
  },
  algorithm: {
    text: "An algorithm is a finite, unambiguous, step-by-step sequence of instructions designed to perform a specific computational task or solve a defined problem.\n\nEvery efficient algorithm must satisfy five key criteria: Input, Output, Definiteness, Finiteness, and Effectiveness.",
    formula: "Key Time Complexities (Big O Notation):\n• O(1): Constant Time (instant lookup)\n• O(log n): Logarithmic Time (Binary Search)\n• O(n): Linear Time (Single loop scan)\n• O(n log n): Linearithmic Time (Merge / Quick Sort)\n• O(n²): Quadratic Time (Nested loops / Bubble Sort)",
    example: "Everyday Example: A recipe to bake a cake or the GPS directions to your school are algorithms. In computer science, Binary Search is an algorithm that finds a target in a sorted list by repeatedly halving the search space!",
    followUp: ['Explain Binary Search step-by-step', 'What is Big O notation?', 'Give me a Python algorithm quiz'],
  },
  ohm: {
    text: "Ohm's Law states that the electric current (I) flowing through a metallic conductor between two points is directly proportional to the potential difference / voltage (V) across the points, provided temperature and physical state remain constant.",
    formula: "V = I × R\n\nWhere:\n• V = Electric Potential / Voltage (Volts, V)\n• I = Electric Current (Amperes, A)\n• R = Electrical Resistance (Ohms, Ω)",
    example: "Circuit Example: If a 12V DC battery is connected across a 4Ω resistor, the current flowing through the circuit is:\nI = V / R = 12V / 4Ω = 3 Amperes.",
    followUp: ['What are factors affecting resistance?', 'Explain Kirchhoff\'s Current & Voltage Laws', 'Give me an Ohm\'s Law calculation quiz'],
  },
  pythagorean: {
    text: "The Pythagorean Theorem is a fundamental principle in Euclidean geometry regarding right-angled triangles.\n\nIt states that the square of the length of the hypotenuse (the side opposite the 90° right angle) is equal to the sum of the squares of the lengths of the other two sides.",
    formula: "a² + b² = c²  ⟹  c = √(a² + b²)\n\nWhere:\n• c = Hypotenuse length\n• a, b = Lengths of the perpendicular legs",
    example: "Classic 3-4-5 Triangle: If a right triangle has legs of 3 cm and 4 cm:\nc² = 3² + 4² = 9 + 16 = 25 ⟹ c = √25 = 5 cm.",
    followUp: ['What are common Pythagorean Triples?', 'Explain Trigonometric ratios (sin, cos, tan)', 'Give me a geometry problem'],
  },
  mitosis: {
    text: "Mitosis is the process of cell division in eukaryotic somatic cells where a single parent cell replicates its chromosomes and divides into two genetically identical daughter cells with the exact same chromosome count (diploid 2n).",
    formula: "Phases of Mitosis (PMAT):\n1. Prophase (Chromosome condensation & spindle assembly)\n2. Metaphase (Chromosomes align along equatorial plate)\n3. Anaphase (Sister chromatids pulled to opposite poles)\n4. Telophase (Nuclear envelopes reform around daughter nuclei)\nFollowed by Cytokinesis (division of cytoplasm)",
    example: "Significance: Mitosis is responsible for organismal growth (e.g., growing from a single fertilized egg to trillions of cells), tissue repair (e.g., healing a skin scrape), and cell replacement in living organisms.",
    followUp: ['What is the difference between Mitosis and Meiosis?', 'Explain Cell Cycle checkpoints', 'Give me a NEET quiz on Cell Biology'],
  },
  integration: {
    text: "Integration is the continuous mathematical accumulation of infinitesimal quantities — geometrically representing the area under a curve, volume of solids of revolution, or reverse differentiation (anti-derivative).",
    formula: "Fundamental Theorem of Calculus:\n∫ f(x) dx = F(x) + C  where F'(x) = f(x)\n\nCommon Standard Integrals:\n• ∫ xⁿ dx = (xⁿ⁺¹ / (n + 1)) + C  (for n ≠ -1)\n• ∫ (1/x) dx = ln|x| + C\n• ∫ eˣ dx = eˣ + C\n• ∫ sin(x) dx = -cos(x) + C\n• ∫ cos(x) dx = sin(x) + C",
    example: "Physics application: Integrating a Velocity-Time graph function v(t) over time interval [t₁, t₂] gives the exact Displacement traveled by the object: s = ∫ v(t) dt.",
    followUp: ['Explain Integration by Parts', 'What is Definite Integration substitution?', 'Give me a calculus practice question'],
  },
};

export const defaultResponse = {
  text: "Hello! I am your Learnova AI Tutor. I can explain any concept across Physics, Chemistry, Biology, Mathematics, Computer Science, and Competitive Exams.\n\nTry asking me about:\n• Laws of Physics (Newton's laws, Gravity, Thermodynamics, Optics)\n• Math & Calculus (Integration, Derivatives, Trigonometry, Vectors)\n• Chemistry (Organic Mechanisms, Chemical Bonding, Periodic Table)\n• Biology & NCERT (Photosynthesis, Genetics, Human Physiology)\n• Computer Science & Coding (Python, Algorithms, Data Structures)",
  formula: "Example Query: 'Explain Newton's second law with formula and everyday example'",
  example: "Tip: You can also ask me 'Give me a 5-question quiz on Electrostatics' or 'Explain photosynthesis simpler'!",
  followUp: ['Explain Newton\'s second law', 'What is gravity?', 'Explain photosynthesis', 'What is an algorithm?'],
};
