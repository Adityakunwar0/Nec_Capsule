import ermodel from "./ersymbol.png";
import state from './state.png';

export const topic = {
  name: "7. Data Structures and Algorithm, Database System and Operating System ",
  subtopics: [
    {
      subname:
        "7.1 Introduction to Data Structure, List, Linked Lists and Trees: Data types, data structures and abstract data types; time and space analysis of algorithms (Big O, Omega and Theta notations), Linear data structure (Stack and Queue implementation); Stack application: infix to postfix conversion, and evaluation of postfix expression, Array implementation of lists; Stack and Queues as list; Static and dynamic list structure; Dynamic implementation of linked list; Types of Linked list: Singly Linked list, Doubly Linked list, and Circular Linked list; Basic operations on Linked list: creation, insertion, and deletion of nodes; Doubly linked lists and its applications; Concept of Tree, Operation in Binary tree, Tree search, insertion/deletion in Binary Tree, Tree traversals (pre-order, post-order, in-order), Height, level and depth of a tree, AVL balanced trees.",
      blocks: [
        { type: "bold", text: "Introduction To Data Structure : " },
        {
          type: "text",
          text: "• A data struture is a way to organize data so we can use it efficiently.",
        },
        { type: "semibold", text: "• It has two parts : " },
        {
          type: "important",
          text: " i. Interface : ",
          desc: " The set of operation we can perform (like insert, delete, search).",
        },
        {
          type: "important",
          text: "ii. Implementation : ",
          desc: " How it actually built inside (like using arrays, pointers, linked list).",
        },
        { type: "semibold", text: " Characteristics of Data Structure :  " },
        {
          type: "important",
          text: " i. Correctness : ",
          desc: " Must give correct result. ",
        },
        {
          type: "important",
          text: " ii. Time Complexity : ",
          desc: " Should take less time. ",
        },
        {
          type: "important",
          text: " iii. Space Complexity :  ",
          desc: " Should use less memory. ",
        },

        { type: "semibold", text: "The 3 Asymptotic Notations : " },

        {
          type: "text",
          text: " •  These three notations (O, Ω, Θ) are mathematical tools used to describe how the running time or memory usage of an algorithm changes as the input size (n) gets very large.",
        },

        {
          type: "text",
          text: "•  In simple terms, they tell you the rate of growth of the algorithm's time relative to its input, helping you predict its performance.",
        },

        {
          type: "text",
          text: "⟹ Asymptotic Notations help analyze algorithms beyond specific machines or programming languages, focusing only on efficiency.",
          center: true,
        },
        {
          type: "table",
          headers: [
            "Notation",
            "Symbol",
            "Pronounced",
            "Represents",
            "Car Race Analogy",
          ],
          rows: [
            [
              "Big O",
              "O(n)",
              "Big Oh",
              "Upper Bound (Worst Case)",
              "The absolute slowest the car will ever go.",
            ],
            [
              "Big Omega",
              "Ω(n)",
              "Big Omega",
              "Lower Bound (Best Case)",
              "The absolute fastest the car can possibly go.",
            ],
            [
              "Big Theta",
              "Θ(n)",
              "Big Theta",
              "Tight Bound (Average Case)",
              "The typical, expected speed of the car.",
            ],
          ],
        },
        { type: "semibold", text: "Need For Data Structure :  " },
        {
          type: "text",
          text: "•  When data grows large, searching and managing becomes slow.",
        },
        {
          type: "text",
          text: "•  Processor speed is limited compared to the data growth.",
        },
        {
          type: "text",
          text: "•  Many users can access data at the same time -> needs efficient organization.",
        },
        {
          type: "text",
          text: " ⟹ Solution : Use Proper Data Structure",
          center: true,
        },
        { type: "semibold", text: " Execution Time Cases :  " },
        {
          type: "important",
          text: " i. Best Case : ",
          desc: " Fastest time possible. ",
        },
        {
          type: "important",
          text: " ii. Average Case : ",
          desc: " Expected/Normal time. ",
        },
        {
          type: "important",
          text: " ii. Worst Case : ",
          desc: " Slowest time possible. ",
        },
        { type: "bold", text: "Basic Terminology : " },
        { type: "important", text: " i. Data : ", desc: " Raw values. " },
        {
          type: "important",
          text: " ii. Data Item : ",
          desc: " Single value (eg : 10). ",
        },
        {
          type: "important",
          text: " iii. Group Item : ",
          desc: " Divisible into sub-items. ",
        },
        {
          type: "important",
          text: " iv. Elementary Item : ",
          desc: " Cannot be divided. ",
        },
        {
          type: "important",
          text: " v. Entity : ",
          desc: " Real world object (like student). ",
        },
        {
          type: "important",
          text: " vi. Field : ",
          desc: " Single attribute (name : age). ",
        },
        {
          type: "important",
          text: " vii. Record : ",
          desc: " Collection of field. ",
        },
        {
          type: "important",
          text: " viii. File : ",
          desc: " Collection records (like student table).",
        },
        { type: "bold", text: " Classification Of Data Structure : " },
        { type: "semibold", text: " A. Static And Dynamic Data Structure :  " },
        {
          type: "important",
          text: "• Static :  ",
          desc: " Fixed size (eg : Array). ",
        },
        {
          type: "important",
          text: "• Dynamic : ",
          desc: " Can grow/shrink (eg :Linked List). ",
        },
        {
          type: "semibold",
          text: " B. Primitive And Non-Primitive Data Structure : ",
        },
        {
          type: "important",
          text: "• Primitive : ",
          desc: " Built in data type (eg : int, float, char, boolean).",
        },
        {
          type: "important",
          text: "• Non-Primitive :  ",
          desc: " Made by programmer (eg: Stack, Queue, Tree). ",
        },
        {
          type: "semibold",
          text: " C. Linear And Non Linear Data Structure :  ",
        },
        {
          type: "important",
          text: "• Linear : ",
          desc: " Data arranged in a line (eg : Array, Stack, Queue). ",
        },
        {
          type: "important",
          text: "• Non-Linear :  ",
          desc: " Data arranged in hierarchical or network-line (eg : Tree, Graph). ",
        },

        { type: "bold", text: " Data Type And Abstract Data Type : " },
        {
          type: "important",
          text: " • Data Type :  ",
          desc: " Defines kind of data and operations (eg : int, float char etc.) ",
        },
        {
          type: "important",
          text: " • Abstarct Data Type : ",
          desc: " Focus only on what operation can be done, not how. ",
        },
        {
          type: "text",
          text: " ⟹ eg : Stack ADT (Push, Pop, Isempty). ",
          center: true,
        },
        { type: "semibold", text: " • Advantages of Abstract Data Type :  " },
        {
          type: "important",
          text: "i. Encapsulation : ",
          desc: " Hides implementaion details. ",
        },
        {
          type: "important",
          text: "ii. Flexibility :  ",
          desc: " Can change implementation without affecting the users. ",
        },
        {
          type: "important",
          text: "ii. Localization Of Change : ",
          desc: " Code using ADT, doesnot break if implementation changes. ",
        },

        { type: "bold", text: " Data Structure Operations : " },
        {
          type: "important",
          text: " i. Traversing : ",
          desc: " Visit each element. ",
        },
        {
          type: "important",
          text: " ii. Searching :",
          desc: " Find element. ",
        },
        {
          type: "important",
          text: " iii. Inserting : ",
          desc: " Add element. ",
        },
        {
          type: "important",
          text: " iv. Deleting : ",
          desc: " Remove element. ",
        },
        {
          type: "important",
          text: " v. Sorting : ",
          desc: " Arrange in order. ",
        },
        {
          type: "important",
          text: " vi. Merging : ",
          desc: " Combine the structure. ",
        },

        { type: "bold", text: " Stack : " },
        {
          type: "text",
          text: " • A collection where insertion/deletion happened at one end (TOP).",
        },
        {
          type: "text",
          text: " • It works at the principle of Last In, First Out (LIFO). ",
        },
        { type: "semibold", text: " Additional Operations : " },

        {
          type: "important",
          text: " • TOP(S) : ",
          desc: " Return the element at the top of the stack. ",
        },

        {
          type: "important",
          text: " • ISEMPTY(S) : ",
          desc: " Check whether the stack S is empty or not. Returns True(1) if empty, otherwise False(0). ",
        },

        {
          type: "important",
          text: " • ISFULL(S) : ",
          desc: " Check whether the stack S is full or not. Returns True(1) if full, otherwise False(0). ",
        },

        {
          type: "important",
          text: " • MAKENULL(S) : ",
          desc: " Make the stack S an empty stack (clears all elements). ",
        },

        {
          type: "important",
          text: " • SEARCH(X, S) : ",
          desc: " Find the location or position of item X in stack S. ",
        },

        {
          type: "important",
          text: " • TRAVERSE(S) : ",
          desc: " Read each element once from the stack S without modifying it. ",
        },

        {
          type: "important",
          text: " • MAX(S) : ",
          desc: " Return the maximum value from the stack S. ",
        },

        {
          type: "important",
          text: " • MIN(S) : ",
          desc: " Return the minimum value from the stack S. ",
        },

        { type: "semibold", text: " Implementation Of Stack :  " },
        {
          type: "important",
          text: " • Stack (Array) :  ",
          desc: " Fixed Size. ",
        },
        {
          type: "important",
          text: " • Dynamic (Linked List) : ",
          desc: " Can grow/Shrink. ",
        },
        { type: "semibold", text: "  Applications :  " },
        { type: "text", text: " ⟹ Reversing String.  ", center: true },
        { type: "text", text: " ⟹ Function Calls (Recursion). ", center: true },
        { type: "text", text: " ⟹ Undo In Applications.", center: true },
        {
          type: "text",
          text: " ⟹ Expression Conversion (Infix --> Postfix).",
          center: true,
        },
        { type: "text", text: " ⟹ Browsing History.", center: true },
        {
          type: "text",
          text: " ⟹ Checking Validity For Expression.",
          center: true,
        },
        { type: "text", text: " ⟹ Sorting. ", center: true },
        { type: "text", text: " ⟹ Backtracking. ", center: true },

        { type: "semibold", text: " Expression Notation :  " },
        {
          type: "important",
          text: " i. Infix :  ",
          desc: " a + b (Operator between operands and in Human readable form). ",
        },
        {
          type: "important",
          text: " ii. Prefix : ",
          desc: " +ab (Operator before operands and No need of parentheses). ",
        },
        {
          type: "important",
          text: " iii. Postfix :  ",
          desc: " ab+ (Opeartor after operands and Also does not need parentheses, easy for computer evaluation). ",
        },
        {
          type: "text",
          text: " ⟹ Computer usually convert infix to postfix using stack. ",
          center: true,
        },
        { type: "semibold", text: " Conversion Methods : " },

        {
          type: "important",
          text: " • Infix → Postfix : ",
          desc: " Use Stack. Scan from left to right :   ",
        },
        {
          type: "text",
          text: " 1. If operand → add to output. ",
          center: true,
        },
        {
          type: "text",
          text: " 2. If '(' → push to stack. ",
          center: true,
        },
        ,
        {
          type: "text",
          text: " 3. If ')' → pop until '(' is found.",
          center: true,
        },
        {
          type: "text",
          text: "4. If operator → pop operators with higher or equal precedence before pushing current one.",
          center: true,
        },
        {
          type: "important",
          text: " • Infix → Prefix : ",
          desc: " Reverse infix expression → convert to postfix using same rules → reverse the result to get prefix.",
        },

        {
          type: "important",
          text: " • Postfix → Infix : ",
          desc: " Use Stack. Scan from left to right :   ",
        },
        {
          type: "text",
          text: "1. If operand → push to stack.",
          center: true,
        },
        {
          type: "text",
          text: "2. If operator → pop two operands, form  (operand2 operator operand1), and push back to stack.",
          center: true,
        },
        { type: "semibold", text: " Evaluation : " },

        {
          type: "important",
          text: " • Postfix Evaluation : ",
          desc: " Use Stack. Scan left to right. Push operands. When operator appears, pop two operands, apply operator, and push result back.",
        },

        {
          type: "important",
          text: " • Prefix Evaluation : ",
          desc: " Scan from right to left. Push operands. When operator appears, pop two operands, apply operator, and push result back.",
        },

        {
          type: "important",
          text: " ⟹ Stack is the key data structure used in all these conversions and evaluations. ",
        },
        {
          type: "semibold",
          text: " Time Complexity (Best, Average & Worst) : ",
        },
        {
          type: "table",
          headers: ["Operation", "Best Case", "Average Case", "Worst Case"],
          rows: [
            ["PUSH", "O(1)", "O(1)", "O(1)"],
            ["POP", "O(1)", "O(1)", "O(1)"],
            ["PEEK / TOP", "O(1)", "O(1)", "O(1)"],
            ["ISEMPTY / ISFULL", "O(1)", "O(1)", "O(1)"],
            ["SEARCH", "O(1)", "O(n)", "O(n)"],
            ["TRAVERSE", "O(n)", "O(n)", "O(n)"],
          ],
        },
        { type: "bold", text: " Queue :   " },
        {
          type: "text",
          text: " • It works on the principle of First In First Out (FIFO). ",
        },
        {
          type: "text",
          text: " • It is a homogeneous collection of elements in which new elements are added at one end called rear, and the existing elements are deleted from other end called front",
        },
        { type: "semibold", text: "QUEUE AS AN ADT / OPERATION ON QUEUE : " },
        { type: "important", text: "• Enqueue () :" },
        {
          type: "text",
          text: "• Refers to the addition of an item in the queue.",
        },
        {
          type: "text",
          text: "• Items are always inserted at the rear end of the queue.",
        },
        {
          type: "text",
          text: "• Whenever a data item is inserted, the value of rear increases by 1 i.e. rear = rear + 1.",
        },
        { type: "important", text: "• Dequeue () :" },
        {
          type: "text",
          text: "• Refers to the deletion of an item from the queue.",
        },
        {
          type: "text",
          text: "• Items are always deleted from the front end of the queue.",
        },
        {
          type: "text",
          text: "• Whenever an item is deleted, the value of front increases by 1 i.e. front = front + 1.",
        },

        {
          type: "important",
          text: "• Some additional operations that can be performed on a queue are:",
        },

        {
          type: "important",
          text: "• MakeEmpty(Q):",
          desc: "Creates an empty queue Q.",
        },
        {
          type: "important",
          text: "• IsEmpty(Q):",
          desc: "Returns true if the queue Q is empty, otherwise false.",
        },
        {
          type: "important",
          text: "• IsFull(Q):",
          desc: "Returns true if the queue Q is full, otherwise false.",
        },
        {
          type: "important",
          text: "• Size(Q):",
          desc: "Returns the number of items in the queue Q.",
        },
        {
          type: "important",
          text: "• Front(Q):",
          desc: "Returns the object at the front of the queue without removing it.",
        },
        {
          type: "important",
          text: "• Traverse(Q):",
          desc: "Visits all the elements stored in the queue Q.",
        },
        {
          type: "important",
          text: "• Search(K, Q):",
          desc: "Searches for the location of K in queue Q.",
        },
        { type: "semibold", text: " Implementation Of Queue :  " },
        { type: "text", text: "•  Array (Static)." },
        { type: "text", text: "•  Linked List (Dynamic)." },
        { type: "semibold", text: " Types Of Queue : " },
        {
          type: "important",
          text: " i. Simple (Linear) Queue : ",
          desc: " It follows normal FIFO principle. ",
        },
        {
          type: "important",
          text: " ii. Circular Queue : ",
          desc: " Uses array in circular way to save space ",
        },
        {
          type: "important",
          text: " iii. Dequeue (Dobule End Queue) : ",
          desc: " Insert/Delete From both ends. ",
        },
        {
          type: "text",
          text: " ⟹ I/P Restricted (Insertion at only one end, rear end,  Deletion at both ends, rear and front end of the lists).",
          center: true,
        },
        {
          type: "text",
          text: " ⟹ O/P Restricted (Deletion at only one end, front end,  Insertion at both ends, rear and front end of the lists.). ",
          center: true,
        },
        {
          type: "important",
          text: " iv. Priority Queue : ",
          desc: " Each element has a priority, high-priority served first. ",
        },

        { type: "semibold", text: " Applications : " },
        {
          type: "text",
          text: " ⟹ CPU Scheduling (Round Robin).",
          center: true,
        },
        { type: "text", text: " ⟹ Printer Queue. ", center: true },
        {
          type: "text",
          text: " ⟹ Networking (Packets in routers ).",
          center: true,
        },
        {
          type: "text",
          text: " ⟹ Customer Service (Ticket booking, call center).",
          center: true,
        },
        {
          type: "semibold",
          text: " Time Complexity (Best, Average & Worst) : ",
        },
        {
          type: "table",
          headers: ["Operation", "Best Case", "Average Case", "Worst Case"],
          rows: [
            ["Enqueue (Insertion)", "O(1)", "O(1)", "O(1)"],
            ["Dequeue (Deletion)", "O(1)", "O(1)", "O(1)"],
            ["Front / Peek", "O(1)", "O(1)", "O(1)"],
            ["IsEmpty / IsFull", "O(1)", "O(1)", "O(1)"],
            ["Search", "O(1)", "O(n)", "O(n)"],
            ["Traverse", "O(n)", "O(n)", "O(n)"],
          ],
        },
        { type: "bold", text: " Stack Vs Queue :  " },

        {
          type: "table",
          headers: ["Stack", "Queue"],
          rows: [
            [
              "Operations at one end (top).",
              "Insertions at rear, deletions at front.",
            ],
            [
              "Follows LIFO (Last In First Out).",
              "Follows FIFO (First In First Out).",
            ],
            [
              "Uses push and pop operations.",
              "Uses enqueue and dequeue operations.",
            ],
            ["Has one pointer: top.", "Has two pointers: front and rear."],
            [
              "Full condition: top = MAX - 1.",
              "Full condition: rear = MAX - 1.",
            ],
            [
              "Empty condition: top = -1.",
              "Empty condition: front = rear = -1.",
            ],
            ["Insert → top = top + 1.", "Insert → rear = rear + 1."],
            ["Delete → top = top - 1.", "Delete → front = front + 1."],
            ["Example: Stack of plates.", "Example: People in a queue."],
          ],
        },
        { type: "bold", text: " Lists and Arrays (Static Lists) : " },
        {
          type: "text",
          text: "• A List is a collection of similar (homogeneous) items.",
        },

        { type: "semibold", text: "Static List : " },
        {
          type: "text",
          text: "• A list where the size is fixed when the program starts.",
        },
        { type: "text", text: "• Usually implemented using arrays." },

        { type: "semibold", text: "The Problem : " },
        {
          type: "text",
          text: "• Arrays waste memory if not all allocated space is used.",
        },
        {
          type: "text",
          text: "• Arrays cannot expand once their size is defined.",
        },

        { type: "semibold", text: "Operations on Arrays : " },
        { type: "text", text: "• Create an array." },
        {
          type: "text",
          text: "• Insert or Delete elements (requires shifting).",
        },
        { type: "text", text: "• Modify an element." },
        { type: "text", text: "• Traverse (access all elements)." },
        { type: "text", text: "• Merge arrays." },

        { type: "semibold", text: "Insertion / Deletion in Array : " },
        {
          type: "text",
          text: "• When inserting or deleting in the middle, all following elements must be shifted.",
        },
        {
          type: "text",
          text: "• Shift right for insertion and left for deletion.",
        },
        { type: "text", text: "• This can be slow for large lists." },

        { type: "bold", text: "Linked Lists (Dynamic Lists) : " },

        {
          type: "text",
          text: "• A Dynamic List is a flexible list that can grow or shrink while the program is running.",
        },
        {
          type: "text",
          text: "• Linked List is the special data structure used for this purpose.",
        },

        { type: "semibold", text: " What it is : " },
        {
          type: "text",
          text: "• A Linked List is a collection of nodes connected by pointers.",
        },

        { type: "semibold", text: "Each Node has two parts : " },
        {
          type: "text",
          text: "• Data (Info): The actual element you want to store.",
        },
        {
          type: "text",
          text: "• Pointer (Next): The memory address of the next node in the list.",
        },

        {
          type: "text",
          text: "• The START pointer holds the address of the first node (the head).",
        },
        {
          type: "text",
          text: "• The last node’s pointer is NULL, indicating the end of the list (the tail).",
        },

        { type: "semibold", text: "Types Of Linked List : " },

        { type: "important", text: "1. Singly Linked List (SLL) : " },
        {
          type: "text",
          text: "• A Singly Linked List is like a one-way street.",
          center: true,
        },
        {
          type: "text",
          text: "• Each node only knows the next node (has one 'Next' pointer).",
          center: true,
        },
        {
          type: "text",
          text: "• Movement is possible only in one direction (forward).",
          center: true,
        },
        {
          type: "text",
          text: "• The last node points to NULL (no next node).",
          center: true,
        },
        {
          type: "text",
          text: "• Example: Like a train where you can only walk from front to back.",
          center: true,
        },

        { type: "important", text: "2. Doubly Linked List (DLL) : " },
        {
          type: "text",
          text: "• A Doubly Linked List is like a two-way street.",
          center: true,
        },
        {
          type: "text",
          text: "• Each node has two pointers: 'Next' and 'Prev' (previous).",
          center: true,
        },
        {
          type: "text",
          text: "• You can move both forward and backward through the list.",
          center: true,
        },
        {
          type: "text",
          text: "• Easier and faster to delete a node because both directions are known.",
          center: true,
        },

        { type: "important", text: "3. Circular Linked List (CLL) : " },
        {
          type: "text",
          text: "• Works like a circular road or merry-go-round.",
          center: true,
        },
        {
          type: "text",
          text: "• The last node’s 'Next' pointer connects back to the first node (Head).",
          center: true,
        },
        {
          type: "text",
          text: "• There is no end — traversal continues in a loop.",
          center: true,
        },
        {
          type: "text",
          text: "• Used for repeated cyclic tasks (like round-robin scheduling).",
          center: true,
        },

        { type: "semibold", text: "Advantages (Why better than arrays) :" },
        {
          type: "text",
          text: "• Dynamic in size (can grow or shrink easily).",
          center: true,
        },
        {
          type: "text",
          text: "• Efficient memory use — allocates space only when needed.",
          center: true,
        },
        {
          type: "text",
          text: "• Insertion and deletion are fast (no shifting needed, only pointer changes).",
          center: true,
        },

        { type: "semibold", text: "Disadvantages :" },
        {
          type: "text",
          text: "• Requires more memory because each node needs an extra pointer.",
          center: true,
        },
        {
          type: "text",
          text: "• Accessing a specific item is slower (must start at the beginning and follow pointers).",
          center: true,
        },

        { type: "bold", text: "Recursion : " },

        {
          type: "text",
          text: "• Recursion is a programming technique where a function calls itself to solve a problem. Think of it like a set of Russian nesting dolls—each doll contains a smaller version of itself.",
        },

        { type: "semibold", text: "The Two Essential Steps:" },

        {
          type: "important",
          text: "• Base Case:",
          desc: "The condition that makes the function stop calling itself (e.g., when calculating N!, the base case is 0! = 1). Without this, the function runs forever and causes a stack overflow error.",
        },
        {
          type: "important",
          text: "• Recursive Step (Inductive Step):",
          desc: "The part where the function calls itself, usually with a smaller or simpler version of the problem (e.g., N! = N × (N−1)!).",
        },

        { type: "semibold", text: "Types of Recursion : " },

        {
          type: "text",
          text: "• Direct: A function calls itself immediately (e.g., fun() calls fun()).",
          center: true,
        },
        {
          type: "text",
          text: "• Indirect: A function calls a second function, which then calls the first function back (a cycle).",
          center: true,
        },
        {
          type: "text",
          text: "• Tail: The recursive call is the very last thing the function does. This is often more efficient.",
          center: true,
        },
        {
          type: "text",
          text: "• Non-Tail: There is an operation (like multiplication) that needs to happen after the recursive call returns (e.g., return (n * fact(n−1))).",
          center: true,
        },
        {
          type: "text",
          text: "• Excessive: When the same subproblems are solved many times (like in the basic Fibonacci calculation), making it slow and memory-intensive.",
          center: true,
        },

        { type: "semibold", text: "Pros and Cons : " },

        {
          type: "important",
          text: "• Advantages : ",
          desc: "Simple and elegant for certain problems (like Tower of Hanoi or tree traversals).",
        },
        {
          type: "important",
          text: "• Disadvantages : ",
          desc: "Uses more memory and time because the computer must manage many function calls using a Stack.",
        },

        {
          type: "text",
          text: "⟹ Recursion is powerful but should be used carefully with an appropriate base case to prevent infinite loops.",
          center: true,
        },

        { type: "bold", text: "Tower of Hanoi (TOH) : " },

        {
          type: "text",
          text: "•  This is a classic puzzle that is perfectly solved using Recursion (and uses a Stack data structure internally).",
        },

        { type: "semibold", text: "The Goal : " },
        {
          type: "text",
          text: "•  Move a stack of N disks from a starting tower (Source) to an ending tower (Destination) using a third tower (Temporary).",
        },

        { type: "semibold", text: "The Rules : " },
        { type: "text", text: "• Only one disk can be moved at a time." },
        {
          type: "text",
          text: "• A larger disk can never be placed on top of a smaller disk.",
        },

        { type: "semibold", text: "Solution Logic (The Recursion) : " },
        {
          type: "text",
          text: "• Move the top N−1 disks from Source to Temporary.",
        },
        {
          type: "text",
          text: "• Move the largest disk (the Nth) from Source to Destination.",
        },
        {
          type: "text",
          text: "• Move the N−1 disks from Temporary to Destination.",
        },

        {
          type: "important",
          text: "• Total Moves : ",
          desc: "The solution requires 2^N − 1 moves.",
        },

        {
          type: "bold",
          text: " Validity of Expression (Parenthesis Checking) : ",
        },
        {
          type: "text",
          text: "• This uses a Stack to check if parentheses, brackets, and braces in an expression are correctly matched (e.g., {(A+B)} is valid, but {(A+B)}] is invalid).",
        },

        { type: "semibold", text: "How it Works : " },
        { type: "text", text: "• Scan the expression from left to right." },
        {
          type: "text",
          text: "• When an opening delimiter is found ((, {, [), push it onto the stack.",
        },
        {
          type: "text",
          text: "• When a closing delimiter is found (), }, ]) : ",
        },
        {
          type: "text",
          text: "   – Pop the top element from the stack.",
          center: true,
        },
        {
          type: "text",
          text: "   – If the popped element doesn't match the closing delimiter, or if the stack was empty, the expression is invalid.",
          center: true,
        },
        {
          type: "text",
          text: "• After scanning the whole expression, if the stack is empty, the expression is valid; otherwise, it's invalid.",
        },

        {
          type: "important",
          text: "⟹ Tower of Hanoi and Parenthesis Checking both use recursion and stack principles effectively.",
          center: true,
        },
        { type: "bold", text: " Trees : " },
        {
          type: "text",
          text: "• A Tree is a non-linear data structure used to represent data in a hierarchical way (like a family tree or a company organization chart).",
        },
        {
          type: "table",
          headers: ["Term", "Simple Explanation", "Analogy"],
          rows: [
            [
              "Root",
              "The very top node.",
              "The trunk of a tree from which all branches grow.",
            ],
            [
              "Parent / Child",
              "A node above is the parent; a node below is the child.",
              "Parent and child in a family.",
            ],
            [
              "Leaf",
              "A node with no children.",
              "A person with no descendants.",
            ],
            [
              "Edge",
              "The link connecting two nodes.",
              "The rope or path connecting two people in a family tree.",
            ],
            [
              "Sibling",
              "Nodes that share the same parent.",
              "Brothers and sisters in a family.",
            ],
            [
              "Degree of Node",
              "The number of children a node has.",
              "How many direct descendants someone has.",
            ],
            [
              "Depth of Node",
              "Steps from the Root down to this node.",
              "Your floor level if ground floor (Root) is 0.",
            ],
            [
              "Height of Node",
              "Longest path from this node down to a Leaf.",
              "The tallest child or grandchild you have.",
            ],
            [
              "Subtree",
              "A node and all its descendants.",
              "A branch treated as a smaller tree.",
            ],
          ],
        },

        { type: "bold", text: "Binary Tree:" },
        {
          type: "text",
          text: "• A special type of tree where every node can have a maximum of two children (a left child and a right child).",
        },
        { type: "semibold", text: " • Representation : " },
        {
          type: "text",
          text: "   • Can be done using Arrays (good if the tree is full, but wastes space if it's sparse).",
          center: true,
        },

        {
          type: "text",
          text: "  • Can be done using Linked Lists (each node has pointers to its left and right child).",
          center: true,
        },

        { type: "semibold", text: "Types of Binary Trees  : " },

        {
          type: "table",
          headers: ["Type of Binary Tree", "Simple Explanation"],
          rows: [
            [
              "Full / Strict",
              "Every node has either zero children (a leaf) or two children. No node has only one child.",
            ],
            [
              "Perfect",
              "A Full tree where all leaf nodes are at the same level. Completely symmetrical and filled.",
            ],
            [
              "Complete",
              "Filled level-by-level, left to right. All levels except possibly the last are full; last level is packed left.",
            ],
            [
              "Skewed",
              "A lopsided tree where each node has only one child (always left or right), forming a straight line.",
            ],
          ],
        },

        { type: "semibold", text: "Tree Traversal : " },
        {
          type: "text",
          text: "• The process of visiting every node in the tree exactly once.",
        },
        { type: "important", text: "  The three main methods are :   " },

        {
          type: "text",
          text: "• Inorder: Left → Root → Right (often gives sorted output in a BST).",
        },
        {
          type: "text",
          text: "• Preorder: Root → Left → Right (used to copy a tree).",
        },
        {
          type: "text",
          text: "• Postorder: Left → Right → Root (used to delete a tree).",
        },

        { type: "semibold", text: "Binary Search Tree (BST) : " },
        { type: "text", text: "A Binary Tree with a rule : " },
        {
          type: "text",
          text: "• All values in the left subtree must be less than the parent's value.",
          center: true,
        },
        {
          type: "text",
          text: "• All values in the right subtree must be greater than the parent's value.",
          center: true,
        },
        {
          type: "text",
          text: "⟹ This makes searching, insertion, and deletion very efficient.",
        },

        { type: "semibold", text: "Balanced Binary Tree (e.g., AVL Tree) : " },
        {
          type: "text",
          text: "• A BST that keeps itself balanced to ensure the tree doesn't become too tall and slow. It achieves balance by performing rotations during insertion and deletion.",
        },

        { type: "semibold", text: "AVL Tree (Self-Balancing Tree) : " },
        { type: "important", text: "What it is:" },
        {
          type: "text",
          text: "• A special type of Binary Search Tree (BST) that constantly checks its own balance.",
        },
        { type: "important", text: "How it Works:" },
        {
          type: "text",
          text: "• It measures the difference in Height between its left and right subtrees. If the difference is too large (more than 1), the AVL tree automatically performs a set of corrective operations called rotations to re-organize the nodes.",
        },
        { type: "important", text: "Goal:" },
        {
          type: "text",
          text: "• To prevent the tree from becoming too tall and slow (skewed), guaranteeing that searching and access remain very fast, even in the worst case.",
        },

        { type: "semibold", text: "Multiway Search Tree (e.g., B-Tree) : " },
        { type: "important", text: "What it is : " },
        {
          type: "text",
          text: "• A tree where each node can have many children (more than two), which makes the tree very 'bushy' and shallow.",
        },
        { type: "important", text: "How it Works:" },
        {
          type: "text",
          text: "• Each node holds many data items (keys) and many pointers to its children.",
        },
        { type: "important", text: "Goal:" },
        {
          type: "text",
          text: "• To minimize the number of steps (levels) needed to find data. This is crucial for disk-based databases, where reading data from a hard drive is very slow. By keeping the tree shallow, it minimizes the number of slow disk reads required.",
        },

        { type: "semibold", text: "Huffman Tree : " },
        {
          type: "text",
          text: " • A special tree used for data compression. It assigns shorter binary codes to characters that appear more frequently, leading to smaller file sizes.",
        },

        {
          type: "important",
          text: "⟹ Trees like AVL, B-Tree, and Huffman Tree each serve unique purposes — from balancing and optimizing search to compressing data efficiently.",
        },
      ],
    },
    {
      subname:
        "7.2 Sorting, Searching, and Graphs: Types of sorting: internal and external; Insertion and Selection sort; Exchange sort; Merge and Radix sort; Shell sort; Heap sort as a priority queue; Big ‘O’ notation and efficiency of sorting; Search techniques: Sequential search, Binary search and Tree search; General search tree; Hashing: Hash function and hash tables, and Collision resolution technique; Undirected and Directed Graphs, Representation of Graph, Transitive closure of graph, Warshall’s algorithm, Depth First Traversal (DFT) and Breadth First Traversal (BFT) of Graph, Topological sorting (Depth first, Breadth first), Minimum spanning trees (Prim’s, Kruskal’s and Round-Robin algorithms), Shortest-path algorithm (Greedy algorithm and Dijkstra’s Algorithm).",
      blocks: [
        { type: "bold", text: "Sorting Fundamentals : " },

        {
          type: "text",
          text: "• Sorting is simply the process of arranging data (like numbers or names) into a specific order, most commonly numerical or alphabetical.",
        },

        { type: "semibold", text: "Why we sort : " },

        {
          type: "important",
          text: "• Search Optimization:",
          desc: "It makes finding data extremely fast (e.g., finding a word in a sorted Dictionary).",
        },
        {
          type: "important",
          text: "• Readability:",
          desc: "It presents data in a useful, organized way (e.g., contacts in a Telephone Directory).",
        },

        {
          type: "text",
          text: "⟹ Sorting helps in organizing data efficiently, improving both speed and clarity of information.",
          center: true,
        },

        { type: "semibold", text: "Types of Sorting (Where the Data Is)" },
        {
          type: "table",
          headers: ["Type", "Simple Explanation", "Example"],
          rows: [
            [
              "Internal Sorting",
              "All data fits in main memory (RAM).",
              "Insertion Sort, Bubble Sort",
            ],
            [
              "External Sorting",
              "Data is too large for RAM and stored on disk.",
              "External Merge Sort",
            ],
          ],
        },
        {
          type: "semibold",
          text: "Sorting Classifications (The 'Rules' of the Sort) : ",
        },
        {
          type: "text",
          text: "• These terms describe how a sorting algorithm works and what resources it uses.",
        },
        {
          type: "table",
          headers: ["Classification", "Simple Explanation", "Example"],
          rows: [
            [
              "In-Place",
              "Sorts data in the same array with little extra memory.",
              "Bubble Sort, Insertion Sort",
            ],
            [
              "Not In-Place",
              "Needs extra memory space for sorting.",
              "Merge Sort",
            ],
            [
              "Stable",
              "Keeps the order of identical elements the same.",
              "Merge Sort",
            ],
            [
              "Not Stable",
              "Doesn’t keep the order of identical elements.",
              "Quick Sort, Selection Sort",
            ],
            [
              "Adaptive",
              "Faster if data is already partly sorted.",
              "Insertion Sort (Best Case: O(n))",
            ],
            [
              "Non-Adaptive",
              "Ignores existing order; time stays the same.",
              "Selection Sort",
            ],
          ],
        },
        {
          type: "bold",
          text: "1. Basic O(n²) Sorting Algorithms (The Simple, But Slow Methods)",
        },
        {
          type: "text",
          text: " • These algorithms are simple to implement but slow for large data sets because they use nested loops, leading to O(n²) time complexity.",
        },

        { type: "semibold", text: "A. Insertion Sort : " },
        { type: "text", text: " • Analogy : Sorting a hand of cards." },
        {
          type: "text",
          text: " • Concept : Start with one card (sorted list) and insert each next card into its correct position.",
        },
        {
          type: "important",
          text: " • Key Feature : ",
          desc: "Maintains a sorted sub-list and inserts unsorted elements one by one.",
        },

        { type: "semibold", text: "B. Selection Sort : " },
        {
          type: "text",
          text: " • Analogy : Picking the MVP (Most Valuable Player).",
        },
        {
          type: "text",
          text: " • Concept : Finds the minimum value in the unsorted list and swaps it with the first element of the unsorted section.",
        },
        {
          type: "important",
          text: " • Key Feature : ",
          desc: "Few swaps, but many comparisons.",
        },

        { type: "semibold", text: "C. Bubble Sort : " },
        { type: "text", text: " • Analogy : Bubbles rising in water." },
        {
          type: "text",
          text: " • Concept : Compares adjacent elements and swaps them if in the wrong order; largest elements ‘bubble up’ to the end.",
        },

        { type: "semibold", text: "D. Exchange Sort : " },
        {
          type: "text",
          text: " • Concept : Like Bubble Sort, but compares the first element with every other and swaps if needed.",
        },

        {
          type: "bold",
          text: "2. Advanced O(nlogn) Sorting Algorithms (The Efficient Methods) : ",
        },
        {
          type: "text",
          text: " • These use the Divide and Conquer principle, making them much faster for large data sets.",
        },

        {
          type: "semibold",
          text: "A. Quick Sort (Partition Exchange Sort) : ",
        },
        {
          type: "text",
          text: " • Concept : Chooses a pivot and partitions the array so smaller elements go left, larger go right; repeats recursively.",
        },
        {
          type: "important",
          text: " • Key Feature : ",
          desc: "In-Place and very fast (average O(nlogn)).",
        },

        { type: "semibold", text: "B. Merge Sort : " },
        {
          type: "text",
          text: " • Concept : Splits the list into single-element sub-lists, then merges them in sorted order until one sorted list remains.",
        },
        {
          type: "important",
          text: " • Key Feature : ",
          desc: "Not In-Place, but Stable and guarantees O(nlogn) even in the worst case.",
        },

        { type: "bold", text: "3. Specialty Sorting Algorithms" },

        { type: "semibold", text: "A. Radix Sort (Digit by Digit) : " },
        {
          type: "text",
          text: " • Concept : Non-comparison sort that processes digits from least to most significant.",
        },
        {
          type: "important",
          text: " • Key Feature : ",
          desc: "Very fast for numbers and strings; can outperform O(nlogn) sorts in special cases.",
        },

        { type: "semibold", text: "B. Shell Sort : " },
        {
          type: "text",
          text: " • Concept : Improved Insertion Sort that first sorts elements far apart, then gradually reduces the gap.",
        },
        {
          type: "important",
          text: " • Key Feature : ",
          desc: "Moves small items long distances early, improving efficiency.",
        },

        { type: "semibold", text: "C. Heap Sort and Heap Structure : " },
        {
          type: "important",
          text: " • Heap :  ",
          desc: " A complete binary tree where each parent is larger (Max Heap) or smaller (Min Heap) than its children. ",
        },
        {
          type: "important",
          text: " • Heap Sort : ",
          desc: " Builds a Max Heap, swaps the root with the last element, removes it, and repeats until sorted. ",
        },
        {
          type: "important",
          text: " • Priority Queue",
          desc: "Heap efficiently supports Priority Queue where the highest-priority element (largest in Max Heap) is always served first.",
        },

        {
          type: "important",
          text: "⟹ These sorting algorithms vary in speed, memory usage, and stability — the right one depends on your data and use case.",
          center: true,
        },
        {
          type: "semibold",
          text: " Time And Space Complexity Of Sorting Algorithms :  ",
        },
        {
          type: "table",
          headers: [
            "Sorting Algorithm",
            "Best Case Time",
            "Average Case Time",
            "Worst Case Time",
            "Space Complexity",
          ],
          rows: [
            ["Insertion Sort", "O(n)", "O(n²)", "O(n²)", "O(1) (In-Place)"],
            ["Selection Sort", "O(n²)", "O(n²)", "O(n²)", "O(1) (In-Place)"],
            ["Bubble Sort", "O(n)", "O(n²)", "O(n²)", "O(1) (In-Place)"],
            ["Exchange Sort", "O(n²)", "O(n²)", "O(n²)", "O(1) (In-Place)"],
            ["Quick Sort", "O(nlogn)", "O(nlogn)", "O(n²)", "O(logn) to O(n)"],
            [
              "Merge Sort",
              "O(nlogn)",
              "O(nlogn)",
              "O(nlogn)",
              "O(n) (Not In-Place)",
            ],
            ["Radix Sort", "O(nk)", "O(nk)", "O(nk)", "O(n + k)"],
            [
              "Shell Sort",
              "O(nlogn)",
              "Varies (e.g., O(n^(4/3)))",
              "O(n²)",
              "O(1) (In-Place)",
            ],
            [
              "Heap Sort",
              "O(nlogn)",
              "O(nlogn)",
              "O(nlogn)",
              "O(1) (In-Place)",
            ],
          ],
        },
        {
          type: "text",
          text: " • The k represents the number of digits or the length of the keys.  ",
        },

        { type: "bold", text: "Introduction to Searching (Finding Data) : " },
        {
          type: "text",
          text: "• Searching is the process of finding the location of a specific piece of data (like a name or number) within a larger collection.",
        },
        {
          type: "table",
          headers: ["Type", "What It Means", "Simple Example"],
          rows: [
            [
              "Internal Searching",
              "All data fits in main memory (RAM).",
              "Searching a short contact list on your phone.",
            ],
            [
              "External Searching",
              "Data is too large for RAM and stored on disk.",
              "Searching a giant database, like the entire internet.",
            ],
          ],
        },
        { type: "bold", text: "Measuring Search Speed (Complexity) : " },
        {
          type: "text",
          text: "• The complexity of a search algorithm is measured by how many comparisons (steps) it takes to find the item, relative to the list size (n).",
        },

        {
          type: "important",
          text: "• Best Case : ",
          desc: " The element is found in the very first comparison. ",
        },
        {
          type: "important",
          text: "• Worst Case : ",
          desc: " The element is found at the very end of the list, or not found at all — representing the maximum time the search will take. ",
        },
        {
          type: "important",
          text: "• Average Case : ",
          desc: "  The typical number of comparisons required for a random input.",
        },

        {
          type: "semibold",
          text: "Linear Search (The Simple, Step-by-Step Check) : ",
        },
        {
          type: "text",
          text: "• Linear Search (or Sequential Search) is the simplest search method.",
        },
        {
          type: "text",
          text: "• How it works: Start at the beginning and check each item one by one until you find the target.",
        },
        {
          type: "important",
          text: "• Pro : ",
          desc: "Works on both sorted and unsorted lists.",
        },
        {
          type: "important",
          text: "• Con :",
          desc: "Very slow for large lists.",
        },
        {
          type: "important",
          text: "Complexity : ",
          desc: "Worst Case: O(n) — you might have to check all n items.",
        },

        {
          type: "semibold",
          text: "Binary Search (The Divide and Conquer Method) : ",
        },
        {
          type: "text",
          text: "• Binary Search is much faster but requires the data to be sorted.",
        },
        { type: "important", text: "• How it works : " },
        {
          type: "text",
          text: "   - Look at the middle element of the list.",
          center: true,
        },
        {
          type: "text",
          text: "   - If it matches the target, stop.",
          center: true,
        },
        {
          type: "text",
          text: "   - If the target is larger, ignore the first half.",
          center: true,
        },
        {
          type: "text",
          text: "   - If the target is smaller, ignore the second half.",
          center: true,
        },
        {
          type: "text",
          text: "   - Repeat the process on the remaining half until found.",
          center: true,
        },
        {
          type: "text",
          text: "• Analogy: Like finding a name in a dictionary — you skip large sections quickly.",
          center: true,
        },
        {
          type: "important",
          text: "• Complexity",
          desc: "Worst Case: O(logn) — search time grows slowly since the list is halved each step.",
          center: true,
        },

        { type: "semibold", text: "3. Hashing (The Direct Jump) : " },
        {
          type: "text",
          text: "• Hashing provides direct access using a hash function to calculate the data’s memory address.",
        },
        {
          type: "important",
          text: "• How it works : ",
          desc: " A Hash Function takes the key and computes its memory address (Hash Value) instantly.",
        },
        {
          type: "important",
          text: "• Ideal Complexity :",
          desc: "O(1) — constant time; only one step regardless of list size.",
        },

        { type: "semibold", text: "The Hashing Problem: Collision : " },
        {
          type: "text",
          text: "• A Collision occurs when two or more items are assigned the same memory address by the hash function.",
        },
        { type: "semibold", text: "• Collision Resolution Techniques" },
        {
          type: "text",
          text: "• Since two items can't share the same spot, alternate locations are used:",
        },

        { type: "semibold", text: "A. Chaining" },
        {
          type: "text",
          text: "• Uses a Linked List at each address to store multiple items that hash to the same location.",
        },
        {
          type: "text",
          text: "• All collided items are linked together, so the hash table never overflows.",
        },

        { type: "semibold", text: "B. Open Addressing (Probing)" },
        {
          type: "text",
          text: "• If the calculated spot is full, probe (search) for the next empty spot in the main hash table.",
        },
        {
          type: "text",
          text: "• Linear Probing: Check nearby spots (address + 1, +2, ...).",
        },
        {
          type: "text",
          text: "• Quadratic Probing: Check spots farther away (address + 1², +2², ...), reducing clustering.",
        },

        {
          type: "text",
          text: "⟹ Searching methods vary in speed, memory use, and complexity — choosing the right one depends on the data size and structure.",
          center: true,
        },

        { type: "bold", text: "Graphs: The Structure of Connections : " },
        {
          type: "text",
          text: "• A Graph is a mathematical structure used to represent relationships between objects. It consists of:",
        },

        {
          type: "important",
          text: "• Vertices (or Nodes) : ",
          desc: " The objects (like cities, people, or computers). ",
        },
        {
          type: "important",
          text: "• Edges : ",
          desc: " The connections or relationships between the vertices (like roads, friendships, or cables). ",
        },

        { type: "semibold", text: "Undirected vs. Directed Graphs : " },
        {
          type: "table",
          headers: ["Type", "Simple Explanation", "Analogy"],
          rows: [
            [
              "Undirected Graph",
              "Two-way connection; A ↔ B.",
              "A two-way street or a friendship.",
            ],
            [
              "Directed Graph",
              "One-way connection; A → B only.",
              "A one-way street or following someone on social media.",
            ],
          ],
        },

        {
          type: "semibold",
          text: "Representation of Graph (How to Store a Graph in a Computer) : ",
        },

        { type: "semibold", text: "Adjacency Matrix (Table) : " },
        {
          type: "text",
          text: "• Concept: Uses a matrix where rows and columns represent nodes.",
        },
        {
          type: "text",
          text: "• Value: A 1 (or edge weight) means a connection exists; 0 means no connection.",
        },
        {
          type: "important",
          text: "•Best for : ",
          desc: "Dense graphs and quick edge lookups.",
        },

        { type: "semibold", text: "Adjacency List (List of Neighbors) : " },
        {
          type: "text",
          text: "• Concept: Each node keeps a list of its directly connected nodes.",
        },
        {
          type: "text",
          text: "• Value: Node A’s list might contain B and C if connected.",
        },
        {
          type: "important",
          text: "• Best for : ",
          desc: "Sparse graphs and exploring neighbors efficiently.",
        },

        {
          type: "semibold",
          text: "Graph Traversal: Exploring the Landscape : ",
        },
        {
          type: "text",
          text: "• Traversal means visiting every node in a graph systematically.",
        },

        { type: "semibold", text: "1. Depth First Traversal (DFT) : " },
        {
          type: "text",
          text: "• Analogy : Go deep first — like exploring a cave fully before backtracking.",
        },
        {
          type: "text",
          text: "• How it works : Start at a node, follow one path deeply until you hit a dead end, then backtrack.",
        },
        {
          type: "important",
          text: "• Structure : ",
          desc: "Uses a Stack (Last-In, First-Out).",
        },

        { type: "semibold", text: "2. Breadth First Traversal (BFT) : " },
        {
          type: "text",
          text: "• Analogy : Explore nearby first — like checking all houses on your street before moving farther.",
        },
        {
          type: "text",
          text: "• How it works : Visit all immediate neighbors first, then their neighbors, level by level.",
        },
        {
          type: "important",
          text: "• Structure : ",
          desc: "Uses a Queue (First-In, First-Out).",
        },

        { type: "bold", text: "Reachability and Ordering : " },

        { type: "semibold", text: "Transitive Closure of a Graph : " },
        {
          type: "text",
          text: "• Concept : Determines if there’s any path from one node to another, possibly through several stops.",
        },
        {
          type: "text",
          text: "• Result : A matrix showing for each pair (i, j) whether i can reach j.",
        },

        { type: "semibold", text: "Warshall’s Algorithm : " },
        {
          type: "text",
          text: "• Concept : Efficiently computes transitive closure by considering all intermediate nodes (k) one by one.",
        },
        {
          type: "important",
          text: "• Result : ",
          desc: "After execution, shows all reachable nodes from every node.",
        },

        { type: "semibold", text: "Topological Sorting (Ordering Tasks) : " },
        {
          type: "text",
          text: "• Concept : Linear ordering of nodes in a Directed Acyclic Graph (DAG) such that A → B means A comes before B.",
        },
        {
          type: "text",
          text: "• Analogy : Like creating a course schedule — 'Calculus I' before 'Calculus II'.",
        },
        {
          type: "text",
          text: "• Methods : Can use modified Depth First Search or Kahn’s algorithm (based on nodes with no incoming edges).",
        },

        {
          type: "semibold",
          text: "Network Optimization: Efficiency and Cost : ",
        },
        {
          type: "text",
          text: "Used on weighted graphs where edges have costs, distances, or times.",
        },

        { type: "semibold", text: "Minimum Spanning Trees (MST) : " },
        {
          type: "text",
          text: "• Concept : Connects all nodes using the smallest possible total edge weight without cycles.",
        },
        {
          type: "important",
          text: "• Use Case : ",
          desc: "Designing efficient networks like roads, electricity grids, or data cables.",
        },

        {
          type: "text",
          text: "⟹ Graphs model relationships, paths, and dependencies — forming the backbone of many real-world systems like maps, networks, and social media.",
          center: true,
        },

        {
          type: "table",
          headers: ["Algorithm", "How it Works (Strategy)", "Analogy"],
          rows: [
            [
              "Prim's Algorithm",
              "Starts with one node and keeps adding the smallest edge that connects the current tree to a new node.",
              "Starting from your house and gradually adding the cheapest connection to a neighbor.",
            ],
            [
              "Kruskal's Algorithm",
              "Selects the smallest edge in the whole graph each time, adding it if it doesn’t form a cycle.",
              "Picking the cheapest cables one by one across the entire area, no matter where they start.",
            ],
            [
              "Round-Robin Algorithm",
              "A less common or parallel approach that distributes edge selection in a cyclic order.",
              "Distributing connections one by one to each node in turns, like a round-robin schedule.",
            ],
          ],
        },
        {
          type: "semibold",
          text: "Shortest-Path Algorithm 🗺️",
        },
        {
          type: "text",
          text: "Used to find the path with the minimum total weight (cost) from a starting node to all others. It often uses a greedy approach — choosing the best-looking option at each step.",
        },
        {
          type: "table",
          headers: ["Algorithm", "Concept", "How it Works", "Analogy"],
          rows: [
            [
              "Dijkstra’s Algorithm",
              "Finds the shortest path from one starting node to all others in a weighted graph (no negative edges).",
              "Keeps track of the nearest unvisited node, fixes its distance, and updates neighbors until all nodes are covered.",
              "Like a GPS finding the shortest route from your location to all major destinations.",
            ],
          ],
        },
      ],
    },
    {
      subname:
        "7.3 Introduction to Data Models, Normalization, and SQL: Data Abstraction and Data Independence, Schema and Instances, E-R Model, Strong and Weak Entity Sets, Attributes and Keys, and E-R Diagram; Different Normal Forms (1st, 2nd, 3rd, BCNF); Functional Dependencies, Integrity Constraints and Domain Constraints; Relations (Joined, Derived); Queries under DDL and DML Commands; Views, Assertions and Triggering; Relational Algebra, Query Cost Estimation, Query Operations, Evaluation of Expressions, Query Optimization, and Query Decomposition.",
      blocks: [
        { type: "bold", text: "Introduction To DBMS : " },

        {
          type: "important",
          text: " Database :  ",
          desc: "  A database is a place where data is stored, organized, and managed so it can be easily accessed, updated, and used later. ",
        },

        {
          type: "important",
          text: " Database Management System :  ",
          desc: "  A DBMS is a software system that helps you manage a database, which is a collection of related data (like a table). It acts as an interface, letting users store, retrieve, and manipulate data efficiently.  ",
        },

        { type: "semibold", text: "1. Main Functions of DBMS : " },

        {
          type: "important",
          text: " • Data Storage : ",
          desc: "Saves large amounts of data safely.",
        },
        {
          type: "important",
          text: " • Data Retrieval : ",
          desc: "Helps you quickly find and use the data you need.",
        },
        {
          type: "important",
          text: " • Data Update : ",
          desc: "Allows you to change or delete old data easily.",
        },
        {
          type: "important",
          text: " • Access Control : ",
          desc: "Keeps unauthorized people from seeing or changing data.",
        },
        {
          type: "important",
          text: " • Backup & Recovery :",
          desc: " Keeps a copy of data safe and can restore it if something goes wrong.",
        },

        { type: "semibold", text: "2. Components of DBMS : " },
        {
          type: "important",
          text: " • Hardware : ",
          desc: "The physical devices (computers, storage drives).",
        },
        {
          type: "important",
          text: " • Software : ",
          desc: "The DBMS program itself (like MySQL, Oracle).",
        },
        {
          type: "important",
          text: " • Data : ",
          desc: "The information stored in the database.",
        },
        {
          type: "important",
          text: " • Users : ",
          desc: "The people who use the system (e.g., admins, developers, end users).",
        },
        {
          type: "important",
          text: " • Procedures : ",
          desc: "The rules or steps for using and managing the database.",
        },

        { type: "semibold", text: "3. Types of DBMS : " },

        {
          type: "important",
          text: " a. Hierarchical DBMS : ",
          desc: "Data stored in a tree-like structure.",
        },
        {
          type: "important",
          text: " b. Network DBMS : ",
          desc: "Data connected in a graph structure.",
        },
        {
          type: "important",
          text: " c. Relational DBMS (RDBMS) : ",
          desc: "Data stored in tables (most common).",
        },
        {
          type: "important",
          text: " d. Object-Oriented DBMS : ",
          desc: "Stores data as objects (used in programming).",
        },

        {
          type: "importnat",
          text: " Examples of DBMS : ",
          desc: "MySQL, Oracle, Microsoft Access, PostgreSQL, MongoDB",
        },
        {
          type: "important",
          text: "• Reduces data duplication : ",
          desc: "Avoids storing the same data in multiple places.",
        },
        {
          type: "important",
          text: "• Ensures data security : ",
          desc: "Protects data from unauthorized access.",
        },
        {
          type: "important",
          text: "• Makes data sharing easier : ",
          desc: "Multiple users can access data safely.",
        },
        {
          type: "important",
          text: "• Provides data consistency : ",
          desc: "Keeps all data accurate and up to date.",
        },
        {
          type: "important",
          text: "• Enables backup and recovery : ",
          desc: "Allows restoring data if it’s lost or damaged.",
        },

        { type: "bold", text: "Data Abstraction and Independence : " },

        {
          type: "text",
          text: "• Data Abstraction hides complex internal details and shows only the necessary features.",
        },
        { type: "semibold", text: "There are three levels : " },

        { type: "semibold", text: "1. Physical Level : " },
        {
          type: "text",
          text: "• The lowest level; concerned with how data is actually stored on the disk.",
        },

        { type: "semibold", text: "2. Logical Level : " },
        {
          type: "text",
          text: "• Defines the database's structure (tables, fields, relationships).",
        },

        { type: "semibold", text: "3. View Level : " },
        {
          type: "text",
          text: "• The highest level; how the data is presented to the user (simplified and customized).",
        },

        { type: "bold", text: "Data Independence : " },

        {
          type: "text",
          text: "• Data Independence is the ability to change one level of the database without affecting another.",
        },

        { type: "semibold", text: "1. Physical Data Independence : " },
        {
          type: "text",
          text: "• Changing the storage device or file organization doesn't affect the logical structure (tables).",
        },

        { type: "semibold", text: "2. Logical Data Independence : " },
        {
          type: "text",
          text: "• Changing the logical structure (like adding a column to a table) doesn't affect the physical storage.",
        },

        { type: "bold", text: "Schema and Instances : " },

        { type: "semibold", text: "1. Schema : " },
        {
          type: "text",
          text: "• Schema is the overall design or structure of a database.",
        },
        {
          type: "text",
          text: "• It defines how data is organized, including tables, fields, and relationships.",
        },
        {
          type: "text",
          text: "• Example: The layout of a 'Student' table with columns like ID, Name, and Age.",
        },

        { type: "semibold", text: "2. Instance : " },
        {
          type: "text",
          text: "• Instance refers to the actual data stored in the database at a specific moment.",
        },
        {
          type: "text",
          text: "• It represents the current state or snapshot of the database.",
        },
        {
          type: "text",
          text: "• Example: The actual student records present inside the 'Student' table.",
        },

        {
          type: "important",
          text: "⟹ Schema = Design of Database,  Instance = Data in Database.",
        },

        { type: "bold", text: "Entity Relationship (ER) Model : " },

        {
          type: "text",
          text: "• The ER Model is used to visually represent the structure of a database.",
        },
        {
          type: "text",
          text: "• It shows how entities (real-world objects) are related to each other through relationships.",
        },
        {
          type: "text",
          text: "• It helps in database design before actual implementation.",
        },

        { type: "semibold", text: "Main Components : " },
        {
          type: "important",
          text: "• Entity – ",
          desc: " An object in the real world (e.g., Student, Teacher). ",
        },
        {
          type: "important",
          text: "• Attribute –  ",
          desc: " The properties or details of an entity (e.g., Student_ID, Name, Age). ",
        },
        {
          type: "important",
          text: " • Relationship – ",
          desc: " A connection between two or more entities (e.g., Student ENROLLS in Course). ",
        },

        {
          type: "important",
          text: "⟹ ER Model = Entities + Attributes + Relationships",
        },
        { type: "image", src: ermodel },
        {
          type: "bold",
          text: "Strong and Weak Entity Sets, Attributes, and Keys : ",
        },

        { type: "semibold", text: "1. Strong Entity Set : " },
        { type: "text", text: "• A strong entity can exist independently." },
        {
          type: "text",
          text: "• It has a primary key to uniquely identify its instances.",
        },
        {
          type: "text",
          text: "• Example: Student entity with Student_ID as primary key.",
        },

        { type: "semibold", text: "2. Weak Entity Set : " },
        { type: "text", text: "• A weak entity cannot exist independently." },
        {
          type: "text",
          text: "• It depends on a strong entity and has a partial key.",
        },
        {
          type: "text",
          text: "• Identified using Partial Key + Primary Key of strong entity.",
        },
        {
          type: "text",
          text: "• Example: Dependent entity depends on Employee entity. Dependent_Name + Employee_ID uniquely identifies a dependent.",
        },

        { type: "semibold", text: "3. Attributes : " },
        {
          type: "text",
          text: "• An attribute is a property or characteristic of an entity.",
        },
        {
          type: "important",
          text: "• Simple Attribute : ",
          desc: " Cannot be divided (e.g., Name, Age), Basic single-value property.",
        },
        {
          type: "important",
          text: "• Composite Attribute : ",
          desc: " Can be divided (e.g., Full_Name → First_Name, Last_Name), Combination of sub-attributes.",
        },
        {
          type: "important",
          text: "• Derived Attribute : ",
          desc: "  Can be derived from another (e.g., Age from Date_of_Birth), Calculated property.",
        },
        {
          type: "important",
          text: "• Multivalued Attribute : ",
          desc: " Can have multiple values (e.g., Phone_Numbers), Multiple values stored for one entity.",
        },

        { type: "semibold", text: "4. Keys : " },
        {
          type: "text",
          text: "• A key is an attribute or combination that uniquely identifies an entity.",
        },
        {
          type: "important",
          text: "• Primary Key (PK) : ",
          desc: " Uniquely identifies each record (e.g., Student_ID), Main unique identifier.",
        },
        {
          type: "important",
          text: "• Candidate Key : ",
          desc: "Attribute that can be chosen as primary key (e.g., Email, Student_ID), Potential PK.",
        },
        {
          type: "important",
          text: "• Super Key : ",
          desc: "Set of attributes uniquely identifying an entity (e.g., {Student_ID, Name}), Unique identifier, may include extra attributes.",
        },
        {
          type: "important",
          text: "• Foreign Key (FK) : ",
          desc: "Links one table/entity to another (e.g., Employee_ID in Dependent entity), Maintains relationship.",
        },
        {
          type: "important",
          text: "• Composite Key : ",
          desc: " Combination of two or more attributes (e.g., {Dependent_Name, Employee_ID}), Used for weak entities.",
        },
        {
          type: "important",
          text: "• Secondary Key : ",
          desc: "Used for searching/indexing (e.g., Department in Student table), Helps fast retrieval but not unique identification.",
        },

        {
          type: "important",
          text: "⟹ Strong Entity = Independent, Weak Entity = Dependent, Keys = Unique Identifiers.",
        },
        { type: "bold", text: "SQL Commands : " },

        { type: "semibold", text: " 1. DDL – Data Definition Language : " },
        {
          type: "text",
          text: "• Used to define or modify the database structure (tables, schemas, indexes).",
        },
        {
          type: "important",
          text: "• CREATE : ",
          desc: "Create a table, database, or index.",
        },
        {
          type: "important",
          text: "• ALTER : ",
          desc: "Modify an existing table (add/delete columns).",
        },
        {
          type: "important",
          text: "• DROP : ",
          desc: "Delete a table, database, or index.",
        },
        {
          type: "important",
          text: "• TRUNCATE : ",
          desc: "Remove all records from a table (structure remains).",
        },

        { type: "semibold", text: "2. DML – Data Manipulation Language : " },
        {
          type: "text",
          text: "• Used to manipulate the data stored in tables.",
        },
        {
          type: "important",
          text: "• INSERT : ",
          desc: "Add new records to a table.",
        },
        {
          type: "important",
          text: "• UPDATE : ",
          desc: "Modify existing records.",
        },
        {
          type: "important",
          text: "• DELETE : ",
          desc: "Remove records from a table.",
        },

        { type: "semibold", text: "3. TCL – Transaction Control Language : " },
        {
          type: "text",
          text: "• Used to control transactions in the database to ensure data integrity.",
        },
        {
          type: "important",
          text: "• COMMIT : ",
          desc: "Save all changes made in the current transaction.",
        },
        {
          type: "important",
          text: "• ROLLBACK : ",
          desc: "Undo changes made in the current transaction.",
        },
        {
          type: "important",
          text: "• SAVEPOINT : ",
          desc: "Set a point to which a transaction can be rolled back.",
        },

        { type: "semibold", text: "4. DCL – Data Control Language : " },
        {
          type: "text",
          text: "• Used to control access and permissions in the database.",
        },
        {
          type: "important",
          text: "• GRANT : ",
          desc: "Give privileges to users.",
        },
        {
          type: "important",
          text: "• REVOKE : ",
          desc: "Remove privileges from users.",
        },

        { type: "bold", text: "Normalization : " },

        {
          type: "text",
          text: "• Normalization is the process of organizing data in a database to minimize redundancy and eliminate undesirable issues like Insertion, Update, and Deletion Anomalies.",
        },
        {
          type: "text",
          text: "• It involves dividing a large table into smaller, linked tables.",
        },

        { type: "semibold", text: "Normal Forms : " },
        {
          type: "table",
          headers: [
            "Normal Form",
            "Rule / Simple Rule to Follow",
            "What it Eliminates / Key Concept",
            "Dependency Type Addressed",
          ],
          rows: [
            [
              "1NF",
              "Atomic Values: Each cell in the table must contain a single, indivisible value.",
              "Repeating groups of data (columns with lists, or multiple identical rows for one entity).",
              "Simple Structure",
            ],
            [
              "2NF",
              "Must be in 1NF, plus all non-key columns must depend on the entire Primary Key (PK).",
              "Partial Dependency: A non-key column depends on only part of a composite PK.",
              "Functional Dependency (FD)",
            ],
            [
              "3NF",
              "Must be in 2NF, plus no non-key column can depend on another non-key column.",
              "Transitive Dependency: A non-key column depends on another non-key column, which in turn depends on the PK.",
              "Functional Dependency (FD)",
            ],
            [
              "BCNF (Boyce-Codd)",
              "Must be in 3NF, plus every determinant (any attribute that determines another attribute) must be a Candidate Key.",
              "More restrictive than 3NF, it catches certain dependencies involving candidate keys.",
              "Functional Dependency (FD)",
            ],
            [
              "4NF",
              "Must be in BCNF, plus the table cannot contain two or more independent, multi-valued dependencies on the same primary key.",
              "Multi-Valued Dependency (MVD): Redundancy caused by two unrelated, many-to-many relationships existing in the same table.",
              "Multi-Valued Dependency (MVD)",
            ],
            [
              "5NF",
              "Must be in 4NF, plus the table cannot be decomposed (split) into smaller tables and then perfectly re-joined without creating new, false records (a 'lossy' join).",
              "Join Dependency (JD): Redundancy where information can only be correctly recovered by joining three or more tables.",
              "Join Dependency (JD)",
            ],
          ],
        },
        { type: "semibold", text: "Objective of Normalization : " },
        {
          type: "important",
          text: "• Eliminate Data Redundancy : ",
          desc: "Avoid storing the same data in multiple places.",
        },
        {
          type: "important",
          text: "• Prevent Anomalies : ",
          desc: "Stops problems when inserting, updating, or deleting data.",
        },
        {
          type: "important",
          text: "• Organize Data Efficiently : ",
          desc: "Break large tables into smaller, well-structured tables.",
        },
        {
          type: "important",
          text: "• Ensure Data Integrity : ",
          desc: "Keep the data accurate and consistent across the database.",
        },
        {
          type: "important",
          text: "• Simplify Maintenance : ",
          desc: "Makes it easier to manage and update the database.",
        },

        { type: "bold", text: "Functional Dependencies (FDs) : " },
        {
          type: "text",
          text: "• A Functional Dependency is a relationship between two attributes in a database.",
        },
        {
          type: "text",
          text: "• Notation : A → B means if two rows have the same value for attribute A (the determinant), they must have the same value for attribute B (the dependent).",
        },
        {
          type: "text",
          text: "• Example : In a Student table, Student_ID → Student_Name because each student ID uniquely identifies a student name.",
        },

        {
          type: "bold",
          text: "Integrity Constraints and Domain Constraints : ",
        },
        {
          type: "important",
          text: "• Integrity Constraints : ",
          desc: " Rules that maintain the accuracy and consistency of data. ",
        },
        { type: "text", text: " " },
        {
          type: "important",
          text: "• Domain Constraint : ",
          desc: " Limits the values that can be stored in a column. Example: Age must be between 1 and 120.",
        },
        {
          type: "important",
          text: "• Key Constraint : ",
          desc: " Ensures uniqueness of records. Example: Primary Key ensures no duplicate entries.",
        },
        {
          type: "important",
          text: "• Referential Integrity Constraint : ",
          desc: "Ensures foreign keys match primary keys in another table. Example: Employee_ID in Dependent table must exist in Employee table.",
        },

        { type: "bold", text: "Relations (Joined and Derived) : " },
        { type: "text", text: "• Relations: Tables in a database." },
        {
          type: "important",
          text: "1. Joined Relation : ",
          desc: "Combines two or more tables based on a common attribute. Example: Joining Student and Course tables using Student_ID.",
        },
        {
          type: "important",
          text: "2. Derived Relation : ",
          desc: "Result of a query (temporary table) based on base tables. Example: A query showing only Student_Name and Course_Name is a derived relation.",
        },

        { type: "bold", text: "Views, Assertions, and Triggers : " },
        {
          type: "important",
          text: "• Views : ",
          desc: "Virtual tables created from queries; do not store data themselves. Example: A view showing only active students from a Student table.",
        },
        {
          type: "important",
          text: "• Assertions : ",
          desc: "Conditions that must always be true to enforce business rules. Example: CHECK (Salary > 0) ensures salary is never negative.",
        },
        {
          type: "important",
          text: "• Triggers : ",
          desc: "Procedures executed automatically when certain events occur. Example: When a new employee is added, trigger sends a welcome email.",
        },

        { type: "bold", text: "Relational Algebra : " },
        {
          type: "text",
          text: "• Relational Algebra is a procedural query language using operators to retrieve data.",
        },
        {
          type: "important",
          text: "• Selection (σ) : ",
          desc: "Choose rows that satisfy a condition. Example: σ salary > 10000 (Employee).",
        },
        {
          type: "important",
          text: "• Projection (π) : ",
          desc: "Choose specific columns. Example: π Student_Name (FRENCH).",
        },
        {
          type: "important",
          text: "• Rename (ρ) : ",
          desc: "Rename attributes for easier reference.",
        },
        {
          type: "important",
          text: "• Union (∪), Intersection (∩), Difference (-) : ",
          desc: "Combine or compare relations.",
        },
        {
          type: "important",
          text: "• Cartesian Product (×) : ",
          desc: "Combine every row of one table with every row of another.",
        },
        {
          type: "important",
          text: "• Join : ",
          desc: "Combine related rows from two tables based on a condition.",
        },

        { type: "bold", text: "Query Cost Estimation : " },
        {
          type: "text",
          text: "• Predicts the resources required to execute a query.",
        },
        {
          type: "text",
          text: "• Helps choose the most efficient way to get results.",
        },
        {
          type: "text",
          text: "• Factors include: number of rows, size of tables, indexing, and type of operations (join, selection).",
        },

        { type: "bold", text: "Query Operations : " },
        {
          type: "text",
          text: "• Basic operations: Selection, projection, join, union, difference.",
        },
        {
          type: "text",
          text: "• Goal: Retrieve data efficiently with minimal resource usage.",
        },

        { type: "bold", text: "Evaluation of Expressions : " },
        {
          type: "text",
          text: "• The DBMS evaluates queries step by step using relational algebra operators.",
        },
        {
          type: "text",
          text: "• Example: First select rows (σ), then project columns (π), then join tables if needed.",
        },

        { type: "bold", text: "Query Optimization : " },
        {
          type: "text",
          text: "• Process of restructuring a query to run faster and use fewer resources.",
        },
        { type: "important", text: "• Example techniques:" },
        { type: "text", text: "  • Using indexes for fast searching." },
        {
          type: "text",
          text: "  • Pushing selection operations before joins.",
        },
        { type: "text", text: "  • Avoiding unnecessary computations." },

        { type: "bold", text: "Query Decomposition : " },
        {
          type: "text",
          text: "• Breaks a complex query into smaller, simpler sub-queries.",
        },
        {
          type: "text",
          text: "• Sub-queries are executed individually, and results are combined to get the final answer.",
        },
        {
          type: "text",
          text: "• Helps in efficient query processing and optimization.",
        },
      ],
    },
    {
      subname:
        "7.4 Transaction Processing, Concurrency Control and Crash Recovery: ACID properties, Concurrent Executions, Serializability Concept, Lock-based Protocols, Deadlock handling and Prevention, Failure Classification, Recovery and Atomicity, and Log-based Recovery.",
      blocks: [
      {type: "bold", text: "Transaction : "},
  {type: "text", text: "• A transaction is a sequence of one or more operations on a database that form a single logical unit of work."},
  {type: "text", text: "• All operations in a transaction must succeed together, or fail together."},
  {type: "semibold", text: "Example : "},
  {type: "text", text: "Transferring Rs 500 from A’s account to B’s account involves:"},
  {type: "text", text: "• Deduct Rs 500 from A’s account."},
  {type: "text", text: "• Add Rs 500 to B’s account."},
  {type: "text", text: "Both steps must succeed for the transaction to be complete."},

  {type: "bold", text: "States of a Transaction : "},
  {type: "text", text: "A transaction can be in one of the following states during its lifecycle:"},

  {type: "semibold", text: "i. Active : "},
  {type: "text", text: "• The transaction is currently executing."},
  {type: "text", text: "• All operations have not yet been completed."},

  {type: "semibold", text: "ii. Partially Committed : "},
  {type: "text", text: "• The final operation has been executed, but changes are not yet permanent."},

  {type: "semibold", text: "iii. Committed : "},
  {type: "text", text: "• All operations have been successfully executed."},
  {type: "text", text: "• Changes are permanently saved in the database."},

  {type: "semibold", text: "iv. Failed : "},
  {type: "text", text: "• Some part of the transaction could not execute correctly."},
  {type: "text", text: "• Transaction cannot proceed further."},

  {type: "semibold", text: "v. Aborted : "},
  {type: "text", text: "• The transaction is rolled back due to failure or explicit cancellation."},
  {type: "text", text: "• Database returns to the state before the transaction started."},
  {type: "image", src: state},

  {type: "important", text: "Key Point : ", desc: "All operations in a transaction must either all succeed or all fail to maintain database consistency."},
  
  {type: "bold", text: "Transaction Processing : "},
  {type: "text", text: "• Transaction processing ensures that database transactions are executed efficiently, completely, and reliably, even in case of failures."},
  {type: "text", text: "• It helps maintain data consistency and integrity while allowing multiple users to access the database concurrently."},
  {type: "text", text: "• A transaction is processed as a single logical unit of work where all operations must either complete successfully or fail together."},
  
  {type: "semibold", text: "Objectives of Transaction Processing : "},
  {type: "text", text: "• To maintain database consistency."},
  {type: "text", text: "• To ensure data integrity in multi-user environments."},
  {type: "text", text: "• To recover from system failures."},
  {type: "text", text: "• To ensure all transactions are executed in a reliable and isolated manner."},

  {type: "semibold", text: "ACID Properties : "},
  {type: "text", text: "• ACID properties define the key characteristics that ensure reliable processing of database transactions."},
  {type: "text", text: "• ACID stands for Atomicity, Consistency, Isolation, and Durability."},

  {type: "semibold", text: "1. Atomicity : "},
  {type: "text", text: "• Ensures that a transaction is treated as a single unit — either all operations are executed successfully or none at all."},
  {type: "important", text: "• Example : ", desc: "If money is deducted from one account but not added to another, the transaction must be rolled back."},

  {type: "semibold", text: "2. Consistency : "},
  {type: "text", text: "• Ensures that a transaction brings the database from one valid state to another valid state."},
  {type: "important", text: "• Example : ", desc: "The total balance before and after a transfer should remain the same."},

  {type: "semibold", text: "3. Isolation : "},
  {type: "text", text: "• Ensures that transactions are executed independently and concurrently without interfering with each other."},
  {type: "important", text: "• Example : ", desc: "When two users update different accounts simultaneously, their transactions do not affect each other."},

  {type: "semibold", text: "4. Durability : "},
  {type: "text", text: "• Ensures that once a transaction is committed, its changes are permanent, even in the event of a system crash."},
  {type: "important", text: "• Example : ", desc: "Once a money transfer is confirmed, it remains recorded even after a power failure."},

  {type: "important", text: "• Summary : ", desc: "ACID properties guarantee that database transactions are processed reliably, maintaining accuracy, consistency, and data integrity."},

  {type: "text", text: "⟹ Transaction Processing and ACID properties are the backbone of reliable and secure database management systems.", center: true},

  {type: "bold", text: "Failure Classification in DBMS : "},
  {type: "text", text: "• Failures in DBMS happen due to errors, crashes, or damage that affect data or transaction processing."},
  {type: "text", text: "• These failures are grouped into types based on their cause and effect."},

  {type: "semibold", text: "1. Transaction Failure : "},
  {type: "text", text: "• When a transaction cannot finish due to errors or issues."},
  {type: "important", text: "• Example : ", desc: "Wrong input, division by zero, or deadlock."},

  {type: "semibold", text: "2. System Failure : "},
  {type: "text", text: "• When the system crashes before transactions are complete."},
  {type: "important", text: "• Example : ", desc: "Power failure or OS crash."},

  {type: "semibold", text: "3. Media Failure : "},
  {type: "text", text: "• When storage devices like hard disks are damaged and data is lost."},
  {type: "important", text: "• Example : ", desc: "Disk crash or data corruption."},

  {type: "semibold", text: "4. Communication Failure : "},
  {type: "text", text: "• When network problems cause incomplete transactions in distributed systems."},
  {type: "important", text: "• Example : ", desc: "Network disconnection or message loss."},

  {type: "semibold", text: "5. Application Software Failure : "},
  {type: "text", text: "• When program bugs or logic errors cause a transaction to fail."},
  {type: "important", text: "• Example : ", desc: "Wrong SQL query or unhandled exception."},

  {type: "important", text: "• Key Point : ", desc: "DBMS uses logs, checkpoints, and backups to recover from failures and keep data safe."},

  {type: "text", text: "⟹ Failure classification helps DBMS choose the right recovery method to protect data.", center: true},


  {type: "bold", text: "Concurrent Executions : "},
  {type: "text", text: "• In a database, multiple transactions can run at the same time — this is called concurrency."},
  {type: "text", text: "• Concurrency improves performance and resource use but may cause problems if not managed properly."},
  {type: "important", text: "Example : ", desc: "If two people update the same account balance at the same time, the final value could be wrong without control."},

  
  {type: "bold", text: "Schedules in DBMS : "},
  {type: "text", text: "• A schedule is the order in which multiple transactions (T1, T2, etc.) are executed."},
  {type: "text", text: "• It defines how operations like read, write, and commit from different transactions are arranged."},

  {type: "semibold", text: "Types of Schedules : "},

  {type: "semibold", text: "1. Serial Schedules : "},
  {type: "text", text: "• Transactions are executed one after another with no overlapping."},
  {type: "text", text: "• Only one transaction runs at a time, ensuring full isolation and safety."},
  {type: "important", text: "• Example : ", desc: "T1 → T2 (T1 finishes completely before T2 starts)."},
  {type: "text", text: " Safe and consistent, but not very efficient because it doesn’t allow concurrency."},

  {type: "semibold", text: "2. Non-Serial Schedules : "},
  {type: "text", text: "• Transactions are interleaved — operations of T1 and T2 can mix."},
  {type: "text", text: "• Increases performance but may cause data inconsistency if not controlled."},
  {type: "important", text: "• Example : ", desc: "T1 (Read) → T2 (Write) → T1 (Write)."},
  {type: "text", text: "• Non-serial schedules are further divided into two types:"},

  {type: "semibold", text: "(a) Serializable Schedules : "},
  {type: "text", text: "• These behave like serial schedules in their final outcome, even if operations are mixed."},
  {type: "text", text: "• They maintain consistency while allowing concurrency."},
  {type: "semibold", text: "Types of Serializable Schedules : "},
  {type: "important", text: " • Conflict Serializable – ",  desc : "  Transactions can be rearranged by swapping non-conflicting operations to form a serial schedule."},
  {type: "important", text: " • View Serializable – ",  desc : "  The final result (reads and writes) is the same as in some serial schedule, even if conflicts exist."},

  {type: "semibold", text: "(b) Non-Serializable Schedules : "},
  {type: "text", text: "• These do not produce the same result as any serial schedule."},
  {type: "text", text: "•  May lead to inconsistencies and violate database integrity."},

  {type: "important", text: "Key Point", desc: "Serializable schedules are preferred because they allow concurrency while keeping the database consistent."},

  {type: "text", text: "⟹ A good schedule balances concurrency and consistency to ensure correct and efficient transaction execution.", center: true},

  {type: "bold", text: "Lock-based Protocols"},
  {type: "text", text: "• Locks are used to control access to data when multiple transactions run at once."},
  {type: "text", text: "• A lock allows only one transaction to use a data item at a time, preventing conflicts."},
  {type: "semibold", text: "Types of Locks:"},
  {type: "text", text: "• Shared Lock – For reading data (many transactions can share it)."},
  {type: "text", text: "• Exclusive Lock – For writing data (only one transaction can use it)."},
  {type: "semibold", text: "2-Phase Locking (2PL) Protocol:"},
  {type: "text", text: "• Has two phases – Growing (acquiring locks) and Shrinking (releasing locks)."},
  {type: "important", text: "Goal", desc: "Ensures serializability and avoids conflicts between transactions."},

  {type: "bold", text: "Deadlock Handling and Prevention"},
  {type: "text", text: "• A deadlock happens when two or more transactions wait for each other forever because each has a resource the other needs."},
  {type: "semibold", text: "Ways to Handle Deadlock:"},
  {type: "text", text: "• Deadlock Prevention – Stop deadlock before it happens (by ordering resource requests)."},
  {type: "text", text: "• Deadlock Detection – Allow deadlocks but check and fix them when found."},
  {type: "text", text: "• Deadlock Recovery – Abort or roll back one of the transactions to break the cycle."},
  {type: "important", text: "Example", desc: "T1 locks X and waits for Y; T2 locks Y and waits for X — both are stuck."},

  {type: "bold", text: "Recovery and Atomicity"},
  {type: "text", text: "• Atomicity means a transaction is all-or-nothing — it either fully happens or not at all."},
  {type: "text", text: "• Recovery ensures the database returns to a consistent state after a crash or error."},
  {type: "text", text: "• If a failure occurs, uncompleted transactions are rolled back."},
  {type: "important", text: "Example", desc: "If a power cut occurs during a fund transfer, the system undoes all incomplete steps to keep data correct."},

  {type: "bold", text: "Log-based Recovery"},
  {type: "text", text: "• A log is a file that keeps a record of all changes made by transactions."},
  {type: "text", text: "• Each log entry has transaction ID, data item, old value, and new value."},
  {type: "semibold", text: "Types of Log Entries:"},
  {type: "text", text: "• Write Log – When data is changed."},
  {type: "text", text: "• Commit Log – When a transaction is successfully completed."},
  {type: "semibold", text: "Recovery Using Logs:"},
  {type: "text", text: "• Redo – Reapply changes of committed transactions after failure."},
  {type: "text", text: "• Undo – Roll back changes of incomplete transactions."},
  {type: "important", text: "Key Point : ", desc: "Logs help DBMS recover lost data and ensure atomicity after any kind of failure."},

  {type: "text", text: "⟹ Together, these concepts ensure safe, consistent, and reliable database operations even with multiple users and unexpected failures.", center: true}


  ],
    },
    {
      subname:
        "7.5 Introduction to Operating System and Process Management: Evolution of Operating System, Types of Operating System, Operating System Components, Operating System Structure, Operating System Services; Introduction to Process, Process description, Process states, Process control, Threads, Processes and Threads; Types of Scheduling; Principles of Concurrency, Critical Region, Race Condition, Mutual Exclusion, Semaphores and Mutex, Message Passing, Monitors, and Classical Problems of Synchronization.",
      blocks: [
        
  {type: "bold", text: "Evolution or Generations of Operating Systems"},
  {type: "text", text: "• Operating Systems have improved over time to make computers easier and faster to use."},
  {type: "text", text: "• They are divided into five main generations."},

  {type: "semibold", text: "1. First Generation (1940s–1950s):"},
  {type: "text", text: "• No real OS. Programs were run using switches and punched cards."},
  {type: "important", text: "Example", desc: "ENIAC, UNIVAC."},

  {type: "semibold", text: "2. Second Generation (1950s–1960s):"},
  {type: "text", text: "• Used Batch Systems — jobs were grouped and run one by one automatically."},
  {type: "important", text: "Example", desc: "IBM 1401, IBM 7094."},

  {type: "semibold", text: "3. Third Generation (1960s–1970s):"},
  {type: "text", text: "• Introduced Multiprogramming and Time Sharing — many users or programs could run together."},
  {type: "important", text: "Example", desc: "UNIX, IBM System/360."},

  {type: "semibold", text: "4. Fourth Generation (1970s–1990s):"},
  {type: "text", text: "• Personal computers came with Graphical User Interface (GUI)."},
  {type: "important", text: "Example", desc: "MS-DOS, Windows 95, macOS."},

  {type: "semibold", text: "5. Fifth Generation (1990s–Present):"},
  {type: "text", text: "• Modern OS with networking, internet, and mobile support."},
  {type: "text", text: "• Focus on multitasking, security, and cloud computing."},
  {type: "important", text: "Example", desc: "Windows 10/11, Linux, Android, iOS."},

  {type: "text", text: "⟹ Each generation made computers more powerful, smart, and easier to use.", center: true},

  {
  type: "table",
  headers: [
    "OS Type",
    "Simple Explanation",
    "Key Feature",
    "Example"
  ],
  rows: [
    [
      "Batch OS",
      "Jobs are collected and executed one by one without user interaction.",
      "No direct interaction during execution.",
      "Early IBM Mainframe Systems"
    ],
    [
      "Multiprogramming OS",
      "Runs multiple programs at once; CPU switches when one is waiting for I/O.",
      "Keeps CPU busy and improves system efficiency.",
      "UNIX"
    ],
    [
      "Time-sharing OS",
      "Many users share the same computer; each gets small time slots to execute.",
      "Allows multi-user interaction and resource sharing.",
      "Windows Server, UNIX"
    ],
    [
      "Distributed OS",
      "Manages a group of connected computers to perform tasks together.",
      "Multiple systems work together as one.",
      "Amoeba, LOCUS"
    ],
    [
      "Multiprocessing OS",
      "Has two or more processors that work together to execute processes.",
      "Parallel execution for faster performance.",
      "Windows, Linux"
    ],
    [
      "Multitasking OS",
      "Allows a single user to run multiple programs at the same time.",
      "Can run browser, music player, etc., together.",
      "Windows, macOS"
    ],
    [
      "Real Time OS (RTOS)",
      "Performs tasks within a fixed time; timing is critical.",
      "Used in systems like flight control and robots.",
      "VxWorks, QNX, RTLinux"
    ],
    [
      "Mobile OS",
      "Designed for mobile devices with touch interfaces.",
      "Optimized for touch and low power usage.",
      "Android, iOS"
    ]
  ]
},
  {type: "bold", text: "OS Components and Structure"},

  {type: "semibold", text: "Functions/Components of the OS : "},

  {type: "text", text: "• The OS performs several management tasks:"},

  {type: "text", text: "• Process Management"},
  {type: "text", text: "• Main Memory Management (RAM/physical memory)"},
  {type: "text", text: "• Secondary Storage Management"},
  {type: "text", text: "• I/O Device Management"},
  {type: "text", text: "• File Management"},
  {type: "text", text: "• Network Management"},
  {type: "text", text: "• Security Management"},
  {type: "text", text: "• Command Interpreter System (The main function is to get and execute the next user-specified command)"},

  {type: "semibold", text: "Structures of the OS (Kernel Types)"},

  {type: "text", text: "• The Kernel is the core part of the OS."},

  {
    type: "table",
    headers: ["Kernel Type", "Simple Description", "Pros", "Cons"],
    rows: [
      [
        "Monolithic",
        "A single, large program where all kernel services (memory, file, I/O) run together in a single address space.",
        "Good performance (since functions are invoked directly).",
        "Difficult to debug and maintain."
      ],
      [
        "Microkernel",
        "Broken down into separate processes (servers). Servers communicate using IPC (Inter-Process Communication).",
        "More reliable and secure.",
        "More overhead due to IPC."
      ],
      [
        "Hybrid Kernel",
        "Combines the benefits of both monolithic and microkernels. (Windows 7 uses this structure).",
        "Gets the benefits of both structures.",
        "Shares the disadvantages of monolithic kernels."
      ],
      [
        "Exo Kernel",
        "Reduces abstraction and allows application-level management of hardware resources.",
        "Minimal and simple design.",
        "More work for application developers."
      ]
    ]
  }
,

  {type: "bold", text: "OS Services and Processes"},

  {type: "semibold", text: "OS Services"},

  {type: "text", text: "• The OS provides various services to the user and applications:"},

  {type: "text", text: "• Program Execution"},
  {type: "text", text: "• Control Input/output devices"},
  {type: "text", text: "• Error Detection and Response (If a process fails, error information is written to a log file for debugging)"},
  {type: "text", text: "• System Calls: An interface (usually C/C++ functions like Open, Read) provided by the OS to access its services."},
  {type: "text", text: "• Spooling: Putting data from various I/O jobs into a buffer (special memory area)."},

  {type: "semibold", text: "Process vs. Thread"},
  {type: "text", text: "• A Process is a program in execution. A Thread is a segment of a process."},

  {
    type: "table",
    headers: ["Feature", "Process (Heavyweight)", "Thread (Lightweight)"],
    rows: [
      ["Definition", "A program under execution.", "A segment of a process."],
      ["Time to Stop", "Consumes maximum time to stop.", "Consumes minimum time to stop."],
      ["Context Switching", "Takes maximum time.", "Takes minimum time."],
      ["Resources", "Takes more resources.", "Takes less resources."],
      ["Isolation", "If one process is obstructed, it generally does not affect other processes.", "If one thread is obstructed, it will affect the execution of the process's other threads."]
    ]
  },

  {type: "semibold", text: "Components of a Process 💾"},
  {type: "text", text: "• When a program runs (becomes a process), it has four memory components:"},
  {type: "text", text: "• Text: The contents present in the processor’s registers, reflecting the program's current activity."},
  {type: "text", text: "• Data: Global and static variables."},
  {type: "text", text: "• Heap: Memory that is dynamically allocated to the process during execution."},
  {type: "text", text: "• Stack: Stores temporary data like function parameters, return addresses, and local variables."},

  {type: "semibold", text: "Process Life Cycle (States)"},
  {type: "text", text: "• A process moves through five general states:"},
  {type: "text", text: "• Start/New: The process is first created."},
  {type: "text", text: "• Ready: The process is waiting for the OS to assign it to a processor so it can run."},
  {type: "text", text: "• Running: The processor is executing the process's instructions."},
  {type: "text", text: "• Waiting/Wait: The process is temporarily stopped, waiting for a resource or event (like I/O completion or user input)."},
  {type: "text", text: "• Terminated/Exit: The process has finished its execution and is waiting to be removed from memory."},

  {type: "semibold", text: "Process Control Block (PCB)"},
  {type: "text", text: "• The PCB is a data structure used by the OS to manage all information about a process."},
  {type: "text", text: "• It tracks the process's execution status (state, program counter, scheduling info, open files, etc.)."},
  {type: "text", text: "• Each process is identified by a unique Process Identification Number (PID)."},

  {type: "semibold", text: "CPU Scheduling"},
  {type: "text", text: "• CPU Scheduling is the process of deciding which process in the ready queue gets assigned to the CPU for execution next. The goal is to maximize efficiency and throughput."},

  {type: "semibold", text: "Key Terminologies"},
  {type: "text", text: "• Ready Queue: A data structure holding all processes ready to be executed."},
  {type: "text", text: "• Arrival Time: The moment a process is added to the ready queue."},
  {type: "text", text: "• Burst Time: The total time a process needs to finish its execution cycle."},
  {type: "text", text: "• Throughput: System efficiency (maximizing this is a goal)."},
  {type: "text", text: "• Waiting Time: A criterion to minimize for effective scheduling."},

  {type: "semibold", text: "Scheduling Types"},
  {type: "text", text: "• Non-preemptive: A process runs without interruption until it finishes."},
  {type: "text", text: "• Preemptive: The OS can stop a running process and give the CPU to a more important task."},

  {type: "semibold", text: "Scheduling Algorithms"},

  {type: "important", text: "• First-Come, First-Served (FCFS):", desc: "Processes are served in the exact order they arrive in the ready queue."},
  {type: "text", text: "• Drawback: A long process can hold up (or 'stuck') shorter processes behind it."},

  {type: "important", text: "• Shortest Job Next (SJN):", desc: "The CPU selects the process with the smallest remaining execution time (burst time). (FCFS is used to break ties)."},
  {type: "text", text: "• Drawback: Short jobs can suffer from starvation if a continuous stream of new, even shorter jobs keeps arriving."},

  {type: "important", text: "• Round Robin (RR):", desc: "Each process gets an equal, small share of CPU time (called a quantum). If a process doesn't finish in its quantum, it is stopped and sent to the end of the queue to wait for its next turn."},
  {type: "text", text: "• Balance: Prevents starvation and provides reasonable response times."},
  {type: "text", text: "• Drawback: If the time quantum is too small, it leads to excessive context-switching overheads."},
  
  {type: "bold", text: "Concurrency and Process Types 🏃‍♀️"},

  {type: "text", text: "• Concurrency happens when multiple parts of a program, or several entire programs (called processes or threads), are running 'in parallel' (or appear to be running at the same time)."},

  {type: "semibold", text: "Why do we allow concurrency?"},
  {type: "text", text: "• There are four main benefits:"},
  {type: "text", text: "• Physical Resource Sharing: Allows multiple users or processes to share limited hardware (like the CPU or printer)."},
  {type: "text", text: "• Logical Resource Sharing: Allows multiple processes to share the same piece of information (like a shared file)."},
  {type: "text", text: "• Computation Speedup: By running tasks in parallel, the total work is completed faster."},
  {type: "text", text: "• Modularity: Dividing the system's functions into separate, manageable processes."},

  {type: "semibold", text: "Types of Processes"},
  {
    type: "table",
    headers: ["Type of Process", "Simple Explanation", "Key Property"],
    rows: [
      ["Independent Processes", "Processes that do not share any state or memory with others.", "The result of execution is always the same for the same input, and its termination won't affect others."],
      ["Cooperating Processes", "Processes that share state (memory/data) with other processes.", "The result of execution depends on the exact sequence of events and is hard to predict (Non-deterministic)."]
    ]
  },

  {type: "bold", text: "Synchronization and The Critical Section 🚧"},

  {type: "text", text: "• When processes cooperate by sharing data, you need a way to manage access to that data to prevent errors. This is called Synchronization."},

  {type: "semibold", text: "The Critical Section"},
  {type: "text", text: "• The Critical Section is a specific segment of code within a program that is responsible for accessing or modifying a shared resource (like a shared variable)."},

  {type: "semibold", text: "Mutual Exclusion"},
  {type: "text", text: "• This is the core requirement for solving the Critical Section problem. Mutual Exclusion ensures that at any given moment, only one process is allowed to be inside the Critical Section."},

  {type: "text", text: "• To properly solve the critical section problem, three conditions must be met:"},
  {type: "text", text: "• Mutual Exclusion: Only one process in the Critical Section."},
  {type: "text", text: "• Progress: If no process is in the Critical Section, and some want to enter, the choice of the next process cannot be indefinitely postponed."},
  {type: "text", text: "• Bounded Waiting: There is a limit on how many times other processes can enter the Critical Section after a process has requested entry, ensuring no process waits forever."},

  {type: "bold", text: "Synchronization Tools (Semaphores & Monitors)"},

  {type: "text", text: "• These are tools the OS uses to enforce Mutual Exclusion and synchronize cooperating processes."},

  {type: "semibold", text: "Semaphores"},
  {type: "text", text: "• A Semaphore is a simple integer variable (often named A) used for synchronization. It can only be accessed through two standard, indivisible operations: wait() and signal()."},

  {
    type: "table",
    headers: ["Semaphore Operation", "Code Effect", "Simple Action"],
    rows: [
      ["wait(A) (P-operation)", "Decreases the value of A (A--). If A becomes ≤ 0, the process is stopped and must wait.", "Used upon entry to the Critical Section to acquire a resource."],
      ["signal(A) (V-operation)", "Increases the value of A (A++).", "Used upon exit from the Critical Section to release a resource."]
    ]
  },

  {type: "semibold", text: "Types of Semaphores"},
  {type: "text", text: "• Binary Semaphore (Mutex): The integer value is either 0 or 1. It is mainly used for Mutual Exclusion."},
  {type: "text", text: "• Counting Semaphore: The integer value can range over an unrestricted domain. It is used to control access to a resource that has multiple instances."},

  {type: "semibold", text: "Monitors"},
  {type: "text", text: "• A Monitor is a higher-level synchronization tool. It provides an abstraction for controlling data access and synchronization, making it easier for programmers than using raw semaphores."},
  {type: "text", text: "• Monitors are typically implemented as programming language constructs (like classes in object-oriented languages)."},

  {type: "bold", text: "Communication and Problems"},

  {type: "semibold", text: "Message Passing"},
  {type: "text", text: "• Message Passing is a mechanism that allows processes to communicate and synchronize their actions without sharing the same address space (memory)."},
  {type: "text", text: "• Communication Speed: It is slower compared to shared memory techniques because message passing is implemented through the kernel (system calls), which is a time-consuming process."},

  {type: "semibold", text: "Classical Synchronization Problems"},
  {type: "text", text: "• These are famous, tricky scenarios used to test the effectiveness and correctness of synchronization techniques (like semaphores or monitors):"},
  {type: "text", text: "• Bounded-buffer (Producer-Consumer) Problem"},
  {type: "text", text: "• Dining-Philosophers Problem"},
  {type: "text", text: "• Readers and Writers Problem"},
  {type: "text", text: "• Sleeping Barber Problem"},

  {type: "important", text: "• Bounded-Buffer (Producer-Consumer) Problem 📦", desc: "A Producer creates items and puts them in a fixed-size Buffer. A Consumer takes them out. The Producer must wait if the buffer is full, and the Consumer must wait if it’s empty. The goal is to synchronize them to avoid data loss or crashes."},

  {type: "important", text: "• Dining-Philosophers Problem 🍝", desc: "Five philosophers share a table with five chopsticks. To eat, each needs both left and right chopsticks. If all pick up one chopstick at once, no one can eat — causing a deadlock. The goal is to find a rule that prevents deadlock and starvation."},

  {type: "important", text: "• Readers and Writers Problem 📚", desc: "A shared database can be accessed by Readers (who read data) and Writers (who modify data). Multiple readers can read together, but only one writer can write at a time. The challenge is to ensure data integrity while avoiding starvation."},

  {type: "important", text: "• Sleeping Barber Problem 💈", desc: "A barber sleeps when no customers are present. If a customer arrives and the barber is asleep, they wake him up. If the barber is busy, customers wait on chairs. If all chairs are full, new customers leave. The goal is to manage customers and the barber efficiently using synchronization."},


      ],
    },
    {
      subname:
        "7.6 Memory Management, File Systems and System Administration: Memory address, Swapping and Managing Free Memory Space, Virtual Memory Management, Demand Paging, Performance and Page Replacement Algorithms; Introduction to File, Directory and File Paths; File System Implementation, Impact of Allocation Policy on Fragmentation, Mapping File Blocks on The Disk Platter, File System Performance, Administration Tasks, User Account Management, Start and Shutdown Procedures.",
      blocks: [
        {type: "bold", text: "Memory Management Basics 🧠"},

{type: "table", headers: ["Concept", "Simple Explanation", "Key Facts"], rows: [
  ["Main Memory (RAM)", 
  "The computer’s working space where programs and information are kept while the processor is using them.", 
  "Volatile memory — loses all data when power is turned off."],

  ["Swapping (Swap In/Out)", 
  "Moving entire programs between fast RAM and slower secondary storage (hard disk).", 
  "Swap Out → Move a process to disk; Swap In → Bring it back to RAM."],

  ["Thrashing", 
  "A condition where the OS spends most time swapping pages instead of executing tasks.", 
  "Causes severe slowdown or system freeze."],

  ["Logical vs. Physical Address", 
  "CPU uses Logical (Virtual) addresses, while RAM uses Physical addresses.", 
  "Memory Management Unit (MMU) converts logical ↔ physical in real time."]
]},
{type: "bold", text: "Memory Allocation and Fragmentation"},

{type: "semibold", text: "Memory Allocation Methods"},
{type: "text", text: "When a program needs space in RAM, the OS must decide which free memory hole to assign."},
{type: "text", text: "• First Fit → Place the program in the first available hole that’s large enough."},
{type: "text", text: "• Best Fit → Place the program in the smallest hole that’s just big enough (requires full search)."},
{type: "text", text: "• Worst Fit → Place the program in the largest available hole."},

{type: "semibold", text: "Fragmentation"},
{type: "text", text: "Wasted space in memory due to programs being loaded and removed over time."},
{type: "table", headers: ["Type", "Simple Explanation", "Fix"], rows: [
  ["Internal Fragmentation", 
  "Unused space inside allocated blocks (when process gets slightly more than needed).", 
  "Reduce block size or adjust allocation unit."],

  ["External Fragmentation", 
  "Unused gaps between allocated blocks (non-contiguous free spaces).", 
  "Use compaction — move all free spaces together into one big block."]
]},
{type: "bold", text: "Page Replacement Algorithms"},
{type: "text", text: "When all frames are full, one page must be replaced to load a new one."},
{type: "text", text: "• FIFO (First In First Out): Replaces the oldest page. May cause Belady’s Anomaly."},
{type: "text", text: "• Optimal: Replaces the page not needed for the longest future time. (Best but impractical)."},
{type: "text", text: "• LRU (Least Recently Used): Removes the page not used for the longest time."},
{type: "text", text: "• MRU (Most Recently Used): Removes the newest page — opposite of LRU."},

{type: "bold", text: "File System and Disk Management 📂"},

{type: "semibold", text: "Files and File Systems"},
{type: "text", text: "• A File is a collection of related data stored on secondary storage."},
{type: "text", text: "• A File System organizes and manages how files are stored and retrieved on disk."},
{type: "text", text: "Common File Systems:"},
{type: "text", text: "• FAT → Older system (used in USB drives)."},
{type: "text", text: "• NTFS → Modern Windows file system with security & compression."},
{type: "text", text: "• ext → Common on Linux systems."},
{type: "text", text: "• APFS → Used by Apple macOS and iOS devices."},

{type: "semibold", text: "File Allocation Methods"},
{type: "text", text: "Determine how disk blocks are assigned to files."},
{type: "table", headers: ["Method", "Simple Explanation", "Pro / Con"], rows: [
  ["Contiguous", 
  "Each file occupies consecutive blocks on disk.", 
  "Fast sequential & direct access, but causes external fragmentation."],

  ["Linked", 
  "Each block contains a pointer to the next block.", 
  "Avoids fragmentation but allows only slow sequential access."],

  ["Indexed", 
  "All pointers to file blocks are stored in an index block.", 
  "Fast random access to any block."]
]},{type: "bold", text: "Disk Structure"},
{type: "text", text: "• Platters → Circular disks storing data."},
{type: "text", text: "• Tracks → Concentric circles on each platter."},
{type: "text", text: "• Sectors → Subdivisions of tracks (usually 512 bytes)."},
{type: "text", text: "• Cylinders → Set of tracks accessible without moving the read/write head."},

{type: "semibold", text: "Disk Access Speed Terms"},
{type: "text", text: "• Seek Time → Time for the head to move to the correct track."},
{type: "text", text: "• Latency → Time for platter rotation to reach the correct sector."},
,
{type: "semibold", text: "The Boot Process"},
{type: "text", text: "• POST (Power-On Self-Test): Checks if all hardware works properly after power-on."},
{type: "text", text: "• Bootstrapping: Starts OS initialization after POST."},
{type: "text", text: "• BIOS: Finds and loads the operating system into memory."},

{type: "semibold", text: "Shutdown Procedures"},
{type: "text", text: "• Proper shutdown saves data and stops processes safely."},
{type: "text", text: "• Improper shutdown can cause data loss or corruption."},
{type: "text", text: "• Use UPS to prevent data loss during power failure."},
{type: "semibold", text: "System Administration Tasks"},
{type: "text", text: "• Monitor CPU/Process utilization (e.g., 'java', 'mysql')."},
{type: "text", text: "• Identify and kill zombie processes (terminated but still listed)."},
{type: "text", text: "• Apply OS patches regularly to fix vulnerabilities."},
{type: "semibold", text: "Process/CPU Utilization"},
{type: "text", text: "• Administrators monitor active processes (like 'java' or 'mysql') to make sure they are not using excessive CPU or memory resources."},
{type: "text", text: "• This helps detect performance issues early and prevents system slowdowns or crashes."},

{type: "semibold", text: "Zombie Processes"},
{type: "text", text: "• A Zombie Process is a process that has finished execution but still remains in the process table because its parent hasn’t read its exit status."},
{type: "text", text: "• These processes waste memory and process IDs, so administrators identify and remove them to free up resources."},

{type: "semibold", text: "Patching"},
{type: "text", text: "• Patching involves updating the operating system to fix bugs, security vulnerabilities, or performance issues."},
{type: "text", text: "• Administrators apply patches promptly to keep systems secure but must test compatibility with existing applications before deployment."},


      ],
    },
  ],
};
