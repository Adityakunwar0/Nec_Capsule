import logic from "./logic.JPG";
import gates from "./gates.JPG";
import circuitgate from "./circuitgate.png";
import half from "./half.jpeg";
import full from "./full.png";
import halfsub from "./halfsub.JPG";
import fullsub from "./fullsub.JPG";
import binaryadder from "./binaryadder.JPG";
import encoder from "./encoder.JPG";
import decoder from "./decoder.jpeg";
import binarysubtractor from "./binarysubtractor.JPG";

export const topic = {
  name: "2. Digital Logic and Microprocessor ",
  subtopics: [
    {
      subname:
        "2.1 Digital Logic : Number Systems, Logic Levels, Logic Gates, Boolean Algebra, Sum-of-Products Method, Product-of-Sums Method, Truth Table to Karnaugh Map.",
      blocks: [
        { type: "bold", text: "Number Systems" },
        {
          type: "text",
          text: "• Used to represent numbers in different ways:",
        },

        { type: "bold", text: " A. Binary ( 0 - 1 -> Base 2 ) : " },

        { type: "semibold", text: " 1. Binary → Decimal : " },

        { type: "text", text: " • Convert 1011₂ to decimal" },

        { type: "text", text: " • Each binary digit has a place value (2ⁿ):" },
        {
          type: "text",
          text: " ⟹ 1×2³ + 0×2² + 1×2¹ + 1×2⁰ = 8 + 0 + 2 + 1 = 11₁₀",
        },

        { type: "text", text: "⟹ Answer : 1011₂ = 11₁₀", center: true },

        { type: "semibold", text: " 2. Binary → Octal" },

        { type: "text", text: " • Convert 101110₂ to octal" },

        {
          type: "text",
          text: " • Group digits in sets of 3 (from right): 101 110 → (5)(6)",
        },

        { type: "text", text: " ⟹  Answer: 101110₂ = 56₈", center: true },

        { type: "semibold", text: " 3. Binary → Hexadecimal" },

        { type: "text", text: " • Convert 11011010₂ to hexadecimal" },

        {
          type: "text",
          text: " • Group digits in sets of 4 (from right): 1101 1010 → D A",
        },

        { type: "text", text: "⟹  Answer: 11011010₂ = DA₁₆", center: true },

        { type: "semibold", text: " 4. Binary → Decimal (with point)" },

        { type: "text", text: " • Convert 101.101₂ to decimal" },

        { type: "text", text: " • Break into whole and fractional parts:" },

        {
          type: "important",
          text: " • Whole part:",
          desc: "101₂ = (1×2²) + (0×2¹) + (1×2⁰) = 5",
        },
        {
          type: "important",
          text: " • Fraction part:",
          desc: ".101₂ = (1×2⁻¹) + (0×2⁻²) + (1×2⁻³) = 0.5 + 0 + 0.125 = 0.625",
        },

        { type: "text", text: "⟹  Answer: 101.101₂ = 5.625₁₀", center: true },

        { type: "semibold", text: " 5. Binary → Octal (with point)" },

        { type: "text", text: " • Convert 101.101₂ to octal" },

        {
          type: "text",
          text: " •Group 3 bits each around the point → (101)(.101)",
        },
        { type: "text", text: "→ 5.5 (since 101₂ = 5₈ and .101₂ = .5₈)" },

        { type: "text", text: "⟹  Answer: 101.101₂ = 5.5₈", center: true },

        { type: "semibold", text: " 6. Binary → Hexadecimal (with point)" },

        { type: "text", text: " • Convert 1101.101₂ to hexadecimal" },

        {
          type: "text",
          text: " • Group 4 bits each around the point → 1101 .1010 (add 0 to make 4 bits) → D.A ",
        },

        { type: "text", text: "⟹  Answer: 1101.101₂ = D.A₁₆", center: true },

        { type: "bold", text: " B. Decimal ( 0 - 9 -> Base 10 ) : " },

        { type: "semibold", text: " 1. Decimal → Binary :" },

        { type: "text", text: " • Convert 13₁₀ to binary" },
        {
          type: "text",
          text: " • Divide by 2 and record remainders: 13 ÷ 2 = 6 r1, 6 ÷ 2 = 3 r0, 3 ÷ 2 = 1 r1, 1 ÷ 2 = 0 r1 , (r = Remainder). ",
        },
        { type: "text", text: " • Read remainders from bottom to top → 1101" },
        { type: "text", text: "⟹ Answer : 13₁₀ = 1101₂", center: true },

        { type: "semibold", text: " 2. Decimal → Octal :" },

        { type: "text", text: " • Convert 25₁₀ to octal" },
        {
          type: "text",
          text: " • Divide by 8 and record remainders: 25 ÷ 8 = 3 r1, 3 ÷ 8 = 0 r3, (r = Remainder). ",
        },
        { type: "text", text: " • Read remainders from bottom to top → 31" },
        { type: "text", text: "⟹ Answer : 25₁₀ = 31₈", center: true },

        { type: "semibold", text: " 3. Decimal → Hexadecimal :" },

        { type: "text", text: " • Convert 255₁₀ to hexadecimal" },
        {
          type: "text",
          text: " • Divide by 16: 255 ÷ 16 = 15 r15 → F F, (r = Remainder). ",
        },
        { type: "text", text: "⟹ Answer : 255₁₀ = FF₁₆", center: true },

        { type: "semibold", text: " 4. Decimal → Binary (with point)" },

        { type: "text", text: " • Convert 10.625₁₀ to binary" },
        { type: "text", text: " • Break into whole and fractional parts:" },

        {
          type: "important",
          text: " • Whole part:",
          desc: "10 ÷ 2 = 5 r0, 5 ÷ 2 = 2 r1, 2 ÷ 2 = 1 r0, 1 ÷ 2 = 0 r1 → 1010 , (r = Remainder). ",
        },
        {
          type: "important",
          text: " • Fraction part:",
          desc: "Multiply 0.625 by 2 repeatedly → 0.625×2=1.25→1, 0.25×2=0.5→0, 0.5×2=1.0→1 → .101",
        },
        { type: "text", text: "⟹ Answer : 10.625₁₀ = 1010.101₂", center: true },

        { type: "semibold", text: " 5. Decimal → Octal (with point)" },

        { type: "text", text: " • Convert 12.25₁₀ to octal" },
        { type: "text", text: " • Break into whole and fractional parts:" },

        {
          type: "important",
          text: " • Whole part:",
          desc: "12 ÷ 8 = 1 r4 → 14 , (r = Remainder). ",
        },
        {
          type: "important",
          text: " • Fraction part:",
          desc: "0.25 × 8 = 2.0 → 2",
        },
        { type: "text", text: "⟹ Answer : 12.25₁₀ = 14.2₈", center: true },

        { type: "semibold", text: " 6. Decimal → Hexadecimal (with point)" },

        { type: "text", text: " • Convert 26.5₁₀ to hexadecimal" },
        { type: "text", text: " • Break into whole and fractional parts:" },

        {
          type: "important",
          text: " • Whole part:",
          desc: "26 ÷ 16 = 1 r10 → 1A , (r = Remainder). ",
        },
        {
          type: "important",
          text: " • Fraction part:",
          desc: "0.5 × 16 = 8 → .8",
        },
        { type: "text", text: "⟹ Answer : 26.5₁₀ = 1A.8₁₆", center: true },

        { type: "bold", text: " C. Octal ( 0 - 7 -> Base 8 ) : " },

        { type: "semibold", text: " 1. Octal → Binary :" },

        { type: "text", text: " • Convert 47₈ to binary" },
        {
          type: "text",
          text: " • Replace each octal digit with its 3-bit binary equivalent: 4 → 100, 7 → 111",
        },
        { type: "text", text: " • Combine → 100111" },
        { type: "text", text: "⟹ Answer : 47₈ = 100111₂", center: true },

        { type: "semibold", text: " 2. Octal → Decimal :" },

        { type: "text", text: " • Convert 57₈ to decimal" },
        {
          type: "text",
          text: " • (5×8¹) + (7×8⁰) = 40 + 7 = 47",
        },
        { type: "text", text: "⟹ Answer : 57₈ = 47₁₀", center: true },

        { type: "semibold", text: " 3. Octal → Hexadecimal :" },

        { type: "text", text: " • Convert 76₈ to hexadecimal" },
        {
          type: "text",
          text: " • Step 1: Convert to binary → 7 → 111, 6 → 110 → 111110₂",
        },
        {
          type: "text",
          text: " • Step 2: Group 4 bits → 0011 1110 → 3E₁₆",
        },
        { type: "text", text: "⟹ Answer : 76₈ = 3E₁₆", center: true },

        { type: "semibold", text: " 4. Octal → Binary (with point)" },

        { type: "text", text: " • Convert 7.3₈ to binary" },
        {
          type: "text",
          text: " • Each octal digit → 3-bit binary: 7 → 111, .3 → .011",
        },
        { type: "text", text: " • Combine → 111.011" },
        { type: "text", text: "⟹ Answer : 7.3₈ = 111.011₂", center: true },

        { type: "semibold", text: " 5. Octal → Decimal (with point)" },

        { type: "text", text: " • Convert 25.4₈ to decimal" },
        {
          type: "important",
          text: " • Whole part:",
          desc: "(2×8¹) + (5×8⁰) = 16 + 5 = 21",
        },
        {
          type: "important",
          text: " • Fraction part:",
          desc: "(4×8⁻¹) = 4/8 = 0.5",
        },
        { type: "text", text: "⟹ Answer : 25.4₈ = 21.5₁₀", center: true },

        { type: "semibold", text: " 6. Octal → Hexadecimal (with point)" },

        { type: "text", text: " • Convert 7.4₈ to hexadecimal" },
        {
          type: "text",
          text: " • Step 1: Convert to binary → 7.4₈ = 111.100₂",
        },
        {
          type: "text",
          text: " • Step 2: Group 4 bits → 0001 1111 .0000 → 1F.0₁₆",
        },
        { type: "text", text: "⟹ Answer : 7.4₈ = 1F.0₁₆", center: true },

        { type: "bold", text: " Hexadecimal ( 0 - 9, A - F -> Base 16 ) : " },

        { type: "semibold", text: " 1. Hexadecimal → Binary :" },

        { type: "text", text: " • Convert 4B₁₆ to binary" },
        {
          type: "text",
          text: " • Replace each hexadecimal digit with its 4-bit binary equivalent: 4 → 0100, B → 1011",
        },
        { type: "text", text: " • Combine → 01001011" },
        { type: "text", text: "⟹ Answer : 4B₁₆ = 01001011₂", center: true },

        { type: "semibold", text: " 2. Hexadecimal → Decimal :" },

        { type: "text", text: " • Convert 2F₁₆ to decimal" },
        {
          type: "text",
          text: " • (2×16¹) + (15×16⁰) = 32 + 15 = 47",
        },
        { type: "text", text: "⟹ Answer : 2F₁₆ = 47₁₀", center: true },

        { type: "semibold", text: " 3. Hexadecimal → Octal :" },

        { type: "text", text: " • Convert 3E₁₆ to octal" },
        {
          type: "text",
          text: " • Step 1: Convert to binary → 3 → 0011, E → 1110 → 00111110₂",
        },
        {
          type: "text",
          text: " • Step 2: Group 3 bits → 000 111 110 → 076₈",
        },
        { type: "text", text: "⟹ Answer : 3E₁₆ = 76₈", center: true },

        { type: "semibold", text: " 4. Hexadecimal → Binary (with point)" },

        { type: "text", text: " • Convert A.F₁₆ to binary" },
        {
          type: "text",
          text: " • Each hex digit → 4-bit binary: A → 1010, .F → .1111",
        },
        { type: "text", text: " • Combine → 1010.1111" },
        { type: "text", text: "⟹ Answer : A.F₁₆ = 1010.1111₂", center: true },

        { type: "semibold", text: " 5. Hexadecimal → Decimal (with point)" },

        { type: "text", text: " • Convert 2A.C₁₆ to decimal" },
        {
          type: "important",
          text: " • Whole part:",
          desc: "(2×16¹) + (10×16⁰) = 32 + 10 = 42",
        },
        {
          type: "important",
          text: " • Fraction part:",
          desc: "(12×16⁻¹) = 12/16 = 0.75",
        },
        { type: "text", text: "⟹ Answer : 2A.C₁₆ = 42.75₁₀", center: true },

        { type: "semibold", text: " 6. Hexadecimal → Octal (with point)" },

        { type: "text", text: " • Convert A.4₁₆ to octal" },
        {
          type: "text",
          text: " • Step 1: Convert to binary → A.4₁₆ = 1010.0100₂",
        },
        {
          type: "text",
          text: " • Step 2: Group 3 bits → 001 010 .010 000 → 12.20₈",
        },
        { type: "text", text: "⟹ Answer : A.4₁₆ = 12.20₈", center: true },

        {
          type: "text",
          text: "• Conversion means changing from one number system to another",
        },

        {
          type: "important",
          text: "Remember:",
          desc: " Binary, Octal, Decimal, and Hexadecimal are interconvertible number systems used in digital electronics.",
        },
        { type: "bold", text: "Positive Logic And Negative Logic: :" },
        { type: "semibold", text: "Positive Logic:" },
        {
          type: "text",
          text: " • In positive logic, a high voltage level represents logic ‘1’, and a low voltage level represents logic ‘0’.",
        },
        { type: "important", text: " • Logic ‘1’ = ", desc: "High Voltage" },
        { type: "important", text: " • Logic ‘0’ = ", desc: " Low Voltage" },

        { type: "semibold", text: "Negative Logic:" },
        {
          type: "text",
          text: "• In negative logic, a high voltage level represents logic ‘0’, and a low voltage level represents logic ‘1’.",
        },
        { type: "important", text: " • Logic ‘0’ = ", desc: "High Voltage" },
        { type: "important", text: " • Logic ‘1’ = ", desc: " Low Voltage" },

        {
          type: "important",
          text: " • Note:",
          desc: "Positive and negative logic are complementary to each other; the meaning of logic levels is inverted.",
        },

        {
          type: "semibold",
          text: " • Representation of Logic Levels : ",
          center: true,
        },
        { type: "image", src: logic },

        { type: "bold", text: " Logic Gates :  " },
        {
          type: "text",
          text: " • Logic gates are the building blocks of digital circuits. ",
        },
        { type: "image", src: gates },
        { type: "bold", text: " Circuit Diagram And Table Of Logic Gates :  " },
        { type: "image", src: circuitgate },
        { type: "bold", text: " Boolean Algebra : " },
        {
          type: "text",
          text: "• A way to simplify and analyze logic circuits using only 0 and 1.",
        },
        { type: "text", text: "• Invented by George Boole (1854)." },

        { type: "semibold", text: "Example :" },
        { type: "text", text: "• If A = 1, B = 0," },
        { type: "text", text: "• then A + B = 1 and A·B = 0" },

        { type: "semibold", text: " • Common Boolean Laws :" },
        { type: "text", text: "→  A + 0 = A", center: true },
        { type: "text", text: "→  A·1 = A", center: true },
        { type: "text", text: "→  A + A = A", center: true },
        { type: "text", text: "→ A·A = A", center: true },
        { type: "text ", text: "→  A + A’ = 1", center: true },
        { type: "text", text: "→  A·A’ = 0", center: true },
        { type: "text", text: "→  A’’ = A", center: true },

        {
          type: "important",
          text: "Note : ",
          desc: " Boolean algebra helps reduce complex logic circuits into simpler forms for easier implementation.",
        },

        { type: "bold", text: " De Morgan’s Theorem : " },
        {
          type: "text",
          text: "• Used to simplify NOT operations in logic expressions.",
        },

        { type: "text", text: "1. (A·B)’ = A’ + B’" },
        { type: "text", text: "2. (A + B)’ = A’·B’" },

        { type: "bold", text: " Dual Theorem : " },
        { type: "text", text: "• To find the dual of a Boolean expression:" },
        { type: "text", text: "• Change OR (+) → AND (·)" },
        { type: "text", text: "• Change AND (·) → OR (+)" },
        { type: "text", text: "• Replace 1 ↔ 0" },

        { type: "semibold", text: "Example:" },
        { type: "text", text: " • Given: A + AB = A" },
        { type: "text", text: " →  Dual: A·(A + B) = A" },

        { type: "bold", text: " Canonical and Standard Forms : " },

        { type: "semibold", text: "(a) Canonical Form : " },
        { type: "text", text: "• Each term contains all variables." },

        { type: "semibold", text: " i. Min Term (m) : " },
        { type: "text", text: "• Uses AND (·)." },
        { type: "text", text: "• Variable = unprimed if 1, primed if 0." },
        { type: "important", text: "Example : ", desc: " A’B’C → m1 " },

        { type: "semibold", text: "ii. Max Term (M) : " },
        { type: "text", text: "• Uses OR (+)." },
        { type: "text", text: "• Variable = unprimed if 0, primed if 1." },

        { type: "important", text: "Example : ", desc: " A + B’ + C → M2" },

        { type: "semibold", text: "(b) Standard Forms : " },
        { type: "text", text: "• Shorter versions of canonical expressions." },

        { type: "semibold", text: "i. SOP (Sum of Products) : " },
        { type: "text", text: "• OR of AND terms." },
        { type: "text", text: "Example: " },
        { type: "important", text: "Example : ", desc: " F = XY + X’Z" },

        { type: "semibold", text: "ii. POS (Product of Sums) : " },
        { type: "text", text: "• AND of OR terms." },
        { type: "important", text: "Example : ", desc: " F = (X + Y)(X’ + Z)" },

        {
          type: "important",
          text: "Note : ",
          desc: " De Morgan’s Theorem and Dual Theorem are powerful tools for simplifying and transforming Boolean expressions.",
        },

        {
          type: "text",
          text: "⟹ Simplifies logic circuits and helps in digital design.",
          center: true,
        },

        { type: "bold", text: "Karnaugh Map (K-Map) : " },
        {
          type: "text",
          text: "• A graphical method to simplify Boolean expressions.",
        },

        { type: "semibold", text: "Variables and Squares : " },
        { type: "text", text: "• 2 Variables → 4 Squares → Example: A, B" },
        { type: "text", text: "• 3 Variables → 8 Squares → Example: A, B, C" },
        {
          type: "text",
          text: "• 4 Variables → 16 Squares → Example: A, B, C, D",
        },

        { type: "semibold", text: " Rules : " },
        { type: "text", text: "• Each box = one minterm." },
        {
          type: "text",
          text: "• Combine adjacent 1s in groups of 1, 2, 4, 8...",
        },
        { type: "text", text: "• Larger groups = simpler expressions." },

        { type: "semibold", text: " Don’t Care Conditions (X) : " },
        {
          type: "text",
          text: "• If some outputs don’t matter, we mark them as “X” — helps simplify more.",
        },

        { type: "semibold", text: "Types of Implicants : " },
        {
          type: "important",
          text: " 1. Prime Implicant (PI):",
          desc: "Largest possible group of 1s.",
        },
        {
          type: "important",
          text: " 2. Essential Prime Implicant (EPI):",
          desc: "Covers at least one 1 that no other group covers.",
        },

        {
          type: "important",
          text: "Note:",
          desc: "• K-Map provides a visual way to minimize Boolean expressions quickly and accurately.",
        },

        {
          type: "text",
          text: "⟹ Simplifies logic expressions and reduces circuit complexity.",
          center: true,
        },
        { type: "bold", text: "MCQ : " },
        {
          type: "mcq",
          q: "1. What is the base of the Binary number system?",
          image: null,
          options: ["10", "8", "2", "16"],
          ans: "2",
          explanation:
            "The binary system uses only two digits, 0 and 1, so its base is 2.",
        },
        {
          type: "mcq",
          q: "2. Convert the binary number 1011₂ to its decimal equivalent.",
          image: null,
          options: ["10", "11", "13", "9"],
          ans: "11",
          explanation:
            "The conversion is (1×2³) + (0×2²) + (1×2¹) + (1×2⁰) = 8 + 0 + 2 + 1 = 11.",
        },
        {
          type: "mcq",
          q: "3. To convert a binary number to octal, you group the binary digits in sets of how many?",
          image: null,
          options: ["2", "3", "4", "8"],
          ans: "3",
          explanation:
            "Each octal digit corresponds to a 3-bit binary equivalent, so binary digits are grouped in sets of 3.",
        },
        {
          type: "mcq",
          q: "4. What is the octal equivalent of the binary number 101110₂?",
          image: null,
          options: ["55", "65", "56", "66"],
          ans: "56",
          explanation:
            "Grouping the digits into sets of 3 from the right gives 101 and 110. 101₂ is 5 and 110₂ is 6, so the result is 56₈.",
        },
        {
          type: "mcq",
          q: "5. When converting a binary number to hexadecimal, the digits are grouped in sets of how many?",
          image: null,
          options: ["2", "3", "4", "16"],
          ans: "4",
          explanation:
            "Each hexadecimal digit corresponds to a 4-bit binary equivalent.",
        },
        {
          type: "mcq",
          q: "6. Convert the binary number 11011010₂ to its hexadecimal equivalent.",
          image: null,
          options: ["CA", "DA", "DB", "CB"],
          ans: "DA",
          explanation:
            "Grouping the digits into sets of 4 from the right gives 1101 and 1010. 1101₂ is D and 1010₂ is A, so the result is DA₁₆.",
        },
        {
          type: "mcq",
          q: "7. What is the decimal value of the binary number 101.101₂?",
          image: null,
          options: ["5.5", "5.625", "6.5", "5.125"],
          ans: "5.625",
          explanation:
            "The whole part 101₂ is 5. The fractional part .101₂ is (1×2⁻¹)+(0×2⁻²)+(1×2⁻³)=0.5+0+0.125=0.625. So total = 5.625.",
        },
        {
          type: "mcq",
          q: "8. Convert the binary number 101.101₂ to octal.",
          image: null,
          options: ["5.5", "5.1", "1.5", "5.3"],
          ans: "5.5",
          explanation:
            "Grouping digits in sets of 3 around the decimal point gives (101).(101). 101₂ = 5, so the result is 5.5₈.",
        },
        {
          type: "mcq",
          q: "9. What is the hexadecimal equivalent of the binary number 1101.101₂?",
          image: null,
          options: ["C.A", "D.A", "D.8", "C.8"],
          ans: "D.A",
          explanation:
            "Grouping in sets of 4 around the point gives (1101).(1010). 1101₂ = D and 1010₂ = A, so the result is D.A₁₆.",
        },
        {
          type: "mcq",
          q: "10. Which method is used to convert a decimal integer to binary?",
          image: null,
          options: [
            "Repeated multiplication by 2",
            "Repeated division by 2",
            "Grouping into sets of 3",
            "Summing positional weights",
          ],
          ans: "Repeated division by 2",
          explanation:
            "To convert a decimal integer to binary, repeatedly divide the number by 2 and record the remainders.",
        },
        {
          type: "mcq",
          q: "11. What is the binary equivalent of the decimal number 13₁₀?",
          image: null,
          options: ["1011", "1110", "1101", "1001"],
          ans: "1101",
          explanation:
            "13 ÷ 2 = 6 r1; 6 ÷ 2 = 3 r0; 3 ÷ 2 = 1 r1; 1 ÷ 2 = 0 r1. Reading remainders bottom to top gives 1101₂.",
        },
        {
          type: "mcq",
          q: "12. Convert the decimal number 25₁₀ to its octal equivalent.",
          image: null,
          options: ["31", "13", "25", "33"],
          ans: "31",
          explanation:
            "25 ÷ 8 = 3 r1; 3 ÷ 8 = 0 r3. Reading remainders bottom to top gives 31₈.",
        },
        {
          type: "mcq",
          q: "13. What is the hexadecimal equivalent of 255₁₀?",
          image: null,
          options: ["EE", "FE", "FF", "EF"],
          ans: "FF",
          explanation:
            "255 ÷ 16 = 15 with remainder 15. In hexadecimal, 15 is 'F', so result = FF₁₆.",
        },
        {
          type: "mcq",
          q: "14. How do you convert the fractional part of a decimal number to binary?",
          image: null,
          options: [
            "Repeatedly divide by 2",
            "Repeatedly multiply by 2 and record the integer part",
            "Group digits into sets of 2",
            "Sum positional weights of base 10",
          ],
          ans: "Repeatedly multiply by 2 and record the integer part",
          explanation:
            "The fractional part is converted by repeatedly multiplying it by 2 and recording the integer part each time.",
        },
        {
          type: "mcq",
          q: "15. What is the binary representation of 10.625₁₀?",
          image: null,
          options: ["1010.101", "1001.110", "1010.011", "1100.101"],
          ans: "1010.101",
          explanation:
            "The whole part 10₁₀ = 1010₂. The fractional part 0.625 → .101 in binary. So, 1010.101₂.",
        },
        {
          type: "mcq",
          q: "16. Convert 12.25₁₀ to octal.",
          image: null,
          options: ["14.4", "14.2", "12.2", "12.4"],
          ans: "14.2",
          explanation:
            "Whole part 12₁₀ = 14₈. Fractional part 0.25×8=2.0 → .2. So 14.2₈.",
        },
        {
          type: "mcq",
          q: "17. What is the hexadecimal equivalent of 26.5₁₀?",
          image: null,
          options: ["1A.8", "1A.5", "1B.8", "1A.A"],
          ans: "1A.8",
          explanation:
            "Whole part 26₁₀ = 1A₁₆. Fractional 0.5×16=8 → .8. So 1A.8₁₆.",
        },
        {
          type: "mcq",
          q: "18. To convert an octal number to binary, each octal digit is replaced by its:",
          image: null,
          options: [
            "2-bit binary equivalent",
            "3-bit binary equivalent",
            "4-bit binary equivalent",
            "decimal equivalent",
          ],
          ans: "3-bit binary equivalent",
          explanation:
            "The octal system is base-8 (2³), so each digit corresponds to a 3-bit binary equivalent.",
        },
        {
          type: "mcq",
          q: "19. Convert the octal number 47₈ to binary.",
          image: null,
          options: ["100111", "100110", "010111", "101101"],
          ans: "100111",
          explanation: "4 = 100, 7 = 111 in binary. Combining gives 100111₂.",
        },
        {
          type: "mcq",
          q: "20. What is the decimal equivalent of the octal number 57₈?",
          image: null,
          options: ["40", "74", "57", "47"],
          ans: "47",
          explanation: "(5×8¹)+(7×8⁰)=40+7=47₁₀.",
        },
        {
          type: "mcq",
          q: "21. Which two-step process is used to convert an octal number to hexadecimal?",
          image: null,
          options: [
            "Octal → Decimal → Hexadecimal",
            "Octal → Binary → Hexadecimal",
            "Octal → Grouping by 4 → Hexadecimal",
            "It is not possible to convert directly",
          ],
          ans: "Octal → Binary → Hexadecimal",
          explanation:
            "First convert the octal number to binary, then group binary bits in sets of 4 to get hexadecimal.",
        },
        {
          type: "mcq",
          q: "22. What is the hexadecimal equivalent of 76₈?",
          image: null,
          options: ["3D", "3E", "E3", "D3"],
          ans: "3E",
          explanation:
            "76₈ → binary: 7=111, 6=110 → 111110₂. Group as 0011 1110 → 3E₁₆.",
        },
        {
          type: "mcq",
          q: "23. Convert the hexadecimal number 4B₁₆ to binary.",
          image: null,
          options: ["01001011", "01001010", "01011011", "01001101"],
          ans: "01001011",
          explanation: "4=0100, B=1011 → combined = 01001011₂.",
        },
        {
          type: "mcq",
          q: "24. What is the decimal equivalent of 2F₁₆?",
          image: null,
          options: ["37", "47", "57", "25"],
          ans: "47",
          explanation: "(2×16¹)+(15×16⁰)=32+15=47₁₀ since F=15.",
        },
        {
          type: "mcq",
          q: "25. To convert a hexadecimal number to octal, what is the correct procedure?",
          image: null,
          options: [
            "Convert to decimal first",
            "Convert to binary, then group by 3 bits",
            "Group the hex digits by 3",
            "Divide by 8",
          ],
          ans: "Convert to binary, then group by 3 bits",
          explanation:
            "Convert each hex digit to 4-bit binary, then regroup bits into 3-bit sets for octal conversion.",
        },
        {
          type: "mcq",
          q: "26. What is the octal equivalent of 3E₁₆?",
          image: null,
          options: ["67", "76", "77", "176"],
          ans: "76",
          explanation:
            "3E₁₆ = 00111110₂. Group into 3 bits: 000 111 110 → 076₈ or simply 76₈.",
        },
        {
          type: "mcq",
          q: "27. In positive logic, what does a high voltage level represent?",
          image: null,
          options: [
            "Logic '0'",
            "Logic '1'",
            "An error state",
            "An undefined level",
          ],
          ans: "Logic '1'",
          explanation: "In positive logic, high voltage represents binary 1.",
        },
        {
          type: "mcq",
          q: "28. What does a low voltage level represent in positive logic?",
          image: null,
          options: [
            "Logic '0'",
            "Logic '1'",
            "A floating state",
            "High impedance",
          ],
          ans: "Logic '0'",
          explanation: "In positive logic, low voltage represents binary 0.",
        },
        {
          type: "mcq",
          q: "29. In negative logic, a high voltage level represents which logic state?",
          image: null,
          options: ["Logic '0'", "Logic '1'", "Both '0' and '1'", "Undefined"],
          ans: "Logic '0'",
          explanation:
            "Negative logic is the inverse of positive logic; high voltage = logic 0.",
        },
        {
          type: "mcq",
          q: "30. If a system uses negative logic, what does a low voltage level signify?",
          image: null,
          options: [
            "Logic '0'",
            "An OFF state",
            "Logic '1'",
            "A don't care condition",
          ],
          ans: "Logic '1'",
          explanation: "In negative logic, low voltage corresponds to logic 1.",
        },
        {
          type: "mcq",
          q: "31. How are positive and negative logic systems related?",
          image: null,
          options: [
            "They are identical",
            "They are complementary",
            "They are unrelated",
            "They are used for different types of gates",
          ],
          ans: "They are complementary",
          explanation:
            "Positive and negative logic are complementary because their voltage representations for 0 and 1 are swapped.",
        },
        {
          type: "mcq",
          q: "32. Who is credited with inventing the system of algebra used to analyze logic circuits?",
          image: null,
          options: [
            "Charles Babbage",
            "Alan Turing",
            "George Boole",
            "Claude Shannon",
          ],
          ans: "George Boole",
          explanation: "Boolean algebra was invented by George Boole in 1854.",
        },
        {
          type: "mcq",
          q: "33. According to Boolean algebra, what is the value of A + 0?",
          image: null,
          options: ["0", "1", "A", "A'"],
          ans: "A",
          explanation: "Identity Law: A + 0 = A.",
        },
        {
          type: "mcq",
          q: "34. What does the Boolean law A · 1 = A represent?",
          image: null,
          options: [
            "Commutative Law",
            "Associative Law",
            "Identity Law",
            "Idempotent Law",
          ],
          ans: "Identity Law",
          explanation:
            "This is the Identity Law for AND operation. ANDing with 1 doesn’t change value.",
        },
        {
          type: "mcq",
          q: "35. What is the result of the Boolean expression A + A?",
          image: null,
          options: ["2A", "A²", "1", "A"],
          ans: "A",
          explanation: "Idempotent Law: A + A = A.",
        },
        {
          type: "mcq",
          q: "36. According to the Idempotent Law, what is the value of A · A?",
          image: null,
          options: ["A", "1", "0", "A'"],
          ans: "A",
          explanation: "ANDing a variable with itself gives the same variable.",
        },
        {
          type: "mcq",
          q: "37. The expression A · A' simplifies to what value?",
          image: null,
          options: ["1", "A", "0", "A'"],
          ans: "0",
          explanation: "Complementation Law: A AND A' = 0.",
        },
        {
          type: "mcq",
          q: "38. What is the result of A'' (double complement of A)?",
          image: null,
          options: ["0", "1", "A'", "A"],
          ans: "A",
          explanation:
            "Law of Involution: complementing twice returns original value.",
        },
        {
          type: "mcq",
          q: "39. What is the primary purpose of Boolean algebra in digital electronics?",
          image: null,
          options: [
            "To perform decimal arithmetic",
            "To design power supplies",
            "To simplify and analyze logic circuits",
            "To store memory addresses",
          ],
          ans: "To simplify and analyze logic circuits",
          explanation:
            "Boolean algebra simplifies logic circuits into efficient forms.",
        },
        {
          type: "mcq",
          q: "40. Which theorem is used to simplify NOT operations in logic expressions like (A·B)'?",
          image: null,
          options: [
            "Duality Theorem",
            "Consensus Theorem",
            "De Morgan's Theorem",
            "Shannon's Theorem",
          ],
          ans: "De Morgan's Theorem",
          explanation:
            "De Morgan’s Theorem is used to simplify complemented expressions.",
        },
        {
          type: "mcq",
          q: "41. According to De Morgan's Theorem, (A · B)' is equivalent to:",
          image: null,
          options: ["A' · B'", "A' + B'", "A + B", "A · B"],
          ans: "A' + B'",
          explanation: "De Morgan’s first theorem: (A·B)' = A' + B'.",
        },
        {
          type: "mcq",
          q: "42. The expression (A + B)' can be simplified using De Morgan's Theorem to:",
          image: null,
          options: ["A' + B'", "A' · B'", "A · B", "A + B"],
          ans: "A' · B'",
          explanation: "De Morgan’s second theorem: (A + B)' = A'·B'.",
        },
        {
          type: "mcq",
          q: "43. What is the rule to find the dual of a Boolean expression?",
          image: null,
          options: [
            "Invert all variables",
            "Change OR to AND, AND to OR, and swap 1s and 0s",
            "Complement the entire expression",
            "Replace variables with complements",
          ],
          ans: "Change OR to AND, AND to OR, and swap 1s and 0s",
          explanation: "Duality principle: interchange + ↔ · and 1 ↔ 0.",
        },
        {
          type: "mcq",
          q: "44. What is the dual of the Boolean expression A + AB = A?",
          image: null,
          options: ["A(A+B)=A", "A'+A'B'=A'", "A(A'B)=A'", "A+(A+B)=A"],
          ans: "A(A+B)=A",
          explanation: "Replace + with · and vice versa to find the dual.",
        },
        {
          type: "mcq",
          q: "45. In a canonical form Boolean expression, what is true about each term?",
          image: null,
          options: [
            "Each term has one variable",
            "Each term is maximally simplified",
            "Each term contains all variables of the function",
            "Each term is an OR term",
          ],
          ans: "Each term contains all variables of the function",
          explanation:
            "Canonical forms include all variables, either in true or complemented form.",
        },
        {
          type: "mcq",
          q: "46. What is a Minterm in Boolean algebra?",
          image: null,
          options: [
            "An OR term where a variable is primed if its value is 1",
            "An AND term where a variable is primed if its value is 0",
            "A sum of products expression",
            "A product of sums expression",
          ],
          ans: "An AND term where a variable is primed if its value is 0",
          explanation:
            "Minterms are AND terms representing binary combinations.",
        },
        {
          type: "mcq",
          q: "47. What is a Maxterm in Boolean algebra?",
          image: null,
          options: [
            "An AND term",
            "An OR term where a variable is unprimed if its value is 0",
            "An OR term where a variable is unprimed if its value is 1",
            "A single variable",
          ],
          ans: "An OR term where a variable is unprimed if its value is 0",
          explanation: "Maxterms use OR logic with 0→unprimed and 1→primed.",
        },
        {
          type: "mcq",
          q: "48. For variables A, B, C, what does the minterm m1 (binary 001) represent?",
          image: null,
          options: ["A+B+C'", "A'B'C", "A'+B'+C", "ABC'"],
          ans: "A'B'C",
          explanation: "Binary 001 → A=0,B=0,C=1 → A'B'C.",
        },
        {
          type: "mcq",
          q: "49. For variables A, B, C, what does the maxterm M2 (binary 010) represent?",
          image: null,
          options: ["A'BC'", "A+B'+C", "A'+B+C'", "A+B+C"],
          ans: "A+B'+C",
          explanation: "Binary 010 → A=0,B=1,C=0 → A+B'+C.",
        },
        {
          type: "mcq",
          q: "50. What does SOP stand for in Boolean expressions?",
          image: null,
          options: [
            "Standard of Products",
            "Sum of Products",
            "Sequence of Procedures",
            "Sum of Primes",
          ],
          ans: "Sum of Products",
          explanation: "SOP = Sum (OR) of Product (AND) terms.",
        },
        {
          type: "mcq",
          q: "51. The expression F = XY + X’Z is an example of which form?",
          image: null,
          options: [
            "Product of Sums (POS)",
            "Canonical Minterm Form",
            "Sum of Products (SOP)",
            "Canonical Maxterm Form",
          ],
          ans: "Sum of Products (SOP)",
          explanation:
            "It is a sum (OR) of product (AND) terms, which defines the SOP form.",
        },
        {
          type: "mcq",
          q: "52. What does POS stand for in Boolean algebra?",
          image: null,
          options: [
            "Product of Sequences",
            "Prime of Sums",
            "Product of Sums",
            "Part of Standard",
          ],
          ans: "Product of Sums",
          explanation:
            "POS stands for Product of Sums, which means ANDing multiple OR terms.",
        },
        {
          type: "mcq",
          q: "53. The expression F = (X + Y)(X’ + Z) is an example of which form?",
          image: null,
          options: [
            "Sum of Products (SOP)",
            "Product of Sums (POS)",
            "Canonical Form",
            "Minterm Expression",
          ],
          ans: "Product of Sums (POS)",
          explanation:
            "The expression is an AND of sum terms, making it a POS form.",
        },
        {
          type: "mcq",
          q: "54. What is a Karnaugh Map (K-Map) used for?",
          image: null,
          options: [
            "To draw circuit diagrams",
            "To graphically simplify Boolean expressions",
            "To perform binary arithmetic",
            "To store logic states",
          ],
          ans: "To graphically simplify Boolean expressions",
          explanation:
            "K-Maps visually simplify Boolean expressions without complex algebraic manipulation.",
        },
        {
          type: "mcq",
          q: "55. How many squares (cells) does a K-map for 3 variables have?",
          image: null,
          options: ["4", "6", "8", "16"],
          ans: "8",
          explanation:
            "For n variables, a K-map has 2ⁿ cells. For 3 variables → 2³ = 8 cells.",
        },
        {
          type: "mcq",
          q: "56. A K-map for 4 variables (A, B, C, D) would have how many squares?",
          image: null,
          options: ["4", "8", "16", "32"],
          ans: "16",
          explanation: "For 4 variables, number of squares = 2⁴ = 16.",
        },
        {
          type: "mcq",
          q: "57. In a K-map, what is the main rule for grouping adjacent 1s?",
          image: null,
          options: [
            "Groups must be in powers of 3 (3, 9, etc.)",
            "Groups must be diagonal",
            "Groups must contain 1s in powers of 2 (1, 2, 4, 8, etc.)",
            "Groups can be any size",
          ],
          ans: "Groups must contain 1s in powers of 2 (1, 2, 4, 8, etc.)",
          explanation:
            "K-map simplification is done by grouping 1s in powers of 2 (1, 2, 4, 8...) for valid simplification.",
        },
        {
          type: "mcq",
          q: "58. What does a larger group of 1s in a K-map correspond to?",
          image: null,
          options: [
            "A more complex expression",
            "A simpler product term",
            "An error in the map",
            "A maxterm",
          ],
          ans: "A simpler product term",
          explanation:
            "Larger groups remove more variables, resulting in a simpler Boolean expression.",
        },
        {
          type: "mcq",
          q: "59. What does the 'X' symbol represent in a K-map?",
          image: null,
          options: [
            "A mandatory '0'",
            "A mandatory '1'",
            "A Don't Care condition",
            "An impossible state",
          ],
          ans: "A Don't Care condition",
          explanation:
            "‘X’ denotes a Don't Care condition, which can be used as 0 or 1 for simplification.",
        },
        {
          type: "mcq",
          q: "60. In K-map terminology, what is a Prime Implicant (PI)?",
          image: null,
          options: [
            "The smallest possible group of 1s",
            "A group that is not a power of 2",
            "The largest possible valid group of adjacent 1s",
            "A single 1 that cannot be grouped",
          ],
          ans: "The largest possible valid group of adjacent 1s",
          explanation:
            "Prime Implicants are the biggest possible valid groupings of 1s in the K-map.",
        },
        {
          type: "mcq",
          q: "61. What defines an Essential Prime Implicant (EPI)?",
          image: null,
          options: [
            "It is the largest prime implicant on the map",
            "It covers at least one 1 that no other group can cover",
            "It is a group made of only Don't Cares",
            "It is a group containing only two 1s",
          ],
          ans: "It covers at least one 1 that no other group can cover",
          explanation:
            "Essential Prime Implicants are required groups that include unique 1s not covered by other PIs.",
        },
        {
          type: "mcq",
          q: "62. What is the primary advantage of using a K-map?",
          image: null,
          options: [
            "It works for any number of variables",
            "It guarantees the most complex solution",
            "It provides a quick and accurate visual way to minimize expressions",
            "It directly generates a circuit diagram",
          ],
          ans: "It provides a quick and accurate visual way to minimize expressions",
          explanation:
            "K-Maps allow visual simplification of Boolean expressions faster than algebraic methods for fewer variables.",
        },
      ],
    },
    {
      subname:
        "2.2 Combinational and Arithmetic Circuits : Multiplexers, Demultiplexers, Decoder, Encoder, Binary Addition, Binary Subtraction, Operation on Unsigned and Signed Binary Numbers.",
      blocks: [
        { type: "bold", text: " Combinational Circuit – " },

        {
          type: "text",
          text: " • A combinational circuit is a type of digital circuit where the output depends only on the present input values, not on any past inputs.",
        },

        { type: "semibold", text: " Main Features :" },

        {
          type: "important",
          text: " • No memory :",
          desc: " It doesn’t store past data.",
        },

        {
          type: "important",
          text: " • Output :",
          desc: " Depends only on the current input values (Output = function of present inputs only).",
        },

        {
          type: "important",
          text: " • Built using :",
          desc: " Logic gates like AND, OR, NOT, XOR, etc.",
        },

        {
          type: "important",
          text: " • Speed :",
          desc: " Fast — gives an output immediately when the input changes.",
        },

        {
          type: "text",
          text: "⟹ In simple terms, combinational circuits give outputs instantly based on current inputs only.",
          center: true,
        },

        { type: "bold", text: " 1. Adder : " },

        { type: "semibold", text: " A. Half Adder : " },
        { type: "text", text: " • Adds two 1-bit binary numbers (A and B)." },
        { type: "important", text: " • Outputs :", desc: " Sum and Carry." },
        {
          type: "important",
          text: " ⟹  It includes 1 XOR Gate, 1 AND Gate.",
          desc: "  ",
        },
        { type: "text", text: " • Example: (A=1, B=1) → Sum=0, Carry=1." },

        { type: "image", src: half },
        { type: "text", text: " • Limitation : Cannot add three bits." },

        { type: "semibold", text: " B. Full Adder : " },
        {
          type: "text",
          text: " • Adds three bits (A, B, Cin), where Cin = Carry input.",
        },
        {
          type: "important",
          text: " • Outputs :",
          desc: " Sum and Carry out (Cout).",
        },
        {
          type: "important",
          text: " ⟹  It includes 2 XOR Gate, 3 AND Gate, 1 OR Gate.",
          desc: "  ",
        },
        {
          type: "text",
          text: " • Used in multi-bit adders like 4-bit or 8-bit adders (e.g., IC 7483).",
        },
        { type: "text", text: " • Example: Adds A + B + Cin." },

        { type: "image", src: full },

        { type: "bold", text: " 2. Subtractor : " },

        { type: "semibold", text: " A. Half Subtractor : " },
        { type: "text", text: " • Subtracts two bits (A − B)." },
        {
          type: "important",
          text: " • Outputs :",
          desc: " Difference and Borrow.",
        },
        {
          type: "important",
          text: " ⟹  It includes 1 XOR Gate, 1 AND Gate, 1 NOT Gate (Inverter).",
          desc: "  ",
        },
        {
          type: "text",
          text: " • Example: A=0, B=1 → Difference=1, Borrow=1.",
        },
        { type: "image", src: halfsub },

        { type: "semibold", text: " B. Full Subtractor : " },
        { type: "text", text: " • Subtracts three bits (A − B − Bin)." },
        {
          type: "important",
          text: " • Outputs :",
          desc: " Difference and Borrow out.",
        },
        {
          type: "important",
          text: " ⟹  It includes 1 XOR Gate, 3 AND Gate, 1 OR Gate.",
          desc: "  ",
        },
        { type: "image", src: fullsub },
        { type: "text", text: " • Used for multi-bit subtraction operations." },

        { type: "bold", text: " Binary Parallel Adder (Nibble)  : " },
        { type: "text", text: " • Adds multi-bit binary numbers." },
        {
          type: "text",
          text: " • Example: 2-bit adder → connects 2 full adders in a chain.",
        },
        { type: "image", src: binaryadder },
        {
          type: "important",
          text: " • Carry :",
          desc: " Carry from each stage is passed to the next stage.",
        },

        { type: "bold", text: "  Parallel Subtractor : " },
        { type: "text", text: " • Subtracts multi-bit binary numbers." },
        {
          type: "text",
          text: " • Uses 4-bit adder internally for subtraction.",
        },
        { type: "image", src: binarysubtractor },

        {
          type: "important",
          text: " • Formula :",
          desc: " A − B = A + (B') + 1  (where B' is the complement of B).",
        },

        { type: "bold", text: " 4-Bit Adder/Subtractor : " },
        {
          type: "text",
          text: " • Performs both addition and subtraction using the same circuit.",
        },
        {
          type: "important",
          text: " • Components :",
          desc: " Uses XOR gates and Full Adders.",
        },
        {
          type: "important",
          text: " • Control input (C₀) :",
          desc: " 0 → Addition, 1 → Subtraction.",
        },
        {
          type: "text",
          text: "⟹ A single circuit can perform both addition and subtraction operations.",
          center: true,
        },

        { type: "bold", text: " Decoder : " },

        {
          type: "text",
          text: " • Converts binary input into a unique output line.",
        },
        {
          type: "text",
          text: " • Example: 2-to-4 Decoder → 2 inputs and 4 outputs.",
        },
        {
          type: "important",
          text: " • Operation :",
          desc: " Only one output line is HIGH (1) at a time.",
        },
        {
          type: "important",
          text: " • Formula :",
          desc: " n inputs → 2ⁿ outputs.",
        },
        { type: "image", src: decoder },
        {
          type: "text",
          text: " • Example: 3-to-8 decoder, 4-to-16 decoder (built using smaller decoders).",
        },
        {
          type: "important",
          text: " ⟹  For ( 3 to 8 decoder ) use 2 ( 2 to 4 decoder ).",
          desc: "  ",
        },
        {
          type: "important",
          text: " ⟹  For ( 4 to 16 decoder ) use 2 ( 3 to 8 decoder ).",
          desc: "  ",
        },
        {
          type: "important",
          text: " ⟹  For ( 4 to 16 decoder ) use 5 ( 2 to 4 decoder ).",
          desc: "  ",
        },

        { type: "bold", text: " Encoder : " },

        {
          type: "text",
          text: " • Reverse of a Decoder — converts many inputs into a binary output.",
        },
        {
          type: "text",
          text: " • Example: 4-to-2 Encoder → 4 inputs, 2 outputs.",
        },
        {
          type: "important",
          text: " • Operation :",
          desc: " Only one input is active at a time to produce a unique output.",
        },
        {
          type: "important",
          text: " • Formula :",
          desc: " 2ⁿ inputs → n outputs.",
        },
        { type: "image", src: encoder },
        { type: "text", text: " • Example: 8-to-3 (Octal to Binary) Encoder." },
        {
          type: "important",
          text: " • Problem :",
          desc: " If multiple inputs = 1, output becomes ambiguous.",
        },
        {
          type: "important",
          text: " • Solution :",
          desc: " Priority Encoder — gives output for the highest-priority input.",
        },
        {
          type: "important",
          text: "⟹  For ( 8 to 3 encoder ) use 2 ( 4 to 2 encoder ).",
          desc: "",
        },

        {
          type: "important",
          text: "⟹  For ( 16 to 4 encoder ) use 2 ( 8 to 3 encoder ).",
          desc: "",
        },

        {
          type: "important",
          text: "⟹  For ( 16 to 4 encoder ) use 4 ( 4 to 2 encoder ).",
          desc: "",
        },

        { type: "bold", text: " Demultiplexer (De-Mux) : " },
        { type: "text", text: " • One input → multiple outputs." },
        {
          type: "important",
          text: " • Operation :",
          desc: " Uses select lines to decide which output line receives the input signal.",
        },
        {
          type: "text",
          text: " • Example: 1-to-4 Demux → 1 input (I), 2 select lines (S₁, S₀), 4 outputs (Y₀–Y₃).",
        },
        {
          type: "text",
          text: " • Larger versions like 1-to-8 or 1-to-16 can be made by combining smaller ones.",
        },
        {
          type: "text",
          text: "⟹ A Demux distributes one input signal to multiple output lines.",
          center: true,
        },
        {
          type: "important",
          text: "⟹  For (1 x 8 DEMUX) use 2 (1 x 4) and 1 (1 x 2) DEMUX.",
          desc: "",
        },

        {
          type: "important",
          text: "⟹  For (1 x 16 DEMUX) use 2 (1 x 8) and 1 (1 x 2) DEMUX.",
          desc: "",
        },

        {
          type: "important",
          text: "⟹  For (1 x 16 DEMUX) use 4 (1 x 4) DEMUX in first stage and 1 (1 x 4) DEMUX in last stage.",
          desc: "",
        },

        { type: "bold", text: " Multiplexer (Mux) :  " },
        {
          type: "text",
          text: " • Opposite of Demux — many inputs → one output.",
        },
        {
          type: "important",
          text: " • Operation :",
          desc: " Uses select lines to choose which input is connected to the output.",
        },
        {
          type: "text",
          text: " • Example: 4-to-1 Mux → Inputs: I₀–I₃, Select lines: S₁, S₀, Output: Y.",
        },
        {
          type: "important",
          text: " • Applications :",
          desc: " Used in communication systems, computer memory, and data transmission.",
        },
        {
          type: "text",
          text: "⟹ Multiplexers combine multiple input signals into a single output based on select inputs.",
          center: true,
        },
        {
          type: "important",
          text: "⟹  For (8 x 1 MUX) use 2 (4 x 1) and 1 (2 x 1) MUX.",
          desc: "",
        },
        { type: "text", text: " ⟹  Input : I0 to I7.", center: true },
        {
          type: "text",
          text: " ⟹ Select lines : 3(S0, S1, S2) ",
          center: true,
        },
        {
          type: "important",
          text: "⟹  For (16 x 1 MUX) use 2 (8 x 1) and 1 (2 x 1) MUX.",
          desc: "",
        },
        { type: "text", text: " ⟹  Input : I0 to I5.", center: true },
        {
          type: "text",
          text: " ⟹ Select lines : 4(S0, S1, S2,S3) ",
          center: true,
        },
        {
          type: "important",
          text: "⟹  For (16 x 1 MUX) use 4 (4 x 1) MUX in first stage and 1 (4 x 1) MUX in last stage.",
          desc: "",
        },
        { type: "text", text: " ⟹  Input : I0 to I15.", center: true },
        {
          type: "text",
          text: " ⟹ Select lines : 3(S0, S1, S2,S3) ",
          center: true,
        },

        { type: "bold", text: " Binary Arithmetic : " },
        { type: "semibold", text: "  Binary Addition " },
        {
          type: "text",
          text: " • Binary addition follows rules similar to decimal but with only 0s and 1s.",
        },
        { type: "text", text: " • Rules:" },
        { type: "text", text: "⟹  0 + 0 = 0", center: true },
        { type: "text", text: "⟹  0 + 1 = 1", center: true },
        { type: "text", text: "⟹  1 + 0 = 1", center: true },
        { type: "text", text: "⟹  1 + 1 = 10 (Sum=0, Carry=1)", center: true },
        {
          type: "text",
          text: " • Binary addition is the foundation for arithmetic operations in digital circuits.",
        },

        { type: "bold", text: " Signed and Unsigned Numbers " },

        { type: "semibold", text: " 1. Unsigned Numbers " },
        { type: "text", text: " • Represent only positive numbers." },
        { type: "text", text: " • Example: 1010 = 10." },

        { type: "semibold", text: " 2. Signed Numbers " },
        {
          type: "text",
          text: " • Include both positive and negative numbers.",
        },
        {
          type: "important",
          text: " • Represented by MSB (Most Significant Bit) :",
          desc: " 0 = Positive, 1 = Negative.",
        },
        {
          type: "important",
          text: " • Negative numbers :",
          desc: " Represented using 2’s complement form.",
        },

        {
          type: "text",
          text: "⟹ Signed numbers can show both positive and negative values, while unsigned numbers show only positives.",
          center: true,
        },
        {type : "bold", text : "  MCQ : "},
        {
          type: "mcq",
          q: "1. What is the defining feature of a combinational circuit?",
          options: [
            "The output depends on past and present inputs",
            "The output depends only on the present input values",
            "It contains memory elements",
            "It is slow to produce an output",
          ],
          ans: "The output depends only on the present input values",
          explanation:
            "A combinational circuit's output depends solely on the current values at its inputs, not on any past states.",
        },
        {
          type: "mcq",
          q: "2. What essential component do combinational circuits lack?",
          options: ["Logic gates", "Wires", "Memory", "An output"],
          ans: "Memory",
          explanation:
            "Combinational circuits are memoryless; they do not store any past data or state information.",
        },
        {
          type: "mcq",
          q: "3. The output of a combinational circuit is a function of what?",
          options: [
            "Present inputs only",
            "Past inputs only",
            "Clock signals",
            "Stored data",
          ],
          ans: "Present inputs only",
          explanation:
            "The output is calculated immediately based on the combination of present inputs.",
        },
        {
          type: "mcq",
          q: "4. What are the fundamental building blocks of a combinational circuit?",
          options: ["Transistors", "Memory cells", "Logic gates", "Capacitors"],
          ans: "Logic gates",
          explanation:
            "Combinational circuits are constructed using basic logic gates like AND, OR, NOT, and XOR.",
        },
        {
          type: "mcq",
          q: "5. What are the two outputs of a Half Adder?",
          options: [
            "Sum and Difference",
            "Sum and Carry",
            "Difference and Borrow",
            "Input and Output",
          ],
          ans: "Sum and Carry",
          explanation:
            "A Half Adder adds two single bits and produces a Sum bit and a Carry bit.",
        },
        {
          type: "mcq",
          q: "6. How many bits can a Half Adder add at one time?",
          options: ["One", "Two", "Three", "Four"],
          ans: "Two",
          explanation:
            "A Half Adder is designed specifically to add two 1-bit binary numbers.",
        },
        {
          type: "mcq",
          q: "7. A Half Adder circuit consists of which two logic gates?",
          options: [
            "1 XOR and 1 AND",
            "1 XNOR and 1 OR",
            "2 ANDs and 1 OR",
            "2 XORs",
          ],
          ans: "1 XOR and 1 AND",
          explanation:
            "The Sum is generated by an XOR gate, and the Carry is generated by an AND gate.",
        },
        {
          type: "mcq",
          q: "8. For a Half Adder with inputs A=1 and B=1, what are the outputs?",
          options: [
            "Sum=1, Carry=0",
            "Sum=0, Carry=0",
            "Sum=1, Carry=1",
            "Sum=0, Carry=1",
          ],
          ans: "Sum=0, Carry=1",
          explanation:
            "1 + 1 in binary is 10, which means the Sum is 0 and there is a Carry of 1.",
        },
        {
          type: "mcq",
          q: "9. What is the primary limitation of a Half Adder?",
          options: [
            "It cannot add 1 and 0",
            "It is too slow",
            "It cannot add three bits",
            "It cannot produce a carry output",
          ],
          ans: "It cannot add three bits",
          explanation:
            "A Half Adder cannot incorporate a carry-in from a previous stage, so it cannot be used to add three bits.",
        },
        {
          type: "mcq",
          q: "10. A Full Adder is designed to add how many bits?",
          options: ["Two", "Three", "Four", "One"],
          ans: "Three",
          explanation:
            "A Full Adder adds three bits: two input bits (A, B) and a carry-in bit (Cin).",
        },
        {
          type: "mcq",
          q: "11. Which two outputs are produced by a Full Adder?",
          options: [
            "Sum and Borrow",
            "Difference and Carry",
            "Sum and Carry out (Cout)",
            "Input and Carry",
          ],
          ans: "Sum and Carry out (Cout)",
          explanation:
            "A Full Adder produces a Sum and a Carry out (Cout) after adding three input bits.",
        },
        {
          type: "mcq",
          q: "12. What is a common application of Full Adders?",
          options: [
            "Building single-bit subtractors",
            "Data storage",
            "Building multi-bit adders",
            "Signal inversion",
          ],
          ans: "Building multi-bit adders",
          explanation:
            "Full Adders are chained together to create multi-bit adders, such as 4-bit or 8-bit adders.",
        },
        {
          type: "mcq",
          q: "13. What operation is performed by a Half Subtractor?",
          options: [
            "Adds two bits",
            "Subtracts three bits",
            "Adds three bits",
            "Subtracts two bits",
          ],
          ans: "Subtracts two bits",
          explanation:
            "A Half Subtractor is designed to subtract two single bits (A − B).",
        },
        {
          type: "mcq",
          q: "14. What are the outputs of a Half Subtractor?",
          options: [
            "Sum and Carry",
            "Difference and Borrow",
            "Sum and Borrow",
            "Difference and Carry",
          ],
          ans: "Difference and Borrow",
          explanation:
            "A Half Subtractor produces a Difference output and a Borrow output.",
        },
        {
          type: "mcq",
          q: "15. How many bits does a Full Subtractor subtract?",
          options: ["Two", "Three", "Four", "One"],
          ans: "Three",
          explanation:
            "A Full Subtractor subtracts three bits: A, B, and a borrow-in bit (Bin).",
        },
        {
          type: "mcq",
          q: "16. How is a multi-bit parallel subtractor able to perform subtraction?",
          options: [
            "By reversing the logic gates",
            "By using the formula A + (B') + 1",
            "By using Half Subtractors only",
            "By inverting the sum",
          ],
          ans: "By using the formula A + (B') + 1",
          explanation:
            "Subtraction (A − B) is achieved by taking the 2's complement of B (which is B' + 1) and adding it to A.",
        },
        {
          type: "mcq",
          q: "17. In a 4-Bit Adder/Subtractor circuit, what does a control input of '1' signify?",
          options: [
            "Addition",
            "Multiplication",
            "Subtraction",
            "No operation",
          ],
          ans: "Subtraction",
          explanation:
            "A control input of '1' configures the circuit to perform subtraction.",
        },
        {
          type: "mcq",
          q: "18. For a 4-Bit Adder/Subtractor, what operation is performed when the control input C₀ is '0'?",
          options: ["Subtraction", "Addition", "Reset", "Invert"],
          ans: "Addition",
          explanation:
            "A control input of '0' configures the circuit to perform addition.",
        },
        {
          type: "mcq",
          q: "19. What is the primary function of a decoder circuit?",
          options: [
            "Convert multiple input lines to a single output line",
            "Convert a binary input into a unique output line",
            "Store binary data",
            "Select one input from many",
          ],
          ans: "Convert a binary input into a unique output line",
          explanation:
            "A decoder takes a binary code as input and activates a single, corresponding output line.",
        },
        {
          type: "mcq",
          q: "20. For a decoder with 'n' inputs, what is the number of possible output lines?",
          options: ["n", "n²", "2n", "2ⁿ"],
          ans: "2ⁿ",
          explanation:
            "A decoder with 'n' inputs can have up to 2ⁿ unique output lines.",
        },
        {
          type: "mcq",
          q: "21. In a 3-to-8 decoder, how many outputs can be HIGH at one time?",
          options: ["All eight", "Three", "Only one", "None"],
          ans: "Only one",
          explanation:
            "The purpose of a decoder is to assert only one output line that corresponds to the specific input binary code.",
        },
        {
          type: "mcq",
          q: "22. How can you construct a 4-to-16 decoder?",
          options: [
            "Using one 3-to-8 decoder",
            "Using two 3-to-8 decoders",
            "Using sixteen 1-to-2 decoders",
            "Using four 2-to-4 decoders",
          ],
          ans: "Using two 3-to-8 decoders",
          explanation:
            "The text states that a 4-to-16 decoder can be built using two 3-to-8 decoders.",
        },
        {
          type: "mcq",
          q: "23. According to the notes, how many 2-to-4 decoders are needed to build one 3-to-8 decoder?",
          options: ["1", "2", "3", "4"],
          ans: "2",
          explanation:
            "A 3-to-8 decoder can be implemented using two 2-to-4 decoders and additional logic.",
        },
        {
          type: "mcq",
          q: "24. What is the function of an encoder?",
          options: [
            "Same as a decoder",
            "Reverse of a decoder",
            "To distribute one input to many outputs",
            "To store active inputs",
          ],
          ans: "Reverse of a decoder",
          explanation:
            "An encoder performs the opposite function of a decoder, converting multiple input lines into a condensed binary output.",
        },
        {
          type: "mcq",
          q: "25. An encoder with 2ⁿ input lines will have how many output lines?",
          options: ["2ⁿ", "2", "n", "1"],
          ans: "n",
          explanation:
            "An encoder with 2ⁿ inputs will have 'n' outputs to represent the active input in binary.",
        },
        {
          type: "mcq",
          q: "26. What is an 8-to-3 encoder commonly used for?",
          options: [
            "Hexadecimal to binary conversion",
            "Decimal to BCD conversion",
            "Octal to Binary conversion",
            "Binary to Gray code conversion",
          ],
          ans: "Octal to Binary conversion",
          explanation:
            "An 8-to-3 encoder converts one of 8 active inputs (like octal digits 0–7) into a 3-bit binary output.",
        },
        {
          type: "mcq",
          q: "27. What is the main problem with a standard encoder?",
          options: [
            "It is too slow",
            "It uses too many gates",
            "The output is ambiguous if multiple inputs are active",
            "It can only have 2 outputs",
          ],
          ans: "The output is ambiguous if multiple inputs are active",
          explanation:
            "If more than one input is active simultaneously, the output of a standard encoder becomes ambiguous or incorrect.",
        },
        {
          type: "mcq",
          q: "28. Which type of encoder is used to solve the ambiguity problem of standard encoders?",
          options: [
            "Decimal Encoder",
            "Priority Encoder",
            "Binary Encoder",
            "Dual Encoder",
          ],
          ans: "Priority Encoder",
          explanation:
            "A Priority Encoder solves the ambiguity problem by giving output only for the highest-priority active input.",
        },
        {
          type: "mcq",
          q: "29. How many 8-to-3 encoders are needed to build a 16-to-4 encoder?",
          options: ["1", "2", "3", "4"],
          ans: "2",
          explanation:
            "A 16-to-4 encoder can be constructed using two 8-to-3 encoders.",
        },
        {
          type: "mcq",
          q: "30. What is the basic function of a Demultiplexer (De-Mux)?",
          options: [
            "Many inputs → one output",
            "One input → one output",
            "One input → multiple outputs",
            "Many inputs → many outputs",
          ],
          ans: "One input → multiple outputs",
          explanation:
            "A demultiplexer takes a single input signal and distributes it to one of several output lines.",
        },
        {
          type: "mcq",
          q: "31. What is the role of select lines in a Demultiplexer?",
          options: [
            "To carry the input signal",
            "To decide which output line receives the input",
            "To power the circuit",
            "To combine outputs",
          ],
          ans: "To decide which output line receives the input",
          explanation:
            "The select lines are used to choose the specific output line to which the input signal will be routed.",
        },
        {
          type: "mcq",
          q: "32. A 1-to-8 Demux requires how many select lines?",
          options: ["1", "2", "3", "8"],
          ans: "3",
          explanation:
            "To select one of 8 (which is 2³) outputs, you need 3 select lines.",
        },
        {
          type: "mcq",
          q: "33. How can a 1x16 DEMUX be constructed?",
          options: [
            "Using two 1x4 DEMUXes",
            "Using a single 1x8 DEMUX",
            "Using two 1x8 DEMUXes and one 1x2 DEMUX",
            "Using sixteen 1x1 DEMUXes",
          ],
          ans: "Using two 1x8 DEMUXes and one 1x2 DEMUX",
          explanation:
            "A 1x16 DEMUX can be built by combining two 1x8 DEMUXes and one 1x2 DEMUX.",
        },
        {
          type: "mcq",
          q: "34. What is the function of a Multiplexer (Mux)?",
          options: [
            "One input → many outputs",
            "Many inputs → one output",
            "It acts as a memory device",
            "It inverts the input signal",
          ],
          ans: "Many inputs → one output",
          explanation:
            "A multiplexer, or Mux, selects one of several input signals and forwards it to a single output line.",
        },
        {
          type: "mcq",
          q: "35. A Multiplexer is the opposite of a...",
          options: ["Decoder", "Encoder", "Demultiplexer", "Adder"],
          ans: "Demultiplexer",
          explanation:
            "A Mux (many-to-one) performs the reverse operation of a De-Mux (one-to-many).",
        },
        {
          type: "mcq",
          q: "36. In a 4-to-1 Mux, how many select lines are required?",
          options: ["1", "2", "4", "8"],
          ans: "2",
          explanation:
            "To select one of 4 (which is 2²) inputs, you need 2 select lines.",
        },
        {
          type: "mcq",
          q: "37. How can an 8x1 MUX be constructed using smaller MUXes?",
          options: [
            "Using two 4x1 and one 2x1 MUX",
            "Using four 2x1 MUXes",
            "Using one 4x1 and two 2x1 MUXes",
            "Using eight 1x1 MUXes",
          ],
          ans: "Using two 4x1 and one 2x1 MUX",
          explanation:
            "An 8x1 MUX can be built from two 4x1 MUXes and one 2x1 MUX.",
        },
        {
          type: "mcq",
          q: "38. How many select lines does a 16x1 MUX require?",
          options: ["2", "3", "4", "16"],
          ans: "4",
          explanation:
            "To select one of 16 (which is 2⁴) inputs, 4 select lines are needed.",
        },
        {
          type: "mcq",
          q: "39. Which of the following is a key application for multiplexers?",
          options: [
            "Creating power supplies",
            "Generating clock signals",
            "Data transmission and computer memory",
            "Storing electric charge",
          ],
          ans: "Data transmission and computer memory",
          explanation:
            "Multiplexers are used in communication systems, computer memory, and data transmission.",
        },
        {
          type: "mcq",
          q: "40. In binary addition, what is the result of 0 + 1?",
          options: ["0", "1", "10", "2"],
          ans: "1",
          explanation: "0 + 1 equals 1, with no carry.",
        },
        {
          type: "mcq",
          q: "41. What is the result of the binary addition 1 + 1?",
          options: ["1", "2", "11", "10"],
          ans: "10",
          explanation:
            "In binary, 1 + 1 is 10, which represents a Sum of 0 and a Carry of 1.",
        },
        {
          type: "mcq",
          q: "42. What kind of numbers do unsigned binary numbers represent?",
          options: [
            "Only negative numbers",
            "Only positive numbers",
            "Both positive and negative numbers",
            "Only fractions",
          ],
          ans: "Only positive numbers",
          explanation:
            "Unsigned numbers use all bits to represent magnitude and can therefore only represent positive values.",
        },
        {
          type: "mcq",
          q: "43. In a signed binary number, what is the purpose of the Most Significant Bit (MSB)?",
          options: [
            "It always represents the value 1",
            "It indicates the sign of the number",
            "It is always 0",
            "It indicates the magnitude",
          ],
          ans: "It indicates the sign of the number",
          explanation:
            "The MSB is used as the sign bit: 0 indicates a positive number, and 1 indicates a negative number.",
        },
        {
          type: "mcq",
          q: "44. How are negative numbers typically represented in signed binary systems?",
          options: [
            "Using 1's complement form",
            "Using sign-magnitude form only",
            "Using 2's complement form",
            "Using BCD code",
          ],
          ans: "Using 2's complement form",
          explanation:
            "The 2's complement form is the standard method for representing negative numbers in most modern digital systems.",
        },
        {
          type: "mcq",
          q: "45. Which circuit performs the opposite function of an encoder?",
          options: [
            "A multiplexer",
            "A demultiplexer",
            "A decoder",
            "A subtractor",
          ],
          ans: "A decoder",
          explanation:
            "A decoder takes a binary code and activates a single output, which is the reverse of an encoder's function.",
        },
        {
          type: "mcq",
          q: "46. To build a parallel adder for multi-bit numbers, what components are chained together?",
          options: [
            "Half Adders",
            "Full Adders",
            "Half Subtractors",
            "Decoders",
          ],
          ans: "Full Adders",
          explanation:
            "A binary parallel adder is built by connecting the carry-out of one Full Adder to the carry-in of the next.",
        },
        {
          type: "mcq",
          q: "47. How is a 1x16 DEMUX constructed using 1x4 DEMUXes?",
          options: [
            "Using four 1x4s in the first stage and one 1x4 in the last",
            "Using two 1x4s only",
            "Using one 1x4 and four 1x1s",
            "It is not possible",
          ],
          ans: "Using four 1x4s in the first stage and one 1x4 in the last",
          explanation:
            "A two-stage implementation is used where four 1x4 DEMUXes are in the first stage and one is in the last stage.",
        },
        {
          type: "mcq",
          q: "48. What happens to the carry in a binary parallel adder?",
          options: [
            "It is discarded at each stage",
            "It is passed to the next stage",
            "It is sent back to the input",
            "It is inverted",
          ],
          ans: "It is passed to the next stage",
          explanation:
            "The carry from each full adder stage is passed to the carry input of the subsequent stage to handle multi-bit addition correctly.",
        },
        {
          type: "mcq",
          q: "49. What components are used in a 4-Bit Adder/Subtractor circuit?",
          options: [
            "Decoders and Encoders",
            "XOR gates and Full Adders",
            "Multiplexers only",
            "Half Subtractors only",
          ],
          ans: "XOR gates and Full Adders",
          explanation:
            "The circuit uses Full Adders for summation and XOR gates to control whether B or its complement (B') is added.",
        },
        {
          type: "mcq",
          q: "50. The text describes the construction of a 16x1 MUX using 8x1 MUXes. How many 8x1 MUXes are needed?",
          options: ["1", "2", "3", "4"],
          ans: "2",
          explanation:
            "A 16x1 MUX can be built using two 8x1 MUXes, with their outputs selected by a final 2x1 MUX.",
        },
        {
          type: "mcq",
          q: "51. In binary addition, 1 + 0 equals what?",
          options: ["0 with a carry of 1", "1", "10", "0"],
          ans: "1",
          explanation: "1 + 0 equals 1.",
        },
        {
          type: "mcq",
          q: "52. Which circuit is used to select one data source from many and send it to a single destination?",
          options: ["Decoder", "Demultiplexer", "Encoder", "Multiplexer"],
          ans: "Multiplexer",
          explanation:
            "A multiplexer (Mux) selects one of its many inputs to connect to its single output.",
        },
        {
          type: "mcq",
          q: "53. A combinational circuit is described as fast because...",
          options: [
            "It uses a high-speed clock",
            "It stores results in cache",
            "It gives an output immediately when the input changes",
            "It uses minimal gates",
          ],
          ans: "It gives an output immediately when the input changes",
          explanation:
            "Being memoryless, the output of a combinational circuit changes as soon as its inputs change, without any delay from a clock cycle.",
        },
        {
          type: "mcq",
          q: "54. What is the carry-in bit (Cin) used for in a Full Adder?",
          options: [
            "To enable subtraction",
            "To add a carry from a previous, less significant bit addition",
            "To select the output",
            "To clear the result",
          ],
          ans: "To add a carry from a previous, less significant bit addition",
          explanation:
            "The Cin input allows Full Adders to be chained together, incorporating the carry from the addition of the next-lower-order bits.",
        },
        {
          type: "mcq",
          q: "55. How many outputs does a 1-to-4 Demux have?",
          options: ["1", "2", "3", "4"],
          ans: "4",
          explanation:
            "As its name implies, a 1-to-4 demultiplexer has one input and four outputs.",
        },
        {
          type: "mcq",
          q: "56. How are positive and negative logic systems related?",
          options: [
            "They are identical",
            "They are complementary",
            "They are unrelated",
            "They are used for different types of gates",
          ],
          ans: "They are complementary",
          explanation:
            "Positive and negative logic are complementary because their voltage representations for 0 and 1 are swapped.",
        },
        {
          type: "mcq",
          q: "57. Who is credited with inventing the system of algebra used to analyze logic circuits?",
          options: [
            "Charles Babbage",
            "Alan Turing",
            "George Boole",
            "Claude Shannon",
          ],
          ans: "George Boole",
          explanation: "Boolean algebra was invented by George Boole in 1854.",
        },
      ],
    },
    {
      subname:
        "2.3 Sequential Logic Circuit : RS Flip-Flops, Gated Flip-Flops, Edge Triggered Flip-Flops, Master-Slave Flip-Flops, Types of Registers, Applications of Shift Registers, Asynchronous Counters, Synchronous Counters.",
      blocks: [],
    },
    {
      subname:
        "2.4 Microprocessor : Internal Architecture and Features of Microprocessor, Assembly Language Programming.",
      blocks: [],
    },
    {
      subname:
        "2.5 Microprocessor System : Memory Device Classification and Hierarchy, Interfacing I/O and Memory Parallel Interface, Introduction to Programmable Peripheral Interface (PPI), Serial Interface, Synchronous and Asynchronous Transmission, Serial Interface Standards, Introduction to Direct Memory Access (DMA) and DMA Controllers.",
      blocks: [],
    },
    {
      subname:
        "2.6 Interrupt Operations : Interrupt, Interrupt Service Routine, and Interrupt Processing.",
      blocks: [],
    },
  ],
};
