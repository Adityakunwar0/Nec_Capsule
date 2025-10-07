import protocol from "./protocol.jpg";
import bus from "./bus.png";
import star from "./star.png";
import mesh from "./mesh.png";
import ring from "./ring.png";
import hybrid from "./hybrid.png";
import frame from "./frame.png";
import aloha from "./aloha.png";
import ethernet from "./ethernet.png";
import routing from "./routing.jpg";
import ipv from "./ipv.jpg";
import tcp from "./tcp.jpg";
import port from "./port.jpg";

export const topic = {
  name: "5. Concept of Computer Network and Network Security System",
  subtopics: [
    {
      subname:
        "5.1 Introduction to computer networks and physical layer: Networking model, Protocols and Standards, OSI model and TCP/IP model, Networking Devices (Hubs, Bridges, Switches, and Routers) and Transmission media.",
      blocks: [
        { type: "bold", text: " Computer Network :  " },
        {
          type: "text",
          text: " • A computer network connects two or more devices (like phones, computers, or servers) to share information and resources. ",
        },
        {
          type: "text",
          text: " • Connections can be wired (like cables) or wireless (like Wi-Fi or Bluetooth). ",
        },

        { type: "bold", text: " Networking Models : " },
        {
          type: "text",
          text: " • Frameworks that explain how data travels in network. ",
        },
        {
          type: "text",
          text: " ⟹ Essential for designing, implementing and managing network systems effectively. ",
          center: true,
        },
        { type: "semibold", text: " The two main models are: " },
        {
          type: "important",
          text: " • OSI Model : ",
          desc: "7 layers that define how communication happens step-by-step.",
        },
        {
          type: "important",
          text: " • TCP/IP Model : ",
          desc: "4 layers used in real-world internet communication.",
        },

        { type: "bold", text: " Protocols and Standards : " },
        {
          type: "text",
          text: " • A protocol is a set of rules that define how devices talk to each other. ",
        },
        { type: "text", text: " • Examples: HTTP, FTP, SMTP, TCP, IP. " },
        {
          type: "text",
          text: " • They ensure smooth communication between different systems. ",
        },

        { type: "bold", text: " Open System Interconnection ( OSI ) Model : " },
        {
          type: "text",
          text: " • It is a theoretical framework with 7 Layers.",
        },
        {
          type: "text",
          text: " • Developed by International Organization For Standardization (ISO).",
        },
        {
          type: "text",
          text: " • A conceptual framework that standardize the functions of a telecommunication or computing system. ",
        },

        { type: "semibold", text: " 1. Physical Layer :  " },
        {
          type: "text",
          text: " ⟹ Physical connection between devices, transmission of raw bits stream. ",
          center: true,
        },
        {
          type: "text",
          text: " ⟹ It contains hardware element such as Cables, Switches, Network Interface Card ( NIC ). ",
          center: true,
        },
        { type: "semibold", text: " 2. Data Link Layer :   " },
        {
          type: "text",
          text: " ⟹ Node to Node data transfer, Error Detection and Correction. ",
          center: true,
        },
        {
          type: "text",
          text: " ⟹ Responsible for Error Detection, MAC Addresses",
          center: true,
        },
        {
          type: "text",
          text: " ⟹ Responsible for creating and recognizing frame boundaries.  ",
          center: true,
        },
        { type: "semibold", text: " 3. Network Layer :  " },
        {
          type: "text",
          text: " ⟹ Handles Logical Addressing, often through Ip Addresses. ",
          center: true,
        },
        {
          type: "text",
          text: " ⟹ Manages the routing of data packets across the network. ",
          center: true,
        },
        { type: "semibold", text: " 4. Transport Layer : " },
        {
          type: "text",
          text: " ⟹ Ensures complete data transfer and reliability, providing error recovery and flow control. ",
          center: true,
        },
        {
          type: "text",
          text: " ⟹ Protocols Such as TCP(Transmission Control Protocol), UDP(User Datagram Protocol). ",
          center: true,
        },
        { type: "semibold", text: " 5. Session Layer :  " },
        {
          type: "text",
          text: " ⟹ It manages connection (Start / End). ",
          center: true,
        },
        { type: "semibold", text: " 6. Presentation Layer :  " },
        {
          type: "text",
          text: " ⟹ Data Translation, Encryption, Compression of data.",
          center: true,
        },
        { type: "semibold", text: " 7. Application Layer :  " },
        {
          type: "text",
          text: " ⟹ User Interaction (HTTP, FTP, SMTP)",
          center: true,
        },
        {
          type: "text",
          text: " ⟹ Provides services like web, email, etc. ",
          center: true,
        },
        {
          type: "bold",
          text: " PDU ( Protocol Data Unit ) Name Of Each Layer Of OSI Model : ",
        },
        { type: "semibold", text: " • Layer Name From Top To Bottom :   " },
        { type: "image", src: protocol },

        {
          type: "bold",
          text: "  Transmission Control Protocol / Internet Protocol ( TCP/IP ) Model : ",
        },
        {
          type: "text",
          text: " • It is a practical framework that is used to model the communication in a network with 4 Layers.",
        },
        { type: "semibold", text: " 1. Network Interface Layer : " },
        {
          type: "text",
          text: " ⟹  Handles hardware connection (Physical + Data Link Layer). ",
          center: true,
        },
        { type: "semibold", text: " 2. Internet Layer :  " },
        {
          type: "text",
          text: " ⟹ Provides IP addressing and routing. ",
          center: true,
        },
        { type: "semibold", text: " 3. Transport Layer : " },
        {
          type: "text",
          text: " ⟹ Handles communication (TCP/UDP). ",
          center: true,
        },
        { type: "semibold", text: " 4. Application Layer : " },
        {
          type: "text",
          text: " ⟹ Combines OSI’s top 3 layers (HTTP, FTP, DNS, etc.). ",
          center: true,
        },

        { type: "bold", text: " Networking Devices : " },

        {
          type: "important",
          text: " • Hub (Layer 1 Device):",
          desc: " Broadcasts data to all. So, it is inefficient. Leads to data collisions.",
        },
        {
          type: "important",
          text: " • Switch (Layer 2 Device):",
          desc: [
            "Sends data only to the right device.",
            "Uses MAC addresses to manage data traffic and forward data only to the intended device.",
            "Reduces collisions and improves network efficiency.",
          ],
        },
        {
          type: "important",
          text: " • Router (Layer 3 Device):",
          desc: " Connects networks and finds the best path for data to travel from source to destination.",
        },
        {
          type: "important",
          text: " • Bridge (Layer 2 Device):",
          desc: " Connects small network segments. Older technology, less used today.",
        },
        { type: "bold", text: " Transmission Media : " },
        { type: "bold", text: " 1. Wired (Guided) :  " },
        {
          type: "important",
          text: "A. Twisted Pair (Unshielded Twisted Pair (UTP) / Shielded Twisted Pair (STP)) :",
          desc: "Common and cheap. STP provides additional protection against interference.",
        },
        {
          type: "important",
          text: "B. Coaxial Cable :",
          desc: "Used in TV systems, offers better shielding. Consists of a central conductor, insulating layer, metallic shield, and outer insulating layer.",
        },
        {
          type: "important",
          text: "C. Fiber Optic :",
          desc: "Very fast, uses light for transmission, supports long distances, and is relatively expensive.",
        },
        { type: "bold", text: " 2. Wireless (UnGuided) : " },
        {
          type: "important",
          text: "A. Radio Waves :",
          desc: "Use radio frequencies to transmit data over short to long distances. Examples: Wi-Fi, Bluetooth, Cellular Networks.",
        },
        {
          type: "important",
          text: "B. Micro Waves :",
          desc: "Use higher frequency radio waves (1 GHz to 30 GHz) for point-to-point communication. Example: Satellite communication.",
        },
        {
          type: "important",
          text: "C. Infrared :",
          desc: "Used for short-range communication, such as remote controls.",
        },
        {
          type: "semibold",
          text: " ⟹ Choosing Media depends on distance, bandwidth, environment, Cost. ",
        },

        { type: "bold", text: " Topologies : " },
        {
          type: "text",
          text: " The Physical Layout of devices in a network. ",
        },
        { type: "semibold", text: "  1. Bus Topology :" },
        {
          type: "text",
          text: "  ⟹  All devices share one cable. (Cheap but Collison)",
          center: true,
        },
        {
          type: "text",
          text: "  ⟹  It is a Multipoint type of Topology ",
          center: true,
        },
        { type: "image", src: bus },
        { type: "semibold", text: " 2. Star Topology : " },
        {
          type: "text",
          text: "  ⟹ All devices connect to a hub/switch (Easy but Hub Failure breaks). ",
          center: true,
        },
        { type: "image", src: star },
        { type: "semibold", text: " 3. Ring Topology :" },
        {
          type: "text",
          text: "  ⟹ Devices form a closed loop (Circular Connection). ",
          center: true,
        },
        { type: "image", src: ring },
        { type: "semibold", text: "4. Mesh Topology : " },
        {
          type: "text",
          text: "  ⟹  Every device connects to every other (Very reliable and costly).",
          center: true,
        },
        { type: "image", src: mesh },
        { type: "semibold", text: " 5. Hybrid Topology :  " },
        { type: "text", text: "  ⟹ Mix of two or more types. ", center: true },
        { type: "image", src: hybrid },

        { type: "bold", text: " Common Network Protocols : " },

        {
          type: "important",
          text: "• Application Layer :",
          desc: " HTTP, FTP, SMTP, POP3, DNS.",
        },
        {
          type: "important",
          text: "• Transport Layer :",
          desc: " TCP (reliable), UDP (fast).",
        },
        {
          type: "important",
          text: "• Network Layer :",
          desc: " IP, ICMP, ARP.",
        },
        {
          type: "important",
          text: "• Data Link Layer :",
          desc: " Ethernet, Wi-Fi.",
        },
        {
          type: "mcq",
          q: "1. Which of the following is an example of a physical layer protocol?",
          image: null,
          options: ["Ethernet", "TCP", "HTTP", "ISP"],
          ans: "Ethernet",
          explanation:
            "Ethernet has well-defined physical layer specs for media, signaling, and bit transmission (e.g., IEEE 802.3 PHYs).",
        },
        {
          type: "mcq",
          q: "2. The PPP of the OSI model operates at ---------------",
          image: null,
          options: [
            "Physical layer",
            "Data link layer",
            "Network layer",
            "Transport layer",
          ],
          ans: "Data link layer",
          explanation:
            "PPP is a data link layer protocol for point-to-point framing, encapsulation, and link control.",
        },
        {
          type: "mcq",
          q: "3. Which protocol is responsible for error detection and correction at the transport layer?",
          image: null,
          options: ["TCP", "UDP", "ICMP", "ARP"],
          ans: "TCP",
          explanation:
            "TCP provides checksum-based error detection with ACKs and retransmissions for reliability.",
        },
        {
          type: "mcq",
          q: "4. Which application layer protocol is used for sending and receiving emails?",
          image: null,
          options: ["HTTP", "FTP", "SMTP", "POP"],
          ans: "SMTP",
          explanation:
            "SMTP handles sending; receiving is typically via POP or IMAP, but SMTP is the standard for mail transfer.",
        },
        {
          type: "mcq",
          q: "5. What is a computer network?",
          image: null,
          options: [
            "A device used to display information on a computer screen",
            "A collection of interconnected computers and devices that can communicate and share resources",
            "A type of software used to create documents and presentations",
            "The physical casing that protects a computer’s internal components",
          ],
          ans: "A collection of interconnected computers and devices that can communicate and share resources",
          explanation:
            "A network interconnects devices for communication and resource sharing.",
        },
        {
          type: "mcq",
          q: "6. What is the full form of OSI?",
          image: null,
          options: [
            "optical service implementation",
            "open service Internet",
            "open system interconnection",
            "operating system interface",
          ],
          ans: "open system interconnection",
          explanation:
            "OSI stands for Open Systems Interconnection, the seven-layer reference model.",
        },
        {
          type: "mcq",
          q: "7. What are nodes in a computer network?",
          image: null,
          options: [
            "the computer that routes the data",
            "the computer that terminates the data",
            "the computer that originates the data",
            "all of the mentioned",
          ],
          ans: "all of the mentioned",
          explanation:
            "A node can originate, forward, or receive data on a network.",
        },
        {
          type: "mcq",
          q: "8. The physical layer is concerned with ___________",
          image: null,
          options: [
            "bit-by-bit delivery",
            "process to process delivery",
            "application to application delivery",
            "port to port delivery",
          ],
          ans: "bit-by-bit delivery",
          explanation:
            "The physical layer transmits raw bits as signals over the medium.",
        },
        {
          type: "mcq",
          q: "9. Which transmission media provides the highest transmission speed in a network?",
          image: null,
          options: [
            "coaxial cable",
            "twisted pair cable",
            "optical fiber",
            "electrical cable",
          ],
          ans: "optical fiber",
          explanation:
            "Optical fiber offers the highest bandwidth among common media.",
        },
        {
          type: "mcq",
          q: "10. The physical layer provides __________",
          image: null,
          options: [
            "mechanical specifications of electrical connectors and cables",
            "electrical specification of transmission line signal level",
            "specification for IR over optical fiber",
            "all of the mentioned",
          ],
          ans: "all of the mentioned",
          explanation:
            "The physical layer defines mechanical, electrical, and optical specifications for transmission.",
        },
        {
          type: "mcq",
          q: "11. A single channel is shared by multiple signals by ____________",
          image: null,
          options: [
            "analog modulation",
            "digital modulation",
            "multiplexing",
            "phase modulation",
          ],
          ans: "multiplexing",
          explanation:
            "Multiplexing combines multiple signals onto one channel by dividing time, frequency, code, or wavelength.",
        },
        {
          type: "mcq",
          q: "12. Wireless transmission of signals can be done via ___________",
          image: null,
          options: [
            "radio waves",
            "microwaves",
            "infrared",
            "all of the mentioned",
          ],
          ans: "all of the mentioned",
          explanation:
            "Wireless media includes radio, microwave, and infrared bands.",
        },
        {
          type: "mcq",
          q: "13. A local telephone network is an example of a _______ network.",
          image: null,
          options: [
            "Packet switched",
            "Circuit switched",
            "Bit switched",
            "Line switched",
          ],
          ans: "Circuit switched",
          explanation:
            "Traditional telephony uses dedicated circuit-switched connections during a call.",
        },
        {
          type: "mcq",
          q: "14. Most packet switches use this principle ____________",
          image: null,
          options: [
            "Stop and wait",
            "Store and forward",
            "Store and wait",
            "Stop and forward",
          ],
          ans: "Store and forward",
          explanation:
            "Packet switches buffer a full packet before forwarding to the next hop.",
        },
        {
          type: "mcq",
          q: "15. Physical or logical arrangement of network is __________",
          image: null,
          options: ["Topology", "Routing", "Networking", "Control"],
          ans: "Topology",
          explanation:
            "Topology describes the physical or logical layout of a network.",
        },
        {
          type: "mcq",
          q: "16. Which network topology requires a central controller or hub?",
          image: null,
          options: ["Star", "Mesh", "Ring", "Bus"],
          ans: "Star",
          explanation:
            "In star topology, all nodes connect to a central hub/switch.",
        },
        {
          type: "mcq",
          q: "17. _______ topology requires a multipoint connection.",
          image: null,
          options: ["Star", "Mesh", "Ring", "Bus"],
          ans: "Bus",
          explanation:
            "A bus topology uses a shared multipoint backbone that all devices tap into.",
        },
        {
          type: "mcq",
          q: "18. The number of layers in ISO OSI reference model is:",
          image: null,
          options: ["4", "5", "6", "7"],
          ans: "7",
          explanation:
            "OSI comprises seven layers from Physical to Application.",
        },
        {
          type: "mcq",
          q: "19. TCP/IP model does not have ______ layer but OSI model has this layer:",
          image: null,
          options: [
            "Session layer",
            "Transport layer",
            "Application layer",
            "Network layer",
          ],
          ans: "Session layer",
          explanation:
            "The TCP/IP model omits a distinct Session layer found in OSI.",
        },
        {
          type: "mcq",
          q: "20. Which layer is used to link the network support layers and user support layers?",
          image: null,
          options: [
            "Session layer",
            "Data Link layer",
            "Transport layer",
            "Network layer",
          ],
          ans: "Transport layer",
          explanation:
            "The transport layer interfaces between lower network support and upper user/application support layers.",
        },
        {
          type: "mcq",
          q: "21. Which address is used on the internet for employing the TCP/IP protocols?",
          image: null,
          options: [
            "Physical address and Logical address",
            "Port address",
            "Specific address",
            "All of the mentioned",
          ],
          ans: "All of the mentioned",
          explanation:
            "Communication uses MAC (Layer 2), IP (Layer 3), and port numbers (Layer 4) together.",
        },
        {
          type: "mcq",
          q: "22. TCP/IP model was developed _____ the OSI model:",
          image: null,
          options: ["Prior to", "After", "Simultaneous to", "With no link to"],
          ans: "Prior to",
          explanation:
            "TCP/IP emerged in the 1970s, preceding the 1980s OSI effort.",
        },
        {
          type: "mcq",
          q: "23. Which layer is responsible for process-to-process delivery in a general network model?",
          image: null,
          options: [
            "Network layer",
            "Transport layer",
            "Session layer",
            "Data Link layer",
          ],
          ans: "Transport layer",
          explanation:
            "Transport uses port numbers to deliver data to the correct application process.",
        },
        {
          type: "mcq",
          q: "24. Which address is used to identify a process on a host by the transport layer?",
          image: null,
          options: [
            "Physical address",
            "Logical address",
            "Port address",
            "Specific address",
          ],
          ans: "Port address",
          explanation:
            "Port numbers identify endpoints for application processes (e.g., 80 for HTTP).",
        },
        {
          type: "mcq",
          q: "25. Which layer provides the services to the user?",
          image: null,
          options: [
            "Application layer",
            "Session layer",
            "Presentation layer",
            "Physical layer",
          ],
          ans: "Application layer",
          explanation:
            "Application layer protocols provide user-facing services like HTTP, FTP, DNS, and SMTP.",
        },
        {
          type: "mcq",
          q: "26. Transmission data rate is decided by:",
          image: null,
          options: [
            "Network layer",
            "Physical layer",
            "Data Link layer",
            "Transport layer",
          ],
          ans: "Physical layer",
          explanation:
            "Physical layer defines signaling and media characteristics determining bit rate.",
        },
        {
          type: "mcq",
          q: "27. Which of the following is an example of a computer network?",
          image: null,
          options: ["Microsoft Word", "Internet", "Mouse", "Monitor"],
          ans: "Internet",
          explanation:
            "The Internet is a global inter-network (WAN) of connected devices.",
        },
        {
          type: "mcq",
          q: "28. Which of the following is not a network protocol?",
          image: null,
          options: ["TCP", "FTP", "HTTP", "BIOS"],
          ans: "BIOS",
          explanation:
            "BIOS is firmware for system startup, not a communication protocol.",
        },
        {
          type: "mcq",
          q: "29. Protocols are used to:",
          image: null,
          options: [
            "Translate programming languages",
            "Define rules for communication between devices",
            "Manage computer hardware only",
            "Encrypt passwords only",
          ],
          ans: "Define rules for communication between devices",
          explanation:
            "Protocols specify formats, timings, sequencing, and error handling for communication.",
        },
        {
          type: "mcq",
          q: "30. Which OSI layer is responsible for error detection and correction?",
          image: null,
          options: ["Physical", "Data Link", "Network", "Session"],
          ans: "Data Link",
          explanation:
            "The data link layer performs frame-level error detection (e.g., CRC) and may handle limited correction/ARQ.",
        },
        {
          type: "mcq",
          q: "31. Which OSI layer provides logical addressing (IP addresses)?",
          image: null,
          options: ["Physical", "Data Link", "Network", "Transport"],
          ans: "Network",
          explanation:
            "The network layer assigns and routes using logical IP addresses.",
        },
        {
          type: "mcq",
          q: "32. The Presentation Layer handles:",
          image: null,
          options: [
            "Routing packets",
            "Data encryption and compression",
            "Node-to-node transfer",
            "Media access control",
          ],
          ans: "Data encryption and compression",
          explanation:
            "Presentation formats data, including encryption, compression, and translation.",
        },
        {
          type: "mcq",
          q: "33. Which layer of TCP/IP corresponds to OSI’s Network Layer?",
          image: null,
          options: [
            "Internet Layer",
            "Application Layer",
            "Transport Layer",
            "Data Link Layer",
          ],
          ans: "Internet Layer",
          explanation:
            "The Internet layer of TCP/IP maps to OSI Layer 3 for routing and IP addressing.",
        },
        {
          type: "mcq",
          q: "34. Which protocol works at the Transport Layer of TCP/IP?",
          image: null,
          options: ["FTP", "HTTP", "TCP", "IP"],
          ans: "TCP",
          explanation:
            "TCP is a transport-layer protocol; UDP is also at this layer, while IP is at the Internet layer.",
        },
        {
          type: "mcq",
          q: "35. A device that broadcasts data to all connected devices is:",
          image: null,
          options: ["Router", "Switch", "Hub", "Bridge"],
          ans: "Hub",
          explanation:
            "Legacy hubs repeat frames to all ports without filtering.",
        },
        {
          type: "mcq",
          q: "36. Which device uses MAC addresses to forward data?",
          image: null,
          options: ["Router", "Switch", "Hub", "Modem"],
          ans: "Switch",
          explanation:
            "Switches build MAC tables and forward frames based on MAC addresses at Layer 2.",
        },
        {
          type: "mcq",
          q: "37. A router works at which OSI layer?",
          image: null,
          options: ["Physical", "Data Link", "Network", "Transport"],
          ans: "Network",
          explanation:
            "Routers operate at Layer 3, forwarding packets using IP addresses.",
        },
        {
          type: "mcq",
          q: "38. Which medium offers the highest bandwidth?",
          image: null,
          options: [
            "Twisted Pair",
            "Coaxial Cable",
            "Optical Fiber",
            "Radio Waves",
          ],
          ans: "Optical Fiber",
          explanation:
            "Fiber provides orders-of-magnitude higher throughput than copper or wireless.",
        },
        {
          type: "mcq",
          q: "39. Which of these is a wireless medium?",
          image: null,
          options: [
            "Coaxial cable",
            "Optical fiber",
            "Radio waves",
            "Twisted pair",
          ],
          ans: "Radio waves",
          explanation:
            "Radio waves are used for Wi-Fi, cellular, and many wireless links.",
        },
        {
          type: "mcq",
          q: "40. Which transmission medium is cheapest and widely used in LANs?",
          image: null,
          options: [
            "Optical Fiber",
            "Coaxial Cable",
            "Twisted Pair",
            "Radio Wave",
          ],
          ans: "Twisted Pair",
          explanation:
            "Twisted pair (e.g., Cat5e/Cat6) is inexpensive and common in Ethernet LANs.",
        },
        {
          type: "mcq",
          q: "41. In which topology does failure of one cable affect the whole network?",
          image: null,
          options: ["Bus", "Ring", "Mesh", "Star"],
          ans: "Bus",
          explanation: "A bus backbone failure disrupts all attached nodes.",
        },
        {
          type: "mcq",
          q: "42. Mesh topology’s main advantage is:",
          image: null,
          options: [
            "Low cost",
            "Easy installation",
            "High fault tolerance",
            "Central hub dependency",
          ],
          ans: "High fault tolerance",
          explanation:
            "Multiple redundant paths allow communication despite link failures.",
        },
        {
          type: "mcq",
          q: "43. Which is the largest network in the world?",
          image: null,
          options: ["LAN", "MAN", "WAN", "Internet"],
          ans: "Internet",
          explanation:
            "The Internet is the global network spanning countless WANs and LANs.",
        },
        {
          type: "mcq",
          q: "44. Which of these is an example of a MAN (Metropolitan Area Network)?",
          image: null,
          options: [
            "Internet",
            "Office LAN",
            "City-wide cable TV network",
            "Bluetooth",
          ],
          ans: "City-wide cable TV network",
          explanation:
            "A MAN spans a city-scale area, like metropolitan cable distribution.",
        },
        {
          type: "mcq",
          q: "45. DNS is used to:",
          image: null,
          options: [
            "Encrypt data",
            "Resolve domain names to IP addresses",
            "Manage MAC addresses",
            "Handle routing",
          ],
          ans: "Resolve domain names to IP addresses",
          explanation:
            "DNS maps human-readable names to IP addresses for communication.",
        },
        {
          type: "mcq",
          q: "46. Which protocol is connectionless?",
          image: null,
          options: ["TCP", "FTP", "UDP", "SMTP"],
          ans: "UDP",
          explanation:
            "UDP sends datagrams without connection setup or reliability guarantees.",
        },
        {
          type: "mcq",
          q: "47. The Transport layer ensures:",
          image: null,
          options: [
            "Logical addressing",
            "End-to-end delivery",
            "Encoding of data",
            "Frame synchronization",
          ],
          ans: "End-to-end delivery",
          explanation:
            "The transport layer provides process-to-process, end-to-end delivery with segmentation, ports, and reliability (TCP).",
        },
        {
          type: "mcq",
          q: "48. Encryption/decryption happens at:",
          image: null,
          options: [
            "Application Layer",
            "Presentation Layer",
            "Network Layer",
            "Transport Layer",
          ],
          ans: "Presentation Layer",
          explanation:
            "In the OSI model, the presentation layer handles encryption, compression, and data translation.",
        },
        {
          type: "mcq",
          q: "49. The PDU (Protocol Data Unit) of the Data Link Layer is:",
          image: null,
          options: ["Bits", "Frames", "Packets", "Segments"],
          ans: "Frames",
          explanation:
            "Layer 2 encapsulates into frames; Layer 3 uses packets; Layer 4 uses segments.",
        },
        {
          type: "mcq",
          q: "50. Which TCP/IP layer combines OSI’s Session, Presentation, and Application?",
          image: null,
          options: ["Transport", "Network Access", "Application", "Internet"],
          ans: "Application",
          explanation:
            "TCP/IP places session, presentation, and application functions in its Application layer.",
        },
        {
          type: "mcq",
          q: "51. IP works in which TCP/IP layer?",
          image: null,
          options: [
            "Application",
            "Transport",
            "Internet",
            "Network Interface",
          ],
          ans: "Internet",
          explanation:
            "IP is the core protocol of the Internet layer for addressing and routing.",
        },
        {
          type: "mcq",
          q: "52. Which TCP/IP layer is responsible for hardware addressing?",
          image: null,
          options: [
            "Application",
            "Transport",
            "Network Interface",
            "Internet",
          ],
          ans: "Network Interface",
          explanation:
            "The Network Interface (Link) layer handles MAC addressing and framing.",
        },
        {
          type: "mcq",
          q: "53. Which device works at OSI Layer 1?",
          image: null,
          options: ["Switch", "Hub", "Router", "Bridge"],
          ans: "Hub",
          explanation:
            "Hubs are physical-layer repeaters forwarding electrical signals to all ports.",
        },
        {
          type: "mcq",
          q: "54. Switches use which type of addressing?",
          image: null,
          options: ["IP address", "Port address", "MAC address", "URL"],
          ans: "MAC address",
          explanation:
            "Switches forward frames based on Layer 2 MAC addresses.",
        },
        {
          type: "mcq",
          q: "55. A router forwards data based on:",
          image: null,
          options: [
            "Physical address",
            "Logical address",
            "Port address",
            "Domain name",
          ],
          ans: "Logical address",
          explanation: "Routers forward using Layer 3 logical addresses (IP).",
        },
        {
          type: "mcq",
          q: "56. Which device connects different networks?",
          image: null,
          options: ["Switch", "Router", "Hub", "Repeater"],
          ans: "Router",
          explanation:
            "Routers interconnect different IP networks and choose routes.",
        },
        {
          type: "mcq",
          q: "57. Which device is used in legacy/small networks instead of switches?",
          image: null,
          options: ["Hub", "Router", "Bridge", "Gateway"],
          ans: "Hub",
          explanation:
            "Hubs were low-cost shared media devices used before switches became ubiquitous.",
        },
        {
          type: "mcq",
          q: "58. Twisted Pair cables are mostly used in:",
          image: null,
          options: [
            "TV networks",
            "Ethernet LANs",
            "Satellite communication",
            "Optical networks",
          ],
          ans: "Ethernet LANs",
          explanation:
            "Copper twisted pair (Cat5e/Cat6) is standard for Ethernet access cabling.",
        },
        {
          type: "mcq",
          q: "59. Coaxial cable is widely used in:",
          image: null,
          options: [
            "Wi-Fi",
            "TV distribution",
            "Mobile phones",
            "Optical networks",
          ],
          ans: "TV distribution",
          explanation: "Coax is common in cable TV and some broadband access.",
        },
        {
          type: "mcq",
          q: "60. Which medium is immune to electromagnetic interference?",
          image: null,
          options: ["Coaxial", "Optical Fiber", "Twisted Pair", "Radio waves"],
          ans: "Optical Fiber",
          explanation:
            "Fiber transmits light and is immune to EMI/RFI from electrical sources.",
        },
        {
          type: "mcq",
          q: "61. Which wireless medium uses infrared light?",
          image: null,
          options: ["Wi-Fi", "Bluetooth", "Remote controls", "Satellite TV"],
          ans: "Remote controls",
          explanation:
            "Many consumer remotes use infrared for short-range line-of-sight signaling.",
        },
        {
          type: "mcq",
          q: "62. Microwaves operate in which frequency range?",
          image: null,
          options: ["1–30 GHz", "30–60 GHz", "100–300 MHz", "Below 1 GHz"],
          ans: "1–30 GHz",
          explanation:
            "Microwave communications commonly use roughly 1–30 GHz spectrum bands.",
        },
        {
          type: "mcq",
          q: "63. Which medium is cheapest?",
          image: null,
          options: ["Optical Fiber", "Coaxial", "Twisted Pair", "Microwave"],
          ans: "Twisted Pair",
          explanation:
            "Twisted pair copper is generally the least expensive per run for LANs.",
        },
        {
          type: "mcq",
          q: "64. Which topology uses a single backbone cable?",
          image: null,
          options: ["Star", "Mesh", "Bus", "Ring"],
          ans: "Bus",
          explanation:
            "A bus topology has a single shared backbone to which all nodes connect.",
        },
        {
          type: "mcq",
          q: "65. In a Star topology, failure of the hub results in:",
          image: null,
          options: [
            "Only one device failing",
            "Whole network failure",
            "Half network failure",
            "No effect",
          ],
          ans: "Whole network failure",
          explanation:
            "The central hub/switch is a single point of failure for all attached nodes.",
        },
        {
          type: "mcq",
          q: "66. Which topology provides highest fault tolerance?",
          image: null,
          options: ["Bus", "Ring", "Mesh", "Star"],
          ans: "Mesh",
          explanation:
            "Mesh offers multiple redundant paths, maximizing resilience.",
        },
        {
          type: "mcq",
          q: "67. Ring topology data travels in:",
          image: null,
          options: [
            "Both directions simultaneously",
            "Only one direction",
            "Random paths",
            "Star-shaped loops",
          ],
          ans: "Only one direction",
          explanation:
            "A classic ring passes a token or frames unidirectionally around the ring.",
        },
        {
          type: "mcq",
          q: "68. A Hybrid topology is:",
          image: null,
          options: [
            "Star + Bus",
            "Ring + Mesh",
            "Combination of two or more topologies",
            "A new type of star",
          ],
          ans: "Combination of two or more topologies",
          explanation:
            "Hybrid networks combine multiple basic topologies (e.g., star-bus).",
        },
        {
          type: "mcq",
          q: "69. Which OSI layer provides services to the user?",
          image: null,
          options: ["Application", "Presentation", "Session", "Transport"],
          ans: "Application",
          explanation:
            "Application layer offers user-facing protocols and services.",
        },
        {
          type: "mcq",
          q: "70. Which type of switching is connection-oriented?",
          image: null,
          options: [
            "Packet switching",
            "Circuit switching",
            "Message switching",
            "Virtual switching",
          ],
          ans: "Circuit switching",
          explanation:
            "Circuit switching establishes a dedicated path before data transfer.",
        },
        {
          type: "mcq",
          q: "71. Store-and-forward principle is used in:",
          image: null,
          options: ["Routers", "Packet switches", "Bridges", "Repeaters"],
          ans: "Packet switches",
          explanation:
            "Packet switches (including many routers/bridges) buffer full packets before forwarding; the principle is named for packet switching.",
        },
        {
          type: "mcq",
          q: "72. IEEE standard for Ethernet is:",
          image: null,
          options: ["802.3", "802.11", "802.15", "802.16"],
          ans: "802.3",
          explanation: "IEEE 802.3 defines Ethernet (MAC/PHY).",
        },
        {
          type: "mcq",
          q: "73. IEEE standard for Wi-Fi is:",
          image: null,
          options: ["802.3", "802.11", "802.15", "802.16"],
          ans: "802.11",
          explanation: "IEEE 802.11 defines WLAN/Wi-Fi.",
        },
        {
          type: "mcq",
          q: "74. Bluetooth uses which IEEE standard?",
          image: null,
          options: ["802.3", "802.11", "802.15", "802.16"],
          ans: "802.15",
          explanation: "Bluetooth is specified under IEEE 802.15 (PAN).",
        },
        {
          type: "mcq",
          q: "75. WiMAX corresponds to:",
          image: null,
          options: ["802.3", "802.11", "802.15", "802.16"],
          ans: "802.16",
          explanation: "IEEE 802.16 defines WiMAX (wireless MAN).",
        },
        {
          type: "mcq",
          q: "76. In OSI model, port addressing is done at:",
          image: null,
          options: [
            "Data Link Layer",
            "Network Layer",
            "Transport Layer",
            "Application Layer",
          ],
          ans: "Transport Layer",
          explanation:
            "The transport layer uses port numbers to identify application endpoints.",
        },
      ],
    },
    {
      subname:
        "5.2 Data link layer: Services, Error Detection and Corrections, Flow Control, Data Link Protocol, Multiple access protocols, LAN addressing and ARP (Address Resolution Protocol), Ethernet, IEEE 802.3(Ethernet), 802.4(Token Bus), 802.5(Token Ring), CSMA/CD, Wireless LANs, PPP (Point to Point Protocol), Wide area protocols.",
      blocks: [
        { type: "bold", text: " Data Link Layer Overview : " },
        {
          type: "text",
          text: " • The data link layer makes sure data sent from one computer to another is correct and properly formatted. ",
        },
        {
          type: "text",
          text: " • It divides data into frames, adds error detection bits, and handles how data moves across the physical link. ",
        },
        { type: "bold", text: " Services of Data Link Layer : " },
        {
          type: "important",
          text: "• Framing :",
          desc: "Breaks data into small blocks called frames for easier and organized transmission.",
        },
        {
          type: "important",
          text: "• Flow Control :",
          desc: "Prevents the sender from transmitting too much data too quickly for the receiver to handle.",
        },
        {
          type: "important",
          text: "• Error Detection & Correction :",
          desc: "Ensures the received data is accurate and identical to the sent data by detecting and correcting transmission errors.",
        },
        { type: "bold", text: "  Framing : " },
        {
          type: "text",
          text: " ⟹ The Data Link Layer divides the stream of bits received from the Physical Layer into manageable data units called frames. ",
          center: true,
        },
        {
          type: "important",
          text: "• Frame Header :",
          desc: "Contains the source and destination addresses of the frame, along with control bytes.",
        },
        {
          type: "important",
          text: "• Payload Field :",
          desc: "Holds the actual message or data to be transmitted.",
        },
        {
          type: "important",
          text: "• Trailer :",
          desc: "Includes error detection and correction bits, also known as the Frame Check Sequence (FCS).",
        },
        {
          type: "important",
          text: "• Flag :",
          desc: "Two flags at the beginning and end mark the start and end of a frame.",
        },
        { type: "bold", text: " Frame Structure : " },
        { type: "image", src: frame },
        {
          type: "important",
          text: "• Flag :",
          desc: "Marks the start and end of the frame. Size is 1 byte with bit pattern 01111110.",
        },
        {
          type: "important",
          text: "• Address :",
          desc: "Specifies the sender or receiver address. Size is 1 byte. Set to 11111111 for broadcast communication.",
        },
        {
          type: "important",
          text: "• Control :",
          desc: "Used to control the flow and management of frames. Size is 1 byte with constant value 11000000.",
        },
        {
          type: "important",
          text: "• Protocol :",
          desc: "Indicates the type of data being carried. Size is 1 or 2 bytes.",
        },
        {
          type: "important",
          text: "• Payload :",
          desc: "Contains the actual message or data, with a maximum size of 1500 bytes.",
        },
        {
          type: "important",
          text: "• FCS (Frame Check Sequence) : ",
          desc: [
            " Used for error detection and correction Size is 2 or 4 bytes, typically using Cyclic Redundancy Code (CRC).",
          ],
        },
        { type: "bold", text: " Error Detection & Correction :  " },
        {
          type: "important",
          text: " Error :",
          desc: " A situation when the message received at the receiver end is not identical to the message transmitted from the sender. ",
        },
        { type: "bold", text: " Types Of Error :  " },
        {
          type: "important",
          text: "• Single-bit Error :",
          desc: "Occurs when one bit changes (0 → 1 or 1 → 0). ",
        },
        {
          type: "text",
          text: " ⟹ Common in parallel data transmission. ",
          center: true,
        },
        {
          type: "important",
          text: "• Burst Error :",
          desc: "Occurs when two or more bits change. ",
        },
        {
          type: "text",
          text: " ⟹ Common in serial data transmission.",
          center: true,
        },
        { type: "bold", text: " Error Detection Technique. " },
        {
          type: "important",
          text: " i. Single Parity Check : ",
          desc: " Adds 1 bit, If 1s bits is odd , then parity bit 1 is append. If 1s bit is even, then parity bit 0 is append.  ",
        },
        {
          type: "text",
          text: "  ⟹ Also known as Even Parity Checking. ",
          center: true,
        },
        {
          type: "important",
          text: " • Limitations : ",
          desc: " It is only for 1 bit exchange. ",
        },
        {
          type: "important",
          text: " ii. Checksum : ",
          desc: " Uses one's complement Arithemetic.  ",
        },
        {
          type: "text",
          text: " ⟹ Data blocks are added, and the sum's complement is sent as the checksum, Receiver adds again -> If total = all 1s, then there is no error else error. ",
          center: true,
        },
        {
          type: "important",
          text: " iii. CRC ( Cyclic Redundancy Check ) : ",
          desc: " Uses XOR division (Modulo-2 division).  ",
        },
        {
          type: "text",
          text: " ⟹  Data is divided by a fixed binary divisior using XOR, remainder (CRC) is sent. Receiver divides again -> if remainder = 0 -> no error else error. ",
          center: true,
        },
        {
          type: "text",
          text: " ⟹  If divisor length L, then L-1 Zero's(0's) append at the end of the data. ",
          center: true,
        },

        { type: "bold", text: " Error Correction Techniques : " },
        {
          type: "important",
          text: " i. ARQ ( Automatic Repeat Request ) : ",
          desc: " Receiver asks to resend. ",
        },
        {
          type: "text",
          text: " ⟹ Based on Acknowledgment (ACKs) and Negative Acknowledgements. ",
          center: true,
        },
        {
          type: "important",
          text: " ii. FEC ( Forward Error Correction ) :  ",
          desc: "  Sender adds extra bits so receiver can correct directly i.e. Error Correcting Codes.",
        },

        { type: "bold", text: " Protocols :  " },
        { type: "semibold", text: " A. PPP (Point-to-Point Protocol) " },
        { type: "text", text: " ⟹ Byte-oriented protocol. ", center: true },
        {
          type: "text",
          text: " ⟹ Used for direct connections (like modem or serial links).",
          center: true,
        },
        {
          type: "text",
          text: " ⟹ Transmit multiprotocol data only (Point-to-Point only). ",
          center: true,
        },
        {
          type: "text",
          text: " ⟹ Includes authentication like Password Authentication Protocol(PAP) Challenge Handshake Authentication Protocol (CHAP) and error detection (FCS). ",
          center: true,
        },
        { type: "semibold", text: " B. HDLC (High-Level Data Link Control)  " },
        { type: "text", text: " ⟹ Bit-oriented protocol. ", center: true },
        { type: "text", text: " ⟹ Used in WANs. ", center: true },
        {
          type: "text",
          text: " ⟹ supports both point-to-point or multipoint links.",
          center: true,
        },
        {
          type: "text",
          text: " ⟹ Provides framing and control features.",
          center: true,
        },
        {
          type: "text",
          text: " ⟹ Has not Authentication (PAP, CHAP) or error detection. ",
          center: true,
        },

        { type: "bold", text: " Multiple Access Protocols :  " },
        {
          type: "text",
          text: " • It is Used when multiple devices share the same communication channel. Types are : ",
        },
        { type: "bold", text: "  1. Random Access Protocols : " },
        { type: "important", text: " A. Aloha : ", desc: "  " },
        { type: "image", src: aloha },
        {
          type: "important",
          text: " B. CSMA : ",
          desc: " Carrier Sense Multiple Access. ",
        },
        {
          type: "text",
          text: " ⟹ Device Checks before sending. ",
          center: true,
        },
        {
          type: "text",
          text: " ⟹ Delayed due to propagation delay. (if data is ready to transmit becoming idle and still show delay.) ",
          center: true,
        },
        { type: "semibold", text: " Access Models : " },
        {
          type: "important",
          text: " • 1-Persistent :  ",
          desc: " Keep checking sends immediately. ",
        },
        {
          type: "important",
          text: " • Non-Persistent : ",
          desc: " Wait random time. ",
        },
        {
          type: "important",
          text: " • P-Persistent : ",
          desc: " Sends with probability P. ",
        },
        {
          type: "important",
          text: " • O-Persistent : ",
          desc: " Fixed order of execution. ",
        },
        {
          type: "important",
          text: " C. CSMA/CD : ",
          desc: " Carrier Sense Multiple Access / Collision Detection. ",
        },
        { type: "text", text: " ⟹ Used in wired network. ", center: true },
        {
          type: "text",
          text: " ⟹ Device checks if channel is free -> sends data -> if collision happens, it detects it and retransmit after a random delay. ",
          center: true,
        },
        {
          type: "important",
          text: " D. CSMA/CA :  ",
          desc: "  Carrier Sense Multiple Access / Collision Avoidance.",
        },
        {
          type: "text",
          text: " ⟹ Used in wireless network (WIFI). ",
          center: true,
        },
        {
          type: "text",
          text: " ⟹ Device checks if channel is free -> before sending, it tries to avoid collisions by waiting (backoffs) or sending a signal (RTS / UTS). ",
          center: true,
        },

        { type: "bold", text: " 2. Controlled Access Protocols :  " },
        {
          type: "text",
          text: " • Devices take turns using the shared communication channel — no two devices transmit at the same time. ",
        },
        {
          type: "important",
          text: "A. Reservation :  ",
          desc: " Each device reserves a time slot before transmitting. Used when many stations want to send data regularly. ",
        },
        {
          type: "text",
          text: " Example : Satellite communication systems. ",
          center: true,
        },
        {
          type: "important",
          text: " B. Polling :  ",
          desc: " There is a primary station (controller) and multiple secondary stations. The primary station asks (polls) each secondary one by one if it has data to send. Only the station that is polled can send data. ",
        },
        {
          type: "text",
          text: "Example : Primary → “Station 2, do you have data?” Station 2 → “Yes, sending now!” ",
          center: true,
        },
        {
          type: "important",
          text: " C. Token Passing :",
          desc: " A token (a small data frame) moves in a fixed sequence between devices. The device holding the token has permission to transmit. After finishing, it passes the token to the next device. ",
        },
        {
          type: "text",
          text: "Example : Used in Token Ring and Token Bus networks. ",
          center: true,
        },

        { type: "bold", text: " 3. Channelization Protocols :  " },
        {
          type: "text",
          text: "• Allows multiple users to share a channel efficiently or sharing bandwidth. ",
        },
        {
          type: "important",
          text: " A. Frequency Division Multiple Access (FDMA) : ",
          desc: "  Each user gets a separate frequency band. ",
        },
        {
          type: "important",
          text: " B. Time Division Multiple Access (TDMA) : ",
          desc: " Each user gets a specific time slot. ",
        },
        {
          type: "important",
          text: " C. Code Division Multiple Access (CDMA) : ",
          desc: " All users share the same channel but use different codes. ",
        },

        { type: "bold", text: " Token Bus (IEEE 802.4) : " },
        {
          type: "text",
          text: " ⟹ Devices pass a token to decide who can send the data.",
          center: true,
        },
        { type: "text", text: " ⟹ Works in Bus Topology. ", center: true },

        { type: "bold", text: " Ethernet (IEEE 802.3) : " },
        {
          type: "text",
          text: " ⟹ most widely used LAN technology.",
          center: true,
        },
        {
          type: "text",
          text: "⟹ It uses the CSMA/CD (Carrier Sense Multiple Access with Collision Detection) method to manage data transmission and avoid collisions.",
          center: true,
        },
        { type: "semibold", text: "   Ethernet Frame has following fields:  " },
        { type: "image", src: ethernet },
        {
          type: "important",
          text: " ● Preamble : ",
          desc: "  7 bytes used for synchronization, The preamble helps the receiver synchronize its clock with the sender's clock.   ",
        },
        {
          type: "important",
          text: " ● SFD (Start Frame Delimiter) : ",
          desc: "  1 byte indicating the start of the frame. ",
        },
        {
          type: "important",
          text: " ● Destination MAC Address :  ",
          desc: " 6 bytes identifying the recipient. ",
        },
        {
          type: "important",
          text: " ● Source MAC Address :  ",
          desc: " 6 bytes identifying the sender. ",
        },
        {
          type: "important",
          text: " ● Length/Type :  ",
          desc: " 2 bytes indicating the frame length or protocol type. ",
        },
        {
          type: "important",
          text: " ● Data and Padding :  ",
          desc: " Payload data (46 to 1500 bytes), padded if necessary to meet the minimum length. ",
        },
        {
          type: "important",
          text: " ● FCS (Frame Check Sequence) : ",
          desc: " 4 bytes for error detection using CRC. ",
        },

        { type: "bold", text: " Token Ring (IEEE 802.5) : " },
        { type: "text", text: " ⟹ Used in older LANs.", center: true },
        { type: "text", text: " ⟹ Works in Ring Topology. ", center: true },
        {
          type: "text",
          text: " ⟹ A special small frame called a token that is allowed to send data. ",
          center: true,
        },

        {
          type: "mcq",
          q: "1. Which OSI layer ensures correct formatting and reliable hop-to-hop delivery over a physical link?",
          image: null,
          options: ["Network", "Transport", "Data Link", "Physical"],
          ans: "Data Link",
          explanation:
            "The data link layer provides framing, flow/error control, and reliable node-to-node delivery over the physical medium.",
        },
        {
          type: "mcq",
          q: "2. Which operation is central to the data link layer?",
          image: null,
          options: [
            "Routing",
            "Framing",
            "End-to-end encryption",
            "Application multiplexing",
          ],
          ans: "Framing",
          explanation:
            "Framing organizes raw bits into frames for controlled transmission and detection at boundaries.",
        },
        {
          type: "mcq",
          q: "3. Which sub-functions are typical DLL services?",
          image: null,
          options: [
            "Framing, flow control, error control",
            "Routing, NAT, subnetting",
            "Session setup, teardown",
            "Presentation encoding",
          ],
          ans: "Framing, flow control, error control",
          explanation:
            "DLL services include framing, managing sender/receiver rates, and error detection/correction or recovery.",
        },
        {
          type: "mcq",
          q: "4. What marks start and end of HDLC/PPP-like frames?",
          image: null,
          options: ["Preamble", "SFD only", "Flag 0x7E", "Delimiter 0xAA"],
          ans: "Flag 0x7E",
          explanation:
            "Bit/byte-oriented link protocols use flag 01111110 (0x7E) to mark frame boundaries.",
        },
        {
          type: "mcq",
          q: "5. The FCS field primarily provides:",
          image: null,
          options: [
            "Address resolution",
            "Flow control",
            "Error detection",
            "Encryption",
          ],
          ans: "Error detection",
          explanation:
            "FCS carries CRC bits to detect transmission errors in the frame.",
        },
        {
          type: "mcq",
          q: "6. Which field carries the end host protocol information in HDLC/PPP frames?",
          image: null,
          options: ["Control", "Protocol", "Address", "Flag"],
          ans: "Protocol",
          explanation:
            "The Protocol field identifies the encapsulated payload (e.g., IP) in PPP/HDLC-like framing.",
        },
        {
          type: "mcq",
          q: "7. In the provided structure, the Address field length was stated as:",
          image: null,
          options: ["6 bytes", "1 byte", "2 bytes", "4 bytes"],
          ans: "1 byte",
          explanation:
            "The summary specifies a 1-byte address in the simplified frame overview.",
        },
        {
          type: "mcq",
          q: "8. In the given frame structure, the Control field value was stated as constant:",
          image: null,
          options: ["00001111", "10101010", "11000000", "11111111"],
          ans: "11000000",
          explanation:
            "The notes fix Control to 11000000 for management; HDLC control varies by frame type, but this summary uses a constant for simplicity.",
        },
        {
          type: "mcq",
          q: "9. Broadcast address in the simple frame description is:",
          image: null,
          options: ["00000000", "10101010", "11111111", "00001111"],
          ans: "11111111",
          explanation:
            "The overview sets 0xFF for broadcast in its simplified link framing model.",
        },
        {
          type: "mcq",
          q: "10. Maximum payload mentioned for the frame structure is:",
          image: null,
          options: ["46 bytes", "512 bytes", "1500 bytes", "9000 bytes"],
          ans: "1500 bytes",
          explanation:
            "The notes cap payload at 1500 bytes similar to Ethernet’s typical MTU payload size.",
        },
        {
          type: "mcq",
          q: "11. Typical FCS sizes in link frames are:",
          image: null,
          options: [
            "1 or 3 bytes",
            "2 or 4 bytes",
            "5 or 6 bytes",
            "7 or 8 bytes",
          ],
          ans: "2 or 4 bytes",
          explanation:
            "Link frames commonly use 16-bit or 32-bit CRC codes for FCS.",
        },
        {
          type: "mcq",
          q: "12. Flags used in HDLC have bit pattern:",
          image: null,
          options: ["10101010", "01111110", "11111111", "00000000"],
          ans: "01111110",
          explanation: "HDLC flag is 0x7E (01111110) for both start and end.",
        },
        {
          type: "mcq",
          q: "13. Flow control prevents:",
          image: null,
          options: [
            "Routing loops",
            "Buffer overflow at receiver",
            "IP fragmentation",
            "DNS failures",
          ],
          ans: "Buffer overflow at receiver",
          explanation:
            "It paces the sender so the receiver can process frames without overflow.",
        },
        {
          type: "mcq",
          q: "14. A common DLL flow control mechanism is:",
          image: null,
          options: [
            "Congestion window",
            "Sliding window",
            "Distance vector",
            "Spanning tree",
          ],
          ans: "Sliding window",
          explanation:
            "Sliding window variants are used at link and transport levels to manage rate and ordering.",
        },
        {
          type: "mcq",
          q: "15. A single-bit error changes:",
          image: null,
          options: [
            "Any two adjacent bits",
            "Exactly one bit",
            "Burst of many bits",
            "Byte order only",
          ],
          ans: "Exactly one bit",
          explanation: "Single-bit error flips a single bit value.",
        },
        {
          type: "mcq",
          q: "16. Burst errors are typical in:",
          image: null,
          options: [
            "Parallel links",
            "Serial links",
            "Optical only",
            "Wireless only",
          ],
          ans: "Serial links",
          explanation:
            "Serial transmission often experiences correlated errors spanning multiple bits.",
        },
        {
          type: "mcq",
          q: "17. Even parity adds parity bit 1 when count of 1s is:",
          image: null,
          options: ["Even", "Odd", "Zero", "Prime"],
          ans: "Odd",
          explanation:
            "For even parity, parity bit ensures total 1s become even, so add 1 when current count is odd.",
        },
        {
          type: "mcq",
          q: "18. Parity reliably detects:",
          image: null,
          options: [
            "Any even number of errors",
            "Any single-bit error",
            "All burst errors",
            "All two-bit errors",
          ],
          ans: "Any single-bit error",
          explanation:
            "Single-bit errors flip parity; two-bit flips can cancel and go undetected.",
        },
        {
          type: "mcq",
          q: "19. Checksum uses which arithmetic in classic Internet form?",
          image: null,
          options: [
            "Two’s complement",
            "One’s complement",
            "Floating point",
            "Gray code",
          ],
          ans: "One’s complement",
          explanation:
            "Internet checksum sums 16-bit words using one’s complement and sends the complemented sum.",
        },
        {
          type: "mcq",
          q: "20. In CRC, the receiver declares no error when remainder is:",
          image: null,
          options: [
            "All ones",
            "Zero",
            "Equal to generator",
            "Nonzero constant",
          ],
          ans: "Zero",
          explanation:
            "Modulo-2 division remainder zero implies codeword is divisible by the generator polynomial.",
        },
        {
          type: "mcq",
          q: "21. For CRC, if generator length is L, the sender appends:",
          image: null,
          options: ["L zeros", "L−1 zeros", "L ones", "L−2 zeros"],
          ans: "L−1 zeros",
          explanation:
            "Appending L−1 zeros facilitates computing the remainder to create the FCS.",
        },
        {
          type: "mcq",
          q: "22. CRCs are especially good at detecting:",
          image: null,
          options: [
            "Any single-bit error and many bursts",
            "Only even number of errors",
            "Only odd number of errors",
            "Timing jitter",
          ],
          ans: "Any single-bit error and many bursts",
          explanation:
            "Proper polynomials detect all single-bit, many double-bit, and bounded-length burst errors.",
        },
        {
          type: "mcq",
          q: "23. ARQ stands for:",
          image: null,
          options: [
            "Automatic Route Query",
            "Automatic Repeat reQuest",
            "Asynchronous Reset Queue",
            "Acknowledged Relay Quality",
          ],
          ans: "Automatic Repeat reQuest",
          explanation:
            "ARQ uses ACK/NAK and retransmission to correct errors by repetition.",
        },
        {
          type: "mcq",
          q: "24. FEC is:",
          image: null,
          options: [
            "Repeating packets upon NAK",
            "Adding redundant bits to correct at receiver",
            "Discarding bad frames",
            "Flow pacing",
          ],
          ans: "Adding redundant bits to correct at receiver",
          explanation:
            "Forward Error Correction encodes additional parity to enable correction without retransmission.",
        },
        {
          type: "mcq",
          q: "25. An example ARQ scheme is:",
          image: null,
          options: ["Hamming(7,4)", "Reed-Solomon", "Stop-and-Wait", "LDPC"],
          ans: "Stop-and-Wait",
          explanation:
            "Stop-and-Wait/Go-Back-N/Selective Repeat are ARQ protocols using ACK-based recovery.",
        },
        {
          type: "mcq",
          q: "26. PPP is primarily:",
          image: null,
          options: [
            "Bit-oriented",
            "Byte-oriented",
            "Cell-oriented",
            "Frame-relay only",
          ],
          ans: "Byte-oriented",
          explanation:
            "PPP uses byte-oriented framing with octet-stuffing and 0x7E flags.",
        },
        {
          type: "mcq",
          q: "27. PPP commonly supports which authentication?",
          image: null,
          options: [
            "PAP/CHAP",
            "Kerberos only",
            "None",
            "TLS client certs only",
          ],
          ans: "PAP/CHAP",
          explanation:
            "PPP includes optional PAP and CHAP for link authentication.",
        },
        {
          type: "mcq",
          q: "28. PPP uses FCS for:",
          image: null,
          options: [
            "Encryption",
            "Error detection",
            "Routing",
            "Congestion control",
          ],
          ans: "Error detection",
          explanation: "PPP’s FCS is a CRC used to detect frame corruption.",
        },
        {
          type: "mcq",
          q: "29. HDLC is:",
          image: null,
          options: [
            "Byte-oriented",
            "Bit-oriented",
            "Message-oriented",
            "Cell-oriented",
          ],
          ans: "Bit-oriented",
          explanation:
            "HDLC interprets frames at bit level using bit-stuffing and 0x7E flags.",
        },
        {
          type: "mcq",
          q: "30. HDLC supports which topologies?",
          image: null,
          options: [
            "Only point-to-point",
            "Only multipoint",
            "Point-to-point and multipoint",
            "Only broadcast",
          ],
          ans: "Point-to-point and multipoint",
          explanation:
            "HDLC was designed for both point-to-point and multipoint WAN links.",
        },
        {
          type: "mcq",
          q: "31. HDLC frame types include:",
          image: null,
          options: ["I, S, U frames", "RST only", "SYN/FIN", "RTS/CTS"],
          ans: "I, S, U frames",
          explanation:
            "HDLC defines Information, Supervisory, and Unnumbered frames through the Control field.",
        },
        {
          type: "mcq",
          q: "32. Compared to PPP, HDLC natively includes:",
          image: null,
          options: [
            "Authentication methods",
            "Detailed control framing types",
            "IP header compression only",
            "VLAN tagging",
          ],
          ans: "Detailed control framing types",
          explanation:
            "HDLC emphasizes control via I/S/U frames; PPP emphasizes multi-protocol encapsulation and LCP/NCP options.",
        },
        {
          type: "mcq",
          q: "33. Multiple access protocols are needed when:",
          image: null,
          options: [
            "One device per medium",
            "Dedicated links only",
            "Many devices share one channel",
            "Only optical fiber is used",
          ],
          ans: "Many devices share one channel",
          explanation:
            "Shared media require contention or scheduling to coordinate transmissions.",
        },
        {
          type: "mcq",
          q: "34. Pure ALOHA sends:",
          image: null,
          options: [
            "Only in assigned slots",
            "Anytime without sensing",
            "Only after RTS/CTS",
            "After collision detection",
          ],
          ans: "Anytime without sensing",
          explanation:
            "Stations transmit immediately when data arrives, causing possible collisions.",
        },
        {
          type: "mcq",
          q: "35. Slotted ALOHA improves throughput by:",
          image: null,
          options: [
            "Using CD",
            "Dividing time into slots for aligned transmissions",
            "Carrier sensing",
            "Token passing",
          ],
          ans: "Dividing time into slots for aligned transmissions",
          explanation:
            "Time slots reduce vulnerable period since frames start only at slot boundaries.",
        },
        {
          type: "mcq",
          q: "36. Maximum throughput of Pure ALOHA is approximately:",
          image: null,
          options: ["36.8%", "18.4%", "50%", "9.6%"],
          ans: "18.4%",
          explanation:
            "Pure ALOHA’s peak normalized throughput is 1/(2e) ≈ 0.184 or 18.4%.",
        },
        {
          type: "mcq",
          q: "37. Maximum throughput of Slotted ALOHA is approximately:",
          image: null,
          options: ["36.8%", "18.4%", "50%", "73%"],
          ans: "36.8%",
          explanation:
            "Slotted ALOHA’s peak throughput is 1/e ≈ 0.368 due to reduced collisions.",
        },
        {
          type: "mcq",
          q: "38. CSMA stands for:",
          image: null,
          options: [
            "Carrier Sense Multiple Access",
            "Code Sense Multiple Access",
            "Carrier Slot Multiple Access",
            "Control Sense Multiple Access",
          ],
          ans: "Carrier Sense Multiple Access",
          explanation:
            "CSMA senses the medium before transmitting to reduce collisions compared to ALOHA.",
        },
        {
          type: "mcq",
          q: "39. 1-persistent CSMA policy:",
          image: null,
          options: [
            "Waits random time always",
            "Sends immediately when idle",
            "Sends with fixed probability <1",
            "Polls in order",
          ],
          ans: "Sends immediately when idle",
          explanation:
            "1-persistent continuously senses and transmits instantly upon idle detection.",
        },
        {
          type: "mcq",
          q: "40. Non-persistent CSMA policy:",
          image: null,
          options: [
            "Keeps sensing and sends immediately",
            "Backs off random time before sensing again",
            "Uses fixed probability on slots",
            "Tokenized order",
          ],
          ans: "Backs off random time before sensing again",
          explanation:
            "It waits a random time on busy to reduce collisions after the channel frees.",
        },
        {
          type: "mcq",
          q: "41. p-persistent CSMA is mainly used with:",
          image: null,
          options: [
            "Continuous time",
            "Slotted channels",
            "Token networks",
            "Full duplex only",
          ],
          ans: "Slotted channels",
          explanation:
            "In slotted channels, a station transmits with probability p in each idle slot.",
        },
        {
          type: "mcq",
          q: "42. CSMA/CD is practical in:",
          image: null,
          options: [
            "Classic shared coax or hubs",
            "Modern full-duplex switched Ethernet",
            "Token rings",
            "Wi-Fi",
          ],
          ans: "Classic shared coax or hubs",
          explanation:
            "Collision detection works on shared half-duplex media; switching removes collisions.",
        },
        {
          type: "mcq",
          q: "43. CSMA/CA primarily targets:",
          image: null,
          options: [
            "Wired coax Ethernet",
            "Wireless LANs",
            "Token bus",
            "SONET",
          ],
          ans: "Wireless LANs",
          explanation:
            "Wi-Fi uses CSMA/CA because collision detection is infeasible over radio signals.",
        },
        {
          type: "mcq",
          q: "44. Which mechanism supports CSMA/CA collision avoidance?",
          image: null,
          options: [
            "RTS/CTS handshakes",
            "CD signals on the wire",
            "Token holder priority",
            "Checksum retries only",
          ],
          ans: "RTS/CTS handshakes",
          explanation:
            "RTS/CTS reserves the medium and mitigates hidden terminal collisions in WLANs.",
        },
        {
          type: "mcq",
          q: "45. In reservation protocols, stations:",
          image: null,
          options: [
            "Transmit at will",
            "Reserve slots before sending",
            "Detect collisions",
            "Use CDMA codes",
          ],
          ans: "Reserve slots before sending",
          explanation:
            "Reservation allocates future slots for senders with regular demand, like in satellite links.",
        },
        {
          type: "mcq",
          q: "46. Polling uses:",
          image: null,
          options: [
            "Distributed token",
            "Central controller querying stations",
            "CD at receivers",
            "Random backoff",
          ],
          ans: "Central controller querying stations",
          explanation:
            "A primary station polls each secondary to grant transmit opportunity.",
        },
        {
          type: "mcq",
          q: "47. Token passing allows transmission when a station:",
          image: null,
          options: [
            "Senses idle medium",
            "Holds the token",
            "Wins random backoff",
            "Receives RTS",
          ],
          ans: "Holds the token",
          explanation:
            "Only the token holder may send, preventing collisions deterministically.",
        },
        {
          type: "mcq",
          q: "48. FDMA separates users by:",
          image: null,
          options: ["Codes", "Timeslots", "Frequencies", "VLANs"],
          ans: "Frequencies",
          explanation:
            "Each user occupies a distinct frequency band simultaneously in FDMA.",
        },
        {
          type: "mcq",
          q: "49. TDMA separates users by:",
          image: null,
          options: ["Codes", "Timeslots", "Frequencies", "Spreading gain"],
          ans: "Timeslots",
          explanation:
            "Users share a channel by taking turns in time slots in TDMA.",
        },
        {
          type: "mcq",
          q: "50. CDMA separates users by:",
          image: null,
          options: [
            "Orthogonal or pseudo-random codes",
            "Guard bands",
            "Preambles",
            "Tokens",
          ],
          ans: "Orthogonal or pseudo-random codes",
          explanation:
            "Each user has a unique spreading code so transmissions overlap without interference.",
        },
        {
          type: "mcq",
          q: "51. Token Bus IEEE standard is:",
          image: null,
          options: ["802.3", "802.4", "802.5", "802.11"],
          ans: "802.4",
          explanation:
            "Token Bus (IEEE 802.4) passes a token logically in order on a bus topology.",
        },
        {
          type: "mcq",
          q: "52. Token Ring IEEE standard is:",
          image: null,
          options: ["802.3", "802.4", "802.5", "802.15"],
          ans: "802.5",
          explanation:
            "Token Ring LANs (IEEE 802.5) circulate a token on a ring or star physical layout.",
        },
        {
          type: "mcq",
          q: "53. Token passing prevents collisions by:",
          image: null,
          options: [
            "Carrier sensing",
            "Central polling",
            "Exclusive transmission rights with token",
            "Backoff algorithms",
          ],
          ans: "Exclusive transmission rights with token",
          explanation:
            "Only the token holder transmits, eliminating contention collisions.",
        },
        {
          type: "mcq",
          q: "54. Ethernet access method historically is:",
          image: null,
          options: ["CSMA/CA", "CSMA/CD", "Token passing", "Reservation"],
          ans: "CSMA/CD",
          explanation:
            "Traditional Ethernet used CSMA/CD to detect and manage collisions.",
        },
        {
          type: "mcq",
          q: "55. Ethernet preamble length is:",
          image: null,
          options: ["7 bytes", "1 byte", "6 bytes", "4 bytes"],
          ans: "7 bytes",
          explanation:
            "The preamble is 7 bytes used for receiver synchronization.",
        },
        {
          type: "mcq",
          q: "56. Start Frame Delimiter (SFD) length is:",
          image: null,
          options: ["2 bytes", "1 byte", "4 bytes", "7 bytes"],
          ans: "1 byte",
          explanation: "The 1-byte SFD marks the start of the Ethernet frame.",
        },
        {
          type: "mcq",
          q: "57. Ethernet MAC addresses are:",
          image: null,
          options: ["4 bytes", "6 bytes", "8 bytes", "2 bytes"],
          ans: "6 bytes",
          explanation:
            "Source and destination MAC addresses each occupy 6 bytes.",
        },
        {
          type: "mcq",
          q: "58. Ethernet payload minimum (without VLAN) is:",
          image: null,
          options: ["0 bytes", "46 bytes", "64 bytes", "1500 bytes"],
          ans: "46 bytes",
          explanation:
            "If payload is shorter, padding is added to meet the 64-byte frame minimum.",
        },
        {
          type: "mcq",
          q: "59. Ethernet payload maximum (non-jumbo) is:",
          image: null,
          options: ["46 bytes", "1500 bytes", "1518 bytes", "9000 bytes"],
          ans: "1500 bytes",
          explanation:
            "The maximum Ethernet payload is 1500 bytes; total frame size is larger.",
        },
        {
          type: "mcq",
          q: "60. Ethernet FCS length is:",
          image: null,
          options: ["2 bytes", "3 bytes", "4 bytes", "6 bytes"],
          ans: "4 bytes",
          explanation:
            "Ethernet uses a 32-bit (4-byte) CRC for frame error detection.",
        },
        {
          type: "mcq",
          q: "61. The Length/Type field in Ethernet is:",
          image: null,
          options: ["1 byte", "2 bytes", "3 bytes", "4 bytes"],
          ans: "2 bytes",
          explanation:
            "A 2-byte field specifies frame length (802.3) or EtherType (Ethernet II).",
        },
        {
          type: "mcq",
          q: "62. Ethernet preamble and SFD together primarily help with:",
          image: null,
          options: [
            "Addressing",
            "Synchronization and frame boundary",
            "Encryption",
            "VLAN tagging",
          ],
          ans: "Synchronization and frame boundary",
          explanation:
            "They synchronize clocks and indicate where the frame begins.",
        },
        {
          type: "mcq",
          q: "63. Collision detection is impractical in Wi-Fi because:",
          image: null,
          options: [
            "Low bandwidth",
            "Hidden/exposed terminals and half-duplex radios",
            "No MAC layer",
            "No CRC",
          ],
          ans: "Hidden/exposed terminals and half-duplex radios",
          explanation:
            "Radios can’t sense while transmitting; hidden nodes make collision detection infeasible.",
        },
        {
          type: "mcq",
          q: "64. After a collision in CSMA/CD, a station waits:",
          image: null,
          options: [
            "Fixed delay",
            "Exponential backoff window",
            "Token grant",
            "CTS signal",
          ],
          ans: "Exponential backoff window",
          explanation:
            "Binary exponential backoff randomizes retransmissions to reduce repeated collisions.",
        },
        {
          type: "mcq",
          q: "65. In CSMA/CA, RTS/CTS mainly mitigates:",
          image: null,
          options: [
            "Capture effect",
            "Hidden terminal collisions",
            "Exposed terminal inefficiency only",
            "Near-far power issues",
          ],
          ans: "Hidden terminal collisions",
          explanation:
            "RTS/CTS reserves the medium so hidden nodes defer during data transmission.",
        },
      ],
    },
    {
      subname:
        "5.3 Network layer: Addressing (Internet address, classful address), Subnetting, Routing Protocols (RIP, OSPF, BGP, Unicast and multicast routing protocols), Routing algorithms (shortest path algorithm, flooding, distance vector routing, link state routing) Routing Protocols (ARP, RARP, IP, ICMP), and IPv6 (Packet formats, Extension headers, Transition from IPv4 to IPv6, and Multicasting).",
      blocks: [
        { type: "bold", text: "  Network Layer – Overview : " },
        {
          type: "text",
          text: " • The Network Layer (Layer 3) is responsible for delivering packets from source to destination across multiple networks. ",
        },
        {
          type: "text",
          text: " • It handles routing, addressing, and packet forwarding. ",
        },

        { type: "bold", text: " Addressing and Ip Address :  " },
        {
          type: "important",
          text: " • Ip Address : ",
          desc: " Unique Id For a Device. ",
        },
        {
          type: "important",
          text: " • Two parts : ",
          desc: " Network Address + Host Address. ",
        },
        {
          type: "text",
          text: " • Written in 32 bits (IPV4) eg => 192.168.1.1 .",
        },

        { type: "bold", text: " ClassFul IP Addresses :  " },
        {
          type: "important",
          text: " • Class A (0–126) : ",
          desc: " Used For Large networks. ",
        },
        {
          type: "important",
          text: " • Class B (128–191) : ",
          desc: " Used For Medium networks. ",
        },
        {
          type: "important",
          text: " • Class C (192–223) : ",
          desc: " Used For Small networks. ",
        },
        {
          type: "important",
          text: " • Class D (224–239) : ",
          desc: " Used For Multicasting (group communication). ",
        },
        {
          type: "important",
          text: " • Class E (240–255) : ",
          desc: " Used For Experimental/Future use. ",
        },
        {
          type: "important",
          text: " Problems : ",
          desc: " Wastes address space, not efficient.  ",
        },
        {
          type: "important",
          text: " Note : ",
          desc: "  127 is reserved for loopback (used for testing). ",
        },

        { type: "bold", text: " Private and Public IP Addresses : " },
        { type: "semibold", text: " A. Private IP :  " },
        {
          type: "text",
          text: "⟹ Used inside local networks; not routable on the Internet. ",
        },
        {
          type: "important",
          text: " • Class A : ",
          desc: " 10.0.0.0 – 10.255.255.255. ",
        },
        {
          type: "important",
          text: " • Class B : ",
          desc: " 172.16.0.0 – 172.31.255.255. ",
        },
        {
          type: "important",
          text: " • Class C : ",
          desc: " 192.168.0.0 – 192.168.255.255. ",
        },
        { type: "semibold", text: " B. Public IP : " },
        {
          type: "text",
          text: " ⟹ Used on the Internet, unique for each device, Can’t be reused.",
        },

        { type: "bold", text: " Subnetting : " },
        {
          type: "text",
          text: " • Dividing a big network into smaller parts called subnets. ",
        },
        {
          type: "text",
          text: " • Improves performance, reduces congestion, and enhances security. ",
        },
        {
          type: "text",
          text: " • Uses subnet mask to separate network and host portions. ",
        },

        { type: "semibold", text: " Important Subnetting Concepts : " },
        {
          type: "important",
          text: " • Block Size =  ",
          desc: " Network Addresses + Valid Host Addresses + Broadcast Addresses. ",
        },
        {
          type: "important",
          text: " • Network Address : ",
          desc: " First address (used for network identification). ",
        },
        {
          type: "important",
          text: " • Broadcast Address : ",
          desc: " Last address (used to send to all). ",
        },
        {
          type: "important",
          text: " • Valid Host Range : ",
          desc: " Between network and broadcast addresses. ",
        },
        {
          type: "important",
          text: " • Number of Subnets : ",
          desc: " 2ⁿ (where n = bits borrowed). ",
        },
        {
          type: "important",
          text: " • Number of Hosts per Subnet : ",
          desc: "  2ʰ - 2 (where h = host bits). ",
        },

        { type: "bold", text: " FLSM vs VLSM : " },
        {
          type: "important",
          text: " FLSM (Fixed Length Subnet Mask) : ",
          desc: " All subnets are equal in size. Easy but wasteful. ",
        },
        {
          type: "important",
          text: " VLSM (Variable Length Subnet Mask) :  ",
          desc: " Different subnet sizes. Saves IP addresses.  ",
        },

        { type: "bold", text: " Routing : " },
        {
          type: "text",
          text: " • Finding the best path for data to travel from source to destination. ",
        },
        {
          type: "text",
          text: " • Performed by routers using routing tables. ",
        },
        {
          type: "text",
          text: " • Can be Static (manual) or Dynamic (auto-updated using protocols).",
        },

        { type: "semibold", text: " Static Vs Dynamic Routing : " },
        { type: "image", src: routing },

        { type: "bold", text: " Dynamic Routing Protocols :   " },
        { type: "semibold", text: " A. Distance Vector Routing Protocols : " },
        { type: "text", text: " ⟹ Shares routes with neighbors only." },
        { type: "text", text: " ⟹ uses hop count. " },
        { type: "text", text: " ⟹ Uses Bellman Ford Algorithm." },
        { type: "text", text: " ⟹ eg : RIP, IGRP " },
        { type: "important", text: " • Advantage : ", desc: " Simple. " },
        {
          type: "important",
          text: " • Disadvantage : ",
          desc: " Slow, not scalable. ",
        },

        { type: "semibold", text: " Link State Routing Protocols :  " },
        { type: "text", text: " ⟹ Builds full network map." },
        {
          type: "text",
          text: " ⟹ Sends information to all routers, not just neighbor.",
        },
        {
          type: "text",
          text: " ⟹ uses shortest path algorithm i.e. Dijkstra's Algorithm. ",
        },
        { type: "text", text: " ⟹ eg : OSPF, IS-IS " },
        {
          type: "important",
          text: " • Advantage :  ",
          desc: " Fast, Scalable, Accurate. ",
        },
        {
          type: "important",
          text: " • Disadvantage : ",
          desc: " More Memory and Cpu Needed. ",
        },

        { type: "bold", text: " Common Protocols :   " },
        { type: "semibold", text: " A. RIP (Routing Information Protocol) : " },
        { type: "text", text: " • Distance vector protocol. " },
        { type: "text", text: " • Uses hop count as metric (max 15 hops). " },
        {
          type: "important",
          text: " • RIPv1 :",
          desc: " Broadcasts table to all routers. ",
        },
        {
          type: "important",
          text: " • RIPv2 :  ",
          desc: " Multicast + authentication support. ",
        },
        {
          type: "text",
          text: " •  Simple but not suitable for large networks. ",
        },

        { type: "semibold", text: " B.  OSPF (Open Shortest Path First) :  " },
        {
          type: "text",
          text: " • Link-state protocol using Dijkstra’s SPF algorithm. ",
        },
        {
          type: "text",
          text: " • Builds a map of the entire network using LSAs (Link State Advertisements).",
        },
        {
          type: "text",
          text: " • Recalculates routes automatically when topology changes. ",
        },
        {
          type: "text",
          text: " • Secure, fast, and scalable — used in large organizations.",
        },

        { type: "semibold", text: " C. BGP (Border Gateway Protocol)" },
        { type: "text", text: " • Main routing protocol of the Internet. " },
        {
          type: "important",
          text: " • Type: ",
          desc: "  Path Vector Protocol. ",
        },
        {
          type: "text",
          text: " • Chooses the best path based on several attributes (AS path, weight, local preference, etc.). ",
        },
        {
          type: "text",
          text: " • Manual configuration required; only sends updates when changes occur. ",
        },
        {
          type: "text",
          text: " • Used for connecting different networks globally (ISP-level routing).",
        },

        { type: "bold", text: " IPV4 VS IPV6 : " },
        { type: "image", src: ipv },

        { type: "bold", text: " IPv6 Address Types " },
        {
          type: "important",
          text: " • Unicast :",
          desc: "  One-to-one communication. ",
        },
        {
          type: "important",
          text: " • Anycast :",
          desc: "  One-to-nearest (used for load balancing). ",
        },
        {
          type: "important",
          text: " • Multicast : ",
          desc: "  One-to-many communication. ",
        },

        { type: "bold", text: " IPv6 Transition Techniques " },
        {
          type: "important",
          text: " Tunneling : ",
          desc: " Sends IPv6 packets inside IPv4 packets. ",
        },
        {
          type: "important",
          text: " Dual Stack :",
          desc: " Devices run both IPv4 and IPv6 together for smooth transition. ",
        },

        { type: "bold", text: "  ARP & RARP : " },
        {
          type: "important",
          text: " •  ARP (Address Resolution Protocol) :  ",
          desc: " Finds MAC address from an IP address. ",
        },
        {
          type: "important",
          text: " • RARP (Reverse ARP) : ",
          desc: " Finds IP address from a known MAC address. ",
        },
        {
          type: "text",
          text: " ⟹  Both work at the network layer. ",
          center: true,
        },

        { type: "bold", text: " Multicasting : " },
        {
          type: "text",
          text: " • One sender → Many receivers (specific group). ",
        },
        { type: "text", text: " • More efficient than broadcasting. " },
        {
          type: "text",
          text: " • IPv4 multicast range: 224.0.0.0 to 239.255.255.255 ",
        },

        {
          type: "mcq",
          q: "1. Which OSI layer is responsible for routing packets between different networks?",
          image: null,
          options: ["Data Link", "Network", "Transport", "Session"],
          ans: "Network",
          explanation:
            "The Network Layer (Layer 3) handles routing and addressing to forward packets between networks.",
        },
        {
          type: "mcq",
          q: "2. An IPv4 address has how many bits?",
          image: null,
          options: ["16", "32", "48", "64"],
          ans: "32",
          explanation:
            "IPv4 addresses are 32 bits long and are usually written in dotted decimal format.",
        },
        {
          type: "mcq",
          q: "3. How many parts does an IPv4 address have?",
          image: null,
          options: ["One", "Two", "Three", "Four"],
          ans: "Two",
          explanation:
            "An IPv4 address consists of a network part and a host part.",
        },
        {
          type: "mcq",
          q: "4. Which class has IP addresses ranging from 192 to 223 in the first octet?",
          image: null,
          options: ["A", "B", "C", "D"],
          ans: "C",
          explanation:
            "Class C addresses are for small networks and range from 192–223.",
        },
        {
          type: "mcq",
          q: "5. What is the reserved IP address 127.x.x.x used for?",
          image: null,
          options: ["Multicasting", "Broadcast", "Experimental", "Loopback"],
          ans: "Loopback",
          explanation:
            "127.0.0.1 is reserved for loopback testing and used for internal communication.",
        },
        {
          type: "mcq",
          q: "6. Which IP address class is used mostly for multicasting?",
          image: null,
          options: ["Class A", "Class C", "Class D", "Class E"],
          ans: "Class D",
          explanation:
            "Class D addresses (224–239) are reserved for multicast communication.",
        },
        {
          type: "mcq",
          q: "7. Which addresses are reserved for future or experimental use?",
          image: null,
          options: ["Class A", "Class C", "Class D", "Class E"],
          ans: "Class E",
          explanation:
            "Class E (240–255) addresses are experimental and not used in normal operations.",
        },
        {
          type: "mcq",
          q: "8. Which of the following is a valid Class A private IP address?",
          image: null,
          options: ["10.5.1.1", "172.16.4.1", "192.168.5.10", "224.1.1.1"],
          ans: "10.5.1.1",
          explanation:
            "10.0.0.0 – 10.255.255.255 is the private IP range for Class A networks.",
        },
        {
          type: "mcq",
          q: "9. What range is used for private Class B addresses?",
          image: null,
          options: [
            "192.168.0.0 – 192.168.255.255",
            "10.0.0.0 – 10.255.255.255",
            "172.16.0.0 – 172.31.255.255",
            "224.0.0.0 – 239.255.255.255",
          ],
          ans: "172.16.0.0 – 172.31.255.255",
          explanation: "Private Class B range is 172.16.0.0 to 172.31.255.255.",
        },
        {
          type: "mcq",
          q: "10. Which of the following is not routable on the Internet?",
          image: null,
          options: ["Public IP", "Private IP", "Both", "Multicast IP"],
          ans: "Private IP",
          explanation:
            "Private IP addresses are non-routable and used only in local networks.",
        },
        {
          type: "mcq",
          q: "11. Subnetting divides a large network into:",
          image: null,
          options: [
            "Larger networks",
            "Data centers",
            "Smaller subnets",
            "Different classes",
          ],
          ans: "Smaller subnets",
          explanation:
            "Subnetting splits a big network into smaller, manageable parts.",
        },
        {
          type: "mcq",
          q: "12. The formula for calculating the number of hosts per subnet is:",
          image: null,
          options: ["2ⁿ – 2", "n²", "2n + 2", "n x 2"],
          ans: "2ⁿ – 2",
          explanation:
            "Number of hosts = 2ʰ - 2, where h is the number of host bits.",
        },
        {
          type: "mcq",
          q: "13. Which one is used to announce the network segment?",
          image: null,
          options: [
            "Network Address",
            "Broadcast Address",
            "Valid Host Address",
            "Public Address",
          ],
          ans: "Network Address",
          explanation: "The network address identifies the subnet itself.",
        },
        {
          type: "mcq",
          q: "14. The last address in a subnet is known as:",
          image: null,
          options: [
            "Private address",
            "Broadcast address",
            "Gateway address",
            "Router address",
          ],
          ans: "Broadcast address",
          explanation:
            "The broadcast address is used to send data to all devices in a subnet.",
        },
        {
          type: "mcq",
          q: "15. What is the block size in a subnet?",
          image: null,
          options: [
            "Only valid hosts",
            "Network and broadcast only",
            "Network + valid hosts + broadcast",
            "Public addresses only",
          ],
          ans: "Network + valid hosts + broadcast",
          explanation:
            "The block size includes the network, all valid hosts, and the broadcast address.",
        },
        {
          type: "mcq",
          q: "16. What is the advantage of VLSM (Variable Length Subnet Mask) over FLSM?",
          image: null,
          options: [
            "All subnets are equal",
            "Only one subnet per network",
            "Saves IP addresses",
            "Increases wastage",
          ],
          ans: "Saves IP addresses",
          explanation:
            "VLSM optimizes address use by allowing different subnet sizes.",
        },
        {
          type: "mcq",
          q: "17. Which of the following is the main reason for using subnetting?",
          image: null,
          options: [
            "Reduce wires",
            "Improve performance and security",
            "Increase network size",
            "Use more cables",
          ],
          ans: "Improve performance and security",
          explanation:
            "Subnetting improves efficiency and limits broadcast traffic.",
        },
        {
          type: "mcq",
          q: "18. What is a subnet mask used for?",
          image: null,
          options: [
            "Identify the gateway",
            "Separate network and host portion",
            "Encrypt data",
            "Assign DNS",
          ],
          ans: "Separate network and host portion",
          explanation:
            "Subnet masks help identify which part of the IP address is the network portion.",
        },
        {
          type: "mcq",
          q: "19. How many subnets result if you borrow 3 bits?",
          image: null,
          options: ["4", "6", "8", "16"],
          ans: "8",
          explanation:
            "2³ = 8 subnets are created by borrowing 3 bits from the host part.",
        },
        {
          type: "mcq",
          q: "20. Routers use which for making forwarding decisions?",
          image: null,
          options: [
            "Subnet mask",
            "Routing table",
            "Port forwarding",
            "ARP cache",
          ],
          ans: "Routing table",
          explanation:
            "Routers refer to their routing tables to decide packet forwarding.",
        },
        {
          type: "mcq",
          q: "21. Routing is defined as:",
          image: null,
          options: [
            "Hub operation",
            "Forwarding traffic based on routing tables",
            "Spanning Tree calculation",
            "Encapsulation of frames",
          ],
          ans: "Forwarding traffic based on routing tables",
          explanation:
            "Routing means selecting the best path for packet delivery.",
        },
        {
          type: "mcq",
          q: "22. A static route is:",
          image: null,
          options: [
            "Entered manually",
            "Learned dynamically",
            "Only used in WiFi",
            "Unused in WAN",
          ],
          ans: "Entered manually",
          explanation:
            "Static routes are manually configured by the network administrator.",
        },
        {
          type: "mcq",
          q: "23. A dynamic routing protocol that uses hop count:",
          image: null,
          options: ["OSPF", "BGP", "RIP", "STP"],
          ans: "RIP",
          explanation:
            "RIP uses hop count as a metric to determine best routes.",
        },
        {
          type: "mcq",
          q: "24. What is the maximum hop count for RIP?",
          image: null,
          options: ["8", "15", "31", "64"],
          ans: "15",
          explanation: "RIP considers any route beyond 15 hops as unreachable.",
        },
        {
          type: "mcq",
          q: "25. OSPF is classified as which routing protocol type?",
          image: null,
          options: ["Distance vector", "Link state", "Path vector", "Hybrid"],
          ans: "Link state",
          explanation:
            "OSPF is a link-state protocol that builds a map of the network topology.",
        },
        {
          type: "mcq",
          q: "26. Which algorithm does OSPF use to select the shortest path?",
          image: null,
          options: ["Bellman-Ford", "Round robin", "Dijkstra", "Random"],
          ans: "Dijkstra",
          explanation:
            "OSPF uses the Dijkstra (SPF) algorithm for shortest path calculation.",
        },
        {
          type: "mcq",
          q: "27. Which protocol was designed for routing between ISPs (autonomous systems)?",
          image: null,
          options: ["RIP", "OSPF", "BGP", "ARP"],
          ans: "BGP",
          explanation:
            "BGP handles routing between different networks (interdomain routing).",
        },
        {
          type: "mcq",
          q: "28. Which metric does OSPF use?",
          image: null,
          options: ["Hop count", "Delay", "Cost", "Jitter"],
          ans: "Cost",
          explanation:
            "OSPF uses cost, usually based on bandwidth, to select the best route.",
        },
        {
          type: "mcq",
          q: "29. Which protocol uses the Bellman-Ford algorithm?",
          image: null,
          options: ["OSPF", "BGP", "RIP", "IS-IS"],
          ans: "RIP",
          explanation:
            "RIP uses the Bellman-Ford algorithm for route computation.",
        },
        {
          type: "mcq",
          q: "30. What is the main advantage of link-state over distance-vector?",
          image: null,
          options: [
            "Lower CPU use",
            "Simpler config",
            "Fast convergence, accurate topology",
            "Uses hop count",
          ],
          ans: "Fast convergence, accurate topology",
          explanation:
            "Link-state protocols quickly adapt and have a full view of the network.",
        },
        {
          type: "mcq",
          q: "31. Which protocol supports authentication for updates in RIPv2, but not RIPv1?",
          image: null,
          options: ["OSPF", "RIP", "BGP", "IS-IS"],
          ans: "RIP",
          explanation:
            "RIPv2 supports authentication and multicast updates, unlike RIPv1 which uses broadcast.",
        },
        {
          type: "mcq",
          q: "32. Which protocol is the main routing protocol of the Internet?",
          image: null,
          options: ["RIP", "IS-IS", "OSPF", "BGP"],
          ans: "BGP",
          explanation:
            "BGP (Border Gateway Protocol) is used for global Internet routing between ISPs.",
        },
        {
          type: "mcq",
          q: "33. What information is NOT included in a routing table entry?",
          image: null,
          options: [
            "Destination network",
            "Cost/metric",
            "MAC address",
            "Next hop",
          ],
          ans: "MAC address",
          explanation:
            "MAC addresses are used at the Data Link Layer, not in Network Layer routing tables.",
        },
        {
          type: "mcq",
          q: "34. Which protocol type is BGP?",
          image: null,
          options: ["Static", "Link-state", "Path-vector", "Hybrid"],
          ans: "Path-vector",
          explanation:
            "BGP is a path-vector protocol that uses AS paths to determine routes between networks.",
        },
        {
          type: "mcq",
          q: "35. In subnetting, which address is used to represent the whole network?",
          image: null,
          options: [
            "Host address",
            "Network address",
            "Broadcast address",
            "Loopback address",
          ],
          ans: "Network address",
          explanation:
            "The network address identifies the entire subnet or network segment.",
        },
        {
          type: "mcq",
          q: "36. Which part of an IP address identifies the subnet?",
          image: null,
          options: [
            "Host bits",
            "Most significant bits",
            "Subnet mask",
            "All bits",
          ],
          ans: "Subnet mask",
          explanation:
            "The subnet mask determines which bits belong to the network and which to the host.",
        },
        {
          type: "mcq",
          q: "37. A /24 CIDR prefix represents how many host addresses?",
          image: null,
          options: ["254", "255", "256", "512"],
          ans: "254",
          explanation:
            "/24 leaves 8 host bits, so 2⁸ − 2 = 254 usable host addresses.",
        },
        {
          type: "mcq",
          q: "38. Who performs packet forwarding and routing?",
          image: null,
          options: ["Switch", "Hub", "Router", "Bridge"],
          ans: "Router",
          explanation:
            "Routers work at Layer 3, making routing and forwarding decisions for packets.",
        },
        {
          type: "mcq",
          q: "39. What is the primary difference between static and dynamic routing?",
          image: null,
          options: [
            "One uses TCP, one uses UDP",
            "One is manually set, one updates via protocol",
            "Static is for IPv6 only",
            "None",
          ],
          ans: "One is manually set, one updates via protocol",
          explanation:
            "Static routes are manually configured, while dynamic routes are learned through routing protocols.",
        },
        {
          type: "mcq",
          q: "40. Which layer uses ARP to resolve IP addresses to MAC addresses?",
          image: null,
          options: ["Physical", "Data Link", "Network", "Application"],
          ans: "Network",
          explanation:
            "The Network Layer uses ARP to map IP addresses to corresponding MAC addresses.",
        },
        {
          type: "mcq",
          q: "41. Which protocol translates a known MAC address to an IP address?",
          image: null,
          options: ["DHCP", "RARP", "BOOTP", "DNS"],
          ans: "RARP",
          explanation:
            "RARP (Reverse ARP) is used by devices to obtain their IP address using a known MAC.",
        },
        {
          type: "mcq",
          q: "42. Which protocol is used to find MAC from IP?",
          image: null,
          options: ["ARP", "BGP", "RARP", "OSPF"],
          ans: "ARP",
          explanation:
            "ARP finds the MAC address that corresponds to a given IP address.",
        },
        {
          type: "mcq",
          q: "43. A broadcast sent to all hosts on a network uses which address?",
          image: null,
          options: ["First", "Last", "Random", "Private"],
          ans: "Last",
          explanation:
            "The last address in a subnet is reserved as the broadcast address.",
        },
        {
          type: "mcq",
          q: "44. The main benefit of multicasting is:",
          image: null,
          options: [
            "Uses less IP addresses",
            "Efficiency for group communication",
            "Encrypts traffic",
            "Slows networks",
          ],
          ans: "Efficiency for group communication",
          explanation:
            "Multicasting allows one sender to efficiently reach multiple receivers at once.",
        },
        {
          type: "mcq",
          q: "45. The multicast address range in IPv4 is:",
          image: null,
          options: ["224–239", "10–17", "192–223", "245–255"],
          ans: "224–239",
          explanation:
            "IPv4 multicast addresses range from 224.0.0.0 to 239.255.255.255.",
        },
        {
          type: "mcq",
          q: "46. IPv6 uses how many bits per address?",
          image: null,
          options: ["32", "48", "64", "128"],
          ans: "128",
          explanation:
            "IPv6 addresses are 128 bits long, providing a much larger address space.",
        },
        {
          type: "mcq",
          q: "47. Which IPv6 address type is used for one-to-one delivery?",
          image: null,
          options: ["Unicast", "Anycast", "Multicast", "Broadcast"],
          ans: "Unicast",
          explanation:
            "Unicast delivers packets to a single, specific destination device.",
        },
        {
          type: "mcq",
          q: "48. Which IPv6 feature allows a single address to reach the nearest receiver among a group?",
          image: null,
          options: ["Multicast", "Anycast", "Unicast", "Broadcast"],
          ans: "Anycast",
          explanation:
            "Anycast routes packets to the closest node among several possible destinations.",
        },
        {
          type: "mcq",
          q: "49. What transition technology lets IPv6 traffic traverse IPv4-only infrastructure?",
          image: null,
          options: ["Tunneling", "ICMP", "NAT64", "ARP"],
          ans: "Tunneling",
          explanation:
            "IPv6 tunneling encapsulates IPv6 packets within IPv4 packets for compatibility.",
        },
        {
          type: "mcq",
          q: "50. Which dual-stack approach supports both IPv4 and IPv6 simultaneously?",
          image: null,
          options: ["Only IPv4", "Only IPv6", "Dual-stack", "NAT"],
          ans: "Dual-stack",
          explanation:
            "Dual-stack allows devices to run both IPv4 and IPv6 protocols at the same time.",
        },
        {
          type: "mcq",
          q: "51. A public IP address:",
          image: null,
          options: [
            "Is unique on the Internet",
            "Can be used in private LANs",
            "Always starts with 10",
            "Not routable",
          ],
          ans: "Is unique on the Internet",
          explanation:
            "Public IPs are globally unique and required for Internet communication.",
        },
        {
          type: "mcq",
          q: "52. Which of the following is NOT an advantage of subnetting?",
          image: null,
          options: [
            "Improved network security",
            "Improved network performance",
            "Greater address wastage",
            "Reduced broadcast domains",
          ],
          ans: "Greater address wastage",
          explanation:
            "Subnetting reduces address wastage by efficiently dividing networks.",
        },
        {
          type: "mcq",
          q: "53. Which class is 172.31.255.0 a part of?",
          image: null,
          options: ["A", "B", "C", "E"],
          ans: "B",
          explanation: "172.31.x.x belongs to the private Class B range.",
        },
        {
          type: "mcq",
          q: "54. How many networks does borrowing 4 bits provide?",
          image: null,
          options: ["4", "8", "12", "16"],
          ans: "16",
          explanation: "Borrowing 4 bits gives 2⁴ = 16 subnets.",
        },
        {
          type: "mcq",
          q: "55. The term “host bits” refers to:",
          image: null,
          options: [
            "Bits for the network",
            "Bits for subnetting",
            "Remaining bits for devices within each subnet",
            "Broadcast bits",
          ],
          ans: "Remaining bits for devices within each subnet",
          explanation:
            "Host bits determine how many devices can exist in a subnet.",
        },
        {
          type: "mcq",
          q: "56. Which is true about static routing?",
          image: null,
          options: [
            "Routes update automatically",
            "No need for administrator entry",
            "Simple, low-resource",
            "Always loads fastest route",
          ],
          ans: "Simple, low-resource",
          explanation:
            "Static routing is easy to configure and doesn’t require extra CPU or bandwidth.",
        },
        {
          type: "mcq",
          q: "57. Which network layer protocol maintains full network topology in every router?",
          image: null,
          options: ["RIP", "OSPF", "RARP", "ARP"],
          ans: "OSPF",
          explanation:
            "OSPF stores a complete map of the network topology in each router.",
        },
        {
          type: "mcq",
          q: "58. Which routing protocol is used for Interior Gateway in large companies?",
          image: null,
          options: ["EIGRP", "IS-IS", "BGP", "ARP"],
          ans: "IS-IS",
          explanation:
            "IS-IS is a link-state protocol widely used for large internal enterprise routing.",
        },
        {
          type: "mcq",
          q: "59. Which of the following pairs correctly matches protocol and use?",
          image: null,
          options: [
            "ARP – MAC to IP",
            "RARP – IP to MAC",
            "ARP – IP to MAC",
            "RIP – IPv6 routing",
          ],
          ans: "ARP – IP to MAC",
          explanation:
            "ARP resolves IP addresses into MAC addresses for communication on LANs.",
        },
        {
          type: "mcq",
          q: "60. What is the purpose of ARP in a network?",
          image: null,
          options: [
            "Translate IP address to MAC address",
            "Translate MAC address to IP address",
            "Routing packets",
            "Encrypt data",
          ],
          ans: "Translate IP address to MAC address",
          explanation:
            "ARP maps an IP address to a MAC address on the local network, enabling local packet delivery.",
        },
        {
          type: "mcq",
          q: "61. Which protocol is used to find an IP address when the MAC address is known?",
          image: null,
          options: ["ARP", "RARP", "DHCP", "ICMP"],
          ans: "RARP",
          explanation:
            "Reverse ARP (RARP) lets devices discover their IP address using a known MAC address, often for diskless booting.",
        },
        {
          type: "mcq",
          q: "62. What is the IPv6 unicast communication type?",
          image: null,
          options: ["One-to-many", "One-to-one", "Many-to-one", "Many-to-many"],
          ans: "One-to-one",
          explanation:
            "IPv6 unicast provides one-to-one communication between two devices, similar to IPv4 unicast.",
        },
        {
          type: "mcq",
          q: "63. What type of IPv6 address is used for load balancing by routing to the nearest node?",
          image: null,
          options: ["Unicast", "Anycast", "Multicast", "Broadcast"],
          ans: "Anycast",
          explanation:
            "Anycast routes traffic to the nearest or most efficient receiver among nodes sharing the same address.",
        },
        {
          type: "mcq",
          q: "64. What is multicast communication in networking?",
          image: null,
          options: [
            "One sender to one receiver",
            "One sender to many specific receivers",
            "One sender to all nodes",
            "Many senders to one receiver",
          ],
          ans: "One sender to many specific receivers",
          explanation:
            "Multicast allows one sender to transmit data efficiently to multiple selected receivers.",
        },
        {
          type: "mcq",
          q: "65. What is the IPv4 multicast address range?",
          image: null,
          options: [
            "224.0.0.0 to 239.255.255.255",
            "192.168.0.0 to 192.168.255.255",
            "10.0.0.0 to 10.255.255.255",
            "240.0.0.0 to 255.255.255.255",
          ],
          ans: "224.0.0.0 to 239.255.255.255",
          explanation:
            "IPv4 multicast communication uses the range 224.0.0.0 to 239.255.255.255.",
        },
        {
          type: "mcq",
          q: "66. What is tunneling in IPv6 transition techniques?",
          image: null,
          options: [
            "Sending IPv6 inside IPv4 packets",
            "Running IPv6 and IPv4 separately",
            "Using only IPv6",
            "Converting IPv6 to IPv4",
          ],
          ans: "Sending IPv6 inside IPv4 packets",
          explanation:
            "Tunneling encapsulates IPv6 packets inside IPv4 packets to pass through IPv4 networks.",
        },
        {
          type: "mcq",
          q: "67. What is dual stack in IPv6 transition methods?",
          image: null,
          options: [
            "Running IPv6 only",
            "Running IPv4 only",
            "Running both IPv4 and IPv6",
            "Using proxies",
          ],
          ans: "Running both IPv4 and IPv6",
          explanation:
            "Dual stack allows devices to operate on both IPv4 and IPv6 networks simultaneously for easier transition.",
        },
        {
          type: "mcq",
          q: "68. Which of the following protocols is mainly responsible for inter-domain routing?",
          image: null,
          options: ["RIP", "OSPF", "IGRP", "BGP"],
          ans: "BGP",
          explanation:
            "BGP (Border Gateway Protocol) is used for routing between autonomous systems across the Internet.",
        },
        {
          type: "mcq",
          q: "69. Which routing protocol uses the Bellman-Ford algorithm?",
          image: null,
          options: ["OSPF", "BGP", "RIP", "IS-IS"],
          ans: "RIP",
          explanation:
            "RIP (Routing Information Protocol) applies the Bellman-Ford algorithm to calculate the best routes.",
        },
      ],
    },
    {
      subname:
        "5.4 Transport layer: The transport service, Transport protocols, Port and Socket, Connection establishment & Connection release, Flow control & buffering, Multiplexing & de-multiplexing, Congestion control algorithm.",
      blocks: [
        { type: "bold", text: " Transport Layer Overview : " },
        {
          type: "text",
          text: " • The Transport Layer provides reliable, end-to-end communication between processes on different devices, handling data integrity, error correction, flow control, and congestion control. ",
        },
        {
          type: "text",
          text: " • It supports both connection-oriented (TCP, reliable) and connectionless (UDP, fast) transmission, enabling multiple applications to use the network efficiently.",
        },

        { type: "bold", text: " Responsibilities of Transport Layer : " },
        {
          type: "important",
          text: " • Process-to-Process Delivery :",
          desc: "  Transfers data between specific applications on different devices (e.g., browser ↔ web server).  ",
        },
        {
          type: "important",
          text: " • End-to-End Connection :",
          desc: "  Connects source and destination hosts directly.  ",
        },
        {
          type: "important",
          text: " • Multiplexing/Demultiplexing :  ",
          desc: " Allows multiple apps to share the same network connection. ",
        },
        {
          type: "important",
          text: " • Flow Control : ",
          desc: "  Ensures sender doesn’t send data faster than the receiver can handle. ",
        },
        {
          type: "important",
          text: " • Error Control :",
          desc: "   Detects and corrects data errors. ",
        },
        {
          type: "important",
          text: " • Congestion Control: ",
          desc: " Prevents network overload. ",
        },

        { type: "bold", text: "  TCP VS UDP : " },
        { type: "image", src: tcp },

        { type: "bold", text: " Port and Socket :  " },
        {
          type: "important",
          text: " • Port :  ",
          desc: " A unique number assigned to identify an application (e.g., port 80 = HTTP).  ",
        },
        {
          type: "important",
          text: " • Socket : ",
          desc: " Combination of IP address + Port number (used for process communication ). ",
        },
        {
          type: "text",
          text: " Total ports = 65,535, of which 0–1023 are well-known ports (used by system processes). ",
        },
        { type: "image", src: port },

        { type: "bold", text: " TCP Three-Way Handshake : " },
        {
          type: "text",
          text: " • This is how TCP establishes a reliable connection: ",
        },
        {
          type: "important",
          text: "1. SYN : ",
          desc: "  Client sends a connection request to the server. ",
        },
        {
          type: "important",
          text: "2. SYN-ACK : ",
          desc: " Server acknowledges and agrees. ",
        },
        {
          type: "important",
          text: "3. ACK : ",
          desc: " Client confirms, and connection starts. ",
        },
        { type: "semibold", text: " • Purpose " },
        {
          type: "text",
          text: " ⟹ To synchronize sequence numbers and ensure both devices are ready for communication.",
          center: true,
        },

        { type: "bold", text: "  Flow Control (Sliding Window Protocol) : " },
        {
          type: "text",
          text: " • Flow control prevents the sender from overwhelming the receiver. ",
        },
        { type: "text", text: " ⟹ TCP uses a Sliding Window mechanism : " },
        {
          type: "text",
          text: " • Sender can send multiple packets before needing acknowledgment. ",
          center: true,
        },
        {
          type: "text",
          text: " • Each packet has a sequence number. ",
          center: true,
        },
        {
          type: "text",
          text: " • The window size determines how many packets can be sent at once.",
          center: true,
        },

        { type: "bold", text: " Congestion Control : " },
        {
          type: "text",
          text: " ⟹ When too much data is sent too quickly, the network becomes congested (slow). ",
          center: true,
        },
        {
          type: "text",
          text: " ⟹ Congestion Control manages data flow to prevent overload and maintain network efficiency. ",
          center: true,
        },

        { type: "bold", text: " Traffic Shaping Algorithms :  " },
        {
          type: "important",
          text: " • Leaky Bucket : ",
          desc: " fixed rate, Less flexible, Smooth, steady flow. Remove burst of traffic.",
        },
        {
          type: "important",
          text: " • Token Bucket",
          desc: " Variable rate (bursty allowed), More flexible and supports different Quality Of Service (QOS).,  ",
        },

        {
          type: "mcq",
          q: "1. What is the main function of the Transport Layer?",
          image: null,
          options: [
            "Manage end-to-end communication",
            "Handle IP addressing",
            "Route packets",
            "Encrypt application data",
          ],
          ans: "Manage end-to-end communication",
          explanation:
            "The Transport Layer provides reliable process-to-process delivery between hosts.",
        },
        {
          type: "mcq",
          q: "2. Which protocol offers reliable, connection-oriented service in the Transport Layer?",
          image: null,
          options: ["UDP", "TCP", "ICMP", "IP"],
          ans: "TCP",
          explanation:
            "TCP uses acknowledgments and sequence numbers to guarantee delivery.",
        },
        {
          type: "mcq",
          q: "3. Which protocol is connectionless and faster, but not guaranteed?",
          image: null,
          options: ["TCP", "UDP", "FTP", "SMTP"],
          ans: "UDP",
          explanation:
            "UDP is connectionless, lightweight, and fast—used for time-sensitive applications.",
        },
        {
          type: "mcq",
          q: "4. Process-to-process delivery is enabled by:",
          image: null,
          options: [
            "ARP",
            "Socket and port numbers",
            "DNS",
            "IP header checksum",
          ],
          ans: "Socket and port numbers",
          explanation:
            "Sockets combine IP address + port to direct traffic to the correct application.",
        },
        {
          type: "mcq",
          q: "5. Which is a unique identifier for an application/process on a device?",
          image: null,
          options: ["IP address", "MAC address", "Port number", "Subnet mask"],
          ans: "Port number",
          explanation:
            "Ports help demultiplex traffic to specific applications per device.",
        },
        {
          type: "mcq",
          q: "6. What is the range for well-known ports?",
          image: null,
          options: ["0–1023", "0–4095", "0–65535", "1024–49151"],
          ans: "0–1023",
          explanation:
            "Ports 0–1023 are reserved for system services like HTTP (80), FTP (21), etc.",
        },
        {
          type: "mcq",
          q: "7. How many total port numbers exist in the Transport Layer?",
          image: null,
          options: ["1,024", "65,535", "4,096", "20,000"],
          ans: "65,535",
          explanation: "TCP/UDP ports are 16-bit numbers; total = 65,535.",
        },
        {
          type: "mcq",
          q: "8. A socket is a combination of:",
          image: null,
          options: [
            "IP address only",
            "Port only",
            "IP and Port",
            "MAC and Port",
          ],
          ans: "IP and Port",
          explanation:
            "Socket = IP + Port, uniquely identifying a network endpoint.",
        },
        {
          type: "mcq",
          q: "9. Which protocol uses a three-way handshake to establish a connection?",
          image: null,
          options: ["UDP", "TCP", "ARP", "DHCP"],
          ans: "TCP",
          explanation:
            "TCP uses SYN, SYN-ACK, ACK steps for reliable connection setup.",
        },
        {
          type: "mcq",
          q: "10. TCP three-way handshake steps are:",
          image: null,
          options: [
            "SYN, SYN-ACK, ACK",
            "ACK, SYN, SYN-ACK",
            "SYN, ACK, SYN-ACK",
            "SYN, FIN, ACK",
          ],
          ans: "SYN, SYN-ACK, ACK",
          explanation: "Proper handshake order synchronizes both endpoints.",
        },
        {
          type: "mcq",
          q: "11. Which protocol is preferred for real-time applications like VoIP or video streaming?",
          image: null,
          options: ["TCP", "UDP", "SMTP", "ICMP"],
          ans: "UDP",
          explanation:
            "UDP’s speed and low overhead suit delay-sensitive traffic.",
        },
        {
          type: "mcq",
          q: "12. What is the role of multiplexing in Transport Layer?",
          image: null,
          options: [
            "Routing frames",
            "Allow multiple applications sharing a network connection",
            "Encrypting data",
            "Assigning MAC addresses",
          ],
          ans: "Allow multiple applications sharing a network connection",
          explanation:
            "Multiplexing combines different app data over one channel.",
        },
        {
          type: "mcq",
          q: "13. Which protocol transmits data without guaranteeing order or delivery?",
          image: null,
          options: ["TCP", "UDP", "FTP", "HTTP"],
          ans: "UDP",
          explanation:
            "UDP sends datagrams—delivery and order are not guaranteed.",
        },
        {
          type: "mcq",
          q: "14. Which Transport Layer mechanism ensures data integrity and error correction?",
          image: null,
          options: ["Checksum", "ARP", "Subnetting", "NAT"],
          ans: "Checksum",
          explanation:
            "TCP/UDP include checksums to detect transmission errors.",
        },
        {
          type: "mcq",
          q: "15. Flow control in TCP prevents:",
          image: null,
          options: [
            "Network congestion",
            "Receiver overload",
            "Duplicate packets",
            "Loopback issues",
          ],
          ans: "Receiver overload",
          explanation:
            "By limiting transmission rate, TCP avoids overwhelming the receiver.",
        },
        {
          type: "mcq",
          q: "16. Sliding Window protocol is used for:",
          image: null,
          options: [
            "Flow control",
            "Encryption",
            "MAC assignment",
            "Address translation",
          ],
          ans: "Flow control",
          explanation:
            "It lets TCP send multiple packets before needing an acknowledgment.",
        },
        {
          type: "mcq",
          q: "17. Congestion control works by:",
          image: null,
          options: [
            "Preventing duplicate flows",
            "Managing data rate to avoid overload",
            "Encrypting packets",
            "Assigning socket numbers",
          ],
          ans: "Managing data rate to avoid overload",
          explanation:
            "It adjusts transmission when the network gets crowded, avoiding delays.",
        },
        {
          type: "mcq",
          q: "18. How does TCP ensure in-order delivery of data segments?",
          image: null,
          options: [
            "Port numbers",
            "Sequence numbers",
            "Acknowledgments only",
            "Flow control",
          ],
          ans: "Sequence numbers",
          explanation:
            "TCP uses sequence numbers so receiver can reassemble segments in order.",
        },
        {
          type: "mcq",
          q: "19. UDP header size is:",
          image: null,
          options: ["20 bytes", "12 bytes", "8 bytes", "60 bytes"],
          ans: "8 bytes",
          explanation:
            "UDP’s simple header allows faster, less resource-intensive communication.",
        },
        {
          type: "mcq",
          q: "20. TCP header can range from:",
          image: null,
          options: [
            "8–20 bytes",
            "20–60 bytes",
            "30–100 bytes",
            "64–128 bytes",
          ],
          ans: "20–60 bytes",
          explanation: "TCP header varies due to optional fields.",
        },
        {
          type: "mcq",
          q: "21. Multiplexing allows:",
          image: null,
          options: [
            "Only one app per connection",
            "Multiple apps per connection",
            "Only system apps",
            "Hardware routing",
          ],
          ans: "Multiple apps per connection",
          explanation:
            "Multiple applications can use the same network simultaneously.",
        },
        {
          type: "mcq",
          q: "22. Which port number is commonly used for HTTPS?",
          image: null,
          options: ["80", "23", "443", "20"],
          ans: "443",
          explanation: "Port 443 is standard for secure HTTP (HTTPS).",
        },
        {
          type: "mcq",
          q: "23. What mechanism detects and corrects transmission errors in TCP?",
          image: null,
          options: [
            "Port allocation",
            "Acknowledgments and retransmission",
            "NAT translation",
            "Flow control",
          ],
          ans: "Acknowledgments and retransmission",
          explanation:
            "TCP checks for errors, requests resending corrupted data.",
        },
        {
          type: "mcq",
          q: "24. Which port is used by FTP?",
          image: null,
          options: ["21", "80", "110", "53"],
          ans: "21",
          explanation: "Port 21 is well-known for FTP protocol.",
        },
        {
          type: "mcq",
          q: "25. Flow control helps ensure:",
          image: null,
          options: [
            "Sender matches receiver speed",
            "Data is encrypted",
            "IP addressing is valid",
            "Ports are allocated automatically",
          ],
          ans: "Sender matches receiver speed",
          explanation:
            "Data transfer rate is adjusted so the receiver isn’t overwhelmed.",
        },
        {
          type: "mcq",
          q: "26. The main purpose of congestion control is:",
          image: null,
          options: [
            "Preventing network overload",
            "Assigning more IPs",
            "Encrypting data",
            "Increasing data burst",
          ],
          ans: "Preventing network overload",
          explanation:
            "Data rates are reduced during congestion to prevent slowdowns and packet loss.",
        },
        {
          type: "mcq",
          q: "27. How does TCP’s sliding window protocol enhance performance?",
          image: null,
          options: [
            "Forwards only one packet",
            "Sends multiple packets before waiting",
            "Calls for retransmission",
            "Ignores flow control",
          ],
          ans: "Sends multiple packets before waiting",
          explanation:
            "Enables efficient use of bandwidth and pipelined transmissions.",
        },
        {
          type: "mcq",
          q: "28. Token Bucket algorithm in traffic shaping allows:",
          image: null,
          options: [
            "Fixed rate only",
            "Bursty traffic if tokens exist",
            "No burst at all",
            "Only system traffic",
          ],
          ans: "Bursty traffic if tokens exist",
          explanation: "Tokens permit temporary bursts above normal rates.",
        },
        {
          type: "mcq",
          q: "29. Leaky Bucket algorithm in traffic shaping enforces:",
          image: null,
          options: [
            "Variable burst rate",
            "Constant data flow",
            "Only UDP traffic",
            "Connectionless service",
          ],
          ans: "Constant data flow",
          explanation: "Data output stays smooth, removing sudden bursts.",
        },
        {
          type: "mcq",
          q: "30. Which port range is called 'dynamic or private ports'?",
          image: null,
          options: ["1–1023", "1024–49151", "49152–65535", "8080–8090"],
          ans: "49152–65535",
          explanation:
            "49152–65535 are system-allocated for temporary connections.",
        },
        {
          type: "mcq",
          q: "31. Which protocols use well-known port numbers (0–1023)?",
          image: null,
          options: [
            "User applications",
            "System services",
            "Only FTP",
            "Only DNS",
          ],
          ans: "System services",
          explanation:
            "Reserved for core system protocols like HTTP, DNS, FTP.",
        },
        {
          type: "mcq",
          q: "32. If a TCP segment is lost in transmission, TCP will:",
          image: null,
          options: ["Ignore", "Retransmit", "Broadcast", "Drop connection"],
          ans: "Retransmit",
          explanation: "Reliability is maintained by retransmitting lost data.",
        },
        {
          type: "mcq",
          q: "33. UDP is preferred when:",
          image: null,
          options: [
            "Reliability is critical",
            "Fast, simple transmission needed",
            "In-order delivery is guaranteed",
            "All traffic must be sequenced",
          ],
          ans: "Fast, simple transmission needed",
          explanation: "Used by real-time apps where speed trumps reliability.",
        },
        {
          type: "mcq",
          q: "34. An ACK in TCP means:",
          image: null,
          options: [
            "Connection request",
            "Data successfully received",
            "Error detected",
            "Final segment",
          ],
          ans: "Data successfully received",
          explanation: "ACK notifies sender that data arrived correctly.",
        },
        {
          type: "mcq",
          q: "35. TCP assigns each segment a:",
          image: null,
          options: [
            "Port number only",
            "Socket only",
            "Sequence number",
            "MAC address",
          ],
          ans: "Sequence number",
          explanation:
            "Sequence numbers are essential for ordering and integrity.",
        },
        {
          type: "mcq",
          q: "36. Which would NOT typically use UDP?",
          image: null,
          options: ["VoIP", "DNS", "HTTP", "Online games"],
          ans: "HTTP",
          explanation: "HTTP requires reliable, ordered delivery—TCP is used.",
        },
        {
          type: "mcq",
          q: "37. The maximum segment size (MSS) in TCP determines:",
          image: null,
          options: [
            "Largest data chunk per segment",
            "Size of IP address",
            "Number of simultaneous connections",
            "Port range",
          ],
          ans: "Largest data chunk per segment",
          explanation: "MSS affects fragmentation and flow control.",
        },
        {
          type: "mcq",
          q: "38. TCP uses window size to:",
          image: null,
          options: [
            "Adjust retransmission timers",
            "Set how much unacknowledged data can be sent",
            "Manage port allocation",
            "Define session timeout",
          ],
          ans: "Set how much unacknowledged data can be sent",
          explanation:
            "Larger window means more outstanding data, improving throughput.",
        },
        {
          type: "mcq",
          q: "39. Which protocol offers guaranteed order, reliability, and flow control?",
          image: null,
          options: ["UDP", "TCP", "ICMP", "IP"],
          ans: "TCP",
          explanation:
            "These services define TCP’s connection-oriented communication.",
        },
        {
          type: "mcq",
          q: "40. A socket uniquely identifies a:",
          image: null,
          options: [
            "Device only",
            "Application process only",
            "Device and application process",
            "MAC address",
          ],
          ans: "Device and application process",
          explanation:
            "Only a combination of IP and port provides end-to-end mapping.",
        },
        {
          type: "mcq",
          q: "41. Which protocol will NOT retransmit lost packets?",
          image: null,
          options: ["TCP", "UDP", "FTP", "Telnet"],
          ans: "UDP",
          explanation: "UDP does not guarantee reliable delivery.",
        },
        {
          type: "mcq",
          q: "42. What is the main use of port numbers in networking?",
          image: null,
          options: [
            "Routing between networks",
            "Directing traffic to correct process/service",
            "Assigning hardware addresses",
            "Enabling error detection",
          ],
          ans: "Directing traffic to correct process/service",
          explanation:
            "Port numbers help demultiplex incoming/outgoing data streams.",
        },
        {
          type: "mcq",
          q: "43. The range of 'well-known' system ports is:",
          image: null,
          options: ["0–1023", "1024–49151", "49152–65535", "8000–8080"],
          ans: "0–1023",
          explanation:
            "These are for standardized services like HTTP, SMTP, FTP.",
        },
        {
          type: "mcq",
          q: "44. Congestion window (cwnd) in TCP affects:",
          image: null,
          options: [
            "How much data enters the network",
            "Port allocation",
            "Socket efficiency",
            "MAC address assignment",
          ],
          ans: "How much data enters the network",
          explanation:
            "The window limits data sent before getting network feedback.",
        },
        {
          type: "mcq",
          q: "45. Which is TRUE about TCP and UDP?",
          image: null,
          options: [
            "Both guarantee delivery",
            "Both use ports for communication",
            "Only TCP uses windowing",
            "Only UDP supports multiplexing",
          ],
          ans: "Both use ports for communication",
          explanation:
            "Both protocols use port numbers for application addressing.",
        },
        {
          type: "mcq",
          q: "46. TCP slow start algorithm is used to:",
          image: null,
          options: [
            "Immediately send maximum data",
            "Gradually increase transmission rate",
            "Compute port numbers",
            "Close the connection",
          ],
          ans: "Gradually increase transmission rate",
          explanation: "Prevents congestion by slowly ramping up sending rate.",
        },
        {
          type: "mcq",
          q: "47. A connectionless service is typically:",
          image: null,
          options: ["TCP", "UDP", "HTTP", "SMTP"],
          ans: "UDP",
          explanation:
            "UDP sends data without setting up a connection beforehand.",
        },
        {
          type: "mcq",
          q: "48. Transport Layer’s error control utilizes:",
          image: null,
          options: [
            "Parity bits",
            "Retransmissions and checksums",
            "ARP requests",
            "MAC filtering",
          ],
          ans: "Retransmissions and checksums",
          explanation: "Both mechanisms help ensure reliable delivery.",
        },
        {
          type: "mcq",
          q: "49. Which protocol is best for loss-sensitive, order-sensitive file transfer?",
          image: null,
          options: ["UDP", "TCP", "DHCP", "VoIP"],
          ans: "TCP",
          explanation: "File transfers need accuracy; TCP delivers this.",
        },
        {
          type: "mcq",
          q: "50. Token Bucket provides:",
          image: null,
          options: [
            "Steady, fixed output",
            "Bursty output depending on available tokens",
            "No output during congestion",
            "Only TCP traffic",
          ],
          ans: "Bursty output depending on available tokens",
          explanation:
            "Bursts are allowed if sufficient tokens exist in the bucket.",
        },
        {
          type: "mcq",
          q: "51. In TCP, SYN-ACK packet is sent by:",
          image: null,
          options: ["Client", "Server", "Switch", "Router"],
          ans: "Server",
          explanation:
            "The server replies to SYN with SYN-ACK to acknowledge and agree.",
        },
        {
          type: "mcq",
          q: "52. Which protocol suits smooth video streaming with negligible loss tolerance?",
          image: null,
          options: ["UDP", "TCP", "FTP", "SMTP"],
          ans: "UDP",
          explanation: "UDP minimizes latency which is critical for streaming.",
        },
        {
          type: "mcq",
          q: "53. Leaky Bucket algorithm works by:",
          image: null,
          options: [
            "Storing data until network ready",
            "Smoothing out data bursts",
            "Prioritizing urgent traffic",
            "Only allowing TCP",
          ],
          ans: "Smoothing out data bursts",
          explanation: "Maintains steady outbound rate, removing burstiness.",
        },
        {
          type: "mcq",
          q: "54. TCP uses checksums for:",
          image: null,
          options: [
            "Routing",
            "Data integrity verification",
            "Port assignment",
            "MAC translation",
          ],
          ans: "Data integrity verification",
          explanation: "Checksums help detect errors in segment data.",
        },
        {
          type: "mcq",
          q: "55. Congestion avoidance in TCP is primarily done using:",
          image: null,
          options: [
            "Fast retransmit",
            "Slow start and additive increase",
            "Window scaling only",
            "Port randomization",
          ],
          ans: "Slow start and additive increase",
          explanation: "TCP adapts window size to available network capacity.",
        },
        {
          type: "mcq",
          q: "56. Demultiplexing in Transport Layer means:",
          image: null,
          options: [
            "Sending to one process only",
            "Distinguishing multiple concurrent streams",
            "Encrypting packets",
            "Redistributing error control",
          ],
          ans: "Distinguishing multiple concurrent streams",
          explanation: "TCP/UDP separates traffic for many processes.",
        },
        {
          type: "mcq",
          q: "57. Which protocol allows connectionless communication?",
          image: null,
          options: ["TCP", "UDP", "SMTP", "Telnet"],
          ans: "UDP",
          explanation: "UDP does not require pre-established connections.",
        },
        {
          type: "mcq",
          q: "58. A stagnant congestion window in TCP usually means:",
          image: null,
          options: [
            "Network congestion",
            "System idle",
            "Port overuse",
            "Data encryption",
          ],
          ans: "Network congestion",
          explanation: "No increase occurs if congestion is ongoing.",
        },
        {
          type: "mcq",
          q: "59. Which function is provided by both TCP and UDP?",
          image: null,
          options: [
            "Reliable delivery",
            "Connection setup",
            "Use of ports for multiplexing",
            "Flow control",
          ],
          ans: "Use of ports for multiplexing",
          explanation:
            "Both protocols use ports—as endpoints for multiplexed traffic.",
        },
        {
          type: "mcq",
          q: "60. Which window allows TCP sender to transmit multiple bytes before waiting for ACK?",
          image: null,
          options: [
            "Sliding window",
            "Fixed window",
            "NAT window",
            "Static window",
          ],
          ans: "Sliding window",
          explanation: "Sliding window protocol makes transmission efficient.",
        },
        {
          type: "mcq",
          q: "61. Which protocol commonly uses port 53?",
          image: null,
          options: ["HTTP", "DNS", "FTP", "Telnet"],
          ans: "DNS",
          explanation: "DNS typically runs on port 53.",
        },
        {
          type: "mcq",
          q: "62. UDP is best suited for:",
          image: null,
          options: [
            "Bulk file transfer",
            "Short, time-sensitive messages",
            "Ordered packet delivery",
            "Lossless music streaming",
          ],
          ans: "Short, time-sensitive messages",
          explanation: "Used in applications like DNS and VoIP.",
        },
        {
          type: "mcq",
          q: "63. Which field in a TCP segment signals a connection close?",
          image: null,
          options: ["SYN", "ACK", "FIN", "RST"],
          ans: "FIN",
          explanation: "FIN flag initiates connection termination.",
        },
        {
          type: "mcq",
          q: "64. Which protocol uses stateless transmissions and does not track connections?",
          image: null,
          options: ["TCP", "UDP", "FTP", "SMTP"],
          ans: "UDP",
          explanation: "UDP remains stateless throughout the communication.",
        },
        {
          type: "mcq",
          q: "65. Enough tokens in the bucket allow:",
          image: null,
          options: [
            "TCP retransmits",
            "UDP error correction",
            "Bursty traffic flow",
            "MAC filtering",
          ],
          ans: "Bursty traffic flow",
          explanation:
            "Token Bucket algorithm enables temporary bursts in traffic.",
        },
        {
          type: "mcq",
          q: "66. TCP’s reliability is achieved via:",
          image: null,
          options: [
            "Port assignment",
            "Checksums and retransmissions",
            "NAT",
            "Token Bucket",
          ],
          ans: "Checksums and retransmissions",
          explanation:
            "Data errors trigger automatic retransmissions for reliability.",
        },
        {
          type: "mcq",
          q: "67. Which port is used by SMTP?",
          image: null,
          options: ["21", "443", "25", "110"],
          ans: "25",
          explanation: "SMTP (email protocol) standardly uses port 25.",
        },
        {
          type: "mcq",
          q: "68. Sliding window size in TCP is advertised by:",
          image: null,
          options: ["Sender", "Receiver", "Router", "Switch"],
          ans: "Receiver",
          explanation:
            "Receiver notifies sender about window size in ACK packet.",
        },
        {
          type: "mcq",
          q: "69. Congestion control in TCP aims to:",
          image: null,
          options: [
            "Maximize data loss",
            "Stabilize network by avoiding overload",
            "Use larger port sizes",
            "Switch automatically to UDP",
          ],
          ans: "Stabilize network by avoiding overload",
          explanation:
            "TCP prevents excess traffic from degrading network performance.",
        },
        {
          type: "mcq",
          q: "70. Token Bucket is more flexible than Leaky Bucket because:",
          image: null,
          options: [
            "It allows long-term storage",
            "Supports variable/bursty rates",
            "Only handles TCP traffic",
            "It is easier to implement",
          ],
          ans: "Supports variable/bursty rates",
          explanation:
            "Token Bucket accommodates bursts—suiting modern, variable-rate traffic.",
        },
      ],
    },
    {
      subname:
        "5.5 Application layer: Web (HTTP & HTTPS), File Transfer (FTP, PuTTY, Win SCP), Electronic Mail, DNS, P2P Applications, Socket Programming, Application server concept, and Concept of traffic analyzer (MRTG, PRTG, SNMP, Packet tracer, Wireshark).",
      blocks: [
        { type: "bold", text: " Application Layer Overview :  " },
        { type: "text", text: " • It is the top layer of the OSI model. " },
        {
          type: "text",
          text: " • It provides network services directly to users and applications (like web browsers, email clients, etc.). ",
        },
        {
          type: "text",
          text: " • Example services: web browsing, email, file transfer, DNS, etc. ",
        },

        { type: "bold", text: "  Web (HTTP and HTTPS) : " },
        {
          type: "important",
          text: " • HTTP (Hypertext Transfer Protocol) –  ",
          desc: " Transfers web pages between a browser (client) and a web server. ",
        },
        {
          type: "text",
          text: " ⟹ HTTP is stateless. i.e. each request is independent. ",
          center: true,
        },
        {
          type: "text",
          text: " ⟹ Stateless can be managed by using Cookies, Sessions or Tokens to maintain stateful information.",
          center: true,
        },
        {
          type: "important",
          text: " • HTTPS (HTTP Secure) –  ",
          desc: " Same as HTTP but adds security through encryption (SSL/TLS). ",
        },
        { type: "semibold", text: " • How it works : " },
        {
          type: "text",
          text: " ⟹ The browser sends a request to the server. ",
          center: true,
        },
        {
          type: "text",
          text: " ⟹ The server responds with the requested web page. ",
          center: true,
        },
        { type: "semibold", text: " Common methods : " },
        { type: "important", text: " • GET – ", desc: " fetch data. " },
        { type: "important", text: " • POST –  ", desc: " send data. " },
        { type: "important", text: " • PUT –  ", desc: " update data. " },
        { type: "important", text: " • DELETE – ", desc: "  remove data. " },

        { type: "bold", text: " FTP (File Transfer Protocol) : " },
        {
          type: "text",
          text: " • Used to upload or download files between a client and a server.",
        },
        { type: "semibold", text: " • Uses two channels : " },
        {
          type: "important",
          text: " • Command channel →  ",
          desc: " sends commands/responses.  ",
        },
        {
          type: "important",
          text: " • Data channel → ",
          desc: "  transfers files. ",
        },
        { type: "semibold", text: " • Default ports : " },
        { type: "text", text: " ⟹ Port 21 for control", center: true },
        { type: "text", text: " ⟹ Port 20 for data transfer ", center: true },
        {
          type: "important",
          text: " Example tools :",
          desc: " FileZilla, WinSCP.  ",
        },

        { type: "bold", text: "  PuTTY " },
        {
          type: "text",
          text: " ⟹ A free, open-source terminal program used to access remote computers. ",
          center: true,
        },
        {
          type: "text",
          text: " ⟹ Supports SSH, Telnet, and SCP protocols. ",
          center: true,
        },
        {
          type: "text",
          text: " ⟹ Commonly used for remote server management (like Linux servers). ",
          center: true,
        },

        { type: "bold", text: "  Protocols used In Email : " },
        {
          type: "important",
          text: " • SMTP – ",
          desc: " Sends emails from client to server.  ",
        },
        {
          type: "important",
          text: " • IMAP – ",
          desc: " Reads email directly from the server (keeps copies). ",
        },
        {
          type: "important",
          text: " • POP3 – ",
          desc: " Downloads email and deletes it from server. ",
        },

        { type: "bold", text: " DNS (Domain Name System) :  " },
        {
          type: "text",
          text: " ⟹ Converts domain names (like www.google.com) into IP addresses (like 142.250.182.206). ",
          center: true,
        },
        {
          type: "text",
          text: " ⟹ Works like an internet phonebook — easy names for humans, IPs for computers. ",
          center: true,
        },
        { type: "semibold", text: " • Main Concepts : " },
        {
          type: "text",
          text: " ⟹ Domain Name – readable website name. ",
          center: true,
        },
        {
          type: "text",
          text: " ⟹ IP Address – unique number for each device. ",
          center: true,
        },

        { type: "bold", text: "  DNS Hierarchy :   " },
        {
          type: "important",
          text: " • Root Level – ",
          desc: "  Represented by a dot (.) — topmost servers. ",
        },
        {
          type: "important",
          text: " • Top-Level Domain (TLD) –  ",
          desc: " Like .com, .org, .net, .uk.  ",
        },
        {
          type: "important",
          text: " • Second-Level Domain – ",
          desc: "  The main part, e.g., example in example.com. ",
        },
        {
          type: "important",
          text: " • Subdomain – ",
          desc: " Part before the main name, e.g., www.example.com. ",
        },

        { type: "bold", text: "  DNS Query Process : " },
        { type: "text", text: " • You type a website name in a browser. " },
        {
          type: "text",
          text: " • The DNS resolver (from your ISP) checks if it knows the IP. ",
        },
        { type: "semibold", text: " • If not, it contacts: " },
        {
          type: "important",
          text: " Root server →  ",
          desc: " Gives location of TLD server. ",
        },
        {
          type: "important",
          text: " TLD server → ",
          desc: " Gives location of the domain’s server. ",
        },
        {
          type: "important",
          text: " Authoritative name server → ",
          desc: " Gives the exact IP address. ",
        },
        { type: "text", text: " • Browser uses that IP to open the website. " },

        { type: "bold", text: " DNS Records :  " },
        {
          type: "text",
          text: " • These are stored in DNS servers to define domain info: ",
        },
        {
          type: "important",
          text: " • A Record – ",
          desc: "  maps a domain to IPv4.",
        },
        {
          type: "important",
          text: " • AAAA Record –",
          desc: " maps a domain to IPv6.  ",
        },
        {
          type: "important",
          text: " • CNAME – ",
          desc: " alias (maps one domain to another). ",
        },
        { type: "important", text: " • MX – ", desc: " defines mail server. " },
        {
          type: "important",
          text: " • TXT – ",
          desc: "  stores text info, often for verification/security. ",
        },
        {
          type: "important",
          text: " • NS – ",
          desc: "  defines the name servers for a domain. ",
        },

        { type: "bold", text: " P2P (Peer-to-Peer) : " },
        {
          type: "text",
          text: " • In P2P networks, all computers (peers) are equal — no central server. ",
        },
        {
          type: "text",
          text: " • Each peer can share and receive resources like files, CPU power, or bandwidth.",
        },
        {
          type: "text",
          text: " • Examples: Torrenting, blockchain, file-sharing apps.",
        },

        { type: "bold", text: "  Socket Programming : " },
        {
          type: "text",
          text: " • Used for communication between devices using network sockets. ",
        },
        { type: "semibold", text: "  Main functions: " },
        {
          type: "important",
          text: " • socket() –  ",
          desc: " create a socket. ",
        },
        {
          type: "important",
          text: " • bind() – ",
          desc: "  attach socket to IP + port. ",
        },
        {
          type: "important",
          text: " • listen() – ",
          desc: "   wait for connections (for TCP).",
        },
        {
          type: "important",
          text: " • accept() – ",
          desc: " accept a connection (server side). ",
        },
        {
          type: "important",
          text: " • connect() – ",
          desc: "  connect to a server (client side). ",
        },
        {
          type: "important",
          text: " • send() / recv() – ",
          desc: "   send and receive data (TCP). ",
        },
        {
          type: "important",
          text: " • sendto() / recvfrom() –  ",
          desc: " used in UDP communication. ",
        },
        {
          type: "important",
          text: " • close() – ",
          desc: "  close the connection. ",
        },

        { type: "bold", text: " Traffic Analyzer : " },
        {
          type: "text",
          text: " • A tool for monitoring and analyzing network traffic. ",
        },
        { type: "semibold", text: " • Helps in : " },
        {
          type: "text",
          text: " ⟹ Detecting problems or attacks. ",
          center: true,
        },
        {
          type: "text",
          text: " ⟹ Understanding bandwidth usage. ",
          center: true,
        },
        {
          type: "text",
          text: " ⟹ Optimizing network performance. ",
          center: true,
        },
        { type: "semibold", text: " Types : " },
        {
          type: "important",
          text: " • Real-Time Monitoring – ",
          desc: "  Shows live network activity. ",
        },
        {
          type: "important",
          text: " • Historical Analysis –  ",
          desc: "  Stores data for later study.",
        },
        {
          type: "important",
          text: " • Traffic Pattern Analysis –  ",
          desc: " Shows usage trends (like peak hours). ",
        },

        {
          type: "mcq",
          q: "1. What is the top layer of the OSI model?",
          image: null,
          options: [
            "Network Layer",
            "Data Link Layer",
            "Application Layer",
            "Physical Layer",
          ],
          ans: "Application Layer",
          explanation:
            "The Application Layer is the OSI model's top layer, providing network services to users and applications.",
        },
        {
          type: "mcq",
          q: "2. Which protocol is stateless and used for transferring web pages?",
          image: null,
          options: ["FTP", "SMTP", "HTTP", "DNS"],
          ans: "HTTP",
          explanation:
            "HTTP transfers web pages but treats each request independently, making it stateless.",
        },
        {
          type: "mcq",
          q: "3. How is HTTP statelessness managed for sessions?",
          image: null,
          options: [
            "Using IP addresses",
            "Using Cookies, Sessions, or Tokens",
            "Using MAC addresses",
            "Using Port numbers",
          ],
          ans: "Using Cookies, Sessions, or Tokens",
          explanation:
            "Cookies, sessions, or tokens maintain state across requests in otherwise stateless HTTP.",
        },
        {
          type: "mcq",
          q: "4. What is the default port for FTP control commands?",
          image: null,
          options: ["21", "20", "80", "443"],
          ans: "21",
          explanation:
            "FTP uses port 21 for command and control channel management.",
        },
        {
          type: "mcq",
          q: "5. Which FTP port is used for file data transfer?",
          image: null,
          options: ["20", "21", "80", "22"],
          ans: "20",
          explanation:
            "Port 20 is assigned to FTP data transfer, separate from commands.",
        },
        {
          type: "mcq",
          q: "6. PuTTY is primarily used for:",
          image: null,
          options: [
            "File transfers",
            "Remote server management",
            "Web browsing",
            "Email client",
          ],
          ans: "Remote server management",
          explanation:
            "PuTTY allows users to manage remote servers securely using SSH, Telnet, and SCP.",
        },
        {
          type: "mcq",
          q: "7. SMTP is used for:",
          image: null,
          options: [
            "Reading emails",
            "Sending emails",
            "File transfer",
            "DNS queries",
          ],
          ans: "Sending emails",
          explanation: "SMTP enables sending emails from client to server.",
        },
        {
          type: "mcq",
          q: "8. POP3 protocol functions by:",
          image: null,
          options: [
            "Reading emails without deletion",
            "Downloading and deleting emails",
            "Sending emails",
            "Resolving domains",
          ],
          ans: "Downloading and deleting emails",
          explanation:
            "POP3 downloads emails and deletes them from the server.",
        },
        {
          type: "mcq",
          q: "9. IMAP protocol allows users to:",
          image: null,
          options: [
            "Delete emails from server",
            "Read emails directly without download",
            "Send emails",
            "Resolve domains",
          ],
          ans: "Read emails directly without download",
          explanation:
            "IMAP lets users manage email on the server without transferring them locally.",
        },
        {
          type: "mcq",
          q: "10. What does DNS do?",
          image: null,
          options: [
            "Converts IP to MAC",
            "Converts domain names to IP addresses",
            "Manages email servers",
            "Manages files",
          ],
          ans: "Converts domain names to IP addresses",
          explanation:
            "DNS translates human-friendly domains to IP addresses, acting like an Internet phonebook.",
        },
        {
          type: "mcq",
          q: "11. What is the top-level domain (TLD) in www.example.com?",
          image: null,
          options: ["www", "example", ".com", ".org"],
          ans: ".com",
          explanation:
            "The TLD is the final segment, denoting .com in this case.",
        },
        {
          type: "mcq",
          q: "12. Which DNS server provides root domain information?",
          image: null,
          options: [
            "Root server",
            "TLD server",
            "Authoritative server",
            "Caching server",
          ],
          ans: "Root server",
          explanation:
            "Root servers answer about TLD locations at the DNS hierarchy's summit.",
        },
        {
          type: "mcq",
          q: "13. What DNS record maps a domain to an IPv4 address?",
          image: null,
          options: ["MX", "CNAME", "AAAA", "A"],
          ans: "A",
          explanation: "A records link domain names to IPv4 addresses.",
        },
        {
          type: "mcq",
          q: "14. Which DNS record maps to an IPv6 address?",
          image: null,
          options: ["A", "MX", "AAAA", "TXT"],
          ans: "AAAA",
          explanation: "AAAA records associate domains with IPv6 addresses.",
        },
        {
          type: "mcq",
          q: "15. What is a CNAME DNS record used for?",
          image: null,
          options: [
            "Defines mail server",
            "Is an alias for another domain",
            "Maps to IP",
            "Stores text info",
          ],
          ans: "Is an alias for another domain",
          explanation: "CNAME creates aliases, mapping one name to another.",
        },
        {
          type: "mcq",
          q: "16. Which protocol supports peer-to-peer networking?",
          image: null,
          options: ["HTTP", "FTP", "SMTP", "P2P"],
          ans: "P2P",
          explanation:
            "P2P lets devices share resources directly, without a central server.",
        },
        {
          type: "mcq",
          q: "17. Which is an example of a P2P application?",
          image: null,
          options: ["Web browsing", "Blockchain", "Email", "DNS"],
          ans: "Blockchain",
          explanation:
            "Blockchain utilizes decentralized peer-to-peer structures.",
        },
        {
          type: "mcq",
          q: "18. What does socket() do in socket programming?",
          image: null,
          options: [
            "Creates a socket",
            "Binds socket",
            "Listens for connections",
            "Sends data",
          ],
          ans: "Creates a socket",
          explanation: "socket() creates a network communication endpoint.",
        },
        {
          type: "mcq",
          q: "19. Which function attaches a socket to IP and port?",
          image: null,
          options: ["socket()", "bind()", "connect()", "accept()"],
          ans: "bind()",
          explanation: "bind() assigns the local IP and port to the socket.",
        },
        {
          type: "mcq",
          q: "20. send() and recv() are used with which protocol?",
          image: null,
          options: ["UDP", "TCP", "IP", "ICMP"],
          ans: "TCP",
          explanation:
            "send()/recv() are connection-oriented, typically used by TCP.",
        },
        {
          type: "mcq",
          q: "21. sendto() and recvfrom() are typically used by?",
          image: null,
          options: ["TCP", "UDP", "FTP", "HTTP"],
          ans: "UDP",
          explanation:
            "sendto()/recvfrom() work in connectionless UDP communications.",
        },
        {
          type: "mcq",
          q: "22. Which tool monitors network traffic?",
          image: null,
          options: ["PuTTY", "FTP", "Traffic Analyzer", "SMTP"],
          ans: "Traffic Analyzer",
          explanation:
            "Traffic analyzers help monitor, troubleshoot, and optimize networks.",
        },
        {
          type: "mcq",
          q: "23. Traffic analyzers offer which monitoring?",
          image: null,
          options: [
            "Only real-time",
            "Only historical",
            "Only pattern analysis",
            "Real-time, historical, pattern analysis",
          ],
          ans: "Real-time, historical, pattern analysis",
          explanation:
            "They support live monitoring, data archiving, and trend investigation.",
        },
        {
          type: "mcq",
          q: "24. Which HTTP method requests data?",
          image: null,
          options: ["GET", "POST", "PUT", "DELETE"],
          ans: "GET",
          explanation: "GET retrieves, without modifying, server data.",
        },
        {
          type: "mcq",
          q: "25. Which HTTP method sends data to the server?",
          image: null,
          options: ["GET", "POST", "PUT", "DELETE"],
          ans: "POST",
          explanation: "POST transmits data like form info to the server.",
        },
        {
          type: "mcq",
          q: "26. HTTPS’ main security feature over HTTP is:",
          image: null,
          options: [
            "Port number",
            "Encryption using SSL/TLS",
            "Faster speed",
            "UDP support",
          ],
          ans: "Encryption using SSL/TLS",
          explanation: "HTTPS encrypts web communications for security.",
        },
        {
          type: "mcq",
          q: "27. What are the two FTP channels called?",
          image: null,
          options: [
            "Command and Data channels",
            "TCP and UDP channels",
            "Primary and Secondary channels",
            "Upload and Download channels",
          ],
          ans: "Command and Data channels",
          explanation: "FTP separates commands and file data transfer.",
        },
        {
          type: "mcq",
          q: "28. Which port does HTTPS use by default?",
          image: null,
          options: ["80", "443", "21", "53"],
          ans: "443",
          explanation:
            "Port 443 is used for secure web connections with HTTPS.",
        },
        {
          type: "mcq",
          q: "29. When you type a URL in a browser, it first:",
          image: null,
          options: [
            "Queries DNS for IP",
            "Contacts server",
            "Sends email",
            "Routes packets",
          ],
          ans: "Queries DNS for IP",
          explanation:
            "Browser uses DNS to resolve the domain to IP before sending a request.",
        },
        {
          type: "mcq",
          q: "30. Which protocol leaves a copy of retrieved emails on the server?",
          image: null,
          options: ["POP3", "IMAP", "SMTP", "FTP"],
          ans: "IMAP",
          explanation:
            "IMAP allows multiple devices to access mail by keeping copies on the server.",
        },
        {
          type: "mcq",
          q: "31. Which email protocol deletes emails from the server after download?",
          image: null,
          options: ["POP3", "IMAP", "SMTP", "DNS"],
          ans: "POP3",
          explanation: "POP3 removes emails from the server once downloaded.",
        },
        {
          type: "mcq",
          q: "32. Which tool supports SSH, Telnet, and SCP for remote connections?",
          image: null,
          options: ["FileZilla", "PuTTY", "WinSCP", "Wireshark"],
          ans: "PuTTY",
          explanation:
            "PuTTY enables remote management with multiple protocols.",
        },
        {
          type: "mcq",
          q: "33. Which protocol is best for high-speed file transfer?",
          image: null,
          options: ["FTP", "HTTP", "SMTP", "DNS"],
          ans: "FTP",
          explanation: "FTP excels at bulk uploading/downloading files.",
        },
        {
          type: "mcq",
          q: "34. Which DNS record states the mail server for a domain?",
          image: null,
          options: ["MX", "A", "CNAME", "NS"],
          ans: "MX",
          explanation: "MX records indicate domain email server addresses.",
        },
        {
          type: "mcq",
          q: "35. Root DNS server’s function is to:",
          image: null,
          options: [
            "Provide authoritative info",
            "Map TLD locations",
            "Translate domains to IP",
            "Cache IPs",
          ],
          ans: "Map TLD locations",
          explanation:
            "Root servers direct queries to TLD for further resolution.",
        },
        {
          type: "mcq",
          q: "36. Authoritative Name Server in DNS:",
          image: null,
          options: [
            "Provides exact IP address",
            "Gives TLD info",
            "Manages cache",
            "Sends out queries",
          ],
          ans: "Provides exact IP address",
          explanation: "Holds the definitive mapping for the requested domain.",
        },
        {
          type: "mcq",
          q: "37. HTTP is considered stateless because:",
          image: null,
          options: [
            "No memory of prior requests",
            "Each request is processed independently",
            "Uses cookies for sessions",
            "Both A and B",
          ],
          ans: "Both A and B",
          explanation:
            "There’s no built-in memory; every request stands alone.",
        },
        {
          type: "mcq",
          q: "38. Which port is used by DNS?",
          image: null,
          options: ["53", "80", "110", "21"],
          ans: "53",
          explanation: "DNS requests and responses typically use port 53.",
        },
        {
          type: "mcq",
          q: "39. Which HTTP method updates existing server data?",
          image: null,
          options: ["GET", "POST", "PUT", "DELETE"],
          ans: "PUT",
          explanation: "PUT replaces or updates resources at a specific URL.",
        },
        {
          type: "mcq",
          q: "40. Which socket function waits for incoming connections?",
          image: null,
          options: ["accept()", "listen()", "bind()", "connect()"],
          ans: "listen()",
          explanation:
            "listen() prepares a server socket for future acceptance.",
        },
        {
          type: "mcq",
          q: "41. Which socket function connects to a server?",
          image: null,
          options: ["accept()", "listen()", "bind()", "connect()"],
          ans: "connect()",
          explanation:
            "connect() is called by a client to start communication.",
        },
        {
          type: "mcq",
          q: "42. Which monitoring shows live network activity?",
          image: null,
          options: ["Historical", "Real-Time", "Pattern Analysis", "Offline"],
          ans: "Real-Time",
          explanation:
            "Real-time displays current network usage as it happens.",
        },
        {
          type: "mcq",
          q: "43. Historical Analysis in traffic monitoring:",
          image: null,
          options: [
            "Monitors live",
            "Stores data for later",
            "Filters traffic",
            "Encrypts activity",
          ],
          ans: "Stores data for later",
          explanation:
            "Stores statistics for past performance and issue analysis.",
        },
        {
          type: "mcq",
          q: "44. Traffic Pattern Analysis provides:",
          image: null,
          options: [
            "Real-time metrics",
            "Usage trends over time",
            "Immediate alerts",
            "Connection setup",
          ],
          ans: "Usage trends over time",
          explanation:
            "Detects network usage patterns like peak hours from historical data.",
        },
        {
          type: "mcq",
          q: "45. Which is used to maintain state in HTTP sessions?",
          image: null,
          options: ["DNS", "MX records", "Cookies", "Authoritative servers"],
          ans: "Cookies",
          explanation:
            "Cookies hold user/session info for browsers between HTTP requests.",
        },
        {
          type: "mcq",
          q: "46. Which protocol handles mapping domains to IP addresses?",
          image: null,
          options: ["SMTP", "DNS", "FTP", "Telnet"],
          ans: "DNS",
          explanation:
            "DNS converts easy-to-remember names into IP addresses used for routing.",
        },
        {
          type: "mcq",
          q: "47. Which email protocol is most suitable for multiple devices accessing the same account?",
          image: null,
          options: ["SMTP", "IMAP", "POP3", "FTP"],
          ans: "IMAP",
          explanation:
            "IMAP maintains emails on the server, so devices have synchronized copies.",
        },
        {
          type: "mcq",
          q: "48. Which DNS record is specifically used for text info like verification?",
          image: null,
          options: ["A", "CNAME", "TXT", "MX"],
          ans: "TXT",
          explanation:
            "TXT records store plain text, often for SPF verification/security.",
        },
        {
          type: "mcq",
          q: "49. What does P2P architecture mean?",
          image: null,
          options: [
            "Client-server",
            "All devices equal, sharing resources",
            "One central node",
            "Single-server routing",
          ],
          ans: "All devices equal, sharing resources",
          explanation:
            "In peer-to-peer networks, each computer is both a client and server.",
        },
        {
          type: "mcq",
          q: "50. Which socket function closes a network connection?",
          image: null,
          options: ["open()", "accept()", "close()", "bind()"],
          ans: "close()",
          explanation:
            "close() shuts down the socket, ending the communication session.",
        },
      ],
    },
    {
      subname:
        "5.6 Network security: Types of Computer Security, Types of Security Attacks, Principles of cryptography, RSA Algorithm, Digital Signatures, securing e-mail (PGP), Securing TCP connections (SSL), Network layer security (IPsec, VPN), Securing wireless LANs (WEP), Firewalls.",
      blocks: [
        { type: "bold", text: " Network Security Overview :  " },
        {
          type: "text",
          text: " ⟹ Network Security means protecting computers and networks from attacks, theft, and damage to data, software, or hardware.",
        },
        { type: "bold", text: " Types of Computer Security : " },
        { type: "semibold", text: " 1. Network Security : " },
        {
          type: "text",
          text: " ⟹ Protects data while it’s moving across networks.",
        },
        { type: "semibold", text: " Types : " },
        {
          type: "important",
          text: " a. Firewall – ",
          desc: " Blocks unwanted traffic. ",
        },
        {
          type: "important",
          text: " b. IDS (Intrusion Detection System) – ",
          desc: " Detects suspicious activities.  ",
        },
        {
          type: "important",
          text: " c. VPN – ",
          desc: "  Encrypts your internet connection. ",
        },
        {
          type: "important",
          text: " d. Antivirus – ",
          desc: " Stops and removes malware. ",
        },
        { type: "semibold", text: " 2. Information Security :   " },
        { type: "text", text: "⟹ Keeps data safe from unauthorized access." },
        { type: "semibold", text: " Types : " },
        {
          type: "important",
          text: " a. Encryption – ",
          desc: " Converts data into unreadable form. ",
        },
        {
          type: "important",
          text: " b. Access Control – ",
          desc: " Allows only authorized users.",
        },
        {
          type: "important",
          text: " c. Backup – ",
          desc: " Saves data copies to avoid loss. ",
        },
        { type: "semibold", text: " 3. Application Security :   " },
        { type: "text", text: "⟹ Makes apps safe from hacking." },
        { type: "semibold", text: " Types : " },
        {
          type: "important",
          text: " a. Secure Coding – ",
          desc: " Write safe code. ",
        },
        {
          type: "important",
          text: " b. Patching – ",
          desc: "  Update apps regularly. ",
        },
        {
          type: "important",
          text: " c. Testing – ",
          desc: " Find and fix weaknesses. ",
        },
        { type: "semibold", text: " 4. Endpoint Security  :  " },
        { type: "text", text: "⟹ Protects devices like phones and laptops." },
        { type: "semibold", text: " Types : " },
        {
          type: "important",
          text: " a. EDR – ",
          desc: "  Monitors devices for attacks. ",
        },
        {
          type: "important",
          text: " b. DLP – ",
          desc: " Stops data from leaking out. ",
        },
        { type: "semibold", text: " 5. Physical Security :  " },
        { type: "text", text: "⟹  Protects actual computers and servers/ " },
        { type: "semibold", text: " Types : " },
        {
          type: "important",
          text: " a. Access Control – ",
          desc: " Lock doors, use ID cards. ",
        },
        {
          type: "important",
          text: " b. CCTV –  ",
          desc: " Watch and record for safety. ",
        },
        {
          type: "important",
          text: " c. HSM – ",
          desc: " Secure hardware for encryption. ",
        },

        { type: "bold", text: " Types of Security Attacks : " },
        { type: "semibold", text: " 1. Malware (Malicious Software) :  " },
        {
          type: "text",
          text: " ⟹ Malware is any software made to harm or steal information from a computer.  ",
        },
        { type: "semibold", text: " • Types : " },
        {
          type: "important",
          text: " A. Virus : ",
          desc: " Attaches itself to normal programs or files and spreads when those programs run. ",
        },
        {
          type: "text",
          text: " • Example: A virus that deletes your files after you open an infected document. ",
          center: true,
        },
        {
          type: "important",
          text: " B. Worm : ",
          desc: " A self-spreading program that moves through networks without human help. ",
        },
        {
          type: "text",
          text: " • Example: It copies itself to many computers, slowing down the entire network. ",
          center: true,
        },
        {
          type: "important",
          text: " C. Trojan Horse :",
          desc: " Looks like a safe program but secretly performs harmful actions. ",
        },
        {
          type: "text",
          text: " • Example: A “game” that secretly installs a backdoor for hackers. ",
          center: true,
        },
        {
          type: "important",
          text: " D. Ransomware : ",
          desc: " Locks or encrypts your files and demands money to unlock them. ",
        },
        {
          type: "text",
          text: " • Example: “Your files are encrypted — pay $100 to get them back.” ",
          center: true,
        },
        {
          type: "important",
          text: " E. Spyware : ",
          desc: "  Secretly collects your information (like passwords or browsing data). ",
        },
        {
          type: "text",
          text: " • Example: Tracks what you type or which websites you visit. ",
          center: true,
        },
        {
          type: "important",
          text: " F. Adware : ",
          desc: " Shows unwanted ads and sometimes comes with spyware.  ",
        },
        {
          type: "text",
          text: " • Example: Random pop-ups and ads appearing even when you’re offline. ",
          center: true,
        },
        { type: "semibold", text: " 2. Phishing " },
        {
          type: "text",
          text: " ⟹ Phishing is when attackers send fake emails, messages, or websites pretending to be trusted companies. ",
        },
        {
          type: "text",
          text: " ⟹ Their goal is to make you share passwords, card numbers, or personal info. ",
        },
        {
          type: "text",
          text: " ⟹ Example: You get a “bank email” asking you to log in, but it’s a fake page that steals your password.  ",
        },
        {
          type: "semibold",
          text: " 3. DoS / DDoS (Denial of Service Attacks) ",
        },
        {
          type: "text",
          text: "  ⟹ These attacks flood a server or website with too much traffic, making it crash or slow.",
        },
        {
          type: "important",
          text: " • DoS (Denial of Service): ",
          desc: " Comes from one computer that sends too many requests. ",
        },
        {
          type: "important",
          text: " • DDoS (Distributed Denial of Service): ",
          desc: " Comes from many infected computers (botnet) attacking together. ",
        },
        {
          type: "text",
          text: "  ⟹ Example Of DoS : A website becomes unreachable because millions of fake requests overload it. ",
          center: true,
        },
        { type: "semibold", text: " 4. Social Engineering : " },
        {
          type: "text",
          text: " ⟹ Attackers manipulate people instead of hacking computers — they use tricks or lies to get information. ",
        },
        {
          type: "text",
          text: " ⟹ Example: A hacker pretends to be your IT staff and asks for your password “to fix your account.” ",
        },

        { type: "semibold", text: " 5. Man-in-the-Middle (MitM) Attack : " },
        {
          type: "text",
          text: " ⟹ A hacker sits between two communicating parties (like you and a website) and secretly reads or changes the messages.",
        },
        { type: "important", text: " Types of MitM : ", desc: "  " },
        {
          type: "important",
          text: " A. Eavesdropping : ",
          desc: " Secretly listening or capturing private data during communication. ",
        },
        {
          type: "text",
          text: " • Example: Reading your Wi-Fi data at a public café. ",
          center: true,
        },
        {
          type: "important",
          text: " B. Session Hijacking : ",
          desc: "  Hacker takes control of your online session after you log in.",
        },
        {
          type: "text",
          text: " • Example: Stealing your login cookie and accessing your account. ",
          center: true,
        },
        {
          type: "important",
          text: " C. SSL Stripping : ",
          desc: " Converts secure HTTPS (encrypted) connections into HTTP (unencrypted) to steal data. ",
        },
        {
          type: "text",
          text: " • Example: You think you’re on a secure banking site, but the hacker made it insecure. ",
          center: true,
        },

        { type: "bold", text: " Cryptography :  " },
        {
          type: "text",
          text: " ⟹ Cryptography means protecting information by turning it into a secret code. ",
        },
        {
          type: "text",
          text: " ⟹ It makes sure only the right people can read or change the data. ",
        },
        { type: "semibold", text: " It ensures : " },
        {
          type: "important",
          text: " • Confidentiality → ",
          desc: "  Keeps data private. ",
        },
        {
          type: "important",
          text: " • Integrity →  ",
          desc: " Makes sure data isn’t changed. ",
        },
        {
          type: "important",
          text: " • Authentication → ",
          desc: "  Confirms the sender’s identity. ",
        },

        { type: "semibold", text: " • Encryption :  " },
        {
          type: "text",
          text: " ⟹ Encryption is the process of converting readable data (plaintext) into unreadable code (ciphertext). ",
          center: true,
        },
        {
          type: "text",
          text: " ⟹ It hides the real information from hackers or unauthorized users. ",
          center: true,
        },
        { type: "semibold", text: " • Decryption :  " },
        {
          type: "text",
          text: " ⟹ Decryption is the reverse process of encryption.",
          center: true,
        },
        {
          type: "text",
          text: " ⟹ It changes the ciphertext back into readable plaintext using a key.",
          center: true,
        },

        { type: "bold", text: " Types of Encryption : " },
        { type: "semibold", text: " 1. Symmetric Encryption " },
        {
          type: "text",
          text: " ⟹ Uses one single key for both encryption and decryption. ",
          center: true,
        },
        {
          type: "text",
          text: " ⟹ The same key must be shared securely between sender and receiver. ",
          center: true,
        },
        {
          type: "text",
          text: " ⟹ Fast and suitable for encrypting large data. ",
          center: true,
        },
        { type: "text", text: " • Example Algorithms : " },
        {
          type: "important",
          text: " ⟹  AES (Advanced Encryption Standard) :  ",
          desc: " Used in modern systems and Wi-Fi security. ",
        },
        {
          type: "important",
          text: " ⟹  DES (Data Encryption Standard) : ",
          desc: "  Older method, now replaced by AES. ",
        },
        {
          type: "text",
          text: " • Example Of Symmetric Algorithm : You lock a box with a key (encryption) and give the same key to your friend to unlock it (decryption).",
        },

        { type: "semibold", text: " 2. Asymmetric Encryption " },
        { type: "text", text: " ⟹ Uses two keys: ", center: true },
        {
          type: "important",
          text: " • Public Key – ",
          desc: " Used to encrypt data (shared with everyone). ",
        },
        {
          type: "important",
          text: " • Private Key –  ",
          desc: " Used to decrypt data (kept secret). ",
        },
        {
          type: "text",
          text: " ⟹ Safer because the private key never needs to be sent. ",
          center: true,
        },
        { type: "text", text: " • Example Algorithms: " },
        {
          type: "important",
          text: " ⟹ RSA (Rivest–Shamir–Adleman): ",
          desc: "   Commonly used in secure websites and digital signatures.",
        },
        {
          type: "important",
          text: " ⟹ ECC (Elliptic Curve Cryptography): ",
          desc: "  Newer and faster with smaller keys. ",
        },
        {
          type: "text",
          text: " • Example of Asymmetric Algorithm : You publish a public key for anyone to send you messages, but only your private key can open them.",
        },

        { type: "bold", text: " Digital Signature  : " },
        {
          type: "text",
          text: " ⟹  A digital signature is like an electronic fingerprint that verifies : The message came from the real sender (Authenticity) and was not changed (Integrity). ",
        },
        {
          type: "text",
          text: " ⟹  It uses asymmetric encryption — the sender’s private key is used to “sign” the message, and the public key is used to verify it.",
        },

        { type: "bold", text: "  PGP (Pretty Good Privacy) : " },
        {
          type: "text",
          text: " ⟹ PGP is a popular encryption tool for emails. ",
        },
        {
          type: "text",
          text: " ⟹ It combines symmetric and asymmetric methods for strong security.",
        },
        {
          type: "text",
          text: " ⟹ It is used to Ensures email privacy, authenticity, and integrity.",
        },

        { type: "bold", text: "  WEP (Wired Equivalent Privacy) : " },
        {
          type: "text",
          text: " ⟹ Old Wi-Fi security method using RC4 encryption. ",
        },
        {
          type: "text",
          text: " ⟹ Weak and outdated — replaced by WPA/WPA2 for stronger protection.",
        },

        { type: "bold", text: "  SSL / TLS & VPN" },
        {
          type: "important",
          text: "  • SSL (Secure Sockets Layer) : ",
          desc: "  Protects web data transfer (now outdated). ",
        },
        {
          type: "important",
          text: "  • TLS (Transport Layer Security) :",
          desc: "  Improved and modern version of SSL. ",
        },
        { type: "semibold", text: "  • VPN (Virtual Private Network) : " },
        {
          type: "text",
          text: " ⟹  Creates a secure connection over the internet. ",
        },
        { type: "semibold", text: " Types : " },
        {
          type: "important",
          text: "  a. Remote Access VPN : ",
          desc: " For users working from home. ",
        },
        {
          type: "important",
          text: "  b. Site-to-Site VPN : ",
          desc: "   Connects two offices securely. ",
        },
        {
          type: "important",
          text: "  c. IPsec: ",
          desc: "  Common protocol for secure VPNs ",
        },

        { type: "bold", text: " Firewalls :  " },
        {
          type: "text",
          text: " ⟹ Control which traffic can enter or leave a network. ",
        },
        { type: "semibold", text: " Types : " },
        {
          type: "important",
          text: " a. Packet Filtering – ",
          desc: "   Checks basic data info. ",
        },
        {
          type: "important",
          text: " b. Stateful Inspection – ",
          desc: "  Tracks active connections. ",
        },
        {
          type: "important",
          text: " c. Proxy Firewall –  ",
          desc: " Acts as a middleman between users and servers. ",
        },
        {
          type: "important",
          text: " d. Next-Gen Firewall (NGFW) –  ",
          desc: " Advanced, smart, and cloud-integrated. ",
        },

        {
          type: "mcq",
          q: "1. What does Network Security primarily protect?",
          image: null,
          options: [
            "Data moving across networks",
            "Physical servers",
            "Computer hardware only",
            "Software updates",
          ],
          ans: "Data moving across networks",
          explanation:
            "Network Security is specifically designed to protect data while it is in transit across networks, using tools like firewalls, VPNs, and intrusion detection systems.",
        },
        {
          type: "mcq",
          q: "2. Which of the following is a tool that blocks unwanted traffic in network security?",
          image: null,
          options: ["Firewall", "VPN", "Antivirus", "IDS"],
          ans: "Firewall",
          explanation:
            "A firewall acts as a barrier, monitoring and controlling incoming and outgoing network traffic based on predetermined security rules to block malicious traffic.",
        },
        {
          type: "mcq",
          q: "3. What is the primary purpose of a VPN?",
          image: null,
          options: [
            "Encrypt internet connection",
            "Block malware",
            "Detect intrusions",
            "Backup data",
          ],
          ans: "Encrypt internet connection",
          explanation:
            "A VPN (Virtual Private Network) creates an encrypted tunnel for your data, protecting your online identity by hiding your IP address and shielding your data from eavesdropping.",
        },
        {
          type: "mcq",
          q: "4. What does IDS stand for in network security?",
          image: null,
          options: [
            "Intrusion Detection System",
            "Internet Data Service",
            "Internal Data Security",
            "Integrated Defense System",
          ],
          ans: "Intrusion Detection System",
          explanation:
            "An IDS is a system that monitors network traffic for suspicious activity and issues alerts when such activity is discovered.",
        },
        {
          type: "mcq",
          q: "5. Which type of security keeps data safe from unauthorized access?",
          image: null,
          options: [
            "Information Security",
            "Network Security",
            "Physical Security",
            "Endpoint Security",
          ],
          ans: "Information Security",
          explanation:
            "Information Security is a broad category that includes all aspects of protecting information and data from unauthorized access, use, disclosure, alteration, or destruction.",
        },
        {
          type: "mcq",
          q: "6. Encryption is an example of which type of security?",
          image: null,
          options: [
            "Information Security",
            "Network Security",
            "Application Security",
            "Endpoint Security",
          ],
          ans: "Information Security",
          explanation:
            "Encryption is a core component of Information Security, as it converts data into an unreadable format to protect its confidentiality.",
        },
        {
          type: "mcq",
          q: "7. What does Access Control do in Information Security?",
          image: null,
          options: [
            "Allows only authorized users",
            "Encrypts data",
            "Detects attacks",
            "Backs up data",
          ],
          ans: "Allows only authorized users",
          explanation:
            "Access control restricts access to resources only to authorized users, preventing unauthorized individuals from viewing or altering data.",
        },
        {
          type: "mcq",
          q: "8. Which security type focuses on making apps safe from hacking?",
          image: null,
          options: [
            "Application Security",
            "Network Security",
            "Physical Security",
            "Endpoint Security",
          ],
          ans: "Application Security",
          explanation:
            "Application Security involves implementing security measures at the application level to prevent data or code within the app from being stolen or hijacked.",
        },
        {
          type: "mcq",
          q: "9. Patching in Application Security means:",
          image: null,
          options: [
            "Updating apps regularly",
            "Writing secure code",
            "Detecting intrusions",
            "Encrypting data",
          ],
          ans: "Updating apps regularly",
          explanation:
            "Patching is the process of applying updates to software to fix security vulnerabilities and other bugs.",
        },
        {
          type: "mcq",
          q: "10. EDR in Endpoint Security stands for:",
          image: null,
          options: [
            "Endpoint Detection and Response",
            "Encrypted Data Recovery",
            "Enterprise Data Rights",
            "External Device Regulation",
          ],
          ans: "Endpoint Detection and Response",
          explanation:
            "EDR is a security solution that continuously monitors end-user devices to detect and respond to cyber threats like ransomware and malware.",
        },
        {
          type: "mcq",
          q: "11. Physical Security methods include all except:",
          image: null,
          options: ["Software Patching", "Access Control", "CCTV", "HSM"],
          ans: "Software Patching",
          explanation:
            "Software patching is part of Application Security. Physical Security protects hardware through locks, surveillance, and restricted access.",
        },
        {
          type: "mcq",
          q: "12. What does DLP in Endpoint Security stand for?",
          image: null,
          options: [
            "Data Loss Prevention",
            "Data Leak Protection",
            "Device Level Protection",
            "Digital Lock Protocol",
          ],
          ans: "Data Loss Prevention",
          explanation:
            "DLP solutions prevent sensitive data from being leaked or stolen from networks or devices.",
        },
        {
          type: "mcq",
          q: "13. Which attack involves software that attaches itself to programs and spreads on execution?",
          image: null,
          options: ["Virus", "Worm", "Trojan Horse", "Ransomware"],
          ans: "Virus",
          explanation:
            "A computer virus attaches itself to a legitimate program and spreads when the program runs.",
        },
        {
          type: "mcq",
          q: "14. What differentiates a Worm from a Virus?",
          image: null,
          options: [
            "Self-spreading without human help",
            "Needs user to open a file",
            "Looks safe but is harmful",
            "Encrypts files for ransom",
          ],
          ans: "Self-spreading without human help",
          explanation:
            "Unlike viruses, worms spread automatically across networks without needing a host file.",
        },
        {
          type: "mcq",
          q: "15. A Trojan Horse is characterized by:",
          image: null,
          options: [
            "Appearing safe but secretly harmful",
            "Encrypting files",
            "Spreading without help",
            "Collecting information",
          ],
          ans: "Appearing safe but secretly harmful",
          explanation:
            "A Trojan disguises itself as legitimate software but performs malicious actions once installed.",
        },
        {
          type: "mcq",
          q: "16. What is Ransomware designed to do?",
          image: null,
          options: [
            "Lock files and demand ransom",
            "Display ads",
            "Steal passwords",
            "Slow down networks",
          ],
          ans: "Lock files and demand ransom",
          explanation:
            "Ransomware encrypts a victim’s files and demands payment for restoring access.",
        },
        {
          type: "mcq",
          q: "17. Spyware primarily:",
          image: null,
          options: [
            "Collects information secretly",
            "Displays ads",
            "Deletes files",
            "Blocks network traffic",
          ],
          ans: "Collects information secretly",
          explanation:
            "Spyware secretly monitors user activity and steals information such as login credentials.",
        },
        {
          type: "mcq",
          q: "18. Phishing is an attack that:",
          image: null,
          options: [
            "Pretends to be a trusted entity to steal info",
            "Infects files with a virus",
            "Floods servers with traffic",
            "Hijacks online sessions",
          ],
          ans: "Pretends to be a trusted entity to steal info",
          explanation:
            "Phishing uses fake emails or websites to trick users into revealing sensitive information.",
        },
        {
          type: "mcq",
          q: "19. What causes a DoS attack?",
          image: null,
          options: [
            "One computer flooding a server with requests",
            "Multiple users sharing a file",
            "Encryption failure",
            "Physical damage",
          ],
          ans: "One computer flooding a server with requests",
          explanation:
            "A DoS attack overwhelms a target system with excessive requests, making it unavailable.",
        },
        {
          type: "mcq",
          q: "20. How is a DDoS attack different from a DoS?",
          image: null,
          options: [
            "Comes from many infected computers",
            "Uses only one computer",
            "Is a type of phishing",
            "Encrypts communication",
          ],
          ans: "Comes from many infected computers",
          explanation:
            "A DDoS attack uses multiple compromised systems (botnet) to flood the target.",
        },
        {
          type: "mcq",
          q: "21. Social engineering attacks target:",
          image: null,
          options: [
            "People to trick them into revealing information",
            "Network hardware",
            "Firewall settings",
            "Encryption keys",
          ],
          ans: "People to trick them into revealing information",
          explanation:
            "Social engineering manipulates human psychology to extract confidential information.",
        },
        {
          type: "mcq",
          q: "22. In a Man-in-the-Middle attack, the attacker:",
          image: null,
          options: [
            "Intercepts and possibly alters communication",
            "Deletes files",
            "Sends phishing emails",
            "Monitors hardware only",
          ],
          ans: "Intercepts and possibly alters communication",
          explanation:
            "A MitM attacker secretly relays and may modify communication between two parties.",
        },
        {
          type: "mcq",
          q: "23. What is eavesdropping in the context of MitM?",
          image: null,
          options: [
            "Listening secretly to communications",
            "Encrypting data",
            "Deleting messages",
            "Hijacking sessions",
          ],
          ans: "Listening secretly to communications",
          explanation:
            "Eavesdropping is covertly intercepting private communications without consent.",
        },
        {
          type: "mcq",
          q: "24. Session hijacking means:",
          image: null,
          options: [
            "Taking control of a logged-in session",
            "Locking files",
            "Sending spam",
            "Hijacking physical devices",
          ],
          ans: "Taking control of a logged-in session",
          explanation:
            "Session hijacking involves stealing session IDs or cookies to gain unauthorized access.",
        },
        {
          type: "mcq",
          q: "25. SSL stripping in a MitM attack involves:",
          image: null,
          options: [
            "Converting HTTPS to HTTP to steal data",
            "Encrypting communication",
            "Blocking traffic",
            "Sending phishing emails",
          ],
          ans: "Converting HTTPS to HTTP to steal data",
          explanation:
            "SSL stripping downgrades a secure HTTPS session to HTTP, exposing data to attackers.",
        },

        {
          type: "mcq",
          q: "26. Which security attack floods a server to make it unreachable?",
          image: null,
          options: ["DoS", "Phishing", "Spyware", "Ransomware"],
          ans: "DoS",
          explanation:
            "A Denial-of-Service (DoS) attack overwhelms a target server or network with excessive traffic, causing it to become slow or unavailable.",
        },
        {
          type: "mcq",
          q: "27. Which of the following is NOT a type of malware?",
          image: null,
          options: ["Firewall", "Trojan Horse", "Ransomware", "Adware"],
          ans: "Firewall",
          explanation:
            "A firewall is a security tool that protects against attacks, whereas malware is malicious software designed to harm systems.",
        },
        {
          type: "mcq",
          q: "28. Which attack is an example of social engineering?",
          image: null,
          options: [
            "Pretending to be IT staff to get passwords",
            "Sending viruses",
            "Flooding websites",
            "Hijacking sessions",
          ],
          ans: "Pretending to be IT staff to get passwords",
          explanation:
            "This is a classic social engineering trick where an attacker impersonates IT personnel to gain trust and steal credentials.",
        },
        {
          type: "mcq",
          q: "29. Adware typically:",
          image: null,
          options: [
            "Shows unwanted ads",
            "Encrypts files",
            "Steals passwords",
            "Floods networks",
          ],
          ans: "Shows unwanted ads",
          explanation:
            "Adware displays unwanted advertisements on devices, such as pop-ups or banners.",
        },
        {
          type: "mcq",
          q: "30. What is the main goal of cryptography?",
          image: null,
          options: [
            "Protect information by encoding it",
            "Delete harmful data",
            "Backup files",
            "Stop malware",
          ],
          ans: "Protect information by encoding it",
          explanation:
            "Cryptography secures information by converting it into coded form so that only authorized parties can access it.",
        },
        {
          type: "mcq",
          q: "31. Which cryptography principle ensures data is not changed?",
          image: null,
          options: [
            "Integrity",
            "Confidentiality",
            "Authentication",
            "Encryption",
          ],
          ans: "Integrity",
          explanation:
            "Integrity ensures that data remains unchanged during transmission or storage.",
        },
        {
          type: "mcq",
          q: "32. Encryption is the process of:",
          image: null,
          options: [
            "Converting plaintext to unreadable ciphertext",
            "Decrypting messages",
            "Sending files",
            "Writing code",
          ],
          ans: "Converting plaintext to unreadable ciphertext",
          explanation:
            "Encryption transforms readable data into an unreadable format using algorithms and keys.",
        },
        {
          type: "mcq",
          q: "33. Which encryption type uses the same key for encryption and decryption?",
          image: null,
          options: ["Symmetric", "Asymmetric", "Public key", "Private key"],
          ans: "Symmetric",
          explanation:
            "Symmetric encryption uses a single shared key for both encryption and decryption.",
        },
        {
          type: "mcq",
          q: "34. RSA algorithm is an example of which encryption type?",
          image: null,
          options: ["Asymmetric", "Symmetric", "Hashing", "Steganography"],
          ans: "Asymmetric",
          explanation:
            "RSA is a public-key (asymmetric) algorithm that uses different keys for encryption and decryption.",
        },
        {
          type: "mcq",
          q: "35. A digital signature confirms:",
          image: null,
          options: [
            "Sender authenticity and message integrity",
            "Data encryption",
            "Network security",
            "Physical security",
          ],
          ans: "Sender authenticity and message integrity",
          explanation:
            "Digital signatures verify the identity of the sender and ensure that the message was not altered.",
        },
        {
          type: "mcq",
          q: "36. PGP encryption is mainly used for:",
          image: null,
          options: [
            "Email privacy",
            "Wi-Fi security",
            "Network firewalls",
            "Antivirus software",
          ],
          ans: "Email privacy",
          explanation:
            "PGP (Pretty Good Privacy) is widely used to encrypt and sign email communications.",
        },
        {
          type: "mcq",
          q: "37. What is the main method to verify a digital signature?",
          image: null,
          options: [
            "Using the sender's public key",
            "Using the sender's private key",
            "Using a password",
            "Using the receiver's public key",
          ],
          ans: "Using the sender's public key",
          explanation:
            "A digital signature is verified with the sender’s public key, confirming their authenticity.",
        },
        {
          type: "mcq",
          q: "38. What is the advantage of asymmetric encryption?",
          image: null,
          options: [
            "Private key never needs to be shared",
            "Requires only one key",
            "Faster for large data",
            "Uses the same key for encryption",
          ],
          ans: "Private key never needs to be shared",
          explanation:
            "In asymmetric encryption, the private key remains secret, improving overall security.",
        },
        {
          type: "mcq",
          q: "39. Data confidentiality in cryptography means:",
          image: null,
          options: [
            "Keeping data private",
            "Verifying sender's identity",
            "Ensuring data is not altered",
            "Encrypting files",
          ],
          ans: "Keeping data private",
          explanation:
            "Confidentiality ensures information is not accessed by unauthorized individuals.",
        },
        {
          type: "mcq",
          q: "40. What does AES stand for?",
          image: null,
          options: [
            "Advanced Encryption Standard",
            "Asymmetric Encryption System",
            "Authorized Encryption Scheme",
            "Application Encryption Service",
          ],
          ans: "Advanced Encryption Standard",
          explanation:
            "AES is a symmetric encryption algorithm widely used to secure sensitive data.",
        },
        {
          type: "mcq",
          q: "41. Which encryption type is faster for large volumes of data?",
          image: null,
          options: [
            "Symmetric",
            "Asymmetric",
            "Public Key",
            "Digital Signature",
          ],
          ans: "Symmetric",
          explanation:
            "Symmetric encryption is computationally faster and suitable for encrypting large datasets.",
        },
        {
          type: "mcq",
          q: "42. WEP in Wi-Fi security is considered:",
          image: null,
          options: [
            "Weak and outdated",
            "Strong and secure",
            "Used for VPNs",
            "Part of TLS",
          ],
          ans: "Weak and outdated",
          explanation:
            "WEP (Wired Equivalent Privacy) has serious vulnerabilities and is replaced by WPA2/WPA3.",
        },
        {
          type: "mcq",
          q: "43. TLS is an improved version of:",
          image: null,
          options: ["SSL", "WEP", "VPN", "Firewall"],
          ans: "SSL",
          explanation:
            "TLS (Transport Layer Security) evolved from SSL to provide stronger encryption and secure data transmission.",
        },
        {
          type: "mcq",
          q: "44. Which VPN type is used for users working remotely?",
          image: null,
          options: [
            "Remote Access VPN",
            "Site-to-Site VPN",
            "IPsec VPN",
            "Proxy VPN",
          ],
          ans: "Remote Access VPN",
          explanation:
            "A Remote Access VPN allows individual users to securely connect to a private network from anywhere.",
        },
        {
          type: "mcq",
          q: "45. A stateful inspection firewall differs from packet filtering by:",
          image: null,
          options: [
            "Tracking active connections",
            "Checking only basic data",
            "Requiring a proxy",
            "Being cloud-based",
          ],
          ans: "Tracking active connections",
          explanation:
            "Stateful inspection firewalls monitor the state of connections to make dynamic security decisions.",
        },
        {
          type: "mcq",
          q: "46. Which of the following is NOT a type of firewall?",
          image: null,
          options: [
            "Hardware Firewall",
            "Proxy Firewall",
            "Intrusion Firewall",
            "Next-Gen Firewall",
          ],
          ans: "Intrusion Firewall",
          explanation:
            "‘Intrusion Firewall’ is not a standard type; IDS/IPS systems handle intrusion detection, not firewalls.",
        },
        {
          type: "mcq",
          q: "47. Which cryptographic method is commonly used for secure websites?",
          image: null,
          options: ["RSA", "AES", "DES", "WEP"],
          ans: "RSA",
          explanation:
            "RSA is a public-key algorithm used in HTTPS (SSL/TLS) to secure web communications.",
        },
        {
          type: "mcq",
          q: "48. What type of VPN connects two separate offices securely?",
          image: null,
          options: [
            "Site-to-Site VPN",
            "Remote Access VPN",
            "Proxy VPN",
            "Encrypted VPN",
          ],
          ans: "Site-to-Site VPN",
          explanation:
            "A Site-to-Site VPN connects two local networks securely over the internet.",
        },
        {
          type: "mcq",
          q: "49. Which security tool acts as a middleman between users and servers?",
          image: null,
          options: [
            "Proxy Firewall",
            "Packet Filtering Firewall",
            "Antivirus",
            "VPN",
          ],
          ans: "Proxy Firewall",
          explanation:
            "A proxy firewall intercepts all requests between client and server, filtering and hiding client identities.",
        },
        {
          type: "mcq",
          q: "50. What does HSM in Physical Security stand for?",
          image: null,
          options: [
            "Hardware Security Module",
            "Host Security Manager",
            "Hardware Software Monitor",
            "High Security Mechanism",
          ],
          ans: "Hardware Security Module",
          explanation:
            "An HSM is a secure hardware device used to store encryption keys and perform cryptographic operations.",
        },

        {
          type: "mcq",
          q: "51. Which of the following is not a feature of a VPN?",
          image: null,
          options: [
            "Encrypts internet connection",
            "Creates secure remote access",
            "Blocks malware infections",
            "Connects offices securely",
          ],
          ans: "Blocks malware infections",
          explanation:
            "While a VPN secures your connection, it doesn’t detect or block malware — that’s the role of antivirus software.",
        },
        {
          type: "mcq",
          q: "52. Which of the following is a characteristic of Next-Gen Firewalls?",
          image: null,
          options: [
            "Cloud integration and advanced filtering",
            "Only basic packet filtering",
            "Manual rule setup",
            "No monitoring",
          ],
          ans: "Cloud integration and advanced filtering",
          explanation:
            "Next-Generation Firewalls provide application awareness, deep inspection, and cloud-based threat intelligence.",
        },
        {
          type: "mcq",
          q: "53. Which layer is protected by SSL/TLS protocols?",
          image: null,
          options: [
            "Transport Layer",
            "Network Layer",
            "Application Layer",
            "Physical Layer",
          ],
          ans: "Transport Layer",
          explanation:
            "SSL/TLS operates at the Transport Layer to provide encrypted, authenticated communication between applications.",
        },
        {
          type: "mcq",
          q: "54. Which of these is NOT part of the CIA triad in security?",
          image: null,
          options: [
            "Compliance",
            "Confidentiality",
            "Integrity",
            "Availability",
          ],
          ans: "Compliance",
          explanation:
            "The CIA triad stands for Confidentiality, Integrity, and Availability — compliance is important but separate.",
        },
        {
          type: "mcq",
          q: "55. Which security method blocks malware from entering a system?",
          image: null,
          options: ["Antivirus", "Firewall", "IDS", "VPN"],
          ans: "Antivirus",
          explanation:
            "Antivirus software detects, prevents, and removes malicious software such as viruses and worms.",
        },
        {
          type: "mcq",
          q: "56. Which of the following is an example of endpoint security?",
          image: null,
          options: ["EDR", "Firewall", "Encryption", "Backup"],
          ans: "EDR",
          explanation:
            "Endpoint Detection and Response (EDR) continuously monitors and defends end-user devices from threats.",
        },
        {
          type: "mcq",
          q: "57. In Application Security, what is the purpose of 'Testing'?",
          image: null,
          options: [
            "Find and fix weaknesses",
            "Write safe code",
            "Update apps",
            "Encrypt data",
          ],
          ans: "Find and fix weaknesses",
          explanation:
            "Security testing identifies vulnerabilities and weaknesses before releasing applications.",
        },
        {
          type: "mcq",
          q: "58. Which practice in Application Security involves writing code resistant to attacks?",
          image: null,
          options: ["Secure Coding", "Patching", "Testing", "Access Control"],
          ans: "Secure Coding",
          explanation:
            "Secure coding ensures software is written in a way that minimizes the introduction of security flaws.",
        },
        {
          type: "mcq",
          q: "59. Which of the following is a newer, more efficient asymmetric encryption algorithm that uses smaller keys compared to RSA?",
          image: null,
          options: ["ECC", "AES", "DES", "PGP"],
          ans: "ECC",
          explanation:
            "Elliptic Curve Cryptography (ECC) offers strong security with shorter key lengths, ideal for limited-resource devices.",
        },
        {
          type: "mcq",
          q: "60. IPsec is a common protocol used to secure which of the following?",
          image: null,
          options: ["VPNs", "Emails", "Wi-Fi", "Web Browsing"],
          ans: "VPNs",
          explanation:
            "IPsec (Internet Protocol Security) authenticates and encrypts IP packets, commonly used to secure VPN connections.",
        },
        {
          type: "mcq",
          q: "61. What is the primary purpose of making 'Backups' in information security?",
          image: null,
          options: [
            "To restore data in case of loss",
            "To encrypt data",
            "To block unauthorized access",
            "To monitor network traffic",
          ],
          ans: "To restore data in case of loss",
          explanation:
            "Backups ensure data can be recovered in case of accidental deletion, corruption, or ransomware attacks.",
        },
        {
          type: "mcq",
          q: "62. In physical security, what is the role of CCTV?",
          image: null,
          options: [
            "To watch and record for safety",
            "To lock doors",
            "To secure encryption keys",
            "To block network traffic",
          ],
          ans: "To watch and record for safety",
          explanation:
            "CCTV systems provide surveillance to monitor and record physical spaces for safety and security.",
        },
        {
          type: "mcq",
          q: "63. What is the process of converting ciphertext back into readable plaintext called?",
          image: null,
          options: ["Decryption", "Encryption", "Hashing", "Signing"],
          ans: "Decryption",
          explanation:
            "Decryption uses a key to transform unreadable ciphertext back into its original readable form.",
        },
        {
          type: "mcq",
          q: "64. Which of these ensures the sender’s identity is confirmed in cryptography?",
          image: null,
          options: [
            "Authentication",
            "Confidentiality",
            "Integrity",
            "Non-repudiation",
          ],
          ans: "Authentication",
          explanation:
            "Authentication verifies the sender’s identity, confirming they are who they claim to be.",
        },
        {
          type: "mcq",
          q: "65. Which security principle ensures that information is accessible when needed?",
          image: null,
          options: [
            "Availability",
            "Integrity",
            "Confidentiality",
            "Authentication",
          ],
          ans: "Availability",
          explanation:
            "Availability ensures authorized users can access data and systems whenever required.",
        },
        {
          type: "mcq",
          q: "66. What does hashing primarily provide in data security?",
          image: null,
          options: [
            "Integrity",
            "Confidentiality",
            "Availability",
            "Authentication",
          ],
          ans: "Integrity",
          explanation:
            "Hashing ensures data integrity by generating a unique fixed-length value that changes if the data is modified.",
        },
        {
          type: "mcq",
          q: "67. What is the main difference between hashing and encryption?",
          image: null,
          options: [
            "Hashing is one-way; encryption is reversible",
            "Hashing uses keys; encryption doesn’t",
            "Encryption is slower than hashing",
            "They are the same",
          ],
          ans: "Hashing is one-way; encryption is reversible",
          explanation:
            "Hashing produces a fixed-length irreversible value, while encryption can be reversed with a key.",
        },
        {
          type: "mcq",
          q: "68. Which encryption algorithm replaced DES for better security?",
          image: null,
          options: ["AES", "RSA", "ECC", "MD5"],
          ans: "AES",
          explanation:
            "AES (Advanced Encryption Standard) succeeded DES due to its stronger and more efficient design.",
        },
        {
          type: "mcq",
          q: "69. Which of the following provides both authentication and encryption in VPNs?",
          image: null,
          options: ["IPsec", "SSL", "AES", "PGP"],
          ans: "IPsec",
          explanation:
            "IPsec secures VPNs by encrypting data and authenticating the communicating parties.",
        },
        {
          type: "mcq",
          q: "70. Which protocol uses port 443 for secure communication?",
          image: null,
          options: ["HTTPS", "HTTP", "FTP", "Telnet"],
          ans: "HTTPS",
          explanation:
            "HTTPS (HTTP Secure) uses port 443 to encrypt web traffic with SSL/TLS.",
        },
        {
          type: "mcq",
          q: "71. What is the main purpose of digital certificates?",
          image: null,
          options: [
            "Verify the identity of a website or entity",
            "Encrypt all network traffic",
            "Block unauthorized users",
            "Store passwords",
          ],
          ans: "Verify the identity of a website or entity",
          explanation:
            "Digital certificates authenticate the identity of websites or organizations using trusted Certificate Authorities.",
        },
        {
          type: "mcq",
          q: "72. Which type of malware demands payment to unlock files?",
          image: null,
          options: ["Ransomware", "Trojan", "Worm", "Adware"],
          ans: "Ransomware",
          explanation:
            "Ransomware encrypts user data and demands a ransom for decryption.",
        },
        {
          type: "mcq",
          q: "73. Which security practice involves limiting users’ permissions to only what they need?",
          image: null,
          options: [
            "Principle of Least Privilege",
            "Secure Coding",
            "Patch Management",
            "Defense in Depth",
          ],
          ans: "Principle of Least Privilege",
          explanation:
            "This principle reduces risks by giving users only the minimum access necessary to perform their jobs.",
        },
        {
          type: "mcq",
          q: "74. Which system detects and prevents network intrusions in real-time?",
          image: null,
          options: ["IPS", "IDS", "Firewall", "VPN"],
          ans: "IPS",
          explanation:
            "An Intrusion Prevention System (IPS) actively monitors network traffic and blocks detected threats in real-time.",
        },
        {
          type: "mcq",
          q: "75. What does 'Two-Factor Authentication' (2FA) add to security?",
          image: null,
          options: [
            "An extra verification step beyond passwords",
            "Data encryption",
            "Automatic software updates",
            "Session management",
          ],
          ans: "An extra verification step beyond passwords",
          explanation:
            "2FA enhances security by requiring two forms of verification, such as a password and a one-time code.",
        },
        [
          {
            type: "mcq",
            q: "76. In the RSA algorithm, what is the first step in key generation?",
            image: null,
            options: [
              "Choose two prime numbers p and q",
              "Calculate n = p × q",
              "Choose public key e",
              "Find private key d",
            ],
            ans: "Choose two prime numbers p and q",
            explanation:
              "The RSA algorithm begins by selecting two distinct prime numbers p and q, which form the foundation for generating the public and private key pairs. This is the crucial first step that determines the security strength of the entire system.",
          },
          {
            type: "mcq",
            q: "77. In RSA encryption, what does 'n' represent in the formula n = p × q?",
            image: null,
            options: [
              "The modulus used in encryption/decryption",
              "The public key exponent",
              "The private key exponent",
              "The original message",
            ],
            ans: "The modulus used in encryption/decryption",
            explanation:
              "In RSA, n is the modulus calculated by multiplying two primes p and q. It is used in both encryption (C = M^e mod n) and decryption (M = C^d mod n) operations as the basis for the modular arithmetic.",
          },
          {
            type: "mcq",
            q: "78. Which formula represents RSA encryption?",
            image: null,
            options: [
              "C = M^e mod n",
              "M = C^d mod n",
              "n = p × q",
              "d = e⁻¹ mod φ(n)",
            ],
            ans: "C = M^e mod n",
            explanation:
              "RSA encryption uses the formula C = M^e mod n, where M is the plaintext message, e is the public key exponent, n is the modulus, and C is the resulting ciphertext.",
          },
          {
            type: "mcq",
            q: "79. What is the relationship between the RSA encryption and decryption formulas?",
            image: null,
            options: [
              "They are inverse operations using different keys",
              "They use the same key and formula",
              "Encryption uses addition, decryption uses subtraction",
              "They both use the private key",
            ],
            ans: "They are inverse operations using different keys",
            explanation:
              "RSA encryption (C = M^e mod n) uses the public key 'e', while decryption (M = C^d mod n) uses the private key 'd'. These are mathematical inverse operations that undo each other, allowing secure communication.",
          },
          {
            type: "mcq",
            q: "80. What is the primary application of the RSA algorithm?",
            image: null,
            options: [
              "Secure communication and key exchange",
              "Password hashing",
              "Data compression",
              "Network routing",
            ],
            ans: "Secure communication and key exchange",
            explanation:
              "RSA is primarily used for secure communication and key exchange in cryptographic systems. It enables secure data transmission and key sharing without needing to exchange secret keys beforehand.",
          },
        ],
      ],
    },
  ],
};
