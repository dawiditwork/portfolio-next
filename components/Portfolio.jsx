"use client";
import Lenis from "lenis";
import { useMotionValue, useReducedMotion, useScroll, useSpring, useTransform } from "motion/react";
import { useEffect, useRef, useState } from "react";
import { COPY } from "./data/portfolioData";
import CustomCursor from "./components/CustomCursor";
import Header from "./sections/Header";
import Hero from "./sections/Hero";
import TechMarquee from "./sections/TechMarquee";
import Manifesto from "./sections/Manifesto";
import Projects from "./sections/Projects";
import Experience from "./sections/Experience";
import Contact from "./sections/Contact";
import Footer from "./sections/Footer";
export default function Portfolio() {
    const [language, setLanguage] = useState("de");
    const [menuOpen, setMenuOpen] = useState(false);
    const [resumeTab, setResumeTab] = useState("experience");
    const [formState, setFormState] = useState("idle");
    const [feedback, setFeedback] = useState("");
    const [activeSection, setActiveSection] = useState("about");
    const [cursorActive, setCursorActive] = useState(false);
    const [cursorVisible, setCursorVisible] = useState(false);
    const reduceMotion = useReducedMotion();
    const c = COPY[language];
    const heroRef = useRef(null);
    const manifestoRef = useRef(null);
    const pointerX = useMotionValue(0);
    const pointerY = useMotionValue(0);
    const cursorX = useMotionValue(-100);
    const cursorY = useMotionValue(-100);
    const cursorSpringX = useSpring(cursorX, {
        stiffness: 650,
        damping: 42,
        mass: 0.18,
    });
    const cursorSpringY = useSpring(cursorY, {
        stiffness: 650,
        damping: 42,
        mass: 0.18,
    });
    const smoothX = useSpring(pointerX, {
        stiffness: 100,
        damping: 20,
        mass: 0.5,
    });
    const smoothY = useSpring(pointerY, {
        stiffness: 100,
        damping: 20,
        mass: 0.5,
    });
    const portraitX = useTransform(smoothX, [-0.5, 0.5], [-20, 20]);
    const portraitRotateY = useTransform(smoothX, [-0.5, 0.5], [-7, 7]);
    const portraitRotateX = useTransform(smoothY, [-0.5, 0.5], [6, -6]);
    const spotlightX = useTransform(smoothX, [-0.5, 0.5], ["20%", "80%"]);
    const spotlightY = useTransform(smoothY, [-0.5, 0.5], ["15%", "75%"]);
    const { scrollYProgress: heroScroll } = useScroll({
        target: heroRef,
        offset: ["start start", "end start"],
    });
    const heroTextY = useTransform(heroScroll, [0, 1], [0, 130]);
    const heroTextOpacity = useTransform(heroScroll, [0, 0.75], [1, 0]);
    const heroVisualY = useTransform(heroScroll, [0, 1], [0, -90]);
    const heroVisualScale = useTransform(heroScroll, [0, 1], [1, 1.14]);
    const heroVisualOpacity = useTransform(heroScroll, [0, 0.82], [1, 0]);
    const { scrollYProgress: manifestoScroll } = useScroll({
        target: manifestoRef,
        offset: ["start end", "end start"],
    });
    const giantWordsX = useTransform(manifestoScroll, [0, 1], ["5%", "-10%"]);
    const cvFile = language === "de"
        ? "Dawid-Frankowicz-CV-DE.pdf"
        : "Dawid-Frankowicz-CV.pdf";
     useEffect(() => {
        const lenis = new Lenis({
            duration: 1.05,
            smoothWheel: true,
            wheelMultiplier: 0.9,
            touchMultiplier: 1,
        });
        let frame;
        const raf = (time) => {
            lenis.raf(time);
            frame = requestAnimationFrame(raf);
        };
        frame = requestAnimationFrame(raf);
        return () => {
            cancelAnimationFrame(frame);
            lenis.destroy();
        };
    }, []); 
    useEffect(() => {
        try {
            const saved = localStorage.getItem("portfolio-language");
            if (saved === "en" || saved === "de") {
                setLanguage(saved);
            }
        }
        catch {
            // Language switching still works without localStorage.
        }
    }, []);
    useEffect(() => {
        document.documentElement.lang = language;
    }, [language]);
    useEffect(() => {
        const sections = [
            "about",
            "projects",
            "experience",
            "contact",
        ]
            .map((id) => document.getElementById(id))
            .filter(Boolean);
        const observer = new IntersectionObserver((entries) => {
            const visible = entries
                .filter((entry) => entry.isIntersecting)
                .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
            if (visible[0]?.target?.id) {
                setActiveSection(visible[0].target.id);
            }
        }, {
            rootMargin: "-30% 0px -55% 0px",
            threshold: [0, 0.15, 0.35, 0.6],
        });
        sections.forEach((section) => observer.observe(section));
        return () => observer.disconnect();
    }, []);
    useEffect(() => {
        if (window.matchMedia("(hover: none), (pointer: coarse)").matches) {
            return;
        }
        const handlePointerMove = (event) => {
            cursorX.set(event.clientX);
            cursorY.set(event.clientY);
            setCursorVisible(true);
            const target = event.target;
            const interactive = target instanceof Element &&
                Boolean(target.closest("a, button, input, textarea, .project-media, .engineering-cards article"));
            setCursorActive(interactive);
        };
        const handlePointerLeave = () => {
            setCursorVisible(false);
            setCursorActive(false);
        };
        window.addEventListener("pointermove", handlePointerMove);
        document.documentElement.addEventListener("pointerleave", handlePointerLeave);
        return () => {
            window.removeEventListener("pointermove", handlePointerMove);
            document.documentElement.removeEventListener("pointerleave", handlePointerLeave);
        };
    }, [cursorX, cursorY]);
    function changeLanguage(next) {
        setLanguage(next);
        try {
            localStorage.setItem("portfolio-language", next);
        }
        catch {
            // Optional persistence.
        }
    }
    function handleHeroPointerMove(event) {
        if (reduceMotion)
            return;
        const rect = event.currentTarget.getBoundingClientRect();
        pointerX.set((event.clientX - rect.left) /
            rect.width -
            0.5);
        pointerY.set((event.clientY - rect.top) /
            rect.height -
            0.5);
    }
    function handleHeroPointerLeave() {
        pointerX.set(0);
        pointerY.set(0);
    }
    async function submitContact(event) {
        event.preventDefault();
        const formElement = event.currentTarget;
        const formData = new FormData(formElement);
        setFormState("loading");
        setFeedback("");
        try {
            const response = await fetch("/api/contact", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(Object.fromEntries(formData)),
            });
            const data = await response.json();
            if (!response.ok) {
                setFeedback(data.message ||
                    "The message could not be sent.");
                setFormState("error");
                return;
            }
            formElement.reset();
            setFeedback(data.message ||
                (language === "de"
                    ? "Danke — die Nachricht wurde gesendet."
                    : "Thank you — your message has been sent."));
            setFormState("success");
        }
        catch {
            setFeedback(language === "de"
                ? "Die Nachricht konnte nicht gesendet werden. Bitte später erneut versuchen."
                : "The message could not be sent. Please try again later.");
            setFormState("error");
        }
    }
    return (<>
      <CustomCursor cursorActive={cursorActive} cursorVisible={cursorVisible} cursorSpringX={cursorSpringX} cursorSpringY={cursorSpringY}/>
      <Header menuOpen={menuOpen} setMenuOpen={setMenuOpen} c={c} activeSection={activeSection} language={language} changeLanguage={changeLanguage}/>
      <main>
        <Hero heroRef={heroRef} handleHeroPointerMove={handleHeroPointerMove} handleHeroPointerLeave={handleHeroPointerLeave} reduceMotion={reduceMotion} spotlightX={spotlightX} spotlightY={spotlightY} heroTextY={heroTextY} heroTextOpacity={heroTextOpacity} c={c} cvFile={cvFile} portraitX={portraitX} heroVisualY={heroVisualY} heroVisualScale={heroVisualScale} heroVisualOpacity={heroVisualOpacity} portraitRotateX={portraitRotateX} portraitRotateY={portraitRotateY}/>
        <TechMarquee c={c}/>
        <Manifesto manifestoRef={manifestoRef} c={c} reduceMotion={reduceMotion} giantWordsX={giantWordsX}/>
        <Projects c={c} language={language}/>
        <Experience c={c} resumeTab={resumeTab} setResumeTab={setResumeTab}  language={language}/>
        <Contact c={c} submitContact={submitContact} formState={formState} feedback={feedback}/>
      </main>
      <Footer c={c}/>
    </>);
}
