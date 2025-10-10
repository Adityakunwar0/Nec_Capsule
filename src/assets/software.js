import quality from './quality.png';
import lifecycle from './lifecycle.png';
import inter from './interface.png';
import dcd from './dcd.jpg';

export const topic = {
  name: "8. Software Engineering and Object-Oriented Analysis & Design",
  subtopics: [
    {
      subname:
        "8.1 Software process and requirements: Software characteristics, Software quality attributes, Software process model (Agile Model, V-Model, Iterative Model, Prototype Model, and Big Bang Model), Computer-aided software engineering, Functional and non-functional requirements, User requirements, System requirement, Interface specification, The software requirements documents, Requirement’s elicitation and analysis, and Requirement’s validation and management.",
      blocks: [
        {type: "bold", text: "Software Basics 💻"},

{type: "text", text: "• Software is a collection of programs, procedures, and documentation."},
{type: "text", text: "• Acts as a bridge between the user and computer hardware."},

{type: "semibold", text: "Characteristics of Software"},
{type: "text", text: "• Does not wear out (unlike hardware)."},
{type: "text", text: "• Not manufactured — it is developed."},
{type: "text", text: "• Reusable – existing code can be reused."},
{type: "text", text: "• Flexible – can be updated."},
{type: "text", text: "• Maintainable – bugs can be fixed."},
{type: "text", text: "• Portable – runs on multiple platforms."},
{type: "text", text: "• Reliable – works correctly in all conditions."},

{type: "semibold", text: "Software Quality Attributes"},
{type: "text", text: "• Functional Quality: Meets requirements and is easy to use."},
{type: "text", text: "• Structural Quality: Well-structured, secure, and maintainable code."},
{type: "text", text: "• Process Quality: Meets deadlines, stays within budget, and ensures consistent development."},
{type: "image", src: quality},
 { type : "bold", text: "Software Development Lifecycle (SDLC) : " },


  { type: "text", text: "• A Software Process Model is an abstract representation of the software development process." },
  { type: "text", text: "• Each model represents the process from a specific perspective and provides only partial information about it." },
  { type: "text", text: "• Common phases include: Feasibility Study, Requirement Analysis, Software Design, Coding, Testing, and Maintenance." },
  {type: "image", src: lifecycle},
  {
  type: "table",
  headers: [
    "Phase",
    "Description",
    "Deliverable / Output"
  ],
  rows: [
    [
      "Feasibility Study",
      "The initial analysis to determine if the project is technically, economically, and operationally possible and worthwhile.",
      "Feasibility Report (Go/No-Go Decision)"
    ],
    [
      "Requirement Analysis",
      "Gathering, documenting, and understanding what the user needs the software to do (both functional and non-functional requirements).",
      "Software Requirements Specification (SRS document)"
    ],
    [
      "Software Design",
      "Planning the architecture and structure of the system. This stage determines how the system will be built, including database design and interface design.",
      "Design Documents (Database Schema, UML Diagrams)"
    ],
    [
      "Software Coding",
      "The actual development or programming stage where the design is translated into working code by developers.",
      "Source Code and Executable Program"
    ],
    [
      "Software Testing",
      "Systematically checking the coded software to ensure it meets the requirements specified in the SRS and is free of errors (bugs).",
      "Test Reports, Defect Log"
    ],
    [
      "Software Maintenance",
      "The longest phase, which occurs after the software has been deployed to the customer. It involves fixing bugs, enhancing features, and adapting the system to new environments.",
      "Updated Software Releases"
    ]
  ]
}
,

   { type: "bold", text: "Software Process Models : " },
  { type: "text", text: "Different process models define how software is developed and tested." },
  {
    type: "table",
    headers: ["Model", "Core Concept", "Advantages", "Disadvantages"],
    rows: [
      ["Prototyping", "Builds a working model for user evaluation and feedback.", "Errors detected early, faster feedback, active user involvement.", "Slow process, high client involvement, difficult estimation, poor documentation."],
      ["Iterative", "System is developed in repeated cycles (builds), adding functionality each time.", "Easier testing/debugging, adaptable, supports parallel development.", "Needs more resources, not ideal for small projects, dependent on risk analysis."],
      ["V-Model", "Linear development model linking each development phase to a testing phase.", "Early testing improves quality and reliability.", "Rigid and less flexible, not suitable for changing requirements."],
      ["Agile", "Combines incremental and iterative processes; focuses on quick, continuous delivery.", "Fast delivery, adaptable, continuous feedback.", "Requires strong customer involvement, limited documentation."],
      ["Big Bang", "All resources used for direct development with minimal planning.", "Simple, flexible, low initial setup.", "High risk, not suitable for complex projects, costly if requirements unclear."]
    ]
  },
    { type: "bold", text: "Computer-aided software engineering (CASE) Tools : "},
  {
    type: "table",
    headers: ["Tool Type", "Examples", "Purpose / Use"],
    rows: [
      ["Diagram Tools", "Flowcharts, ER Diagrams", "Used for visual representation of system logic and data flow."],
      ["Project Management Tools", "Creative Pro Office", "Helps plan, schedule, and track project progress."],
      ["Documentation Tools", "DrExplain", "Creates detailed and structured documentation for systems."],
      ["QA Tools", "JMeter", "Used for quality assurance and performance testing."],
      ["Maintenance Tools", "Bugzilla", "Tracks and manages bugs or issues after deployment."]
    ]
  },
  { type: "semibold", text: "Advantages:" },
  { type: "text", text: "• Improves software quality and consistency." },
  { type: "text", text: "• Enables faster error detection and correction." },
  { type: "semibold", text: "Disadvantages:" },
  { type: "text", text: "• Can be expensive and complex to use effectively." },

  {type: "bold", text: "Software Requirements: The Blueprint 📐"},
  {type: "text", text: "All software projects start with requirements, which define what the final system must do. These requirements are categorized by what they do (Functional) and how well they do it (Non-Functional)."},
{
  type: "table",
  headers: [
    "Aspect / Requirement Type",
    "Audience / Focus",
    "Definition / Description",
    "Example / Test / Analogy"
  ],
  rows: [
    [
      "Functional Requirements",
      "What the system does. Operations, calculations, data processing, business logic.",
      "Specifies a specific outcome or behavior when a user interacts with the system.",
      "Example: Users can log in; Test: Can a user add item to cart? Analogy: Like rooms in a house."
    ],
    [
      "Non-Functional Requirements",
      "How the system performs. Quality, speed, reliability, security.",
      "Specifies a standard the system must meet, often measurable.",
      "Example: Login page loads within 2s; Test: Does system handle 5000 simultaneous logins? Analogy: Quality of materials used in a house."
    ],
    [
      "User Requirements",
      "Customer, End Users, Business Stakeholders",
      "Written in plain language describing high-level needs and goals.",
      "Example: Customers must be able to securely pay for orders."
    ],
    [
      "System Requirements",
      "Developers, Testers, Technical Architects",
      "Detailed technical specifications describing how the software fulfills user needs.",
      "Example: Payment gateway will use API v3.0 and return 200 status code on success."
    ],
    [
      "Interface Specifications",
      "Developers, Integrators",
      "Defines the exact handshake between software modules or between software and user (UI/UX).",
      "Example: UI displays confirmation message after form submission."
    ]
  ]
}
, { type: "bold", text: "Requirement Elicitation : " },

{type: "text", text:  "• The process of gathering requirements from users, customers, and stakeholders."},
  {type: "important", text: "Involvement : ", desc: "Involves understanding the domain and desired system features."},
  {type: "important", text: "Methods : ", desc: "Interviews, Surveys, Questionnaires, Observation, Brainstorming, Prototyping."},
  {type: "important", text: "Benefits : ", desc: "Defines project scope, avoids confusion, and reveals hidden user needs."},

  { type: "bold", text: "Requirement Validation : " },
  { type: "text", text: "• Ensures the gathered requirements are correct, complete, and build the right product." },
  
  {
    type: "table",
    headers: ["Validation Techniques", "Purpose"],
    rows: [
      ["Reviews", "Evaluate requirements for correctness."],
      ["Prototyping", "Visual confirmation of system behavior."],
      ["Test-cases", "Ensure functionality meets expectations."],
      ["Walkthroughs / Inspections", "Team-based validation and error detection."]
    ]
  },

  { type: "bold", text: "Software Requirement Specification (SRS) : " },
  { type: "text", text: "• A formal document describing what the system should do (not how)." },
 {type: "important", text: "Formal Document : ", desc: "A formal document describing what the system should do (not how)."},
  {type: "important", text: "Purpose : ", desc: "Communication between client and developers, foundation for design and testing, project control."},
  {type: "important", text: "Contents : ", desc: "Functionality, Interfaces, Performance, Attributes, Constraints."},

  { type: "bold", text: "Requirement Management 🔄" },
  { type: "text", text: "• Process of handling and controlling requirement changes throughout the project lifecycle." },
 {type: "important", text: "Process : ", desc: "Eliciting → Documenting → Organizing → Controlling changes."},
  {type: "important", text: "Steps : ", desc: "Identification, Change Management, Traceability, CASE tool support."},
  {type: "important", text: "Advantages : ", desc: "Better control, improved quality, reduced cost, better communication."}

      ],
    },
    {
      subname:
        "8.2 Software design: Design process, Design Concepts, Design Mode, Design Heuristic, Architectural design decisions, System organization, Modular decomposition styles, Control styles, Reference architectures, Multiprocessor architecture, Client–server architectures, Distributed object architectures, Inter-organizational distributed computing, Real-time software design, and Component-based software engineering.",
      blocks: [],
    },
    {
      subname:
        "8.3 Software testing, cost estimation, quality management, and configuration management: Unit Testing, Integration testing, System testing, Component testing, Acceptance Testing, Test case design, Test automation, Metrics for testing, Algorithmic cost modeling, Project duration and staffing, Software quality assurance, Formal technical reviews, Formal approaches to SQA, Statistical software quality assurance, A framework for software metrics, Matrices for analysis and design model, ISO standards, CMMI, SQA plan, Configuration management planning, Change management, Version and release management, and CASE tools for configuration management.",
      blocks: [],
    },
    {
      subname:
        "8.4 Object-oriented fundamentals and analysis: Defining Models, Requirement Process, Use Cases, Object Oriented Development Cycle, Unified Modeling Language, Building Conceptual Model, Adding Associations and Attributes, and Representation of System Behavior.",
      blocks: [],
    },
    {
      subname:
        "8.5 Object-oriented design: Analysis to Design, Describing and Elaborating Use Cases, Collaboration Diagram, Objects and Patterns, Determining Visibility, and Class Diagram.",
      blocks: [],
    },
    {
      subname:
        "8.6 Object-oriented design implementation: Programming and Development Process, Mapping Design to Code, Creating Class Definitions from Design Class Diagrams, Creating Methods from Collaboration Diagram, Updating Class Definitions, Classes in Code, and Exception and Error Handling.",
      blocks: [
      
  { type: "bold", text: "Object-Oriented Implementation : " },
  { type: "text", text: "• With the completion of interaction diagrams & DCDs (Design Class Diagrams), there’s enough detail to generate code for the domain layer of objects." },
  { type: "text", text: "• The UML artifacts (Interaction diagram & DCD) are used as input for the code generation process." },
  { type: "text", text: "• The Implementation Model in UP (Unified Process) contains implementation artifacts such as source code, database definition, and JSP/XML/HTML pages." },
  { type: "text", text: "• This process involves mapping the design to code in an Object-Oriented (OO) language." },

  { type: "bold", text: "Mapping Single Class to Code : " },
  { type: "text", text: "• The mapping converts a UML class representation (like a DCD element) into source code, as illustrated by the Dog class example." },

  { type: "bold", text: "Mapping Dog Class from DCD to Code : " },
  

  { type: "text", text: "Creating Class Definitions from DCDs : " },
  { type: "image", src: dcd},

  { type: "bold", text: " DCD to Class Definition Flow : " },
  { type: "text", text: "• The elements from a DCD map directly to the class definition:" },
  { type: "text", text: "1. DCD" },
  { type: "text", text: "2. Class name, Superclasses" },
  { type: "text", text: "3. Simple attributes" },
  { type: "text", text: "4. Method Signatures" },
  { type: "text", text: "5. Interface Name" },
  { type: "text", text: "These elements collectively result in a Class Definition in OOPL!!" },

  { type: "bold", text: "Interface : " },
  { type: "text", text: "• An Interface is a collection of abstract methods: a method which is declared but can’t be defined." },
  { type: "text", text: "• It specifies what a class must do, but not how it does it." },
  { type: "text", text: "• It’s a set of requirements for classes that implement it." },
  { type: "text", text: "• A class implements an interface, thereby inheriting its abstract methods." },
  {type: "image", src: inter},
  { type: "semibold", text: "Interface and Implementation Class Example : " },
  { type: "text", text: "• The example shows an Interface (Credit card) that defines a contract for handling different currencies (Rupees, Dollars, Pounds). The Implementation class (Bank account) implements this interface." },



  { type: "semibold", text: "Mapping Class Diagrams to Java (Steps) : " },
  { type: "text", text: "• The following must be considered when mapping Class Diagrams into code:" },
   {
    type: "important",
    text: "1. Class Name Mapping : ",
    desc: "The class should be defined without varying the class name. (Customer DCD maps to Public Class Customer)."
  },
  {
    type: "important",
    text: "2. Attribute Mapping : ",
    desc: "All attributes must be mapped with the same name and attribute type. (e.g., -id: integer maps to Private integer id;)."
  },
  {
    type: "important",
    text: "3. Function Mapping : ",
    desc: "All functions (operations) should be mapped with the same function name and function type. (e.g., +getname(): string maps to Public string getname() {....})."
  },
  {
    type: "important",
    text: "4. Relationships : ",
    desc: "Relationships between classes, including multiplicity, must be visualized simply in the code."
  },
  {
    type: "important",
    text: "5. Structure : ",
    desc: "The complete structural part of the class diagram must be mapped into the Java code."
  },
    

  { type: "semibold", text: "Association Relationship : " },
  { type: "text", text: "• The association represents the static relationship between two classes along with the multiplicity." },
  { type: "text", text: "• Multiplicity defines how many instances can be associated at any given moment." },
  { type: "text", text: "• Types include: One to one, One to many, and Many to many association." },

  { type: "semibold", text: "Exception and Error Handling : " },
  { type: "text", text: "• An Exception is a condition caused by a runtime error in the program." },
  { type: "text", text: "• It is an unexpected behavior that the section of code containing the problem is not designed to handle." },
  { type: "text", text: "• Reasons for exceptions include: invalid user data, file not found, lost network connection, or the JVM running out of memory." },
  { type: "text", text: "• They can be caused by user error, programmer error, or physical resource failure." },

  { type: "semibold", text: "Categories of Exceptions : " },
  {
  type: "table",
  headers: ["Category", "Description", "Compiler Handling", "Example"],
  rows: [
    [
      "Checked",
      "Typically a user error or unforeseen problem.",
      "Cannot be ignored at compilation.",
      "File not found."
    ],
    [
      "Runtime",
      "Probably could have been avoided by the programmer.",
      "Ignored at compilation.",
      "Division by zero."
    ],
    [
      "Errors",
      "Problems beyond control of user/programmer.",
      "Ignored at compilation.",
      "Stack overflow."
    ]
  ]
}
,
  

  { type: "semibold", text: "Exception Handling Process : " },
  { type: "text", text: "• A method signals an error condition by throwing an exception." },
  { type: "text", text: "• Control is transferred to an exception handler by catching an exception using try, catch." },
  { type: "text", text: "• Cleanup can be done by finally." },
  { type: "text", text: "• Try block: Contains code that could have exceptions/errors." },
  { type: "text", text: "• Catch block(s): Specify code to handle various exceptions. The first block with the appropriate type is invoked. If no local catch is found, the exception propagates up the method call stack." },
  { type: "text", text: "• Finally block: Execution transfers here after the try (normal completion) or a catch block." },
  { type: "text", text: "• Exception handling is used to locate the type and place of errors, aiding in debugging programs." },

  

      ],
    },
  ],
};
