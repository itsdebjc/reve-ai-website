import { Document, Packer, Paragraph, TextRun, PageBreak, AlignmentType, HeadingLevel, WidthType, Table, TableRow, TableCell, BorderStyle, ShadingType, convertInchesToTwip } from 'docx';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const doc = new Document({
  styles: {
    default: {
      document: {
        run: { font: "Arial", size: 22 }
      }
    },
    paragraphStyles: [
      {
        id: "Heading1",
        name: "Heading 1",
        basedOn: "Normal",
        next: "Normal",
        quickFormat: true,
        run: { size: 32, bold: true, font: "Arial", color: "1a1a1a" },
        paragraph: { spacing: { before: 240, after: 120 }, outlineLevel: 0 }
      },
      {
        id: "Heading2",
        name: "Heading 2",
        basedOn: "Normal",
        next: "Normal",
        quickFormat: true,
        run: { size: 28, bold: true, font: "Arial", color: "2d2d2d" },
        paragraph: { spacing: { before: 200, after: 100 }, outlineLevel: 1 }
      },
      {
        id: "Heading3",
        name: "Heading 3",
        basedOn: "Normal",
        next: "Normal",
        quickFormat: true,
        run: { size: 24, bold: true, font: "Arial", color: "404040" },
        paragraph: { spacing: { before: 120, after: 80 }, outlineLevel: 2 }
      }
    ]
  },
  sections: [{
    properties: {
      page: {
        margin: { top: 1440, right: 1440, bottom: 1440, left: 1440 }
      }
    },
    children: [
      // TITLE PAGE
      new Paragraph({
        children: [new TextRun("")],
        spacing: { before: 500 }
      }),
      new Paragraph({
        children: [new TextRun({
          text: "Reve AI Website Copy Deck",
          bold: true,
          size: 48,
          color: "000000"
        })],
        alignment: AlignmentType.CENTER,
        spacing: { after: 200 }
      }),
      new Paragraph({
        children: [new TextRun({
          text: "Complete copy reference organized by page",
          size: 28,
          color: "666666",
          italics: true
        })],
        alignment: AlignmentType.CENTER,
        spacing: { after: 600 }
      }),
      new Paragraph({
        children: [new TextRun({
          text: `Created: ${new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}`,
          size: 22,
          color: "999999"
        })],
        alignment: AlignmentType.CENTER
      }),
      new Paragraph({ children: [new PageBreak()] }),

      // HOME PAGE
      new Paragraph({
        heading: HeadingLevel.HEADING_1,
        children: [new TextRun("HOME PAGE")]
      }),
      new Paragraph({
        children: [new TextRun({
          text: "Meta Description:",
          bold: true
        })],
        spacing: { after: 40 }
      }),
      new Paragraph({
        children: [new TextRun({
          text: "Reve builds the right AI setup for your team so you can create stronger marketing, move faster, and use AI in a way that fits the work you already do.",
          italics: true,
          color: "555555"
        })],
        spacing: { after: 200 }
      }),

      new Paragraph({
        heading: HeadingLevel.HEADING_2,
        children: [new TextRun("Hero Section")]
      }),
      new Paragraph({
        children: [new TextRun({
          text: "Headline:",
          bold: true
        })],
        spacing: { after: 40 }
      }),
      new Paragraph({
        children: [new TextRun("You're already using AI. We make it worth it.")],
        spacing: { after: 120 }
      }),
      new Paragraph({
        children: [new TextRun({
          text: "Subheading:",
          bold: true
        })],
        spacing: { after: 40 }
      }),
      new Paragraph({
        children: [new TextRun("AI should make your business easier to run. We help you set it up that way.")],
        spacing: { after: 120 }
      }),
      new Paragraph({
        children: [new TextRun({
          text: "CTA:",
          bold: true
        })],
        spacing: { after: 40 }
      }),
      new Paragraph({
        children: [new TextRun("Book a Call →")],
        spacing: { after: 200 }
      }),

      new Paragraph({
        heading: HeadingLevel.HEADING_2,
        children: [new TextRun("The Problem")]
      }),
      new Paragraph({
        children: [new TextRun({
          text: "Section Label:",
          bold: true
        })],
        spacing: { after: 40 }
      }),
      new Paragraph({
        children: [new TextRun("— The Problem")],
        spacing: { after: 120 }
      }),
      new Paragraph({
        children: [new TextRun({
          text: "Headline:",
          bold: true
        })],
        spacing: { after: 40 }
      }),
      new Paragraph({
        children: [new TextRun("Most founders are already using AI. Very few have the right setup behind it.")],
        spacing: { after: 120 }
      }),
      new Paragraph({
        children: [new TextRun({
          text: "Body:",
          bold: true
        })],
        spacing: { after: 40 }
      }),
      new Paragraph({
        children: [new TextRun("The tool is not the problem. The setup is. Without the right foundation, brand voice, clear direction, and repeatable workflows, AI output looks almost right. Almost right still means fixing everything before it goes out.")],
        spacing: { after: 200 }
      }),

      new Paragraph({
        heading: HeadingLevel.HEADING_2,
        children: [new TextRun("Services Section")]
      }),
      new Paragraph({
        children: [new TextRun({
          text: "Section Label:",
          bold: true
        })],
        spacing: { after: 40 }
      }),
      new Paragraph({
        children: [new TextRun("— Services")],
        spacing: { after: 120 }
      }),
      new Paragraph({
        children: [new TextRun({
          text: "Headline:",
          bold: true
        })],
        spacing: { after: 40 }
      }),
      new Paragraph({
        children: [new TextRun("Two ways to work together.")],
        spacing: { after: 200 }
      }),

      new Paragraph({
        heading: HeadingLevel.HEADING_3,
        children: [new TextRun("Service 01 - The AI Build")]
      }),
      new Paragraph({
        children: [new TextRun({
          text: "Tagline:",
          bold: true
        })],
        spacing: { after: 40 }
      }),
      new Paragraph({
        children: [new TextRun("We build your AI system, then train your team to run it.")],
        spacing: { after: 120 }
      }),
      new Paragraph({
        children: [new TextRun({
          text: "Body:",
          bold: true
        })],
        spacing: { after: 40 }
      }),
      new Paragraph({
        children: [new TextRun("A custom build for founder-led service businesses. We capture how your business thinks, build the workflows your team uses every day, and train your people to run it without you.")],
        spacing: { after: 120 }
      }),
      new Paragraph({
        children: [new TextRun({
          text: "Right for you if:",
          bold: true
        })],
        spacing: { after: 80 }
      }),
      new Paragraph({
        children: [new TextRun("• You are experimenting with AI but getting inconsistent results")]
      }),
      new Paragraph({
        children: [new TextRun("• You want a system your team can run without you in the middle")]
      }),
      new Paragraph({
        children: [new TextRun("• You are ready to turn experimentation into something that actually runs")],
        spacing: { after: 120 }
      }),
      new Paragraph({
        children: [new TextRun({
          text: "CTA:",
          bold: true
        })],
        spacing: { after: 40 }
      }),
      new Paragraph({
        children: [new TextRun("Learn More →")],
        spacing: { after: 200 }
      }),

      new Paragraph({
        heading: HeadingLevel.HEADING_3,
        children: [new TextRun("Service 02 - AI Strategy Session")]
      }),
      new Paragraph({
        children: [new TextRun({
          text: "Tagline:",
          bold: true
        })],
        spacing: { after: 40 }
      }),
      new Paragraph({
        children: [new TextRun("A 90-minute working session that shows you exactly where to start.")],
        spacing: { after: 120 }
      }),
      new Paragraph({
        children: [new TextRun({
          text: "Body:",
          bold: true
        })],
        spacing: { after: 40 }
      }),
      new Paragraph({
        children: [new TextRun("Before you build anything, get clarity. We look at your business, your team and how you work — then tell you where AI belongs, what to stop doing manually and what your first three workflows should be.")],
        spacing: { after: 120 }
      }),
      new Paragraph({
        children: [new TextRun({
          text: "Right for you if:",
          bold: true
        })],
        spacing: { after: 80 }
      }),
      new Paragraph({
        children: [new TextRun("• Where AI fits in your business and where it does not")]
      }),
      new Paragraph({
        children: [new TextRun("• A list of what to stop doing manually right now")]
      }),
      new Paragraph({
        children: [new TextRun("• Your three highest-value workflow opportunities")]
      }),
      new Paragraph({
        children: [new TextRun("• A clear next step")],
        spacing: { after: 120 }
      }),
      new Paragraph({
        children: [new TextRun({
          text: "CTA:",
          bold: true
        })],
        spacing: { after: 40 }
      }),
      new Paragraph({
        children: [new TextRun("Start Here →")],
        spacing: { after: 200 }
      }),

      new Paragraph({
        heading: HeadingLevel.HEADING_2,
        children: [new TextRun("Case Studies Preview")]
      }),
      new Paragraph({
        children: [new TextRun({
          text: "Section Label:",
          bold: true
        })],
        spacing: { after: 40 }
      }),
      new Paragraph({
        children: [new TextRun("— Case Studies")],
        spacing: { after: 120 }
      }),
      new Paragraph({
        children: [new TextRun({
          text: "Headline:",
          bold: true
        })],
        spacing: { after: 40 }
      }),
      new Paragraph({
        children: [new TextRun("See how we help teams turn scattered marketing into stronger output.")],
        spacing: { after: 120 }
      }),
      new Paragraph({
        children: [new TextRun({
          text: "Case 1:",
          bold: true
        })],
        spacing: { after: 40 }
      }),
      new Paragraph({
        children: [new TextRun("Turn drafts into a publishing rhythm — Built a founder voice system and editorial workflow for a B2B advisory firm.")],
        spacing: { after: 80 }
      }),
      new Paragraph({
        children: [new TextRun({
          text: "Case 2:",
          bold: true
        })],
        spacing: { after: 40 }
      }),
      new Paragraph({
        children: [new TextRun("Create proposals that sound like your team — Created a proposal workflow tied to a brand intelligence layer.")],
        spacing: { after: 80 }
      }),
      new Paragraph({
        children: [new TextRun({
          text: "Case 3:",
          bold: true
        })],
        spacing: { after: 40 }
      }),
      new Paragraph({
        children: [new TextRun("Build consistent client-facing content — Set up writing rules and content inputs that match how the team actually thinks.")],
        spacing: { after: 120 }
      }),
      new Paragraph({
        children: [new TextRun({
          text: "CTA:",
          bold: true
        })],
        spacing: { after: 40 }
      }),
      new Paragraph({
        children: [new TextRun("Read Case →")],
        spacing: { after: 200 }
      }),

      new Paragraph({
        heading: HeadingLevel.HEADING_2,
        children: [new TextRun("Testimonial")]
      }),
      new Paragraph({
        children: [new TextRun({
          text: "Section Label:",
          bold: true
        })],
        spacing: { after: 40 }
      }),
      new Paragraph({
        children: [new TextRun("— Testimonial")],
        spacing: { after: 120 }
      }),
      new Paragraph({
        children: [new TextRun({
          text: "Headline:",
          bold: true
        })],
        spacing: { after: 40 }
      }),
      new Paragraph({
        children: [new TextRun("Clients come to us for clarity.")],
        spacing: { after: 120 }
      }),
      new Paragraph({
        children: [new TextRun({
          text: "Quote:",
          bold: true
        })],
        spacing: { after: 40 }
      }),
      new Paragraph({
        children: [new TextRun({
          text: '"Reve gave us the structure we didn\'t know we were missing. Our output went from good enough drafts to material we actually want to send."',
          italics: true
        })],
        spacing: { after: 120 }
      }),
      new Paragraph({
        children: [new TextRun({
          text: "Attribution:",
          bold: true
        })],
        spacing: { after: 40 }
      }),
      new Paragraph({
        children: [new TextRun("Founder · Advisory Firm")],
        spacing: { after: 200 }
      }),

      new Paragraph({
        heading: HeadingLevel.HEADING_2,
        children: [new TextRun("FAQ")]
      }),
      new Paragraph({
        children: [new TextRun({
          text: "Section Label:",
          bold: true
        })],
        spacing: { after: 40 }
      }),
      new Paragraph({
        children: [new TextRun("— FAQ")],
        spacing: { after: 120 }
      }),
      new Paragraph({
        children: [new TextRun({
          text: "Headline:",
          bold: true
        })],
        spacing: { after: 40 }
      }),
      new Paragraph({
        children: [new TextRun("Frequently asked questions.")],
        spacing: { after: 120 }
      }),
      new Paragraph({
        children: [new TextRun({
          text: "Q1:",
          bold: true
        })],
        spacing: { after: 40 }
      }),
      new Paragraph({
        children: [new TextRun("What is an AI marketing system?")],
        spacing: { after: 80 }
      }),
      new Paragraph({
        children: [new TextRun({
          text: "A1:",
          bold: true
        })],
        spacing: { after: 40 }
      }),
      new Paragraph({
        children: [new TextRun("The setup behind the work: brand voice, content direction, tools, workflows, and training that help your team use AI well and consistently.")],
        spacing: { after: 120 }
      }),
      new Paragraph({
        children: [new TextRun({
          text: "Q2:",
          bold: true
        })],
        spacing: { after: 40 }
      }),
      new Paragraph({
        children: [new TextRun("How is this different from AI consulting?")],
        spacing: { after: 80 }
      }),
      new Paragraph({
        children: [new TextRun({
          text: "A2:",
          bold: true
        })],
        spacing: { after: 40 }
      }),
      new Paragraph({
        children: [new TextRun("We do not just advise. We build the system or run an AI Strategy Session — both are hands-on and built around your business, not generic frameworks.")],
        spacing: { after: 120 }
      }),
      new Paragraph({
        children: [new TextRun({
          text: "Q3:",
          bold: true
        })],
        spacing: { after: 40 }
      }),
      new Paragraph({
        children: [new TextRun("What kinds of businesses do you work with?")],
        spacing: { after: 80 }
      }),
      new Paragraph({
        children: [new TextRun({
          text: "A3:",
          bold: true
        })],
        spacing: { after: 40 }
      }),
      new Paragraph({
        children: [new TextRun("Founder-led service businesses: agencies, consultancies, creative and digital firms. If your team creates value through thinking, writing and client delivery, this is built for you.")],
        spacing: { after: 200 }
      }),

      // SERVICES PAGE
      new Paragraph({ children: [new PageBreak()] }),
      new Paragraph({
        heading: HeadingLevel.HEADING_1,
        children: [new TextRun("SERVICES PAGE")]
      }),
      new Paragraph({
        children: [new TextRun({
          text: "Meta Description:",
          bold: true
        })],
        spacing: { after: 40 }
      }),
      new Paragraph({
        children: [new TextRun({
          text: "A custom AI system built for your business, or a focused session to show you exactly where to start.",
          italics: true,
          color: "555555"
        })],
        spacing: { after: 200 }
      }),

      new Paragraph({
        heading: HeadingLevel.HEADING_2,
        children: [new TextRun("Hero Section")]
      }),
      new Paragraph({
        children: [new TextRun({
          text: "Section Label:",
          bold: true
        })],
        spacing: { after: 40 }
      }),
      new Paragraph({
        children: [new TextRun("— Services")],
        spacing: { after: 120 }
      }),
      new Paragraph({
        children: [new TextRun({
          text: "Headline:",
          bold: true
        })],
        spacing: { after: 40 }
      }),
      new Paragraph({
        children: [new TextRun("Two ways to work together.")],
        spacing: { after: 120 }
      }),
      new Paragraph({
        children: [new TextRun({
          text: "Subheading:",
          bold: true
        })],
        spacing: { after: 40 }
      }),
      new Paragraph({
        children: [new TextRun("A custom AI system built for your business, or a focused session to show you exactly where to start.")],
        spacing: { after: 200 }
      }),

      new Paragraph({
        heading: HeadingLevel.HEADING_2,
        children: [new TextRun("Service 01 - The AI Build (Detailed)")]
      }),
      new Paragraph({
        children: [new TextRun({
          text: "Badge:",
          bold: true
        })],
        spacing: { after: 40 }
      }),
      new Paragraph({
        children: [new TextRun("SERVICE 01 · CUSTOM BUILD · TEAM TRAINING")],
        spacing: { after: 120 }
      }),
      new Paragraph({
        children: [new TextRun({
          text: "Headline:",
          bold: true
        })],
        spacing: { after: 40 }
      }),
      new Paragraph({
        children: [new TextRun("The AI Build")],
        spacing: { after: 120 }
      }),
      new Paragraph({
        children: [new TextRun({
          text: "Tagline:",
          bold: true
        })],
        spacing: { after: 40 }
      }),
      new Paragraph({
        children: [new TextRun("We build your AI system, then train your team to run it.")],
        spacing: { after: 120 }
      }),
      new Paragraph({
        children: [new TextRun({
          text: "Body:",
          bold: true
        })],
        spacing: { after: 40 }
      }),
      new Paragraph({
        children: [new TextRun("A custom build for founder-led service businesses. We capture how your business thinks, build the workflows your team uses every day, and train your people to run it without you.")],
        spacing: { after: 120 }
      }),
      new Paragraph({
        children: [new TextRun({
          text: "What's Included:",
          bold: true
        })],
        spacing: { after: 80 }
      }),
      new Paragraph({
        children: [new TextRun({
          text: "Brand Intelligence Foundation",
          bold: true
        }), new TextRun(" — Your voice, positioning and content rules captured and ready to use.")]
      }),
      new Paragraph({
        children: [new TextRun({
          text: "3 to 5 Custom Workflows",
          bold: true
        }), new TextRun(" — Built around the work that matters most to your team.")]
      }),
      new Paragraph({
        children: [new TextRun({
          text: "Tool Setup",
          bold: true
        }), new TextRun(" — Working environment configured from day one so the system runs cleanly.")]
      }),
      new Paragraph({
        children: [new TextRun({
          text: "Team Training",
          bold: true
        }), new TextRun(" — Inside the real system, using real work, so your team can run it with confidence.")],
        spacing: { after: 120 }
      }),
      new Paragraph({
        children: [new TextRun({
          text: "Right For You If:",
          bold: true
        })],
        spacing: { after: 80 }
      }),
      new Paragraph({
        children: [new TextRun("• You are experimenting with AI but getting inconsistent results")]
      }),
      new Paragraph({
        children: [new TextRun("• You want a system your team can run without you in the middle")]
      }),
      new Paragraph({
        children: [new TextRun("• You are ready to turn experimentation into something that actually runs")],
        spacing: { after: 120 }
      }),
      new Paragraph({
        children: [new TextRun({
          text: "CTA:",
          bold: true
        })],
        spacing: { after: 40 }
      }),
      new Paragraph({
        children: [new TextRun("Learn More →")],
        spacing: { after: 200 }
      }),

      new Paragraph({
        heading: HeadingLevel.HEADING_2,
        children: [new TextRun("Service 02 - AI Strategy Session (Detailed)")]
      }),
      new Paragraph({
        children: [new TextRun({
          text: "Badge:",
          bold: true
        })],
        spacing: { after: 40 }
      }),
      new Paragraph({
        children: [new TextRun("SERVICE 02 · 90-MINUTE WORKING SESSION")],
        spacing: { after: 120 }
      }),
      new Paragraph({
        children: [new TextRun({
          text: "Headline:",
          bold: true
        })],
        spacing: { after: 40 }
      }),
      new Paragraph({
        children: [new TextRun("AI Strategy Session")],
        spacing: { after: 120 }
      }),
      new Paragraph({
        children: [new TextRun({
          text: "Tagline:",
          bold: true
        })],
        spacing: { after: 40 }
      }),
      new Paragraph({
        children: [new TextRun("A 90-minute working session that shows you exactly where to start.")],
        spacing: { after: 120 }
      }),
      new Paragraph({
        children: [new TextRun({
          text: "Body:",
          bold: true
        })],
        spacing: { after: 40 }
      }),
      new Paragraph({
        children: [new TextRun("Before you build anything, get clarity. We look at your business, your team and how you work — then tell you where AI belongs, what to stop doing manually and what your first three workflows should be.")],
        spacing: { after: 120 }
      }),
      new Paragraph({
        children: [new TextRun({
          text: "You Leave With:",
          bold: true
        })],
        spacing: { after: 80 }
      }),
      new Paragraph({
        children: [new TextRun("• Where AI fits in your business and where it does not")]
      }),
      new Paragraph({
        children: [new TextRun("• A list of what to stop doing manually right now")]
      }),
      new Paragraph({
        children: [new TextRun("• Your three highest-value workflow opportunities")]
      }),
      new Paragraph({
        children: [new TextRun("• A clear next step")],
        spacing: { after: 120 }
      }),
      new Paragraph({
        children: [new TextRun({
          text: "CTA:",
          bold: true
        })],
        spacing: { after: 40 }
      }),
      new Paragraph({
        children: [new TextRun("Start Here →")],
        spacing: { after: 200 }
      }),

      // LEARNING PAGE
      new Paragraph({ children: [new PageBreak()] }),
      new Paragraph({
        heading: HeadingLevel.HEADING_1,
        children: [new TextRun("LEARNING PAGE")]
      }),
      new Paragraph({
        children: [new TextRun({
          text: "Meta Description:",
          bold: true
        })],
        spacing: { after: 40 }
      }),
      new Paragraph({
        children: [new TextRun({
          text: "The AI Signal: practical insights on how expert-led teams are using AI to make marketing stronger, faster, and more consistent.",
          italics: true,
          color: "555555"
        })],
        spacing: { after: 200 }
      }),

      new Paragraph({
        heading: HeadingLevel.HEADING_2,
        children: [new TextRun("Hero Section")]
      }),
      new Paragraph({
        children: [new TextRun({
          text: "Section Label:",
          bold: true
        })],
        spacing: { after: 40 }
      }),
      new Paragraph({
        children: [new TextRun("— Learning")],
        spacing: { after: 120 }
      }),
      new Paragraph({
        children: [new TextRun({
          text: "Headline:",
          bold: true
        })],
        spacing: { after: 40 }
      }),
      new Paragraph({
        children: [new TextRun("The AI Signal.")],
        spacing: { after: 120 }
      }),
      new Paragraph({
        children: [new TextRun({
          text: "Subheading:",
          bold: true
        })],
        spacing: { after: 40 }
      }),
      new Paragraph({
        children: [new TextRun("News, frameworks, and practical insights from the front lines of AI marketing — for teams that want to use it well.")],
        spacing: { after: 120 }
      }),
      new Paragraph({
        children: [new TextRun({
          text: "Byline:",
          bold: true
        })],
        spacing: { after: 40 }
      }),
      new Paragraph({
        children: [new TextRun("By The Reve Team")],
        spacing: { after: 200 }
      }),

      // CASE STUDIES PAGE
      new Paragraph({ children: [new PageBreak()] }),
      new Paragraph({
        heading: HeadingLevel.HEADING_1,
        children: [new TextRun("CASE STUDIES PAGE")]
      }),
      new Paragraph({
        children: [new TextRun({
          text: "Meta Description:",
          bold: true
        })],
        spacing: { after: 40 }
      }),
      new Paragraph({
        children: [new TextRun({
          text: "Real systems, real outcomes. See how expert-led teams use Reve to make AI a dependable part of their marketing workflow.",
          italics: true,
          color: "555555"
        })],
        spacing: { after: 200 }
      }),

      new Paragraph({
        heading: HeadingLevel.HEADING_2,
        children: [new TextRun("Hero Section")]
      }),
      new Paragraph({
        children: [new TextRun({
          text: "Section Label:",
          bold: true
        })],
        spacing: { after: 40 }
      }),
      new Paragraph({
        children: [new TextRun("— Case Studies")],
        spacing: { after: 120 }
      }),
      new Paragraph({
        children: [new TextRun({
          text: "Headline:",
          bold: true
        })],
        spacing: { after: 40 }
      }),
      new Paragraph({
        children: [new TextRun("Real systems. Real outcomes.")],
        spacing: { after: 120 }
      }),
      new Paragraph({
        children: [new TextRun({
          text: "Subheading:",
          bold: true
        })],
        spacing: { after: 40 }
      }),
      new Paragraph({
        children: [new TextRun("A look at how expert-led teams are using Reve to make AI a dependable part of their marketing workflow.")],
        spacing: { after: 200 }
      }),

      new Paragraph({
        heading: HeadingLevel.HEADING_2,
        children: [new TextRun("Case Study 01 - Advisory Firm")]
      }),
      new Paragraph({
        children: [new TextRun({
          text: "Industry:",
          bold: true
        })],
        spacing: { after: 40 }
      }),
      new Paragraph({
        children: [new TextRun("Professional Services")],
        spacing: { after: 120 }
      }),
      new Paragraph({
        children: [new TextRun({
          text: "Stat:",
          bold: true
        })],
        spacing: { after: 40 }
      }),
      new Paragraph({
        children: [new TextRun("60% Faster Proposals")],
        spacing: { after: 120 }
      }),
      new Paragraph({
        children: [new TextRun({
          text: "Challenge:",
          bold: true
        })],
        spacing: { after: 40 }
      }),
      new Paragraph({
        children: [new TextRun("Senior partners were spending 8+ hours per proposal, and AI drafts felt generic.")],
        spacing: { after: 120 }
      }),
      new Paragraph({
        children: [new TextRun({
          text: "Outcome:",
          bold: true
        })],
        spacing: { after: 40 }
      }),
      new Paragraph({
        children: [new TextRun("Custom proposal workflow cut drafting time by 60% while improving win rate on tier-one pursuits.")],
        spacing: { after: 200 }
      }),

      new Paragraph({
        heading: HeadingLevel.HEADING_2,
        children: [new TextRun("Case Study 02 - Boutique Agency")]
      }),
      new Paragraph({
        children: [new TextRun({
          text: "Industry:",
          bold: true
        })],
        spacing: { after: 40 }
      }),
      new Paragraph({
        children: [new TextRun("Creative & Strategy")],
        spacing: { after: 120 }
      }),
      new Paragraph({
        children: [new TextRun({
          text: "Stat:",
          bold: true
        })],
        spacing: { after: 40 }
      }),
      new Paragraph({
        children: [new TextRun("3× Publishing Cadence")],
        spacing: { after: 120 }
      }),
      new Paragraph({
        children: [new TextRun({
          text: "Challenge:",
          bold: true
        })],
        spacing: { after: 40 }
      }),
      new Paragraph({
        children: [new TextRun("Inconsistent voice across thought leadership made it hard to scale content production.")],
        spacing: { after: 120 }
      }),
      new Paragraph({
        children: [new TextRun({
          text: "Outcome:",
          bold: true
        })],
        spacing: { after: 40 }
      }),
      new Paragraph({
        children: [new TextRun("Brand intelligence system unified voice across 4 senior contributors and tripled publishing cadence.")],
        spacing: { after: 200 }
      }),

      new Paragraph({
        heading: HeadingLevel.HEADING_2,
        children: [new TextRun("Case Study 03 - B2B SaaS")]
      }),
      new Paragraph({
        children: [new TextRun({
          text: "Industry:",
          bold: true
        })],
        spacing: { after: 40 }
      }),
      new Paragraph({
        children: [new TextRun("Technology")],
        spacing: { after: 120 }
      }),
      new Paragraph({
        children: [new TextRun({
          text: "Stat:",
          bold: true
        })],
        spacing: { after: 40 }
      }),
      new Paragraph({
        children: [new TextRun("80% Less Editing")],
        spacing: { after: 120 }
      }),
      new Paragraph({
        children: [new TextRun({
          text: "Challenge:",
          bold: true
        })],
        spacing: { after: 40 }
      }),
      new Paragraph({
        children: [new TextRun("Marketing team relied on AI but spent more time fixing output than producing it.")],
        spacing: { after: 120 }
      }),
      new Paragraph({
        children: [new TextRun({
          text: "Outcome:",
          bold: true
        })],
        spacing: { after: 40 }
      }),
      new Paragraph({
        children: [new TextRun("End-to-end workflow for case studies and launch content reduced editing rounds from 5 to 1.")]
      })
    ]
  }]
});

Packer.toBuffer(doc).then(buffer => {
  const filePath = `${__dirname}/Reve_AI_Copy_Deck.docx`;
  fs.writeFileSync(filePath, buffer);
  console.log(`✅ Copy deck created: ${filePath}`);
});
