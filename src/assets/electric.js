import ohm from "./ohm.png";
import resistance from "./resistance.JPG";
import series from "./series.png";
import parallel from "./parallel.png";
import voltagedivider from "./voltagdivider.png";
import currentdivider from "./currentdivider.png";
import star from "./star.JPG";
import delta from "./delta.JPG";
import kcl from "./kcl.JPG";
import kvl from "./kvl.JPG";
import sign from "./sign.JPG";
import signkvl from "./signkvl.png";
import linear from "./linear.JPG";
import bilateral from "./bilateral.JPG";
import active from "./active.JPG";
import bq36 from "./bq36.png";
import bq22 from "./bq22.JPG";
import bq34 from "./bq34.png";
import bq25 from "./bq25.JPG";
import bq20 from "./bq20.png";
import bq14 from "./bq14.JPG";
import bq1 from "./bq1.JPG";
import bq3 from "./bq3.JPG";
import bq4 from "./bq4.JPG";
import bq6 from "./bq6.JPG";
import bq23 from "./bq23.png";
import bq17 from "./bq17.JPG";
import bq18 from "./bq18.JPG";
import bq15 from "./bq15.png";
import thevenin from "./thevenin.JPG";
import norton from "./norton.JPG";
import bn4 from "./bn4.JPG";
import mptt from "./mptt.JPG";
import bn7 from "./bn7.png";
import bn17 from "./bn17.JPG";
import bn5 from "./bn5.JPG";
import r from "./r.JPG";
import l from "./l.JPG";
import c from "./c.JPG";
import rg from "./rg.JPG";
import lg from "./lg.JPG";
import cg from "./cg.JPG";
import rl from "./rl.jpg";
import rc from "./rc.jpg";
import rlc from "./rlc.JPG";
import band from "./band.png";
import prlc from "./prlc.jpg";
import pcoil from "./pcoil.png";
import acterm from "./acterm.png";
import waveform from "./waveform.png";
import sc from "./sc.JPG";
import conductor from "./conductor.JPG";
import diode from "./diode.JPG";
import anode from "./anode.JPG";
import zener from "./zener.JPG";
import piecewise from "./piecewise.JPG";
import biasing from "./biasing.JPG";
import config from "./config.JPG";
import biased from "./biased.JPG";
import model from "./model.JPG";
import mosfet from "./mosfet.JPG";
import symbolMosfet from "./symbolmosfet.png";
import cmos from "./cmos.png";
import wien from "./wien.png";
import phase from "./phase.png";
import colpitts from "./colpitts.png";
import hartley from "./hartley.png";
import qsqaure3 from "./qsquare3.JPG";
import qop44 from "./qop44.png";
import classes from "./class.JPG";
import powermosfet from "./powermosfet.JPG";

export const topic = {
  name: "1. Concept of Basic Electrical and Electronics Engineering ",
  subtopics: [
    {
      subname:
        "1.1 : Basic Concept : Ohm´s law, electric voltage current, power and energy, conducting and insulating materials. Series and parallel electric circuits, start-delta and delta-star conversion, Kirchhoff’s law, linear and non-linear circuit, bilateral and unilateral circuits, active and passive circuits. ",
      blocks: [
        { type: "bold", text: " Ohm's Law : " },
        {
          type: "text",
          text: " → Ohm's law states that current is directly proportional to voltage at constant temperature and other conditions are constant. ",
        },
        { type: "text", text: " ⟹ I ∝ V ", center: true },
        { type: "text", text: " ⟹ I = V / R ", center: true },
        { type: "text", text: " ⟹ V = IR, Here R is constant. ", center: true },
        {
          type: "semibold",
          text: " Applications Of Ohm's Law : ",
        },
        {
          type: "text",
          text: " ⟹ To calculate resistance, current and maintain the desired voltage. ",
          center: true,
        },
        {
          type: "semibold",
          text: " Limitations Of Ohm's Law: ",
        },
        {
          type: "text",
          text: " ⟹ Not valid for non-linear device (diodes, zener diodes, voltage regulator. ",
          center: true,
        },
        {
          type: "text",
          text: " ⟹ Not Applicable for non metallic conductor such as sillicon carbide. ",
          center: true,
        },
        {
          type: "text",
          text: " ⟹ Not Applicable for temperature varying condition. ",
          center: true,
        },

        { type: "bold", text: " Ohmic & Non Ohmic Conductor " },
        { type: "image", src: ohm },
        {
          type: "text",
          text: " ⟹ Any Circuit element that has a linear relationship between voltage and current is known as linear circuit element. Resistor is a linear circuit element and other examples are inductor and capacitor. ",
          center: true,
        },
        {
          type: "text",
          text: " ⟹ Some time Inductor and Capacitor might be consider non ohmic during sudden change in current and voltage respectively. ",
          center: true,
        },

        { type: "bold", text: " Resistance (R) " },
        {
          type: "text",
          text: " The opposition to the current flow. Depends on : ",
        },
        {
          type: "text",
          text: " ⟹ Length which is directly proportional i.e. (∝ L) ",
          center: true,
        },
        {
          type: "text",
          text: " ⟹ Area which is inversely proportional i.e. (∝ 1 / A) ",
          center: true,
        },
        { type: "text", text: " ⟹ Material & Temperature. ", center: true },
        { type: "semibold", text: " Mathematically," },
        { type: "image", src: resistance },

        { type: "bold", text: " Resistivity (ρ) " },
        {
          type: "text",
          text: " Resisitivity means the resistance per unit length and area. ",
        },
        { type: "text", text: " ⟹ ρ = R.A / L ", center: true },
        {
          type: "text",
          text: " → Depends on specific temperature and type of material. The S.I Unit is Ω.m.",
        },

        { type: "bold", text: " Conductance (G) " },
        { type: "text", text: " The reciprocal of the Resistance. " },
        { type: "text", text: " ⟹  G = 1 / R ", center: true },
        {
          type: "text",
          text: " ⟹  Unit is Ω−1 i.e. mho or Siemens (S).",
          center: true,
        },

        { type: "bold", text: " Conductivity (σ) " },
        { type: "text", text: " The reciprocal of the Resistivity. " },
        { type: "text", text: " ⟹  σ = 1 / ρ  ", center: true },
        {
          type: "text",
          text: " ⟹  Unit is (Ωm)−1 i.e. mho.m-1 or Siemens per meter (S/m).",
          center: true,
        },

        { type: "bold", text: "  Electric voltage current " },
        {
          type: "semibold",
          text: "Electric Voltage (V): ",
        },

        {
          type: "text",
          text: "  Voltage is the work done (or energy supplied) per unit charge to move a charge between two points. ",
        },
        { type: "text", text: " ⟹  V = Work (W) / Charge (Q) ", center: true },
        {
          type: "text",
          text: " ⟹  It is Measured in Volt(v), 1v → 1 joule/sec.  ",
          center: true,
        },
        {
          type: "semibold",
          text: "Electric Current (I) : ",
        },
        {
          type: "text",
          text: "  Current is the flow of charge due to free electrons in a conductor. ",
        },
        {
          type: "text",
          text: " ⟹  Current(I) = Charge(Q) / Time (T) ",
          center: true,
        },
        {
          type: "text",
          text: " ⟹  It is Measured in Ampere(A)  → Coloumb/sec. ",
          center: true,
        },

        { type: "bold", text: "  Power And Energy " },
        {
          type: "semibold",
          text: " Electric Power (P) : ",
        },
        {
          type: "text",
          text: "  Power is the rate at which electrical energy is transferred or consumed in a circuit. ",
        },
        {
          type: "text",
          text: " ⟹ P = Work / Time or P = V.I = I^2.R = V^2 / R ",
          center: true,
        },
        {
          type: "text",
          text: " ⟹  It is Measured in Watt (W) → 1𝑊 = 1 J / s  = 1 V⋅A ",
          center: true,
        },
        {
          type: "semibold",
          text: " Electric Energy (E or W) :  ",
        },
        {
          type: "text",
          text: " Energy is the total work done or total power consumed over a period of time. ",
        },
        {
          type: "text",
          text: " ⟹  E = Power⋅time or E = V⋅I⋅t ",
          center: true,
        },
        {
          type: "text",
          text: " ⟹ It is Measured in Joule (J) →  1J = 1W⋅s",
          center: true,
        },
        { type: "bold", text: " Commercial Unit : " },
        {
          type: "text",
          text: " → 1KWH = 1 Unit = 100 w * 60 * 60 = 3600000 Wt.s = 3.6 * 10^6 J.",
          center: true,
        },

        { type: "bold", text: "  Conducting and Insulating materials " },
        {
          type: "semibold",
          text: " Conductor :  ",
        },
        {
          type: "text",
          text: " ⟹  Allow current or heat. Electron move freely within the conductor. ",
        },
        {
          type: "text",
          text: " eg: copper, silver, almunium, iron etc.. ",
          center: true,
        },
        {
          type: "semibold",
          text: " Insulator : ",
        },
        {
          type: "text",
          text: " ⟹  Resist/Oppose current or heat. Electron donot move freely within the insulator.  ",
        },
        {
          type: "text",
          text: " eg: rubber, paper, wood, glass etc.. ",
          center: true,
        },
        { type: "bold", text: " MCQ  : " },
        {
          type: "mcq",
          q: "1. Ohm’s law holds when temperature and physical conditions are:",
          image: null,
          options: [
            "Rapidly changing",
            "Constant",
            "At absolute zero",
            "High humidity only",
          ],
          ans: "Constant",
          explanation:
            "Ohm’s law V ∝ I assumes constant temperature and material conditions; if temperature changes, resistance varies and linearity fails.",
        },
        {
          type: "mcq",
          q: "2. Which set is most directly linear under ideal assumptions?",
          image: null,
          options: [
            "Resistor only",
            "Resistor and capacitor",
            "Resistor, inductor, capacitor",
            "Resistor and diode",
          ],
          ans: "Resistor, inductor, capacitor",
          explanation:
            "Ideal R, L, C are linear elements. Diodes are nonlinear devices.",
        },
        {
          type: "mcq",
          q: "3. Which device is explicitly listed among Ohm’s law limitations?",
          image: null,
          options: [
            "Ideal inductor",
            "PN junction diode",
            "Carbon resistor",
            "Ideal capacitor",
          ],
          ans: "PN junction diode",
          explanation: "Diodes are nonlinear; they do not follow V ∝ I.",
        },
        {
          type: "mcq",
          q: "4. In which of the following cases is Ohm’s law not applicable?",
          image: null,
          options: ["Electrolytes", "Arc lamps", "Insulators", "AC bridges"],
          ans: "Electrolytes",
          explanation:
            "Current in electrolytes is ionic and nonlinear; hence Ohm’s law doesn’t apply.",
        },
        {
          type: "mcq",
          q: "5. Ohm’s law is not applicable to ___________",
          image: null,
          options: [
            "dc circuits",
            "high currents",
            "small resistors",
            "semi-conductors",
          ],
          ans: "Semi-conductors",
          explanation:
            "Semiconductors are nonlinear devices; their V–I characteristics are not Ohmic.",
        },
        {
          type: "mcq",
          q: "6. Which type of circuits cannot be analyzed using Ohm’s law?",
          image: null,
          options: ["Unilateral", "Bilateral", "Linear", "Conductors"],
          ans: "Unilateral",
          explanation:
            "Unilateral devices (like diodes) allow current only in one direction; they are not Ohmic.",
        },
        {
          type: "mcq",
          q: "7. The Tungsten filament in a light bulb has a resistance of –",
          image: null,
          options: ["Linear", "Non-Linear", "Fixed", "Both a & b are correct"],
          ans: "Non-Linear",
          explanation:
            "Tungsten’s resistance increases with temperature; hence V–I is nonlinear.",
        },
        {
          type: "mcq",
          q: "8. Which of the following cannot be analyzed using Ohm’s law?",
          image: null,
          options: ["Capacitors", "Inductors", "Transistors", "Resistance"],
          ans: "Transistors",
          explanation:
            "Transistors are nonlinear active devices, not governed by Ohm’s law.",
        },
        {
          type: "mcq",
          q: "9. Ohm’s law may fail in which situation?",
          image: null,
          options: [
            "Low-frequency DC with constant temperature",
            "High-current heating causing temperature rise",
            "Short, thick copper bar at room temperature",
            "Superconducting state",
          ],
          ans: "High-current heating causing temperature rise",
          explanation: "Heating alters resistance, breaking linearity.",
        },
        {
          type: "mcq",
          q: "10. Which statement about inductor/capacitor and Ohmic behavior is most accurate?",
          image: null,
          options: [
            "Always non-Ohmic",
            "Always Ohmic",
            "Linear elements but show transient voltage/current changes without violating linearity",
            "Active elements",
          ],
          ans: "Linear elements but show transient voltage/current changes without violating linearity",
          explanation:
            "Ideal L and C are linear but exhibit time-varying behavior.",
        },
        {
          type: "mcq",
          q: "11. An electric current of 10 A is the same as ___________",
          image: null,
          options: ["10 J/C", "10 V/C", "10 C/sec", "10 W/sec"],
          ans: "10 C/sec",
          explanation: "Current I = Q/t; 10 A = 10 C/s.",
        },
        {
          type: "mcq",
          q: "12. In a conductor, if 6-coulomb charge flows for 2 seconds, the value of current is:",
          image: null,
          options: ["3 ampere", "3 volts", "2 amperes", "2 volts"],
          ans: "3 ampere",
          explanation: "I=Q/t=6/2=3 A.",
        },
        {
          type: "mcq",
          q: "13. The flow of current is caused by:",
          image: null,
          options: ["Proton", "Neutron", "Electron", "Wire"],
          ans: "Electron",
          explanation:
            "Free electrons drift under electric field in conductors.",
        },
        {
          type: "mcq",
          q: "14. What is the unit of electric current?",
          image: null,
          options: ["Watt", "Ampere", "Volt", "Coulomb"],
          ans: "Ampere",
          explanation: "SI unit of current is Ampere = 1 C/s.",
        },
        {
          type: "mcq",
          q: "15. What kind of quantity is electric potential?",
          image: null,
          options: ["Vector", "Tensor", "Scalar", "Dimensionless"],
          ans: "Scalar",
          explanation: "Potential has magnitude only, no direction.",
        },
        {
          type: "mcq",
          q: "16. The relationship between electric potential, current and resistance is defined by which law?",
          image: null,
          options: ["Ohm’s law", "Kelvin law", "Norton’s law", "Coulomb law"],
          ans: "Ohm’s law",
          explanation: "V = IR.",
        },
        {
          type: "mcq",
          q: "17. If the resistance of an electric iron is 50 Ω and a current of 3.2 A flows, find the voltage.",
          image: null,
          options: ["150 V", "170 V", "160 V", "110 V"],
          ans: "160 V",
          explanation: "V=IR=3.2×50=160V.",
        },
        {
          type: "mcq",
          q: "18. An EMF source of 8.0 V is connected to a resistive appliance. Current = 2.0 A. Find resistance.",
          image: null,
          options: ["2 Ω", "4 Ω", "8 Ω", "16 Ω"],
          ans: "4 Ω",
          explanation: "R=V/I=8/2=4Ω.",
        },
        {
          type: "mcq",
          q: "19. Voltage is defined as:",
          image: null,
          options: [
            "Charge per unit work",
            "Work per unit charge",
            "Power per unit time",
            "Energy per unit mass",
          ],
          ans: "Work per unit charge",
          explanation: "V=W/Q.",
        },
        {
          type: "mcq",
          q: "20. Current is defined as:",
          image: null,
          options: [
            "Charge per unit distance",
            "Charge per unit time",
            "Work per unit charge",
            "Energy per unit time",
          ],
          ans: "Charge per unit time",
          explanation: "I=Q/t.",
        },
        {
          type: "mcq",
          q: "21. Electric power in a DC circuit can be written as:",
          image: null,
          options: ["P=VI=I²R=V²/R", "P=V/I", "P=IR", "P=R/I²"],
          ans: "P=VI=I²R=V²/R",
          explanation: "Derived from V=IR.",
        },
        {
          type: "mcq",
          q: "22. One kilowatt-hour equals:",
          image: null,
          options: ["3600 J", "3.6 × 10⁶ J", "36 × 10³ J", "3.6 × 10³ J"],
          ans: "3.6 × 10⁶ J",
          explanation: "1kWh=1000W×3600s=3.6×10⁶J.",
        },
        {
          type: "mcq",
          q: "23. When a bulb uses 0.25A from a 24V battery, what is its resistance?",
          image: null,
          options: ["50 Ω", "96 Ω", "95 Ω", "72 Ω"],
          ans: "96 Ω",
          explanation: "R=V/I=24/0.25=96Ω.",
        },
        {
          type: "mcq",
          q: "24. Open circuit resistance is:",
          image: null,
          options: ["Low", "Infinitely High", "Zero", "Both a & b"],
          ans: "Infinitely High",
          explanation: "No current flows in open circuit → resistance is ∞.",
        },
        {
          type: "mcq",
          q: "25. Short circuit resistance is:",
          image: null,
          options: ["Low", "Infinitely High", "Zero", "Both a & b"],
          ans: "Zero",
          explanation: "Short circuit has nearly zero resistance.",
        },
        {
          type: "mcq",
          q: "26. One unit of electrical energy is … Joules",
          image: null,
          options: ["3600000", "360000", "3600", "3.6"],
          ans: "3600000",
          explanation: "1 kWh = 3.6 × 10⁶ J = 3600000 J.",
        },
        {
          type: "mcq",
          q: "27. If voltage is 10V and resistance is 5Ω. Find current and power.",
          image: null,
          options: ["2A and 10W", "2A and 20W", "50A and 100W", "50A and 200W"],
          ans: "2A and 20W",
          explanation: "I=V/R=10/5=2A; P=VI=20W.",
        },
        {
          type: "mcq",
          q: "28. Which of the following bulbs will have high resistance?",
          image: null,
          options: ["220V, 60W", "220V, 100W", "115V, 60W", "115V, 100W"],
          ans: "220V, 60W",
          explanation: "R=V²/P; higher V²/P → higher resistance.",
        },
        {
          type: "mcq",
          q: "29. A kilowatt-hour (kWh) is a big unit of _______________ electricity.",
          image: null,
          options: ["Work", "Energy", "Conductance", "Power"],
          ans: "Energy",
          explanation: "kWh = unit of electrical energy consumption.",
        },
        {
          type: "mcq",
          q: "30. For a fixed voltage source, decreasing resistance does what to power?",
          image: null,
          options: [
            "Decreases power",
            "No change",
            "Increases power",
            "First increases then decreases",
          ],
          ans: "Increases power",
          explanation: "P=V²/R; if R ↓, P ↑.",
        },
        {
          type: "mcq",
          q: "31. Which material is a good conductor?",
          image: null,
          options: ["Rubber", "Glass", "Copper", "Dry wood"],
          ans: "Copper",
          explanation: "Metals like copper have high conductivity.",
        },
        {
          type: "mcq",
          q: "32. Which material is a good insulator?",
          image: null,
          options: ["Silver", "Aluminum", "Iron", "Rubber"],
          ans: "Rubber",
          explanation: "Rubber resists electron motion strongly.",
        },
        {
          type: "mcq",
          q: "33. Conductance G is defined as:",
          image: null,
          options: ["G=ρL/A", "G=1/R", "G=σ/A", "G=V/I"],
          ans: "G=1/R",
          explanation: "Reciprocal of resistance; unit Siemens (S).",
        },
        {
          type: "mcq",
          q: "34. Conductivity (σ) is:",
          image: null,
          options: [
            "Reciprocal of resistivity",
            "Reciprocal of permittivity",
            "Product of resistance and area",
            "Voltage per ampere",
          ],
          ans: "Reciprocal of resistivity",
          explanation: "σ=1/ρ.",
        },
        {
          type: "mcq",
          q: "35. The SI unit of conductance is:",
          image: null,
          options: ["Mho", "Siemens", "Ohm", "Coulomb"],
          ans: "Siemens",
          explanation: "Modern SI unit is Siemens (S).",
        },
        {
          type: "mcq",
          q: "36. In a current-voltage graph of a linear resistor, slope indicates:",
          image: null,
          options: ["Conductance", "Resistance", "Resistivity", "Constant"],
          ans: "Resistance",
          explanation: "In V–I plot, slope V/I = R.",
        },
        {
          type: "mcq",
          q: "37. Conductance is expressed in terms of:",
          image: null,
          options: ["Mho", "Mho/m", "Ohm/m", "m/ohm"],
          ans: "Mho",
          explanation: "Conductance unit = reciprocal of ohm.",
        },
        {
          type: "mcq",
          q: "38. The resistance of a material depends on:",
          image: null,
          options: [
            "Length",
            "Cross-sectional Area",
            "Type of Material",
            "All of the above",
          ],
          ans: "All of the above",
          explanation: "R=ρL/A.",
        },
        {
          type: "mcq",
          q: "39. Resistivity depends on:",
          image: null,
          options: ["Length", "CSA", "Type of Material", "All of the above"],
          ans: "Type of Material",
          explanation:
            "Resistivity is a material property, independent of size.",
        },
        {
          type: "mcq",
          q: "40. The quantity “resistivity” physically represents:",
          image: null,
          options: [
            "Resistance of 1 m length and 1 m² area sample",
            "Resistance of any sample regardless of size",
            "Conductance per meter",
            "Voltage per ampere",
          ],
          ans: "Resistance of 1 m length and 1 m² area sample",
          explanation: "From R=ρL/A; setting L=1,A=1 gives R=ρ.",
        },
        {
          type: "mcq",
          q: "41. What happens to the resistance of the conductor when Length is Doubled?",
          image: null,
          options: ["2R", "4R", "R/4", "R/2"],
          ans: "2R",
          explanation: "R ∝ L. Double length → 2R.",
        },
        {
          type: "mcq",
          q: "42. What happens to the resistance of the conductor when the area is doubled?",
          image: null,
          options: ["2R", "4R", "R/4", "R/2"],
          ans: "R/2",
          explanation: "R ∝ 1/A. Double area → R/2.",
        },
        {
          type: "mcq",
          q: "43. What happens to the resistance of the conductor when Length Doubles and Area halves?",
          image: null,
          options: ["2R", "4R", "R/4", "R/2"],
          ans: "4R",
          explanation: "R ∝ L/A. (2L) / (A/2) = 4 × (L/A) = 4R.",
        },
        {
          type: "mcq",
          q: "44. What happens to the resistance of the conductor when Radius is doubled?",
          image: null,
          options: ["2R", "4R", "R/4", "R/2"],
          ans: "R/4",
          explanation:
            "Area = πr² → 4 times bigger when r is doubled. Since R ∝ 1/A, resistance becomes R/4.",
        },
        {
          type: "mcq",
          q: "45. What happens to the resistance of the conductor when the diameter is doubled?",
          image: null,
          options: ["2R", "4R", "R/4", "R/2"],
          ans: "R/4",
          explanation:
            "Area = π(d/2)² → increases 4 times when diameter is doubled. Since R ∝ 1/A, resistance becomes R/4.",
        },

        { type: "bold", text: "Electric Circuits" },
        { type: "bold", text: " Series Circuit " },
        {
          type: "text",
          text: " → In series circuit, The resistor are connected one after another i.e. end-to-end  in a single path. ",
        },
        { type: "image", src: series },
        {
          type: "text",
          text: " ⟹  Current same in all elements.",
          center: true,
        },
        {
          type: "text",
          text: " ⟹  voltage divides across elements : ( V = V1 + V2 + ...... + Vn).",
          center: true,
        },
        {
          type: "text",
          text: " ⟹  Equivalent resistance : Req = R1 + R2 + R3 +...... + Rn.",
          center: true,
        },
        {
          type: "text",
          text: " ⟹  Power Additive : (P = P1 + P2 + P3 + ...... + Pn).",
          center: true,
        },
        {
          type: "text",
          text: " ⟹  Equivalent Resistance is the largest of all the individual resistance. i.e. Req > R1, Req > R2...... Req > Rn.",
          center: true,
        },
        {
          type: "semibold",
          text: " Voltage Divider Rule In Series Circuit :  ",
        },
        {
          type: "text",
          text: " The total voltage is divided among resistors in proportion to their resistance. ",
        },
        { type: "image", src: voltagedivider },

        {
          type: "text",
          text: " → For two resistors in series R1 and R2, supplied by voltage V: ",
        },
        {
          type: "text",
          text: " ⟹ V1 ​= V⋅​R1 / ( R1 ​+ R2 )​​,   V2 ​= V⋅R2 / ( R1 ​+ R2 )​ ",
          center: true,
        },
        { type: "semibold", text: " Conclusion :  " },
        {
          type: "text",
          text: " ⟹  Voltage across each resistor is directly proportional to its resistance. ",
          center: true,
        },
        {
          type: "text",
          text: " ⟹ The bigger the resistance, the bigger the voltage drop across it. ",
          center: true,
        },

        { type: "bold", text: " Parallel Circuit :  " },
        {
          type: "text",
          text: "→ In parallel circuit, The resistors are connected in separate branches, directly across the battery. ",
        },
        { type: "image", src: parallel },
        {
          type: "text",
          text: " ⟹  Voltage same across all elements.",
          center: true,
        },
        {
          type: "text",
          text: " ⟹  current divides : ( I = I1 + I2 + ..... + In).",
          center: true,
        },
        {
          type: "text",
          text: " ⟹  Equivalent resistance : 1 / Req = 1/ R1 + 1/ R2 + 1/ R3 +...... + 1 / Rn.",
          center: true,
        },
        {
          type: "text",
          text: " ⟹  Power Additive : (P = P1 + P2 + P3 + ...... + Pn).",
          center: true,
        },
        {
          type: "text",
          text: " ⟹  Equivalent Resistance is the smallest of all the individual resistance. i.e. Req < R1, Req < R2...... Req < Rn.",
          center: true,
        },
        { type: "semibold", text: " Current Divider In Parallel Circuit :  " },
        {
          type: "text",
          text: "The total current is divided among resistors inversely proportional to their resistance. ",
        },
        { type: "image", src: currentdivider },

        {
          type: "text",
          text: " → For two resistors in parallel R1 and R2, with total current I: ",
        },
        {
          type: "text",
          text: " ⟹ I1 ​= I⋅​R2 / ( R1​ + R2 )​​ , I2 ​= I⋅R1​ / ( R1 + R2 )​​​ ",
          center: true,
        },
        { type: "semibold", text: " Conclusion :  " },
        {
          type: "text",
          text: " ⟹  Current in each branch is inversely proportional to resistance. ",
          center: true,
        },
        {
          type: "text",
          text: " ⟹  The smaller the resistance, the more current it takes. ",
          center: true,
        },
        { type: "bold", text: " Start Delta Connection " },
        {
          type: "text",
          text: " • Star (Y) Connection : Looks like the letter Y. Three resistors (or loads) connected with one common point (called neutral). Each end is a line terminal.  ",
        },
        {
          type: "text",
          text: " ⟹ Used in : power distribution, motors (starting connection).",
          center: true,
        },
        {
          type: "text",
          text: " • Delta (Δ) Connection : Looks like a triangle (Δ). Three resistors connected end-to-end in a closed loop. No neutral point. Each corner is a line terminal.  ",
        },
        {
          type: "text",
          text: " ⟹ Used in : transmission lines, motors (running connection).",
          center: true,
        },
        { type: "semibold", text: " Why Convert Between Star ↔ Delta? " },
        {
          type: "text",
          text: " • To simplify circuit analysis when resistors are not purely in series or parallel. ",
        },
        {
          type: "text",
          text: " • By converting, we can calculate total resistance, currents, voltages more easily. ",
        },
        { type: "bold", text: " Start to Delta :  " },
        { type: "image", src: star },
        {
          type: "text",
          text: " ⟹ Each delta resistance is sum of products of two star resistances divided by the opposite star resistance.",
        },
        {
          type: "text",
          text: " ⟹ Rxy = (Rx.Ry + Ry.Rz + Rx.Rz ) / Rz,  ",
          center: true,
        },
        {
          type: "text",
          text: " ⟹  Ryz = (Rx.Ry + Ry.Rz + Rx.Rz ) / Rx,  ",
          center: true,
        },
        {
          type: "text",
          text: " ⟹ Rzx = (Rx.Ry + Ry.Rz + Rx.Rz ) / Ry  ",
          center: true,
        },
        { type: "bold", text: " Delta To Star : " },
        { type: "image", src: delta },
        {
          type: "text",
          text: "⟹ Each star resistance is product of two adjacent delta resistances divided by sum of all three delta resistances.",
        },
        {
          type: "text",
          text: " ⟹ RA = RAC.RAB / ( RAB + RBC + RAC ),",
          center: true,
        },
        {
          type: "text",
          text: " ⟹ RB = RBC.RAB / ( RAB + RBC + RAC ),        ",
          center: true,
        },
        {
          type: "text",
          text: " ⟹  RC = RAC.RBC / ( RAB + RBC + RAC )   ",
          center: true,
        },
        {
          type: "semibold",
          text: " Note : If resistance are equal then R(delta) = 3 * R(star) ",
        },

        { type: "bold", text: "Kirchoff's Law : " },
        { type: "semibold", text: "Kirchoff's Current Law (KCL) : " },
        {
          type: "text",
          text: " • Law of conservation of charge : It states that 'charge is neither created nor destroyed '.",
        },
        { type: "text", text: " In terms of Current : " },
        {
          type: "text",
          text: " ⟹ Sum of current entering node = sum of currents leaving a node. i.e.( I1 + I2 + I5 = I3 + I4 + I6 + I7 + I8 ) ",
          center: true,
        },
        { type: "image", src: kcl },
        {
          type: "text",
          text: " ⟹  I1 + I2 + I5 - I3 - I4 - I6 - I7 - I8 = 0 , At node current = 0 ",
          center: true,
        },
        { type: "semibold", text: " Applications : " },
        {
          type: "text",
          text: " ⟹  Applicable to both AC and Dc Circuits.",
          center: true,
        },
        { type: "text", text: " ⟹  Unilateral or Bilateral.", center: true },
        { type: "text", text: " ⟹ Active or Passive.", center: true },
        { type: "text", text: " ⟹  Linear or Non-Linear.", center: true },
        { type: "text", text: " ⟹  Lumped Network.", center: true },
        {
          type: "text",
          text: " ⟹  Not applicable for time varying magnetic field. ",
        },

        { type: "semibold", text: "Kirchoff's Voltage Law (KVL) : " },
        { type: "text", text: " • Based on Law of conservation of energy :  " },
        { type: "text", text: " Statements : " },
        {
          type: "text",
          text: " ⟹   Sum of voltage in a closed loop (mesh) is zero (0). i.e. ( -E1  + IR1 + IR2 - E2 = 0 )",
          center: true,
        },
        { type: "image", src: kvl },

        { type: "bold", text: "Sign Convention : " },
        { type: "image", src: sign },
        {
          type: "text",
          text: " → first circuit : Fall In Voltage, → second circuit  : Rise In Voltage, → third circuit  : Rise in voltage, → fourth circuit : Fall In Voltage.",
        },
        { type: "semibold", text: " Note : " },
        {
          type: "text",
          text: " • The current flow from higher polarity to lower polarity. ",
          center: true,
        },
        { type: "semibold", text: " Sign Convention In KVL :  " },
        { type: "image", src: signkvl },
        { type: "text", text: " From Figure :  " },
        {
          type: "text",
          text: " • I1R1 is -ve (fall in potential) ",
          center: true,
        },
        {
          type: "text",
          text: " • I2R2 is -ve (fall in potential) ",
          center: true,
        },
        {
          type: "text",
          text: " • I3R3 is +ve (Rise in potential) ",
          center: true,
        },
        {
          type: "text",
          text: " • I4R4 is -ve (fall in potential) ",
          center: true,
        },
        {
          type: "text",
          text: " • E2 is -ve   (fall in potential) ",
          center: true,
        },
        {
          type: "text",
          text: " • E1 is +ve   (Rise in potential) ",
          center: true,
        },
        { type: "text", text: "Using Kirchoff's Voltage Law : " },
        {
          type: "text",
          text: " ⟹ -I1R1 - I2R2 + I3R3 - I4R4 - E2 + E1 = 0 ",
          center: true,
        },
        {
          type: "text",
          text: " ⟹  I1R1 + I2R2 - I3R3 + I4R4 = E1 - E2  ",
          center: true,
        },
        {
          type: "text",
          text: " ⟹ It is clear that Moving through R1 in the direction of I1 gives a drop: −I1R1 and Moving through source E1 from − to + gives +E1 ",
        },
        { type: "bold", text: " Linear VS Non-Linear Circuit  " },
        { type: "image", src: linear },
        { type: "bold", text: " Bilateral Network VS Unilateral Network " },
        { type: "image", src: bilateral },
        { type: "bold", text: " Active Network VS Passive Network " },
        { type: "image", src: active },
        { type: "bold", text: " MCQ  : " },
        {
          type: "mcq",
          q: "1. Consider the series circuit with a 10V DC source across three resistors. The current, voltage drop across each resistor, and total power consumed is…?",
          image: bq1,
          options: [
            "1A, 2V, 3V, 5V and 10W",
            "1A, 2V, 3V, 5V and 100W",
            "2A, 4V, 6V, 10V and 20W",
            "2A, 4V, 6V, 10V and 200W",
          ],
          ans: "1A, 2V, 3V, 5V and 10W",
          explanation:
            "I = Vs / (R1+R2+R3) = 10/10 = 1 A. V1 = 2V, V2 = 3V, V3 = 5V, P = Vs × I = 10 × 1 = 10 W.",
        },
        {
          type: "mcq",
          q: "2. It is preferable to connect bulbs in?",
          image: null,
          options: [
            "Series",
            "Parallel",
            "Both series and parallel",
            "Neither",
          ],
          ans: "Parallel",
          explanation:
            "Bulbs are connected in parallel so that if one blows out, others still receive current at same voltage.",
        },
        {
          type: "mcq",
          q: "3. Calculate the total resistance between points A and B.",
          image: bq3,
          options: ["7 Ω", "9 Ω", "7.67 Ω", "8 Ω"],
          ans: "7.67 Ω",
          explanation: "1Ω || 2Ω = 2/3 Ω. Total = 4 + 2/3 + 3 = 23/3 = 7.67 Ω.",
        },
        {
          type: "mcq",
          q: "4. Calculate the equivalent resistance between A and B.",
          image: bq4,
          options: ["60 Ω", "15 Ω", "12 Ω", "48 Ω"],
          ans: "12 Ω",
          explanation:
            "5Ω+15Ω=20Ω, 10Ω+20Ω=30Ω. Then 20Ω || 30Ω = (20×30)/(20+30) = 12Ω.",
        },
        {
          type: "mcq",
          q: "5. In a ______ circuit, total resistance is greater than the largest resistance.",
          image: null,
          options: ["Series", "Parallel", "Either", "Neither"],
          ans: "Series",
          explanation: "Req = R1+R2+R3… always > largest resistor.",
        },
        {
          type: "mcq",
          q: "6. Calculate the equivalent resistance between A and B.",
          image: bq6,
          options: ["2 Ω", "4 Ω", "6 Ω", "8 Ω"],
          ans: "2 Ω",
          explanation:
            "Two paths: (3+2)=5Ω and 5Ω in parallel → 2.5Ω. Then path with 1.5Ω → 4Ω. Two 4Ω in parallel → 2Ω.",
        },
        {
          type: "mcq",
          q: "7. In a ______ circuit, total resistance is smaller than the smallest resistance.",
          image: null,
          options: ["Series", "Parallel", "Either", "Neither"],
          ans: "Parallel",
          explanation: "Req = 1/(1/R1 + 1/R2+...) always < smallest resistor.",
        },
        {
          type: "mcq",
          q: "8. Consider a circuit with two unequal resistances in parallel. Which is correct?",
          image: null,
          options: [
            "Large current flows in large resistor",
            "Current is same in both",
            "Potential difference across each is same",
            "Smaller resistance has smaller conductance",
          ],
          ans: "Potential difference across each is same",
          explanation:
            "In parallel, voltage is same across each resistor, currents differ.",
        },
        {
          type: "mcq",
          q: "9. Which resistor consumes more power in series if R1 > R2?",
          image: null,
          options: [
            "R1 consumes more power",
            "R2 consumes more power",
            "Both consume same",
            "Relationship cannot be established",
          ],
          ans: "R1 consumes more power",
          explanation:
            "P = I²R. Same current flows in series, so larger R dissipates more power.",
        },
        {
          type: "mcq",
          q: "10. Two parallel resistors give 1403 Ω equivalent. One resistor is 2000 Ω. The other is?",
          image: null,
          options: ["1403 Ω", "4.7 kΩ", "2 kΩ", "3.4 kΩ"],
          ans: "4.7 kΩ",
          explanation:
            "1/Req=1/R1+1/R2 → R2 = (1403×2000)/(2000-1403) ≈ 4695 Ω = 4.7 kΩ.",
        },
        {
          type: "mcq",
          q: "11. A voltage divider has two 100 kΩ resistors with 12 V source. Output voltage when 1 MΩ load is connected?",
          image: null,
          options: ["0.57 V", "6 V", "12 V", "5.7 V"],
          ans: "5.7 V",
          explanation: "Vload = 12×10^6/(200k+1M) = 5.7 V.",
        },
        {
          type: "mcq",
          q: "12. A voltage divider has two 68 kΩ resistors with 24 V source. Voltage across one resistor?",
          image: null,
          options: ["12 V", "24 V", "0 V", "6 V"],
          ans: "12 V",
          explanation: "Equal resistors divide voltage equally → 24/2 = 12 V.",
        },
        {
          type: "mcq",
          q: "13. Two 3.3 kΩ resistors in series are parallel with a 4.7 kΩ resistor. Voltage across 4.7 kΩ if one 3.3 kΩ has 12 V?",
          image: null,
          options: ["24 V", "12 V", "0 V", "6 V"],
          ans: "24 V",
          explanation:
            "Each 3.3 kΩ has 12 V, total 24 V across series. Same 24 V appears across parallel 4.7 kΩ.",
        },
        {
          type: "mcq",
          q: "14. Find voltage across 2Ω resistor in a 10V supply with resistors 2Ω, 1Ω, 2Ω in series.",
          image: bq14,
          options: ["2 V", "3 V", "10 V", "4 V"],
          ans: "4 V",
          explanation: "V = Vtotal × R1/(Rtotal) = 10×2/(2+1+2)=4 V.",
        },
        {
          type: "mcq",
          q: "15. Calculate i if current divides as 8A into resistors 1Ω and 3Ω.",
          image: bq15,
          options: ["-1 A", "+2 A", "8 A", "-5 A"],
          ans: "+2 A",
          explanation: "Using current divider: i = 8×1/(1+3)=2 A.",
        },
        {
          type: "mcq",
          q: "16. For parallel resistors R1, R2 with total current I, voltage V, current through R1 is?",
          image: null,
          options: ["I R1", "I R2", "I R1/(R1+R2)", "I R2/(R1+R2)"],
          ans: "I R2/(R1+R2)",
          explanation: "By current divider rule: I1 = I × (R2/(R1+R2)).",
        },

        {
          type: "mcq",
          q: "17. The equivalent resistance between point P and Q is…………….",
          image: bq17,
          options: ["14.31 Ω", "17.12 Ω", "12.24 Ω", "34.58 Ω"],
          ans: "14.31 Ω",
          explanation:
            "Solved using Star-delta conversion. ABCA is Delta and can be converted to star. Ra = 3.6 Ω, Rb = 1.2 Ω, Rc = 3.6 Ω. Then combine series and parallel: 7.2 Ω || 27.6 Ω, series with 8.6 Ω → 14.31 Ω.",
        },
        {
          type: "mcq",
          q: "18. Equivalent resistance across terminals A and B is…………",
          image: bq18,
          options: ["2.23 Ω", "3.23 Ω", "4.23 Ω", "5.23 Ω"],
          ans: "4.23 Ω",
          explanation: "Solved using Star-delta conversion.",
        },
        {
          type: "mcq",
          q: "19. KCL is based on the fact that",
          image: null,
          options: [
            "There is a possibility for a node to store energy.",
            "There cannot be an accumulation of charge at a node.",
            "Charge accumulation is possible at node.",
            "Charge accumulation may or may not be possible.",
          ],
          ans: "There cannot be an accumulation of charge at a node.",
          explanation:
            "Since the node is not a circuit element, any charge which enters must leave immediately.",
        },
        {
          type: "mcq",
          q: "20. Relation between currents according to KCL is",
          image: bq20,
          options: [
            "i1 = i2 = i3 = i4 = i5",
            "i1 + i4 + i3 = i5 + i2",
            "i1 - i5 = i2 - i3 - i4",
            "i1 + i5 = i2 + i3 + i4",
          ],
          ans: "i1 + i5 = i2 + i3 + i4",
          explanation:
            "According to KCL, entering currents = leaving currents.",
        },
        {
          type: "mcq",
          q: "21. The algebraic sum of voltages around any closed path in a network is equal to ____________",
          image: null,
          options: ["Infinity", "1", "0", "Negative polarity"],
          ans: "0",
          explanation:
            "According to KVL, sum of voltages in a closed loop is zero.",
        },
        {
          type: "mcq",
          q: "22. Calculate potential difference between x and y",
          image: bq22,
          options: ["4.275 V", "-4.275 V", "4.527 V", "-4.527 V"],
          ans: "-4.275 V",
          explanation:
            "Using circuit analysis: I1 = 0.375 A, I2 = 0.8 A. Vx - Vy = 2I2 – 5I1 - 4 = -4.275 V.",
        },
        {
          type: "mcq",
          q: "23. Find R-value from the below circuit?",
          image: bq23,
          options: ["17.5 Ω", "17.2 Ω", "17.4 Ω", "17.8 Ω"],
          ans: "17.5 Ω",
          explanation:
            "Using KVL: 70 – 5I – 7(I – 2) = 0 → I = 7A. In 2nd loop: 7(I – 2) – 2R = 0 → R = 17.5 Ω.",
        },
        {
          type: "mcq",
          q: "24. All _____________ are loops but _______________ are not meshes",
          image: null,
          options: [
            "Loops, Meshes",
            "Meshes, Loops",
            "Branches, Loops",
            "Nodes, Branches",
          ],
          ans: "Meshes, Loops",
          explanation: "A mesh is a loop with no other loops inside it.",
        },
        {
          type: "mcq",
          q: "25. Solve and find the value of I.",
          image: bq25,
          options: ["-0.5 A", "0.5 A", "-0.2 A", "0.2 A"],
          ans: "-0.5 A",
          explanation:
            "Veq = 10 + 5 - 20 = -5 V, Req = 10 Ω, I = V/R = -5/10 = -0.5 A.",
        },
        {
          type: "mcq",
          q: "26. The basic laws for analyzing an electric circuit are :-",
          image: null,
          options: [
            "Einstein’s theory",
            "Newton's laws",
            "Kirchhoff’s laws",
            "Faraday's laws",
          ],
          ans: "Kirchhoff’s laws",
          explanation:
            "Kirchhoff’s Current Law (KCL) and Voltage Law (KVL) are used.",
        },
        {
          type: "mcq",
          q: "27. A junction where two (or) more than two network elements meet is known as __________",
          image: null,
          options: ["Node", "Branch", "Loop", "Mesh"],
          ans: "Node",
          explanation: "Node is the junction point of two or more elements.",
        },
        {
          type: "mcq",
          q: "28. Which, among the following, is the correct expression for star-delta conversion?",
          image: null,
          options: [
            "R1=Ra*Rb/(Ra+Rb+Rc), R2=Rb*Rc/(Ra+Rb+Rc), R3=Rc*Ra/(Ra+Rb+Rc)",
            "R1=Ra/(Ra+Rb+Rc), R2=Rb/(Ra+Rb+Rc), Rc=/(Ra+Rb+Rc)",
            "R1=Ra+Rb+Ra*Rb/Rc, R2=Rc+Rb+Rc*Rb/Ra, R3=Ra+Rc+Ra*Rc/Rb",
            "R1=Ra*Rb/Rc, R2=Rc*Rb/Ra, R3=Ra*Rc/Rb",
          ],
          ans: "R1=Ra+Rb+Ra*Rb/Rc, R2=Rc+Rb+Rc*Rb/Ra, R3=Ra+Rc+Ra*Rc/Rb",
          explanation:
            "Each delta resistor = sum of two star resistors + product / opposite resistor.",
        },
        {
          type: "mcq",
          q: "29. If an 8/9Ω, 4/3Ω and 2/3Ω resistor is connected in star, find its delta equivalent.",
          image: null,
          options: [
            "4 Ω, 3 Ω, 2 Ω",
            "1 Ω, 3 Ω, 2 Ω",
            "4 Ω, 1 Ω, 2 Ω",
            "4 Ω, 3 Ω, 1 Ω",
          ],
          ans: "4 Ω, 3 Ω, 2 Ω",
          explanation: "Using star-delta conversion: R1=4Ω, R2=3Ω, R3=2Ω.",
        },
        {
          type: "mcq",
          q: "30. Delta connection is also known as____________",
          image: null,
          options: [
            "Y-connection",
            "Mesh connection",
            "Either Y or Mesh connection",
            "Neither Y nor Mesh connection",
          ],
          ans: "Mesh connection",
          explanation: "Delta connection forms a closed mesh (loop).",
        },
        {
          type: "mcq",
          q: "31. After transforming star to delta, what is resistance between B and C?",
          image: null,
          options: [
            "Rc+Rb+Rc*Rb/Ra",
            "Rc+Rb+Ra*Rb/Rc",
            "Ra+Rb+Ra*Rc/Rb",
            "Rc+Rb+Rc*Ra/Rb",
          ],
          ans: "Rc+Rb+Rc*Rb/Ra",
          explanation: "Delta resistance between B and C is Rc+Rb+(Rc*Rb)/Ra.",
        },
        {
          type: "mcq",
          q: "32. After transforming star to delta, what is resistance between A and C?",
          image: null,
          options: [
            "Ra+Rb+Ra*Rb/Rc",
            "Ra+Rc+Ra*Rc/Rb",
            "Ra+Rb+Ra*Rc/Ra",
            "Ra+Rc+Ra*Rb/Rc",
          ],
          ans: "Ra+Rc+Ra*Rc/Rb",
          explanation: "Delta resistance between A and C is Ra+Rc+(Ra*Rc)/Rb.",
        },
        {
          type: "mcq",
          q: "33. After transforming star to delta, what is resistance between A and B?",
          image: null,
          options: [
            "Rc+Rb+Ra*Rb/Rc",
            "Ra+Rb+Ra*Rc/Rb",
            "Ra+Rb+Ra*Rb/Rc",
            "Ra+Rc+Ra*Rc/Rb",
          ],
          ans: "Ra+Rb+Ra*Rb/Rc",
          explanation: "Delta resistance between A and B is Ra+Rb+(Ra*Rb)/Rc.",
        },
        {
          type: "mcq",
          q: "34. Find the equivalent delta circuit.",
          image: bq34,
          options: [
            "9.69 Ω, 35.71 Ω, 6.59 Ω",
            "10.69 Ω, 35.71 Ω, 6.59 Ω",
            "9.69 Ω, 34.71 Ω, 6.59 Ω",
            "10.69 Ω, 35.71 Ω, 7.59 Ω",
          ],
          ans: "9.69 Ω, 35.71 Ω, 6.59 Ω",
          explanation:
            "Using star-delta conversion: R1=35.71Ω, R2=6.59Ω, R3=9.69Ω.",
        },
        {
          type: "mcq",
          q: "35. If a 1Ω, 2Ω and 32/3Ω resistor is connected in star, find delta equivalent.",
          image: null,
          options: [
            "34 Ω, 18.67 Ω, 3.19 Ω",
            "33 Ω, 18.67 Ω, 3.19 Ω",
            "33 Ω, 19.67 Ω, 3.19 Ω",
            "34 Ω, 19.67 Ω, 3.19 Ω",
          ],
          ans: "34 Ω, 18.67 Ω, 3.19 Ω",
          explanation: "Using formula: R1=34Ω, R2=18.67Ω, R3=3.19Ω.",
        },
        {
          type: "mcq",
          q: "36. Find the equivalent resistance between A and B.",
          image: bq36,
          options: ["32 Ω", "31 Ω", "30 Ω", "29 Ω"],
          ans: "29 Ω",
          explanation:
            "Equivalent resistance = (10×10 + 10×11 + 11×10)/11 = 29 Ω.",
        },
        {
          type: "mcq",
          q: "37. Which statement best defines a linear element?",
          image: null,
          options: [
            "Its parameters change with applied signal",
            "It exhibits a proportional V–I relationship over the range considered",
            "It rectifies current by allowing only one direction",
            "It requires an external power source",
          ],
          ans: "It exhibits a proportional V–I relationship over the range considered",
          explanation:
            "Linearity means homogeneity and additivity, so voltage and current remain proportional within the operating range, yielding a straight-line V–I relation.",
        },
        {
          type: "mcq",
          q: "38. The V–I characteristic of a linear resistor is:",
          image: null,
          options: ["Exponential", "Hyperbolic", "Straight line", "Parabolic"],
          ans: "Straight line",
          explanation:
            "Ohm’s law v=iR gives a constant slope R in the V–I plane, which is a straight line through the origin.",
        },
        {
          type: "mcq",
          q: "39. Which theorem is directly applicable only to linear networks?",
          image: null,
          options: [
            "Maximum power transfer",
            "Superposition",
            "Thevenin’s",
            "Norton’s",
          ],
          ans: "Superposition",
          explanation:
            "Superposition depends on additivity and homogeneity, which hold only for linear circuits; it fails with nonlinear elements.",
        },
        {
          type: "mcq",
          q: "40. Ohm’s law strictly holds for:",
          image: null,
          options: [
            "Diodes",
            "Transistors",
            "Ideal resistors",
            "Zener diodes in breakdown",
          ],
          ans: "Ideal resistors",
          explanation:
            "Ideal resistors obey a constant R across operating conditions; semiconductor devices have nonlinear or region-dependent behavior.",
        },
        {
          type: "mcq",
          q: "41. A non-linear element typically has parameters that:",
          image: null,
          options: [
            "Stay constant with signal",
            "Depend on instantaneous voltage/current",
            "Depend only on temperature",
            "Are purely frequency independent",
          ],
          ans: "Depend on instantaneous voltage/current",
          explanation:
            "In nonlinear devices, incremental resistance/conductance varies with the operating point set by instantaneous voltage/current.",
        },
        {
          type: "mcq",
          q: "42. Which is a non-linear element?",
          image: null,
          options: [
            "Air-core inductor at small signals",
            "Ideal capacitor",
            "PN junction diode",
            "Precision resistor",
          ],
          ans: "PN junction diode",
          explanation:
            "A PN diode exhibits an exponential I–V relation; ideal R, L, C are linear under standard small-signal assumptions.",
        },
        {
          type: "mcq",
          q: "43. In linear elements, doubling the excitation causes the response to:",
          image: null,
          options: [
            "Halve",
            "Remain constant",
            "Double",
            "Become unpredictable",
          ],
          ans: "Double",
          explanation:
            "Homogeneity of linear systems guarantees output scales directly with input amplitude.",
        },
        {
          type: "mcq",
          q: "44. Superposition fails in non-linear circuits primarily because:",
          image: null,
          options: [
            "Kirchhoff’s laws fail",
            "Homogeneity/additivity do not hold",
            "Sources cannot be turned off",
            "They contain reactive elements",
          ],
          ans: "Homogeneity/additivity do not hold",
          explanation:
            "Nonlinear elements break additivity and homogeneity, so individual source responses cannot be simply summed.",
        },
        {
          type: "mcq",
          q: "45. Which pair lists only linear elements (under small-signal ideal assumptions)?",
          image: null,
          options: [
            "Resistor, capacitor, inductor",
            "Resistor, diode, capacitor",
            "Transistor, inductor, resistor",
            "Diode, zener, resistor",
          ],
          ans: "Resistor, capacitor, inductor",
          explanation:
            "Ideal R, L, C have linear constitutive relations; diodes and transistors are nonlinear.",
        },
        {
          type: "mcq",
          q: "46. A unilateral element is one for which:",
          image: null,
          options: [
            "V–I relation is the same in both current directions",
            "V–I relation differs with current direction",
            "It consumes no power",
            "It is purely reactive",
          ],
          ans: "V–I relation differs with current direction",
          explanation:
            "Unilateral devices, like diodes, show direction-dependent conduction/characteristics.",
        },
        {
          type: "mcq",
          q: "47. Which of the following is a typical unilateral element?",
          image: null,
          options: ["Resistor", "Inductor", "Capacitor", "Diode"],
          ans: "Diode",
          explanation:
            "A diode conducts primarily in one direction, unlike bilateral R, L, C.",
        },
        {
          type: "mcq",
          q: "48. A bilateral element is best exemplified by:",
          image: null,
          options: ["Ideal resistor", "PN diode", "SCR", "Half-wave rectifier"],
          ans: "Ideal resistor",
          explanation:
            "An ideal resistor’s V–I curve is symmetric with respect to polarity, so behavior is identical both ways.",
        },
        {
          type: "mcq",
          q: "49. Active networks/components are characterized by their ability to:",
          image: null,
          options: [
            "Only store energy",
            "Only dissipate energy",
            "Provide power gain or generate energy",
            "Behave linearly only",
          ],
          ans: "Provide power gain or generate energy",
          explanation:
            "Active elements/sources can deliver net power or amplify signals; passives cannot.",
        },
        {
          type: "mcq",
          q: "50. Which is a passive element?",
          image: null,
          options: ["BJT", "Op-amp (powered)", "Resistor", "MOSFET (biased)"],
          ans: "Resistor",
          explanation:
            "A resistor dissipates energy and provides no gain or power generation.",
        },
        {
          type: "mcq",
          q: "51. A passive network:",
          image: null,
          options: [
            "Cannot deliver net energy over time",
            "Must be purely resistive",
            "Always has non-linear elements",
            "Requires an external DC supply",
          ],
          ans: "Cannot deliver net energy over time",
          explanation:
            "Passive networks only store or dissipate energy supplied by sources; net energy output over time is non-positive.",
        },
        {
          type: "mcq",
          q: "52. Which statement about an iron-core inductor is generally true?",
          image: null,
          options: [
            "Always linear regardless of current",
            "Non-linear near core saturation",
            "Unilateral by construction",
            "Active because of magnetic energy",
          ],
          ans: "Non-linear near core saturation",
          explanation:
            "As current rises, the core approaches saturation, making inductance current-dependent and nonlinear.",
        },
        {
          type: "mcq",
          q: "53. In a non-linear V–I curve, the incremental (small-signal) resistance at an operating point is:",
          image: null,
          options: [
            "The ratio V/I at origin",
            "The slope dV/dI at that point",
            "Always constant",
            "Equal to dynamic conductance",
          ],
          ans: "The slope dV/dI at that point",
          explanation:
            "Small-signal (dynamic) resistance is the local tangent slope rd=dv/di; its reciprocal is dynamic conductance.",
        },
        {
          type: "mcq",
          q: "54. Superposition can be used to analyze:",
          image: null,
          options: [
            "Circuits with diodes and multiple sources",
            "Circuits with only independent sources and linear elements",
            "Any circuit with dependent sources",
            "Only DC circuits",
          ],
          ans: "Circuits with only independent sources and linear elements",
          explanation:
            "Superposition is valid for linear circuits (including dependent sources if their control laws are linear).",
        },
        {
          type: "mcq",
          q: "55. Bilateral vs unilateral: Which is correct?",
          image: null,
          options: [
            "Resistors are unilateral; diodes are bilateral",
            "Resistors are bilateral; diodes are unilateral",
            "Both are bilateral",
            "Both are unilateral",
          ],
          ans: "Resistors are bilateral; diodes are unilateral",
          explanation:
            "Resistors respond the same to current reversal; diodes do not.",
        },
        {
          type: "mcq",
          q: "56. Active vs passive: Which combo is correct?",
          image: null,
          options: [
            "Battery (active), resistor (passive)",
            "Resistor (active), diode (passive)",
            "Transistor (passive), inductor (active)",
            "Capacitor (active), battery (passive)",
          ],
          ans: "Battery (active), resistor (passive)",
          explanation:
            "A battery can supply energy (active), while a resistor only dissipates (passive).",
        },
        {
          type: "mcq",
          q: "57. A linear capacitor under ideal assumptions has current i(t) related to voltage v(t) by:",
          image: null,
          options: [
            "i = C dv/dt (linear differential relation)",
            "i = V/C (algebraic)",
            "i = k v^2",
            "i independent of v",
          ],
          ans: "i = C dv/dt (linear differential relation)",
          explanation:
            "The constitutive relation i(t)=C dv(t)/dt is linear in v and its derivative.",
        },
        {
          type: "mcq",
          q: "58. For a diode, the I–V relation is approximately:",
          image: null,
          options: [
            "Linear for all biases",
            "Exponential in forward bias",
            "Quadratic in forward bias",
            "Sinusoidal with voltage",
          ],
          ans: "Exponential in forward bias",
          explanation:
            "The Shockley diode equation gives i≈IS(e^(v/nVT) −1) in forward bias.",
        },
        {
          type: "mcq",
          q: "59. A dependent source in a linear region is considered:",
          image: null,
          options: [
            "Non-linear",
            "Linear if its control law is linear",
            "Always active and non-linear",
            "Passive and unilateral",
          ],
          ans: "Linear if its control law is linear",
          explanation:
            "If the dependent source’s controlling relation is linear (e.g., proportional), it preserves circuit linearity.",
        },
        {
          type: "mcq",
          q: "60. Which network classification pairing is correct?",
          image: null,
          options: [
            "Active and necessarily linear",
            "Passive and necessarily non-linear",
            "Active or passive can each be linear or non-linear",
            "Bilateral implies active",
          ],
          ans: "Active or passive can each be linear or non-linear",
          explanation:
            "Linearity is independent of activeness; both active and passive networks may be linear or nonlinear.",
        },
        {
          type: "mcq",
          q: "61. The reason superposition is powerful in linear circuits is that:",
          image: null,
          options: [
            "It replaces KCL/KVL",
            "It allows separate analysis per source and sums responses",
            "It eliminates dependent sources",
            "It removes need for boundary conditions",
          ],
          ans: "It allows separate analysis per source and sums responses",
          explanation:
            "Linearity lets total response be the sum of individual source responses, simplifying multi-source analysis.",
        },
      ],
    },
    {
      subname:
        "1.2 Network theorems : concept of superposition theorem, Thevenin`s theorem, Norton`s theorem, maximum power transfer theorem. R-L, R-C, R-L-C circuits, resonance in AC series and parallel circuit, active and reactive power.",
      blocks: [
        { type: "bold", text: "  Network Theorems " },
        {
          type: "text",
          text: " ⟹ Circuits can be complicated, with many sources and resistors.Network theorems are fundamental principles to make network analysis in simple way. They help us find current, voltage, resistance, power easily.",
        },
        { type: "semibold", text: "  • Super Position Theorem " },
        { type: "semibold", text: "  • Thevenin’s Theorem  " },
        { type: "semibold", text: "  • Norton’s Theorem  " },
        { type: "semibold", text: " • Maximum Power Transfer Theorem. " },

        { type: "bold", text: "  Concept of superposition theorem " },
        {
          type: "text",
          text: " → In any linear and bilateral network or circuit having multiple independent sources, The total effect in a circuit with many sources = sum of effects of each source by acting alone. ",
        },
        {
          type: "text",
          text: " Rule: Consider one source at a time → replace other sources: ",
        },
        {
          type: "text",
          text: " • Voltage source → short circuit (0V), Resistnace = Zero ( 0 ). ",
          center: true,
        },
        {
          type: "text",
          text: " • Current source → open circuit (0A). Resistnace = infinite ( ∞ ). ",
          center: true,
        },
        {
          type: "text",
          text: " → Find effect of each source separately, then add them. ",
        },
        { type: "semibold", text: " Limitations : " },
        {
          type: "text",
          text: " ⟹ Works only for linear circuits, not valid for power calculation. ",
          center: true,
        },

        { type: "bold", text: " Thevenin’s Theorem " },
        {
          type: "text",
          text: " → Any complex linear circuit can be reduced into : ",
        },
        {
          type: "text",
          text: " • A single voltage source (Vth) in series with ",
          center: true,
        },
        { type: "text", text: " • A single resistance (Rth). ", center: true },
        { type: "semibold", text: " Steps: " },
        { type: "text", text: " 1. Remove load resistor (RL). ", center: true },
        {
          type: "text",
          text: " 2. Find open circuit voltage = Vth. ",
          center: true,
        },
        {
          type: "text",
          text: " 3. Replace sources with internal resistance → find Rth. ",
          center: true,
        },
        {
          type: "text",
          text: " 4. Draw simple Thevenin circuit: Vth in series with Rth and RL.",
          center: true,
        },
        { type: "image", src: thevenin },
        {
          type: "semibold",
          text: "  The load  current is given by :  IL = Vth / (Rth + RL). ",
        },
        { type: "semibold", text: " Applications :  " },
        {
          type: "text",
          text: " ⟹ Useful for analyzing load voltage/current easily. ",
          center: true,
        },

        { type: "bold", text: " Norton’s Theorem " },
        {
          type: "text",
          text: " → Similar to Thevenin’s, but uses current source instead of voltage source. ",
        },
        { type: "text", text: " ⟹ Circuit is reduced into : " },
        {
          type: "text",
          text: " • Norton current (IN) in parallel with ",
          center: true,
        },
        {
          type: "text",
          text: " • Norton resistance (RN = Rth). ",
          center: true,
        },
        {
          type: "text",
          text: " • IN = short-circuit current across terminals. ",
        },
        { type: "image", src: norton },
        {
          type: "semibold",
          text: " → Load current found using current divider : IL = ( IN * RN ) / (RN + RL ). ",
        },

        { type: "bold", text: "  Thevenin’s and Norton’s Theorem " },
        {
          type: "text",
          text: " ⟹ Norton’s theorem is similar to Thevenin’s theorem in that it also allows us to simplify any linear circuit to an equivalent circuit. So, Any linear circuit can be replaced with a current source (IN) in parallel with a resistor (RN), instead of a voltage source and series resistor (Thevenin) ",
        },
        { type: "text", text: " • RN = Rth. ", center: true },
        {
          type: "text",
          text: " • Vth = IN * RN. (Source conversion techniques) ",
          center: true,
        },
        { type: "text", text: "Thevenin  ↔  Norton are interchangeable. " },
        { type: "bold", text: "  MCQ : " },

        {
          type: "mcq",
          q: "1. In superposition theorem, when we consider the effect of one voltage source, all the other voltage sources are ____________",
          image: null,
          options: ["Shorted", "Opened", "Removed", "Undisturbed"],
          ans: "Shorted",
          explanation:
            "Mnemonic VSCO → Voltage source = Short circuit, Current source = Open circuit.",
        },
        {
          type: "mcq",
          q: "2. In superposition theorem, when we consider the effect of one current source, all the other voltage sources are ____________",
          image: null,
          options: ["Shorted", "Opened", "Removed", "Undisturbed"],
          ans: "Shorted",
          explanation:
            "Mnemonic VSCO → Voltage source = Short circuit, Current source = Open circuit.",
        },
        {
          type: "mcq",
          q: "3. In superposition theorem, when we consider the effect of one voltage source, all the other current sources are ____________",
          image: null,
          options: ["Shorted", "Opened", "Removed", "Undisturbed"],
          ans: "Opened",
          explanation:
            "Mnemonic VSCO → Voltage source = Short circuit, Current source = Open circuit.",
        },
        {
          type: "mcq",
          q: "4. Find the value of Vx due to the 16V source.",
          image: bn4,
          options: ["46.8V", "3.2V", "2.3V", "6.3V"],
          ans: "46.8V",
          explanation:
            "Step-wise contributions: 16V → 3.2V, 3A source → -48V, 10V source → -2V, 15A source → 0V. Total = -46.8V.",
        },
        {
          type: "mcq",
          q: "5. Superposition theorem is valid for _________",
          image: null,
          options: [
            "Linear systems",
            "Non-linear systems",
            "Both linear and non-linear systems",
            "Neither linear nor non-linear systems",
          ],
          ans: "Linear systems",
          explanation:
            "Superposition applies only to linear and bilateral networks.",
        },
        {
          type: "mcq",
          q: "6. Superposition theorem does not work for ________",
          image: null,
          options: ["Current", "Voltage", "Power", "none of the above"],
          ans: "Power",
          explanation:
            "Superposition cannot be used directly for power since power is non-linear (proportional to square).",
        },
        {
          type: "mcq",
          q: "7. Find the Thevenin resistance across the terminal AB",
          image: bn7,
          options: ["4.34Ω", "3.67Ω", "3.43Ω", "2.32Ω"],
          ans: "3.67Ω",
          explanation:
            "Rth is found by replacing voltage sources with short circuits. Calculation: (1||2)+3 = 3.67Ω.",
        },
        {
          type: "mcq",
          q: "8. Calculate Vth for the given circuit.",
          image: bn7,
          options: ["5.54V", "3.33V", "6.67V", "3.67V"],
          ans: "6.67V",
          explanation:
            "Voltage across 2Ω resistor using divider = 2*10/(2+1) = 6.67V. This appears across AB.",
        },
        {
          type: "mcq",
          q: "9. The Thevenin voltage is the__________",
          image: null,
          options: [
            "Open circuit voltage",
            "Short circuit voltage",
            "Open circuit and short circuit voltage",
            "Neither open circuit nor short circuit voltage",
          ],
          ans: "Open circuit voltage",
          explanation:
            "By definition, Vth is the open-circuit voltage across the terminals.",
        },
        {
          type: "mcq",
          q: "10. Thevenin resistance is found by ________",
          image: null,
          options: [
            "Shorting all voltage sources",
            "Opening all current sources",
            "Shorting all voltage sources and opening all current sources",
            "Opening all voltage sources and shorting all current sources",
          ],
          ans: "Shorting all voltage sources and opening all current sources",
          explanation:
            "Independent sources are replaced: voltage → short, current → open. Then compute equivalent resistance.",
        },
        {
          type: "mcq",
          q: "11. Which of the following is also known as the dual of Thevenin’s theorem?",
          image: null,
          options: [
            "Norton’s theorem",
            "Superposition theorem",
            "Maximum power transfer theorem",
            "Millman’s theorem",
          ],
          ans: "Norton’s theorem",
          explanation:
            "Norton and Thevenin are duals; Norton uses current source + parallel R, Thevenin uses voltage source + series R.",
        },
        {
          type: "mcq",
          q: "12. Can we use Thevenin’s theorem on a circuit containing a BJT?",
          image: null,
          options: ["Yes", "No", "Depends on the type BJT", "Depend on source"],
          ans: "No",
          explanation:
            "Thevenin’s theorem is valid only for linear circuits. BJTs are non-linear devices.",
        },
        {
          type: "mcq",
          q: "13. The Norton current is the_______",
          image: null,
          options: [
            "Short circuit current",
            "Open circuit current",
            "Open circuit and short circuit current",
            "Neither open circuit nor short circuit current",
          ],
          ans: "Short circuit current",
          explanation:
            "Norton current IN is defined as the current when output terminals are shorted.",
        },
        {
          type: "mcq",
          q: "14. Norton resistance is found by?",
          image: null,
          options: [
            "Shorting all voltage sources",
            "Opening all current sources",
            "Shorting all voltage sources and opening all current sources",
            "Opening all voltage sources and shorting all current sources",
          ],
          ans: "Shorting all voltage sources and opening all current sources",
          explanation: "Same as Thevenin resistance, RN = Rth.",
        },
        {
          type: "mcq",
          q: "15. Norton’s theorem is true for __________",
          image: null,
          options: [
            "Linear networks",
            "Non-Linear networks",
            "Both linear networks and nonlinear networks",
            "Neither linear networks nor non-linear networks",
          ],
          ans: "Linear networks",
          explanation:
            "Like Thevenin, Norton applies only to linear, bilateral networks.",
        },
        {
          type: "mcq",
          q: "16. Calculate the Norton resistance for the following circuit if 5Ω is the load resistance.",
          image: bn17,
          options: ["10Ω", "11Ω", "12Ω", "13Ω"],
          ans: "12Ω",
          explanation: "RN = (3 || 6) + 10 = 12Ω.",
        },
        {
          type: "mcq",
          q: "17. Find the current in the 5Ω resistance using Norton’s theorem.",
          image: bn17,
          options: ["1A", "1.5A", "0.25A", "0.5A"],
          ans: "0.5A",
          explanation:
            "IN = 0.72A, RN = 12Ω. Current divider: IL = 0.72 * 12/(12+5) = 0.5A.",
        },
        {
          type: "mcq",
          q: "18. If Vth = 3V and Rth = 7Ω, then the value of Norton’s Current and resistance are:",
          image: null,
          options: ["7/3 A, 21Ω", "21A, 7/3Ω", "21A, 7Ω", "3/7 A, 7Ω"],
          ans: "3/7 A, 7Ω",
          explanation: "IN = Vth / Rth = 3/7 A, RN = Rth = 7Ω.",
        },
        { type: "bold", text: "  Maximum power transfer theorem  " },
        {
          type: "text",
          text: " • Maximum power is delivered to the load when : ",
        },
        { type: "image", src: mptt },
        { type: "text", text: " ⟹ Rth = RL.", center: true },
        { type: "semibold", text: "  The value of maximum power is : " },
        { type: "text", text: " ⟹ Pmax = (Vth)^2 / 4RL. ", center: true },
        {
          type: "text",
          text: " ⟹ The efficiency of maximum power transfer is 50% . ",
        },
        {
          type: "text",
          text: " ⟹ Important in communication systems & amplifiers (power transfer more important than efficiency). ",
        },
        { type: "bold", text: "MCQ : " },

        {
          type: "mcq",
          q: "1. The maximum power is delivered from a source to its load when the load resistance is ______ the source resistance.",
          image: null,
          options: [
            "greater than",
            "less than",
            "equal to",
            "less than or equal to",
          ],
          ans: "equal to",
          explanation:
            "Rule: Maximum power transfer occurs when RL = RS (load resistance equals source resistance).",
        },
        {
          type: "mcq",
          q: "2. The maximum power drawn from source depends on __________",
          image: null,
          options: [
            "Value of source resistance",
            "Value of load resistance",
            "Both source and load resistance",
            "Neither source or load resistance",
          ],
          ans: "Value of source resistance",
          explanation:
            "The actual maximum power depends only on source resistance and source voltage. Formula: Pmax = V² / 4R.",
        },
        {
          type: "mcq",
          q: "3. Does maximum power transfer imply maximum efficiency?",
          image: null,
          options: ["Yes", "No", "Sometimes", "Cannot be determined"],
          ans: "No",
          explanation:
            "Maximum power transfer does not mean maximum efficiency. At RL = RS, efficiency is only 50%.",
        },
        {
          type: "mcq",
          q: "4. Under the condition of maximum power, efficiency is?",
          image: null,
          options: ["100%", "0%", "30%", "50%"],
          ans: "50%",
          explanation:
            "When RL = RS, source and load share power equally, giving 50% efficiency.",
        },
        {
          type: "mcq",
          q: "5. Name some devices where maximum power has to be transferred to the load rather than maximum efficiency.",
          image: null,
          options: [
            "Amplifiers",
            "Communication circuits",
            "Both amplifiers and communication circuits",
            "Neither amplifiers nor communication circuits",
          ],
          ans: "Both amplifiers and communication circuits",
          explanation:
            "In amplifiers and communication circuits, signal strength is more important than efficiency.",
        },
        {
          type: "mcq",
          q: "6. What should be the resistance across AB so that maximum power is delivered?",
          image: bn5,
          options: ["3Ω", "2.91Ω", "2Ω", "3.91Ω"],
          ans: "2.91Ω",
          explanation:
            "After shorting voltage sources: RL = 3||2 + 4||3 = 1.20 + 1.71 = 2.91Ω.",
        },
        {
          type: "mcq",
          q: "7. What should be the maximum power dissipated across AB?",
          image: bn5,
          options: ["1.79W", "4.55W", "5.67W", "3.78W"],
          ans: "1.79W",
          explanation:
            "With Eth = 4.57V and RL = 2.91Ω, maximum power = Eth² / (4RL) = 1.79W.",
        },
        {
          type: "mcq",
          q: "8. ….......theorem is particularly useful for analysing communication networks.",
          image: null,
          options: [
            "Milliman’s Theorem",
            "Thevenin’s Theorem",
            "Superposition Theorem",
            "Maximum Power Transfer Theorem",
          ],
          ans: "Maximum Power Transfer Theorem",
          explanation:
            "In communication networks, weak signals need maximum transfer to ensure usability.",
        },
        { type: "bold", text: " R-L, R-C, R-L-C circuits " },
        { type: "bold", text: " Behavior Of R In AC Circuits : " },
        { type: "image", src: r },
        { type: "text", text: " • V and I in same Phase." },
        { type: "text", text: " • Phase Angle (Φ) : 0° . " },
        { type: "text", text: " • Power Factor (CosΦ) : 1 (unity). " },
        {
          type: "text",
          text: " • Only active power (P) exist no reactive power exist (Q).",
        },
        {
          type: "text",
          text: " • The average power consumption over one cycle will be : ",
        },
        { type: "text", text: " ⟹ Pav = Vrms . Irms (watts). ", center: true },
        { type: "text", text: " ⟹ Pav = VI = I^2.R (watts)", center: true },
        { type: "text", text: " ⟹ Pav = (Vm * Im) / 2. ", center: true },
        { type: "image", src: rg },

        { type: "bold", text: " Behavior Of L In AC Circuits : " },
        { type: "image", src: l },
        {
          type: "text",
          text: " • Inductive Reactance = XL = ωL = 2πFL ( XL ∝ F) ",
        },
        { type: "text", text: " • V leads I by 90° or I lags V by 90° ." },
        { type: "text", text: " • Phase Angle (Φ) : 90° . " },
        { type: "text", text: " • Power Factor (CosΦ) : 0. " },
        {
          type: "text",
          text: " • Only reactive power (Q) exist no active power exist (P).",
        },
        {
          type: "text",
          text: " • The average power consumption over one cycle will be : ",
        },
        { type: "text", text: " ⟹ Pav = 0 ", center: true },
        { type: "image", src: lg },
        {
          type: "text",
          text: " • What will happen if supply is DC in Inductor ? ",
        },
        { type: "text", text: " ⟹ Inductor will behave as short circuit. " },

        { type: "bold", text: " Behavior Of C In AC Circuits : " },
        { type: "image", src: c },
        {
          type: "text",
          text: " • Capacitive Reactance = XC = 1 / ωL = 1 / 2πFL ( XC ∝ 1 / F) ",
        },
        { type: "text", text: " • I leads V by 90° or V lags I by 90° ." },
        { type: "text", text: " • Phase Angle (Φ) : 90° . " },
        { type: "text", text: " • Power Factor (CosΦ) : 0. " },
        {
          type: "text",
          text: " • Only reactive power (Q) exist no active power exist (P).",
        },
        {
          type: "text",
          text: " • The average power consumption over one cycle will be : ",
        },
        { type: "text", text: " ⟹ Pav = 0 ", center: true },
        { type: "image", src: cg },
        {
          type: "text",
          text: " • What will happen if supply is DC in Capacitor ? ",
        },
        { type: "text", text: " ⟹ Capacitor will behave as open circuit. " },

        { type: "bold", text: " Series Circuits :  " },
        { type: "bold", text: " RL Series Circuits :  " },
        { type: "image", src: rl },
        {
          type: "text",
          text: " • From phasor, I lags V by Φ, The value of Φ is 0° < Φ < 90° .",
        },
        { type: "text", text: " • Hence, Power Factor is lagging. " },
        {
          type: "text",
          text: " • Time constant is the time required to reach 63.7% of its steady state value.",
        },
        { type: "text", text: " ⟹  Time Constant= L/R", center: true },

        { type: "bold", text: " RC Series Circuits :  " },
        { type: "image", src: rc },
        {
          type: "text",
          text: " • From phasor, I leads V by Φ, The value of Φ is 0° < Φ < 90° .",
        },
        { type: "text", text: " • Hence, Power Factor is leading. " },
        {
          type: "text",
          text: " • Time constant is the time required to reach 63.7% of its steady state value.",
        },
        { type: "text", text: " ⟹  Time Constant= RC", center: true },

        { type: "bold", text: " RLC Series Circuits :  " },
        { type: "image", src: rlc },
        { type: "semibold", text: " • Case 1 : " },
        {
          type: "text",
          text: " ⟹ XL > XC and VL > VC, Circuit is Inductive, Power Factor is lagging.",
          center: true,
        },
        { type: "semibold", text: " • Case 2 : " },
        {
          type: "text",
          text: " ⟹ XC > XL and VC > VL, Circuit is Capacitive, Power Factor is leading.",
          center: true,
        },
        { type: "semibold", text: " • Case 3 :  " },
        {
          type: "text",
          text: " ⟹ XL = XC and VL = VC, Circuit is Purely Resistive, Power Factor is 1.",
          center: true,
        },
        { type: "text", text: " ⟹ The condition is resonance. ", center: true },

        { type: "bold", text: " Resonance In AC Series & Parallel Circuit  " },
        { type: "bold", text: " Resonance : " },
        {
          type: "text",
          text: " • Resonance in a circuit containing at least one inductor and capacitor, is defined as the condition when supply current and voltage are in same phase.",
        },
        {
          type: "text",
          text: " • Occurs when inductive reactance = capacitive reactance.  ",
        },
        { type: "text", text: " ⟹ XL = XC ", center: true },
        { type: "text", text: " ⟹  2πfrL = 1/(2πfrC). ", center: true },
        { type: "text", text: " ⟹ Fr = 1 / 2π√LC", center: true },
        { type: "text", text: "  • At resonance: " },
        { type: "text", text: " ⟹ Current(I) is maximum. ", center: true },
        { type: "text", text: " ⟹ Impedence(Z) is minimum.", center: true },
        { type: "text", text: " ⟹ Power factor = 1 (unity). ", center: true },
        {
          type: "text",
          text: " ⟹ Voltage across L and C can be much larger than supply (voltage magnification). so, (VL = VC = Imax √ (L / C).  ) ",
          center: true,
        },
        { type: "semibold", text: " Resonance In Series Circuit : " },
        {
          type: "text",
          text: " ⟹ Current maximum (Imax = V / R ) ",
          center: true,
        },
        {
          type: "text",
          text: " ⟹ Impedenace minimum (Zmin = R) ",
          center: true,
        },
        { type: "semibold", text: " Resonance In Parallel Circuit :  " },
        {
          type: "text",
          text: " ⟹ Current minimum (Imin = V / R ) ",
          center: true,
        },
        {
          type: "text",
          text: " ⟹ Impedenace maximum (Zmax = R) ",
          center: true,
        },

        { type: "bold", text: " Bandwidth :  " },
        { type: "image", src: band },
        {
          type: "text",
          text: " ⟹ Mathematically, B.W = fH-fL = f2-f1 = R / 2πL ",
          center: true,
        },
        { type: "text", text: " ⟹ For series BW = w2-w1 = R/L ", center: true },

        { type: "bold", text: " Quality Factor :  " },
        {
          type: "text",
          text: " • It defined as the voltage maginfication of the circuit at resonance.",
        },
        { type: "text", text: " • It indicates sharpness of resonance. " },
        {
          type: "text",
          text: " ⟹ Q-Factor = 1 / R * (√ L / C) = 2πFrL / R = 1 / 2πFrCR . ",
          center: true,
        },
        {
          type: "text",
          text: " ⟹ Q-Factor = Fr / Bandwidth = Fr / ( R / 2πL) = XL / R .",
          center: true,
        },
        {
          type: "text",
          text: " • High value of R means, lower value of Q. i.e. ( Q.F ∝ 1 / R ).",
        },
        {
          type: "text",
          text: " • Lower Q means, poorer quality, Lower selectivity ",
        },
        {
          type: "text",
          text: " • Higher Q means, Good quality, Higher selectivity ",
        },

        { type: "bold", text: " Parallel RLC AC Circuits :  " },
        { type: "image", src: prlc },
        {
          type: "text",
          text: " ⟹ In parallel, Current same so, Ic = IL.",
          center: true,
        },
        { type: "text", text: " • At resonance : XL =XC " },
        { type: "text", text: " ⟹  2πfrL = 1/(2πfrC). ", center: true },
        { type: "text", text: " ⟹ Fr = 1 / 2π√LC", center: true },
        { type: "semibold", text: " • Quality Factor :  " },
        {
          type: "text",
          text: " ⟹ It defined as the cuurent maginfication of the circuit at resonance.",
          center: true,
        },
        {
          type: "text",
          text: " Quality Factor : R / 2π.FL = 2π.FC. R  = R . √( C / L )",
          center: true,
        },
        { type: "semibold", text: " • Bandwidth :  " },
        {
          type: "text",
          text: " ⟹ BW(f2-f1)= fr/(QF) = fr/(wCR) = fr/(2*pi*fr*RC)  ",
          center: true,
        },
        { type: "text", text: " ⟹  W2-W1 = 1/RC", center: true },

        { type: "bold", text: "  Parallel Resonance (A coil (LR) and  C) " },
        { type: "image", src: pcoil },
        {
          type: "text",
          text: " ⟹ Resonanting Frequency (Fo) = 1 / 2π . √ (1/LC) - (R^2 / L^2). ",
          center: true,
        },
        {
          type: "text",
          text: " ⟹ Maximum Impedence = Zo = L / CR . ",
          center: true,
        },

        { type: "bold", text: " AC Power :  " },
        { type: "semibold", text: " i) Apparent Power (S) : " },
        {
          type: "text",
          text: " • The product of rms value of voltage (Vrms) and current.",
        },
        {
          type: "text",
          text: " ⟹ S = V.I (volt-amp) - VA, (kilovolt - amp) - KVA ",
          center: true,
        },
        { type: "semibold", text: " ii) Real Or True Or Active Power (P) : " },
        {
          type: "text",
          text: " • The product of the applied voltage and active component of the current.",
        },
        {
          type: "text",
          text: " ⟹ P = V.I cosϕ (watts) - W, (Kilowatts) - KW ",
          center: true,
        },
        { type: "text", text: " • Useful Power " },
        { type: "semibold", text: " iii) Reactive Power (Q) :  " },
        {
          type: "text",
          text: " • The product of applied voltage and reactive component of the current.",
        },
        {
          type: "text",
          text: " ⟹ Q = V.I sinϕ (volt-amp Reactive) - VAR, (Kilovolt-amp Reactive) - KVAR",
          center: true,
        },
        { type: "text", text: " • Imaginary component of the apparent power." },
        { type: "text", text: " • Wasted in magnetic / Electric Field. " },

        { type: "bold", text: " Power Factor :  " },
        {
          type: "text",
          text: " • It is defined as factor by which the apparent power must be multiplied in order to obtain the true power. ",
        },
        {
          type: "text",
          text: " ⟹ Power Factor (CosΦ) = True Power / Apparent Power = P / S .",
          center: true,
        },
        { type: "text", text: " • CosΦ cannot be greater than 1. " },
        { type: "text", text: " • Note : " },
        {
          type: "text",
          text: " • If current lags voltage, power factor is said to be lagging",
        },
        {
          type: "text",
          text: " ⟹ For Inductive Circuit, PF is lagging. ",
          center: true,
        },
        {
          type: "text",
          text: " • If current leads voltage, power factor is said to be leading ",
        },
        {
          type: "text",
          text: " ⟹ For Capacitive Circuit, PF is leading.",
          center: true,
        },
        { type: "bold", text: "MCQ : " },

        {
          type: "mcq",
          q: "1. A circuit with a resistor, inductor and capacitor in series is resonant of f Hz. If all the component values are now doubled then the new resonant frequency is",
          image: null,
          options: ["2f", "remains unchanged", "f/2", "f/4"],
          ans: "f/2",
          explanation:
            "Resonant frequency f = 1 / (2π√(LC)). If both L and C are doubled, f' = 1 / (2π√(2L × 2C)) = f/2.",
        },
        {
          type: "mcq",
          q: "2. The phenomena of resonance is used in",
          image: null,
          options: ["radio", "capacitor", "transformer", "amplifier"],
          ans: "radio",
          explanation:
            "Resonance is used in radio tuners to select a particular frequency from many signals.",
        },
        {
          type: "mcq",
          q: "3. In a series RLC circuit, the magnitude of resonance frequency can be changed by changing the value of",
          image: null,
          options: ["R only", "L only", "C only", "L or C"],
          ans: "L or C",
          explanation:
            "Resonant frequency f = 1 / (2π√(LC)). So f changes if L or C is changed, not R.",
        },
        {
          type: "mcq",
          q: "4. Q of a resonant transmission line is",
          image: null,
          options: ["Q = L/R", "Q = ωL/R", "Q = ωR/L", "Q = ω/LR"],
          ans: "Q = ωL/R",
          explanation:
            "Quality factor Q = (Reactance of L) / Resistance = ωL / R.",
        },
        {
          type: "mcq",
          q: "5. In the LCR circuit, which one of the following statements is correct?",
          image: null,
          options: [
            "L and R oppose each other",
            "R values increases with frequency",
            "the inductive reactances increases with frequency",
            "the capacitive reactances increases with frequency",
          ],
          ans: "the inductive reactances increases with frequency",
          explanation:
            "Inductive reactance XL = ωL increases with frequency. Capacitive reactance decreases with frequency.",
        },
        {
          type: "mcq",
          q: "6. Current at resonance in a series circuit is ________ and in a parallel circuit is _________",
          image: null,
          options: [
            "Minimum, maximum",
            "Maximum, minimum",
            "Maximum, maximum",
            "Minimum, minimum",
          ],
          ans: "Maximum, minimum",
          explanation:
            "At resonance: series circuit → impedance is minimum, current is maximum. Parallel circuit → impedance is maximum, current is minimum.",
        },
        {
          type: "mcq",
          q: "7. At a frequency less than the resonant frequency",
          image: null,
          options: [
            "Series circuit is capacitive and parallel circuit is inductive",
            "Series circuit is inductive and parallel circuit is capacitive",
            "Both circuits are inductive",
            "Both circuits are capacitive",
          ],
          ans: "Series circuit is capacitive and parallel circuit is inductive",
          explanation:
            "Below resonance, XC > XL. So in series net reactance is capacitive, in parallel net susceptance is inductive.",
        },
        {
          type: "mcq",
          q: "8. In an R-C-L series circuit, during resonance, the impedance will be",
          image: null,
          options: ["Zero", "Minimum", "Maximum", "None of these"],
          ans: "Minimum",
          explanation:
            "At resonance, XL = XC. So impedance = R (minimum value).",
        },
        {
          type: "mcq",
          q: "9. The power factor of series and parallel RLC resonant circuit is:",
          image: null,
          options: [
            "Leading, Lagging",
            "Lagging, Leading",
            "Unity, Unity",
            "Can't be determined",
          ],
          ans: "Unity, Unity",
          explanation:
            "At resonance, circuits behave resistively. So PF = 1 (unity).",
        },
        {
          type: "mcq",
          q: "10. Magnitude of current at resonance in R-L-C circuit",
          image: null,
          options: [
            "Depends upon magnitude of R",
            "Depends upon magnitude of L",
            "Depends upon magnitude of C",
            "Depends upon magnitude of R, L and C",
          ],
          ans: "Depends upon magnitude of R",
          explanation:
            "At resonance, current = V/R. It only depends on resistance.",
        },
        {
          type: "mcq",
          q: "11. A series RLC circuit is in resonance at 100Hz. If capacitance is made four times, the resonant frequency will be",
          image: null,
          options: ["50 Hz", "100 Hz", "200 Hz", "400 Hz"],
          ans: "50 Hz",
          explanation: "f ∝ 1/√C. Making C = 4C → f' = f/2 = 50 Hz.",
        },
        {
          type: "mcq",
          q: "12. A choke coil having resistance R ohm and of inductance henry is shunted by a capacitor of C farads. The dynamic impedance of the resonant circuit would be",
          image: null,
          options: ["R/LC", "C/RL", "L/RC", "1/RLC"],
          ans: "L/RC",
          explanation: "Dynamic impedance simplifies to L/(RC).",
        },
        {
          type: "mcq",
          q: "13. Power factor of an electrical circuit is equal to",
          image: null,
          options: [
            "R/Z",
            "cosine of phase angle difference between current and voltage",
            "KW/KVA",
            "Iw/I",
          ],
          ans: "cosine of phase angle difference between current and voltage",
          explanation: "Power factor = cosϕ = P/S.",
        },
        {
          type: "mcq",
          q: "14. Poor power factor",
          image: null,
          options: [
            "reduces load handling capability",
            "results in more power losses",
            "overloads equipment",
            "results in more voltage drop",
            "all above",
          ],
          ans: "all above",
          explanation: "All effects of poor power factor are true.",
        },
        {
          type: "mcq",
          q: "15. In a highly capacitive circuit the",
          image: null,
          options: [
            "apparent power = actual power",
            "reactive power > apparent power",
            "reactive power > actual power",
            "actual power > reactive power",
          ],
          ans: "reactive power is more than the actual power",
          explanation:
            "In highly reactive circuits, reactive power dominates over real power.",
        },
        {
          type: "mcq",
          q: "16. Power factor of the following circuit will be zero",
          image: null,
          options: [
            "resistance",
            "inductance",
            "capacitance",
            "both (b) and (c)",
          ],
          ans: "both (b) and (c)",
          explanation:
            "Pure inductors and capacitors have PF = 0 (no real power consumed).",
        },
        {
          type: "mcq",
          q: "17. The purpose of a parallel circuit resonance is to magnify",
          image: null,
          options: ["current", "voltage", "power", "frequency"],
          ans: "voltage",
          explanation:
            "Parallel resonance develops very high voltage across reactive branches.",
        },
        {
          type: "mcq",
          q: "18. In an A.C. circuit power is dissipated in",
          image: null,
          options: [
            "resistance only",
            "inductance only",
            "capacitance only",
            "none",
          ],
          ans: "resistance only",
          explanation: "Only resistance consumes real power.",
        },
        {
          type: "mcq",
          q: "19. In a parallel R-C circuit, the current always ______ the applied voltage",
          image: null,
          options: ["lags", "leads", "remains in phase", "none"],
          ans: "leads",
          explanation: "In RC parallel circuits, current leads the voltage.",
        },
        {
          type: "mcq",
          q: "20. The power factor at resonance in R-L-C parallel circuit is",
          image: null,
          options: ["zero", "0.8 lagging", "0.8 leading", "unity"],
          ans: "unity",
          explanation:
            "At resonance the circuit behaves like a pure resistor. PF = 1.",
        },
        {
          type: "mcq",
          q: "21. In a pure resistive circuit",
          image: null,
          options: [
            "current lags by 90°",
            "current leads by 90°",
            "current can lead or lag",
            "current is in phase",
          ],
          ans: "current is in phase",
          explanation: "For resistors, current and voltage are in phase.",
        },
        {
          type: "mcq",
          q: "22. In a pure inductive circuit",
          image: null,
          options: [
            "current in phase",
            "current lags by 90°",
            "current leads by 90°",
            "current can vary",
          ],
          ans: "current lags by 90°",
          explanation:
            "Inductor: voltage leads current by 90° → current lags voltage.",
        },
        {
          type: "mcq",
          q: "23. In a circuit containing R, L and C, power loss can take place in",
          image: null,
          options: ["C only", "L only", "R only", "all above"],
          ans: "R only",
          explanation: "Only resistors dissipate real power as heat.",
        },
        {
          type: "mcq",
          q: "24. Inductance of coil",
          image: null,
          options: [
            "unaffected by frequency",
            "decreases with frequency",
            "increases with frequency",
            "zero with frequency",
          ],
          ans: "unaffected by frequency",
          explanation:
            "Inductance is a property of the coil, independent of frequency (ideal case).",
        },
        {
          type: "mcq",
          q: "25. In any A.C circuit always",
          image: null,
          options: [
            "apparent power > actual power",
            "reactive > apparent",
            "actual > reactive",
            "reactive > actual",
          ],
          ans: "apparent power > actual power",
          explanation: "S² = P² + Q². Apparent ≥ real power.",
        },
        {
          type: "mcq",
          q: "26. Which of the following circuit components opposes the change in the circuit voltage?",
          image: null,
          options: ["Inductance", "Capacitance", "Conductance", "Resistance"],
          ans: "Capacitance",
          explanation:
            "A capacitor resists sudden changes in voltage by storing charge.",
        },
        {
          type: "mcq",
          q: "27. In a purely inductive circuit",
          image: null,
          options: [
            "actual power is zero",
            "reactive power is zero",
            "apparent power is zero",
            "none",
          ],
          ans: "actual power is zero",
          explanation: "Pure inductors consume no real power, only reactive.",
        },
        {
          type: "mcq",
          q: "28. Which of the following statements pertains to resistors only?",
          image: null,
          options: [
            "can dissipate power",
            "act as energy storage",
            "parallel increases value",
            "oppose voltage change",
          ],
          ans: "can dissipate power",
          explanation:
            "Resistors only dissipate energy as heat, unlike L or C.",
        },
        {
          type: "mcq",
          q: "29. Which of the following refers to a parallel circuit?",
          image: null,
          options: [
            "same current",
            "voltage proportional",
            "Req > each resistor",
            "branch current < source current",
          ],
          ans: "branch current < source current",
          explanation:
            "Total current is sum of branch currents. So each branch current < source current.",
        },
        {
          type: "mcq",
          q: "30. A phasor is",
          image: null,
          options: [
            "line showing magnitude and phase",
            "line showing magnitude and direction",
            "phase tag",
            "measuring instrument",
          ],
          ans: "line showing magnitude and direction",
          explanation:
            "A phasor is a rotating vector that represents magnitude and phase of AC.",
        },
        {
          type: "mcq",
          q: "31. A parallel AC circuit in resonance will",
          image: null,
          options: [
            "high voltage across L and C",
            "high impedance",
            "like resistor of low value",
            "line current same as branch current",
          ],
          ans: "high impedance",
          explanation:
            "At resonance parallel circuit appears like a very high impedance to source.",
        },
        {
          type: "mcq",
          q: "32. A pure capacitor connected across an A.C. voltage consumed 50 W. This is due to",
          image: null,
          options: [
            "capacitive reactance",
            "current flowing",
            "big capacitor",
            "incorrect statement",
          ],
          ans: "incorrect statement",
          explanation:
            "An ideal capacitor consumes no real power. So this statement is wrong.",
        },
        {
          type: "mcq",
          q: "33. In a series RLC circuit, the phase difference between the current in the capacitor and the current in the resistor is?",
          image: null,
          options: ["0", "90", "180", "360"],
          ans: "0",
          explanation:
            "Same current flows through all series elements, so no phase difference.",
        },
        {
          type: "mcq",
          q: "34. In a series RLC circuit, the phase difference between the current in the circuit and the voltage across the capacitor is?",
          image: null,
          options: ["0", "90", "180", "360"],
          ans: "90",
          explanation: "Current leads the capacitor voltage by 90°.",
        },
        {
          type: "mcq",
          q: "35. Phase difference between the voltage across the capacitor and the current in the circuit is 90. Which expression is correct?",
          image: null,
          options: ["Z=Y", "Z=1/Y", "Z=Y/2", "Z=1/2Y"],
          ans: "Z=1/Y",
          explanation: "Impedance is reciprocal of admittance → Z = 1/Y.",
        },
        {
          type: "mcq",
          q: "36. In a pure resistive circuit",
          image: null,
          options: [
            "current lags 90",
            "current leads 90",
            "current can vary",
            "current in phase",
          ],
          ans: "current in phase",
          explanation: "In pure resistors current and voltage are in phase.",
        },
        {
          type: "mcq",
          q: "37. For a purely resistive circuit which statement is incorrect?",
          image: null,
          options: [
            "Work done is zero",
            "Power consumed is zero",
            "Heat produced is zero",
            "Power factor is unity",
          ],
          ans: "Work done is zero",
          explanation:
            "In resistors, work done and power consumed are not zero. Only PF = 1.",
        },
        {
          type: "mcq",
          q: "38. A 90Ω resistor, a coil with 30Ω reactance, and a capacitor with 50Ω reactance are in series across a 12V AC source. The current through the resistor is",
          image: null,
          options: ["9 mA", "90 mA", "13 mA", "130 mA"],
          ans: "130 mA",
          explanation:
            "Net reactance X = XL - XC = -20Ω. Z = √(90²+20²) ≈ 92.2Ω. I = 12/92.2 ≈ 0.13A = 130mA.",
        },
        {
          type: "mcq",
          q: "39. How many types of power can be defined in an AC circuit?",
          image: null,
          options: ["3", "2", "1", "5"],
          ans: "3",
          explanation: "Three types: Active (P), Reactive (Q), Apparent (S).",
        },
        {
          type: "mcq",
          q: "40. Which of the following is true about power factor?",
          image: null,
          options: [
            "sinΦ=True/Ap",
            "cosΦ=True/Ap",
            "sinΦ=Ap/True",
            "cosΦ=Ap/True",
          ],
          ans: "cosΦ=Truepower/Apparentpower",
          explanation:
            "Power factor = cosΦ = P/S (true power / apparent power).",
        },
        {
          type: "mcq",
          q: "41. What is the power factor in a pure inductive or capacitive circuit?",
          image: null,
          options: ["-1", "0", "1", "Infinity"],
          ans: "0",
          explanation: "Purely reactive circuits consume no real power. PF=0.",
        },
        {
          type: "mcq",
          q: "42. Unit of Power factor?",
          image: null,
          options: ["Watt", "KW", "KVAR", "None"],
          ans: "None",
          explanation: "Power factor is a ratio, unitless.",
        },
        {
          type: "mcq",
          q: "43. Power factor = 1 means?",
          image: null,
          options: [
            "Circuit is reactive",
            "Pure resistive",
            "Pure inductive",
            "Pure capacitive",
          ],
          ans: "Pure resistive",
          explanation: "PF=1 occurs only in purely resistive circuits.",
        },
        {
          type: "mcq",
          q: "44. The phenomenon of resonance is used in",
          image: null,
          options: ["Lamps", "Fans", "Radio", "All"],
          ans: "Radio",
          explanation:
            "Resonance enables tuning in radios to select frequency.",
        },
        {
          type: "mcq",
          q: "45. In a resonance circuit which is correct?",
          image: null,
          options: ["V=IR", "XL=XC", "XL=2XC", "R=2XC"],
          ans: "XL=XC",
          explanation:
            "At resonance, inductive reactance equals capacitive reactance.",
        },
        {
          type: "mcq",
          q: "46. In an inductive circuit, current always?",
          image: null,
          options: ["lags", "leads", "in phase", "depends"],
          ans: "lags",
          explanation: "In inductors, current lags voltage by 90°.",
        },
        {
          type: "mcq",
          q: "47. In a purely resistive circuit, the value of phase angle will be?",
          image: null,
          options: ["0°", "90°", "180°", "270°"],
          ans: "0°",
          explanation:
            "In resistors, current and voltage are in phase → 0° phase difference.",
        },
        {
          type: "mcq",
          q: "48. In a circuit, the phase difference between the current and voltage is 90°. The circuit is?",
          image: null,
          options: ["resistive", "inductive", "resonant", "none"],
          ans: "inductive",
          explanation: "90° phase shift means purely inductive.",
        },
        {
          type: "mcq",
          q: "49. Phase difference between the voltage across capacitor and current through it?",
          image: null,
          options: ["0", "90", "180", "270"],
          ans: "90",
          explanation: "In capacitors, current leads voltage by 90°.",
        },
        {
          type: "mcq",
          q: "50. If XL > XC, the circuit will be?",
          image: null,
          options: ["capacitive", "inductive", "resistive", "resonant"],
          ans: "inductive",
          explanation: "If XL > XC, net reactance is inductive.",
        },
        {
          type: "mcq",
          q: "51. Which is true?",
          image: null,
          options: [
            "XL=XC → resonance",
            "XL>XC → capacitive",
            "XL<XC → inductive",
            "None",
          ],
          ans: "XL=XC → resonance",
          explanation: "Resonance occurs when XL = XC.",
        },
        {
          type: "mcq",
          q: "52. A 10Ω resistor, a coil with 20Ω reactance, and a capacitor of 20Ω reactance are in series. The power factor of the circuit is?",
          image: null,
          options: ["0", "0.5", "1", "Infinity"],
          ans: "1",
          explanation: "XL=XC → resonance → PF=1.",
        },
        {
          type: "mcq",
          q: "53. Which is true?",
          image: null,
          options: [
            "Resistor stores energy",
            "Inductor stores energy",
            "Capacitor stores energy",
            "Both b & c",
          ],
          ans: "Both b & c",
          explanation:
            "Inductors store energy in magnetic field, capacitors in electric field.",
        },
        {
          type: "mcq",
          q: "54. Which of the following theorem is particularly useful for analysing communication networks?",
          image: null,
          options: [
            "Millman’s theorem",
            "Thevenin’s theorem",
            "Superposition theorem",
            "Maximum power transfer theorem",
          ],
          ans: "Superposition theorem",
          explanation:
            "Superposition theorem is especially useful in communication circuits with multiple sources.",
        },
        {
          type: "mcq",
          q: "55. The maximum power transfer theorem is applied in?",
          image: null,
          options: [
            "power circuits",
            "communication circuits",
            "distribution circuits",
            "load circuits",
          ],
          ans: "communication circuits",
          explanation:
            "It is mainly used in communication circuits where efficiency is less important than signal strength.",
        },
      ],
    },

    {
      subname:
        "1.3 Alternating current fundamentals : Principle of generation of alternating voltages and currents and their equations and waveforms, average, peak and rms values. Three phase system. ",
      blocks: [
        { type: "bold", text: " Alternating Current (AC) : " },
        {
          type: "important",
          text: " • DC (Direct Current) :  ",
          desc: "  Flow of current in one direction, constant with time. ",
        },
        {
          type: "important",
          text: " • AC (Alternating Current) : ",
          desc: " Changes direction and magnitude periodically. ",
        },
        {
          type: "important",
          text: " • 1 cycle = ",
          desc: "  one positive + one negative half. ",
        },
        {
          type: "text",
          text: " • Most electricity we use (like in homes) is AC because : ",
        },
        {
          type: "text",
          text: " ⟹ Its voltage can be easily increased or decreased using a transformer. ",
          center: true,
        },
        {
          type: "text",
          text: " ⟹ Transmission losses are lower at high voltages. ",
          center: true,
        },
        {
          type: "text",
          text: " ⟹ AC motors are simpler, cheaper, and need less maintenance. ",
          center: true,
        },
        {
          type: "text",
          text: " ⟹ AC can be converted to DC using a rectifier. ",
          center: true,
        },

        { type: "bold", text: " Generation of AC : " },
        {
          type: "text",
          text: " • AC is generated by alternators using Faraday’s Law of Electromagnetic Induction: ",
        },
        {
          type: "text",
          text: " • When a conductor cuts magnetic lines of force, an emf (voltage) is induced. ",
        },
        { type: "text", text: " ⟹ 𝑒 = − 𝑁 (𝑑𝜙 / dt) ", center: true },
        {
          type: "text",
          text: " • “–” sign = direction of emf opposes the cause (Lenz’s law). ",
        },
        {
          type: "text",
          text: " • Fleming’s Right-hand rule gives the direction of current. ",
        },
        {
          type: "text",
          text: " • When a conductor of length l moves with velocity v in a magnetic field B, an emf is induced in it due to the change in magnetic flux — this is known as Motional emf, a special case of Faraday’s Law of Electromagnetic Induction. ",
        },
        { type: "text", text: " ⟹ e = B l v sin θ ", center: true },
        {
          type: "text",
          text: " ⟹  where e → induced emf (electromotive force), B → magnetic flux density (Tesla), l → length of the conductor (meter), ",
          center: true,
        },
        {
          type: "text",
          text: " ⟹  v → velocity of the conductor (m/s), θ → angle between B and v ",
          center: true,
        },
        { type: "bold", text: " Flemings rule : " },
        {
          type: "important",
          text: " • Right hand :",
          desc: " For generator. ",
        },
        { type: "important", text: " • Left hand:", desc: "  For motor. " },
        { type: "important", text: " F : ", desc: " Force/motion." },
        {
          type: "important",
          text: " B : ",
          desc: "  Magnetic flux density ( = 𝜑 / 𝐴, Unit: Tesla or Wb/m2). ",
        },
        { type: "important", text: " I :  ", desc: " Current.  " },
        { type: "bold", text: " AC Waveform :  " },
        { type: "text", text: " • The AC voltage varies as a sine wave : " },
        { type: "text", text: " ⟹ 𝑉 = 𝑉𝑚 sin(ωt)  ", center: true },
        { type: "text", text: " • 𝑉𝑚 : maximum (peak) voltage." },
        { type: "text", text: " • 𝜔𝑡 : angular position (in radians) " },

        { type: "bold", text: " Basic Terms :  " },
        { type: "image", src: acterm },
        {
          type: "important",
          text: " • Cycle : ",
          desc: " One complete wave (positive + negative half). ",
        },
        {
          type: "important",
          text: " • Time Period (T) :  ",
          desc: " Time taken for one cycle (seconds). ",
        },
        {
          type: "important",
          text: " • Frequency (f) : ",
          desc: " Number of cycles per second (Hertz). ( f = 1/T)",
        },
        {
          type: "important",
          text: " • Instantaneous value :  ",
          desc: " Value of voltage or current at any given instant. ",
        },
        {
          type: "important",
          text: " • Peak (Vm) : ",
          desc: " Maximum value of AC. ",
        },
        { type: "important", text: " • Peak-to-Peak :  ", desc: " 2 × 𝑉𝑚 " },

        { type: "bold", text: " Average & RMS Values :  " },
        { type: "semibold", text: " • Average value (for half cycle) : " },
        {
          type: "text",
          text: " ⟹  Average value of AC is that steady current (DC) which transfers across any circuit, the same amount of charge as is transferred by that alternating current during the same time.",
        },
        { type: "text", text: " ⟹ 𝑉𝑎𝑣𝑔 = 0.637𝑉𝑚 ", center: true },
        { type: "semibold", text: " • RMS (Effective) value : " },
        {
          type: "text",
          text: " ⟹ The effective or r.m.s. value of an alternating current is given by that steady current (D.C.) which, when flowing through a given circuit for a given time, produces the same amount of heat as produced by the alternating current,which when flowing through the same circuit for the same time.  ",
        },
        { type: "text", text: " ⟹ 𝑉𝑟𝑚𝑠 = 0.707 𝑉𝑚 ", center: true },
        { type: "text", text: " • RMS gives the same heating effect as DC. " },
        {
          type: "text",
          text: " • AC meters (ammeter/voltmeter) show RMS values.",
        },
        { type: "image", src: waveform },

        { type: "bold", text: " Phasors & Complex Numbers :  " },
        {
          type: "text",
          text: " • AC quantities can be represented as rotating vectors called phasors. ",
        },
        { type: "text", text: " • Forms of representing AC quantities: " },
        { type: "text", text: "  ⟹ Rectangular : Z = a+jb ", center: true },
        { type: "text", text: "  ⟹ Polar :  Z= ∣Z∣ ∠ θ ", center: true },
        { type: "text", text: "  ⟹ Exponential:  Z = ∣Z∣ e^jθ ", center: true },
        {
          type: "text",
          text: "Here, j = √ −1, represents a 90° phase shift. ",
        },

        { type: "bold", text: " Impedance (Z) :  " },
        {
          type: "text",
          text: " • It is the total opposition offered by a circuit to AC. ",
        },
        { type: "text", text: " ⟹  Z = R + j (XL − XC ) ", center: true },
        { type: "semibold", text: " Where : " },
        { type: "text", text: " • R : Resistance " },
        { type: "text", text: " • XL= 2πfL : Inductive Reactance  " },
        { type: "text", text: " • XC = 1 / 2πfC : Capacitive Reactance " },
        { type: "semibold", text: " • Magnitude : " },
        { type: "text", text: " ∣ Z ∣ = √(R^2 +(XL − XC )). ", center: true },
        { type: "semibold", text: " • Phase angle : " },
        {
          type: "text",
          text: " ϕ = tan−1 ( ( XL − XC) / R ).  ",
          center: true,
        },
        { type: "semibold", text: " • Power Factor (cos φ) : " },
        { type: "text", text: " cosφ = R / Z. ", center: true },
        { type: "text", text: " Unit : Ohm (Ω)" },
        { type: "bold", text: "  MCQ : " },

        {
          type: "mcq",
          q: "1. Which, among the following, is the correct expression for alternating emf generated?",
          image: null,
          options: [
            "e = 2Blv sin(θ)",
            "e = 2B²lv sin(θ)",
            "e = Blv sin(θ)",
            "e = 4Blv sin(θ)",
          ],
          ans: "e = Blv sin(θ)",
          explanation:
            "The motional EMF generated when a conductor moves through a magnetic field is given by e = Blv sin(θ), where B is magnetic field, l is length of conductor, v is velocity, and θ is the angle between velocity and magnetic field.",
        },
        {
          type: "mcq",
          q: "2. Calculate the maximum emf when the velocity is 10 m/s, the length is 3 m and the magnetic field density is 5 T.",
          image: null,
          options: ["150 V", "100 V", "300 V", "0 V"],
          ans: "150 V",
          explanation:
            "Maximum EMF occurs when sin(θ) = 1. Using e = Blv, we get e = 5 × 3 × 10 = 150 V.",
        },
        {
          type: "mcq",
          q: "3. What should θ be in order to get maximum emf in sinusoidal voltage?",
          image: null,
          options: ["0°", "90°", "180°", "45°"],
          ans: "90°",
          explanation:
            "Since EMF = Blv sin(θ), maximum EMF occurs when sin(θ) = 1, i.e., θ = 90°.",
        },
        {
          type: "mcq",
          q: "4. In an A.C. generator, increase in number of turns in the coil _________.",
          image: null,
          options: [
            "Increases emf",
            "Decreases emf",
            "Makes the emf zero",
            "Maintains the emf at a constant value",
          ],
          ans: "Increases emf",
          explanation:
            "EMF in an AC generator is proportional to the number of turns (N). More turns mean higher EMF.",
        },
        {
          type: "mcq",
          q: "5. The ratio of effective value to average value is called the ____ factor.",
          image: null,
          options: ["Form", "Peak", "Average", "Q-factor"],
          ans: "Form",
          explanation:
            "Form factor = RMS value / Average value. For a sine wave, it is approximately 1.11.",
        },
        {
          type: "mcq",
          q: "6. The RMS value of a sine wave is 100 A. Its peak value is:",
          image: null,
          options: ["70.7 A", "141 A", "150 A", "82.8 A"],
          ans: "141 A",
          explanation:
            "For a sine wave, Peak = RMS × √2 = 100 × 1.414 = 141.4 A.",
        },
        {
          type: "mcq",
          q: "7. The r.m.s. value of alternating current is given by steady (D.C.) current which when flowing through a given circuit for given time produces:",
          image: null,
          options: [
            "More heat than A.C.",
            "Same heat as A.C.",
            "Less heat than A.C.",
            "None of the above",
          ],
          ans: "Same heat as A.C.",
          explanation:
            "RMS value equals the DC current that produces the same heating effect as the AC current.",
        },
        {
          type: "mcq",
          q: "8. The power consumed in a circuit element will be least when the phase difference between the current and voltage is:",
          image: null,
          options: ["180°", "90°", "60°", "0°"],
          ans: "90°",
          explanation:
            "Power P = VI cos(φ). When φ = 90°, cos(90°) = 0, so power = 0 (minimum).",
        },
        {
          type: "mcq",
          q: "9. The r.m.s. value and mean value is the same in the case of:",
          image: null,
          options: [
            "Triangular wave",
            "Sine wave",
            "Square wave",
            "Half wave rectified sine wave",
          ],
          ans: "Square wave",
          explanation:
            "For a square wave, RMS = Average = Peak, as it remains constant throughout the cycle.",
        },
        {
          type: "mcq",
          q: "10. For the same peak value, which of the following waves will have the highest r.m.s. value?",
          image: null,
          options: [
            "Square wave",
            "Half wave rectified sine wave",
            "Triangular wave",
            "Sine wave",
          ],
          ans: "Square wave",
          explanation:
            "Square wave maintains its peak throughout, giving the highest RMS value.",
        },
        {
          type: "mcq",
          q: "11. For the same peak value, which of the following waves has the least mean value?",
          image: null,
          options: [
            "Half wave rectified sine wave",
            "Triangular wave",
            "Sine wave",
            "Square wave",
          ],
          ans: "Half wave rectified sine wave",
          explanation:
            "Half wave rectified sine has zero output for half the cycle, giving the lowest average value.",
        },
        {
          type: "mcq",
          q: "12. The peak value of a sine wave is 200 V. Its average value is:",
          image: null,
          options: ["127.4 V", "141.4 V", "282.8 V", "200 V"],
          ans: "127.4 V",
          explanation:
            "Average value (full wave) = (2/π) × Peak = (2/π) × 200 = 127.4 V.",
        },
        {
          type: "mcq",
          q: "13. The voltage of the domestic supply is 220 V. This figure represents:",
          image: null,
          options: [
            "Mean value",
            "R.M.S. value",
            "Peak value",
            "Average value",
          ],
          ans: "R.M.S. value",
          explanation:
            "Domestic supply voltage (220 V) refers to RMS value, representing effective power.",
        },
        {
          type: "mcq",
          q: "14. The r.m.s. value of a sinusoidal A.C. current is equal to its value at an angle of:",
          image: null,
          options: ["90°", "60°", "45°", "30°"],
          ans: "45°",
          explanation: "At 45°, sin(45°) = 1/√2 = 0.707, equal to RMS ratio.",
        },
        {
          type: "mcq",
          q: "15. A sine wave has a frequency of 50 Hz. Its angular frequency is:",
          image: null,
          options: ["100π", "50π", "25π", "5π"],
          ans: "100π",
          explanation: "Angular frequency ω = 2πf = 2π × 50 = 100π rad/s.",
        },
        {
          type: "mcq",
          q: "16. The reactance offered by a capacitor to alternating current of 50 Hz is 20Ω. If frequency increases to 100 Hz, reactance becomes:",
          image: null,
          options: ["2.5Ω", "5Ω", "10Ω", "15Ω"],
          ans: "10Ω",
          explanation:
            "Xc = 1/(2πfC). When frequency doubles, reactance halves. 20/2 = 10Ω.",
        },
        {
          type: "mcq",
          q: "17. The period of a wave is:",
          image: null,
          options: [
            "The same as frequency",
            "Time required to complete one cycle",
            "Expressed in amperes",
            "None of the above",
          ],
          ans: "Time required to complete one cycle",
          explanation:
            "Period (T) is the time taken for one full cycle of the waveform.",
        },
        {
          type: "mcq",
          q: "18. The form factor is the ratio of:",
          image: null,
          options: [
            "Peak value to RMS value",
            "RMS value to Average value",
            "Average value to RMS value",
            "None of the above",
          ],
          ans: "RMS value to Average value",
          explanation: "Form factor = RMS / Average. For sine wave ≈ 1.11.",
        },
        {
          type: "mcq",
          q: "19. The period of a sine wave is 1/50 seconds. Its frequency is:",
          image: null,
          options: ["20 Hz", "30 Hz", "40 Hz", "50 Hz"],
          ans: "50 Hz",
          explanation: "f = 1/T = 1 / (1/50) = 50 Hz.",
        },
        {
          type: "mcq",
          q: "20. A heater rated as 230 V, 10 kW A.C. The value 230 V refers to:",
          image: null,
          options: ["Average voltage", "RMS voltage", "Peak voltage", "None"],
          ans: "RMS voltage",
          explanation:
            "AC equipment ratings always use RMS values for effective power.",
        },
        {
          type: "mcq",
          q: "21. If two sinusoids of the same frequency but different amplitudes and phase angles are subtracted, the result is:",
          image: null,
          options: [
            "A sinusoid of the same frequency",
            "A sinusoid of half frequency",
            "A sinusoid of double frequency",
            "Not a sinusoid",
          ],
          ans: "A sinusoid of the same frequency",
          explanation:
            "Combining sinusoids of the same frequency always results in another sinusoid of that frequency.",
        },
        {
          type: "mcq",
          q: "22. If two sine waves of the same frequency have a phase difference of π radians, then:",
          image: null,
          options: [
            "Both reach minimum together",
            "Both reach maximum together",
            "When one is max, other is min",
            "None of the above",
          ],
          ans: "When one is max, other is min",
          explanation:
            "Phase difference of π radians (180°) means they are in complete opposition.",
        },
        {
          type: "mcq",
          q: "23. Two waves of the same frequency have opposite phase when phase angle is:",
          image: null,
          options: ["360°", "180°", "90°", "0°"],
          ans: "180°",
          explanation:
            "180° phase difference means they are completely opposite in phase.",
        },
        {
          type: "mcq",
          q: "24. The phase difference between voltage and current wave through a circuit element is 30°. The essential condition is that:",
          image: null,
          options: [
            "Both waves must have same frequency",
            "Both must have same peak value",
            "Both must have zero at same time",
            "None of the above",
          ],
          ans: "Both waves must have same frequency",
          explanation:
            "Phase difference only makes sense when both waves share the same frequency.",
        },
        {
          type: "mcq",
          q: "25. Capacitive reactance is more when:",
          image: null,
          options: [
            "Capacitance is less and frequency is less",
            "Capacitance is less and frequency is more",
            "Capacitance is more and frequency is less",
            "Capacitance is more and frequency is more",
          ],
          ans: "Capacitance is less and frequency is less",
          explanation:
            "Xc = 1 / (2πfC). Reactance increases when both f and C decrease.",
        },
        {
          type: "mcq",
          q: "26. When R = 6Ω, XL = 10Ω, Xc = 12Ω are in series, then the total impedance ZT is:",
          image: null,
          options: ["6.23Ω", "8Ω", "16Ω", "28Ω"],
          ans: "6.23Ω",
          explanation:
            "For a series RLC circuit, ZT = √[R² + (XL - Xc)²] = √[6² + (10 - 12)²] = √(36 + 4) = √40 = 6.32Ω ≈ 6.23Ω.",
        },
        {
          type: "mcq",
          q: "27. If R = 6Ω, XL = 10Ω, Xc = 12Ω are in series, the given circuit is:",
          image: null,
          options: ["Inductive", "Capacitive", "Resistive", "All of the above"],
          ans: "Capacitive",
          explanation:
            "Since Xc > XL (12Ω > 10Ω), the net reactance is capacitive. When Xc > XL, the circuit behaves as capacitive.",
        },
        {
          type: "mcq",
          q: "28. Find I, phase angle and Power factor if E = 50V ∠0° and R = 3Ω, XL = 7Ω, Xc = 3Ω are in series:",
          image: null,
          options: [
            "I = 10A ∠ -53.13°, φ = 53.13°, PF = 0.6",
            "I = 12.5A ∠ -53.13°, φ = 53.13°, PF = 0.6",
            "I = 8.33A ∠ -53.13°, φ = 53.13°, PF = 0.6",
            "I = 15A ∠ -36.87°, φ = 36.87°, PF = 0.8",
          ],
          ans: "I = 10A ∠ -53.13°, φ = 53.13°, PF = 0.6",
          explanation:
            "Z = R + j(XL - Xc) = 3 + j(7 - 3) = 3 + j4 = 5∠53.13°Ω. Therefore, I = E/Z = 50∠0° / 5∠53.13° = 10∠-53.13°A. Phase angle φ = 53.13°, PF = cos(53.13°) = 0.6.",
        },
        {
          type: "mcq",
          q: "29. Find ZT when R = 20Ω is in parallel with XL = 10Ω.",
          image: null,
          options: [
            "8.93∠63.43°Ω",
            "2.78∠48.36°Ω",
            "3.68∠60°Ω",
            "8.94∠63.43°Ω",
          ],
          ans: "8.93∠63.43°Ω",
          explanation:
            "ZT = (R × jXL) / (R + jXL) = (20 × j10) / (20 + j10) = j200 / (20 + j10) = (4 + j8)Ω. |ZT| = √(4² + 8²) = √80 = 8.94Ω, ∠ZT = arctan(8/4) = 63.43°.",
        },
        {
          type: "mcq",
          q: "30. The current across the capacitor when It = 5A ∠30° and R = 1Ω in series with XL = 8Ω, both R and XL are parallel with Xc = 2Ω, is:",
          image: null,
          options: ["6.63A", "5.26A", "2.26A", "2.63A"],
          ans: "6.63A",
          explanation:
            "Z_RL = 1 + j8Ω, Z_C = -j2Ω. Using current divider: IC = IT × Z_RL / (Z_RL + Z_C) = 5∠30° × (1 + j8)/(1 + j6). After calculation, IC = 6.63A.",
        },
        { type: "bold", text: " Three-Phase AC System : " },
        {
          type: "text",
          text: " • It uses three identical coils (phases) placed 120° apart from each other on the stator. ",
        },
        {
          type: "text",
          text: " • When the rotor (electromagnet) rotates, it cuts the magnetic flux of each coil at different times. ",
        },
        {
          type: "text",
          text: " • This produces three alternating voltages that are equal in magnitude, same frequency, but 120° out of phase with each other.",
        },
        {
          type: "text",
          text: " • The three voltages are called R-phase, Y-phase, and B-phase. ",
        },

        { type: "bold", text: "  Types of Connections : " },
        { type: "semibold", text: " 1. Star (Y) Connection : " },
        {
          type: "text",
          text: " ⟹ Phase voltage : VP = VL / √3.",
          center: true,
        },
        { type: "text", text: " ⟹ Line current IL = IP ", center: true },
        { type: "semibold", text: " 2. Delta (Δ) Connection : " },
        { type: "text", text: " ⟹ Phase voltage : VP = VL.", center: true },
        { type: "text", text: " ⟹ Line current IL = √3.IP ", center: true },

        { type: "semibold", text: " • Power in Three-Phase System : " },
        { type: "text", text: " ⟹ P = √3VL​.IL​cosϕ ", center: true },
        { type: "important", text: " Where , ", desc: " " },
        ,
        { type: "text", text: " • P = Total Active Power. " },
        { type: "text", text: " • VL = Line Voltage. " },
        { type: "text", text: " • IL = Line Current." },
        {
          type: "text",
          text: " • ϕ = Phase angle between voltage and current ",
        },

        { type: "important", text: " Also , ", desc: " " },
        {
          type: "important",
          text: " • ​Reactive Power (Q) : ",
          desc: " √3VL.​IL​sinϕ ",
        },
        {
          type: "important",
          text: " • Apparent Power (𝑆) : ",
          desc: "  √3VL.​IL ",
        },
        { type: "bold", text: " MCQ : " },
        {
          type: "mcq",
          q: "1. In a three-phase AC system, the coils are placed how many degrees apart?",
          image: null,
          options: ["90°", "120°", "60°", "180°"],
          ans: "120°",
          explanation:
            "Three identical stator coils in a three-phase system are spaced 120° apart to produce voltages phase-shifted by 120°.",
        },
        {
          type: "mcq",
          q: "2. What are the three phase voltages in a three-phase system called?",
          image: null,
          options: [
            "A, B, C phases",
            "Red, Yellow, Blue phases",
            "R, Y, B phases",
            "X, Y, Z phases",
          ],
          ans: "R, Y, B phases",
          explanation:
            "By convention, the three phase windings produce R-phase, Y-phase, and B-phase voltages.",
        },
        {
          type: "mcq",
          q: "3. In a star (Y) connection, the phase voltage VP equals:",
          image: null,
          options: ["VL", "VL × √3", "VL / √3", "VL / 2"],
          ans: "VL / √3",
          explanation:
            "In Y-connection, line voltage VL = √3 × phase voltage VP, so VP = VL / √3.",
        },
        {
          type: "mcq",
          q: "4. In a star connection, line current IL equals:",
          image: null,
          options: ["IP / √3", "IP", "√3 × IP", "3 × IP"],
          ans: "IP",
          explanation:
            "In Y-connection, the line current equals the phase current (IL = IP).",
        },
        {
          type: "mcq",
          q: "5. In a delta (Δ) connection, phase voltage VP equals:",
          image: null,
          options: ["VL / √3", "VL", "VL × √3", "VL / 2"],
          ans: "VL",
          explanation:
            "In delta connection, the phase windings are directly across line terminals, so phase voltage equals line voltage.",
        },
        {
          type: "mcq",
          q: "6. In a delta connection, line current IL equals:",
          image: null,
          options: ["IP", "IP / √3", "√3 × IP", "3 × IP"],
          ans: "√3 × IP",
          explanation:
            "In Δ-connection, three phase currents combine vectorially at each line, giving IL = √3 × IP.",
        },
        {
          type: "mcq",
          q: "7. Total active power P in a balanced three-phase system is given by:",
          image: null,
          options: ["3VPIPcosϕ", "√3VLILcosϕ", "VLILcosϕ", "3VLILsinϕ"],
          ans: "√3VLILcosϕ",
          explanation:
            "For a balanced three-phase load, P = √3 × VL × IL × cosϕ.",
        },
        {
          type: "mcq",
          q: "8. Reactive power Q in a three-phase system is:",
          image: null,
          options: ["VLILcosϕ", "√3VLILsinϕ", "3VLILsinϕ", "√3VPIPcosϕ"],
          ans: "√3VLILsinϕ",
          explanation: "Reactive power Q = √3 × VL × IL × sinϕ.",
        },
        {
          type: "mcq",
          q: "9. Apparent power S is given by:",
          image: null,
          options: ["√3VLIL", "3VPIP", "VLILcosϕ", "√3VLILsinϕ"],
          ans: "√3VLIL",
          explanation:
            "Apparent power S = √3 × VL × IL, independent of phase angle.",
        },
        {
          type: "mcq",
          q: "10. Which connection has phase voltage lower than line voltage?",
          image: null,
          options: ["Delta", "Star", "Both", "Neither"],
          ans: "Star",
          explanation:
            "In a Y-connection, VP = VL / √3 < VL, so phase voltage is lower.",
        },
        {
          type: "mcq",
          q: "11. Which connection results in line current equal to phase current?",
          image: null,
          options: ["Delta", "Star", "Both", "Neither"],
          ans: "Star",
          explanation: "In a Y-connection, IL = IP.",
        },
        {
          type: "mcq",
          q: "12. Which connection has phase current lower than line current?",
          image: null,
          options: ["Star", "Delta", "Both", "Neither"],
          ans: "Delta",
          explanation:
            "In Δ-connection, IL = √3 × IP > IP, so phase current is lower.",
        },
        {
          type: "mcq",
          q: "13. In a balanced three-phase star-connected load, the power factor is determined by:",
          image: null,
          options: [
            "VP and IP",
            "VL and IL",
            "VL, IL, and cosϕ",
            "IP, cosϕ only",
          ],
          ans: "VL, IL, and cosϕ",
          explanation:
            "Since P = √3 VL IL cosϕ, the power factor depends on VL, IL and cosϕ.",
        },
        {
          type: "mcq",
          q: "14. What phase shift exists between phase voltages in a three-phase system?",
          image: null,
          options: ["60°", "90°", "120°", "180°"],
          ans: "120°",
          explanation:
            "Each phase voltage in a three-phase system is separated by 120°.",
        },
        {
          type: "mcq",
          q: "15. For a delta connection, if IP = 5 A, the line current IL is:",
          image: null,
          options: ["5 A", "8.66 A", "2.89 A", "15 A"],
          ans: "8.66 A",
          explanation: "IL = √3 × IP = 1.732 × 5 = 8.66 A.",
        },
        {
          type: "mcq",
          q: "16. For a star connection, if VL = 415 V, the phase voltage VP is:",
          image: null,
          options: ["240 V", "415 V", "695 V", "100 V"],
          ans: "240 V",
          explanation: "VP = VL / √3 ≈ 415 / 1.732 = 240 V.",
        },
        {
          type: "mcq",
          q: "17. Active power in a three-phase delta system with VL = 400 V, IL = 10 A, cosϕ = 0.8 is:",
          image: null,
          options: ["5.54 kW", "6.93 kW", "4.62 kW", "3.20 kW"],
          ans: "6.93 kW",
          explanation:
            "P = √3 × 400 × 10 × 0.8 = 1.732 × 4000 × 0.8 = 6.93 kW.",
        },
        {
          type: "mcq",
          q: "18. If line voltage is doubled in a three-phase star system, the phase voltage:",
          image: null,
          options: ["Doubles", "Halves", "Remains same", "Changes by √2"],
          ans: "Doubles",
          explanation: "VP = VL / √3, so if VL doubles, VP also doubles.",
        },
        {
          type: "mcq",
          q: "19. In a three-phase system, apparent power S = 15 kVA and active power P = 12 kW. The power factor is:",
          image: null,
          options: ["0.80", "0.67", "0.90", "1.00"],
          ans: "0.80",
          explanation: "Power factor = P / S = 12 / 15 = 0.8.",
        },
        {
          type: "mcq",
          q: "20. Reactive power Q for VL = 440 V, IL = 5 A, sinϕ = 0.6 is:",
          image: null,
          options: ["2.29 kVAR", "5.75 kVAR", "4.58 kVAR", "7.66 kVAR"],
          ans: "4.58 kVAR",
          explanation:
            "Q = √3 × VL × IL × sinϕ = 1.732 × 440 × 5 × 0.6 = 4.58 kVAR.",
        },
      ],
    },
    {
      subname:
        "1.4 Semiconductor devices : Semiconductor diode and its characteristics, BJT Configuration and biasing, small and large signal model, working principle and application of MOSFET and CMOS. ",
      blocks: [
        { type: "bold", text: " Semiconductors : " },
        { type: "semibold", text: " Energy Band Concept :  " },
        { type: "image", src: sc },
        {
          type: "text",
          text: " ⟹ Semiconductors conduct more when temperature increases. ",
        },
        {
          type: "text",
          text: " ⟹ AC peak value is responsible for Insulator breakdown. ",
        },
        { type: "bold", text: "  Semiconductor Devices : " },
        {
          type: "text",
          text: " • Semiconductor devices are made up of materials that are neither good conductors nor good insulators.",
        },
        {
          type: "text",
          text: " • Higer Resistance than metals and lower than insulators.",
        },
        { type: "text", text: " • Negative temperature coefficient." },
        { type: "text", text: " • Example : Si, Ge etc." },
        { type: "bold", text: "  Types of Semiconductors : " },
        { type: "semibold", text: " 1. Intrinsic Semiconductor : " },
        { type: "text", text: " • Pure form (no impurity)." },
        { type: "text", text: " • Current flows due to electron-hole pairs. " },
        { type: "semibold", text: " 2. Extrinsic Semiconductor : " },
        {
          type: "text",
          text: " • Impure form (doped to increase conductivity). ",
        },
        { type: "text", text: " • Two types : " },
        { type: "image", src: conductor },
        {
          type: "important",
          text: " A. N-type : ",
          desc: " Doped with pentavalent atoms (P, As, Sb) → more electrons. ",
        },
        {
          type: "important",
          text: " B. P-type: ",
          desc: "  Doped with trivalent atoms (B, Al, Ga) → more holes. ",
        },

        { type: "bold", text: " Semiconductor Diode : " },
        { type: "semibold", text: " • Basic Idea : " },
        { type: "image", src: anode },
        { type: "text", text: " • Allows current in one direction only. " },
        {
          type: "text",
          text: " • Current flows from Anode (P) → Cathode (N). ",
        },
        { type: "semibold", text: " A. Forward Bias : " },
        { type: "text", text: " • P connected to +, N to – . " },
        { type: "text", text: " • Current flows easily. " },
        { type: "text", text: " • Depletion layer is thin." },
        { type: "text", text: " • At ideal diode have Zero (0) Resistance. " },
        { type: "semibold", text: " B. Reverse Bias : " },
        { type: "text", text: " • P connected to –, N to +" },
        { type: "text", text: " • Almost no current flows. " },
        { type: "text", text: " • Depletion layer is thick. " },
        {
          type: "text",
          text: " • At ideal diode have infinite (∞) Resistance",
        },
        { type: "semibold", text: "  Important Terms : " },

        {
          type: "important",
          text: " → Knee Voltage :  ",
          desc: "  Minimum voltage to start conduction (≈0.7 V for Si, 0.3 V for Ge).",
        },
        {
          type: "important",
          text: " → Breakdown Voltage : ",
          desc: " Reverse voltage where diode conducts heavily.",
        },
        {
          type: "important",
          text: " → Reverse Saturation :  ",
          desc: "  Current (Is)	Small leakage current in reverse bias (doubles every 10 °C). ",
        },
        {
          type: "important",
          text: " → Barrier Potential : ",
          desc: " 	Voltage barrier at junction (0.7 V Si, 0.3 V Ge). ",
        },

        { type: "semibold", text: " Diode Equation :  " },
        { type: "image", src: diode },
        { type: "text", text: " • Where : " },
        { type: "text", text: " • I: Diode current." },
        { type: "text", text: " • Is : Reverse saturation current." },
        {
          type: "text",
          text: " • VT : Thermal voltage (~25 mV at room temp). ",
        },
        { type: "text", text: " • 𝜂 : 1 for Ge, 2 for Si. " },
        { type: "bold", text: " Zener Diode :  " },
        { type: "image", src: zener },
        { type: "text", text: " • It Works in reverse bias. " },
        {
          type: "text",
          text: " • It is Used for voltage regulation, over-voltage protection, Clipping Circuits. ",
        },
        { type: "text", text: " • It Keeps output voltage constant." },

        {
          type: "bold",
          text: "  Modelling of Diode (Piecewise linear model) : ",
        },
        { type: "image", src: piecewise },
        { type: "semibold", text: " ⟹ 𝑖𝐷 =  (𝑉𝐷 − 𝑉𝐷0) / 𝑟𝐷   ;   𝑣𝐷 ≥ 𝑉𝐷0" },

        { type: "bold", text: " Bipolar Junction Transistor (BJT) : " },
        { type: "semibold", text: " • Structure :  " },
        {
          type: "text",
          text: " • Made of two PN junctions → 3 layers → 3 terminals : ",
        },
        { type: "text", text: " ⟹ Emitter (E) → heavily doped.", center: true },
        {
          type: "text",
          text: " ⟹ Base (B) → thin & lightly doped. ",
          center: true,
        },
        {
          type: "text",
          text: " ⟹ Collector (C) → moderately doped.",
          center: true,
        },
        {
          type: "important",
          text: " • BJT = ",
          desc: "  Current-controlled device.",
        },

        { type: "bold", text: " Types of Transistor :  " },
        {
          type: "important",
          text: " 1. NPN : ",
          desc: " Current by electrons (faster). ",
        },
        { type: "important", text: " 2. PNP : ", desc: "  Current by holes. " },

        { type: "bold", text: " Operating Mode/ Biasing : " },
        {
          type: "text",
          text: "  • Transistor consists of two pn-junctions : ",
        },
        {
          type: "text",
          text: " ⟹ emitter-base junction (EBJ). ",
          center: true,
        },
        {
          type: "text",
          text: " ⟹ collector-base junction (CBJ). ",
          center: true,
        },
        { type: "text", text: " • Operating mode depends on biasing. " },
        { type: "image", src: biasing },

        { type: "bold", text: "  BJT configuration :  " },
        { type: "image", src: config },

        { type: "bold", text: " Biasing & Q-point : " },
        {
          type: "important",
          text: " • Biasing :",
          desc: " Apply DC voltage to operate transistor properly.  ",
        },
        {
          type: "important",
          text: " • Q-Point : ",
          desc: " Steady-state (DC) operating point in the active region. ",
        },
        { type: "semibold", text: " Types of Biasing : " },
        { type: "image", src: biased },

        { type: "bold", text: " Small And Large Signal Model : " },
        { type: "image", src: model },

        {
          type: "bold",
          text: " MOSFET (Metal Oxide Semiconductor Field Effect Transistors) :  ",
        },
        { type: "semibold", text: " • Basic Concept : " },
        { type: "text", text: " • Voltage-controlled 3-terminal device : " },
        {
          type: "important",
          text: " • Gate (G) – ",
          desc: "  controls current. ",
        },
        { type: "important", text: " • Source (S) – ", desc: " input. " },
        { type: "important", text: " • Drain (D) – ", desc: " output. " },
        { type: "important", text: " • Body/Substrate ", desc: "  " },
        {
          type: "text",
          text: " • Insulating layer (SiO₂) between gate and channel acts like a capacitor. ",
        },

        { type: "bold", text: " Types Of Mosfet :  " },
        { type: "image", src: mosfet },
        {
          type: "text",
          text: " ⟹ Vt = Threshold voltage (needed to start conduction). ",
          center: true,
        },
        {
          type: "text",
          text: " ⟹ When VDS increases too much, pinch-off occurs (saturation). ",
          center: true,
        },
        { type: "text", text: " ⟹ VGS = +Ve gate voltage.", center: true },

        { type: "semibold", text: "  characteristics of D-MOSFET : " },
        {
          type: "text",
          text: " ⟹ They similar to that of E MOSFET except that D-MOSFET can operate in both the enhancement mode and depletion mode. ",
          center: true,
        },
        {
          type: "text",
          text: " ⟹ When +Ve gate voltage (vGS) is positive, D- MOSFET operates in enhancement mode and when vGS is negative, D-MOSFET operates in depletion mode. ",
          center: true,
        },
        {
          type: "text",
          text: " ⟹ The only difference is that the threshold voltage Vt of D MOSFET is negative ",
          center: true,
        },
        { type: "semibold", text: " Symbol Of D/E - Mosfet Type : " },
        { type: "image", src: symbolMosfet },
        {
          type: "important",
          text: " • Arrow :",
          desc: " Direction of flow of electron, Towards G => N and Outward G=>P. ",
        },
        {
          type: "important",
          text: " • Line : ",
          desc: " Continuous for Depletion type and dotted for enhancement type ",
        },

        { type: "semibold", text: " Applications Of Mosfet :  " },
        { type: "text", text: " • Amplifiers (especially RF). " },
        { type: "text", text: " • DC motor control. " },
        { type: "text", text: " • Digital ICs (logic gates). " },
        { type: "text", text: " • CMOS technology." },

        {
          type: "bold",
          text: " CMOS ( Complementary Metal–Oxide–Semiconductor ) :  ",
        },
        { type: "image", src: cmos },
        { type: "text", text: " • Uses both N-MOS and P-MOS on same chip. " },
        {
          type: "text",
          text: " • N-MOS is fabricated directly on the p-type substrate while the P-MOS is fabricated in a specially created n region known as “n well”.",
        },
        { type: "text", text: " • Very low power consumption. " },
        {
          type: "text",
          text: " • Used in logic circuits, microprocessors, and ICs.",
        },

        {
          type: "mcq",
          q: "1. Which type of impurity is added to a pure semiconductor to create an N-type material?",
          image: null,
          options: [
            "Trivalent atoms (e.g., Boron, Gallium)",
            "Pentavalent atoms (e.g., Phosphorus, Arsenic)",
            "Bivalent atoms",
            "Semiconductor atoms (e.g., Silicon, Germanium)",
          ],
          ans: "Pentavalent atoms (e.g., Phosphorus, Arsenic)",
          explanation:
            "Pentavalent impurities donate extra electrons, forming N-type semiconductors where electrons are majority carriers.",
        },
        {
          type: "mcq",
          q: "2. What is the resistance of an ideal diode when it is in reverse bias?",
          image: null,
          options: ["Zero (0)", "Infinite (∞)", "0.7 Ω", "0.3 Ω"],
          ans: "Infinite (∞)",
          explanation:
            "In reverse bias, an ideal diode completely blocks current flow, so its resistance is infinite.",
        },
        {
          type: "mcq",
          q: "3. What is the value of the ideality factor (η) for a silicon diode?",
          image: null,
          options: ["0.3", "0.7", "1", "2"],
          ans: "2",
          explanation:
            "For silicon diodes, η typically ranges from 1 to 2. Under high-level injection or recombination, η ≈ 2.",
        },
        {
          type: "mcq",
          q: "4. Which terminal of a Bipolar Junction Transistor (BJT) is thin and lightly doped?",
          image: null,
          options: ["Emitter", "Base", "Collector", "Substrate"],
          ans: "Base",
          explanation:
            "The base is made thin and lightly doped to allow most charge carriers from the emitter to reach the collector.",
        },
        {
          type: "mcq",
          q: "5. In which biasing condition does a Zener diode primarily operate for voltage regulation?",
          image: null,
          options: ["Forward bias", "Reverse bias", "No bias", "Active region"],
          ans: "Reverse bias",
          explanation:
            "Zener diodes are designed to operate in reverse breakdown for voltage regulation.",
        },
        {
          type: "mcq",
          q: "6. What is the main function of the insulating layer (SiO₂) between gate and channel in a MOSFET?",
          image: null,
          options: [
            "Acts as a conductor to allow current flow",
            "Acts as a capacitor to control the channel",
            "Increases the doping concentration",
            "Forms the drain terminal",
          ],
          ans: "Acts as a capacitor to control the channel",
          explanation:
            "The SiO₂ layer insulates the gate but allows voltage to control channel conductivity like a capacitor.",
        },
        {
          type: "mcq",
          q: "7. What is the defining feature of CMOS technology?",
          image: null,
          options: [
            "Uses only N-MOS transistors",
            "Uses only P-MOS transistors",
            "Uses both N-MOS and P-MOS transistors on the same chip",
            "Used only for high-power circuits",
          ],
          ans: "Uses both N-MOS and P-MOS transistors on the same chip",
          explanation:
            "CMOS combines N-MOS and P-MOS devices for low power consumption and high speed.",
        },
        {
          type: "mcq",
          q: "8. If a MOSFET symbol shows a dotted line for the channel, what type of MOSFET is it?",
          image: null,
          options: [
            "Depletion-type",
            "Enhancement-type",
            "P-channel type",
            "N-channel type",
          ],
          ans: "Enhancement-type",
          explanation:
            "A dotted line means no physical channel exists — it forms only when voltage is applied (enhancement mode).",
        },
        {
          type: "mcq",
          q: "9. What does the 'Q-Point' in a transistor circuit represent?",
          image: null,
          options: [
            "The maximum power rating",
            "The frequency response of the amplifier",
            "The steady-state DC operating point in the active region",
            "The point of thermal runaway",
          ],
          ans: "The steady-state DC operating point in the active region",
          explanation:
            "The Q-point defines the DC voltage and current levels at which the transistor operates stably.",
        },
        {
          type: "mcq",
          q: "10. Which of the following describes the operation of a D-MOSFET?",
          image: null,
          options: [
            "Operates only in enhancement mode",
            "Operates only in depletion mode",
            "Can operate in both enhancement and depletion modes",
            "Requires positive threshold voltage to turn on",
          ],
          ans: "Can operate in both enhancement and depletion modes",
          explanation:
            "D-MOSFETs conduct even with zero gate voltage and can increase or decrease channel conductivity.",
        },
        {
          type: "mcq",
          q: "11. What type of semiconductor is formed by adding trivalent impurities?",
          image: null,
          options: ["Intrinsic", "N-type", "P-type", "Metallic"],
          ans: "P-type",
          explanation:
            "Trivalent atoms create holes as majority carriers, forming a P-type semiconductor.",
        },
        {
          type: "mcq",
          q: "12. What is the majority carrier in an N-type semiconductor?",
          image: null,
          options: ["Holes", "Electrons", "Protons", "Neutrons"],
          ans: "Electrons",
          explanation:
            "N-type materials have free electrons as majority carriers donated by pentavalent atoms.",
        },
        {
          type: "mcq",
          q: "13. What is the typical barrier potential for a silicon diode?",
          image: null,
          options: ["0.1V", "0.3V", "0.7V", "1.0V"],
          ans: "0.7V",
          explanation:
            "A silicon diode requires approximately 0.7V to conduct significantly in forward bias.",
        },
        {
          type: "mcq",
          q: "14. What happens to the resistance of a semiconductor when temperature increases?",
          image: null,
          options: [
            "Increases",
            "Decreases",
            "Remains constant",
            "Becomes infinite",
          ],
          ans: "Decreases",
          explanation:
            "Heating generates more charge carriers, lowering resistance — opposite to metals.",
        },
        {
          type: "mcq",
          q: "15. What type of bond exists in a pure semiconductor crystal?",
          image: null,
          options: ["Ionic", "Covalent", "Metallic", "Hydrogen"],
          ans: "Covalent",
          explanation:
            "Semiconductor atoms share valence electrons with neighboring atoms via covalent bonds.",
        },
        {
          type: "mcq",
          q: "16. What is the knee voltage of a germanium diode?",
          image: null,
          options: ["0.2V", "0.3V", "0.7V", "1.2V"],
          ans: "0.3V",
          explanation:
            "Germanium diodes require about 0.3V for forward conduction.",
        },
        {
          type: "mcq",
          q: "17. What happens to reverse saturation current when temperature increases by 10°C?",
          image: null,
          options: ["Halves", "Doubles", "Triples", "Remains same"],
          ans: "Doubles",
          explanation:
            "Reverse saturation current approximately doubles for every 10°C rise in temperature.",
        },
        {
          type: "mcq",
          q: "18. Which type of breakdown occurs when high reverse voltage causes carrier multiplication?",
          image: null,
          options: ["Zener", "Avalanche", "Thermal", "Surface"],
          ans: "Avalanche",
          explanation:
            "Avalanche breakdown happens when accelerated carriers strike atoms, creating more carriers.",
        },
        {
          type: "mcq",
          q: "19. Which component uses reverse breakdown for voltage regulation?",
          image: null,
          options: ["Schottky diode", "LED", "Zener diode", "Varactor diode"],
          ans: "Zener diode",
          explanation:
            "Zener diodes are designed to work safely in reverse breakdown to maintain a fixed voltage.",
        },
        {
          type: "mcq",
          q: "20. How many PN junctions are there in a transistor?",
          image: null,
          options: ["1", "2", "3", "4"],
          ans: "2",
          explanation:
            "A transistor has two junctions — emitter-base and collector-base.",
        },
        {
          type: "mcq",
          q: "21. Which region of a transistor is lightly doped and thin?",
          image: null,
          options: ["Emitter", "Base", "Collector", "Body"],
          ans: "Base",
          explanation:
            "The base is thin and lightly doped so most carriers injected from emitter reach the collector.",
        },
        {
          type: "mcq",
          q: "22. Which transistor region is physically largest?",
          image: null,
          options: ["Emitter", "Base", "Collector", "None"],
          ans: "Collector",
          explanation:
            "Collector region is made larger to handle more heat and collect carriers efficiently.",
        },
        {
          type: "mcq",
          q: "23. A BJT is a ______ controlled device.",
          image: null,
          options: ["Voltage", "Current", "Power", "Field"],
          ans: "Current",
          explanation:
            "BJTs use a small base current to control a much larger collector current.",
        },
        {
          type: "mcq",
          q: "24. What is the majority carrier in a PNP transistor?",
          image: null,
          options: ["Electrons", "Holes", "Ions", "Neutrons"],
          ans: "Holes",
          explanation:
            "In a PNP transistor, holes are the majority carriers that move from emitter to collector.",
        },
        {
          type: "mcq",
          q: "25. In a common-emitter configuration, input impedance is:",
          image: null,
          options: ["High", "Low", "Medium", "Infinite"],
          ans: "Low",
          explanation:
            "Base-emitter junction is forward biased, offering low input impedance.",
        },
        {
          type: "mcq",
          q: "26. In a common-emitter configuration, output impedance is:",
          image: null,
          options: ["High", "Low", "Medium", "Infinite"],
          ans: "High",
          explanation:
            "Collector-base junction is reverse biased, giving high output impedance.",
        },
        {
          type: "mcq",
          q: "27. The relation between transistor currents is:",
          image: null,
          options: [
            "Ic = Ie + Ib",
            "Ie = Ic + Ib",
            "Ib = Ic + Ie",
            "Ie = Ic - Ib",
          ],
          ans: "Ie = Ic + Ib",
          explanation:
            "Total emitter current equals the sum of base and collector currents.",
        },
        {
          type: "mcq",
          q: "28. The emitter region is doped:",
          image: null,
          options: ["Lightly", "Heavily", "Moderately", "Not at all"],
          ans: "Heavily",
          explanation:
            "Heavy doping ensures more carriers are injected into the base.",
        },
        {
          type: "mcq",
          q: "29. What is the purpose of a heat sink in transistor circuits?",
          image: null,
          options: [
            "Increase current",
            "Reduce current",
            "Prevent overheating",
            "Compensate doping",
          ],
          ans: "Prevent overheating",
          explanation:
            "Heat sinks dissipate excess heat, preventing thermal damage to the transistor.",
        },
        {
          type: "mcq",
          q: "30. Which material is most commonly used in transistor manufacturing?",
          image: null,
          options: ["Germanium", "Silicon", "Gallium Arsenide", "Carbon"],
          ans: "Silicon",
          explanation:
            "Silicon is abundant, stable, and cost-effective for semiconductor devices.",
        },
        {
          type: "mcq",
          q: "31. The arrow in a transistor symbol indicates:",
          image: null,
          options: [
            "Electron flow",
            "Hole flow",
            "Current direction in collector",
            "Power loss direction",
          ],
          ans: "Hole flow",
          explanation:
            "The arrow shows conventional current (hole flow) direction — out for NPN, in for PNP.",
        },
        {
          type: "mcq",
          q: "32. What does the word ‘transistor’ mean?",
          image: null,
          options: [
            "Transfer of resistance",
            "Transfer of electrons",
            "Transforming semiconductors",
            "Transmitting current",
          ],
          ans: "Transfer of resistance",
          explanation:
            "‘Transistor’ comes from ‘transfer resistor’ — transferring signal from low to high resistance circuit.",
        },
        {
          type: "mcq",
          q: "33. Which MOSFET type needs a gate voltage to create a channel?",
          image: null,
          options: ["Depletion", "Enhancement", "JFET", "D-MOS"],
          ans: "Enhancement",
          explanation:
            "In enhancement MOSFETs, no channel exists at zero voltage; it forms when gate voltage is applied.",
        },
        {
          type: "mcq",
          q: "34. The MOSFET is a ______ controlled device.",
          image: null,
          options: ["Current", "Voltage", "Power", "Thermal"],
          ans: "Voltage",
          explanation:
            "MOSFET current between drain and source is controlled by gate voltage.",
        },
        {
          type: "mcq",
          q: "35. Which layer in MOSFET acts as insulator?",
          image: null,
          options: ["Metal", "Semiconductor", "SiO₂", "N-well"],
          ans: "SiO₂",
          explanation: "The thin SiO₂ layer insulates gate from the channel.",
        },
        {
          type: "mcq",
          q: "36. CMOS technology mainly helps in:",
          image: null,
          options: [
            "High power use",
            "Low power consumption",
            "Analog gain",
            "Current amplification",
          ],
          ans: "Low power consumption",
          explanation:
            "CMOS circuits use negligible static power since only one transistor conducts at a time.",
        },
        {
          type: "mcq",
          q: "37. In an NPN transistor, base-emitter junction is ______ biased in active mode.",
          image: null,
          options: ["Reverse", "Forward", "Zero", "Floating"],
          ans: "Forward",
          explanation:
            "To operate in active region, the base-emitter junction must be forward biased.",
        },
        {
          type: "mcq",
          q: "38. Which breakdown occurs due to tunneling of electrons in heavily doped diodes?",
          image: null,
          options: ["Zener", "Avalanche", "Thermal", "Punch-through"],
          ans: "Zener",
          explanation:
            "Zener breakdown results from quantum tunneling in thin depletion layers of heavily doped junctions.",
        },
        {
          type: "mcq",
          q: "39. The minimum gate-source voltage needed to form a channel in MOSFET is called:",
          image: null,
          options: [
            "Drain voltage",
            "Pinch-off voltage",
            "Threshold voltage",
            "Cutoff voltage",
          ],
          ans: "Threshold voltage",
          explanation:
            "Threshold voltage (Vt) is required to form a conducting channel in enhancement MOSFETs.",
        },
        {
          type: "mcq",
          q: "40. MOSFETs are preferred in ICs mainly because:",
          image: null,
          options: [
            "They are large",
            "They consume low power",
            "They need more current",
            "They are slow",
          ],
          ans: "They consume low power",
          explanation:
            "MOSFETs have high input impedance and very low static power use, ideal for ICs.",
        },
        {
          type: "mcq",
          q: "41. What type of semiconductor has both electrons and holes in equal concentration?",
          image: null,
          options: ["Intrinsic", "N-type", "P-type", "Degenerate"],
          ans: "Intrinsic",
          explanation:
            "In intrinsic semiconductors, pure materials have equal electron-hole concentration.",
        },
        {
          type: "mcq",
          q: "42. What happens to the depletion region when a diode is forward biased?",
          image: null,
          options: ["Widens", "Narrows", "Remains same", "Breaks down"],
          ans: "Narrows",
          explanation:
            "Forward bias reduces barrier potential, narrowing the depletion layer and allowing current flow.",
        },
        {
          type: "mcq",
          q: "43. In reverse bias, the current mainly flows due to:",
          image: null,
          options: [
            "Majority carriers",
            "Minority carriers",
            "Thermal electrons",
            "Surface charges",
          ],
          ans: "Minority carriers",
          explanation:
            "Reverse current is caused by thermally generated minority carriers crossing the junction.",
        },
        {
          type: "mcq",
          q: "44. The emitter efficiency of a transistor depends on:",
          image: null,
          options: [
            "Base thickness",
            "Emitter doping level",
            "Collector size",
            "Leakage current",
          ],
          ans: "Emitter doping level",
          explanation:
            "A highly doped emitter improves injection efficiency of majority carriers.",
        },
        {
          type: "mcq",
          q: "45. Which configuration of transistor gives voltage and current gain both?",
          image: null,
          options: [
            "CE (Common Emitter)",
            "CC (Emitter Follower)",
            "CB (Common Base)",
            "None",
          ],
          ans: "CE (Common Emitter)",
          explanation:
            "CE configuration provides both voltage and current gain — ideal for amplification.",
        },
        {
          type: "mcq",
          q: "46. A transistor is in saturation when:",
          image: null,
          options: [
            "Both junctions forward biased",
            "Both junctions reverse biased",
            "BE forward and BC reverse",
            "BE reverse and BC forward",
          ],
          ans: "Both junctions forward biased",
          explanation:
            "In saturation region, transistor behaves like a closed switch with both junctions forward biased.",
        },
        {
          type: "mcq",
          q: "47. A transistor is in cutoff when:",
          image: null,
          options: [
            "Both junctions reverse biased",
            "BE forward and BC reverse",
            "Both forward",
            "BE reverse and BC forward",
          ],
          ans: "Both junctions reverse biased",
          explanation:
            "In cutoff, no current flows as both base-emitter and base-collector junctions are reverse biased.",
        },
        {
          type: "mcq",
          q: "48. What is the typical input impedance of a MOSFET?",
          image: null,
          options: ["Low", "Moderate", "High", "Zero"],
          ans: "High",
          explanation:
            "Due to insulated gate, MOSFET input impedance is extremely high (in megaohms).",
        },
        {
          type: "mcq",
          q: "49. The body of an NMOS transistor is usually connected to:",
          image: null,
          options: ["Drain", "Source", "Gate", "Collector"],
          ans: "Source",
          explanation:
            "To prevent unwanted body effect, body (substrate) is tied to source terminal.",
        },
        {
          type: "mcq",
          q: "50. In CMOS logic, when input is HIGH, which transistor conducts?",
          image: null,
          options: ["PMOS", "NMOS", "Both", "None"],
          ans: "NMOS",
          explanation:
            "When input is HIGH, NMOS conducts and pulls output LOW while PMOS turns OFF.",
        },
        {
          type: "mcq",
          q: "51. Which one of the following is not a basic MOSFET device type?",
          image: null,
          options: [
            "Enhancement p-channel MOSFET",
            "Depletion N-channel MOSFET",
            "Narrow p-channel MOSFET",
            "Enhancement N-channel MOSFET",
          ],
          ans: "Narrow p-channel MOSFET",
          explanation:
            "The basic MOSFET types are defined by channel (N or P) and mode (Enhancement or Depletion). 'Narrow p-channel' is a size description, not a type.",
        },
        {
          type: "mcq",
          q: "52. Which type of MOSFET is exclusively used by MOS digital ICs?",
          image: null,
          options: [
            "Enhancement MOSFET",
            "Depletion MOSFET",
            "Either Enhancement or Depletion MOSFET",
            "None of these",
          ],
          ans: "Enhancement MOSFET",
          explanation:
            "Enhancement-mode MOSFETs are normally OFF and conduct only when a gate voltage is applied, ideal for digital ICs with low static power.",
        },
        {
          type: "mcq",
          q: "53. Which of the following is the fastest switching device?",
          image: null,
          options: ["JFET", "BJT", "MOSFET", "Triode"],
          ans: "MOSFET",
          explanation:
            "MOSFETs are voltage-controlled and have no charge storage delay like BJTs, making them the fastest for switching applications.",
        },
        {
          type: "mcq",
          q: "54. Which of the following terminals does not belong to the MOSFET?",
          image: null,
          options: ["Drain", "Gate", "Base", "Source"],
          ans: "Base",
          explanation:
            "MOSFETs have Gate, Drain, and Source terminals, while BJTs have Base, Collector, and Emitter.",
        },
        {
          type: "mcq",
          q: "55. Choose the correct statement about MOSFETs.",
          image: null,
          options: [
            "Unipolar, voltage controlled, two terminal device",
            "Bipolar, current controlled, three terminal device",
            "Unipolar, voltage controlled, three terminal device",
            "Bipolar, current controlled, two terminal device",
          ],
          ans: "Unipolar, voltage controlled, three terminal device",
          explanation:
            "MOSFETs are unipolar because they use only one type of charge carrier and are voltage-controlled with three terminals.",
        },
        {
          type: "mcq",
          q: "56. The arrow on the symbol of a MOSFET indicates:",
          image: null,
          options: [
            "That it is an N-channel MOSFET",
            "The direction of electrons",
            "The direction of conventional current flow",
            "That it is a P-channel MOSFET",
          ],
          ans: "The direction of conventional current flow",
          explanation:
            "The arrow shows the direction of conventional current from P-type to N-type region, identifying channel type.",
        },
        {
          type: "mcq",
          q: "57. The controlling parameter in a MOSFET is:",
          image: null,
          options: [
            "Vds (Drain-Source Voltage)",
            "Ig (Gate Current)",
            "Vgs (Gate-Source Voltage)",
            "Is (Source Current)",
          ],
          ans: "Vgs (Gate-Source Voltage)",
          explanation:
            "The voltage between gate and source (Vgs) controls the channel conductivity and hence the drain current.",
        },
        {
          type: "mcq",
          q: "58. What are the main terminals that carry current in a MOSFET?",
          image: null,
          options: ["Source", "Drain", "Source & Drain", "Gate"],
          ans: "Source & Drain",
          explanation:
            "The main current flows between Source and Drain, while the Gate acts as a control terminal.",
        },
        {
          type: "mcq",
          q: "59. Which transistor is preferred for high-power applications?",
          image: null,
          options: ["BJT", "UJT", "MOSFET", "JFET"],
          ans: "MOSFET",
          explanation:
            "Power MOSFETs are used in high-current, high-speed switching due to their efficiency and easy gate control.",
        },
        {
          type: "mcq",
          q: "60. What is required to switch OFF a depletion-type MOSFET (N-channel)?",
          image: null,
          options: [
            "A negative Vgs",
            "Vds = 0",
            "Vgd = 0",
            "Either Vds or Vgd",
          ],
          ans: "A negative Vgs",
          explanation:
            "A depletion MOSFET is normally ON; applying a negative gate voltage depletes the channel and turns it OFF.",
        },
        {
          type: "mcq",
          q: "61. What condition makes a MOSFET a transconductance device?",
          image: null,
          options: ["Vgs > Vth", "Vgs < Vth", "Vgs = Vth", "Vgs = 0"],
          ans: "Vgs > Vth",
          explanation:
            "When the gate voltage exceeds threshold voltage (Vth), MOSFET conducts and behaves as a transconductance amplifier (current ∝ Vgs).",
        },
        {
          type: "mcq",
          q: "62. The full form of CMOS is:",
          image: null,
          options: [
            "Capacitive Metal Oxide Semiconductor",
            "Capacitive Metallic Oxide Semiconductor",
            "Complementary Metal Oxide Semiconductor",
            "Complemented Metal Oxide Semiconductor",
          ],
          ans: "Complementary Metal Oxide Semiconductor",
          explanation:
            "CMOS stands for Complementary Metal-Oxide-Semiconductor, using both NMOS and PMOS on one chip.",
        },
        {
          type: "mcq",
          q: "63. CMOS technology is used in:",
          image: null,
          options: [
            "Inverter",
            "Microprocessor",
            "Digital logic",
            "Both microprocessor and digital logic",
          ],
          ans: "Both microprocessor and digital logic",
          explanation:
            "CMOS forms the basis for microprocessors, logic circuits, and memory due to its low power and high density.",
        },
        {
          type: "mcq",
          q: "64. A basic CMOS circuit with one PMOS and one NMOS transistor behaves as a/an:",
          image: null,
          options: ["Adder", "Subtractor", "Inverter", "Comparator"],
          ans: "Inverter",
          explanation:
            "A PMOS–NMOS pair in CMOS acts as an inverter, outputting the opposite logic level of the input.",
        },
        {
          type: "mcq",
          q: "65. CMOS logic dissipates ______ power than NMOS logic circuits.",
          image: null,
          options: ["More", "Less", "Equal", "Very High"],
          ans: "Less",
          explanation:
            "CMOS consumes almost no static power as only one transistor conducts at a time in steady states.",
        },
        {
          type: "mcq",
          q: "66. The value of α (alpha) of a transistor is:",
          image: null,
          options: [
            "More than 1",
            "Less than 1",
            "Equal to 1",
            "None of these",
          ],
          ans: "Less than 1",
          explanation:
            "α = Ic/Ie, and since some emitter current becomes base current, α is always slightly less than 1.",
        },
        {
          type: "mcq",
          q: "67. In a transistor, IC = αIE + ________.",
          image: null,
          options: ["IB", "ICEO", "ICBO", "βIB"],
          ans: "ICBO",
          explanation:
            "The total collector current equals αIE plus the small leakage current ICBO (collector-base leakage).",
        },
        {
          type: "mcq",
          q: "68. In a transistor, IC = 100 mA and IE = 100.2 mA. The value of β is:",
          image: null,
          options: ["100", "50", "499", "200"],
          ans: "499",
          explanation:
            "IB = IE - IC = 0.2 mA. So β = IC / IB = 100 / 0.2 = 500 ≈ 499.",
        },
        {
          type: "mcq",
          q: "69. If β = 100 and collector current is 10 mA, what is the emitter current?",
          image: null,
          options: ["10.1 mA", "100.1 mA", "110 mA", "None"],
          ans: "10.1 mA",
          explanation:
            "IB = IC/β = 10/100 = 0.1 mA. Thus, IE = IC + IB = 10.1 mA.",
        },
        {
          type: "mcq",
          q: "70. The relation between β and α is:",
          image: null,
          options: [
            "β = 1/(1 – α)",
            "β = (1 – α)/α",
            "β = α/(1 – α)",
            "β = α/(1 + α)",
          ],
          ans: "β = α/(1 – α)",
          explanation:
            "This is the mathematical link between the common-base gain α and the common-emitter gain β.",
        },
        {
          type: "mcq",
          q: "71. The value of β for a transistor is generally:",
          image: null,
          options: ["1", "Less than 1", "Between 20 and 500", "Above 500"],
          ans: "Between 20 and 500",
          explanation:
            "For most BJTs, β (current gain) typically lies between 20 and 500 depending on design.",
        },
        {
          type: "mcq",
          q: "72. The most commonly used transistor configuration is:",
          image: null,
          options: [
            "Common emitter",
            "Common base",
            "Common collector",
            "None",
          ],
          ans: "Common emitter",
          explanation:
            "Common-emitter configuration gives high voltage and current gain, making it the most used.",
        },
        {
          type: "mcq",
          q: "73. The input impedance of which configuration is highest?",
          image: null,
          options: [
            "Common emitter",
            "Common base",
            "Common collector",
            "None",
          ],
          ans: "Common collector",
          explanation:
            "Common-collector (emitter-follower) has the highest input impedance, ideal for buffering.",
        },
        {
          type: "mcq",
          q: "74. The output impedance of which configuration is highest?",
          image: null,
          options: [
            "Common emitter",
            "Common collector",
            "Common base",
            "None",
          ],
          ans: "Common base",
          explanation:
            "Common-base configuration has very high output impedance and low input impedance.",
        },
        {
          type: "mcq",
          q: "75. The phase difference between input and output in a common-base amplifier is:",
          image: null,
          options: ["0°", "180°", "90°", "270°"],
          ans: "0°",
          explanation:
            "Common-base amplifiers are non-inverting — input and output are in phase.",
        },
        {
          type: "mcq",
          q: "76. The power gain of a transistor is highest in which configuration?",
          image: null,
          options: [
            "Common emitter",
            "Common base",
            "Common collector",
            "None",
          ],
          ans: "Common emitter",
          explanation:
            "Power gain = voltage gain × current gain. CE has both, giving maximum power gain.",
        },
        {
          type: "mcq",
          q: "77. The phase shift between input and output of a common-emitter amplifier is:",
          image: null,
          options: ["0°", "90°", "180°", "270°"],
          ans: "180°",
          explanation:
            "Common-emitter amplifier is inverting, output is 180° out of phase with input.",
        },
        {
          type: "mcq",
          q: "78. As transistor temperature rises, base-emitter resistance:",
          image: null,
          options: [
            "Increases",
            "Decreases",
            "Remains same",
            "Becomes infinite",
          ],
          ans: "Decreases",
          explanation:
            "Increased temperature reduces base-emitter voltage drop, lowering its resistance.",
        },
        {
          type: "mcq",
          q: "79. The voltage gain in which configuration is highest?",
          image: null,
          options: [
            "Common base",
            "Common collector",
            "Common emitter",
            "None",
          ],
          ans: "Common emitter",
          explanation:
            "Common emitter generally gives the highest voltage gain among all BJT configurations.",
        },
        {
          type: "mcq",
          q: "80. The voltage gain of a common-collector amplifier is:",
          image: null,
          options: [
            "Equal to 1",
            "More than 10",
            "More than 100",
            "Less than 1",
          ],
          ans: "Less than 1",
          explanation:
            "Common-collector (emitter follower) has voltage gain slightly less than 1 but provides high current gain.",
        },
        {
          type: "mcq",
          q: "81. The phase difference between input and output in a common-collector amplifier is:",
          image: null,
          options: ["0°", "90°", "180°", "270°"],
          ans: "0°",
          explanation:
            "The common-collector (emitter-follower) amplifier is non-inverting, so input and output are in phase.",
        },
        {
          type: "mcq",
          q: "82. If α = 0.9, then the value of β is:",
          image: null,
          options: ["9", "0.9", "900", "90"],
          ans: "9",
          explanation: "Using β = α / (1 - α), we get β = 0.9 / (0.1) = 9.",
        },
        {
          type: "mcq",
          q: "83. When transistors are used in digital circuits, they operate in the:",
          image: null,
          options: [
            "Active region",
            "Breakdown region",
            "Saturation and cutoff regions",
            "Linear region",
          ],
          ans: "Saturation and cutoff regions",
          explanation:
            "Transistors in digital circuits act as switches — cutoff for 'off' and saturation for 'on'.",
        },
        {
          type: "mcq",
          q: "84. A current ratio IC/IE is usually less than one and is called:",
          image: null,
          options: ["Beta", "Theta", "Alpha", "Omega"],
          ans: "Alpha",
          explanation:
            "Alpha (α) is the common-base current gain, defined as the ratio of collector current to emitter current.",
        },
        {
          type: "mcq",
          q: "85. A transistor has β = 250 and base current IB = 20 µA. The collector current IC is:",
          image: null,
          options: ["500 µA", "5 mA", "50 mA", "5 A"],
          ans: "5 mA",
          explanation: "IC = β × IB = 250 × 20 µA = 5000 µA = 5 mA.",
        },
        {
          type: "mcq",
          q: "86. Voltage-divider bias provides:",
          image: null,
          options: [
            "An unstable Q point",
            "A stable Q point",
            "A Q point that varies easily with β",
            "A Q point that drifts with temperature",
          ],
          ans: "A stable Q point",
          explanation:
            "Voltage-divider bias stabilizes the transistor’s operating point against changes in β and temperature.",
        },
        {
          type: "mcq",
          q: "87. For proper amplifier operation, the base-emitter junction must be forward biased and which junction reverse biased?",
          image: null,
          options: [
            "Collector-emitter",
            "Base-collector",
            "Collector-base",
            "Emitter-base",
          ],
          ans: "Collector-base",
          explanation:
            "Active region operation requires the base-emitter junction forward biased and collector-base junction reverse biased.",
        },
        {
          type: "mcq",
          q: "88. The ends of a transistor load line correspond to:",
          image: null,
          options: [
            "Saturation and cutoff",
            "Operating point",
            "Power curve",
            "Amplification limit",
          ],
          ans: "Saturation and cutoff",
          explanation:
            "The DC load line connects cutoff (IC = 0) and saturation (maximum IC) points on the transistor output characteristics.",
        },
        {
          type: "mcq",
          q: "89. The common-base configuration provides which type of gain?",
          image: null,
          options: ["Voltage gain", "Current gain", "Power gain", "No gain"],
          ans: "Voltage gain",
          explanation:
            "Common-base amplifiers have high voltage gain but current gain less than one.",
        },
        {
          type: "mcq",
          q: "90. A transistor may act as a switching device or as a:",
          image: null,
          options: [
            "Fixed resistor",
            "Tuning device",
            "Rectifier",
            "Variable resistor",
          ],
          ans: "Variable resistor",
          explanation:
            "In active region, transistor current varies with base current, acting like a variable resistor.",
        },
        {
          type: "mcq",
          q: "91. Beta (β) current ratio is defined as:",
          image: null,
          options: ["IC/IB", "IC/IE", "IB/IE", "IE/IB"],
          ans: "IC/IB",
          explanation:
            "β is the common-emitter current gain, the ratio of collector current to base current.",
        },
        {
          type: "mcq",
          q: "92. A collector characteristic curve shows:",
          image: null,
          options: [
            "Emitter current vs collector voltage with constant base bias",
            "Collector current vs collector voltage with constant base current",
            "Collector current vs emitter voltage with constant collector current",
            "Collector voltage vs base current with constant emitter voltage",
          ],
          ans: "Collector current vs collector voltage with constant base current",
          explanation:
            "Collector characteristics plot IC versus VCE for various fixed IB values.",
        },
        {
          type: "mcq",
          q: "93. If a 2 mV input produces a 2 V output, what is the voltage gain?",
          image: null,
          options: ["0.001", "0.004", "100", "1000"],
          ans: "1000",
          explanation: "Av = Vout/Vin = 2V / 0.002V = 1000.",
        },
        {
          type: "mcq",
          q: "94. Most electrons in the base of an NPN transistor flow:",
          image: null,
          options: [
            "Out of the base lead",
            "Into the collector",
            "Into the emitter",
            "Into the base supply",
          ],
          ans: "Into the collector",
          explanation:
            "Due to thin and lightly doped base, most injected electrons pass through to the collector.",
        },
        {
          type: "mcq",
          q: "95. In a transistor, collector current is controlled by:",
          image: null,
          options: [
            "Collector voltage",
            "Base current",
            "Collector resistance",
            "Emitter resistance",
          ],
          ans: "Base current",
          explanation:
            "In a BJT, a small base current controls a large collector current (IC = β × IB).",
        },
        {
          type: "mcq",
          q: "96. Total emitter current is equal to:",
          image: null,
          options: ["IE – IC", "IC + IE", "IB + IC", "IB – IC"],
          ans: "IB + IC",
          explanation: "Kirchhoff’s Current Law: IE = IC + IB.",
        },
        {
          type: "mcq",
          q: "97. The main purpose of a common-collector stage before the load is to:",
          image: null,
          options: [
            "Provide voltage gain",
            "Provide phase inversion",
            "Improve frequency response",
            "Provide impedance matching for maximum power transfer",
          ],
          ans: "Provide impedance matching for maximum power transfer",
          explanation:
            "Common-collector amplifiers buffer voltage stages from low-resistance loads, improving power transfer.",
        },
        {
          type: "mcq",
          q: "98. The operating point of a transistor amplifier is known as:",
          image: null,
          options: [
            "Cutoff point",
            "Saturation point",
            "Quiescent point",
            "Peak point",
          ],
          ans: "Quiescent point",
          explanation:
            "The Q-point defines the steady DC conditions of IC and VCE with no input signal applied.",
        },
        {
          type: "mcq",
          q: "99. Which biasing method provides the best operating point stability?",
          image: null,
          options: [
            "Two-battery bias",
            "Collector-to-base bias",
            "Fixed bias",
            "Self bias (Voltage-divider bias)",
          ],
          ans: "Self bias (Voltage-divider bias)",
          explanation:
            "Voltage-divider bias provides a stable Q-point independent of transistor β and temperature.",
        },
        {
          type: "mcq",
          q: "100. If biasing is not done in an amplifier circuit, it results in:",
          image: null,
          options: [
            "A decrease in base current",
            "Excessive collector bias",
            "Unfaithful amplification",
            "High power loss",
          ],
          ans: "Unfaithful amplification",
          explanation:
            "Without proper biasing, transistor won’t remain in active region, causing signal distortion or clipping.",
        },
      ],
    },
    {
      subname:
        "1.5 Signal generator : Basic Principles of Oscillator, RC, LC and Crystal Oscillators Circuits. Waveform generators. ",
      blocks: [
        { type: "bold", text: " Oscillator : " },
        {
          type: "important",
          text: " • What it does : ",
          desc: " Converts DC power into AC signal without any input. ",
        },
        {
          type: "important",
          text: " • Why used : ",
          desc: " To generate signals in communication and digital systems. ",
        },
        {
          type: "important",
          text: " • Works on : ",
          desc: " Positive feedback (feeds part of output back to input).",
        },
        {
          type: "semibold",
          text: " • Condition for oscillation (Barkhausen Criterion) : ",
        },
        {
          type: "text",
          text: " ⟹ Loop gain Aβ = 1. ( A : Amplifier Gain, β = feedback ).",
          center: true,
        },
        {
          type: "text",
          text: " ⟹ Total phase shift = 0° or 360° ",
          center: true,
        },
        {
          type: "text",
          text: " ⟹ Noise or small signals inside the circuit start oscillation.",
          center: true,
        },

        { type: "bold", text: " Types of Oscillators :  " },
        {
          type: "semibold",
          text: " 1) RC Oscillators (Low Frequency ≤ 1 MHz) ",
        },
        {
          type: "text",
          text: " • Use resistors and capacitors to set frequency. ",
        },

        { type: "semibold", text: " A. Wien Bridge Oscillator: " },
        { type: "image", src: wien },
        {
          type: "text",
          text: " • Uses an op-amp operating at non- inverting mode . ",
        },
        { type: "text", text: " • Output is a pure sine wave. " },
        { type: "text", text: " • Phase shift = 0°." },
        { type: "text", text: " ⟹ ω = 1 / RC , R2 / R1 = 2.", center: true },
        { type: "text", text: " • Non Inverting Gain must be slightly > 3. " },
        { type: "text", text: " • Common in audio frequency generators. " },

        { type: "semibold", text: " B. RC Phase Shift Oscillator: " },
        { type: "image", src: phase },
        {
          type: "text",
          text: " • Uses 3 RC sections to provide 180° phase shift. ",
        },
        { type: "text", text: " • Op-amp adds another 180° = total 360°. " },
        {
          type: "text",
          text: " ⟹ Frequency ( f ) = 1 /  2π√6RC . ",
          center: true,
        },
        {
          type: "text",
          text: " •  At this frequency the gain of the op-amp must be at least 29 to satisfy Aβ = 1. ",
        },
        {
          type: "text",
          text: " • Used for audio and low-frequency sine waves.",
        },

        {
          type: "semibold",
          text: " 2. LC Oscillators (High Frequency > 1 MHz) : ",
        },
        {
          type: "text",
          text: " • Use inductors (L) and capacitors (C) to set frequency. ",
        },
        { type: "semibold", text: " A. Colpitts Oscillator:" },
        { type: "image", src: colpitts },
        {
          type: "text",
          text: " • Feedback from two capacitors (C1, C2) and one inductor (L). ",
        },
        { type: "text", text: " ⟹ Frequency ( f ) = 1 / 2π √(L×Ceq)." },
        { type: "text", text: " • Used in radio-frequency transmitters. " },
        { type: "semibold", text: " B. Hartley Oscillator: " },
        { type: "image", src: hartley },
        {
          type: "text",
          text: " • Feedback from two inductors (L1, L2) and one capacitor (C). ",
        },
        { type: "text", text: " ⟹ Frequency f = 1 / 2π √((L1+L2)×C)." },
        { type: "text", text: " • Used in radio receivers." },
        { type: "bold", text: " MCQ :  " },
        {
          type: "mcq",
          q: "1. Oscillators convert dc to __________.",
          image: null,
          options: ["Ac", "dc", "none", "Both"],
          ans: "Ac",
          explanation:
            "Oscillator is an electronic circuit that generates a periodic waveform on its output without an external signal source. It is used to convert dc to ac.",
        },
        {
          type: "mcq",
          q: "2. In order for an oscillator to work, the feedback must be __________.",
          image: null,
          options: [
            "Positive",
            "Negative",
            "Both positive and negative",
            "None",
          ],
          ans: "Positive",
          explanation:
            "An amplifier with positive feedback acts as an oscillator.",
        },
        {
          type: "mcq",
          q: "3. An oscillator can’t start unless gain (A) is _________ than feedback fraction (B).",
          image: null,
          options: ["lesser", "greater", "equal", "lesser or greater"],
          ans: "greater",
          explanation:
            "According to Barkhausen Criteria for Oscillation, Loop Gain A⋅B ≥ 1 where A = amplifier gain and B = feedback fraction.",
        },
        {
          type: "mcq",
          q: "4. For sinusoidal signal the overall phase shift of the feedback loop should be",
          image: null,
          options: ["0", "180", "360", "a & c"],
          ans: "a & c",
          explanation: "Total phase shift around the loop is 0° or 360°.",
        },
        {
          type: "mcq",
          q: "5. Which among the following parameters acts as an initiator for the operation of an oscillator in the absence of input signal?",
          image: null,
          options: ["Noise voltage", "Noise power", "Noise temperature", "All"],
          ans: "All",
          explanation:
            "Noise signals and the transients associated with circuit turning on provide the initial source signal that initiate the oscillation.",
        },
        {
          type: "mcq",
          q: "6. A properly designed Wien bridge oscillator provides a __________ waveform.",
          image: null,
          options: ["Sine", "non-sinusoidal", "both", "Either a or b"],
          ans: "Sine",
          explanation:
            "Op amp operating at non-inverting mode. No phase shift and very low distortion producing a smooth sinusoidal wave.",
        },
        {
          type: "mcq",
          q: "7. The feedback fraction in a Wien bridge oscillator is __________.",
          image: null,
          options: ["0", "0.33", "1", "Infinite"],
          ans: "0.33",
          explanation:
            "In a Wien Bridge Oscillator, the feedback fraction (β) is typically β = 1/3 ≈ 0.33.",
        },
        {
          type: "mcq",
          q: "8. The feedback circuit in a Wien bridge oscillator provides __________ of phase shift.",
          image: null,
          options: ["0", "180", "360", "a & b"],
          ans: "0",
          explanation:
            "In a Wien Bridge Oscillator, there is no phase shift by the feedback circuit.",
        },
        {
          type: "mcq",
          q: "9. The gain of amplifier in Wien bridge oscillator should be at least",
          image: null,
          options: ["1", "2", "3", "4"],
          ans: "3",
          explanation: "Non-Inverting gain (A) = 1 + R2/R1 = 1 + 2 = 3.",
        },
        {
          type: "mcq",
          q: "10. The ratio of feedback resistor and other resistor of amplifier in Wien bridge oscillator is",
          image: null,
          options: ["1", "2", "3", "0"],
          ans: "2",
          explanation: "In Wien bridge oscillator, R2/R1 = 2 i.e. R2 = 2R1.",
        },
        {
          type: "mcq",
          q: "11. RC phase shift oscillators contain a minimum of _________ phase shift network.",
          image: null,
          options: ["1", "2", "3", "0"],
          ans: "3",
          explanation:
            "RC phase shift oscillator contains a minimum of three phase shift networks. There can also be four (with 45° each) which increases stability.",
        },
        {
          type: "mcq",
          q: "12. Amplifier gain for RC phase shift oscillation, to obey Barkhausen’s criteria should be minimum of ___________.",
          image: null,
          options: ["43", "4", "10", "29"],
          ans: "29",
          explanation:
            "In RC phase shift oscillators, the op-amp gain must be at least 29 to satisfy Aβ = 1.",
        },
        {
          type: "mcq",
          q: "13. One phase shift network of an RC phase contains _________ inductor.",
          image: null,
          options: ["1", "2", "3", "0"],
          ans: "0",
          explanation:
            "An RC phase shift oscillator uses only resistors (R) and capacitors (C) — no inductors.",
        },
        {
          type: "mcq",
          q: "14. The phase shift network will produce a phase shift of 180° at ___________.",
          image: null,
          options: [
            "Three different frequencies",
            "One frequency",
            "Two different frequencies",
            "Infinitely many frequencies",
          ],
          ans: "One frequency",
          explanation:
            "The RC network produces 180° phase shift only at one specific frequency for oscillation.",
        },
        {
          type: "mcq",
          q: "15. Frequency of oscillation for three-section RC phase shift network is given by ___________.",
          image: null,
          options: ["1/(π√6RC)", "2/(π√6RC)", "1/(2π√6RC)", "1/(2√6RC)"],
          ans: "1/(2π√6RC)",
          explanation: "For a 3-stage RC network, f = 1 / (2π√6RC).",
        },
        {
          type: "mcq",
          q: "16. The feedback factor for RC phase shift oscillator is ___________.",
          image: null,
          options: ["1/18", "1/29", "1/11", "1/33"],
          ans: "1/29",
          explanation:
            "For a 3-section RC network, β ≈ 1/29, so amplifier gain A must be 29 to satisfy Aβ = 1.",
        },
        {
          type: "mcq",
          q: "17. What will be oscillator frequency if each RC stage contains a capacitor of 7nF and resistor of 10kΩ?",
          image: null,
          options: ["928 Hz", "1 kHz", "1.2 kHz", "895 Hz"],
          ans: "928 Hz",
          explanation: "Using f = 1/(2π√6RC) gives ≈ 928.57 Hz.",
        },
        {
          type: "mcq",
          q: "18. An oscillator converts ___________.",
          image: null,
          options: [
            "dc power into dc power",
            "dc power into ac power",
            "mechanical power into ac power",
            "none of the above",
          ],
          ans: "dc power into ac power",
          explanation:
            "Oscillator converts dc power to ac waveform without external input.",
        },
        {
          type: "mcq",
          q: "19. In an LC transistor oscillator, the active device is ___________.",
          image: null,
          options: [
            "LC tank circuit",
            "Biasing circuit",
            "Transistor",
            "None of the above",
          ],
          ans: "Transistor",
          explanation:
            "Transistor provides the amplification and energy to sustain oscillations.",
        },
        {
          type: "mcq",
          q: "20. In an LC oscillator, the frequency of oscillation is ___________ L or C.",
          image: null,
          options: [
            "Proportional to square of",
            "Directly proportional to",
            "Independent of",
            "Inversely proportional to square root of",
          ],
          ans: "Inversely proportional to square root of",
          explanation:
            "f = 1 / (2π√LC), so frequency decreases as L or C increases.",
        },
        {
          type: "mcq",
          q: "21. An oscillator produces ___________ oscillations.",
          image: null,
          options: ["Damped", "Undamped", "Modulated", "None of the above"],
          ans: "Undamped",
          explanation:
            "Oscillator produces continuous, steady (undamped) oscillations by replenishing energy lost.",
        },
        {
          type: "mcq",
          q: "22. An oscillator employs ___________ feedback.",
          image: null,
          options: ["Positive", "Negative", "Neither", "Data insufficient"],
          ans: "Positive",
          explanation:
            "Positive feedback reinforces the input and sustains oscillations.",
        },
        {
          type: "mcq",
          q: "23. An LC oscillator cannot be used to produce ___________ frequencies.",
          image: null,
          options: ["High", "Audio", "Very low", "Very high"],
          ans: "Very low",
          explanation:
            "LC oscillators are suitable for high and RF frequencies; RC oscillators are used for low frequencies.",
        },
        {
          type: "mcq",
          q: "24. The Hartley oscillator is commonly used in ___________.",
          image: null,
          options: [
            "Radio receivers",
            "Radio transmitters",
            "TV receivers",
            "None",
          ],
          ans: "Radio receivers",
          explanation:
            "Hartley oscillators are often used in radio receivers for tuning and signal generation.",
        },
        {
          type: "mcq",
          q: "25. In a phase shift oscillator, we use ___________ RC sections.",
          image: null,
          options: ["Two", "Three", "Four", "None"],
          ans: "Three",
          explanation:
            "Three RC sections give 180° phase shift required with the amplifier’s 180° inversion.",
        },
        {
          type: "mcq",
          q: "26. In a phase shift oscillator, the frequency determining elements are ___________.",
          image: null,
          options: ["L and C", "R, L and C", "R and C", "None"],
          ans: "R and C",
          explanation:
            "The frequency is set by resistors and capacitors: f = 1/(2π√6RC).",
        },
        {
          type: "mcq",
          q: "27. A Wien bridge oscillator uses ___________ feedback.",
          image: null,
          options: [
            "Only positive",
            "Only negative",
            "Both positive and negative",
            "None",
          ],
          ans: "Both positive and negative",
          explanation:
            "Positive feedback sustains oscillations; negative feedback stabilizes amplitude.",
        },
        {
          type: "mcq",
          q: "28. The piezoelectric effect in a crystal is ___________.",
          image: null,
          options: [
            "A voltage developed because of mechanical stress",
            "A change in resistance due to temperature",
            "A change in frequency due to temperature",
            "None",
          ],
          ans: "A voltage developed because of mechanical stress",
          explanation:
            "Mechanical pressure on a crystal generates voltage—known as the piezoelectric effect.",
        },
        {
          type: "mcq",
          q: "29. The crystal oscillator frequency is very stable due to ___________ of the crystal.",
          image: null,
          options: ["Rigidity", "Vibrations", "Low Q", "High Q"],
          ans: "High Q",
          explanation:
            "High Q factor means very low energy loss and highly stable frequency.",
        },
        {
          type: "mcq",
          q: "30. The application where one would most likely find a crystal oscillator is ___________.",
          image: null,
          options: [
            "Radio receiver",
            "Radio transmitter",
            "AF sweep generator",
            "None",
          ],
          ans: "Radio transmitter",
          explanation:
            "Crystal oscillators provide the precise stable frequency required in radio transmitters.",
        },
        {
          type: "mcq",
          q: "31. An oscillator differs from an amplifier because it ___________.",
          image: null,
          options: [
            "Has more gain",
            "Requires no input signal",
            "Requires no DC supply",
            "Always has same input",
          ],
          ans: "Requires no input signal",
          explanation:
            "Oscillators generate their own output, while amplifiers need an input signal.",
        },
        {
          type: "mcq",
          q: "32. One condition for oscillation is ___________.",
          image: null,
          options: [
            "A phase shift around feedback loop of 180°",
            "A gain around feedback loop of one-third",
            "A phase shift around feedback loop of 0°",
            "A gain around loop < 1",
          ],
          ans: "A phase shift around feedback loop of 0°",
          explanation:
            "Total phase shift must be 0° (or multiples of 360°) for sustained oscillation.",
        },
        {
          type: "mcq",
          q: "33. A second condition for oscillations is ___________.",
          image: null,
          options: [
            "A gain of 1 around feedback loop",
            "No gain",
            "Feedback attenuation of one-third",
            "Feedback must be capacitive",
          ],
          ans: "A gain of 1 around feedback loop",
          explanation: "Loop gain (Aβ) must equal 1 for steady oscillations.",
        },
        {
          type: "mcq",
          q: "34. In a certain oscillator Av = 50. The attenuation of the feedback circuit must be ___________.",
          image: null,
          options: ["1", "0.1", "10", "0.02"],
          ans: "0.02",
          explanation: "For oscillation, Aβ = 1 ⇒ β = 1/A = 1/50 = 0.02.",
        },
        {
          type: "mcq",
          q: "35. For an oscillator to properly start, the gain around the feedback loop must initially be ___________.",
          image: null,
          options: [
            "1",
            "Greater than 1",
            "Less than 1",
            "Equal to attenuation",
          ],
          ans: "Greater than 1",
          explanation:
            "Initial gain > 1 helps start oscillation; amplitude stabilizes later to Aβ = 1.",
        },
        {
          type: "mcq",
          q: "36. In Colpitt’s oscillator, feedback is obtained ___________.",
          image: null,
          options: [
            "By magnetic induction",
            "From centre of split inductors",
            "From centre of split capacitors",
            "None",
          ],
          ans: "From centre of split capacitors",
          explanation:
            "Feedback comes from two capacitors connected in series across the inductor.",
        },
        {
          type: "mcq",
          q: "37. The Q of the crystal is of the order of ___________.",
          image: null,
          options: ["100", "1000", "50", "More than 10,000"],
          ans: "More than 10,000",
          explanation:
            "Quartz crystals have very high Q factor (10,000+), ensuring low losses and stable oscillation.",
        },
        {
          type: "mcq",
          q: "38. Quartz crystal is most commonly used in crystal oscillators because ___________.",
          image: null,
          options: [
            "It has superior electrical properties",
            "It is easily available",
            "It is inexpensive",
            "None",
          ],
          ans: "It has superior electrical properties",
          explanation:
            "Quartz has stable electrical and mechanical properties, ideal for oscillation.",
        },
        {
          type: "mcq",
          q: "39. In an LC oscillator, if L is increased four times, frequency of oscillations is ___________.",
          image: null,
          options: [
            "Increased 2×",
            "Decreased 4×",
            "Increased 4×",
            "Decreased 2×",
          ],
          ans: "Decreased 2×",
          explanation:
            "Since f = 1/(2π√LC), if L increases 4×, f decreases by √4 = 2.",
        },
        {
          type: "mcq",
          q: "40. An important limitation of a crystal oscillator is ___________.",
          image: null,
          options: ["Low output", "High Q", "Less availability", "High output"],
          ans: "Low output",
          explanation:
            "Crystal oscillators have low output power but excellent frequency stability.",
        },
        {
          type: "mcq",
          q: "41. The signal generator generally used in laboratories is ___________ oscillator.",
          image: null,
          options: ["Wien-bridge", "Hartley", "Crystal", "Phase shift"],
          ans: "Wien-bridge",
          explanation:
            "Wien bridge oscillators produce low-distortion sine waves ideal for lab use.",
        },
        {
          type: "mcq",
          q: "42. Find the true statement.",
          image: null,
          options: [
            "Resistor + inductor → LC oscillations",
            "Resistor + capacitor → LC oscillations",
            "Charged capacitor + inductor → LC oscillations",
            "All",
          ],
          ans: "Charged capacitor + inductor → LC oscillations",
          explanation:
            "LC oscillations occur when energy exchanges between capacitor and inductor.",
        },
        {
          type: "mcq",
          q: "43. An AC circuit contains a capacitor of 10⁻⁶ F and inductor of 10⁻⁴ H. The frequency of oscillations will be ___________.",
          image: null,
          options: ["10⁵ Hz", "10 Hz", "10⁵/2π Hz", "10/2π Hz"],
          ans: "10⁵/2π Hz",
          explanation:
            "Using f = 1/(2π√LC), substituting values gives ≈ 10⁵/2π Hz.",
        },
        {
          type: "mcq",
          q: "44. Find the angular frequency of the oscillation for the circuit shown.",
          image: qop44,
          options: [
            "5×10³ rad/sec",
            "20×10³ rad/sec",
            "25×10³ rad/sec",
            "None",
          ],
          ans: "25×10³ rad/sec",
          explanation:
            "Using 1/C = 1/C₁ + 1/C₂ and ω = 1/√LC gives ω = 25×10³ rad/sec.",
        },
        {
          type: "mcq",
          q: "45. A quartz crystal has Rs = 6.4Ω, Cs = 0.09972pF and Ls = 2.546mH. Calculate the fundamental oscillating frequency.",
          image: null,
          options: ["9.987 MHz", "9 MHz", "9.987 Hz", "8.987 MHz"],
          ans: "9.987 MHz",
          explanation: "f = 1/(2π√LsCs) gives ≈ 9.987 MHz.",
        },
        {
          type: "mcq",
          q: "46. Like which of the following circuits does a quartz oscillator behave at stable resonant frequency?",
          image: null,
          options: ["RC", "RLC", "LC", "RL"],
          ans: "RLC",
          explanation:
            "A quartz crystal acts like a series RLC circuit at resonance.",
        },
        {
          type: "mcq",
          q: "47. A quartz crystal has ____ value of Q factor?",
          image: null,
          options: ["Greater", "Lesser", "Infinite", "Zero"],
          ans: "Greater",
          explanation:
            "Quartz crystals have very high Q, meaning minimal loss and high frequency stability.",
        },
        {
          type: "mcq",
          q: "48. A crystal oscillator generates oscillation based on the ___________ effect.",
          image: null,
          options: ["Ultrasonic", "Magnetic", "Piezoelectric", "Photoelectric"],
          ans: "Piezoelectric",
          explanation:
            "Crystal oscillators operate on the piezoelectric effect where stress generates voltage.",
        },
        {
          type: "mcq",
          q: "49. In a crystal oscillator, if thickness t is reduced by 1%, frequency f will ___________.",
          image: null,
          options: [
            "Increase by 2%",
            "Decrease by 2%",
            "Increase by 1%",
            "Decrease by 1%",
          ],
          ans: "Increase by 1%",
          explanation:
            "Frequency is inversely proportional to thickness, so reducing t increases f by same %.",
        },
        {
          type: "mcq",
          q: "50. The oscillator that gives best frequency stability is ___________.",
          image: null,
          options: [
            "Hartley oscillator",
            "Colpitts oscillator",
            "Crystal oscillator",
            "RC phase shift oscillator",
          ],
          ans: "Crystal oscillator",
          explanation:
            "Crystal oscillators are the most stable due to the high Q factor of quartz.",
        },
        { type: "bold", text: "Waveform Generators" },
        { type: "text", text: " • Used to generate different wave shapes." },

        { type: "semibold", text: "a) Square Wave Generator" },
        {
          type: "text",
          text: " • Uses op-amp with feedback resistors and a capacitor.",
        },
        { type: "text", text: " • Output alternates between +Vsat and −Vsat." },

        {
          type: "text",
          text: "⟹ Formula for time period : T = 2RC × ln[(2R1 + R2) / R2].",
          center: true,
        },

        {
          type: "text",
          text: " • Used in: Clocks, timers, and digital circuits.",
        },

        { type: "semibold", text: "b) Triangular Wave Generator" },
        {
          type: "text",
          text: " • Formed by integrating the square wave output.",
        },
        { type: "text", text: " • Produces a ramp up and down voltage shape." },
        {
          type: "text",
          text: "• Used in: Function generators and analog signal testing.",
        },
        { type: "bold", text: " MCQ :  " },
        {
          type: "mcq",
          q: "1. How are the square wave outputs generated in an op-amp?",
          image: null,
          options: [
            "Op-amp is forced to operate in the positive saturation region",
            "Op-amp is forced to operate in the negative saturation region",
            "Op-amp is forced to operate between positive and negative saturation region",
            "None of the mentioned",
          ],
          ans: "Op-amp is forced to operate between positive and negative saturation region",
          explanation:
            "In a square wave generator using an op-amp (like a comparator or a relaxation oscillator), the output switches rapidly between the positive and negative saturation voltages, creating the square wave. The circuit uses 1 Op-amp, 1 Capacitor, and 3 Resistors: R1 for negative feedback, R2 for positive feedback, and R3 connected between the non-inverting input and ground.",
        },
        {
          type: "mcq",
          q: "2. Determine the expression for time period of a square wave generator.",
          image: null,
          options: [
            "T = 2RC ln[(R1 + R2) / R2]",
            "T = 2RC ln[(2R1 + R2) / R2]",
            "T = 2RC ln[(R1 + 2R2) / R2]",
            "T = 2RC ln[(R1 + R2) / (2R2)]",
          ],
          ans: "T = 2RC ln[(2R1 + R2) / R2]",
          explanation:
            "The time period of the output waveform for a square wave generator is given by T = 2RC × ln[(2R1 + R2) / R2].",
        },
        {
          type: "mcq",
          q: "3. Determine the output frequency for the circuit given below.",
          image: qsqaure3,
          options: ["28.77 Hz", "31.97 Hz", "35.52 Hz", "39.47 Hz"],
          ans: "39.47 Hz",
          explanation:
            "The output frequency is fo = 1 / [2RC × ln((2R1 + R2) / R2)] = 1 / {(2×33kΩ × 0.33µF) × ln[(2×33kΩ + 30kΩ) / 30kΩ]} = 1 / (0.02175 × ln 32) = 39.47 Hz.",
        },
        {
          type: "mcq",
          q: "4. What is the primary purpose of a waveform generator?",
          image: null,
          options: [
            "To amplify existing signals",
            "To measure the frequency of a wave",
            "To generate different wave shapes",
            "To convert DC power to AC power",
          ],
          ans: "To generate different wave shapes",
          explanation:
            "As stated in the first line, waveform generators are 'Used to generate different wave shapes'.",
        },
        {
          type: "mcq",
          q: "5. In a typical op-amp-based square wave generator, what does the output voltage alternate between?",
          image: null,
          options: [
            "0V and +Vsat",
            "+Vcc and -Vee",
            "+Vsat and -Vsat",
            "The input voltage and ground",
          ],
          ans: "+Vsat and -Vsat",
          explanation:
            "The content explicitly states that the 'Output alternates between +Vsat and −Vsat' because the op-amp swings between its positive and negative saturation limits.",
        },
        {
          type: "mcq",
          q: "6. Which components are mentioned as being part of the feedback loop in an op-amp square wave generator?",
          image: null,
          options: [
            "An inductor and a capacitor",
            "Two capacitors and a resistor",
            "Feedback resistors and a capacitor",
            "A diode and a transistor",
          ],
          ans: "Feedback resistors and a capacitor",
          explanation:
            "The square wave generator 'Uses op-amp with feedback resistors and a capacitor' — these components determine the timing of oscillation.",
        },
        {
          type: "mcq",
          q: "7. How is a triangular wave typically generated from a square wave?",
          image: null,
          options: [
            "By differentiating the square wave",
            "By integrating the square wave",
            "By amplifying the square wave",
            "By passing the square wave through a resistor",
          ],
          ans: "By integrating the square wave",
          explanation:
            "A triangular wave generator is 'Formed by integrating the square wave output'. The integrator converts constant high/low levels into linearly rising/falling voltages.",
        },
        {
          type: "mcq",
          q: "8. What kind of voltage shape does a triangular wave generator produce?",
          image: null,
          options: [
            "A constant DC level",
            "A series of sharp pulses",
            "A sinusoidal curve",
            "A ramp-up and ramp-down voltage shape",
          ],
          ans: "A ramp-up and ramp-down voltage shape",
          explanation:
            "The output is described as producing 'a ramp up and down voltage shape,' characteristic of a triangular waveform.",
        },
        {
          type: "mcq",
          q: "9. According to the provided information, which of the following is a common application for a square wave generator?",
          image: null,
          options: [
            "Analog signal testing",
            "Power supplies",
            "Clocks and timers",
            "Audio amplification",
          ],
          ans: "Clocks and timers",
          explanation:
            "Square wave generators are used in 'Clocks, timers, and digital circuits' for timing and switching applications.",
        },
        {
          type: "mcq",
          q: "10. What is a common use for a triangular wave generator mentioned in the text?",
          image: null,
          options: [
            "Digital logic circuits",
            "Radio frequency transmission",
            "Power rectification",
            "Function generators and analog signal testing",
          ],
          ans: "Function generators and analog signal testing",
          explanation:
            "Triangular wave generators are 'Used in: Function generators and analog signal testing' for waveform analysis and circuit testing.",
        },
      ],
    },
    {
      subname:
        "1.6 Amplifiers : Classification of Output Stages, Class A Output Stage, Class B Output Stage, Class AB Output Stage, Biasing the Class AB Stage, Power BJTs, Transformer-Coupled Push-Pull Stages, and Tuned Amplifiers, op-amps.",
      blocks: [
        { type: "bold", text: "Amplifier" },

        {
          type: "text",
          text: " • An amplifier increases the strength of a weak signal.",
        },

        {
          type: "text",
          text: " • It makes a small voltage, current, or power larger.",
        },
        {
          type: "important",
          text: " • Voltage amplifier : ",
          desc: " ",
        },
        {
          type: "text",
          text: " → increases voltage, low power output, minimum distortion, small transistor used. ",
          center: true,
        },
        {
          type: "text",
          text: " → used as first stage of amplifier, output impdeance is high.",
          center: true,
        },
        {
          type: "important",
          text: " • Power amplifier : ",
          desc: " ",
        },
        {
          type: "text",
          text: " → increases power (both voltage and current), high power output, minimum distortion, large transistor used. ",
          center: true,
        },
        {
          type: "text",
          text: " → used as last stage of amplifier, output impdeance is low.",
          center: true,
        },

        {
          type: "text",
          text: " • Used in radios, TVs, speakers, and communication devices.",
        },

        { type: "bold", text: "Operational Amplifier (Op-Amp)" },

        {
          type: "important",
          text: " • What it is : ",
          desc: "A device that amplifies the difference between two input voltages.",
        },
        {
          type: "important",
          text: " • Inputs : ",
          desc: "V+ = non-inverting input, V− = inverting input.",
        },
        {
          type: "important",
          text: " • Output : ",
          desc: "Vout = amplified voltage difference.",
        },
        {
          type: "important",
          text: " • Used for : ",
          desc: "Amplifiers, filters, adders, integrators, etc.",
        },

        {
          type: "semibold",
          text: " Ideal Characteristics Of Operational Amplifier : ",
        },
        {
          type: "text",
          text: " ⟹ Voltage gain, Input resistance, Bandwidth, CMRR (Common Mode Rejection Ratio), Slew rate = ∞ ",
          center: true,
        },
        {
          type: "text",
          text: " ⟹ Output resistance, PSRR (Power Supply Rejection Ratio), Input offset voltage, Input bias current, Input offset current  = 0 ",
          center: true,
        },

        { type: "semibold", text: "Types :" },
        {
          type: "important",
          text: "• Inverting amplifier : ",
          desc: "Output is opposite (180° out of phase) to input.",
        },
        {
          type: "text",
          text: " ⟹ Voltage gain : Av = Vo / Vi = - ( R2 / R1 ).",
          center: true,
        },
        {
          type: "important",
          text: "• Non-inverting amplifier : ",
          desc: "Output is in same phase as input.",
        },
        {
          type: "text",
          text: " ⟹ Voltage gain : Av = Vo / Vi = 1 + ( R2 / R1 ).",
          center: true,
        },
        {
          type: "important",
          text: "• Voltage follower / Buffer : ",
          desc: "Gain = 1; used to prevent signal loss between stages .",
        },
        { type: "text", text: " ⟹ if R2 = 0, Av = 1 (Vo = Vi).", center: true },

        {
          type: "important",
          text: "• Adder (Summer) : ",
          desc: "Adds multiple input voltages.",
        },
        {
          type: "text",
          text: " ⟹ Vo = -Rf ((Vi1/R1) + (Vi2/R2) + (Vi3/R3))",
          center: true,
        },
        {
          type: "important",
          text: "• Integrator : ",
          desc: "Converts square wave to triangular wave.",
        },
        { type: "text", text: " ⟹ Vo = - 1 / RC ∫ Vin.dt", center: true },
        {
          type: "important",
          text: "• Differentiator : ",
          desc: "Converts triangular wave to square wave.",
        },
        { type: "text", text: " ⟹ Vout = - RC . (dVin / dt)", center: true },

        { type: "bold", text: "Load Line and Q Point" },

        {
          type: "text",
          text: " • The load line shows how the transistor behaves with different currents and voltages.",
        },

        {
          type: "important",
          text: "• Q point (Quiescent point) : ",
          desc: " is the transistor’s operating point when there is no input signal.",
        },

        {
          type: "important",
          text: " • If Q point is in the middle → no distortion : ",
          desc: "The transistor operates in the active region, ensuring undistorted amplification.",
        },

        {
          type: "important",
          text: " • If Q point moves near saturation or cutoff → distortion occurs : ",
          desc: "The transistor output signal becomes clipped or nonlinear due to improper biasing.",
        },
        { type: "bold", text: " Amplifier Classes :  " },
        {
          type: "text",
          text: " • Amplifiers are divided based on how long the transistor conducts during one cycle of input (called conduction angle).",
        },

        { type: "image", src: classes },
        { type: "bold", text: " MCQ :  " },
        {
          type: "mcq",
          q: "1. Which of the following electrical characteristics is not exhibited by an ideal op-amp?",
          image: null,
          options: [
            "Infinite voltage gain",
            "Infinite bandwidth",
            "Infinite output resistance",
            "Infinite slew rate",
          ],
          ans: "Infinite output resistance",
          explanation:
            "Ideal op-amp has: Voltage gain → Infinite, Bandwidth → Infinite, Slew rate → Infinite, Input resistance → Infinite, CMRR → Infinite. Hence, 'Infinite output resistance' is not an ideal characteristic.",
        },
        {
          type: "mcq",
          q: "2. An ideal op-amp requires infinite bandwidth because",
          image: null,
          options: [
            "Signals can be amplified without attenuation",
            "Output common-mode noise voltage is zero",
            "Output voltage occurs simultaneously with input voltage changes",
            "Output can drive infinite number of device",
          ],
          ans: "Signals can be amplified without attenuation",
          explanation:
            "An ideal op-amp has infinite bandwidth. Therefore, any frequency signal from 0 to ∞ Hz can be amplified without attenuation.",
        },
        {
          type: "mcq",
          q: "3. Find the output voltage of an ideal op-amp if V1 and V2 are the two input voltages.",
          image: null,
          options: [
            "VO = V1 - V2",
            "VO = A×(V1 - V2)",
            "VO = A×(V1 + V2)",
            "VO = V1×V2",
          ],
          ans: "VO = A×(V1 - V2)",
          explanation:
            "The output voltage of an ideal op-amp is the product of open-loop gain and the difference between the two input voltages.",
        },
        {
          type: "mcq",
          q: "4. Which is not the ideal characteristic of an op-amp?",
          image: null,
          options: [
            "Input Resistance → 0",
            "Output impedance → 0",
            "Bandwidth → ∞",
            "Open loop voltage gain → ∞",
          ],
          ans: "Input Resistance → 0",
          explanation:
            "Ideal op-amp has: Output impedance → 0, Output resistance → 0, PSRR → 0, Input offset voltage → 0, Input bias current → 0. Input resistance should be infinite, not zero.",
        },
        {
          type: "mcq",
          q: "5. An amplifier that operates in the linear region at all times is",
          image: null,
          options: ["Class A", "Class AB", "Class B", "Class C"],
          ans: "Class A",
          explanation:
            "Class A amplifiers operate in the linear region for the entire input cycle, providing undistorted amplification.",
        },
        {
          type: "mcq",
          q: "6. A certain class A power amplifier delivers 5 W to a load with an input signal power of 100 mW. The power gain is",
          image: null,
          options: ["100", "50", "250", "5"],
          ans: "50",
          explanation:
            "Output power = 5000 mW, Input power = 100 mW, Power gain = 5000 / 100 = 50.",
        },
        {
          type: "mcq",
          q: "7. A certain class A power amplifier has the maximum signal power output of",
          image: null,
          options: ["6 W", "12 W", "1 W", "0.707 W"],
          ans: "1 W",
          explanation:
            "Theoretical maximum signal power output for a class A amplifier is 1 W.",
        },
        {
          type: "mcq",
          q: "8. The efficiency of a power amplifier is the ratio of the power delivered to the load to the",
          image: null,
          options: [
            "Input signal power",
            "Power dissipated in the last stage",
            "Power from the DC power supply",
            "None of these answers",
          ],
          ans: "Power from the DC power supply",
          explanation:
            "Efficiency = (AC Power Output / DC Power Input) × 100%. The input power comes from the DC power supply.",
        },
        {
          type: "mcq",
          q: "9. The maximum efficiency of a class A power amplifier is",
          image: null,
          options: ["25%", "50%", "79%", "98%"],
          ans: "25%",
          explanation:
            "Class A amplifier conducts all the time, leading to high power loss and low efficiency (25%). It can be improved up to 50% by design modification.",
        },
        {
          type: "mcq",
          q: "10. The transistors in a class B amplifier are biased",
          image: null,
          options: [
            "Into cutoff",
            "In saturation",
            "At midpoint of the load line",
            "Right at cutoff",
          ],
          ans: "Right at cutoff",
          explanation:
            "In Class B amplifier, transistors conduct for only one half-cycle of the input waveform, so they are biased at cutoff.",
        },
        {
          type: "mcq",
          q: "11. Crossover distortion is a problem for",
          image: null,
          options: [
            "Class A amplifiers",
            "Class AB amplifiers",
            "Class B amplifiers",
            "All of these amplifiers",
          ],
          ans: "Class B amplifiers",
          explanation:
            "Class B amplifiers have crossover distortion because transistors are biased at cutoff. Class AB reduces this distortion, and Class A has none.",
        },
        {
          type: "mcq",
          q: "12. The maximum efficiency of a class B push-pull amplifier is",
          image: null,
          options: ["25%", "50%", "79%", "98%"],
          ans: "79%",
          explanation:
            "In Class B push-pull amplifiers, conduction angle = 180°, with a theoretical maximum efficiency of 78.5% (≈79%).",
        },
        {
          type: "mcq",
          q: "13. The maximum efficiency of a class AB amplifier is",
          image: null,
          options: [
            "Higher than a class B",
            "The same as a class B",
            "About the same as a class A",
            "Slightly less than a class B",
          ],
          ans: "Slightly less than a class B",
          explanation:
            "Class AB amplifiers conduct for 180°–360°. They reduce distortion but have slightly less efficiency than Class B (<78.5%).",
        },
        {
          type: "mcq",
          q: "14. The efficiency of a class C amplifier is",
          image: null,
          options: [
            "Less than class A",
            "Less than class B",
            "Less than class AB",
            "Greater than classes A, B, or AB",
          ],
          ans: "Greater than classes A, B, or AB",
          explanation:
            "Class C amplifiers have the highest efficiency (up to 95%) but the poorest linearity. They conduct for less than 180° and are used in RF circuits.",
        },
        {
          type: "mcq",
          q: "15. The transistor in a class C amplifier conducts for",
          image: null,
          options: [
            "More than one input cycle",
            "One-half of the input cycle",
            "A very small percentage of the input cycle",
            "All of the input cycle",
          ],
          ans: "A very small percentage of the input cycle",
          explanation:
            "In Class C amplifiers, the transistor is biased so it conducts for less than 50% of the input cycle (usually much less).",
        },
        { type: "bold", text: "Power BJTs (Bipolar Junction Transistors)" },

        { type: "text", text: "• Used for high power applications." },

        { type: "semibold", text: "Construction:" },
        {
          type: "text",
          text: " • Has 3 layers → emitter (n⁺), base (p), collector (n⁻).",
        },

        {
          type: "text",
          text: " • The n⁺ layer provides mechanical support and conducts heat.",
        },

        { type: "text", text: " • The base is thin and lightly doped." },

        {
          type: "important",
          text: " • Key Point:",
          desc: "Power BJT = three-layer, two-junction device (p-n-p or n-p-n).",
        },
        { type: "bold", text: " Power BJT VS Power Mosfet  : " },
        { type: "image", src: powermosfet },

        ,
        { type: "bold", text: "Push-Pull Amplifier" },

        {
          type: "text",
          text: " • Uses two transistors (one pushes current, the other pulls it).",
        },
        { type: "text", text: " • Works in Class A, B, or AB modes." },
        { type: "text", text: " • Reduces even harmonics (distortion)." },
        { type: "text", text: " • Used in audio and RF systems." },

        { type: "semibold", text: "Class B Push-Pull Amplifier:" },
        {
          type: "text",
          text: " → One transistor works during positive half, other during negative half.",
        },

        { type: "bold", text: "Tuned Amplifier" },

        { type: "text", text: " • Amplifies only a specific frequency range." },
        {
          type: "text",
          text: " • Uses an LC circuit (inductor + capacitor) called a tank circuit.",
        },
        {
          type: "text",
          text: " • Used in radio, TV receivers, and communication systems.",
        },
        {
          type: "text",
          text: " • Works on resonance principle — amplifies signals at resonant frequency only.",
        },

        { type: "semibold", text: " Important Formulas : " },
        {
          type: "important",
          text: " • Resonant Frequency:",
          desc: "fᵣ = 1 / (2π√(LC))",
        },

        {
          type: "important",
          text: " • Efficiency (η):",
          desc: "η = (AC power output / DC power input) × 100%",
        },

        { type: "bold", text: " MCQ :  " },

        {
          type: "mcq",
          q: "1. Power transistor is a ____________",
          image: null,
          options: [
            "three layer, three junction device",
            "three layer, two junction device",
            "two layer, one junction device",
            "four layer, three junction device",
          ],
          ans: "three layer, two junction device",
          explanation:
            "Three layer (Emitter, Base, Collector), Two junctions (Emitter-Base and Collector-Base). Hence, it is a three-layer, two-junction device.",
        },
        {
          type: "mcq",
          q: "2. Which one is the most suitable power device for high frequency (>100 kHz) switching applications?",
          image: null,
          options: [
            "BJT",
            "Power MOSFET",
            "Schottky diode",
            "Microwave transistor",
          ],
          ans: "Power MOSFET",
          explanation:
            "Power MOSFETs can operate at very high frequencies, while BJTs cannot. Hence, Power MOSFETs are preferred for >100 kHz switching applications.",
        },
        {
          type: "mcq",
          q: "3. For a power transistor, if base current IB is increased keeping Vce constant, then ______",
          image: null,
          options: [
            "IC increases",
            "IC decreases",
            "IC remains constant",
            "IC changes sinusoidal",
          ],
          ans: "IC increases",
          explanation:
            "In a power transistor, collector current (IC) is directly proportional to base current (IB). As IB increases, IC also increases when VCE is constant.",
        },
        {
          type: "mcq",
          q: "4. In a power transistor, _____________ is the controlling parameter.",
          image: null,
          options: ["Vbe", "Vce", "Ib", "Ic"],
          ans: "Ib",
          explanation:
            "In a Bipolar Junction Transistor (BJT), the base current (IB) controls the collector current (IC). Hence, IB is the controlling parameter.",
        },
        {
          type: "mcq",
          q: "5. A push-pull amplifier",
          image: null,
          options: [
            "Reduces odd harmonics in the output",
            "Reduces even harmonics in the output",
            "Is the first stage of an audio amplifier",
            "Uses single transistor",
          ],
          ans: "Reduces even harmonics in the output",
          explanation:
            "A push-pull amplifier uses two transistors working alternately for positive and negative halves of the input signal. Their symmetry cancels even-order harmonics, reducing distortion and improving efficiency.",
        },
        {
          type: "mcq",
          q: "6. What is the conduction angle for a Class B push-pull amplifier?",
          image: null,
          options: ["0", "90", "180", "270"],
          ans: "180",
          explanation:
            "For a Class B push-pull amplifier, each transistor conducts for 180° (half cycle). One handles the positive half, the other the negative half.",
        },
        {
          type: "mcq",
          q: "7. Tuned amplifier is a _____ type of amplifier?",
          image: null,
          options: ["Electronic", "Mechanical", "Electrical", "Both a and b"],
          ans: "Electronic",
          explanation:
            "A tuned amplifier is an electronic amplifier that uses LC circuits to amplify signals of a specific frequency range.",
        },
        {
          type: "mcq",
          q: "8. Amplifiers are classified based on ___ parameters?",
          image: null,
          options: ["Power", "Current", "Voltage", "All the above"],
          ans: "All the above",
          explanation:
            "Amplifiers can be classified based on power, voltage, or current — depending on which quantity they amplify or control.",
        },
        {
          type: "mcq",
          q: "9. ____ type of amplifier considers certain frequencies and rejects certain frequencies?",
          image: null,
          options: [
            "Current amplifier",
            "Voltage amplifier",
            "Tuned amplifier",
            "All the above",
          ],
          ans: "Tuned amplifier",
          explanation:
            "A tuned amplifier employs a resonant LC circuit that selects and amplifies a specific frequency while rejecting others.",
        },
        {
          type: "mcq",
          q: "10. Which of the following types of frequencies does a tuned amplifier amplify?",
          image: null,
          options: [
            "Higher frequencies",
            "Radio frequencies",
            "Lower frequencies",
            "Both a and b",
          ],
          ans: "Both a and b",
          explanation:
            "Tuned amplifiers amplify signals within a narrow frequency band, typically in the radio frequency (RF) range — hence both higher and radio frequencies.",
        },
        {
          type: "mcq",
          q: "11. ____ is a combination of tuned amplifiers?",
          image: null,
          options: ["RL", "LC", "RC", "RLC"],
          ans: "LC",
          explanation:
            "A tuned amplifier uses an LC circuit (inductor and capacitor) as its load. This LC circuit acts as a resonant or tank circuit that selects the desired frequency.",
        },
        {
          type: "mcq",
          q: "12. Which of the following is the formula of resonant impedance?",
          image: null,
          options: ["L/CR", "RLC", "R/LC", "1/RLC"],
          ans: "L/CR",
          explanation:
            "In a tuned amplifier or parallel RLC circuit at resonance, the resonant impedance is given by L/CR.",
        },
      ],
    },
  ],
};
