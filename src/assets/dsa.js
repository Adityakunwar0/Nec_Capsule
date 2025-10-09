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

  { type: "text", text: "• Sorting is simply the process of arranging data (like numbers or names) into a specific order, most commonly numerical or alphabetical." },

  { type: "semibold", text: "Why we sort : " },

  { type: "important", text: "• Search Optimization:", desc: "It makes finding data extremely fast (e.g., finding a word in a sorted Dictionary)." },
  { type: "important", text: "• Readability:", desc: "It presents data in a useful, organized way (e.g., contacts in a Telephone Directory)." },

  { type: "text", text: "⟹ Sorting helps in organizing data efficiently, improving both speed and clarity of information.", center: true },

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
{ type: "semibold", text: "Sorting Classifications (The 'Rules' of the Sort) : " },
{type: "text", text: "• These terms describe how a sorting algorithm works and what resources it uses."},
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
{ type: "bold", text: "1. Basic O(n²) Sorting Algorithms (The Simple, But Slow Methods)" },
{ type: "text", text: " • These algorithms are simple to implement but slow for large data sets because they use nested loops, leading to O(n²) time complexity." },

{ type: "semibold", text: "A. Insertion Sort : " },
{ type: "text", text: " • Analogy : Sorting a hand of cards." },
{ type: "text", text: " • Concept : Start with one card (sorted list) and insert each next card into its correct position." },
{ type: "important", text: " • Key Feature : ", desc: "Maintains a sorted sub-list and inserts unsorted elements one by one." },

{ type: "semibold", text: "B. Selection Sort : " },
{ type: "text", text: " • Analogy : Picking the MVP (Most Valuable Player)." },
{ type: "text", text: " • Concept : Finds the minimum value in the unsorted list and swaps it with the first element of the unsorted section." },
{ type: "important", text: " • Key Feature : ", desc: "Few swaps, but many comparisons." },

{ type: "semibold", text: "C. Bubble Sort : " },
{ type: "text", text: " • Analogy : Bubbles rising in water." },
{ type: "text", text: " • Concept : Compares adjacent elements and swaps them if in the wrong order; largest elements ‘bubble up’ to the end." },

{ type: "semibold", text: "D. Exchange Sort : " },
{ type: "text", text: " • Concept : Like Bubble Sort, but compares the first element with every other and swaps if needed." },

{ type: "bold", text: "2. Advanced O(nlogn) Sorting Algorithms (The Efficient Methods) : " },
{ type: "text", text: " • These use the Divide and Conquer principle, making them much faster for large data sets." },

{ type: "semibold", text: "A. Quick Sort (Partition Exchange Sort) : " },
{ type: "text", text: " • Concept : Chooses a pivot and partitions the array so smaller elements go left, larger go right; repeats recursively." },
{ type: "important", text: " • Key Feature : ", desc: "In-Place and very fast (average O(nlogn))." },

{ type: "semibold", text: "B. Merge Sort : " },
{ type: "text", text: " • Concept : Splits the list into single-element sub-lists, then merges them in sorted order until one sorted list remains." },
{ type: "important", text: " • Key Feature : ", desc: "Not In-Place, but Stable and guarantees O(nlogn) even in the worst case." },

{ type: "bold", text: "3. Specialty Sorting Algorithms" },

{ type: "semibold", text: "A. Radix Sort (Digit by Digit) : " },
{ type: "text", text: " • Concept : Non-comparison sort that processes digits from least to most significant." },
{ type: "important", text: " • Key Feature : ", desc: "Very fast for numbers and strings; can outperform O(nlogn) sorts in special cases." },

{ type: "semibold", text: "B. Shell Sort : " },
{ type: "text", text: " • Concept : Improved Insertion Sort that first sorts elements far apart, then gradually reduces the gap." },
{ type: "important", text: " • Key Feature : ", desc: "Moves small items long distances early, improving efficiency." },

{ type: "semibold", text: "C. Heap Sort and Heap Structure : " },
{type: "important", text: " • Heap :  ",  desc : " A complete binary tree where each parent is larger (Max Heap) or smaller (Min Heap) than its children. "},
{type: "important", text: " • Heap Sort : ",  desc : " Builds a Max Heap, swaps the root with the last element, removes it, and repeats until sorted. "},
{ type: "important", text: " • Priority Queue", desc: "Heap efficiently supports Priority Queue where the highest-priority element (largest in Max Heap) is always served first." },

{ type: "important", text: "⟹ These sorting algorithms vary in speed, memory usage, and stability — the right one depends on your data and use case.", center: true },
{type: "semibold", text : " Time And Space Complexity Of Sorting Algorithms :  "},
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
    ["Merge Sort", "O(nlogn)", "O(nlogn)", "O(nlogn)", "O(n) (Not In-Place)"],
    ["Radix Sort", "O(nk)", "O(nk)", "O(nk)", "O(n + k)"],
    ["Shell Sort", "O(nlogn)", "Varies (e.g., O(n^(4/3)))", "O(n²)", "O(1) (In-Place)"],
    ["Heap Sort", "O(nlogn)", "O(nlogn)", "O(nlogn)", "O(1) (In-Place)"],
  ],
},
{type: "text", text: " • The k represents the number of digits or the length of the keys.  "}, 

{ type: "bold", text: "Introduction to Searching (Finding Data) : " },
{ type: "text", text: "• Searching is the process of finding the location of a specific piece of data (like a name or number) within a larger collection." },
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
{ type: "text", text: "• The complexity of a search algorithm is measured by how many comparisons (steps) it takes to find the item, relative to the list size (n)." },

{type: "important", text: "• Best Case : ",  desc : " The element is found in the very first comparison. "},
{type: "important", text: "• Worst Case : ",  desc : " The element is found at the very end of the list, or not found at all — representing the maximum time the search will take. "},
{type: "important", text: "• Average Case : ",  desc : "  The typical number of comparisons required for a random input."},


{ type: "semibold", text: "Linear Search (The Simple, Step-by-Step Check) : " },
{ type: "text", text: "• Linear Search (or Sequential Search) is the simplest search method." },
{ type: "text", text: "• How it works: Start at the beginning and check each item one by one until you find the target." },
{ type: "important", text: "• Pro : ", desc: "Works on both sorted and unsorted lists." },
{ type: "important", text: "• Con :", desc: "Very slow for large lists." },
{ type: "important", text: "Complexity : ", desc: "Worst Case: O(n) — you might have to check all n items." },

{ type: "semibold", text: "Binary Search (The Divide and Conquer Method) : " },
{ type: "text", text: "• Binary Search is much faster but requires the data to be sorted." },
{ type: "important", text: "• How it works : " },
{ type: "text", text: "   - Look at the middle element of the list." , center: true},
{ type: "text", text: "   - If it matches the target, stop." , center: true},
{ type: "text", text: "   - If the target is larger, ignore the first half." , center: true},
{ type: "text", text: "   - If the target is smaller, ignore the second half.", center: true },
{ type: "text", text: "   - Repeat the process on the remaining half until found.", center: true },
{ type: "text", text: "• Analogy: Like finding a name in a dictionary — you skip large sections quickly." , center: true},
{ type: "important", text: "• Complexity", desc: "Worst Case: O(logn) — search time grows slowly since the list is halved each step.", center: true },

{ type: "semibold", text: "3. Hashing (The Direct Jump) : " },
{ type: "text", text: "• Hashing provides direct access using a hash function to calculate the data’s memory address." },
{ type: "important", text: "• How it works : " ,desc: " A Hash Function takes the key and computes its memory address (Hash Value) instantly." },
{ type: "important", text: "• Ideal Complexity :", desc: "O(1) — constant time; only one step regardless of list size." },

{ type: "semibold", text: "The Hashing Problem: Collision : " },
{ type: "text", text: "• A Collision occurs when two or more items are assigned the same memory address by the hash function." },
{ type: "semibold", text: "• Collision Resolution Techniques" },
{ type: "text", text: "• Since two items can't share the same spot, alternate locations are used:" },

{ type: "semibold", text: "A. Chaining" },
{ type: "text", text: "• Uses a Linked List at each address to store multiple items that hash to the same location." },
{ type: "text", text: "• All collided items are linked together, so the hash table never overflows." },

{ type: "semibold", text: "B. Open Addressing (Probing)" },
{ type: "text", text: "• If the calculated spot is full, probe (search) for the next empty spot in the main hash table." },
{ type: "text", text: "• Linear Probing: Check nearby spots (address + 1, +2, ...)." },
{ type: "text", text: "• Quadratic Probing: Check spots farther away (address + 1², +2², ...), reducing clustering." },

{ type: "text", text: "⟹ Searching methods vary in speed, memory use, and complexity — choosing the right one depends on the data size and structure.", center: true },

{ type: "bold", text: "Graphs: The Structure of Connections : " },
{ type: "text", text: "• A Graph is a mathematical structure used to represent relationships between objects. It consists of:" },

{type: "important", text: "• Vertices (or Nodes) : ",  desc : " The objects (like cities, people, or computers). "},
{type: "important", text: "• Edges : ",  desc : " The connections or relationships between the vertices (like roads, friendships, or cables). "},

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

{ type: "semibold", text: "Representation of Graph (How to Store a Graph in a Computer) : " },

{ type: "semibold", text: "Adjacency Matrix (Table) : " },
{ type: "text", text: "• Concept: Uses a matrix where rows and columns represent nodes." },
{ type: "text", text: "• Value: A 1 (or edge weight) means a connection exists; 0 means no connection." },
{ type: "important", text: "•Best for : ", desc: "Dense graphs and quick edge lookups." },

{ type: "semibold", text: "Adjacency List (List of Neighbors) : " },
{ type: "text", text: "• Concept: Each node keeps a list of its directly connected nodes." },
{ type: "text", text: "• Value: Node A’s list might contain B and C if connected." },
{ type: "important", text: "• Best for : ", desc: "Sparse graphs and exploring neighbors efficiently." },

{ type: "semibold", text: "Graph Traversal: Exploring the Landscape : " },
{ type: "text", text: "• Traversal means visiting every node in a graph systematically." },

{ type: "semibold", text: "1. Depth First Traversal (DFT) : " },
{ type: "text", text: "• Analogy : Go deep first — like exploring a cave fully before backtracking." },
{ type: "text", text: "• How it works : Start at a node, follow one path deeply until you hit a dead end, then backtrack." },
{ type: "important", text: "• Structure : ", desc: "Uses a Stack (Last-In, First-Out)." },

{ type: "semibold", text: "2. Breadth First Traversal (BFT) : " },
{ type: "text", text: "• Analogy : Explore nearby first — like checking all houses on your street before moving farther." },
{ type: "text", text: "• How it works : Visit all immediate neighbors first, then their neighbors, level by level." },
{ type: "important", text: "• Structure : ", desc: "Uses a Queue (First-In, First-Out)." },

{ type: "bold", text: "Reachability and Ordering : " },

{ type: "semibold", text: "Transitive Closure of a Graph : " },
{ type: "text", text: "• Concept : Determines if there’s any path from one node to another, possibly through several stops." },
{ type: "text", text: "• Result : A matrix showing for each pair (i, j) whether i can reach j." },

{ type: "semibold", text: "Warshall’s Algorithm : " },
{ type: "text", text: "• Concept : Efficiently computes transitive closure by considering all intermediate nodes (k) one by one." },
{ type: "important", text: "• Result : ", desc: "After execution, shows all reachable nodes from every node." },

{ type: "semibold", text: "Topological Sorting (Ordering Tasks) : " },
{ type: "text", text: "• Concept : Linear ordering of nodes in a Directed Acyclic Graph (DAG) such that A → B means A comes before B." },
{ type: "text", text: "• Analogy : Like creating a course schedule — 'Calculus I' before 'Calculus II'." },
{ type: "text", text: "• Methods : Can use modified Depth First Search or Kahn’s algorithm (based on nodes with no incoming edges)." },

{ type: "semibold", text: "Network Optimization: Efficiency and Cost : " },
{ type: "text", text: "Used on weighted graphs where edges have costs, distances, or times." },

{ type: "semibold", text: "Minimum Spanning Trees (MST) : " },
{ type: "text", text: "• Concept : Connects all nodes using the smallest possible total edge weight without cycles." },
{ type: "important", text: "• Use Case : ", desc: "Designing efficient networks like roads, electricity grids, or data cables." },

{ type: "text", text: "⟹ Graphs model relationships, paths, and dependencies — forming the backbone of many real-world systems like maps, networks, and social media.", center: true },

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
      blocks: [],
    },
    {
      subname:
        "7.4 Transaction Processing, Concurrency Control and Crash Recovery: ACID properties, Concurrent Executions, Serializability Concept, Lock-based Protocols, Deadlock handling and Prevention, Failure Classification, Recovery and Atomicity, and Log-based Recovery.",
      blocks: [],
    },
    {
      subname:
        "7.5 Introduction to Operating System and Process Management: Evolution of Operating System, Types of Operating System, Operating System Components, Operating System Structure, Operating System Services; Introduction to Process, Process description, Process states, Process control, Threads, Processes and Threads; Types of Scheduling; Principles of Concurrency, Critical Region, Race Condition, Mutual Exclusion, Semaphores and Mutex, Message Passing, Monitors, and Classical Problems of Synchronization.",
      blocks: [],
    },
    {
      subname:
        "7.6 Memory Management, File Systems and System Administration: Memory address, Swapping and Managing Free Memory Space, Virtual Memory Management, Demand Paging, Performance and Page Replacement Algorithms; Introduction to File, Directory and File Paths; File System Implementation, Impact of Allocation Policy on Fragmentation, Mapping File Blocks on The Disk Platter, File System Performance, Administration Tasks, User Account Management, Start and Shutdown Procedures.",
      blocks: [],
    },
  ],
};
